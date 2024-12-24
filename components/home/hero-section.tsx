"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            Rock Paper Scissors
            <span className="block text-2xl md:text-3xl mt-2">Reimagined</span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Experience the classic game with a competitive twist. 
            Climb the ranks and become a champion.
          </p>

          <div className="flex justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/battle">Play Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}