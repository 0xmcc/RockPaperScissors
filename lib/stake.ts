import { Move, MoveInventory, StakeInfo } from "@/types/game";

export function addStake(stakes: StakeInfo[], move: Move, playerName: string): StakeInfo[] {
  const existingStakeIndex = stakes.findIndex(stake => stake.player === playerName);
  if (existingStakeIndex >= 0) {
    const newStakes = [...stakes];
    newStakes[existingStakeIndex] = { move, player: playerName, amount: 1 };
    return newStakes;
  }
  return [...stakes, { move, player: playerName, amount: 1 }];
}

export function resolveStakes(
  stakes: StakeInfo[],
  winnerName: string,
  inventory: MoveInventory
): MoveInventory {
  const updatedInventory = { ...inventory };
  
  stakes.forEach(stake => {
    if (stake.player === winnerName) {
      // Winner gets their stake back plus opponent's stake
      if (stake.move && stake.move in updatedInventory) {
        updatedInventory[stake.move] += stake.amount * 2;
      }
    } else {
      // Loser's stake is already removed when they placed it
    }
  });
  
  return updatedInventory;
}