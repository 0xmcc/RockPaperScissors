"use client";

import { Move, MoveInventory } from "@/types/game";
import { Button } from "@/components/ui/button";
import { Square, FileText, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

const moveIcons = {
  rock: Square,
  paper: FileText,
  scissors: Scissors,
};

interface StakeSelectorProps {
  inventory: MoveInventory;
  onStake: (move: Move) => void;
  disabled?: boolean;
}

export function StakeSelector({ inventory, onStake, disabled }: StakeSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Stake an Item</h3>
      <div className="flex gap-3">
        {(Object.entries(inventory) as [Move, number][]).map(([move, count]) => {
          const Icon = moveIcons[move];
          return (
            <Button
              key={move}
              variant="outline"
              size="lg"
              disabled={disabled || count === 0}
              onClick={() => onStake(move)}
              className={cn(
                "flex-1 h-20 flex flex-col items-center gap-2",
                count === 0 && "opacity-50"
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs">{count} left</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}