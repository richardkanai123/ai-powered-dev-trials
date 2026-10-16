import { Wordmark } from "@/components/wordmark";
import { footer } from "@/lib/content";

/** The name at full scale first, then the ways in and the small print. */
export function SiteFooter() {
  return (
    <footer className="bg-field text-field-ink" data-field>
      <div className="wrap pt-24 md:pt-32">
        <Wordmark className="block text-figure" />

        <div className="mt-16 grid grid-cols-12 gap-x-[var(--gutter)] gap-y-12 md:mt-24">
          <ul className="col-span-12 space-y-3 md:col-span-5">
            {footer.reach.map((item) => (
              <li key={item.href}>
                <a className="link text-lead" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="col-span-12 grid grid-cols-2 gap-x-[var(--gutter)] gap-y-10 lg:grid-cols-3 md:col-span-6 md:col-start-7">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-small text-field-muted">{column.title}</h2>
                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a className="link text-small" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 text-small text-field-muted md:mt-28 md:flex-row md:items-baseline md:justify-between">
          <p>{footer.legal}</p>
          <a className="link" href="#top">
            Back to top
          </a>
        </div>

        <p className="mt-6 max-w-[72ch] pb-12 text-small text-field-muted">
          {footer.credits}
        </p>
      </div>
    </footer>
  );
}
