package ai

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

type ChatMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type ChatRequest struct {
	Model       string        `json:"model"`
	Messages    []ChatMessage `json:"messages"`
	Temperature float64       `json:"temperature,omitempty"`
}

type Client struct {
	PrimaryURL    string
	FallbackURL   string
	FallbackModel string
	HTTPClient    *http.Client
}

func NewClient(primaryURL, fallbackURL, fallbackModel string) *Client {
	return &Client{
		PrimaryURL:    strings.TrimRight(primaryURL, "/"),
		FallbackURL:   strings.TrimRight(fallbackURL, "/"),
		FallbackModel: fallbackModel,
		HTTPClient: &http.Client{
			Timeout: 5 * time.Minute,
		},
	}
}

var legacyModelMap = map[string]string{
	"gcli/grok-4.6":             "mimo-v2.6-flash@none",
	"gcli/grok-4.6-low":         "mimo-v2.6-flash@default",
	"gcli/grok-4.6-medium":      "mimo-v2.6-flash@max",
	"gcli/grok-4.6-high":        "mimo-v2.6-pro@default",
	"gcli/grok-4.6-xhigh":       "mimo-v2.6-pro@max",
	"gcli/grok-4.5-high(xhigh)": "mimo-v2.6-pro@max",
}

// ParseModelSpec memisahkan spesifikasi format "model@effort"
func ParseModelSpec(spec string) (model string, effort string, isThinking bool) {
	raw := strings.TrimSpace(spec)
	if mapped, ok := legacyModelMap[raw]; ok {
		raw = mapped
	}

	parts := strings.Split(raw, "@")
	model = strings.TrimSpace(parts[0])
	if len(parts) > 1 {
		effort = strings.TrimSpace(parts[1])
	}

	effLower := strings.ToLower(effort)
	isThinking = effort != "" && effLower != "none" && effLower != "off" && effLower != "false" && effLower != "0"
	return model, effort, isThinking
}

type openAIStreamPayload struct {
	Model           string        `json:"model"`
	Messages        []ChatMessage `json:"messages"`
	Stream          bool          `json:"stream"`
	Temperature     float64       `json:"temperature"`
	ReasoningEffort string        `json:"reasoning_effort,omitempty"`
}

type streamDelta struct {
	Content          string `json:"content"`
	ReasoningContent string `json:"reasoning_content"`
	Reasoning        string `json:"reasoning"`
	Thinking         string `json:"thinking"`
}

type streamChoice struct {
	Delta streamDelta `json:"delta"`
}

type streamChunk struct {
	Choices []streamChoice `json:"choices"`
}

func (c *Client) streamFromEndpoint(ctx context.Context, baseURL string, payload openAIStreamPayload, onChunk func(string) error) error {
	url := fmt.Sprintf("%s/chat/completions", baseURL)
	bodyBytes, err := json.Marshal(payload)
	if err != nil {
		return fmt.Errorf("marshal request: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, url, bytes.NewReader(bodyBytes))
	if err != nil {
		return fmt.Errorf("new request: %w", err)
	}
	req.Header.Set("Content-Type", "application/json")

	resp, err := c.HTTPClient.Do(req)
	if err != nil {
		return fmt.Errorf("request to %s error: %w", baseURL, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		errBody, _ := io.ReadAll(resp.Body)
		return fmt.Errorf("endpoint %s returned status %d: %s", baseURL, resp.StatusCode, string(errBody))
	}

	scanner := bufio.NewScanner(resp.Body)
	// Naikkan buffer scanner jika token besar
	buf := make([]byte, 64*1024)
	scanner.Buffer(buf, 1024*1024)

	inReasoning := false

	for scanner.Scan() {
		line := scanner.Text()
		if !strings.HasPrefix(line, "data: ") {
			continue
		}
		dataStr := strings.TrimSpace(strings.TrimPrefix(line, "data: "))
		if dataStr == "[DONE]" {
			if inReasoning {
				if err := onChunk("</think>\n\n"); err != nil {
					return err
				}
				inReasoning = false
			}
			break
		}

		var chunk streamChunk
		if err := json.Unmarshal([]byte(dataStr), &chunk); err != nil {
			continue
		}
		if len(chunk.Choices) == 0 {
			continue
		}

		delta := chunk.Choices[0].Delta
		reasoning := delta.ReasoningContent
		if reasoning == "" {
			reasoning = delta.Reasoning
		}
		if reasoning == "" {
			reasoning = delta.Thinking
		}

		content := delta.Content

		// Deteksi model yang mengirimkan pemisah <think> di dalam content
		if strings.Contains(content, "<think>") && !inReasoning {
			inReasoning = true
		}
		if strings.Contains(content, "</think>") && inReasoning {
			inReasoning = false
		}

		if reasoning != "" {
			if !inReasoning {
				if err := onChunk("<think>\n"); err != nil {
					return err
				}
				inReasoning = true
			}
			if err := onChunk(reasoning); err != nil {
				return err
			}
		} else if content != "" {
			if inReasoning && !strings.Contains(content, "<think>") && !strings.Contains(content, "</think>") {
				if err := onChunk("\n</think>\n\n"); err != nil {
					return err
				}
				inReasoning = false
			}
			if err := onChunk(content); err != nil {
				return err
			}
		}
	}

	if inReasoning {
		if err := onChunk("\n</think>\n\n"); err != nil {
			return err
		}
	}

	return scanner.Err()
}

func (c *Client) StreamChat(ctx context.Context, req ChatRequest, onChunk func(string) error) error {
	targetModel, effort, _ := ParseModelSpec(req.Model)
	if targetModel == "" {
		targetModel = "mimo-v2.6-pro"
	}

	payload := openAIStreamPayload{
		Model:           targetModel,
		Messages:        req.Messages,
		Stream:          true,
		Temperature:     req.Temperature,
		ReasoningEffort: effort,
	}

	// 1. Coba Primary (Mimoly)
	err := c.streamFromEndpoint(ctx, c.PrimaryURL, payload, onChunk)
	if err == nil {
		return nil
	}

	// 2. Jika FallbackURL tersedia, coba fallback (9Router)
	if c.FallbackURL != "" {
		fbModel, fbEffort, _ := ParseModelSpec(c.FallbackModel)
		fbPayload := payload
		fbPayload.Model = fbModel
		fbPayload.ReasoningEffort = fbEffort

		fbErr := c.streamFromEndpoint(ctx, c.FallbackURL, fbPayload, onChunk)
		if fbErr == nil {
			return nil
		}
		return fmt.Errorf("primary gateway (%s: %v) and fallback (%s: %v) both failed", c.PrimaryURL, err, c.FallbackURL, fbErr)
	}

	return err
}
