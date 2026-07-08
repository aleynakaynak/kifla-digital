import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/data/menu";

// ── ProductCard ──────────────────────────────────────────────────────
export function ProductCard({
  product,
  image,
}: {
  product: Product;
  image: string;
}) {
  const [open, setOpen] = useState(false);
  const hasDetails =
    (product.allergens && product.allergens.length > 0) || product.badge;

  return (
    <article
      className={`rounded-[20px] bg-card border transition-all duration-300 shadow-[var(--shadow-soft)] cursor-pointer ${
        open
          ? "border-gold/40 shadow-[var(--shadow-card)]"
          : "border-border/60 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5"
      }`}
      onClick={() => setOpen((v) => !v)}
    >
      {/* Main row */}
      <div className="flex gap-4 p-3">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[16px] bg-muted">
          <img
            src={product.image ?? image}
            alt={product.name}
            loading="lazy"
            width={200}
            height={200}
            className={`h-full w-full object-cover transition-transform duration-500 ${
              open ? "scale-105" : ""
            }`}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-lg leading-tight text-espresso text-balance">
              {product.name}
            </h3>
            <div className="flex shrink-0 items-center gap-1.5">
              {product.price && (
                <span className="font-sans text-sm font-medium tracking-wide text-gold">
                  {product.price}
                </span>
              )}
              {hasDetails && (
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground/60 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>
          </div>

          {product.description && (
            <p
              className={`mt-1 text-[13px] leading-snug text-muted-foreground transition-all duration-300 ${
                open ? "" : "line-clamp-1"
              }`}
            >
              {product.description}
            </p>
          )}

          {/* Badge */}
          {product.badge && (
            <span className="mt-1.5 inline-flex w-fit items-center rounded-full bg-gold/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-gold">
              ✦ {product.badge}
            </span>
          )}
        </div>
      </div>

      {/* Expandable detail panel */}
      {hasDetails && (
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border/40 mx-3 mb-3 pt-3 space-y-2">
              {product.allergens && product.allergens.length > 0 && (
                <div className="flex items-start gap-2 text-[12px]">
                  <span className="mt-0.5 text-muted-foreground">⚠</span>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Alerjenler:</span>{" "}
                    {product.allergens.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

// ── ChipCard (Dondurma) ───────────────────────────────────────────────
export function ChipCard({ product }: { product: Product }) {
  return (
    <div className="flex items-center justify-between rounded-full border border-border bg-card px-4 py-2.5 text-sm text-espresso shadow-[var(--shadow-soft)] hover:border-gold/70 transition-colors">
      <span>{product.name}</span>
      {product.price && (
        <span className="ml-3 font-medium text-gold">{product.price}</span>
      )}
    </div>
  );
}
