import type { PlayerStats } from "@/types/game";
import { calculateWinRate } from "@/lib/game/calculate-win-rate";

interface PlayerStatsProps {
  stats: PlayerStats;
  className?: string;
}

export function PlayerStats({ stats, className = "" }: PlayerStatsProps) {
  const winRate = calculateWinRate(stats.wins, stats.losses);
  
  return (
    <div className={`text-right ${className}`}>
      <p className="text-sm opacity-80">Win Rate</p>
      <p className="text-xl font-bold">{winRate}%</p>
    </div>
  );
}