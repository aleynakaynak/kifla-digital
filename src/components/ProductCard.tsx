import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/data/menu";

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const hasDetail = !!(product.description || product.notes || product.allergens);
  const hasImage = !!product.image;

  return (
    <article
      onClick={() => hasDetail && setOpen((v) => !v)}
      className={`rounded-[20px] bg-card border transition-all duration-300 shadow-[var(--shadow-soft)] ${
        hasDetail ? "cursor-pointer" : ""
      } ${
        open
          ? "border-gold/50 shadow-[var(--shadow-card)]"
          : "border-border/60 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5"
      }`}
    >
      {/* Main row — always visible */}
      <div className="flex gap-4 p-3">
        {/* Image — only rendered when product.image exists */}
        {hasImage && (
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[16px] bg-muted">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              width={200}
              height={200}
              className={`h-full w-full object-cover transition-transform duration-500 ${
                open ? "scale-105" : ""
              }`}
            />
          </div>
        )}

        {/* Text content */}
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
              {hasDetail && (
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground/60 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
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
        </div>
      </div>

      {/* Expandable detail panel */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/40 mx-3 mb-3 pt-3 space-y-2">
            {product.notes && (
              <div className="flex items-start gap-2 text-[12px]">
                <span className="mt-0.5 text-gold">✦</span>
                <p className="text-espresso/70">{product.notes}</p>
              </div>
            )}
            {product.allergens && (
              <div className="flex items-start gap-2 text-[12px]">
                <span className="mt-0.5 text-muted-foreground">⚠</span>
                <p className="text-muted-foreground">
                  <span className="font-medium">Alerjenler:</span> {product.allergens}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ChipCard({ product }: { product: Product }) {
  return (
    <div className="rounded-full border border-border bg-card px-4 py-2.5 text-sm text-espresso shadow-[var(--shadow-soft)] hover:border-gold/70 transition-colors">
      {product.name}
    </div>
  );
}
