import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { Search, X } from "lucide-react";
import heroImage from "@/assets/hero.png";
import logo from "@/assets/logoseffaf.png";
import { categories, restaurantConfig } from "@/data/menu";
import { CategoryNav } from "@/components/CategoryNav";
import { CategorySection } from "@/components/CategorySection";
import { FloatingActions } from "@/components/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: restaurantConfig.seo.title },
      { name: "description", content: restaurantConfig.seo.description },
      { property: "og:title", content: restaurantConfig.seo.title },
      { property: "og:description", content: restaurantConfig.seo.description },
      { name: "theme-color", content: restaurantConfig.seo.themeColor },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [query, setQuery] = useState("");
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const isClickScrolling = useRef(false);

  // Filter categories based on search query
  const filteredCategories = categories.filter((c) =>
    c.products.some((p) =>
      query
        ? p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description?.toLowerCase().includes(query.toLowerCase())
        : true,
    ),
  );

  // Reset active category if it's no longer in filtered list
  useEffect(() => {
    if (filteredCategories.length > 0 && !filteredCategories.some((c) => c.id === activeId)) {
      setActiveId(filteredCategories[0].id);
    }
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  // IntersectionObserver for auto-updating active category on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        // Pick the entry with the highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.5] },
    );

    const els = Object.values(sectionsRef.current);
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [query]);

  // Navigate to a category by id — use window.scrollTo for reliable cross-platform behaviour
  const handleSelect = useCallback((id: string) => {
    setActiveId(id);
    isClickScrolling.current = true;
    const el = sectionsRef.current[id];
    if (el) {
      const navHeight = 56; // approximate sticky nav height
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
    // Release the lock after animation completes
    setTimeout(() => { isClickScrolling.current = false; }, 900);
  }, []);

  const scrollToMenu = useCallback(() => {
    if (filteredCategories.length > 0) handleSelect(filteredCategories[0].id);
  }, [filteredCategories, handleSelect]);

  return (
    <main className="min-h-screen bg-ivory text-espresso overflow-x-hidden">
      <div className="mx-auto max-w-md">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative px-5 pt-8 pb-6 animate-fade-in">

          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {restaurantConfig.hero.est}
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {restaurantConfig.hero.sectionTitle}
            </span>
          </div>

          {/* Logo — uses the real transparent KIFLA logo */}
          <div className="mt-8 flex flex-col items-center">
            <img
              src={logo}
              alt={restaurantConfig.name}
              width={500}
              height={200}
              className="mx-auto h-auto w-[72%] max-w-[260px] object-contain"
              draggable={false}
            />
            <p className="mt-3 text-[11px] tracking-[0.35em] uppercase text-muted-foreground">
              {restaurantConfig.hero.subtitle}
            </p>
          </div>

          {/* Hero image */}
          <div className="relative mt-6 overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]">
            <img
              src={heroImage}
              alt={`${restaurantConfig.name} — espresso ve Boşnak böreği`}
              width={800}
              height={800}
              className="h-[48vh] min-h-[300px] max-h-[400px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-serif text-xl text-ivory text-balance">
                {restaurantConfig.hero.quote}
              </p>
              <button
                onClick={scrollToMenu}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium tracking-wide text-accent-foreground shadow-[var(--shadow-card)] transition-all active:scale-95 hover:bg-accent/90 hover:shadow-[0_8px_24px_rgba(92,26,43,0.35)]"
              >
                {restaurantConfig.hero.ctaText}
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="mt-6 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)] focus-within:border-gold/60 transition-colors">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={restaurantConfig.hero.searchPlaceholder}
              className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} className="shrink-0 text-muted-foreground hover:text-espresso transition-colors">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </section>

        {/* ── Sticky Category Nav ──────────────────────────── */}
        {filteredCategories.length > 0 && (
          <CategoryNav activeId={activeId} onSelect={handleSelect} items={filteredCategories} />
        )}

        {/* ── Product Sections ─────────────────────────────── */}
        <div className="px-5 pb-32">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((c) => (
              <CategorySection
                key={c.id}
                ref={(el) => { sectionsRef.current[c.id] = el; }}
                category={c}
                query={query}
              />
            ))
          ) : (
            <div className="mt-16 py-10 text-center animate-fade-in">
              <span className="text-4xl" role="img" aria-label="coffee cup">☕</span>
              <h3 className="mt-4 font-serif text-2xl text-espresso">Sonuç Bulunamadı</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">
                "<span className="text-espresso/70">{query}</span>" aramanıza uygun bir ürün bulamadık.
              </p>
              <button
                onClick={() => setQuery("")}
                className="mt-5 rounded-full border border-border px-5 py-2 text-sm text-espresso hover:border-gold/60 transition-colors"
              >
                Aramayı Temizle
              </button>
            </div>
          )}

          {/* ── Footer ───────────────────────────────────── */}
          <footer className="mt-20 border-t border-border pt-10 text-center">
            <img
              src={logo}
              alt={restaurantConfig.name}
              width={500}
              height={200}
              loading="lazy"
              className="mx-auto h-auto w-[60%] max-w-[220px] object-contain"
            />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {restaurantConfig.tagline}
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-xs text-accent">
              <a href={`tel:${restaurantConfig.contact.phone}`} className="underline-offset-4 hover:underline">
                {restaurantConfig.footer.phoneText}
              </a>
              <span className="text-border">•</span>
              <a
                href={`https://instagram.com/${restaurantConfig.contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {restaurantConfig.footer.instagramText}
              </a>
              <span className="text-border">•</span>
              <a
                href={`https://wa.me/${restaurantConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {restaurantConfig.footer.whatsappText}
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              © {new Date().getFullYear()} {restaurantConfig.footer.copyright}
            </p>
          </footer>
        </div>
      </div>

      <FloatingActions />
    </main>
  );
}
