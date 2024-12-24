const K_FACTOR = 32;

export function calculateEloChange(
  playerRating: number,
  opponentRating: number,
  playerWon: boolean,
  isDraw: boolean
): number {
  const expectedScore = 1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400));
  const actualScore = isDraw ? 0.5 : playerWon ? 1 : 0;
  
  return Math.round(K_FACTOR * (actualScore - expectedScore));
}

export function getEloRank(elo: number): string {
  if (elo >= 2200) return "Grandmaster";
  if (elo >= 2000) return "Master";
  if (elo >= 1800) return "Expert";
  if (elo >= 1600) return "Advanced";
  if (elo >= 1400) return "Intermediate";
  if (elo >= 1200) return "Novice";
  return "Beginner";
}