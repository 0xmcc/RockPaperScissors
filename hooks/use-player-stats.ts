import { useState } from "react";
import { Player } from "@/types/game";
import { updatePlayerStats } from "@/lib/stats";

export function usePlayerStats(initialPlayer: Player) {
  const [player, setPlayer] = useState<Player>(initialPlayer);

  const updateStats = (result: "win" | "loss" | "draw", opponentElo: number) => {
    setPlayer(currentPlayer => updatePlayerStats(currentPlayer, result, opponentElo));
  };

  return { player, updateStats };
}