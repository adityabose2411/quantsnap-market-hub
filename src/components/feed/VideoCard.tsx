import { Video, formatNumber, timeAgo } from "@/lib/mock-data";
import { Play, BadgeCheck } from "lucide-react";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const initials = video.creator.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="group glass-card rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300 shadow-card animate-fade-up">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-secondary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        <Play className="w-10 h-10 text-muted-foreground/30" />
        
        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 z-20 text-[10px] font-mono bg-background/80 text-foreground px-1.5 py-0.5 rounded">
          {video.duration}
        </span>

        {/* Category badge */}
        <span className="absolute top-2 left-2 z-20 text-[10px] font-mono bg-primary/20 text-primary px-2 py-0.5 rounded-full">
          {video.category}
        </span>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      </div>

      {/* Info */}
      <div className="p-3 space-y-2">
        <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-[8px] font-bold text-primary">{initials}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">
              {video.creator.name}
            </span>
            {video.creator.verified && (
              <BadgeCheck className="w-3 h-3 text-primary" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <span>{formatNumber(video.views)} views</span>
          <span>•</span>
          <span>{timeAgo(video.timestamp)}</span>
        </div>
      </div>
    </div>
  );
}
