import { cn } from "@/lib/utils";

/**
 * Crozier — the coiled tip of an unfurling fern frond.
 *
 * A true logarithmic spiral (the growth curve a fern actually follows) running
 * out into a stem. Deliberately reduced to a single stroke: a full frond turns
 * to mush below ~40px, and this has to hold at 28px in the nav bar.
 *
 * Reads as the company's stated posture — phased, disciplined expansion from a
 * fixed base.
 */

const CX = 21;
const CY = 17;
const A = 0.95;
const TURNS = 2.05;
const END = TURNS * Math.PI * 2;
/** Solved so the outermost coil lands at radius 12 — the widest that fits. */
const B = Math.log(12 / A) / END;

const STEPS = 150;

/** Coil points for a given phase; outermost first, unwinding inward. */
function coil(phase: number) {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= STEPS; i++) {
    const th = (i / STEPS) * END;
    const r = A * Math.exp(B * th);
    const ang = phase - th;
    pts.push([CX + r * Math.cos(ang), CY - r * Math.sin(ang)]);
  }
  pts.reverse();

  const [x0, y0] = pts[0];
  const [x1, y1] = pts[1];
  const dx = x0 - x1;
  const dy = y0 - y1;
  const len = Math.hypot(dx, dy) || 1;
  return { pts, outer: pts[0], tangent: [dx / len, dy / len] as [number, number] };
}

/**
 * Solve for the phase whose outermost coil exits pointing straight down, so the
 * stem is a smooth continuation rather than a flourish looping back on itself.
 */
const PHASE = (() => {
  let best = 0;
  let bestDot = -Infinity;
  for (let i = 0; i < 360; i++) {
    const p = (i / 360) * Math.PI * 2;
    const dot = coil(p).tangent[1]; // dot with (0, 1) — down in SVG coords
    if (dot > bestDot) {
      bestDot = dot;
      best = p;
    }
  }
  return best;
})();

const solved = coil(PHASE);
const outer = solved.outer;
const tangent = solved.tangent;
const SPIRAL = solved.pts
  .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`)
  .join(" ");

export function FernMark({ className }: { className?: string }) {
  const [ox, oy] = outer;
  const [tx, ty] = tangent;
  // Leave the coil along its tangent, then straighten into a vertical stem.
  const c1x = ox + tx * 8;
  const c1y = oy + ty * 8;

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={cn("h-7 w-7", className)}
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* stem, growing out of the outermost coil */}
      <path
        d={`M ${ox.toFixed(2)} ${oy.toFixed(2)} C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, 28 39, 17.5 44.5`}
      />
      {/* crozier */}
      <path d={SPIRAL} />
    </svg>
  );
}

export default FernMark;
