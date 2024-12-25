"use client";

import { useGameState } from "@/hooks/use-game-state";
import { Card } from "@/components/ui/card";
import { PlayerCard } from "@/components/game/player-card";
import { StakesDisplay } from "@/components/game/stakes-display";
import { GameControls } from "@/components/game/game-controls";
import { StakeableInventory } from "@/components/game/stakeable-inventory";
import { BattleControls } from "@/components/game/battle-controls";

export default function BattlePage() {
  const {
    gameState,
    selectedMove,
    opponentMove,
    handleMoveSelect,
    handleStakeSelect,
    maxStakeAmount,
    player1,
    player2
  } = useGameState();

  const selectedMoveEmoji = {
    'rock': '✊',
    'paper': '✋',
    'scissors': '✌️'
  }[selectedMove ?? 'rock'] || '';

  return (
    <main className="container px-4 py-8 pb-24">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Players Section */}
        <div className="grid gap-4">
          {/* Opponent Card */}
          <Card className="p-6 bg-gradient-to-br from-background to-muted">
            <div className="flex justify-between items-center">
              <PlayerCard 
                player={player2} 
                isActive={gameState === "playing"}
                isOpponent
              />
              {opponentMove && <span className="text-4xl opacity-50">?</span>}
            </div>
          </Card>

          {/* Player Card */}
          <Card className="p-6 bg-gradient-to-br from-muted to-background">
            <div className="flex justify-between items-center">
              <PlayerCard 
                player={player1}
                isActive={gameState === "playing"}
              />
              {selectedMove && (
                <span className="text-4xl w-16 h-16 flex items-center justify-center border-2 border-white/20 rounded-full">
                  {selectedMoveEmoji}
                </span>
              )}
            </div>
          </Card>
        </div>

        {/* Battle Arena */}
        <Card className="p-6">
          <div className="space-y-8">
            {gameState === "waiting" && (
              <BattleControls
                selectedMove={selectedMove}
                onMoveSelect={handleMoveSelect}
                disabled={gameState !== "waiting"}
                onStakeSelect={handleStakeSelect}
                maxStake={maxStakeAmount}
              />
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}