import { Bell, Search, Zap } from "lucide-react";

export default function MobileHeader() {
  return (
    <header className="lg:hidden sticky top-0 z-40 glass-elevated border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            QuantSnap
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-bearish" />
          </button>
        </div>
      </div>
    </header>
  );
}
