"use client";

import { mockPlayers } from "@/lib/mock-data";
import { useGameState } from "@/hooks/use-game-state";
import { Card } from "@/components/ui/card";
import { PlayerCard } from "@/components/game/player-card";
import { StakesDisplay } from "@/components/game/stakes-display";
import { GameControls } from "@/components/game/game-controls";
import { StakeableInventory } from "@/components/game/stakeable-inventory";

export default function BattlePage() {
  const {
    gameState,
    inventory,
    stakes,
    selectedMove,
    opponentMove,
    result,
    handleStake,
    handleMoveSelect,
    handlePlayAgain,
    canUseMove,
    player1,
    player2
  } = useGameState();

  return (
    <main className="container px-4 py-4 pb-20 md:py-8 md:pb-24">
      <div className="max-w-2xl mx-auto space-y-4 md:space-y-8">
        <PlayerCard 
          player={player2} 
          isActive={gameState === "playing"}
          isOpponent
        />
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          <div className="w-full md:w-1/3">
            <PlayerCard player={player1} />
          </div>
          <div className="flex-1">
            <StakesDisplay 
              stakes={stakes}
              player1Name={player1.name}
              player2Name={player2.name}
            />
          </div>
        </div>

        <Card className="p-4 md:p-8">
          {gameState === "waiting" ? (
            <StakeableInventory
              inventory={inventory}
              onStake={handleStake}
              disabled={stakes.length >= 2}
              stakes={stakes}
            />
          ) : (
            <GameControls
              gameState={gameState}
              selectedMove={selectedMove}
              result={result}
              opponentMove={opponentMove}
              canUseMove={canUseMove}
              onMoveSelect={handleMoveSelect}
              onPlayAgain={handlePlayAgain}
            />
          )}
        </Card>
      </div>
    </main>
  );
}