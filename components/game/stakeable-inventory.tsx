"use client";

import { Move, MoveInventory, StakeInfo } from "@/types/game";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Circle, Hand, Scissors } from "lucide-react";

const moveIcons = {
  rock: Circle,
  paper: Hand,
  scissors: Scissors,
};

interface StakeableInventoryProps {
  inventory: MoveInventory;
  onStake: (move: Move) => void;
  disabled?: boolean;
  stakes: StakeInfo[];
}

export function StakeableInventory({ inventory, onStake, disabled, stakes }: StakeableInventoryProps) {
  const MAX_COUNT = 5;
  const hasStaked = stakes.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Your Inventory</h3>
        {hasStaked && (
          <div className="text-sm text-muted-foreground">
            Items at stake: {stakes.length}
          </div>
        )}
      </div>
      
      <div className="grid gap-4">
        {(Object.entries(inventory) as [keyof typeof moveIcons, number][]).map(([move, count]) => {
          const Icon = moveIcons[move];
          const isStaked = stakes.some(stake => stake.move === move);
          
          return (
            <div key={move} className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="capitalize text-sm">{move}</span>
                  <span className="text-sm text-muted-foreground">{count}/{MAX_COUNT}</span>
                </div>
                <Progress value={(count / MAX_COUNT) * 100} />
              </div>
              <Button
                variant="outline"
                size="sm"
                disabled={disabled || count === 0 || isStaked}
                onClick={() => onStake(move)}
                className="w-24"
              >
                {isStaked ? "Staked" : "Stake"}
              </Button>
            </div>
          );
        })}
      </div>
      
      {stakes.length > 0 && (
        <div className="rounded-lg bg-muted p-4 mt-4">
          <h4 className="text-sm font-medium mb-2">Current Stakes</h4>
          <div className="space-y-2">
            {stakes.map((stake, index) => {
              const Icon = moveIcons[stake.move];
              return (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Icon className="w-4 h-4" />
                  <span className="capitalize">{stake.move}</span>
                  <span className="text-muted-foreground ml-auto">by {stake.player}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}