// Chemistry helpers shared by CHEM 152 chapters 2+ (load after engine.js). Chapter 1 keeps its own ef* copies.
'use strict';
const CFONT = MATH;   // upright serif for symbols, numbers and configurations
document.head.append(Object.assign(document.createElement('style'), { textContent: `
.chem { font-family: "STIX Two Text", "Cambria Math", "Iowan Old Style", Palatino, Georgia, serif; font-style: normal; white-space: nowrap; }
.chem sub { font-size: .7em; vertical-align: -.3em; line-height: 0; }
.chem sup { font-size: .7em; vertical-align: .55em; line-height: 0; }
.chem-line { display: flex; flex-wrap: wrap; align-items: baseline; min-height: 64px; gap: 2px 0; font: 40px "STIX Two Text", "Cambria Math", "Iowan Old Style", Palatino, Georgia, serif; white-space: pre; }
.blanks .bline.chem-line { white-space: pre; }
.chem-line .t { font-family: inherit; }
.chem-line .op { margin: 0 .4em; color: var(--dim); }
.chem-line .t.ui { font: 30px "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif; }
.chem-line .box { height: 50px; font-size: 30px; vertical-align: 0; margin: 0 6px; }
.chem-line .box.sup { height: 34px; width: 2.4ch; font-size: 22px; align-self: flex-start; margin: -4px 4px 0 1px; padding: 0 2px; }
.chem-line .box.sub { height: 34px; width: 2.4ch; font-size: 22px; align-self: flex-end; margin: 0 4px -8px 1px; padding: 0 2px; }
.chem-line .mark { margin-left: 14px; font: 700 30px "Avenir Next", "Segoe UI", sans-serif; }
.chem-line .mark.good, .obox-row .mark.good { color: var(--good); }
.chem-line .mark.bad, .obox-row .mark.bad { color: var(--bad); }
.chem-rows .why { font-size: 20px; color: var(--dim); margin: 2px 0 10px; }
.obox-row { display: flex; align-items: center; gap: 0; font: 36px "STIX Two Text", "Cambria Math", Georgia, serif; }
.obox-row .lab { margin-right: 18px; }
.obox { width: 84px; height: 84px; margin: 0 -1.5px 0 0; border: 3px solid var(--chalk); border-radius: 0; background: transparent; color: var(--task, #f0b45a);
  font: 600 38px "Segoe UI Symbol", "Avenir Next", sans-serif; letter-spacing: 2px; display: inline-flex; align-items: center; justify-content: center; position: relative; }
.obox:hover:not(:disabled) { background: rgba(236, 232, 220, .07); }
.obox:focus-visible { outline: 3px solid var(--quiz, #86c9e8); outline-offset: 2px; z-index: 1; }
.obox kbd { position: absolute; top: 3px; left: 5px; font-size: 13px; color: var(--dim); }
.obox-row .mark { margin-left: 18px; font: 700 30px "Avenir Next", "Segoe UI", sans-serif; }
` }));

const cT = (p, str, x, y, { size = 28, fill = COL.chalk, anchor = 'start', weight = 500, font = UI, o = 0 } = {}) =>
  T(p, str, { x, y, size, fill, anchor, weight, font, o });
