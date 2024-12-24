import { Player } from "@/types/game";
import { calculateEloChange } from "./elo";

export function updatePlayerStats(
  player: Player,
  result: "win" | "loss" | "draw",
  opponentElo: number
): Player {
  const eloChange = calculateEloChange(
    player.stats.elo,
    opponentElo,
    result === "win",
    result === "draw"
  );

  return {
    ...player,
    stats: {
      wins: player.stats.wins + (result === "win" ? 1 : 0),
      losses: player.stats.losses + (result === "loss" ? 1 : 0),
      draws: player.stats.draws + (result === "draw" ? 1 : 0),
      elo: player.stats.elo + eloChange
    }
  };
}