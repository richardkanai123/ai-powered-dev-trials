import { Fragment } from "react";
import { kenyaMap } from "@/lib/kenya-map";

/**
 * The coverage plate: Kenya drawn to scale, the country's main road network in
 * a faint line, the lanes Kanai runs lit across it.
 *
 * The geometry is real, generated once into `lib/kenya-map.ts` from Natural
 * Earth. The country and its roads are drawn in the SVG, which scales with the
 * plate; the six hubs are set in HTML on top of it, so the names keep their
 * own size on a phone instead of shrinking with the map.
 */

const LAND = "#1b543a"; // --color-field-panel
const ROAD = "#b7cbbd"; // --color-field-muted
const LANE = "#f0f4ec"; // --color-field-ink

/** Label alignment, so a name reads out from its own dot. */
const ANCHOR = {
  start: undefined,
  middle: "translateX(-50%)",
  end: "translateX(-100%)",
} as const;

export function CoverageMap({ label }: { label: string }) {
  return (
    <div
      className="relative w-full bg-field"
      style={{ aspectRatio: `${kenyaMap.width} / ${kenyaMap.height}` }}
    >
      <svg
        aria-label={label}
        className="absolute inset-0 h-full w-full"
        role="img"
        viewBox={`0 0 ${kenyaMap.width} ${kenyaMap.height}`}
      >
        <path
          d={kenyaMap.outline}
          fill={LAND}
          stroke={ROAD}
          strokeWidth={1.1}
        />
        <path
          d={kenyaMap.network}
          fill="none"
          stroke={ROAD}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={0.45}
          strokeWidth={0.55}
        />
        {/* Twice over: a wide wash under a fine line, the way a printed road
            lights up where the run is heaviest. */}
        {kenyaMap.lanes.map((lane) => (
          <path
            d={lane}
            fill="none"
            key={`wash-${lane}`}
            stroke={LANE}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.16}
            strokeWidth={4.4}
          />
        ))}
        {kenyaMap.lanes.map((lane) => (
          <path
            d={lane}
            fill="none"
            key={lane}
            stroke={LANE}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {kenyaMap.nodes.map((node) => (
          <Fragment key={node.name}>
            <span
              aria-hidden="true"
              className="absolute h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-field md:h-[10px] md:w-[10px]"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <span className="absolute inset-[2px] rounded-full bg-field-ink" />
            </span>
            <span
              className="absolute whitespace-nowrap text-[13px] text-field-ink leading-none"
              style={{
                left: `calc(${node.x}% + ${node.dx}px)`,
                top: `calc(${node.y}% + ${node.dy}px)`,
                transform: ANCHOR[node.anchor],
              }}
            >
              {node.name}
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
