"use client";

import { useState, useEffect, useCallback } from "react";
import { UserProfile } from "@/lib/types";
import { loadUserProfile, saveUserProfile, DEFAULT_USER, GUEST_USER } from "@/lib/storage";

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_USER);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const p = loadUserProfile();
    setProfile(p);
    setIsLoaded(true);
  }, []);

  const updateProfile = useCallback((updated: Partial<UserProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updated };
      saveUserProfile(next);
      return next;
    });
  }, []);

  const login = useCallback((name: string, email: string) => {
    const user: UserProfile = {
      id: `usr_${Date.now()}`,
      name: name || "Rafi Permana",
      email: email || "user@ruangti.ac.id",
      plan: "Pro",
      isLoggedIn: true,
      joinedAt: Date.now(),
    };
    setProfile(user);
    saveUserProfile(user);
  }, []);

  const logout = useCallback(() => {
    setProfile(GUEST_USER);
    saveUserProfile(GUEST_USER);
  }, []);

  return {
    profile,
    isLoaded,
    updateProfile,
    login,
    logout,
  };
}
