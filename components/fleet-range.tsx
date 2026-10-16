import { LoadMatcher } from "@/components/load-matcher";
import { Reveal } from "@/components/reveal";
import { fleet } from "@/lib/content";

/**
 * The range of the fleet, set as one colour field: a van at one end, a prime
 * mover at the other, and the load you name in between.
 */
export function FleetRange() {
  return (
    <section className="bg-field text-field-ink" data-field id="fleet">
      <div className="wrap py-24 md:py-32">
        <Reveal className="grid grid-cols-12 gap-x-[var(--gutter)] gap-y-6">
          <h2 className="col-span-12 text-head md:col-span-5">
            {fleet.heading}
          </h2>
          <p className="col-span-12 text-body text-field-muted md:col-span-4 md:col-start-9">
            {fleet.paragraph}
          </p>
        </Reveal>

        <LoadMatcher />
      </div>
    </section>
  );
}
