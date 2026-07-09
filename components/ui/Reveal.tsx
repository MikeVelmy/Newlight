"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delayClass?: "reveal-delay-1" | "reveal-delay-2" | "reveal-delay-3" | "reveal-delay-4";
};

/**
 * Progressive-enhancement scroll reveal: fully visible on the server / without
 * JS, and only opts into the hidden→visible transition once mounted, so a
 * slow or failed IntersectionObserver never leaves content permanently hidden.
 */
export function Reveal({ children, as, className = "", delayClass }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [enhance, setEnhance] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

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

  const revealCls = enhance
    ? `reveal ${delayClass ?? ""} ${visible ? "is-visible" : ""}`
    : "";

  return (
    <Tag ref={ref} className={`${revealCls} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
