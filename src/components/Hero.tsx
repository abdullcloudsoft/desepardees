import { Phone, ArrowDown, MapPin } from "lucide-react";
import heroImage from "../assets/images/des_pardes_hero_1789282662049.jpg";
import { RESTAURANT_INFO } from "../types";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative pt-20 md:pt-24 pb-10 md:pb-16 bg-[#FAF8F5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Hero Card Container */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md border border-[#E8E1D5] min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex items-center">
          {/* Single High-Quality Food/Dining Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Authentic Pakistani dining spread with karahi, tandoori naan, and seekh kababs"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Subtle natural light-to-warm gradient overlay - clean, bright, no heavy black */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A1D13]/85 via-[#2A1D13]/60 to-transparent md:w-3/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F150D]/80 via-transparent to-black/30 md:hidden" />
          </div>

          {/* Hero Content positioned directly on the clean overlay */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-xl text-white">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5]/20 backdrop-blur-md border border-white/20 text-[#FAF8F5] text-xs font-medium mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#E6C687]" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>

            {/* Restaurant Title */}
            <h1
              id="hero-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF8F5] leading-tight drop-shadow-xs"
            >
              {RESTAURANT_INFO.name}
            </h1>

            {/* Subtitle */}
            <p
              id="hero-tagline"
              className="mt-3 text-base sm:text-lg text-[#F2ECE1] font-light leading-relaxed max-w-lg drop-shadow-xs"
            >
              {RESTAURANT_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              <a
                id="hero-explore-menu-btn"
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C59B4B] hover:bg-[#B38A3C] active:bg-[#A17A30] text-[#1E1711] font-semibold text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C59B4B] focus:ring-offset-2"
              >
                <span>Explore Menu</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                id="hero-call-now-btn"
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#FAF8F5]/90 hover:bg-[#FAF8F5] text-[#1E4535] font-semibold text-sm shadow-sm transition-all backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <Phone className="w-4 h-4 text-[#1E4535]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Direct Phone Indicator for quick scan */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#E8E1D5]/90">
              <span>Direct inquiries & orders:</span>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="font-semibold text-[#FAF8F5] hover:text-[#E6C687] underline decoration-[#E6C687]/50 underline-offset-2"
              >
                {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
