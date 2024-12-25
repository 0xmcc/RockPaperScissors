"use client";

import { StakeInfo } from "@/types/game";
import { Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils";

interface StakesDisplayProps {
  stakes: StakeInfo[];
  player1Name: string;
  player2Name: string;
  isPlayer1?: boolean;
}

export function StakesDisplay({ stakes, player1Name, player2Name, isPlayer1 = true }: StakesDisplayProps) {
  const player1Stake = stakes.find(stake => stake.player === player1Name);
  const player2Stake = stakes.find(stake => stake.player === player2Name);
  const totalPot = (player1Stake?.amount || 0) + (player2Stake?.amount || 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className={cn(
          "relative rounded-lg border-2 p-4",
          "flex flex-col items-center justify-center text-center",
          isPlayer1 ? "order-1" : "order-2",
          player1Stake ? 'bg-primary/10 border-primary' : 'border-muted'
        )}>
          <span className="text-sm text-muted-foreground mb-1">Your Stake</span>
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-yellow-500" />
            <span className="text-xl font-bold">
              {player1Stake ? formatCurrency(player1Stake.amount) : '$0'}
            </span>
          </div>
        </div>

        <div className={cn(
          "relative rounded-lg border-2 p-4",
          "flex flex-col items-center justify-center text-center",
          isPlayer1 ? "order-2" : "order-1",
          player2Stake ? 'bg-primary/10 border-primary' : 'border-muted'
        )}>
          <span className="text-sm text-muted-foreground mb-1">Opponent's Stake</span>
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-yellow-500" />
            <span className="text-xl font-bold">
              {player2Stake ? formatCurrency(player2Stake.amount) : '$0'}
            </span>
          </div>
        </div>
      </div>

      {totalPot > 0 && (
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <Coins className="w-5 h-5 text-yellow-500" />
            <span>Total Pot: {formatCurrency(totalPot)}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Winner takes all! Place your bet to join the game.
          </p>
        </div>
      )}
    </div>
  );
}