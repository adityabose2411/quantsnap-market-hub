import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import CreatorCard from "@/components/creators/CreatorCard";
import VideoCard from "@/components/feed/VideoCard";
import { creators, videos, categories } from "@/lib/mock-data";
import { Search, TrendingUp, Users, Play } from "lucide-react";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"creators" | "videos">("creators");

  const filteredCreators = creators.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.handle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border space-y-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">Explore</h2>
            <p className="text-xs text-muted-foreground">
              Discover top creators & trading content
            </p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search creators, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-secondary/50 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("creators")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-medium transition-all ${
                activeTab === "creators"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Creators
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-medium transition-all ${
                activeTab === "videos"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              Videos
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 lg:px-0 py-4">
          {activeTab === "creators" && (
            <div className="space-y-3">
              {/* Trending section */}
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Top Creators
                </span>
                <span className="text-[10px] font-mono text-muted-foreground ml-auto">
                  Sorted by accuracy
                </span>
              </div>
              {filteredCreators
                .sort((a, b) => b.accuracy - a.accuracy)
                .map((creator) => (
                  <CreatorCard key={creator.id} creator={creator} />
                ))}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Play className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Trending Videos
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
