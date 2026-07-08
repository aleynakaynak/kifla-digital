import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import logo from "@/assets/kifla-logo-burgundy.png";
import { categories } from "@/data/menu";
import { CategoryNav } from "@/components/CategoryNav";
import { CategorySection } from "@/components/CategorySection";
import { FloatingActions } from "@/components/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KIFLA · Artisan Bakery, Coffee & Patisserie" },
      {
        name: "description",
        content:
          "KIFLA — premium artisan fırın, özel kahveler, ev yapımı pastalar ve Balkan lezzetlerinden oluşan zarif menü.",
      },
      {
        property: "og:title",
        content: "KIFLA · Artisan Bakery, Coffee & Patisserie",
      },
      {
        property: "og:description",
        content: "Premium fırın, kahve ve pastane menüsü.",
      },
      { name: "theme-color", content: "#F7F3ED" },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [query, setQuery] = useState("");
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    Object.values(sectionsRef.current).forEach(
      (el) => el && observer.observe(el),
    );
    return () => observer.disconnect();
  }, [query]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    isClickScrolling.current = true;
    const el = sectionsRef.current[id];
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => (isClickScrolling.current = false), 800);
  };

  const scrollToMenu = () => handleSelect(categories[0].id);

  return (
    <main className="min-h-screen bg-ivory text-espresso overflow-x-hidden">
      <div className="mx-auto max-w-md">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative px-5 pt-8 pb-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Est. Artisan
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Menü
            </span>
          </div>

          {/* Logo */}
          <div className="mt-8 flex flex-col items-center">
            <img
              src={logo}
              alt="KIFLA"
              width={500}
              height={200}
              className="mx-auto h-auto w-[72%] max-w-[260px] object-contain"
              draggable={false}
            />
            <p className="mt-3 text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              Artisan Bakery · Coffee · Patisserie
            </p>
          </div>

          {/* Hero image */}
          <div className="relative mt-6 overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]">
            <img
              src={heroImage}
              alt="KIFLA — espresso ve Boşnak böreği"
              width={800}
              height={800}
              className="h-[48vh] min-h-[300px] max-h-[400px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-serif text-xl text-ivory text-balance">
                Her gün taze, her detayda zarafet.
              </p>
              <button
                onClick={scrollToMenu}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-accent-foreground shadow-[var(--shadow-card)] transition-all active:scale-95 hover:bg-accent/90 hover:shadow-[0_8px_24px_rgba(92,26,43,0.35)]"
              >
                Menüyü Keşfet
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="mt-6 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)] focus-within:border-gold/60 transition-colors">
            <Search
              className="h-4 w-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Menüde ara…"
              aria-label="Menüde ara"
              className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Aramayı temizle"
                className="shrink-0 text-muted-foreground hover:text-espresso transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </section>

        {/* Invisible sentinel for sticky detection */}
        <div className="h-px w-full" aria-hidden="true" />

        {/* ── Sticky category nav ───────────────────────────────────── */}
        <CategoryNav activeId={activeId} onSelect={handleSelect} />

        {/* ── Sections ─────────────────────────────────────────────── */}
        <div className="px-5 pb-32">
          {categories.map((c) => (
            <CategorySection
              key={c.id}
              ref={(el) => {
                sectionsRef.current[c.id] = el;
              }}
              category={c}
              query={query}
            />
          ))}

          {/* Footer */}
          <footer className="mt-20 border-t border-border pt-10 text-center">
            <img
              src={logo}
              alt="KIFLA"
              width={520}
              height={180}
              loading="lazy"
              className="mx-auto h-auto w-[70%] max-w-[280px]"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Bakery · Coffee · Patisserie
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-xs text-accent">
              <a
                href="tel:+905555555555"
                className="underline-offset-4 hover:underline"
              >
                Ara
              </a>
              <span className="text-border">·</span>
              <a
                href="https://instagram.com/kifla"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                Instagram
              </a>
              <span className="text-border">·</span>
              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                WhatsApp
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              © {new Date().getFullYear()} KIFLA. Tüm hakları saklıdır.
              <br />
              <span className="opacity-50">KIFLA MENU VERSION: 2026-07-08-v3</span>
            </p>
          </footer>
        </div>
      </div>

      <FloatingActions />
    </main>
  );
}
