import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/components/site-config";

export function QuickContactBar() {
  return (
    <div className="border-b border-[#f0e2d9] bg-[#fffaf7]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-3 text-[11px] font-medium text-[#5d4944] sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
          <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 transition hover:text-[#1a1717]">
            <Phone size={14} className="text-[#c08b56]" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>
          <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#1a1717]">
            <MessageCircle size={14} className="text-[#1f9d61]" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
          <span className="inline-flex items-center gap-2">
            <Clock3 size={14} className="text-[#c08b56]" />
            <span>{siteConfig.hours}</span>
          </span>
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#1a1717]">
            <MapPin size={14} className="text-[#c08b56]" />
            <span>Firozabad Studio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
