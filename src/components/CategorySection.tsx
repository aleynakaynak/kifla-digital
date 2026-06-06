import { forwardRef } from "react";
import type { Category } from "@/data/menu";
import { ProductCard, ChipCard } from "./ProductCard";

export const CategorySection = forwardRef<HTMLElement, { category: Category; query: string }>(
  ({ category, query }, ref) => {
    const filtered = category.products.filter((p) =>
      query
        ? p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description?.toLowerCase().includes(query.toLowerCase())
        : true,
    );
    if (filtered.length === 0) return null;

    const isChips = category.id === "dondurma";

    return (
      <section ref={ref} id={category.id} className="scroll-mt-20 pt-10">
        <header className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-6 bg-gold/60" />
              {category.icon} Bölüm
            </div>
            <h2 className="mt-2 font-serif text-3xl text-espresso text-balance">{category.title}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground max-w-md text-balance">
              {category.subtitle}
            </p>
          </div>
        </header>

        {isChips ? (
          <div className="flex flex-wrap gap-2">
            {filtered.map((p) => (
              <ChipCard key={p.name} product={p} />
            ))}
          </div>
        ) : (
          <div className="grid gap-3">
            {/* Pass only product — no category.image fallback */}
            {filtered.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        )}
      </section>
    );
  },
);
CategorySection.displayName = "CategorySection";
