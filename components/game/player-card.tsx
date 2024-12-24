"use client";

import { Player } from "@/types/game";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EloBadge } from "./elo-badge";
import { PlayerStats } from "./player-stats";
import { cn } from "@/lib/utils";

interface PlayerCardProps {
  player: Player;
  isActive?: boolean;
  isOpponent?: boolean;
  isPlayerTwo?: boolean;
}

export function PlayerCard({ player, isActive, isOpponent, isPlayerTwo }: PlayerCardProps) {
  if (isOpponent) {
    return (
      <div className={`relative ${isActive ? 'ring-2 ring-primary rounded-lg' : ''}`}>
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img 
            src={player.avatar} 
            alt={player.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{player.name}</h2>
              <EloBadge elo={player.stats.elo} />
            </div>
            <PlayerStats stats={player.stats} className="text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "flex flex-col items-center gap-4 rounded-lg border p-4",
      isPlayerTwo ? "items-end" : "items-start"
    )}>
      <div className={cn(
        "flex items-center gap-4",
        isPlayerTwo ? "flex-row-reverse" : "flex-row"
      )}>
        <Avatar className="h-20 w-20">
          <AvatarImage src={player.avatar} alt={player.name} />
          <AvatarFallback>{player.name[0]}</AvatarFallback>
        </Avatar>
        <div className={cn(
          "space-y-1",
          isPlayerTwo ? "text-right" : "text-left"
        )}>
          <h3 className="font-semibold">{player.name}</h3>
          <p className="text-sm text-muted-foreground">
            W: {player.stats.wins} L: {player.stats.losses}
          </p>
        </div>
      </div>
    </div>
  );
}