const cW = (str, size) => { ctx2d.font = `${size}px ${CFONT}`; return ctx2d.measureText(str).width; };
// A rounded value box centred on (x, y).
function cBox(p, str, color, x, y, { size = 32, o = 0, font = CFONT, minW = 120 } = {}) {
  const g = G(p, { x, y, o });
  ctx2d.font = `${size}px ${font}`;
  const w = Math.max(minW, ctx2d.measureText(str).width + 44), hh = size * 1.6;
  g._rect = mk('rect', { x: -w / 2, y: -hh / 2, width: w, height: hh, rx: hh / 2, fill: COL.board, stroke: color, 'stroke-width': 3 }, g);
  T(g, str, { y: size * .34, size, fill: COL.chalk, font, anchor: 'middle' });
  g._w = w; g._h = hh;
  return g;
}
// Formula or configuration as one SVG text: parts [[base, script], ...]; script is a subscript (default) or superscript (sup: true).
function cFormula(p, parts, x, y, { size = 60, fill = COL.chalk, colors = null, o = 0, sup = false, anchor = 'middle' } = {}) {
  const t = mk('text', { 'font-size': size, 'font-family': CFONT, 'text-anchor': anchor, fill }, p);
  t.style.whiteSpace = 'pre';
  const d = sup ? -size * .42 : size * .22;
  for (const [b, s] of parts) {
    const a = mk('tspan', colors && colors[b.trim()] ? { fill: colors[b.trim()] } : {}, t); a.textContent = b;
    if (s) { mk('tspan', { 'font-size': size * .62, dy: d }, t).textContent = s; mk('tspan', { dy: -d }, t).textContent = '​'; }
  }
  return put(t, { x, y, o });
}
// Width of one [base, script] term at this size.
const termW = ([b, s], size) => cW(b, size) + (s ? cW(s, size * .62) : 0);
// Separate, individually animatable terms in a row (e.g. 1s² 2s² 2p⁶). Returns the elements, each with _cx (its centre).
function cTerms(p, terms, x, y, { size = 56, fill = COL.chalk, sup = true, gap = .3, anchor = 'middle', o = 0 } = {}) {
  const ws = terms.map(t => termW(t, size)), total = ws.reduce((a, b) => a + b, 0) + gap * size * (terms.length - 1);
  let cx = anchor === 'middle' ? x - total / 2 : anchor === 'end' ? x - total : x;
  const els = terms.map((t, i) => {
    const e = cFormula(p, [t], cx + ws[i] / 2, y, { size, fill, sup, o });
    e._cx = cx + ws[i] / 2; e._w = ws[i];
    cx += ws[i] + gap * size;
    return e;
  });
  els.left = anchor === 'middle' ? x - total / 2 : anchor === 'end' ? x - total : x; els.w = total;
  return els;
}
// HTML formula / configuration for cards: chemH(['Fe', '2'], ['O', '3']) or chemH(['1s', '2'], [' 2s', '2'], {sup: true}).
function chemH(...parts) {
  const opt = parts.length && !Array.isArray(parts[parts.length - 1]) ? parts.pop() : {};
  const s = h('span', 'chem');
  for (const [b, x] of parts) { s.append(b); if (x) s.append(h(opt.sup ? 'sup' : 'sub', '', x)); }
  return s;
}

/* ---------- orbital boxes on the stage ---------- */
const OB = 64;   // box side
// A row of n orbital boxes; label on the left. Returns the group with ._boxes [{x, y}] (top-left of each box).
function oRow(p, label, n, x, y, { color = COL.chalk, o = 0, labelFill = COL.chalk, size = 34 } = {}) {
  const g = G(p, { o });
  if (label) T(g, label, { x: x - 22, y: y + OB / 2 + size * .34, size, font: CFONT, anchor: 'end', fill: labelFill });
  g._boxes = [];
  for (let k = 0; k < n; k++) {
    mk('rect', { x: x + k * OB, y, width: OB, height: OB, fill: COL.board, stroke: color, 'stroke-width': 3 }, g);
    g._boxes.push({ x: x + k * OB, y });
  }
  return g;
}
// An electron arrow in box b ('u' up on the left half, 'd' down on the right half; single: true centres it).
function oArrow(p, b, dir, { color = COL.task, single = false, o = 0 } = {}) {
  const cx = b.x + OB / 2 + (single ? 0 : dir === 'u' ? -11 : 11), y1 = b.y + 12, y2 = b.y + OB - 12;
  const d = dir === 'u' ? `M${cx} ${y2}V${y1}M${cx - 8} ${y1 + 11}L${cx} ${y1}L${cx + 8} ${y1 + 11}`
    : `M${cx} ${y1}V${y2}M${cx - 8} ${y2 - 11}L${cx} ${y2}L${cx + 8} ${y2 - 11}`;
  return path(p, d, { stroke: color, 'stroke-width': 4 }, { o });
}
// A cross through a drawing region (wrong way), drawn on with draw().
const cCross = (p, x, y, w, hh) => path(p, `M${x} ${y}L${x + w} ${y + hh}M${x + w} ${y}L${x} ${y + hh}`, { stroke: COL.bad, 'stroke-width': 6 }, { d: 0 });

