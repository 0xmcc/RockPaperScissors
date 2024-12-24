"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Square, FileText, Scissors } from "lucide-react";
import { MoveInventory } from "@/types/game";
import { DEFAULT_INVENTORY } from "@/lib/inventory";

const MOVE_PRICES = {
  rock: 10,
  paper: 10,
  scissors: 10,
};

const MOVE_ICONS = {
  rock: Square,
  paper: FileText,
  scissors: Scissors,
};

export default function ShopPage() {
  const [inventory, setInventory] = useState<MoveInventory>(DEFAULT_INVENTORY);
  const [coins, setCoins] = useState(100);

  const purchaseMove = (move: keyof MoveInventory) => {
    if (coins >= MOVE_PRICES[move]) {
      setInventory(prev => ({
        ...prev,
        [move]: prev[move] + 1
      }));
      setCoins(prev => prev - MOVE_PRICES[move]);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 mb-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Shop</h1>
          <div className="text-lg font-semibold">
            Coins: {coins}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(Object.keys(MOVE_PRICES) as Array<keyof typeof MOVE_PRICES>).map((move) => {
            const Icon = MOVE_ICONS[move];
            return (
              <Card key={move} className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-muted">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-semibold capitalize">{move}</h2>
                  <div className="text-muted-foreground">
                    Current: {inventory[move]}
                  </div>
                  <Button
                    onClick={() => purchaseMove(move)}
                    disabled={coins < MOVE_PRICES[move]}
                    className="w-full"
                  >
                    Buy for {MOVE_PRICES[move]} coins
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </main>
  );
}