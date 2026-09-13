import { Phone, Mail, MapPin } from "lucide-react";
import { RESTAURANT_INFO } from "../types";

export function Footer() {
  return (
    <footer
      id="main-footer"
      className="bg-[#261E17] text-[#FAF8F5] py-10 border-t border-[#3D2F24]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#3D2F24]">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#1E4535] text-[#FAF8F5] flex items-center justify-center font-serif text-sm font-semibold border border-[#C59B4B]/40">
                DP
              </span>
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5]">
                {RESTAURANT_INFO.name}
              </h3>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#D9CEBF] max-w-sm flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C59B4B] shrink-0" />
              <span>{RESTAURANT_INFO.address}</span>
            </p>
          </div>

          {/* Contact info list */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#D9CEBF]">
            <a
              id="footer-phone-link"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="flex items-center gap-2 hover:text-[#E6C687] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E6C687]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${RESTAURANT_INFO.email}`}
              className="flex items-center gap-2 hover:text-[#E6C687] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#E6C687]" />
              <span>{RESTAURANT_INFO.email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              id="footer-facebook-link"
              href={RESTAURANT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-[#D9CEBF] hover:text-[#FAF8F5] transition-colors"
            >
              Facebook
            </a>
            <span className="text-[#5D4A3D]">•</span>
            <a
              id="footer-instagram-link"
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-[#D9CEBF] hover:text-[#FAF8F5] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A89885] gap-2">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</p>
          <p>Saidpur Road, Rawalpindi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
