"use client";

import { Move } from "@/types/game";
import { MoveButton } from "./move-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResultDisplayProps {
  result: string;
  selectedMove: Move;
  opponentMove: Move;
  onPlayAgain: () => void;
}

export function ResultDisplay({ result, selectedMove, opponentMove, onPlayAgain }: ResultDisplayProps) {
  const isWin = result === "You win!";
  const isDraw = result === "It's a draw!";
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className={cn(
          "text-3xl font-bold mb-4",
          isWin && "text-green-500 dark:text-green-400",
          isDraw && "text-yellow-500 dark:text-yellow-400",
          !isWin && !isDraw && "text-red-500 dark:text-red-400"
        )}>
          {result}
        </h2>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Your Move</p>
            <div className={cn(
              "p-2 rounded-full",
              isWin && "bg-green-500/10",
              isDraw && "bg-yellow-500/10",
              !isWin && !isDraw && "bg-red-500/10"
            )}>
              <MoveButton
                move={selectedMove}
                disabled
                onSelect={() => {}}
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Opponent's Move</p>
            <div className={cn(
              "p-2 rounded-full",
              !isWin && !isDraw && "bg-green-500/10",
              isDraw && "bg-yellow-500/10",
              isWin && "bg-red-500/10"
            )}>
              <MoveButton
                move={opponentMove}
                disabled
                onSelect={() => {}}
              />
            </div>
          </div>
        </div>
        <Button 
          onClick={onPlayAgain} 
          className="mt-8"
          size="lg"
          variant={isWin ? "success" : isDraw ? "warning" : "destructive"}
        >
          Play Again
        </Button>
      </div>
    </div>
  );
}