/* ---------- question types ---------- */
// Typed numbers inside chemistry text. rows: [{ parts: [string | {t: 'text', ui: true} | {sub|sup: '2'} | {box: '48.00', tol?, sup?, sub?, empty?}], why, hint?, fx? }].
// A box matches when |typed − answer| ≤ tol (default exact). empty: the value an empty box counts as (e.g. 1 for an unwritten subscript).
const chemBlanks = rowsIn => (body, api) => {
  const all = [];
  const num = (b, spec) => {
    const t = b.value.trim().replace(/^[−–]/, '-');
    if (t === '' && spec.empty !== undefined) return spec.empty;
    return /^-?\d+(\.\d+)?$/.test(t) ? Number(t) : NaN;
  };
  const rows = rowsIn.map(it => {
    const line = h('div', 'bline chem-line'), mark = h('span', 'mark'), why = h('div', 'why');
    const boxes = [];
    for (const p of it.parts) {
      if (typeof p === 'string') line.append(h('span', 't', p));
      else if (p.t !== undefined) line.append(h('span', 't' + (p.ui ? ' ui' : ''), p.t));
      else if (p.box !== undefined) {
        const b = h('input', 'box' + (p.sup ? ' sup' : p.sub ? ' sub' : ''));
        Object.assign(b, { type: 'text', inputMode: 'decimal', autocomplete: 'off', spellcheck: false });
        b.setAttribute('aria-label', p.label || (p.sup ? 'Superscript' : p.sub ? 'Subscript' : 'Answer'));
        if (!p.sup && !p.sub) b.style.width = `${Math.max(2, String(p.box).length) + 2}ch`;
        b._spec = p; line.append(b); boxes.push(b); all.push(b);
      } else if (p.sub || p.sup) line.append(h('span', 'chem', [h(p.sub ? 'sub' : 'sup', '', p.sub || p.sup)]));
    }
    line.append(mark);
    body.append(h('div', 'brow', [line, why]));
    return { it, boxes, mark, why, played: false };
  });
  body.classList.add('blanks', 'chem-rows');
  const single = rows.length === 1;
  const judge = r => {
    let ok = true;
    for (const b of r.boxes) {
      const want = Number(b._spec.box), got = num(b, b._spec);
      const good = Number.isFinite(got) && Math.abs(got - want) <= (b._spec.tol || 1e-9);
      b.classList.toggle('good', good); b.classList.toggle('bad', !good);
      ok = ok && good;
    }
    r.mark.className = 'mark ' + (ok ? 'good' : 'bad');
    r.mark.textContent = ok ? '✓' : '✗';
    r.why.replaceChildren(ok || single ? '' : rich(r.it.hint ?? r.it.why, 20));
    if (ok && !r.played) { r.played = true; r.it.fx?.(); }
    return ok;
  };
  requestAnimationFrame(() => all[0]?.focus({ preventScroll: true }));
  return {
    check() {
      const right = rows.filter(judge).length, done = right === rows.length;
      const msg = single ? (done ? rows[0].it.why : rows[0].it.hint ?? rows[0].it.why)
        : done ? [] : [`${right} of ${rows.length} right. Fix the rows marked ✗ and check again.`];
      api.grade(done, msg, { right, total: rows.length });
    },
    reveal() {
      for (const r of rows) { r.boxes.forEach(b => { b.value = b._spec.box; }); judge(r); if (!single) r.why.replaceChildren(rich(r.it.why, 20)); }
      return single ? rows[0].it.why : 'the correct numbers are filled in.';
    },
    lock() { all.forEach(b => { b.disabled = true; }); },
    hint: ['type the number, ', kbd('Tab'), ' next box, ', kbd('Enter'), ' check, ', kbd('Esc'), ' leave the box'],
  };
};
// Build a row of orbital boxes by clicking: each click (or its number key) cycles empty → ↑ → ↑↓ → empty.
// test(counts) judges the electrons per box; answer is what Show answer fills in; hintFor(counts) explains a wrong try.
const boxBuild = (label, n, test, answer, why, hintFor) => (body, api) => {
  const glyph = ['', '↑', '↑↓'], state = Array(n).fill(0), mark = h('span', 'mark');
  let locked = false;
  const bs = state.map((_, k) => {
    const b = h('button', 'obox', [kbd(String(k + 1)), h('span', 'e', '')]);
    b.setAttribute('aria-label', `Box ${k + 1}: empty`);
    b.onclick = () => { if (locked) return; state[k] = (state[k] + 1) % 3; paint(); };
    return b;
  });
  const paint = () => bs.forEach((b, k) => {
    b.querySelector('.e').textContent = glyph[state[k]];
    b.setAttribute('aria-label', `Box ${k + 1}: ${['empty', 'one electron, up', 'two electrons, up and down'][state[k]]}`);
  });
  body.append(h('div', 'obox-row', [h('span', 'lab', label), ...bs, mark]));
  return {
    check() {
      const ok = !!test([...state]);
      mark.className = 'mark ' + (ok ? 'good' : 'bad'); mark.textContent = ok ? '✓' : '✗';
      api.grade(ok, ok ? why : hintFor([...state]));
    },
    reveal() { answer.forEach((v, k) => { state[k] = v; }); paint(); mark.className = 'mark good'; mark.textContent = '✓'; return why; },
    lock() { locked = true; bs.forEach(b => { b.disabled = true; }); },
    hint: [kbd('1'), '–', kbd(String(n)), ' or click a box to add an electron (a third press empties it), ', kbd('Enter'), ' check'],
    key(e) { const k = +e.key - 1; if (locked || !(k >= 0 && k < n)) return false; bs[k].click(); return true; },
  };
};

