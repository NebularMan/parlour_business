import Image from "next/image";

import { siteConfig } from "@/components/site-config";

export function BrandLogoHero() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="relative flex h-40 w-40 items-center justify-center overflow-visible rounded-full border border-[#efd6c0] bg-white/90 shadow-[0_18px_48px_rgba(90,58,43,0.12)] ring-1 ring-[#f5e5db] sm:h-44 sm:w-44 lg:h-48 lg:w-48">
        <img
          src="/_next/image?url=%2Fimages%2Fglow%2FChatGPT%20Image%20Aug%2022%2C%202026%2C%2009_38_32%20PM.png&w=1080&q=75"
          srcSet="/_next/image?url=%2Fimages%2Fglow%2FChatGPT%2520Image%2520Aug%252022%2C%25202026%2C%252009_38_32%2520PM.png&w=1080&q=75 1x, /_next/image?url=%2Fimages%2Fglow%2FChatGPT%2520Image%2520Aug%252022%2C%25202026%2C%252009_38_32%2520PM.png&w=1920&q=75 2x"
          alt={`${siteConfig.brandName} logo`}
          className="h-[150%] w-[150%] max-w-none object-contain"
        />
      </div>

      <div>
        <p className="text-[10px] font-semibold tracking-[0.34em] text-[#8b6758] uppercase">
          Luxury Beauty Studio
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1a1717] sm:text-3xl lg:text-4xl">
          {siteConfig.brandName}
        </h2>
        <p className="mt-1 text-xs tracking-[0.18em] text-[#7e675d] uppercase">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}
