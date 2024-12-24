"use client";

import { Player } from "@/types/game";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EloBadge } from "@/components/game/elo-badge";

interface PlayerRankProps {
  player: Player;
  rank: number;
}

export function PlayerRank({ player, rank }: PlayerRankProps) {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return "text-yellow-500";
      case 2: return "text-gray-400";
      case 3: return "text-amber-600";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
      <span className={`font-bold text-lg ${getRankColor(rank)}`}>
        #{rank}
      </span>
      <Avatar>
        <AvatarImage src={player.avatar} alt={player.name} />
        <AvatarFallback>{player.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{player.name}</span>
          <EloBadge elo={player.stats.elo} />
        </div>
        <p className="text-sm text-muted-foreground">
          W: {player.stats.wins} L: {player.stats.losses} D: {player.stats.draws}
        </p>
      </div>
    </div>
  );
}