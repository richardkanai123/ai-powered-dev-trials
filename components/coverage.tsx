import { CoverageMap } from "@/components/coverage-map";
import { Reveal } from "@/components/reveal";
import { coverage } from "@/lib/content";

/**
 * One figure owns the section and one plate answers it: the whole country in
 * outline, its main roads faint, and the lanes Kanai runs lit across it.
 */
export function Coverage() {
  return (
    <section className="bg-surface" id="coverage">
      <div className="wrap flex flex-col py-24 md:min-h-[86svh] md:py-32">
        <div className="grid grid-cols-12 gap-x-[var(--gutter)] gap-y-14">
          <Reveal className="col-span-12 flex flex-col justify-between md:col-span-5">
            <h2 className="text-lead">{coverage.claim}</h2>
            <p className="mt-8 text-figure font-bold tabular-nums md:mt-10">
              {coverage.figure}
            </p>
            <div className="mt-6 md:max-w-[34ch]">
              <p className="text-body text-muted">{coverage.caption}</p>
              <p className="mt-4 text-small text-muted">{coverage.source}</p>
            </div>
          </Reveal>

          <div className="col-span-12 flex flex-col gap-3 md:col-span-7 md:col-start-6 xl:flex-row xl:items-start xl:gap-10">
            {/* Whichever comes first: the column, or 72svh of plate. 0.81 is
                the plate's own aspect — kenyaMap.width / kenyaMap.height. */}
            <Reveal
              className="w-full shrink-0 md:w-[min(100%,calc(72svh*0.81))]"
              kind="picture"
            >
              <CoverageMap label={coverage.map.alt} />
            </Reveal>
            <Reveal
              className="md:max-w-[52ch] xl:mt-1 xl:max-w-[24ch]"
              index={2}
            >
              <p className="text-small text-muted">{coverage.map.caption}</p>
              <p className="mt-3 text-small text-muted">
                {coverage.map.credit}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
