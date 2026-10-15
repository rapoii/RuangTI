export type ThinkingEffort = "pro" | "fast";

export interface ThinkingOption {
  id: ThinkingEffort;
  modelId: string;
  label: string;
  shortLabel: string;
  description: string;
  badge: string;
}

export const THINKING_EFFORT_OPTIONS: ThinkingOption[] = [
  {
    id: "pro",
    modelId: "mimo-v2.6-pro@default",
    label: "RTI Pro",
    shortLabel: "RTI Pro",
    description: "Penalaran mendalam untuk analisis, optimasi sistem & pembuktian matematis",
    badge: "Thinking"
  },
  {
    id: "fast",
    modelId: "mimo-v2.6-pro@none",
    label: "RTI Fast",
    shortLabel: "RTI Fast",
    description: "Respon instan & tangkas tanpa proses penalaran bertahap",
    badge: "Cepat"
  }
];

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  thinking?: string;
  timestamp: number;
}

export interface UploadedDoc {
  filename: string;
  size: number;
  text: string;
}
