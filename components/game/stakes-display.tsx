"use client";

import { StakeInfo } from "@/types/game";
import { Circle, Hand, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

const moveIcons = {
  rock: Circle,
  paper: Hand,
  scissors: Scissors,
};

interface StakesDisplayProps {
  stakes: StakeInfo[];
  player1Name: string;
  player2Name: string;
}

export function StakesDisplay({ stakes, player1Name, player2Name }: StakesDisplayProps) {
  const player1Stakes = stakes.filter(stake => stake.player === player1Name);
  const player2Stakes = stakes.filter(stake => stake.player === player2Name);

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className={cn(
        "flex-1 h-20 md:h-24 rounded-lg border-2 p-3 md:p-4 flex items-center justify-center gap-4",
        player1Stakes.length ? 'bg-primary/10 border-primary' : 'border-muted'
      )}>
        {player1Stakes.map((stake, index) => {
          const Icon = moveIcons[stake.move];
          return <Icon key={index} className="w-6 h-6 md:w-8 md:h-8" />;
        })}
      </div>
      <div className={cn(
        "flex-1 h-20 md:h-24 rounded-lg border-2 p-3 md:p-4 flex items-center justify-center gap-4",
        player2Stakes.length ? 'bg-primary/10 border-primary' : 'border-muted'
      )}>
        {player2Stakes.map((stake, index) => {
          const Icon = moveIcons[stake.move];
          return <Icon key={index} className="w-6 h-6 md:w-8 md:h-8" />;
        })}
      </div>
    </div>
  );
}