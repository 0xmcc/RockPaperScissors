"use client";

import { Button } from "@/components/ui/button";
import { Swords } from "lucide-react";
import Link from "next/link";
// import { usePrivy } from '@privy-io/react-auth';

export function Header() {
//  const { login, authenticated, user } = usePrivy();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Swords className="h-6 w-6" />
            <span className="text-lg font-bold">BattleVibe</span>
          </Link>

          {true ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {/* {user?.email || user?.wallet?.address?.slice(0, 6)} */}
              </span>
              <Button variant="outline" size="sm">
                Profile
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {}}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
} 