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
  avatar: string;
  stats: PlayerStats;
}

export type GameState = "waiting" | "playing" | "finished";

export type MoveInventory = {
  rock: number;
  paper: number;
  scissors: number;
};

export interface StakeInfo {
  move: Move;
  player: string;
}