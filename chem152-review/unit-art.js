// Chalk sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; keep the left ~200 px light (the unit title sits there
// on narrow screens). Classes, styled in book.html:
//   d  a stroke that draws itself in when the unit scrolls into view (--k orders the strokes)
//   t  text or a filled shape that fades in
//   a  faint chalk white instead of the unit colour;  faint  even fainter
// A sketch may add one looping motion after it is drawn: give an element a class and add a .seen .unit-art .NAME
// rule with its keyframes in book.html (see the examples there: swap-a, hop, spin, tilt, breathe, ...).
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 1 Composition: a 100 g sample split to scale (26.8 / 16.0 / 57.2), becoming the whole-number ratio 1 : 2 : 2.
    reset(P('M230 34H570V70H230Z') + P('M321 34V70', 'a') + P('M376 34V70', 'a') +
      Tx(400, 24, '100 g', 20, 'a', 'middle') +
      P('M400 82V108M392 100L400 110L408 100', 'a') +
      Tx(340, 152, '1', 34, 'step', 'middle') + Tx(370, 150, ':', 30, 'a', 'middle') +
      Tx(400, 152, '2', 34, 'step', 'middle') + Tx(430, 150, ':', 30, 'a', 'middle') +
      Tx(460, 152, '2', 34, 'step', 'middle')),
    // 2 Atomic Structure: silicon's 3p row (3p²): one electron in each of two boxes, the third empty (Hund).
    reset(P('M250 40H430V100H250Z') + P('M310 40V100', 'a') + P('M370 40V100', 'a') +
      P('M280 90V52M273 62L280 52L287 62') + P('M340 90V52M333 62L340 52L347 62') +
      Tx(456, 82, '3p', 30, 'a') + Tx(340, 150, 'Si: … 3s² 3p²', 28, 'step', 'middle')),
    // 3 Nomenclature: a formula split into its two named parts.
    reset(Tx(330, 70, 'FeCl₃', 46, '', 'middle') + P('M300 84V100', 'a') + P('M370 84V100', 'a') +
      Tx(300, 130, 'iron(III)', 24, 'step', 'middle') + Tx(400, 130, 'chloride', 24, 'step', 'middle') +
      Tx(500, 70, '→', 34, 'a', 'middle')),
    // 4 Reactions: a balanced equation with its coefficients.
    reset(Tx(400, 80, '2 H₂ + O₂ → 2 H₂O', 40, '', 'middle') + P('M240 100H560', 'a') +
      Tx(260, 140, '2', 30, 'step', 'middle') + Tx(450, 140, '2', 30, 'step', 'middle') +
      Tx(330, 140, 'H 4 = 4', 22, 'a', 'start') + Tx(490, 140, 'O 2 = 2', 22, 'a', 'start')),
  ];
})();
