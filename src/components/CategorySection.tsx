import { forwardRef } from "react";
import type { Category } from "@/data/menu";
import { ProductCard, ChipCard } from "./ProductCard";

export const CategorySection = forwardRef<
  HTMLElement,
  { category: Category; query: string }
>(({ category, query }, ref) => {
  const filtered = category.products.filter((p) =>
    query ? p.name.toLowerCase().includes(query.toLowerCase()) : true,
  );
  if (filtered.length === 0) return null;

  // Dondurma chips layout
  const isChips = category.id === "dondurma";

  // Serpme Kahvaltı — özel geniş kart
  const isSerpme = category.id === "serpme";

  return (
    <section ref={ref} id={category.id} className="scroll-mt-20 pt-10">
      <header className="mb-5 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-6 bg-gold/60" />
            {category.icon} Bölüm
          </div>
          <h2 className="mt-2 font-serif text-3xl text-espresso text-balance">
            {category.title}
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground max-w-md text-balance">
            {category.subtitle}
          </p>
        </div>
      </header>

      {isChips ? (
        <div className="flex flex-col gap-2">
          {filtered.map((p) => (
            <ChipCard key={p.name} product={p} />
          ))}
        </div>
      ) : isSerpme ? (
        // Serpme için özel büyük görsel kart
        <div className="grid gap-4">
          {filtered.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-[20px] bg-card border border-border/60 shadow-[var(--shadow-card)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  {p.badge && (
                    <span className="inline-flex items-center rounded-full bg-gold/20 backdrop-blur-sm px-3 py-1 text-[11px] font-medium tracking-wide text-ivory mb-2">
                      ✦ {p.badge}
                    </span>
                  )}
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="font-serif text-2xl text-ivory leading-tight">
                      {p.name}
                    </h3>
                    <span className="shrink-0 font-sans text-lg font-semibold text-gold">
                      {p.price}
                    </span>
                  </div>
                </div>
              </div>
              {p.description && (
                <div className="px-4 py-3">
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  {p.allergens && p.allergens.length > 0 && (
                    <div className="flex items-start gap-2 mt-2 text-[12px]">
                      <span className="text-muted-foreground">⚠</span>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Alerjenler:</span>{" "}
                        {p.allergens.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="grid gap-3">
          {filtered.map((p) => (
            <ProductCard key={p.name} product={p} image={category.image} />
          ))}
        </div>
      )}
    </section>
  );
});
CategorySection.displayName = "CategorySection";
