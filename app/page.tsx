"use client";

import { HeroSection } from "@/components/home/hero-section";
import { LeaderboardCard } from "@/components/leaderboard/leaderboard-card";
import { mockPlayers } from "@/lib/mock-data";
import { Header } from "@/components/layout/header";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      <main>
        <HeroSection />
        <section className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <LeaderboardCard players={mockPlayers} />
          </div>
        </section>
      </main>
    </div>
  );
}