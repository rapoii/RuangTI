"use client";

import { useState, useEffect, useCallback } from "react";
import { UserProfile } from "@/lib/types";
import { getUserProfile, saveUserProfile, logoutUserProfile } from "@/lib/storage";
import { authClient } from "@/lib/auth-client";

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(() => getUserProfile());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Sinkronkan state lokal dengan Better Auth session
    const syncSession = async () => {
      try {
        const { data: session } = await authClient.getSession();
        if (session && session.user) {
          const user = session.user as any;
          const mapped: UserProfile = {
            id: user.id || "local-user",
            name: user.name || "Praktisi TI",
            email: user.email || "user@teknik-industri.id",
            role: (user as any).role || "Praktisi",
            institution: (user as any).institution || "Teknik Industri",
            plan: user.plan || "Pro",
            isLoggedIn: true,
          };
          setProfile(mapped);
          saveUserProfile(mapped);
        } else {
          // Jika tidak ada session server tapi di localStorage masih ada
          const local = getUserProfile();
          setProfile(local);
        }
      } catch {
        setProfile(getUserProfile());
      } finally {
        setIsLoaded(true);
      }
    };

    syncSession();

    const handleStorage = () => {
      setProfile(getUserProfile());
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const updateProfile = useCallback((updated: Partial<UserProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updated };
      saveUserProfile(next);
      return next;
    });
  }, []);

  const login = useCallback(
    (userData: any, emailParam?: string) => {
      let next: UserProfile;
      if (typeof userData === "string") {
        next = {
          ...profile,
          name: userData,
          email: emailParam || "",
          isLoggedIn: true,
        };
      } else {
        next = {
          ...profile,
          ...userData,
          isLoggedIn: true,
        };
      }
      setProfile(next);
      saveUserProfile(next);
    },
    [profile]
  );

  const logout = useCallback(async () => {
    try {
      await authClient.signOut();
    } catch {}
    const fresh = logoutUserProfile();
    setProfile(fresh);
  }, []);

  return {
    profile,
    isLoaded,
    updateProfile,
    login,
    logout,
  };
}
