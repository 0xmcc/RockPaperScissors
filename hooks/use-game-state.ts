"use client";

import { useState } from "react";
import { GameState, Player, StakeInfo } from "@/types/game";
import { mockPlayers } from "@/lib/mock-data";

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>("waiting");
  const [stakes, setStakes] = useState<StakeInfo[]>([]);
  const [selectedMove, setSelectedMove] = useState<'rock' | 'paper' | 'scissors'>();
  const [opponentMove, setOpponentMove] = useState<'rock' | 'paper' | 'scissors'>();
  const [result, setResult] = useState<'win' | 'lose' | 'draw'>();

  const maxStakeAmount = 100; // Default max stake amount

  const handleStakeSelect = (amount: number) => {
    setStakes(prev => [...prev, { player: mockPlayers[0].name, amount }]);
  };

  const handleMoveSelect = (move: 'rock' | 'paper' | 'scissors') => {
    setSelectedMove(move);
  };

  const handlePlayAgain = () => {
    setGameState("waiting");
    setStakes([]);
    setSelectedMove(undefined);
    setOpponentMove(undefined);
    setResult(undefined);
  };

  const canUseMove = (move: 'rock' | 'paper' | 'scissors') => true;

  return {
    gameState,
    stakes,
    selectedMove,
    opponentMove,
    result,
    handleStakeSelect,
    handleMoveSelect,
    handlePlayAgain,
    canUseMove,
    player1: mockPlayers[0],
    player2: mockPlayers[1],
    balance: 100,
    maxStakeAmount
  };
}