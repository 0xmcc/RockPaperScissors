import { Move, MoveInventory } from "@/types/game";

export const DEFAULT_INVENTORY: MoveInventory = {
  rock: 5,
  paper: 5,
  scissors: 5,
};

export function consumeMove(inventory: MoveInventory, move: Move): MoveInventory {
  return {
    ...inventory,
    [move]: Math.max(0, inventory[move] - 1),
  };
}

export function canUseMove(inventory: MoveInventory, move: Move): boolean {
  return inventory[move] > 0;
}