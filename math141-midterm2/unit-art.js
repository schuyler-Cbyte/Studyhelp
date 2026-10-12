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

  const arch = 'M240 150Q330 -10 420 150';                                              // vertex (330, 70)
  const cubic = curve(x => Math.max(4, 100 - 1.75e-4 * (x - 270) * (x - 360) * (x - 470)), 255, 488);
  const ex = curve(t => 130 - 28 * Math.exp((t - 330) / 28), 246, 372);               // y = eˣ, origin (330, 130), 28 px per unit
  const lnx = curve(x => 130 - 28 * Math.log((x - 330) / 28), 332, 456);              // its mirror, y = ln x

  window.UNIT_ART = [
    // 1 Quadratic Functions: a ball on a downward parabola; the vertex is the maximum.
    reset(P('M220 150H560', 'a') + P(arch) + P('M330 72V150', 'a', 'stroke-dasharray="4 6"') + dot(330, 70) +
      Tx(330, 52, 'maximum', 20, 'step', 'middle') + Tx(450, 95, 't = −b / 2a', 22, 'a') + rider(arch)),
    // 2 Polynomial Functions: a cubic through three zeros, each giving a factor.
    reset(P('M230 100H560', 'a') + P(cubic) + dot(270, 100, 'step') + dot(360, 100, 'step') + dot(470, 100, 'step') +
      Tx(510, 150, '(x − c)', 22, 'a')),
    // 3 Rational Functions and Domains: two branches between dashed asymptotes, with a hole.
    reset(P('M380 10V175', 'a', 'stroke-dasharray="6 7"') + P('M220 100H570', 'a', 'stroke-dasharray="6 7"') +
      P('M395 22Q410 90 570 94') + P('M365 178Q350 110 230 106') +
      `<circle class="t" style="--k:${k++}" cx="470" cy="81" r="7" fill="#1d2b27" stroke="currentColor" stroke-width="3"/>` +
      Tx(470, 62, 'hole', 20, 'step', 'middle')),
    // 4 Exponentials and Logarithms: eˣ and ln x, mirror images across y = x.
    reset(P('M282 178L460 0', 'a', 'stroke-dasharray="5 7"') + P(ex) + P(lnx) +
      Tx(392, 40, 'eˣ', 24, '', 'middle') + Tx(470, 92, 'ln x', 22, '', 'start') + Tx(470, 22, 'y = x', 18, 'a') + rider(ex)),
  ];
})();
