import { Badge } from "@/components/ui/badge";
import { getEloRank } from "@/lib/elo";

interface EloBadgeProps {
  elo: number;
}

export function EloBadge({ elo }: EloBadgeProps) {
  const rank = getEloRank(elo);
  
  return (
    <Badge variant="secondary" className="ml-2">
      {elo} • {rank}
    </Badge>
  );
}