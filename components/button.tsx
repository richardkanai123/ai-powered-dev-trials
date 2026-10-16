import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** "ink" on the paper ground, "field" on the deep green. */
  tone?: "ink" | "field";
};

/** The page's single control. Flat, filled, 48px tall, no border and no shadow. */
export function Button({
  tone = "ink",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const palette =
    tone === "ink"
      ? "bg-ink text-paper hover:bg-field-panel"
      : "bg-field-ink text-field hover:bg-paper";

  return (
    <a
      {...rest}
      className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap px-6 text-body font-medium transition-colors duration-200 ${palette} ${className}`}
    >
      {children}
    </a>
  );
}
