import { Signal, formatNumber, timeAgo } from "@/lib/mock-data";
import {
  ArrowUpRight,
  ArrowDownRight,
  Heart,
  MessageCircle,
  Bookmark,
  Shield,
  Target,
  Clock,
  BadgeCheck,
} from "lucide-react";

interface SignalCardProps {
  signal: Signal;
}

export default function SignalCard({ signal }: SignalCardProps) {
  const isBuy = signal.type === "BUY";
  const initials = signal.creator.name
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
                {signal.creator.name}
              </span>
              {signal.creator.verified && (
                <BadgeCheck className="w-3.5 h-3.5 text-primary" />
              )}
            </div>
            <span className="text-[10px] text-muted-foreground">
              {timeAgo(signal.timestamp)}
            </span>
          </div>
        </div>

        {/* Signal Type Badge */}
        <div
          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold font-mono ${
            isBuy
              ? "bg-bullish/15 text-bullish"
              : "bg-bearish/15 text-bearish"
          }`}
        >
          {isBuy ? (
            <ArrowUpRight className="w-3.5 h-3.5" />
          ) : (
            <ArrowDownRight className="w-3.5 h-3.5" />
          )}
          {signal.type}
        </div>
      </div>

      {/* Instrument */}
      <div className="text-base font-bold font-mono text-foreground">
        {signal.instrument}
      </div>

      {/* Signal Data */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-secondary/50 rounded-lg p-2.5 text-center">
          <p className="text-[10px] text-muted-foreground font-mono uppercase">
            Entry
          </p>
          <p className="text-sm font-bold font-mono text-foreground">
            ₹{signal.entry}
          </p>
        </div>
        <div className="bg-bearish/10 rounded-lg p-2.5 text-center">
          <p className="text-[10px] text-muted-foreground font-mono uppercase">
            Stop Loss
          </p>
          <p className="text-sm font-bold font-mono text-bearish">
            ₹{signal.stopLoss}
          </p>
        </div>
        <div className="bg-bullish/10 rounded-lg p-2.5 text-center">
          <p className="text-[10px] text-muted-foreground font-mono uppercase">
            Target 1
          </p>
          <p className="text-sm font-bold font-mono text-bullish">
            ₹{signal.targets[0]}
          </p>
        </div>
      </div>

      {/* All targets */}
      {signal.targets.length > 1 && (
        <div className="flex items-center gap-2">
          <Target className="w-3.5 h-3.5 text-muted-foreground" />
          <div className="flex gap-2">
            {signal.targets.map((t, i) => (
              <span
                key={i}
                className="text-xs font-mono text-bullish/80"
              >
                T{i + 1}: ₹{t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Meta row */}
      <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span className="font-mono">{signal.timeframe}</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3" />
          <span
            className={`font-mono ${
              signal.risk === "HIGH"
                ? "text-bearish"
                : signal.risk === "LOW"
                ? "text-bullish"
                : "text-warning"
            }`}
          >
            {signal.risk} RISK
          </span>
        </div>
        {signal.accuracy && (
          <span className="ml-auto font-mono text-primary">
            {signal.accuracy}% accuracy
          </span>
        )}
      </div>

      {/* Engagement */}
      <div className="flex items-center gap-4 pt-2 border-t border-border/50">
        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-bearish transition-colors">
          <Heart className="w-4 h-4" />
          <span className="text-xs">{formatNumber(signal.likes)}</span>
        </button>
        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs">{formatNumber(signal.comments)}</span>
        </button>
        <button className="flex items-center gap-1.5 text-muted-foreground hover:text-warning transition-colors ml-auto">
          <Bookmark className="w-4 h-4" />
          <span className="text-xs">{formatNumber(signal.saves)}</span>
        </button>
      </div>
    </div>
  );
}
