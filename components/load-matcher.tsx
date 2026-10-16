import { fleet } from "@/lib/content";

/**
 * The page's one live thing: say how much is moving, read the vehicle that
 * takes it. It is a radio group and a stylesheet, so it works with scripting
 * off; the whole fleet is listed again further down the page.
 */
export function LoadMatcher() {
  return (
    <fieldset className="matcher mt-14 md:mt-20">
      <legend className="text-body text-field-muted">{fleet.control}</legend>

      <div className="mt-5 flex flex-wrap gap-2">
        {fleet.options.map((option) => (
          <label
            className="chip inline-flex min-h-11 items-center px-4 text-body"
            key={option.id}
          >
            <input
              className="sr-only"
              defaultChecked={option.id === "1500"}
              name="load"
              type="radio"
              value={option.id}
            />
            {option.chip}
          </label>
        ))}
      </div>

      <div className="mt-12 md:mt-16">
        {fleet.options.map((option) => (
          <div data-output={option.id} key={option.id}>
            <div className="grid grid-cols-12 gap-x-[var(--gutter)] gap-y-8">
              <div className="col-span-12 md:col-span-6">
                <p className="text-giant font-bold">{option.load}</p>
                <p className="mt-2 text-small text-field-muted">
                  {fleet.loadLabel}
                </p>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="text-giant font-bold">{option.volume}</p>
                <p className="mt-2 text-small text-field-muted">
                  {option.vehicle}
                </p>
              </div>
              <p className="col-span-12 text-body">
                <span className="text-field-muted">{option.capacity} · </span>
                {option.bestFor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
