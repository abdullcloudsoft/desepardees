import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { RESTAURANT_INFO } from "../types";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Des Pardes Restaurant"
      className="py-12 sm:py-16 bg-[#F5F0E6] border-t border-[#E8E1D5]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E1D5] text-[#78593E] text-xs font-semibold uppercase tracking-wider mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#C59B4B]" />
          <span>Saidpur Road, Rawalpindi</span>
        </div>

        {/* Heading */}
        <h2
          id="about-heading"
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D241E] tracking-tight"
        >
          About {RESTAURANT_INFO.name}
        </h2>

        {/* Short, Exact Copy */}
        <p className="mt-4 text-base sm:text-lg text-[#4A3B32] font-normal leading-relaxed max-w-2xl mx-auto">
          {RESTAURANT_INFO.name} brings a warm Pakistani dining experience to Saidpur Road,
          Rawalpindi, with a focus on flavorful traditional food and a welcoming atmosphere.
        </p>

        {/* Key Information Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-2xl mx-auto text-left">
          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E1D5]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78593E]">
              Location
            </span>
            <p className="mt-1 text-sm font-medium text-[#2D241E]">
              Saidpur Road, Rawalpindi
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E1D5]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78593E]">
              Dining Style
            </span>
            <p className="mt-1 text-sm font-medium text-[#2D241E]">
              Authentic Pakistani & Desi
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E1D5]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78593E]">
              Inquiries & Orders
            </span>
            <p className="mt-1 text-sm font-medium text-[#2D241E]">
              (051) 2320009
            </p>
          </div>
        </div>

        {/* Direct Action Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            id="about-call-btn"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1E4535] hover:bg-[#153427] text-[#FAF8F5] text-sm font-semibold rounded-lg shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E6C687]" />
            <span>Call Restaurant</span>
          </a>

          <a
            id="about-directions-btn"
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#2D241E] border border-[#E8E1D5] text-sm font-semibold rounded-lg shadow-2xs transition-colors"
          >
            <Navigation className="w-4 h-4 text-[#78593E]" />
            <span>Get Directions</span>
          </a>

          <a
            id="about-email-btn"
            href={`mailto:${RESTAURANT_INFO.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#2D241E] border border-[#E8E1D5] text-sm font-semibold rounded-lg shadow-2xs transition-colors"
          >
            <Mail className="w-4 h-4 text-[#78593E]" />
            <span>Email Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
