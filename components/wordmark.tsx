import { site } from "@/lib/content";

/** The name, set tight. It opens the page small and closes it at scale. */
export function Wordmark({
  className = "",
  href = "#top",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`font-bold tracking-[-0.035em] ${className}`}
      aria-label={`${site.name}, home`}
    >
      {site.name}
    </a>
  );
}
