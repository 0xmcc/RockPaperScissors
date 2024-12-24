"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Swords, Trophy, ShoppingBag } from "lucide-react";
import Link from "next/link";

const modes = [
  {
    title: "Quick Battle",
    description: "Jump into a match and test your skills against an opponent",
    icon: Swords,
    color: "text-blue-500",
    href: "/battle",
    primary: true,
  },
  {
    title: "Ranked Mode",
    description: "Compete in ranked matches to climb the global leaderboard",
    icon: Trophy,
    color: "text-yellow-500",
    href: "/battle",
  },
  {
    title: "Item Shop",
    description: "Get new items and customize your inventory",
    icon: ShoppingBag,
    color: "text-green-500",
    href: "/shop",
  },
];

export function GameModes() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Game Modes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {modes.map(({ title, description, icon: Icon, color, href, primary }) => (
          <Card key={title} className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={`${color} bg-background p-4 rounded-full`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
              <Button 
                asChild 
                variant={primary ? "default" : "outline"}
                className="w-full"
              >
                <Link href={href}>Play Now</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}