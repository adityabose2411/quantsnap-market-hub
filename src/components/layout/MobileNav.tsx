import { NavLink, useLocation } from "react-router-dom";
import { Home, Compass, Play, TrendingUp, Sparkles } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Feed" },
  { to: "/explore", icon: Compass, label: "Explore" },
  { to: "/videos", icon: Play, label: "Videos" },
  { to: "/signals", icon: TrendingUp, label: "Signals" },
  { to: "/ai", icon: Sparkles, label: "AI" },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-elevated border-t border-border">
      <div className="flex items-center justify-around py-2 px-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-all ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
