import { Button } from "@/components/button";
import { Wordmark } from "@/components/wordmark";
import { navLinks, quoteAction } from "@/lib/content";

/**
 * The top row of the first screen: name, the section links hanging from the
 * page's own axis, and the single action. No bar, no border, no background.
 * The phone number waits in the hero line, where it can be read in full.
 */
export function SiteHeader() {
  return (
    <header className="wrap pt-8 md:pt-11">
      <div className="hidden grid-cols-12 items-center gap-x-[var(--gutter)] md:grid">
        <div className="col-span-5">
          <Wordmark className="text-lead" />
        </div>

        <nav aria-label="Sections" className="col-span-5 col-start-6">
          <ul className="flex gap-x-5 lg:gap-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="link text-small whitespace-nowrap"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 col-start-11 flex items-center justify-end">
          <Button
            className="min-h-11 px-4 text-small lg:px-6"
            href={quoteAction.href}
          >
            {quoteAction.label}
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 md:hidden">
        <Wordmark className="text-lead" />
        <Button className="min-h-11 px-5 text-small" href={quoteAction.href}>
          {quoteAction.label}
        </Button>
      </div>
    </header>
  );
}
