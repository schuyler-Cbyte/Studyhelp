// Chalk sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; the left ~200 px stay light (the unit title sits there
// on narrow screens). Classes, styled in index.html: d (draws in), t (fades in), a (faint chalk), step, ride (loops).
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const dot = (x, y, cls = '', r = 6) => `<circle class="t ${cls}" style="--k:${k++}" cx="${x}" cy="${y}" r="${r}" fill="currentColor"/>`;
  const rider = d => `<circle class="t ride" r="7" fill="currentColor" style="offset-path: path('${d}')"/>`;
  // An arrow from (ax, ay) to (bx, by) with a small head.
  const arrow = (ax, ay, bx, by, cls = '') => {
    const L = Math.hypot(bx - ax, by - ay), ux = (bx - ax) / L, uy = (by - ay) / L, h = 12;
    return P(`M${ax} ${ay}L${bx} ${by}M${bx - h * ux - h * .6 * uy} ${by - h * uy + h * .6 * ux}L${bx} ${by}L${bx - h * ux + h * .6 * uy} ${by - h * uy - h * .6 * ux}`, cls);
  };
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 1 Vectors in ℝⁿ: u and v tip to tail, and their sum u + v.
    reset(dot(250, 150, 'a', 4) + arrow(250, 150, 400, 120) + arrow(400, 120, 450, 40) + P('M250 150L450 40', 'a', 'stroke-dasharray="5 7"') +
      Tx(320, 160, 'u', 22, '', 'middle') + Tx(445, 95, 'v', 22) + Tx(470, 40, 'u + v', 20, 'step') + rider('M250 150L400 120L450 40')),
    // 2 Cross Product and Proofs: a and b lying flat, a × b standing up, with a right-angle mark.
    reset(P('M330 120L230 165L360 175L460 130Z', 'a') + arrow(330, 120, 240, 160) + arrow(330, 120, 450, 135) + arrow(330, 120, 330, 20, 'step') +
      P('M330 104L343 106L343 122', 'a') + Tx(345, 30, 'a × b', 20, 'step') + Tx(470, 145, 'b', 20) + Tx(222, 158, 'a', 20, '', 'end')),
    // 3 Vector Spaces and Subspaces: a plane through 0 (a subspace) and a line missing 0 (not one).
    reset(P('M250 140L330 70L540 70L460 140Z', 'a') + P('M300 160L520 30') + dot(395, 105, 'step') + Tx(395, 132, '0', 18, 'step', 'middle') +
      P('M470 178L580 108', 'a', 'stroke-dasharray="6 8"') + Tx(530, 28, 'through 0', 18, 'step', 'end')),
    // 4 Span, Independence and Bases: a slanted grid built from two basis vectors.
    reset(P('M280 160L350 90M350 160L420 90M420 160L490 90M490 160L560 90', 'a') + P('M230 140H530M260 105H560', 'a') +
      arrow(300, 140, 335, 105) + arrow(300, 140, 370, 140) + dot(475, 105, 'step') +
      Tx(310, 100, 'b₁', 20, '', 'end') + Tx(345, 165, 'b₂', 20) + Tx(490, 95, '(1, 2)', 18, 'step')),
  ];
})();
