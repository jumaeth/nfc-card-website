"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reveal once the element scrolls into view.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-80px" },
    );
    io.observe(el);

    // Safety net for tabs opened in the background: IntersectionObserver does
    // not fire while the document is hidden, which would otherwise leave the
    // above-the-fold content stuck invisible until the first scroll. Re-check
    // whatever is already on screen the moment the tab becomes visible.
    const revealIfOnScreen = () => {
      if (document.visibilityState !== "visible") return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        setShown(true);
        io.disconnect();
      }
    };
    revealIfOnScreen();
    document.addEventListener("visibilitychange", revealIfOnScreen);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", revealIfOnScreen);
    };
  }, []);

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
