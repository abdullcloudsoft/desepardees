import { Phone, Mail, MapPin, Navigation, ExternalLink } from "lucide-react";
import { RESTAURANT_INFO } from "../types";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-12 sm:py-16 bg-[#F5F0E6] border-t border-[#E8E1D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E1D5] text-[#78593E] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Phone className="w-3.5 h-3.5 text-[#C59B4B]" />
            <span>Connect & Inquire</span>
          </div>
          <h2
            id="contact-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D241E] tracking-tight"
          >
            Contact {RESTAURANT_INFO.name}
          </h2>
          <p className="mt-2 text-sm text-[#5D4A3D]">
            We welcome you on Saidpur Road, Rawalpindi. Reach out to us directly for any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-6 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E8E1D5] shadow-xs space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#78593E]">
                Restaurant Name
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D241E] mt-0.5">
                {RESTAURANT_INFO.name}
              </h3>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-[#E8E1D5]">
              <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#C59B4B]" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#78593E]">
                  Address
                </span>
                <p className="text-base text-[#2D241E] font-medium mt-0.5">
                  {RESTAURANT_INFO.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-[#E8E1D5]">
              <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#1E4535]" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#78593E]">
                  Phone Number
                </span>
                <p className="mt-0.5">
                  <a
                    id="contact-phone-link"
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="text-lg font-bold text-[#1E4535] hover:text-[#C59B4B] transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </p>
                <span className="text-xs text-[#78593E]">Tap to call directly from your device</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-[#E8E1D5]">
              <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] border border-[#E8E1D5] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#78593E]" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#78593E]">
                  Email Address
                </span>
                <p className="mt-0.5 truncate">
                  <a
                    id="contact-email-link"
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-base font-medium text-[#2D241E] hover:text-[#1E4535] underline decoration-[#C59B4B] underline-offset-2 transition-colors break-all"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 border-t border-[#E8E1D5] grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                id="contact-call-btn"
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1E4535] hover:bg-[#153427] text-[#FAF8F5] text-xs font-semibold rounded-lg shadow-2xs transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E6C687]" />
                <span>Call Now</span>
              </a>

              <a
                id="contact-email-btn"
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#2D241E] border border-[#E8E1D5] text-xs font-semibold rounded-lg shadow-2xs transition-colors"
              >
                <Mail className="w-4 h-4 text-[#78593E]" />
                <span>Email Us</span>
              </a>

              <a
                id="contact-directions-btn"
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#2D241E] border border-[#E8E1D5] text-xs font-semibold rounded-lg shadow-2xs transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#78593E]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#78593E]">
                Official Social Media
              </span>

              <div className="flex items-center gap-3">
                <a
                  id="social-facebook-link"
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Des Pardes Restaurant on Facebook"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#2D241E] hover:text-[#1877F2] border border-[#E8E1D5] text-xs font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-[#78593E]" />
                </a>

                <a
                  id="social-instagram-link"
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Des Pardes Restaurant on Instagram"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#2D241E] hover:text-[#E4405F] border border-[#E8E1D5] text-xs font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-[#78593E]" />
                </a>
              </div>
            </div>
          </div>

          {/* Map & Location Overview */}
          <div className="lg:col-span-6 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E8E1D5] shadow-xs flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#78593E]">
                  Location Map
                </span>
                <span className="text-xs font-medium text-[#1E4535] bg-[#F4EFE6] px-2.5 py-1 rounded-md">
                  Saidpur Road, Rawalpindi
                </span>
              </div>

              {/* Styled Interactive Map Container */}
              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-[#E8E1D5] relative bg-[#EFE9DC]">
                <iframe
                  title="Des Pardes Restaurant Location Map"
                  src="https://maps.google.com/maps?q=Saidpur+Road,+Rawalpindi,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#E8E1D5] flex items-center justify-between flex-wrap gap-2 text-xs text-[#5D4A3D]">
              <span>Rawalpindi, Punjab, Pakistan</span>
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1E4535] hover:text-[#C59B4B] inline-flex items-center gap-1 underline underline-offset-2"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
