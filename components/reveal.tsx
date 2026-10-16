"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  /** Position in its section, so parts arrive in reading order. */
  index?: number;
  /** "picture" opens like a shutter; "text" rises. */
  kind?: "text" | "picture";
  /** Render as a list item when the reveal sits inside a list. */
  as?: "div" | "li";
  className?: string;
};

/**
 * Marks a block for the section-entrance animation.
 *
 * The hidden state lives in CSS behind `(scripting: enabled)`, so a visitor
 * without JavaScript sees the finished page with no movement at all.
 */
export function Reveal({
  children,
  index = 0,
  kind = "text",
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal={kind}
      className={className}
      style={{ "--i": index } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
