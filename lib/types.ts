export type Role = "user" | "assistant" | "system";

export type ModelOption = "ti-optima" | "ti-lean" | "ti-sim";

export type Theme = "light" | "dark";

export type TimeBucket = "Hari ini" | "Kemarin" | "7 hari terakhir" | "Lebih lama";

export interface Message {
  id: string;
  role: Role;
  content: string;
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

export interface PresetPrompt {
  title: string;
  prompt: string;
  category: "PTLF" | "Lean" | "Inventory" | "Ergonomi" | "Umum";
  iconName: string;
}
