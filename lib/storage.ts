import { UserProfile } from "./types";

export const GUEST_USER: UserProfile = {
  id: "guest",
  name: "Tamu",
  email: "",
  plan: "Free",
  isLoggedIn: false,
  role: "Praktisi TI",
  institution: "Teknik Industri",
};


const USER_PROFILE_KEY = "ruangti_user_profile_v2";

export function getUserProfile(): UserProfile {
  if (typeof window === "undefined") return GUEST_USER;
  try {
    const raw = localStorage.getItem(USER_PROFILE_KEY);
    if (!raw) return GUEST_USER;
    return JSON.parse(raw);
  } catch {
    return GUEST_USER;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error("Failed to save user profile:", err);
  }
}

export function logoutUserProfile(): UserProfile {
  if (typeof window === "undefined") return GUEST_USER;
  try {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(GUEST_USER));
  } catch (err) {
    console.error("Failed to logout user profile:", err);
  }
  return GUEST_USER;
}
