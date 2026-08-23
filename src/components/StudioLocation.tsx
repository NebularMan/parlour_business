import { Clock3, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/components/site-config";

export function StudioLocation() {
  return (
    <div className="rounded-[30px] border border-[#f0e1d8] bg-[#fffaf8] p-5 shadow-[0_20px_50px_rgba(84,53,39,0.06)] sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7e6d7] text-[#1b1717]">
          <MapPin size={18} />
        </div>
        <div>
          <p className="text-[10px] font-semibold tracking-[0.24em] text-[#8e6a58] uppercase">Studio location</p>
          <p className="mt-1 text-base font-semibold text-[#1a1717]">Firozabad, Uttar Pradesh</p>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-sm leading-7 text-[#564c48]">
        <div className="flex gap-3">
          <MapPin size={16} className="mt-1 shrink-0 text-[#c08b56]" />
          <p>{siteConfig.address.line3}</p>
        </div>
        <div className="flex gap-3">
          <Clock3 size={16} className="mt-1 shrink-0 text-[#c08b56]" />
          <p>{siteConfig.hours}</p>
        </div>
        <div className="flex gap-3">
          <Phone size={16} className="mt-1 shrink-0 text-[#c08b56]" />
          <p>{siteConfig.phoneDisplay}</p>
        </div>
      </div>
    </div>
  );
}
