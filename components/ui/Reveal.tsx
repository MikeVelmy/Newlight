"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms — used sparingly for small sequences. */
  delay?: number;
  id?: string;
};

/**
 * Progressive-enhancement scroll reveal. Content is fully visible on the server
 * and without JS (no `.reveal` class is emitted). Only after mount — once we know
 * IntersectionObserver is available — do we opt the element into the animated
 * hidden→visible transition. This guarantees the page is never blank if JS fails
 * or is slow, while still giving a considered entrance on scroll.
 */
export function Reveal({ children, as, className = "", delay = 0, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [enhance, setEnhance] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    // If already in view on mount, skip the hide entirely (no flash).
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) {
      setEnhance(true);
      setVisible(true);
      return;
    }

    setEnhance(true);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = enhance ? `reveal ${visible ? "is-visible" : ""} ${className}` : className;

  return (
    <Tag
      ref={ref}
      id={id}
      className={cls}
      style={delay && enhance ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
