import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { lanes } from "@/lib/content";

/** The lanes, listed as a schedule: the page's spine and its proof. */
export function Lanes() {
  return (
    <section className="wrap py-24 md:py-32" id="lanes">
      <Reveal className="grid grid-cols-12 gap-x-[var(--gutter)]">
        <h2 className="col-span-12 text-head md:col-span-7">{lanes.heading}</h2>
        <p className="measure col-span-12 mt-6 text-body text-muted md:col-span-4 md:col-start-9 md:mt-0">
          {lanes.note}
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-12 items-end gap-x-[var(--gutter)] gap-y-12 md:mt-24">
        <Reveal className="col-span-12 md:col-span-4" index={1} kind="picture">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              alt={lanes.picture.alt}
              className="photo"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              src={lanes.picture.src}
            />
          </div>
          <p className="mt-3 text-small text-muted">{lanes.picture.caption}</p>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-7 md:col-start-6" index={2}>
          <table className="block w-full border-collapse text-left md:table">
            <caption className="sr-only">
              Daily Kanai lanes, their routes and transit times
            </caption>
            <thead className="hidden md:table-header-group">
              <tr>
                {lanes.columns.map((column) => (
                  <th
                    className="pb-3 text-small font-normal text-muted"
                    key={column}
                    scope="col"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {lanes.rows.map((row) => (
                <tr
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-0.5 py-4 md:table-row md:py-0"
                  key={row.lane}
                >
                  <th
                    className="col-start-1 row-start-1 font-medium md:table-cell md:py-4 md:pr-4"
                    scope="row"
                  >
                    {row.lane}
                  </th>
                  <td className="col-span-2 row-start-2 text-muted md:table-cell md:py-4 md:pr-4">
                    {row.route}
                  </td>
                  <td className="col-start-2 row-start-1 whitespace-nowrap text-right tabular-nums md:table-cell md:py-4">
                    {row.transit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-8 text-small">
            <span className="text-muted">{lanes.counties}</span>
          </p>
          <p className="mt-3 text-small text-muted">{lanes.onTime}</p>
        </Reveal>
      </div>
    </section>
  );
}
