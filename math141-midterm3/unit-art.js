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
  const curve = (f, a, b, n = 40) => Array.from({ length: n + 1 }, (_, i) => { const x = a + (b - a) * i / n; return (i ? 'L' : 'M') + x.toFixed(1) + ' ' + f(x).toFixed(1); }).join('');
  const reset = s => { k = 0; return s; };

  const wave = curve(x => 90 - 50 * Math.cos((x - 250) / 300 * 2 * Math.PI), 250, 550);   // one cosine cycle
  const atan = curve(x => 95 - 40 * Math.atan((x - 400) / 40), 240, 560);

  window.UNIT_ART = [
    // 1 Angles and Right Triangles: a right triangle with its angle of elevation, and an arc s = rθ.
    reset(P('M240 150H470V40Z') + P('M452 150V132H470', 'a') + P('M290 150A50 50 0 0 0 284 128', '') +
      Tx(300, 140, 'θ', 22, 'step') + Tx(482, 100, 'opp', 18, 'a') + Tx(330, 84, 'hyp', 18, 'a', 'middle') +
      Tx(545, 172, 's = rθ', 24, '', 'middle')),
    // 2 Trig Values: the unit circle with its quadrant letters and a point riding round it.
    reset(P('M330 90A62 62 0 1 0 454 90A62 62 0 1 0 330 90', 'a') + P('M300 90H484M392 20V160', 'a') +
      Tx(355, 70, 'S', 22, 'step', 'middle') + Tx(430, 70, 'A', 22, 'step', 'middle') + Tx(355, 124, 'T', 22, 'step', 'middle') + Tx(430, 124, 'C', 22, 'step', 'middle') +
      rider('M454 90A62 62 0 1 0 330 90A62 62 0 1 0 454 90') + Tx(540, 60, '(cos, sin)', 18, 'a', 'middle')),
    // 3 Trig Graphs: one cosine cycle inside its frame, with a point riding the curve.
    reset(P('M250 40H550V140H250Z', 'a faint') + P('M325 40V140M400 40V140M475 40V140M250 90H550', 'a faint') +
      P(wave) + dot(250, 40) + dot(400, 140) + dot(550, 40) + rider(wave)),
    // 4 Inverse Trig: y = arctan x between its dashed asymptotes.
    reset(P('M240 32H560', 'a', 'stroke-dasharray="8 8"') + P('M240 158H560', 'a', 'stroke-dasharray="8 8"') + P('M240 95H560M400 20V170', 'a faint') +
      P(atan) + dot(400, 95) + Tx(570, 38, 'π/2', 18, 'a') + Tx(570, 164, '−π/2', 18, 'a')),
  ];
})();
