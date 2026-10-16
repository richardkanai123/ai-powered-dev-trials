import { Reveal } from "@/components/reveal";
import { handling } from "@/lib/content";

/**
 * The same fleet, used six ways. A comparison set as text: alternating rows
 * for the eye to track, and one column carried in the full ink.
 */
export function Handling() {
  return (
    <section className="wrap py-24 md:py-32" id="handling">
      <Reveal className="grid grid-cols-12 gap-x-[var(--gutter)] gap-y-6">
        <h2 className="col-span-12 text-head md:col-span-5">
          {handling.heading}
        </h2>
        <p className="col-span-12 text-body text-muted md:col-span-4 md:col-start-9">
          {handling.intro}
        </p>
      </Reveal>

      <Reveal className="mt-14 md:mt-20" index={1}>
        <table className="block w-full border-collapse text-left md:table">
          <caption className="sr-only">
            What Kanai moves, the vehicle used and how the load is handled
          </caption>
          <thead className="hidden md:table-header-group">
            <tr>
              {handling.columns.map((column) => (
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
            {handling.rows.map(([commodity, vehicle, method]) => (
              <tr
                className="block even:bg-surface md:table-row"
                key={commodity}
              >
                <th
                  className="block px-5 py-5 align-baseline text-body font-medium md:table-cell md:w-[34%]"
                  scope="row"
                >
                  {commodity}
                </th>
                <td className="block px-5 py-2 align-baseline font-medium text-muted md:table-cell md:w-[26%] md:bg-ink md:py-5 md:text-field-ink">
                  {vehicle}
                </td>
                <td className="block px-5 pb-5 pt-1 align-baseline text-muted md:table-cell md:py-5 md:pr-0">
                  {method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
