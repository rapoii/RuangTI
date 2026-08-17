export type Role = "user" | "assistant" | "system";

export type ModelOption = "ti-optima" | "ti-lean" | "ti-sim";

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
  messages: Message[];
  createdAt: number;
  updatedAt: number;
  pinned?: boolean;
}

export type Theme = "light" | "dark";

export type TimeBucket = "Hari ini" | "Kemarin" | "7 hari terakhir" | "Lebih lama";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: "Free" | "Pro" | "Enterprise";
  isLoggedIn: boolean;
  joinedAt?: number;
}
