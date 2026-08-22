export type Role = "user" | "assistant" | "system";

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
    modelId: "gcli/grok-4.6",
    label: "Non-Thinking (Default)",
    shortLabel: "Non-Thinking",
    description: "Respon instan & tangkas tanpa proses penalaran bertahap",
    badge: "Cepat"
  },
  {
    id: "low",
    modelId: "gcli/grok-4.6-low",
    label: "Low Effort",
    shortLabel: "Low",
    description: "Penalaran ringan untuk kueri ringkas & kalkulasi sederhana",
    badge: "Low"
  },
  {
    id: "medium",
    modelId: "gcli/grok-4.6-medium",
    label: "Medium Effort",
    shortLabel: "Medium",
    description: "Penalaran berimbang untuk analisis & metode terstruktur",
    badge: "Medium"
  },
  {
    id: "high",
    modelId: "gcli/grok-4.6-high",
    label: "High Effort",
    shortLabel: "High",
    description: "Penalaran mendalam untuk optimasi sistem & simulasi kompleks",
    badge: "High"
  },
  {
    id: "xhigh",
    modelId: "gcli/grok-4.6-xhigh",
    label: "Extra High Effort",
    shortLabel: "X-High",
    description: "Penalaran maksimal untuk riset operasi & pembuktian matematis",
    badge: "X-High"
  }
];

export type ModelOption = "ti-optima" | "ti-lean" | "ti-sim";

export type TimeBucket = "Hari ini" | "Kemarin" | "7 hari terakhir" | "Lebih lama";

export interface AttachedDocument {
  id: string;
  name: string;
  size: number;
  ext: string;
  url: string;
  type: string;
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  images?: string[];
  documents?: AttachedDocument[];
  createdAt: number;
  feedback?: "up" | "down" | null;
}

export interface Conversation {
  id: string;
  title: string;
  updatedAt: number;
  createdAt: number;
  modelId: string;
  isPinned?: boolean;
  pinned?: boolean;
  isPublic?: boolean;
  shareId?: string;
  messages?: Message[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  postalCode?: string;
  role?: string;
  institution?: string;
  plan: string;
  isLoggedIn: boolean;
  activeModel?: string;
  avatarUrl?: string;
  token?: string;
}

