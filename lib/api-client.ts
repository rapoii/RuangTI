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

function getAuthHeader(): Record<string, string> {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("ruangti_auth_token");
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
  }
  return {};
}

export async function fetchConversationsFromBackend(): Promise<Conversation[]> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations`, {
      headers: { ...getAuthHeader() },
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
  title: string = "Konsultasi TI Baru",
  modelId: string = "TI-Optima Pro"
): Promise<Conversation | null> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeader() },
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
    const res = await fetch(`${getApiBase()}/api/conversations/${conversationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...getAuthHeader() },
      body: JSON.stringify(updates),
    });
    return res.ok;
  } catch (err) {
    console.error("Backend update conversation error:", err);
    return false;
  }
}

export async function toggleShareConversationOnBackend(
  conversationId: string,
  isPublic: boolean
): Promise<{ success: boolean; is_public: boolean; share_id?: string; share_url?: string } | null> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations/${conversationId}/share`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeader() },
      body: JSON.stringify({ is_public: isPublic }),
    });
    if (!res.ok) throw new Error("Failed to update share status");
    return await res.json();
  } catch (err) {
    console.error("Backend toggle share error:", err);
    return null;
  }
}

export async function fetchPublicSharedConversation(identifier: string): Promise<PublicSharedConversation | null> {
  try {
    const res = await fetch(`${getApiBase()}/api/conversations/public/${identifier}`);
    if (!res.ok) throw new Error("Shared conversation not found");
    const data = await res.json();
    return {
      ...data,
      messages: (data.messages || []).map((item: any) => ({
        id: item.id,
        role: item.role,
        content: item.content,
        createdAt: new Date(item.created_at).getTime(),
      })),
    };
  } catch (err) {
    console.error("Fetch public shared conversation error:", err);
    return null;
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
      headers: { ...getAuthHeader() },
    });
    return res.ok;
  } catch (err) {
    console.error("Backend delete conversation error:", err);
    return false;
  }
}

export async function fetchMessagesFromBackend(conversationId: string): Promise<Message[]> {
  try {
    const res = await fetch(`${getApiBase()}/api/messages/${conversationId}`, {
      headers: { ...getAuthHeader() },
    });
    if (!res.ok) throw new Error("Failed to fetch messages");
    const data = await res.json();
    return data.map((item: any) => {
      let parsedImages: string[] | undefined = undefined;
      if (item.images) {
        try {
          parsedImages = JSON.parse(item.images);
        } catch {
          parsedImages = [item.images];
        }
      }
      let parsedDocuments: any[] | undefined = undefined;
      if (item.documents) {
        try {
          parsedDocuments = JSON.parse(item.documents);
        } catch {
          parsedDocuments = undefined;
        }
      }
      return {
        id: item.id,
        role: item.role,
        content: item.content,
        images: parsedImages,
        documents: parsedDocuments,
        createdAt: new Date(item.created_at).getTime(),
      };
    });
  } catch (err) {
    console.error("Backend fetch messages error:", err);
    return [];
  }
}

export async function uploadImageToBackend(base64Data: string): Promise<string | null> {
  try {
    const res = await fetch(`${getApiBase()}/api/upload/image`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeader() },
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
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${getApiBase()}/api/upload/document`, {
      method: "POST",
      headers: { ...getAuthHeader() },
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

export async function saveMessageToBackend(
  conversationId: string,
  role: "user" | "assistant" | "system",
  content: string,
  images?: string[],
  documents?: any[]
): Promise<Message | null> {
  try {
    const serializedImages = images && images.length > 0 ? JSON.stringify(images) : undefined;
    const serializedDocuments = documents && documents.length > 0 ? JSON.stringify(documents) : undefined;
    const res = await fetch(`${getApiBase()}/api/messages/${conversationId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeader() },
      body: JSON.stringify({ role, content, images: serializedImages, documents: serializedDocuments }),
    });
    if (!res.ok) throw new Error("Failed to save message");
    const item = await res.json();
    let parsedImages: string[] | undefined = undefined;
    if (item.images) {
      try {
        parsedImages = JSON.parse(item.images);
      } catch {
        parsedImages = [item.images];
      }
    }
    let parsedDocuments: any[] | undefined = undefined;
    if (item.documents) {
      try {
        parsedDocuments = JSON.parse(item.documents);
      } catch {
        parsedDocuments = undefined;
      }
    }
    return {
      id: item.id,
      role: item.role,
      content: item.content,
      images: parsedImages,
      documents: parsedDocuments,
      createdAt: new Date(item.created_at).getTime(),
    };
  } catch (err) {
    console.error("Backend save message error:", err);
    return null;
  }
}
