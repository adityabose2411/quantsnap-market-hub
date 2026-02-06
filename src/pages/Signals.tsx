import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import SignalCard from "@/components/feed/SignalCard";
import { signals } from "@/lib/mock-data";
import { TrendingUp, Filter } from "lucide-react";

export default function Signals() {
  const [filterType, setFilterType] = useState<"ALL" | "BUY" | "SELL">("ALL");

  const filteredSignals =
    filterType === "ALL"
      ? signals
      : signals.filter((s) => s.type === filterType);

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        <div className="px-4 py-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-foreground">Signals</h2>
                <span className="text-[10px] font-mono bg-bullish/20 text-bullish px-2 py-0.5 rounded-full animate-pulse">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Real-time trade signals from top creators
              </p>
            </div>
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>

          {/* Filter */}
          <div className="flex gap-2 mt-3">
            {(["ALL", "BUY", "SELL"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  filterType === type
                    ? type === "BUY"
                      ? "bg-bullish/20 text-bullish"
                      : type === "SELL"
                      ? "bg-bearish/20 text-bearish"
                      : "gradient-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 lg:px-0 py-4 space-y-4">
          {filteredSignals.map((signal) => (
            <SignalCard key={signal.id} signal={signal} />
          ))}

          {/* Disclaimer */}
          <div className="glass-card rounded-lg p-3 text-center">
            <p className="text-[10px] text-muted-foreground font-mono">
              ⚠️ Signals are educational only. Always do your own analysis. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
