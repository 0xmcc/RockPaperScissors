import { MoveInventory } from "@/types/game";
import { Progress } from "@/components/ui/progress";
import { Circle, Hand, Scissors } from "lucide-react";

const moveIcons = {
  rock: Circle,
  paper: Hand,
  scissors: Scissors,
};

interface InventoryDisplayProps {
  inventory: MoveInventory;
}

export function InventoryDisplay({ inventory }: InventoryDisplayProps) {
  const MAX_COUNT = 5;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Move Inventory</h3>
      <div className="grid gap-3">
        {(Object.entries(inventory) as [keyof typeof moveIcons, number][]).map(([move, count]) => {
          const Icon = moveIcons[move];
          return (
            <div key={move} className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="capitalize text-sm">{move}</span>
                  <span className="text-sm text-muted-foreground">{count}/{MAX_COUNT}</span>
                </div>
                <Progress value={(count / MAX_COUNT) * 100} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}