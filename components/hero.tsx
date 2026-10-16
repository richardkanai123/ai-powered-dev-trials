import Image from "next/image";
import type { CSSProperties } from "react";
import { SiteHeader } from "@/components/site-header";
import { hero, site } from "@/lib/content";

/**
 * The first screen: the masthead — one wide photograph across the top of the
 * page — and then the statement set on the page's own axis, rising out of a
 * mask one line at a time. That rise is the page's one allowed loud move;
 * the photograph itself never moves.
 */
export function Hero() {
  return (
    <section id="top" className="flex min-h-[100svh] flex-col bg-surface">
      <SiteHeader />

      <figure className="mt-7 md:mt-10">
        <div className="relative h-[28svh] w-full overflow-hidden md:aspect-[2/1] md:h-auto md:max-h-[45svh]">
          <Image
            alt={hero.picture.alt}
            className="photo object-[25%_100%]"
            fill
            preload
            sizes="100vw"
            src={hero.picture.src}
          />
        </div>
        <figcaption className="wrap pt-3 text-small text-muted">
          {hero.picture.caption}
        </figcaption>
      </figure>

      <div className="wrap mt-auto pb-12 pt-12 md:pb-16 md:pt-14">
        <div className="grid grid-cols-12 items-end gap-x-[var(--gutter)] gap-y-8">
          <h1 className="lines col-span-12 text-display font-bold md:col-span-7 md:col-start-6 md:row-start-1">
            {hero.headline.map((line, index) => (
              <span className="line" key={line}>
                <span style={{ "--i": index } as CSSProperties}>{line}</span>
              </span>
            ))}
          </h1>

          <p
            className="measure col-span-12 text-body text-muted md:col-span-4 md:col-start-1 md:row-start-1"
            data-rise
            style={{ "--i": 1 } as CSSProperties}
          >
            {hero.support}
          </p>
        </div>

        <p
          className="mt-10 text-small text-muted md:mt-14"
          data-rise
          style={{ "--i": 2 } as CSSProperties}
        >
          {hero.note}{" "}
          <a className="link" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
