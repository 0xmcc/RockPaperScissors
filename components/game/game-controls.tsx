"use client";

import { Move, GameState } from "@/types/game";
import { MoveButton } from "./move-button";
import { ResultDisplay } from "./result-display";
import { Loader2 } from "lucide-react";

interface GameControlsProps {
  gameState: GameState;
  selectedMove?: Move;
  result?: string;
  opponentMove?: Move;
  canUseMove: (move: Move) => boolean;
  onMoveSelect: (move: Move) => void;
  onPlayAgain: () => void;
}

export function GameControls({
  gameState,
  selectedMove,
  result,
  opponentMove,
  canUseMove,
  onMoveSelect,
  onPlayAgain,
}: GameControlsProps) {
  if (gameState === "playing") {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Choose Your Move</h2>
          <div className="flex justify-center gap-4">
            {["rock", "paper", "scissors"].map((move) => (
              <MoveButton
                key={move}
                move={move as Move}
                selected={selectedMove === move}
                disabled={!canUseMove(move as Move)}
                onSelect={onMoveSelect}
              />
            ))}
          </div>
        </div>
        {selectedMove && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Waiting for opponent...</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (gameState === "finished" && selectedMove && opponentMove && result) {
    return (
      <ResultDisplay
        result={result}
        selectedMove={selectedMove}
        opponentMove={opponentMove}
        onPlayAgain={onPlayAgain}
      />
    );
  }

  return null;
}