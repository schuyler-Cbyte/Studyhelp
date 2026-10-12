// Math 141 Midterm 2 Review: helpers shared by every chapter. Loaded after engine.js.
'use strict';
const SRC_STD = 'Standard method · check it against your class notes';
const WIDE = { x: 160, y: 300, w: 1280, cls: 'side', maxH: 560 };   // a wide card under a picture at the top
const LOW = { x: 160, y: 640, w: 1280, cls: 'side', maxH: 250 };  // a wide card at the bottom, for long text options
const PRACT = 'Chapter practice';
// Grids in side cards hold whole equations, so give the equation column more room.
document.head.append(Object.assign(document.createElement('style'), { textContent:
  '.card.side .grid .row { grid-template-columns: 400px minmax(0, 1fr) 34px; } .card.side .grid .why { padding-left: 416px; }' }));

// Text and math that fade in at t0.
const tx = (p, str, x, y, t0, { size = 30, fill = COL.chalk, anchor = 'start', weight = 500 } = {}) => {
  const e = T(p, str, { x, y, size, fill, anchor, weight, o: 0 }); show(e, t0); return e;
};
const ml = (p, parts, x, y, t0, { size = 48, fill = COL.chalk, anchor = 'middle' } = {}) => {
  const e = M(p, [].concat(parts), { x, y, size, fill, anchor, o: 0 }); show(e, t0); return e;
};

// An outlined note: which method a chapter teaches (standard, not taken from the class notes).
function srcBadge(p, y, t0, text = SRC_STD, x = 800) {
  const n = G(p, { o: 0 }), w = uiW(text, 26) + 48;
  mk('rect', { x: x - w / 2, y: y - 34, width: w, height: 50, rx: 25, fill: 'none', stroke: COL.task, 'stroke-width': 2 }, n);
  T(n, text, { x, y, size: 26, fill: COL.task, weight: 600, anchor: 'middle' });
  show(n, t0);
  return n;
}
// The title card: unit and chapter number, title (one or two lines), a purpose line, the exam questions it covers.
function introCard(p, m, kicker, title, sub, exam) {
  const two = Array.isArray(title), g = G(p, { o: 0, y: 24 });
  T(g, kicker, { x: 800, y: two ? 270 : 300, size: 28, fill: COL.dim, anchor: 'middle' });
  if (two) { T(g, title[0], { x: 800, y: 380, size: 84, weight: 600, anchor: 'middle' }); T(g, title[1], { x: 800, y: 470, size: 56, anchor: 'middle' }); }
  else T(g, title, { x: 800, y: 420, size: 84, weight: 600, anchor: 'middle' });
  tw(g, { o: 1, y: 0 }, .2, 1.1, out);
  tx(p, sub, 800, 570, m('sub', .2), { size: 34, fill: COL.dim, anchor: 'middle' });
  srcBadge(p, 670, m('exam'), exam);
}
// Three or four numbered takeaways.
function wrapList(p, m, items, y0 = 250, dy = 130) {
  items.forEach(([str, mark], i) => {
    const g = G(p, { x: -16, y: y0 + i * dy, o: 0 });
    mk('circle', { cx: 200, cy: -12, r: 26, fill: COL.task }, g);
    T(g, String(i + 1), { x: 200, y: -1, size: 30, fill: COL.board, weight: 700, anchor: 'middle' });
    T(g, str, { x: 260, size: 36, weight: 600 });
    tw(g, { o: 1, x: 0 }, m(mark), .6);
  });
}
// A rounded box drawn around a final answer ("box in your answers").
function ansBox(p, x, y, w, h, t0, color = COL.good) {
  const r = path(p, `M${x + 14} ${y}H${x + w - 14}Q${x + w} ${y} ${x + w} ${y + 14}V${y + h - 14}Q${x + w} ${y + h} ${x + w - 14} ${y + h}H${x + 14}Q${x} ${y + h} ${x} ${y + h - 14}V${y + 14}Q${x} ${y} ${x + 14} ${y}Z`,
    { stroke: color, 'stroke-width': 4 }, { d: 0 });
  draw(r, t0, .7);
  return r;
}
// Box around a math group drawn with ml()/M(): its centre x, baseline y and size are enough.
function boxMath(p, e, cx, y, size, t0, color = COL.good, pad = 22) {
  const w = e._w + pad * 2;
  return ansBox(p, cx - w / 2, y - size * 1.05, w, size * 1.5, t0, color);
}
// Path data for y = f(t) from a to b on axes A (from axes()).
function curveD(A, f, a, b, n = 90) {
  let d = '';
  for (let i = 0; i <= n; i++) { const t = a + (b - a) * i / n; d += (i ? 'L' : 'M') + A.PX(t).toFixed(1) + ' ' + A.PY(f(t)).toFixed(1); }
  return d;
}
// A dashed guide line that fades in.
const dashed = (p, d, t0, color = COL.dim, w = 2.5) => { const e = path(p, d, { stroke: color, 'stroke-width': w, 'stroke-dasharray': '8 8' }, { o: 0 }); show(e, t0); return e; };
// "lhs =" followed by a built-up fraction whose bar sits on y; returns { g, x1 } with x1 the right end.
function fracEq(p, lhs, top, bot, x, y, t0, { size = 44, fill = COL.chalk, after } = {}) {
  const g = G(p, { o: 0 });
  const l = M(g, [].concat(lhs), { x, y: y + size * .35, size, fill, anchor: 'start' });
  const f = frac(g, top, bot, x + l._w + size * .25, y, undefined, { size, fill });
  put(f.g, { o: 1 });   // frac() starts hidden when it gets no t0; the whole line fades in together
  let x1 = x + l._w + size * .25 + f.w;
  if (after) { const a = M(g, [].concat(after), { x: x1 + size * .2, y: y + size * .35, size, fill, anchor: 'start' }); x1 += size * .2 + a._w; }
  show(g, t0);
  return { g, x1 };
}
// A grey label naming the practice-midterm question a practice item comes from.
const fromExam = n => `Practice midterm, question ${n}. `;
