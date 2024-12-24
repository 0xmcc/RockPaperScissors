"use client";

import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { PlayerRank } from "./player-rank";
import { Player } from "@/types/game";

interface LeaderboardCardProps {
  players: Player[];
}

export function LeaderboardCard({ players }: LeaderboardCardProps) {
  const sortedPlayers = [...players].sort((a, b) => b.stats.elo - a.stats.elo);
  
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-2xl font-bold">Leaderboard</h2>
      </div>
      <div className="space-y-4">
        {sortedPlayers.map((player, index) => (
          <PlayerRank
            key={player.id}
            player={player}
            rank={index + 1}
          />
        ))}
      </div>
    </Card>
  );
}