import { useEffect, useRef, useState } from "react";
import { categories } from "@/data/menu";

export function CategoryNav({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current?.querySelector<HTMLElement>(
      `[data-cat="${activeId}"]`,
    );
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeId]);

  return (
    <div
      className={`sticky top-0 z-30 w-full px-5 backdrop-blur-md transition-all duration-300 ${
        stuck ? "bg-ivory/90 border-b border-border/60" : "bg-transparent"
      }`}
      style={{ marginLeft: "-20px", width: "calc(100% + 40px)", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <div ref={scrollRef} className="no-scrollbar flex gap-2 overflow-x-auto py-3">
        {categories.map((c) => {
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
  );
}
