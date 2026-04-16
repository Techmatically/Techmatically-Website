"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Delay in ms (useful for staggered sections/cards).
   */
  delayMs?: number;
};

export default function Reveal({ children, className, delayMs }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const style = useMemo(() => {
    if (!delayMs) return undefined;
    return { transitionDelay: `${delayMs}ms` } as const;
  }, [delayMs]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.12, rootMargin: "80px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={[
        "reveal",
        isVisible ? "reveal-in" : "reveal-out",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

