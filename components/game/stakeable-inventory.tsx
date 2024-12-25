"use client";

import { Move, MoveInventory, StakeInfo } from "@/types/game";
import { Button } from "@/components/ui/button";
import { Circle, Hand, Scissors, Coins } from "lucide-react";

import { cn } from "@/lib/utils";

const stakeOptions = {
  rock: { icon: Circle, label: "Rock" },
  paper: { icon: Hand, label: "Paper" },
  scissors: { icon: Scissors, label: "Scissors" },
  tokens: { icon: Coins, label: "Tokens" },
} as const;

interface StakeableInventoryProps {
  inventory: MoveInventory & { tokens: number };
  onStake: (type: keyof typeof stakeOptions) => void;
  disabled?: boolean;
  stakes: StakeInfo[];
}

export function StakeableInventory({ inventory, onStake, disabled, stakes }: StakeableInventoryProps) {
  return (
    <div className="flex gap-4">
      {(Object.entries(stakeOptions) as [keyof typeof stakeOptions, typeof stakeOptions[keyof typeof stakeOptions]][]).map(([type, { icon: Icon, label }]) => {
        const count = inventory[type];
        const isStaked = stakes.some(stake => stake.move === type);
        
        return (
          <Button
            key={type}
            variant={isStaked ? "secondary" : "outline"}
            className={cn(
              "aspect-square p-0",
              count === 0 && "opacity-50"
            )}
            disabled={disabled || count === 0 || isStaked || stakes.length >= 2}
            onClick={() => onStake(type)}
          >
            <Icon className="w-6 h-6" />
          </Button>
        );
      })}
    </div>
  );
}