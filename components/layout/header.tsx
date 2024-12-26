"use client";

import { Swords } from "lucide-react";
import Link from "next/link";
import { WalletButton } from "@/components/wallet/wallet-button";
import { useWallet } from "@/context/WalletContext";

export function Header() {
  const { isConnected, address } = useWallet();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Swords className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-base md:text-lg font-bold">BattleVibe</span>
          </Link>

          <div className="flex items-center">
            {isConnected && (
              <span className="text-sm text-muted-foreground mr-4 hidden md:block">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
            )}
            <WalletButton isMobile={false} className="hidden md:flex" />
            <WalletButton isMobile={true} className="flex md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
} 