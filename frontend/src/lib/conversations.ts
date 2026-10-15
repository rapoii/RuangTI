export interface ConversationSummary {
  id: string;
  title: string;
  created_at: number;
  updated_at: number;
}

export interface ConversationDetail {
  id: string;
  title: string;
  created_at: number;
  updated_at: number;
  messages: {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    created_at: number;
  }[];
}

export async function listConversations(): Promise<ConversationSummary[]> {
  const res = await fetch('/api/conversations', { credentials: 'include' });
  if (!res.ok) {
    if (res.status === 401) return [];
    throw new Error('Gagal memuat percakapan');
  }
  return (await res.json()) as ConversationSummary[];
}

export async function createConversation(title?: string): Promise<ConversationSummary> {
  const res = await fetch('/api/conversations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error('Gagal membuat percakapan');
  return (await res.json()) as ConversationSummary;
}

export async function getConversation(id: string): Promise<ConversationDetail> {
  const res = await fetch(`/api/conversations/${encodeURIComponent(id)}`, { credentials: 'include' });
  if (!res.ok) throw new Error('Gagal membuka percakapan');
  return (await res.json()) as ConversationDetail;
}

export async function deleteConversation(id: string): Promise<void> {
  const res = await fetch(`/api/conversations/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Gagal menghapus percakapan');
}

export async function addMessage(id: string, role: 'user' | 'assistant', content: string): Promise<void> {
  const res = await fetch(`/api/conversations/${encodeURIComponent(id)}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ role, content }),
  });
  if (!res.ok) throw new Error('Gagal menyimpan pesan');
}
