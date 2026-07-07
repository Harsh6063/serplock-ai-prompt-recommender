import { Bot, Search, Sparkles } from "lucide-react";

export default function HeroStats() {
  const stats = [
    {
      icon: Search,
      text: "AI Website Analysis",
    },
    {
      icon: Bot,
      text: "Prompt Generation",
    },
    {
      icon: Sparkles,
      text: "Top 20 Recommendations",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">

      {stats.map((item) => (
        <div
          key={item.text}
          className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm"
        >
          <item.icon className="h-5 w-5 text-[#2F6BFF]" />

          <span className="text-sm font-medium">
            {item.text}
          </span>
        </div>
      ))}

    </div>
  );
}