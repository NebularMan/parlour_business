import type { LucideIcon } from "lucide-react";

type ContactActionProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "dark";
  external?: boolean;
};

export function ContactAction({ href, label, icon: Icon, variant = "primary", external = false }: ContactActionProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition";

  const variants = {
    primary: "bg-[#d7a873] text-[#1b1717] hover:bg-[#c58d52]",
    secondary: "border border-[#e8d8c8] bg-white text-[#211b1a] hover:bg-[#f9f2ee]",
    dark: "border border-[#d9c9bf] bg-white text-[#1a1717] hover:bg-[#f9f3ee]",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${baseClasses} ${variants[variant]}`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </a>
  );
}
