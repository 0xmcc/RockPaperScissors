"use client";

import { useState } from "react";
import { Move, GameState, MoveInventory, StakeInfo } from "@/types/game";
import { DEFAULT_INVENTORY, consumeMove, canUseMove } from "@/lib/inventory";
import { addStake } from "@/lib/stake";
import { determineWinner } from "@/lib/game-logic";
import { mockPlayers } from "@/lib/mock-data";
import { usePlayerStats } from "./use-player-stats";
import { getRandomMove } from "@/lib/game/simulate-opponent";

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>("waiting");
  const [inventory, setInventory] = useState<MoveInventory>(DEFAULT_INVENTORY);
  const [stakes, setStakes] = useState<StakeInfo[]>([]);
  const [selectedMove, setSelectedMove] = useState<Move>();
  const [opponentMove, setOpponentMove] = useState<Move>();
  const [result, setResult] = useState<string>();

  const { player: player1, updateStats: updatePlayer1Stats } = usePlayerStats(mockPlayers[0]);
  const { player: player2, updateStats: updatePlayer2Stats } = usePlayerStats(mockPlayers[1]);

  const handleStake = (move: Move) => {
    if (!player1?.name || !player2?.name) return;

    setInventory(prev => consumeMove(prev, move));
    setStakes(prev => addStake(prev, move, player1.name));
    
    const randomMove = getRandomMove();
    setStakes(prev => addStake(prev, randomMove, player2.name));
    setGameState("playing");
  };

  const handleMoveSelect = (move: Move) => {
    if (!player1?.name || !player2?.name) return;
    
    setSelectedMove(move);
    
    setTimeout(() => {
      const randomMove = getRandomMove();
      setOpponentMove(randomMove);
      
      const outcome = determineWinner(move, randomMove);
      
      if (outcome === "draw") {
        setResult("It's a draw!");
        updatePlayer1Stats("draw", player2.stats.elo);
        updatePlayer2Stats("draw", player1.stats.elo);
      } else if (outcome === "player1") {
        setResult("You win!");
        updatePlayer1Stats("win", player2.stats.elo);
        updatePlayer2Stats("loss", player1.stats.elo);
      } else {
        setResult("Opponent wins!");
        updatePlayer1Stats("loss", player2.stats.elo);
        updatePlayer2Stats("win", player1.stats.elo);
      }
      
      setGameState("finished");
    }, 1000);
  };

  const handlePlayAgain = () => {
    setGameState("waiting");
    setSelectedMove(undefined);
    setOpponentMove(undefined);
    setResult(undefined);
    setStakes([]);
  };

  return {
    gameState,
    inventory,
    stakes,
    selectedMove,
    opponentMove,
    result,
    handleStake,
    handleMoveSelect,
    handlePlayAgain,
    canUseMove: (move: Move) => canUseMove(inventory, move),
    player1,
    player2
  };
}