import { Conversation, Message, UserProfile } from "./types";

function getApiBase(): string {
  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.hostname}:8000`;
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone?: string;
  address?: string;
  postal_code?: string;
  role?: string;
  institution?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthSuccessResponse {
  access_token: string;
  token_type: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    postal_code?: string;
    role: string;
    institution: string;
    plan: string;
    created_at: string;
  };
}

export async function registerToBackend(payload: RegisterPayload): Promise<AuthSuccessResponse> {
  const res = await fetch(`${getApiBase()}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || "Gagal melakukan pendaftaran akun.");
  }
  return data as AuthSuccessResponse;
}

export async function loginToBackend(payload: LoginPayload): Promise<AuthSuccessResponse> {
  const res = await fetch(`${getApiBase()}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || "Email atau kata sandi tidak valid.");
  }
  return data as AuthSuccessResponse;
}

export async function fetchConversationsFromBackend(): Promise<Conversation[]> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations`);
    if (!res.ok) throw new Error("Failed to fetch conversations");
    const data = await res.json();
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      modelId: item.model_id,
      isPinned: item.is_pinned,
      pinned: item.is_pinned,
      createdAt: new Date(item.created_at).getTime(),
      updatedAt: new Date(item.updated_at).getTime(),
    }));
  } catch (err) {
    console.error("Backend fetch error:", err);
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
    if (!res.ok) throw new Error("Failed to create conversation");
    const item = await res.json();
    return {
      id: item.id,
      title: item.title,
      modelId: item.model_id,
      isPinned: item.is_pinned,
      pinned: item.is_pinned,
      createdAt: new Date(item.created_at).getTime(),
      updatedAt: new Date(item.updated_at).getTime(),
    };
  } catch (err) {
    console.error("Backend create conversation error:", err);
    return null;
  }
}

export async function updateConversationOnBackend(
  conversationId: string,
  updates: { title?: string; is_pinned?: boolean; model_id?: string }
): Promise<boolean> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations/${conversationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    return res.ok;
  } catch (err) {
    console.error("Backend update conversation error:", err);
    return false;
  }
}

export async function renameConversationOnBackend(
  conversationId: string,
  newTitle: string
): Promise<boolean> {
  return updateConversationOnBackend(conversationId, { title: newTitle });
}

export async function togglePinConversationOnBackend(
  conversationId: string,
  isPinned: boolean
): Promise<boolean> {
  return updateConversationOnBackend(conversationId, { is_pinned: isPinned });
}

export async function deleteConversationOnBackend(conversationId: string): Promise<boolean> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations/${conversationId}`, {
      method: "DELETE",
    });
    return res.ok;
  } catch (err) {
    console.error("Backend delete conversation error:", err);
    return false;
  }
}

export async function fetchMessagesFromBackend(conversationId: string): Promise<Message[]> {
  try {
    const res = await fetch(`${getApiBase()}/api/messages/${conversationId}`);
    if (!res.ok) throw new Error("Failed to fetch messages");
    const data = await res.json();
    return data.map((item: any) => ({
      id: item.id,
      role: item.role,
      content: item.content,
      createdAt: new Date(item.created_at).getTime(),
    }));
  } catch (err) {
    console.error("Backend fetch messages error:", err);
    return [];
  }
}

export async function saveMessageToBackend(
  conversationId: string,
  role: "user" | "assistant" | "system",
  content: string
): Promise<Message | null> {
  try {
    const res = await fetch(`${getApiBase()}/api/messages/${conversationId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, content }),
    });
    if (!res.ok) throw new Error("Failed to save message");
    const item = await res.json();
    return {
      id: item.id,
      role: item.role,
      content: item.content,
      createdAt: new Date(item.created_at).getTime(),
    };
  } catch (err) {
    console.error("Backend save message error:", err);
    return null;
  }
}
