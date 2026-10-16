import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { portBand } from "@/lib/content";

/**
 * One full-bleed photograph, held between the void of the first screen and
 * the paperwork that follows. It drifts a little as it crosses the viewport —
 * the page's one moving picture.
 */
export function PhotoBand() {
  return (
    <figure>
      <Reveal kind="picture">
        <div className="relative h-[58svh] overflow-hidden md:h-[72svh]">
          <Image
            alt={portBand.alt}
            className="photo drift"
            fill
            sizes="100vw"
            src={portBand.src}
          />
        </div>
      </Reveal>
      <figcaption className="wrap pt-3 text-small text-muted">
        {portBand.caption}
      </figcaption>
    </figure>
  );
}