/* ---------- chapters 5-8: source badge, equations, atom counts, charges ---------- */
const SRC_STD = 'Standard method · not yet confirmed by course slides';
// An outlined note for chapters taught with a standard (not instructor-confirmed) method.
function srcBadge(p, y, t0, text = SRC_STD, x = 800) {
  const n = G(p, { o: 0 }), w = uiW(text, 26) + 48;
  mk('rect', { x: x - w / 2, y: y - 34, width: w, height: 50, rx: 25, fill: 'none', stroke: COL.task, 'stroke-width': 2 }, n);
  T(n, text, { x, y, size: 26, fill: COL.task, weight: 600, anchor: 'middle' });
  show(n, t0);
  return n;
}
// A chemical equation laid out on one line. species: [{ f: [[symbol, subscript], ...], coef?: number }]; the first nLeft are reactants.
// Returns { g, items: [{ x, coefX, el (coefficient text), form }], ops }. Everything starts hidden in g (o: 0); show g to reveal.
function eqRow(p, species, nLeft, y, { size = 60, x = 800, colors = null } = {}) {
  const g = G(p, { o: 0 }), cw = size * .8, opW = size * 1.2;
  const fw = species.map(s => s.f.reduce((a, t) => a + termW(t, size), 0));
  const total = fw.reduce((a, b) => a + b, 0) + cw * species.length + opW * (species.length - 1);
  let cx = x - total / 2;
  const ops = [];
  const items = species.map((s, i) => {
    if (i) { ops.push(T(g, i === nLeft ? '→' : '+', { x: cx + opW / 2, y, size: size * .8, fill: COL.dim, font: CFONT, anchor: 'middle' })); cx += opW; }
    const coefX = cx + cw - size * .12;
    const el = T(g, s.coef > 1 ? String(s.coef) : '', { x: coefX, y, size, fill: COL.task, font: CFONT, anchor: 'end' });
    const form = cFormula(g, s.f, cx + cw, y, { size, anchor: 'start', o: 1, colors });
    const it = { x: cx + cw + fw[i] / 2, left: cx, coefX, el, form, w: cw + fw[i] };
    cx += cw + fw[i];
    return it;
  });
  return { g, items, ops, y, size };
}
// Change coefficient i to val at t0 (cross-fade, then a pulse). Works on the lesson clock.
function setCoef(row, i, val, t0) {
  const it = row.items[i];
  hide(it.el, t0, .3);
  const n = T(row.g, typeof val === 'string' ? val : val > 1 ? String(val) : '', { x: it.coefX, y: row.y, size: row.size, fill: COL.task, font: CFONT, anchor: 'end', o: 0 });
  show(n, t0 + .25, .3);
  pulse(n, t0 + .3, 1.3);
  it.el = n;
}
// Atom-count table: one row per element, reactant and product totals. setCounts() writes new values (green when equal, red when not).
function countTable(p, els, x, y, { rowH = 52, size = 32 } = {}) {
  const g = G(p, { o: 0 });
  T(g, 'atom', { x, y, size: 24, fill: COL.dim, weight: 600, anchor: 'middle' });
  T(g, 'reactants', { x: x + 170, y, size: 24, fill: COL.dim, weight: 600, anchor: 'middle' });
  T(g, 'products', { x: x + 340, y, size: 24, fill: COL.dim, weight: 600, anchor: 'middle' });
  path(g, `M${x - 60} ${y + 14}H${x + 410}`, { stroke: COL.faint, 'stroke-width': 2 });
  els.forEach((e, i) => T(g, e, { x, y: y + (i + 1) * rowH, size, font: CFONT, anchor: 'middle' }));
  return { g, els, x, y, rowH, size, vals: [] };
}
function setCounts(tb, L, R, t0) {
  tb.vals.forEach(v => hide(v, t0, .25));
  tb.vals = [];
  tb.els.forEach((e, i) => {
    const ok = L[e] === R[e], fill = ok ? COL.good : COL.bad, yy = tb.y + (i + 1) * tb.rowH;
    for (const [v, dx] of [[L[e], 170], [R[e], 340]]) {
      const t = T(tb.g, String(v), { x: tb.x + dx, y: yy, size: tb.size, fill, font: CFONT, weight: 600, anchor: 'middle', o: 0 });
      show(t, t0 + .2, .3);
      tb.vals.push(t);
    }
  });
}
// Totals of each element on one side: species carry atoms: { H: 2, O: 1 }.
const sideCount = (species, coefs, from, to) => {
  const out = {};
  for (let i = from; i < to; i++) for (const [k, v] of Object.entries(species[i].atoms)) out[k] = (out[k] || 0) + coefs[i] * v;
  return out;
};
// Unit charge blocks: n squares marked + or −, in a row from (x, y). Returns the group (o: 0).
function chargeBlocks(p, n, sign, x, y, { unit = 40, color = sign > 0 ? COL.nat : COL.whole } = {}) {
  const g = G(p, { o: 0 });
  for (let k = 0; k < n; k++) {
    mk('rect', { x: x + k * unit, y, width: unit - 4, height: unit - 4, rx: 6, fill: color, 'fill-opacity': .25, stroke: color, 'stroke-width': 2 }, g);
    T(g, sign > 0 ? '+' : '−', { x: x + k * unit + (unit - 4) / 2, y: y + unit * .66, size: unit * .6, fill: color, weight: 700, anchor: 'middle' });
  }
  return g;
}
// Balance an equation by typing coefficients (an empty box counts as 1). Judged by atom counts, so any correct
// lowest-terms answer passes; a balanced but reducible set is told to use the lowest whole numbers.
const coefBlanks = (species, nLeft, answer, why) => (body, api) => {
  const line = h('div', 'bline chem-line'), mark = h('span', 'mark'), boxes = [];
  species.forEach((s, i) => {
    if (i) line.append(h('span', 't op', i === nLeft ? '→' : '+'));
    const b = h('input', 'box');
    Object.assign(b, { type: 'text', inputMode: 'numeric', autocomplete: 'off', spellcheck: false });
    b.style.width = '2.6ch';
    b.setAttribute('aria-label', `Coefficient ${i + 1}`);
    line.append(b, chemH(...s.f));
    boxes.push(b);
  });
  line.append(mark);
  body.append(h('div', 'brow', [line]));
  body.classList.add('blanks', 'chem-rows');
  requestAnimationFrame(() => boxes[0].focus({ preventScroll: true }));
  const read = () => boxes.map(b => { const t = b.value.trim(); return t === '' ? 1 : /^\d+$/.test(t) ? Number(t) : NaN; });
  const judge = () => {
    const c = read();
    if (!c.every(v => Number.isInteger(v) && v > 0)) return [false, 'Use whole-number coefficients of 1 or more (an empty box means 1).'];
    const L = sideCount(species, c, 0, nLeft), R = sideCount(species, c, nLeft, species.length);
    const off = Object.keys({ ...L, ...R }).filter(k => L[k] !== R[k]);
    if (off.length) return [false, 'Not balanced yet: ' + off.map(k => `${k} ${L[k] || 0} on the left, ${R[k] || 0} on the right`).join('; ') + '.'];
    const g = c.reduce((a, b) => gcd(a, b));
    if (g > 1) return [false, `Balanced, but not the lowest whole numbers. Divide every coefficient by ${g}.`];
    return [true, why];
  };
  return {
    check() {
      const [ok, msg] = judge();
      mark.className = 'mark ' + (ok ? 'good' : 'bad'); mark.textContent = ok ? '✓' : '✗';
      boxes.forEach(b => { b.classList.toggle('good', ok); b.classList.toggle('bad', !ok); });
      api.grade(ok, msg);
    },
    reveal() { boxes.forEach((b, i) => { b.value = answer[i] > 1 ? String(answer[i]) : '1'; b.classList.add('good'); }); mark.className = 'mark good'; mark.textContent = '✓'; return why; },
    lock() { boxes.forEach(b => { b.disabled = true; }); },
    hint: ['type each coefficient (empty = 1), ', kbd('Tab'), ' next box, ', kbd('Enter'), ' check, ', kbd('Esc'), ' leave the box'],
  };
};

// An ion label: formula with lowered subscripts, then its charge raised at the end (e.g. SO4 with 2−). Returns a group (o: 0).
function ionF(p, parts, charge, x, y, { size = 48, fill = COL.chalk, anchor = 'middle', o = 0 } = {}) {
  const w = parts.reduce((a, t) => a + termW(t, size), 0) + cW(charge, size * .6);
  const x0 = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
  const g = G(p, { o });
  cFormula(g, parts, x0, y, { size, fill, anchor: 'start', o: 1 });
  T(g, charge, { x: x0 + w - cW(charge, size * .6), y: y - size * .42, size: size * .6, fill, font: CFONT });
  g._w = w;
  return g;
}
// Element colours for naming chapters: metals warm, nonmetals cool, polyatomic groups green.
const MCOL = COL.nat, NCOL = COL.whole, PCOL = COL.irr;
