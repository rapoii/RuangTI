export type ThinkingEffort = "none" | "low" | "medium" | "high" | "xhigh";

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
    id: "none",
    modelId: "mimo-v2.6-flash@none",
    label: "Non-Thinking (Default)",
    shortLabel: "Non-Thinking",
    description: "Respon instan & tangkas tanpa proses penalaran bertahap",
    badge: "Cepat"
  },
  {
    id: "low",
    modelId: "mimo-v2.6-flash@default",
    label: "Low Effort",
    shortLabel: "Low",
    description: "Penalaran ringan untuk kueri ringkas & kalkulasi sederhana",
    badge: "Low"
  },
  {
    id: "medium",
    modelId: "mimo-v2.6-flash@max",
    label: "Medium Effort",
    shortLabel: "Medium",
    description: "Penalaran berimbang untuk analisis & metode terstruktur",
    badge: "Medium"
  },
  {
    id: "high",
    modelId: "mimo-v2.6-pro@default",
    label: "High Effort",
    shortLabel: "High",
    description: "Penalaran mendalam untuk optimasi sistem & simulasi kompleks",
    badge: "High"
  },
  {
    id: "xhigh",
    modelId: "mimo-v2.6-pro@max",
    label: "Extra High Effort",
    shortLabel: "X-High",
    description: "Penalaran maksimal untuk riset operasi & pembuktian matematis",
    badge: "X-High"
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
