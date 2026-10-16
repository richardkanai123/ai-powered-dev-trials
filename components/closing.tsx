import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { closing, quoteAction } from "@/lib/content";

const strip = [
  {
    src: "/images/port-containers.jpg",
    alt: "A container truck working between stacks of containers at the Port of Mombasa.",
  },
  {
    src: "/images/industrial-area.jpg",
    alt: "Nairobi's Industrial Area seen from the air, with the expressway running through it.",
  },
  {
    src: "/images/expressway.jpg",
    alt: "An expressway underpass in Nairobi with traffic passing beneath.",
  },
] as const;

/** Three photographs butted edge to edge, then the closing field. */
export function Closing() {
  return (
    <section id="quote">
      <div className="grid grid-cols-3">
        {strip.map((photo) => (
          <Reveal key={photo.src} kind="picture">
            <div className="relative aspect-4/5 overflow-hidden md:aspect-4/3">
              <Image
                alt={photo.alt}
                className="photo"
                fill
                sizes="(min-width: 768px) 33vw, 33vw"
                src={photo.src}
              />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="bg-field text-field-ink" data-field>
        <div className="wrap flex min-h-[44svh] flex-col justify-center py-20 md:py-24">
          <div className="grid grid-cols-12 items-end gap-x-[var(--gutter)] gap-y-10">
            <div className="col-span-12 md:col-span-7">
              <p className="text-lead">
                <a className="link-bar" href={quoteAction.href}>
                  {closing.statement.before}
                </a>
                {closing.statement.after}
              </p>
              <p className="mt-6 text-body text-field-muted">
                {closing.terms.join(" · ")}
              </p>
            </div>

            <div className="col-span-6 md:col-span-2 md:col-start-11 md:justify-self-end">
              <div className="relative size-24 overflow-hidden md:size-28">
                <Image
                  alt={closing.picture.alt}
                  className="photo"
                  fill
                  sizes="200px"
                  src={closing.picture.src}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
