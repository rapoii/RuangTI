"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { AuthModal } from "@/components/landing/AuthModal";
import { useProfile } from "@/hooks/use-profile";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const profileState = useProfile();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleLoginSuccess = (name: string, email: string) => {
    profileState.login(name, email);
    // Otomatis redirect ke /chat setelah login sukses
    router.push("/chat");
  };

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col selection:bg-accent/30 selection:text-accent">
      <Navbar
        profile={profileState.profile}
        onOpenLogin={() => setIsAuthOpen(true)}
      />

      <main className="flex-1">
        <Hero
          profile={profileState.profile}
          onOpenLogin={() => setIsAuthOpen(true)}
        />
        <Features />
      </main>

      <Footer />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
