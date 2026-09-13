import { Phone, Mail, X, Check, Copy } from "lucide-react";
import { useState } from "react";
import { MenuItem, RESTAURANT_INFO } from "../types";

interface OrderModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function OrderModal({ item, onClose }: OrderModalProps) {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoUrl = `mailto:${RESTAURANT_INFO.email}?subject=${encodeURIComponent(
    `Order / Inquiry: ${item.name} - Des Pardes Restaurant`
  )}&body=${encodeURIComponent(
    `Hello Des Pardes Restaurant,\n\nI would like to inquire about ordering:\nItem: ${item.name}\nLocation: Saidpur Road, Rawalpindi\n\nPlease let me know the pricing and availability.\n\nThank you!`
  )}`;

  return (
    <div
      id="order-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        id="order-modal-container"
        className="bg-[#FAF8F5] rounded-2xl max-w-md w-full p-6 border border-[#E8E1D5] shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-order-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#5D4A3D] hover:text-[#2D241E] hover:bg-[#F2ECE1] rounded-lg transition-colors"
          aria-label="Close order details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Selected Dish Summary */}
        <div className="flex items-center gap-3.5 pb-4 border-b border-[#E8E1D5]">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-14 h-14 rounded-lg object-cover shrink-0 border border-[#E8E1D5]"
          />
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C59B4B]">
              {item.category}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#2D241E] leading-tight">
              {item.name}
            </h3>
            <p className="text-xs text-[#5D4A3D] mt-0.5">{item.price}</p>
          </div>
        </div>

        {/* Order Guidance */}
        <div className="py-4 space-y-2">
          <p className="text-xs text-[#5D4A3D] leading-relaxed">
            Please call the restaurant directly or send an email to place your order or check today&apos;s specials.
          </p>
          <div className="p-3 bg-[#F4EFE6] rounded-lg border border-[#E8E1D5] flex items-center justify-between text-xs">
            <span className="text-[#5D4A3D]">Saidpur Road, Rawalpindi</span>
            <span className="font-semibold text-[#1E4535]">Des Pardes</span>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <a
            id="order-modal-call-btn"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1E4535] hover:bg-[#153427] text-[#FAF8F5] text-sm font-semibold rounded-lg shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E6C687]" />
            <span>Call to Order: {RESTAURANT_INFO.phone}</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleCopyPhone}
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#2D241E] border border-[#E8E1D5] text-xs font-medium rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-700" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#78593E]" />
                  <span>Copy Phone</span>
                </>
              )}
            </button>

            <a
              href={mailtoUrl}
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#FAF8F5] hover:bg-[#F2ECE1] text-[#2D241E] border border-[#E8E1D5] text-xs font-medium rounded-lg transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#78593E]" />
              <span>Email Order</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
