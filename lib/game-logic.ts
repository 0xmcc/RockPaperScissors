import { Move, Battle, Player } from "@/types/game";

export function determineWinner(move1: Move, move2: Move): 'player1' | 'player2' | 'draw' {
  if (move1 === move2) return 'draw';
  
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };
  
  return winConditions[move1] === move2 ? 'player1' : 'player2';
}

export function calculateNewStats(currentStats: Player['stats'], hasWon: boolean, isDraw: boolean) {
  return {
    wins: currentStats.wins + (hasWon ? 1 : 0),
    losses: currentStats.losses + (!hasWon && !isDraw ? 1 : 0),
    draws: currentStats.draws + (isDraw ? 1 : 0),
  };
}