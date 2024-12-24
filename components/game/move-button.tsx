"use client";

import { Move } from "@/types/game";
import { Button } from "@/components/ui/button";
import { Circle, Hand, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoveButtonProps {
  move: Move;
  selected?: boolean;
  disabled?: boolean;
  onSelect: (move: Move) => void;
}

const moveIcons = {
  rock: Circle,
  paper: Hand,
  scissors: Scissors,
};

export function MoveButton({ move, selected, disabled, onSelect }: MoveButtonProps) {
  const Icon = moveIcons[move];
  
  return (
    <Button
      variant={selected ? "default" : "outline"}
      size="lg"
      className={cn(
        "w-24 h-24 rounded-full",
        selected && "bg-primary text-primary-foreground"
      )}
      disabled={disabled}
      onClick={() => onSelect(move)}
    >
      <Icon className="w-12 h-12" />
    </Button>
  );
}