import { Phone } from "lucide-react";
import { RESTAURANT_INFO } from "../types";

export function FloatingCallButton() {
  return (
    <div
      id="floating-call-container"
      className="fixed bottom-5 right-5 z-40 md:hidden"
    >
      <a
        id="floating-call-btn"
        href={`tel:${RESTAURANT_INFO.phoneRaw}`}
        aria-label="Call Des Pardes Restaurant directly"
        className="flex items-center gap-2 px-4 py-3 bg-[#1E4535] hover:bg-[#153427] text-[#FAF8F5] rounded-full shadow-lg border border-[#C59B4B]/40 active:scale-95 transition-transform"
      >
        <div className="w-6 h-6 rounded-full bg-[#FAF8F5]/10 flex items-center justify-center">
          <Phone className="w-3.5 h-3.5 text-[#E6C687]" />
        </div>
        <span className="text-xs font-bold tracking-wide">Call Now</span>
      </a>
    </div>
  );
}
