"use client";

import { Player } from "@/types/game";
import { Card } from "@/components/ui/card";
import { Trophy, Target, Award, Users } from "lucide-react";

interface LeaderboardStatsProps {
  players: Player[];
}

export function LeaderboardStats({ players }: LeaderboardStatsProps) {
  const totalGames = players.reduce((sum, player) => 
    sum + player.stats.wins + player.stats.losses + player.stats.draws, 0);
  
  const avgElo = Math.round(
    players.reduce((sum, player) => sum + player.stats.elo, 0) / players.length
  );
  
  const topPlayer = [...players].sort((a, b) => b.stats.elo - a.stats.elo)[0];

  const stats = [
    {
      label: "Top Player",
      value: topPlayer.name,
      subValue: `${topPlayer.stats.elo} ELO`,
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      label: "Average Rating",
      value: avgElo.toString(),
      subValue: "ELO",
      icon: Target,
      color: "text-blue-500",
    },
    {
      label: "Total Games",
      value: totalGames.toString(),
      subValue: "Matches",
      icon: Award,
      color: "text-green-500",
    },
    {
      label: "Active Players",
      value: players.length.toString(),
      subValue: "Players",
      icon: Users,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <div className="flex items-center gap-4">
            <div className={`${stat.color} bg-background p-3 rounded-full`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.subValue}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}