import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Compass,
  Play,
  MessageSquare,
  Sparkles,
  TrendingUp,
  User,
  Zap,
} from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Feed" },
  { to: "/explore", icon: Compass, label: "Explore" },
  { to: "/videos", icon: Play, label: "Videos" },
  { to: "/signals", icon: TrendingUp, label: "Signals" },
  { to: "/ai", icon: Sparkles, label: "AI Copilot" },
  { to: "/messages", icon: MessageSquare, label: "Messages" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 bg-sidebar border-r border-sidebar-border z-40">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-sidebar-border">
        <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-foreground">
            QuantSnap
          </h1>
          <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            Trade Smarter
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
              {item.label}
              {item.label === "Signals" && (
                <span className="ml-auto text-[10px] font-mono bg-bullish/20 text-bullish px-1.5 py-0.5 rounded-full">
                  LIVE
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Market Status */}
      <div className="px-4 pb-3">
        <div className="glass-card rounded-lg p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground">NIFTY 50</span>
            <span className="text-xs font-mono text-bullish">+0.82%</span>
          </div>
          <div className="text-lg font-bold font-mono text-foreground">23,752.40</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-bullish animate-pulse" />
            <span className="text-[10px] text-muted-foreground">Market Open</span>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="px-3 py-3 border-t border-sidebar-border">
        <NavLink
          to="/profile"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">My Profile</p>
            <p className="text-[10px] text-muted-foreground">@trader_you</p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
}
