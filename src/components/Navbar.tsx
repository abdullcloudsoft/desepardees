import { useState, useEffect } from "react";
import { Phone, Menu as MenuIcon, X, MapPin } from "lucide-react";
import { RESTAURANT_INFO } from "../types";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Highlights", href: "#highlights" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#E8E1D5]"
          : "bg-[#FAF8F5]/90 backdrop-blur-xs py-3 border-b border-[#E8E1D5]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#home"
            id="nav-logo"
            className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#C59B4B] rounded-lg"
          >
            <div className="w-9 h-9 rounded-full bg-[#1E4535] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-semibold tracking-wide border border-[#C59B4B]/40 shadow-xs group-hover:scale-105 transition-transform">
              DP
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#2D241E] group-hover:text-[#1E4535] transition-colors">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#78593E] font-medium hidden sm:inline-flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-[#C59B4B]" />
                Saidpur Road, Rawalpindi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-[#4A3B32] hover:text-[#1E4535] hover:bg-[#F2ECE1] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#C59B4B]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="desktop-call-btn"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E4535] hover:bg-[#153427] text-[#FAF8F5] text-sm font-semibold rounded-lg shadow-xs hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E4535]"
            >
              <Phone className="w-4 h-4 text-[#E6C687]" />
              <span>Call Now</span>
              <span className="text-xs text-[#E6C687] font-normal border-l border-[#2D5A43] pl-2">
                {RESTAURANT_INFO.phone}
              </span>
            </a>
          </div>

          {/* Mobile Right Controls: Call Button + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              id="mobile-header-call-btn"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              aria-label="Call Restaurant"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#1E4535] text-[#FAF8F5] text-xs font-semibold rounded-lg shadow-xs active:bg-[#153427]"
            >
              <Phone className="w-3.5 h-3.5 text-[#E6C687]" />
              <span>Call</span>
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A3B32] hover:text-[#1E4535] hover:bg-[#F2ECE1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C59B4B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="md:hidden border-t border-[#E8E1D5] bg-[#FAF8F5] px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="pb-2 mb-2 border-b border-[#E8E1D5] text-xs text-[#78593E] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C59B4B] shrink-0" />
            <span>Saidpur Road, Rawalpindi, Pakistan</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-[#2D241E] hover:bg-[#F2ECE1] rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 mt-2 border-t border-[#E8E1D5] space-y-2">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#1E4535] text-[#FAF8F5] rounded-lg font-semibold text-sm shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#E6C687]" />
              <span>Call Now: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
