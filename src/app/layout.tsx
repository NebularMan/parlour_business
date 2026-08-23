import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glow by Vandna Sharma | Bridal Makeup & Beauty Studio",
  description:
    "Luxury bridal makeup, hair styling, mehendi, nail art, and beauty services in Firozabad, Uttar Pradesh by Glow by Vandna Sharma.",
  keywords: [
    "Glow by Vandna Sharma",
    "bridal makeup Firozabad",
    "beauty studio Firozabad",
    "mehendi artist Firozabad",
    "nail art studio",
    "hair styling Firozabad",
    "beauty studio Uttar Pradesh",
  ],
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fffdfb]">{children}</body>
    </html>
  );
}
