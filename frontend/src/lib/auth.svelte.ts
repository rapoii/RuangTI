// Svelte 5 runes memerlukan ekstensi .svelte.ts agar $state dikompilasi.
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  picture: string;
}

export const auth = $state<{ user: AuthUser | null; loading: boolean; error: string | null }>({
  user: null,
  loading: true,
  error: null,
});

/** Muat status sesi dari server. Tidak pernah melempar — kegagalan = belum login. */
export async function loadSession(): Promise<void> {
  try {
    const res = await fetch('/api/auth/me', { credentials: 'include' });
    if (res.ok) {
      const data = (await res.json()) as { user: AuthUser };
      auth.user = data.user;
      auth.error = null;
    } else {
      auth.user = null;
    }
  } catch {
    auth.user = null;
  } finally {
    auth.loading = false;
  }
}

/** Mulai alur OAuth Google (redirect penuh, bukan fetch). */
export function loginWithGoogle(): void {
  window.location.href = '/api/auth/google/login';
}

/** Hapus sesi di server lalu bersihkan state lokal. */
export async function logout(): Promise<void> {
  try {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
  } catch {
    // abaikan: yang penting state lokal dibersihkan
  }
  auth.user = null;
}

export function isLoggedIn(): boolean {
  return auth.user !== null;
}

/** Inisial untuk avatar fallback (mis. "Andi Pratama" -> "AP"). */
export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'TI';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
