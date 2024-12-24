"use client";

import { Player } from "@/types/game";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EloBadge } from "@/components/game/elo-badge";
import { Trophy } from "lucide-react";

interface LeaderboardTableProps {
  players: Player[];
}

export function LeaderboardTable({ players }: LeaderboardTableProps) {
  const sortedPlayers = [...players].sort((a, b) => b.stats.elo - a.stats.elo);

  const getRankDisplay = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Trophy className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Trophy className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {sortedPlayers.map((player, index) => {
          const rank = index + 1;
          const winRate = Math.round(
            (player.stats.wins / (player.stats.wins + player.stats.losses + player.stats.draws)) * 100
          );

          return (
            <div
              key={player.id}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="w-12 flex justify-center">
                {getRankDisplay(rank)}
              </div>
              
              <Avatar className="w-12 h-12">
                <AvatarImage src={player.avatar} alt={player.name} />
                <AvatarFallback>{player.name[0]}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-lg">{player.name}</span>
                  <EloBadge elo={player.stats.elo} />
                </div>
                
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Wins: {player.stats.wins}</span>
                  <span>Losses: {player.stats.losses}</span>
                  <span>Draws: {player.stats.draws}</span>
                  <span>Win Rate: {winRate}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}