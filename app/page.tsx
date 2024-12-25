"use client";

import { HeroSection } from "@/components/home/hero-section";
import { LeaderboardCard } from "@/components/leaderboard/leaderboard-card";
import { mockPlayers } from "@/lib/mock-data";
import { Header } from "@/components/layout/header";
import { AuthButtons } from "@/components/auth-buttons";

export default function Home() {
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
        <AuthButtons />
      </main>
    </div>
  );
}