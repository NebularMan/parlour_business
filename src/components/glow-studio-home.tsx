import Image from "next/image";

import { CalendarDays, MapPin, MessageCircle, Sparkles, Star } from "lucide-react";

import { BrandLogoHero } from "@/components/BrandLogoHero";
import { ContactAction } from "@/components/ContactAction";
import { LuxuryNavbar } from "@/components/LuxuryNavbar";
import { MobileContactDock } from "@/components/MobileContactDock";
import { QuickContactBar } from "@/components/QuickContactBar";
import { siteConfig } from "@/components/site-config";

const services = [
  {
    title: "Bridal Makeup",
    description: "Signature bridal looks designed for traditional weddings, intimate functions, and mehendi events.",
    badge: "Signature",
  },
  {
    title: "Hair Styling",
    description: "Elegant curls, soft waves, bun styling, and premium finishing for every occasion and outfit.",
    badge: "Popular",
  },
  {
    title: "Mehendi Art",
    description: "Beautiful mehendi designs crafted to complement your celebrations, colors, and cultural styling.",
    badge: "Traditional",
  },
  {
    title: "Nail Art",
    description: "Elegant nail art and manicure options to complete your look with grace and personality.",
    badge: "Luxury",
  },
  {
    title: "Party Makeup",
    description: "Soft glam to statement looks for festive events, family gatherings, and photo-ready evenings.",
    badge: "Event",
  },
  {
    title: "Skin & Glow Care",
    description: "Customized beauty prep and skincare-friendly treatments to help your skin look fresh and radiant.",
    badge: "Glow",
  },
];

const bridalMoments = [
  {
    title: "Royal Bridal",
    subtitle: "Gold accents • soft pink • timeless bridal glow",
    image: "/images/glow/Img6.png",
  },
  {
    title: "Studio Elegance",
    subtitle: "Warm tones • premium finishing • polished style",
    image: "/images/glow/ChatGPT%20Image%20Aug%2023,%202026,%2006_45_00%20PM.png",
  },
  {
    title: "Festive Glam",
    subtitle: "Soft glow • bridal finish • camera-ready detail",
    image: "/images/glow/ChatGPT%20Image%20Aug%2023,%202026,%2006_56_54%20PM.png",
  },
];

const portfolio = [
  "/images/glow/ChatGPT%20Image%20Aug%2022,%202026,%2009_38_32%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2022,%202026,%2009_46_02%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2023,%202026,%2006_45_00%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2023,%202026,%2006_56_54%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2022,%202026,%2009_46_02%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2022,%202026,%2009_38_32%20PM.png",
];

const reasons = [
  "Personalized bridal consultation tailored to your skin tone, outfit, and occasion.",
  "Premium beauty products and techniques designed for Indian bridal and festive styling.",
  "A calm, luxurious studio experience with attention to detail from prep to final finish.",
  "Comfort-first beauty service that looks natural, radiant, and long-lasting in photos and real life.",
];

const testimonials = [
  {
    quote: "I looked stunning on my wedding day. Every detail felt elegant, soft, and perfectly suited for my look.",
    name: "Neha S.",
    role: "Bride",
  },
  {
    quote: "The salon experience was so calm and luxurious. My makeup lasted beautifully throughout the entire event.",
    name: "Ritika M.",
    role: "Bridal Client",
  },
  {
    quote: "Vandna ji understood exactly how I wanted to look and made the whole process feel effortless and personal.",
    name: "Ananya P.",
    role: "Festival Client",
  },
];

const instagramPosts = [
  "/images/glow/ChatGPT%20Image%20Aug%2022,%202026,%2009_38_32%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2022,%202026,%2009_46_02%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2023,%202026,%2006_45_00%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2023,%202026,%2006_56_54%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2022,%202026,%2009_46_02%20PM.png",
  "/images/glow/ChatGPT%20Image%20Aug%2023,%202026,%2006_45_00%20PM.png",
];

