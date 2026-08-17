import { UserProfile } from "./types";

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
  if (typeof window === "undefined") return GUEST_USER;
  try {
    const raw = localStorage.getItem(USER_PROFILE_KEY);
    if (!raw) {
      return GUEST_USER;
    }
    return JSON.parse(raw);
  } catch (e) {
    return GUEST_USER;
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
