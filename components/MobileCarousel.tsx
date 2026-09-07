"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type CarouselItem = {
  src: string;
  alt: string;
  caption?: ReactNode;
  className?: string;
};

export function MobileCarousel({
  items,
  interval = 3200,
  className = "",
}: {
  items: CarouselItem[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const visIO = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.15 }
    );
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5%" }
    );
    visIO.observe(el);
    revealIO.observe(el);
    return () => {
      visIO.disconnect();
      revealIO.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!visible || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [visible, items.length, interval, index]);

  const show = (next: number) => {
    setIndex((next + items.length) % items.length);
  };

  return (
    <div
      ref={rootRef}
      className={["mobile-carousel", "reveal", className].filter(Boolean).join(" ")}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX || 0;
      }}
      onTouchEnd={(event) => {
        const endX = event.changedTouches[0]?.clientX || 0;
        const dx = endX - touchStartX.current;
        if (Math.abs(dx) > 38) show(index + (dx < 0 ? 1 : -1));
      }}
    >
      {items.map((item, i) => (
        <figure
          key={`${item.src}-${i}`}
          className={[
            "mobile-carousel-item",
            item.className,
            i === index ? "is-active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <img src={item.src} alt={item.alt} />
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
      <div className="mobile-carousel-dots" aria-hidden="true">
        {items.map((_, i) => (
          <i
            key={i}
            className={i === index ? "is-active" : undefined}
            style={{ cursor: "pointer" }}
            onClick={() => show(i)}
          />
        ))}
      </div>
    </div>
  );
}
