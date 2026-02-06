import { Post, formatNumber, timeAgo } from "@/lib/mock-data";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  BadgeCheck,
} from "lucide-react";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const initials = post.creator.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="glass-card rounded-xl p-4 space-y-3 hover:border-primary/20 transition-all duration-300 shadow-card animate-fade-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">{initials}</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-foreground">
                {post.creator.name}
              </span>
              {post.creator.verified && (
                <BadgeCheck className="w-3.5 h-3.5 text-primary" />
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground">
                {timeAgo(post.timestamp)}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">
                {post.category}
              </span>
            </div>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>

      {/* Engagement */}
      <div className="flex items-center gap-4 pt-2 border-t border-border/50">
        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-bearish transition-colors">
          <Heart className="w-4 h-4" />
          <span className="text-xs">{formatNumber(post.likes)}</span>
        </button>
        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs">{formatNumber(post.comments)}</span>
        </button>
        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-warning transition-colors ml-auto">
          <Bookmark className="w-4 h-4" />
          <span className="text-xs">{formatNumber(post.saves)}</span>
        </button>
      </div>
    </div>
  );
}
