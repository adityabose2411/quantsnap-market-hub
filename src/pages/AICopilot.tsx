import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import {
  Sparkles,
  Send,
  ImageIcon,
  TrendingUp,
  Brain,
  Shield,
} from "lucide-react";
import quantsnapLogo from "@/assets/quantsnap-logo.png";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  { icon: TrendingUp, text: "Analyze NIFTY chart pattern" },
  { icon: Brain, text: "Explain RSI divergence" },
  { icon: Shield, text: "Risk management for scalping" },
  { icon: ImageIcon, text: "Upload chart for AI analysis" },
];

export default function AICopilot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hey! I'm QuantSnap AI, your trading copilot. 🧠\n\nI can help you analyze charts, understand indicators, evaluate signals, and improve your risk management.\n\nUpload a chart screenshot or ask me anything about the markets!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "This is a demo response. Connect to Lovable Cloud to enable real AI analysis with chart detection, indicator recognition, and market insights. 🚀",
      },
    ]);
    setInput("");
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto flex flex-col h-[calc(100vh-64px)] lg:h-screen">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={quantsnapLogo} alt="QuantSnap AI" className="w-9 h-9 object-cover" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">AI Copilot</h2>
              <p className="text-[10px] text-muted-foreground font-mono">
                Chart analysis • Indicators • Risk management
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "gradient-primary text-primary-foreground rounded-br-md"
                    : "glass-card text-foreground rounded-bl-md"
                }`}
              >
                <p className="whitespace-pre-line">{msg.content}</p>
              </div>
            </div>
          ))}

          {/* Suggestions (show only when few messages) */}
          {messages.length <= 1 && (
            <div className="grid grid-cols-2 gap-2 pt-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setInput(s.text)}
                  className="glass-card rounded-lg p-3 text-left hover:border-primary/30 transition-all group"
                >
                  <s.icon className="w-4 h-4 text-primary mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-foreground/80">{s.text}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="px-4 pb-4 lg:pb-4 pb-20 flex-shrink-0">
          <div className="flex items-center gap-2 glass-card rounded-xl p-2">
            <button className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
              <ImageIcon className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about charts, signals, risk..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground disabled:opacity-30 transition-opacity flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[8px] text-muted-foreground text-center mt-2 font-mono">
            ⚠️ AI analysis is educational only. Not financial advice.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
