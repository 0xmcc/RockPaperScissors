import { Move } from "@/types/game";

export function getRandomMove(): Move {
  const moves: Move[] = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}