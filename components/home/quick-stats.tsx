"use client";

import { Card } from "@/components/ui/card";
import { Trophy, Users, Swords, Target } from "lucide-react";
import { mockPlayers } from "@/lib/mock-data";

const stats = [
  {
    label: "Active Players",
    value: mockPlayers.length,
    icon: Users,
    color: "text-blue-500",
  },
  {
    label: "Games Played",
    value: mockPlayers.reduce((sum, p) => 
      sum + p.stats.wins + p.stats.losses + p.stats.draws, 0),
    icon: Swords,
    color: "text-green-500",
  },
  {
    label: "Top Rating",
    value: Math.max(...mockPlayers.map(p => p.stats.elo)),
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    label: "Avg Rating",
    value: Math.round(
      mockPlayers.reduce((sum, p) => sum + p.stats.elo, 0) / mockPlayers.length
    ),
    icon: Target,
    color: "text-purple-500",
  },
];

export function QuickStats() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="p-6">
            <div className="flex items-center gap-4">
              <div className={`${color} bg-background p-3 rounded-full`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}