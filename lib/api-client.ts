import { authClient } from "./auth-client";
import { Conversation, Message, UserProfile } from "./types";

function getApiBase(): string {
  if (typeof window !== "undefined") {
    // Check if running in browser (either on custom domain or localhost)
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return `${window.location.protocol}//${window.location.hostname}:8000`;
    }
    // In production domain (ruangti.varevastudio.tech), use Next.js rewrites proxy (same origin)
    return "";
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
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

export interface PublicSharedConversation {
  id: string;
  title: string;
  model_id: string;
  created_at: string;
  updated_at: string;
  is_public: boolean;
  share_id?: string;
  author_name: string;
  messages: Message[];
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

async function getAuthHeader(): Promise<Record<string, string>> {
  if (typeof window !== "undefined") {
    // 1. Cek Better Auth session token (active Google SSO / credentials)
    try {
      const sessionRes = await authClient.getSession();
      if (sessionRes?.data?.session?.token) {
        return { Authorization: `Bearer ${sessionRes.data.session.token}` };
      }
    } catch {
      // fallback to localStorage
    }

    // 2. Fallback ke custom JWT di localStorage
    const token = localStorage.getItem("ruangti_auth_token");
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
  }
  return {};
}

export async function fetchConversationsFromBackend(): Promise<Conversation[]> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/conversations`, {
      headers: { ...authHeaders },
    });
    if (!res.ok) throw new Error("Failed to fetch conversations");
    const data = await res.json();
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      modelId: item.model_id,
      isPinned: item.is_pinned,
      pinned: item.is_pinned,
      isPublic: item.is_public,
      shareId: item.share_id,
      createdAt: new Date(item.created_at).getTime(),
      updatedAt: new Date(item.updated_at).getTime(),
    }));
  } catch (err) {
    console.error("Backend fetch error:", err);
    return [];
  }
}

export async function createConversationOnBackend(
  title: string = "Percakapan Baru",
  modelId: string = "TI-Optima Pro"
): Promise<Conversation | null> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/conversations`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders },
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
      isPublic: item.is_public,
      shareId: item.share_id,
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
  updates: { title?: string; is_pinned?: boolean; model_id?: string; is_public?: boolean; share_id?: string }
): Promise<boolean> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/conversations/${conversationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders },
      body: JSON.stringify(updates),
    });
    return res.ok;
  } catch (err) {
    console.error("Backend update error:", err);
    return false;
  }
}

export async function togglePinConversationOnBackend(
  conversationId: string,
  isPinned: boolean
): Promise<boolean> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/conversations/${conversationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders },
      body: JSON.stringify({ is_pinned: isPinned }),
    });
    return res.ok;
  } catch (err) {
    console.error("Backend pin toggle error:", err);
    return false;
  }
}

export async function renameConversationOnBackend(
  conversationId: string,
  newTitle: string
): Promise<boolean> {
  try {
    return await updateConversationOnBackend(conversationId, { title: newTitle });
  } catch (err) {
    console.error("Backend rename error:", err);
    return false;
  }
}

export async function deleteConversationOnBackend(conversationId: string): Promise<boolean> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/conversations/${conversationId}`, {
      method: "DELETE",
      headers: { ...authHeaders },
    });
    return res.ok;
  } catch (err) {
    console.error("Backend delete error:", err);
    return false;
  }
}

export async function fetchMessagesFromBackend(conversationId: string): Promise<Message[]> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/messages/${conversationId}`, {
      headers: { ...authHeaders },
    });
    if (!res.ok) throw new Error("Failed to fetch messages");
    const data = await res.json();
    return data.map((item: any) => ({
      id: item.id,
      conversationId: item.conversation_id,
      role: item.role,
      content: item.content,
      images: item.images ? JSON.parse(item.images) : undefined,
      documents: item.documents ? JSON.parse(item.documents) : undefined,
      tool_calls: item.tool_calls ? JSON.parse(item.tool_calls) : undefined,
      createdAt: new Date(item.created_at).getTime(),
    }));
  } catch (err) {
    console.error("Backend fetch messages error:", err);
    return [];
  }
}

export async function toggleShareConversationOnBackend(
  conversationId: string,
  isPublic: boolean
): Promise<{ success: boolean; is_public: boolean; share_id?: string; share_url?: string } | null> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/conversations/${conversationId}/share`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders },
      body: JSON.stringify({ is_public: isPublic }),
    });
    if (!res.ok) throw new Error("Failed to update share status");
    const data = await res.json();
    return {
      success: true,
      is_public: data.is_public,
      share_id: data.share_id,
      share_url: data.share_url,
    };
  } catch (err) {
    console.error("Backend toggle share error:", err);
    return null;
  }
}

export async function saveMessageToBackend(
  conversationId: string,
  role: "user" | "assistant" | "system",
  content: string,
  images?: string[],
  documents?: any[]
): Promise<Message | null> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/messages/${conversationId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders },
      body: JSON.stringify({
        role,
        content,
        images: images ? JSON.stringify(images) : null,
        documents: documents ? JSON.stringify(documents) : null,
      }),
    });
    if (!res.ok) throw new Error("Failed to save message");
    const item = await res.json();
    return {
      id: item.id,
      role: item.role,
      content: item.content,
      images: item.images ? JSON.parse(item.images) : undefined,
      documents: item.documents ? JSON.parse(item.documents) : undefined,
      createdAt: new Date(item.created_at).getTime(),
    };
  } catch (err) {
    console.error("Backend save message error:", err);
    return null;
  }
}

export async function fetchPublicSharedConversation(
  shareId: string
): Promise<PublicSharedConversation | null> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/conversations/public/${shareId}`, {
      headers: { ...authHeaders },
    });
    if (!res.ok) throw new Error("Failed to fetch public shared conversation");
    const item = await res.json();
    return {
      id: item.id,
      title: item.title,
      model_id: item.model_id,
      created_at: item.created_at,
      updated_at: item.updated_at,
      is_public: item.is_public,
      share_id: item.share_id,
      author_name: item.author_name || "Praktisi TI",
      messages: (item.messages || []).map((m: any) => ({
        id: m.id,
        role: m.role,
        content: m.content,
        images: m.images ? JSON.parse(m.images) : undefined,
        documents: m.documents ? JSON.parse(m.documents) : undefined,
        createdAt: new Date(m.created_at).getTime(),
      })),
    };
  } catch (err) {
    console.error("Backend fetch public conversation error:", err);
    return null;
  }
}


export async function uploadImageToBackend(base64Data: string): Promise<string | null> {
  try {
    const authHeaders = await getAuthHeader();
    const res = await fetch(`${getApiBase()}/api/upload/image`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders },
      body: JSON.stringify({ image_data: base64Data }),
    });
    if (!res.ok) throw new Error("Upload failed");
    const data = await res.json();
    return data.url; // e.g. "/uploads/images/img_123456_abcd.webp"
  } catch (err) {
    console.error("Backend image upload error:", err);
    return null;
  }
}

export async function uploadDocumentToBackend(file: File): Promise<any | null> {
  try {
    const authHeaders = await getAuthHeader();
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${getApiBase()}/api/upload/document`, {
      method: "POST",
      headers: { ...authHeaders },
      body: formData,
    });
    if (!res.ok) throw new Error("Document upload failed");
    const data = await res.json();
    return data; // { success: true, id, name, size, ext, url, type }
  } catch (err) {
    console.error("Backend document upload error:", err);
    return null;
  }
}
