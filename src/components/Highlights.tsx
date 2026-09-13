import { UtensilsCrossed, Sparkles, Flame, Users2 } from "lucide-react";
import { HIGHLIGHTS } from "../types";

export function Highlights() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-5 h-5 text-[#C59B4B]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#C59B4B]" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-[#C59B4B]" />;
      case "Users2":
        return <Users2 className="w-5 h-5 text-[#C59B4B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C59B4B]" />;
    }
  };

  return (
    <section
      id="highlights"
      aria-label="Restaurant Highlights"
      className="py-8 sm:py-10 bg-[#F4EFE6] border-y border-[#E8E1D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              id={`highlight-${item.id}`}
              className="bg-[#FAF8F5] rounded-xl p-4 sm:p-5 border border-[#E8E1D5] shadow-2xs flex items-start gap-3.5 hover:border-[#C59B4B]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E8E1D5] flex items-center justify-center shrink-0 shadow-2xs">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#2D241E] font-serif">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#5D4A3D] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
