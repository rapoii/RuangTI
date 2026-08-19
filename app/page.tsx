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

  const handleLoginSuccess = (userProfileData: any) => {
    profileState.login(userProfileData);
    // Otomatis redirect ke /chat setelah login sukses
    router.push("/chat");
  };

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col selection:bg-accent/30 selection:text-accent">
      <Navbar
        profile={profileState.profile}
        onOpenLogin={() => setIsAuthOpen(true)}
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6">
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
      {/* Scrollbar Custom & Anti-Slop Tokens */}
      <style jsx global>{`
        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
        /* Custom Clean Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
