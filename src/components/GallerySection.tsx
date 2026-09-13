import { useState } from "react";
import { Camera, X, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS, GalleryImage } from "../types";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <section
      id="gallery"
      aria-label="Restaurant Gallery"
      className="py-12 sm:py-16 bg-[#FAF8F5] border-t border-[#E8E1D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#E8E1D5] text-[#78593E] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Camera className="w-3.5 h-3.5 text-[#C59B4B]" />
            <span>Visual Experience</span>
          </div>
          <h2
            id="gallery-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D241E] tracking-tight"
          >
            Atmosphere & Specialties
          </h2>
          <p className="mt-2 text-sm text-[#5D4A3D]">
            A glimpse into the authentic flavours and welcoming desi dining at Des Pardes.
          </p>
        </div>

        {/* Compact 6-Image Grid (2-cols mobile, 3-cols desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
              className="group relative rounded-xl overflow-hidden bg-[#F4EFE6] border border-[#E8E1D5] aspect-4/3 cursor-pointer shadow-2xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C59B4B]"
              aria-label={`View photo of ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Hover & Focus Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D13]/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 sm:p-4">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E6C687]">
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#FAF8F5] leading-snug">
                  {item.title}
                </p>
                <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#FAF8F5]/80 mt-1">
                  <ZoomIn className="w-3 h-3 text-[#E6C687]" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E8E1D5] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-lightbox-btn"
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-[#2D241E]/80 hover:bg-[#2D241E] text-white rounded-full transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-5 bg-[#FAF8F5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-[#E8E1D5]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B4B]">
                  {activeImage.category}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D241E]">
                  {activeImage.title}
                </h3>
              </div>
              <p className="text-xs text-[#5D4A3D] max-w-sm sm:text-right">
                {activeImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
