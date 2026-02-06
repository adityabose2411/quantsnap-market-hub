import { stories } from "@/lib/mock-data";
import StoryAvatar from "./StoryAvatar";
import { Plus } from "lucide-react";

export default function StoriesBar() {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 px-4 lg:px-0 py-3">
        {/* Your Story */}
        <button className="flex flex-col items-center gap-1.5 min-w-[72px]">
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center bg-secondary/50 hover:bg-secondary transition-colors">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground font-medium">
            Your Story
          </span>
        </button>

        {/* Creator Stories */}
        {stories.map((story) => (
          <StoryAvatar key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}
