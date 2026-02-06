import AppLayout from "@/components/layout/AppLayout";
import { MessageSquare, Users, Radio } from "lucide-react";

const conversations = [
  {
    id: "1",
    name: "Rajesh Sharma",
    lastMessage: "That BANKNIFTY setup was incredible! 🔥",
    time: "2m ago",
    unread: 3,
    online: true,
  },
  {
    id: "2",
    name: "Options Strategy Room",
    lastMessage: "Priya: Iron condor on NIFTY looking good",
    time: "15m ago",
    unread: 12,
    online: false,
    isGroup: true,
  },
  {
    id: "3",
    name: "Vikram Desai",
    lastMessage: "Check my latest analysis on INFY",
    time: "1h ago",
    unread: 0,
    online: true,
  },
  {
    id: "4",
    name: "Scalpers Hub",
    lastMessage: "Arjun: Entered BANKNIFTY CE at 248",
    time: "2h ago",
    unread: 45,
    online: false,
    isGroup: true,
  },
  {
    id: "5",
    name: "Anita Gupta",
    lastMessage: "Thanks for the feedback on my video!",
    time: "3h ago",
    unread: 0,
    online: false,
  },
];

export default function Messages() {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        <div className="px-4 py-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Messages</h2>
          <p className="text-xs text-muted-foreground">
            Chats, groups & broadcast channels
          </p>

          <div className="flex gap-2 mt-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium gradient-primary text-primary-foreground">
              <MessageSquare className="w-3 h-3" />
              All
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent transition-colors">
              <Users className="w-3 h-3" />
              Groups
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent transition-colors">
              <Radio className="w-3 h-3" />
              Channels
            </button>
          </div>
        </div>

        <div className="divide-y divide-border">
          {conversations.map((conv) => {
            const initials = conv.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <button
                key={conv.id}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors text-left"
              >
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center ${
                      conv.isGroup ? "bg-primary/20" : "bg-secondary"
                    }`}
                  >
                    {conv.isGroup ? (
                      <Users className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-xs font-bold text-primary">
                        {initials}
                      </span>
                    )}
                  </div>
                  {conv.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-bullish border-2 border-background" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground truncate">
                      {conv.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground flex-shrink-0">
                      {conv.time}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {conv.lastMessage}
                  </p>
                </div>

                {conv.unread > 0 && (
                  <span className="w-5 h-5 rounded-full gradient-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                    {conv.unread > 9 ? "9+" : conv.unread}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
