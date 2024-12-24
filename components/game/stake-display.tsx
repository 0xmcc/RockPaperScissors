import { StakeInfo } from "@/types/game";
import { Card } from "@/components/ui/card";
import { Square, FileText, Scissors } from "lucide-react";

const moveIcons = {
  rock: Square,
  paper: FileText,
  scissors: Scissors,
};

interface StakeDisplayProps {
  stakes: StakeInfo[];
}

export function StakeDisplay({ stakes }: StakeDisplayProps) {
  if (stakes.length === 0) return null;

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Current Stakes</h3>
      <div className="space-y-3">
        {stakes.map((stake, index) => {
          const Icon = moveIcons[stake.move];
          return (
            <div key={index} className="flex items-center gap-3">
              <Icon className="w-5 h-5" />
              <span className="capitalize">{stake.move}</span>
              <span className="text-muted-foreground ml-auto">by {stake.player}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}