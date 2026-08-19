"use client";

import { useState, useEffect, useCallback } from "react";
import { UserProfile } from "@/lib/types";
import { getUserProfile, saveUserProfile, logoutUserProfile } from "@/lib/storage";

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(() => getUserProfile());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setProfile(getUserProfile());
    setIsLoaded(true);
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

  const logout = useCallback(() => {
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
