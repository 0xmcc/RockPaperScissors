export function calculateWinRate(wins: number, losses: number): number {
  if (wins + losses === 0) return 0;
  return Math.round((wins / (wins + losses)) * 100);
}