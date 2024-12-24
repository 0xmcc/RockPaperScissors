import { Player } from "@/types/game";

export const mockPlayers: Player[] = [
  {
    id: "1",
    name: "Player One",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&h=600&fit=crop",
    stats: { wins: 0, losses: 0, draws: 0, elo: 1200 }
  },
  {
    id: "2",
    name: "Player Two",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop",
    stats: { wins: 0, losses: 0, draws: 0, elo: 1200 }
  }
];