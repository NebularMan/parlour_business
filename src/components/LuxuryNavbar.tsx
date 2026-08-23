import Image from "next/image";

import { ArrowRight, Sparkles } from "lucide-react";

import { siteConfig } from "@/components/site-config";

export function LuxuryNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#f3e6dd] bg-[#fffdfb]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-20 w-20 items-center justify-center overflow-visible rounded-full bg-white shadow-sm ring-1 ring-[#f0e2d8] sm:h-24 sm:w-24">
            <img
              src="/_next/image?url=%2Fimages%2Fglow%2FChatGPT%20Image%20Aug%2022%2C%202026%2C%2009_38_32%20PM.png&w=1080&q=75"
              srcSet="/_next/image?url=%2Fimages%2Fglow%2FChatGPT%2520Image%2520Aug%252022%2C%25202026%2C%252009_38_32%2520PM.png&w=1080&q=75 1x, /_next/image?url=%2Fimages%2Fglow%2FChatGPT%2520Image%2520Aug%252022%2C%25202026%2C%252009_38_32%2520PM.png&w=1920&q=75 2x"
              alt="Glow by Vandna Sharma logo"
              className="h-[150%] w-[150%] max-w-none object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] font-semibold tracking-[0.24em] text-[#7f5d4d] uppercase">Glow</p>
            <p className="text-[9px] tracking-[0.2em] text-[#8a756a] uppercase">Vandna Sharma</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#584840] md:flex">
          {siteConfig.navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#1a1717]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="inline-flex items-center gap-2 rounded-full border border-[#e8d8c8] bg-white px-4 py-2.5 text-sm font-semibold text-[#1a1717] shadow-sm transition hover:border-[#d7a873] hover:text-[#1a1717]"
        >
          <Sparkles size={14} className="text-[#c08b56]" />
          <span>Book Now</span>
          <ArrowRight size={14} className="text-[#c08b56]" />
        </a>
      </div>
    </header>
  );
}
