"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, ShoppingCart, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-2">
          <Link 
            href="/"
            className={cn(
              "flex flex-col items-center p-2 rounded-lg",
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link 
            href="/battle"
            className={cn(
              "flex flex-col items-center p-2 rounded-lg",
              pathname === "/battle" ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Gamepad2 className="w-6 h-6" />
            <span className="text-xs mt-1">Battle</span>
          </Link>
          <Link 
            href="/shop"
            className={cn(
              "flex flex-col items-center p-2 rounded-lg",
              pathname === "/shop" ? "text-primary" : "text-muted-foreground"
            )}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs mt-1">Shop</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}