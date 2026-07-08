import { useEffect, useRef, useState } from "react";
import type { Category } from "@/data/menu";

export function CategoryNav({
  activeId,
  onSelect,
  items,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  items: Category[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  // Use IntersectionObserver on a sentinel div placed just above the nav.
  // The rootMargin of "-1px top" means the observer fires the INSTANT the
  // sentinel scrolls above the viewport edge — matching sticky top:0 exactly.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Scroll the active button into view within the horizontal container only
  // Using manual scrollTo avoids triggering the browser's vertical scroll alignment
  useEffect(() => {
    const container = scrollRef.current;
    const el = container?.querySelector<HTMLElement>(`[data-cat="${activeId}"]`);
    if (container && el) {
      const containerWidth = container.clientWidth;
      const elLeft = el.offsetLeft;
      const elWidth = el.clientWidth;
      container.scrollTo({
        left: elLeft - containerWidth / 2 + elWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <>
      {/* Sentinel: a 1px invisible div placed just above the sticky nav */}
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />

      <div
        className={`sticky top-0 z-30 w-full px-5 backdrop-blur-md transition-all duration-300 ${
          stuck
            ? "bg-ivory/95 border-b border-border/60 shadow-[var(--shadow-soft)]"
            : "bg-transparent"
        }`}
      >
        <div ref={scrollRef} className="no-scrollbar flex gap-2 overflow-x-auto py-3">
          {items.map((c) => {
            const active = c.id === activeId;
            return (
              <button
                key={c.id}
                data-cat={c.id}
                onClick={() => onSelect(c.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
                  active
                    ? "bg-espresso text-ivory shadow-[var(--shadow-soft)]"
                    : "bg-card text-espresso/80 border border-border hover:border-gold/60"
                }`}
              >
                <span className="mr-1.5">{c.icon}</span>
                {c.title}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
