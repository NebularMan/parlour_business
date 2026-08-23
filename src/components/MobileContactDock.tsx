import { MessageCircle, Phone, Sparkles } from "lucide-react";

import { siteConfig } from "@/components/site-config";

export function MobileContactDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#f2e5dc] bg-white/95 p-2 shadow-[0_-10px_25px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-[11px] font-semibold text-white"
        >
          <MessageCircle size={15} />
          WhatsApp
        </a>
        <a
          href={siteConfig.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full border border-[#e8d7c5] bg-white px-3 py-3 text-[11px] font-semibold text-[#1a1717] shadow-sm"
        >
          <Phone size={15} className="text-[#1a1717]" />
          Call
        </a>
        <a
          href="#booking"
          className="flex items-center justify-center gap-2 rounded-full bg-[#d8b57d] px-3 py-3 text-[11px] font-semibold text-[#1a1717]"
        >
          <Sparkles size={15} />
          Book
        </a>
      </div>
    </div>
  );
}
