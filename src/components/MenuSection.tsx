import { useState } from "react";
import { Phone, Utensils } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "../types";
import { OrderModal } from "./OrderModal";

export function MenuSection() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <section
      id="menu"
      aria-label="Restaurant Menu"
      className="py-12 sm:py-16 bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#E8E1D5] text-[#78593E] text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Utensils className="w-3 h-3 text-[#C59B4B]" />
            <span>Desi Culinary Selection</span>
          </div>
          <h2
            id="menu-heading"
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D241E] tracking-tight"
          >
            Traditional Menu Highlights
          </h2>
          <p className="mt-2 text-sm text-[#5D4A3D]">
            Freshly cooked specialties prepared with classic Pakistani spices and flavors.
          </p>
        </div>

        {/* Menu Grid: 1-column mobile, 2-column tablet, 3-column desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {MENU_ITEMS.map((dish, index) => (
            <div
              key={dish.id}
              id={`menu-card-${dish.id}`}
              className="bg-[#FAF8F5] rounded-xl p-3.5 sm:p-4 border border-[#E8E1D5] hover:border-[#C59B4B]/60 shadow-2xs hover:shadow-xs transition-all flex items-center gap-3.5 group"
            >
              {/* Compact Small Image */}
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-lg overflow-hidden shrink-0 bg-[#F4EFE6] border border-[#E8E1D5]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  loading={index < 4 ? "eager" : "lazy"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Dish Details */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-baseline justify-between gap-1">
                    <h3 className="font-serif text-base font-bold text-[#2D241E] group-hover:text-[#1E4535] transition-colors truncate">
                      {dish.name}
                    </h3>
                  </div>
                  <p className="mt-0.5 text-xs text-[#5D4A3D] line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-[#EFE9DC] flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#78593E] bg-[#F4EFE6] px-2 py-0.5 rounded-md">
                    {dish.price}
                  </span>

                  <button
                    type="button"
                    id={`order-btn-${dish.id}`}
                    onClick={() => setSelectedItem(dish)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#1E4535] hover:bg-[#153427] text-[#FAF8F5] text-xs font-medium rounded-md shadow-2xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E4535]"
                    aria-label={`Order ${dish.name}`}
                  >
                    <Phone className="w-3 h-3 text-[#E6C687]" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-[#78593E]/80">
            * Suggested menu items for website structure. Contact the restaurant directly at{" "}
            <a
              href="tel:0512320009"
              className="font-semibold text-[#1E4535] underline underline-offset-2 hover:text-[#C59B4B]"
            >
              (051) 2320009
            </a>{" "}
            for current dish availability and pricing.
          </p>
        </div>
      </div>

      {/* Order Modal */}
      {selectedItem && (
        <OrderModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
