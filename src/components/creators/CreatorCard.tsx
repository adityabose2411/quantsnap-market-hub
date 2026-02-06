import { Creator, formatNumber } from "@/lib/mock-data";
import { BadgeCheck, UserPlus, TrendingUp } from "lucide-react";

interface CreatorCardProps {
  creator: Creator;
}

export default function CreatorCard({ creator }: CreatorCardProps) {
  const initials = creator.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="glass-card rounded-xl p-4 hover:border-primary/20 transition-all duration-300 shadow-card animate-fade-up">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold text-primary">{initials}</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-foreground truncate">
              {creator.name}
            </span>
            {creator.verified && (
              <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
            )}
          </div>
          <p className="text-xs text-muted-foreground">{creator.handle}</p>
          <p className="text-xs text-foreground/70 mt-1 line-clamp-2">
            {creator.bio}
          </p>

          {/* Tags */}
          <div className="flex gap-1.5 mt-2 flex-wrap">
            {creator.specialties.map((s) => (
              <span
                key={s}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <UserPlus className="w-3 h-3" />
              <span className="font-mono">{formatNumber(creator.followers)}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <TrendingUp className="w-3 h-3 text-bullish" />
              <span className="font-mono text-bullish">{creator.accuracy}%</span>
              <span className="text-muted-foreground">accuracy</span>
            </div>
          </div>
        </div>

        {/* Follow button */}
        <button className="px-3 py-1.5 rounded-lg gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex-shrink-0">
          Follow
        </button>
      </div>
    </div>
  );
}
