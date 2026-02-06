import { Story } from "@/lib/mock-data";

interface StoryAvatarProps {
  story: Story;
}

export default function StoryAvatar({ story }: StoryAvatarProps) {
  const initials = story.creator.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <button className="flex flex-col items-center gap-1.5 min-w-[72px] group">
      <div
        className={`p-[2px] rounded-full ${
          story.seen
            ? "bg-muted-foreground/20"
            : "gradient-story"
        }`}
      >
        <div className="w-[60px] h-[60px] rounded-full bg-card flex items-center justify-center border-2 border-background group-hover:scale-105 transition-transform">
          <span className="text-sm font-bold text-primary">{initials}</span>
        </div>
      </div>
      <span className="text-[10px] text-muted-foreground font-medium truncate max-w-[72px]">
        {story.creator.name.split(" ")[0]}
      </span>
    </button>
  );
}
