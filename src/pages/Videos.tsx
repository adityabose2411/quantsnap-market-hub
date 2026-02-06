import AppLayout from "@/components/layout/AppLayout";
import VideoCard from "@/components/feed/VideoCard";
import { videos, categories } from "@/lib/mock-data";
import { useState } from "react";

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <div className="px-4 py-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Videos</h2>
          <p className="text-xs text-muted-foreground">
            Learn from the best trading educators
          </p>
        </div>

        {/* Category Filter */}
        <div className="overflow-x-auto scrollbar-hide px-4 py-3 border-b border-border">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "gradient-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 lg:px-0 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          {filteredVideos.length === 0 && (
            <div className="text-center py-12 text-muted-foreground text-sm">
              No videos in this category yet.
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
