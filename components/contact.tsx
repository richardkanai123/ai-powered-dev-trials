import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { contact, portBand } from "@/lib/content";

/** The address row: the sentence, the place, and the two ways in. */
export function Contact() {
  return (
    <section className="wrap py-24 md:py-32" id="contact">
      <div className="grid grid-cols-12 items-end gap-x-[var(--gutter)] gap-y-10">
        <Reveal className="col-span-12 md:col-span-6">
          <p className="text-lead">{contact.sentence}</p>
        </Reveal>

        <Reveal
          className="col-span-5 md:col-span-2 md:col-start-8"
          index={1}
          kind="picture"
        >
          <div className="relative aspect-square overflow-hidden">
            <Image
              alt="Container cranes at the Port of Mombasa."
              className="photo"
              fill
              sizes="(min-width: 768px) 16vw, 40vw"
              src={portBand.src}
            />
          </div>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-3 md:col-start-10" index={2}>
          <p className="text-lead">{contact.question}</p>
          <ul className="mt-4 space-y-2">
            {contact.links.map((link) => (
              <li key={link.href}>
                <a className="link text-body" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-small text-muted">{contact.meta}</p>
        </Reveal>
      </div>
    </section>
  );
}
