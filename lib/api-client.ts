import { Conversation, Message, UserProfile } from "./types";

function getApiBase(): string {
  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.hostname}:8000`;
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
}

export const DEFAULT_USER: UserProfile = {
  id: "usr_rafi",
  name: "Rafi Permana",
  email: "rafi.permana@untirta.ac.id",
  plan: "Pro",
  isLoggedIn: true,
  joinedAt: Date.now() - 30 * 24 * 60 * 60 * 1000,
};

export const GUEST_USER: UserProfile = {
  id: "usr_guest",
  name: "Tamu RuangTI",
  email: "guest@ruangti.ac.id",
  plan: "Free",
  isLoggedIn: false,
};

const USER_PROFILE_KEY = "ruangti_user_profile_v1";

export function loadUserProfile(): UserProfile {
  if (typeof window === "undefined") return DEFAULT_USER;
  try {
    const raw = localStorage.getItem(USER_PROFILE_KEY);
    if (!raw) {
      saveUserProfile(DEFAULT_USER);
      return DEFAULT_USER;
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_USER;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error("Gagal menyimpan profil:", e);
  }
}

// ================= BACKEND API CLIENT =================

export async function fetchConversationsFromBackend(): Promise<Conversation[]> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations`);
    if (!res.ok) throw new Error("Gagal mengambil percakapan dari backend");
    const data = await res.json();
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      modelId: item.model_id,
      pinned: item.is_pinned,
      createdAt: new Date(item.created_at).getTime(),
      updatedAt: new Date(item.updated_at).getTime(),
      messages: [],
    }));
  } catch (err) {
    console.warn("Backend offline, fallback ke empty list:", err);
    return [];
  }
}

export async function createConversationOnBackend(
  title: string = "Konsultasi TI Baru",
  modelId: string = "TI-Optima Pro"
): Promise<Conversation | null> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, model_id: modelId }),
    });
    if (!res.ok) throw new Error("Gagal membuat percakapan");
    const item = await res.json();
    return {
      id: item.id,
      title: item.title,
      modelId: item.model_id,
      pinned: item.is_pinned,
      createdAt: new Date(item.created_at).getTime(),
      updatedAt: new Date(item.updated_at).getTime(),
      messages: [],
    };
  } catch (err) {
    console.error("Gagal create conversation di backend:", err);
    return null;
  }
}

export async function deleteConversationOnBackend(id: string): Promise<boolean> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations/${id}`, {
      method: "DELETE",
    });
    return res.ok;
  } catch (err) {
    console.error("Gagal delete conversation di backend:", err);
    return false;
  }
}

export async function renameConversationOnBackend(
  id: string,
  title: string
): Promise<boolean> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    return res.ok;
  } catch (err) {
    console.error("Gagal rename conversation di backend:", err);
    return false;
  }
}

export async function togglePinConversationOnBackend(
  id: string,
  isPinned: boolean
): Promise<boolean> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_pinned: isPinned }),
    });
    return res.ok;
  } catch (err) {
    console.error("Gagal update pin conversation di backend:", err);
    return false;
  }
}

export async function fetchMessagesFromBackend(
  conversationId: string
): Promise<Message[]> {
  try {
    const res = await fetch(`${getApiBase()}/api/messages/${conversationId}`);
    if (!res.ok) throw new Error("Gagal mengambil pesan");
    const data = await res.json();
    return data.map((m: any) => ({
      id: m.id,
      role: m.role,
      content: m.content,
      createdAt: new Date(m.created_at).getTime(),
    }));
  } catch (err) {
    console.error("Gagal fetch messages:", err);
    return [];
  }
}

export async function saveMessageToBackend(
  conversationId: string,
  role: string,
  content: string
): Promise<Message | null> {
  try {
    const res = await fetch(`${getApiBase()}/api/messages/${conversationId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, content }),
    });
    if (!res.ok) throw new Error("Gagal menyimpan pesan");
    const m = await res.json();
    return {
      id: m.id,
      role: m.role,
      content: m.content,
      createdAt: new Date(m.created_at).getTime(),
    };
  } catch (err) {
    console.error("Gagal save message ke backend:", err);
    return null;
  }
}
