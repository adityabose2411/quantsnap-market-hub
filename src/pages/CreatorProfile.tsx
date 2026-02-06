import AppLayout from "@/components/layout/AppLayout";
import SignalCard from "@/components/feed/SignalCard";
import VideoCard from "@/components/feed/VideoCard";
import { creators, signals, videos, formatNumber } from "@/lib/mock-data";
import {
  BadgeCheck,
  UserPlus,
  TrendingUp,
  Play,
  BarChart3,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function CreatorProfile() {
  const creator = creators[0];
  const [activeTab, setActiveTab] = useState<"signals" | "videos" | "about">(
    "signals"
  );

  const initials = creator.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const creatorSignals = signals.filter(
    (s) => s.creator.id === creator.id
  );
  const creatorVideos = videos.filter(
    (v) => v.creator.id === creator.id
  );

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="px-4 py-6 border-b border-border">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-primary">{initials}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-foreground">
                  {creator.name}
                </h2>
                {creator.verified && (
                  <BadgeCheck className="w-5 h-5 text-primary" />
                )}
              </div>
              <p className="text-sm text-muted-foreground">{creator.handle}</p>
              <p className="text-sm text-foreground/80 mt-2">{creator.bio}</p>

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
              <div className="flex items-center gap-6 mt-4">
                <div className="text-center">
                  <p className="text-lg font-bold font-mono text-foreground">
                    {formatNumber(creator.followers)}
                  </p>
                  <p className="text-[10px] text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold font-mono text-bullish">
                    {creator.accuracy}%
                  </p>
                  <p className="text-[10px] text-muted-foreground">Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold font-mono text-foreground">
                    {creatorSignals.length + creatorVideos.length}
                  </p>
                  <p className="text-[10px] text-muted-foreground">Content</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 mt-4">
            <button className="flex-1 py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <UserPlus className="w-4 h-4" />
              Follow
            </button>
            <button className="px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-accent transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {(
            [
              { key: "signals", icon: BarChart3, label: "Signals" },
              { key: "videos", icon: Play, label: "Videos" },
              { key: "about", icon: TrendingUp, label: "About" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-medium transition-all border-b-2 ${
                activeTab === tab.key
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="px-4 lg:px-0 py-4 space-y-4">
          {activeTab === "signals" &&
            (creatorSignals.length > 0 ? (
              creatorSignals.map((s) => <SignalCard key={s.id} signal={s} />)
            ) : (
              <p className="text-center text-sm text-muted-foreground py-8">
                No signals posted yet.
              </p>
            ))}

          {activeTab === "videos" &&
            (creatorVideos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {creatorVideos.map((v) => (
                  <VideoCard key={v.id} video={v} />
                ))}
              </div>
            ) : (
              <p className="text-center text-sm text-muted-foreground py-8">
                No videos posted yet.
              </p>
            ))}

          {activeTab === "about" && (
            <div className="glass-card rounded-xl p-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  About
                </h3>
                <p className="text-sm text-muted-foreground">{creator.bio}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  Trading Style
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {creator.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-lg p-3 text-center">
                <p className="text-[10px] text-muted-foreground font-mono">
                  ⚠️ Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
