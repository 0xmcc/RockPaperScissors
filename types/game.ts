export type Move = "rock" | "paper" | "scissors";

export interface PlayerStats {
  wins: number;
  losses: number;
  draws: number;
  elo: number;
}

export interface Player {
  id: string;
  name: string;
  balance: number;
  avatar: string;
  stats: {
    wins: number;
    losses: number;
    draws: number;
    elo: number;
  };
}

export type GameState = "waiting" | "playing" | "finished";

export type MoveInventory = {
  rock: number;
  paper: number;
  scissors: number;
};

export interface StakeInfo {
  player: string;
  amount: number;
  move?: Move;
}
