// Chalk sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; keep the left ~200 px light (the unit title sits there
// on narrow screens). Classes, styled in index.html:
//   d  a stroke that draws itself in when the unit scrolls into view (--k orders the strokes)
//   t  text or a filled shape that fades in
//   a  faint chalk white instead of the unit colour;  faint  even fainter
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 1 Percent composition: H2SO4's mass bar to scale (2.02 / 32.07 / 64.00 of 98.09).
    reset(P('M230 40H570V76H230Z') + P('M237 40V76', 'a') + P('M348 40V76', 'a') +
      Tx(400, 28, 'H₂SO₄ · 98.09 g', 20, 'a', 'middle') +
      Tx(292, 112, 'S 32.69%', 22, 'step', 'middle') + Tx(460, 112, 'O 65.25%', 22, 'step', 'middle') +
      Tx(400, 156, '+ H 2.06% = 100%', 22, 'a', 'middle')),
    // 2 Electrons: Cu2+ 3d boxes (four pairs and one single).
    reset(P('M220 50H520V110H220Z') + P('M280 50V110', 'a') + P('M340 50V110', 'a') + P('M400 50V110', 'a') + P('M460 50V110', 'a') +
      [242, 302, 362, 422].map(x => P(`M${x} 100V62M${x - 6} 71L${x} 62L${x + 6} 71`) + P(`M${x + 16} 60V98M${x + 10} 89L${x + 16} 98L${x + 22} 89`)).join('') +
      P('M490 100V62M484 71L490 62L496 71') + Tx(370, 150, 'Cu²⁺ = [Ar] 3d⁹', 26, 'step', 'middle')),
    // 3 Reactions: the balanced sulfate equation.
    reset(Tx(390, 80, '3 H₂SO₄ + 2 B(OH)₃ → B₂(SO₄)₃ + 6 H₂O', 21, '', 'middle') + P('M200 100H600', 'a') +
      Tx(400, 140, 'B 2 = 2 · S 3 = 3 · H 12 = 12 · O 18 = 18', 18, 'a', 'middle')),
    // 4 Nomenclature: a formula split into its two named parts.
    reset(Tx(360, 70, 'Cu(NO₃)₂', 44, '', 'middle') + P('M300 84V100', 'a') + P('M410 84V100', 'a') +
      Tx(300, 132, 'copper(II)', 24, 'step', 'middle') + Tx(420, 132, 'nitrate', 24, 'step', 'middle')),
    // 5 Empirical formula: mole ratio 1 : 1.5 doubled to 2 : 3.
    reset(Tx(330, 60, '1 : 1.49', 34, 'a', 'middle') + P('M400 50H450M440 42L452 50L440 58', 'a') + Tx(510, 60, '× 2', 28, 'step', 'middle') +
      Tx(400, 140, 'Au₂O₃', 46, '', 'middle')),
  ];
})();
