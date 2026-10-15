import type { ChatMessage } from './types';

export interface StreamChatOptions {
  message: string;
  modelId?: string;
  documentContext?: string;
  history?: ChatMessage[];
  onChunk: (chunk: string) => void;
  onDone: () => void;
  onError: (err: Error) => void;
  signal?: AbortSignal;
}

export async function streamChat(options: StreamChatOptions): Promise<void> {
  const { message, modelId, documentContext, history, onChunk, onDone, onError, signal } = options;

  try {
    const formattedHistory = (history || [])
      .filter((m) => m.role === 'user' || m.role === 'assistant')
      .slice(-6)
      .map((m) => ({
        role: m.role,
        content: m.content,
      }));

    const res = await fetch('/api/chat/stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        model_id: modelId,
        document_context: documentContext,
        history: formattedHistory,
      }),
      signal,
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`HTTP ${res.status}: ${errText || res.statusText}`);
    }

    if (!res.body) {
      throw new Error('Response body is empty');
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith('data: ')) continue;

        const dataStr = trimmed.slice(6).trim();
        if (dataStr === '[DONE]') {
          onDone();
          return;
        }

        try {
          const parsed = JSON.parse(dataStr);
          if (parsed && typeof parsed.chunk === 'string') {
            onChunk(parsed.chunk);
          }
        } catch {
          // Ignore JSON parse error on non-json chunks
        }
      }
    }

    onDone();
  } catch (err: any) {
    if (signal?.aborted) {
      onDone();
      return;
    }
    onError(err);
  }
}
