/**
 * The dispatch diagram, drawn rather than photographed.
 *
 * A loose field of loads on the near side. A route leaves the field from each
 * depth — staggered, so the loads peel off at different points — and the routes
 * are drawn together onto the lanes, where the loads have become vehicles,
 * evenly spaced, running out the far side. The field is loose where the lanes
 * are exact, and one module separates everything.
 *
 * Three tones carry it: a loose load is paper-light, a load in transit is sage,
 * and a load on its lane is ink. Drawn twice from the same generator — a long
 * frame for wide screens, a shorter one for the phone — and deterministic, so
 * it renders identically every time.
 */

const PALE = "#b4cbb9";
const MID = "#5f9375";
const INK = "#0e3826";

/** A load. */
const DOT = 13;
/** A load on its lane: a vehicle is longer than it is wide. */
const BAR = 30;
/** A route between the two. */
const ROUTE = 7;
/** The module: every mark and every route sits on this spacing. */
const PITCH = 34;

type Frame = {
  /** The loose field: `cols` cells deep along the flow, `rows` wide across it. */
  field: { u: number; v: number; cols: number; rows: number; keep: number };
  /** The lanes: how many, how many vehicles on each, and their spacing. */
  lanes: {
    u: number;
    v: number;
    count: number;
    per: number;
    pitch: number;
    spread: number;
  };
  /** Where the routes leave the field: a cell, given by depth and row. The rows
   * are spread wider than the lanes, so the routes fan in, and the depths are
   * staggered, so no two routes leave the field abreast. */
  gaps: { col: number; row: number }[];
};

const WIDE: Frame = {
  field: { u: 24, v: 40, cols: 13, rows: 7, keep: 46 },
  lanes: { u: 800, v: 91, count: 4, per: 8, pitch: 52, spread: PITCH },
  gaps: [
    { col: 12, row: 0 },
    { col: 11, row: 2 },
    { col: 10, row: 4 },
    { col: 9, row: 6 },
  ],
};

const PHONE: Frame = {
  field: { u: 24, v: 67, cols: 6, rows: 10, keep: 26 },
  lanes: { u: 312, v: 152, count: 3, per: 5, pitch: 52, spread: PITCH * 2 },
  gaps: [
    { col: 5, row: 0 },
    { col: 4, row: 5 },
    { col: 3, row: 9 },
  ],
};

type Mark = { x: number; y: number; w: number; h: number; fill: string };
type Route = { from: { x: number; y: number }; to: { x: number; y: number } };

/** A small deterministic generator, so the scatter is identical every render. */
function generator(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function build({ field, lanes, gaps }: Frame) {
  const rand = generator(20261015);
  const marks: Mark[] = [];
  const routes: Route[] = [];

  // Each route leaves its own cell for its own lane. The cells the routes leave
  // are taken out of the field, so no route starts on top of a loose load.
  const taken = new Set(gaps.map((gap) => `${gap.row}-${gap.col}`));
  for (const [i, gap] of gaps.entries()) {
    const from = {
      x: field.u + gap.col * PITCH,
      y: field.v + gap.row * PITCH,
    };
    const to = { x: lanes.u, y: lanes.v + i * lanes.spread };
    routes.push({ from, to });
    marks.push({
      x: from.x - DOT / 2,
      y: from.y - DOT / 2,
      w: DOT,
      h: DOT,
      fill: PALE,
    });
  }

  // The loose loads. Every cell is shuffled, never strided — a stride walks a
  // diagonal and draws a striped field, which is what a scatter must never look
  // like — and nudged off the grid, so the field has a texture, not a lattice.
  const cells: [number, number][] = [];
  for (let row = 0; row < field.rows; row += 1)
    for (let col = 0; col < field.cols; col += 1)
      if (!taken.has(`${row}-${col}`)) cells.push([row, col]);
  for (let i = cells.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }
  for (const [row, col] of cells.slice(0, field.keep))
    marks.push({
      x: field.u + col * PITCH + (rand() - 0.5) * 24 - DOT / 2,
      y: field.v + row * PITCH + (rand() - 0.5) * 24 - DOT / 2,
      w: DOT,
      h: DOT,
      fill: PALE,
    });

  // Running in order: vehicles on the lanes, evenly spaced on the same module.
  for (let l = 0; l < lanes.count; l += 1)
    for (let k = 0; k < lanes.per; k += 1)
      marks.push({
        x: lanes.u + k * lanes.pitch,
        y: lanes.v + l * lanes.spread - DOT / 2,
        w: BAR,
        h: DOT,
        fill: INK,
      });

  return { marks, routes };
}

export function DispatchDiagram({ alt }: { alt: string }) {
  const frames = [
    { box: "0 0 1200 300", frame: WIDE, size: "hidden w-full md:block" },
    { box: "0 0 560 440", frame: PHONE, size: "block w-full md:hidden" },
  ];

  return (
    <>
      {frames.map(({ box, frame, size }) => {
        const { marks, routes } = build(frame);
        return (
          <svg
            aria-label={alt}
            className={size}
            key={box}
            role="img"
            viewBox={box}
          >
            {marks.map((mark, i) => (
              <rect
                fill={mark.fill}
                height={mark.h}
                key={`${i}-${mark.x}-${mark.y}`}
                width={mark.w}
                x={mark.x}
                y={mark.y}
              />
            ))}
            {routes.map((route) => {
              const middle = (route.from.x + route.to.x) / 2;
              return (
                <path
                  className="route"
                  d={`M ${route.from.x} ${route.from.y} C ${middle} ${route.from.y}, ${middle} ${route.to.y}, ${route.to.x} ${route.to.y}`}
                  fill="none"
                  key={`${route.from.x}-${route.from.y}`}
                  pathLength={1}
                  stroke={MID}
                  strokeWidth={ROUTE}
                />
              );
            })}
          </svg>
        );
      })}
    </>
  );
}