const stats = [
  { value: "8+", label: "Years of beauty artistry" },
  { value: "1200+", label: "Bridal & event looks" },
  { value: "4.9/5", label: "Client satisfaction" },
];

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.24em] text-[#c89f63] uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1a1717] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[#5f4d47]">{text}</p>
    </div>
  );
}

export function GlowStudioHome() {
  return (
    <div id="top" className="min-h-screen bg-[#fffdfb] text-[#1a1717]">
      <QuickContactBar />
      <LuxuryNavbar />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(247,214,196,0.7),_transparent_30%),linear-gradient(180deg,#fffdfb_0%,#fff5ef_100%)]">
          <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),transparent)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-14">
            <div className="max-w-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e7d8] text-[#1a1717]">
                  <Sparkles size={18} className="text-[#c08b56]" />
                </div>
                <p className="text-[10px] font-semibold tracking-[0.28em] text-[#8b695d] uppercase">
                  Luxury Beauty Parlour
                </p>
              </div>

              <h1 className="text-4xl font-semibold tracking-[-0.06em] text-[#1a1717] sm:text-5xl lg:text-6xl">
                Bridal beauty sculpted for your most unforgettable moments.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-8 text-[#5f4d47] sm:text-lg">
                Elegant bridal makeup, hair artistry, and beauty styling from Glow by Vandna Sharma—crafted for refined celebrations, timeless portraits, and effortless confidence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ContactAction href="#booking" label="Book Appointment" icon={CalendarDays} />
                <ContactAction href={siteConfig.whatsappHref} label="WhatsApp" icon={MessageCircle} variant="secondary" external />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] border border-[#f0e1d6] bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                    <div className="text-2xl font-semibold tracking-tight text-[#1a1717]">{stat.value}</div>
                    <div className="mt-2 text-[11px] leading-5 text-[#675a54]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[#f4d8c4] blur-3xl" />
              <div className="absolute -right-6 bottom-14 h-32 w-32 rounded-full bg-[#f1dbb5] blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-[#f0e6df] bg-white p-3 shadow-[0_30px_80px_rgba(58,36,24,0.12)]">
                <div className="overflow-hidden rounded-[24px] bg-[#f9efe8]">
                  <Image
                    src="/images/glow/ChatGPT%20Image%20Aug%2022,%202026,%2009_46_02%20PM.png"
                    alt="Glow by Vandna Sharma bridal beauty look"
                    width={900}
                    height={1200}
                    className="h-[500px] w-full object-cover"
                  />
                </div>

                <div className="absolute left-8 top-8 max-w-[220px] rounded-[20px] border border-white/70 bg-white/80 p-3 shadow-sm backdrop-blur-sm">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#8b6c5d] uppercase">Signature finish</p>
                  <div className="mt-2 flex items-center gap-1 text-[#d39b5d]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={12} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-2 text-lg font-semibold text-[#1a1717]">Soft champagne glam</p>
                </div>

                <div className="absolute bottom-8 right-8 max-w-[200px] rounded-[20px] border border-[#ebd7be] bg-[#fffaf5] p-4 shadow-md">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#8b6c5d] uppercase">Studio hours</p>
                  <p className="mt-2 text-xl font-semibold text-[#1c1717]">Mon–Sat</p>
                  <p className="text-sm text-[#5b4d48]">10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#f4e4dd] bg-[#fffdfb]">
          <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
            <div className="rounded-[30px] border border-[#f0e1d8] bg-[linear-gradient(135deg,#fffdfb_0%,#fff7f4_100%)] p-4 shadow-[0_20px_50px_rgba(84,53,39,0.06)] sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <BrandLogoHero />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="rounded-[24px] border border-[#f0e2d7] bg-white/90 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-[#1a1717]">
                      <MessageCircle size={16} className="text-[#c08b56]" />
                      <p className="text-xs font-semibold tracking-[0.2em] text-[#7a5d4e] uppercase">Contact</p>
                    </div>
                    <a href={siteConfig.phoneHref} className="mt-3 block text-base font-semibold text-[#1a1717] hover:text-[#4c352f]">
                      {siteConfig.phoneDisplay}
                    </a>
                    <a href={siteConfig.email} className="mt-1 block text-sm text-[#5e4a44] hover:text-[#1a1717]">
                      {siteConfig.email}
                    </a>
                  </div>

                  <div className="rounded-[24px] border border-[#f0e2d7] bg-white/90 p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-[#1a1717]">
                      <MapPin size={16} className="text-[#c08b56]" />
                      <p className="text-xs font-semibold tracking-[0.2em] text-[#7a5d4e] uppercase">Location</p>
                    </div>
                    <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="mt-3 block text-base font-semibold text-[#1a1717] hover:text-[#4c352f]">
                      Glow By Vandna
                    </a>
                    <p className="mt-1 text-sm text-[#5e4a44]">{siteConfig.address.line3}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <ContactAction href={siteConfig.phoneHref} label="Call Studio" icon={MessageCircle} variant="dark" />
                <ContactAction href={siteConfig.whatsappHref} label="WhatsApp Us" icon={MessageCircle} variant="primary" external />
                <ContactAction href={siteConfig.mapsUrl} label="Get Directions" icon={MapPin} variant="secondary" external />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[28px] border border-[#f1e3d9] bg-[#fffaf8] p-3 shadow-sm">
              <Image
                src="/images/glow/ChatGPT%20Image%20Aug%2023,%202026,%2006_45_00%20PM.png"
                alt="Glow by Vandna Sharma beauty studio portrait"
                width={900}
                height={1200}
                className="h-[500px] w-full rounded-[22px] object-cover"
              />
            </div>

            <div>
              <SectionIntro
                eyebrow="About the studio"
                title="Luxury beauty experiences for your most beautiful chapter."
                text="At Glow by Vandna Sharma, we believe makeup should feel like an extension of your personality—refined, radiant, and effortless. Our studio blends artistry, skin-first care, and premium finishing techniques to create looks that feel as beautiful in real life as they do in photos."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#fff7f4] p-5">
                  <p className="text-3xl font-semibold text-[#1c1717]">10k+</p>
                  <p className="mt-2 text-sm leading-6 text-[#5c4e49]">Beauty transformations and celebrations styled with care.</p>
                </div>
                <div className="rounded-2xl bg-[#fff7f4] p-5">
                  <p className="text-3xl font-semibold text-[#1c1717]">1:1</p>
                  <p className="mt-2 text-sm leading-6 text-[#5c4e49]">Tailored guidance from makeup consultation to final glow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="bridal" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionIntro
            eyebrow="Bridal showcase"
            title="Dream bridal looks designed around your story."
            text="Each bridal look is crafted to harmonize with your attire, the venue, photography, and the way you want to feel throughout the day."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {bridalMoments.map((moment) => (
              <div key={moment.title} className="group overflow-hidden rounded-[28px] border border-[#f0e1dd] bg-white shadow-sm">
                <div className="overflow-hidden">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    width={900}
                    height={1200}
                    className="h-[440px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#1a1717]">{moment.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#645854]">{moment.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#f1dfd5] bg-[#fffaf8] py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 text-sm text-[#615750] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-[#1a1717]">Glow by Vandna Sharma</p>
            <p className="mt-1">Bridal Makeup & Beauty Studio</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="#about" className="transition hover:text-[#1a1717]">About</a>
            <a href="#services" className="transition hover:text-[#1a1717]">Services</a>
            <a href="#portfolio" className="transition hover:text-[#1a1717]">Portfolio</a>
            <a href="#booking" className="transition hover:text-[#1a1717]">Book</a>
          </div>

          <p>© 2026 Glow by Vandna Sharma</p>
        </div>
      </footer>

      <MobileContactDock />
    </div>
  );
}
