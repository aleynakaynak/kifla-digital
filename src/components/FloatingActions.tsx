import { Phone, Instagram, MessageCircle } from "lucide-react";
import { restaurantConfig } from "@/data/menu";

const base =
  "h-12 w-12 rounded-full flex items-center justify-center shadow-[var(--shadow-card)] transition-transform hover:scale-105 active:scale-95";

export function FloatingActions() {
  const { contact } = restaurantConfig;
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className={`${base} bg-accent text-accent-foreground`}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={`tel:${contact.phone}`}
        aria-label="Ara"
        className={`${base} bg-card border border-border text-accent`}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={`https://instagram.com/${contact.instagram}`}
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
        className={`${base} bg-card border border-border text-accent`}
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
}
