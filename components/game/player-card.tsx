"use client";

import { Player } from "@/types/game";
import { Avatar } from "@/components/ui/avatar";
import { Coins } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface PlayerCardProps {
  player: Player;
  isActive?: boolean;
  isOpponent?: boolean;
}

export function PlayerCard({ player, isActive, isOpponent }: PlayerCardProps) {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-16 h-16">
        <img src={player.avatar} alt={player.name} />
      </Avatar>
      <div className="flex-1">
        <h3 className="font-semibold">{player.name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Coins className="w-4 h-4" />
          <span>{formatCurrency(player.balance)}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          {player.stats.wins}W - {player.stats.losses}L
        </div>
      </div>
    </div>
  );
}