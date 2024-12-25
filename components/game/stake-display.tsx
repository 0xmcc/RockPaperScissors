import { StakeInfo } from "@/types/game";
import { Card } from "@/components/ui/card";
import { Coins } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface StakeDisplayProps {
  stakes: { player: string; amount: number }[];
  totalPot?: number;
}

export function StakeDisplay({ stakes, totalPot }: StakeDisplayProps) {
  if (stakes.length === 0) return null;

  return (
    <Card className="p-4">
      {totalPot && (
        <div className="flex items-center justify-center gap-2 mb-4 text-xl font-bold">
          <Coins className="w-5 h-5 text-yellow-500" />
          <span>Total Pot: {formatCurrency(totalPot)}</span>
        </div>
      )}
      <div className="space-y-3">
        {stakes.map((stake, index) => (
          <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
            <Coins className="w-4 h-4 text-yellow-500" />
            <span className="font-medium">{formatCurrency(stake.amount)}</span>
            <span className="text-muted-foreground ml-auto">by {stake.player}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}