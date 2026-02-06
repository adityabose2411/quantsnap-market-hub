import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import StoriesBar from "@/components/stories/StoriesBar";
import FeedFilters from "@/components/feed/FeedFilters";
import SignalCard from "@/components/feed/SignalCard";
import PostCard from "@/components/feed/PostCard";
import { signals, posts } from "@/lib/mock-data";
import { Bell, Search } from "lucide-react";

export default function Index() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between px-4 py-4 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-foreground">Your Feed</h2>
            <p className="text-xs text-muted-foreground">
              Latest from creators you follow
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-bearish" />
            </button>
          </div>
        </div>

        {/* Stories */}
        <div className="border-b border-border">
          <StoriesBar />
        </div>

        {/* Filters */}
        <div className="pt-3">
          <FeedFilters active={activeFilter} onSelect={setActiveFilter} />
        </div>

        {/* Feed */}
        <div className="px-4 lg:px-0 py-4 space-y-4">
          <SignalCard signal={signals[0]} />
          <PostCard post={posts[0]} />
          <SignalCard signal={signals[1]} />
          <PostCard post={posts[1]} />
          <SignalCard signal={signals[2]} />
          <PostCard post={posts[2]} />

          {/* Disclaimer */}
          <div className="glass-card rounded-lg p-3 text-center">
            <p className="text-[10px] text-muted-foreground font-mono">
              ⚠️ Educational content only. Not financial advice. Trade at your own risk.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
