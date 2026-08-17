import { Conversation, Message, UserProfile } from "./types";
import { generateTitleFromMessage } from "./utils";

const STORAGE_KEY = "ruangti_conversations_v1";
const ACTIVE_CONV_KEY = "ruangti_active_conv_id";
const THEME_KEY = "ruangti_theme_preference";
const MODEL_KEY = "ruangti_selected_model";
const USER_PROFILE_KEY = "ruangti_user_profile_v1";

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
    console.warn("Gagal membaca profil dari localStorage:", e);
    return DEFAULT_USER;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error("Gagal menyimpan profil ke localStorage:", e);
  }
}

export function loadConversations(): Conversation[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn("Gagal membaca conversations dari localStorage:", e);
    return [];
  }
}

export function saveConversations(conversations: Conversation[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
  } catch (e) {
    console.error("Gagal menyimpan conversations ke localStorage:", e);
  }
}

export function getActiveConversationId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACTIVE_CONV_KEY);
}

export function setActiveConversationId(id: string | null): void {
  if (typeof window === "undefined") return;
  if (id) {
    localStorage.setItem(ACTIVE_CONV_KEY, id);
  } else {
    localStorage.removeItem(ACTIVE_CONV_KEY);
  }
}

export function createNewConversation(): Conversation {
  const now = Date.now();
  return {
    id: `conv_${now}_${Math.random().toString(36).slice(2, 7)}`,
    title: "Konsultasi TI Baru",
    messages: [],
    createdAt: now,
    updatedAt: now,
    pinned: false,
  };
}

export function getInitialSeedConversations(): Conversation[] {
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;

  return [
    {
      id: "seed_1",
      title: "Optimasi Tata Letak Pabrik (Facility Layout)",
      createdAt: now - 2 * 3600 * 1000,
      updatedAt: now - 2 * 3600 * 1000,
      pinned: true,
      messages: [
        {
          id: "m1",
          role: "user",
          content: "Bagaimana cara menyusun From-To Chart dan Activity Relationship Chart (ARC) untuk perancangan tata letak fasilitas pabrik?",
          createdAt: now - 2 * 3600 * 1000,
        },
        {
          id: "m2",
          role: "assistant",
          content: "Dalam **Perancangan Tata Letak Fasilitas (PTLF)**, langkah awal adalah memetakan aliran material kuantitatif menggunakan **From-To Chart (Material Handling Matrix)**, lalu mengombinasikannya dengan aspek kualitatif melalui **Activity Relationship Chart (ARC)** dengan derajat kedekatan A, E, I, O, U, X.",
          createdAt: now - 2 * 3600 * 1000 + 2000,
        },
      ],
    },
    {
      id: "seed_2",
      title: "Penerapan Lean Six Sigma & DMAIC",
      createdAt: now - 1 * dayMs,
      updatedAt: now - 1 * dayMs,
      pinned: false,
      messages: [
        {
          id: "m3",
          role: "user",
          content: "Jelaskan langkah metodologi DMAIC untuk mereduksi cacat produk di lini perakitan.",
          createdAt: now - 1 * dayMs,
        },
        {
          id: "m4",
          role: "assistant",
          content: "Metodologi **DMAIC (Define, Measure, Analyze, Improve, Control)** difokuskan pada eliminasi variabilitas proses. Kita menggunakan *Pareto Diagram* di tahap Define/Measure, *Fishbone Diagram (5M+1E)* pada Analyze, serta *Poka-Yoke* di tahap Control.",
          createdAt: now - 1 * dayMs + 3000,
        },
      ],
    },
    {
      id: "seed_3",
      title: "Model Antrian & Simulasi Diskrit (Arena)",
      createdAt: now - 4 * dayMs,
      updatedAt: now - 4 * dayMs,
      pinned: false,
      messages: [],
    },
  ];
}
