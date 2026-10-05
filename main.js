try {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key2] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key2 of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key2) && key2 !== except && __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 != "symbol" ? key2 + "" : key2, value);

// src/main.js
var main_exports = {};
__export(main_exports, {
  default: () => CanvasInkPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/layer.js
var import_obsidian3 = require("obsidian");

// node_modules/perfect-freehand/dist/esm/index.mjs
var { PI: e } = Math, t = e + 1e-4, n = 0.5, r = [1, 1];
function i(e3, t3, n3, r4 = (e4) => e4) {
  return e3 * r4(0.5 - t3 * (0.5 - n3));
}
var { min: a } = Math;
function o(e3, t3, n3) {
  let r4 = a(1, t3 / n3);
  return a(1, e3 + (a(1, 1 - r4) - e3) * (r4 * 0.275));
}
function s(e3) {
  return [-e3[0], -e3[1]];
}
function c(e3, t3) {
  return [e3[0] + t3[0], e3[1] + t3[1]];
}
function l(e3, t3, n3) {
  return e3[0] = t3[0] + n3[0], e3[1] = t3[1] + n3[1], e3;
}
function u(e3, t3) {
  return [e3[0] - t3[0], e3[1] - t3[1]];
}
function d(e3, t3, n3) {
  return e3[0] = t3[0] - n3[0], e3[1] = t3[1] - n3[1], e3;
}
function f(e3, t3) {
  return [e3[0] * t3, e3[1] * t3];
}
function p(e3, t3, n3) {
  return e3[0] = t3[0] * n3, e3[1] = t3[1] * n3, e3;
}
function m(e3, t3) {
  return [e3[0] / t3, e3[1] / t3];
}
function h(e3) {
  return [e3[1], -e3[0]];
}
function g(e3, t3) {
  let n3 = t3[0];
  return e3[0] = t3[1], e3[1] = -n3, e3;
}
function ee(e3, t3) {
  return e3[0] * t3[0] + e3[1] * t3[1];
}
function _(e3, t3) {
  return e3[0] === t3[0] && e3[1] === t3[1];
}
function v(e3) {
  return Math.hypot(e3[0], e3[1]);
}
function y(e3, t3) {
  let n3 = e3[0] - t3[0], r4 = e3[1] - t3[1];
  return n3 * n3 + r4 * r4;
}
function b(e3) {
  return m(e3, v(e3));
}
function x(e3, t3) {
  return Math.hypot(e3[1] - t3[1], e3[0] - t3[0]);
}
function S(e3, t3, n3) {
  let r4 = Math.sin(n3), i3 = Math.cos(n3), a3 = e3[0] - t3[0], o3 = e3[1] - t3[1], s3 = a3 * i3 - o3 * r4, c3 = a3 * r4 + o3 * i3;
  return [s3 + t3[0], c3 + t3[1]];
}
function C(e3, t3, n3, r4) {
  let i3 = Math.sin(r4), a3 = Math.cos(r4), o3 = t3[0] - n3[0], s3 = t3[1] - n3[1], c3 = o3 * a3 - s3 * i3, l3 = o3 * i3 + s3 * a3;
  return e3[0] = c3 + n3[0], e3[1] = l3 + n3[1], e3;
}
function w(e3, t3, n3) {
  return c(e3, f(u(t3, e3), n3));
}
function te(e3, t3, n3, r4) {
  let i3 = n3[0] - t3[0], a3 = n3[1] - t3[1];
  return e3[0] = t3[0] + i3 * r4, e3[1] = t3[1] + a3 * r4, e3;
}
function T(e3, t3, n3) {
  return c(e3, f(t3, n3));
}
var E = [0, 0], D = [0, 0], O = [0, 0];
function k(e3, n3) {
  let r4 = T(e3, b(h(u(e3, c(e3, [1, 1])))), -n3), i3 = [], a3 = 1 / 13;
  for (let n4 = a3; n4 <= 1; n4 += a3) i3.push(S(r4, e3, t * 2 * n4));
  return i3;
}
function A(e3, n3, r4) {
  let i3 = [], a3 = 1 / r4;
  for (let r5 = a3; r5 <= 1; r5 += a3) i3.push(S(n3, e3, t * r5));
  return i3;
}
function j(e3, t3, n3) {
  let r4 = u(t3, n3), i3 = f(r4, 0.5), a3 = f(r4, 0.51);
  return [u(e3, i3), u(e3, a3), c(e3, a3), c(e3, i3)];
}
function M(e3, n3, r4, i3) {
  let a3 = [], o3 = T(e3, n3, r4), s3 = 1 / i3;
  for (let n4 = s3; n4 < 1; n4 += s3) a3.push(S(o3, e3, t * 3 * n4));
  return a3;
}
function ne(e3, t3, n3) {
  return [c(e3, f(t3, n3)), c(e3, f(t3, n3 * 0.99)), u(e3, f(t3, n3 * 0.99)), u(e3, f(t3, n3))];
}
function N(e3, t3, n3) {
  return e3 === !1 || e3 === void 0 ? 0 : e3 === !0 ? Math.max(t3, n3) : e3;
}
function re(e3, t3, n3) {
  return e3.slice(0, 10).reduce((e4, r4) => {
    let i3 = r4.pressure;
    return t3 && (i3 = o(e4, r4.distance, n3)), (e4 + i3) / 2;
  }, e3[0].pressure);
}
function P(e3, n3 = {}) {
  let { size: r4 = 16, smoothing: a3 = 0.5, thinning: f3 = 0.5, simulatePressure: m3 = !0, easing: _3 = (e4) => e4, start: v3 = {}, end: b3 = {}, last: x3 = !1 } = n3, { cap: S4 = !0, easing: w3 = (e4) => e4 * (2 - e4) } = v3, { cap: T3 = !0, easing: P3 = (e4) => --e4 * e4 * e4 + 1 } = b3;
  if (e3.length === 0 || r4 <= 0) return [];
  let F3 = e3[e3.length - 1].runningLength, I3 = N(v3.taper, r4, F3), L3 = N(b3.taper, r4, F3), R3 = (r4 * a3) ** 2, z2 = [], B2 = [], V2 = re(e3, m3, r4), H2 = i(r4, f3, e3[e3.length - 1].pressure, _3), U2, W2 = e3[0].vector, G2 = e3[0].point, K2 = G2, q2 = G2, J2 = K2, Y2 = !1;
  for (let n4 = 0; n4 < e3.length; n4++) {
    let { pressure: a4 } = e3[n4], { point: s3, vector: h3, distance: v4, runningLength: b5 } = e3[n4], x4 = n4 === e3.length - 1;
    if (!x4 && F3 - b5 < 3) continue;
    f3 ? (m3 && (a4 = o(V2, v4, r4)), H2 = i(r4, f3, a4, _3)) : H2 = r4 / 2, U2 === void 0 && (U2 = H2);
    let S5 = b5 < I3 ? w3(b5 / I3) : 1, T4 = F3 - b5 < L3 ? P3((F3 - b5) / L3) : 1;
    H2 = Math.max(0.01, H2 * Math.min(S5, T4));
    let k3 = (x4 ? e3[n4] : e3[n4 + 1]).vector, A3 = x4 ? 1 : ee(h3, k3), j3 = ee(h3, W2) < 0 && !Y2, M3 = A3 !== null && A3 < 0;
    if (j3 || M3) {
      g(E, W2), p(E, E, H2);
      for (let e4 = 0; e4 <= 1; e4 += 0.07692307692307693) d(D, s3, E), C(D, D, s3, t * e4), q2 = [D[0], D[1]], z2.push(q2), l(O, s3, E), C(O, O, s3, t * -e4), J2 = [O[0], O[1]], B2.push(J2);
      G2 = q2, K2 = J2, M3 && (Y2 = !0);
      continue;
    }
    if (Y2 = !1, x4) {
      g(E, h3), p(E, E, H2), z2.push(u(s3, E)), B2.push(c(s3, E));
      continue;
    }
    te(E, k3, h3, A3), g(E, E), p(E, E, H2), d(D, s3, E), q2 = [D[0], D[1]], (n4 <= 1 || y(G2, q2) > R3) && (z2.push(q2), G2 = q2), l(O, s3, E), J2 = [O[0], O[1]], (n4 <= 1 || y(K2, J2) > R3) && (B2.push(J2), K2 = J2), V2 = a4, W2 = h3;
  }
  let X2 = [e3[0].point[0], e3[0].point[1]], Z2 = e3.length > 1 ? [e3[e3.length - 1].point[0], e3[e3.length - 1].point[1]] : c(e3[0].point, [1, 1]), Q2 = [], $2 = [];
  if (e3.length === 1) {
    if (!(I3 || L3) || x3) return k(X2, U2 || H2);
  } else {
    I3 || L3 && e3.length === 1 || (S4 ? Q2.push(...A(X2, B2[0], 13)) : Q2.push(...j(X2, z2[0], B2[0])));
    let t3 = h(s(e3[e3.length - 1].vector));
    L3 || I3 && e3.length === 1 ? $2.push(Z2) : T3 ? $2.push(...M(Z2, t3, H2, 29)) : $2.push(...ne(Z2, t3, H2));
  }
  return z2.concat($2, B2.reverse(), Q2);
}
var F = [0, 0];
function I(e3) {
  return e3 != null && e3 >= 0;
}
function L(e3, t3 = {}) {
  var _a2;
  let { streamline: i3 = 0.5, size: a3 = 16, last: o3 = !1 } = t3;
  if (e3.length === 0) return [];
  let s3 = 0.15 + (1 - i3) * 0.85, l3 = Array.isArray(e3[0]) ? e3 : e3.map(({ x: e4, y: t4, pressure: r4 = n }) => [e4, t4, r4]);
  if (l3.length === 2) {
    let e4 = l3[1];
    l3 = l3.slice(0, -1);
    for (let t4 = 1; t4 < 5; t4++) l3.push(w(l3[0], e4, t4 / 4));
  }
  l3.length === 1 && (l3 = [...l3, [...c(l3[0], r), ...l3[0].slice(2)]]);
  let u3 = [{ point: [l3[0][0], l3[0][1]], pressure: I(l3[0][2]) ? l3[0][2] : 0.25, vector: [...r], distance: 0, runningLength: 0 }], f3 = !1, p3 = 0, m3 = u3[0], h3 = l3.length - 1;
  for (let e4 = 1; e4 < l3.length; e4++) {
    let t4 = o3 && e4 === h3 ? [l3[e4][0], l3[e4][1]] : w(m3.point, l3[e4], s3);
    if (_(m3.point, t4)) continue;
    let r4 = x(t4, m3.point);
    if (p3 += r4, e4 < h3 && !f3) {
      if (p3 < a3) continue;
      f3 = !0;
    }
    d(F, m3.point, t4), m3 = { point: t4, pressure: I(l3[e4][2]) ? l3[e4][2] : n, vector: b(F), distance: r4, runningLength: p3 }, u3.push(m3);
  }
  return u3[0].vector = ((_a2 = u3[1]) == null ? void 0 : _a2.vector) || [0, 0], u3;
}
function R(e3, t3 = {}) {
  return P(L(e3, t3), t3);
}

// node_modules/roughjs/bundled/rough.esm.js
function t2(t3, e3, s3) {
  if (t3 && t3.length) {
    let [n3, o3] = e3, a3 = Math.PI / 180 * s3, h3 = Math.cos(a3), r4 = Math.sin(a3);
    for (let e4 of t3) {
      let [t4, s4] = e4;
      e4[0] = (t4 - n3) * h3 - (s4 - o3) * r4 + n3, e4[1] = (t4 - n3) * r4 + (s4 - o3) * h3 + o3;
    }
  }
}
function e2(t3, e3) {
  return t3[0] === e3[0] && t3[1] === e3[1];
}
function s2(s3, n3, o3, a3 = 1) {
  let h3 = o3, r4 = Math.max(n3, 0.1), i3 = s3[0] && s3[0][0] && typeof s3[0][0] == "number" ? [s3] : s3, c3 = [0, 0];
  if (h3) for (let e3 of i3) t2(e3, c3, h3);
  let l3 = function(t3, s4, n4) {
    let o4 = [];
    for (let s5 of t3) {
      let t4 = [...s5];
      e2(t4[0], t4[t4.length - 1]) || t4.push([t4[0][0], t4[0][1]]), t4.length > 2 && o4.push(t4);
    }
    let a4 = [];
    s4 = Math.max(s4, 0.1);
    let h4 = [];
    for (let t4 of o4) for (let e3 = 0; e3 < t4.length - 1; e3++) {
      let s5 = t4[e3], n5 = t4[e3 + 1];
      if (s5[1] !== n5[1]) {
        let t5 = Math.min(s5[1], n5[1]);
        h4.push({ ymin: t5, ymax: Math.max(s5[1], n5[1]), x: t5 === s5[1] ? s5[0] : n5[0], islope: (n5[0] - s5[0]) / (n5[1] - s5[1]) });
      }
    }
    if (h4.sort((t4, e3) => t4.ymin < e3.ymin ? -1 : t4.ymin > e3.ymin ? 1 : t4.x < e3.x ? -1 : t4.x > e3.x ? 1 : t4.ymax === e3.ymax ? 0 : (t4.ymax - e3.ymax) / Math.abs(t4.ymax - e3.ymax)), !h4.length) return a4;
    let r5 = [], i4 = h4[0].ymin, c4 = 0;
    for (; r5.length || h4.length; ) {
      if (h4.length) {
        let t4 = -1;
        for (let e3 = 0; e3 < h4.length && !(h4[e3].ymin > i4); e3++) t4 = e3;
        h4.splice(0, t4 + 1).forEach((t5) => {
          r5.push({ s: i4, edge: t5 });
        });
      }
      if (r5 = r5.filter((t4) => !(t4.edge.ymax <= i4)), r5.sort((t4, e3) => t4.edge.x === e3.edge.x ? 0 : (t4.edge.x - e3.edge.x) / Math.abs(t4.edge.x - e3.edge.x)), (n4 !== 1 || c4 % s4 == 0) && r5.length > 1) for (let t4 = 0; t4 < r5.length; t4 += 2) {
        let e3 = t4 + 1;
        if (e3 >= r5.length) break;
        let s5 = r5[t4].edge, n5 = r5[e3].edge;
        a4.push([[Math.round(s5.x), i4], [Math.round(n5.x), i4]]);
      }
      i4 += n4, r5.forEach((t4) => {
        t4.edge.x = t4.edge.x + n4 * t4.edge.islope;
      }), c4++;
    }
    return a4;
  }(i3, r4, a3);
  if (h3) {
    for (let e3 of i3) t2(e3, c3, -h3);
    (function(e3, s4, n4) {
      let o4 = [];
      e3.forEach((t3) => o4.push(...t3)), t2(o4, s4, n4);
    })(l3, c3, -h3);
  }
  return l3;
}
function n2(t3, e3) {
  var n3;
  let o3 = e3.hachureAngle + 90, a3 = e3.hachureGap;
  a3 < 0 && (a3 = 4 * e3.strokeWidth), a3 = Math.round(Math.max(a3, 0.1));
  let h3 = 1;
  return e3.roughness >= 1 && (((n3 = e3.randomizer) === null || n3 === void 0 ? void 0 : n3.next()) || Math.random()) > 0.7 && (h3 = a3), s2(t3, a3, o3, h3 || 1);
}
var o2 = class {
  constructor(t3) {
    this.helper = t3;
  }
  fillPolygons(t3, e3) {
    return this._fillPolygons(t3, e3);
  }
  _fillPolygons(t3, e3) {
    let s3 = n2(t3, e3);
    return { type: "fillSketch", ops: this.renderLines(s3, e3) };
  }
  renderLines(t3, e3) {
    let s3 = [];
    for (let n3 of t3) s3.push(...this.helper.doubleLineOps(n3[0][0], n3[0][1], n3[1][0], n3[1][1], e3));
    return s3;
  }
};
function a2(t3) {
  let e3 = t3[0], s3 = t3[1];
  return Math.sqrt(Math.pow(e3[0] - s3[0], 2) + Math.pow(e3[1] - s3[1], 2));
}
var h2 = class extends o2 {
  fillPolygons(t3, e3) {
    let s3 = e3.hachureGap;
    s3 < 0 && (s3 = 4 * e3.strokeWidth), s3 = Math.max(s3, 0.1);
    let o3 = n2(t3, Object.assign({}, e3, { hachureGap: s3 })), h3 = Math.PI / 180 * e3.hachureAngle, r4 = [], i3 = 0.5 * s3 * Math.cos(h3), c3 = 0.5 * s3 * Math.sin(h3);
    for (let [t4, e4] of o3) a2([t4, e4]) && r4.push([[t4[0] - i3, t4[1] + c3], [...e4]], [[t4[0] + i3, t4[1] - c3], [...e4]]);
    return { type: "fillSketch", ops: this.renderLines(r4, e3) };
  }
}, r2 = class extends o2 {
  fillPolygons(t3, e3) {
    let s3 = this._fillPolygons(t3, e3), n3 = Object.assign({}, e3, { hachureAngle: e3.hachureAngle + 90 }), o3 = this._fillPolygons(t3, n3);
    return s3.ops = s3.ops.concat(o3.ops), s3;
  }
}, i2 = class {
  constructor(t3) {
    this.helper = t3;
  }
  fillPolygons(t3, e3) {
    let s3 = n2(t3, e3 = Object.assign({}, e3, { hachureAngle: 0 }));
    return this.dotsOnLines(s3, e3);
  }
  dotsOnLines(t3, e3) {
    let s3 = [], n3 = e3.hachureGap;
    n3 < 0 && (n3 = 4 * e3.strokeWidth), n3 = Math.max(n3, 0.1);
    let o3 = e3.fillWeight;
    o3 < 0 && (o3 = e3.strokeWidth / 2);
    let h3 = n3 / 4;
    for (let r4 of t3) {
      let t4 = a2(r4), i3 = t4 / n3, c3 = Math.ceil(i3) - 1, l3 = t4 - c3 * n3, u3 = (r4[0][0] + r4[1][0]) / 2 - n3 / 4, p3 = Math.min(r4[0][1], r4[1][1]);
      for (let t5 = 0; t5 < c3; t5++) {
        let a3 = p3 + l3 + t5 * n3, r5 = u3 - h3 + 2 * Math.random() * h3, i4 = a3 - h3 + 2 * Math.random() * h3, c4 = this.helper.ellipse(r5, i4, o3, o3, e3);
        s3.push(...c4.ops);
      }
    }
    return { type: "fillSketch", ops: s3 };
  }
}, c2 = class {
  constructor(t3) {
    this.helper = t3;
  }
  fillPolygons(t3, e3) {
    let s3 = n2(t3, e3);
    return { type: "fillSketch", ops: this.dashedLine(s3, e3) };
  }
  dashedLine(t3, e3) {
    let s3 = e3.dashOffset < 0 ? e3.hachureGap < 0 ? 4 * e3.strokeWidth : e3.hachureGap : e3.dashOffset, n3 = e3.dashGap < 0 ? e3.hachureGap < 0 ? 4 * e3.strokeWidth : e3.hachureGap : e3.dashGap, o3 = [];
    return t3.forEach((t4) => {
      let h3 = a2(t4), r4 = Math.floor(h3 / (s3 + n3)), i3 = (h3 + n3 - r4 * (s3 + n3)) / 2, c3 = t4[0], l3 = t4[1];
      c3[0] > l3[0] && (c3 = t4[1], l3 = t4[0]);
      let u3 = Math.atan((l3[1] - c3[1]) / (l3[0] - c3[0]));
      for (let t5 = 0; t5 < r4; t5++) {
        let a3 = t5 * (s3 + n3), h4 = a3 + s3, r5 = [c3[0] + a3 * Math.cos(u3) + i3 * Math.cos(u3), c3[1] + a3 * Math.sin(u3) + i3 * Math.sin(u3)], l4 = [c3[0] + h4 * Math.cos(u3) + i3 * Math.cos(u3), c3[1] + h4 * Math.sin(u3) + i3 * Math.sin(u3)];
        o3.push(...this.helper.doubleLineOps(r5[0], r5[1], l4[0], l4[1], e3));
      }
    }), o3;
  }
}, l2 = class {
  constructor(t3) {
    this.helper = t3;
  }
  fillPolygons(t3, e3) {
    let s3 = e3.hachureGap < 0 ? 4 * e3.strokeWidth : e3.hachureGap, o3 = e3.zigzagOffset < 0 ? s3 : e3.zigzagOffset, a3 = n2(t3, e3 = Object.assign({}, e3, { hachureGap: s3 + o3 }));
    return { type: "fillSketch", ops: this.zigzagLines(a3, o3, e3) };
  }
  zigzagLines(t3, e3, s3) {
    let n3 = [];
    return t3.forEach((t4) => {
      let o3 = a2(t4), h3 = Math.round(o3 / (2 * e3)), r4 = t4[0], i3 = t4[1];
      r4[0] > i3[0] && (r4 = t4[1], i3 = t4[0]);
      let c3 = Math.atan((i3[1] - r4[1]) / (i3[0] - r4[0]));
      for (let t5 = 0; t5 < h3; t5++) {
        let o4 = 2 * t5 * e3, a3 = 2 * (t5 + 1) * e3, h4 = Math.sqrt(2 * Math.pow(e3, 2)), i4 = [r4[0] + o4 * Math.cos(c3), r4[1] + o4 * Math.sin(c3)], l3 = [r4[0] + a3 * Math.cos(c3), r4[1] + a3 * Math.sin(c3)], u3 = [i4[0] + h4 * Math.cos(c3 + Math.PI / 4), i4[1] + h4 * Math.sin(c3 + Math.PI / 4)];
        n3.push(...this.helper.doubleLineOps(i4[0], i4[1], u3[0], u3[1], s3), ...this.helper.doubleLineOps(u3[0], u3[1], l3[0], l3[1], s3));
      }
    }), n3;
  }
}, u2 = {}, p2 = class {
  constructor(t3) {
    this.seed = t3;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}, f2 = 0, d2 = 1, g2 = 2, M2 = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function k2(t3, e3) {
  return t3.type === e3;
}
function b2(t3) {
  let e3 = [], s3 = function(t4) {
    let e4 = new Array();
    for (; t4 !== ""; ) if (t4.match(/^([ \t\r\n,]+)/)) t4 = t4.substr(RegExp.$1.length);
    else if (t4.match(/^([aAcChHlLmMqQsStTvVzZ])/)) e4[e4.length] = { type: f2, text: RegExp.$1 }, t4 = t4.substr(RegExp.$1.length);
    else {
      if (!t4.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      e4[e4.length] = { type: d2, text: `${parseFloat(RegExp.$1)}` }, t4 = t4.substr(RegExp.$1.length);
    }
    return e4[e4.length] = { type: g2, text: "" }, e4;
  }(t3), n3 = "BOD", o3 = 0, a3 = s3[o3];
  for (; !k2(a3, g2); ) {
    let h3 = 0, r4 = [];
    if (n3 === "BOD") {
      if (a3.text !== "M" && a3.text !== "m") return b2("M0,0" + t3);
      o3++, h3 = M2[a3.text], n3 = a3.text;
    } else k2(a3, d2) ? h3 = M2[n3] : (o3++, h3 = M2[a3.text], n3 = a3.text);
    if (!(o3 + h3 < s3.length)) throw new Error("Path data ended short");
    for (let t4 = o3; t4 < o3 + h3; t4++) {
      let e4 = s3[t4];
      if (!k2(e4, d2)) throw new Error("Param not a number: " + n3 + "," + e4.text);
      r4[r4.length] = +e4.text;
    }
    if (typeof M2[n3] != "number") throw new Error("Bad segment: " + n3);
    {
      let t4 = { key: n3, data: r4 };
      e3.push(t4), o3 += h3, a3 = s3[o3], n3 === "M" && (n3 = "L"), n3 === "m" && (n3 = "l");
    }
  }
  return e3;
}
function y2(t3) {
  let e3 = 0, s3 = 0, n3 = 0, o3 = 0, a3 = [];
  for (let { key: h3, data: r4 } of t3) switch (h3) {
    case "M":
      a3.push({ key: "M", data: [...r4] }), [e3, s3] = r4, [n3, o3] = r4;
      break;
    case "m":
      e3 += r4[0], s3 += r4[1], a3.push({ key: "M", data: [e3, s3] }), n3 = e3, o3 = s3;
      break;
    case "L":
      a3.push({ key: "L", data: [...r4] }), [e3, s3] = r4;
      break;
    case "l":
      e3 += r4[0], s3 += r4[1], a3.push({ key: "L", data: [e3, s3] });
      break;
    case "C":
      a3.push({ key: "C", data: [...r4] }), e3 = r4[4], s3 = r4[5];
      break;
    case "c": {
      let t4 = r4.map((t5, n4) => n4 % 2 ? t5 + s3 : t5 + e3);
      a3.push({ key: "C", data: t4 }), e3 = t4[4], s3 = t4[5];
      break;
    }
    case "Q":
      a3.push({ key: "Q", data: [...r4] }), e3 = r4[2], s3 = r4[3];
      break;
    case "q": {
      let t4 = r4.map((t5, n4) => n4 % 2 ? t5 + s3 : t5 + e3);
      a3.push({ key: "Q", data: t4 }), e3 = t4[2], s3 = t4[3];
      break;
    }
    case "A":
      a3.push({ key: "A", data: [...r4] }), e3 = r4[5], s3 = r4[6];
      break;
    case "a":
      e3 += r4[5], s3 += r4[6], a3.push({ key: "A", data: [r4[0], r4[1], r4[2], r4[3], r4[4], e3, s3] });
      break;
    case "H":
      a3.push({ key: "H", data: [...r4] }), e3 = r4[0];
      break;
    case "h":
      e3 += r4[0], a3.push({ key: "H", data: [e3] });
      break;
    case "V":
      a3.push({ key: "V", data: [...r4] }), s3 = r4[0];
      break;
    case "v":
      s3 += r4[0], a3.push({ key: "V", data: [s3] });
      break;
    case "S":
      a3.push({ key: "S", data: [...r4] }), e3 = r4[2], s3 = r4[3];
      break;
    case "s": {
      let t4 = r4.map((t5, n4) => n4 % 2 ? t5 + s3 : t5 + e3);
      a3.push({ key: "S", data: t4 }), e3 = t4[2], s3 = t4[3];
      break;
    }
    case "T":
      a3.push({ key: "T", data: [...r4] }), e3 = r4[0], s3 = r4[1];
      break;
    case "t":
      e3 += r4[0], s3 += r4[1], a3.push({ key: "T", data: [e3, s3] });
      break;
    case "Z":
    case "z":
      a3.push({ key: "Z", data: [] }), e3 = n3, s3 = o3;
  }
  return a3;
}
function m2(t3) {
  let e3 = [], s3 = "", n3 = 0, o3 = 0, a3 = 0, h3 = 0, r4 = 0, i3 = 0;
  for (let { key: c3, data: l3 } of t3) {
    switch (c3) {
      case "M":
        e3.push({ key: "M", data: [...l3] }), [n3, o3] = l3, [a3, h3] = l3;
        break;
      case "C":
        e3.push({ key: "C", data: [...l3] }), n3 = l3[4], o3 = l3[5], r4 = l3[2], i3 = l3[3];
        break;
      case "L":
        e3.push({ key: "L", data: [...l3] }), [n3, o3] = l3;
        break;
      case "H":
        n3 = l3[0], e3.push({ key: "L", data: [n3, o3] });
        break;
      case "V":
        o3 = l3[0], e3.push({ key: "L", data: [n3, o3] });
        break;
      case "S": {
        let t4 = 0, a4 = 0;
        s3 === "C" || s3 === "S" ? (t4 = n3 + (n3 - r4), a4 = o3 + (o3 - i3)) : (t4 = n3, a4 = o3), e3.push({ key: "C", data: [t4, a4, ...l3] }), r4 = l3[0], i3 = l3[1], n3 = l3[2], o3 = l3[3];
        break;
      }
      case "T": {
        let [t4, a4] = l3, h4 = 0, c4 = 0;
        s3 === "Q" || s3 === "T" ? (h4 = n3 + (n3 - r4), c4 = o3 + (o3 - i3)) : (h4 = n3, c4 = o3);
        let u3 = n3 + 2 * (h4 - n3) / 3, p3 = o3 + 2 * (c4 - o3) / 3, f3 = t4 + 2 * (h4 - t4) / 3, d3 = a4 + 2 * (c4 - a4) / 3;
        e3.push({ key: "C", data: [u3, p3, f3, d3, t4, a4] }), r4 = h4, i3 = c4, n3 = t4, o3 = a4;
        break;
      }
      case "Q": {
        let [t4, s4, a4, h4] = l3, c4 = n3 + 2 * (t4 - n3) / 3, u3 = o3 + 2 * (s4 - o3) / 3, p3 = a4 + 2 * (t4 - a4) / 3, f3 = h4 + 2 * (s4 - h4) / 3;
        e3.push({ key: "C", data: [c4, u3, p3, f3, a4, h4] }), r4 = t4, i3 = s4, n3 = a4, o3 = h4;
        break;
      }
      case "A": {
        let t4 = Math.abs(l3[0]), s4 = Math.abs(l3[1]), a4 = l3[2], h4 = l3[3], r5 = l3[4], i4 = l3[5], c4 = l3[6];
        t4 === 0 || s4 === 0 ? (e3.push({ key: "C", data: [n3, o3, i4, c4, i4, c4] }), n3 = i4, o3 = c4) : (n3 !== i4 || o3 !== c4) && (x2(n3, o3, i4, c4, t4, s4, a4, h4, r5).forEach(function(t5) {
          e3.push({ key: "C", data: t5 });
        }), n3 = i4, o3 = c4);
        break;
      }
      case "Z":
        e3.push({ key: "Z", data: [] }), n3 = a3, o3 = h3;
    }
    s3 = c3;
  }
  return e3;
}
function w2(t3, e3, s3) {
  return [t3 * Math.cos(s3) - e3 * Math.sin(s3), t3 * Math.sin(s3) + e3 * Math.cos(s3)];
}
function x2(t3, e3, s3, n3, o3, a3, h3, r4, i3, c3) {
  let l3 = (u3 = h3, Math.PI * u3 / 180);
  var u3;
  let p3 = [], f3 = 0, d3 = 0, g3 = 0, M3 = 0;
  if (c3) [f3, d3, g3, M3] = c3;
  else {
    [t3, e3] = w2(t3, e3, -l3), [s3, n3] = w2(s3, n3, -l3);
    let h4 = (t3 - s3) / 2, c4 = (e3 - n3) / 2, u4 = h4 * h4 / (o3 * o3) + c4 * c4 / (a3 * a3);
    u4 > 1 && (u4 = Math.sqrt(u4), o3 *= u4, a3 *= u4);
    let p4 = o3 * o3, k4 = a3 * a3, b5 = p4 * k4 - p4 * c4 * c4 - k4 * h4 * h4, y4 = p4 * c4 * c4 + k4 * h4 * h4, m4 = (r4 === i3 ? -1 : 1) * Math.sqrt(Math.abs(b5 / y4));
    g3 = m4 * o3 * c4 / a3 + (t3 + s3) / 2, M3 = m4 * -a3 * h4 / o3 + (e3 + n3) / 2, f3 = Math.asin(parseFloat(((e3 - M3) / a3).toFixed(9))), d3 = Math.asin(parseFloat(((n3 - M3) / a3).toFixed(9))), t3 < g3 && (f3 = Math.PI - f3), s3 < g3 && (d3 = Math.PI - d3), f3 < 0 && (f3 = 2 * Math.PI + f3), d3 < 0 && (d3 = 2 * Math.PI + d3), i3 && f3 > d3 && (f3 -= 2 * Math.PI), !i3 && d3 > f3 && (d3 -= 2 * Math.PI);
  }
  let k3 = d3 - f3;
  if (Math.abs(k3) > 120 * Math.PI / 180) {
    let t4 = d3, e4 = s3, r5 = n3;
    d3 = i3 && d3 > f3 ? f3 + 120 * Math.PI / 180 * 1 : f3 + 120 * Math.PI / 180 * -1, p3 = x2(s3 = g3 + o3 * Math.cos(d3), n3 = M3 + a3 * Math.sin(d3), e4, r5, o3, a3, h3, 0, i3, [d3, t4, g3, M3]);
  }
  k3 = d3 - f3;
  let b3 = Math.cos(f3), y3 = Math.sin(f3), m3 = Math.cos(d3), P3 = Math.sin(d3), v3 = Math.tan(k3 / 4), S4 = 4 / 3 * o3 * v3, O3 = 4 / 3 * a3 * v3, L3 = [t3, e3], T3 = [t3 + S4 * y3, e3 - O3 * b3], D3 = [s3 + S4 * P3, n3 - O3 * m3], A3 = [s3, n3];
  if (T3[0] = 2 * L3[0] - T3[0], T3[1] = 2 * L3[1] - T3[1], c3) return [T3, D3, A3].concat(p3);
  {
    p3 = [T3, D3, A3].concat(p3);
    let t4 = [];
    for (let e4 = 0; e4 < p3.length; e4 += 3) {
      let s4 = w2(p3[e4][0], p3[e4][1], l3), n4 = w2(p3[e4 + 1][0], p3[e4 + 1][1], l3), o4 = w2(p3[e4 + 2][0], p3[e4 + 2][1], l3);
      t4.push([s4[0], s4[1], n4[0], n4[1], o4[0], o4[1]]);
    }
    return t4;
  }
}
var P2 = { randOffset: function(t3, e3) {
  return G(t3, e3);
}, randOffsetWithRange: function(t3, e3, s3) {
  return E2(t3, e3, s3);
}, ellipse: function(t3, e3, s3, n3, o3) {
  let a3 = T2(s3, n3, o3);
  return D2(t3, e3, o3, a3).opset;
}, doubleLineOps: function(t3, e3, s3, n3, o3) {
  return $(t3, e3, s3, n3, o3, !0);
} };
function v2(t3, e3, s3, n3, o3) {
  return { type: "path", ops: $(t3, e3, s3, n3, o3) };
}
function S2(t3, e3, s3) {
  let n3 = (t3 || []).length;
  if (n3 > 2) {
    let o3 = [];
    for (let e4 = 0; e4 < n3 - 1; e4++) o3.push(...$(t3[e4][0], t3[e4][1], t3[e4 + 1][0], t3[e4 + 1][1], s3));
    return e3 && o3.push(...$(t3[n3 - 1][0], t3[n3 - 1][1], t3[0][0], t3[0][1], s3)), { type: "path", ops: o3 };
  }
  return n3 === 2 ? v2(t3[0][0], t3[0][1], t3[1][0], t3[1][1], s3) : { type: "path", ops: [] };
}
function O2(t3, e3, s3, n3, o3) {
  return function(t4, e4) {
    return S2(t4, !0, e4);
  }([[t3, e3], [t3 + s3, e3], [t3 + s3, e3 + n3], [t3, e3 + n3]], o3);
}
function L2(t3, e3) {
  if (t3.length) {
    let s3 = typeof t3[0][0] == "number" ? [t3] : t3, n3 = j2(s3[0], 1 * (1 + 0.2 * e3.roughness), e3), o3 = e3.disableMultiStroke ? [] : j2(s3[0], 1.5 * (1 + 0.22 * e3.roughness), z(e3));
    for (let t4 = 1; t4 < s3.length; t4++) {
      let a3 = s3[t4];
      if (a3.length) {
        let t5 = j2(a3, 1 * (1 + 0.2 * e3.roughness), e3), s4 = e3.disableMultiStroke ? [] : j2(a3, 1.5 * (1 + 0.22 * e3.roughness), z(e3));
        for (let e4 of t5) e4.op !== "move" && n3.push(e4);
        for (let t6 of s4) t6.op !== "move" && o3.push(t6);
      }
    }
    return { type: "path", ops: n3.concat(o3) };
  }
  return { type: "path", ops: [] };
}
function T2(t3, e3, s3) {
  let n3 = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(t3 / 2, 2) + Math.pow(e3 / 2, 2)) / 2)), o3 = Math.ceil(Math.max(s3.curveStepCount, s3.curveStepCount / Math.sqrt(200) * n3)), a3 = 2 * Math.PI / o3, h3 = Math.abs(t3 / 2), r4 = Math.abs(e3 / 2), i3 = 1 - s3.curveFitting;
  return h3 += G(h3 * i3, s3), r4 += G(r4 * i3, s3), { increment: a3, rx: h3, ry: r4 };
}
function D2(t3, e3, s3, n3) {
  let [o3, a3] = F2(n3.increment, t3, e3, n3.rx, n3.ry, 1, n3.increment * E2(0.1, E2(0.4, 1, s3), s3), s3), h3 = q(o3, null, s3);
  if (!s3.disableMultiStroke && s3.roughness !== 0) {
    let [o4] = F2(n3.increment, t3, e3, n3.rx, n3.ry, 1.5, 0, s3), a4 = q(o4, null, s3);
    h3 = h3.concat(a4);
  }
  return { estimatedPoints: a3, opset: { type: "path", ops: h3 } };
}
function A2(t3, e3, s3, n3, o3, a3, h3, r4, i3) {
  let c3 = t3, l3 = e3, u3 = Math.abs(s3 / 2), p3 = Math.abs(n3 / 2);
  u3 += G(0.01 * u3, i3), p3 += G(0.01 * p3, i3);
  let f3 = o3, d3 = a3;
  for (; f3 < 0; ) f3 += 2 * Math.PI, d3 += 2 * Math.PI;
  d3 - f3 > 2 * Math.PI && (f3 = 0, d3 = 2 * Math.PI);
  let g3 = 2 * Math.PI / i3.curveStepCount, M3 = Math.min(g3 / 2, (d3 - f3) / 2), k3 = V(M3, c3, l3, u3, p3, f3, d3, 1, i3);
  if (!i3.disableMultiStroke) {
    let t4 = V(M3, c3, l3, u3, p3, f3, d3, 1.5, i3);
    k3.push(...t4);
  }
  return h3 && (r4 ? k3.push(...$(c3, l3, c3 + u3 * Math.cos(f3), l3 + p3 * Math.sin(f3), i3), ...$(c3, l3, c3 + u3 * Math.cos(d3), l3 + p3 * Math.sin(d3), i3)) : k3.push({ op: "lineTo", data: [c3, l3] }, { op: "lineTo", data: [c3 + u3 * Math.cos(f3), l3 + p3 * Math.sin(f3)] })), { type: "path", ops: k3 };
}
function _2(t3, e3) {
  let s3 = m2(y2(b2(t3))), n3 = [], o3 = [0, 0], a3 = [0, 0];
  for (let { key: t4, data: h3 } of s3) switch (t4) {
    case "M":
      a3 = [h3[0], h3[1]], o3 = [h3[0], h3[1]];
      break;
    case "L":
      n3.push(...$(a3[0], a3[1], h3[0], h3[1], e3)), a3 = [h3[0], h3[1]];
      break;
    case "C": {
      let [t5, s4, o4, r4, i3, c3] = h3;
      n3.push(...Z(t5, s4, o4, r4, i3, c3, a3, e3)), a3 = [i3, c3];
      break;
    }
    case "Z":
      n3.push(...$(a3[0], a3[1], o3[0], o3[1], e3)), a3 = [o3[0], o3[1]];
  }
  return { type: "path", ops: n3 };
}
function I2(t3, e3) {
  let s3 = [];
  for (let n3 of t3) if (n3.length) {
    let t4 = e3.maxRandomnessOffset || 0, o3 = n3.length;
    if (o3 > 2) {
      s3.push({ op: "move", data: [n3[0][0] + G(t4, e3), n3[0][1] + G(t4, e3)] });
      for (let a3 = 1; a3 < o3; a3++) s3.push({ op: "lineTo", data: [n3[a3][0] + G(t4, e3), n3[a3][1] + G(t4, e3)] });
    }
  }
  return { type: "fillPath", ops: s3 };
}
function C2(t3, e3) {
  return function(t4, e4) {
    let s3 = t4.fillStyle || "hachure";
    if (!u2[s3]) switch (s3) {
      case "zigzag":
        u2[s3] || (u2[s3] = new h2(e4));
        break;
      case "cross-hatch":
        u2[s3] || (u2[s3] = new r2(e4));
        break;
      case "dots":
        u2[s3] || (u2[s3] = new i2(e4));
        break;
      case "dashed":
        u2[s3] || (u2[s3] = new c2(e4));
        break;
      case "zigzag-line":
        u2[s3] || (u2[s3] = new l2(e4));
        break;
      default:
        s3 = "hachure", u2[s3] || (u2[s3] = new o2(e4));
    }
    return u2[s3];
  }(e3, P2).fillPolygons(t3, e3);
}
function z(t3) {
  let e3 = Object.assign({}, t3);
  return e3.randomizer = void 0, t3.seed && (e3.seed = t3.seed + 1), e3;
}
function W(t3) {
  return t3.randomizer || (t3.randomizer = new p2(t3.seed || 0)), t3.randomizer.next();
}
function E2(t3, e3, s3, n3 = 1) {
  return s3.roughness * n3 * (W(s3) * (e3 - t3) + t3);
}
function G(t3, e3, s3 = 1) {
  return E2(-t3, t3, e3, s3);
}
function $(t3, e3, s3, n3, o3, a3 = !1) {
  let h3 = a3 ? o3.disableMultiStrokeFill : o3.disableMultiStroke, r4 = R2(t3, e3, s3, n3, o3, !0, !1);
  if (h3) return r4;
  let i3 = R2(t3, e3, s3, n3, o3, !0, !0);
  return r4.concat(i3);
}
function R2(t3, e3, s3, n3, o3, a3, h3) {
  let r4 = Math.pow(t3 - s3, 2) + Math.pow(e3 - n3, 2), i3 = Math.sqrt(r4), c3 = 1;
  c3 = i3 < 200 ? 1 : i3 > 500 ? 0.4 : -16668e-7 * i3 + 1.233334;
  let l3 = o3.maxRandomnessOffset || 0;
  l3 * l3 * 100 > r4 && (l3 = i3 / 10);
  let u3 = l3 / 2, p3 = 0.2 + 0.2 * W(o3), f3 = o3.bowing * o3.maxRandomnessOffset * (n3 - e3) / 200, d3 = o3.bowing * o3.maxRandomnessOffset * (t3 - s3) / 200;
  f3 = G(f3, o3, c3), d3 = G(d3, o3, c3);
  let g3 = [], M3 = () => G(u3, o3, c3), k3 = () => G(l3, o3, c3), b3 = o3.preserveVertices;
  return a3 && (h3 ? g3.push({ op: "move", data: [t3 + (b3 ? 0 : M3()), e3 + (b3 ? 0 : M3())] }) : g3.push({ op: "move", data: [t3 + (b3 ? 0 : G(l3, o3, c3)), e3 + (b3 ? 0 : G(l3, o3, c3))] })), h3 ? g3.push({ op: "bcurveTo", data: [f3 + t3 + (s3 - t3) * p3 + M3(), d3 + e3 + (n3 - e3) * p3 + M3(), f3 + t3 + 2 * (s3 - t3) * p3 + M3(), d3 + e3 + 2 * (n3 - e3) * p3 + M3(), s3 + (b3 ? 0 : M3()), n3 + (b3 ? 0 : M3())] }) : g3.push({ op: "bcurveTo", data: [f3 + t3 + (s3 - t3) * p3 + k3(), d3 + e3 + (n3 - e3) * p3 + k3(), f3 + t3 + 2 * (s3 - t3) * p3 + k3(), d3 + e3 + 2 * (n3 - e3) * p3 + k3(), s3 + (b3 ? 0 : k3()), n3 + (b3 ? 0 : k3())] }), g3;
}
function j2(t3, e3, s3) {
  if (!t3.length) return [];
  let n3 = [];
  n3.push([t3[0][0] + G(e3, s3), t3[0][1] + G(e3, s3)]), n3.push([t3[0][0] + G(e3, s3), t3[0][1] + G(e3, s3)]);
  for (let o3 = 1; o3 < t3.length; o3++) n3.push([t3[o3][0] + G(e3, s3), t3[o3][1] + G(e3, s3)]), o3 === t3.length - 1 && n3.push([t3[o3][0] + G(e3, s3), t3[o3][1] + G(e3, s3)]);
  return q(n3, null, s3);
}
function q(t3, e3, s3) {
  let n3 = t3.length, o3 = [];
  if (n3 > 3) {
    let a3 = [], h3 = 1 - s3.curveTightness;
    o3.push({ op: "move", data: [t3[1][0], t3[1][1]] });
    for (let e4 = 1; e4 + 2 < n3; e4++) {
      let s4 = t3[e4];
      a3[0] = [s4[0], s4[1]], a3[1] = [s4[0] + (h3 * t3[e4 + 1][0] - h3 * t3[e4 - 1][0]) / 6, s4[1] + (h3 * t3[e4 + 1][1] - h3 * t3[e4 - 1][1]) / 6], a3[2] = [t3[e4 + 1][0] + (h3 * t3[e4][0] - h3 * t3[e4 + 2][0]) / 6, t3[e4 + 1][1] + (h3 * t3[e4][1] - h3 * t3[e4 + 2][1]) / 6], a3[3] = [t3[e4 + 1][0], t3[e4 + 1][1]], o3.push({ op: "bcurveTo", data: [a3[1][0], a3[1][1], a3[2][0], a3[2][1], a3[3][0], a3[3][1]] });
    }
    if (e3 && e3.length === 2) {
      let t4 = s3.maxRandomnessOffset;
      o3.push({ op: "lineTo", data: [e3[0] + G(t4, s3), e3[1] + G(t4, s3)] });
    }
  } else n3 === 3 ? (o3.push({ op: "move", data: [t3[1][0], t3[1][1]] }), o3.push({ op: "bcurveTo", data: [t3[1][0], t3[1][1], t3[2][0], t3[2][1], t3[2][0], t3[2][1]] })) : n3 === 2 && o3.push(...R2(t3[0][0], t3[0][1], t3[1][0], t3[1][1], s3, !0, !0));
  return o3;
}
function F2(t3, e3, s3, n3, o3, a3, h3, r4) {
  let i3 = [], c3 = [];
  if (r4.roughness === 0) {
    t3 /= 4, c3.push([e3 + n3 * Math.cos(-t3), s3 + o3 * Math.sin(-t3)]);
    for (let a4 = 0; a4 <= 2 * Math.PI; a4 += t3) {
      let t4 = [e3 + n3 * Math.cos(a4), s3 + o3 * Math.sin(a4)];
      i3.push(t4), c3.push(t4);
    }
    c3.push([e3 + n3 * Math.cos(0), s3 + o3 * Math.sin(0)]), c3.push([e3 + n3 * Math.cos(t3), s3 + o3 * Math.sin(t3)]);
  } else {
    let l3 = G(0.5, r4) - Math.PI / 2;
    c3.push([G(a3, r4) + e3 + 0.9 * n3 * Math.cos(l3 - t3), G(a3, r4) + s3 + 0.9 * o3 * Math.sin(l3 - t3)]);
    let u3 = 2 * Math.PI + l3 - 0.01;
    for (let h4 = l3; h4 < u3; h4 += t3) {
      let t4 = [G(a3, r4) + e3 + n3 * Math.cos(h4), G(a3, r4) + s3 + o3 * Math.sin(h4)];
      i3.push(t4), c3.push(t4);
    }
    c3.push([G(a3, r4) + e3 + n3 * Math.cos(l3 + 2 * Math.PI + 0.5 * h3), G(a3, r4) + s3 + o3 * Math.sin(l3 + 2 * Math.PI + 0.5 * h3)]), c3.push([G(a3, r4) + e3 + 0.98 * n3 * Math.cos(l3 + h3), G(a3, r4) + s3 + 0.98 * o3 * Math.sin(l3 + h3)]), c3.push([G(a3, r4) + e3 + 0.9 * n3 * Math.cos(l3 + 0.5 * h3), G(a3, r4) + s3 + 0.9 * o3 * Math.sin(l3 + 0.5 * h3)]);
  }
  return [c3, i3];
}
function V(t3, e3, s3, n3, o3, a3, h3, r4, i3) {
  let c3 = a3 + G(0.1, i3), l3 = [];
  l3.push([G(r4, i3) + e3 + 0.9 * n3 * Math.cos(c3 - t3), G(r4, i3) + s3 + 0.9 * o3 * Math.sin(c3 - t3)]);
  for (let a4 = c3; a4 <= h3; a4 += t3) l3.push([G(r4, i3) + e3 + n3 * Math.cos(a4), G(r4, i3) + s3 + o3 * Math.sin(a4)]);
  return l3.push([e3 + n3 * Math.cos(h3), s3 + o3 * Math.sin(h3)]), l3.push([e3 + n3 * Math.cos(h3), s3 + o3 * Math.sin(h3)]), q(l3, null, i3);
}
function Z(t3, e3, s3, n3, o3, a3, h3, r4) {
  let i3 = [], c3 = [r4.maxRandomnessOffset || 1, (r4.maxRandomnessOffset || 1) + 0.3], l3 = [0, 0], u3 = r4.disableMultiStroke ? 1 : 2, p3 = r4.preserveVertices;
  for (let f3 = 0; f3 < u3; f3++) f3 === 0 ? i3.push({ op: "move", data: [h3[0], h3[1]] }) : i3.push({ op: "move", data: [h3[0] + (p3 ? 0 : G(c3[0], r4)), h3[1] + (p3 ? 0 : G(c3[0], r4))] }), l3 = p3 ? [o3, a3] : [o3 + G(c3[f3], r4), a3 + G(c3[f3], r4)], i3.push({ op: "bcurveTo", data: [t3 + G(c3[f3], r4), e3 + G(c3[f3], r4), s3 + G(c3[f3], r4), n3 + G(c3[f3], r4), l3[0], l3[1]] });
  return i3;
}
function Q(t3) {
  return [...t3];
}
function H(t3, e3 = 0) {
  let s3 = t3.length;
  if (s3 < 3) throw new Error("A curve must have at least three points.");
  let n3 = [];
  if (s3 === 3) n3.push(Q(t3[0]), Q(t3[1]), Q(t3[2]), Q(t3[2]));
  else {
    let s4 = [];
    s4.push(t3[0], t3[0]);
    for (let e4 = 1; e4 < t3.length; e4++) s4.push(t3[e4]), e4 === t3.length - 1 && s4.push(t3[e4]);
    let o3 = [], a3 = 1 - e3;
    n3.push(Q(s4[0]));
    for (let t4 = 1; t4 + 2 < s4.length; t4++) {
      let e4 = s4[t4];
      o3[0] = [e4[0], e4[1]], o3[1] = [e4[0] + (a3 * s4[t4 + 1][0] - a3 * s4[t4 - 1][0]) / 6, e4[1] + (a3 * s4[t4 + 1][1] - a3 * s4[t4 - 1][1]) / 6], o3[2] = [s4[t4 + 1][0] + (a3 * s4[t4][0] - a3 * s4[t4 + 2][0]) / 6, s4[t4 + 1][1] + (a3 * s4[t4][1] - a3 * s4[t4 + 2][1]) / 6], o3[3] = [s4[t4 + 1][0], s4[t4 + 1][1]], n3.push(o3[1], o3[2], o3[3]);
    }
  }
  return n3;
}
function N2(t3, e3) {
  return Math.pow(t3[0] - e3[0], 2) + Math.pow(t3[1] - e3[1], 2);
}
function B(t3, e3, s3) {
  let n3 = N2(e3, s3);
  if (n3 === 0) return N2(t3, e3);
  let o3 = ((t3[0] - e3[0]) * (s3[0] - e3[0]) + (t3[1] - e3[1]) * (s3[1] - e3[1])) / n3;
  return o3 = Math.max(0, Math.min(1, o3)), N2(t3, J(e3, s3, o3));
}
function J(t3, e3, s3) {
  return [t3[0] + (e3[0] - t3[0]) * s3, t3[1] + (e3[1] - t3[1]) * s3];
}
function K(t3, e3, s3, n3) {
  let o3 = n3 || [];
  if (function(t4, e4) {
    let s4 = t4[e4 + 0], n4 = t4[e4 + 1], o4 = t4[e4 + 2], a4 = t4[e4 + 3], h4 = 3 * n4[0] - 2 * s4[0] - a4[0];
    h4 *= h4;
    let r4 = 3 * n4[1] - 2 * s4[1] - a4[1];
    r4 *= r4;
    let i3 = 3 * o4[0] - 2 * a4[0] - s4[0];
    i3 *= i3;
    let c3 = 3 * o4[1] - 2 * a4[1] - s4[1];
    return c3 *= c3, h4 < i3 && (h4 = i3), r4 < c3 && (r4 = c3), h4 + r4;
  }(t3, e3) < s3) {
    let s4 = t3[e3 + 0];
    o3.length ? (a3 = o3[o3.length - 1], h3 = s4, Math.sqrt(N2(a3, h3)) > 1 && o3.push(s4)) : o3.push(s4), o3.push(t3[e3 + 3]);
  } else {
    let a4 = t3[e3 + 0], h4 = t3[e3 + 1], r4 = t3[e3 + 2], i3 = t3[e3 + 3], c3 = J(a4, h4, 0.5), l3 = J(h4, r4, 0.5), u3 = J(r4, i3, 0.5), p3 = J(c3, l3, 0.5), f3 = J(l3, u3, 0.5), d3 = J(p3, f3, 0.5);
    K([a4, c3, p3, d3], 0, s3, o3), K([d3, f3, u3, i3], 0, s3, o3);
  }
  var a3, h3;
  return o3;
}
function U(t3, e3) {
  return X(t3, 0, t3.length, e3);
}
function X(t3, e3, s3, n3, o3) {
  let a3 = o3 || [], h3 = t3[e3], r4 = t3[s3 - 1], i3 = 0, c3 = 1;
  for (let n4 = e3 + 1; n4 < s3 - 1; ++n4) {
    let e4 = B(t3[n4], h3, r4);
    e4 > i3 && (i3 = e4, c3 = n4);
  }
  return Math.sqrt(i3) > n3 ? (X(t3, e3, c3 + 1, n3, a3), X(t3, c3, s3, n3, a3)) : (a3.length || a3.push(h3), a3.push(r4)), a3;
}
function Y(t3, e3 = 0.15, s3) {
  let n3 = [], o3 = (t3.length - 1) / 3;
  for (let s4 = 0; s4 < o3; s4++)
    K(t3, 3 * s4, e3, n3);
  return s3 && s3 > 0 ? X(n3, 0, n3.length, s3) : n3;
}
var tt = "none", et = class {
  constructor(t3) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t3 || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t3) {
    return t3 ? Object.assign({}, this.defaultOptions, t3) : this.defaultOptions;
  }
  _d(t3, e3, s3) {
    return { shape: t3, sets: e3 || [], options: s3 || this.defaultOptions };
  }
  line(t3, e3, s3, n3, o3) {
    let a3 = this._o(o3);
    return this._d("line", [v2(t3, e3, s3, n3, a3)], a3);
  }
  rectangle(t3, e3, s3, n3, o3) {
    let a3 = this._o(o3), h3 = [], r4 = O2(t3, e3, s3, n3, a3);
    if (a3.fill) {
      let o4 = [[t3, e3], [t3 + s3, e3], [t3 + s3, e3 + n3], [t3, e3 + n3]];
      a3.fillStyle === "solid" ? h3.push(I2([o4], a3)) : h3.push(C2([o4], a3));
    }
    return a3.stroke !== tt && h3.push(r4), this._d("rectangle", h3, a3);
  }
  ellipse(t3, e3, s3, n3, o3) {
    let a3 = this._o(o3), h3 = [], r4 = T2(s3, n3, a3), i3 = D2(t3, e3, a3, r4);
    if (a3.fill) if (a3.fillStyle === "solid") {
      let s4 = D2(t3, e3, a3, r4).opset;
      s4.type = "fillPath", h3.push(s4);
    } else h3.push(C2([i3.estimatedPoints], a3));
    return a3.stroke !== tt && h3.push(i3.opset), this._d("ellipse", h3, a3);
  }
  circle(t3, e3, s3, n3) {
    let o3 = this.ellipse(t3, e3, s3, s3, n3);
    return o3.shape = "circle", o3;
  }
  linearPath(t3, e3) {
    let s3 = this._o(e3);
    return this._d("linearPath", [S2(t3, !1, s3)], s3);
  }
  arc(t3, e3, s3, n3, o3, a3, h3 = !1, r4) {
    let i3 = this._o(r4), c3 = [], l3 = A2(t3, e3, s3, n3, o3, a3, h3, !0, i3);
    if (h3 && i3.fill) if (i3.fillStyle === "solid") {
      let h4 = Object.assign({}, i3);
      h4.disableMultiStroke = !0;
      let r5 = A2(t3, e3, s3, n3, o3, a3, !0, !1, h4);
      r5.type = "fillPath", c3.push(r5);
    } else c3.push(function(t4, e4, s4, n4, o4, a4, h4) {
      let r5 = t4, i4 = e4, c4 = Math.abs(s4 / 2), l4 = Math.abs(n4 / 2);
      c4 += G(0.01 * c4, h4), l4 += G(0.01 * l4, h4);
      let u3 = o4, p3 = a4;
      for (; u3 < 0; ) u3 += 2 * Math.PI, p3 += 2 * Math.PI;
      p3 - u3 > 2 * Math.PI && (u3 = 0, p3 = 2 * Math.PI);
      let f3 = (p3 - u3) / h4.curveStepCount, d3 = [];
      for (let t5 = u3; t5 <= p3; t5 += f3) d3.push([r5 + c4 * Math.cos(t5), i4 + l4 * Math.sin(t5)]);
      return d3.push([r5 + c4 * Math.cos(p3), i4 + l4 * Math.sin(p3)]), d3.push([r5, i4]), C2([d3], h4);
    }(t3, e3, s3, n3, o3, a3, i3));
    return i3.stroke !== tt && c3.push(l3), this._d("arc", c3, i3);
  }
  curve(t3, e3) {
    let s3 = this._o(e3), n3 = [], o3 = L2(t3, s3);
    if (s3.fill && s3.fill !== tt) if (s3.fillStyle === "solid") {
      let e4 = L2(t3, Object.assign(Object.assign({}, s3), { disableMultiStroke: !0, roughness: s3.roughness ? s3.roughness + s3.fillShapeRoughnessGain : 0 }));
      n3.push({ type: "fillPath", ops: this._mergedShape(e4.ops) });
    } else {
      let e4 = [], o4 = t3;
      if (o4.length) {
        let t4 = typeof o4[0][0] == "number" ? [o4] : o4;
        for (let n4 of t4) n4.length < 3 ? e4.push(...n4) : n4.length === 3 ? e4.push(...Y(H([n4[0], n4[0], n4[1], n4[2]]), 10, (1 + s3.roughness) / 2)) : e4.push(...Y(H(n4), 10, (1 + s3.roughness) / 2));
      }
      e4.length && n3.push(C2([e4], s3));
    }
    return s3.stroke !== tt && n3.push(o3), this._d("curve", n3, s3);
  }
  polygon(t3, e3) {
    let s3 = this._o(e3), n3 = [], o3 = S2(t3, !0, s3);
    return s3.fill && (s3.fillStyle === "solid" ? n3.push(I2([t3], s3)) : n3.push(C2([t3], s3))), s3.stroke !== tt && n3.push(o3), this._d("polygon", n3, s3);
  }
  path(t3, e3) {
    let s3 = this._o(e3), n3 = [];
    if (!t3) return this._d("path", n3, s3);
    t3 = (t3 || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    let o3 = s3.fill && s3.fill !== "transparent" && s3.fill !== tt, a3 = s3.stroke !== tt, h3 = !!(s3.simplification && s3.simplification < 1), r4 = function(t4, e4, s4) {
      let n4 = m2(y2(b2(t4))), o4 = [], a4 = [], h4 = [0, 0], r5 = [], i4 = () => {
        r5.length >= 4 && a4.push(...Y(r5, e4)), r5 = [];
      }, c3 = () => {
        i4(), a4.length && (o4.push(a4), a4 = []);
      };
      for (let { key: t5, data: e5 } of n4) switch (t5) {
        case "M":
          c3(), h4 = [e5[0], e5[1]], a4.push(h4);
          break;
        case "L":
          i4(), a4.push([e5[0], e5[1]]);
          break;
        case "C":
          if (!r5.length) {
            let t6 = a4.length ? a4[a4.length - 1] : h4;
            r5.push([t6[0], t6[1]]);
          }
          r5.push([e5[0], e5[1]]), r5.push([e5[2], e5[3]]), r5.push([e5[4], e5[5]]);
          break;
        case "Z":
          i4(), a4.push([h4[0], h4[1]]);
      }
      if (c3(), !s4) return o4;
      let l3 = [];
      for (let t5 of o4) {
        let e5 = U(t5, s4);
        e5.length && l3.push(e5);
      }
      return l3;
    }(t3, 1, h3 ? 4 - 4 * (s3.simplification || 1) : (1 + s3.roughness) / 2), i3 = _2(t3, s3);
    if (o3) if (s3.fillStyle === "solid") if (r4.length === 1) {
      let e4 = _2(t3, Object.assign(Object.assign({}, s3), { disableMultiStroke: !0, roughness: s3.roughness ? s3.roughness + s3.fillShapeRoughnessGain : 0 }));
      n3.push({ type: "fillPath", ops: this._mergedShape(e4.ops) });
    } else n3.push(I2(r4, s3));
    else n3.push(C2(r4, s3));
    return a3 && (h3 ? r4.forEach((t4) => {
      n3.push(S2(t4, !1, s3));
    }) : n3.push(i3)), this._d("path", n3, s3);
  }
  opsToPath(t3, e3) {
    let s3 = "";
    for (let n3 of t3.ops) {
      let t4 = typeof e3 == "number" && e3 >= 0 ? n3.data.map((t5) => +t5.toFixed(e3)) : n3.data;
      switch (n3.op) {
        case "move":
          s3 += `M${t4[0]} ${t4[1]} `;
          break;
        case "bcurveTo":
          s3 += `C${t4[0]} ${t4[1]}, ${t4[2]} ${t4[3]}, ${t4[4]} ${t4[5]} `;
          break;
        case "lineTo":
          s3 += `L${t4[0]} ${t4[1]} `;
      }
    }
    return s3.trim();
  }
  toPaths(t3) {
    let e3 = t3.sets || [], s3 = t3.options || this.defaultOptions, n3 = [];
    for (let t4 of e3) {
      let e4 = null;
      switch (t4.type) {
        case "path":
          e4 = { d: this.opsToPath(t4), stroke: s3.stroke, strokeWidth: s3.strokeWidth, fill: tt };
          break;
        case "fillPath":
          e4 = { d: this.opsToPath(t4), stroke: tt, strokeWidth: 0, fill: s3.fill || tt };
          break;
        case "fillSketch":
          e4 = this.fillSketch(t4, s3);
      }
      e4 && n3.push(e4);
    }
    return n3;
  }
  fillSketch(t3, e3) {
    let s3 = e3.fillWeight;
    return s3 < 0 && (s3 = e3.strokeWidth / 2), { d: this.opsToPath(t3), stroke: e3.fill || tt, strokeWidth: s3, fill: tt };
  }
  _mergedShape(t3) {
    return t3.filter((t4, e3) => e3 === 0 || t4.op !== "move");
  }
}, st = class {
  constructor(t3, e3) {
    this.canvas = t3, this.ctx = this.canvas.getContext("2d"), this.gen = new et(e3);
  }
  draw(t3) {
    let e3 = t3.sets || [], s3 = t3.options || this.getDefaultOptions(), n3 = this.ctx, o3 = t3.options.fixedDecimalPlaceDigits;
    for (let a3 of e3) switch (a3.type) {
      case "path":
        n3.save(), n3.strokeStyle = s3.stroke === "none" ? "transparent" : s3.stroke, n3.lineWidth = s3.strokeWidth, s3.strokeLineDash && n3.setLineDash(s3.strokeLineDash), s3.strokeLineDashOffset && (n3.lineDashOffset = s3.strokeLineDashOffset), this._drawToContext(n3, a3, o3), n3.restore();
        break;
      case "fillPath": {
        n3.save(), n3.fillStyle = s3.fill || "";
        let e4 = t3.shape === "curve" || t3.shape === "polygon" || t3.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(n3, a3, o3, e4), n3.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(n3, a3, s3);
    }
  }
  fillSketch(t3, e3, s3) {
    let n3 = s3.fillWeight;
    n3 < 0 && (n3 = s3.strokeWidth / 2), t3.save(), s3.fillLineDash && t3.setLineDash(s3.fillLineDash), s3.fillLineDashOffset && (t3.lineDashOffset = s3.fillLineDashOffset), t3.strokeStyle = s3.fill || "", t3.lineWidth = n3, this._drawToContext(t3, e3, s3.fixedDecimalPlaceDigits), t3.restore();
  }
  _drawToContext(t3, e3, s3, n3 = "nonzero") {
    t3.beginPath();
    for (let n4 of e3.ops) {
      let e4 = typeof s3 == "number" && s3 >= 0 ? n4.data.map((t4) => +t4.toFixed(s3)) : n4.data;
      switch (n4.op) {
        case "move":
          t3.moveTo(e4[0], e4[1]);
          break;
        case "bcurveTo":
          t3.bezierCurveTo(e4[0], e4[1], e4[2], e4[3], e4[4], e4[5]);
          break;
        case "lineTo":
          t3.lineTo(e4[0], e4[1]);
      }
    }
    e3.type === "fillPath" ? t3.fill(n3) : t3.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t3, e3, s3, n3, o3) {
    let a3 = this.gen.line(t3, e3, s3, n3, o3);
    return this.draw(a3), a3;
  }
  rectangle(t3, e3, s3, n3, o3) {
    let a3 = this.gen.rectangle(t3, e3, s3, n3, o3);
    return this.draw(a3), a3;
  }
  ellipse(t3, e3, s3, n3, o3) {
    let a3 = this.gen.ellipse(t3, e3, s3, n3, o3);
    return this.draw(a3), a3;
  }
  circle(t3, e3, s3, n3) {
    let o3 = this.gen.circle(t3, e3, s3, n3);
    return this.draw(o3), o3;
  }
  linearPath(t3, e3) {
    let s3 = this.gen.linearPath(t3, e3);
    return this.draw(s3), s3;
  }
  polygon(t3, e3) {
    let s3 = this.gen.polygon(t3, e3);
    return this.draw(s3), s3;
  }
  arc(t3, e3, s3, n3, o3, a3, h3 = !1, r4) {
    let i3 = this.gen.arc(t3, e3, s3, n3, o3, a3, h3, r4);
    return this.draw(i3), i3;
  }
  curve(t3, e3) {
    let s3 = this.gen.curve(t3, e3);
    return this.draw(s3), s3;
  }
  path(t3, e3) {
    let s3 = this.gen.path(t3, e3);
    return this.draw(s3), s3;
  }
}, nt = "http://www.w3.org/2000/svg", ot = class {
  constructor(t3, e3) {
    this.svg = t3, this.gen = new et(e3);
  }
  draw(t3) {
    let e3 = t3.sets || [], s3 = t3.options || this.getDefaultOptions(), n3 = this.svg.ownerDocument || window.document, o3 = n3.createElementNS(nt, "g"), a3 = t3.options.fixedDecimalPlaceDigits;
    for (let h3 of e3) {
      let e4 = null;
      switch (h3.type) {
        case "path":
          e4 = n3.createElementNS(nt, "path"), e4.setAttribute("d", this.opsToPath(h3, a3)), e4.setAttribute("stroke", s3.stroke), e4.setAttribute("stroke-width", s3.strokeWidth + ""), e4.setAttribute("fill", "none"), s3.strokeLineDash && e4.setAttribute("stroke-dasharray", s3.strokeLineDash.join(" ").trim()), s3.strokeLineDashOffset && e4.setAttribute("stroke-dashoffset", `${s3.strokeLineDashOffset}`);
          break;
        case "fillPath":
          e4 = n3.createElementNS(nt, "path"), e4.setAttribute("d", this.opsToPath(h3, a3)), e4.setAttribute("stroke", "none"), e4.setAttribute("stroke-width", "0"), e4.setAttribute("fill", s3.fill || ""), t3.shape !== "curve" && t3.shape !== "polygon" || e4.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          e4 = this.fillSketch(n3, h3, s3);
      }
      e4 && o3.appendChild(e4);
    }
    return o3;
  }
  fillSketch(t3, e3, s3) {
    let n3 = s3.fillWeight;
    n3 < 0 && (n3 = s3.strokeWidth / 2);
    let o3 = t3.createElementNS(nt, "path");
    return o3.setAttribute("d", this.opsToPath(e3, s3.fixedDecimalPlaceDigits)), o3.setAttribute("stroke", s3.fill || ""), o3.setAttribute("stroke-width", n3 + ""), o3.setAttribute("fill", "none"), s3.fillLineDash && o3.setAttribute("stroke-dasharray", s3.fillLineDash.join(" ").trim()), s3.fillLineDashOffset && o3.setAttribute("stroke-dashoffset", `${s3.fillLineDashOffset}`), o3;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t3, e3) {
    return this.gen.opsToPath(t3, e3);
  }
  line(t3, e3, s3, n3, o3) {
    let a3 = this.gen.line(t3, e3, s3, n3, o3);
    return this.draw(a3);
  }
  rectangle(t3, e3, s3, n3, o3) {
    let a3 = this.gen.rectangle(t3, e3, s3, n3, o3);
    return this.draw(a3);
  }
  ellipse(t3, e3, s3, n3, o3) {
    let a3 = this.gen.ellipse(t3, e3, s3, n3, o3);
    return this.draw(a3);
  }
  circle(t3, e3, s3, n3) {
    let o3 = this.gen.circle(t3, e3, s3, n3);
    return this.draw(o3);
  }
  linearPath(t3, e3) {
    let s3 = this.gen.linearPath(t3, e3);
    return this.draw(s3);
  }
  polygon(t3, e3) {
    let s3 = this.gen.polygon(t3, e3);
    return this.draw(s3);
  }
  arc(t3, e3, s3, n3, o3, a3, h3 = !1, r4) {
    let i3 = this.gen.arc(t3, e3, s3, n3, o3, a3, h3, r4);
    return this.draw(i3);
  }
  curve(t3, e3) {
    let s3 = this.gen.curve(t3, e3);
    return this.draw(s3);
  }
  path(t3, e3) {
    let s3 = this.gen.path(t3, e3);
    return this.draw(s3);
  }
}, at = { canvas: (t3, e3) => new st(t3, e3), svg: (t3, e3) => new ot(t3, e3), generator: (t3) => new et(t3), newSeed: () => et.newSeed() };

// src/geometry.js
var r22 = (v3) => Math.round(v3 * 100) / 100;
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function distToSeg(px, py, ax, ay, bx, by) {
  let dx = bx - ax, dy = by - ay, l22 = dx * dx + dy * dy, t3 = l22 ? ((px - ax) * dx + (py - ay) * dy) / l22 : 0;
  return t3 = Math.max(0, Math.min(1, t3)), Math.hypot(ax + t3 * dx - px, ay + t3 * dy - py);
}
function arrowHead(item) {
  let { x1, y1, x2: x22, y2: y22, size } = item, len = Math.hypot(x22 - x1, y22 - y1) || 1, h3 = Math.min(Math.max(10, size * 4), len * 0.45), ang = Math.atan2(y22 - y1, x22 - x1), s3 = Math.PI / 7;
  return [
    [x22 - h3 * Math.cos(ang - s3), y22 - h3 * Math.sin(ang - s3)],
    [x22, y22],
    [x22 - h3 * Math.cos(ang + s3), y22 - h3 * Math.sin(ang + s3)]
  ];
}
function densify(poly, perSeg) {
  let out = [];
  for (let i3 = 1; i3 < poly.length; i3++) {
    let [ax, ay] = poly[i3 - 1], [bx, by] = poly[i3];
    for (let k3 = 0; k3 < perSeg; k3++) {
      let t3 = k3 / perSeg;
      out.push([ax + (bx - ax) * t3, ay + (by - ay) * t3]);
    }
  }
  return out.push(poly[poly.length - 1]), out;
}
function outlines(item) {
  if (item.type === "stroke") return [item.points];
  if (item.type !== "shape") return [];
  let { x1, y1, x2: x22, y2: y22 } = item;
  switch (item.shape) {
    case "line":
      return [[[x1, y1], [x22, y22]]];
    case "arrow":
      return [[[x1, y1], [x22, y22]], arrowHead(item)];
    case "rect":
      return [[[x1, y1], [x22, y1], [x22, y22], [x1, y22], [x1, y1]]];
    case "ellipse": {
      let cx = (x1 + x22) / 2, cy = (y1 + y22) / 2, rx = Math.abs(x22 - x1) / 2, ry = Math.abs(y22 - y1) / 2, pts = [];
      for (let i3 = 0; i3 <= 48; i3++) {
        let a3 = i3 / 48 * Math.PI * 2;
        pts.push([cx + rx * Math.cos(a3), cy + ry * Math.sin(a3)]);
      }
      return [pts];
    }
  }
  return [];
}
function insideFill(item, x3, y3) {
  let { x1, y1, x2: x22, y2: y22 } = item;
  if (item.shape === "rect")
    return x3 >= Math.min(x1, x22) && x3 <= Math.max(x1, x22) && y3 >= Math.min(y1, y22) && y3 <= Math.max(y1, y22);
  if (item.shape === "ellipse") {
    let rx = Math.abs(x22 - x1) / 2 || 1e-6, ry = Math.abs(y22 - y1) / 2 || 1e-6, nx = (x3 - (x1 + x22) / 2) / rx, ny = (y3 - (y1 + y22) / 2) / ry;
    return nx * nx + ny * ny <= 1;
  }
  return !1;
}
function inBox(b3, x3, y3, pad = 0) {
  return b3 && x3 >= b3.x - pad && x3 <= b3.x + b3.width + pad && y3 >= b3.y - pad && y3 <= b3.y + b3.height + pad;
}
function hitItem(item, x3, y3, r4, bbox) {
  if (item.rot && TURNS_BY_ANGLE(item)) {
    let [px, py] = rotPivot(item), a3 = -item.rot * Math.PI / 180, c3 = Math.cos(a3), s3 = Math.sin(a3), lx = px + (x3 - px) * c3 - (y3 - py) * s3, ly = py + (x3 - px) * s3 + (y3 - py) * c3;
    return hitItem({ ...item, rot: 0 }, lx, ly, r4);
  }
  if (item.type === "connector") return inBox(bbox || itemBox(item), x3, y3, r4);
  if (item.type === "pixels" || item.type === "image" || item.type === "board" || item.type === "painting") return inBox(itemBox(item), x3, y3, r4);
  if (item.type === "fill") {
    let b3 = bbox || itemBox(item);
    if (!inBox(b3, x3, y3, r4)) return !1;
    if (!item.loops) return !0;
    let inside = !1;
    for (let l3 of item.loops) pointInPolygon(x3, y3, l3) && (inside = !inside);
    return inside;
  }
  if (item.type === "group")
    return bbox && !inBox(bbox, x3, y3, r4) ? !1 : item.items.some((c3) => hitItem(c3, x3, y3, r4, itemBox(c3)));
  if (item.type === "text") return inBox(bbox || itemBox(item), x3, y3, r4);
  if (bbox && !inBox(bbox, x3, y3, r4 + item.size)) return !1;
  let tol = r4 + item.size / 2;
  for (let line of outlines(item)) {
    if (line.length === 1 && Math.hypot(line[0][0] - x3, line[0][1] - y3) <= tol) return !0;
    for (let i3 = 1; i3 < line.length; i3++)
      if (distToSeg(x3, y3, line[i3 - 1][0], line[i3 - 1][1], line[i3][0], line[i3][1]) <= tol) return !0;
  }
  return !!(item.type === "shape" && item.fill && item.fill !== "none" && insideFill(item, x3, y3));
}
function pointInPolygon(x3, y3, poly) {
  let inside = !1;
  for (let i3 = 0, j3 = poly.length - 1; i3 < poly.length; j3 = i3++) {
    let [xi, yi] = poly[i3], [xj, yj] = poly[j3];
    yi > y3 != yj > y3 && x3 < (xj - xi) * (y3 - yi) / (yj - yi) + xi && (inside = !inside);
  }
  return inside;
}
function samplePoints(item, bbox) {
  if (item.type === "connector") {
    let b3 = bbox || itemBox(item);
    return b3 ? [[b3.x, b3.y], [b3.x + b3.width, b3.y + b3.height], [b3.x + b3.width / 2, b3.y + b3.height / 2]] : [];
  }
  if (item.type === "pixels" || item.type === "image" || item.type === "board" || item.type === "painting") {
    let b3 = itemBox(item);
    return [[b3.x, b3.y], [b3.x + b3.width, b3.y], [b3.x, b3.y + b3.height], [b3.x + b3.width, b3.y + b3.height], [b3.x + b3.width / 2, b3.y + b3.height / 2]];
  }
  if (item.type === "fill") {
    if (!item.loops) {
      let b3 = bbox || item.box;
      return b3 ? [[b3.x, b3.y], [b3.x + b3.width, b3.y], [b3.x, b3.y + b3.height], [b3.x + b3.width, b3.y + b3.height], [b3.x + b3.width / 2, b3.y + b3.height / 2]] : [];
    }
    let pts2 = [].concat(...item.loops);
    return pts2.length > 80 ? pts2.filter((_3, i3) => i3 % Math.ceil(pts2.length / 80) === 0) : pts2;
  }
  if (item.type === "group") {
    let pts2 = [];
    for (let c3 of item.items) pts2 = pts2.concat(samplePoints(c3, itemBox(c3)));
    return pts2.length > 160 && (pts2 = pts2.filter((_3, i3) => i3 % Math.ceil(pts2.length / 160) === 0)), pts2;
  }
  if (item.type === "text") {
    if (!bbox) return [[item.x, item.y]];
    let { x: x3, y: y3, width: w3, height: h3 } = bbox;
    return [[x3, y3], [x3 + w3, y3], [x3, y3 + h3], [x3 + w3, y3 + h3], [x3 + w3 / 2, y3 + h3 / 2]];
  }
  let pts = [];
  for (let line of outlines(item)) pts = pts.concat(item.type === "shape" ? densify(line, 8) : line);
  if (pts.length > 80) {
    let step = pts.length / 80, out = [];
    for (let i3 = 0; i3 < pts.length; i3 += step) out.push(pts[Math.floor(i3)]);
    pts = out;
  }
  return pts;
}
function translateItem(item, dx, dy) {
  switch (item.type) {
    case "stroke":
      return {
        ...item,
        points: item.points.map(
          (p3) => p3.length > 2 ? [r22(p3[0] + dx), r22(p3[1] + dy), p3[2]] : [r22(p3[0] + dx), r22(p3[1] + dy)]
        )
      };
    case "shape":
      return { ...item, x1: r22(item.x1 + dx), y1: r22(item.y1 + dy), x2: r22(item.x2 + dx), y2: r22(item.y2 + dy) };
    case "text":
      return { ...item, x: r22(item.x + dx), y: r22(item.y + dy) };
    case "pixels":
    case "image":
    case "board":
      return { ...item, x: r22(item.x + dx), y: r22(item.y + dy) };
    case "painting":
      return { ...item, x: r22(item.x + dx), y: r22(item.y + dy), items: item.items.map((c3) => translateItem(c3, dx, dy)) };
    case "connector": {
      let move = (e3) => e3 && e3.id ? e3 : e3 && { ...e3, x: r22(e3.x + dx), y: r22(e3.y + dy) };
      return { ...item, from: move(item.from), to: move(item.to), box: item.box && { ...item.box, x: r22(item.box.x + dx), y: r22(item.box.y + dy) } };
    }
    case "fill":
      return {
        ...item,
        box: item.box && { ...item.box, x: r22(item.box.x + dx), y: r22(item.box.y + dy) },
        ...item.loops ? { loops: item.loops.map((l3) => l3.map((p3) => [r22(p3[0] + dx), r22(p3[1] + dy)])) } : {}
      };
    case "group":
      return {
        ...item,
        items: item.items.map((c3) => translateItem(c3, dx, dy)),
        fx: item.fx.map((f3) => ({ ...f3, points: f3.points.map((p3) => [r22(p3[0] + dx), r22(p3[1] + dy), ...p3.slice(2)]) }))
      };
  }
  return item;
}
function pointsBox(points, pad) {
  let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
  for (let p3 of points)
    p3[0] < x0 && (x0 = p3[0]), p3[1] < y0 && (y0 = p3[1]), p3[0] > x1 && (x1 = p3[0]), p3[1] > y1 && (y1 = p3[1]);
  return isFinite(x0) ? { x: x0 - pad, y: y0 - pad, width: x1 - x0 + pad * 2, height: y1 - y0 + pad * 2 } : null;
}
var boxMemo = /* @__PURE__ */ new WeakMap();
function itemBox(item) {
  let b3 = boxMemo.get(item);
  if (b3 === void 0) {
    try {
      b3 = computeBox(item);
    } catch {
      b3 = null;
    }
    b3 && item.rot && (b3 = rotatedBox(b3, item.rot, ...rotPivot(item))), boxMemo.set(item, b3);
  }
  return b3;
}
function rotPivot(item) {
  var _a2, _b2;
  return item.type === "shape" ? [item.x1, item.y1] : [(_a2 = item.x) != null ? _a2 : 0, (_b2 = item.y) != null ? _b2 : 0];
}
function rotatedBox(b3, deg, px, py) {
  let a3 = deg * Math.PI / 180, c3 = Math.cos(a3), s3 = Math.sin(a3), pts = [[b3.x, b3.y], [b3.x + b3.width, b3.y], [b3.x, b3.y + b3.height], [b3.x + b3.width, b3.y + b3.height]].map(([x4, y4]) => [px + (x4 - px) * c3 - (y4 - py) * s3, py + (x4 - px) * s3 + (y4 - py) * c3]), xs = pts.map((q2) => q2[0]), ys = pts.map((q2) => q2[1]), x3 = Math.min(...xs), y3 = Math.min(...ys);
  return { x: x3, y: y3, width: Math.max(...xs) - x3, height: Math.max(...ys) - y3 };
}
var TURNS_BY_ANGLE = (it) => it.type === "shape" && it.shape !== "line" && it.shape !== "arrow" || it.type === "text" || it.type === "image" || it.type === "board";
function rotateItem(item, deg, cx, cy) {
  let a3 = deg * Math.PI / 180, c3 = Math.cos(a3), s3 = Math.sin(a3), R3 = (x3, y3) => [cx + (x3 - cx) * c3 - (y3 - cy) * s3, cy + (x3 - cx) * s3 + (y3 - cy) * c3], rp = (pt) => {
    let [x3, y3] = R3(pt[0], pt[1]);
    return pt.length > 2 ? [r22(x3), r22(y3), pt[2]] : [r22(x3), r22(y3)];
  };
  switch (item.type) {
    case "stroke":
      return { ...item, points: item.points.map(rp) };
    case "shape": {
      if (item.shape === "line" || item.shape === "arrow") {
        let [x1, y1] = R3(item.x1, item.y1), [x22, y22] = R3(item.x2, item.y2);
        return { ...item, x1: r22(x1), y1: r22(y1), x2: r22(x22), y2: r22(y22) };
      }
      let [nx, ny] = R3(item.x1, item.y1), dx = nx - item.x1, dy = ny - item.y1;
      return { ...item, x1: r22(nx), y1: r22(ny), x2: r22(item.x2 + dx), y2: r22(item.y2 + dy), rot: norm((item.rot || 0) + deg) };
    }
    case "text":
    case "image":
    case "board": {
      let [nx, ny] = R3(item.x, item.y);
      return { ...item, x: r22(nx), y: r22(ny), rot: norm((item.rot || 0) + deg) };
    }
    case "pixels":
    case "painting": {
      let b3 = computeBox(item), [mx, my] = R3(b3.x + b3.width / 2, b3.y + b3.height / 2), dx = mx - b3.width / 2 - item.x, dy = my - b3.height / 2 - item.y;
      return translateItem(item, dx, dy);
    }
    case "fill":
      return item.loops ? { ...item, loops: item.loops.map((l3) => l3.map(rp)), box: void 0 } : item;
    case "group":
      return {
        ...item,
        items: item.items.map((it) => rotateItem(it, deg, cx, cy)),
        fx: (item.fx || []).map((f3) => ({ ...f3, points: f3.points.map(rp) }))
      };
    case "connector": {
      let turn = (e3) => e3 && !e3.id && !e3.node && e3.x !== void 0 ? { ...e3, x: r22(R3(e3.x, e3.y)[0]), y: r22(R3(e3.x, e3.y)[1]) } : e3;
      return { ...item, from: turn(item.from), to: turn(item.to), waypoints: (item.waypoints || []).map(rp) };
    }
    default:
      return item;
  }
}
var norm = (d3) => {
  let v3 = d3 % 360;
  return v3 > 180 && (v3 -= 360), v3 <= -180 && (v3 += 360), Math.round(v3 * 100) / 100;
};
function computeBox(item) {
  switch (item.type) {
    case "stroke":
      return pointsBox(item.points, item.size * 0.75 + 1);
    case "shape": {
      let pad = item.size + 2, b3 = pointsBox([[item.x1, item.y1], [item.x2, item.y2]], pad);
      return item.shape === "arrow" ? unionBox([b3, pointsBox(arrowHead(item), pad)]) : b3;
    }
    case "text": {
      let lines = item.text.split(`
`), cw = item.fontSize * 0.62, w3 = Math.max(...lines.map((l3) => l3.length)) * cw, n3 = lines.length;
      return item.wrap && (n3 = lines.reduce((a3, l3) => a3 + Math.max(1, Math.ceil(l3.length * cw / item.wrap)), 0), w3 = item.wrap), { x: item.x - 2, y: item.y - 2, width: w3 + 4, height: n3 * item.fontSize * 1.25 + 4 };
    }
    case "group":
      return unionBox([...item.items.map(itemBox), ...item.fx.map(fxBox)]);
    case "fill":
    case "connector":
      return item.box || null;
    case "pixels":
      return { x: item.x, y: item.y, width: item.cols * item.cell, height: item.rows * item.cell };
    case "image":
    case "board":
    case "painting":
      return { x: item.x, y: item.y, width: item.w, height: item.h };
  }
  return null;
}
function fxBox(f3) {
  return pointsBox(f3.points, f3.size * 0.75 + 2);
}
function boxesTouch(a3, b3) {
  return a3 && b3 && a3.x <= b3.x + b3.width && b3.x <= a3.x + a3.width && a3.y <= b3.y + b3.height && b3.y <= a3.y + a3.height;
}
function unionBox(boxes) {
  let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
  for (let b3 of boxes)
    b3 && (x0 = Math.min(x0, b3.x), y0 = Math.min(y0, b3.y), x1 = Math.max(x1, b3.x + b3.width), y1 = Math.max(y1, b3.y + b3.height));
  return isFinite(x0) ? { x: x0, y: y0, width: x1 - x0, height: y1 - y0 } : null;
}
function scaleItem(item, ax, ay, sx, sy) {
  let X2 = (v3) => r22(ax + (v3 - ax) * sx), Y2 = (v3) => r22(ay + (v3 - ay) * sy), avg = Math.sqrt(Math.abs(sx * sy)) || 1;
  switch (item.type) {
    case "pixels": {
      let s3 = Math.sqrt(Math.abs(sx * sy)) || 1, nx = ax + (item.x - ax) * s3 * Math.sign(sx || 1), ny = ay + (item.y - ay) * s3 * Math.sign(sy || 1), w3 = item.cols * item.cell * s3, h3 = item.rows * item.cell * s3;
      return { ...item, x: r22(sx < 0 ? nx - w3 : nx), y: r22(sy < 0 ? ny - h3 : ny), cell: Math.max(0.05, item.cell * s3) };
    }
    case "painting": {
      let nx = ax + (item.x - ax) * sx, ny = ay + (item.y - ay) * sy, w3 = item.w * sx, h3 = item.h * sy;
      return {
        ...item,
        x: r22(sx < 0 ? nx + w3 : nx),
        y: r22(sy < 0 ? ny + h3 : ny),
        w: r22(Math.abs(w3)),
        h: r22(Math.abs(h3)),
        items: item.items.map((c3) => scaleItem(c3, ax, ay, sx, sy))
      };
    }
    case "image":
    case "board": {
      let nx = ax + (item.x - ax) * sx, ny = ay + (item.y - ay) * sy, w3 = item.w * sx, h3 = item.h * sy;
      return { ...item, x: r22(sx < 0 ? nx + w3 : nx), y: r22(sy < 0 ? ny + h3 : ny), w: r22(Math.abs(w3)), h: r22(Math.abs(h3)) };
    }
    case "fill": {
      let b3 = item.box, nb = b3 && { x: Math.min(X2(b3.x), X2(b3.x + b3.width)), y: Math.min(Y2(b3.y), Y2(b3.y + b3.height)), width: Math.abs(b3.width * sx), height: Math.abs(b3.height * sy) };
      return { ...item, box: nb, ...item.loops ? { loops: item.loops.map((l3) => l3.map((p3) => [X2(p3[0]), Y2(p3[1])])) } : {} };
    }
    case "stroke":
      return { ...item, size: r22(Math.max(0.2, item.size * avg)), points: item.points.map((p3) => [X2(p3[0]), Y2(p3[1]), ...p3.slice(2)]) };
    case "shape":
      return { ...item, x1: X2(item.x1), y1: Y2(item.y1), x2: X2(item.x2), y2: Y2(item.y2), size: r22(Math.max(0.2, item.size * avg)) };
    case "text":
      return {
        ...item,
        x: X2(item.x),
        y: Y2(item.y),
        fontSize: r22(Math.max(4, item.fontSize * Math.min(Math.abs(sx), Math.abs(sy)))),
        ...item.wrap ? { wrap: r22(item.wrap * Math.abs(sx)) } : {}
      };
    case "group":
      return {
        ...item,
        items: item.items.map((c3) => scaleItem(c3, ax, ay, sx, sy)),
        fx: item.fx.map((f3) => ({ ...f3, size: f3.size * avg, points: f3.points.map((p3) => [X2(p3[0]), Y2(p3[1]), ...p3.slice(2)]) }))
      };
  }
  return item;
}
function shapeTextBox(shape) {
  let x3 = Math.min(shape.x1, shape.x2), y3 = Math.min(shape.y1, shape.y2), w3 = Math.abs(shape.x2 - shape.x1), h3 = Math.abs(shape.y2 - shape.y1), f3 = shape.shape === "ellipse" ? 0.707 : 1, pad = shape.size + 8, iw = Math.max(10, w3 * f3 - pad * 2), ih = Math.max(10, h3 * f3 - pad * 2);
  return { x: x3 + (w3 - iw) / 2, y: y3 + (h3 - ih) / 2, width: iw, height: ih };
}
function isContainer(item) {
  return item && item.type === "shape" && (item.shape === "rect" || item.shape === "ellipse");
}
function pointInShape(item, x3, y3) {
  return insideFill(item, x3, y3);
}
var Smoother = class {
  constructor(strength, scale) {
    let s3 = Math.max(0, Math.min(1, strength / 100));
    this.s = s3, this.R = s3 * s3 * 20 / scale, this.a = 1 - 0.82 * s3, this.scale = scale, this.pos = null;
  }
  push(x3, y3, p3) {
    if (!this.pos)
      return this.pos = { x: x3, y: y3 }, this.sm = { x: x3, y: y3 }, this.p = p3, [x3, y3, p3];
    let dx = x3 - this.pos.x, dy = y3 - this.pos.y, d3 = Math.hypot(dx, dy);
    if (d3 > this.R) {
      let t3 = (d3 - this.R) / d3;
      this.pos.x += dx * t3, this.pos.y += dy * t3;
    }
    let speed = d3 * this.scale, a3 = this.a + (1 - this.a) * Math.min(1, Math.max(0, (speed - 2) / 14));
    return this.sm.x += (this.pos.x - this.sm.x) * a3, this.sm.y += (this.pos.y - this.sm.y) * a3, this.p += (p3 - this.p) * 0.5, [this.sm.x, this.sm.y, this.p];
  }
  /** Points that bring the line the rest of the way to where the pen lifted. */
  finish(x3, y3) {
    if (!this.sm || this.s < 0.05) return [];
    let out = [], dx = x3 - this.sm.x, dy = y3 - this.sm.y;
    if (Math.hypot(dx, dy) < 1e-3) return out;
    for (let i3 = 1; i3 <= 4; i3++) out.push([this.sm.x + dx * i3 / 4, this.sm.y + dy * i3 / 4, this.p]);
    return out;
  }
};
function rdp(pts, eps) {
  if (pts.length < 3) return pts.slice();
  let [ax, ay] = pts[0], [bx, by] = pts[pts.length - 1], idx = -1, dmax = 0;
  for (let i3 = 1; i3 < pts.length - 1; i3++) {
    let d3 = distToSeg(pts[i3][0], pts[i3][1], ax, ay, bx, by);
    d3 > dmax && (dmax = d3, idx = i3);
  }
  return dmax <= eps ? [pts[0], pts[pts.length - 1]] : rdp(pts.slice(0, idx + 1), eps).slice(0, -1).concat(rdp(pts.slice(idx), eps));
}
function segsCross(a3, b3, c3, d3) {
  let o3 = (p3, q2, r4) => (q2[0] - p3[0]) * (r4[1] - p3[1]) - (q2[1] - p3[1]) * (r4[0] - p3[0]);
  return o3(a3, b3, c3) * o3(a3, b3, d3) < 0 && o3(c3, d3, a3) * o3(c3, d3, b3) < 0;
}
function selfCrossings(V2) {
  let n3 = 0;
  for (let i3 = 0; i3 < V2.length; i3++)
    for (let j3 = i3 + 2; j3 < V2.length; j3++)
      i3 === 0 && j3 === V2.length - 1 || segsCross(V2[i3], V2[(i3 + 1) % V2.length], V2[j3], V2[(j3 + 1) % V2.length]) && n3++;
  return n3;
}
function starFrom(P3, D3) {
  for (let f3 of [0.08, 0.11, 0.14]) {
    let V2 = rdp(P3, f3 * D3);
    if (V2.length > 2 && Math.hypot(V2[0][0] - V2[V2.length - 1][0], V2[0][1] - V2[V2.length - 1][1]) < 0.3 * D3 && V2.pop(), V2.length !== 5 || selfCrossings(V2) < 3) continue;
    let cx = V2.reduce((a3, p3) => a3 + p3[0], 0) / 5, cy = V2.reduce((a3, p3) => a3 + p3[1], 0) / 5, R3 = V2.reduce((a3, p3) => a3 + Math.hypot(p3[0] - cx, p3[1] - cy), 0) / 5, angs = V2.map((p3) => Math.atan2(p3[1] - cy, p3[0] - cx)).sort((a3, b3) => a3 - b3), sx = 0, sy = 0;
    angs.forEach((a3, i3) => {
      let t3 = (a3 - i3 * 2 * Math.PI / 5) * 5;
      sx += Math.cos(t3), sy += Math.sin(t3);
    });
    let th = Math.atan2(sy, sx) / 5, up = -Math.PI / 2, k3 = Math.round((th - up) / (2 * Math.PI / 5)), snapped = up + k3 * 2 * Math.PI / 5;
    Math.abs(th - snapped) < 10 * Math.PI / 180 && (th = snapped);
    let r4 = R3 * 0.382, out = [];
    for (let i3 = 0; i3 < 10; i3++) {
      let a3 = th + i3 * Math.PI / 5, rad = i3 % 2 ? r4 : R3;
      out.push([cx + rad * Math.cos(a3), cy + rad * Math.sin(a3)]);
    }
    let si = 0, sd = 1 / 0;
    for (let i3 = 0; i3 < 10; i3 += 2) {
      let d3 = Math.hypot(out[i3][0] - P3[0][0], out[i3][1] - P3[0][1]);
      d3 < sd && (sd = d3, si = i3);
    }
    return [...out.slice(si), ...out.slice(0, si)];
  }
  return null;
}
function pathLen(pts) {
  let l3 = 0;
  for (let i3 = 1; i3 < pts.length; i3++) l3 += Math.hypot(pts[i3][0] - pts[i3 - 1][0], pts[i3][1] - pts[i3 - 1][1]);
  return l3;
}
function sampleSegments(verts, step, closed) {
  let out = [], list = closed ? [...verts, verts[0]] : verts;
  for (let i3 = 1; i3 < list.length; i3++) {
    let [ax, ay] = list[i3 - 1], [bx, by] = list[i3], n3 = Math.max(1, Math.ceil(Math.hypot(bx - ax, by - ay) / step));
    for (let k3 = 0; k3 < n3; k3++) out.push([ax + (bx - ax) * k3 / n3, ay + (by - ay) * k3 / n3]);
  }
  return out.push(list[list.length - 1]), closed && out.push(out[1]), out;
}
function makeArrow(a3, tip, barb, step) {
  let ang = Math.atan2(tip[1] - a3[1], tip[0] - a3[0]), wing = (d3) => [tip[0] - barb * Math.cos(ang + d3), tip[1] - barb * Math.sin(ang + d3)], b1 = wing(0.45), b23 = wing(-0.45);
  return sampleSegments([a3, tip, b1, tip, b23], step, !1);
}
function arrowFrom(P3, L3, scale) {
  let a3 = P3[0], t3 = 0, far = 0;
  P3.forEach((p3, i3) => {
    let d3 = Math.hypot(p3[0] - a3[0], p3[1] - a3[1]);
    d3 > far && (far = d3, t3 = i3);
  });
  let tip = P3[t3];
  if (t3 < 2 || t3 > P3.length - 2) return null;
  let shaft = pathLen(P3.slice(0, t3 + 1)), head = pathLen(P3.slice(t3));
  if (far * scale < 40 || shaft < 0.55 * L3 || head < Math.max(0.035 * shaft, 10 / scale) || head > 0.7 * shaft) return null;
  let dev = 0;
  for (let i3 = 0; i3 <= t3; i3++) dev = Math.max(dev, distToSeg(P3[i3][0], P3[i3][1], a3[0], a3[1], tip[0], tip[1]));
  if (dev > Math.max(0.12 * far, 5 / scale)) return null;
  let spread = 0;
  for (let i3 = t3; i3 < P3.length; i3++) spread = Math.max(spread, Math.hypot(P3[i3][0] - tip[0], P3[i3][1] - tip[1]));
  if (spread > 0.55 * far) return null;
  let ang = Math.atan2(tip[1] - a3[1], tip[0] - a3[0]), back = Math.atan2(P3[P3.length - 1][1] - tip[1], P3[P3.length - 1][0] - tip[0]);
  if (Math.abs((back - ang + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI) < 70) return null;
  let barb = Math.min(Math.max(spread, far * 0.1), far * 0.3);
  return { a: a3, tip, barb };
}
function cornerCount(P3, D3) {
  let R3 = resample([...P3, P3[0]], Math.max(D3 * 0.025, 1));
  for (let pass = 0; pass < 4; pass++)
    R3 = R3.map((pt, i3) => {
      let a3 = R3[(i3 - 1 + R3.length) % R3.length], b3 = R3[(i3 + 1) % R3.length];
      return [(a3[0] + pt[0] * 2 + b3[0]) / 4, (a3[1] + pt[1] * 2 + b3[1]) / 4];
    });
  let n3 = R3.length;
  if (n3 < 8) return 0;
  let w3 = Math.max(2, Math.round(n3 * 0.12)), turns = [];
  for (let i3 = 0; i3 < n3; i3++) {
    let a3 = R3[(i3 - w3 + n3) % n3], b3 = R3[i3], c3 = R3[(i3 + w3) % n3], a1 = Math.atan2(b3[1] - a3[1], b3[0] - a3[0]), a22 = Math.atan2(c3[1] - b3[1], c3[0] - b3[0]);
    turns.push(Math.abs((a22 - a1 + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI));
  }
  let peaks = [], run = null;
  for (let i3 = 0; i3 < n3 * 2; i3++) {
    let j3 = i3 % n3;
    if (turns[j3] > 38 ? run = Math.max(run != null ? run : 0, turns[j3]) : run !== null && ((i3 < n3 || peaks.length === 0) && peaks.push(run), run = null), i3 >= n3 && run === null) break;
  }
  return peaks.sort((a3, b3) => a3 - b3), { count: peaks.length, strength: peaks.length ? peaks[Math.floor(peaks.length / 2)] : 0 };
}
function fitPolygon(P3, n3, D3) {
  let verts = null, lo = 0.01 * D3, hi = 0.45 * D3;
  for (let i3 = 0; i3 < 18 && !verts; i3++) {
    let eps = (lo + hi) / 2, V2 = rdp([...P3, P3[0]], eps);
    V2.pop(), V2.length === n3 ? verts = V2 : V2.length > n3 ? lo = eps : hi = eps;
  }
  if (!verts) return null;
  let idx = verts.map((v3) => {
    let best = 0, bd = 1 / 0;
    return P3.forEach((p3, i3) => {
      let d3 = Math.hypot(p3[0] - v3[0], p3[1] - v3[1]);
      d3 < bd && (bd = d3, best = i3);
    }), best;
  }), lines = [];
  for (let i3 = 0; i3 < n3; i3++) {
    let a3 = idx[i3], b3 = idx[(i3 + 1) % n3], side = b3 > a3 ? P3.slice(a3, b3 + 1) : P3.slice(a3).concat(P3.slice(0, b3 + 1)), trim = Math.floor(side.length * 0.22);
    if (side.length - 2 * trim >= 3 && (side = side.slice(trim, side.length - trim)), side.length < 2) return null;
    let mx = 0, my = 0;
    for (let p3 of side)
      mx += p3[0], my += p3[1];
    mx /= side.length, my /= side.length;
    let sxx = 0, syy = 0, sxy = 0;
    for (let p3 of side)
      sxx += (p3[0] - mx) ** 2, syy += (p3[1] - my) ** 2, sxy += (p3[0] - mx) * (p3[1] - my);
    let ang = 0.5 * Math.atan2(2 * sxy, sxx - syy);
    lines.push({ p: [mx, my], d: [Math.cos(ang), Math.sin(ang)] });
  }
  let out = [];
  for (let i3 = 0; i3 < n3; i3++) {
    let l1 = lines[(i3 + n3 - 1) % n3], l22 = lines[i3], det = l1.d[0] * -l22.d[1] - l1.d[1] * -l22.d[0];
    if (Math.abs(det) < 1e-6) return null;
    let rx = l22.p[0] - l1.p[0], ry = l22.p[1] - l1.p[1], t3 = (rx * -l22.d[1] - ry * -l22.d[0]) / det, corner = [l1.p[0] + l1.d[0] * t3, l1.p[1] + l1.d[1] * t3];
    if (Math.hypot(corner[0] - verts[i3][0], corner[1] - verts[i3][1]) > 0.3 * D3) return null;
    out.push(corner);
  }
  let dev = 0;
  for (let p3 of P3) {
    let best = 1 / 0;
    for (let i3 = 0; i3 < n3; i3++) {
      let a3 = out[i3], b3 = out[(i3 + 1) % n3];
      best = Math.min(best, distToSeg(p3[0], p3[1], a3[0], a3[1], b3[0], b3[1]));
    }
    dev += best;
  }
  return { verts: out, score: dev / P3.length / D3 };
}
function fitCircle(P3) {
  let sx = 0, sy = 0, sxx = 0, syy = 0, sxy = 0, sxxx = 0, syyy = 0, sxyy = 0, sxxy = 0, n3 = P3.length;
  for (let [x3, y3] of P3)
    sx += x3, sy += y3, sxx += x3 * x3, syy += y3 * y3, sxy += x3 * y3, sxxx += x3 * x3 * x3, syyy += y3 * y3 * y3, sxyy += x3 * y3 * y3, sxxy += x3 * x3 * y3;
  let A3 = n3 * sxx - sx * sx, B2 = n3 * sxy - sx * sy, C3 = n3 * syy - sy * sy, D1 = 0.5 * (n3 * sxyy - sx * syy + n3 * sxxx - sx * sxx), E3 = 0.5 * (n3 * sxxy - sy * sxx + n3 * syyy - sy * syy), det = A3 * C3 - B2 * B2;
  if (Math.abs(det) < 1e-9) return null;
  let cx = (D1 * C3 - B2 * E3) / det, cy = (A3 * E3 - B2 * D1) / det, r4 = 0;
  for (let [x3, y3] of P3) r4 += Math.hypot(x3 - cx, y3 - cy);
  r4 /= n3;
  let err2 = 0;
  for (let [x3, y3] of P3) err2 += (Math.hypot(x3 - cx, y3 - cy) - r4) ** 2;
  return { cx, cy, r: r4, err: Math.sqrt(err2 / n3) / r4 };
}
function resample(P3, step) {
  let out = [P3[0]], carry = 0;
  for (let i3 = 1; i3 < P3.length; i3++) {
    let [ax, ay] = P3[i3 - 1], [bx, by] = P3[i3], seg = Math.hypot(bx - ax, by - ay);
    for (; carry + seg >= step; ) {
      let t3 = (step - carry) / seg;
      ax += (bx - ax) * t3, ay += (by - ay) * t3, out.push([ax, ay]), seg = Math.hypot(bx - ax, by - ay), carry = 0;
    }
    carry += seg;
  }
  return out.push(P3[P3.length - 1]), out;
}
function polylineCrossesItself(P3) {
  let S4 = P3.length > 120 ? P3.filter((_3, i3) => i3 % Math.ceil(P3.length / 120) === 0).concat([P3[P3.length - 1]]) : P3;
  for (let i3 = 1; i3 < S4.length; i3++) for (let j3 = i3 + 2; j3 < S4.length; j3++)
    if (segsCross(S4[i3 - 1], S4[i3], S4[j3 - 1], S4[j3])) return !0;
  return !1;
}
function recognizeShape(points, scale) {
  let P3 = points.map((p3) => [p3[0], p3[1]]);
  if (P3.length < 4) return null;
  let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
  for (let [x3, y3] of P3)
    x0 = Math.min(x0, x3), y0 = Math.min(y0, y3), x1 = Math.max(x1, x3), y1 = Math.max(y1, y3);
  let D3 = Math.hypot(x1 - x0, y1 - y0);
  if (D3 * scale < 20) return null;
  let L3 = pathLen(P3), step = Math.max(0.5, 2 / scale), a3 = P3[0], b3 = P3[P3.length - 1], chord = Math.hypot(b3[0] - a3[0], b3[1] - a3[1]), arrow = arrowFrom(P3, L3, scale);
  if (arrow) return { kind: "arrow", points: makeArrow(arrow.a, arrow.tip, arrow.barb, step), closed: !1, arrow };
  if (chord > 0.85 * L3) {
    let dev = 0;
    for (let p3 of P3) dev = Math.max(dev, distToSeg(p3[0], p3[1], a3[0], a3[1], b3[0], b3[1]));
    if (dev < Math.max(0.08 * chord, 3 / scale)) return { kind: "line", points: sampleSegments([a3, b3], step, !1), closed: !1 };
  }
  if (!(chord < Math.max(0.25 * D3, 0.08 * L3))) {
    if (polylineCrossesItself(P3)) return null;
    let c3 = fitCircle(P3);
    if (c3 && c3.err < 0.05 && c3.r < 4 * D3) {
      let a0 = Math.atan2(a3[1] - c3.cy, a3[0] - c3.cx), sweep = 0, prev = a0;
      for (let [x3, y3] of P3) {
        let t3 = Math.atan2(y3 - c3.cy, x3 - c3.cx), d3 = t3 - prev;
        d3 > Math.PI && (d3 -= 2 * Math.PI), d3 < -Math.PI && (d3 += 2 * Math.PI), sweep += d3, prev = t3;
      }
      let m4 = Math.max(12, Math.ceil(Math.abs(sweep) * c3.r / step)), out2 = [];
      for (let i3 = 0; i3 <= m4; i3++) {
        let t3 = a0 + sweep * i3 / m4;
        out2.push([c3.cx + c3.r * Math.cos(t3), c3.cy + c3.r * Math.sin(t3)]);
      }
      return { kind: "arc", points: out2, closed: !1 };
    }
    let R3 = resample(P3, Math.max(step, L3 / 400)), win = Math.max(2, Math.round(R3.length * 0.06));
    for (let pass = 0; pass < 3; pass++)
      R3 = R3.map((p3, i3) => {
        if (i3 === 0 || i3 === R3.length - 1) return p3;
        let w3 = Math.min(win, i3, R3.length - 1 - i3), sx = 0, sy = 0;
        for (let k3 = -w3; k3 <= w3; k3++)
          sx += R3[i3 + k3][0], sy += R3[i3 + k3][1];
        return [sx / (2 * w3 + 1), sy / (2 * w3 + 1)];
      });
    return { kind: "curve", points: resample(R3, step), closed: !1 };
  }
  let star = starFrom(P3, D3);
  if (star) return { kind: "star", points: sampleSegments(star, step, !0), closed: !0 };
  let n3 = P3.length, cx = 0, cy = 0;
  for (let [x3, y3] of P3)
    cx += x3, cy += y3;
  cx /= n3, cy /= n3;
  let sxx = 0, syy = 0, sxy = 0;
  for (let [x3, y3] of P3)
    sxx += (x3 - cx) ** 2, syy += (y3 - cy) ** 2, sxy += (x3 - cx) * (y3 - cy);
  sxx /= n3, syy /= n3, sxy /= n3;
  let ang = 0.5 * Math.atan2(2 * sxy, sxx - syy), ca = Math.cos(ang), sa = Math.sin(ang), us = [], vs = [];
  for (let [x3, y3] of P3)
    us.push((x3 - cx) * ca + (y3 - cy) * sa), vs.push(-(x3 - cx) * sa + (y3 - cy) * ca);
  let span = (arr) => {
    let t3 = [...arr].sort((p3, q2) => p3 - q2), lo = t3[Math.floor(t3.length * 0.02)];
    return (t3[Math.ceil(t3.length * 0.98) - 1] - lo) / 2;
  }, ra = Math.max(1e-6, span(us)), rb = Math.max(1e-6, span(vs));
  cx += (Math.max(...us) + Math.min(...us)) / 2 * ca - (Math.max(...vs) + Math.min(...vs)) / 2 * sa, cy += (Math.max(...us) + Math.min(...us)) / 2 * sa + (Math.max(...vs) + Math.min(...vs)) / 2 * ca;
  let err2 = 0;
  for (let [x3, y3] of P3) {
    let u3 = (x3 - cx) * ca + (y3 - cy) * sa, v3 = -(x3 - cx) * sa + (y3 - cy) * ca;
    err2 += (Math.sqrt((u3 / ra) ** 2 + (v3 / rb) ** 2) - 1) ** 2;
  }
  err2 = Math.sqrt(err2 / n3);
  let ellipseScore = err2 * (ra + rb) / 2 / D3, best = null, { count: corners, strength } = cornerCount(P3, D3);
  for (let n4 of [3, 4]) {
    if (corners !== n4 || strength < 75) continue;
    let f3 = fitPolygon(P3, n4, D3);
    f3 && f3.score < ellipseScore * 0.8 && f3.score < 0.035 && (!best || f3.score < best.score * 0.55) && (best = { ...f3, n: n4 });
  }
  if (best && best.n === 3) return { kind: "triangle", points: sampleSegments(best.verts, step, !0), closed: !0 };
  if (best && best.n === 4) {
    let V2 = best.verts;
    if (V2.map((p3, i3) => {
      let q2 = V2[(i3 + 1) % 4], r4 = V2[(i3 + 3) % 4], a1 = Math.atan2(q2[1] - p3[1], q2[0] - p3[0]), a22 = Math.atan2(r4[1] - p3[1], r4[0] - p3[0]), d3 = Math.abs(a1 - a22) * (180 / Math.PI);
      return d3 > 180 && (d3 = 360 - d3), d3;
    }).every((d3) => Math.abs(d3 - 90) < 28)) {
      let th = Math.atan2(V2[1][1] - V2[0][1], V2[1][0] - V2[0][0]), thDeg = (th * 180 / Math.PI + 360) % 90;
      (thDeg < 8 || thDeg > 82) && (th = Math.round(th / (Math.PI / 2)) * (Math.PI / 2));
      let c3 = Math.cos(th), sn = Math.sin(th), u0 = 1 / 0, v0 = 1 / 0, u1 = -1 / 0, v1 = -1 / 0;
      for (let [x3, y3] of V2) {
        let u3 = x3 * c3 + y3 * sn, v3 = -x3 * sn + y3 * c3;
        u0 = Math.min(u0, u3), v0 = Math.min(v0, v3), u1 = Math.max(u1, u3), v1 = Math.max(v1, v3);
      }
      if (Math.abs(u1 - u0 - (v1 - v0)) / Math.max(u1 - u0, v1 - v0) < 0.12) {
        let sz = (u1 - u0 + (v1 - v0)) / 2, mu = (u0 + u1) / 2, mv = (v0 + v1) / 2;
        u0 = mu - sz / 2, u1 = mu + sz / 2, v0 = mv - sz / 2, v1 = mv + sz / 2;
      }
      let back = (u3, v3) => [u3 * c3 - v3 * sn, u3 * sn + v3 * c3], Rc = [back(u0, v0), back(u1, v0), back(u1, v1), back(u0, v1)], si = 0, sd = 1 / 0;
      return Rc.forEach((q2, i3) => {
        let d3 = Math.hypot(q2[0] - a3[0], q2[1] - a3[1]);
        d3 < sd && (sd = d3, si = i3);
      }), { kind: "rectangle", points: sampleSegments([...Rc.slice(si), ...Rc.slice(0, si)], step, !0), closed: !0 };
    }
    return { kind: "quad", points: sampleSegments(V2, step, !0), closed: !0 };
  }
  Math.min(ra, rb) / Math.max(ra, rb) > 0.76 && (ra = rb = (ra + rb) / 2);
  let deg = ang * 180 / Math.PI % 90;
  (Math.abs(deg) < 8 || Math.abs(deg) > 82) && (ang = Math.round(ang / (Math.PI / 2)) * (Math.PI / 2));
  let c22 = Math.cos(ang), s22 = Math.sin(ang), m3 = Math.max(24, Math.ceil(Math.PI * (ra + rb) / step)), t0 = Math.atan2(((a3[1] - cy) * c22 - (a3[0] - cx) * s22) / rb, ((a3[0] - cx) * c22 + (a3[1] - cy) * s22) / ra), out = [];
  for (let i3 = 0; i3 <= m3 + 1; i3++) {
    let t3 = t0 + i3 / m3 * Math.PI * 2, u3 = ra * Math.cos(t3), v3 = rb * Math.sin(t3);
    out.push([cx + u3 * c22 - v3 * s22, cy + u3 * s22 + v3 * c22]);
  }
  return { kind: ra === rb ? "circle" : "ellipse", points: out, closed: !0 };
}
function boxOfLoops(loops) {
  let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
  for (let l3 of loops) for (let [x3, y3] of l3)
    x0 = Math.min(x0, x3), y0 = Math.min(y0, y3), x1 = Math.max(x1, x3), y1 = Math.max(y1, y3);
  return isFinite(x0) ? { x: x0, y: y0, width: x1 - x0, height: y1 - y0 } : null;
}

// src/brushes/registry.js
var BUILTIN = [
  // ---- Basic (also the default tips for effects and the fine eraser) ----
  {
    id: "softround",
    name: "Soft round",
    group: "Basic",
    icon: "ink-softround",
    kind: "stamp",
    shape: { type: "round", hardness: 0 },
    spacing: 0.08,
    flow: 0.35,
    flowPressure: 0.6,
    sizePressure: 0.3,
    presets: [10, 24, 48, 90],
    range: [2, 400]
  },
  {
    id: "hardround",
    name: "Hard round",
    group: "Basic",
    icon: "ink-hardround",
    kind: "stamp",
    shape: { type: "round", hardness: 0.9 },
    spacing: 0.05,
    flow: 1,
    flowPressure: 0,
    sizePressure: 0.3,
    presets: [4, 10, 20, 40],
    range: [1, 400]
  },
  // ---- Ink (vector) ----
  { id: "fineliner", name: "Fineliner", group: "Ink", icon: "ink-fineliner", kind: "vector", thinning: 0.15, presets: [1, 2, 3.5, 6], range: [0.5, 30] },
  { id: "ink", name: "Ink pen", group: "Ink", icon: "ink-pen", kind: "vector", thinning: 0.6, presets: [2, 4, 8, 14], range: [0.5, 60] },
  { id: "brushpen", name: "Brush pen", group: "Ink", icon: "ink-brushpen", kind: "vector", thinning: 0.85, taperStart: 4, taperEnd: 6, presets: [3, 6, 12, 22], range: [1, 80] },
  { id: "marker", name: "Marker", group: "Ink", icon: "ink-marker", kind: "vector", thinning: 0, opacityMult: 0.85, presets: [6, 10, 16, 26], range: [2, 80] },
  { id: "highlighter", name: "Highlighter", group: "Ink", icon: "ink-highlighter", kind: "vector", thinning: 0, opacityMult: 0.5, presets: [12, 20, 30, 44], range: [4, 120] },
  // ---- Sketch (stamp) ----
  {
    id: "pencil",
    name: "Pencil",
    group: "Sketch",
    icon: "ink-pencil",
    kind: "stamp",
    shape: { type: "round", hardness: 0.8 },
    grain: { type: "rough" },
    grainScale: 0.3,
    grainDepth: 0.9,
    spacing: 0.08,
    jitterLateral: 0.05,
    flow: 0.6,
    sizePressure: 0.35,
    flowPressure: 0.8,
    taperStart: 0.4,
    taperEnd: 0.6,
    taperSize: 0.6,
    presets: [1.5, 3, 5, 9],
    range: [0.5, 40]
  },
  {
    id: "charcoal",
    name: "Charcoal",
    group: "Sketch",
    icon: "ink-charcoal",
    kind: "stamp",
    shape: { type: "chalk" },
    grain: { type: "rough" },
    grainScale: 1,
    grainDepth: 0.75,
    spacing: 0.12,
    rotationJitter: 1,
    jitterLateral: 0.08,
    sizeJitter: 0.25,
    flow: 0.45,
    sizePressure: 0.4,
    flowPressure: 0.7,
    presets: [6, 12, 22, 36],
    range: [2, 120]
  },
  {
    id: "crayon",
    name: "Crayon",
    group: "Sketch",
    icon: "ink-crayon",
    kind: "stamp",
    shape: { type: "round", hardness: 0.7 },
    grain: { type: "rough" },
    grainScale: 0.5,
    grainDepth: 0.95,
    spacing: 0.08,
    flow: 0.8,
    sizePressure: 0.25,
    flowPressure: 0.5,
    presets: [4, 8, 14, 24],
    range: [1, 80]
  },
  // ---- Paint (stamp) ----
  {
    id: "gouache",
    name: "Gouache",
    group: "Paint",
    icon: "ink-gouache",
    kind: "stamp",
    shape: { type: "round", hardness: 0.92 },
    roundness: 0.8,
    grain: { type: "canvas" },
    grainScale: 0.8,
    grainDepth: 0.45,
    spacing: 0.04,
    rotationFollow: 1,
    flow: 0.9,
    sizePressure: 0.6,
    flowPressure: 0.2,
    taperStart: 0.5,
    taperEnd: 0.8,
    taperSize: 0.5,
    presets: [6, 12, 24, 40],
    range: [1, 160]
  },
  {
    id: "watercolor",
    name: "Watercolor",
    group: "Paint",
    icon: "ink-watercolor",
    kind: "stamp",
    shape: { type: "wet" },
    grain: { type: "paper" },
    grainScale: 1.6,
    grainDepth: 0.55,
    spacing: 0.06,
    sizeJitter: 0.15,
    jitterLateral: 0.06,
    flow: 0.1,
    sizePressure: 0.5,
    flowPressure: 0.6,
    wet: { bleed: 0.6, edge: 0.7, thin: 0.35 },
    presets: [16, 30, 50, 80],
    range: [4, 240]
  },
  {
    id: "calligraphy",
    name: "Calligraphy",
    group: "Paint",
    icon: "ink-calligraphy",
    kind: "stamp",
    shape: { type: "round", hardness: 0.97 },
    roundness: 0.22,
    angle: -45,
    spacing: 0.03,
    flow: 1,
    sizePressure: 0.5,
    flowPressure: 0,
    presets: [6, 12, 20, 32],
    range: [2, 120]
  },
  {
    id: "airbrush",
    name: "Airbrush",
    group: "Paint",
    icon: "ink-airbrush",
    kind: "stamp",
    shape: { type: "round", hardness: 0 },
    spacing: 0.06,
    flow: 0.06,
    flowPressure: 1,
    sizePressure: 0,
    presets: [20, 40, 70, 120],
    range: [4, 400]
  },
  {
    id: "spray",
    name: "Spray paint",
    group: "Paint",
    icon: "ink-spray",
    kind: "stamp",
    shape: { type: "dots" },
    spacing: 0.25,
    rotationJitter: 1,
    sizeJitter: 0.2,
    flow: 0.7,
    flowPressure: 0.8,
    presets: [16, 30, 50, 90],
    range: [4, 300]
  },
  // ---- Texture (stamp) ----
  {
    id: "oil",
    name: "Oil bristle",
    group: "Texture",
    icon: "ink-gouache",
    kind: "stamp",
    shape: { type: "bristle" },
    grain: { type: "canvas" },
    grainScale: 0.9,
    grainDepth: 0.35,
    spacing: 0.05,
    rotationFollow: 1,
    flow: 0.45,
    sizePressure: 0.45,
    flowPressure: 0.35,
    taperEnd: 0.6,
    presets: [10, 20, 36, 60],
    range: [3, 200]
  },
  {
    id: "drybrush",
    name: "Dry brush",
    group: "Texture",
    icon: "ink-crayon",
    kind: "stamp",
    shape: { type: "bristle" },
    grain: { type: "rough" },
    grainScale: 0.7,
    grainDepth: 0.9,
    spacing: 0.05,
    rotationFollow: 1,
    jitterLateral: 0.04,
    flow: 0.7,
    sizePressure: 0.3,
    flowPressure: 0.7,
    presets: [12, 24, 40, 70],
    range: [3, 200]
  },
  {
    id: "flat",
    name: "Flat brush",
    group: "Texture",
    icon: "ink-calligraphy",
    kind: "stamp",
    shape: { type: "flat" },
    grain: { type: "canvas" },
    grainScale: 0.8,
    grainDepth: 0.3,
    spacing: 0.03,
    rotationFollow: 1,
    flow: 0.9,
    sizePressure: 0.4,
    flowPressure: 0.25,
    presets: [10, 20, 36, 60],
    range: [3, 200]
  },
  {
    id: "pastel",
    name: "Soft pastel",
    group: "Texture",
    icon: "ink-charcoal",
    kind: "stamp",
    shape: { type: "chalk" },
    grain: { type: "gritty" },
    grainScale: 0.9,
    grainDepth: 0.85,
    spacing: 0.1,
    rotationJitter: 1,
    sizeJitter: 0.15,
    flow: 0.55,
    sizePressure: 0.35,
    flowPressure: 0.75,
    presets: [8, 16, 28, 48],
    range: [2, 160]
  },
  {
    id: "graphite",
    name: "Graphite",
    group: "Texture",
    icon: "ink-pencil",
    kind: "stamp",
    shape: { type: "round", hardness: 0.85 },
    grain: { type: "gritty" },
    grainScale: 0.35,
    grainDepth: 0.8,
    spacing: 0.07,
    jitterLateral: 0.03,
    flow: 0.55,
    sizePressure: 0.4,
    flowPressure: 0.9,
    taperStart: 0.3,
    taperEnd: 0.5,
    taperSize: 0.5,
    presets: [1, 2.5, 4, 8],
    range: [0.5, 30]
  },
  {
    id: "sponge",
    name: "Sponge",
    group: "Texture",
    icon: "ink-spray",
    kind: "stamp",
    shape: { type: "sponge" },
    spacing: 0.3,
    rotationJitter: 1,
    sizeJitter: 0.25,
    jitterLateral: 0.1,
    flow: 0.75,
    flowPressure: 0.6,
    presets: [16, 30, 50, 90],
    range: [4, 300]
  },
  {
    id: "splatter",
    name: "Splatter",
    group: "Texture",
    icon: "ink-spray",
    kind: "stamp",
    shape: { type: "splatter" },
    spacing: 0.55,
    rotationJitter: 1,
    sizeJitter: 0.4,
    jitterLateral: 0.25,
    flow: 0.9,
    flowPressure: 0.5,
    presets: [20, 40, 70, 120],
    range: [6, 400]
  },
  {
    id: "stipple",
    name: "Stipple",
    group: "Texture",
    icon: "ink-spray",
    kind: "stamp",
    shape: { type: "round", hardness: 0.6 },
    grain: { type: "stipple" },
    grainScale: 0.6,
    grainDepth: 1,
    spacing: 0.1,
    flow: 0.8,
    flowPressure: 0.6,
    presets: [10, 20, 36, 60],
    range: [3, 200]
  },
  {
    // Folded into Watercolor (turn its wetness down for the same soft wash); kept for old strokes.
    id: "wash",
    name: "Watercolor wash",
    group: "Texture",
    icon: "ink-watercolor",
    kind: "stamp",
    hidden: !0,
    shape: { type: "round", hardness: 0 },
    grain: { type: "paper" },
    grainScale: 2.2,
    grainDepth: 0.4,
    spacing: 0.08,
    sizeJitter: 0.1,
    flow: 0.18,
    sizePressure: 0.4,
    flowPressure: 0.6,
    wet: { bleed: 0.45, edge: 0.35, thin: 0.25 },
    presets: [30, 60, 100, 160],
    range: [8, 400]
  }
], custom = /* @__PURE__ */ new Map();
function allBrushes() {
  return [...BUILTIN.filter((b3) => !b3.hidden), ...[...custom.values()].filter((b3) => !b3.hidden)];
}
function registerBrush(def) {
  custom.set(def.id, def);
}
function isCustom(id) {
  return custom.has(id);
}
var byId = (id) => BUILTIN.find((b3) => b3.id === id) || custom.get(id);
function brushFor(item) {
  return item.brush ? byId(item.brush) || byId("pencil") : byId(item.tool === "highlighter" ? "highlighter" : "ink");
}
function getBrush(id) {
  return byId(id) || byId("ink");
}
function makeCanvas(w3, h3) {
  let c3 = document.createElement("canvas");
  return c3.width = w3, c3.height = h3, c3;
}
function rng(seed) {
  return () => {
    seed |= 0, seed = seed + 1831565813 | 0;
    let t3 = Math.imul(seed ^ seed >>> 15, 1 | seed);
    return t3 = t3 + Math.imul(t3 ^ t3 >>> 7, 61 | t3) ^ t3, ((t3 ^ t3 >>> 14) >>> 0) / 4294967296;
  };
}
function tileNoise(size, octaves, seed, base = 4) {
  let r4 = rng(seed), out = new Float32Array(size * size), amp = 1, total = 0;
  for (let o3 = 0; o3 < octaves; o3++) {
    let cells = base << o3, lattice = new Float32Array(cells * cells).map(() => r4()), step = size / cells;
    for (let y3 = 0; y3 < size; y3++) {
      let gy = y3 / step, y0 = Math.floor(gy), fy = gy - y0, sy = fy * fy * (3 - 2 * fy);
      for (let x3 = 0; x3 < size; x3++) {
        let gx = x3 / step, x0 = Math.floor(gx), fx = gx - x0, sx = fx * fx * (3 - 2 * fx), a3 = lattice[y0 % cells * cells + x0 % cells], b3 = lattice[y0 % cells * cells + (x0 + 1) % cells], c3 = lattice[(y0 + 1) % cells * cells + x0 % cells], d3 = lattice[(y0 + 1) % cells * cells + (x0 + 1) % cells];
        out[y3 * size + x3] += amp * (a3 + (b3 - a3) * sx + (c3 - a3) * sy + (a3 - b3 - c3 + d3) * sx * sy);
      }
    }
    total += amp, amp *= 0.55;
  }
  for (let i3 = 0; i3 < out.length; i3++) out[i3] /= total;
  return out;
}
function alphaCanvas(size, fn) {
  let c3 = makeCanvas(size, size), ctx = c3.getContext("2d"), img = ctx.createImageData(size, size);
  for (let i3 = 0, p3 = 0; i3 < size * size; i3++, p3 += 4)
    img.data[p3] = img.data[p3 + 1] = img.data[p3 + 2] = 255, img.data[p3 + 3] = Math.max(0, Math.min(255, Math.round(fn(i3) * 255)));
  return ctx.putImageData(img, 0, 0), c3;
}
var shapeCache = /* @__PURE__ */ new Map(), grainCache = /* @__PURE__ */ new Map(), imageCache = /* @__PURE__ */ new Map(), tinted = /* @__PURE__ */ new Map();
function loadImageCanvas(src) {
  let entry = imageCache.get(src);
  return entry || (entry = { canvas: null, ready: null }, entry.ready = new Promise((res) => {
    let img = new Image();
    img.onload = () => {
      let c3 = makeCanvas(img.naturalWidth || 1, img.naturalHeight || 1);
      c3.getContext("2d").drawImage(img, 0, 0), entry.canvas = c3, res(c3);
    }, img.onerror = () => res(null), img.src = src;
  }), imageCache.set(src, entry), entry);
}
function brushReady(brush) {
  let ps = [];
  return brush.shape && brush.shape.type === "image" && ps.push(loadImageCanvas(brush.shape.src).ready), brush.grain && brush.grain.type === "image" && ps.push(loadImageCanvas(brush.grain.src).ready), Promise.all(ps);
}
function shapeCanvas(brush) {
  var _a2, _b2;
  let s3 = brush.shape || { type: "round", hardness: 0.8 };
  if (s3.type === "image") return loadImageCanvas(s3.src).canvas || shapeCanvas({ shape: { type: "round", hardness: 0.8 } });
  let key2 = s3.type + ":" + ((_a2 = s3.hardness) != null ? _a2 : ""), c3 = shapeCache.get(key2);
  if (c3) return c3;
  let N3 = 128, R3 = N3 / 2;
  if (s3.type === "round") {
    let h3 = Math.min(0.999, (_b2 = s3.hardness) != null ? _b2 : 0.8);
    c3 = alphaCanvas(N3, (i3) => {
      let x3 = i3 % N3 + 0.5 - R3, y3 = Math.floor(i3 / N3) + 0.5 - R3, d3 = Math.hypot(x3, y3) / R3;
      if (d3 >= 1) return 0;
      if (d3 <= h3) return 1;
      let t3 = (d3 - h3) / (1 - h3);
      return h3 === 0 ? Math.pow(1 - d3, 2) : 1 - t3 * t3 * (3 - 2 * t3);
    });
  } else if (s3.type === "chalk") {
    let n3 = tileNoise(N3, 4, 7, 8);
    c3 = alphaCanvas(N3, (i3) => {
      let x3 = i3 % N3 + 0.5 - R3, y3 = Math.floor(i3 / N3) + 0.5 - R3, d3 = Math.hypot(x3, y3) / R3, edge = 1 - Math.max(0, (d3 - 0.55) / 0.45);
      return Math.max(0, Math.min(1, (n3[i3] * 1.6 - 0.35) * edge * 1.4));
    });
  } else if (s3.type === "wet")
    c3 = alphaCanvas(N3, (i3) => {
      let x3 = i3 % N3 + 0.5 - R3, y3 = Math.floor(i3 / N3) + 0.5 - R3, d3 = Math.hypot(x3, y3) / R3;
      if (d3 >= 1) return 0;
      let rim = Math.exp(-Math.pow((d3 - 0.9) / 0.07, 2));
      return Math.min(1, 0.55 + 0.45 * rim) * (d3 > 0.96 ? (1 - d3) / 0.04 : 1);
    });
  else if (s3.type === "bristle") {
    let r4 = rng(23), hairs = [];
    for (let k3 = 0; k3 < 22; k3++) hairs.push({ y: k3 / 21 * 2 - 1 + (r4() - 0.5) * 0.06, len: 0.35 + r4() * 0.45, a: 0.25 + r4() * 0.75, w: 0.03 + r4() * 0.03 });
    c3 = alphaCanvas(N3, (i3) => {
      let x3 = (i3 % N3 + 0.5 - R3) / R3, y3 = (Math.floor(i3 / N3) + 0.5 - R3) / R3, a3 = 0;
      for (let hh of hairs) {
        let dy = (y3 * 0.92 - hh.y) / hh.w;
        if (Math.abs(dy) > 2.5) continue;
        let along = Math.max(0, 1 - Math.pow(Math.abs(x3) / hh.len, 3));
        a3 = Math.max(a3, Math.exp(-dy * dy) * along * hh.a);
      }
      return a3 * (Math.abs(y3) < 0.97 ? 1 : 0);
    });
  } else if (s3.type === "sponge") {
    let n3 = tileNoise(N3, 3, 11, 6);
    c3 = alphaCanvas(N3, (i3) => {
      let x3 = i3 % N3 + 0.5 - R3, y3 = Math.floor(i3 / N3) + 0.5 - R3, d3 = Math.hypot(x3, y3) / R3;
      if (d3 >= 1) return 0;
      let edge = d3 < 0.7 ? 1 : 1 - (d3 - 0.7) / 0.3;
      return (n3[i3] > 0.5 ? 1 : Math.max(0, (n3[i3] - 0.38) / 0.12)) * edge * 0.95;
    });
  } else if (s3.type === "splatter") {
    c3 = makeCanvas(N3, N3);
    let ctx = c3.getContext("2d"), r4 = rng(31);
    ctx.fillStyle = "#fff";
    for (let k3 = 0; k3 < 70; k3++) {
      let a3 = r4() * Math.PI * 2, rad = Math.pow(r4(), 0.7) * (R3 - 4), big = k3 < 6;
      ctx.globalAlpha = big ? 0.95 : 0.6 + r4() * 0.4, ctx.beginPath(), ctx.arc(R3 + Math.cos(a3) * rad * (big ? 0.5 : 1), R3 + Math.sin(a3) * rad * (big ? 0.5 : 1), big ? 5 + r4() * 7 : 0.8 + r4() * 2.4, 0, Math.PI * 2), ctx.fill();
    }
  } else if (s3.type === "flat") {
    let n3 = tileNoise(N3, 3, 17, 24);
    c3 = alphaCanvas(N3, (i3) => {
      let x3 = (i3 % N3 + 0.5 - R3) / R3, y3 = (Math.floor(i3 / N3) + 0.5 - R3) / R3;
      if (Math.abs(y3) > 0.95 || Math.abs(x3) > 0.32) return 0;
      let edge = Math.min(1, (0.32 - Math.abs(x3)) / 0.08, (0.95 - Math.abs(y3)) / 0.1);
      return Math.max(0, Math.min(1, edge * (0.6 + n3[i3] * 0.6)));
    });
  } else if (s3.type === "dots") {
    c3 = makeCanvas(N3, N3);
    let ctx = c3.getContext("2d"), r4 = rng(11);
    ctx.fillStyle = "#fff";
    for (let k3 = 0; k3 < 90; k3++) {
      let a3 = r4() * Math.PI * 2, rad = Math.sqrt(r4()) * (R3 - 3);
      ctx.globalAlpha = 0.5 + r4() * 0.5, ctx.beginPath(), ctx.arc(R3 + Math.cos(a3) * rad, R3 + Math.sin(a3) * rad, 0.8 + r4() * 1.8, 0, Math.PI * 2), ctx.fill();
    }
  }
  return shapeCache.set(key2, c3), c3;
}
function rawGrain(g3) {
  if (g3.type === "image") return loadImageCanvas(g3.src).canvas;
  let c3 = grainCache.get("raw:" + g3.type);
  if (c3) return c3;
  let N3 = 256;
  if (g3.type === "paper") {
    let n3 = tileNoise(N3, 5, 3, 16);
    c3 = alphaCanvas(N3, (i3) => Math.min(1, Math.max(0, (n3[i3] - 0.3) * 2.2)));
  } else if (g3.type === "rough") {
    let n3 = tileNoise(N3, 4, 5, 32);
    c3 = alphaCanvas(N3, (i3) => n3[i3] > 0.47 ? 1 : Math.max(0, (n3[i3] - 0.3) * 4));
  } else if (g3.type === "gritty") {
    let n3 = tileNoise(N3, 2, 13, 96);
    c3 = alphaCanvas(N3, (i3) => n3[i3] > 0.42 ? 1 : Math.max(0, (n3[i3] - 0.25) * 5));
  } else if (g3.type === "stipple") {
    let n3 = tileNoise(N3, 1, 19, 128);
    c3 = alphaCanvas(N3, (i3) => n3[i3] > 0.62 ? 1 : 0);
  } else if (g3.type === "canvas") {
    let n3 = tileNoise(N3, 3, 9, 32);
    c3 = alphaCanvas(N3, (i3) => {
      let x3 = i3 % N3, y3 = Math.floor(i3 / N3), weave = 0.5 + 0.25 * Math.sin(x3 / N3 * Math.PI * 64) + 0.25 * Math.sin(y3 / N3 * Math.PI * 64);
      return Math.min(1, 0.35 + weave * 0.45 + n3[i3] * 0.3);
    });
  }
  return grainCache.set("raw:" + g3.type, c3), c3;
}
function grainMask(brush) {
  var _a2;
  if (!brush.grain) return null;
  let depth = (_a2 = brush.grainDepth) != null ? _a2 : 1;
  if (depth <= 0) return null;
  let key2 = (brush.grain.type === "image" ? brush.grain.src.slice(-64) : brush.grain.type) + "|" + depth, c3 = grainCache.get(key2);
  if (c3) return c3;
  let src = rawGrain(brush.grain);
  if (!src) return null;
  c3 = makeCanvas(src.width, src.height);
  let ctx = c3.getContext("2d");
  ctx.drawImage(src, 0, 0);
  let img = ctx.getImageData(0, 0, c3.width, c3.height);
  for (let p3 = 0; p3 < img.data.length; p3 += 4) {
    let g3 = img.data[p3 + 3] / 255;
    img.data[p3] = img.data[p3 + 1] = img.data[p3 + 2] = 255, img.data[p3 + 3] = Math.round((1 - depth * (1 - g3)) * 255);
  }
  return ctx.putImageData(img, 0, 0), grainCache.set(key2, c3), c3;
}
function tintedShape(brush, color) {
  let key2 = brush.id + "|" + color, c3 = tinted.get(key2);
  if (c3) return c3;
  let s3 = shapeCanvas(brush);
  c3 = makeCanvas(s3.width, s3.height);
  let ctx = c3.getContext("2d");
  return ctx.drawImage(s3, 0, 0), ctx.globalCompositeOperation = "source-in", ctx.fillStyle = color, ctx.fillRect(0, 0, c3.width, c3.height), brush.shape && brush.shape.type === "image" && !loadImageCanvas(brush.shape.src).canvas || tinted.set(key2, c3), c3;
}

// src/adjust.js
function rgbToHsl(r4, g3, b3) {
  r4 /= 255, g3 /= 255, b3 /= 255;
  let max2 = Math.max(r4, g3, b3), min = Math.min(r4, g3, b3), d3 = max2 - min, l3 = (max2 + min) / 2, h3 = 0, s3 = 0;
  return d3 && (s3 = d3 / (1 - Math.abs(2 * l3 - 1)), max2 === r4 ? h3 = (g3 - b3) / d3 % 6 : max2 === g3 ? h3 = (b3 - r4) / d3 + 2 : h3 = (r4 - g3) / d3 + 4, h3 *= 60, h3 < 0 && (h3 += 360)), [h3, s3, l3];
}
function hslToRgb(h3, s3, l3) {
  let c3 = (1 - Math.abs(2 * l3 - 1)) * s3, x3 = c3 * (1 - Math.abs(h3 / 60 % 2 - 1)), m3 = l3 - c3 / 2, [r4, g3, b3] = h3 < 60 ? [c3, x3, 0] : h3 < 120 ? [x3, c3, 0] : h3 < 180 ? [0, c3, x3] : h3 < 240 ? [0, x3, c3] : h3 < 300 ? [x3, 0, c3] : [c3, 0, x3];
  return [(r4 + m3) * 255, (g3 + m3) * 255, (b3 + m3) * 255];
}
function adjustColor(color, adj) {
  let rgba = parseRGBA(color);
  if (!rgba) return color;
  let [h3, s3, l3] = rgbToHsl(rgba[0], rgba[1], rgba[2]);
  if (h3 = (h3 + (adj.hue || 0) + 360) % 360, s3 = Math.max(0, Math.min(1, s3 * (1 + (adj.sat || 0) / 100))), l3 = Math.max(0, Math.min(1, l3 + (adj.light || 0) / 100)), adj.contrast) {
    let c3 = 1 + adj.contrast / 100;
    l3 = Math.max(0, Math.min(1, 0.5 + (l3 - 0.5) * c3));
  }
  let [r4, g3, b3] = hslToRgb(h3, s3, l3);
  return toHex([r4, g3, b3, rgba[3]]);
}
function isAdjusted(adj) {
  return !!(adj.hue || adj.sat || adj.light || adj.contrast);
}
function mergeAdjust(prev, adj) {
  let p3 = prev || { hue: 0, sat: 0, light: 0, contrast: 0 };
  return {
    hue: (p3.hue || 0) + (adj.hue || 0),
    sat: Math.max(-100, Math.min(400, (p3.sat || 0) + (adj.sat || 0))),
    light: Math.max(-100, Math.min(100, (p3.light || 0) + (adj.light || 0))),
    contrast: Math.max(-100, Math.min(400, (p3.contrast || 0) + (adj.contrast || 0)))
  };
}
function adjustFilter(a3) {
  return !a3 || !isAdjusted(a3) ? "" : `hue-rotate(${a3.hue || 0}deg) saturate(${(100 + (a3.sat || 0)) / 100}) brightness(${(100 + (a3.light || 0) * 0.8) / 100}) contrast(${(100 + (a3.contrast || 0)) / 100})`;
}
function adjustItem(item, adj) {
  let f3 = (c3) => adjustColor(c3, adj), n3 = { ...item };
  if (item.ref && (n3.ref = { ...item.ref, adjust: mergeAdjust(item.ref.adjust, adj) }), item.color && (n3.color = f3(item.color)), item.type === "pixels") {
    let cells = {};
    for (let k3 in item.cells) cells[k3] = f3(item.cells[k3]);
    n3.cells = cells;
  } else item.type === "group" && (n3.items = item.items.map((c3) => adjustItem(c3, adj)));
  return n3;
}

// src/pixels.js
var MAX_GRID = 512;
function pixelBox(item) {
  return { x: item.x, y: item.y, width: item.cols * item.cell, height: item.rows * item.cell };
}
function cellAt(item, x3, y3) {
  let cx = Math.floor((x3 - item.x) / item.cell), cy = Math.floor((y3 - item.y) / item.cell);
  return cx < 0 || cy < 0 || cx >= item.cols || cy >= item.rows ? null : [cx, cy];
}
function pixelEls(item) {
  let byColor = /* @__PURE__ */ new Map(), { cols, rows, cell, cells } = item, f3 = (n3) => Math.round(n3 * 1e3) / 1e3;
  for (let y3 = 0; y3 < rows; y3++) {
    let x3 = 0;
    for (; x3 < cols; ) {
      let c3 = cells[y3 * cols + x3];
      if (!c3) {
        x3++;
        continue;
      }
      let run = 1;
      for (; x3 + run < cols && cells[y3 * cols + x3 + run] === c3; ) run++;
      let o3 = cell * 0.02, d3 = `M${f3(item.x + x3 * cell - o3)} ${f3(item.y + y3 * cell - o3)}h${f3(run * cell + 2 * o3)}v${f3(cell + 2 * o3)}h${f3(-run * cell - 2 * o3)}z`;
      byColor.set(c3, (byColor.get(c3) || "") + d3), x3 += run;
    }
  }
  let els = [];
  for (let [c3, d3] of byColor) els.push(svgEl("path", { d: d3, fill: paint(c3) }));
  return els;
}
function pixelBorderEl(item) {
  let b3 = pixelBox(item);
  return svgEl("rect", {
    class: "ink-pixel-border",
    x: b3.x,
    y: b3.y,
    width: b3.width,
    height: b3.height,
    fill: "none",
    stroke: "currentColor",
    "stroke-opacity": 0.35,
    "stroke-width": 1,
    "vector-effect": "non-scaling-stroke"
  });
}
function overCell(under, over) {
  let o3 = parseRGBA(over);
  if (!o3 || o3[3] >= 1) return over;
  let u3 = parseRGBA(under);
  if (!u3) return over;
  let a3 = o3[3] + u3[3] * (1 - o3[3]);
  if (a3 <= 0) return null;
  let mix2 = (i3) => (o3[i3] * o3[3] + u3[i3] * u3[3] * (1 - o3[3])) / a3;
  return toHex([mix2(0), mix2(1), mix2(2), a3]);
}
function stampCells(cells, item, cx, cy, size, color) {
  let h3 = Math.floor((size - 1) / 2);
  for (let y3 = cy - h3; y3 < cy - h3 + size; y3++)
    if (!(y3 < 0 || y3 >= item.rows))
      for (let x3 = cx - h3; x3 < cx - h3 + size; x3++) {
        if (x3 < 0 || x3 >= item.cols) continue;
        let i3 = y3 * item.cols + x3;
        if (!color) {
          delete cells[i3];
          continue;
        }
        cells[i3] = overCell(cells[i3], color);
      }
}
function lineCells(a3, b3) {
  let out = [], [x0, y0] = a3, [x1, y1] = b3, dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1, err2 = dx + dy;
  for (let guard = 0; guard < 4096 && (out.push([x0, y0]), !(x0 === x1 && y0 === y1)); guard++) {
    let e22 = 2 * err2;
    e22 >= dy && (err2 += dy, x0 += sx), e22 <= dx && (err2 += dx, y0 += sy);
  }
  return out;
}
function fillCells(cells, item, cx, cy, color) {
  let { cols, rows } = item, target = cells[cy * cols + cx] || null;
  if (target === (color || null)) return;
  let stack = [cx, cy], seen = new Uint8Array(cols * rows);
  for (; stack.length; ) {
    let y3 = stack.pop(), x3 = stack.pop();
    if (x3 < 0 || y3 < 0 || x3 >= cols || y3 >= rows) continue;
    let i3 = y3 * cols + x3;
    seen[i3] || (cells[i3] || null) !== target || (seen[i3] = 1, color ? cells[i3] = color : delete cells[i3], stack.push(x3 + 1, y3, x3 - 1, y3, x3, y3 + 1, x3, y3 - 1));
  }
}
function drawPixels(ctx, item, k3, ox, oy, resolveColor) {
  let { cols, cell, cells } = item, px = (v3) => Math.round(v3);
  for (let key2 in cells) {
    let i3 = +key2, x3 = i3 % cols, y3 = Math.floor(i3 / cols), x0 = px((item.x + x3 * cell - ox) * k3), y0 = px((item.y + y3 * cell - oy) * k3), x1 = px((item.x + (x3 + 1) * cell - ox) * k3), y1 = px((item.y + (y3 + 1) * cell - oy) * k3);
    ctx.fillStyle = resolveColor(cells[key2]), ctx.fillRect(x0, y0, Math.max(1, x1 - x0), Math.max(1, y1 - y0));
  }
}
function resampleCells(item, cols, rows) {
  let out = {};
  for (let key2 in item.cells) {
    let i3 = +key2, x3 = i3 % item.cols, y3 = Math.floor(i3 / item.cols), x0 = Math.floor(x3 * cols / item.cols), x1 = Math.max(x0 + 1, Math.ceil((x3 + 1) * cols / item.cols)), y0 = Math.floor(y3 * rows / item.rows), y1 = Math.max(y0 + 1, Math.ceil((y3 + 1) * rows / item.rows));
    for (let ny = y0; ny < Math.min(y1, rows); ny++)
      for (let nx = x0; nx < Math.min(x1, cols); nx++) out[ny * cols + nx] = item.cells[key2];
  }
  return out;
}
function pixelPng(item, factor, resolveColor) {
  let c3 = document.createElement("canvas");
  c3.width = item.cols * factor, c3.height = item.rows * factor;
  let ctx = c3.getContext("2d");
  ctx.imageSmoothingEnabled = !1;
  for (let key2 in item.cells) {
    let i3 = +key2;
    ctx.fillStyle = resolveColor(item.cells[key2]), ctx.fillRect(i3 % item.cols * factor, Math.floor(i3 / item.cols) * factor, factor, factor);
  }
  return new Promise((res) => c3.toBlob((b3) => {
    c3.width = c3.height = 0, res(b3);
  }, "image/png"));
}
function withOpacity(color, opacity) {
  if (color === "auto" || opacity >= 100) return color;
  let m3 = /^#([0-9a-f]{6})$/i.exec(color);
  return m3 ? `#${m3[1]}${Math.round(opacity / 100 * 255).toString(16).padStart(2, "0")}` : color;
}
function parseRGBA(c3) {
  if (!c3 || c3 === "auto") return null;
  let h3 = /^#([0-9a-f]{3,8})$/i.exec(c3);
  if (h3) {
    let v3 = h3[1];
    v3.length === 3 && (v3 = v3.split("").map((x3) => x3 + x3).join("")), v3.length === 6 && (v3 += "ff");
    let n3 = parseInt(v3, 16);
    return [n3 >>> 24 & 255, n3 >>> 16 & 255, n3 >>> 8 & 255, (n3 & 255) / 255];
  }
  let m3 = /^rgba?\(([^)]+)\)$/i.exec(c3);
  if (m3) {
    let p3 = m3[1].split(",").map((x3) => parseFloat(x3));
    return [p3[0], p3[1], p3[2], p3.length > 3 ? p3[3] : 1];
  }
  return null;
}
function toHex([r4, g3, b3, a3 = 1]) {
  let h3 = (v3) => Math.max(0, Math.min(255, Math.round(v3))).toString(16).padStart(2, "0");
  return `#${h3(r4)}${h3(g3)}${h3(b3)}${a3 >= 1 ? "" : h3(a3 * 255)}`;
}
var mixRGBA = (x3, y3, t3) => x3.map((v3, i3) => v3 * (1 - t3) + y3[i3] * t3);
function blendCells(cells, item, cx, cy, size, strength) {
  let { cols, rows } = item, h3 = Math.floor((size - 1) / 2), src = { ...cells };
  for (let y3 = cy - h3; y3 < cy - h3 + size; y3++)
    for (let x3 = cx - h3; x3 < cx - h3 + size; x3++) {
      if (x3 < 0 || y3 < 0 || x3 >= cols || y3 >= rows) continue;
      let cur = parseRGBA(src[y3 * cols + x3]);
      if (!cur) continue;
      let sum = [0, 0, 0], n3 = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        let nx = x3 + dx, ny = y3 + dy;
        if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
        let c3 = parseRGBA(src[ny * cols + nx]);
        c3 && (sum = [sum[0] + c3[0], sum[1] + c3[1], sum[2] + c3[2]], n3++);
      }
      if (n3 < 2) continue;
      let avg = [sum[0] / n3, sum[1] / n3, sum[2] / n3, cur[3]];
      cells[y3 * cols + x3] = toHex(mixRGBA(cur, avg, strength));
    }
}
function shadeCells(cells, item, cx, cy, size, amount) {
  let { cols, rows } = item, h3 = Math.floor((size - 1) / 2), up = amount > 0, k3 = Math.min(1, Math.abs(amount));
  for (let y3 = cy - h3; y3 < cy - h3 + size; y3++)
    for (let x3 = cx - h3; x3 < cx - h3 + size; x3++) {
      if (x3 < 0 || y3 < 0 || x3 >= cols || y3 >= rows) continue;
      let c3 = parseRGBA(cells[y3 * cols + x3]);
      if (!c3) continue;
      let [hh, ss, ll] = rgbToHsl(c3[0], c3[1], c3[2]), nl = up ? ll + (1 - ll) * k3 * 0.55 : ll - ll * k3 * 0.55, ns = Math.max(0, ss * (1 - k3 * k3 * 0.5)), [r4, g3, b3] = hslToRgb(hh, ns, Math.max(0, Math.min(1, nl)));
      cells[y3 * cols + x3] = toHex([r4, g3, b3, c3[3]]);
    }
}
function replaceColor(cells, item, cx, cy, color) {
  let from = cells[cy * item.cols + cx] || null;
  for (let key2 in cells)
    (cells[key2] || null) === from && (color ? cells[key2] = color : delete cells[key2]);
}
function shapeCells(kind, a3, b3, filled) {
  let [x0, y0] = a3, [x1, y1] = b3;
  if (kind === "line") return lineCells(a3, b3);
  let out = [], lo = [Math.min(x0, x1), Math.min(y0, y1)], hi = [Math.max(x0, x1), Math.max(y0, y1)];
  if (kind === "rect") {
    for (let x3 = lo[0]; x3 <= hi[0]; x3++) for (let y3 = lo[1]; y3 <= hi[1]; y3++)
      (filled || x3 === lo[0] || x3 === hi[0] || y3 === lo[1] || y3 === hi[1]) && out.push([x3, y3]);
    return out;
  }
  let rx = (hi[0] - lo[0]) / 2, ry = (hi[1] - lo[1]) / 2, mx = lo[0] + rx, my = lo[1] + ry;
  for (let x3 = lo[0]; x3 <= hi[0]; x3++) for (let y3 = lo[1]; y3 <= hi[1]; y3++) {
    let d3 = ((x3 - mx) / (rx || 0.5)) ** 2 + ((y3 - my) / (ry || 0.5)) ** 2;
    (filled ? d3 <= 1.05 : d3 <= 1.15 && d3 >= 0.55) && out.push([x3, y3]);
  }
  return out;
}
var alphaCache = /* @__PURE__ */ new WeakMap();
function alphaOf(canvas) {
  if (!canvas) return null;
  let a3 = alphaCache.get(canvas);
  if (a3) return a3;
  let d3 = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
  a3 = { w: canvas.width, h: canvas.height, v: new Float32Array(canvas.width * canvas.height) };
  for (let i3 = 0; i3 < a3.v.length; i3++) a3.v[i3] = d3[i3 * 4 + 3] / 255;
  return alphaCache.set(canvas, a3), a3;
}
function textureCells(cells, item, cx, cy, size, brushId, color, strength, rand) {
  let brush = getBrush(brushId), shape = alphaOf(shapeCanvas(brush)), grain = brush.grain ? alphaOf(grainMask(brush)) : null, r4 = Math.max(0.5, size / 2), { cols, rows } = item;
  for (let y3 = Math.ceil(cy - r4); y3 <= cy + r4; y3++)
    for (let x3 = Math.ceil(cx - r4); x3 <= cx + r4; x3++) {
      if (x3 < 0 || y3 < 0 || x3 >= cols || y3 >= rows) continue;
      let u3 = (x3 - cx) / (2 * r4) + 0.5, v3 = (y3 - cy) / (2 * r4) + 0.5;
      if (u3 < 0 || v3 < 0 || u3 >= 1 || v3 >= 1) continue;
      let cover = shape ? shape.v[Math.floor(v3 * shape.h) * shape.w + Math.floor(u3 * shape.w)] : 1;
      if (grain) {
        let gx = (x3 % grain.w + grain.w) % grain.w, gy = (y3 % grain.h + grain.h) % grain.h;
        cover *= grain.v[gy * grain.w + gx];
      }
      cover *= strength, !(cover <= 0.02) && rand() < cover && (cells[y3 * cols + x3] = overCell(cells[y3 * cols + x3], color));
    }
}
function aggregateCells(cells, item, cx, cy, size, opts, rand) {
  let { cols, rows } = item, { strength = 0.4, prismatic = 0.3, mode = "auto", secondary = "#00b8a9", base } = opts, h3 = Math.floor((size - 1) / 2), src = { ...cells }, secRGB = parseRGBA(secondary) || [0, 184, 169, 1];
  for (let y3 = cy - h3; y3 < cy - h3 + size; y3++)
    for (let x3 = cx - h3; x3 < cx - h3 + size; x3++) {
      if (x3 < 0 || y3 < 0 || x3 >= cols || y3 >= rows) continue;
      let cur = parseRGBA(src[y3 * cols + x3] === void 0 ? base : src[y3 * cols + x3]);
      if (!cur) continue;
      let out = cur, [hh, ss, ll] = rgbToHsl(cur[0], cur[1], cur[2]), jitter = (rand() - 0.5) * 2 * strength, [r23, g22, b23] = hslToRgb(hh, Math.max(0, Math.min(1, ss * (1 + jitter * 0.5))), Math.max(0, Math.min(1, ll + jitter * 0.28)));
      if (out = [r23, g22, b23, cur[3]], prismatic > 0) {
        let tint = null;
        if (mode === "secondary") tint = secRGB;
        else if (mode === "gradient") {
          let t3 = (x3 - (cx - h3)) / Math.max(1, size - 1);
          tint = [cur[0] + (secRGB[0] - cur[0]) * t3, cur[1] + (secRGB[1] - cur[1]) * t3, cur[2] + (secRGB[2] - cur[2]) * t3, cur[3]];
        } else if (mode === "nearby") {
          let pick = [];
          for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
            let c3 = parseRGBA(src[(y3 + dy) * cols + (x3 + dx)]);
            c3 && pick.push(c3);
          }
          tint = pick.length ? pick[Math.floor(rand() * pick.length)] : null;
        } else {
          let shift = (rand() - 0.5) * 2 * prismatic * 45, [r32, g3, b3] = hslToRgb((hh + shift + 360) % 360, Math.min(1, ss + 0.15), ll);
          tint = [r32, g3, b3, cur[3]];
        }
        if (tint) {
          let t3 = prismatic * (0.12 + rand() * 0.45);
          out = [out[0] + (tint[0] - out[0]) * t3, out[1] + (tint[1] - out[1]) * t3, out[2] + (tint[2] - out[2]) * t3, out[3]];
        }
      }
      cells[y3 * cols + x3] = toHex(out);
    }
}
var TEXTURES = [
  ["grit", "Grit"],
  ["haze", "Haze"],
  ["cracks", "Cracks"],
  ["dither", "Dither"]
], BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5]
].flat().map((v3) => (v3 + 0.5) / 16);
function textureFxCells(cells, item, cx, cy, size, opts, rand, state) {
  let { cols, rows } = item, { type = "grit", color = "#000000", strength = 0.5 } = opts, r4 = Math.max(1, size / 2), rgba = parseRGBA(color) || [0, 0, 0, 1], put = (x3, y3, c3, alpha) => {
    if (x3 < 0 || y3 < 0 || x3 >= cols || y3 >= rows) return;
    let i3 = y3 * cols + x3, cur = parseRGBA(cells[i3]);
    if (!cur) {
      if (alpha < 0.02) return;
      cells[i3] = toHex([c3[0], c3[1], c3[2], Math.min(1, alpha)]);
      return;
    }
    let a3 = Math.min(1, alpha);
    cells[i3] = toHex([cur[0] + (c3[0] - cur[0]) * a3, cur[1] + (c3[1] - cur[1]) * a3, cur[2] + (c3[2] - cur[2]) * a3, Math.max(cur[3], a3 * 0.6 + cur[3] * 0.4)]);
  };
  if (type === "cracks") {
    (!state.crack || rand() < 0.03) && (state.crack = { x: cx, y: cy, dir: rand() * Math.PI * 2, branch: 0 });
    let c3 = state.crack, steps = Math.max(2, Math.round(r4 * (0.8 + strength)));
    for (let i3 = 0; i3 < steps; i3++)
      if (c3.dir += (rand() - 0.5) * 0.7, c3.x += Math.cos(c3.dir), c3.y += Math.sin(c3.dir), Math.hypot(c3.x - cx, c3.y - cy) > r4 && (c3.dir = Math.atan2(cy - c3.y, cx - c3.x) + (rand() - 0.5) * 0.8, c3.x += Math.cos(c3.dir) * 2, c3.y += Math.sin(c3.dir) * 2), put(Math.round(c3.x), Math.round(c3.y), rgba, 0.55 + strength * 0.45), rand() < strength * 0.25) {
        let bd = c3.dir + (rand() < 0.5 ? 1.2 : -1.2);
        for (let j3 = 1; j3 <= 2 + Math.round(rand() * 2); j3++)
          put(Math.round(c3.x + Math.cos(bd) * j3), Math.round(c3.y + Math.sin(bd) * j3), rgba, 0.35 * strength);
      }
    return;
  }
  for (let y3 = Math.ceil(cy - r4); y3 <= cy + r4; y3++)
    for (let x3 = Math.ceil(cx - r4); x3 <= cx + r4; x3++) {
      let d3 = Math.hypot(x3 - cx, y3 - cy) / r4;
      if (d3 > 1) continue;
      let fall = 1 - d3 * d3;
      type === "grit" ? rand() < strength * fall * 0.35 && put(x3, y3, rgba, 0.35 + rand() * 0.65) : type === "haze" ? put(x3, y3, rgba, strength * fall * 0.18) : type === "dither" && BAYER[(y3 % 4 + 4) % 4 * 4 + (x3 % 4 + 4) % 4] < strength * fall && put(x3, y3, rgba, 1);
    }
}
function softenCells(cells, item, cx, cy, size, opts) {
  let { cols, rows } = item, { target, strength = 0.5, tolerance = 0.5 } = opts, tgt = parseRGBA(target), h3 = Math.floor((size - 1) / 2), src = { ...cells }, dist = (a3, b3) => Math.sqrt(((a3[0] - b3[0]) ** 2 + (a3[1] - b3[1]) ** 2 + (a3[2] - b3[2]) ** 2) / 3) / 255;
  for (let y3 = cy - h3; y3 < cy - h3 + size; y3++)
    for (let x3 = cx - h3; x3 < cx - h3 + size; x3++) {
      if (x3 < 0 || y3 < 0 || x3 >= cols || y3 >= rows) continue;
      let cur = parseRGBA(src[y3 * cols + x3]);
      if (!cur) continue;
      let near = tgt ? Math.max(0, 1 - dist(cur, tgt) / Math.max(0.05, tolerance)) : 1;
      if (near <= 0) continue;
      let sum = [0, 0, 0], w3 = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        let c3 = parseRGBA(src[(y3 + dy) * cols + (x3 + dx)]);
        if (!c3) continue;
        let wn = tgt ? Math.max(0.05, 1 - dist(c3, tgt) / Math.max(0.05, tolerance)) : 1;
        sum = [sum[0] + c3[0] * wn, sum[1] + c3[1] * wn, sum[2] + c3[2] * wn], w3 += wn;
      }
      if (w3 <= 0) continue;
      let avg = [sum[0] / w3, sum[1] / w3, sum[2] / w3], t3 = strength * near, out = [cur[0] + (avg[0] - cur[0]) * t3, cur[1] + (avg[1] - cur[1]) * t3, cur[2] + (avg[2] - cur[2]) * t3, cur[3]];
      tgt && (out = [out[0] + (tgt[0] - out[0]) * t3 * 0.35, out[1] + (tgt[1] - out[1]) * t3 * 0.35, out[2] + (tgt[2] - out[2]) * t3 * 0.35, cur[3]]), cells[y3 * cols + x3] = toHex(out);
    }
}
function textureArea(cells, item, cx, cy, opts, rand) {
  let { cols, rows } = item, target = cells[cy * cols + cx] || null, seen = new Uint8Array(cols * rows), stack = [cx, cy], area = [];
  for (; stack.length; ) {
    let y3 = stack.pop(), x3 = stack.pop();
    if (x3 < 0 || y3 < 0 || x3 >= cols || y3 >= rows) continue;
    let i3 = y3 * cols + x3;
    seen[i3] || (cells[i3] || null) !== target || (seen[i3] = 1, area.push([x3, y3]), stack.push(x3 + 1, y3, x3 - 1, y3, x3, y3 + 1, x3, y3 - 1));
  }
  let state = {}, step = Math.max(2, Math.round(Math.sqrt(area.length) / 6));
  for (let i3 = 0; i3 < area.length; i3 += step) {
    let [x3, y3] = area[i3];
    textureFxCells(cells, item, x3, y3, Math.max(3, step * 2), opts, rand, state);
  }
  return area.length;
}

// src/brushes/engine.js
function mulberry32(a3) {
  return () => {
    a3 |= 0, a3 = a3 + 1831565813 | 0;
    let t3 = Math.imul(a3 ^ a3 >>> 15, 1 | a3);
    return t3 = t3 + Math.imul(t3 ^ t3 >>> 7, 61 | t3) ^ t3, ((t3 ^ t3 >>> 14) >>> 0) / 4294967296;
  };
}
var DEG = Math.PI / 180, DabWalker = class {
  constructor(item, brush, totalLength = 0) {
    this.item = item, this.b = brush, this.rand = mulberry32(item.seed || 1), this.total = totalLength, this.sm = null, this.travel = 0, this.nextAt = 0, this.dir = 0, this.count = 0;
  }
  pressureAt(p3) {
    return this.item.pressure ? p3 : 0.75;
  }
  sizeFactor(p3, dist) {
    var _a2;
    let b3 = this.b, sp = b3.sizePressure || 0, f3 = sp >= 0 ? 1 - sp + sp * p3 : 1 + sp * p3, min = b3.minSizeRatio || 0;
    return f3 = min + (1 - min) * f3, f3 *= this.taper(dist, (_a2 = b3.taperSize) != null ? _a2 : 0.8), Math.max(0.02, f3);
  }
  taper(dist, amount) {
    let b3 = this.b, size = this.item.size, f3 = 1;
    if (this.item.closed) return f3;
    if (b3.taperStart) {
      let len = b3.taperStart * size * 10;
      dist < len && (f3 *= 1 - amount * (1 - dist / len));
    }
    if (b3.taperEnd && this.total) {
      let len = b3.taperEnd * size * 10, left = this.total - dist;
      left < len && (f3 *= 1 - amount * (1 - Math.max(0, left) / len));
    }
    return f3;
  }
  /** p: [x, y, pressure?]. Returns new dabs. */
  feed(pt) {
    var _a2;
    let b3 = this.b;
    if (!pt || !Number.isFinite(pt[0]) || !Number.isFinite(pt[1])) return [];
    let s3 = Math.min(0.9, (_a2 = b3.streamline) != null ? _a2 : 0.35), raw = { x: pt[0], y: pt[1], p: this.pressureAt(Number.isFinite(pt[2]) ? pt[2] : 0.5) };
    if (!this.sm)
      return this.sm = { ...raw }, this.emit(this.sm, 0);
    let prev = this.sm, cur = {
      x: prev.x + (raw.x - prev.x) * (1 - s3),
      y: prev.y + (raw.y - prev.y) * (1 - s3),
      p: prev.p + (raw.p - prev.p) * 0.5
    };
    this.sm = cur;
    let dx = cur.x - prev.x, dy = cur.y - prev.y, len = Math.hypot(dx, dy);
    if (!(len >= 1e-6)) return [];
    Number.isFinite(this.nextAt) || (this.nextAt = this.travel + 0.5), this.dir = Math.atan2(dy, dx);
    let out = [], pos = 0, guard = 0;
    for (; this.travel + (len - pos) >= this.nextAt && guard++ < 5e3; ) {
      let need = this.nextAt - this.travel;
      pos += need, this.travel = this.nextAt;
      let t3 = pos / len, q2 = { x: prev.x + dx * t3, y: prev.y + dy * t3, p: prev.p + (cur.p - prev.p) * t3 };
      out.push(...this.emit(q2, this.travel));
    }
    return this.travel += len - pos, out;
  }
  emit(q2, dist) {
    var _a2, _b2;
    let b3 = this.b, r4 = this.rand, item = this.item, base = (Number.isFinite(item.size) && item.size > 0 ? item.size : 4) * this.sizeFactor(q2.p, dist), step = ((_a2 = b3.spacing) != null ? _a2 : 0.1) * base;
    if ((!Number.isFinite(step) || step < 0.15) && (step = 0.15), this.nextAt = dist + step, this.count++ > 6e4)
      return this.nextAt = 1 / 0, [];
    let n3 = Math.max(1, Math.round((b3.count || 1) + (b3.countJitter ? r4() * b3.countJitter * (b3.count || 1) : 0))), dabs = [], fp = b3.flowPressure || 0, op = b3.opacityPressure || 0;
    for (let k3 = 0; k3 < n3; k3++) {
      let d3 = base * (1 - (b3.sizeJitter || 0) * r4()), alpha = ((_b2 = b3.flow) != null ? _b2 : 1) * (fp >= 0 ? 1 - fp + fp * q2.p : 1 + fp * q2.p) * (1 - op + op * q2.p);
      alpha *= 1 - (b3.opacityJitter || 0) * r4(), alpha *= this.taper(dist, b3.taperOpacity || 0);
      let lat = (b3.jitterLateral || 0) * (r4() * 2 - 1) * base, lon = (b3.jitterLinear || 0) * (r4() * 2 - 1) * base, nx = -Math.sin(this.dir), ny = Math.cos(this.dir), angle = (b3.angle || 0) * DEG + (b3.rotationFollow || 0) * this.dir + (r4() * 2 - 1) * Math.PI * (b3.rotationJitter || 0);
      dabs.push({
        x: q2.x + nx * lat + Math.cos(this.dir) * lon,
        y: q2.y + ny * lat + Math.sin(this.dir) * lon,
        d: Math.max(0.05, d3),
        a: angle,
        alpha: Math.max(0, Math.min(1, alpha)),
        fx: b3.flipX && r4() < 0.5 ? -1 : 1,
        fy: b3.flipY && r4() < 0.5 ? -1 : 1
      });
    }
    return dabs;
  }
};
function pathLength(points, streamline) {
  let len = 0, sx = null, sy = null, s3 = Math.min(0.9, streamline != null ? streamline : 0.35);
  for (let p3 of points) {
    if (sx === null) {
      sx = p3[0], sy = p3[1];
      continue;
    }
    let nx = sx + (p3[0] - sx) * (1 - s3), ny = sy + (p3[1] - sy) * (1 - s3);
    len += Math.hypot(nx - sx, ny - sy), sx = nx, sy = ny;
  }
  return len;
}
function allDabs(item, brush) {
  let w3 = new DabWalker(item, brush, pathLength(item.points, brush.streamline)), out = [];
  if (item.points.forEach((p3, i3) => {
    for (let d3 of w3.feed(p3))
      d3.pi = i3, out.push(d3);
  }), out.length === 0 && item.points.length) {
    let p3 = item.points[0];
    w3.sm = null, out.push(...w3.feed(p3));
  }
  return out;
}
function drawColoredDabs(ctx, dabs, brush, colors, k3, ox, oy) {
  var _a2;
  let groups = /* @__PURE__ */ new Map();
  for (let d3 of dabs) {
    let c3 = colors[(_a2 = d3.pi) != null ? _a2 : 0];
    c3 && (groups.has(c3) || groups.set(c3, []), groups.get(c3).push(d3));
  }
  for (let [c3, list] of groups) drawDabs(ctx, list, brush, c3, k3, ox, oy);
}
function drawDabs(ctx, dabs, brush, color, k3, ox, oy) {
  var _a2;
  let shape = tintedShape(brush, color), sw = shape.width, sh = shape.height, roundness = (_a2 = brush.roundness) != null ? _a2 : 1;
  for (let d3 of dabs) {
    let cos = Math.cos(d3.a), sin = Math.sin(d3.a), sx = d3.fx * d3.d / sw, sy = d3.fy * d3.d * roundness / sw;
    ctx.globalAlpha = d3.alpha, ctx.setTransform(k3 * cos * sx, k3 * sin * sx, -k3 * sin * sy, k3 * cos * sy, (d3.x - ox) * k3, (d3.y - oy) * k3), ctx.drawImage(shape, -sw / 2, -sh / 2);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.globalAlpha = 1;
}
function applyGrain(ctx, brush, k3, ox, oy, w3, h3) {
  let mask = grainMask(brush);
  if (!mask) return;
  let pat = ctx.createPattern(mask, "repeat");
  if (!pat) return;
  let s3 = 110 * (brush.grainScale || 1) * k3 / mask.width;
  pat.setTransform && pat.setTransform(new DOMMatrix([s3, 0, 0, s3, -ox * k3, -oy * k3])), ctx.save(), ctx.globalCompositeOperation = "destination-in", ctx.fillStyle = pat, ctx.fillRect(0, 0, w3, h3), ctx.restore();
}
var IS_MOBILE = typeof document < "u" && !!(document.body && document.body.classList && document.body.classList.contains("is-mobile")), MAX_SIDE = IS_MOBILE ? 3072 : 4096, MAX_AREA = IS_MOBILE ? 35e5 : 6e6;
function rasterizeStroke(item, brush, color, scale) {
  let dabs = allDabs(item, brush);
  if (!dabs.length) return null;
  let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
  for (let d3 of dabs) {
    let r4 = d3.d * 0.75 + 1;
    d3.x - r4 < x0 && (x0 = d3.x - r4), d3.y - r4 < y0 && (y0 = d3.y - r4), d3.x + r4 > x1 && (x1 = d3.x + r4), d3.y + r4 > y1 && (y1 = d3.y + r4);
  }
  let w3 = x1 - x0, h3 = y1 - y0, k3 = Math.max(0.25, scale);
  k3 = Math.min(k3, MAX_SIDE / w3, MAX_SIDE / h3, Math.sqrt(MAX_AREA / (w3 * h3)));
  let W2 = Math.max(1, Math.ceil(w3 * k3)), H2 = Math.max(1, Math.ceil(h3 * k3)), c3 = document.createElement("canvas");
  c3.width = W2, c3.height = H2;
  let ctx = c3.getContext("2d");
  return item.colors ? drawColoredDabs(ctx, dabs, brush, item.colors, k3, x0, y0) : drawDabs(ctx, dabs, brush, color, k3, x0, y0), brush.wet && wetBleed(ctx, item, brush, dabs, k3, x0, y0, W2, H2), applyGrain(ctx, brush, k3, x0, y0, W2, H2), { canvas: c3, x: x0, y: y0, w: W2 / k3, h: H2 / k3, k: k3 };
}
var bleedNoise = null;
function bleedField() {
  return bleedNoise || (bleedNoise = tileNoise(256, 4, 41, 6)), bleedNoise;
}
function blur1(a3, w3, h3, r4) {
  if (r4 < 1) return a3;
  let tmp = new Float32Array(a3.length), R3 = Math.max(1, Math.round(r4 / 2)), inv = 1 / (2 * R3 + 1);
  for (let pass = 0; pass < 2; pass++) {
    for (let y3 = 0; y3 < h3; y3++) {
      let o3 = y3 * w3, acc = 0;
      for (let i3 = -R3; i3 <= R3; i3++) acc += a3[o3 + Math.min(w3 - 1, Math.max(0, i3))];
      for (let x3 = 0; x3 < w3; x3++)
        tmp[o3 + x3] = acc * inv, acc += a3[o3 + Math.min(w3 - 1, x3 + R3 + 1)] - a3[o3 + Math.max(0, x3 - R3)];
    }
    for (let x3 = 0; x3 < w3; x3++) {
      let acc = 0;
      for (let i3 = -R3; i3 <= R3; i3++) acc += tmp[Math.min(h3 - 1, Math.max(0, i3)) * w3 + x3];
      for (let y3 = 0; y3 < h3; y3++)
        a3[y3 * w3 + x3] = acc * inv, acc += tmp[Math.min(h3 - 1, y3 + R3 + 1) * w3 + x3] - tmp[Math.max(0, y3 - R3) * w3 + x3];
    }
  }
  return a3;
}
var smooth = (e0, e1, x3) => {
  let t3 = Math.max(0, Math.min(1, (x3 - e0) / (e1 - e0)));
  return t3 * t3 * (3 - 2 * t3);
};
function wetBleed(ctx, item, brush, dabs, k3, ox, oy, W2, H2) {
  var _a2, _b2, _c, _d, _e, _f;
  let wetDef = brush.wet, wetness = Math.max(0, Math.min(1, (_a2 = item.wet) != null ? _a2 : 0.5));
  if (!wetDef || wetness <= 0 || W2 * H2 > 4e6) return;
  let pressure = 0, np = 0;
  for (let d4 of dabs)
    pressure += (_b2 = d4.p) != null ? _b2 : 0.5, np++;
  if (!np && item.points) for (let q2 of item.points)
    pressure += Number.isFinite(q2[2]) ? q2[2] : 0.5, np++;
  pressure = np ? pressure / np : 0.5;
  let water = wetness * (0.6 + 0.8 * pressure), size = Math.max(1, item.size || 10), rd = Math.max(2, Math.min(90, ((_c = wetDef.bleed) != null ? _c : 0.5) * water * size * k3 * 0.9)), img = ctx.getImageData(0, 0, W2, H2), d3 = img.data, n3 = W2 * H2, A3 = new Float32Array(n3), Rc = new Float32Array(n3), Gc = new Float32Array(n3), Bc = new Float32Array(n3);
  for (let i3 = 0, j3 = 0; i3 < n3; i3++, j3 += 4)
    A3[i3] = d3[j3 + 3] / 255, Rc[i3] = d3[j3] / 255, Gc[i3] = d3[j3 + 1] / 255, Bc[i3] = d3[j3 + 2] / 255;
  let Ab = blur1(A3.slice(), W2, H2, rd), Rb = blur1(Rc.slice(), W2, H2, rd), Gb = blur1(Gc.slice(), W2, H2, rd), Bb = blur1(Bc.slice(), W2, H2, rd), field = bleedField(), tile = Math.max(24, 110 * (brush.grainScale || 1) * k3 * 0.9), seedX = (item.seed || 1) * 7919 & 255, seedY = (item.seed || 1) * 104729 & 255, sample = (x3, y3, t3, sx, sy) => {
    let u3 = ((x3 + ox * k3) / t3 * 256 + sx) % 256, v3 = ((y3 + oy * k3) / t3 * 256 + sy) % 256;
    return field[((v3 | 0) & 255) * 256 + ((u3 | 0) & 255)];
  }, noiseAt = (x3, y3) => 0.65 * sample(x3, y3, tile, seedX, seedY) + 0.35 * sample(x3, y3, tile * 0.31, seedY, seedX), bleedAmt = ((_d = wetDef.bleed) != null ? _d : 0.5) * water, A22 = new Float32Array(n3), NZ = new Float32Array(n3);
  for (let y3 = 0, i3 = 0; y3 < H2; y3++)
    for (let x3 = 0; x3 < W2; x3++, i3++) {
      let nz = noiseAt(x3, y3);
      NZ[i3] = nz;
      let thr = 0.04 + 0.42 * nz, wash = smooth(thr, thr + 0.22, Ab[i3] * (1.6 + bleedAmt * 1.6)) * (0.3 + 0.35 * (1 - nz)) * Math.min(1, 0.4 + bleedAmt);
      A22[i3] = Math.max(A3[i3], wash);
    }
  let deep = blur1(A22.slice(), W2, H2, rd * 1.2), cover = new Float32Array(n3);
  for (let i3 = 0; i3 < n3; i3++) cover[i3] = smooth(0.02, 0.1, A22[i3]);
  let near = blur1(cover.slice(), W2, H2, Math.max(1.5, rd * 0.35)), edgeAmt = ((_e = wetDef.edge) != null ? _e : 0.6) * (0.5 + 0.5 * water), thinAmt = ((_f = wetDef.thin) != null ? _f : 0.3) * Math.min(1, water);
  for (let i3 = 0, j3 = 0; i3 < n3; i3++, j3 += 4) {
    let a22 = A22[i3];
    if (a22 <= 2e-3) {
      d3[j3] = d3[j3 + 1] = d3[j3 + 2] = d3[j3 + 3] = 0;
      continue;
    }
    let inside = smooth(0.25, 0.8, deep[i3]), rim = Math.max(0, cover[i3] - near[i3]) * 2.2, a3 = a22 * (1 - thinAmt * inside * (0.7 + 0.3 * NZ[i3]));
    a3 += edgeAmt * 0.65 * Math.min(1, rim) * (0.55 + 0.45 * NZ[i3]), a3 = Math.min(1, a3);
    let r4, g3, b3;
    A3[i3] > 0.03 ? (r4 = Rc[i3] / A3[i3], g3 = Gc[i3] / A3[i3], b3 = Bc[i3] / A3[i3]) : Ab[i3] > 1e-3 ? (r4 = Rb[i3] / Ab[i3], g3 = Gb[i3] / Ab[i3], b3 = Bb[i3] / Ab[i3]) : r4 = g3 = b3 = 0, d3[j3] = Math.round(Math.min(1, r4) * a3 * 255), d3[j3 + 1] = Math.round(Math.min(1, g3) * a3 * 255), d3[j3 + 2] = Math.round(Math.min(1, b3) * a3 * 255), d3[j3 + 3] = Math.round(a3 * 255);
  }
  ctx.putImageData(img, 0, 0);
}
var LIN = new Float32Array(256);
for (let i3 = 0; i3 < 256; i3++) {
  let c3 = i3 / 255;
  LIN[i3] = c3 <= 0.04045 ? c3 / 12.92 : Math.pow((c3 + 0.055) / 1.055, 2.4);
}
var SRGB = new Uint8ClampedArray(4097);
for (let i3 = 0; i3 <= 4096; i3++) {
  let l3 = i3 / 4096;
  SRGB[i3] = Math.round((l3 <= 31308e-7 ? l3 * 12.92 : 1.055 * Math.pow(l3, 1 / 2.4) - 0.055) * 255);
}
var ks = (R3) => (R3 = Math.max(4e-3, Math.min(0.996, R3)), (1 - R3) * (1 - R3) / (2 * R3)), fromKs = (K2) => 1 + K2 - Math.sqrt(K2 * K2 + 2 * K2), pigScratch = null, PIGMENT_MIX = 0.35;
function pigmentComposite(ctx, src, dx, dy, dw, dh, alpha = 1) {
  let W2 = ctx.canvas.width, H2 = ctx.canvas.height, x0 = Math.max(0, Math.floor(dx)), y0 = Math.max(0, Math.floor(dy)), x1 = Math.min(W2, Math.ceil(dx + dw)), y1 = Math.min(H2, Math.ceil(dy + dh)), w3 = x1 - x0, h3 = y1 - y0;
  if (w3 <= 0 || h3 <= 0 || alpha <= 0) return;
  pigScratch || (pigScratch = document.createElement("canvas")), (pigScratch.width < w3 || pigScratch.height < h3) && (pigScratch.width = Math.max(pigScratch.width, w3), pigScratch.height = Math.max(pigScratch.height, h3));
  let tctx = pigScratch.getContext("2d", { willReadFrequently: !0 });
  tctx.clearRect(0, 0, w3, h3), tctx.drawImage(src, dx - x0, dy - y0, dw, dh);
  let S4 = tctx.getImageData(0, 0, w3, h3).data, img = ctx.getImageData(x0, y0, w3, h3), d3 = img.data;
  for (let j3 = 0; j3 < S4.length; j3 += 4) {
    let as = S4[j3 + 3] / 255 * alpha;
    if (as <= 2e-3) continue;
    let ab = d3[j3 + 3] / 255, sa = 255 / Math.max(1, S4[j3 + 3]), rs = LIN[Math.min(255, Math.round(S4[j3] * sa))], gs = LIN[Math.min(255, Math.round(S4[j3 + 1] * sa))], bs = LIN[Math.min(255, Math.round(S4[j3 + 2] * sa))];
    if (ab <= 2e-3) {
      let ao2 = as;
      d3[j3] = Math.round(SRGB[Math.round(rs * 4096)] * ao2), d3[j3 + 1] = Math.round(SRGB[Math.round(gs * 4096)] * ao2), d3[j3 + 2] = Math.round(SRGB[Math.round(bs * 4096)] * ao2), d3[j3 + 3] = Math.round(ao2 * 255);
      continue;
    }
    let ba = 255 / Math.max(1, d3[j3 + 3]), rb = LIN[Math.min(255, Math.round(d3[j3] * ba))], gb = LIN[Math.min(255, Math.round(d3[j3 + 1] * ba))], bb = LIN[Math.min(255, Math.round(d3[j3 + 2] * ba))], ao = ab + as - ab * as, inv = 1 / ao, over = (cs, cb) => (cs * as + cb * ab * (1 - as)) * inv, r4 = over(rs, rb) * (1 - PIGMENT_MIX) + fromKs((ab * ks(rb) + as * ks(rs)) * inv) * PIGMENT_MIX, g3 = over(gs, gb) * (1 - PIGMENT_MIX) + fromKs((ab * ks(gb) + as * ks(gs)) * inv) * PIGMENT_MIX, b3 = over(bs, bb) * (1 - PIGMENT_MIX) + fromKs((ab * ks(bb) + as * ks(bs)) * inv) * PIGMENT_MIX;
    d3[j3] = Math.round(SRGB[Math.round(r4 * 4096)] * ao), d3[j3 + 1] = Math.round(SRGB[Math.round(g3 * 4096)] * ao), d3[j3 + 2] = Math.round(SRGB[Math.round(b3 * 4096)] * ao), d3[j3 + 3] = Math.round(ao * 255);
  }
  ctx.putImageData(img, x0, y0);
}

// node_modules/@fontsource/caveat/files/caveat-latin-400-normal.woff2
var caveat_latin_400_normal_default = "data:font/woff2;base64,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";

// node_modules/@fontsource/patrick-hand/files/patrick-hand-latin-400-normal.woff2
var patrick_hand_latin_400_normal_default = "data:font/woff2;base64,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";

// node_modules/@fontsource/permanent-marker/files/permanent-marker-latin-400-normal.woff2
var permanent_marker_latin_400_normal_default = "data:font/woff2;base64,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";

// node_modules/@fontsource/architects-daughter/files/architects-daughter-latin-400-normal.woff2
var architects_daughter_latin_400_normal_default = "data:font/woff2;base64,d09GMgABAAAAADNkAAwAAAAAWBwAADMQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAgUQRCAqBmSj5bwuDLgABNgIkA4ZYBCAFhBwHg1MMBxviRbMi2DgAoECPjaJUbs4RRZlclMl/lRDHGMccUmlplUZIabx6MTkTQyidg713z36tVEgX7On6nIP1TIyReC7PPz+O/9be9320GSeYCWxUApimOSkUOXRFV3fpDA9z69+ikq0ZMSpGrFgxVgwYGaNSlLQCsfJjcndWnhcm6rWKWf/O6kPvPCf7pa/0y9L09mDB9JMFmz+sIQAw/dJToB2HXQCQZnqSelw0BnY5YcfrgMOo91SGw7ENTubd/1Cvsc1d4lIPcPLm/9NZWgl76wByB1g0kaW78xFVeT3PpPy/HY3ItLuyLNtLYC8A/pkJ0OvTZ0pn1sq+24kcoIrwoA31gG26Ll6d4tvVEUkK2Bu0LmQ7KIcMYWqBSgRByAqvg3p2HpCL6luk7r8oKuKq+aLqft6q6cbvf6o6ldgGKe6NixWUtpRmo2gqOgj12iJBSPAS06GZszM6kjyvFyIUWS6/KBnd6zGabfuIvAoLULAuwSo7wxBAP+9qwDP9dvKzqADT6glgf3XOdco7HmxtA1qivaiwN/+XAy2bdaLtoFU+7iYVe7hrYRe0IwRI0wBut3gAUXPj0PqM2O5LIpLZ073em3vQRVyRUCQRKUSJIqNou1gioX75EtM/YoOdYuBpSxOxRfwuErTnuymf43NsFk7Tf+Y9xJM/ts9uu2z3tRWGKO/s3UkAUbjRFjJfkJxfuvIG8y2786vsrk+z65Z1+gEIrSQYROLRMTfUdkAxTOHxpEEBLAYDaA9CeElkXA/ijwDTjXowvJc/KDQmQgGbBQ2tEqh/OSAU6Ys0nrx4YsQRf4Ug2fMk3RVMgwIJpRc2tgU3P/RMbxiDMNkOjODCGDkZxHDu0bqUTs2B2RBr7kJ+FxOoQHZcXu+PI56v+bkluO+V9VQv00W4q7I8Vv2AYa5TPa2cinc6pkOwxrE69oxKZSj6vWySrKflZGmv8zE9r9TTIhuBYMwgjhyzk5zzBe5T1nbNCXO3n6kFIEESEIQOTSSZybmxAs5zoQCAFqlkiCR2zesvbLRMlcBkSsiyE/0k+GVLXrA/4Gi0TSx7AbSmiwg8t+EDoO+Ftp9jvIwt+WDOkcL1m8lNDEUFYwkABjHFHEGAgDIYcJLMWsGkFSCrLGfzhUI+lpeO3prO/S0ri9YEACo5DfnhAuCpBDkF9GLWiZyYNVwLyZ0plOLuMhP3mwYgBGf4+euPHs0zieCeVTCHPlKqgh2RlfOxOcD/VhfRYYzxbiu7joC1EIQYD9fjk+1c/DOc+LLriz0ALbHfGJxTXJvn7Xv0DYZgaXoVJSOEElImprqlcIs60gcNW8WqLwSclOn8c/z0ZsMdXoW1dL6TiPoqw9g0w7vMqfbS/llmYFSU5fXQCB9FwElgvc98xuSNIGjTwhgzYLAq2aQ1931/9MErkVBFe/dksk5CMguHDbEiuF2ZWcyXSmcHCnfySryL0XVjzPRxoEwTs9Pz92JbgLcqXoyl04WSSE5fn78MHI9VVaYwRfcBwJwkMbIEnwr3citB4EQnI7oNUnQPCrbZhG4up2zPZjxfPV1NW1mbIhcgrzw0w2jXAU/HPihD3uMrGws8bQkM0Jr5Stv1DngIITaTlGOVBlWAE0LSY242AwXkgU8iIEKUrN24mGhUUSX7fHDvG8jn782mZx+lNI3rUcNGOtEQPDOJ0UzPKZtW9uTzdxmZW+4p7X0xxkgWU+97fPLWCJFElsvQmFWL4ioC8vHfoNgIWiORnB426iA4bt5DUpQiZrACvMVlecsudRDYV3316lYIldlUZKeYm6uoTCEPdgEnRBLF2aMaN1cZNur+IAjTm+myLPk5nFPmrbiRmJL3YoRuBjAhvEx5Cg40IcD9BezffPv2+nAThl1NCyS3am/sG1zqkTlSH+fSPrtIQM7GTTusJzkks5Dn3Pr0ODOQUYmH/1/Qu7fPTIHd1ZbBUg3FpZvnxLjTsi1fmmGD1RFGu8osMzB4lFZnYyp4DmQt7Ar2VPOpSe5G+TiWdWiMWSzlvRTJuSfdEeTMsIayFS3z41ovp31djCwW05GhjUAyxhuqxqtSlj0JecOt1wCPCcmQ6xYif3hyQmLXDhGwtllllmHY45btPV6idoi0FaBWECS01fhy2DCiBtwCnSLveRl5K8eMURnAY+5M5HJc8zZ69Zvnvqm/JNPVB0Fgf3xlH0Dubo0ID7RVKI7BaotDBeyRAih+Z5iyuyWihk1jzKlSoWCXMULt6TZeDXy6xmYG2AcWIhQuHfD02iHIVUxLt33eOSe9CMEI9Qpue6qZNN8hrkue2ijLaTv0W1VfNi+dc5db9HKRSKHNjjsz4ca465vk+rzLXk3rELJGUo8a5W9Q73tzFBXt2jlGV/o8LZjToC+0tFBs1ZIUkQzZyMyqtqjPPUhM/cB48NHUZvQYGza7DEtgABYBv2SxqzlKw+kgyPRflLjbl710UHsaxfTvUMyw4a/gYK6o16+lE3bZkgkGB+h7WzyUJejPqUt17D6A4mYPDwLRUJlMwQ6xoo6t4mEB8KH/APcL2AptcCvAHbKmUxSyBfpQoitQjxCSnzsBEryqxi+pFvJZqcWK7Q7E0JI6JrOOXOYbk/Qqdr3FHgGUg6LcX+LU3jcH+c2JCVUYNtxG+Axuu3MCo015Re8qugjaQdrTMrbGGILuSJjFUq8CY55TjHEfzHUHbe94Rrbi0Tbu7VNYJXeHec48m7WbaIw5Zjpk7r2Av9KQnoGSc2HlwF6UlwGZe7m0lcj9Dv381zKc3Cy/NazA81XpAOS/M2bCxCaKqtvxYgPj7RnaPsGrsj59MgiCkw6fzlZ7iQSJ9INzA3tKoeA7v7w3s9seePQOJ5ksixmz2Aiv3ajdXqNocaKCEbSwMUGJ7tKxDzEInv5L6IcIxXcJRPLj22jPXS8TCd9fyRVj8G3mpVLrZyFh1ZhL5Oe8640XvHalxi0xmy07rcQcIU8fxOTmgCOhJSrq8cJC3LAYViJj3pREsHvOOwWNnmLlP2dkLR3birFM7fEWRS2Zp4s7hZZWiDu2IxF0hTe8wjvoyNWC2+UuTzWNGTZQmEbFVdsIG/CFczVNtEgl2emkV7LrIUZIXw+xy483KBoCvttmtYMbY45MlTqIh+0iS+OioegwvMkwr9UDgVYuO66dGTgaCtbf7mO+VS/gHdSQFc1BnDIR618cY+zqBXv4Yf3bfrGdbcp/X63xmWsGFjGCLxblN8x+bPUyxzX2KTvdcjwSBUG/TiyRkg59fTErci7VlxTOIPn+U/Yfxo0x0tE+dTjT+pWsC9c9Ce6czTo82YgXijv2LPj+a5CPCZm4AokZN/7QrS6+KXfU6nLXPjWmUQnel0boJ4R+Bbl7a0reW0/rYbzNHIazqnddGcO+b3ptNS9YiU5RZ2D9FwMYLxS4dfnKb/cNQW7zCj4OUFI2/5Vf9op7WqcISbiJ42pVW9xBLw6VpJkKlxuTfKkUpt+5yZ7rWdy2H2+u8bglEjPZevder7B6ImBNAkuAd/47yjHahdeDiMweDpjqOWcGRsKYVaHAdhxpr++35senIxWPI4mAdHqXAKeGLQ6MjzqMUGqdBX5xX3OJJtIjRGQRwZCGlKuHTSnr82N6A4DzvxkFeP7R4fNBC4l5DCcqKZXkQ8iIsKJxxJLWNtvSVeZ/WnPKqgigZSt47cIgHPCgFwiYmXFjfLu9RS5uMwOWQFLOPurcey9gyDADtPa0F3n1lHYXALdq6xPkyJGsRf1rTuoYAR+rZQ3Iv4PcvlzwhGdLJ4JujIKVCQi3VnYC0ajE/feRmaMPylTEhyFCFQGLwlF4FcBqKeyCsJvVt2KdH0upX/Wug0OFo8fqcCAhb9MJLV9pkj9lMCzsVTlj26x1TQaqLzzRqvYrGjh70J2ewBjXmiTL1P0tHiR0P3dj2PWxGqjSg7Foj5INXOO+T9WPWTMRSIe7PivwESGdIic17lF2L1W0sYz7GavwEeno5crfoCizRCz/xNO/C6Y9v4FxrwIcPSiCgHVk1uHGiDaO0Z+yh9m0erwALmk4hJzlsTWIfIG2COeL3J4+WARkRPPDfJGPQI9Qyx1oGnLjtiFaMgmUY9ULCG8VSJadSgCZcL4wNahoyC1GAdWMLakrTm+vfwFN6BHaz9Kmod5OhJ044YdVAdiCDfRdrlQ6OCNTtDoDHADDDqE4+jzad32oAU/q06yoxmohzH5DLwrrUwDfgEoXVN+5imAzkQBw7oNiUWYj8qTILm7jK3Fqyi5xXN4OAXwMvZM11LOOYYdCko2VM+Luy2WNrhunwBMkt+91MOwa5opI3sMfy7m+ytgK8HDjjBpd29lbRMD4yUBEDS7VeIgAD9ucaAaqgZFtvqr5Bu4MAU/EkHe8B2/2SzFRKdlnfdFfv8aB5flQJt+s1WOkW0YQJFYCP03Fngx74Xd8Ovyha5INqmwMdIFYFTiY1OI7jGLJytadbt1zaqJOdLbuPPjR8u1wc0W8zqzCGji/Ozsd2qdNG7RWeuPOm+5sNXUmS+XeAQTjUWPaF8aidT/x6WDX8KWZqGE+RtvjVgEgt6mSdRC3uQeorqlcpTls2CTg5Eh3TmJX3VdimJVKvZ7+fx7CJvNVkObhwS115bTUC5eVbWtvLGiTV7sP2qrnrl2LVtr6xMqtwBzNS+u7nk9z6uRUE0DKIlTJ3XDi41ev1s9ogztX5xxL0WXay0PhwpUz4drubN5ava3Oo1EgUHaqZthXtYUFVWmc68FShk92HsnC0PrBvLSchH6ELDOFWJg0Md6qKgm5/o7K0yRNmT9LEclxD5PniAT+iEtzVJVmst9cupkMyHfwbS5XtoZ25L1nLXZBhb18zLabDx+q+CT1MpaYLSc2ZLFoTSBAhl1bSUPiOqhzHQpzF8RHDnvdB4Wk/JsNFxdAOvR62loG3GKr51eYZtsXh9iSJjJOx8ywRWTaSZ23cuypY3xVhb2aSWnXPDWr/ErNLuleIg9Xmkm/VMhb9uMPN2GBW0TstJUlZMRnhKJvk2Sxh+RjyT7Dcixsu3ww6YysPwecwkug3/XTTTXkbOqOugp8APhJFmKlqpRy0OMOGnZrxowC5NvyPvh5MwCeEikfYquc1Equ8SoPsNuP3pmnpuymenrtmsrwfHV+PjYh5xILmQX8ff3bvHB4Ln2nBkTRm0c6KXQPsIza5Bq1OMwE4alfLNVDOV5EMA1dsSjua6NkcL3ZgVgsE1d+xl7dQuhh6BTcDpOFMbtPReJSUlwc9sq8P6oKffeF4eKSqjBtzFRIdDLSl2hPEoNx6MKM/AyM52c1EbwQVmHD+kzNpRhjIZ+2su2vMo6xqxSq8anWQdpVN6NVyAPhxskmQPq1jYR0pJE1h2DrTkQAyn/8du6L6TY99qD8NQjJopNG43bj6q1asF1FzwxJWBQsbqhSzWZFmXXSYY6xZrEp3FDxScBHOggSIHI5x1MPr7ntjVLGAMqsbXtUs1nTc3iX+wNMlaITdi9Qm7IQhkHBbZ0iTayy49jp4yHqFXNZ84zzoRkY7mn3pK/u4xTmWAdc0UYEk5tJiUkp596ZjvMZEFeXwZvvRln732kOA1PInWGYQqSUUSfUnUXjLry5AT9ZOGM3u/xz0eEBrIHTt6qheRrarGrJs90rjFWYSi9KgZNWcL7PFRRGOy7DGNvgzflZEB+F0IV8DUaBUPQ0BATzulDne+qt9Y4xb6FYKiiQQ8HeBmLpYjrcr4X9fRLMIwLmYnr2/LwwQTw3U+QQE4N4zL6fAtl6IR8ES/UiKaKLRt33N2jP9ljg8Ya7He+ucD87wuk+fjjQFhEt2eM87AFelc7FhrJDarBaw8eDwrEp/mUos+iZAf6JieZHMkwHO+HpokMHrFskkcHKpPV01C3hfzX3+5RicdTNYnKkgSVGv9WwaaXiakXIrU60qO4NuK2w2mYiO+GWaMD977x/u3TKPa/VLQVCmLtqbAhBbAtI3wX/Ud7bySbGKBfs4SykzUUrc3HfjW4aY5JXM9XuZvpSg8VVIY3rLycDr8z8Vd5fvRbfTF2VZac1wK+5Ol9Kss9Q/8XJl6p4yTI2YPNwgbOCtS/KVlOpZoLppCWi73MPDPhc2WEaEEitO6ZNuPEJbue4dHNTUSeMJDHlYzOcZshaIwdcvpdkeqr1DUoNxw2V3BA/XGzHi3PRtHrdNie68AlUI40XUD4pIuX6jHmOZpzb0yMzRR8Uhhk1u4hm61eIfaW5Wc8M1ajVhBA/WOTGoTPDSWdeS+YjZPnZeMxAqy9nEtXzXwOQ5REEUS2wXOI1eOkVypUSBBWBaScuRaOnExvKMTMiRdN3x1oFeiyqKqmZlEQPGMEtanUHhDY+iy93q1Szfqgdv4dGkeGl7TkU6vK91BPnZajaZGZRlARkn6ZsxpGqDSLCWLljd4TALB/MQlJcM9hrCoksjmJSrE5lxz2KEJ0+G3SADX58gA5Mm5QIb+0Z+Z+Ms2AMkT1TkVI/QmQDOHkp5D573PkwMAhozYKYfeGB3LpHyZHDgQG68mxeQAGctldIiWpGUAb0DVyFsH9ZVDr6j9j7N4mHEX+FqVjvqILrUQxhWnheYrW+/pWlETSk80ME1zEixktDv6H0NQQDO5JZRaAdEAen73ylR1Vq9PfDZJKxwI6GC8q89P3j6IWrEn68vBzbSv9sjdFV2WbqBTQqBXbXhMVOdai3bOn6Qqb0xF3jFNBMFgwVE+w94hoG1bVsqUqsX7Lgbdyu/eC0mJ58RKxnuqqIVjOpSNAU1Lo+0Z+Eg9kLpycN8tu7AgpkOQE5gPcpgNVDz9QWZLRyD5fE4fVsmyS9McIYD/8FjomyhFnEjkFZV2qpNwu4fzANZDJjH004VNhg7bWQOiZ2kftKe7icXrsqICCX+YQrunAxyW+KFu5l6cJ+8yVMrJ9IED5T9XLhv8AHwfl7NCllbWGWNQ11U1mIGG7Wgo0CXoJjfTAulU0Lo8cmY2wXeDYb4xiXVw7fNwULwrIK3lJbxgugqFZiePLCqi4G0g2cVyK5BP+sbNI7+uUEImIhA5wrpTKnLseJGHf5P0x9CJRUEfbplIQQqZ7JSkuZ5lsbZmvcBtqCY1VGF6tBVhidQ7FZigcMhSnevmVFngLn6tzsw7OOzZ27YBoc3tbSXY6joGKizOE6SVVAIThKg7qglbAmaCXECWNoONJkEoSSAjhbxZEH/a9O/HouoVlgkFSU2XSu6kmrcyiOnVdD2nBSOVifWsTjBg6X9+sWTNuWohwJczPzRbkCcO9TUrGrlTgZ0mXnv/iSmpIdrFFxeD7RRm1JQzSmZAntU5ND1POSubM0y5VuSnBY9aqnqxTfgvlERjBszNoFLIQVlGhDhHH9VY3+kRByE8o9oz1MvCyCO2Mz/ip8dPhjESo8F5sFuCKk0Y9248qTYMLbiHyCaa5gjnSOwISFZ2hSXzrJvdz98sm8gTcz0/EuHd/CQ2enGrMTSsOn8qfQ6W/p1M5q0c++uFX9Valz9GwpWQIYHEQoJ0vtSbHanUkuIocB72K4Kl0VUwIVWWj6v3NEu2HWYBtEkhwiJU4q07vi/LrKpuAQv45GlGjtYc6/dSZqsBWTq0zVglgVElGQMrA5onhmrP44Nj9isx+D8W8WmboIs+mzKEbyF9LacUx5oNNUDBQGEyQHufz9V0KjqaJONxBQlI13+ZQuzqv0D4KNNcz4v20GocpAScmaeshg4N6bXs7L9yZVs1z9vmyFR+7VDGVv1M5LMeZECIuEWsbEay17x9HVlH/A38dV1OJ4T3ZwVuyw5KzciVefOLP6AslWYXYnukhR0nftUlHF/uhkcU18sSzdfap33FheERjODd97pG1JlDcM2HtJ2yQMjoxMeBzw+ziOND7wAIliLItgAEM7X4u07OO5THwPl38sk+vmROAJtACQ+XAiy7CnzvuYkBVIjXmy969JZJfyDCiMmw690KQwcH8ziEHhXLYU9ivcjtcie4gmgkSGQiZkkybVsGOnkoWUKIkDvYmsxeEfYTlY0BF2TA+HBZhUNUmvslFlZKiHZyenM4fWO1KydV4DYEBkJlkphS6iU+D0dZHohBnWOYPumLAadvAg04CV4Hak9Aa2ZZbXy62GJvd3pcGtIlYrcGbV5mXIoqsSbgr0JeIvevhuzvyPTQ13Je5EtDM33hVVjPSuSmqvT1uWG1DUGqJlN+IzkSupRvrSkOr6MtI3ARDXkuSOiK9ZOfjCfXOrZFmCIlFoqWv7zMGdtuLZJQnC1JL2GzcWpzZFCSXh+gBZHiUuh0n7nCEFsgY+5f+0atfdwVfwtUzzuNT3Af4LDMwPJOtX8VuTcpX/oKGqpqBWda+qRZx31WFbHjiqtotyAnI3L4h4eqUnrl9s+sFYppxboz4LtCuspOlVmOQG4dJaUog9UlwkeYT3xN5UxqYneJIHAjvlVY7OAKgBtfwPZBOOTmH3ZI2gf0vMM4qCDms5Vxbw2zUczzDmbN5AUCa/LEJx9o+aRa0AE6RNdaYb47PNopbDscJyffTdshnYyfmcHOIZWlmWQd5rqEIhmxzGTEuDJ3FZVet8gztNvxzUVFo5k++4Gz7q0JiK9qrakrWJ1UojP66ZyPpx/A+0LzdIH1BJLoIYebdMNZEHcg2d3aBkcgU+YlMh0C6B5pOdHFJsjHEnqxgbFdcXhthU/ju1Fp1E39MfsotKZ7yF9a4wgcItXVSCW5wkXUpyG3WBR1IhSj1XD2bQddhpjLr70HwMBY6lanSUglnIhHZaO7ODlgAhoZWw0WYishK3tYzwAXvyG6IegQAvww8VaY1Zap1j0lw73Ml3a3bMdRkD86DQEXWUEzZPV9WYuGS105AaW6z+7dI9+lLh9VCo/jJSeHvLa4kO41l08dgrikcc8jVkKZ1yOx6s5oh7qT6HUkqS0YiICTXCCc+FO8lZS+fPRCT+HZDkisSV0KB2aCmsngytDEB2qazHY0NboId1kPAL46CGRGFTB478CpvOQnSjjikoYLsJ+n0o3Ig3kBH5kAI9pGaIPrzhbCm+jGALzonEG1l3dzHRF9My13CnYsBOuBOugxZAG6FtsMZkdPn9TjUgKshvkVrRJHuNNiuIIeUx3hTHNscVR3+mcD2yKnVj9PXqRCUBXorChmeGFqV2Gb3Ms7R3VdHAuR8y4YSirUTiO/azn+SYRWw4uwBM3gqzIEk14gGxgB3swZWi9an93feDzdL00ZiuVNyZfAdOxGF6yOX4+kxCz0seWzRRUYexYTyY9MlCOuXKzyvjsv2/XW3YGXpoZj+NIEJaQHFJ+DQLIrZocFukoWKGSkfz4apgaeJQNsOO9AehVt2BmDNbLrzYsfjcgoPU15uKqFItHISOdixWN8/O9k6b40spN8/cunLdxnuYkGcvOixpFmOzPzvWGtaSZ9QatMADOf4YbkO0kTLjw7UBO9Or+fPnVcS78hJb5PMqaUWwO3hoQWQw8pwNnkn0sih2lY6orab8P0IPz+F8F4JL3Qu4b7XBw1lNvQbPbvxUa4be1N5qKIEzxjaMU+CjvhNFKzdHZjo4Z1J6/S5jhDFpep7+4BYARVAPq0jXf+uNzAD5OKnh+54S6mMvOiVhiO9h6xNqOnygw10xnNctPcOO648JHIn99nQSovPcj/Z1WVtLO5ZyPnrxdHpfVkHq52aLjvF/ugTHWHonG3p2Kb5pUnB3NlUL7tPWBQdYKCLSLCM9Q5DaHCmiAqL/GVYCz+ssnJKQo7y2liJbX0DD/5+aVhpXl7RfODPcPfXEn3rJIG2U7REb0Igbr0KniPdFLaPFnEuLnSKvEiZH5UvPg8dPfBDpZWYh/cY0biFS+PwiDj2HycFboFbkbFzJeQvETHiTgkHqqIBAogaQZksw/fmOJTpRGuHcItI2h/LIT6kiLMBr4aJw8THlSIqOnvMQidwUuVaQDx8M5u6g0UpU8ZheFYCTuOZF/L7oehpBKtEmDVw1zT31ZdPl3q6bF6Ris4N4jdgY8GlLxAbdjlQFDjOZ6GfMI6SL90onx4fPvj3tWNqioKzoUM/zuPxP/3BsMy981NGx/mkIybNpOQiRVe6WuyBS2+w2QUxt3QgyuPLo3r7EFqC6uzTErDZEJDfzUD/cTTXlXhvYSaOPVqGP/vWCs/4lX5CtTY9XKRWsCHoKYFDIHFnTfjU39/o4llRDbBuT151ZOLg6cVtU2bNBmkaoi98q8DmegnAR+QP1D5EcvWLXvZaoV7TFuFZSKfk2S4AhrqDwMjbvOv7bo9qlK9CbCFY4gLzFwR2U2VXMMEL6FroBH59DGyQV4BbRdlF2Ff4nQaTF07XOaPAt5DVpG+F7KGQ97QxpZeWSqlWNw7oYOgtsXBSrHBlYakfmIMrsCD4sjqoOb1g4eRZyK9KL385YNaL4JbCEHQ5rTxbNhf4jNaGXnD+ng+lA4Ge/wiBdc1NEOByXz4jZNWT7pfv5T5l1hUAMofukx7HXcXk04iwSA+lFA3U6n4T5Ta/F6kL2xTnBpi22jh7eWNjdnAmjIiKUZo3OynSk5zO2hFITaY7j8L3wkhWaxASKFfttYkIJyupKKx6dFKoxYHMhbqek5gMQGaADZLdoWI3clZJZG+8LM2je95bLLBp9RkJnerCV795Dj52PKTqRdQOnOupV7Cw3RRaf1WmswTUpIQUyBRYPrnRn8MxMhBFv4mQyujxkk4skdqk8SJlAr9FPydTkUz4E776wZa2CzZxRYfoS7WB7I4rjU1EoLdbQkcUFb09gD6J3jhEaWDB6mEO8wF+mdMkTzJFUU2L62vzkOvU6KjxXjBhMKal7JN8ww5mA2aA61BIyMEOaUML6+O2Js1XTwZ9pvt1O3G2s0nAvvZTdyGcVU7WiGmdhXUxyollJ7eegkPyFM8ULEZYi1yA7D2r8LDLTvzcGSJ3IwKaybhIV+DIQsZxsFeWWC5ZHaxuMIAx9ZKyIoW27Iu0yBjpcYmtUlDaAbe2aZ4hKSqC65qxC9aWm2LFLmECz7ZyQpkhi8tj/x/qhTXCaCK6jYDcsX044ZtAIIhodVWx7isUb4yM9P4vop/sFDVlgCXVfsEF6daMuK4o8q5zRaeRbQ2+kpSbLwSvCQDqvMx1dctpMyN8q7EO2ZrDLYDOhTnh+f/tiGmsYD99cuCBXUxIgsynqtmYCRAtov4Q/gn5fFISrUR4VzJKqeLggRne36D+w/cyoDzNi+krL4MBs02Do9OBgAeatrJSwmvaon6WcF8haYAF27BKklTwCexv4ic2mQwjPRM+9oPcAPNvlamU+BB1u6ka3SIJGkZ/Dc7An0Hp0R6Y58r0tnEaeKmy0/+5L0uopXYr+AXkBnGdesAd9rIJ+OhAEfQvzoknOeQiylKrAfLNNrW2ORmyAdoEG0gBvWZ4YXg5raS8WBWOxZjN7vZ0731JSLx/OU3hk+mKImd6GON5GhNHhIy0MnQ5uErks6vyVXjHzRznVrwmjei8PR7R64L5UMHK960yfSFInJrsU08mG4+vmY6cFDpM5GpYNvaEzt5Kw0VcJHCHsZUhR1KsVEI8URP3QWWl2xbfgkCF2N09g+k6J6i0y5+imF5fkGB0piIWduRS5Lawy6X1gQpWDpEgPB5OHZ6nL+1Q6tSwyxZ84qWw7CwdwwECE2uUozgQXgYDAZPPPC5TRIN2USerkKODwHb+FZrmFkTHgYekIi7i/wsE2MxPUP/0OwSbGNVTn9IRqiIKPH3dC3Ngd5f1h9EpXYpa2NNxNikjD79bJ0gGifp0+xVSukuk+S5BxtIJw7QrqH52IHLQTW5SBLS9iSxmtN9PZ0zpOMZtd1Hk76JGgGdIYH3Qmz7MqAoUborTKrTE0dWcLL8JDTI3+obVU7Q8YY3eHf2Mr2D/O4assqEIa2FMM+Z+idg3EuBwaOPsWbXwKSTdDHPZWBKJpr6HmRTC4j0WIBIzpZAvMYCrAa1WHlNI5omwTS0XSF0XszhReW5CWhtQixzhfU82IElBdGnkEF0h1/vxSJ83FQYJedgPpVDphWVhJw2jcFIk2xB3uM4Z5MQw1GRbXXfTbsz2OwBR4QjFYTmNY+FOu5vFJoecyR92bVFTfOOeif+UCVU1gtjtGmKVsfr2w51i0+w8Mu4vqGRdlBhM34mF7ONn8PL5vXJSRhSpC5DsjnWAdKO/dnJn/6nx3TfW6018dy185HqXxJbKOElcQGFdn/eytUkxB7UCNBQ5dQW3wD9hyB6Xy6eD5JIeAeNbFKPA8vyqx1ay6woCALIelb+c/odaeh7+LPZr+aVjO9mgCA8yBVYTwc3J18ddN2tMYmRGeWYXVEil1lEHPdIkRuRj3XiBPM92a3/tDmWATUnG5bIKD1UyNzUFc9CIAuW2kHFewGNPMeJL9F41O2bA8wI6B5GWgfaL0+89Ui2HmUWxQTxFmRUZ+vnbBHOOELX45IzW/BOuTqzJrY6eCKgOXGgGiuRomFPCuwcyLg/8dNIaPqPMgWLvj6yEynYaq/ITIw7cJ8xatztkU25ji/kxum16NXt68/rWCcrf1cLYdkUfwcq3b5oMlsaIYF3I05KXGim+ln4pxBy+wzqhGNhKZ76hirXpHxEGQa+DRKMC6L9KzWyNQNle6y94snqsBPVJ6bur59/L87JM8xaPDvxg4TiZnpCGdU0ByQcsHOVQgWhinTNsoQGqxBsB/H8Uhdu+7CFUj89WMaw6OxlIU+otCKpmzoyVJLbxBnOIBqoPx+xiNgHu084g8bMnyLK67QNG/5U9Zg3V/9eZdViyOqIcfBCcavUkDoeyukyufYA2nHjdm26Yc+eJ0mPVx542yXDQqNGTtQkuVAEqqm5g+xXRcg0JmDD3tx/yW+2cNsbUnBT7ckUtFuUPDVL6wmPZIMOnbAsLD4EYC4m6zRBBFmUPEY8kmbM+BIcI/A9Nu1kArutwvJ/4d7El/rUy3RtdyzOyyduo7jGTGjApCyPKbrENUlhtiIaM2KEYXFxxg9EGm2IgathT+KziKouhRX9SK5dB4aDusoqDzoKEeg54PLXEh2gT1v/9HsgSp2k+NybOwGGksZZBREGKWKLvqqBEeotRQmkA0cKN0keXpw7hzoRiebH5CBpJImUNuPmfx0Qy5/DBFXoDMETaDG4jbXSAwhljVINfLluDpjHv876fub2NLCFKZJGB4pCL1qVtPRCKDlD6DxSIXooaPxZon0daQtdTQ0jgk4uFPEUbkzdPCrSTp4Rlvqv5T3kp5WHHQv5I44TWeqHHhj1d4GkTZasj5oSKIaxqsvp5z+10R2LwmlliKtp5jDsKDoNWHkVDtq+T9fVg3omszHzvr04pcKCymNKZQ87IRHQ6j1IggzWGZZ8t+soVad3CExcJayWnYlnm+4B79clpxycbvJ/rxRqWJjpLMJmOVK08KKG3AyYjkEP2zsonvgrbCMEMMEBQsiN2nVUY/Pq+IGggS6sqrudVZ2n3CCMqKx2LQDY/iEvwXrbhD9KiEuacLjZPuxv9KOqrcWpb8n6AjdFYMz46x4ENZagvOQHQR0jCqrVLMQgYoLLhAxi6m9M+FJj4Fons3g0mZiJTGeGTnLC33ge9dXS8/nFjLQ8m3VOFzJ1djweLlIuKEmCan7E1NmqP4hMXCclJ7Mun74CyBADEPxI9uQMJqAkjI8KnZfA4RUowtoDgzwhvThIihLC7xTCtUhKgUAeJLczOR2hnATuG+a8eBv+h4PDeSx6G6o77ulwe+nB/DewzDEvCUEVH8myMruvYEvZHUo0tC5ieROWJtJKYoZmBLD7pBRgbZxlz/fADX1XOhadeoOREkcZDlTBdJGxsth29qMyEGsNkRxJpAZCPuBqEEBXtHYb/exUk5NZ9h2pCT9JhLs0urQlorY/q+zuj8haX2/10NiV/0v0jPml9gffH9PQdZFSEH0u+GAs1x093NkmMtMwjsnWwrZ/JdT8NjHSpElKF35psqNTHd0Tk8xf7MUiFCErQ1fi+jCDu9HPLPIwib61PpA86BiXPFrWWMFtk3Wk+fHOWDrEM9Xov8eW37+PMRigIX+K/dfS7Bcs6HnR1x+TxsC/Cz2QLYUht2IYxeGjCshk+keArDdZKYlLup5XJ7Str8zMQc2gHlcZSTJJDkKmw5KRFFtw1h+JJ4Rc79MCK4XeUZJv5pxKadRH6PHlNF8d/xsom2ImSLfFQQ0unrDPwT7425GRhrjfUk96kuPkZmtJKG437iyj8YRJ0aKxpW8yrCEOZlDOnAXFnYulfEGuXRVPyRyooUgt1kjhCPS4V95XKRv65MmTJHiWy4YkMf7byi7p9PaG3pMmn/JbyTfeeV12UmfmILLlRnciJbGtm/oCxhRkdIoM4gDjLY+dRTJ+6E1GRZooaX871GVXPxkpWYqPBK5VeghU8UpKCQ3EfCEs54DavxGmxwmrKkb02QOFSTJ2/3fkWGULL58df+4ZN+Cc02flAGL/LlAGJaG7OSIveVg8OQ5+QMHik2OvkAsxgbGdsbBt/UUYTeScmhL1It7yV0Cn1n7dQz1S2K5TmepWnh3d685hhdu6UelI16Hm9W5Pn5xcc15j/DCm80gJPc9mzJU29mMGB9JS6/y0VF6kKvakrrBWgF4+90sv2+kI3ykn3IxQXIWyeC+ey86oRNZo5dgn2BSy6VpfPt5mJ1m6ZpS3FJTjVpTM7TpX73QljlIMnTI5jTU+ADbUb0t+byGMWRGdKUcSXCTyi+W7SLtBRpA4J8j8+cyvYA8mOK+scYH3Tw3unoZqQdaUGUBSLf+Ynm6bPpx3g/pov74uyH+3AoTxRgpfPGKS/HYdyRA65XsksCItBuw4m7VPIrgbNGlwI3OvzyhzBrRS6UuIf7K7YUPW+NTCx5OJql2zDu452bIDsd3bo7ozwekYlhy1wJ/rQuR4/P0QkSd75xPsFMKlGYbHgCkfx+mKy/zF3pHUzzzDQaFTMa4hxlz7x29LtHDV/du1gCPp/uWVLG3CaRoFmuHEZHO1Pbnmyfg7PoSKYQ4mma07QvqpI0ksmOs4ZzXBfA30+KIKoPb/+0X9i7/xihdzzviqk51C4vFPsEltdn8jtoGv6huTg//cefeJzX+/4SOh3rMaINyQIG+cqRFdGu+otXe48KdrbuRXykXE4VxrFgJjSlRjxMsWGc2HxcGS4f41gMb5LN8xPAQXPtdN/5h2QTMK6eXUIkuwN9BuC1/T+JN7kmE9L2/QyyMZMOYejI/eKM33gAL+6qFj8iVwO6YMsOzRdSyQpA/XOCbAKsh1iKO7K0cB1hwZFMYeqhYAfmIZgDLpLfJ1e/gho+lKC8nawEVAfmmaTPCg6wDwpU8flTSWb00ieaHz9TFUD2zz9kFDD43T+NDxTtDvhSnDTf1mJMrb/m/rC7IjlluwkokkluQSFwbhBv9lPR7juHBif12vrYDPw32t1ViPIy1yyibjNo/+Umik5+mPifaWfEIUqJfxHZGTy1nor2YMCy4qQjaosxiy0a+G0U8dgMqJffIcZHbfero6LdHUPpScP6Rwfm3xPHJKk8sJFGtJsAjtrtnm2Gda3bGNs19F84zvV19VzZlh+WbJxXWJqkwaTHadkV9mkLjimLdacb+K+BW8b2SqQnBn7UHvyiPNYjaIydEPtvAmQRXI09X9qlfToTUK+8Hi+JmgD64mOj9mGX8vFanqbOAiFOoUDu59J/A0CfsRUKZOcHagc4WUqOb/o8ff/Ou8f/2xYAdp6PetYMiPmv3ywWPrTGxs6TyVOSasw51p2dDwNeJLQTZyZa0l/xMHugk6nnXbd1FiKw3u8H/HlRaleh5r+EdBc6ZDGQcdz5vJj5BXU+507uYo1Tb+7Mh3mR9z2968cgrH530wZjVypzG843Cc8LnLyxsM24FsvPASxLAiBPIcxE2f0aC+ju3QMzz/pL1819hPT2OobveN2rHHdet2812SALdICwsxswR9hjXUUI9NzFL4AyPUu3D6Hni+Z+hC9aT+31OdP63qLN+QGHeyhXx1lzMRE7tJAACMBJD2D7k2vudD6MPv+V2fH0/8qXmvP+yDG7qBNA5n1rCDSDXWAIrGQkZ5gPa1tOYw6rDTk6NeXQGoBmsKv+SuKLsKKLSeZTHvSs6PnScE0OQDPYBYamXClRU8yZAsf1+khAGJbHrQFoBrs6X4n5v6+iNheuXDo0EECMbbPjhMxiUtJvaBwcmNafHD3va5DUF0di+mb6/+6Nn9cbwFZQQJUHvhVetPGVgJ0e6I00Tb/sftBm8xI2TY/XN2K7QHwTYUoT0J0QtuIlAik1uEUDZTmwDs6TpBAaxsoFjM6kMA2/NuRiALbfsvYSXqdithM2RZ2aCW0ToF+f+C/eTNDmgcgiAXYjRN7+MG6vEvaSfyVFi1w0ZqMx9tdjWCMRhTCMgv16ccuJ36k43UlogVS8jrfRV3cxUvuAno5Ogbh1ErFVYZ8Uf1FA9gkolBIfBOQk1B4lsltYMa5eKmFnY5YAMBDpLdG/EMlY+QfLGmwHZ6gdhDZgLgFuAdirWtFNlFIikDUGr1DAzHrkogGhNJKVRJ37qI3EzD9o8Yu2THSeYOcMrrlYnY3RwHlS7XypdD7kMxQKsOmhz6/RF9j+ztsqVh+X/8fCPZxyUDMAExec3Tj5QJzpqIaRQhGsDTdMrK4X2SkIXYm12mDyah50GGPTTW75mjoNcApmJjcQGgzeNWfGnO8RWEQFyX12G05DBEGoigTiXmXNeUxi115IcAoiyA3EByN2zfdjrtcjClFBUiLRhtMQQRCkNGzOZo3YjSSyRrGXAnFPwJTA/JJsIVz6/AZLbxoQhgmQZYw4ezCXMVzC8CagWmqCjSuAnruxhX+pAEI9xE3SmRBnAJbTcKuqaTYwALgn+iYDQhF+BhQxxAwYm1MZcLGGMhBkajOQosUiIgKBPdRoX7duligssE25Vn4faucGam2o3kZNAVQtCXQysdN5ULna4Zcrlcv9RqU6ZEKN398qlMdG1RDrlfpwdsfF1GvSSCSCWvgaRbmtI4WLiBl7/qKmG6KZo73da2RJl8NBc5iRPDsOKNigSbPuzPEsigQq5lalhkJclN7KDcp0Yr1uRmYW23RZsl+jcn51snmra79auaZ6E1SgTMGXfxbU/3eDnnDQMLBw8AiISMgoqGjoGJhY2Di4ePgEhAKIiElIycgpKAVSCRIsRCi1sNT+aEWKEi1GrDjxEiTSSJIsRSotHT0DozQmZhZWNunsMjg4ubh5ZPLKki2HT648+QoUKlKsRKlNppvhB8s9MtOQedb52mZzXTfNEm+8tcAKs51022vrfeO9dz7YaIefnLFTmXLDKvyi0lk/+8OvfvO7x6qMO+e8Xaq9sshlF11S46nn5qjlV6dBvUYjmrRoXsCPyw7tOnV5YpLJuk3Rq8dhG/TrM2DQMy8cccVue1x1yzV77XPQIafsd8CYWbb50VHfBwrme7nx72XBh+GXGe/AFwAAAA==";

// src/fonts.js
var BUNDLED = [
  ["CanvasInk Caveat", caveat_latin_400_normal_default],
  ["CanvasInk Patrick Hand", patrick_hand_latin_400_normal_default],
  ["CanvasInk Marker", permanent_marker_latin_400_normal_default],
  ["CanvasInk Architect", architects_daughter_latin_400_normal_default]
], FONTS = [
  { id: "default", name: "Note text", family: "var(--font-text)" },
  { id: "sans", name: "Sans", family: "var(--font-interface)" },
  { id: "serif", name: "Serif", family: 'Georgia, "Iowan Old Style", "Noto Serif", serif' },
  { id: "mono", name: "Monospace", family: "var(--font-monospace)" },
  { id: "caveat", name: "Handwriting", family: '"CanvasInk Caveat", cursive', scale: 1.15 },
  { id: "patrick", name: "Print", family: '"CanvasInk Patrick Hand", cursive' },
  { id: "architect", name: "Architect", family: '"CanvasInk Architect", cursive' },
  { id: "marker", name: "Marker", family: '"CanvasInk Marker", cursive' }
];
function fontFamily(id, customFonts = []) {
  if (id && id.startsWith("custom:")) return `"${id.slice(7).replace(/"/g, "")}", var(--font-text)`;
  if (id && id.startsWith("cloud:")) return `"${cloudFace(id.slice(6))}", var(--font-text)`;
  let f3 = FONTS.find((x3) => x3.id === id);
  return f3 ? f3.family : FONTS[0].family;
}
var cloud = /* @__PURE__ */ new Map(), cloudFace = (family) => `Palette ${family}`, cloudStyle = null;
function refreshCloudStyle() {
  typeof document > "u" || (cloudStyle || (cloudStyle = document.createElement("style"), cloudStyle.id = "palette-cloud-fonts", document.head.appendChild(cloudStyle)), cloudStyle.textContent = [...cloud.entries()].map(([family, f3]) => `@font-face{font-family:"${cloudFace(family)}";src:url("${f3.url}") format("${f3.format}");font-display:swap;}`).join(`
`));
}
function registerCloudFont(family, url, format, read) {
  cloud.set(family, { url, format: format || "woff2", read, data: null }), refreshCloudStyle();
}
function unregisterCloudFont(family) {
  cloud.delete(family), refreshCloudStyle();
}
var cloudFonts = () => [...cloud.keys()];
async function cloudFontData(family) {
  let f3 = cloud.get(family);
  if (!f3) return null;
  if (f3.data) return f3.data;
  try {
    let buf = await f3.read(), bin = "", bytes = new Uint8Array(buf);
    for (let i3 = 0; i3 < bytes.length; i3 += 32768) bin += String.fromCharCode.apply(null, bytes.subarray(i3, i3 + 32768));
    let mime = { woff2: "font/woff2", woff: "font/woff", truetype: "font/ttf", opentype: "font/otf" }[f3.format] || "font/woff2";
    return f3.data = `data:${mime};base64,${btoa(bin)}`, f3.data;
  } catch {
    return null;
  }
}
async function prepareExportFonts(items) {
  let fams = /* @__PURE__ */ new Set(), walk = (list) => {
    for (let it of list)
      it.type === "text" && it.font && it.font.startsWith("cloud:") && fams.add(it.font.slice(6)), it.items && walk(it.items);
  };
  walk(items), await Promise.all([...fams].map((f3) => cloudFontData(f3)));
}
function installFonts() {
  let style = document.createElement("style");
  return style.id = "canvas-ink-fonts", style.textContent = BUNDLED.map(
    ([name, url]) => `@font-face{font-family:"${name}";src:url(${url}) format("woff2");font-display:swap;}`
  ).join(`
`), document.head.appendChild(style), () => style.remove();
}
var BUNDLED_BY_ID = {
  caveat: BUNDLED[0],
  patrick: BUNDLED[1],
  marker: BUNDLED[2],
  architect: BUNDLED[3]
}, EXPORT_FAMILIES = {
  default: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  serif: 'Georgia, "Iowan Old Style", "Noto Serif", serif',
  mono: 'ui-monospace, Menlo, Consolas, "Roboto Mono", monospace'
};
function exportFont(id) {
  if (id && id.startsWith("custom:")) return { family: `"${id.slice(7).replace(/"/g, "")}", sans-serif`, face: null };
  if (id && id.startsWith("cloud:")) {
    let family = id.slice(6), f3 = cloud.get(family);
    return { family: `"${cloudFace(family)}", "${family}", sans-serif`, face: f3 && f3.data ? `@font-face{font-family:"${cloudFace(family)}";src:url(${f3.data}) format("${f3.format}");}` : null };
  }
  let b3 = BUNDLED_BY_ID[id];
  return b3 ? { family: `"${b3[0]}", cursive`, face: `@font-face{font-family:"${b3[0]}";src:url(${b3[1]}) format("woff2");}` } : { family: EXPORT_FAMILIES[id] || EXPORT_FAMILIES.default, face: null };
}

// src/fill.js
var PATTERNS = [
  ["solid", "Solid"],
  ["tint", "Tint"],
  ["gradient", "Gradient"],
  ["grid", "Grid"],
  ["lines", "Notebook"],
  ["dots", "Blueprint dots"],
  ["hatch", "Hatch"]
];
var FILL_BRUSHES = [
  { id: "fineliner", name: "Fineliner", width: 0.045, alpha: 0.85, wobble: 0 },
  { id: "ink", name: "Ink pen", width: 0.065, alpha: 0.95, wobble: 0.02, taper: !0 },
  { id: "marker", name: "Marker", width: 0.14, alpha: 0.55, wobble: 0.015 },
  { id: "pencil", name: "Pencil", width: 0.06, alpha: 0.8, wobble: 0.03, grain: !0 },
  { id: "crayon", name: "Crayon", width: 0.1, alpha: 0.9, wobble: 0.03, grain: !0 },
  { id: "charcoal", name: "Charcoal", width: 0.13, alpha: 0.65, wobble: 0.035, grain: !0 }
];
function fillBrush(id) {
  return FILL_BRUSHES.find((b3) => b3.id === id) || FILL_BRUSHES[0];
}
function shapeLoops(shape) {
  let x0 = Math.min(shape.x1, shape.x2), y0 = Math.min(shape.y1, shape.y2), w3 = Math.abs(shape.x2 - shape.x1), h3 = Math.abs(shape.y2 - shape.y1);
  if (shape.shape === "ellipse") {
    let cx = x0 + w3 / 2, cy = y0 + h3 / 2, pts = [], n3 = Math.max(32, Math.ceil(Math.PI * (w3 + h3) / 6));
    for (let i3 = 0; i3 < n3; i3++) {
      let t3 = i3 / n3 * Math.PI * 2;
      pts.push([cx + w3 / 2 * Math.cos(t3), cy + h3 / 2 * Math.sin(t3)]);
    }
    return [pts];
  }
  return [[[x0, y0], [x0 + w3, y0], [x0 + w3, y0 + h3], [x0, y0 + h3]]];
}
function loopsBox(loops) {
  let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
  for (let l3 of loops) for (let [x3, y3] of l3)
    x3 < x0 && (x0 = x3), y3 < y0 && (y0 = y3), x3 > x1 && (x1 = x3), y3 > y1 && (y1 = y3);
  return isFinite(x0) ? { x: x0, y: y0, width: x1 - x0, height: y1 - y0 } : null;
}
var MAX_SIDE2 = 4096, MAX_AREA2 = 6e6;
function transparentOf(color) {
  let m3 = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(color || "");
  if (m3) {
    let h3 = m3[1];
    h3.length === 3 && (h3 = h3.split("").map((c3) => c3 + c3).join(""));
    let n3 = parseInt(h3, 16);
    return `rgba(${n3 >> 16 & 255},${n3 >> 8 & 255},${n3 & 255},0)`;
  }
  let r4 = /^rgba?\(([^)]+)\)$/.exec(color || "");
  if (r4) {
    let [R3, G2, B2] = r4[1].split(",").map((x3) => parseFloat(x3));
    return `rgba(${R3},${G2},${B2},0)`;
  }
  return "rgba(0,0,0,0)";
}
function renderFill(item, loops, k3, env) {
  let b0 = loopsBox(loops);
  if (!b0) return null;
  let box = { x: Math.floor(b0.x - 2), y: Math.floor(b0.y - 2), width: Math.ceil(b0.width + 4), height: Math.ceil(b0.height + 4) };
  k3 = Math.max(0.25, Math.min(k3, MAX_SIDE2 / box.width, MAX_SIDE2 / box.height, Math.sqrt(MAX_AREA2 / (box.width * box.height))));
  let W2 = Math.max(1, Math.ceil(box.width * k3)), H2 = Math.max(1, Math.ceil(box.height * k3)), c3 = document.createElement("canvas");
  c3.width = W2, c3.height = H2;
  let ctx = c3.getContext("2d"), X2 = (x3) => (x3 - box.x) * k3, Y2 = (y3) => (y3 - box.y) * k3;
  ctx.beginPath();
  for (let l3 of loops)
    l3.forEach(([x3, y3], i3) => i3 ? ctx.lineTo(X2(x3), Y2(y3)) : ctx.moveTo(X2(x3), Y2(y3))), ctx.closePath();
  ctx.save(), ctx.clip("evenodd");
  let color = env.resolveColor(item.color), fb = fillBrush(item.brush), sp = Math.max(3, item.spacing || 20), rnd = mulberry32(item.seed || 7);
  ctx.fillStyle = color, ctx.strokeStyle = color, ctx.lineCap = "round", ctx.lineJoin = "round";
  let line = (ax, ay, bx, by) => {
    let len = Math.hypot(bx - ax, by - ay), n3 = Math.max(2, Math.ceil(len / (sp * 0.6))), nx = -(by - ay) / (len || 1), ny = (bx - ax) / (len || 1), wob = fb.wobble * sp, prev = null;
    for (let i3 = 0; i3 <= n3; i3++) {
      let t3 = i3 / n3, off = wob ? (rnd() - 0.5) * 2 * wob : 0, p3 = [ax + (bx - ax) * t3 + nx * off, ay + (by - ay) * t3 + ny * off];
      if (prev) {
        let press = fb.taper ? 0.7 + 0.3 * Math.sin(Math.PI * t3) : 0.85 + rnd() * 0.15;
        ctx.lineWidth = Math.max(0.6, fb.width * sp * k3 * (fb.wobble ? press : 1)), ctx.beginPath(), ctx.moveTo(X2(prev[0]), Y2(prev[1])), ctx.lineTo(X2(p3[0]), Y2(p3[1])), ctx.stroke();
      }
      prev = p3;
    }
  }, gx0 = Math.floor(box.x / sp) * sp, gy0 = Math.floor(box.y / sp) * sp, gx1 = box.x + box.width, gy1 = box.y + box.height, pat = item.pattern || "solid";
  if (pat === "solid" || pat === "tint")
    ctx.globalAlpha = pat === "tint" ? 0.25 : 1, ctx.fillRect(0, 0, W2, H2);
  else if (pat === "gradient") {
    let g3 = ctx.createLinearGradient(0, 0, 0, H2);
    g3.addColorStop(0, color), g3.addColorStop(1, transparentOf(color)), ctx.fillStyle = g3, ctx.fillRect(0, 0, W2, H2);
  } else if (ctx.globalAlpha = fb.alpha, (pat === "grid" || pat === "dots") && (ctx.save(), ctx.globalAlpha = 0.08, ctx.fillRect(0, 0, W2, H2), ctx.restore()), pat === "grid") {
    for (let x3 = gx0; x3 <= gx1; x3 += sp) line(x3, box.y, x3, gy1);
    for (let y3 = gy0; y3 <= gy1; y3 += sp) line(box.x, y3, gx1, y3);
  } else if (pat === "lines")
    for (let y3 = gy0 + sp; y3 <= gy1; y3 += sp) line(box.x, y3, gx1, y3);
  else if (pat === "hatch") {
    let span = box.width + box.height;
    for (let d3 = Math.floor((box.x + box.y) / sp) * sp - span; d3 <= box.x + box.y + span * 2; d3 += sp * 0.7)
      line(d3 - box.y, box.y, d3 - gy1, gy1);
  } else if (pat === "dots")
    for (let x3 = gx0 + sp / 2; x3 <= gx1; x3 += sp) for (let y3 = gy0 + sp / 2; y3 <= gy1; y3 += sp) {
      let r4 = Math.max(0.5, fb.width * sp * 0.9 * k3) * (fb.wobble ? 0.85 + rnd() * 0.3 : 1);
      ctx.beginPath(), ctx.arc(X2(x3 + (rnd() - 0.5) * fb.wobble * sp), Y2(y3 + (rnd() - 0.5) * fb.wobble * sp), r4, 0, Math.PI * 2), ctx.fill();
    }
  if (ctx.restore(), fb.grain) {
    let brush = getBrush(fb.id);
    applyGrain(ctx, brush, k3, box.x, box.y, W2, H2);
  }
  return { canvas: c3, x: box.x, y: box.y, w: W2 / k3, h: H2 / k3, k: k3 };
}
function dilate(mask, W2, H2, r4) {
  if (r4 <= 0) return mask;
  let tmp = new Uint8Array(mask.length), out = new Uint8Array(mask.length);
  for (let y3 = 0; y3 < H2; y3++) {
    let last = -1e9;
    for (let x3 = 0; x3 < W2; x3++)
      mask[y3 * W2 + x3] && (last = x3), x3 - last <= r4 && (tmp[y3 * W2 + x3] = 1);
    last = 1e9;
    for (let x3 = W2 - 1; x3 >= 0; x3--)
      mask[y3 * W2 + x3] && (last = x3), last - x3 <= r4 && (tmp[y3 * W2 + x3] = 1);
  }
  for (let x3 = 0; x3 < W2; x3++) {
    let last = -1e9;
    for (let y3 = 0; y3 < H2; y3++)
      tmp[y3 * W2 + x3] && (last = y3), y3 - last <= r4 && (out[y3 * W2 + x3] = 1);
    last = 1e9;
    for (let y3 = H2 - 1; y3 >= 0; y3--)
      tmp[y3 * W2 + x3] && (last = y3), last - y3 <= r4 && (out[y3 * W2 + x3] = 1);
  }
  return out;
}
function floodRegion(wall, W2, H2, sx, sy) {
  let region = new Uint8Array(W2 * H2), stack = [sx, sy], leaked = !1, count = 0;
  for (; stack.length; ) {
    let y3 = stack.pop(), x3 = stack.pop(), row = y3 * W2;
    if (region[row + x3] || wall[row + x3]) continue;
    for (; x3 > 0 && !wall[row + x3 - 1] && !region[row + x3 - 1]; ) x3--;
    let upOpen = !1, downOpen = !1;
    for (; x3 < W2 && !wall[row + x3] && !region[row + x3]; x3++) {
      if (region[row + x3] = 1, count++, (x3 === 0 || x3 === W2 - 1 || y3 === 0 || y3 === H2 - 1) && (leaked = !0), y3 > 0) {
        let open = !wall[row - W2 + x3] && !region[row - W2 + x3];
        open && !upOpen && stack.push(x3, y3 - 1), upOpen = open;
      }
      if (y3 < H2 - 1) {
        let open = !wall[row + W2 + x3] && !region[row + W2 + x3];
        open && !downOpen && stack.push(x3, y3 + 1), downOpen = open;
      }
    }
    if (leaked) return { region, leaked, count };
  }
  return { region, leaked, count };
}
function traceContours(mask, W2, H2) {
  let at2 = (x3, y3) => x3 >= 0 && y3 >= 0 && x3 < W2 && y3 < H2 ? mask[y3 * W2 + x3] : 0, segs = /* @__PURE__ */ new Map(), key2 = (x3, y3) => `${x3},${y3}`, add = (a3, b3) => segs.set(key2(a3[0], a3[1]), b3);
  for (let y3 = -1; y3 < H2; y3++)
    for (let x3 = -1; x3 < W2; x3++) {
      let tl = at2(x3, y3), tr = at2(x3 + 1, y3), br = at2(x3 + 1, y3 + 1), bl = at2(x3, y3 + 1), c3 = tl * 8 + tr * 4 + br * 2 + bl;
      if (c3 === 0 || c3 === 15) continue;
      let T3 = [2 * x3 + 2, 2 * y3 + 1], R3 = [2 * x3 + 3, 2 * y3 + 2], B2 = [2 * x3 + 2, 2 * y3 + 3], L3 = [2 * x3 + 1, 2 * y3 + 2];
      switch (c3) {
        case 1:
          add(B2, L3);
          break;
        case 2:
          add(R3, B2);
          break;
        case 3:
          add(R3, L3);
          break;
        case 4:
          add(T3, R3);
          break;
        case 5:
          add(T3, L3), add(B2, R3);
          break;
        case 6:
          add(T3, B2);
          break;
        case 7:
          add(T3, L3);
          break;
        case 8:
          add(L3, T3);
          break;
        case 9:
          add(B2, T3);
          break;
        case 10:
          add(L3, B2), add(R3, T3);
          break;
        case 11:
          add(R3, T3);
          break;
        case 12:
          add(L3, R3);
          break;
        case 13:
          add(B2, R3);
          break;
        case 14:
          add(L3, B2);
          break;
      }
    }
  let loops = [];
  for (let [startKey] of segs) {
    if (!segs.has(startKey)) continue;
    let loop = [], k3 = startKey, guard = 0;
    for (; segs.has(k3) && guard++ < 2e6; ) {
      let next = segs.get(k3);
      segs.delete(k3);
      let [x3, y3] = k3.split(",").map(Number);
      loop.push([(x3 - 1) / 2, (y3 - 1) / 2]), k3 = key2(next[0], next[1]);
    }
    loop.length > 2 && loops.push(loop);
  }
  return loops;
}
function simplifyLoop(loop, eps) {
  if (loop.length < 8) return loop;
  let d22 = (p3, a4, b5) => {
    let dx = b5[0] - a4[0], dy = b5[1] - a4[1], l22 = dx * dx + dy * dy || 1, t3 = ((p3[0] - a4[0]) * dx + (p3[1] - a4[1]) * dy) / l22;
    return t3 = Math.max(0, Math.min(1, t3)), Math.hypot(a4[0] + t3 * dx - p3[0], a4[1] + t3 * dy - p3[1]);
  }, rdp2 = (pts) => {
    if (pts.length < 3) return pts;
    let idx = 0, dm = 0;
    for (let i3 = 1; i3 < pts.length - 1; i3++) {
      let d3 = d22(pts[i3], pts[0], pts[pts.length - 1]);
      d3 > dm && (dm = d3, idx = i3);
    }
    return dm <= eps ? [pts[0], pts[pts.length - 1]] : rdp2(pts.slice(0, idx + 1)).slice(0, -1).concat(rdp2(pts.slice(idx)));
  }, half = Math.floor(loop.length / 2), a3 = rdp2(loop.slice(0, half + 1)), b3 = rdp2(loop.slice(half).concat([loop[0]]));
  return a3.slice(0, -1).concat(b3.slice(0, -1));
}

// src/fx.js
var FX_KINDS = ["smudge", "blend", "blur", "burn", "dodge"], ALTER_KINDS = ["lighten", "darken", "aggregate", "texture", "soften"];
function cssVar(name, fallback) {
  return getComputedStyle(document.body).getPropertyValue(name).trim() || fallback;
}
function canvasFont(id) {
  let fam = fontFamily(id);
  return fam = fam.replace(/var\((--[\w-]+)\)/g, (_3, n3) => cssVar(n3, "sans-serif")), fam;
}
function paintOf(c3, env) {
  return env.resolveColor(c3);
}
function drawItem(ctx, item, k3, ox, oy, env) {
  if (item.rot && TURNS_BY_ANGLE(item)) return drawTurned(ctx, item, k3, ox, oy, env);
  if (item.inShape && env.lookup) {
    let sh = env.lookup(item.inShape);
    if (sh && sh.rot) return drawTurned(ctx, item, k3, ox, oy, env, sh);
  }
  return drawUpright(ctx, item, k3, ox, oy, env);
}
function drawTurned(ctx, item, k3, ox, oy, env, shape) {
  let turnBy = shape || item, upright = shape ? item : { ...item, rot: 0 }, b3 = itemBox(upright);
  if (!b3) return;
  let pad = 4, W2 = Math.max(1, Math.ceil((b3.width + pad * 2) * k3)), H2 = Math.max(1, Math.ceil((b3.height + pad * 2) * k3)), tmp = document.createElement("canvas");
  tmp.width = W2, tmp.height = H2, drawUpright(tmp.getContext("2d"), upright, k3, b3.x - pad, b3.y - pad, env);
  let [px, py] = rotPivot(turnBy);
  ctx.save(), ctx.translate((px - ox) * k3, (py - oy) * k3), ctx.rotate(turnBy.rot * Math.PI / 180), ctx.drawImage(tmp, (b3.x - pad - px) * k3, (b3.y - pad - py) * k3), ctx.restore(), tmp.width = tmp.height = 0;
}
function drawUpright(ctx, item, k3, ox, oy, env) {
  if (item.type === "group") {
    let r4 = renderGroup(item, k3, env, !env.noCache);
    r4 && ctx.drawImage(r4.canvas, (r4.x - ox) * k3, (r4.y - oy) * k3, r4.w * k3, r4.h * k3);
    return;
  }
  if (item.type === "image") return;
  if (item.type === "pixels") {
    drawPixels(ctx, item, k3, ox, oy, (c3) => paintOf(c3, env));
    return;
  }
  if (item.type === "fill") {
    let loops = fillLoopsOf(item, env.lookup), r4 = loops && renderFill(item, loops, k3, env);
    r4 && (ctx.save(), ctx.globalAlpha = itemOpacity(item), ctx.drawImage(r4.canvas, (r4.x - ox) * k3, (r4.y - oy) * k3, r4.w * k3, r4.h * k3), ctx.restore(), r4.canvas.width = r4.canvas.height = 0);
    return;
  }
  let alpha = itemOpacity(item), color = paintOf(item.color, env);
  if (ctx.save(), item.type === "stroke") {
    let brush = brushFor(item);
    if (brush.kind === "stamp") {
      let r4 = rasterizeStroke(item, brush, color, k3);
      r4 && (brush.wet && item.pigment !== !1 ? pigmentComposite(ctx, r4.canvas, (r4.x - ox) * k3, (r4.y - oy) * k3, r4.w * k3, r4.h * k3, alpha) : (ctx.globalAlpha = alpha, brush.blend && brush.blend !== "normal" && (ctx.globalCompositeOperation = brush.blend), ctx.drawImage(r4.canvas, (r4.x - ox) * k3, (r4.y - oy) * k3, r4.w * k3, r4.h * k3)), r4.canvas.width = r4.canvas.height = 0);
    } else
      ctx.setTransform(k3, 0, 0, k3, -ox * k3, -oy * k3), ctx.globalAlpha = alpha, ctx.fillStyle = color, ctx.fill(new Path2D(strokeD(item, { streamline: env.streamline })));
  } else if (item.type === "shape") {
    ctx.setTransform(k3, 0, 0, k3, -ox * k3, -oy * k3), ctx.globalAlpha = alpha, ctx.lineCap = "round", ctx.lineJoin = "round";
    let g3 = buildItemEl(item, { streamline: env.streamline, resolveColor: env.resolveColor, pixelScale: k3 });
    for (let el of g3.querySelectorAll("path")) {
      let p3 = new Path2D(el.getAttribute("d")), fill = el.getAttribute("fill");
      if (fill && fill !== "none" && (ctx.save(), ctx.globalAlpha = alpha * parseFloat(el.getAttribute("fill-opacity") || "1"), ctx.fillStyle = color, ctx.fill(p3), ctx.restore()), el.getAttribute("stroke") && el.getAttribute("stroke") !== "none") {
        ctx.strokeStyle = color, ctx.lineWidth = parseFloat(el.getAttribute("stroke-width") || "1");
        let dash = el.getAttribute("stroke-dasharray");
        ctx.setLineDash(dash ? dash.split(/[\s,]+/).map(Number) : []), ctx.stroke(p3);
      }
    }
  } else if (item.type === "text") {
    ctx.setTransform(k3, 0, 0, k3, -ox * k3, -oy * k3), ctx.globalAlpha = alpha, ctx.fillStyle = color, ctx.textBaseline = "alphabetic", ctx.font = `${item.fontSize}px ${canvasFont(item.font)}`;
    let lines = item.wrap ? wrapText(item.text, item.font, item.fontSize, item.wrap) : item.text.split(`
`);
    if (item.paint && item.paint.kind && item.paint.kind !== "solid") {
      let w3 = Math.max(1, ...lines.map((ln) => ctx.measureText(ln).width)), h3 = Math.max(1, lines.length * item.fontSize * 1.25);
      ctx.fillStyle = textPaintStyle(ctx, item, color, { x: item.x, y: item.y, w: w3, h: h3 });
    }
    let fill = ctx.fillStyle, drawLines = (dx = 0, dy = 0) => lines.forEach((ln, i3) => ctx.fillText(ln, item.x + dx, item.y + dy + item.fontSize * 0.92 + i3 * item.fontSize * 1.25));
    for (let ef of orderedEffects(item)) {
      let P3 = effectParams(ef, item, color), ec2 = P3.color;
      if (ctx.lineJoin = "round", P3.kind === "outline")
        ctx.strokeStyle = ec2, ctx.lineWidth = P3.w * 2, lines.forEach((ln, i3) => ctx.strokeText(ln, item.x, item.y + item.fontSize * 0.92 + i3 * item.fontSize * 1.25));
      else if (P3.kind === "shadow")
        ctx.save(), ctx.globalAlpha = alpha * 0.55, ctx.shadowColor = ec2, ctx.shadowBlur = P3.blur * 2 * k3, ctx.shadowOffsetX = P3.ux * P3.d * k3, ctx.shadowOffsetY = P3.uy * P3.d * k3, ctx.fillStyle = ec2, ctx.shadowOffsetX += 1e5, drawLines(-1e5 / k3, 0), ctx.restore();
      else if (P3.kind === "glow") {
        ctx.save(), ctx.shadowColor = ec2, ctx.shadowBlur = P3.sd * 2 * k3, ctx.fillStyle = ec2, ctx.strokeStyle = ec2, ctx.lineWidth = P3.u * 0.08;
        for (let r4 = 0; r4 < 2; r4++)
          lines.forEach((ln, i3) => ctx.strokeText(ln, item.x, item.y + item.fontSize * 0.92 + i3 * item.fontSize * 1.25)), drawLines();
        ctx.restore();
      } else if (P3.kind === "emboss")
        ctx.fillStyle = P3.light, drawLines(-P3.ux * P3.d, -P3.uy * P3.d), ctx.fillStyle = P3.dark, drawLines(P3.ux * P3.d, P3.uy * P3.d);
      else if (P3.kind === "extrude") {
        ctx.fillStyle = ec2, ctx.strokeStyle = ec2, ctx.lineWidth = P3.u * 0.012;
        for (let i3 = P3.n; i3 >= 1; i3--) {
          let dx = P3.ux * P3.depth * i3 / P3.n, dy = P3.uy * P3.depth * i3 / P3.n;
          lines.forEach((ln, j3) => ctx.strokeText(ln, item.x + dx, item.y + dy + item.fontSize * 0.92 + j3 * item.fontSize * 1.25)), drawLines(dx, dy);
        }
      }
      ctx.fillStyle = fill;
    }
    drawLines();
  }
  ctx.restore();
}
function textPaintStyle(ctx, item, color, box) {
  let st2 = item.paint, c22 = st2.color2 || "#f08c00";
  if (st2.kind === "gradient") {
    let a3 = (st2.angle || 0) * Math.PI / 180, cx = box.x + box.w / 2, cy = box.y + box.h / 2, half = (Math.abs(Math.cos(a3)) * box.w + Math.abs(Math.sin(a3)) * box.h) / 2, g3 = ctx.createLinearGradient(cx - Math.cos(a3) * half, cy - Math.sin(a3) * half, cx + Math.cos(a3) * half, cy + Math.sin(a3) * half);
    return g3.addColorStop(0, color), g3.addColorStop(1, c22), g3;
  }
  let u3 = Math.max(2, (item.fontSize || 24) / 7), t3 = document.createElement("canvas");
  t3.width = t3.height = Math.max(2, Math.round(u3 * 2));
  let x3 = t3.getContext("2d");
  x3.fillStyle = color, x3.fillRect(0, 0, t3.width, t3.height), x3.fillStyle = c22, x3.strokeStyle = c22;
  let kind = st2.pattern || "dots";
  if (kind === "dots")
    x3.beginPath(), x3.arc(u3, u3, u3 * 0.42, 0, Math.PI * 2), x3.fill();
  else if (kind === "lines") x3.fillRect(0, 0, u3 * 2, u3 * 0.7);
  else if (kind === "hatch")
    x3.lineWidth = u3 * 0.5, x3.beginPath(), x3.moveTo(0, u3 * 2), x3.lineTo(u3 * 2, 0), x3.stroke();
  else if (kind === "check")
    x3.fillRect(0, 0, u3, u3), x3.fillRect(u3, u3, u3, u3);
  else for (let i3 = 0; i3 < 5; i3++)
    x3.beginPath(), x3.arc(i3 * 37 % 10 / 10 * u3 * 2, i3 * 71 % 10 / 10 * u3 * 2, u3 * 0.18, 0, Math.PI * 2), x3.fill();
  return ctx.createPattern(t3, "repeat") || color;
}
function readRect(ctx, x3, y3, w3, h3) {
  let d3 = ctx.getImageData(x3, y3, w3, h3).data, f3 = new Float32Array(w3 * h3 * 4);
  for (let i3 = 0; i3 < d3.length; i3 += 4) {
    let a3 = d3[i3 + 3] / 255;
    f3[i3] = d3[i3] / 255 * a3, f3[i3 + 1] = d3[i3 + 1] / 255 * a3, f3[i3 + 2] = d3[i3 + 2] / 255 * a3, f3[i3 + 3] = a3;
  }
  return f3;
}
function writeRect(ctx, f3, x3, y3, w3, h3) {
  let img = ctx.createImageData(w3, h3), d3 = img.data;
  for (let i3 = 0; i3 < f3.length; i3 += 4) {
    let a3 = Math.max(0, Math.min(1, f3[i3 + 3]));
    d3[i3 + 3] = Math.round(a3 * 255), a3 > 1e-4 && (d3[i3] = Math.min(255, Math.round(f3[i3] / a3 * 255)), d3[i3 + 1] = Math.min(255, Math.round(f3[i3 + 1] / a3 * 255)), d3[i3 + 2] = Math.min(255, Math.round(f3[i3 + 2] / a3 * 255)));
  }
  ctx.putImageData(img, x3, y3);
}
var scratchA = new Float32Array(0), scratchB = new Float32Array(0);
function scratch(which, n3) {
  let a3 = which ? scratchB : scratchA;
  return a3.length < n3 && (a3 = new Float32Array(Math.max(n3, a3.length * 2)), which ? scratchB = a3 : scratchA = a3), a3.length === n3 ? a3 : a3.subarray(0, n3);
}
function blurred(f3, w3, h3, r4, inset) {
  let c3 = scratch(0, w3 * h3 * 4);
  return c3.set(f3), boxBlur(c3, w3, h3, r4, inset);
}
function boxBlur(f3, w3, h3, r4, inset = 0) {
  if (r4 < 1) return f3;
  let tmp = scratch(1, w3 * h3 * 4), inv = 1 / (2 * r4 + 1), stride = w3 * 4, hsweep = (src, dst, y3, lo, hi) => {
    let base = y3 * stride, idx = (i3) => base + (i3 < 0 ? 0 : i3 > w3 - 1 ? w3 - 1 : i3) * 4, a0 = 0, a1 = 0, a22 = 0, a3 = 0;
    for (let i3 = lo - r4; i3 <= lo + r4; i3++) {
      let j3 = idx(i3);
      a0 += src[j3], a1 += src[j3 + 1], a22 += src[j3 + 2], a3 += src[j3 + 3];
    }
    for (let x3 = lo; x3 < hi; x3++) {
      let o3 = base + x3 * 4;
      dst[o3] = a0 * inv, dst[o3 + 1] = a1 * inv, dst[o3 + 2] = a22 * inv, dst[o3 + 3] = a3 * inv;
      let add = idx(x3 + r4 + 1), sub = idx(x3 - r4);
      a0 += src[add] - src[sub], a1 += src[add + 1] - src[sub + 1], a22 += src[add + 2] - src[sub + 2], a3 += src[add + 3] - src[sub + 3];
    }
  }, acc = new Float32Array(stride), rowAt = (y3) => (y3 < 0 ? 0 : y3 > h3 - 1 ? h3 - 1 : y3) * stride, vpass = (src, dst, x0, x1, y0, y1) => {
    let j0 = x0 * 4, j1 = x1 * 4;
    acc.fill(0, j0, j1);
    for (let i3 = y0 - r4; i3 <= y0 + r4; i3++) {
      let o3 = rowAt(i3);
      for (let j3 = j0; j3 < j1; j3++) acc[j3] += src[o3 + j3];
    }
    for (let y3 = y0; y3 < y1; y3++) {
      let o3 = y3 * stride, ad = rowAt(y3 + r4 + 1), sb = rowAt(y3 - r4);
      for (let j3 = j0; j3 < j1; j3++)
        dst[o3 + j3] = acc[j3] * inv, acc[j3] += src[ad + j3] - src[sb + j3];
    }
  };
  for (let n3 = 0; n3 < 3; n3++) {
    let pad = Math.max(0, inset - (2 - n3) * r4), x0 = Math.min(pad, w3), x1 = Math.max(x0, w3 - pad), y0 = Math.min(pad, h3), y1 = Math.max(y0, h3 - pad);
    for (let y3 = Math.max(0, y0 - r4); y3 < Math.min(h3, y1 + r4); y3++) hsweep(f3, tmp, y3, x0, x1);
    vpass(tmp, f3, x0, x1, y0, y1);
  }
  return f3;
}
function blurInset(m3, cx, cy, R3, x0, y0, x1, y1) {
  return Math.max(0, Math.min(m3, Math.floor(cx - R3) - x0, x1 - Math.ceil(cx + R3), Math.floor(cy - R3) - y0, y1 - Math.ceil(cy + R3)));
}
var alphaCache2 = /* @__PURE__ */ new WeakMap();
function alphaOf2(canvas) {
  if (!canvas) return null;
  let a3 = alphaCache2.get(canvas);
  if (a3) return a3;
  let d3 = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
  a3 = { w: canvas.width, h: canvas.height, v: new Float32Array(canvas.width * canvas.height) };
  for (let i3 = 0; i3 < a3.v.length; i3++) a3.v[i3] = d3[i3 * 4 + 3] / 255;
  return alphaCache2.set(canvas, a3), a3;
}
function fxBrush(fx) {
  return getBrush(fx.brush || (fx.kind === "erase" ? "hardround" : "softround"));
}
var clamp01 = (v3) => v3 < 0 ? 0 : v3 > 1 ? 1 : v3;
function hexRGB(c3) {
  if (!c3 || typeof c3 != "string") return null;
  let m3 = /^#([0-9a-f]{6})/i.exec(c3);
  if (m3) {
    let n3 = parseInt(m3[1], 16);
    return [(n3 >> 16 & 255) / 255, (n3 >> 8 & 255) / 255, (n3 & 255) / 255];
  }
  return m3 = /^#([0-9a-f]{3})$/i.exec(c3), m3 ? m3[1].split("").map((h3) => parseInt(h3 + h3, 16) / 255) : (m3 = /^rgba?\(([^)]+)\)/i.exec(c3), m3 ? m3[1].split(",").slice(0, 3).map((v3) => parseFloat(v3) / 255) : null);
}
function hsl(r4, g3, b3) {
  let max2 = Math.max(r4, g3, b3), min = Math.min(r4, g3, b3), d3 = max2 - min, l3 = (max2 + min) / 2;
  if (!d3) return [0, 0, l3];
  let s3 = d3 / (1 - Math.abs(2 * l3 - 1)), h3;
  return max2 === r4 ? h3 = (g3 - b3) / d3 % 6 : max2 === g3 ? h3 = (b3 - r4) / d3 + 2 : h3 = (r4 - g3) / d3 + 4, h3 /= 6, h3 < 0 && (h3 += 1), [h3, Math.min(1, s3), l3];
}
function rgb(h3, s3, l3) {
  l3 = clamp01(l3), s3 = clamp01(s3);
  let c3 = (1 - Math.abs(2 * l3 - 1)) * s3, hp = h3 * 6, x3 = c3 * (1 - Math.abs(hp % 2 - 1)), m3 = l3 - c3 / 2, [r4, g3, b3] = hp < 1 ? [c3, x3, 0] : hp < 2 ? [x3, c3, 0] : hp < 3 ? [0, c3, x3] : hp < 4 ? [0, x3, c3] : hp < 5 ? [x3, 0, c3] : [c3, 0, x3];
  return [r4 + m3, g3 + m3, b3 + m3];
}
var colorDist = (a3, b3) => Math.sqrt(((a3[0] - b3[0]) ** 2 + (a3[1] - b3[1]) ** 2 + (a3[2] - b3[2]) ** 2) / 3);
function hash2(x3, y3, seed) {
  let h3 = Math.imul(x3 | 0, 374761393) ^ Math.imul(y3 | 0, 668265263) ^ Math.imul(seed | 0, 2246822519);
  return h3 = Math.imul(h3 ^ h3 >>> 13, 3266489917), ((h3 ^ h3 >>> 16) >>> 0) / 4294967296;
}
function valueNoise(x3, y3, seed) {
  let x0 = Math.floor(x3), y0 = Math.floor(y3), tx = x3 - x0, ty = y3 - y0, sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty), a3 = hash2(x0, y0, seed), b3 = hash2(x0 + 1, y0, seed), c3 = hash2(x0, y0 + 1, seed), d3 = hash2(x0 + 1, y0 + 1, seed);
  return a3 + (b3 - a3) * sx + (c3 - a3) * sy + (a3 - b3 - c3 + d3) * sx * sy;
}
var IS_MOBILE2 = typeof document < "u" && !!(document.body && document.body.classList && document.body.classList.contains("is-mobile")), BUF_PIXELS = IS_MOBILE2 ? 16e5 : 32e5, FxRunner = class {
  /**
   * opts.buffer: replay the effect in memory and write it back on finish() (final renders).
   * Without it, every dab lands on ctx straight away (the live preview).
   */
  constructor(fx, ctx, W2, H2, k3, ox, oy, opts = {}) {
    var _a2, _b2, _c;
    Object.assign(this, { fx, ctx, W: W2, H: H2, k: k3, ox, oy }), this.s = Math.max(0, Math.min(1, ((_a2 = fx.strength) != null ? _a2 : 70) / 100));
    let b3 = fxBrush(fx);
    this.brush = fx.kind === "erase" ? b3 : { ...b3, spacing: Math.max((_b2 = b3.spacing) != null ? _b2 : 0.1, 0.12) }, this.shape = alphaOf2(shapeCanvas(this.brush)), this.grain = alphaOf2(grainMask(this.brush)), this.grainTile = 110 * (this.brush.grainScale || 1), this.walker = new DabWalker({ size: fx.size, pressure: fx.pressure, seed: 1 }, this.brush), this.fed = 0;
    let len = 0;
    for (let i3 = 1; i3 < fx.points.length; i3++) len += Math.hypot(fx.points[i3][0] - fx.points[i3 - 1][0], fx.points[i3][1] - fx.points[i3 - 1][1]);
    if (this.dabsExpected = len / Math.max(0.5, ((_c = this.brush.spacing) != null ? _c : 0.12) * fx.size), fx.kind === "erase")
      this.mask = document.createElement("canvas"), this.mask.width = W2, this.mask.height = H2, this.mctx = this.mask.getContext("2d");
    else if (opts.buffer && Number.isFinite(fx.size) && fx.points && fx.points.length) {
      let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
      for (let p3 of fx.points)
        p3[0] < x0 && (x0 = p3[0]), p3[1] < y0 && (y0 = p3[1]), p3[0] > x1 && (x1 = p3[0]), p3[1] > y1 && (y1 = p3[1]);
      let reach = Math.ceil(fx.size * k3 * 1.6 + 8), bx0 = Math.max(0, Math.floor((x0 - ox) * k3) - reach), by0 = Math.max(0, Math.floor((y0 - oy) * k3) - reach), bx1 = Math.min(W2, Math.ceil((x1 - ox) * k3) + reach), by1 = Math.min(H2, Math.ceil((y1 - oy) * k3) + reach), bw = bx1 - bx0, bh = by1 - by0;
      bw > 0 && bh > 0 && bw * bh <= BUF_PIXELS && (this.buf = readRect(ctx, bx0, by0, bw, bh), this.bx = bx0, this.by = by0, this.bw = bw, this.bh = bh);
    }
  }
  /** Pixels of a rect as floats: from the buffer when there is one, else from the canvas. */
  read(x0, y0, w3, h3) {
    if (!this.buf) return readRect(this.ctx, x0, y0, w3, h3);
    let f3 = new Float32Array(w3 * h3 * 4), cx0 = Math.max(x0, this.bx), cx1 = Math.min(x0 + w3, this.bx + this.bw);
    if (cx1 <= cx0) return f3;
    let cw = (cx1 - cx0) * 4;
    for (let y3 = Math.max(y0, this.by), yEnd = Math.min(y0 + h3, this.by + this.bh); y3 < yEnd; y3++) {
      let src = ((y3 - this.by) * this.bw + (cx0 - this.bx)) * 4;
      f3.set(this.buf.subarray(src, src + cw), ((y3 - y0) * w3 + (cx0 - x0)) * 4);
    }
    return f3;
  }
  write(f3, x0, y0, w3, h3) {
    if (!this.buf) return writeRect(this.ctx, f3, x0, y0, w3, h3);
    let cx0 = Math.max(x0, this.bx), cx1 = Math.min(x0 + w3, this.bx + this.bw);
    if (cx1 <= cx0) return;
    let cw = (cx1 - cx0) * 4;
    for (let y3 = Math.max(y0, this.by), yEnd = Math.min(y0 + h3, this.by + this.bh); y3 < yEnd; y3++) {
      let src = ((y3 - y0) * w3 + (cx0 - x0)) * 4;
      this.buf.set(f3.subarray(src, src + cw), ((y3 - this.by) * this.bw + (cx0 - this.bx)) * 4);
    }
  }
  /** Feed points from fx.points[this.fed…]. Returns true if anything changed. */
  catchUp() {
    let changed = !1;
    if (this.pendingDabs && this.pendingDabs.length) {
      for (let d3 of this.pendingDabs) this.dab(d3);
      this.pendingDabs = null, this.fed++, changed = !0;
    }
    let pts = this.fx.points;
    for (; this.fed < pts.length; ) {
      for (let d3 of this.walker.feed(pts[this.fed]))
        this.dab(d3), changed = !0;
      this.fed++;
    }
    return changed;
  }
  /** Like catchUp, but stops after `ms` milliseconds. Returns true when all points are done. */
  catchUpBudget(ms) {
    let end = now() + ms, pts = this.fx.points;
    for (; this.fed < pts.length; ) {
      for ((!this.pendingDabs || !this.pendingDabs.length) && (this.pendingDabs = this.walker.feed(pts[this.fed])); this.pendingDabs.length; )
        if (this.dab(this.pendingDabs.shift()), this.dirty = !0, now() > end) return !1;
      this.fed++;
    }
    return !0;
  }
  /** Weight (0..1) of a dab at pixel (x, y): brush shape, rotation, roundness and grain. */
  weightFn(d3) {
    var _a2;
    let k3 = this.k, sh = this.shape, gr = this.grain, D3 = d3.d * k3, cx = (d3.x - this.ox) * k3, cy = (d3.y - this.oy) * k3, cos = Math.cos(d3.a), sin = Math.sin(d3.a), round = (_a2 = this.brush.roundness) != null ? _a2 : 1, su = sh.w / (D3 * d3.fx), sv = sh.w / (D3 * round * d3.fy), tile = this.grainTile;
    return (x3, y3) => {
      let dx = x3 + 0.5 - cx, dy = y3 + 0.5 - cy, u3 = (cos * dx + sin * dy) * su + sh.w / 2, v3 = (-sin * dx + cos * dy) * sv + sh.h / 2;
      if (u3 < 0 || v3 < 0 || u3 >= sh.w || v3 >= sh.h) return 0;
      let w3 = sh.v[(v3 | 0) * sh.w + (u3 | 0)];
      if (gr && w3 > 0) {
        let px = this.ox + (x3 + 0.5) / k3, py = this.oy + (y3 + 0.5) / k3, gx = px / tile * gr.w % gr.w, gy = py / tile * gr.h % gr.h;
        gx < 0 && (gx += gr.w), gy < 0 && (gy += gr.h), w3 *= gr.v[(gy | 0) * gr.w + (gx | 0)];
      }
      return w3;
    };
  }
  dab(d3) {
    var _a2;
    let kind = this.fx.kind;
    if (kind === "erase") {
      drawDabs(this.mctx, [{ ...d3, alpha: Math.min(1, d3.alpha * 1.5) }], this.brush, "#000", this.k, this.ox, this.oy);
      return;
    }
    let R3 = Math.max(1.5, d3.d * this.k / 2) * 1.05, cx = (d3.x - this.ox) * this.k, cy = (d3.y - this.oy) * this.k, weight = this.weightFn(d3);
    if (kind === "smudge") return this.smudgeDab(cx, cy, R3, d3, weight);
    if (ALTER_KINDS.includes(kind)) return this.alterDab(cx, cy, R3, d3, weight);
    let blurR = kind === "blur" || kind === "blend" ? Math.max(1, Math.round(R3 * (kind === "blur" ? 0.35 : 0.3))) : 0, m3 = blurR * 3 + 1, x0 = Math.max(0, Math.floor(cx - R3 - m3)), y0 = Math.max(0, Math.floor(cy - R3 - m3)), x1 = Math.min(this.W, Math.ceil(cx + R3 + m3)), y1 = Math.min(this.H, Math.ceil(cy + R3 + m3)), w3 = x1 - x0, h3 = y1 - y0;
    if (w3 <= 0 || h3 <= 0) return;
    let f3 = this.read(x0, y0, w3, h3), bl = blurR ? blurred(f3, w3, h3, blurR, blurInset(m3, cx, cy, R3, x0, y0, x1, y1)) : null, flow = Math.min(1, d3.alpha / Math.max(0.05, (_a2 = this.brush.flow) != null ? _a2 : 1)), amt = this.s * (0.35 + 0.65 * flow) * (kind === "blur" ? 0.55 : kind === "blend" ? 0.45 : 0.35);
    for (let y3 = Math.max(0, Math.floor(cy - R3 - y0)); y3 < Math.min(h3, Math.ceil(cy + R3 - y0)); y3++)
      for (let x3 = Math.max(0, Math.floor(cx - R3 - x0)); x3 < Math.min(w3, Math.ceil(cx + R3 - x0)); x3++) {
        let wt = weight(x3 + x0, y3 + y0);
        if (wt <= 0) continue;
        let t3 = wt * amt, j3 = (y3 * w3 + x3) * 4, a3 = f3[j3 + 3];
        if (kind === "blur")
          for (let c3 = 0; c3 < 4; c3++) f3[j3 + c3] += (bl[j3 + c3] - f3[j3 + c3]) * t3;
        else if (kind === "blend") {
          let ba = bl[j3 + 3];
          if (a3 <= 1e-4 || ba <= 1e-4) continue;
          for (let c3 = 0; c3 < 3; c3++) f3[j3 + c3] += (bl[j3 + c3] / ba * a3 - f3[j3 + c3]) * t3;
        } else if (kind === "burn")
          for (let c3 = 0; c3 < 3; c3++) f3[j3 + c3] -= f3[j3 + c3] * t3;
        else if (kind === "dodge")
          for (let c3 = 0; c3 < 3; c3++) f3[j3 + c3] += (a3 - f3[j3 + c3]) * t3;
      }
    this.write(f3, x0, y0, w3, h3);
  }
  /**
   * The Alter brush. Everything is keyed to canvas coordinates, so a stroke looks the same
   * every time it's re-rendered, at any zoom:
   *  lighten / darken – shift the color's own lightness, keeping its hue
   *  aggregate       – vary lightness and saturation pixel by pixel, plus prismatic color
   *  texture         – grit, noise, haze, dither or cracks laid over the ink
   *  soften          – even colors out towards a target color
   * Only ink that's already there changes, unless "add new ink" is on.
   */
  alterDab(cx, cy, R3, d3, weight) {
    var _a2, _b2;
    let fx = this.fx, kind = fx.kind, A3 = fx.alter || {}, addNew = !!A3.addNew && (kind === "aggregate" || kind === "texture"), soft = kind === "soften", n3 = this.dabN = (this.dabN || 0) + 1, seed = (fx.seed || 7) | 0, rnd = (k3) => hash2(n3, k3, seed), blurR = soft ? Math.max(1, Math.round(R3 * 0.3)) : 0, m3 = blurR * 3 + 1, x0 = Math.max(0, Math.floor(cx - R3 - m3)), y0 = Math.max(0, Math.floor(cy - R3 - m3)), x1 = Math.min(this.W, Math.ceil(cx + R3 + m3)), y1 = Math.min(this.H, Math.ceil(cy + R3 + m3)), w3 = x1 - x0, h3 = y1 - y0;
    if (w3 <= 0 || h3 <= 0) return;
    let f3 = this.read(x0, y0, w3, h3), bl = soft ? blurred(f3, w3, h3, blurR, blurInset(m3, cx, cy, R3, x0, y0, x1, y1)) : null, flow = Math.min(1, d3.alpha / Math.max(0.05, (_a2 = this.brush.flow) != null ? _a2 : 1)), amt = this.s * (0.35 + 0.65 * flow), base = hexRGB(A3.color) || [0, 0, 0], tex = hexRGB((A3.texture || {}).color) || base, prism = A3.prism || {}, second = hexRGB(prism.secondary) || [0, 0.72, 0.66], pAmt = Math.pow(Math.max(0, Math.min(100, prism.amount || 0)) / 100, 1.8), target = hexRGB((A3.soften || {}).target) || base, range = Math.max(0.05, ((_b2 = (A3.soften || {}).range) != null ? _b2 : 50) / 100), type = (A3.texture || {}).type || "grit", dL = 0, dS = 0, dH = 0, tint = null, tintAmt = 0;
    if (kind === "aggregate") {
      if (dL = (rnd(1) * 2 - 1) * 0.2, dS = (rnd(2) * 2 - 1) * 0.4, pAmt > 0)
        if (prism.mode === "secondary")
          tint = second, tintAmt = pAmt * (0.15 + 0.5 * rnd(3));
        else if (prism.mode === "gradient")
          tint = second, tintAmt = pAmt * Math.min(1, n3 / Math.max(1, this.dabsExpected || 40));
        else if (prism.mode === "nearby") {
          let ang = rnd(4) * Math.PI * 2, rr = R3 * 0.8, sx = Math.round(cx - x0 + Math.cos(ang) * rr), sy = Math.round(cy - y0 + Math.sin(ang) * rr);
          if (sx >= 0 && sy >= 0 && sx < w3 && sy < h3) {
            let q2 = (sy * w3 + sx) * 4, qa = f3[q2 + 3];
            qa > 0.1 && (tint = [f3[q2] / qa, f3[q2 + 1] / qa, f3[q2 + 2] / qa], tintAmt = pAmt * (0.3 + 0.4 * rnd(5)));
          }
        } else dH = (rnd(6) * 2 - 1) * pAmt * 0.125;
    } else kind === "texture" && (type === "noise" ? dL = (rnd(1) - 0.5) * 0.45 : type === "haze" && (tint = tex, tintAmt = 0.35 * (0.5 + 0.5 * rnd(2))));
    let specks = [];
    if (kind === "texture" && type === "grit") {
      let count = 4 + Math.round(rnd(9) * 5);
      for (let i3 = 0; i3 < count; i3++) {
        let ang = rnd(10 + i3) * Math.PI * 2, rr = Math.sqrt(rnd(20 + i3)) * R3 * 0.85, dark = rnd(40 + i3) < 0.7;
        specks.push({ x: cx - x0 + Math.cos(ang) * rr, y: cy - y0 + Math.sin(ang) * rr, r: Math.max(1.5, R3 * (0.07 + 0.12 * rnd(30 + i3))), s: dark ? -(0.45 + 0.5 * rnd(50 + i3)) : 0.35 + 0.4 * rnd(50 + i3) });
      }
    }
    let cell = Math.max(1.5, R3 * 0.28);
    for (let y3 = Math.max(0, Math.floor(cy - R3 - y0)); y3 < Math.min(h3, Math.ceil(cy + R3 - y0)); y3++)
      for (let x3 = Math.max(0, Math.floor(cx - R3 - x0)); x3 < Math.min(w3, Math.ceil(cx + R3 - x0)); x3++) {
        let wt = weight(x3 + x0, y3 + y0);
        if (wt <= 0) continue;
        let t3 = Math.min(1, wt * amt), j3 = (y3 * w3 + x3) * 4, a3 = f3[j3 + 3];
        if (a3 < 0.06) {
          if (!addNew) continue;
          a3 = Math.min(1, t3), f3[j3] = base[0] * a3, f3[j3 + 1] = base[1] * a3, f3[j3 + 2] = base[2] * a3, f3[j3 + 3] = a3;
        }
        let r4 = f3[j3] / a3, g3 = f3[j3 + 1] / a3, b3 = f3[j3 + 2] / a3;
        if (kind === "lighten" || kind === "darken") {
          let [hh, ss, ll] = hsl(r4, g3, b3), nl = kind === "lighten" ? ll + (1 - ll) * t3 * 0.55 : ll - ll * t3 * 0.55;
          [r4, g3, b3] = rgb(hh, Math.max(0, ss * (1 - t3 * t3 * 0.5)), nl);
        } else if (kind === "aggregate" || kind === "texture" && (type === "noise" || type === "haze")) {
          if (dL || dS || dH) {
            let [hh, ss, ll] = hsl(r4, g3, b3);
            ll = clamp01(ll + dL * t3), ss = clamp01(ss * (1 + dS * t3)), hh = (hh + dH * t3 + 1) % 1, [r4, g3, b3] = rgb(hh, ss, ll);
          }
          if (tint) {
            let k22 = tintAmt * t3;
            r4 += (tint[0] - r4) * k22, g3 += (tint[1] - g3) * k22, b3 += (tint[2] - b3) * k22;
          }
        } else if (kind === "texture" && type === "grit")
          for (let sp of specks) {
            let dd = Math.hypot(x3 + 0.5 - sp.x, y3 + 0.5 - sp.y);
            if (dd >= sp.r) continue;
            let fall = 1 - dd / sp.r, k22 = Math.min(1, fall * 1.6) * Math.min(1, t3 * 1.8) * sp.s;
            k22 < 0 ? (r4 *= 1 + k22, g3 *= 1 + k22, b3 *= 1 + k22) : (r4 += (1 - r4) * k22, g3 += (1 - g3) * k22, b3 += (1 - b3) * k22);
          }
        else if (kind === "texture" && type === "dither") {
          let px = this.ox + (x3 + x0 + 0.5) / this.k, py = this.oy + (y3 + y0 + 0.5) / this.k, cu = cell / this.k;
          if ((Math.floor(px / cu) + Math.floor(py / cu)) % 2 === 0) {
            let k22 = t3 * 0.8;
            r4 += (tex[0] - r4) * k22, g3 += (tex[1] - g3) * k22, b3 += (tex[2] - b3) * k22;
          }
        } else if (kind === "texture" && type === "cracks") {
          let px = this.ox + (x3 + x0 + 0.5) / this.k, py = this.oy + (y3 + y0 + 0.5) / this.k, unit = Math.max(0.6, fx.size / 14), v3 = valueNoise(px / (unit * 9), py / (unit * 9), seed + 17);
          if (Math.abs(v3 - 0.5) < 0.018 + 0.03 * t3) {
            let cm = 0.6 * t3 + 0.25;
            r4 += (tex[0] - r4) * cm, g3 += (tex[1] - g3) * cm, b3 += (tex[2] - b3) * cm;
          }
        } else if (soft) {
          let near = Math.max(0, 1 - colorDist([r4, g3, b3], target) / range);
          if (near <= 0) continue;
          let ba = bl[j3 + 3];
          if (ba > 0.06) {
            let m22 = t3 * near * 0.85;
            r4 += (bl[j3] / ba - r4) * m22, g3 += (bl[j3 + 1] / ba - g3) * m22, b3 += (bl[j3 + 2] / ba - b3) * m22;
          }
          let pull = t3 * near * 0.3;
          r4 += (target[0] - r4) * pull, g3 += (target[1] - g3) * pull, b3 += (target[2] - b3) * pull;
        }
        f3[j3] = clamp01(r4) * a3, f3[j3 + 1] = clamp01(g3) * a3, f3[j3 + 2] = clamp01(b3) * a3, f3[j3 + 3] = a3;
      }
    this.write(f3, x0, y0, w3, h3);
  }
  /** Smudge: carry paint picked up under the brush and lay it down further along. */
  smudgeDab(cx, cy, R3, d3, weight) {
    var _a2;
    this.N || (this.R = Math.max(2, Math.round(this.fx.size * this.k / 2 * 1.1)), this.N = 2 * this.R + 1);
    let Rr = this.R, N3 = this.N, x0 = Math.round(cx) - Rr, y0 = Math.round(cy) - Rr, rx0 = Math.max(0, x0), ry0 = Math.max(0, y0), rx1 = Math.min(this.W, x0 + N3), ry1 = Math.min(this.H, y0 + N3), w3 = rx1 - rx0, h3 = ry1 - ry0;
    if (w3 <= 0 || h3 <= 0) return;
    let f3 = this.read(rx0, ry0, w3, h3), at2 = (x3, y3) => x3 < rx0 || y3 < ry0 || x3 >= rx1 || y3 >= ry1 ? -1 : ((y3 - ry0) * w3 + (x3 - rx0)) * 4;
    if (!this.P) {
      this.P = new Float32Array(N3 * N3 * 4);
      for (let y3 = 0; y3 < N3; y3++) for (let x3 = 0; x3 < N3; x3++) {
        let j3 = at2(x0 + x3, y0 + y3), pj = (y3 * N3 + x3) * 4;
        if (j3 >= 0) for (let c3 = 0; c3 < 4; c3++) this.P[pj + c3] = f3[j3 + c3];
      }
      return;
    }
    let flow = Math.min(1, d3.alpha / Math.max(0.05, (_a2 = this.brush.flow) != null ? _a2 : 1)), amt = 0.9 * this.s * (0.4 + 0.6 * flow), pick = 0.08 + 0.5 * (1 - this.s);
    for (let y3 = 0; y3 < N3; y3++) for (let x3 = 0; x3 < N3; x3++) {
      let j3 = at2(x0 + x3, y0 + y3), pj = (y3 * N3 + x3) * 4, t3 = weight(x0 + x3, y0 + y3) * amt;
      for (let c3 = 0; c3 < 4; c3++) {
        let under = j3 >= 0 ? f3[j3 + c3] : 0, laid = t3 > 0 ? under + (this.P[pj + c3] - under) * t3 : under;
        j3 >= 0 && (f3[j3 + c3] = laid), this.P[pj + c3] += (laid - this.P[pj + c3]) * pick;
      }
    }
    this.write(f3, rx0, ry0, w3, h3);
  }
  /** The erase mask with the brush's grain applied. */
  grainedMask() {
    if (!this.brush.grain) return this.mask;
    this.gm || (this.gm = document.createElement("canvas"), this.gm.width = this.W, this.gm.height = this.H);
    let g3 = this.gm.getContext("2d");
    return g3.clearRect(0, 0, this.W, this.H), g3.drawImage(this.mask, 0, 0), applyGrain(g3, this.brush, this.k, this.ox, this.oy, this.W, this.H), this.gm;
  }
  /** Final render: bake an erase mask into the canvas. */
  finish() {
    this.buf && (writeRect(this.ctx, this.buf, this.bx, this.by, this.bw, this.bh), this.buf = null), this.fx.kind === "erase" && (this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.globalCompositeOperation = "destination-out", this.ctx.globalAlpha = this.s, this.ctx.drawImage(this.grainedMask(), 0, 0), this.ctx.restore(), this.mask.width = this.mask.height = 0, this.gm && (this.gm.width = this.gm.height = 0));
  }
  /** Live preview: show the work canvas (with the erase mask applied) on `out`. */
  present(out) {
    out.clearRect(0, 0, this.W, this.H), out.drawImage(this.ctx.canvas, 0, 0), this.mask && (out.save(), out.globalCompositeOperation = "destination-out", out.globalAlpha = this.s, out.drawImage(this.grainedMask(), 0, 0), out.restore());
  }
};
function applyFx(ctx, W2, H2, fx, k3, ox, oy) {
  let r4 = new FxRunner(fx, ctx, W2, H2, k3, ox, oy, { buffer: !0 });
  r4.catchUp(), r4.finish();
}
var MAX_SIDE3 = IS_MOBILE2 ? 3072 : 4096, MAX_AREA3 = IS_MOBILE2 ? 35e5 : 6e6, now = () => typeof performance < "u" ? performance.now() : Date.now(), pause = () => new Promise((r4) => setTimeout(r4, 0)), cache = [], derived = /* @__PURE__ */ new WeakMap();
function snapBox(box, k3) {
  let x0 = Math.floor(box.x * k3) / k3, y0 = Math.floor(box.y * k3) / k3;
  box.width = Math.ceil((box.x + box.width) * k3) / k3 - x0, box.height = Math.ceil((box.y + box.height) * k3) / k3 - y0, box.x = x0, box.y = y0;
}
function markDerived(next, prev) {
  derived.set(next, prev);
}
function cached(item, key2) {
  let e3 = cache.find((c3) => c3.item === item && c3.key === key2);
  return e3 ? e3.res : null;
}
function anyCached(item, themeKey) {
  let e3 = cache.find((c3) => c3.item === item && c3.key.split("|")[1] === themeKey);
  return e3 ? e3.res : null;
}
var hasFx = (item) => !!(item && item.fx && item.fx.length);
function groupSig(group) {
  let b3 = itemBox(group), h3 = 7, mix2 = (v3) => {
    h3 = Math.imul(h3 ^ (v3 | 0), 2654435761) + 2654435769 | 0;
  }, str = (t3) => {
    for (let i3 = 0; i3 < t3.length; i3++) mix2(t3.charCodeAt(i3));
  };
  for (let it of group.items)
    str(String(it.id)), mix2(it.points ? it.points.length : 0);
  for (let f3 of group.fx)
    str(f3.kind || ""), mix2((f3.size || 0) * 100), mix2(f3.strength || 0), mix2(f3.points ? f3.points.length : 0), str(f3.brush || "");
  return mix2(group.items.length), mix2(group.fx.length), `${(h3 >>> 0).toString(36)}:${b3 ? Math.round(b3.width * 10) : 0}x${b3 ? Math.round(b3.height * 10) : 0}`;
}
function strokeSig(item) {
  var _a2, _b2;
  let h3 = 3, mix2 = (v3) => {
    h3 = Math.imul(h3 ^ (v3 | 0), 2654435761) + 2654435769 | 0;
  }, str = (t3) => {
    for (let i3 = 0; i3 < t3.length; i3++) mix2(t3.charCodeAt(i3));
  };
  str(String(item.brush || "")), str(String(item.color || "")), mix2((item.size || 0) * 100), mix2(((_a2 = item.opacity) != null ? _a2 : 1) * 100), mix2(((_b2 = item.wet) != null ? _b2 : -1) * 100), mix2(item.pigment === !1 ? 1 : 0), mix2(item.seed || 0), mix2(item.pressure ? 1 : 0);
  let pts = item.points || [];
  mix2(pts.length);
  for (let i3 = 0; i3 < pts.length; i3 += Math.max(1, Math.floor(pts.length / 24))) {
    let q2 = pts[i3];
    mix2((q2[0] - pts[0][0]) * 10), mix2((q2[1] - pts[0][1]) * 10);
  }
  return (h3 >>> 0).toString(36);
}
function strokeSnapshot(item, env, k3) {
  if (!env || !env.snapshots) return null;
  let s3 = env.snapshots.get(item.id, env.key || "");
  return !s3 || s3.sig !== strokeSig(item) || !Number.isFinite(s3.k) || s3.k < k3 * 0.8 ? null : s3;
}
function saveStrokeSnapshot(item, env, res) {
  if (!env || !env.snapshots || !res || !res.canvas || res.k < 1) return;
  let b3 = itemBox(item);
  if (!b3) return;
  let sig = strokeSig(item), key2 = env.key || "", canvas = res.canvas;
  new Promise((done) => {
    let finished = !1, finish = (blob) => {
      finished || (finished = !0, done(blob));
    };
    try {
      canvas.toBlob(finish, "image/webp", 0.9);
    } catch {
      finish(null);
    }
    setTimeout(() => finish(null), 8e3);
  }).then((blob) => {
    if (!(!blob || !blob.size))
      return env.snapshots.set(item.id, key2, { sig, key: key2, k: res.k, dx: res.x - b3.x, dy: res.y - b3.y, w: res.w, h: res.h, blob });
  }).catch(() => {
  });
}
function snapshotBitmap(item, env) {
  if (!env || !env.snapshots || !item) return null;
  let s3 = env.snapshots.get(item.id, env.key || "");
  if (!s3 || !s3.url || !Number.isFinite(s3.k)) return null;
  let sig = item.type === "group" && item.fx && item.fx.length ? groupSig(item) : item.type === "stroke" ? strokeSig(item) : null;
  if (!sig || s3.sig !== sig) return null;
  let b3 = itemBox(item);
  return b3 ? { url: s3.url, x: b3.x + s3.dx, y: b3.y + s3.dy, w: s3.w, h: s3.h, k: s3.k } : null;
}
function snapshotFor(group, env) {
  if (!hasFx(group) || !env || !env.snapshots) return null;
  let s3 = env.snapshots.get(group.id, env.key || "");
  return !s3 || s3.sig !== groupSig(group) ? null : s3;
}
function nativeK(group, k3, env) {
  if (!hasFx(group) || env && env.forceK) return k3;
  let s3 = env && env.snapshots && env.snapshots.get(group.id, env.key || "");
  if (s3 && Number.isFinite(s3.k)) return s3.k;
  let own = anyCached(group, env.key || "");
  if (own) return own.k;
  let prev = derived.get(group);
  if (prev) {
    let pc = anyCached(prev, env.key || "");
    if (pc) return pc.k;
    let ps = env && env.snapshots && env.snapshots.get(prev.id, env.key || "");
    if (ps && Number.isFinite(ps.k)) return ps.k;
  }
  return Math.max(k3, 2);
}
function resultFromSnapshot(group, s3, canvas) {
  let b3 = itemBox(group);
  return { canvas, x: b3.x + s3.dx, y: b3.y + s3.dy, w: s3.w, h: s3.h, k: s3.k, snap: s3 };
}
function saveSnapshot(group, env, res) {
  if (!hasFx(group) || !env || !env.snapshots) return;
  let b3 = itemBox(group);
  if (!b3) return;
  let sig = groupSig(group), key2 = env.key || "", canvas = res.canvas;
  new Promise((done) => {
    let finished = !1, finish = (blob) => {
      finished || (finished = !0, done(blob));
    };
    try {
      canvas.toBlob(finish, "image/webp", 0.92);
    } catch {
      finish(null);
    }
    setTimeout(() => finish(null), 8e3);
  }).then((blob) => {
    if (!(!blob || !blob.size || !canvas.width))
      return env.snapshots.set(group.id, key2, { sig, key: key2, k: res.k, dx: res.x - b3.x, dy: res.y - b3.y, w: res.w, h: res.h, blob });
  }).catch(() => {
  });
}
function decodeSnapshot(s3) {
  return s3._canvas ? Promise.resolve(s3._canvas) : (s3._decoding || (s3._decoding = new Promise((res) => {
    let done = !1, url = null, finish = (c3) => {
      if (!done) {
        if (done = !0, s3._decoding = null, url) try {
          URL.revokeObjectURL(url);
        } catch {
        }
        c3 && (s3._canvas = c3), res(c3);
      }
    }, show = (src) => {
      let img = new Image();
      img.onload = () => {
        try {
          let c3 = document.createElement("canvas");
          c3.width = img.naturalWidth || img.width, c3.height = img.naturalHeight || img.height;
          let ctx = c3.getContext("2d", { willReadFrequently: !0 });
          if (!ctx || !c3.width || !c3.height) return finish(null);
          ctx.drawImage(img, 0, 0), finish(c3);
        } catch {
          finish(null);
        }
      }, img.onerror = () => finish(null), img.src = src;
    };
    s3.url ? show(s3.url) : Promise.resolve().then(() => s3.blob ? s3.blob : s3.read ? s3.read().then((buf) => new Blob([buf])) : null).then((blob) => {
      if (!blob) return finish(null);
      url = URL.createObjectURL(blob), show(url);
    }).catch(() => finish(null)), setTimeout(() => finish(null), 1e4);
  })), s3._decoding);
}
var CACHE_BUDGET = IS_MOBILE2 ? 8e6 : 24e6;
function remember(item, key2, res) {
  cache.push({ item, key: key2, res });
  let px = () => cache.reduce((n3, c3) => n3 + c3.res.canvas.width * c3.res.canvas.height, 0);
  for (; cache.length > 1 && (cache.length > 6 || px() > CACHE_BUDGET); ) {
    let old = cache.shift();
    cache.some((c3) => c3.res.canvas === old.res.canvas) || (old.res.snap && (old.res.snap._canvas = null), old.res.canvas.width = old.res.canvas.height = 0);
  }
}
function groupBox(group) {
  let b3 = itemBox(group);
  return b3 && { x: Math.floor(b3.x - 4), y: Math.floor(b3.y - 4), width: Math.ceil(b3.width + 8), height: Math.ceil(b3.height + 8) };
}
function renderGroup(group, k3, env, useCache = !0) {
  let box = groupBox(group);
  if (!box) return null;
  useCache && (k3 = nativeK(group, k3, env)), k3 = Math.max(0.25, Math.min(k3, MAX_SIDE3 / box.width, MAX_SIDE3 / box.height, Math.sqrt(MAX_AREA3 / (box.width * box.height)))), k3 = Math.round(k3 * 100) / 100, snapBox(box, k3);
  let key2 = `${k3}|${env.key || ""}`;
  if (useCache || (env = { ...env, noCache: !0 }), useCache) {
    let hit = cached(group, key2);
    if (hit) return hit;
    let s3 = snapshotFor(group, env);
    if (s3 && s3._canvas) {
      let res2 = resultFromSnapshot(group, s3, s3._canvas);
      return remember(group, key2, res2), res2;
    }
  }
  let W2 = Math.max(1, Math.ceil(box.width * k3)), H2 = Math.max(1, Math.ceil(box.height * k3)), c3 = document.createElement("canvas");
  c3.width = W2, c3.height = H2;
  let ctx = c3.getContext("2d", { willReadFrequently: !0 }), from = 0, prev = useCache && derived.get(group), base = prev && prev.items === group.items && cached(prev, key2);
  if (base)
    ctx.drawImage(base.canvas, Math.round((base.x - box.x) * k3), Math.round((base.y - box.y) * k3)), from = prev.fx.length;
  else
    for (let it of group.items) try {
      drawItem(ctx, it, k3, box.x, box.y, env);
    } catch (e3) {
      console.warn("[Palette] skipped a part that could not be drawn", it && it.type, e3);
    }
  for (let i3 = from; i3 < group.fx.length; i3++) applyFx(ctx, W2, H2, group.fx[i3], k3, box.x, box.y);
  let res = { canvas: c3, x: box.x, y: box.y, w: W2 / k3, h: H2 / k3, k: k3 };
  return useCache && remember(group, key2, res), res;
}
async function renderGroupAsync(group, k3, env) {
  let box = groupBox(group);
  if (!box) return null;
  k3 = nativeK(group, k3, env), k3 = Math.max(0.25, Math.min(k3, MAX_SIDE3 / box.width, MAX_SIDE3 / box.height, Math.sqrt(MAX_AREA3 / (box.width * box.height)))), k3 = Math.round(k3 * 100) / 100, snapBox(box, k3);
  let key2 = `${k3}|${env.key || ""}`, hit = cached(group, key2);
  if (hit) return hit;
  let snap = snapshotFor(group, env);
  if (snap) {
    let c4 = await decodeSnapshot(snap);
    if (c4) {
      let res2 = resultFromSnapshot(group, snap, c4);
      return remember(group, key2, res2), res2;
    }
  }
  let W2 = Math.max(1, Math.ceil(box.width * k3)), H2 = Math.max(1, Math.ceil(box.height * k3)), c3 = document.createElement("canvas");
  c3.width = W2, c3.height = H2;
  let ctx = c3.getContext("2d", { willReadFrequently: !0 });
  if (!ctx) throw new Error("out of canvas memory");
  let from = 0, prev = derived.get(group), base = prev && prev.items === group.items && cached(prev, key2);
  if (!base && prev && prev.items === group.items) {
    let ps = snapshotFor(prev, env);
    if (ps && ps.k === k3) {
      let c4 = await decodeSnapshot(ps);
      c4 && (base = resultFromSnapshot(prev, ps, c4));
    }
  }
  let t3 = now(), breathe = async () => {
    now() - t3 > 8 && (await pause(), t3 = now());
  };
  if (base)
    ctx.drawImage(base.canvas, Math.round((base.x - box.x) * k3), Math.round((base.y - box.y) * k3)), from = prev.fx.length;
  else
    for (let it of group.items) {
      if (it.type === "group") {
        let r4 = await renderGroupAsync(it, k3, env);
        r4 && ctx.drawImage(r4.canvas, (r4.x - box.x) * k3, (r4.y - box.y) * k3, r4.w * k3, r4.h * k3);
      } else try {
        drawItem(ctx, it, k3, box.x, box.y, env);
      } catch (e3) {
        console.warn("[Palette] skipped a part that could not be drawn", it && it.type, e3);
      }
      await breathe();
    }
  for (let i3 = from; i3 < group.fx.length; i3++) {
    let runner = new FxRunner(group.fx[i3], ctx, W2, H2, k3, box.x, box.y, { buffer: !0 }), started = now();
    for (; !runner.catchUpBudget(14); ) {
      if (now() - started > 2e4) throw new Error(`effect ${group.fx[i3].kind} took too long to render`);
      await pause();
    }
    runner.finish(), await breathe();
  }
  let res = { canvas: c3, x: box.x, y: box.y, w: W2 / k3, h: H2 / k3, k: k3 };
  return remember(group, key2, res), group.fx.length && saveSnapshot(group, env, res), res;
}
function brushIds(item, out = /* @__PURE__ */ new Set()) {
  if (item.brush && out.add(item.brush), item.type === "group") for (let c3 of item.items) brushIds(c3, out);
  return out;
}

// src/tint.js
var clamp012 = (v3) => v3 < 0 ? 0 : v3 > 1 ? 1 : v3;
function parseHex(c3) {
  if (!c3 || typeof c3 != "string") return null;
  let m3 = /^#([0-9a-f]{6})/i.exec(c3);
  if (m3) {
    let n3 = parseInt(m3[1], 16);
    return [(n3 >> 16 & 255) / 255, (n3 >> 8 & 255) / 255, (n3 & 255) / 255];
  }
  return m3 = /^#([0-9a-f]{3})$/i.exec(c3), m3 ? m3[1].split("").map((h3) => parseInt(h3 + h3, 16) / 255) : (m3 = /^rgba?\(([^)]+)\)/i.exec(c3), m3 ? m3[1].split(",").slice(0, 3).map((v3) => parseFloat(v3) / 255) : null);
}
function toHex2([r4, g3, b3]) {
  let h3 = (v3) => Math.min(252, Math.round(clamp012(v3) * 255 / 4) * 4).toString(16).padStart(2, "0");
  return `#${h3(r4)}${h3(g3)}${h3(b3)}`;
}
function hsl2(r4, g3, b3) {
  let max2 = Math.max(r4, g3, b3), min = Math.min(r4, g3, b3), d3 = max2 - min, l3 = (max2 + min) / 2;
  if (!d3) return [0, 0, l3];
  let s3 = d3 / (1 - Math.abs(2 * l3 - 1)), h3;
  return max2 === r4 ? h3 = (g3 - b3) / d3 % 6 : max2 === g3 ? h3 = (b3 - r4) / d3 + 2 : h3 = (r4 - g3) / d3 + 4, h3 /= 6, h3 < 0 && (h3 += 1), [h3, Math.min(1, s3), l3];
}
function rgb2(h3, s3, l3) {
  l3 = clamp012(l3), s3 = clamp012(s3), h3 = (h3 % 1 + 1) % 1;
  let c3 = (1 - Math.abs(2 * l3 - 1)) * s3, hp = h3 * 6, x3 = c3 * (1 - Math.abs(hp % 2 - 1)), m3 = l3 - c3 / 2, [r4, g3, b3] = hp < 1 ? [c3, x3, 0] : hp < 2 ? [x3, c3, 0] : hp < 3 ? [0, c3, x3] : hp < 4 ? [0, x3, c3] : hp < 5 ? [x3, 0, c3] : [c3, 0, x3];
  return [r4 + m3, g3 + m3, b3 + m3];
}
var mix = (a3, b3, t3) => [a3[0] + (b3[0] - a3[0]) * t3, a3[1] + (b3[1] - a3[1]) * t3, a3[2] + (b3[2] - a3[2]) * t3];
function averageColor(list) {
  let cs = list.map(parseHex).filter(Boolean);
  if (!cs.length) return null;
  let s3 = cs.reduce((a3, c3) => [a3[0] + c3[0], a3[1] + c3[1], a3[2] + c3[2]], [0, 0, 0]);
  return toHex2([s3[0] / cs.length, s3[1] / cs.length, s3[2] / cs.length]);
}
function tintColor(under, mode, o3, rand) {
  let c3 = parseHex(under);
  if (!c3) {
    if (!o3.addNew || !(mode === "aggregate" || mode === "texture")) return null;
    c3 = parseHex(o3.base) || [0.5, 0.5, 0.5];
  }
  let s3 = o3.strength, [h3, sat, l3] = hsl2(c3[0], c3[1], c3[2]);
  if (mode === "lighten")
    l3 += (1 - l3) * (0.18 + 0.4 * s3), sat *= 1 - 0.25 * s3;
  else if (mode === "darken")
    l3 -= l3 * (0.18 + 0.4 * s3), sat = Math.min(1, sat * (1 + 0.15 * s3));
  else if (mode === "aggregate") {
    let wk = o3.walk || { l: rand() * 2 - 1, s: rand() * 2 - 1, h: rand() * 2 - 1 };
    l3 += wk.l * 0.13 * (0.4 + s3), sat = sat * (1 + wk.s * 0.22 * (0.4 + s3)) + 0.03 * s3;
    let p3 = Math.pow(clamp012((o3.prism && o3.prism.amount) / 100 || 0), 1.4);
    if (p3 > 0) {
      let pm = o3.prism.mode || "auto";
      pm === "auto" ? h3 += wk.h * p3 * 0.14 : pm === "secondary" ? (c3 = mix(rgb2(h3, sat, l3), parseHex(o3.prism.secondary) || c3, p3 * (0.15 + 0.55 * rand())), [h3, sat, l3] = hsl2(...c3)) : pm === "gradient" ? (c3 = mix(rgb2(h3, sat, l3), parseHex(o3.prism.secondary) || c3, p3 * clamp012(o3.progress || 0)), [h3, sat, l3] = hsl2(...c3)) : pm === "nearby" && o3.nearby && (c3 = mix(rgb2(h3, sat, l3), parseHex(o3.nearby) || c3, p3 * (0.3 + 0.4 * rand())), [h3, sat, l3] = hsl2(...c3));
    }
  } else if (mode === "texture") {
    let t3 = o3.texture || "grit";
    t3 === "grit" ? l3 -= l3 * (0.2 + 0.35 * s3) : t3 === "noise" ? l3 += (o3.walk ? o3.walk.l : rand() * 2 - 1) * (0.1 + 0.2 * s3) : t3 === "haze" && (c3 = mix(rgb2(h3, sat, l3), parseHex(o3.textureColor) || [1, 1, 1], 0.2 + 0.4 * s3), [h3, sat, l3] = hsl2(...c3));
  } else if (mode === "soften") {
    let b3 = parseHex(o3.blend) || c3;
    c3 = mix(c3, b3, 0.6 + 0.4 * s3), [h3, sat, l3] = hsl2(...c3);
  }
  return toHex2(rgb2(h3, clamp012(sat), clamp012(l3)));
}
function tintOpacity(mode, strength) {
  let s3 = clamp012(strength), base = 18 + 72 * Math.pow(s3, 1.1);
  return Math.round(mode === "soften" ? base * 0.7 : base);
}
function stepWalk(walk, rand, step) {
  let k3 = Math.min(1, step);
  for (let key2 of ["l", "s", "h"])
    walk[key2] = Math.max(-1, Math.min(1, walk[key2] * (1 - 0.08 * k3) + (rand() * 2 - 1) * 0.42 * k3));
  return walk;
}

// src/connector.js
var CLAMP = (v3, a3, b3) => Math.max(a3, Math.min(b3, v3)), NORMALS = { l: [-1, 0], r: [1, 0], t: [0, -1], b: [0, 1] };
function sideOf(box, x3, y3) {
  let u3 = (x3 - box.x) / (box.width || 1), v3 = (y3 - box.y) / (box.height || 1), d3 = { l: u3, r: 1 - u3, t: v3, b: 1 - v3 };
  return Object.keys(d3).reduce((best, k3) => d3[k3] < d3[best] ? k3 : best, "l");
}
function endPoint(end, lookup, boxOf, nodeBox) {
  var _a2, _b2, _c, _d, _e, _f;
  if (!end) return null;
  let b3 = null;
  if (end.node) b3 = nodeBox && nodeBox(end.node);
  else if (end.id) {
    let it = lookup && lookup(end.id);
    b3 = it && boxOf(it);
  }
  if (b3) {
    if (end.side === "in") {
      let x4 = b3.x + CLAMP((_a2 = end.u) != null ? _a2 : 0.5, 0, 1) * b3.width, y4 = b3.y + CLAMP((_b2 = end.v) != null ? _b2 : 0.5, 0, 1) * b3.height, n4 = end.dir ? NORMALS[end.dir] || [0, 0] : [0, 0];
      return { x: x4, y: y4, nx: n4[0], ny: n4[1], box: b3, side: "in" };
    }
    let side = end.side || sideOf(b3, b3.x + ((_c = end.u) != null ? _c : 0.5) * b3.width, b3.y + ((_d = end.v) != null ? _d : 0.5) * b3.height), n3 = NORMALS[side] || [0, 0], x3 = side === "l" ? b3.x : side === "r" ? b3.x + b3.width : b3.x + CLAMP((_e = end.u) != null ? _e : 0.5, 0, 1) * b3.width, y3 = side === "t" ? b3.y : side === "b" ? b3.y + b3.height : b3.y + CLAMP((_f = end.v) != null ? _f : 0.5, 0, 1) * b3.height;
    return { x: x3, y: y3, nx: n3[0], ny: n3[1], box: b3, side };
  }
  return end.x === void 0 ? null : { x: end.x, y: end.y, nx: 0, ny: 0 };
}
function smoothThrough(pts, a3, b3, k3) {
  let d3 = [`M${pts[0][0]} ${pts[0][1]}`], tan = [];
  for (let i3 = 0; i3 < pts.length; i3++)
    if (i3 === 0) tan.push([a3.nx * k3, a3.ny * k3]);
    else if (i3 === pts.length - 1) tan.push([-b3.nx * k3, -b3.ny * k3]);
    else {
      let p0 = pts[i3 - 1], p22 = pts[i3 + 1];
      tan.push([(p22[0] - p0[0]) * 0.4, (p22[1] - p0[1]) * 0.4]);
    }
  for (let i3 = 0; i3 < pts.length - 1; i3++) {
    let p3 = pts[i3], q2 = pts[i3 + 1], c1 = [p3[0] + tan[i3][0] / 3, p3[1] + tan[i3][1] / 3], c22 = [q2[0] - tan[i3 + 1][0] / 3, q2[1] - tan[i3 + 1][1] / 3];
    d3.push(`C${c1[0]} ${c1[1]} ${c22[0]} ${c22[1]} ${q2[0]} ${q2[1]}`);
  }
  return d3.join("");
}
function connectorPath(item, a3, b3) {
  let style = item.style || "curve", ways = (item.waypoints || []).map((w3) => [w3[0], w3[1]]), free = (p3) => !p3.nx && !p3.ny, span = Math.hypot(b3.x - a3.x, b3.y - a3.y), dirTo = (from, to) => {
    let dx = to[0] - from.x, dy = to[1] - from.y, l3 = Math.hypot(dx, dy) || 1;
    return [dx / l3, dy / l3];
  }, na = free(a3) ? dirTo(a3, ways[0] || [b3.x, b3.y]) : [a3.nx, a3.ny], nb = free(b3) ? dirTo(b3, ways[ways.length - 1] || [a3.x, a3.y]) : [b3.nx, b3.ny], d3;
  if (style === "straight")
    d3 = [[a3.x, a3.y], ...ways, [b3.x, b3.y]].map(([x3, y3], i3) => `${i3 ? "L" : "M"}${r3(x3)} ${r3(y3)}`).join("");
  else if (style === "elbow") {
    let stub = Math.max(16, Math.min(40, span * 0.15)), pts = [[a3.x, a3.y]];
    free(a3) || pts.push([a3.x + na[0] * stub, a3.y + na[1] * stub]);
    let end = free(b3) ? [b3.x, b3.y] : [b3.x + nb[0] * stub, b3.y + nb[1] * stub], horiz = Math.abs(na[0]) > Math.abs(na[1]);
    for (let t3 of [...ways, end]) {
      let from = pts[pts.length - 1];
      if (ways.length === 0 && t3 === end)
        if (horiz) {
          let mx = (from[0] + t3[0]) / 2;
          pts.push([mx, from[1]], [mx, t3[1]]);
        } else {
          let my = (from[1] + t3[1]) / 2;
          pts.push([from[0], my], [t3[0], my]);
        }
      else horiz ? pts.push([t3[0], from[1]]) : pts.push([from[0], t3[1]]);
      pts.push(t3), horiz = !horiz;
    }
    free(b3) || pts.push([b3.x, b3.y]), d3 = pts.filter((q2, i3) => i3 === 0 || Math.abs(q2[0] - pts[i3 - 1][0]) > 0.01 || Math.abs(q2[1] - pts[i3 - 1][1]) > 0.01).map(([x3, y3], i3) => `${i3 ? "L" : "M"}${r3(x3)} ${r3(y3)}`).join("");
  } else {
    let k3 = Math.max(30, Math.min(span * 0.42, 220));
    if (ways.length)
      d3 = smoothThrough([[a3.x, a3.y], ...ways, [b3.x, b3.y]], { nx: na[0], ny: na[1] }, { nx: nb[0], ny: nb[1] }, k3);
    else {
      let c1 = [a3.x + na[0] * k3, a3.y + na[1] * k3], c22 = [b3.x + nb[0] * k3, b3.y + nb[1] * k3];
      d3 = `M${r3(a3.x)} ${r3(a3.y)}C${r3(c1[0])} ${r3(c1[1])} ${r3(c22[0])} ${r3(c22[1])} ${r3(b3.x)} ${r3(b3.y)}`;
    }
  }
  return { d: d3, a: a3, b: b3, dir: Math.atan2(-nb[1], -nb[0]), dirStart: Math.atan2(-na[1], -na[0]) };
}
var r3 = (v3) => Math.round(v3 * 100) / 100;
function arrowHeadPath(p3, dir, size) {
  let w3 = (ang) => `${p3.x - size * Math.cos(dir + ang)} ${p3.y - size * Math.sin(dir + ang)}`;
  return `M${w3(0.45)}L${p3.x} ${p3.y}L${w3(-0.45)}`;
}
function connectorBox(a3, b3, pad) {
  return {
    x: Math.min(a3.x, b3.x) - pad,
    y: Math.min(a3.y, b3.y) - pad,
    width: Math.abs(b3.x - a3.x) + pad * 2,
    height: Math.abs(b3.y - a3.y) + pad * 2
  };
}
function smoothWaypoints(ways) {
  if (!ways || ways.length < 2) return ways || [];
  let avg = ways.map((w3, i3) => {
    let a3 = ways[i3 - 1] || w3, b3 = ways[i3 + 1] || w3;
    return [(a3[0] + w3[0] * 2 + b3[0]) / 4, (a3[1] + w3[1] * 2 + b3[1]) / 4];
  }), out = [avg[0]];
  for (let i3 = 1; i3 < avg.length - 1; i3++) {
    let [px, py] = out[out.length - 1], [x3, y3] = avg[i3], [nx, ny] = avg[i3 + 1], a1 = Math.atan2(y3 - py, x3 - px), a22 = Math.atan2(ny - y3, nx - x3);
    Math.abs((a22 - a1 + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI) > 8 && out.push(avg[i3]);
  }
  return avg.length > 1 && out.push(avg[avg.length - 1]), out.map(([x3, y3]) => [Math.round(x3 * 100) / 100, Math.round(y3 * 100) / 100]);
}

// src/render.js
var NS = "http://www.w3.org/2000/svg", gen = at.generator(), f22 = (n3) => Math.round(n3 * 100) / 100;
function svgEl(tag, attrs = {}) {
  let el = document.createElementNS(NS, tag);
  for (let k3 in attrs) el.setAttribute(k3, String(attrs[k3]));
  return el;
}
var paint = (c3) => c3 === "auto" || !c3 ? "currentColor" : c3;
function itemOpacity(item) {
  var _a2, _b2, _c;
  if (item.type === "group" || item.type === "pixels") return 1;
  if (item.type === "fill") return ((_a2 = item.opacity) != null ? _a2 : 100) / 100;
  let o3 = ((_b2 = item.opacity) != null ? _b2 : 100) / 100;
  return item.type === "stroke" ? o3 * ((_c = brushFor(item).opacityMult) != null ? _c : 1) : o3;
}
function isStamp(item) {
  return item.type === "stroke" && brushFor(item).kind === "stamp";
}
function isRaster(item) {
  return item.type === "painting" ? item.items.length > 0 : isFlatVector(item) ? !1 : item.type === "group" || item.type === "fill" || isStamp(item);
}
function fillLoopsOf(item, lookup) {
  if (item.inShape && lookup) {
    let sh = lookup(item.inShape);
    if (sh) return shapeLoops(sh);
  }
  return item.loops || null;
}
function groupBrushesReady(group) {
  let ps = [];
  for (let c3 of group.items) c3.type === "stroke" && ps.push(brushReady(brushFor(c3)));
  return Promise.all(ps);
}
function outlineToD(pts) {
  if (!pts.length) return "";
  let d3 = `M${f22(pts[0][0])} ${f22(pts[0][1])} Q`;
  for (let i3 = 0; i3 < pts.length; i3++) {
    let [x0, y0] = pts[i3], [x1, y1] = pts[(i3 + 1) % pts.length];
    d3 += ` ${f22(x0)} ${f22(y0)} ${f22((x0 + x1) / 2)} ${f22((y0 + y1) / 2)}`;
  }
  return d3 + " Z";
}
function simplifyTol(scale) {
  if (!Number.isFinite(scale) || scale >= 0.95) return 0;
  let raw = 0.8 / scale;
  return raw < 1.5 ? 1 : raw < 3 ? 2 : raw < 6 ? 4 : 8;
}
function decimate(points, tol) {
  if (!tol || points.length < 12) return points;
  let t22 = tol * tol, out = [points[0]], last = points[0];
  for (let i3 = 1; i3 < points.length - 1; i3++) {
    let p3 = points[i3], dx = p3[0] - last[0], dy = p3[1] - last[1];
    dx * dx + dy * dy >= t22 && (out.push(p3), last = p3);
  }
  return out.push(points[points.length - 1]), out;
}
function strokeD(item, opts, complete = !0) {
  var _a2;
  let b3 = brushFor(item), thinning = (_a2 = b3.thinning) != null ? _a2 : 0.5, tol = complete ? simplifyTol(opts.scale) : 0;
  return outlineToD(
    R(decimate(item.points, tol), {
      size: item.size,
      thinning: item.pressure ? thinning : thinning * 0.75,
      smoothing: 0.5,
      streamline: opts.streamline,
      simulatePressure: thinning > 0 && !item.pressure,
      start: b3.taperStart && !item.closed ? { taper: b3.taperStart * item.size, cap: !0 } : { cap: !0, taper: 0 },
      end: b3.taperEnd && !item.closed ? { taper: b3.taperEnd * item.size, cap: !0 } : { cap: !0, taper: 0 },
      last: complete
    })
  );
}
function shapeEls(item) {
  let { x1, y1, x2: x22, y2: y22 } = item, closed = item.shape === "rect" || item.shape === "ellipse", o3 = {
    seed: item.seed || 1,
    roughness: item.rough ? 1 : 0,
    bowing: item.rough ? 1 : 0,
    stroke: "#000",
    strokeWidth: item.size,
    disableMultiStroke: !item.rough,
    preserveVertices: !0,
    fillWeight: Math.max(0.5, item.size / 2),
    hachureGap: Math.max(4, item.size * 4)
  };
  closed && item.fill && item.fill !== "none" && (o3.fill = "#000", o3.fillStyle = item.fill === "hatch" ? "hachure" : "solid");
  let drawables = [];
  switch (item.shape) {
    case "rect":
      drawables.push(gen.rectangle(Math.min(x1, x22), Math.min(y1, y22), Math.abs(x22 - x1), Math.abs(y22 - y1), o3));
      break;
    case "ellipse":
      drawables.push(gen.ellipse((x1 + x22) / 2, (y1 + y22) / 2, Math.abs(x22 - x1), Math.abs(y22 - y1), o3));
      break;
    case "line":
      drawables.push(gen.line(x1, y1, x22, y22, o3));
      break;
    case "arrow":
      drawables.push(gen.line(x1, y1, x22, y22, o3)), drawables.push(gen.linearPath(arrowHead(item), { ...o3, seed: o3.seed + 1 }));
      break;
  }
  let col = paint(item.color), out = [];
  for (let dr of drawables)
    for (let set of dr.sets) {
      let d3 = gen.opsToPath(set, 2);
      if (!(!d3 || d3.includes("NaN")))
        if (set.type === "path") {
          let a3 = { d: d3, fill: "none", stroke: col, "stroke-width": item.size, "stroke-linecap": "round", "stroke-linejoin": "round" };
          item.dash && (a3["stroke-dasharray"] = `${f22(item.size * 3)} ${f22(item.size * 2.5)}`), out.push(svgEl("path", a3));
        } else set.type === "fillPath" ? out.push(svgEl("path", { d: d3, fill: col, "fill-opacity": item.fill === "tint" ? 0.22 : 1, stroke: "none" })) : set.type === "fillSketch" && out.push(svgEl("path", { d: d3, fill: "none", stroke: col, "stroke-width": o3.fillWeight, "stroke-linecap": "round" }));
    }
  return out;
}
var measureCtx = null;
function cssFamily(id) {
  return fontFamily(id).replace(/var\((--[\w-]+)\)/g, (_3, n3) => getComputedStyle(document.body).getPropertyValue(n3).trim() || "sans-serif");
}
function measureText(text, font, size) {
  return measureCtx || (measureCtx = document.createElement("canvas").getContext("2d")), measureCtx.font = `${size}px ${cssFamily(font)}`, measureCtx.measureText ? measureCtx.measureText(text).width : text.length * size * 0.55;
}
function wrapText(text, font, size, maxWidth) {
  measureCtx || (measureCtx = document.createElement("canvas").getContext("2d")), measureCtx.font = `${size}px ${cssFamily(font)}`;
  let width = (t3) => measureCtx.measureText ? measureCtx.measureText(t3).width : t3.length * size * 0.55, out = [];
  for (let para of text.split(`
`)) {
    let line = "";
    for (let word of para.split(/(\s+)/)) {
      if (!word) continue;
      let next = line + word;
      if (width(next.trimEnd()) <= maxWidth || !line.trim())
        if (width(next.trimEnd()) > maxWidth && !line.trim()) {
          let chunk = "";
          for (let ch of word)
            width(chunk + ch) > maxWidth && chunk && (out.push(chunk), chunk = ""), chunk += ch;
          line = chunk;
        } else line = next;
      else
        out.push(line.trimEnd()), line = word.trimStart();
    }
    out.push(line.trimEnd());
  }
  return out;
}
function fitTextInShape(item, shape) {
  let box = shapeTextBox(shape), size = item.fontSize, lines = wrapText(item.text, item.font, size, box.width);
  for (; size > 6 && lines.length * size * 1.25 > box.height; )
    size = Math.max(6, size * 0.9), lines = wrapText(item.text, item.font, size, box.width);
  return { box, size, lines };
}
function connectorEls(item, opts = {}) {
  let boxOf = (it) => opts.boxOf ? opts.boxOf(it) : itemBox(it), a3 = endPoint(item.from, opts.lookup, boxOf, opts.nodeBox), b3 = endPoint(item.to, opts.lookup, boxOf, opts.nodeBox);
  if (!a3 || !b3) return [];
  let { d: d3, a: start, b: end, dir, dirStart } = connectorPath(item, a3, b3), attrs = {
    d: d3,
    fill: "none",
    stroke: paint(item.color),
    "stroke-width": item.size,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };
  item.dash && (attrs["stroke-dasharray"] = `${f22(item.size * 3)} ${f22(item.size * 2.5)}`);
  let els = [svgEl("path", attrs)], head = (at2, ang) => svgEl("path", {
    d: arrowHeadPath(at2, ang, Math.max(6, item.size * 4)),
    fill: "none",
    stroke: paint(item.color),
    "stroke-width": item.size,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), mode = item.arrow === !1 ? "none" : item.arrow === !0 || item.arrow === void 0 ? "end" : item.arrow;
  if ((mode === "end" || mode === "both") && els.push(head(end, dir)), (mode === "start" || mode === "both") && els.push(head(start, dirStart)), item.node) {
    let r4 = Math.max(2.5, item.size * 1.8);
    for (let at2 of [start, end])
      els.push(svgEl("circle", { cx: f22(at2.x), cy: f22(at2.y), r: f22(r4), fill: paint(item.color) }));
  }
  return els;
}
function refImageEl(ref, box, id, shape, resolve) {
  var _a2, _b2;
  let fit = ref.fit || "cover", g3 = svgEl("g", { class: "ink-ref" }), clipId = `ref-${id}`, clip = svgEl("clipPath", { id: clipId, clipPathUnits: "userSpaceOnUse" });
  clip.append(shape === "ellipse" ? svgEl("ellipse", { cx: f22(box.x + box.width / 2), cy: f22(box.y + box.height / 2), rx: f22(box.width / 2), ry: f22(box.height / 2) }) : svgEl("rect", { x: f22(box.x), y: f22(box.y), width: f22(box.width), height: f22(box.height) })), g3.append(clip);
  let inner = svgEl("g", { "clip-path": `url(#${clipId})` });
  ref.rotate && inner.setAttribute("transform", `rotate(${ref.rotate} ${f22(box.x + box.width / 2)} ${f22(box.y + box.height / 2)})`);
  let sc = ((_a2 = ref.scale) != null ? _a2 : 100) / 100, w3 = box.width * sc, h3 = box.height * sc, ix = box.x + (box.width - w3) / 2 + (ref.ox || 0) / 100 * box.width, iy = box.y + (box.height - h3) / 2 + (ref.oy || 0) / 100 * box.height, filter = adjustFilter(ref.adjust);
  return filter && (inner.style.filter = filter), inner.append(svgEl("image", {
    href: ref.src || (resolve && ref.path ? resolve(ref.path) : ""),
    x: f22(ix),
    y: f22(iy),
    width: f22(w3),
    height: f22(h3),
    preserveAspectRatio: fit === "stretch" ? "none" : fit === "contain" ? "xMidYMid meet" : "xMidYMid slice",
    opacity: ((_b2 = ref.opacity) != null ? _b2 : 60) / 100
  })), g3.append(inner), g3;
}
function boardEls(item) {
  let { x: x3, y: y3, w: w3, h: h3 } = item, accent = item.color && item.color !== "auto" ? item.color : "var(--interactive-accent)", fs = Math.max(10, Math.min(22, w3 / 6.5)), tile = Math.min(w3, h3 - fs * 1.8) * 0.92, tx = x3 + (w3 - tile) / 2, ty = y3, els = [svgEl("rect", { class: "ink-board-tile", x: f22(tx), y: f22(ty), width: f22(tile), height: f22(tile), rx: f22(tile * 0.2), fill: accent })], u3 = tile * 0.56 / 24, ox = tx + tile * 0.22, oy = ty + tile * 0.22;
  for (let [rx, ry, rw, rh] of [[3, 3, 7, 9], [14, 3, 7, 5], [14, 12, 7, 9], [3, 16, 7, 5]])
    els.push(svgEl("rect", {
      x: f22(ox + rx * u3),
      y: f22(oy + ry * u3),
      width: f22(rw * u3),
      height: f22(rh * u3),
      rx: f22(u3),
      fill: "none",
      stroke: "#fff",
      "stroke-width": f22(u3 * 2),
      "stroke-linejoin": "round"
    }));
  let label = svgEl("text", { class: "ink-board-label", x: f22(x3 + w3 / 2), y: f22(ty + tile + fs * 1.25), "font-size": f22(fs), "text-anchor": "middle" }), name = item.label || "Board";
  return label.textContent = name.length > 22 ? `${name.slice(0, 20)}\u2026` : name, els.push(label), els;
}
function mediaEl(item, box, opts = {}) {
  let g3 = svgEl("g", { class: `ink-media is-${item.ref.kind}` }), r4 = Math.min(10, box.width / 12);
  g3.appendChild(svgEl("rect", { class: "ink-media-card", x: f22(box.x), y: f22(box.y), width: f22(box.width), height: f22(box.height), rx: f22(r4) }));
  let thumb = item.ref.kind === "pdf" && opts.pdfThumb ? opts.pdfThumb(item.ref.path) : null;
  if (thumb)
    g3.appendChild(svgEl("image", { href: thumb, x: f22(box.x), y: f22(box.y), width: f22(box.width), height: f22(box.height), preserveAspectRatio: "xMidYMin slice" }));
  else {
    let cx = box.x + box.width / 2, cy = box.y + box.height / 2 - Math.min(box.height * 0.08, 12), s3 = Math.min(box.width, box.height) * 0.18, d3;
    item.ref.kind === "video" ? d3 = `M${cx - s3 * 0.6} ${cy - s3}L${cx + s3} ${cy}L${cx - s3 * 0.6} ${cy + s3}Z` : item.ref.kind === "audio" ? d3 = `M${cx - s3 * 0.2} ${cy + s3 * 0.6}V${cy - s3}L${cx + s3 * 0.8} ${cy - s3 * 1.2}V${cy + s3 * 0.3}` : d3 = `M${cx - s3 * 0.7} ${cy - s3}H${cx + s3 * 0.3}L${cx + s3 * 0.7} ${cy - s3 * 0.6}V${cy + s3}H${cx - s3 * 0.7}Z`, g3.appendChild(svgEl("path", { class: "ink-media-glyph", d: d3, fill: item.ref.kind === "video" ? "currentColor" : "none", stroke: "currentColor", "stroke-width": Math.max(1, s3 * 0.15), "stroke-linejoin": "round", "stroke-linecap": "round" }));
  }
  let name = (item.ref.path || "").split("/").pop() || "file", fs = Math.max(8, Math.min(16, box.width / 14)), label = svgEl("text", { class: "ink-media-label", x: f22(box.x + box.width / 2), y: f22(box.y + box.height - fs * 0.8), "font-size": f22(fs), "text-anchor": "middle" });
  return label.textContent = name.length > 34 ? `${name.slice(0, 31)}\u2026` : name, g3.appendChild(label), (!opts.resource || !opts.resource(item.ref.path)) && g3.classList.add("is-missing"), g3;
}
function plainTextEl(item, opts = {}) {
  let shape = item.inShape && opts.lookup ? opts.lookup(item.inShape) : null;
  if (shape) {
    let { box, size, lines: lines2 } = fitTextInShape(item, shape), lh = size * 1.25, top = box.y + (box.height - lines2.length * lh) / 2, t4 = svgEl("text", { x: f22(box.x + box.width / 2), y: f22(top + size * 0.92), fill: paint(item.color), "font-size": f22(size), "text-anchor": "middle", class: "ink-text" });
    return t4.style.fontFamily = fontFamily(item.font), lines2.forEach((ln, i3) => {
      let sp = svgEl("tspan", { x: f22(box.x + box.width / 2), dy: i3 === 0 ? 0 : f22(lh) });
      sp.textContent = ln.length ? ln : "\xA0", t4.append(sp);
    }), t4;
  }
  let t3 = svgEl("text", {
    x: item.x,
    y: f22(item.y + item.fontSize * 0.92),
    fill: paint(item.color),
    "font-size": item.fontSize,
    class: "ink-text"
  });
  return t3.style.fontFamily = fontFamily(item.font), (item.wrap ? wrapText(item.text, item.font, item.fontSize, item.wrap) : item.text.split(`
`)).forEach((ln, i3) => {
    let s3 = svgEl("tspan", { x: item.x, dy: i3 === 0 ? 0 : f22(item.fontSize * 1.25) });
    s3.textContent = ln.length ? ln : "\xA0", t3.append(s3);
  }), t3;
}
function textEl(item, opts = {}) {
  let base = filledTextEl(item, opts);
  return textEffects(item).length ? withTextEffect(base, item, opts) : base;
}
function filledTextEl(item, opts = {}) {
  let t3 = plainTextEl(item, opts), st2 = item.paint;
  if (!st2 || !st2.kind || st2.kind === "solid") return t3;
  let c1 = opts.resolveColor ? opts.resolveColor(item.color) : item.color, c22 = st2.color2 || "#f08c00", id = `tp-${item.id}`, defs = svgEl("defs", {});
  if (st2.kind === "gradient") {
    let gr = svgEl("linearGradient", { id, gradientTransform: `rotate(${st2.angle || 0} 0.5 0.5)` });
    gr.appendChild(svgEl("stop", { offset: "0", "stop-color": c1 })), gr.appendChild(svgEl("stop", { offset: "1", "stop-color": c22 })), defs.appendChild(gr);
  } else {
    let u3 = Math.max(2, (item.fontSize || 24) / 7), pat = svgEl("pattern", { id, patternUnits: "userSpaceOnUse", width: f22(u3 * 2), height: f22(u3 * 2) });
    pat.appendChild(svgEl("rect", { width: f22(u3 * 2), height: f22(u3 * 2), fill: c1 }));
    let kind = st2.pattern || "dots";
    if (kind === "dots") pat.appendChild(svgEl("circle", { cx: f22(u3), cy: f22(u3), r: f22(u3 * 0.42), fill: c22 }));
    else if (kind === "lines") pat.appendChild(svgEl("rect", { x: 0, y: 0, width: f22(u3 * 2), height: f22(u3 * 0.7), fill: c22 }));
    else if (kind === "hatch") pat.appendChild(svgEl("path", { d: `M0 ${f22(u3 * 2)}L${f22(u3 * 2)} 0`, stroke: c22, "stroke-width": f22(u3 * 0.5) }));
    else if (kind === "check")
      pat.appendChild(svgEl("rect", { width: f22(u3), height: f22(u3), fill: c22 })), pat.appendChild(svgEl("rect", { x: f22(u3), y: f22(u3), width: f22(u3), height: f22(u3), fill: c22 }));
    else {
      let h3 = 0;
      for (let ch of item.id) h3 = h3 * 31 + ch.charCodeAt(0) | 0;
      for (let i3 = 0; i3 < 5; i3++) {
        h3 = h3 * 1103515245 + 12345 | 0;
        let x3 = (h3 >>> 8) % 1e3 / 1e3 * u3 * 2, y3 = (h3 >>> 18) % 1e3 / 1e3 * u3 * 2;
        pat.appendChild(svgEl("circle", { cx: f22(x3), cy: f22(y3), r: f22(u3 * 0.18), fill: c22 }));
      }
    }
    defs.appendChild(pat);
  }
  let g3 = svgEl("g", {});
  return t3.setAttribute("fill", `url(#${id})`), g3.append(defs, t3), g3;
}
var TEXT_EFFECTS = [
  { id: "none", name: "None" },
  { id: "outline", name: "Outline", color: "#1b1b1b" },
  { id: "shadow", name: "Shadow", color: "#000000", angle: 45 },
  { id: "glow", name: "Glow", color: "#ffc93c" },
  { id: "emboss", name: "Emboss", angle: 45 },
  { id: "extrude", name: "3D", angle: 45 }
];
function mixHex(c3, to, t3) {
  let a3 = parseHex(c3) || [0.5, 0.5, 0.5];
  return toHex2(a3.map((v3, i3) => v3 + (to[i3] - v3) * t3));
}
function textCopy(item, opts, fill, dx, dy) {
  let c3 = plainTextEl(item, opts);
  return c3.setAttribute("fill", fill), (dx || dy) && c3.setAttribute("transform", `translate(${f22(dx)} ${f22(dy)})`), c3;
}
function textEffects(item) {
  return (Array.isArray(item.effects) ? item.effects : item.effect ? [item.effect] : []).filter((e3) => e3 && e3.kind && e3.kind !== "none" && TEXT_EFFECTS.some((d3) => d3.id === e3.kind));
}
function effectParams(ef, item, textColor) {
  var _a2, _b2, _c;
  let def = TEXT_EFFECTS.find((e3) => e3.id === ef.kind) || {}, u3 = item.fontSize || 24, s3 = Math.max(0, Math.min(100, (_a2 = ef.strength) != null ? _a2 : 50)) / 100, ang = ((_c = (_b2 = ef.angle) != null ? _b2 : def.angle) != null ? _c : 45) * Math.PI / 180, ux = Math.cos(ang), uy = Math.sin(ang), color = ef.color || def.color || mixHex(textColor, [0, 0, 0], 0.45), P3 = { kind: ef.kind, u: u3, s: s3, ux, uy, color };
  return ef.kind === "outline" ? P3.w = u3 * (0.02 + 0.14 * s3) : ef.kind === "shadow" ? (P3.d = u3 * (0.04 + 0.2 * s3), P3.blur = Math.max(0.3, P3.d * 0.35)) : ef.kind === "glow" ? P3.sd = u3 * (0.04 + 0.22 * s3) : ef.kind === "emboss" ? (P3.d = u3 * (0.015 + 0.06 * s3), P3.light = ef.color ? mixHex(ef.color, [1, 1, 1], 0.55) : mixHex(textColor, [1, 1, 1], 0.6), P3.dark = ef.color ? mixHex(ef.color, [0, 0, 0], 0.55) : mixHex(textColor, [0, 0, 0], 0.55)) : ef.kind === "extrude" && (P3.depth = u3 * (0.05 + 0.32 * s3), P3.n = Math.max(4, Math.min(28, Math.round(P3.depth * 1.2)))), P3;
}
var EFFECT_ORDER = ["glow", "shadow", "extrude", "emboss", "outline"], orderedEffects = (item) => textEffects(item).sort((a3, b3) => EFFECT_ORDER.indexOf(a3.kind) - EFFECT_ORDER.indexOf(b3.kind));
function withTextEffect(base, item, opts) {
  let list = orderedEffects(item);
  if (!list.length) return base;
  let textColor = opts.resolveColor ? opts.resolveColor(item.color) : item.color, text = base.tagName === "text" ? base : base.querySelector("text"), g3 = svgEl("g", { class: "ink-text-fx" }), fi = 0, blurFilter = (sd) => {
    let id = `te-${item.id}-${fi++}`, defs = svgEl("defs", {}), f3 = svgEl("filter", { id, x: "-50%", y: "-50%", width: "200%", height: "200%" });
    return f3.appendChild(svgEl("feGaussianBlur", { stdDeviation: f22(sd) })), defs.appendChild(f3), g3.append(defs), id;
  };
  for (let ef of list) {
    let P3 = effectParams(ef, item, textColor);
    if (P3.kind === "outline" && text)
      text.setAttribute("stroke", P3.color), text.setAttribute("stroke-width", f22(P3.w)), text.setAttribute("stroke-linejoin", "round"), text.setAttribute("paint-order", "stroke fill");
    else if (P3.kind === "shadow") {
      let sh = textCopy(item, opts, P3.color, P3.ux * P3.d, P3.uy * P3.d);
      sh.setAttribute("opacity", "0.55"), sh.setAttribute("filter", `url(#${blurFilter(P3.blur)})`), g3.append(sh);
    } else if (P3.kind === "glow") {
      let glow = textCopy(item, opts, P3.color, 0, 0);
      glow.setAttribute("stroke", P3.color), glow.setAttribute("stroke-width", f22(P3.u * 0.08)), glow.setAttribute("stroke-linejoin", "round"), glow.setAttribute("filter", `url(#${blurFilter(P3.sd)})`), glow.setAttribute("opacity", "0.95"), g3.append(glow, glow.cloneNode(!0));
    } else if (P3.kind === "emboss")
      g3.append(textCopy(item, opts, P3.light, -P3.ux * P3.d, -P3.uy * P3.d), textCopy(item, opts, P3.dark, P3.ux * P3.d, P3.uy * P3.d));
    else if (P3.kind === "extrude")
      for (let i3 = P3.n; i3 >= 1; i3--) {
        let c3 = textCopy(item, opts, P3.color, P3.ux * P3.depth * i3 / P3.n, P3.uy * P3.depth * i3 / P3.n);
        c3.setAttribute("stroke", P3.color), c3.setAttribute("stroke-width", f22(P3.u * 0.012)), g3.append(c3);
      }
  }
  return g3.append(base), g3;
}
function effectsTextShadow(item, textColor, scale) {
  let out = [], rgba = (hex, a3) => {
    let c3 = parseHex(hex) || [0, 0, 0];
    return `rgba(${Math.round(c3[0] * 255)},${Math.round(c3[1] * 255)},${Math.round(c3[2] * 255)},${a3})`;
  };
  for (let ef of orderedEffects(item).reverse()) {
    let P3 = effectParams(ef, item, textColor), px = (v3) => `${(v3 * scale).toFixed(2)}px`;
    if (P3.kind === "outline") {
      let w3 = P3.w / 2;
      for (let [x3, y3] of [[1, 0], [-1, 0], [0, 1], [0, -1], [0.7, 0.7], [-0.7, 0.7], [0.7, -0.7], [-0.7, -0.7]]) out.push(`${px(x3 * w3)} ${px(y3 * w3)} 0 ${P3.color}`);
    } else if (P3.kind === "emboss")
      out.push(`${px(-P3.ux * P3.d)} ${px(-P3.uy * P3.d)} 0 ${P3.light}`, `${px(P3.ux * P3.d)} ${px(P3.uy * P3.d)} 0 ${P3.dark}`);
    else if (P3.kind === "extrude")
      for (let i3 = 1; i3 <= P3.n; i3++) out.push(`${px(P3.ux * P3.depth * i3 / P3.n)} ${px(P3.uy * P3.depth * i3 / P3.n)} 0 ${P3.color}`);
    else P3.kind === "shadow" ? out.push(`${px(P3.ux * P3.d)} ${px(P3.uy * P3.d)} ${px(P3.blur * 2)} ${rgba(P3.color, 0.55)}`) : P3.kind === "glow" && out.push(`0 0 ${px(P3.sd)} ${P3.color}`, `0 0 ${px(P3.sd * 2)} ${P3.color}`, `0 0 ${px(P3.sd * 3)} ${rgba(P3.color, 0.7)}`);
  }
  return out.join(", ");
}
var queue = [], urgentQueue = [], pumping = !1, now2 = () => typeof performance < "u" ? performance.now() : Date.now(), yieldFrame = () => new Promise((r4) => setTimeout(r4, 0));
function schedule(task, urgent = !1, label = "") {
  return new Promise((res, rej) => {
    (urgent ? urgentQueue : queue).push({ task, res, rej, label }), pump();
  });
}
var queueStatus = { current: null, startedAt: 0, waiting: () => urgentQueue.length + queue.length, stalls: 0 }, JOB_DEADLINE = 25e3;
async function pump() {
  if (pumping) return;
  pumping = !0;
  let start = now2();
  for (; urgentQueue.length || queue.length; ) {
    now2() - start > 10 && (await yieldFrame(), start = now2());
    let job = urgentQueue.length ? urgentQueue.pop() : queue.pop();
    queueStatus.current = job.label || "render", queueStatus.startedAt = now2();
    try {
      let timer, deadline = new Promise((_3, rej) => {
        timer = setTimeout(() => rej(new Error(`render of ${job.label || "an item"} timed out`)), JOB_DEADLINE);
      }), result = await Promise.race([job.task(), deadline]);
      clearTimeout(timer), job.res(result);
    } catch (e3) {
      /timed out/.test(String(e3 && e3.message)) && queueStatus.stalls++, job.rej(e3);
    }
  }
  queueStatus.current = null, pumping = !1;
}
function resetQueue() {
  for (let j3 of [...urgentQueue, ...queue]) j3.rej(new Error("render queue reset"));
  urgentQueue.length = 0, queue.length = 0, pumping = !1, queueStatus.current = null;
}
var urlRefs = /* @__PURE__ */ new Map();
function retain(url) {
  urlRefs.set(url, (urlRefs.get(url) || 0) + 1);
}
function release(url) {
  let n3 = (urlRefs.get(url) || 1) - 1;
  n3 <= 0 ? (urlRefs.delete(url), URL.revokeObjectURL(url)) : urlRefs.set(url, n3);
}
var reaper = typeof FinalizationRegistry == "function" ? new FinalizationRegistry((holder) => holder.url && release(holder.url)) : null;
function setUrl(g3, url) {
  g3._holder || (g3._holder = { url: null }, reaper && reaper.register(g3, g3._holder)), g3._holder.url && release(g3._holder.url), g3._holder.url = url, g3._url = url, url && retain(url);
}
function reuseRaster(item, fromEl, box, opts, stale = !0) {
  let img0 = fromEl && fromEl.querySelector("image");
  if (!img0 || !fromEl._url) return null;
  let g3 = svgEl("g", { "data-id": item.id, opacity: itemOpacity(item) }), img = img0.cloneNode(!1);
  return img.setAttribute("x", f22(box.x)), img.setAttribute("y", f22(box.y)), img.setAttribute("width", f22(box.w)), img.setAttribute("height", f22(box.h)), g3.appendChild(img), setUrl(g3, fromEl._url), g3._k = fromEl._k, g3._stale = stale, g3._rendered = !0, g3._ready = Promise.resolve(), g3;
}
var paintingGroups = /* @__PURE__ */ new WeakMap();
function paintingGroup(item) {
  let grp = paintingGroups.get(item);
  return grp || (grp = { id: `${item.id}:content`, type: "group", items: item.items, fx: [] }, paintingGroups.set(item, grp)), grp;
}
function predecode(url) {
  return new Promise((res) => {
    let done = !1, finish = () => {
      done || (done = !0, res());
    };
    try {
      let im = new Image();
      im.onload = () => {
        im.decode ? im.decode().then(finish, finish) : finish();
      }, im.onerror = finish, im.src = url;
    } catch {
      finish();
    }
    setTimeout(finish, 2500);
  });
}
var paintedFrame = () => new Promise((res) => {
  let raf = typeof requestAnimationFrame == "function" ? requestAnimationFrame : (f3) => setTimeout(f3, 16);
  raf(() => raf(res));
}), RETRY = Symbol("retry"), rasterErrors = [];
function rasterInto(g3, item0, ctx) {
  let item = item0.type === "painting" ? paintingGroup(item0) : item0, isGroup = item.type === "group", isFill = item.type === "fill", brush = isGroup || isFill ? null : brushFor(item);
  g3._pending = !0;
  let run = async (kk) => {
    if (!g3.isConnected && g3._everShown) {
      g3._pending = !1;
      return;
    }
    let r0;
    if (isGroup) r0 = await renderGroupAsync(item, kk, { resolveColor: ctx.resolveColor, streamline: ctx.streamline, key: ctx.resolveColor("auto"), lookup: ctx.lookup, snapshots: ctx.snapshots });
    else if (isFill) {
      let loops = fillLoopsOf(item, ctx.lookup);
      r0 = loops ? renderFill(item, loops, kk, { resolveColor: ctx.resolveColor }) : null;
    } else {
      let env = { key: ctx.resolveColor("auto"), snapshots: ctx.snapshots }, snap = brush && brush.kind === "stamp" ? strokeSnapshot(item, env, kk) : null;
      if (snap) {
        let c3 = await decodeSnapshot(snap), b3 = itemBox(item);
        c3 && b3 && (r0 = { canvas: c3, x: b3.x + snap.dx, y: b3.y + snap.dy, w: snap.w, h: snap.h, k: snap.k, fromSnap: !0 }, snap._canvas = null);
      }
      r0 || (r0 = rasterizeStroke(item, brush, ctx.resolveColor(item.color), kk), r0 && brush && brush.kind === "stamp" && r0.k >= 1.5 && saveStrokeSnapshot(item, env, r0));
    }
    let r4 = r0;
    if (!r4) return RETRY;
    let img = g3.querySelector("image");
    img || (img = svgEl("image", { preserveAspectRatio: "none" }), brush && brush.blend && brush.blend !== "normal" && (img.style.mixBlendMode = brush.blend), g3.appendChild(img)), g3._k = r4.k, g3._kWanted = isGroup && item.fx && item.fx.length ? 1 / 0 : kk;
    let blob = await new Promise((res) => {
      let done = !1, finish = (b3) => {
        done || (done = !0, res(b3));
      };
      try {
        r4.canvas.toBlob(finish, "image/png");
      } catch {
        finish(null);
      }
      setTimeout(() => finish(null), 5e3);
    });
    if (isGroup || (r4.canvas.width = r4.canvas.height = 0), !blob) return RETRY;
    let url = URL.createObjectURL(blob);
    return setUrl(g3, url), g3._stale = !1, g3._pending = !1, g3._rendered = !0, g3._painted || (g3._painted = !1), { loaded: predecode(url).then(() => {
      let shown = new Promise((res) => {
        img.addEventListener("load", res, { once: !0 }), img.addEventListener("error", res, { once: !0 }), setTimeout(res, 600);
      });
      return img.setAttribute("x", f22(r4.x)), img.setAttribute("y", f22(r4.y)), img.setAttribute("width", f22(r4.w)), img.setAttribute("height", f22(r4.h)), img.setAttribute("href", url), shown.then(paintedFrame).then(() => {
        g3._painted = !0;
      });
    }) };
  }, attempt = async (kk, tries) => {
    let out;
    try {
      out = await run(kk);
    } catch (e3) {
      out = RETRY, rasterErrors.push({ at: Date.now(), type: item0.type, id: item0.id, scale: kk, message: e3 && (e3.message || String(e3)) || "unknown" }), rasterErrors.length > 30 && rasterErrors.shift(), console.warn("[Palette] render failed, retrying smaller", e3);
    }
    return out === RETRY ? tries > 0 && kk > 0.3 ? attempt(Math.max(0.3, kk * 0.55), tries - 1) : (g3._pending = !1, g3._fails = (g3._fails || 0) + 1, g3._fails <= 4 && setTimeout(() => {
      g3.isConnected && !g3._rendered && !g3._pending && rasterInto(g3, item0, { ...ctx, pixelScale: Math.max(0.3, ctx.pixelScale * 0.5) });
    }, 1500 * g3._fails), null) : (g3._fails = 0, out);
  }, urgent = !!(ctx.isUrgent && ctx.isUrgent(item)), ready0 = isGroup ? groupBrushesReady(item) : isFill ? brushReady(getBrush(item.brush)) : brushReady(brush), ready = Promise.race([ready0, new Promise((r4) => setTimeout(r4, 6e3))]);
  return g3._ready = ready.then(() => schedule(() => attempt(ctx.pixelScale, 3), urgent, `${item0.type} ${item0.id}`)).then((x3) => x3 && x3.loaded).catch((e3) => {
    g3._pending = !1, console.warn("[Palette] render failed", e3);
  }), g3._ready;
}
function buildItemElInner(item, opts, complete = !0) {
  var _a2;
  let g3 = svgEl("g", { "data-id": item.id, opacity: itemOpacity(item) });
  if (item.type === "connector")
    g3.append(...connectorEls(item, opts));
  else if (item.type === "painting") {
    let clipId = `pc-${item.id}`, clip = svgEl("clipPath", { id: clipId, clipPathUnits: "userSpaceOnUse" });
    clip.appendChild(svgEl("rect", { x: f22(item.x), y: f22(item.y), width: f22(item.w), height: f22(item.h) })), g3.appendChild(clip), g3.setAttribute("clip-path", `url(#${clipId})`), item.bg && g3.appendChild(svgEl("rect", { x: f22(item.x), y: f22(item.y), width: f22(item.w), height: f22(item.h), fill: item.bg })), item.items.length && rasterInto(g3, item, opts), item.border !== !1 && g3.appendChild(svgEl("rect", { class: "ink-painting-frame", x: f22(item.x), y: f22(item.y), width: f22(item.w), height: f22(item.h), fill: "none", "vector-effect": "non-scaling-stroke" }));
  } else if (item.type === "board")
    g3.append(...boardEls(item));
  else if (item.type === "image") {
    let box = { x: item.x, y: item.y, width: item.w, height: item.h };
    item.ref && item.ref.kind && item.ref.kind !== "image" ? g3.append(mediaEl(item, box, opts)) : g3.append(refImageEl({ ...item.ref, opacity: (_a2 = item.opacity) != null ? _a2 : 100 }, box, item.id, "rect", opts.resource));
  } else if (item.type === "pixels")
    item.ref && g3.append(refImageEl(item.ref, { x: item.x, y: item.y, width: item.cols * item.cell, height: item.rows * item.cell }, item.id, "rect", opts.resource)), g3.append(...pixelEls(item)), item.border !== !1 && g3.append(pixelBorderEl(item));
  else if (isFlatVector(item))
    for (let c3 of item.items) g3.appendChild(buildItemEl(c3, opts, complete));
  else if (item.type === "group" || item.type === "fill")
    rasterInto(g3, item, opts);
  else if (item.type === "stroke")
    isStamp(item) ? rasterInto(g3, item, opts) : g3.append(svgEl("path", { d: strokeD(item, opts, complete), fill: paint(item.color) }));
  else if (item.type === "shape") {
    if (item.ref) {
      let x3 = Math.min(item.x1, item.x2), y3 = Math.min(item.y1, item.y2);
      g3.append(refImageEl(item.ref, { x: x3, y: y3, width: Math.abs(item.x2 - item.x1), height: Math.abs(item.y2 - item.y1) }, item.id, item.shape, opts.resource));
    }
    g3.append(...shapeEls(item));
  } else item.type === "text" && g3.append(textEl(item, opts));
  return g3;
}
function buildItemEl(item, opts, complete = !0) {
  let g3 = buildItemElInner(item, opts, complete), rot = 0, px = 0, py = 0;
  if (item.rot && TURNS_BY_ANGLE(item))
    rot = item.rot, [px, py] = rotPivot(item);
  else if (item.inShape && opts && opts.lookup) {
    let sh = opts.lookup(item.inShape);
    sh && sh.rot && (rot = sh.rot, [px, py] = rotPivot(sh));
  }
  if (rot) {
    let turn = svgEl("g", { class: "ink-turn", transform: `rotate(${rot} ${f22(px)} ${f22(py)})` });
    for (; g3.firstChild; ) turn.appendChild(g3.firstChild);
    g3.appendChild(turn);
  }
  return g3;
}
function isFlatVector(item) {
  return item.type === "group" && item.flat && !(item.fx || []).length;
}
function updateStrokeEl(g3, item, opts, complete = !1) {
  var _a2;
  (_a2 = g3.firstChild) == null || _a2.setAttribute("d", strokeD(item, opts, complete));
}

// src/images.js
function loadImageFile(file, maxSide = 1400) {
  return new Promise((res, rej) => {
    let url = URL.createObjectURL(file), img = new Image();
    img.onload = () => {
      let sc = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight)), w3 = Math.max(1, Math.round(img.naturalWidth * sc)), h3 = Math.max(1, Math.round(img.naturalHeight * sc)), c3 = document.createElement("canvas");
      c3.width = w3, c3.height = h3, c3.getContext("2d").drawImage(img, 0, 0, w3, h3), URL.revokeObjectURL(url), res({ src: c3.toDataURL("image/png"), width: w3, height: h3, canvas: c3 });
    }, img.onerror = () => {
      URL.revokeObjectURL(url), rej(new Error("that file couldn't be read as an image"));
    }, img.src = url;
  });
}
function imageFromSrc(src) {
  return new Promise((res, rej) => {
    let img = new Image();
    img.onload = () => res(img), img.onerror = rej, img.src = src;
  });
}
function drawRefInto(ctx, img, ref, W2, H2) {
  var _a2;
  let fit = ref.fit || "cover", sc = ((_a2 = ref.scale) != null ? _a2 : 100) / 100, fw = W2 * sc, fh = H2 * sc, fx = (W2 - fw) / 2 + (ref.ox || 0) / 100 * W2, fy = (H2 - fh) / 2 + (ref.oy || 0) / 100 * H2, dw = fw, dh = fh, dx = fx, dy = fy;
  if (fit !== "stretch") {
    let r4 = fit === "contain" ? Math.min(fw / img.width, fh / img.height) : Math.max(fw / img.width, fh / img.height);
    dw = img.width * r4, dh = img.height * r4, dx = fx + (fw - dw) / 2, dy = fy + (fh - dh) / 2;
  }
  ctx.save(), ctx.beginPath(), ctx.rect(0, 0, W2, H2), ctx.clip(), ref.rotate && (ctx.translate(W2 / 2, H2 / 2), ctx.rotate(ref.rotate * Math.PI / 180), ctx.translate(-W2 / 2, -H2 / 2)), ctx.drawImage(img, dx, dy, dw, dh), ctx.restore();
}
function imageToCells(img, cols, rows, { alphaCut = 0.35, levels = 0, ref = null } = {}) {
  let c3 = document.createElement("canvas");
  c3.width = cols, c3.height = rows;
  let ctx = c3.getContext("2d");
  if (ctx.imageSmoothingEnabled = !0, ref)
    drawRefInto(ctx, img, ref, cols, rows);
  else {
    let s3 = Math.max(cols / img.width, rows / img.height), w3 = img.width * s3, h3 = img.height * s3;
    ctx.drawImage(img, (cols - w3) / 2, (rows - h3) / 2, w3, h3);
  }
  let d3 = ctx.getImageData(0, 0, cols, rows).data, cells = {}, q2 = levels > 1 ? (v3) => Math.round(v3 / 255 * (levels - 1)) * (255 / (levels - 1)) : (v3) => v3;
  for (let i3 = 0; i3 < cols * rows; i3++) {
    let a3 = d3[i3 * 4 + 3] / 255;
    a3 < alphaCut || (cells[i3] = toHex([q2(d3[i3 * 4]), q2(d3[i3 * 4 + 1]), q2(d3[i3 * 4 + 2]), a3 >= 0.98 ? 1 : a3]));
  }
  return c3.width = c3.height = 0, cells;
}
function imageToStrokes(img, box, { levels = 3, detail = 1, ref = null } = {}) {
  let W2 = Math.max(48, Math.min(120 + detail * 130, Math.round(box.width * (0.6 + detail * 0.2)))), H2 = Math.max(32, Math.round(W2 * img.height / img.width)), c3 = document.createElement("canvas");
  c3.width = W2, c3.height = H2;
  let ctx = c3.getContext("2d");
  ref ? drawRefInto(ctx, img, ref, W2, H2) : ctx.drawImage(img, 0, 0, W2, H2);
  let d3 = ctx.getImageData(0, 0, W2, H2).data;
  c3.width = c3.height = 0;
  let lum = new Float32Array(W2 * H2);
  for (let i3 = 0; i3 < W2 * H2; i3++) {
    let a3 = d3[i3 * 4 + 3] / 255;
    lum[i3] = a3 < 0.3 ? 1 : (0.299 * d3[i3 * 4] + 0.587 * d3[i3 * 4 + 1] + 0.114 * d3[i3 * 4 + 2]) / 255;
  }
  let s3 = ref ? box.width / W2 : Math.min(box.width / W2, box.height / H2), ox = ref ? box.x : box.x + (box.width - W2 * s3) / 2, oy = ref ? box.y : box.y + (box.height - H2 * s3) / 2, loops = [];
  for (let l3 = 1; l3 <= levels; l3++) {
    let cut = l3 / (levels + 1), mask = new Uint8Array(W2 * H2);
    for (let i3 = 0; i3 < mask.length; i3++) mask[i3] = lum[i3] < cut ? 1 : 0;
    for (let loop of traceContours(mask, W2, H2)) {
      if (loop.length < Math.max(5, 14 - detail * 2)) continue;
      let simple = simplifyLoop(loop, Math.max(0.35, 1.8 / detail));
      simple.length < 4 || loops.push(simple.map(([x3, y3]) => [ox + x3 * s3, oy + y3 * s3]));
    }
  }
  return loops;
}
var EXT = {
  image: ["png", "jpg", "jpeg", "gif", "webp", "avif", "bmp", "svg"],
  video: ["mp4", "webm", "ogv", "mov", "mkv"],
  audio: ["mp3", "wav", "m4a", "ogg", "flac", "3gp", "aac"],
  pdf: ["pdf"],
  note: ["md"]
};
function kindOf(nameOrFile) {
  let ext = ((typeof nameOrFile == "string" ? nameOrFile : nameOrFile && (nameOrFile.name || nameOrFile.path) || "").split(".").pop() || "").toLowerCase();
  for (let kind in EXT) if (EXT[kind].includes(ext)) return kind;
  return "other";
}
var ACCEPTED = [...EXT.image, ...EXT.video, ...EXT.audio, ...EXT.pdf, ...EXT.note].map((e3) => `.${e3}`).join(",");

// src/bake.js
var import_obsidian = require("obsidian");
var BREAD_ICON = `<g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
<path d="M22 58C13 56 10 49 12 42C15 31 30 22 50 22C70 22 85 31 88 42C90 49 87 56 78 58V78C78 82 75 84 71 84H29C25 84 22 82 22 78Z"/>
<path d="M36 38L44 46M50 34L58 42M64 38L70 44"/>
</g>`, META_ID = "canvas-ink-data", LIGHT_INK = "#1e1e1e", DARK_INK = "#dadada", PAD = 6;
var f23 = (n3) => Math.round(n3 * 100) / 100;
async function buildBakedSvg(layer, items) {
  let box = unionBox(items.map((i3) => layer.bboxOf(i3)));
  if (!box) return null;
  await prepareExportFonts(items);
  let x3 = Math.floor(box.x - PAD), y3 = Math.floor(box.y - PAD), w3 = Math.ceil(box.width + PAD * 2), h3 = Math.ceil(box.height + PAD * 2), opts = layer.renderOpts(), k3 = Math.min(4, Math.max(2, opts.pixelScale)), faces = /* @__PURE__ */ new Set(), parts = [], ser = new XMLSerializer();
  for (let item of items)
    if (item.type === "fill") {
      let loops = fillLoopsOf(item, opts.lookup);
      if (!loops) continue;
      let variants = item.color === "auto" ? [["ink-l", LIGHT_INK], ["ink-d", DARK_INK]] : [[null, item.color]];
      for (let [cls, col] of variants) {
        let r4 = renderFill(item, loops, k3, { resolveColor: (c3) => c3 === "auto" || !c3 ? col : c3 });
        r4 && (parts.push(
          `<image${cls ? ` class="${cls}"` : ""} x="${f23(r4.x)}" y="${f23(r4.y)}" width="${f23(r4.w)}" height="${f23(r4.h)}" preserveAspectRatio="none" opacity="${itemOpacity(item)}" href="${r4.canvas.toDataURL("image/png")}"/>`
        ), r4.canvas.width = r4.canvas.height = 0);
      }
    } else if (item.type === "group") {
      for (let c3 of item.items) c3.type === "stroke" && await brushReady(brushFor(c3));
      let variants = [["ink-l", LIGHT_INK], ["ink-d", DARK_INK]];
      for (let [cls, auto] of variants) {
        let env = { resolveColor: (c3) => c3 === "auto" || !c3 ? auto : c3, streamline: opts.streamline, key: "bake" + auto }, r4 = renderGroup(item, k3, env, !1);
        r4 && (parts.push(
          `<image class="${cls}" x="${f23(r4.x)}" y="${f23(r4.y)}" width="${f23(r4.w)}" height="${f23(r4.h)}" preserveAspectRatio="none" href="${r4.canvas.toDataURL("image/png")}"/>`
        ), r4.canvas.width = r4.canvas.height = 0);
      }
    } else if (isStamp(item)) {
      let brush = brushFor(item);
      await brushReady(brush);
      let variants = item.color === "auto" ? [["ink-l", LIGHT_INK], ["ink-d", DARK_INK]] : [[null, item.color]], blend = brush.blend && brush.blend !== "normal" ? ` style="mix-blend-mode:${brush.blend}"` : "";
      for (let [cls, color] of variants) {
        let r4 = rasterizeStroke(item, brush, color, k3);
        if (!r4) continue;
        let url = r4.canvas.toDataURL("image/png");
        r4.canvas.width = r4.canvas.height = 0, parts.push(
          `<image${cls ? ` class="${cls}"` : ""} x="${f23(r4.x)}" y="${f23(r4.y)}" width="${f23(r4.w)}" height="${f23(r4.h)}" preserveAspectRatio="none" opacity="${itemOpacity(item)}"${blend} href="${url}"/>`
        );
      }
    } else {
      let el = buildItemEl(item, opts);
      if (el.removeAttribute("data-id"), item.type === "text") {
        let f3 = exportFont(item.font);
        for (let t3 of el.querySelectorAll("text"))
          t3.style.fontFamily = f3.family, t3.removeAttribute("class");
        f3.face && faces.add(f3.face);
      }
      parts.push(ser.serializeToString(el));
    }
  let brushes = {};
  for (let it of items)
    for (let id of brushIds(it))
      if (isCustom(id) && !brushes[id]) {
        let { hidden, ...def } = getBrush(id);
        brushes[id] = def;
      }
  let meta = JSON.stringify({ v: 1, box: { x: x3, y: y3, w: w3, h: h3 }, items, brushes }).replace(/]]>/g, "]]]]><![CDATA[>"), style = `svg{color:${LIGHT_INK}}text{white-space:pre;text-rendering:geometricPrecision}.ink-d{display:none}@media (prefers-color-scheme: dark){svg{color:${DARK_INK}}.ink-d{display:inline}.ink-l{display:none}}` + [...faces].join("");
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${w3}" height="${h3}" viewBox="${x3} ${y3} ${w3} ${h3}"><title>Palette drawing</title><metadata id="${META_ID}"><![CDATA[${meta}]]></metadata><style>${style}</style>` + parts.join("") + "</svg>", box: { x: x3, y: y3, w: w3, h: h3 } };
}
function parseBaked(text) {
  let m3 = new RegExp(`<metadata id="${META_ID}">([\\s\\S]*?)</metadata>`).exec(text);
  if (!m3) return null;
  try {
    let data = JSON.parse(m3[1].replace(/<!\[CDATA\[|\]\]>/g, ""));
    return data && Array.isArray(data.items) && data.box ? data : null;
  } catch {
    return null;
  }
}
async function addFileNode(app, canvas, canvasFile, file, box, id) {
  let node = { id: id || uid().replace(/[^a-z0-9]/gi, "").slice(0, 16), type: "file", file: file.path, x: box.x, y: box.y, width: box.w, height: box.h }, exists = () => {
    try {
      if (canvas.nodes && typeof canvas.nodes.get == "function" && canvas.nodes.get(node.id)) return !0;
      if (typeof canvas.getData == "function") return canvas.getData().nodes.some((n3) => n3.id === node.id);
    } catch {
    }
    return !1;
  }, attempts = [
    () => typeof canvas.importData == "function" && canvas.importData({ nodes: [node], edges: [] }),
    () => {
      if (typeof canvas.getData != "function" || typeof canvas.setData != "function") return;
      let data = canvas.getData();
      data.nodes.push(node), canvas.setData(data);
    }
  ];
  if (canvas)
    for (let attempt of attempts)
      try {
        if (attempt(), exists())
          return typeof canvas.requestSave == "function" && canvas.requestSave(), node;
      } catch (e3) {
        console.warn("[Palette] Placing baked card failed, trying another way", e3);
      }
  try {
    return canvas && typeof canvas.requestSave == "function" && canvas.requestSave(), await new Promise((r4) => setTimeout(r4, 400)), await app.vault.process(canvasFile, (text) => {
      let data = text.trim() ? JSON.parse(text) : { nodes: [], edges: [] };
      return data.nodes = data.nodes || [], data.nodes.push(node), JSON.stringify(data, null, "	");
    }), node;
  } catch (e3) {
    return console.error("[Palette] Could not add baked card to the canvas file", e3), !1;
  }
}
async function bakeItems(layer, items) {
  let { app } = layer.plugin, canvas = layer.view.canvas, source = layer.view.file;
  if (!items.length || !source) return !1;
  let flat = items.map((it) => it.type === "painting" ? { id: it.id, type: "group", items: it.items, fx: [] } : it), built = await buildBakedSvg(layer, flat);
  if (!built)
    return new import_obsidian.Notice("Palette: couldn't measure that drawing to bake it."), !1;
  let path = await app.fileManager.getAvailablePathForAttachment(`${source.basename} drawing.svg`, source.path), file = await app.vault.create(path, built.svg), ids = new Set(items.map((i3) => i3.id)), before = layer.doc.items;
  layer.doc.update((all) => all.filter((i3) => !ids.has(i3.id))), layer.capturingCanvasHistory = 0;
  let placed = null;
  try {
    placed = await addFileNode(app, canvas, source, file, built.box);
  } finally {
    let pushed = layer.capturingCanvasHistory;
    layer.capturingCanvasHistory = null, placed && layer.recordBake({ nodeId: placed.id, canvasHistory: pushed > 0, file, box: built.box });
  }
  return placed ? (new import_obsidian.Notice(`Baked ${items.length} item${items.length === 1 ? "" : "s"} into the canvas. Unbake the card to edit it again.`), layer.scheduleMarkBaked(), !0) : (layer.doc.items !== before && layer.doc.undo(), new import_obsidian.Notice(`Palette saved the drawing as ${file.path}, but couldn't place it on the canvas. Drag that file onto the canvas; your ink was left as it was.`, 1e4), !1);
}
async function replaceBakedCard(layer, rec) {
  return addFileNode(layer.plugin.app, layer.view.canvas, layer.view.file, rec.file, rec.box, rec.nodeId);
}
function removeCardById(canvas, id) {
  try {
    let node = canvas && canvas.nodes && typeof canvas.nodes.get == "function" ? canvas.nodes.get(id) : null;
    if (node && typeof canvas.removeNode == "function")
      return canvas.removeNode(node), typeof canvas.requestSave == "function" && canvas.requestSave(), !0;
    if (canvas && typeof canvas.getData == "function" && typeof canvas.setData == "function") {
      let d3 = canvas.getData();
      return d3.nodes = d3.nodes.filter((n3) => n3.id !== id), canvas.setData(d3), typeof canvas.requestSave == "function" && canvas.requestSave(), !0;
    }
  } catch (e3) {
    console.warn("[Palette] Could not remove baked card", e3);
  }
  return !1;
}
function transformItem(it, bx, by, nx, ny, s3) {
  let X2 = (v3) => Math.round((nx + (v3 - bx) * s3) * 100) / 100, Y2 = (v3) => Math.round((ny + (v3 - by) * s3) * 100) / 100, n3 = { ...it, id: uid() };
  return it.type === "stroke" ? (n3.points = it.points.map((p3) => [X2(p3[0]), Y2(p3[1]), ...p3.slice(2)]), n3.size = it.size * s3) : it.type === "shape" ? Object.assign(n3, { x1: X2(it.x1), y1: Y2(it.y1), x2: X2(it.x2), y2: Y2(it.y2), size: it.size * s3 }) : it.type === "text" ? Object.assign(n3, { x: X2(it.x), y: Y2(it.y), fontSize: it.fontSize * s3 }) : it.type === "image" || it.type === "board" ? Object.assign(n3, { x: X2(it.x), y: Y2(it.y), w: it.w * s3, h: it.h * s3 }) : it.type === "pixels" ? Object.assign(n3, { x: X2(it.x), y: Y2(it.y), cell: it.cell * s3 }) : it.type === "fill" ? (it.box && (n3.box = { x: X2(it.box.x), y: Y2(it.box.y), width: it.box.width * s3, height: it.box.height * s3 }), it.loops && (n3.loops = it.loops.map((l3) => l3.map((p3) => [X2(p3[0]), Y2(p3[1])]))), n3.spacing = (it.spacing || 18) * s3) : it.type === "group" && (n3.items = it.items.map((c3) => transformItem(c3, bx, by, nx, ny, s3)), n3.fx = it.fx.map((f3) => ({ ...f3, size: f3.size * s3, points: f3.points.map((p3) => [X2(p3[0]), Y2(p3[1]), ...p3.slice(2)]) }))), n3;
}
function svgNodes(nodes) {
  return nodes.filter((n3) => n3 && n3.file && typeof n3.file.path == "string" && /\.svg$/i.test(n3.file.path));
}
async function unbakeNodes(layer, nodes) {
  let { app } = layer.plugin, canvas = layer.view.canvas, count = 0, skipped = 0;
  for (let node of svgNodes(nodes)) {
    let data = parseBaked(await app.vault.read(node.file));
    if (!data) {
      skipped++;
      continue;
    }
    for (let id in data.brushes || {}) isCustom(id) || registerBrush({ ...data.brushes[id], hidden: !0 });
    let nx = typeof node.x == "number" ? node.x : data.box.x, ny = typeof node.y == "number" ? node.y : data.box.y, s3 = typeof node.width == "number" && data.box.w ? node.width / data.box.w : 1, idMap = /* @__PURE__ */ new Map(), items = data.items.map((it) => {
      let n3 = transformItem(it, data.box.x, data.box.y, nx, ny, s3);
      return idMap.set(it.id, n3.id), n3;
    }).map((n3) => n3.inShape && idMap.has(n3.inShape) ? { ...n3, inShape: idMap.get(n3.inShape) } : n3);
    layer.commit((all) => [...all, ...items]), canvas && typeof canvas.removeNode == "function" && canvas.nodes && canvas.nodes.get && canvas.nodes.get(node.id) === node ? canvas.removeNode(node) : node.id && removeCardById(canvas, node.id), canvas && typeof canvas.requestSave == "function" && canvas.requestSave();
    let file = node.file;
    try {
      app.fileManager.trashFile ? await app.fileManager.trashFile(file) : await app.vault.trash(file, !0);
    } catch (e3) {
      console.warn("[Palette] Could not trash baked file", e3);
    }
    count++;
  }
  return count && new import_obsidian.Notice(`Unbaked ${count} drawing${count === 1 ? "" : "s"} back into ink.`), skipped && new import_obsidian.Notice(`${skipped} selected image${skipped === 1 ? " wasn't" : "s weren't"} baked by Palette, so ${skipped === 1 ? "it was" : "they were"} left alone.`), count;
}

// src/ui/controls.js
var PALETTE = ["auto", "#1e1e1e", "#e03131", "#f08c00", "#fab005", "#2f9e44", "#12b886", "#1971c2", "#7048e8", "#c2255c", "#868e96", "#ffffff"];
function hexToRgb(hex) {
  let m3 = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i.exec(hex || "");
  if (!m3) return null;
  let h3 = m3[1];
  h3.length === 3 && (h3 = h3.split("").map((c3) => c3 + c3).join(""));
  let n3 = parseInt(h3, 16);
  return [n3 >> 16 & 255, n3 >> 8 & 255, n3 & 255];
}
function rgbToHex(r4, g3, b3) {
  return "#" + [r4, g3, b3].map((v3) => Math.round(Math.max(0, Math.min(255, v3))).toString(16).padStart(2, "0")).join("");
}
function rgbToHsv(r4, g3, b3) {
  r4 /= 255, g3 /= 255, b3 /= 255;
  let max2 = Math.max(r4, g3, b3), min = Math.min(r4, g3, b3), d3 = max2 - min, h3 = 0;
  return d3 && (max2 === r4 ? h3 = (g3 - b3) / d3 % 6 : max2 === g3 ? h3 = (b3 - r4) / d3 + 2 : h3 = (r4 - g3) / d3 + 4, h3 *= 60, h3 < 0 && (h3 += 360)), [h3, max2 ? d3 / max2 : 0, max2];
}
function hsvToRgb(h3, s3, v3) {
  let c3 = v3 * s3, x3 = c3 * (1 - Math.abs(h3 / 60 % 2 - 1)), m3 = v3 - c3, [r4, g3, b3] = h3 < 60 ? [c3, x3, 0] : h3 < 120 ? [x3, c3, 0] : h3 < 180 ? [0, c3, x3] : h3 < 240 ? [0, x3, c3] : h3 < 300 ? [x3, 0, c3] : [c3, 0, x3];
  return [(r4 + m3) * 255, (g3 + m3) * 255, (b3 + m3) * 255];
}
function drag(el, onMove, onEnd) {
  el.addEventListener("pointerdown", (e3) => {
    var _a2;
    e3.preventDefault(), e3.stopPropagation(), (_a2 = el.setPointerCapture) == null || _a2.call(el, e3.pointerId), onMove(e3, !0);
    let move = (ev) => {
      ev.preventDefault(), onMove(ev, !1);
    }, up = (ev) => {
      el.removeEventListener("pointermove", move), el.removeEventListener("pointerup", up), el.removeEventListener("pointercancel", up), onEnd && onEnd(ev);
    };
    el.addEventListener("pointermove", move), el.addEventListener("pointerup", up), el.addEventListener("pointercancel", up);
  });
}
var ColorPicker = class {
  constructor(parent, opts) {
    this.opts = opts, this.hsv = [210, 0.8, 0.8];
    let root = this.el = parent.createDiv({ cls: "ink-cp" }), wheel = root.createDiv({ cls: "ink-cp-wheel" });
    this.ring = wheel.createDiv({ cls: "ink-cp-ring" }), this.ringThumb = wheel.createDiv({ cls: "ink-cp-ring-thumb" }), this.square = wheel.createDiv({ cls: "ink-cp-square" }), this.sqThumb = this.square.createDiv({ cls: "ink-cp-sq-thumb" }), drag(this.ring, (e3) => {
      let r4 = wheel.getBoundingClientRect(), dx = e3.clientX - (r4.left + r4.width / 2), dy = e3.clientY - (r4.top + r4.height / 2), deg = Math.atan2(dx, -dy) * 180 / Math.PI;
      deg < 0 && (deg += 360), this.hsv[0] = deg, this.hsv[1] < 0.05 && (this.hsv[1] = 0.8), this.hsv[2] < 0.05 && (this.hsv[2] = 0.8), this.emit(!1);
    }, () => this.emit(!0)), drag(this.square, (e3) => {
      let r4 = this.square.getBoundingClientRect();
      this.hsv[1] = Math.max(0, Math.min(1, (e3.clientX - r4.left) / r4.width)), this.hsv[2] = Math.max(0, Math.min(1, 1 - (e3.clientY - r4.top) / r4.height)), this.emit(!1);
    }, () => this.emit(!0));
    let row = root.createDiv({ cls: "ink-cp-row" });
    this.preview = row.createDiv({ cls: "ink-cp-preview" }), this.hex = row.createEl("input", { cls: "ink-cp-hex", type: "text", attr: { maxlength: "7", spellcheck: "false", autocapitalize: "off", "aria-label": "Hex color" } }), this.hex.addEventListener("keydown", (e3) => e3.stopPropagation()), this.hex.addEventListener("change", () => {
      let rgb3 = hexToRgb(this.hex.value.trim());
      if (!rgb3) return this.sync();
      this.hsv = rgbToHsv(...rgb3), this.emit(!0);
    }), this.paletteRow = root.createDiv({ cls: "ink-cp-swatches" }), root.createDiv({ cls: "ink-label", text: "Recent" }), this.recentRow = root.createDiv({ cls: "ink-cp-swatches ink-cp-recents" }), this.buildSwatches();
  }
  swatch(parent, c3) {
    let b3 = parent.createEl("button", { cls: "ink-swatch" + (c3 === "auto" ? " is-auto" : ""), attr: { type: "button", "aria-label": c3 === "auto" ? "Theme text color" : c3 } });
    return c3 !== "auto" && b3.style.setProperty("--swatch", c3), b3.dataset.color = c3, b3.addEventListener("click", () => {
      c3 !== "auto" && (this.hsv = rgbToHsv(...hexToRgb(c3))), this.opts.onCommit(c3), this.sync();
    }), b3;
  }
  buildSwatches() {
    this.paletteRow.empty(), PALETTE.forEach((c3) => this.swatch(this.paletteRow, c3)), this.recentRow.empty();
    let rec = this.opts.recents();
    rec.length || this.recentRow.createSpan({ cls: "ink-cp-empty", text: "Colors you pick show up here." }), rec.forEach((c3) => this.swatch(this.recentRow, c3));
  }
  hexValue() {
    return rgbToHex(...hsvToRgb(...this.hsv));
  }
  emit(final) {
    let c3 = this.hexValue();
    this.render(c3), final ? (this.opts.onCommit(c3), this.buildSwatches(), this.markActive(c3)) : this.opts.onInput(c3);
  }
  /** Pull the current color from the owner and show it. */
  sync() {
    let c3 = this.opts.getColor();
    if (c3 !== "auto") {
      let rgb3 = hexToRgb(c3);
      if (rgb3) {
        let hsv = rgbToHsv(...rgb3);
        hsv[1] < 0.01 && (hsv[0] = this.hsv[0]), this.hsv = hsv;
      }
    }
    this.buildSwatches(), this.render(c3 === "auto" ? null : c3), this.markActive(c3);
  }
  markActive(c3) {
    this.el.querySelectorAll(".ink-swatch").forEach((b3) => b3.classList.toggle("is-active", b3.dataset.color === c3));
  }
  render(hex) {
    let [h3, s3, v3] = this.hsv;
    this.square.style.setProperty("--hue", `hsl(${h3}, 100%, 50%)`);
    let a3 = h3 * Math.PI / 180;
    this.ringThumb.style.setProperty("--rx", `${Math.sin(a3) * 50}%`), this.ringThumb.style.setProperty("--ry", `${-Math.cos(a3) * 50}%`), this.ringThumb.style.background = `hsl(${h3}, 100%, 50%)`, this.sqThumb.style.left = `${s3 * 100}%`, this.sqThumb.style.top = `${(1 - v3) * 100}%`;
    let shown = hex || this.hexValue();
    this.sqThumb.style.background = shown, this.preview.style.background = hex || "var(--text-normal)", this.preview.toggleClass("is-auto", !hex), document.activeElement !== this.hex && (this.hex.value = hex ? hex.toUpperCase() : "Theme");
  }
}, Knob = class {
  constructor(parent, opts) {
    this.opts = opts;
    let b3 = this.el = parent.createEl("button", { cls: "ink-knob", attr: { type: "button", "aria-label": opts.label } });
    this.face = b3.createDiv({ cls: "ink-knob-face" }), this.tip = b3.createDiv({ cls: "ink-knob-tip" });
    let startY = 0, startT = 0, moved = !1;
    b3.addEventListener("pointerdown", (e3) => {
      var _a2;
      e3.preventDefault(), e3.stopPropagation(), (_a2 = b3.setPointerCapture) == null || _a2.call(b3, e3.pointerId), startY = e3.clientY, startT = this.toT(opts.get()), moved = !1;
      let move = (ev) => {
        let dy = startY - ev.clientY;
        if (!moved && Math.abs(dy) < 5) return;
        moved = !0, b3.addClass("is-dragging");
        let t3 = Math.max(0, Math.min(1, startT + dy / 220));
        opts.set(this.fromT(t3), !1), this.update();
      }, up = () => {
        b3.removeEventListener("pointermove", move), b3.removeEventListener("pointerup", up), b3.removeEventListener("pointercancel", up), b3.removeClass("is-dragging"), moved ? opts.set(opts.get(), !0) : opts.onTap && opts.onTap();
      };
      b3.addEventListener("pointermove", move), b3.addEventListener("pointerup", up), b3.addEventListener("pointercancel", up);
    });
  }
  toT(v3) {
    let { min, max: max2, log } = this.opts;
    return v3 = Math.max(min, Math.min(max2, v3)), log ? Math.log(v3 / min) / Math.log(max2 / min) : (v3 - min) / (max2 - min);
  }
  fromT(t3) {
    let { min, max: max2, log } = this.opts, v3 = log ? min * Math.pow(max2 / min, t3) : min + (max2 - min) * t3;
    return this.opts.round ? this.opts.round(v3) : v3;
  }
  update() {
    let v3 = this.opts.get();
    this.tip.setText(this.opts.format(v3)), this.opts.render(this.face, v3, this.toT(v3));
  }
};
function slider(parent, { min, max: max2, log, get, set, format, round }) {
  let wrap = parent.createDiv({ cls: "ink-slider" }), input = wrap.createEl("input", { type: "range", cls: "ink-range", attr: { min: "0", max: "1000", step: "1" } }), out = wrap.createSpan({ cls: "ink-range-value" }), toT = (v3) => log ? Math.log(v3 / min) / Math.log(max2 / min) : (v3 - min) / (max2 - min), fromT = (t3) => {
    let v3 = log ? min * Math.pow(max2 / min, t3) : min + (max2 - min) * t3;
    return round ? round(v3) : v3;
  }, refresh = () => {
    let v3 = get();
    input.value = String(Math.round(Math.max(0, Math.min(1, toT(v3))) * 1e3)), out.setText(format(v3));
  };
  return input.addEventListener("input", () => {
    set(fromT(+input.value / 1e3), !1), out.setText(format(get()));
  }), input.addEventListener("change", () => set(fromT(+input.value / 1e3), !0)), refresh(), { refresh };
}

// src/cloudfonts.js
var import_obsidian2 = require("obsidian");
var FONT_CATEGORIES = ["Handwriting", "Fun", "Wacky", "Techy", "Vintage", "Elegant", "Basic"], CLOUD_FONTS = [
  // Handwriting: pens, markers, scripts
  ["Caveat", "Handwriting"],
  ["Kalam", "Handwriting"],
  ["Indie Flower", "Handwriting"],
  ["Shadows Into Light", "Handwriting"],
  ["Gloria Hallelujah", "Handwriting"],
  ["Homemade Apple", "Handwriting"],
  ["Reenie Beanie", "Handwriting"],
  ["Nothing You Could Do", "Handwriting"],
  ["Covered By Your Grace", "Handwriting"],
  ["Rock Salt", "Handwriting"],
  ["Cedarville Cursive", "Handwriting"],
  ["Handlee", "Handwriting"],
  ["Schoolbell", "Handwriting"],
  ["Coming Soon", "Handwriting"],
  ["Gochi Hand", "Handwriting"],
  ["Just Another Hand", "Handwriting"],
  ["Sue Ellen Francisco", "Handwriting"],
  ["Waiting for the Sunrise", "Handwriting"],
  ["Zeyada", "Handwriting"],
  ["Mansalva", "Handwriting"],
  ["Neucha", "Handwriting"],
  ["Nanum Pen Script", "Handwriting"],
  ["Klee One", "Handwriting"],
  ["Architects Daughter", "Handwriting"],
  ["Patrick Hand", "Handwriting"],
  ["Permanent Marker", "Handwriting"],
  ["Marck Script", "Handwriting"],
  ["Kaushan Script", "Handwriting"],
  ["Bad Script", "Handwriting"],
  ["Give You Glory", "Handwriting"],
  ["La Belle Aurore", "Handwriting"],
  ["Loved by the King", "Handwriting"],
  ["Annie Use Your Telescope", "Handwriting"],
  ["Crafty Girls", "Handwriting"],
  ["Dawning of a New Day", "Handwriting"],
  ["Over the Rainbow", "Handwriting"],
  ["Walter Turncoat", "Handwriting"],
  ["Kristi", "Handwriting"],
  ["Meddon", "Handwriting"],
  ["Mr Dafoe", "Handwriting"],
  ["Dancing Script", "Handwriting"],
  ["Pacifico", "Handwriting"],
  ["Satisfy", "Handwriting"],
  ["Amatic SC", "Handwriting"],
  ["Courgette", "Handwriting"],
  ["Yellowtail", "Handwriting"],
  ["Sacramento", "Handwriting"],
  ["Allura", "Handwriting"],
  ["Delius", "Handwriting"],
  ["Itim", "Handwriting"],
  ["Sriracha", "Handwriting"],
  ["Mali", "Handwriting"],
  ["Gaegu", "Handwriting"],
  ["Comic Neue", "Handwriting"],
  ["Short Stack", "Handwriting"],
  ["Caveat Brush", "Handwriting"],
  ["Mynerve", "Handwriting"],
  ["Shantell Sans", "Handwriting"],
  ["Playpen Sans", "Handwriting"],
  ["Edu NSW ACT Foundation", "Handwriting"],
  ["Ms Madi", "Handwriting"],
  ["Square Peg", "Handwriting"],
  ["Whisper", "Handwriting"],
  ["Sassy Frass", "Handwriting"],
  ["Puppies Play", "Handwriting"],
  ["Cherish", "Handwriting"],
  ["Comforter Brush", "Handwriting"],
  ["Ole", "Handwriting"],
  ["Vujahday Script", "Handwriting"],
  ["Estonia", "Handwriting"],
  ["Redacted Script", "Handwriting"],
  ["Long Cang", "Handwriting"],
  ["Zhi Mang Xing", "Handwriting"],
  // Fun: friendly, bubbly, comic, kid
  ["Fredoka", "Fun"],
  ["Baloo 2", "Fun"],
  ["Luckiest Guy", "Fun"],
  ["Chewy", "Fun"],
  ["Lilita One", "Fun"],
  ["Titan One", "Fun"],
  ["Concert One", "Fun"],
  ["Boogaloo", "Fun"],
  ["Bubblegum Sans", "Fun"],
  ["Carter One", "Fun"],
  ["Cherry Cream Soda", "Fun"],
  ["Freckle Face", "Fun"],
  ["Knewave", "Fun"],
  ["Pattaya", "Fun"],
  ["Salsa", "Fun"],
  ["Skranji", "Fun"],
  ["Rammetto One", "Fun"],
  ["Sigmar One", "Fun"],
  ["Bangers", "Fun"],
  ["Lobster", "Fun"],
  ["Righteous", "Fun"],
  ["Chango", "Fun"],
  ["Chicle", "Fun"],
  ["Coiny", "Fun"],
  ["Delius Swash Caps", "Fun"],
  ["Emilys Candy", "Fun"],
  ["Fuzzy Bubbles", "Fun"],
  ["Galindo", "Fun"],
  ["Grandstander", "Fun"],
  ["Happy Monkey", "Fun"],
  ["Kavoon", "Fun"],
  ["Leckerli One", "Fun"],
  ["Lemon", "Fun"],
  ["Modak", "Fun"],
  ["Original Surfer", "Fun"],
  ["Paytone One", "Fun"],
  ["Poetsen One", "Fun"],
  ["Sniglet", "Fun"],
  ["Spicy Rice", "Fun"],
  ["Sunshiney", "Fun"],
  ["Wendy One", "Fun"],
  ["Yatra One", "Fun"],
  ["Lakki Reddy", "Fun"],
  ["Jua", "Fun"],
  ["Gluten", "Fun"],
  ["Slackey", "Fun"],
  ["Shrikhand", "Fun"],
  ["Oleo Script", "Fun"],
  ["Rancho", "Fun"],
  ["Ribeye", "Fun"],
  // Wacky: strange, spooky, loud
  ["Creepster", "Wacky"],
  ["Nosifer", "Wacky"],
  ["Butcherman", "Wacky"],
  ["Eater", "Wacky"],
  ["Metal Mania", "Wacky"],
  ["New Rocker", "Wacky"],
  ["Rubik Glitch", "Wacky"],
  ["Rubik Wet Paint", "Wacky"],
  ["Rubik Puddles", "Wacky"],
  ["Rubik Beastly", "Wacky"],
  ["Rubik Maze", "Wacky"],
  ["Rubik Spray Paint", "Wacky"],
  ["Rubik Distressed", "Wacky"],
  ["Rubik Burned", "Wacky"],
  ["Rubik Bubbles", "Wacky"],
  ["Rubik Dirt", "Wacky"],
  ["Rubik Iso", "Wacky"],
  ["Rubik Marker Hatch", "Wacky"],
  ["Rubik Storm", "Wacky"],
  ["Rubik Vinyl", "Wacky"],
  ["Bungee Shade", "Wacky"],
  ["Bungee Outline", "Wacky"],
  ["Bungee Hairline", "Wacky"],
  ["Monoton", "Wacky"],
  ["Fascinate", "Wacky"],
  ["Faster One", "Wacky"],
  ["Frijole", "Wacky"],
  ["Griffy", "Wacky"],
  ["Henny Penny", "Wacky"],
  ["Kranky", "Wacky"],
  ["Piedra", "Wacky"],
  ["Sancreek", "Wacky"],
  ["Trade Winds", "Wacky"],
  ["Vast Shadow", "Wacky"],
  ["Wallpoet", "Wacky"],
  ["Zen Dots", "Wacky"],
  ["Nabla", "Wacky"],
  ["Honk", "Wacky"],
  ["Jersey 10", "Wacky"],
  ["Bagel Fat One", "Wacky"],
  ["Moirai One", "Wacky"],
  ["Lacquer", "Wacky"],
  ["Diplomata", "Wacky"],
  ["Flavors", "Wacky"],
  ["Jolly Lodger", "Wacky"],
  ["Mystery Quest", "Wacky"],
  ["Ranchers", "Wacky"],
  ["Ribeye Marrow", "Wacky"],
  ["Shojumaru", "Wacky"],
  ["Snowburst One", "Wacky"],
  ["Trochut", "Wacky"],
  ["Underdog", "Wacky"],
  ["Unkempt", "Wacky"],
  ["Wellfleet", "Wacky"],
  ["Zilla Slab Highlight", "Wacky"],
  // Techy: pixels, sci-fi, terminals
  ["Press Start 2P", "Techy"],
  ["Silkscreen", "Techy"],
  ["VT323", "Techy"],
  ["Pixelify Sans", "Techy"],
  ["Tiny5", "Techy"],
  ["Orbitron", "Techy"],
  ["Audiowide", "Techy"],
  ["Russo One", "Techy"],
  ["Exo 2", "Techy"],
  ["Michroma", "Techy"],
  ["Electrolize", "Techy"],
  ["Aldrich", "Techy"],
  ["Quantico", "Techy"],
  ["Share Tech Mono", "Techy"],
  ["Major Mono Display", "Techy"],
  ["Space Mono", "Techy"],
  ["Syncopate", "Techy"],
  ["Teko", "Techy"],
  ["Rajdhani", "Techy"],
  ["Saira Stencil One", "Techy"],
  ["Black Ops One", "Techy"],
  ["Stalinist One", "Techy"],
  ["Iceland", "Techy"],
  ["Jura", "Techy"],
  ["Play", "Techy"],
  ["Oxanium", "Techy"],
  ["Tektur", "Techy"],
  ["Chakra Petch", "Techy"],
  ["Bruno Ace", "Techy"],
  ["Goldman", "Techy"],
  ["Handjet", "Techy"],
  ["DotGothic16", "Techy"],
  ["Sixtyfour", "Techy"],
  ["Workbench", "Techy"],
  ["Doto", "Techy"],
  ["Micro 5", "Techy"],
  ["Jersey 15", "Techy"],
  ["Geo", "Techy"],
  ["Nova Square", "Techy"],
  ["Unica One", "Techy"],
  ["Squada One", "Techy"],
  ["Fira Code", "Techy"],
  ["JetBrains Mono", "Techy"],
  ["Cutive Mono", "Techy"],
  // Vintage: old signs, typewriters, western, deco
  ["Special Elite", "Vintage"],
  ["Rye", "Vintage"],
  ["Ultra", "Vintage"],
  ["Abril Fatface", "Vintage"],
  ["Alfa Slab One", "Vintage"],
  ["Limelight", "Vintage"],
  ["Bowlby One", "Vintage"],
  ["Fontdiner Swanky", "Vintage"],
  ["Lobster Two", "Vintage"],
  ["Passion One", "Vintage"],
  ["Fugaz One", "Vintage"],
  ["Cinzel", "Vintage"],
  ["Cinzel Decorative", "Vintage"],
  ["Staatliches", "Vintage"],
  ["Bungee Inline", "Vintage"],
  ["Courier Prime", "Vintage"],
  ["Anonymous Pro", "Vintage"],
  ["Almendra", "Vintage"],
  ["IM Fell English", "Vintage"],
  ["UnifrakturMaguntia", "Vintage"],
  ["Pirata One", "Vintage"],
  ["Smokum", "Vintage"],
  ["Ewert", "Vintage"],
  ["Elsie", "Vintage"],
  ["Poller One", "Vintage"],
  ["Monofett", "Vintage"],
  ["Bigshot One", "Vintage"],
  ["Holtwood One SC", "Vintage"],
  ["Germania One", "Vintage"],
  ["Metamorphous", "Vintage"],
  ["MedievalSharp", "Vintage"],
  ["Uncial Antiqua", "Vintage"],
  ["Grenze Gotisch", "Vintage"],
  ["Rozha One", "Vintage"],
  // Elegant: scripts and display serifs for titles
  ["Great Vibes", "Elegant"],
  ["Parisienne", "Elegant"],
  ["Tangerine", "Elegant"],
  ["Pinyon Script", "Elegant"],
  ["Alex Brush", "Elegant"],
  ["Playfair Display", "Elegant"],
  ["Cormorant Garamond", "Elegant"],
  ["Bodoni Moda", "Elegant"],
  ["Prata", "Elegant"],
  ["Yeseva One", "Elegant"],
  ["DM Serif Display", "Elegant"],
  ["Fraunces", "Elegant"],
  ["Italiana", "Elegant"],
  ["Cormorant Upright", "Elegant"],
  ["Gilda Display", "Elegant"],
  ["Petit Formal Script", "Elegant"],
  ["Mrs Saint Delafield", "Elegant"],
  ["Herr Von Muellerhoff", "Elegant"],
  ["Monsieur La Doulaise", "Elegant"],
  ["Rouge Script", "Elegant"],
  ["Marcellus", "Elegant"],
  ["Forum", "Elegant"],
  ["Cardo", "Elegant"],
  ["Libre Baskerville", "Elegant"],
  ["Lora", "Elegant"],
  // Basic: a few workhorses
  ["Inter", "Basic"],
  ["Roboto", "Basic"],
  ["Open Sans", "Basic"],
  ["Lato", "Basic"],
  ["Montserrat", "Basic"],
  ["Poppins", "Basic"],
  ["Nunito", "Basic"],
  ["Quicksand", "Basic"],
  ["Comfortaa", "Basic"],
  ["Varela Round", "Basic"],
  ["Merriweather", "Basic"],
  ["EB Garamond", "Basic"],
  ["Roboto Slab", "Basic"],
  ["Source Code Pro", "Basic"],
  ["Roboto Mono", "Basic"],
  ["Oswald", "Basic"],
  ["Bebas Neue", "Basic"],
  ["Anton", "Basic"],
  ["Atkinson Hyperlegible", "Basic"],
  ["Lexend", "Basic"]
], EXT_OF = { woff2: "woff2", woff: "woff", ttf: "truetype", otf: "opentype" }, installed = /* @__PURE__ */ new Map(), fileFamily = (file) => file.replace(/\.(woff2|woff|ttf|otf)$/i, "");
async function loadInstalledFonts(app, folder) {
  let a3 = app.vault.adapter;
  installed.clear();
  try {
    if (!await a3.exists(folder)) return;
    let list = await a3.list(folder);
    for (let path of list.files) {
      let file = path.split("/").pop(), m3 = /\.(woff2|woff|ttf|otf)$/i.exec(file);
      if (!m3) continue;
      let family = fileFamily(file);
      installed.set(family, path), registerCloudFont(family, a3.getResourcePath(path), EXT_OF[m3[1].toLowerCase()], () => a3.readBinary(path));
    }
  } catch (e3) {
    console.warn("[Palette] Could not read the fonts folder", folder, e3);
  }
}
async function fontFileUrl(family) {
  let tryCss = async (spec) => {
    let url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family).replace(/%20/g, "+")}${spec}&display=swap`, res = await (0, import_obsidian2.requestUrl)({ url, headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36" }, throw: !1 });
    if (res.status !== 200 || !res.text) return null;
    let blocks = res.text.split("@font-face").slice(1), pick = blocks.find((b3) => /unicode-range:[^;]*U\+0000-00FF/i.test(b3)) || blocks.find((b3) => !/unicode-range/i.test(b3)) || blocks[0];
    if (!pick) return null;
    let m3 = /src:\s*url\(([^)]+)\)/i.exec(pick);
    return m3 ? m3[1].replace(/^["']|["']$/g, "") : null;
  };
  return await tryCss("") || await tryCss(":wght@700") || await tryCss(":ital@1");
}
var previews = /* @__PURE__ */ new Map(), previewStyle = null;
async function fetchFamily(family) {
  let had = previews.get(family);
  if (had) return had;
  let url = await fontFileUrl(family);
  if (!url) throw new Error(`Couldn't find "${family}" on Google Fonts`);
  let ext = (/\.(woff2|woff|ttf|otf)(\?|$)/i.exec(url) || [, "woff2"])[1].toLowerCase(), res = await (0, import_obsidian2.requestUrl)({ url, throw: !1 });
  if (res.status !== 200 || !res.arrayBuffer || res.arrayBuffer.byteLength < 1e3) throw new Error(`Download of "${family}" failed`);
  let rec = { buf: res.arrayBuffer, ext, face: null };
  return previews.set(family, rec), rec;
}
async function previewCloudFont(family) {
  if (installed.has(family)) return null;
  let rec = await fetchFamily(family);
  if (!rec.face) {
    rec.face = `Palette preview ${family}`;
    let blob = new Blob([rec.buf], { type: `font/${rec.ext === "ttf" ? "ttf" : rec.ext}` }), url = URL.createObjectURL(blob);
    previewStyle || (previewStyle = document.createElement("style"), previewStyle.id = "palette-font-previews", document.head.appendChild(previewStyle)), previewStyle.textContent += `@font-face{font-family:"${rec.face}";src:url("${url}") format("${EXT_OF[rec.ext]}");}
`;
  }
  return rec.face;
}
async function installCloudFont(app, folder, family) {
  if (installed.has(family)) return `cloud:${family}`;
  let a3 = app.vault.adapter, { buf, ext } = await fetchFamily(family), res = { arrayBuffer: buf };
  await a3.exists(folder) || await a3.mkdir(folder);
  let path = (0, import_obsidian2.normalizePath)(`${folder}/${family.replace(/[\\/:*?"<>|]/g, "")}.${ext}`);
  return await a3.writeBinary(path, res.arrayBuffer), installed.set(family, path), registerCloudFont(family, a3.getResourcePath(path), EXT_OF[ext], () => a3.readBinary(path)), `cloud:${family}`;
}
async function removeCloudFont(app, family) {
  let path = installed.get(family);
  if (path) {
    try {
      await app.vault.adapter.remove(path);
    } catch {
      new import_obsidian2.Notice(`Palette: couldn't delete ${path}`);
    }
    installed.delete(family), unregisterCloudFont(family);
  }
}

// src/layers.js
var DEFAULT_LAYER = "L1", IS_MOBILE3 = typeof document < "u" && !!(document.body && document.body.classList && document.body.classList.contains("is-mobile"));
var uid2 = () => "L" + Math.random().toString(36).slice(2, 9);
function layersOf(doc) {
  return (!Array.isArray(doc.layers) || !doc.layers.length) && (doc.layers = [{ id: DEFAULT_LAYER, name: "Layer 1", visible: !0 }]), doc.layers;
}
var layerOfItem = (it) => it.layer || DEFAULT_LAYER;
function orderByLayer(items, layers) {
  let idx = new Map(layers.map((l3, i3) => [l3.id, i3])), rank = (it) => idx.has(layerOfItem(it)) ? idx.get(layerOfItem(it)) : 0, sorted = !0;
  for (let i3 = 1; i3 < items.length && sorted; i3++) rank(items[i3 - 1]) > rank(items[i3]) && (sorted = !1);
  return sorted ? items : items.map((it, i3) => [rank(it), i3, it]).sort((a3, b3) => a3[0] - b3[0] || a3[1] - b3[1]).map((x3) => x3[2]);
}
var chunkMs = () => typeof document < "u" && document.hidden ? 400 : 12;
async function renderRegion(layer, items, box, k3, decode, keepGoing = () => !0) {
  let c3 = document.createElement("canvas");
  c3.width = Math.max(1, Math.round(box.width * k3)), c3.height = Math.max(1, Math.round(box.height * k3));
  let ctx = c3.getContext("2d");
  if (!ctx) return null;
  let env = layer.renderOpts();
  ctx.imageSmoothingEnabled = !0, ctx.imageSmoothingQuality = "high";
  let last = performance.now();
  for (let it of items) {
    let el = layer.idEl.get(it.id), im = isRaster(it) && el && el.querySelector ? el.querySelector("image") : null, href = im && (im.getAttribute("href") || im.getAttribute("xlink:href")), isFx = it.type === "group" && it.fx && it.fx.length, sharpEnough = !!(el && Number.isFinite(el._k) && el._k >= k3 * 0.85), cached2 = isRaster(it) && !(href && sharpEnough) && !(el && el.getAttribute && el.getAttribute("transform")) ? snapshotBitmap(it, env) : null;
    try {
      if (ctx.save(), cached2 && (cached2.k >= k3 * 0.85 || isFx)) {
        let bmp = await decode(cached2.url);
        bmp && (ctx.globalAlpha = itemOpacity(it), ctx.setTransform(k3, 0, 0, k3, -box.x * k3, -box.y * k3), ctx.drawImage(bmp, cached2.x, cached2.y, cached2.w, cached2.h));
      } else if (isFx && !sharpEnough) {
        let r4 = await renderGroupAsync(it, k3, { ...env, snapshots: null, forceK: !0 });
        r4 && (ctx.globalAlpha = itemOpacity(it), ctx.setTransform(k3, 0, 0, k3, -box.x * k3, -box.y * k3), ctx.drawImage(r4.canvas, r4.x, r4.y, r4.w, r4.h));
      } else if (href && im.getAttribute("width") && !el.getAttribute("transform") && sharpEnough) {
        let bmp = await decode(href);
        bmp && (ctx.globalAlpha = itemOpacity(it), ctx.setTransform(k3, 0, 0, k3, -box.x * k3, -box.y * k3), ctx.drawImage(bmp, +im.getAttribute("x"), +im.getAttribute("y"), +im.getAttribute("width"), +im.getAttribute("height")));
      } else
        ctx.setTransform(1, 0, 0, 1, 0, 0), drawItem(ctx, it, k3, box.x, box.y, env);
    } catch {
    }
    if (ctx.restore(), performance.now() - last > chunkMs() && (await new Promise((r4) => setTimeout(r4, 0)), last = performance.now()), !keepGoing())
      return c3.width = c3.height = 0, null;
  }
  return c3;
}
var decodeUrl = (url) => new Promise((res) => {
  let im = new Image(), done = () => res(im.naturalWidth ? im : null);
  im.onload = () => im.decode ? im.decode().then(done, done) : done(), im.onerror = () => res(null), im.src = url, setTimeout(() => res(null), 5e3);
});

// src/pyramid.js
var CELL = 256, MARGIN = 6, bleed = (k3) => 1.5 / k3, MAX_LEVELS = 6, K_MAX = () => Math.min(4, (window.devicePixelRatio || 1) * 1.5), IS_MOBILE4 = typeof document < "u" && !!(document.body && document.body.classList && document.body.classList.contains("is-mobile"));
var key = (r4, c3) => `${r4},${c3}`, touch = (a3, b3) => a3 && b3 && a3.x < b3.x + b3.width && a3.x + a3.width > b3.x && a3.y < b3.y + b3.height && a3.y + a3.height > b3.y;
function cellK(layer, items) {
  let featureOf = (it) => {
    let b3 = layer.bboxOf(it) || itemBox(it), f3 = b3 ? Math.min(b3.width, b3.height) : 1 / 0;
    return it.type === "stroke" && Number.isFinite(it.size) && (f3 = Math.min(f3, it.size * 40)), it.type === "text" && Number.isFinite(it.fontSize) && (f3 = Math.min(f3, it.fontSize * 2)), Math.max(4, f3);
  }, smallest = items.reduce((m3, it) => Math.min(m3, featureOf(it)), 1 / 0);
  return Math.round(Math.max(1, Math.min(K_MAX(), 3200 / smallest)) * 100) / 100;
}
var LayerPyramid = class {
  constructor(layer, lay) {
    this.layer = layer, this.lay = lay, this.busy = null, this.queued = /* @__PURE__ */ new Set();
  }
  get rec() {
    return this._rec || this.lay.pyramid;
  }
  get store() {
    return this.layer.doc.snapshots;
  }
  /** Items of this layer that go into tiles (pictures, boards and connectors stay live). */
  items() {
    return this.layer.items.filter((it) => (it.layer || "L1") === this.lay.id && it.type !== "image" && it.type !== "connector" && it.type !== "board" && !it.ref);
  }
  cellsOf(box) {
    let out = [];
    for (let r4 = Math.floor((box.y - MARGIN) / CELL); r4 <= Math.floor((box.y + box.height + MARGIN) / CELL); r4++)
      for (let c3 = Math.floor((box.x - MARGIN) / CELL); c3 <= Math.floor((box.x + box.width + MARGIN) / CELL); c3++) out.push(key(r4, c3));
    return out;
  }
  /** A cell's box with its bleed (right and bottom only) at scale k. */
  levelBox(L3, r4, c3, k3 = this.rec.levels[L3].k) {
    let u3 = CELL * 2 ** L3, m3 = bleed(k3);
    return { x: c3 * u3, y: r4 * u3, width: u3 + m3, height: u3 + m3 };
  }
  index(L3) {
    let level = this.rec.levels[L3];
    return level._index || (level._index = new Map(level.pieces.map((p3) => [key(p3.r, p3.c), p3]))), level._index;
  }
  /** Build the whole layer from scratch (first time, or after "rebuild"). */
  async rebuildAll(onProgress) {
    let all = this.items(), kMax = K_MAX(), nLevels = MAX_LEVELS, rec = { version: 1, cell: CELL, margin: MARGIN, levels: [] };
    for (let L3 = 0; L3 < nLevels; L3++) rec.levels.push({ k: Math.round(kMax / 2 ** L3 * 1e3) / 1e3, cell: CELL * 2 ** L3, pieces: [] });
    let cells = /* @__PURE__ */ new Set();
    for (let it of all) {
      let b3 = this.layer.bboxOf(it) || itemBox(it);
      if (b3) for (let k3 of this.cellsOf(b3)) cells.add(k3);
    }
    let old = this.lay.pyramid;
    this.building = rec, this.lay.pyramidBuilding = rec;
    let done = 0;
    try {
      await this.refreshCells([...cells], (n3, _t, stats) => {
        done = n3, onProgress && onProgress(done, cells.size, stats);
      }, rec);
    } finally {
      this.building = null, delete this.lay.pyramidBuilding;
    }
    return this.lay.pyramid = rec, old && this.dropRecord(old), rec;
  }
  dropRecord(rec) {
    if (!rec || !rec.levels) return;
    let keep = new Set((this.rec && this.rec.levels ? this.rec.levels : []).flatMap((l3) => l3.pieces.map((p3) => p3.snap)));
    for (let l3 of rec.levels) for (let p3 of l3.pieces) keep.has(p3.snap) || this.dropPiece(p3);
  }
  dropPiece(p3) {
    let s3 = this.store.get(p3.snap, "");
    s3 && (this.store.map.delete(`${p3.snap}|`), s3.file && this.store.removeFile(s3.file), this.store.dirty = !0, this.store.scheduleSave());
  }
  /** Ask for cells to be refreshed; they're done in one pass, coalesced, when the pass runs. */
  request(cellKeys) {
    for (let k3 of cellKeys) this.queued.add(k3);
  }
  /** Run a refresh of everything queued. Resolves to the level-0 cell keys that were refreshed. */
  async flush(onDone) {
    if (this.busy) return this.busy;
    let cells = [...this.queued];
    return this.queued.clear(), cells.length ? (this.busy = this.refreshCells(cells).then((r4) => (this.busy = null, onDone && onDone(cells), cells), (e3) => (this.busy = null, console.warn("[Palette] pyramid refresh", e3), [])), this.busy) : [];
  }
  async refreshCells(cells, onProgress, rec = this.rec) {
    if (!rec) return;
    this._rec = rec;
    let big = cells.length > 8;
    big && (this.batch = !0, this.store.batch = !0);
    try {
      await this.refreshCellsInner(cells, (n3, t3, st2) => {
        big && n3 % 80 === 0 && (this.store.batch = !1, this.store.dirty = !0, this.store.flush(), this.store.batch = !0), onProgress && onProgress(n3, t3, st2);
      }, rec);
    } finally {
      big && (this.batch = !1, this.store.batch = !1, this.store.dirty = !0, await this.store.flush(), this.layer.doc.dirty = !0, this.layer.doc.scheduleSave());
    }
  }
  async refreshCellsInner(cells, onProgress, rec) {
    cells = [...cells].map((k3) => k3.split(",").map(Number)).sort((a3, b3) => a3[0] - b3[0] || a3[1] - b3[1]).map(([r4, c3]) => key(r4, c3));
    let all = this.items(), decoded = /* @__PURE__ */ new Map(), decode = (url) => {
      let q2 = decoded.get(url);
      return q2 || (q2 = decodeUrl(url), decoded.set(url, q2), decoded.size > 24 && decoded.delete(decoded.keys().next().value)), q2;
    }, held = /* @__PURE__ */ new Map(), nLevels = this.rec.levels.length, pending = [];
    for (let L3 = 0; L3 < nLevels; L3++) pending.push(/* @__PURE__ */ new Map());
    let keysAt = cells;
    for (let L3 = 1; L3 < nLevels; L3++) {
      let next = /* @__PURE__ */ new Set();
      for (let k3 of keysAt) {
        let [r4, c3] = k3.split(",").map(Number), pk = key(r4 >> 1, c3 >> 1);
        pending[L3].set(pk, (pending[L3].get(pk) || 0) + 1), next.add(pk);
      }
      keysAt = [...next];
    }
    let finished = async (L3, r4, c3) => {
      if (L3 + 1 >= nLevels) {
        let h3 = held.get(`${L3}:${key(r4, c3)}`);
        h3 && h3.canvas && (h3.canvas.width = h3.canvas.height = 0), held.delete(`${L3}:${key(r4, c3)}`);
        return;
      }
      let pk = key(r4 >> 1, c3 >> 1), left = (pending[L3 + 1].get(pk) || 1) - 1;
      if (pending[L3 + 1].set(pk, left), left > 0) return;
      let [pr, pc] = pk.split(",").map(Number);
      await this.compose(L3 + 1, pr, pc, held, decode), await finished(L3 + 1, pr, pc);
    }, n3 = 0, T3 = this.timing = { render: 0, save: 0, compose: 0, cells: 0 }, tick = () => typeof performance < "u" ? performance.now() : Date.now(), origSave = this.save.bind(this), origCompose = this.compose.bind(this);
    this.save = async (...a3) => {
      let t3 = tick();
      await origSave(...a3), T3.save += tick() - t3;
    }, this.compose = async (...a3) => {
      let t3 = tick();
      await origCompose(...a3), T3.compose += tick() - t3;
    };
    for (let k3 of cells) {
      let [r4, c3] = k3.split(",").map(Number), cellBox = this.levelBox(0, r4, c3, 0.1), inside = all.filter((it) => {
        let b3 = this.layer.bboxOf(it) || itemBox(it);
        return b3 && touch(b3, cellBox);
      }), canvas = null, box = cellBox;
      if (inside.length) {
        let kk = cellK(this.layer, inside);
        box = this.levelBox(0, r4, c3, kk);
        let drawn = all.filter((it) => {
          let b3 = this.layer.bboxOf(it) || itemBox(it);
          return b3 && touch(b3, box);
        }), t3 = tick();
        canvas = await renderRegion(this.layer, drawn, box, kk, decode), T3.render += tick() - t3;
        let fine = this.rec.levels.length < 2 || kk > this.rec.levels[1].k * 1.05;
        canvas && fine ? await this.save(0, r4, c3, canvas, box, kk) : this.remove(0, r4, c3);
      } else this.remove(0, r4, c3);
      this.hold(held, 0, r4, c3, canvas, box, canvas ? cellK(this.layer, inside) : 1), await finished(0, r4, c3), T3.cells = ++n3, onProgress && onProgress(n3, void 0, T3);
    }
    for (let h3 of held.values()) h3 && h3.canvas && (h3.canvas.width = h3.canvas.height = 0);
    held.clear(), this.save = origSave, this.compose = origCompose, this._rec = null;
  }
  hold(held, L3, r4, c3, canvas, box, k3) {
    if (!canvas) {
      held.set(`${L3}:${key(r4, c3)}`, { canvas: null, box, k: k3 });
      return;
    }
    let half = document.createElement("canvas");
    half.width = Math.max(1, Math.ceil(canvas.width / 2)), half.height = Math.max(1, Math.ceil(canvas.height / 2));
    let hctx = half.getContext("2d");
    hctx.imageSmoothingQuality = "high", hctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width / 2, canvas.height / 2), canvas.width = canvas.height = 0, held.set(`${L3}:${key(r4, c3)}`, { canvas: half, box, k: k3 / 2 });
  }
  /** A parent from its four children: those rendered this pass from memory, the rest from disk. */
  async compose(L3, pr, pc, held, decode) {
    let pk = this.rec.levels[L3].k, pbox = this.levelBox(L3, pr, pc), c22 = document.createElement("canvas");
    c22.width = Math.max(1, Math.round(pbox.width * pk)), c22.height = Math.max(1, Math.round(pbox.height * pk));
    let ctx = c22.getContext("2d");
    ctx.imageSmoothingQuality = "high";
    let any = !1;
    for (let dr = 0; dr < 2; dr++) for (let dc = 0; dc < 2; dc++) {
      let kr = pr * 2 + dr, kc = pc * 2 + dc, hk = `${L3 - 1}:${key(kr, kc)}`, src = null, b3 = this.levelBox(L3 - 1, kr, kc), sk = 1;
      if (held.has(hk)) {
        let h3 = held.get(hk);
        src = h3.canvas, sk = h3.k;
      } else {
        let piece = this.index(L3 - 1).get(key(kr, kc));
        if (piece) {
          let s3 = this.store.get(piece.snap, "") || await this.store.adopt(piece.snap, "", { k: piece.k, w: piece.w, h: piece.h });
          if (s3 && s3.url) src = await decode(s3.url);
          else if (s3 && s3.read)
            try {
              let buf = await s3.read(), u3 = URL.createObjectURL(new Blob([buf]));
              src = await decodeUrl(u3), URL.revokeObjectURL(u3);
            } catch {
              src = null;
            }
          b3 = { x: piece.x, y: piece.y, width: piece.w, height: piece.h }, sk = piece.k;
        }
      }
      if (!src) continue;
      any = !0, held.has(hk) && (held.get(hk)._used = !0);
      let cu = CELL * 2 ** (L3 - 1), right = dc === 1, bottom = dr === 1, sx = sk, sy = sk, ix1 = right ? b3.width : Math.min(b3.width, cu), iy1 = bottom ? b3.height : Math.min(b3.height, cu), dx = b3.x - pbox.x, dy = b3.y - pbox.y;
      ctx.drawImage(src, 0, 0, ix1 * sx, iy1 * sy, dx * pk, dy * pk, ix1 * pk, iy1 * pk);
    }
    let strip = bleed(pk), cu2 = CELL * 2 ** (L3 - 1), sliver = async (kr, kc, sx0, sy0, sw, sh, dx, dy) => {
      let hk = `${L3 - 1}:${key(kr, kc)}`, src = null, b3 = this.levelBox(L3 - 1, kr, kc), sk = 1;
      if (held.has(hk))
        src = held.get(hk).canvas, sk = held.get(hk).k;
      else {
        let piece = this.index(L3 - 1).get(key(kr, kc));
        if (piece) {
          let sp = this.store.get(piece.snap, "") || await this.store.adopt(piece.snap, "", { k: piece.k, w: piece.w, h: piece.h });
          if (sp && sp.url) src = await decode(sp.url);
          else if (sp && sp.read)
            try {
              let buf = await sp.read(), u3 = URL.createObjectURL(new Blob([buf]));
              src = await decodeUrl(u3), URL.revokeObjectURL(u3);
            } catch {
              src = null;
            }
          b3 = { x: piece.x, y: piece.y, width: piece.w, height: piece.h }, sk = piece.k;
        }
      }
      if (!src) return;
      let ssx = sk, ssy = sk;
      ctx.drawImage(src, sx0 * ssx, sy0 * ssy, sw * ssx, sh * ssy, dx * pk, dy * pk, sw * pk, sh * pk);
    };
    for (let d3 = 0; d3 < 2; d3++)
      await sliver(pr * 2 + d3, pc * 2 + 2, 0, 0, strip, cu2, 2 * cu2, d3 * cu2), await sliver(pr * 2 + 2, pc * 2 + d3, 0, 0, cu2, strip, d3 * cu2, 2 * cu2);
    await sliver(pr * 2 + 2, pc * 2 + 2, 0, 0, strip, strip, 2 * cu2, 2 * cu2), any ? await this.save(L3, pr, pc, c22, pbox, pk) : this.remove(L3, pr, pc);
    for (let dr = 0; dr < 2; dr++) for (let dc = 0; dc < 2; dc++) {
      let hk = `${L3 - 1}:${key(pr * 2 + dr, pc * 2 + dc)}`, h3 = held.get(hk);
      h3 && (h3.canvas && (h3.canvas.width = h3.canvas.height = 0), held.delete(hk));
    }
    this.hold(held, L3, pr, pc, any ? c22 : null, pbox, pk);
  }
  async save(L3, r4, c3, canvas, box, kk) {
    let type = "image/webp", q2 = L3 >= 2 ? 1 : 0.97, blob = await new Promise((res) => {
      try {
        canvas.toBlob(res, type, q2);
      } catch {
        res(null);
      }
    });
    if (!blob || !blob.size) return;
    let snap = `pyr:${this.lay.id}:${L3}:${r4}:${c3}:${Date.now().toString(36)}`;
    await this.store.set(snap, "", { sig: "pyr", key: "", k: kk, dx: 0, dy: 0, w: box.width, h: box.height, blob });
    let piece = { x: box.x, y: box.y, w: box.width, h: box.height, k: kk, m: 0, r: r4, c: c3, L: L3, snap }, level = this.rec.levels[L3], idx = this.index(L3), old = idx.get(key(r4, c3));
    old && (level.pieces.splice(level.pieces.indexOf(old), 1), this.dropPiece(old)), level.pieces.push(piece), idx.set(key(r4, c3), piece), this.view && (this.batch ? this._redrawTimer || (this._redrawTimer = setTimeout(() => {
      this._redrawTimer = 0, this.view.replaced(L3, piece, old);
    }, 500)) : this.view.replaced(L3, piece, old)), this.batch || (this.layer.doc.dirty = !0, this.layer.doc.scheduleSave());
  }
  remove(L3, r4, c3) {
    let level = this.rec.levels[L3], idx = this.index(L3), old = idx.get(key(r4, c3));
    old && (level.pieces.splice(level.pieces.indexOf(old), 1), idx.delete(key(r4, c3)), this.dropPiece(old), this.view && this.view.replaced(L3, null, old));
  }
};

// src/tilecanvas.js
var TileCanvas = class {
  constructor(layer) {
    this.layer = layer, this.el = document.createElement("canvas"), this.el.className = "ink-tile-canvas", this.ctx = this.el.getContext("2d"), this.images = /* @__PURE__ */ new Map(), this.stats = { drawn: 0, loaded: 0, failed: 0 }, this.raf = 0, this.level = -1;
  }
  mount(parent, before) {
    this.el.parentNode !== parent && parent.insertBefore(this.el, before || null);
  }
  unmount() {
    this.el.remove(), this.images.clear();
  }
  /**
   * Resolves once the pieces covering these level-0 cells (at every level) have loaded and
   * been drawn, or after a short wait: the live ink they replace stays until then.
   */
  async whenDrawn(pyr, cells) {
    let rec = pyr.rec;
    if (!rec || this.hidden) return;
    let pieces = [];
    for (let k3 of cells) {
      let [r4, c3] = k3.split(",").map(Number);
      for (let L3 = 0; L3 < rec.levels.length; L3++) {
        let p3 = pyr.index(L3).get(`${r4 >> L3},${c3 >> L3}`);
        p3 && pieces.push(p3);
      }
    }
    let t0 = Date.now();
    for (let p3 of pieces) this.image(p3, pyr);
    for (; Date.now() - t0 < 2500 && !pieces.every((p3) => {
      let im = this.images.get(p3.snap);
      return im && (im.ready || im.failed);
    }); )
      await new Promise((r4) => setTimeout(r4, 40));
    this.draw(), await new Promise((r4) => requestAnimationFrame(() => requestAnimationFrame(r4)));
  }
  /** Something changed (a tile re-rendered, an image loaded): draw again on the next frame. */
  invalidate() {
    this.raf || (this.raf = requestAnimationFrame(() => {
      this.raf = 0, this.draw();
    }));
  }
  image(piece, pyr) {
    let rec = this.images.get(piece.snap);
    if (rec)
      return rec.at = Date.now(), rec;
    let lost = () => {
      if (!pyr || !piece) return;
      let u3 = pyr.rec.levels[piece.L] ? pyr.rec.levels[piece.L].cell : 256;
      pyr.request(pyr.cellsOf({ x: piece.c * u3, y: piece.r * u3, width: u3, height: u3 })), this.layer.scheduleFlush && this.layer.scheduleFlush();
    }, store = this.layer.doc.snapshots, s3 = store.get(piece.snap, "");
    if (rec = { img: null, ready: !1, failed: !1, at: Date.now() }, this.images.set(piece.snap, rec), !s3)
      return store.adopt(piece.snap, "", { k: piece.k, w: piece.w, h: piece.h }).then((e3) => {
        e3 ? (this.images.delete(piece.snap), this.invalidate()) : (rec.failed = !0, this.stats.failed++, lost());
      }), rec;
    let img = new Image();
    img.decoding = "async", img.onload = () => {
      rec.ready = !0, this.stats.loaded++, this.invalidate();
    }, img.onerror = () => {
      rec.failed = !0, this.stats.failed++, lost();
    };
    let start = (src) => {
      img.src = src, setTimeout(() => {
        rec.ready || rec.failed || (rec.retried ? (rec.failed = !0, this.stats.failed++, console.warn("[Palette] A tile never loaded", piece.snap, src)) : (rec.retried = !0, img.src = src + (src.includes("?") ? "&" : "?") + "r=" + Date.now()));
      }, 2e4);
    };
    s3.url ? start(s3.url) : s3.read ? s3.read().then((buf) => {
      rec.url = URL.createObjectURL(new Blob([buf])), start(rec.url);
    }).catch(() => {
      rec.failed = !0;
    }) : rec.failed = !0, rec.img = img;
    let cap = Math.max(160, 70 * this.layer.layers().length);
    if (this.images.size > cap) {
      let oldest = [...this.images.entries()].sort((a3, b3) => a3[1].at - b3[1].at).slice(0, 20);
      for (let [k3, r4] of oldest) {
        if (r4.url) try {
          URL.revokeObjectURL(r4.url);
        } catch {
        }
        this.images.delete(k3);
      }
    }
    return rec;
  }
  levelFor(pyr, scale) {
    let need = scale * (window.devicePixelRatio || 1), levels = pyr.rec.levels, L3 = 0;
    for (let i3 = 0; i3 < levels.length; i3++) levels[i3].k >= need * 0.75 && (L3 = i3);
    return L3;
  }
  /** Called on every view change: position the canvas and draw. */
  update(v3, m3) {
    this.view = v3, this.m = m3;
    let host = this.layer.canvasEl.parentElement.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    for (; host.width * dpr * host.height * dpr > 15e6 && dpr > 1; ) dpr = Math.max(1, dpr - 0.5);
    this.dpr = dpr;
    let W2 = Math.max(1, Math.round(host.width * dpr)), H2 = Math.max(1, Math.round(host.height * dpr));
    (this.el.width !== W2 || this.el.height !== H2) && (this.el.width = W2, this.el.height = H2), this.el.style.width = `${host.width}px`, this.el.style.height = `${host.height}px`, this.el.style.transform = `translate(${v3.x}px, ${v3.y}px) scale(${1 / m3.scale})`, this.draw();
  }
  draw() {
    let v3 = this.view, m3 = this.m;
    if (!v3 || !m3) return;
    let L3 = this.layer, ctx = this.ctx, dpr = this.dpr || window.devicePixelRatio || 1, s3 = m3.scale * dpr;
    if (ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, this.el.width, this.el.height), ctx.imageSmoothingEnabled = !0, ctx.imageSmoothingQuality = "medium", this.hidden) return;
    this.stats.drawn = 0;
    let near = { x: v3.x - v3.width * 0.1, y: v3.y - v3.height * 0.1, width: v3.width * 1.2, height: v3.height * 1.2 };
    this.off || (this.off = document.createElement("canvas"), this.offCtx = this.off.getContext("2d"));
    for (let lay of L3.layers()) {
      if (!lay.pyramid || lay.visible === !1) continue;
      let pyr = L3.pyramidFor(lay), rec = pyr.rec;
      if (!rec || !rec.levels.length) continue;
      let lv = this.levelFor(pyr, m3.scale), level = rec.levels[lv], u3 = level.cell, kL = level.k, index = pyr.index(lv);
      for (let A3 of [lv - 1, lv + 1])
        if (!(A3 < 0 || A3 >= rec.levels.length))
          for (let p3 of rec.levels[A3].pieces) p3.x < near.x + near.width && p3.x + p3.w > near.x && p3.y < near.y + near.height && p3.y + p3.h > near.y && this.image(p3, pyr);
      let ux0 = Math.floor(v3.x * kL) / kL, uy0 = Math.floor(v3.y * kL) / kL, W2 = Math.min(8192, Math.ceil(v3.width * kL) + 2), H2 = Math.min(8192, Math.ceil(v3.height * kL) + 2);
      if (W2 * H2 > 15e6) {
        let f3 = Math.sqrt(15e6 / (W2 * H2));
        W2 = Math.floor(W2 * f3), H2 = Math.floor(H2 * f3);
      }
      (this.off.width !== W2 || this.off.height !== H2) && (this.off.width = W2, this.off.height = H2);
      let o3 = this.offCtx;
      o3.setTransform(1, 0, 0, 1, 0, 0), o3.clearRect(0, 0, W2, H2), o3.imageSmoothingEnabled = !0, o3.imageSmoothingQuality = "medium";
      let px = (x3) => Math.round((x3 - ux0) * kL), py = (y3) => Math.round((y3 - uy0) * kL), any = !1;
      for (let r4 = Math.floor(uy0 / u3); r4 <= Math.floor((uy0 + H2 / kL) / u3); r4++)
        for (let c3 = Math.floor(ux0 / u3); c3 <= Math.floor((ux0 + W2 / kL) / u3); c3++) {
          let x0 = px(c3 * u3), y0 = py(r4 * u3), x1 = px((c3 + 1) * u3), y1 = py((r4 + 1) * u3);
          if (x1 <= 0 || y1 <= 0 || x0 >= W2 || y0 >= H2 || this.cellCovered && this.cellCovered(lay, { x: c3 * u3, y: r4 * u3, width: u3, height: u3 })) continue;
          let piece = index.get(`${r4},${c3}`), drew = !1;
          if (piece) {
            let im = this.image(piece, pyr);
            im.ready && (this.blit(o3, im.img, piece, u3, x0, y0, x1, y1), drew = !0, any = !0);
          }
          if (!drew)
            for (let A3 = lv + 1; A3 < rec.levels.length; A3++) {
              let anc = pyr.index(A3).get(`${r4 >> A3 - lv},${c3 >> A3 - lv}`);
              if (!anc) continue;
              let im = this.image(anc, pyr);
              if (!im.ready) continue;
              let au = rec.levels[A3].cell, ax = anc.c * au, ay = anc.r * au;
              o3.save(), o3.beginPath(), o3.rect(x0, y0, x1 - x0, y1 - y0), o3.clip(), this.blit(o3, im.img, anc, au, px(ax), py(ay), px(ax + au), py(ay + au)), o3.restore(), any = !0;
              break;
            }
        }
      any && ctx.drawImage(this.off, 0, 0, W2, H2, (ux0 - v3.x) * s3, (uy0 - v3.y) * s3, W2 / kL * s3, H2 / kL * s3);
    }
    this.recheck && (this.recheck = !1, clearTimeout(this.recheckTimer), this.recheckTimer = setTimeout(() => this.invalidate(), 400));
  }
  /** Draw one piece's cell (its bleed strip excluded) into a pixel-snapped rectangle. */
  blit(ctx, img, piece, cell, x0, y0, x1, y1) {
    let kx = piece.k, ky = piece.k, m3 = Number.isFinite(piece.m) ? piece.m : 0, sw = Math.min(img.naturalWidth - m3 * kx, cell * kx), sh = Math.min(img.naturalHeight - m3 * ky, cell * ky);
    try {
      ctx.drawImage(img, m3 * kx, m3 * ky, sw, sh, x0, y0, x1 - x0, y1 - y0), this.stats.drawn++;
    } catch {
    }
  }
};

// src/layer.js
var SHAPES = ["rect", "ellipse", "line", "arrow", "connector"], SHAPE_META = {
  rect: ["square", "Rectangle"],
  ellipse: ["circle", "Ellipse"],
  line: ["minus", "Line"],
  arrow: ["move-up-right", "Arrow"],
  connector: ["spline", "Connector"]
}, SHAPE_SIZES = { presets: [1, 2, 4, 7], range: [0.5, 24] }, TEXT_SIZES = { presets: [16, 24, 36, 56], range: [8, 240] }, ERASER_SIZES = { presets: [6, 16, 32, 64], range: [2, 300] }, FX_SIZES = { presets: [12, 24, 48, 90], range: [4, 300] }, FILL_SIZES = { presets: [10, 16, 24, 40], range: [4, 160] }, PIXEL_SIZES = { presets: [1, 2, 3, 4], range: [1, 16] }, FX_META = {
  smudge: ["ink-smudge", "Smudge"],
  blend: ["ink-blend", "Blend"],
  blur: ["ink-blur", "Blur"],
  burn: ["ink-burn", "Burn"],
  dodge: ["ink-dodge", "Dodge"]
}, DPR = () => Math.min(2, window.devicePixelRatio || 1), fmtSize = (v3) => v3 < 10 ? v3.toFixed(1) : String(Math.round(v3)), roundSize = (v3) => v3 < 10 ? Math.round(v3 * 10) / 10 : Math.round(v3);
function fxTouchable(it) {
  return it.type !== "image" && it.type !== "board" && it.type !== "connector";
}
var InkLayer = class {
  constructor(plugin, view) {
    /** Check sharpness regularly while panning/zooming (not only once it stops). */
    __publicField(this, "scheduleResCheck", () => {
      let wasStill = Date.now() - (this.lastMotion || 0) > 400;
      this.lastMotion = Date.now(), this.svg && this.svg.isConnected && !this.cullRaf && (this.cullRaf = requestAnimationFrame(() => {
        this.cullRaf = 0;
        try {
          let m3 = this.metrics(), v3 = this.viewportBox();
          this.vpCache = { t: Date.now(), box: v3 }, this.updatePyramids(v3, m3.scale, m3);
        } catch {
        }
      })), !this.resTimer && (this.resTimer = setTimeout(() => {
        this.resTimer = 0, this.checkResolution(), this.settleTimer || (this.settleTimer = setTimeout(() => {
          this.settleTimer = 0, this.checkResolution();
        }, 320));
      }, 220));
    });
    __publicField(this, "onPointerDown", (e3) => {
      if (!this.active || this.inUI(e3.target)) return;
      if (this.gesture) {
        e3.pointerType === "touch" && (this.gesture.pointerType === "touch" ? this.cancelGesture() : (e3.preventDefault(), e3.stopPropagation()));
        return;
      }
      if (!this.wantsPointer(e3)) return;
      e3.preventDefault(), e3.stopPropagation(), this.textEdit && this.closeTextEditor(!0);
      let hadPop = !!this.pop && this.pop.hasClass("is-open");
      this.closePop(), this.slotsOpen && this.toggleSlots(!1), !hadPop && this.beginGesture(e3);
    });
    __publicField(this, "onTouchBlock", (e3) => {
      if (!this.active || this.inUI(e3.target)) return;
      if (this.multiTouch = e3.touches.length > 1, this.multiTouch && !Array.from(e3.touches).some((t3) => t3.touchType === "stylus")) {
        if (this.gesture && this.gesture.pointerType === "touch" && this.cancelGesture(), !this.fingerMode) return;
        e3.stopPropagation(), e3.cancelable && e3.preventDefault();
        return;
      }
      if (this.tool === "hand" && !this.gesture) return;
      let stylus = Array.from(e3.touches).some((t3) => t3.touchType === "stylus");
      (this.gesture || stylus || this.fingerMode) && (e3.stopPropagation(), e3.cancelable && e3.preventDefault());
    });
    __publicField(this, "onClickBlock", (e3) => {
      this.active && this.tool !== "hand" && !this.inUI(e3.target) && (e3.stopPropagation(), e3.preventDefault());
    });
    __publicField(this, "onMove", (e3) => {
      let g3 = this.gesture;
      if (!g3 || e3.pointerId !== g3.pointerId) return;
      e3.preventDefault(), e3.stopPropagation();
      let list = typeof e3.getCoalescedEvents == "function" && e3.getCoalescedEvents() || [], evs = list.length ? list : [e3], p3 = this.toCanvas(e3, g3.m);
      switch (g3.kind) {
        case "pan": {
          let dx = e3.clientX - g3.screen.x, dy = e3.clientY - g3.screen.y;
          g3.screen = { x: e3.clientX, y: e3.clientY }, (dx || dy) && this.panBy(dx, dy, e3);
          return;
        }
        case "stroke":
          if (g3.quick) {
            g3.pen = p3, this.adjustQuick(g3, p3);
            break;
          }
          this.addPoints(g3, evs), this.armQuickShape(g3, e3);
          break;
        case "erase":
          for (let ev of evs) {
            let q2 = this.toCanvas(ev, g3.m);
            this.eraseAlong(g3, g3.last, q2), g3.last = q2;
          }
          return;
        case "fx":
          this.addFxPoints(g3, evs), g3.runner && this.pumpLiveFx(g3);
          return;
        case "scale": {
          let h3 = g3.handle, box = h3.box, ax = h3.hx === 1 ? box.x : box.x + box.width, ay = h3.hy === 1 ? box.y : box.y + box.height, sx = h3.hx && box.width ? (p3.x - ax) / (h3.hx * box.width) : 1, sy = h3.hy && box.height ? (p3.y - ay) / (h3.hy * box.height) : 1;
          if (!h3.free && h3.hx && h3.hy) {
            let u3 = Math.max(Math.abs(sx), Math.abs(sy));
            sx = Math.sign(sx || 1) * u3, sy = Math.sign(sy || 1) * u3;
          }
          let clampS = (v3) => Math.abs(v3) < 0.02 ? 0.02 * Math.sign(v3 || 1) : v3;
          g3.scale = { ax: h3.hx ? ax : box.x, ay: h3.hy ? ay : box.y, sx: clampS(sx), sy: clampS(sy) };
          break;
        }
        case "end": {
          let sh = g3.shape;
          g3.item = g3.handle.which === 1 ? { ...sh, x1: r22(p3.x), y1: r22(p3.y) } : { ...sh, x2: r22(p3.x), y2: r22(p3.y) };
          break;
        }
        case "marquee":
          g3.points = [g3.points[0], [p3.x, p3.y]];
          break;
        case "rotate": {
          let deg = (Math.atan2(p3.y - g3.cy, p3.x - g3.cx) - g3.a0) * 180 / Math.PI, snap = Math.round(deg / 15) * 15;
          Math.abs(deg - snap) < 3 && (deg = snap), g3.deg = deg;
          break;
        }
        case "cnode": {
          let c3 = g3.conn;
          if (g3.handle.kind === "cway") {
            let ways = [...c3.waypoints || []];
            ways[g3.handle.index] = [r22(p3.x), r22(p3.y)], g3.conn = { ...c3, waypoints: ways };
          } else {
            let end = this.anchorAt(p3, { id: c3.id });
            g3.conn = { ...c3, [g3.handle.which]: end };
          }
          g3.cnodeDirty = !0;
          break;
        }
        case "hold":
          Math.hypot(p3.x - g3.start.x, p3.y - g3.start.y) * g3.m.scale > 8 && (g3.moved = !0, clearTimeout(this.holdMenuTimer), this.selection = this.withBoundText([g3.holdItem.id]), this.renderSelection(), g3.kind = "move", g3.dx = p3.x - g3.start.x, g3.dy = p3.y - g3.start.y);
          break;
        case "pixel":
          for (let ev of evs) this.paintPixelAt(g3, this.toCanvas(ev, g3.m));
          break;
        case "pixelNew":
        case "place":
        case "placeBoard":
        case "placePainting":
          g3.end = p3;
          break;
        case "wrap": {
          let t3 = g3.text, b0 = g3.box, right = b0.x + b0.width, minW = t3.fontSize * 1.5;
          if (g3.handle.hx > 0) g3.item = { ...t3, wrap: r22(Math.max(minW, p3.x - t3.x)) };
          else {
            let nx = Math.min(p3.x, right - minW);
            g3.item = { ...t3, x: r22(nx), wrap: r22(right - nx) };
          }
          break;
        }
        case "shape":
          g3.item = { ...g3.item, x2: r22(p3.x), y2: r22(p3.y) };
          break;
        case "connector":
          (g3.route || (g3.route = [])).push([p3.x, p3.y]), g3.item = { ...g3.item, to: this.anchorAt(p3, g3.item.from) || { x: r22(p3.x), y: r22(p3.y) } };
          break;
        case "lasso":
          for (let ev of evs) {
            let q2 = this.toCanvas(ev, g3.m);
            g3.points.push([q2.x, q2.y]);
          }
          break;
        case "move":
          g3.dx = p3.x - g3.start.x, g3.dy = p3.y - g3.start.y;
          break;
        default:
          return;
      }
      this.raf || (this.raf = requestAnimationFrame(this.drawLive));
    });
    __publicField(this, "drawLive", () => {
      var _a2, _b2, _c;
      this.raf = 0;
      let g3 = this.gesture;
      if (g3) {
        if (g3.kind === "fx")
          g3.dirty && g3.runner && g3.shown && (g3.dirty = !1, g3.runner.present(g3.shown.getContext("2d")));
        else if (g3.kind === "scale" && g3.scale) {
          let { ax, ay, sx, sy } = g3.scale, t3 = `matrix(${sx} 0 0 ${sy} ${ax - sx * ax} ${ay - sy * ay})`;
          this.dragGroup().setAttribute("transform", t3), this.selG && this.selG.setAttribute("transform", t3), this.liveConnectors((b3) => ({ x: ax + (b3.x - ax) * sx, y: ay + (b3.y - ay) * sy, width: b3.width * sx, height: b3.height * sy }));
        } else if (g3.kind === "wrap" && g3.item)
          (_a2 = this.idEl.get(g3.text.id)) == null || _a2.setAttribute("visibility", "hidden"), g3.live && g3.live.remove(), g3.live = buildItemEl(g3.item, this.renderOpts()), this.overlayG.appendChild(g3.live);
        else if (g3.kind === "end" && g3.item)
          (_b2 = this.idEl.get(g3.shape.id)) == null || _b2.setAttribute("visibility", "hidden"), g3.live && g3.live.remove(), g3.live = buildItemEl(g3.item, this.renderOpts()), this.overlayG.appendChild(g3.live);
        else if (g3.kind === "pixel" && g3.pixDirty) {
          g3.pixDirty = !1;
          let draft = { ...g3.pix, cells: g3.cells };
          g3.live || (g3.live = svgEl("g", {}), this.overlayG.appendChild(g3.live), (_c = this.idEl.get(g3.pix.id)) == null || _c.setAttribute("visibility", "hidden")), g3.live.replaceChildren(...pixelEls(draft), ...g3.pix.border !== !1 ? [pixelBorderEl(draft)] : []);
        } else if ((g3.kind === "placeBoard" || g3.kind === "placePainting") && g3.end)
          g3.live.setAttribute("x", Math.min(g3.start.x, g3.end.x)), g3.live.setAttribute("y", Math.min(g3.start.y, g3.end.y)), g3.live.setAttribute("width", Math.abs(g3.end.x - g3.start.x)), g3.live.setAttribute("height", Math.abs(g3.end.y - g3.start.y));
        else if (g3.kind === "place" && g3.end) {
          let att = this.pendingAttach, x22 = g3.end.x, y22 = g3.end.y;
          if (att && att.width && att.height) {
            let w3 = Math.abs(x22 - g3.start.x);
            y22 = g3.start.y + Math.sign(y22 - g3.start.y || 1) * (w3 * att.height) / att.width;
          }
          g3.live.setAttribute("x", Math.min(g3.start.x, x22)), g3.live.setAttribute("y", Math.min(g3.start.y, y22)), g3.live.setAttribute("width", Math.abs(x22 - g3.start.x)), g3.live.setAttribute("height", Math.abs(y22 - g3.start.y));
        } else if (g3.kind === "pixelNew" && g3.end) {
          let x3 = Math.min(g3.start.x, g3.end.x), y3 = Math.min(g3.start.y, g3.end.y);
          g3.live.setAttribute("x", x3), g3.live.setAttribute("y", y3), g3.live.setAttribute("width", Math.abs(g3.end.x - g3.start.x)), g3.live.setAttribute("height", Math.abs(g3.end.y - g3.start.y));
        } else if (g3.kind === "marquee") {
          let [[x1, y1], [x22, y22]] = g3.points.length > 1 ? g3.points : [g3.points[0], g3.points[0]];
          g3.live.setAttribute("x", Math.min(x1, x22)), g3.live.setAttribute("y", Math.min(y1, y22)), g3.live.setAttribute("width", Math.abs(x22 - x1)), g3.live.setAttribute("height", Math.abs(y22 - y1));
        } else if (g3.kind === "stroke" && g3.quickDirty)
          this.repaintQuick(g3);
        else if (g3.kind === "stroke")
          g3.stamp ? this.compositeLive(g3) : updateStrokeEl(g3.live, g3.item, this.renderOpts(), !1);
        else if (g3.kind === "connector") {
          g3.live || (g3.live = svgEl("g", { class: "ink-route" }), g3.liveLine = svgEl("path", { fill: "none", stroke: paint(g3.item.color), "stroke-width": g3.item.size, "stroke-linecap": "round", "stroke-linejoin": "round", "vector-effect": "non-scaling-stroke" }), g3.liveA = svgEl("circle", { class: "ink-anchor-dot", r: 4 / g3.m.scale }), g3.liveB = svgEl("circle", { class: "ink-anchor-dot", r: 4 / g3.m.scale }), g3.live.append(g3.liveLine, g3.liveA, g3.liveB), this.overlayG.appendChild(g3.live));
          let opts = this.renderOpts(), boxOf = (x3) => this.edgeBox(x3), a3 = endPoint(g3.item.from, opts.lookup, boxOf, opts.nodeBox), b3 = endPoint(g3.item.to, opts.lookup, boxOf, opts.nodeBox);
          a3 && b3 && g3.liveLine.setAttribute("d", connectorPath({ ...g3.item, waypoints: [] }, a3, b3).d);
          let place = (el, pt, on) => {
            el.setAttribute("cx", pt ? pt.x : -99999), el.setAttribute("cy", pt ? pt.y : -99999), el.toggleClass("is-on", !!on);
          };
          place(g3.liveA, a3, a3 && a3.box), place(g3.liveB, b3, b3 && b3.box);
        } else if (g3.kind === "shape")
          g3.live && g3.live.remove(), g3.live = buildItemEl(g3.item, this.renderOpts()), this.overlayG.appendChild(g3.live);
        else if (g3.kind === "lasso")
          g3.live.setAttribute("d", "M" + g3.points.map((q2) => `${r22(q2[0])} ${r22(q2[1])}`).join(" L") + " Z");
        else if (g3.kind === "cnode" && g3.cnodeDirty) {
          g3.cnodeDirty = !1;
          let el = this.idEl.get(g3.conn.id);
          el && el.replaceChildren(...connectorEls(g3.conn, this.renderOpts()));
        } else if (g3.kind === "rotate") {
          let t3 = `rotate(${g3.deg} ${g3.cx} ${g3.cy})`;
          this.dragGroup().setAttribute("transform", t3), this.selG && this.selG.setAttribute("transform", t3);
        } else if (g3.kind === "move") {
          let t3 = `translate(${g3.dx} ${g3.dy})`;
          this.dragGroup().setAttribute("transform", t3), this.selG && this.selG.setAttribute("transform", t3), this.liveConnectors((b3) => ({ ...b3, x: b3.x + g3.dx, y: b3.y + g3.dy }));
        }
      }
    });
    __publicField(this, "onUp", (e3) => {
      var _a2, _b2, _c, _d;
      let g3 = this.gesture;
      if (!(!g3 || e3.pointerId !== g3.pointerId))
        switch (e3.preventDefault(), e3.stopPropagation(), this.endListeners(), this.raf && cancelAnimationFrame(this.raf), this.raf = 0, this.gesture = null, g3.live && g3.live.remove(), g3.kind) {
          case "stroke": {
            if (clearTimeout(g3.holdTimer), !g3.quick && g3.smooth && g3.pen)
              for (let q2 of g3.smooth.finish(g3.pen.x, g3.pen.y)) {
                let pt = g3.item.pressure ? [r22(q2[0]), r22(q2[1]), Math.round(q2[2] * 1e3) / 1e3] : [r22(q2[0]), r22(q2[1])];
                g3.item.points.push(pt);
                let col = g3.tint ? this.tintAt(g3, pt) : null;
                if (g3.tint && g3.item.colors.push(col), g3.stamp) {
                  let dabs = g3.stamp.walker.feed(pt);
                  dabs.length && (!g3.tint || col) && (drawDabs(g3.stamp.ctx, dabs, g3.brush, g3.tint ? col : g3.stamp.color, g3.stamp.k, g3.stamp.ox, g3.stamp.oy), g3.stamp.dabCount = (g3.stamp.dabCount || 0) + dabs.length);
                }
              }
            let item = { ...g3.item }, painted = !item.colors || item.colors.some(Boolean);
            if (item.colors && (item.color = item.colors.find(Boolean) || item.color), !item.points.length || !painted) {
              g3.stamp && g3.stamp.visible.remove();
              break;
            }
            if (this.commit((items) => g3.mergeId ? [...items.filter((i3) => i3.id !== g3.mergeId), item] : [...items, item]), g3.stamp) {
              if (g3.brush.wet && ((_a2 = item.wet) != null ? _a2 : 0) > 0) {
                let sc = g3.stamp;
                try {
                  let acc = sc.acc, ctx = acc.getContext("2d", { willReadFrequently: !0 });
                  if (ctx && (wetBleed(ctx, item, g3.brush, [], sc.k, sc.ox, sc.oy, acc.width, acc.height), sc.dirty = !0), !sc.hasGrain) {
                    let v3 = sc.visible.getContext("2d");
                    v3.clearRect(0, 0, sc.visible.width, sc.visible.height), v3.drawImage(acc, 0, 0);
                  }
                } catch {
                }
              }
              g3.stamp.hasGrain && this.compositeLive(g3);
              let el = this.idEl.get(item.id), drop = () => g3.stamp.visible.remove();
              el && el._ready ? el._ready.then(drop, drop) : drop();
            }
            break;
          }
          case "erase":
            if (g3.hits.size) {
              let gone = this.withBoundText(g3.hits);
              this.commit((items) => items.filter((i3) => !gone.has(i3.id)));
            }
            break;
          case "fx":
            g3.fxRaf && cancelAnimationFrame(g3.fxRaf), this.applyEffect(g3.fx, g3);
            break;
          case "scale": {
            let sc = g3.scale;
            if (sc && (Math.abs(sc.sx - 1) > 1e-3 || Math.abs(sc.sy - 1) > 1e-3)) {
              let sel = this.selection;
              this.commit((items) => items.map((i3) => {
                if (!sel.has(i3.id) || i3.inShape && sel.has(i3.inShape)) return i3;
                let n3 = scaleItem(i3, sc.ax, sc.ay, sc.sx, sc.sy);
                return this.noteTransform(i3, n3, { ax: sc.ax, ay: sc.ay, sx: sc.sx, sy: sc.sy }), n3;
              }));
            } else
              this.dropDragGroup();
            break;
          }
          case "hold":
            if (clearTimeout(this.holdMenuTimer), !g3.moved && g3.holdItem && g3.holdItem.type === "painting") {
              let now3 = Date.now();
              if (this.lastPaintTap && this.lastPaintTap.id === g3.holdItem.id && now3 - this.lastPaintTap.at < 450) {
                this.lastPaintTap = null, this.enterPainting(g3.holdItem);
                break;
              }
              this.lastPaintTap = { id: g3.holdItem.id, at: now3 };
            }
            if (!g3.moved && g3.holdItem && g3.holdItem.type === "board") {
              this.openBoard(g3.holdItem);
              break;
            }
            g3.moved || (this.selection = this.withBoundText([g3.holdItem.id]), this.renderSelection(), this.updateUI());
            break;
          case "rotate":
            Math.abs(g3.deg) > 0.2 ? this.rotateSelection(g3.deg, g3.cx, g3.cy) : this.dropDragGroup();
            break;
          case "cnode": {
            let c3 = g3.conn;
            this.commit((items) => items.map((i3) => i3.id === c3.id ? { ...c3, box: this.connectorBoxOf(c3) } : i3));
            break;
          }
          case "picker":
            this.pickColorAt(g3.start);
            break;
          case "bucket":
            this.bucketAt(g3.start);
            break;
          case "pixel": {
            (_b2 = this.idEl.get(g3.pix.id)) == null || _b2.removeAttribute("visibility");
            let cells = g3.cells, id = g3.pix.id;
            this.commit((items) => items.map((i3) => i3.id === id ? { ...i3, cells } : i3));
            break;
          }
          case "pixelNew":
            this.createPixelCanvas(g3);
            break;
          case "placePainting": {
            let pp = this.pendingPainting;
            if (this.pendingPainting = null, !pp) break;
            let end = g3.end || g3.start, w3 = Math.abs(end.x - g3.start.x), h3 = Math.abs(end.y - g3.start.y);
            if (w3 * g3.m.scale < 40 || h3 * g3.m.scale < 40) {
              new import_obsidian3.Notice("Drag out a bigger area for the painting.");
              break;
            }
            this.createPainting({ x: Math.min(g3.start.x, end.x), y: Math.min(g3.start.y, end.y), w: w3, h: h3 }, pp.label);
            break;
          }
          case "placeBoard": {
            let pb = this.pendingBoard;
            if (this.pendingBoard = null, !pb) break;
            let end = g3.end || g3.start, w3 = Math.abs(end.x - g3.start.x), h3 = Math.abs(end.y - g3.start.y), box;
            w3 * g3.m.scale > 30 && h3 * g3.m.scale > 30 ? box = { x: Math.min(g3.start.x, end.x), y: Math.min(g3.start.y, end.y), w: w3, h: h3 } : (w3 = 96 / g3.m.scale, h3 = 118 / g3.m.scale, box = { x: g3.start.x - w3 / 2, y: g3.start.y - h3 / 2, w: w3, h: h3 }), this.createBoard(pb.name, box);
            break;
          }
          case "place": {
            let att = this.pendingAttach;
            if (this.pendingAttach = null, !att) break;
            let end = g3.end || g3.start, w3 = Math.abs(end.x - g3.start.x), h3 = Math.abs(end.y - g3.start.y), box = null;
            if (w3 * g3.m.scale > 24 && h3 * g3.m.scale > 24)
              att.width && att.height && (h3 = w3 * att.height / att.width), box = { x: Math.min(g3.start.x, end.x), y: Math.min(g3.start.y, end.y), w: w3, h: h3 };
            else {
              let dw = 320 / g3.m.scale, dh = att.width && att.height ? dw * att.height / att.width : dw * 0.62;
              box = { x: g3.start.x - dw / 2, y: g3.start.y - dh / 2, w: dw, h: dh };
            }
            if (att.src || att.kind) {
              let ref = att.src ? { src: att.src, kind: "image", fit: "cover", scale: 100, ox: 0, oy: 0, rotate: 0 } : att.kind === "image" ? { path: att.file.path, kind: "image", fit: "cover", scale: 100, ox: 0, oy: 0, rotate: 0 } : { path: att.file.path, kind: att.kind };
              att.kind === "audio" && (box.h = Math.min(box.h, 70 / g3.m.scale));
              let item = {
                id: uid(),
                type: "image",
                x: r22(box.x),
                y: r22(box.y),
                w: r22(box.w),
                h: r22(box.h),
                opacity: 100,
                ref
              };
              this.commit((items) => [...items, item]);
            } else
              this.placeCard(att.file, att.width, att.height, box);
            this.updateUI();
            break;
          }
          case "unbake":
            this.unbakeAt(g3.start);
            break;
          case "wrap": {
            (_c = this.idEl.get(g3.text.id)) == null || _c.removeAttribute("visibility"), g3.item && this.commit((items) => items.map((i3) => i3.id === g3.text.id ? g3.item : i3));
            break;
          }
          case "end": {
            (_d = this.idEl.get(g3.shape.id)) == null || _d.removeAttribute("visibility"), g3.item && this.commit((items) => items.map((i3) => i3.id === g3.shape.id ? g3.item : i3));
            break;
          }
          case "marquee": {
            let [[x1, y1], [x22, y22]] = g3.points.length > 1 ? g3.points : [g3.points[0], g3.points[0]];
            if (Math.hypot(x22 - x1, y22 - y1) * g3.m.scale < 6)
              this.selection = /* @__PURE__ */ new Set(), this.state.multiSelect && (this.state.multiSelect = !1, this.plugin.saveState(), new import_obsidian3.Notice("Back to single selection."));
            else {
              let got = this.selectInPolygon([[x1, y1], [x22, y1], [x22, y22], [x1, y22]]);
              this.selection = g3.additive ? /* @__PURE__ */ new Set([...this.selection, ...got]) : got;
            }
            this.renderSelection(), this.updateUI();
            break;
          }
          case "connector": {
            g3.item = { ...g3.item, waypoints: [] };
            let it = { ...g3.item, box: this.connectorBoxOf(g3.item) }, opts = this.renderOpts(), a3 = endPoint(it.from, opts.lookup, (x3) => this.edgeBox(x3), opts.nodeBox), b3 = endPoint(it.to, opts.lookup, (x3) => this.edgeBox(x3), opts.nodeBox);
            a3 && b3 && Math.hypot(b3.x - a3.x, b3.y - a3.y) * g3.m.scale >= 8 && this.commit((items) => [...items, it]);
            break;
          }
          case "shape": {
            let it = g3.item;
            if (Math.hypot(it.x2 - it.x1, it.y2 - it.y1) * g3.m.scale >= 4) {
              let fill = this.state.fillActive && (it.shape === "rect" || it.shape === "ellipse") ? this.makeFill({ inShape: it.id, box: this.shapeBox(it) }) : null;
              this.commit((items) => fill ? [...items, fill, it] : [...items, it]);
            }
            break;
          }
          case "lasso": {
            let span = 0;
            for (let q2 of g3.points) span = Math.max(span, Math.hypot(q2[0] - g3.points[0][0], q2[1] - g3.points[0][1]));
            if (span * g3.m.scale < 6)
              this.selection = /* @__PURE__ */ new Set(), this.state.multiSelect && (this.state.multiSelect = !1, this.plugin.saveState(), new import_obsidian3.Notice("Back to single selection."));
            else {
              let got = this.selectInPolygon(g3.points);
              this.selection = g3.additive ? /* @__PURE__ */ new Set([...this.selection, ...got]) : got;
            }
            this.renderSelection(), this.updateUI();
            break;
          }
          case "move": {
            let { dx, dy } = g3;
            if (g3.tapBoard && Math.hypot(dx, dy) * g3.m.scale < 6) {
              this.openBoard(g3.tapBoard);
              break;
            }
            Math.abs(dx) + Math.abs(dy) > 0.01 ? this.commit((items) => items.map((i3) => {
              if (!this.selection.has(i3.id)) return i3;
              let n3 = translateItem(i3, dx, dy);
              return this.noteTransform(i3, n3, { dx, dy }), n3;
            })) : this.dropDragGroup();
            break;
          }
          case "text": {
            let hit = this.items.filter((i3) => i3.type === "text").reverse().find((i3) => hitItem(i3, g3.start.x, g3.start.y, 4 / g3.m.scale, this.bboxOf(i3)));
            if (hit) {
              this.openTextEditor(g3.start, hit);
              break;
            }
            let shape = this.items.slice().reverse().find((i3) => isContainer(i3) && pointInShape(i3, g3.start.x, g3.start.y)), bound = shape && this.items.find((i3) => i3.type === "text" && i3.inShape === shape.id);
            this.openTextEditor(g3.start, bound || null, shape || null);
            break;
          }
        }
    });
    this.plugin = plugin, this.view = view, this.active = !1, this.selection = /* @__PURE__ */ new Set(), this.gesture = null, this.elCache = /* @__PURE__ */ new WeakMap(), this.boxCache = /* @__PURE__ */ new WeakMap(), this.idEl = /* @__PURE__ */ new Map(), this.rasterEls = /* @__PURE__ */ new Set(), this.transformed = /* @__PURE__ */ new WeakMap(), this.doc = null, this.unsub = null, this.textEdit = null, this.disposers = [], this.raf = 0, this.timeline = [], this.redoTimeline = [], this.panMode = null, this.panFlip = 1, this.committedSize = /* @__PURE__ */ new WeakMap();
  }
  get settings() {
    return this.plugin.settings;
  }
  get state() {
    return this.plugin.state;
  }
  get items() {
    if (!this.doc) return [];
    if (this.focusId) {
      let p3 = this.doc.items.find((i3) => i3.id === this.focusId);
      if (p3) return p3.items;
    }
    return this.doc.items;
  }
  /** The painting that's open, if any. */
  get focused() {
    return this.focusId && this.doc && this.doc.items.find((i3) => i3.id === this.focusId) || null;
  }
  get tool() {
    return this.state.tool;
  }
  // ---------- lifecycle ----------
  mount() {
    let canvasEl = this.findCanvasEl();
    if (!canvasEl) return !1;
    this.canvasEl = canvasEl, this.svg = svgEl("svg", { class: "ink-layer", "aria-hidden": "true" }), this.pyramids = /* @__PURE__ */ new Map(), this.tileCanvas = new TileCanvas(this), this.hot = /* @__PURE__ */ new Set(), this.setSvgBox({ x: -500, y: -500, width: 1e3, height: 1e3 }), this.itemsG = svgEl("g", { class: "ink-items" }), this.overlayG = svgEl("g", { class: "ink-overlay" }), this.svg.append(this.itemsG, this.overlayG), this.placeSvg(), this.buildUI(), this.headerAction = this.view.addAction(this.fingerMode ? "pointer" : "pencil", "Draw on canvas (hold to switch pen / finger drawing)", () => {
      if (this.suppressHeaderClick) {
        this.suppressHeaderClick = !1;
        return;
      }
      this.setActive(!this.active);
    });
    let pressTimer = 0, cancelPress = () => clearTimeout(pressTimer);
    this.listen(this.headerAction, "pointerdown", () => {
      cancelPress(), pressTimer = window.setTimeout(() => {
        this.suppressHeaderClick = !0, this.plugin.toggleFingerMode();
      }, 550);
    });
    for (let t3 of ["pointerup", "pointercancel", "pointerleave"]) this.listen(this.headerAction, t3, cancelPress);
    this.listen(this.headerAction, "contextmenu", (e3) => e3.preventDefault());
    let c3 = this.view.contentEl;
    this.listen(c3, "pointerdown", this.onPointerDown, { capture: !0 }), this.listen(c3, "touchstart", this.onTouchBlock, { capture: !0, passive: !1 }), this.listen(c3, "touchmove", this.onTouchBlock, { capture: !0, passive: !1 });
    for (let t3 of ["click", "dblclick", "contextmenu"]) this.listen(c3, t3, this.onClickBlock, { capture: !0 });
    this.listen(c3, "touchend", (e3) => {
      this.multiTouch = e3.touches.length > 1, e3.touches.length < 2 && (this.pinch = null);
    }, { capture: !0, passive: !0 }), this.listen(c3, "touchcancel", () => {
      this.multiTouch = !1, this.pinch = null;
    }, { capture: !0, passive: !0 });
    for (let t3 of ["wheel", "touchend", "touchmove", "pointerup", "pointermove"]) this.listen(c3, t3, this.scheduleResCheck, { passive: !0 });
    if (this.hookHistory(), this.applyVisibility(), typeof MutationObserver == "function" && this.canvasEl) {
      let tmo = new MutationObserver(() => this.scheduleResCheck());
      tmo.observe(this.canvasEl, { attributes: !0, attributeFilter: ["style"] }), this.disposers.push(() => tmo.disconnect());
    }
    if (typeof MutationObserver == "function") {
      let mo = new MutationObserver(() => this.scheduleMarkBaked());
      mo.observe(this.canvasEl, { childList: !0 }), this.disposers.push(() => mo.disconnect());
    }
    if (this.scheduleMarkBaked(), this.listen(window, "resize", () => this.layout()), window.visualViewport && this.listen(window.visualViewport, "resize", () => requestAnimationFrame(() => this.layout())), typeof ResizeObserver == "function") {
      let ro = new ResizeObserver(() => this.layout());
      ro.observe(this.ui), this.disposers.push(() => ro.disconnect());
    }
    return !0;
  }
  findCanvasEl() {
    let byApi = this.view.canvas && this.view.canvas.canvasEl;
    return byApi instanceof HTMLElement ? byApi : this.view.contentEl.querySelector(".canvas-wrapper > .canvas");
  }
  listen(target, type, fn, opts) {
    target.addEventListener(type, fn, opts), this.disposers.push(() => target.removeEventListener(type, fn, opts));
  }
  sync() {
    let current = this.findCanvasEl();
    current && current !== this.canvasEl ? (this.canvasEl = current, this.placeSvg()) : this.svg.isConnected || this.placeSvg(), this.view.canvas && this.view.canvas !== this.hookedCanvas && this.hookHistory();
    let path = this.view.file && this.view.file.path;
    path && (!this.doc || this.doc.path !== path) && this.bindDoc(path);
  }
  bindDoc(path) {
    this.focusId = null, this.focusChrome && this.focusChrome.forEach((el) => el.remove()), this.focusChrome = null, this.cancelGesture(), this.cancelPendingPixel(), this.closeTextEditor(!0), this.unsub && this.unsub(), this.doc && this.plugin.releaseDoc(this.doc), this.selection.clear(), this.timeline = [], this.redoTimeline = [], this.doc = this.plugin.acquireDoc(path), this.svgBox = null, this.setSvgBox({ x: -1500, y: -1500, width: 3e3, height: 3e3 }), this.unsub = this.doc.subscribe(() => this.render()), this.render(), this.renderCrumbs(), this.doc.ready.then(() => {
      if (!(!this.svg || !this.svg.isConnected)) {
        this.ensurePyramids();
        for (let ms of [0, 150, 500, 1200, 3e3]) setTimeout(() => {
          try {
            this.svg && this.svg.isConnected && this.checkResolution();
          } catch {
          }
        }, ms);
      }
    }), setTimeout(() => this.externalizePictures(), 1500);
  }
  /** Dropping a picture from the desktop: save it into the vault and place it where it landed. */
  bindDrop() {
    let host = this.canvasEl && this.canvasEl.parentElement;
    if (!host || this.dropBound) return;
    this.dropBound = !0;
    let over = (e3) => {
      !e3.dataTransfer || !Array.from(e3.dataTransfer.types || []).includes("Files") || (e3.preventDefault(), e3.dataTransfer.dropEffect = "copy", host.addClass("ink-drop-target"));
    }, leave = () => host.removeClass("ink-drop-target"), drop = async (e3) => {
      let files = e3.dataTransfer && Array.from(e3.dataTransfer.files || []);
      if (!files || !files.length) return;
      e3.preventDefault(), e3.stopPropagation(), leave();
      let m3 = this.metrics(), at2 = { x: (e3.clientX - m3.left) / m3.scale, y: (e3.clientY - m3.top) / m3.scale };
      for (let file of files) {
        if (kindOf(file.name || "") !== "image") {
          new import_obsidian3.Notice(`${file.name}: only pictures can be dropped here for now.`);
          continue;
        }
        try {
          let saved = await this.saveAttachment(file), w3 = 320 / m3.scale, h3 = saved.width && saved.height ? w3 * saved.height / saved.width : w3 * 0.62;
          await this.placeCard(saved.file, saved.width, saved.height, { x: at2.x - w3 / 2, y: at2.y - h3 / 2, w: w3, h: h3 }), at2.x += 24 / m3.scale, at2.y += 24 / m3.scale;
        } catch (err2) {
          new import_obsidian3.Notice(`Palette: ${err2.message}`);
        }
      }
    };
    host.addEventListener("dragover", over), host.addEventListener("dragleave", leave), host.addEventListener("drop", drop, !0), this.dropOff = () => {
      host.removeEventListener("dragover", over), host.removeEventListener("dragleave", leave), host.removeEventListener("drop", drop, !0);
    };
  }
  destroy() {
    this.dropOff && this.dropOff(), this.crumbs && this.crumbs.remove(), clearInterval(this.layoutTimer), clearInterval(this.cardTimer), this.cancelGesture(), this.cancelPendingPixel(), this.closeTextEditor(!0), this.unhookHistory(), this.disposers.forEach((d3) => d3()), this.disposers = [], this.unsub && this.unsub(), this.doc && this.plugin.releaseDoc(this.doc), this.doc = null, this.rasterEls.clear(), this.svg.remove(), this.tileCanvas && this.tileCanvas.unmount(), this.ui && this.ui.remove(), this.textHost && this.textHost.remove(), this.headerAction && this.headerAction.remove(), this.view.contentEl.removeClass("ink-mode"), this.canvasEl && this.canvasEl.removeClass("ink-host");
  }
  placeSvg() {
    let below = this.settings.layer === "below";
    this.canvasEl.addClass("ink-host"), this.svg.classList.toggle("is-below", below), below ? this.canvasEl.prepend(this.svg) : this.canvasEl.appendChild(this.svg), this.tileCanvas.mount(this.canvasEl, this.svg), this.ui && this.ui.parentElement !== this.canvasEl.parentElement && this.canvasEl.parentElement.appendChild(this.ui);
  }
  applyVisibility() {
    this.svg.classList.toggle("is-hidden", !this.state.visible && !this.active);
  }
  invalidateRender() {
    this.rasterEls.clear(), this.elCache = /* @__PURE__ */ new WeakMap(), this.boxCache = /* @__PURE__ */ new WeakMap(), this.render();
  }
  setActive(on) {
    if (on !== this.active) {
      if (this.active = on, !on)
        this.cancelGesture(), this.closeTextEditor(!0), this.selection.clear(), this.renderSelection(), this.closePop();
      else {
        this.sync();
        let c3 = this.view.canvas;
        if (c3 && typeof c3.deselectAll == "function")
          try {
            c3.deselectAll();
          } catch {
          }
      }
      if (this.view.contentEl.toggleClass("ink-mode", on), this.headerAction && this.headerAction.toggleClass("is-active", on), this.applyVisibility(), this.updateUI(), clearInterval(this.layoutTimer), on) {
        this.layout();
        let last = "";
        this.layoutTimer = window.setInterval(() => {
          if (!this.ui || !this.ui.isConnected || this.gesture) return;
          let s3 = JSON.stringify(this.safeArea()) + this.ui.offsetWidth + "x" + this.ui.offsetHeight;
          s3 !== last && (last = s3, this.layout());
        }, 2e3), this.cardTimer = window.setInterval(() => {
          this.ui && this.ui.isConnected && !this.gesture && this.followCards();
        }, 300);
      }
    }
  }
  refreshModeIcon() {
    this.headerAction && (this.headerAction.empty(), (0, import_obsidian3.setIcon)(this.headerAction, this.fingerMode ? "pointer" : "pencil"));
  }
  scheduleMarkBaked() {
    clearTimeout(this.markTimer), this.markTimer = setTimeout(() => this.markBakedNodes(), 250);
  }
  async markBakedNodes() {
    let c3 = this.view.canvas;
    if (!c3 || !c3.nodes || typeof c3.nodes.values != "function") return;
    let on = this.settings.hideBakedBorders !== !1;
    for (let n3 of c3.nodes.values()) {
      let el = n3.nodeEl;
      if (!el) continue;
      let baked = on && n3.file && /\.svg$/i.test(n3.file.path || "") && await this.plugin.isBakedFile(n3.file);
      el.classList.toggle("ink-baked-node", !!baked);
    }
  }
  // ---------- shared undo with the canvas ----------
  /**
   * Obsidian's canvas keeps its own undo history (internal API). We wrap it so one undo
   * covers cards and ink in the order you made changes. Without those internals, ink keeps
   * its own history and the toolbar buttons still work.
   */
  hookHistory() {
    this.unhookHistory();
    let c3 = this.view.canvas;
    if (!this.settings.sharedUndo || !c3 || typeof c3.undo != "function" || typeof c3.redo != "function") return;
    let layer = this, orig = { undo: c3.undo, redo: c3.redo, pushHistory: c3.pushHistory };
    c3.undo = function(...a3) {
      if (!layer.stepBack(() => orig.undo.apply(c3, a3)))
        return orig.undo.apply(this, a3);
    }, c3.redo = function(...a3) {
      if (!layer.stepForward(() => orig.redo.apply(c3, a3)))
        return orig.redo.apply(this, a3);
    }, typeof orig.pushHistory == "function" && (c3.pushHistory = function(...a3) {
      return layer.capturingCanvasHistory != null ? layer.capturingCanvasHistory++ : (layer.timeline.push("canvas"), layer.timeline.length > 400 && layer.timeline.shift(), layer.redoTimeline = []), orig.pushHistory.apply(this, a3);
    }), this.hookedCanvas = c3, this.origHistory = orig;
  }
  /**
   * Undo one step of the shared timeline. Returns true if it handled the step itself;
   * false means "let the canvas undo its own change".
   */
  stepBack(canvasUndo) {
    let t3 = this.timeline, top = t3[t3.length - 1], inkReady = this.doc && this.doc.canUndo;
    return top && top.bake ? (t3.pop(), this.redoTimeline.push(top), top.bake.canvasHistory && canvasUndo ? canvasUndo() : removeCardById(this.view.canvas, top.bake.nodeId), inkReady && this.doc.undo(), !0) : top === "ink" && inkReady ? (t3.pop(), this.redoTimeline.push("ink"), this.doc.undo(), !0) : top === "canvas" ? (t3.pop(), this.redoTimeline.push("canvas"), !1) : !t3.length && inkReady ? (this.doc.undo(), !0) : !1;
  }
  stepForward(canvasRedo) {
    let t3 = this.redoTimeline, top = t3[t3.length - 1], inkReady = this.doc && this.doc.canRedo;
    return top && top.bake ? (t3.pop(), this.timeline.push(top), inkReady && this.doc.redo(), top.bake.canvasHistory && canvasRedo ? canvasRedo() : replaceBakedCard(this, top.bake), !0) : top === "ink" && inkReady ? (t3.pop(), this.timeline.push("ink"), this.doc.redo(), !0) : top === "canvas" ? (t3.pop(), this.timeline.push("canvas"), !1) : !t3.length && inkReady ? (this.doc.redo(), !0) : !1;
  }
  unhookHistory() {
    let c3 = this.hookedCanvas, o3 = this.origHistory;
    c3 && o3 && (c3.undo = o3.undo, c3.redo = o3.redo, o3.pushHistory && (c3.pushHistory = o3.pushHistory)), this.hookedCanvas = null, this.origHistory = null;
  }
  recordBake(rec) {
    this.timeline.push({ bake: rec }), this.redoTimeline = [];
  }
  /** Apply an ink change as one undoable step. */
  commit(fn) {
    let before = this.doc.items;
    if (this.focused) {
      let id = this.focusId;
      this.doc.update((all) => all.map((i3) => {
        if (i3.id !== id) return i3;
        let next = fn(i3.items);
        return next === i3.items ? i3 : { ...i3, items: next };
      }));
    } else {
      let layers = layersOf(this.doc), active = this.activeLayerId();
      this.doc.update((items) => {
        let next = fn(items);
        if (next === items) return items;
        let prev = new Set(items), withLayer = next.map((it) => prev.has(it) || it.layer ? it : { ...it, layer: active }), result = orderByLayer(withLayer, layers);
        return this.noteChanges(items, result), result;
      });
    }
    this.doc.items !== before && (this.timeline.push("ink"), this.timeline.length > 400 && this.timeline.shift(), this.redoTimeline = []);
  }
  // ---------- layers ----------
  layers() {
    return this.doc ? layersOf(this.doc) : [{ id: "L1", name: "Layer 1", visible: !0 }];
  }
  layerOf(it) {
    let id = layerOfItem(it);
    return this.layers().find((l3) => l3.id === id) || this.layers()[0];
  }
  activeLayerId() {
    let layers = this.layers();
    return layers.some((l3) => l3.id === this.activeLayer) || (this.activeLayer = layers[layers.length - 1].id), this.activeLayer;
  }
  /** Shown on the canvas at all (hidden layers draw nothing; frozen ones only what's kept live). */
  itemShown(it) {
    return this.layerOf(it).visible !== !1;
  }
  /** Can be touched, selected or edited. */
  itemEditable(it) {
    let l3 = this.layerOf(it);
    return l3.visible !== !1 && !l3.locked;
  }
  refreshDetail(scale) {
    let tol = simplifyTol(scale);
    if (tol === this._lastTol) return;
    let opts = this.renderOpts();
    for (let it of this.items) {
      let el = this.idEl.get(it.id);
      if (!el || it.type !== "stroke" || isRaster(it) || el._tol === tol) continue;
      el._tol = tol;
      let path = el.tagName === "path" ? el : el.querySelector("path");
      path && path.setAttribute("d", strokeD(it, opts));
    }
    this._lastTol = tol;
  }
  // ---------- tiles: every layer's ink as a pyramid on disk ----------
  tileable(it) {
    return it.type !== "image" && it.type !== "connector" && it.type !== "board" && !it.ref;
  }
  /** Drawn live right now: selected, being edited, not yet in tiles, or never tiled by nature. */
  isHot(it) {
    return !!(this.focused || !this.tileable(it) || !this.layerOf(it).pyramid || this.selection.has(it.id) || this.hot.has(it.id) || this.deepLive && this.deepLive.has(it.id) || this.deepNear && boxesTouch(this.bboxOf(it) || itemBox(it), this.deepNear) || this.textEdit && this.textEdit.item.id === it.id);
  }
  pyramidFor(lay) {
    let p3 = this.pyramids.get(lay.id);
    return p3 || (p3 = new LayerPyramid(this, lay), this.pyramids.set(lay.id, p3)), p3.lay !== lay && (p3.lay = lay), p3;
  }
  /** Layers without a pyramid yet get one built in the background; ink stays live meanwhile. */
  ensurePyramids() {
    if (!(!this.doc || this.focused)) {
      this.buildQueue = this.buildQueue || Promise.resolve();
      for (let lay of this.layers()) {
        if (lay.frozen && (lay.frozen = null, this.doc.dirty = !0), lay.pyramid || lay._building) continue;
        let pyr = this.pyramidFor(lay);
        pyr.items().length && (lay._building = !0, this.buildQueue = this.buildQueue.then(async () => {
          if (!this.doc || !this.layers().includes(lay) || lay.pyramid) {
            lay._building = !1;
            return;
          }
          let notice = new import_obsidian3.Notice(`Palette: preparing ${lay.name}\u2026`, 0);
          try {
            await pyr.rebuildAll((done, total, st2) => notice.setMessage(`Palette: preparing ${lay.name}\u2026 ${done} of ${total}${st2 && done ? ` (per tile: render ${(st2.render / done / 1e3).toFixed(1)}s, save ${(st2.save / done / 1e3).toFixed(1)}s, merge ${(st2.compose / done / 1e3).toFixed(1)}s)` : ""}`)), this.doc.dirty = !0, this.doc.scheduleSave(), this.render(), this.scheduleResCheck();
          } catch (e3) {
            new import_obsidian3.Notice(`Palette: couldn't prepare ${lay.name}: ${e3 && e3.message ? e3.message : e3}`, 1e4), console.error("[Palette] tiles", e3);
          }
          notice.hide(), lay._building = !1;
        }));
      }
    }
  }
  /** After a commit: what changed stays live, and its cells are queued for a refresh. */
  noteChanges(before, after) {
    if (this.focused) return;
    let was = new Set(before), now3 = new Set(after), touched = [];
    for (let it of after) was.has(it) || touched.push(it);
    for (let it of before) now3.has(it) || touched.push(it);
    if (touched.length) {
      for (let it of touched) {
        let lay = this.layerOf(it);
        if (!lay.pyramid) continue;
        now3.has(it) && this.hot.add(it.id);
        let b3 = itemBox(it);
        b3 && this.pyramidFor(lay).request(this.pyramidFor(lay).cellsOf(b3));
      }
      this.scheduleFlush();
    }
  }
  scheduleFlush() {
    clearTimeout(this.flushTimer), this.flushTimer = setTimeout(() => this.flushPyramids(), 500);
  }
  async flushPyramids() {
    if (this.gesture || this.textEdit) {
      this.scheduleFlush();
      return;
    }
    for (let lay of this.layers()) lay.pyramid && this.viewFor(lay);
    for (let pyr of this.pyramids.values()) {
      if (!pyr.queued.size || pyr.busy) continue;
      let cells = await pyr.flush();
      if (cells.length) {
        await this.tileCanvas.whenDrawn(pyr, cells);
        let done = new Set(cells);
        for (let id of [...this.hot]) {
          let it = this.items.find((i3) => i3.id === id);
          if (!it) {
            this.hot.delete(id);
            continue;
          }
          let b3 = itemBox(it);
          b3 && this.pyramidFor(this.layerOf(it)).cellsOf(b3).every((k3) => done.has(k3) || !pyr.queued.has(k3)) && this.hot.delete(id);
        }
        this.render();
      }
    }
    [...this.pyramids.values()].some((p3) => p3.queued.size) && this.scheduleFlush();
  }
  viewFor(lay) {
    let pyr = this.pyramidFor(lay);
    return pyr.view || (pyr.view = { replaced: () => this.tileCanvas.invalidate(), dispose: () => {
    } }), pyr.view;
  }
  updatePyramids(v3, scale, m3) {
    if (this.focused) {
      this.tileCanvas.hidden = !0, this.tileCanvas.invalidate();
      return;
    }
    for (let lay of this.layers()) lay.pyramid && this.viewFor(lay);
    this.deepLive = null, this.deepNear = null, this.tileCanvas.cellCovered = null, this.tileCanvas.hidden = !1, this.tileCanvas.update(v3, m3 || this.metrics());
  }
  /** Rebuild a layer's tiles from scratch (if something ever looks wrong). */
  async rebuildLayer(lay) {
    if (lay._building) return;
    lay._building = !0;
    let notice = new import_obsidian3.Notice(`Palette: rebuilding ${lay.name}\u2026`, 0);
    try {
      await this.pyramidFor(lay).rebuildAll((done, total, st2) => notice.setMessage(`Palette: rebuilding ${lay.name}\u2026 ${done} of ${total}${st2 && done ? ` (per tile: render ${(st2.render / done / 1e3).toFixed(1)}s, save ${(st2.save / done / 1e3).toFixed(1)}s, merge ${(st2.compose / done / 1e3).toFixed(1)}s)` : ""}`)), this.hot.clear(), this.doc.dirty = !0, this.doc.scheduleSave(), this.render(), this.scheduleResCheck();
    } catch (e3) {
      console.error("[Palette] rebuild", e3);
    }
    notice.hide(), lay._building = !1;
  }
  undo() {
    this.cancelGesture(), this.closeTextEditor(!0), this.hookedCanvas ? this.hookedCanvas.undo() : this.stepBack(null);
  }
  redo() {
    this.cancelGesture(), this.closeTextEditor(!0), this.hookedCanvas ? this.hookedCanvas.redo() : this.stepForward(null);
  }
  // ---------- rendering ----------
  resolveColor(c3) {
    if (c3 && c3 !== "auto") return c3;
    let now3 = performance.now();
    return (!this.autoColor || now3 - this.autoColorAt > 500) && (this.autoColor = getComputedStyle(this.svg).color || "#000", this.autoColorAt = now3), this.autoColor;
  }
  /** Remember what went wrong drawing an item, for the rendering report. */
  noteRenderError(it, e3) {
    let log = this.plugin.renderErrors = this.plugin.renderErrors || [];
    log.push({ at: Date.now(), type: it && it.type, id: it && it.id, message: e3 && (e3.message || String(e3)) || "unknown" }), log.length > 30 && log.shift(), console.warn("[Palette] could not draw", it && it.type, it && it.id, e3);
  }
  /** A dashed box where an item couldn't be drawn, so it's visibly there rather than missing. */
  brokenItemEl(it) {
    let g3 = svgEl("g", { "data-id": it.id, class: "ink-broken" }), b3 = null;
    try {
      b3 = itemBox(it);
    } catch {
      b3 = null;
    }
    return b3 && g3.appendChild(svgEl("rect", { x: b3.x, y: b3.y, width: Math.max(8, b3.width), height: Math.max(8, b3.height), fill: "none", "vector-effect": "non-scaling-stroke" })), g3;
  }
  /** id → item, rebuilt only when the items change. */
  itemById(id) {
    if (this.indexOf !== this.items) {
      let index = /* @__PURE__ */ new Map(), walk = (list) => {
        for (let i3 of list)
          index.has(i3.id) || index.set(i3.id, i3), (i3.type === "group" || i3.type === "painting") && i3.items && walk(i3.items);
      };
      for (let i3 of this.items) index.set(i3.id, i3);
      walk(this.items), this.index = index, this.indexOf = this.items;
    }
    return this.index.get(id);
  }
  renderOpts() {
    return {
      lookup: (id) => this.itemById(id),
      nodeBox: (id) => this.nodeBox(id),
      boxOf: (it) => this.edgeBox(it),
      resource: (path) => {
        let f3 = path && this.plugin.app.vault.getAbstractFileByPath(path);
        return f3 ? this.plugin.app.vault.getResourcePath(f3) : "";
      },
      pdfThumb: (path) => this.pdfThumb(path),
      streamline: this.settings.smoothing / 100,
      resolveColor: (c3) => this.resolveColor(c3),
      snapshots: this.doc ? this.doc.snapshots : null,
      // Never below 100% zoom: drawings stay crisp when you zoom in from a zoomed-out view.
      pixelScale: Math.max(1, this.metrics().scale) * DPR(),
      scale: this.metrics().scale,
      isUrgent: (item) => {
        let v3 = this.cachedViewport();
        return !!v3 && boxesTouch(itemBox(item), v3);
      }
    };
  }
  render() {
    if (!this.itemsG) return;
    this.focusId && !this.focused && (this.focusId = null, this.focusChrome && this.focusChrome.forEach((el) => el.remove()), this.focusChrome = null, this.elCache = /* @__PURE__ */ new WeakMap());
    let opts = this.renderOpts(), want = [];
    this.idEl.clear();
    let curTol = simplifyTol(opts.scale), layers = this.focused ? null : this.layers();
    for (let it of this.items) {
      if (layers && !this.itemShown(it) || layers && !this.isHot(it)) continue;
      let el = this.elCache.get(it);
      if (el && it.inShape && el._shape !== opts.lookup(it.inShape) && (el = null), el && it.type === "connector" && ((el._deps || [])[0] !== opts.lookup(it.from && it.from.id) || (el._deps || [])[1] !== opts.lookup(it.to && it.to.id)) && (el = null), !el) {
        try {
          el = this.fastTransform(it, opts) || buildItemEl(it, opts);
        } catch (e3) {
          this.noteRenderError(it, e3), el = this.brokenItemEl(it);
        }
        if (it.inShape && (el._shape = opts.lookup(it.inShape)), it.type === "connector") {
          el._deps = [opts.lookup(it.from && it.from.id), opts.lookup(it.to && it.to.id)];
          let b3 = this.connectorBoxOf(it);
          b3 && (it.box = b3);
        }
        this.elCache.set(it, el);
      }
      isRaster(it) && (this.rasterEls.add(el), !el._rendered && !el._pending && !el._stale && rasterInto(el, it, opts)), el.classList.contains("ink-erasing") && el.classList.remove("ink-erasing"), el.classList.contains("is-editing") && el.classList.remove("is-editing"), el.hasAttribute("transform") && el.removeAttribute("transform"), el._everShown = !0, this.idEl.set(it.id, el), el._tol === void 0 && (el._tol = curTol), want.push(el);
    }
    let parent = this.itemsG;
    this.moveG && (this.moveG.remove(), this.moveG = null);
    let cur = parent.firstChild;
    for (let el of want) {
      if (cur === el) {
        cur = cur.nextSibling;
        continue;
      }
      parent.insertBefore(el, cur);
    }
    for (; cur; ) {
      let nx = cur.nextSibling;
      cur.remove(), cur = nx;
    }
    this.fitSvg();
    for (let el of this.rasterEls) el.isConnected || this.rasterEls.delete(el);
    this.staleCount && this.scheduleSharpen();
    for (let id of [...this.selection]) this.idEl.has(id) || this.selection.delete(id);
    this.renderSelection(), this.renderPixelGrid(), this.updateUI();
  }
  /** Remember how a moved/resized item relates to its previous version. */
  noteTransform(oldItem, newItem, t3) {
    this.transformed.set(newItem, { old: oldItem, ...t3 });
  }
  /** Show a moved/resized item without redrawing it from scratch. */
  fastTransform(it, opts) {
    let t3 = this.transformed.get(it);
    if (!t3) return null;
    if (isRaster(it)) return this.fastRaster(it, opts, t3);
    if (t3.dx === void 0 || it.inShape) return null;
    let oldEl = this.elCache.get(t3.old);
    if (!oldEl) return null;
    let g3 = svgEl("g", { "data-id": it.id, opacity: oldEl.getAttribute("opacity") || 1 }), inner = svgEl("g", { transform: `translate(${r22(t3.dx)} ${r22(t3.dy)})` });
    for (let ch of oldEl.childNodes) inner.appendChild(ch.cloneNode(!0));
    return g3.appendChild(inner), g3;
  }
  fastRaster(it, opts, t3 = this.transformed.get(it)) {
    if (!t3) return null;
    let oldEl = this.elCache.get(t3.old), img = oldEl && oldEl.querySelector("image");
    if (!img) return null;
    let x3 = +img.getAttribute("x"), y3 = +img.getAttribute("y"), w3 = +img.getAttribute("width"), h3 = +img.getAttribute("height");
    if (t3.dx !== void 0)
      x3 += t3.dx, y3 += t3.dy;
    else {
      if (t3.sx <= 0 || t3.sy <= 0) return null;
      x3 = t3.ax + (x3 - t3.ax) * t3.sx, y3 = t3.ay + (y3 - t3.ay) * t3.sy, w3 *= t3.sx, h3 *= t3.sy;
    }
    let el = reuseRaster(it, oldEl, { x: x3, y: y3, w: w3, h: h3 }, opts, t3.dx === void 0);
    return el && t3.dx === void 0 && (this.staleCount = (this.staleCount || 0) + 1), el;
  }
  /** Re-render stretched bitmaps sharply, in the background (the render queue slices the work). */
  scheduleSharpen() {
    clearTimeout(this.sharpenTimer), this.sharpenTimer = window.setTimeout(() => {
      if (this.gesture) return this.scheduleSharpen();
      this.staleCount = 0;
      let opts = this.renderOpts();
      for (let it of this.items) {
        let el = this.idEl.get(it.id);
        el && el._stale && (el._stale = !1, rasterInto(el, it, opts));
      }
    }, 250);
  }
  /** Viewport in canvas units, recomputed at most every 100 ms. */
  cachedViewport() {
    let t3 = Date.now();
    if (!this.vpCache || t3 - this.vpCache.t > 100)
      try {
        this.vpCache = { t: t3, box: this.viewportBox() };
      } catch {
        return null;
      }
    return this.vpCache.box;
  }
  /**
   * Re-render bitmaps that are now too soft for the zoom level: what's on screen first, then
   * what's just around it, so panning onto a drawing finds it already sharp.
   */
  checkResolution() {
    if (this.tool === "pixel" && this.renderPixelGrid(), this.followCards(), !this.svg || !this.svg.isConnected || !this.active && !this.state.visible) return;
    let m3 = this.metrics(), k3 = Math.max(1, m3.scale) * DPR(), v3 = this.viewportBox();
    if (this.vpCache = { t: Date.now(), box: v3 }, this.updatePyramids(v3, m3.scale, m3), !this.rasterEls.size) {
      this.refreshDetail(m3.scale);
      return;
    }
    let moving = Date.now() - (this.lastMotion || 0) < 160;
    if (this.refreshDetail(m3.scale), moving && (queueStatus.current || queueStatus.waiting())) return;
    let near = moving ? v3 : { x: v3.x - v3.width, y: v3.y - v3.height, width: v3.width * 3, height: v3.height * 3 }, opts = this.renderOpts(), started = 0;
    for (let it of this.items) {
      if (!isRaster(it)) continue;
      let el = this.idEl.get(it.id);
      if (!el || !el._k || el._pending || k3 < (el._kWanted || el._k) * 1.25) continue;
      let b3 = itemBox(it);
      if (boxesTouch(b3, near) && (rasterInto(el, it, opts), moving && ++started >= 2))
        break;
    }
  }
  bboxOf(item) {
    let b3 = this.boxCache.get(item);
    if (b3) return b3;
    let el = this.idEl.get(item.id);
    if (!el) return itemBox(item);
    try {
      if (item.rot || item.inShape) return itemBox(item);
      let r4 = el.getBBox();
      if (!r4.width && !r4.height) return itemBox(item);
      let pad = item.type === "shape" ? item.size / 2 : 0;
      return b3 = { x: r4.x - pad, y: r4.y - pad, width: r4.width + pad * 2, height: r4.height + pad * 2 }, this.boxCache.set(item, b3), b3;
    } catch {
      return itemBox(item);
    }
  }
  pointsBox(item) {
    let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
    for (let p3 of item.points)
      x0 = Math.min(x0, p3[0]), y0 = Math.min(y0, p3[1]), x1 = Math.max(x1, p3[0]), y1 = Math.max(y1, p3[1]);
    let r4 = item.size / 2;
    return { x: x0 - r4, y: y0 - r4, width: x1 - x0 + 2 * r4, height: y1 - y0 + 2 * r4 };
  }
  selectionBox() {
    return unionBox(this.items.filter((i3) => this.selection.has(i3.id)).map((i3) => this.bboxOf(i3)));
  }
  /** Text written inside any of these shapes travels with them. */
  withBoundText(ids) {
    let out = new Set(ids);
    for (let it of this.items) it.inShape && out.has(it.inShape) && out.add(it.id);
    return out;
  }
  selectedItems() {
    return this.items.filter((i3) => this.selection.has(i3.id));
  }
  /** The one shape being edited directly (a lone shape, maybe with its text). */
  soloShape() {
    let sel = this.selectedItems().filter((i3) => !i3.inShape || !this.selection.has(i3.inShape));
    return sel.length === 1 && sel[0].type === "shape" ? sel[0] : null;
  }
  renderSelection() {
    let selKey = [...this.selection].sort().join(",");
    if (selKey !== this._selLive && !this.focused && this.pyramids.size && (this._selLive = selKey, this.render()), this.selG && this.selG.remove(), this.selG = null, this.selRect = null, this.handles = [], !this.selection.size || !this.overlayG) return;
    let b3 = this.selectionBox();
    if (!b3) return;
    let s3 = this.metrics().scale, pad = 6 / s3, g3 = this.selG = svgEl("g", { class: "ink-sel" });
    this.selRect = g3;
    let loneConnector = this.selection.size === 1 && (this.selectedItems()[0] || {}).type === "connector";
    loneConnector || g3.appendChild(svgEl("rect", {
      class: "ink-selection",
      x: b3.x - pad,
      y: b3.y - pad,
      width: b3.width + pad * 2,
      height: b3.height + pad * 2,
      rx: 4 / s3,
      "vector-effect": "non-scaling-stroke"
    }));
    let shape = this.soloShape(), sel = this.selectedItems(), loneText = sel.length === 1 && sel[0].type === "text" && !sel[0].inShape ? sel[0] : null, free = this.tool === "transform";
    if (loneText) {
      let box = { x: b3.x - pad, y: b3.y - pad, width: b3.width + pad * 2, height: b3.height + pad * 2 };
      for (let hx of [-1, 1]) for (let hy of [-1, 1]) this.handles.push({ kind: "scale", hx, hy, box, x: box.x + (hx + 1) / 2 * box.width, y: box.y + (hy + 1) / 2 * box.height, free: !1 });
      for (let hx of [-1, 1]) this.handles.push({ kind: "wrap", hx, hy: 0, text: loneText, x: hx < 0 ? box.x : box.x + box.width, y: box.y + box.height / 2 });
    } else if (sel.length === 1 && sel[0].type === "connector")
      this.handles = this.connectorHandles(sel[0]);
    else if (shape && (shape.shape === "line" || shape.shape === "arrow"))
      this.handles = [
        { kind: "end", which: 1, x: shape.x1, y: shape.y1 },
        { kind: "end", which: 2, x: shape.x2, y: shape.y2 }
      ];
    else {
      let box = shape ? { x: Math.min(shape.x1, shape.x2), y: Math.min(shape.y1, shape.y2), width: Math.abs(shape.x2 - shape.x1), height: Math.abs(shape.y2 - shape.y1) } : { x: b3.x - pad, y: b3.y - pad, width: b3.width + pad * 2, height: b3.height + pad * 2 };
      for (let hx of [-1, 0, 1]) for (let hy of [-1, 0, 1])
        !hx && !hy || !hx && box.width * s3 < 48 || !hy && box.height * s3 < 48 || this.handles.push({ kind: "scale", hx, hy, box, x: box.x + (hx + 1) / 2 * box.width, y: box.y + (hy + 1) / 2 * box.height, free });
    }
    if (!loneConnector && this.tool !== "select") {
      let top = b3.y - pad;
      this.handles.push({ kind: "rotate", x: b3.x + b3.width / 2, y: top - 26 / s3, cx: b3.x + b3.width / 2, cy: b3.y + b3.height / 2 }), g3.appendChild(svgEl("line", { class: "ink-rotate-stem", x1: b3.x + b3.width / 2, y1: top, x2: b3.x + b3.width / 2, y2: top - 20 / s3, "vector-effect": "non-scaling-stroke" }));
    }
    sel.some((i3) => i3.type === "pixels") && (this.handles = this.handles.filter((h3) => h3.kind !== "scale" || h3.hx && h3.hy), this.handles.forEach((h3) => h3.free = !1));
    let r4 = 7 / s3;
    for (let h3 of this.handles) {
      if (h3.kind === "rotate") {
        g3.appendChild(svgEl("circle", { class: "ink-handle is-rotate", cx: h3.x, cy: h3.y, r: 6.5 / s3, "vector-effect": "non-scaling-stroke" }));
        continue;
      }
      if (h3.kind === "cway" || h3.kind === "cend" || h3.kind === "cadd") {
        let cls = h3.kind === "cend" ? " is-anchor" : h3.kind === "cadd" ? " is-add" : "";
        g3.appendChild(svgEl("circle", { class: `ink-handle is-node${cls}`, cx: h3.x, cy: h3.y, r: 4.5 / s3, "vector-effect": "non-scaling-stroke" }));
        continue;
      }
      g3.appendChild(h3.kind === "end" ? svgEl("circle", { class: "ink-handle", cx: h3.x, cy: h3.y, r: r4 * 1.1, "vector-effect": "non-scaling-stroke" }) : svgEl("rect", { class: "ink-handle" + (h3.hx && h3.hy ? "" : " is-side") + (h3.kind === "wrap" ? " is-wrap" : ""), x: h3.x - r4, y: h3.y - r4, width: r4 * 2, height: r4 * 2, rx: 2.5 / s3, "vector-effect": "non-scaling-stroke" }));
    }
    this.overlayG.appendChild(g3);
  }
  /**
   * Editable points on a connector: an anchor at each end (drag to re-attach), a dot for
   * every bend you've added (drag to move it, or drag it onto its neighbours to remove), and
   * a small dot on each run to add one.
   */
  connectorHandles(item) {
    let opts = this.renderOpts(), boxOf = (it) => this.bboxOf(it) || itemBox(it), a3 = endPoint(item.from, opts.lookup, boxOf, opts.nodeBox), b3 = endPoint(item.to, opts.lookup, boxOf, opts.nodeBox);
    if (!a3 || !b3) return [];
    let ways = item.waypoints || [], out = [
      { kind: "cend", which: "from", x: a3.x, y: a3.y },
      { kind: "cend", which: "to", x: b3.x, y: b3.y }
    ];
    ways.forEach((w3, i3) => out.push({ kind: "cway", index: i3, x: w3[0], y: w3[1] }));
    let chain = [[a3.x, a3.y], ...ways, [b3.x, b3.y]], onPath = this.samplePath(connectorPath(item, a3, b3).d, chain.length - 1);
    for (let i3 = 0; i3 < chain.length - 1; i3++) {
      let q2 = onPath[i3] || [(chain[i3][0] + chain[i3 + 1][0]) / 2, (chain[i3][1] + chain[i3 + 1][1]) / 2];
      out.push({ kind: "cadd", index: i3, x: q2[0], y: q2[1] });
    }
    return out;
  }
  /** Evenly spaced points along a path's own curve, for placing the add-dots. */
  samplePath(d3, count) {
    if (!count || !this.overlayG) return [];
    try {
      let probe = svgEl("path", { d: d3, visibility: "hidden" });
      if (this.overlayG.appendChild(probe), typeof probe.getTotalLength != "function")
        return probe.remove(), [];
      let len = probe.getTotalLength(), out = [];
      for (let i3 = 0; i3 < count; i3++) {
        let pt = probe.getPointAtLength(len * (i3 + 0.5) / count);
        out.push([pt.x, pt.y]);
      }
      return probe.remove(), out;
    } catch {
      return [];
    }
  }
  handleAt(p3, m3) {
    let tol = 16 / m3.scale, best = null, bd = 1 / 0;
    for (let h3 of this.handles || []) {
      let d3 = Math.hypot(p3.x - h3.x, p3.y - h3.y);
      d3 < tol && d3 < bd && (best = h3, bd = d3);
    }
    return best;
  }
  // ---------- coordinates ----------
  metrics() {
    let r4 = this.svg.getBoundingClientRect(), b3 = this.svgBox, scale = r4.width / b3.w || 1;
    return { left: r4.left - b3.x * scale, top: r4.top - b3.y * scale, scale };
  }
  /**
   * Size the SVG to cover the ink (plus the visible area while drawing). A tiny SVG with
   * overflow can get clipped by the browser when panned away, which cut off parts of drawings.
   */
  setSvgBox(box) {
    let b3 = { x: Math.floor(box.x), y: Math.floor(box.y), w: Math.ceil(box.width), h: Math.ceil(box.height) }, o3 = this.svgBox;
    o3 && o3.x === b3.x && o3.y === b3.y && o3.w === b3.w && o3.h === b3.h || (this.svgBox = b3, this.svg.style.left = `${b3.x}px`, this.svg.style.top = `${b3.y}px`, this.svg.setAttribute("width", String(b3.w)), this.svg.setAttribute("height", String(b3.h)), this.svg.setAttribute("viewBox", `${b3.x} ${b3.y} ${b3.w} ${b3.h}`));
  }
  viewportBox() {
    let m3 = this.metrics(), host = this.canvasEl.parentElement.getBoundingClientRect();
    return { x: (host.left - m3.left) / m3.scale, y: (host.top - m3.top) / m3.scale, width: host.width / m3.scale, height: host.height / m3.scale };
  }
  /**
   * Resizing the SVG repaints everything in it, so it only ever grows (with a generous
   * margin) while a canvas is open.
   */
  fitSvg(extra) {
    let b3 = this.svgBox, need = extra ? [extra] : [];
    for (let i3 of this.items) need.push(itemBox(i3));
    let u3 = unionBox(need);
    if (!u3 || b3 && u3.x >= b3.x && u3.y >= b3.y && u3.x + u3.width <= b3.x + b3.w && u3.y + u3.height <= b3.y + b3.h) return;
    let pad = Math.max(1500, Math.max(u3.width, u3.height) * 0.5), box = b3 ? unionBox([{ x: b3.x, y: b3.y, width: b3.w, height: b3.h }, u3]) : u3;
    this.setSvgBox({ x: box.x - pad, y: box.y - pad, width: box.width + pad * 2, height: box.height + pad * 2 });
  }
  toCanvas(e3, m3) {
    return { x: (e3.clientX - m3.left) / m3.scale, y: (e3.clientY - m3.top) / m3.scale };
  }
  hitTest(p3, r4) {
    let items = this.items, check = !this.focused;
    for (let i3 = items.length - 1; i3 >= 0; i3--)
      if (!(check && !this.itemEditable(items[i3])) && hitItem(items[i3], p3.x, p3.y, r4, this.bboxOf(items[i3])))
        return items[i3];
    return null;
  }
  // ---------- panning (Hand tool with pen or mouse) ----------
  panBy(dx, dy, e3) {
    let c3 = this.view.canvas, before = this.metrics();
    if (this.panMode !== "wheel" && c3) {
      let s3 = before.scale, tx = typeof c3.tx == "number" ? c3.tx : c3.x, ty = typeof c3.ty == "number" ? c3.ty : c3.y, tz = typeof c3.tZoom == "number" ? c3.tZoom : c3.zoom;
      if (typeof tx == "number" && typeof ty == "number") {
        let nx = tx - this.panFlip * dx / s3, ny = ty - this.panFlip * dy / s3;
        typeof c3.setViewport == "function" ? c3.setViewport(nx, ny, tz) : (c3.x = c3.tx = nx, c3.y = c3.ty = ny, typeof c3.markViewportChanged == "function" && c3.markViewportChanged(), typeof c3.requestFrame == "function" && c3.requestFrame()), this.panMode || this.verifyPan(before, dx, dy);
        return;
      }
    }
    this.panMode = "wheel", this.canvasEl.parentElement.dispatchEvent(new WheelEvent("wheel", {
      deltaX: -dx,
      deltaY: -dy,
      deltaMode: 0,
      bubbles: !0,
      cancelable: !0,
      clientX: e3 ? e3.clientX : 0,
      clientY: e3 ? e3.clientY : 0
    }));
  }
  /** First pan: check the canvas really moved (and which way); otherwise fall back to wheel events. */
  verifyPan(before, dx, dy) {
    this.panMode = "checking", requestAnimationFrame(() => requestAnimationFrame(() => {
      let after = this.metrics(), mx = after.left - before.left, my = after.top - before.top;
      Math.abs(mx) + Math.abs(my) < 0.5 ? this.panMode = "wheel" : (mx * dx + my * dy < 0 && (this.panFlip = -this.panFlip), this.panMode = "api");
    }));
  }
  // ---------- input ----------
  inUI(target) {
    return target instanceof Element ? this.ui && this.ui.contains(target) || this.textHost && this.textHost.contains(target) ? !0 : !!target.closest(".canvas-controls, .canvas-card-menu, .view-header, .menu, .modal-container") : !1;
  }
  get fingerMode() {
    return !this.settings.pencilOnly;
  }
  wantsPointer(e3) {
    return e3.pointerType === "mouse" && e3.button !== 0 ? !1 : this.unbakePick || this.tool === "picker" ? !0 : this.tool === "hand" ? e3.pointerType !== "touch" : e3.pointerType === "touch" ? this.fingerMode && !this.multiTouch : !0;
  }
  currentStyle() {
    return this.tool === "shape" ? this.state.shapeStyle : this.tool === "text" ? this.state.textStyle : this.tool === "eraser" ? this.state.eraserStyle : this.tool === "fx" ? this.state.fxStyle : this.tool === "alter" ? this.state.alterStyle : this.tool === "bucket" ? this.state.fillStyle : this.tool === "pixel" ? this.state.pixelStyle : this.state.slots[this.state.slot];
  }
  /** Tools whose style has no color (eraser, smudge/blend/blur). */
  get colorless() {
    return this.tool === "eraser" || this.tool === "fx";
  }
  sizeInfo() {
    if (this.tool === "shape") return SHAPE_SIZES;
    if (this.tool === "text") return TEXT_SIZES;
    if (this.tool === "eraser") return ERASER_SIZES;
    if (this.tool === "fx" || this.tool === "alter") return FX_SIZES;
    if (this.tool === "bucket") return FILL_SIZES;
    if (this.tool === "pixel") return PIXEL_SIZES;
    let b3 = getBrush(this.currentStyle().brush);
    return { presets: b3.presets || [2, 4, 8, 14], range: b3.range || [0.5, 100] };
  }
  beginGesture(e3) {
    var _a2, _b2, _c, _d;
    this.fitSvg(this.viewportBox());
    let m3 = this.metrics(), p3 = this.toCanvas(e3, m3), g3 = { pointerId: e3.pointerId, pointerType: e3.pointerType, m: m3, start: p3, last: p3, screen: { x: e3.clientX, y: e3.clientY } }, tool = this.tool, penErase = e3.pointerType === "pen" && (e3.button === 2 || e3.button === 5 || e3.buttons & 2 || e3.buttons & 32);
    if (penErase && tool !== "pixel" && (tool = "eraser"), this.unbakePick)
      g3.kind = "unbake";
    else if (tool === "picker")
      g3.kind = "picker";
    else if (this.pendingPainting)
      g3.kind = "placePainting", g3.live = svgEl("rect", { class: "ink-lasso", "vector-effect": "non-scaling-stroke" }), this.overlayG.appendChild(g3.live);
    else if (this.pendingBoard)
      g3.kind = "placeBoard", g3.live = svgEl("rect", { class: "ink-lasso", "vector-effect": "non-scaling-stroke" }), this.overlayG.appendChild(g3.live);
    else if (this.pendingAttach)
      g3.kind = "place", g3.live = svgEl("rect", { class: "ink-lasso", "vector-effect": "non-scaling-stroke" }), this.overlayG.appendChild(g3.live);
    else if (tool === "bucket")
      g3.kind = "bucket";
    else if (tool === "pixel")
      this.beginPixel(g3, p3, penErase);
    else if (tool === "hand")
      g3.kind = "pan";
    else if (tool === "brush") {
      let st2 = this.currentStyle(), brush = getBrush(st2.brush);
      g3.kind = "stroke", g3.brush = brush, g3.item = {
        id: uid(),
        type: "stroke",
        brush: brush.id,
        color: st2.color,
        opacity: st2.opacity,
        size: st2.size,
        pressure: e3.pointerType === "pen" && this.settings.pressure,
        seed: Math.floor(Math.random() * 2 ** 31),
        points: []
      }, brush.wet && (g3.item.wet = Math.max(0, Math.min(1, ((_a2 = st2.wetness) != null ? _a2 : 50) / 100)), st2.pigment === !1 && (g3.item.pigment = !1)), g3.smooth = new Smoother((_b2 = st2.smoothing) != null ? _b2 : 30, m3.scale), this.armQuickShape(g3, e3), brush.kind === "stamp" ? this.startLiveStamp(g3) : (g3.live = buildItemEl({ ...g3.item, points: [[p3.x, p3.y]] }, this.renderOpts(), !1), this.overlayG.appendChild(g3.live)), this.addPoints(g3, [e3]);
    } else if (tool === "eraser" && this.state.eraserMode !== "fine")
      g3.kind = "erase", g3.hits = /* @__PURE__ */ new Set(), this.eraseAlong(g3, p3, p3);
    else if (tool === "alter") {
      let st2 = this.state.alterStyle, A3 = this.state.alter, mode = A3.mode || "aggregate", brush = getBrush(st2.brush || "softround");
      brush.kind !== "stamp" && (brush = getBrush("softround")), mode === "texture" && !brush.grain && (brush = getBrush("charcoal"));
      let strength = ((_c = A3.strength) != null ? _c : 40) / 100;
      g3.kind = "stroke", g3.brush = brush, g3.item = {
        id: uid(),
        type: "stroke",
        brush: brush.id,
        color: this.resolveColor(st2.color),
        size: st2.size,
        opacity: Math.round(tintOpacity(mode, strength) * (((_d = st2.opacity) != null ? _d : 100) / 100)),
        pressure: e3.pointerType === "pen" && this.settings.pressure,
        seed: Math.floor(Math.random() * 2 ** 31),
        points: [],
        colors: [],
        alter: mode
      }, g3.tint = {
        mode,
        strength,
        rand: mulberry32(g3.item.seed),
        opts: {
          strength,
          prism: { ...A3.prism },
          texture: A3.texture || "grit",
          textureColor: this.resolveColor(A3.textureColor || st2.color),
          base: this.resolveColor(st2.color),
          addNew: !!A3.addNew
        },
        near: this.items,
        // boxes are checked first, so looking at everything stays cheap
        len: 0,
        last: null
      }, g3.smooth = new Smoother(20, m3.scale), this.startLiveStamp(g3), this.addPoints(g3, [e3]);
    } else if (tool === "eraser" || tool === "fx") {
      let st2 = tool === "eraser" ? this.state.eraserStyle : this.state.fxStyle;
      g3.kind = "fx", g3.fx = {
        kind: tool === "eraser" ? "erase" : this.state.fx,
        brush: st2.brush || (tool === "eraser" ? "hardround" : "softround"),
        size: st2.size,
        strength: st2.opacity,
        pressure: e3.pointerType === "pen" && this.settings.pressure,
        points: []
      }, this.addFxPoints(g3, [e3]), this.startLiveFx(g3);
    } else if (tool === "shape" && this.state.shape === "connector") {
      let st2 = this.state.shapeStyle;
      g3.kind = "connector", g3.item = {
        id: uid(),
        type: "connector",
        from: this.anchorAt(p3),
        to: { x: r22(p3.x), y: r22(p3.y) },
        style: this.state.connectorStyle || "curve",
        arrow: this.state.connectorArrow === void 0 ? "end" : this.state.connectorArrow,
        node: !!this.state.connectorNode,
        color: st2.color,
        opacity: st2.opacity,
        size: st2.size,
        dash: st2.dash
      };
    } else if (tool === "shape") {
      let st2 = this.state.shapeStyle, shape = this.state.shape;
      g3.kind = "shape", g3.item = {
        id: uid(),
        type: "shape",
        shape,
        x1: r22(p3.x),
        y1: r22(p3.y),
        x2: r22(p3.x),
        y2: r22(p3.y),
        color: st2.color,
        opacity: st2.opacity,
        size: st2.size,
        fill: "none",
        // fills come from the paint bucket
        rough: st2.rough,
        dash: st2.dash,
        seed: Math.floor(Math.random() * 2 ** 31)
      };
    } else if (tool === "text")
      g3.kind = "text";
    else if (tool === "select" || tool === "pointer" || tool === "transform") {
      let handle = this.selection.size ? this.handleAt(p3, m3) : null, b3 = this.selection.size ? this.selectionBox() : null, pad = 10 / m3.scale;
      if (handle && handle.kind === "scale")
        g3.kind = "scale", g3.handle = handle;
      else if (handle && handle.kind === "wrap")
        g3.kind = "wrap", g3.handle = handle, g3.text = handle.text, g3.box = this.bboxOf(handle.text);
      else if (handle && handle.kind === "rotate")
        g3.kind = "rotate", g3.cx = handle.cx, g3.cy = handle.cy, g3.a0 = Math.atan2(p3.y - handle.cy, p3.x - handle.cx), g3.deg = 0;
      else if (handle && (handle.kind === "cway" || handle.kind === "cend" || handle.kind === "cadd")) {
        g3.kind = "cnode", g3.handle = handle, g3.conn = this.selectedItems()[0];
        let now3 = Date.now();
        if (handle.kind === "cway" && this.lastNodeTap && this.lastNodeTap.index === handle.index && now3 - this.lastNodeTap.at < 450) {
          this.lastNodeTap = null;
          let id = g3.conn.id, ways = (g3.conn.waypoints || []).filter((w3, i3) => i3 !== handle.index);
          this.commit((items) => items.map((i3) => i3.id === id ? { ...i3, waypoints: ways } : i3)), this.renderSelection(), new import_obsidian3.Notice("Removed that bend."), g3.kind = "none";
          return;
        }
        if (handle.kind === "cway" && (this.lastNodeTap = { index: handle.index, at: now3 }), handle.kind === "cadd") {
          let ways = [...g3.conn.waypoints || []];
          ways.splice(handle.index, 0, [r22(p3.x), r22(p3.y)]), g3.conn = { ...g3.conn, waypoints: ways }, g3.handle = { kind: "cway", index: handle.index, x: p3.x, y: p3.y };
        }
      } else if (handle && handle.kind === "end")
        g3.kind = "end", g3.handle = handle, g3.shape = this.soloShape();
      else if (b3 && p3.x >= b3.x - pad && p3.x <= b3.x + b3.width + pad && p3.y >= b3.y - pad && p3.y <= b3.y + b3.height + pad && !((this.state.multiSelect || e3 && e3.shiftKey) && this.hitTest(p3, 8 / m3.scale)))
        g3.kind = "move";
      else if (tool === "pointer" && this.holdMenuFor(p3))
        g3.kind = "hold", g3.holdItem = this.holdMenuFor(p3), clearTimeout(this.holdMenuTimer), this.holdMenuTimer = setTimeout(() => {
          this.gesture === g3 && !g3.moved && (this.openItemMenu(g3.holdItem), this.cancelGesture());
        }, 500);
      else {
        let hit = this.hitTest(p3, 8 / m3.scale), additive = this.state.multiSelect || e3 && e3.shiftKey;
        if (hit && additive) {
          let id = hit.inShape && this.items.some((i3) => i3.id === hit.inShape) ? hit.inShape : hit.id, next = new Set(this.selection);
          if (next.has(id)) for (let x3 of this.withBoundText([id])) next.delete(x3);
          else for (let x3 of this.withBoundText([id])) next.add(x3);
          this.selection = next, g3.kind = next.has(id) ? "move" : "none";
        } else hit ? (this.selection = this.withBoundText([hit.inShape && this.items.some((i3) => i3.id === hit.inShape) ? hit.inShape : hit.id]), g3.kind = "move", hit.type === "board" && tool === "pointer" && (g3.tapBoard = hit)) : (additive || this.selection.clear(), g3.additive = additive, g3.kind = tool === "select" ? "lasso" : "marquee", g3.points = [[p3.x, p3.y]], g3.live = svgEl(tool === "select" ? "path" : "rect", { class: "ink-lasso", "vector-effect": "non-scaling-stroke" }), this.overlayG.appendChild(g3.live));
        this.renderSelection(), this.updateUI();
      }
      g3.dx = 0, g3.dy = 0;
    }
    this.gesture = g3, window.addEventListener("pointermove", this.onMove, !0), window.addEventListener("pointerup", this.onUp, !0), window.addEventListener("pointercancel", this.onUp, !0);
  }
  // --- live textured strokes: painted on a screen canvas, then rasterized into the SVG ---
  startLiveStamp(g3) {
    var _a2, _b2, _c;
    let hr = this.ui.getBoundingClientRect(), dpr = DPR(), make = () => {
      let c3 = document.createElement("canvas");
      return c3.width = Math.max(1, Math.round(hr.width * dpr)), c3.height = Math.max(1, Math.round(hr.height * dpr)), c3;
    }, visible = make();
    visible.className = "ink-live-canvas", visible.style.opacity = String(((_a2 = g3.item.opacity) != null ? _a2 : 100) / 100 * ((_b2 = g3.brush.opacityMult) != null ? _b2 : 1)), g3.brush.blend && g3.brush.blend !== "normal" && (visible.style.mixBlendMode = g3.brush.blend), this.ui.prepend(visible);
    let hasGrain = !!g3.brush.grain && ((_c = g3.brush.grainDepth) != null ? _c : 1) > 0, acc = hasGrain ? make() : visible;
    g3.stamp = {
      visible,
      acc,
      hasGrain,
      ctx: acc.getContext("2d"),
      walker: new DabWalker(g3.item, g3.brush),
      color: this.resolveColor(g3.item.color),
      k: g3.m.scale * dpr,
      ox: (hr.left - g3.m.left) / g3.m.scale,
      oy: (hr.top - g3.m.top) / g3.m.scale
    }, brushReady(g3.brush);
  }
  /** QuickShape: hold the pen still at the end of a stroke to turn it into a perfect shape. */
  armQuickShape(g3, e3) {
    if (g3.quick || this.settings.quickShape !== !0) return;
    let at2 = { x: e3.clientX, y: e3.clientY };
    g3.holdAt && Math.hypot(at2.x - g3.holdAt.x, at2.y - g3.holdAt.y) < 6 || (g3.holdAt = at2, clearTimeout(g3.holdTimer), g3.holdTimer = setTimeout(() => this.quickShape(g3), this.settings.quickShapeDelay || 500));
  }
  /**
   * An arrowhead drawn as its own stroke on the end of a line nearby: hold and the two
   * become one clean arrow. (Drawing the head after the line has already snapped is the
   * usual way this happens.)
   */
  arrowFromNeighbour(g3) {
    let pts = g3.rawPts && g3.rawPts.length > 3 ? g3.rawPts : g3.item.points;
    if (!pts || pts.length < 3) return null;
    let scale = g3.m.scale, headLen = 0;
    for (let i3 = 1; i3 < pts.length; i3++) headLen += Math.hypot(pts[i3][0] - pts[i3 - 1][0], pts[i3][1] - pts[i3 - 1][1]);
    if (headLen * scale < 12) return null;
    let start = pts[0];
    for (let i3 = this.items.length - 1, seen = 0; i3 >= 0 && seen < 8; i3--) {
      let it = this.items[i3];
      if (it.type !== "stroke" || it.closed) continue;
      seen++;
      let P3 = it.points, a3 = P3[0], b3 = P3[P3.length - 1], len = Math.hypot(b3[0] - a3[0], b3[1] - a3[1]);
      if (len < headLen * 1.8) continue;
      let dev = 0;
      for (let p3 of P3) dev = Math.max(dev, distToSeg(p3[0], p3[1], a3[0], a3[1], b3[0], b3[1]));
      if (!(dev > Math.max(0.1 * len, 5 / scale)))
        for (let [tip, tail] of [[b3, a3], [a3, b3]]) {
          if (Math.hypot(start[0] - tip[0], start[1] - tip[1]) > Math.max(34 / scale, 0.3 * len)) continue;
          let shaftAng = Math.atan2(tip[1] - tail[1], tip[0] - tail[0]), spread = 0, back = 0;
          for (let p3 of pts) {
            let d3 = Math.hypot(p3[0] - tip[0], p3[1] - tip[1]);
            d3 > spread && (spread = d3);
            let ang = Math.atan2(p3[1] - tip[1], p3[0] - tip[0]);
            Math.abs((ang - shaftAng + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI) > 70 && (back = Math.max(back, d3));
          }
          if (!(spread > 0.6 * len || back < Math.max(10 / scale, spread * 0.5)))
            return { line: it, a: tail, tip, barb: Math.min(Math.max(spread, len * 0.08), len * 0.3) };
        }
    }
    return null;
  }
  quickShape(g3) {
    var _a2;
    if (this.gesture !== g3 || g3.quick || g3.kind !== "stroke") return;
    let join = this.arrowFromNeighbour(g3);
    if (join) {
      g3.quick = "arrow", g3.mergeId = join.line.id;
      let ps2 = g3.item.points.filter((p3) => p3.length > 2).map((p3) => p3[2]);
      g3.quickP = Math.round((ps2.length ? ps2.reduce((x3, y3) => x3 + y3, 0) / ps2.length : 0.5) * 1e3) / 1e3;
      let step = Math.max(0.5, 2 / g3.m.scale);
      if (g3.quickBase = { kind: "arrow", points: makeArrow(join.a, join.tip, join.barb, step), anchor: join.a, arrow: { a: join.a, tip: join.tip, barb: join.barb }, pen0: g3.pen ? [g3.pen.x, g3.pen.y] : join.tip }, this.setQuickPoints(g3, g3.quickBase.points), (_a2 = this.idEl.get(join.line.id)) == null || _a2.setAttribute("visibility", "hidden"), this.repaintQuick(g3), this.showSnapLabel("arrow", g3.pen || { x: join.tip[0], y: join.tip[1] }), navigator.vibrate) try {
        navigator.vibrate(12);
      } catch {
      }
      return;
    }
    let shape = recognizeShape(g3.rawPts && g3.rawPts.length > 5 ? g3.rawPts : g3.item.points, g3.m.scale);
    if (!shape) {
      (g3.quickTries = (g3.quickTries || 0) + 1) < 8 && (g3.holdTimer = setTimeout(() => this.quickShape(g3), 300));
      return;
    }
    g3.quick = shape.kind, shape.closed ? g3.item.closed = !0 : delete g3.item.closed;
    let ps = g3.item.points.filter((p3) => p3.length > 2).map((p3) => p3[2]);
    g3.quickP = Math.round((ps.length ? ps.reduce((a3, b3) => a3 + b3, 0) / ps.length : 0.5) * 1e3) / 1e3;
    let pts = shape.points, anchor;
    if (shape.closed) {
      let x0 = 1 / 0, y0 = 1 / 0, x1 = -1 / 0, y1 = -1 / 0;
      for (let [x3, y3] of pts)
        x0 = Math.min(x0, x3), y0 = Math.min(y0, y3), x1 = Math.max(x1, x3), y1 = Math.max(y1, y3);
      anchor = [(x0 + x1) / 2, (y0 + y1) / 2];
    } else anchor = pts[0];
    if (g3.quickBase = { kind: shape.kind, points: pts, anchor, arrow: shape.arrow, pen0: g3.pen ? [g3.pen.x, g3.pen.y] : pts[pts.length - 1] }, this.setQuickPoints(g3, pts), this.repaintQuick(g3), this.showSnapLabel(shape.kind, g3.pen || { x: pts[pts.length - 1][0], y: pts[pts.length - 1][1] }), navigator.vibrate) try {
      navigator.vibrate(12);
    } catch {
    }
  }
  /** Brief note of what a stroke snapped to, so it's clear QuickShape fired. */
  showSnapLabel(kind, at2) {
    if (!this.ui) return;
    let m3 = this.metrics(), host = this.ui.getBoundingClientRect(), el = this.ui.createDiv({ cls: "ink-snap-label", text: kind.charAt(0).toUpperCase() + kind.slice(1) });
    el.style.left = `${m3.left + at2.x * m3.scale - host.left}px`, el.style.top = `${m3.top + at2.y * m3.scale - host.top - 34}px`, setTimeout(() => el.remove(), 1100);
  }
  setQuickPoints(g3, pts) {
    g3.item.points = pts.map(([x3, y3]) => g3.item.pressure ? [r22(x3), r22(y3), g3.quickP] : [r22(x3), r22(y3)]);
  }
  /** Pen moved while holding a snapped shape. */
  adjustQuick(g3, pen) {
    let B2 = g3.quickBase;
    if (B2) {
      if (B2.kind === "arrow") {
        let a3 = B2.arrow.a, len0 = Math.hypot(B2.arrow.tip[0] - a3[0], B2.arrow.tip[1] - a3[1]) || 1, len = Math.hypot(pen.x - a3[0], pen.y - a3[1]);
        this.setQuickPoints(g3, makeArrow(a3, [pen.x, pen.y], B2.arrow.barb / len0 * len, Math.max(0.5, 2 / g3.m.scale))), g3.quickDirty = !0;
        return;
      }
      if (B2.kind === "line") {
        let a3 = B2.points[0], len = Math.hypot(pen.x - a3[0], pen.y - a3[1]), n3 = Math.max(2, Math.ceil(len / Math.max(0.5, 2 / g3.m.scale))), pts = [];
        for (let i3 = 0; i3 <= n3; i3++) pts.push([a3[0] + (pen.x - a3[0]) * i3 / n3, a3[1] + (pen.y - a3[1]) * i3 / n3]);
        this.setQuickPoints(g3, pts);
      } else {
        let [ax, ay] = B2.anchor, v0x = B2.pen0[0] - ax, v0y = B2.pen0[1] - ay, v1x = pen.x - ax, v1y = pen.y - ay, l0 = Math.hypot(v0x, v0y);
        if (l0 * g3.m.scale < 6) return;
        let sc = Math.max(0.05, Math.min(20, Math.hypot(v1x, v1y) / l0)), rot = Math.atan2(v1y, v1x) - Math.atan2(v0y, v0x), c3 = Math.cos(rot) * sc, s3 = Math.sin(rot) * sc;
        this.setQuickPoints(g3, B2.points.map(([x3, y3]) => [ax + (x3 - ax) * c3 - (y3 - ay) * s3, ay + (x3 - ax) * s3 + (y3 - ay) * c3]));
      }
      g3.quickDirty = !0;
    }
  }
  repaintQuick(g3) {
    if (g3.quickDirty = !1, g3.stamp) {
      let s3 = g3.stamp;
      s3.ctx.clearRect(0, 0, s3.acc.width, s3.acc.height), s3.hasGrain && s3.visible.getContext("2d").clearRect(0, 0, s3.visible.width, s3.visible.height), s3.walker = new DabWalker(g3.item, g3.brush);
      for (let p3 of g3.item.points) {
        let dabs = s3.walker.feed(p3);
        dabs.length && (drawDabs(s3.ctx, dabs, g3.brush, s3.color, s3.k, s3.ox, s3.oy), s3.dabCount = (s3.dabCount || 0) + dabs.length);
      }
      s3.dirty = !0, this.compositeLive(g3);
    } else g3.live && updateStrokeEl(g3.live, g3.item, this.renderOpts(), !0);
  }
  compositeLive(g3) {
    let s3 = g3.stamp;
    if (!s3 || !s3.hasGrain || !s3.dirty) return;
    s3.dirty = !1;
    let ctx = s3.visible.getContext("2d");
    ctx.clearRect(0, 0, s3.visible.width, s3.visible.height), ctx.drawImage(s3.acc, 0, 0), applyGrain(ctx, g3.brush, s3.k, s3.ox, s3.oy, s3.visible.width, s3.visible.height);
  }
  addPoints(g3, evs) {
    if (g3.quick) return;
    let pts = g3.item.points;
    for (let rawEv of evs) {
      let raw = this.toCanvas(rawEv, g3.m);
      g3.pen = raw, (g3.rawPts || (g3.rawPts = [])).push([raw.x, raw.y]);
      let sp = g3.smooth ? g3.smooth.push(raw.x, raw.y, rawEv.pressure || 0.5) : [raw.x, raw.y, rawEv.pressure || 0.5], p3 = { x: sp[0], y: sp[1] }, ev = { pressure: sp[2] }, last = pts[pts.length - 1];
      if (last && Math.hypot(p3.x - last[0], p3.y - last[1]) < 0.5 / g3.m.scale) continue;
      let pt = g3.item.pressure ? [r22(p3.x), r22(p3.y), Math.round(Math.min(1, Math.max(0.05, ev.pressure || 0.5)) * 1e3) / 1e3] : [r22(p3.x), r22(p3.y)];
      pts.push(pt);
      let col = null;
      if (g3.tint && (col = this.tintAt(g3, pt), g3.item.colors.push(col)), g3.stamp) {
        let dabs = g3.stamp.walker.feed(pt);
        dabs.length && (!g3.tint || col) && (drawDabs(g3.stamp.ctx, dabs, g3.brush, g3.tint ? col : g3.stamp.color, g3.stamp.k, g3.stamp.ox, g3.stamp.oy), g3.stamp.dabCount = (g3.stamp.dabCount || 0) + dabs.length, g3.stamp.dirty = !0);
      }
    }
  }
  /**
   * Live effects: paint what's on screen into a working canvas, hide the originals, and run
   * the effect on it as you draw. On release the real result replaces it.
   */
  /**
   * Live effects. Only ink the brush actually reaches is copied into a full-resolution working
   * canvas (and hidden from the SVG meanwhile); everything else stays as it is.
   */
  startLiveFx(g3) {
    let hr = this.ui.getBoundingClientRect(), dpr = DPR(), m3 = g3.m, W2 = Math.max(1, Math.round(hr.width * dpr)), H2 = Math.max(1, Math.round(hr.height * dpr)), k3 = m3.scale * dpr, ox = (hr.left - m3.left) / m3.scale, oy = (hr.top - m3.top) / m3.scale, view = { x: ox, y: oy, width: hr.width / m3.scale, height: hr.height / m3.scale }, opts = this.renderOpts(), L3 = g3.fxLive = {
      k: k3,
      ox,
      oy,
      W: W2,
      H: H2,
      env: { resolveColor: opts.resolveColor, streamline: opts.streamline, key: opts.resolveColor("auto") },
      candidates: [],
      boxes: /* @__PURE__ */ new Map(),
      index: /* @__PURE__ */ new Map(),
      imgs: /* @__PURE__ */ new Map(),
      touched: /* @__PURE__ */ new Set(),
      maxIdx: -1,
      reach: g3.fx.size * 0.75 + 4
      // brush radius plus the blur's reach
    };
    this.items.forEach((it, i3) => {
      if (!fxTouchable(it)) return;
      let b3 = this.bboxOf(it) || itemBox(it);
      if (!boxesTouch(b3, view)) return;
      L3.candidates.push(it), L3.boxes.set(it, b3), L3.index.set(it, i3);
      let el = this.idEl.get(it.id);
      if (isRaster(it) && el && el._url) {
        let im = new Image();
        im.onload = () => L3.imgs.set(it, im), im.src = el._url;
      }
    });
    let work = document.createElement("canvas");
    work.width = W2, work.height = H2, L3.ctx = work.getContext("2d", { willReadFrequently: !0 });
    let shown = document.createElement("canvas");
    shown.width = W2, shown.height = H2, shown.className = "ink-live-canvas", this.ui.prepend(shown), g3.hidden = [], g3.shown = shown, g3.shownAt = { left: m3.left, top: m3.top, scale: m3.scale, ox, oy }, g3.runner = new FxRunner(g3.fx, L3.ctx, W2, H2, k3, ox, oy);
    for (let p3 of g3.fx.points) this.reachAround(g3, p3);
    this.pumpLiveFx(g3);
  }
  /** Bring any ink near point p into the working canvas. */
  reachAround(g3, p3) {
    let L3 = g3.fxLive;
    if (!L3) return;
    let r4 = L3.reach, box = { x: p3[0] - r4, y: p3[1] - r4, width: r4 * 2, height: r4 * 2 };
    for (let it of L3.candidates) {
      if (L3.touched.has(it) || !boxesTouch(L3.boxes.get(it), box) || !this.copyToLive(g3, it)) continue;
      L3.touched.add(it);
      let el = this.idEl.get(it.id);
      el && (el.style.visibility = "hidden", g3.hidden.push(el)), g3.runner.dirty = !0;
    }
  }
  copyToLive(g3, it) {
    let L3 = g3.fxLive, ctx = L3.ctx, idx = L3.index.get(it);
    ctx.save(), idx < L3.maxIdx && (ctx.globalCompositeOperation = "destination-over"), L3.maxIdx = Math.max(L3.maxIdx, idx);
    let ok = !0;
    try {
      if (isRaster(it)) {
        let el = this.idEl.get(it.id), img = el && el.querySelector("image");
        if (!img) ok = !1;
        else {
          let x3 = +img.getAttribute("x"), y3 = +img.getAttribute("y"), w3 = +img.getAttribute("width"), h3 = +img.getAttribute("height");
          ctx.globalAlpha = itemOpacity(it);
          let blend = it.type === "stroke" ? brushFor(it).blend : null;
          blend && blend !== "normal" && ctx.globalCompositeOperation === "source-over" && (ctx.globalCompositeOperation = blend);
          let src = L3.imgs.get(it) || img;
          ctx.drawImage(src, (x3 - L3.ox) * L3.k, (y3 - L3.oy) * L3.k, w3 * L3.k, h3 * L3.k);
        }
      } else
        drawItem(ctx, it, L3.k, L3.ox, L3.oy, L3.env);
    } catch {
      ok = !1;
    }
    return ctx.restore(), ok;
  }
  /** Apply queued effect dabs a few milliseconds per frame, so the pen never waits. */
  pumpLiveFx(g3) {
    if (g3.fxRaf) return;
    let step = () => {
      if (g3.fxRaf = 0, this.gesture !== g3 || !g3.runner || !g3.shown) return;
      let done = g3.runner.catchUpBudget(9);
      g3.runner.dirty && (g3.runner.dirty = !1, g3.runner.present(g3.shown.getContext("2d"))), done || (g3.fxRaf = requestAnimationFrame(step));
    };
    g3.fxRaf = requestAnimationFrame(step);
  }
  /** The color of the ink at a point: whatever's on top there (null over empty canvas). */
  colorUnder(p3, items, tol) {
    let pick = (it) => {
      if (!(it.type === "connector" || it.type === "board" || it.type === "image") && hitItem(it, p3.x, p3.y, tol, this.bboxOf(it) || itemBox(it))) {
        if (it.type === "group") {
          for (let i3 = it.items.length - 1; i3 >= 0; i3--) {
            let c3 = pick(it.items[i3]);
            if (c3) return c3;
          }
          return;
        }
        if (it.type === "pixels") {
          let cell = cellAt(it, p3.x, p3.y), c3 = cell && it.cells[cell[1] * it.cols + cell[0]];
          return c3 ? this.resolveColor(c3.length === 9 ? c3.slice(0, 7) : c3) : void 0;
        }
        if (it.type === "stroke" && it.colors) {
          let best = -1, bd = 1 / 0;
          return it.points.forEach((q2, i3) => {
            let d3 = (q2[0] - p3.x) ** 2 + (q2[1] - p3.y) ** 2;
            it.colors[i3] && d3 < bd && (bd = d3, best = i3);
          }), best >= 0 ? it.colors[best] : void 0;
        }
        return it.color ? this.resolveColor(it.color) : void 0;
      }
    };
    for (let i3 = items.length - 1; i3 >= 0; i3--) {
      let c3 = pick(items[i3]);
      if (c3) return c3;
    }
    return null;
  }
  /** The color an Alter stroke paints at this point. */
  tintAt(g3, pt) {
    let T3 = g3.tint, p3 = { x: pt[0], y: pt[1] };
    T3.last && (T3.len += Math.hypot(p3.x - T3.last.x, p3.y - T3.last.y)), T3.last = p3;
    let size = g3.item.size, under = this.colorUnder(p3, T3.near, Math.max(1.5, size * 0.3)), moved = T3.lastStep ? Math.hypot(p3.x - T3.lastStep.x, p3.y - T3.lastStep.y) / size : 1;
    T3.lastStep = p3, T3.walk = stepWalk(T3.walk || { l: T3.rand() * 2 - 1, s: T3.rand() * 2 - 1, h: T3.rand() * 2 - 1 }, T3.rand, moved);
    let o3 = { ...T3.opts, progress: Math.min(1, T3.len / (size * 25)), walk: T3.walk };
    if (T3.mode === "soften" || T3.mode === "aggregate" && T3.opts.prism.mode === "nearby") {
      let ring = [];
      for (let i3 = 0; i3 < 6; i3++) {
        let a3 = i3 / 6 * Math.PI * 2 + T3.rand() * 0.5;
        ring.push(this.colorUnder({ x: p3.x + Math.cos(a3) * size * 0.6, y: p3.y + Math.sin(a3) * size * 0.6 }, T3.near, 1));
      }
      T3.mode === "soften" ? o3.blend = averageColor([under, ...ring]) : o3.nearby = ring[Math.floor(T3.rand() * ring.length)];
    }
    return tintColor(under, T3.mode, o3, T3.rand);
  }
  /** Move and scale a finished preview with the canvas until it's replaced. */
  followShown(g3) {
    let shown = g3.shown, at2 = g3.shownAt, step = () => {
      if (!g3.shown || g3.shown !== shown || !shown.isConnected) return;
      let m3 = this.metrics(), f3 = m3.scale / at2.scale, ox = at2.ox, oy = at2.oy, tx = m3.left + ox * m3.scale - (at2.left + ox * at2.scale), ty = m3.top + oy * m3.scale - (at2.top + oy * at2.scale);
      shown.style.transformOrigin = "0 0", shown.style.transform = `translate(${tx}px, ${ty}px) scale(${f3})`, requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  endLiveFx(g3) {
    g3.shown && g3.shown.remove(), g3.hidden && g3.hidden.forEach((el) => el.style.visibility = ""), g3.shown = null, g3.hidden = null;
  }
  addFxPoints(g3, evs) {
    let pts = g3.fx.points;
    for (let ev of evs) {
      let p3 = this.toCanvas(ev, g3.m), last = pts[pts.length - 1];
      if (last && Math.hypot(p3.x - last[0], p3.y - last[1]) < 0.5 / g3.m.scale) continue;
      let pt = g3.fx.pressure ? [r22(p3.x), r22(p3.y), Math.round(Math.min(1, Math.max(0.05, ev.pressure || 0.5)) * 1e3) / 1e3] : [r22(p3.x), r22(p3.y)];
      pts.push(pt), g3.fxLive && this.reachAround(g3, pt);
    }
  }
  /**
   * Apply a pixel effect (smudge, blend, blur or fine erase). Everything it touches becomes
   * one group; repeated effects on the same group just extend it.
   */
  applyEffect(fx, live) {
    let done = () => live && this.endLiveFx(live);
    if (!fx.points.length) return done();
    let r4 = fx.size / 2, step = Math.max(1, Math.floor(fx.points.length / 200)), box = fxBox(fx), hits = this.items.filter((it) => {
      if (!fxTouchable(it)) return !1;
      let b3 = this.bboxOf(it) || itemBox(it);
      if (!boxesTouch(b3, box)) return !1;
      for (let i3 = 0; i3 < fx.points.length; i3 += step) if (hitItem(it, fx.points[i3][0], fx.points[i3][1], r4, b3)) return !0;
      return !1;
    });
    if (!hits.length) return done();
    {
      let idx = new Map(this.items.map((it, i3) => [it.id, i3])), hitIdx = hits.map((h3) => idx.get(h3.id)).sort((a3, b3) => b3 - a3), reach = unionBox([...hits.map((h3) => this.bboxOf(h3) || itemBox(h3)), fxBox(fx)]), keep = [], inHits = new Set(hits.map((h3) => h3.id));
      for (let i3 = hitIdx[0]; i3 >= hitIdx[hitIdx.length - 1]; i3--) {
        let it = this.items[i3];
        if (inHits.has(it.id)) {
          keep.push(it);
          continue;
        }
        let b3 = this.bboxOf(it) || itemBox(it);
        if (!(!b3 || !boxesTouch(b3, reach)))
          if (fxTouchable(it)) keep.push(it);
          else break;
      }
      hits.length = 0, hits.push(...keep.reverse());
    }
    let group;
    if (hits.length === 1 && hits[0].type === "group") {
      let prev = hits[0];
      group = { ...prev, id: uid(), fx: [...prev.fx, fx] }, markDerived(group, prev);
    } else
      group = { id: uid(), type: "group", items: hits, fx: [fx] };
    let ids = new Set(hits.map((h3) => h3.id)), last = Math.max(...hits.map((h3) => this.items.indexOf(h3))), gBox = unionBox(hits.map((h3) => this.edgeBox(h3))), moved = this.reanchorEnds(this.items.filter((i3) => i3.type === "connector"), ids, group.id, gBox), ghosts = live && live.shown ? [] : hits.map((h3) => this.idEl.get(h3.id)).filter(Boolean).map((el2) => el2.cloneNode(!0));
    ghosts.forEach((el2) => this.overlayG.prepend(el2)), this.commit((all) => {
      let out = [];
      return all.forEach((it, i3) => {
        i3 === last ? out.push(group) : ids.has(it.id) || out.push(moved.get(it.id) || it);
      }), out;
    });
    let el = this.idEl.get(group.id);
    live && live.shown && live.shownAt && this.followShown(live);
    let drop = () => {
      ghosts.forEach((gh) => gh.remove()), done();
    };
    el && el._ready ? el._ready.then(drop, drop) : drop();
  }
  eraseAlong(g3, a3, b3) {
    let r4 = this.state.eraserStyle.size / 2, steps = Math.max(1, Math.ceil(Math.hypot(b3.x - a3.x, b3.y - a3.y) / (r4 * 0.6))), items = this.items;
    for (let s3 = 0; s3 <= steps; s3++) {
      let x3 = a3.x + (b3.x - a3.x) * s3 / steps, y3 = a3.y + (b3.y - a3.y) * s3 / steps;
      for (let it of items)
        if (!g3.hits.has(it.id) && hitItem(it, x3, y3, r4, this.bboxOf(it))) {
          g3.hits.add(it.id);
          let el = this.idEl.get(it.id);
          el && el.classList.add("ink-erasing");
        }
    }
  }
  /** Cards can be moved by the canvas itself, so keep connectors attached to them in step. */
  followCards() {
    let conns = this.items.filter((i3) => i3.type === "connector" && (i3.from && i3.from.node || i3.to && i3.to.node));
    if (!conns.length) return;
    let changed = !1, seen = /* @__PURE__ */ new Map();
    for (let c3 of conns)
      for (let end of [c3.from, c3.to]) {
        if (!end || !end.node || seen.has(end.node)) continue;
        let b3 = this.nodeBox(end.node);
        seen.set(end.node, b3);
        let was = this.cardBoxes && this.cardBoxes.get(end.node);
        (!b3 || !was || b3.x !== was.x || b3.y !== was.y || b3.width !== was.width || b3.height !== was.height) && (changed = !0);
      }
    if (this.cardBoxes = seen, !changed) return;
    let opts = this.renderOpts();
    for (let c3 of conns) {
      let el = this.idEl.get(c3.id);
      el && el.replaceChildren(...connectorEls(c3, opts));
    }
  }
  /** Redraw connectors attached to whatever is being dragged, so they follow in real time. */
  liveConnectors(move) {
    let conns = this.items.filter((i3) => i3.type === "connector" && (i3.from && i3.from.id && this.selection.has(i3.from.id) || i3.to && i3.to.id && this.selection.has(i3.to.id)));
    if (!conns.length) return;
    let lookup = (id) => this.items.find((i3) => i3.id === id), boxOf = (it) => {
      let b3 = this.edgeBox(it);
      return b3 && this.selection.has(it.id) ? move(b3) : b3;
    }, nodeBox = (id) => this.nodeBox(id);
    for (let c3 of conns) {
      let el = this.idEl.get(c3.id);
      el && el.replaceChildren(...connectorEls(c3, { lookup, boxOf, nodeBox }));
    }
  }
  /** Selected elements gathered under one <g> while dragging (one transform per frame). */
  dragGroup() {
    if (this.moveG && this.moveG.isConnected) return this.moveG;
    let mg = this.moveG = svgEl("g", { class: "ink-dragging" }), els = this.items.filter((i3) => this.selection.has(i3.id)).map((i3) => this.idEl.get(i3.id)).filter(Boolean);
    this.itemsG.appendChild(mg);
    for (let el of els) mg.appendChild(el);
    return mg;
  }
  /** Put dragged elements back in their place (no change was made). */
  dropDragGroup() {
    if (!this.moveG) return;
    let mg = this.moveG;
    this.moveG = null;
    for (let el of [...mg.childNodes]) this.itemsG.appendChild(el);
    mg.remove(), this.render();
  }
  selectInPolygon(poly) {
    let sel = /* @__PURE__ */ new Set();
    if (poly.length > 2 && Math.abs(poly[0][0] - poly[2][0]) + Math.abs(poly[0][1] - poly[2][1]) > 0.5)
      for (let it of this.items) {
        if (!this.focused && !this.itemEditable(it)) continue;
        let pts = samplePoints(it, this.bboxOf(it));
        if (!pts.length) continue;
        let inside = 0;
        for (let q2 of pts) pointInPolygon(q2[0], q2[1], poly) && inside++;
        inside / pts.length >= 0.5 && sel.add(it.inShape && this.items.some((i3) => i3.id === it.inShape) ? it.inShape : it.id);
      }
    return this.withBoundText(sel);
  }
  endListeners() {
    window.removeEventListener("pointermove", this.onMove, !0), window.removeEventListener("pointerup", this.onUp, !0), window.removeEventListener("pointercancel", this.onUp, !0);
  }
  cancelGesture() {
    var _a2, _b2, _c, _d, _e;
    let g3 = this.gesture;
    if (g3) {
      if (this.endListeners(), this.raf && cancelAnimationFrame(this.raf), this.raf = 0, this.gesture = null, g3.live && g3.live.remove(), g3.stamp && g3.stamp.visible.remove(), clearTimeout(g3.holdTimer), g3.mergeId && ((_a2 = this.idEl.get(g3.mergeId)) == null || _a2.removeAttribute("visibility")), g3.kind === "pixel" && ((_b2 = this.idEl.get(g3.pix.id)) == null || _b2.removeAttribute("visibility")), g3.kind === "fx" && (g3.fxRaf && cancelAnimationFrame(g3.fxRaf), this.endLiveFx(g3)), g3.kind === "end" && ((_c = this.idEl.get(g3.shape.id)) == null || _c.removeAttribute("visibility")), g3.kind === "wrap" && ((_d = this.idEl.get(g3.text.id)) == null || _d.removeAttribute("visibility")), g3.kind === "scale" && this.renderSelection(), g3.kind === "erase") for (let id of g3.hits) (_e = this.idEl.get(id)) == null || _e.classList.remove("ink-erasing");
      (g3.kind === "move" || g3.kind === "scale") && this.dropDragGroup();
    }
  }
  // ---------- text ----------
  /**
   * The text editor lives outside the canvas's touch area (so stylus handwriting works and
   * panning stays smooth), follows the canvas while you pan or zoom, and has its own small
   * bar for font, size and color so those stay reachable when the keyboard is up.
   */
  openTextEditor(p3, existing, inShape = null) {
    var _a2;
    let st2 = this.state.textStyle, shape = inShape || (existing && existing.inShape ? this.items.find((i3) => i3.id === existing.inShape) : null), sbox = shape ? shapeTextBox(shape) : null, item = { ...existing || {
      id: uid(),
      type: "text",
      x: r22(sbox ? sbox.x : p3.x),
      y: r22(sbox ? sbox.y : p3.y),
      text: "",
      color: st2.color,
      opacity: st2.opacity,
      fontSize: st2.size,
      font: st2.font,
      ...st2.paint && st2.paint.kind && st2.paint.kind !== "solid" ? { paint: { ...st2.paint } } : {},
      ...st2.effects && st2.effects.length ? { effects: st2.effects.map((e3) => ({ ...e3 })) } : {},
      ...shape ? { inShape: shape.id } : {}
    } };
    if (!this.textHost || !this.textHost.isConnected) {
      getComputedStyle(this.view.contentEl).position === "static" && (this.view.contentEl.style.position = "relative"), this.textHost = this.view.contentEl.createDiv({ cls: "ink-text-host" });
      for (let t3 of ["pointerdown", "mousedown", "touchstart", "wheel", "contextmenu"]) this.textHost.addEventListener(t3, (e3) => e3.stopPropagation());
    }
    let fxLayer = this.textHost.createDiv({ cls: "ink-text-fxlayer" + (shape ? " is-in-shape" : "") + (item.wrap ? " is-wrapped" : "") }), ta = this.textHost.createEl("textarea", { cls: "ink-text-editor" + (shape ? " is-in-shape" : "") + (item.wrap ? " is-wrapped" : ""), attr: { rows: "1", spellcheck: "true", autocapitalize: "sentences" } });
    ta.value = item.text;
    let bar = this.buildTextBar(), te2 = this.textEdit = { ta, fxLayer, bar, item, existing, shape, sbox };
    this.view.contentEl.addClass("ink-typing"), ta.addEventListener("input", () => this.placeTextEditor()), ta.addEventListener("keydown", (e3) => {
      e3.stopPropagation(), (e3.key === "Escape" || e3.key === "Enter" && (e3.metaKey || e3.ctrlKey)) && (e3.preventDefault(), this.closeTextEditor(!0));
    }), ta.addEventListener("blur", () => setTimeout(() => {
      if (this.textEdit !== te2) return;
      let a3 = document.activeElement;
      this.popKind || a3 && (bar.contains(a3) || this.pop.contains(a3)) || this.closeTextEditor(!0);
    }, 0)), existing && ((_a2 = this.idEl.get(existing.id)) == null || _a2.classList.add("is-editing")), this.styleTextEditor(), this.placeTextEditor(), ta.focus();
    let follow = () => {
      this.textEdit === te2 && (this.placeTextEditor(), te2.raf = requestAnimationFrame(follow));
    };
    te2.raf = requestAnimationFrame(follow);
  }
  buildTextBar() {
    let bar = this.textHost.createDiv({ cls: "ink-textbar" }), keep = (el) => el.addEventListener("pointerdown", (e3) => e3.preventDefault()), btn = (icon, label, fn) => {
      let b3 = this.iconBtn(bar, icon, label, fn);
      return keep(b3), b3;
    };
    return this.textFontBtn = bar.createEl("button", { cls: "ink-btn ink-textbar-font", attr: { type: "button", "aria-label": "Font" } }), keep(this.textFontBtn), this.textFontBtn.addEventListener("click", () => this.togglePop("fonts", this.textFontBtn)), btn("minus", "Smaller", () => this.stepTextSize(-1)), this.textSizeLabel = bar.createSpan({ cls: "ink-textbar-size" }), btn("plus", "Larger", () => this.stepTextSize(1)), this.textColorBtn = bar.createEl("button", { cls: "ink-color-btn ink-textbar-color", attr: { type: "button", "aria-label": "Color" } }), keep(this.textColorBtn), this.textColorBtn.addEventListener("click", () => this.togglePop("color", this.textColorBtn)), this.textFillBtn = btn("paintbrush", "Gradient or texture fill", () => this.togglePop("textfill", this.textFillBtn)), this.textFxBtn = btn("sparkles", "Effects: outline, shadow, glow, emboss, 3D", () => this.togglePop("texteffects", this.textFxBtn)), btn("scissors", "Split into separate words", () => this.splitText()).addClass("ink-split"), btn("check", "Done", () => this.closeTextEditor(!0)).addClass("ink-done"), bar;
  }
  /**
   * Break the text being edited into one item per word, in place. Handy for styling a single
   * word differently: Android's own text popup covers the in-field selection handles, so
   * splitting lets you pick a word on the canvas instead.
   */
  splitText() {
    let te2 = this.textEdit;
    if (!te2) return;
    let text = te2.ta.value.replace(/\s+$/, "");
    if (!text.trim()) return;
    let item = { ...te2.item, text };
    this.closeTextEditor(!1);
    let size = item.fontSize, space = measureText(" ", item.font, size), parts = [];
    text.split(`
`).forEach((line, row) => {
      let x3 = item.x;
      for (let word of line.split(/\s+/).filter(Boolean))
        parts.push({ ...item, id: uid(), text: word, x: r22(x3), y: r22(item.y + row * size * 1.25) }), x3 += measureText(word, item.font, size) + space;
    }), parts.length && (this.commit((items) => [...items.filter((i3) => i3.id !== item.id), ...parts]), this.selection = new Set(parts.map((p3) => p3.id)), this.setTool("pointer"), new import_obsidian3.Notice(`Split into ${parts.length} word${parts.length === 1 ? "" : "s"}: tap one to restyle it.`));
  }
  stepTextSize(dir) {
    let te2 = this.textEdit;
    if (!te2) return;
    let v3 = te2.item.fontSize, next = dir > 0 ? Math.min(240, Math.round(v3 * 1.2)) : Math.max(8, Math.round(v3 / 1.2));
    this.applyStyle({ size: next });
  }
  styleTextEditor() {
    var _a2;
    let te2 = this.textEdit;
    if (!te2) return;
    let { ta, item } = te2;
    ta.style.fontFamily = fontFamily(item.font), ta.style.color = item.color === "auto" ? "" : item.color, ta.style.opacity = String(((_a2 = item.opacity) != null ? _a2 : 100) / 100);
    let st2 = item.paint, c1 = this.resolveColor(item.color), c22 = st2 && st2.color2 || "#f08c00", bg = "";
    if (st2 && st2.kind === "gradient") bg = `linear-gradient(${90 + (st2.angle || 0)}deg, ${c1}, ${c22})`;
    else if (st2 && st2.kind === "texture") {
      let u3 = Math.max(2, item.fontSize / 7), k3 = st2.pattern || "dots";
      bg = k3 === "lines" ? `repeating-linear-gradient(0deg, ${c22} 0 ${u3 * 0.7}px, ${c1} ${u3 * 0.7}px ${u3 * 2}px)` : k3 === "hatch" ? `repeating-linear-gradient(-45deg, ${c22} 0 ${u3 * 0.4}px, ${c1} ${u3 * 0.4}px ${u3 * 1.4}px)` : k3 === "check" ? `repeating-conic-gradient(${c22} 0 25%, ${c1} 0 50%) 0 0 / ${u3 * 2}px ${u3 * 2}px` : `radial-gradient(${c22} ${u3 * 0.42}px, ${c1} ${u3 * 0.45}px) 0 0 / ${u3 * 2}px ${u3 * 2}px`;
    }
    ta.style.background = bg, ta.style.webkitBackgroundClip = bg ? "text" : "", ta.style.backgroundClip = bg ? "text" : "", ta.style.webkitTextFillColor = bg ? "transparent" : "";
    let f3 = FONTS.find((x3) => x3.id === item.font);
    this.textFontBtn.setText(f3 ? f3.name : item.font.replace(/^(custom|cloud):/, "")), this.textFontBtn.style.fontFamily = fontFamily(item.font), this.textSizeLabel.setText(String(Math.round(item.fontSize))), this.textColorBtn.style.setProperty("--c", paint(item.color)), this.textColorBtn.toggleClass("is-auto", item.color === "auto"), te2.lastScale = null;
  }
  placeTextEditor() {
    let te2 = this.textEdit;
    if (!te2) return;
    let { ta, bar, item, sbox } = te2, m3 = this.metrics(), host = this.textHost.getBoundingClientRect(), ex = sbox ? sbox.x : item.x, ey = sbox ? sbox.y : item.y, left = m3.left + ex * m3.scale - host.left, top = m3.top + ey * m3.scale - host.top;
    if (ta.style.left = `${left}px`, ta.style.top = `${top}px`, ta.style.fontSize = `${item.fontSize * m3.scale}px`, sbox)
      ta.style.width = `${sbox.width * m3.scale}px`, ta.style.height = "auto", ta.style.height = `${Math.max(sbox.height * m3.scale, ta.scrollHeight)}px`;
    else if (item.wrap)
      ta.style.width = `${item.wrap * m3.scale}px`, ta.style.height = "auto", ta.style.height = `${Math.max(ta.scrollHeight, item.fontSize * m3.scale * 1.6)}px`;
    else {
      let minW = Math.min(host.width * 0.8, Math.max(220, item.fontSize * m3.scale * 8));
      ta.style.height = "auto", ta.style.width = "auto", ta.style.height = `${Math.max(ta.scrollHeight, item.fontSize * m3.scale * 1.6)}px`, ta.style.width = `${Math.max(ta.scrollWidth + 4, minW)}px`;
    }
    let dockEl = this.ui.querySelector(".ink-dock"), dr = dockEl && !dockEl.hasClass("is-min") ? dockEl.getBoundingClientRect() : null, dockVertical = dr && dr.height > dr.width, minX = 8;
    dockVertical && dr.left - host.left < host.width / 2 && (minX = dr.right - host.left + 8), bar.style.maxWidth = `${Math.max(180, host.width - minX - 8)}px`;
    let bh = bar.offsetHeight || 48, bw = bar.offsetWidth || 260, th = ta.offsetHeight, by = top - bh - 10;
    by < 8 && (by = top + th + 10), this.popKind && this.pop.hasClass("is-sheet") && (by = Math.min(by, this.pop.offsetTop - bh - 8)), by = Math.max(8, Math.min(host.height - bh - 8, by));
    let bx = Math.max(minX, Math.min(host.width - bw - 8, left));
    if (bar.style.left = `${bx}px`, bar.style.top = `${by}px`, bar.toggleClass("opens-down", by > top), bar.toggleClass("opens-up", by <= top), te2.fxLayer) {
      let L3 = te2.fxLayer;
      L3.style.left = ta.style.left, L3.style.top = ta.style.top, L3.style.width = `${ta.offsetWidth}px`, L3.style.height = `${ta.offsetHeight}px`, L3.style.fontSize = ta.style.fontSize, L3.style.fontFamily = ta.style.fontFamily, L3.style.lineHeight = getComputedStyle(ta).lineHeight, L3.textContent = ta.value + (ta.value.endsWith(`
`) ? " " : "");
      let scale = m3.scale, fxs = effectsTextShadow(item, this.resolveColor(item.color), scale);
      L3.style.textShadow = fxs, L3.style.display = fxs ? "" : "none";
    }
  }
  closeTextEditor(commit) {
    var _a2;
    let te2 = this.textEdit;
    if (!te2) return;
    this.textEdit = null, cancelAnimationFrame(te2.raf);
    let text = te2.ta.value.replace(/\s+$/, "");
    if (te2.ta.remove(), te2.fxLayer && te2.fxLayer.remove(), te2.bar.remove(), (this.popKind === "fonts" || this.popKind === "color") && this.closePop(), this.view.contentEl.removeClass("ink-typing"), te2.existing && ((_a2 = this.idEl.get(te2.existing.id)) == null || _a2.classList.remove("is-editing")), !commit) return;
    let next = { ...te2.item, text };
    if (te2.existing) {
      let ex = te2.existing, changed = ["text", "font", "fontSize", "color", "opacity"].some((k3) => next[k3] !== ex[k3]);
      text ? changed && this.commit((items) => items.map((i3) => i3.id === ex.id ? next : i3)) : this.commit((items) => items.filter((i3) => i3.id !== ex.id));
    } else text && this.commit((items) => [...items, next]);
  }
  // ---------- commands ----------
  setTool(tool) {
    this.textEdit && this.closeTextEditor(!0), this.cancelPendingPixel(), this.cancelAttachment(), tool === "bucket" ? this.state.fillActive = !0 : tool !== "shape" && (this.state.fillActive = !1), this.unbakePick && (this.unbakePick = !1, this.view.contentEl.removeClass("ink-picking")), this.state.tool = tool, this.plugin.saveState(), !((t3) => t3 === "select" || t3 === "pointer" || t3 === "transform")(tool) && this.selection.size && this.selection.clear(), this.renderSelection(), this.renderPixelGrid(), this.svg && this.svg.toggleClass("is-pointer", this.tool === "pointer"), this.closePop(), tool !== "brush" && this.slotsOpen && this.toggleSlots(!1), this.updateUI();
  }
  selectSlot(i3) {
    this.state.slot = i3, this.setTool("brush");
  }
  deleteSelection() {
    if (!this.selection.size) return;
    let sel = this.selection;
    this.commit((items) => items.filter((i3) => !sel.has(i3.id))), this.selection = /* @__PURE__ */ new Set(), this.renderSelection(), this.updateUI();
  }
  duplicateSelection() {
    if (!this.selection.size) return;
    let off = 24 / this.metrics().scale, idMap = /* @__PURE__ */ new Map(), copies = this.items.filter((i3) => this.selection.has(i3.id)).map((i3) => {
      let c3 = { ...translateItem(i3, off, off), id: uid() };
      return this.noteTransform(i3, c3, { dx: off, dy: off }), idMap.set(i3.id, c3.id), c3;
    }).map((c3) => c3.inShape ? { ...c3, inShape: idMap.get(c3.inShape) || c3.inShape } : c3);
    this.commit((items) => [...items, ...copies]), this.selection = new Set(copies.map((c3) => c3.id)), this.renderSelection(), this.updateUI();
  }
  /**
   * Change the current style. With a selection, restyle it too (one undo step when final).
   * Sizes scale a selection proportionally, since strokes, shapes and text use different units.
   */
  applyStyle(patch) {
    this.textEdit && this.patchTextEdit(patch);
    let st2 = this.currentStyle(), prevSize = this.committedSize.has(st2) ? this.committedSize.get(st2) : st2.size;
    if (this.committedSize.delete(st2), Object.assign(st2, patch), this.plugin.saveState(), patch.color && patch.color !== "auto" && this.plugin.addRecent(patch.color), patch.color && this.pushColorHistory(patch.color), this.selection.size) {
      let sel = this.selection, factor = patch.size !== void 0 && prevSize ? patch.size / prevSize : 1;
      this.commit(
        (items) => items.map((i3) => {
          if (!sel.has(i3.id)) return i3;
          if (i3.type === "group") {
            let deep = (it) => it.type === "group" ? { ...it, items: it.items.map(deep) } : { ...it, ...patch.color !== void 0 ? { color: patch.color } : {}, ...patch.opacity !== void 0 ? { opacity: patch.opacity } : {} };
            return deep(i3);
          }
          let n3 = { ...i3 };
          return patch.color !== void 0 && (n3.color = patch.color), patch.opacity !== void 0 && (n3.opacity = patch.opacity), factor !== 1 && (i3.type === "text" ? n3.fontSize = r22(i3.fontSize * factor) : i3.type === "fill" ? n3.spacing = r22((i3.spacing || 18) * factor) : i3.type !== "pixels" && (n3.size = r22(i3.size * factor))), i3.type === "text" && patch.font !== void 0 && (n3.font = patch.font), i3.type === "shape" && (patch.fill !== void 0 && (i3.shape === "rect" || i3.shape === "ellipse") && (n3.fill = patch.fill), patch.rough !== void 0 && (n3.rough = patch.rough), patch.dash !== void 0 && (n3.dash = patch.dash)), n3;
        })
      );
    }
    this.updateUI();
  }
  /** Live (non-final) style change while dragging a control. */
  patchTextEdit(patch) {
    let it = this.textEdit.item;
    patch.color !== void 0 && (it.color = patch.color), patch.opacity !== void 0 && (it.opacity = patch.opacity), patch.font !== void 0 && (it.font = patch.font), patch.size !== void 0 && (it.fontSize = patch.size), this.styleTextEditor(), this.placeTextEditor();
  }
  previewStyle(patch) {
    this.textEdit && this.patchTextEdit(patch);
    let st2 = this.currentStyle();
    this.committedSize.has(st2) || this.committedSize.set(st2, st2.size), Object.assign(st2, patch), this.updateUI(!0);
  }
  // ---------- connectors ----------
  /** Where a connector meets an item: its visible outline, not a padded hit area. */
  edgeBox(it) {
    if (it.type === "shape") {
      let h3 = (it.size || 0) / 2;
      return { x: Math.min(it.x1, it.x2) - h3, y: Math.min(it.y1, it.y2) - h3, width: Math.abs(it.x2 - it.x1) + 2 * h3, height: Math.abs(it.y2 - it.y1) + 2 * h3 };
    }
    return it.type === "pixels" || it.type === "image" || it.type === "board" ? itemBox(it) : it.type === "group" ? unionBox(it.items.map((c3) => this.edgeBox(c3))) : this.bboxOf(it) || itemBox(it);
  }
  /** The box of a card on the canvas itself (note, image, embed), in canvas coordinates. */
  nodeBox(id) {
    if (!id) return null;
    let canvas = this.view && this.view.canvas;
    if (!canvas) return null;
    try {
      let n3 = canvas.nodes && typeof canvas.nodes.get == "function" ? canvas.nodes.get(id) : null;
      if (n3 && typeof n3.x == "number") return { x: n3.x, y: n3.y, width: n3.width, height: n3.height };
      if (typeof canvas.getData == "function") {
        let d3 = canvas.getData().nodes.find((x3) => x3.id === id);
        if (d3) return { x: d3.x, y: d3.y, width: d3.width, height: d3.height };
      }
    } catch {
    }
    return null;
  }
  /** Every card on the canvas, for anchoring connectors to them. */
  canvasNodes() {
    let canvas = this.view && this.view.canvas;
    if (!canvas) return [];
    try {
      if (canvas.nodes && typeof canvas.nodes.forEach == "function") {
        let out = [];
        return canvas.nodes.forEach((n3, id) => out.push({ id: n3.id || id, x: n3.x, y: n3.y, width: n3.width, height: n3.height })), out.filter((n3) => typeof n3.x == "number");
      }
      if (typeof canvas.getData == "function") return canvas.getData().nodes || [];
    } catch {
    }
    return [];
  }
  /** What a connector end should anchor to at this point (topmost item), or a free point. */
  /**
   * What a connector end attaches to at this point, and exactly where.
   *
   * It goes to the thing actually under your cursor: a drawn line only counts where the ink
   * is, and a box-like thing (shape, text, picture, pixel canvas, board, canvas card) counts
   * anywhere inside it; when several qualify, the smallest wins, so a big scribble's bounding
   * box never steals from the card you're pointing at. The end lands on the nearest point of
   * that thing's edge, level with your cursor, or right on the ink for a drawn line.
   */
  anchorAt(p3, notSame) {
    let tol = 12 / this.metrics().scale, cands = [];
    for (let i3 = this.items.length - 1; i3 >= 0; i3--) {
      let it = this.items[i3];
      if (it.type === "connector" || it.type === "fill" || notSame && notSame.id === it.id) continue;
      let e4 = this.edgeBox(it);
      if (!e4 || p3.x < e4.x - tol || p3.y < e4.y - tol || p3.x > e4.x + e4.width + tol || p3.y > e4.y + e4.height + tol) continue;
      if (it.type === "stroke" || it.type === "group" || it.type === "shape" && (it.shape === "line" || it.shape === "arrow")) {
        if (!hitItem(it, p3.x, p3.y, tol, this.bboxOf(it) || itemBox(it))) continue;
        cands.push({ it, e: e4, area: 0, onInk: !0, z: i3 });
      } else
        cands.push({ it, e: e4, area: e4.width * e4.height, onInk: !1, z: i3 });
    }
    for (let n3 of this.canvasNodes())
      p3.x < n3.x - tol || p3.y < n3.y - tol || p3.x > n3.x + n3.width + tol || p3.y > n3.y + n3.height + tol || cands.push({ node: n3, e: { x: n3.x, y: n3.y, width: n3.width, height: n3.height }, area: n3.width * n3.height, onInk: !1, z: -1 });
    if (!cands.length) return { x: r22(p3.x), y: r22(p3.y) };
    cands.sort((a3, b3) => b3.onInk - a3.onInk || a3.area - b3.area || b3.z - a3.z);
    let c3 = cands[0], e3 = c3.e, u3 = r22(Math.max(0, Math.min(1, (p3.x - e3.x) / (e3.width || 1)))), v3 = r22(Math.max(0, Math.min(1, (p3.y - e3.y) / (e3.height || 1)))), side = c3.onInk ? "in" : sideOf(e3, p3.x, p3.y);
    return c3.node ? { node: c3.node.id, u: u3, v: v3, side } : { id: c3.it.id, u: u3, v: v3, side };
  }
  /**
   * Turn the path you dragged into a few bends, so a connector follows the route you drew
   * rather than taking its own shortcut. Points near either end are dropped: those are just
   * you leaving and arriving.
   */
  routeWaypoints(g3) {
    let route = g3.route || [];
    if (route.length < 6) return [];
    let scale = g3.m.scale, total = route.length, inner = route.slice(Math.floor(total * 0.2), Math.ceil(total * 0.8));
    if (inner.length < 3) return [];
    let simple = simplifyLoop(inner, 26 / scale).slice(0, 6);
    return simple.length > 2 ? simple.slice(1, -1).map(([x3, y3]) => [r22(x3), r22(y3)]) : [];
  }
  connectorBoxOf(item) {
    let lookup = (id) => this.items.find((i3) => i3.id === id), boxOf = (it) => this.edgeBox(it), nodeBox = (id) => this.nodeBox(id), a3 = endPoint(item.from, lookup, boxOf, nodeBox), b3 = endPoint(item.to, lookup, boxOf, nodeBox);
    if (!a3 || !b3) return null;
    let { d: d3 } = connectorPath(item, a3, b3);
    return connectorBox(a3, b3, Math.max(8, item.size * 5));
  }
  // ---------- pixel canvases ----------
  /**
   * The pixel canvas a point belongs to. Canvases have a margin so a stroke that starts just
   * outside still belongs to that canvas instead of starting a new one.
   */
  pixelAt(p3, margin = 0) {
    for (let i3 = this.items.length - 1; i3 >= 0; i3--) {
      let it = this.items[i3];
      if (it.type !== "pixels") continue;
      let m3 = margin / this.metrics().scale, b3 = itemBox(it);
      if (p3.x >= b3.x - m3 && p3.y >= b3.y - m3 && p3.x <= b3.x + b3.width + m3 && p3.y <= b3.y + b3.height + m3) return it;
    }
    return null;
  }
  /** Texture is laid in its own color when one is set, otherwise the pixel color. */
  textureColor(g3) {
    let c3 = this.state.textureColor || this.state.pixelStyle.color;
    return this.resolveColor(c3 === "auto" ? this.state.pixelStyle.color : c3) || g3.color || "#000000";
  }
  /** The grouped pixel menu resolves to one action. */
  pixelAction() {
    let st2 = this.state;
    switch (st2.pixelMode || "paint") {
      case "shape":
        return st2.pixelShape || "line";
      case "fill":
        return st2.pixelFillMode || "fill";
      case "alter":
        return st2.pixelAlter || "aggregate";
      default:
        return st2.pixelMode || "paint";
    }
  }
  /** Sliders feel better with a curve: low settings stay subtle instead of blasting. */
  pixelStrength(exp = 1.8) {
    var _a2;
    return Math.pow(Math.max(0, Math.min(100, (_a2 = this.state.pixelStrength) != null ? _a2 : 50)) / 100, exp);
  }
  beginPixel(g3, p3, penErase) {
    var _a2, _b2;
    let pix = this.pixelAt(p3, (_a2 = this.state.pixelBuffer) != null ? _a2 : 16);
    if (!pix && this.pendingPixel) {
      g3.kind = "none";
      return;
    }
    if (!pix) {
      g3.kind = "pixelNew", g3.live = svgEl("rect", { class: "ink-lasso", "vector-effect": "non-scaling-stroke" }), this.overlayG.appendChild(g3.live);
      return;
    }
    this.activePixel = pix.id, g3.pix = pix, g3.cells = { ...pix.cells }, g3.mode = penErase ? "erase" : this.pixelAction();
    let st2 = this.state.pixelStyle;
    g3.color = g3.mode === "erase" ? null : withOpacity(st2.color, (_b2 = st2.opacity) != null ? _b2 : 100);
    let c3 = cellAt(pix, p3.x, p3.y) || [
      Math.max(0, Math.min(pix.cols - 1, Math.floor((p3.x - pix.x) / pix.cell))),
      Math.max(0, Math.min(pix.rows - 1, Math.floor((p3.y - pix.y) / pix.cell)))
    ];
    if (g3.kind = "pixel", g3.mode === "fill") {
      fillCells(g3.cells, pix, c3[0], c3[1], g3.color), g3.pixDirty = !0;
      return;
    }
    if (g3.mode === "replace") {
      replaceColor(g3.cells, pix, c3[0], c3[1], g3.color), g3.pixDirty = !0;
      return;
    }
    if (["line", "rect", "ellipse"].includes(g3.mode)) {
      g3.fromCell = c3, g3.baseCells = { ...g3.cells }, g3.pixDirty = !0;
      return;
    }
    g3.lastCell = null, this.paintPixelAt(g3, p3);
  }
  paintPixelAt(g3, p3) {
    var _a2, _b2;
    if (g3.mode === "fill" || g3.mode === "replace") return;
    let pix = g3.pix, cell = cellAt(pix, p3.x, p3.y);
    if (!cell) {
      g3.lastCell = null;
      return;
    }
    let [cx, cy] = cell, size = Math.max(1, Math.round(this.state.pixelStyle.size || 1)), alphaK = Math.max(0.05, ((_a2 = this.state.pixelStyle.opacity) != null ? _a2 : 100) / 100), strength = this.pixelStrength() * alphaK;
    if (g3.rand || (g3.rand = mulberry32(Math.floor(Math.random() * 2 ** 31)), g3.fxState = {}), ["line", "rect", "ellipse"].includes(g3.mode)) {
      g3.cells = { ...g3.baseCells };
      for (let [x3, y3] of shapeCells(g3.mode, g3.fromCell, [cx, cy], !!this.state.pixelFilled))
        stampCells(g3.cells, pix, x3, y3, size, g3.color);
      g3.pixDirty = !0;
      return;
    }
    let path = g3.lastCell ? lineCells(g3.lastCell, [cx, cy]) : [[cx, cy]];
    for (let [x3, y3] of path)
      g3.mode === "soften" ? softenCells(g3.cells, pix, x3, y3, Math.max(2, size), {
        target: g3.color,
        strength: strength * 0.85,
        tolerance: ((_b2 = this.state.softenRange) != null ? _b2 : 50) / 100
      }) : g3.mode === "blend" ? blendCells(g3.cells, pix, x3, y3, Math.max(2, size), strength * 0.9) : g3.mode === "lighten" ? shadeCells(g3.cells, pix, x3, y3, size, strength * 0.3) : g3.mode === "darken" ? shadeCells(g3.cells, pix, x3, y3, size, -strength * 0.3) : g3.mode === "texture" ? this.state.textureFill ? (textureArea(g3.cells, pix, x3, y3, { type: this.state.pixelTexture || "grit", color: this.textureColor(g3), strength }, g3.rand), g3.mode = "done") : textureFxCells(g3.cells, pix, x3, y3, Math.max(2, size), { type: this.state.pixelTexture || "grit", color: this.textureColor(g3), strength }, g3.rand, g3.fxState) : g3.mode === "aggregate" ? aggregateCells(g3.cells, pix, x3, y3, Math.max(2, size), {
        strength: strength * 0.7,
        prismatic: Math.pow((this.state.prism.amount || 0) / 100, 1.8),
        mode: this.state.prism.mode,
        secondary: this.state.prism.secondary,
        // By default it only alters pixels that are already there.
        base: this.state.aggregateAdds ? g3.color : null
      }, g3.rand) : g3.mode === "paint" && this.state.pixelBrush && this.state.pixelBrush !== "square" ? textureCells(g3.cells, pix, x3, y3, Math.max(2, size), this.state.pixelBrush, g3.color, 1, g3.rand) : stampCells(g3.cells, pix, x3, y3, size, g3.color);
    g3.lastCell = [cx, cy], g3.pixDirty = !0;
  }
  createPixelCanvas(g3) {
    let { cols, rows } = this.state.pixelNew, end = g3.end || g3.start, w3 = Math.abs(end.x - g3.start.x), h3 = Math.abs(end.y - g3.start.y), cell, x3, y3;
    w3 * g3.m.scale < 12 || h3 * g3.m.scale < 12 ? (cell = 260 / g3.m.scale / Math.max(cols, rows), x3 = g3.start.x - cols * cell / 2, y3 = g3.start.y - rows * cell / 2) : (cell = Math.min(w3 / cols, h3 / rows), x3 = Math.min(g3.start.x, end.x), y3 = Math.min(g3.start.y, end.y));
    let item = { id: uid(), type: "pixels", x: r22(x3), y: r22(y3), cell, cols, rows, cells: {}, border: !0 };
    this.proposePixelCanvas(item);
  }
  /** A new pixel canvas waits for a tick or a cross, so a stray stroke doesn't leave one behind. */
  proposePixelCanvas(item) {
    this.cancelPendingPixel(), this.pendingPixel = item;
    let el = buildItemEl(item, this.renderOpts());
    el.addClass("ink-pending"), this.overlayG.appendChild(el), this.pendingEl = el;
    let bar = this.ui.createDiv({ cls: "ink-confirm" }), m3 = this.metrics(), host = this.ui.getBoundingClientRect(), b3 = itemBox(item);
    bar.style.left = `${m3.left + (b3.x + b3.width / 2) * m3.scale - host.left}px`, bar.style.top = `${m3.top + b3.y * m3.scale - host.top - 46}px`;
    let regrid = (cols, rows) => {
      let it = this.pendingPixel, w3 = it.cols * it.cell, h3 = it.rows * it.cell;
      this.state.pixelNew = { cols, rows }, this.plugin.saveState(), this.proposePixelCanvas({ ...it, cols, rows, cell: Math.min(w3 / cols, h3 / rows) });
    }, sizes = bar.createDiv({ cls: "ink-confirm-sizes" });
    for (let n3 of [16, 32, 64, 128]) {
      let b5 = sizes.createEl("button", { text: String(n3), attr: { type: "button", "aria-label": `${n3} by ${n3}` } });
      b5.toggleClass("is-active", !this.pendingCustom && this.pendingPixel.cols === n3 && this.pendingPixel.rows === n3), b5.addEventListener("click", () => {
        this.pendingCustom = !1, regrid(n3, n3);
      });
    }
    let more = sizes.createEl("button", { text: "W\xD7H", attr: { type: "button", "aria-label": "Custom size" } });
    if (more.toggleClass("is-active", !!this.pendingCustom), more.addEventListener("click", () => {
      this.pendingCustom = !this.pendingCustom, this.proposePixelCanvas(this.pendingPixel);
    }), this.pendingCustom) {
      let custom2 = bar.createDiv({ cls: "ink-pixel-custom ink-confirm-custom" }), num = (key2) => {
        let inp = custom2.createEl("input", { type: "number", attr: { min: "1", max: String(MAX_GRID), inputmode: "numeric", "aria-label": key2 === "cols" ? "Width" : "Height" } });
        inp.value = String(this.pendingPixel[key2]), inp.addEventListener("keydown", (e3) => e3.stopPropagation()), inp.addEventListener("change", () => {
          let v3 = Math.max(1, Math.min(MAX_GRID, Math.round(+inp.value || 1))), it = this.pendingPixel;
          regrid(key2 === "cols" ? v3 : it.cols, key2 === "rows" ? v3 : it.rows);
        });
      };
      num("cols"), custom2.createSpan({ text: "\xD7" }), num("rows");
    }
    this.iconBtn(bar, "check", "Place this pixel canvas", () => {
      let it = this.pendingPixel;
      this.cancelPendingPixel(), this.activePixel = it.id, this.commit((items) => [...items, it]);
    }).addClass("ink-done"), this.iconBtn(bar, "x", "Discard", () => this.cancelPendingPixel()), this.pendingBar = bar;
  }
  cancelPendingPixel() {
    this.pendingEl && this.pendingEl.remove(), this.pendingBar && this.pendingBar.remove(), this.pendingEl = this.pendingBar = null, this.pendingPixel = null;
  }
  /** The pixel canvas that panel actions apply to: the selected one, else the last used. */
  targetPixel() {
    let sel = this.selectedItems().find((i3) => i3.type === "pixels");
    return sel || this.items.find((i3) => i3.id === this.activePixel && i3.type === "pixels") || null;
  }
  async exportPixel(pix, factor) {
    let { app } = this.plugin, src = this.view.file, blob = await pixelPng(pix, factor, (c3) => this.resolveColor(c3));
    if (!blob) return;
    let name = `${src ? src.basename : "Pixel"} pixel art ${pix.cols}x${pix.rows}${factor > 1 ? ` @${factor}x` : ""}.png`, path = await app.fileManager.getAvailablePathForAttachment(name, src ? src.path : "");
    await app.vault.createBinary(path, await blob.arrayBuffer()), new import_obsidian3.Notice(`Saved ${path}`);
  }
  /** Faint pixel grid over pixel canvases while the pixel tool is in use. */
  renderPixelGrid() {
    if (this.pixGridG && this.pixGridG.remove(), this.pixGridG = null, !this.overlayG || this.tool !== "pixel" || this.state.pixelGrid === !1) return;
    let m3 = this.metrics(), v3;
    try {
      v3 = this.viewportBox();
    } catch {
      return;
    }
    let g3 = svgEl("g", { class: "ink-pixel-grid" });
    for (let it of this.items) {
      let cellPx = it.cell * m3.scale;
      if (it.type !== "pixels" || cellPx < 7) continue;
      let strength = Math.max(0, Math.min(1, (cellPx - 7) / 11)), b3 = itemBox(it);
      if (!boxesTouch(b3, v3)) continue;
      let d3 = "";
      for (let i3 = 1; i3 < it.cols; i3++) d3 += `M${r22(it.x + i3 * it.cell)} ${r22(it.y)}V${r22(it.y + b3.height)}`;
      for (let j3 = 1; j3 < it.rows; j3++) d3 += `M${r22(it.x)} ${r22(it.y + j3 * it.cell)}H${r22(it.x + b3.width)}`;
      g3.appendChild(svgEl("path", { d: d3, "vector-effect": "non-scaling-stroke", "stroke-opacity": (0.1 * strength).toFixed(3) }));
    }
    this.overlayG.prepend(g3), this.pixGridG = g3;
  }
  // ---------- paint bucket ----------
  shapeBox(sh) {
    return { x: Math.min(sh.x1, sh.x2), y: Math.min(sh.y1, sh.y2), width: Math.abs(sh.x2 - sh.x1), height: Math.abs(sh.y2 - sh.y1) };
  }
  makeFill(extra) {
    let st2 = this.state.fillStyle;
    return {
      id: uid(),
      type: "fill",
      pattern: st2.pattern || "solid",
      brush: st2.brush || "fineliner",
      color: st2.color,
      opacity: st2.opacity,
      spacing: st2.size,
      seed: Math.floor(Math.random() * 2 ** 31),
      ...extra
    };
  }
  /**
   * Tap with the bucket: restyle a fill you tapped, fill the rectangle/ellipse you tapped
   * inside, or fill the area enclosed by ink around the tap. Open areas are refused.
   */
  bucketAt(p3) {
    let m3 = this.metrics(), opts = this.renderOpts(), restyle = (f3) => ({ ...f3, pattern: this.state.fillStyle.pattern, brush: this.state.fillStyle.brush, color: this.state.fillStyle.color, opacity: this.state.fillStyle.opacity, spacing: this.state.fillStyle.size });
    for (let i3 = this.items.length - 1; i3 >= 0; i3--) {
      let it = this.items[i3];
      if (it.type !== "fill") continue;
      if (it.inShape ? (() => {
        let sh = opts.lookup(it.inShape);
        return sh && pointInShape(sh, p3.x, p3.y);
      })() : hitItem(it, p3.x, p3.y, 0, itemBox(it))) {
        this.lastFillId = it.id, this.commit((items) => items.map((x3) => x3.id === it.id ? restyle(x3) : x3));
        return;
      }
    }
    let shape = this.items.slice().reverse().find((i3) => isContainer(i3) && pointInShape(i3, p3.x, p3.y));
    if (shape) {
      let fill2 = this.makeFill({ inShape: shape.id, box: this.shapeBox(shape) });
      this.lastFillId = fill2.id, this.commit((items) => {
        let out = [];
        for (let i3 of items)
          i3.id === shape.id && out.push(fill2), out.push(i3);
        return out;
      });
      return;
    }
    let area = this.findEnclosedArea(p3, m3, opts);
    if (area.error) {
      new import_obsidian3.Notice(area.error);
      return;
    }
    let fill = this.makeFill({ loops: area.loops, box: area.box });
    this.lastFillId = fill.id;
    let at2 = this.items.findIndex((i3) => i3.type !== "fill" && boxesTouch(this.bboxOf(i3) || itemBox(i3), area.box));
    at2 < 0 && (at2 = this.items.length), this.commit((items) => [...items.slice(0, at2), fill, ...items.slice(at2)]);
  }
  /**
   * Flood-fill a bitmap of the nearby ink, starting at p. Searches the visible area, then a
   * wider one; if the fill still reaches the edge, the area isn't closed and it's refused.
   */
  findEnclosedArea(p3, m3, opts) {
    let env = { resolveColor: () => "#000", streamline: opts.streamline, key: "mask", lookup: opts.lookup }, v3 = this.viewportBox();
    for (let grow of [1, 3]) {
      let box = {
        x: v3.x - v3.width * (grow - 1) / 2,
        y: v3.y - v3.height * (grow - 1) / 2,
        width: v3.width * grow,
        height: v3.height * grow
      };
      if (!(p3.x > box.x && p3.y > box.y && p3.x < box.x + box.width && p3.y < box.y + box.height)) continue;
      let k3 = Math.min(m3.scale, Math.sqrt(22e5 / (box.width * box.height))), W2 = Math.max(8, Math.ceil(box.width * k3)), H2 = Math.max(8, Math.ceil(box.height * k3)), c3 = document.createElement("canvas");
      c3.width = W2, c3.height = H2;
      let ctx = c3.getContext("2d", { willReadFrequently: !0 });
      for (let it of this.items)
        if (!(it.type === "fill" || !boxesTouch(this.bboxOf(it) || itemBox(it), box)))
          try {
            drawItem(ctx, { ...it, color: "#000", opacity: 100 }, k3, box.x, box.y, env);
          } catch {
          }
      let px = ctx.getImageData(0, 0, W2, H2).data, wall = new Uint8Array(W2 * H2);
      for (let i3 = 0; i3 < wall.length; i3++) wall[i3] = px[i3 * 4 + 3] > 50 ? 1 : 0;
      c3.width = c3.height = 0;
      let gap = Math.max(1, Math.round(1.2 * k3 / m3.scale));
      wall = dilate(wall, W2, H2, gap);
      let sx = Math.floor((p3.x - box.x) * k3), sy = Math.floor((p3.y - box.y) * k3);
      if (wall[sy * W2 + sx]) return { error: "Tap inside an outline, not on the line itself." };
      let res = floodRegion(wall, W2, H2, sx, sy);
      if (res.leaked) continue;
      if (res.count < 12) return { error: "That area is too small to fill." };
      let region = dilate(res.region, W2, H2, gap + 1), loops = traceContours(region, W2, H2).map((l3) => simplifyLoop(l3, 0.7).map(([x3, y3]) => [Math.round((box.x + (x3 + 0.5) / k3) * 100) / 100, Math.round((box.y + (y3 + 0.5) / k3) * 100) / 100])).filter((l3) => l3.length > 2);
      return loops.length ? { loops, box: boxOfLoops(loops) } : { error: "Couldn't trace that area." };
    }
    return { error: "There's no closed outline around that spot, so nothing was filled. Close the gap (QuickShape closes shapes for you) and try again." };
  }
  /** Color of whatever is at p: ink (actual pixels for smudged/blended areas) or a card. */
  sampleColor(p3) {
    let r4 = 4 / this.metrics().scale;
    for (let i3 = this.items.length - 1; i3 >= 0; i3--) {
      let it = this.items[i3];
      if (!hitItem(it, p3.x, p3.y, r4, this.bboxOf(it))) continue;
      if (it.type === "pixels") {
        let c4 = cellAt(it, p3.x, p3.y), col = c4 && it.cells[c4[1] * it.cols + c4[0]];
        if (col) return col.length === 9 ? col.slice(0, 7) : col;
        continue;
      }
      if (it.type === "fill" || it.type !== "group") return it.color || "auto";
      let opts = this.renderOpts(), res = renderGroup(it, opts.pixelScale, { resolveColor: opts.resolveColor, streamline: opts.streamline, key: opts.resolveColor("auto"), snapshots: opts.snapshots });
      if (!res) continue;
      let px = Math.floor((p3.x - res.x) * res.k), py = Math.floor((p3.y - res.y) * res.k);
      try {
        let d3 = res.canvas.getContext("2d").getImageData(Math.max(0, px - 1), Math.max(0, py - 1), 3, 3).data, rr = 0, gg = 0, bb = 0, aa = 0;
        for (let j3 = 0; j3 < d3.length; j3 += 4) {
          let a3 = d3[j3 + 3];
          rr += d3[j3] * a3, gg += d3[j3 + 1] * a3, bb += d3[j3 + 2] * a3, aa += a3;
        }
        if (aa > 40) return "#" + [rr, gg, bb].map((v3) => Math.round(v3 / aa).toString(16).padStart(2, "0")).join("");
      } catch {
      }
    }
    let c3 = this.view.canvas, nodes = c3 && c3.nodes && typeof c3.nodes.values == "function" ? [...c3.nodes.values()] : [];
    for (let n3 of nodes.reverse()) {
      if (!(p3.x >= n3.x && p3.y >= n3.y && p3.x <= n3.x + n3.width && p3.y <= n3.y + n3.height)) continue;
      let col = n3.color || (typeof n3.getData == "function" ? n3.getData().color : null);
      if (!col) continue;
      if (/^#/.test(col)) return col;
      let parts = getComputedStyle(document.body).getPropertyValue(`--canvas-color-${col}`).trim().split(",").map((x3) => parseInt(x3, 10));
      if (parts.length === 3 && parts.every((x3) => !isNaN(x3))) return "#" + parts.map((x3) => x3.toString(16).padStart(2, "0")).join("");
    }
    return null;
  }
  /** Start the eyedropper; it hands the color back to the tool you came from. */
  startPicker(fromTool) {
    this.pickReturn = fromTool && fromTool !== "picker" ? fromTool : this.pickReturn || "brush", this.setTool("picker"), new import_obsidian3.Notice("Tap the canvas to pick a color.");
  }
  /**
   * The color you actually see at a point: every item there drawn, in order, into a tiny
   * canvas at screen resolution (textures, opacity, effects and all), then laid over the
   * canvas background. Returns null where there's no ink.
   */
  async visibleColorAt(p3) {
    var _a2;
    let m3 = this.metrics(), k3 = Math.max(1, m3.scale * DPR()), N3 = 3, ox = p3.x - N3 / 2 / k3, oy = p3.y - N3 / 2 / k3, c3 = document.createElement("canvas");
    c3.width = c3.height = N3;
    let ctx = c3.getContext("2d", { willReadFrequently: !0 }), env = { resolveColor: (x3) => this.resolveColor(x3), streamline: this.settings.smoothing / 100, lookup: (id) => this.itemById(id), key: this.resolveColor("auto") }, pad = 2 / k3, any = !1;
    for (let it of this.items) {
      let b3 = this.bboxOf(it) || itemBox(it);
      if (!(!b3 || p3.x < b3.x - pad || p3.y < b3.y - pad || p3.x > b3.x + b3.width + pad || p3.y > b3.y + b3.height + pad) && !(it.type === "connector" || it.type === "board")) {
        any = !0;
        try {
          if (it.type === "image") {
            if (it.ref && it.ref.kind && it.ref.kind !== "image") continue;
            let url = this.refUrl(it.ref);
            if (!url) continue;
            let img = await imageFromSrc(url);
            ctx.save(), ctx.globalAlpha = ((_a2 = it.opacity) != null ? _a2 : 100) / 100, ctx.setTransform(k3, 0, 0, k3, -ox * k3, -oy * k3), ctx.translate(it.x, it.y), drawRefInto(ctx, img, it.ref, it.w, it.h), ctx.restore();
          } else it.type === "painting" ? (it.bg && (ctx.save(), ctx.fillStyle = it.bg, ctx.fillRect((it.x - ox) * k3, (it.y - oy) * k3, it.w * k3, it.h * k3), ctx.restore()), drawItem(ctx, { id: `${it.id}:pick`, type: "group", items: it.items, fx: [] }, k3, ox, oy, env)) : drawItem(ctx, it, k3, ox, oy, env);
        } catch {
        }
      }
    }
    if (!any) return null;
    let d3 = ctx.getImageData(1, 1, 1, 1).data;
    if (c3.width = c3.height = 0, d3[3] < 10) return null;
    let a3 = d3[3] / 255, bg = [0, 0, 0];
    for (let el = this.canvasEl; el; el = el.parentElement) {
      let cs = getComputedStyle(el).backgroundColor, mm = /rgba?\(([^)]+)\)/.exec(cs || "");
      if (mm) {
        let v3 = mm[1].split(",").map((x3) => parseFloat(x3));
        if (v3.length < 4 || v3[3] > 0.5) {
          bg = v3.slice(0, 3);
          break;
        }
      }
    }
    let h3 = (v3) => Math.max(0, Math.min(255, Math.round(v3))).toString(16).padStart(2, "0");
    return `#${h3(d3[0] * a3 + bg[0] * (1 - a3))}${h3(d3[1] * a3 + bg[1] * (1 - a3))}${h3(d3[2] * a3 + bg[2] * (1 - a3))}`;
  }
  async pickColorAt(p3) {
    let col = null;
    try {
      col = await this.visibleColorAt(p3);
    } catch {
      col = null;
    }
    if (col || (col = this.sampleColor(p3)), this.pickSecondary) {
      let prism = this.pickSecondary;
      this.pickSecondary = null;
      let back2 = this.pickReturn || "brush";
      this.pickReturn = null, this.setTool(back2 === "picker" ? "brush" : back2), col && col !== "auto" && (prism.secondary = col, this.plugin.saveState(), new import_obsidian3.Notice(`Second color set to ${col}.`));
      return;
    }
    let back = this.pickReturn || "brush";
    if (this.pickReturn = null, this.setTool(back === "eraser" || back === "fx" || back === "hand" ? "brush" : back), !col) {
      new import_obsidian3.Notice("No color there. Tap on ink or a colored card.");
      return;
    }
    this.applyStyle({ color: col });
  }
  /** Bake the selection, or everything (after confirming) when nothing is selected. */
  bakeAction() {
    if (this.selection.size) return this.bake(this.items.filter((i3) => this.selection.has(i3.id)));
    this.togglePop("bake", this.bakeBtn);
  }
  bakeAll() {
    this.items.length && this.plugin.confirm(
      "Bake all ink into the canvas?",
      "Every drawing on this canvas becomes one image card that shows even without Palette. You can unbake it later to edit the strokes again.",
      "Bake all",
      () => this.bake(this.items)
    );
  }
  async bake(items) {
    if (!(this.baking || !items.length)) {
      this.baking = !0, this.cancelGesture(), this.closeTextEditor(!0);
      try {
        await bakeItems(this, items) && (this.selection.clear(), this.renderSelection());
      } catch (e3) {
        console.error("[Palette] Bake failed", e3), new import_obsidian3.Notice(`Palette couldn't bake that: ${e3.message || e3}`);
      } finally {
        this.baking = !1, this.updateUI();
      }
    }
  }
  onKey(e3) {
    let mod = e3.metaKey || e3.ctrlKey, k3 = e3.key.toLowerCase(), handled = !0;
    if (mod && k3 === "z") e3.shiftKey ? this.redo() : this.undo();
    else if (mod && k3 === "y") this.redo();
    else if (mod && k3 === "d") this.duplicateSelection();
    else if ((k3 === "delete" || k3 === "backspace") && this.selection.size) this.deleteSelection();
    else if (k3 === "escape")
      this.popKind ? this.closePop() : this.slotsOpen ? this.toggleSlots(!1) : this.selection.size ? (this.selection.clear(), this.renderSelection(), this.updateUI()) : this.setActive(!1);
    else if (!mod && !e3.altKey && /^[1-5]$/.test(k3)) this.selectSlot(+k3 - 1);
    else if (!mod && !e3.altKey) {
      if (k3 === "i") {
        this.startPicker(this.tool), e3.preventDefault();
        return;
      }
      let map = { a: "alter", p: "pixel", g: "bucket", h: "hand", v: "pointer", f: "transform", l: "select", e: "eraser", s: "shape", t: "text", b: "brush", m: "fx" };
      map[k3] ? this.setTool(map[k3]) : handled = !1;
    } else handled = !1;
    handled && (e3.preventDefault(), e3.stopPropagation());
  }
  // ---------- UI ----------
  //
  // One dock: grip, brush button (slots fold out beside it), color, size, opacity, then the
  // other tools behind a fold arrow. The dock snaps to any edge or floats, keeps clear of other
  // toolbars (Editing Toolbar, Obsidian's canvas controls, the mobile nav bar), and can be folded
  // down to just the grip.
  iconBtn(parent, icon, label, onClick, cls = "") {
    let b3 = parent.createEl("button", { cls: `ink-btn ${cls}`, attr: { "aria-label": label, type: "button" } });
    return this.setBtnIcon(b3, icon, label), b3.addEventListener("click", onClick), b3;
  }
  setBtnIcon(el, icon, label) {
    el.dataset.icon !== icon && (el.dataset.icon = icon, el.empty(), (0, import_obsidian3.setIcon)(el, icon), el.querySelector("svg") || el.setText((label || icon).replace(/^ink-/, "").slice(0, 1).toUpperCase()));
  }
  buildUI() {
    let ui = this.ui = createDiv({ cls: "ink-ui" });
    for (let t3 of ["pointerdown", "mousedown", "touchstart", "dblclick", "wheel", "contextmenu"])
      ui.addEventListener(t3, (e3) => {
        var _a2;
        e3.target !== ui && !((_a2 = e3.target.classList) != null && _a2.contains("ink-live-canvas")) && e3.stopPropagation();
      });
    let bar = this.bar = ui.createDiv({ cls: "ink-dock" });
    this.grip = this.iconBtn(bar, "ink-grip", "Drag to move; tap to fold away", () => {
    }, "ink-grip"), this.makeDraggable(this.grip, bar, (moved) => {
      moved || (this.state.minimized = !this.state.minimized, this.plugin.saveState(), this.closePop(), this.layout());
    }), this.orientBtn = this.iconBtn(bar, "move-vertical", "Switch between vertical and horizontal", () => {
      this.state.dock.orient = this.state.dock.orient === "h" ? "v" : "h", this.plugin.saveState(), this.closePop(), this.slotsOpen && (this.slotsOpen = !1), this.layout();
    }, "ink-orient"), this.brushBtn = bar.createEl("button", { cls: "ink-btn ink-brush-btn", attr: { type: "button" } }), this.brushBtn.createDiv({ cls: "ink-slot-icon" }), this.brushBtn.createDiv({ cls: "ink-slot-color" }), this.brushBtn.addEventListener("click", () => {
      if (this.tool !== "brush") {
        this.setTool("brush"), this.state.slotsPinned || this.toggleSlots(!0);
        return;
      }
      this.state.slotsPinned ? this.togglePop("library", this.brushBtn) : this.toggleSlots();
    }), this.colorBtn = bar.createEl("button", { cls: "ink-color-btn", attr: { type: "button", "aria-label": "Color" } });
    let taps = 0, tapTimer = 0;
    this.colorBtn.addEventListener("click", () => {
      if (this.suppressColorClick) {
        this.suppressColorClick = !1;
        return;
      }
      if (!this.colorless) {
        if (taps++, clearTimeout(tapTimer), taps >= 3) {
          taps = 0, this.closePop(), this.togglePop("adjust", this.colorBtn);
          return;
        }
        tapTimer = window.setTimeout(() => {
          (taps === 1 || taps === 2) && this.togglePop("color", this.colorBtn), taps = 0;
        }, 260);
      }
    });
    let colorTimer = 0;
    this.colorBtn.addEventListener("pointerdown", () => {
      clearTimeout(colorTimer), colorTimer = window.setTimeout(() => {
        this.colorless || (this.suppressColorClick = !0, this.closePop(), this.startPicker(this.tool));
      }, 500);
    });
    for (let t3 of ["pointerup", "pointercancel", "pointerleave"]) this.colorBtn.addEventListener(t3, () => clearTimeout(colorTimer));
    this.colorBtn.addEventListener("contextmenu", (e3) => e3.preventDefault()), this.colorBtn.setAttribute("aria-label", "Color (hold to pick from the canvas)");
    let sizeRange = () => this.sizeInfo().range;
    this.sizeKnob = new Knob(bar, {
      label: "Size: drag up or down, tap for presets",
      min: 0.5,
      max: 100,
      log: !0,
      get: () => this.currentStyle().size,
      set: (v3, final) => {
        let [lo, hi] = sizeRange();
        v3 = Math.max(lo, Math.min(hi, v3)), v3 = this.tool === "pixel" ? Math.round(v3) : roundSize(v3), final ? this.applyStyle({ size: v3 }) : this.previewStyle({ size: v3 });
      },
      round: roundSize,
      format: fmtSize,
      onTap: () => this.togglePop("size", this.sizeKnob.el),
      render: (face, v3, t3) => {
        face.style.setProperty("--d", `${5 + Math.max(0, Math.min(1, t3)) * 23}px`), face.style.setProperty("--c", this.colorless ? "var(--text-muted)" : paint(this.currentStyle().color));
      }
    }), Object.defineProperty(this.sizeKnob.opts, "min", { get: () => sizeRange()[0] }), Object.defineProperty(this.sizeKnob.opts, "max", { get: () => sizeRange()[1] }), this.opacityKnob = new Knob(bar, {
      label: "Opacity or strength: drag up or down, tap for presets",
      min: 5,
      max: 100,
      log: !1,
      get: () => this.currentStyle().opacity,
      set: (v3, final) => {
        v3 = Math.round(v3), final ? this.applyStyle({ opacity: v3 }) : this.previewStyle({ opacity: v3 });
      },
      round: Math.round,
      format: (v3) => `${Math.round(v3)}%`,
      onTap: () => this.togglePop("opacity", this.opacityKnob.el),
      render: (face, v3) => {
        face.style.setProperty("--c", this.colorless ? "var(--text-muted)" : paint(this.currentStyle().color)), face.style.setProperty("--o", String(v3 / 100));
      }
    }), this.opacityKnob.el.addClass("ink-opacity-knob"), this.adjustBtn = this.iconBtn(bar, "ink-sliders", "Adjust colors of the selection (or triple-tap the color)", () => this.togglePop("adjust", this.adjustBtn), "is-extra"), bar.createDiv({ cls: "ink-dock-divider" });
    let tools = this.toolsEl = bar.createDiv({ cls: "ink-tools" });
    this.toolBtns = /* @__PURE__ */ new Map(), this.pixelBtn = this.iconBtn(tools, "ink-pixels", "Pixel canvas (P), tap again for options, hold for color", () => {
      if (this.suppressPixelClick) {
        this.suppressPixelClick = !1;
        return;
      }
      this.tool === "pixel" ? this.togglePop("pixel", this.pixelBtn) : this.setTool("pixel");
    }), this.toolBtns.set("pixel", this.pixelBtn);
    let pixTimer = 0;
    this.pixelBtn.addEventListener("pointerdown", () => {
      clearTimeout(pixTimer), pixTimer = window.setTimeout(() => {
        this.suppressPixelClick = !0, this.setTool("pixel"), this.closePop(), this.togglePop("color", this.pixelBtn);
      }, 500);
    });
    for (let ev of ["pointerup", "pointercancel", "pointerleave"])
      this.pixelBtn.addEventListener(ev, () => clearTimeout(pixTimer));
    this.bucketBtn = this.iconBtn(tools, "paint-bucket", "Paint bucket (G), tap again for patterns", () => {
      this.tool === "bucket" ? this.togglePop("fill", this.bucketBtn) : this.setTool("bucket");
    }), this.toolBtns.set("bucket", this.bucketBtn), this.shapeBtn = this.iconBtn(tools, "square", "Shapes (S), tap again for options", () => {
      let conn = this.selectedItems().find((i3) => i3.type === "connector");
      if (conn && this.tool !== "shape") {
        this.itemMenuFor = conn.id, this.togglePop("item", this.shapeBtn);
        return;
      }
      this.tool === "shape" ? this.togglePop("shapes", this.shapeBtn) : this.setTool("shape");
    }), this.toolBtns.set("shape", this.shapeBtn);
    let textBtn = this.iconBtn(tools, "type", "Text (T), tap again for fonts", () => {
      this.tool === "text" ? this.togglePop("fonts", textBtn) : this.setTool("text");
    });
    this.toolBtns.set("text", textBtn), tools.createDiv({ cls: "ink-tool-divider" }), this.toolBtns.set("hand", this.iconBtn(tools, "hand", "Pan (H)", () => this.setTool("hand")));
    let selTool = (id, icon, tip) => {
      let b3 = this.iconBtn(tools, icon, tip, () => {
        this.tool === id ? this.togglePop("selection", b3) : this.setTool(id);
      });
      this.toolBtns.set(id, b3), b3.addClass("has-more");
    };
    selTool("pointer", "mouse-pointer-2", "Pointer: tap or box-select (V), tap again for selection options"), selTool("transform", "scaling", "Free transform: corners stretch freely (F), tap again for selection options"), selTool("select", "lasso", "Lasso select (L), tap again for selection options"), tools.createDiv({ cls: "ink-tool-divider" }), this.eraserBtn = this.iconBtn(tools, "ink-eraser-element", "Eraser (E), tap again for element or fine", () => {
      this.tool === "eraser" ? this.togglePop("eraser", this.eraserBtn) : this.setTool("eraser");
    }), this.toolBtns.set("eraser", this.eraserBtn), this.fxBtn = this.iconBtn(tools, "ink-smudge", "Smudge, blend, blur (M), tap again to switch", () => {
      this.tool === "fx" ? this.togglePop("fx", this.fxBtn) : this.setTool("fx");
    }), this.toolBtns.set("fx", this.fxBtn), this.alterBtn = this.iconBtn(tools, "ink-spray", "Alter: change ink that is already there (A), tap again for options", () => {
      this.tool === "alter" ? this.togglePop("alter", this.alterBtn) : this.setTool("alter");
    }), this.toolBtns.set("alter", this.alterBtn), tools.createDiv({ cls: "ink-tool-divider" }), this.paintingBtn = this.iconBtn(tools, "frame", "Painting: a framed area you open and work on by itself", () => {
      this.focusId ? this.exitPainting() : this.togglePop("painting", this.paintingBtn);
    }, "is-extra"), this.boardBtn = this.iconBtn(tools, "layout-dashboard", "Board: a canvas inside this canvas", () => this.togglePop("board", this.boardBtn), "is-extra"), this.imageBtn = this.iconBtn(tools, "image", "Pictures: place one, or put one inside a shape or pixel canvas", () => this.openImagePanel(), "is-extra"), tools.createDiv({ cls: "ink-tool-divider" }), this.undoBtn = this.iconBtn(tools, "undo-2", "Undo", () => this.undo(), "is-extra"), this.redoBtn = this.iconBtn(tools, "redo-2", "Redo", () => this.redo(), "is-extra"), this.bakeBtn = this.iconBtn(tools, "ink-bread", "Bake (hold for more)", () => {
      if (this.suppressBakeClick) {
        this.suppressBakeClick = !1;
        return;
      }
      this.bakeAction();
    }, "is-extra");
    let bakeTimer = 0;
    this.bakeBtn.addEventListener("pointerdown", () => {
      clearTimeout(bakeTimer), bakeTimer = window.setTimeout(() => {
        this.suppressBakeClick = !0, this.openPop("bake", this.bakeBtn);
      }, 500);
    });
    for (let t3 of ["pointerup", "pointercancel", "pointerleave"]) this.bakeBtn.addEventListener(t3, () => clearTimeout(bakeTimer));
    this.bakeBtn.addEventListener("contextmenu", (e3) => e3.preventDefault()), this.layersBtn = this.iconBtn(tools, "layers", "Layers", () => this.togglePop("layers", this.layersBtn)), this.dupBtn = this.iconBtn(tools, "copy", "Duplicate selection", () => this.duplicateSelection(), "is-sel"), this.delBtn = this.iconBtn(tools, "trash-2", "Delete selection", () => this.deleteSelection(), "is-sel"), this.foldBtn = this.iconBtn(bar, "chevron-down", "More tools", () => {
      this.state.toolsOpen = !this.state.toolsOpen, this.plugin.saveState(), this.closePop(), this.layout();
    }, "ink-fold"), this.iconBtn(bar, "check", "Done drawing", () => this.setActive(!1), "ink-done");
    let sb = this.slotBar = ui.createDiv({ cls: "ink-slotbar" });
    this.slotGrip = this.iconBtn(sb, "ink-grip", "Drag to move", () => {
    }, "ink-grip ink-slot-grip"), this.makeDraggable(this.slotGrip, sb, (moved) => {
      if (moved) {
        let host = this.ui.getBoundingClientRect(), r4 = sb.getBoundingClientRect();
        this.state.slotsPos = { x: (r4.left - host.left) / host.width, y: (r4.top - host.top) / host.height }, this.plugin.saveState();
      }
    }), this.slotBtns = [], this.state.slots.forEach((_3, i3) => {
      let b3 = sb.createEl("button", { cls: "ink-slot", attr: { type: "button" } });
      b3.createDiv({ cls: "ink-slot-icon" }), b3.createDiv({ cls: "ink-slot-color" }), b3.addEventListener("click", () => {
        this.tool === "brush" && this.state.slot === i3 ? this.togglePop("library", b3) : (this.selectSlot(i3), this.state.slotsPinned || this.toggleSlots(!1));
      }), this.slotBtns.push(b3);
    }), this.pinBtn = this.iconBtn(sb, "pin", "Keep presets open as their own bar", () => {
      if (this.state.slotsPinned = !this.state.slotsPinned, this.state.slotsPinned) {
        let host = this.ui.getBoundingClientRect(), r4 = sb.getBoundingClientRect();
        this.state.slotsPos = { x: (r4.left - host.left) / host.width, y: (r4.top - host.top) / host.height };
      }
      this.slotsOpen = !1, this.plugin.saveState(), this.layout();
    }, "ink-pin");
    for (let b3 of [this.brushBtn, this.eraserBtn, this.fxBtn, this.alterBtn, this.paintingBtn, this.shapeBtn, this.toolBtns.get("text"), this.bucketBtn, this.pixelBtn, this.imageBtn, this.boardBtn, this.bakeBtn, this.colorBtn])
      b3 && b3.addClass("has-more");
    this.bindDrop(), this.pop = ui.createDiv({ cls: "ink-pop" }), this.canvasEl.parentElement.appendChild(ui);
  }
  libAnchor() {
    return this.slotBar.hasClass("is-shown") ? this.slotBtns[this.state.slot] : this.brushBtn;
  }
  toggleSlots(open = !this.slotsOpen) {
    this.slotsOpen = open, open && this.closePop(), this.layout();
  }
  /** Drag `el` by `handle`. onEnd(moved) runs on release. */
  makeDraggable(handle, el, onEnd) {
    handle.style.touchAction = "none", handle.addEventListener("pointerdown", (e3) => {
      var _a2;
      e3.preventDefault(), e3.stopPropagation(), (_a2 = handle.setPointerCapture) == null || _a2.call(handle, e3.pointerId);
      let host = this.ui.getBoundingClientRect(), r4 = el.getBoundingClientRect(), off = { x: e3.clientX - r4.left, y: e3.clientY - r4.top }, start = { x: e3.clientX, y: e3.clientY }, moved = !1, move = (ev) => {
        if (!moved && Math.hypot(ev.clientX - start.x, ev.clientY - start.y) < 6) return;
        moved || (moved = !0, this.closePop(), el.addClass("is-dragging"), el === this.bar && this.slotsOpen && (this.slotsOpen = !1, this.layout()));
        let w3 = el.offsetWidth, h3 = el.offsetHeight;
        el.style.left = `${Math.max(0, Math.min(host.width - w3, ev.clientX - host.left - off.x))}px`, el.style.top = `${Math.max(0, Math.min(host.height - h3, ev.clientY - host.top - off.y))}px`;
      }, up = (ev) => {
        handle.removeEventListener("pointermove", move), handle.removeEventListener("pointerup", up), handle.removeEventListener("pointercancel", up), el.removeClass("is-dragging"), moved && el === this.bar && this.dropBar(ev), onEnd(moved), moved && this.layout();
      };
      handle.addEventListener("pointermove", move), handle.addEventListener("pointerup", up), handle.addEventListener("pointercancel", up);
    });
  }
  /** Snap the dock to the nearest edge, or leave it floating. */
  dropBar(ev) {
    let host = this.ui.getBoundingClientRect(), safe = this.safeArea(), r4 = this.bar.getBoundingClientRect(), px = ev.clientX - host.left, py = ev.clientY - host.top, W2 = host.width, H2 = host.height, d3 = {
      left: px - safe.left,
      right: W2 - safe.right - px,
      top: py - safe.top,
      bottom: H2 - safe.bottom - py
    }, edge = Object.keys(d3).reduce((a3, b3) => d3[a3] <= d3[b3] ? a3 : b3), cx = r4.left - host.left + r4.width / 2, cy = r4.top - host.top + r4.height / 2, dock = this.state.dock;
    d3[edge] < 72 ? (dock.edge = edge, dock.t = edge === "left" || edge === "right" ? (cy - safe.top) / Math.max(1, H2 - safe.top - safe.bottom) : (cx - safe.left) / Math.max(1, W2 - safe.left - safe.right), dock.t = Math.max(0, Math.min(1, dock.t))) : (dock.edge = "float", dock.x = (r4.left - host.left) / W2, dock.y = (r4.top - host.top) / H2), this.plugin.saveState();
  }
  /**
   * Space taken by other UI over the canvas: the Editing Toolbar plugin, Obsidian's canvas
   * controls and card menu, the mobile nav bar, and anything else that looks like a toolbar.
   */
  safeArea() {
    let host = this.ui.getBoundingClientRect(), safe = { top: 0, bottom: 0, left: 0, right: 0 }, sel = [
      ".canvas-controls",
      ".canvas-card-menu",
      ".mobile-navbar",
      ".mobile-toolbar",
      "#cMenuToolbarModalBar",
      "#editingToolbarModalBar",
      ".cMenuToolbarDefaultAestheticStyle",
      ".editingToolbarDefaultAestheticStyle",
      ".cMenuToolbarModalBar",
      ".editingToolbarModalBar",
      "#cMenuToolbarPopoverBar",
      "#editingToolbarPopoverBar"
    ].join(","), seen = /* @__PURE__ */ new Set();
    for (let el of document.querySelectorAll(sel)) {
      if (seen.has(el) || this.ui.contains(el) || el.closest(".canvas-node, .modal-container, .menu, .ink-ui")) continue;
      seen.add(el);
      let r4 = el.getBoundingClientRect();
      if (r4.width < 8 || r4.height < 8 || r4.right <= host.left || r4.left >= host.right || r4.bottom <= host.top || r4.top >= host.bottom || r4.width * r4.height > host.width * host.height * 0.5) continue;
      let cs = getComputedStyle(el);
      cs.visibility === "hidden" || cs.display === "none" || parseFloat(cs.opacity) === 0 || (r4.width >= r4.height ? r4.top + r4.height / 2 < host.top + host.height / 2 ? safe.top = Math.max(safe.top, r4.bottom - host.top) : safe.bottom = Math.max(safe.bottom, host.bottom - r4.top) : r4.left + r4.width / 2 < host.left + host.width / 2 ? safe.left = Math.max(safe.left, r4.right - host.left) : safe.right = Math.max(safe.right, host.right - r4.left));
    }
    let cap = (v3, max2) => Math.min(v3, max2);
    return safe.top = cap(safe.top, host.height * 0.4), safe.bottom = cap(safe.bottom, host.height * 0.4), safe.left = cap(safe.left, host.width * 0.4), safe.right = cap(safe.right, host.width * 0.4), safe;
  }
  /** Place the dock, the slot bar and any open popover. */
  layout() {
    var _a2, _b2, _c, _d, _e, _f, _g, _h;
    if (!this.bar || !this.active) return;
    let st2 = this.state, host = this.ui.getBoundingClientRect(), W2 = host.width, H2 = host.height, safe = this.lastSafe = this.safeArea(), bar = this.bar, edge = st2.dock.edge, horizontal = st2.dock.orient === "h";
    this.setBtnIcon(this.orientBtn, horizontal ? "move-horizontal" : "move-vertical", "Orientation"), bar.toggleClass("is-horizontal", horizontal), bar.toggleClass("is-min", !!st2.minimized), this.toolsEl.toggleClass("is-folded", !st2.toolsOpen), this.setBtnIcon(this.foldBtn, st2.toolsOpen ? horizontal ? "chevron-left" : "chevron-up" : horizontal ? "chevron-right" : "chevron-down", "More tools"), this.foldBtn.setAttribute("aria-label", st2.toolsOpen ? "Fewer tools" : "More tools");
    let M3 = 10, availW = W2 - safe.left - safe.right - 2 * M3, availH = H2 - safe.top - safe.bottom - 2 * M3;
    bar.style.maxHeight = horizontal ? "" : `${Math.max(120, availH)}px`, bar.style.maxWidth = horizontal ? `${Math.max(120, availW)}px` : "";
    let w3 = bar.offsetWidth, h3 = bar.offsetHeight, left, top;
    edge === "left" || edge === "right" ? (top = safe.top + M3 + ((_a2 = st2.dock.t) != null ? _a2 : 0.5) * Math.max(0, availH) - h3 / 2, left = edge === "left" ? safe.left + M3 : W2 - safe.right - M3 - w3) : edge === "top" || edge === "bottom" ? (left = safe.left + M3 + ((_b2 = st2.dock.t) != null ? _b2 : 0.5) * Math.max(0, availW) - w3 / 2, top = edge === "top" ? safe.top + M3 : H2 - safe.bottom - M3 - h3) : (left = ((_c = st2.dock.x) != null ? _c : 0.1) * W2, top = ((_d = st2.dock.y) != null ? _d : 0.3) * H2), left = Math.max(safe.left + 4, Math.min(W2 - safe.right - w3 - 4, left)), top = Math.max(safe.top + 4, Math.min(H2 - safe.bottom - h3 - 4, top)), bar.style.left = `${left}px`, bar.style.top = `${top}px`;
    let opens = horizontal ? top + h3 / 2 < H2 / 2 ? "down" : "up" : left + w3 / 2 < W2 / 2 ? "right" : "left";
    for (let d3 of ["right", "left", "down", "up"]) bar.toggleClass(`opens-${d3}`, d3 === opens);
    this.opens = opens;
    let sb = this.slotBar, pinned = !!st2.slotsPinned, shown = pinned || this.slotsOpen && !st2.minimized;
    sb.toggleClass("is-shown", shown), sb.toggleClass("is-pinned", pinned), this.pinBtn.toggleClass("is-active", pinned), this.setBtnIcon(this.pinBtn, pinned ? "pin-off" : "pin", "Pin"), this.pinBtn.setAttribute("aria-label", pinned ? "Attach presets back to the toolbar" : "Keep presets open as their own bar");
    let sbVertical = pinned ? !1 : horizontal;
    if (sb.toggleClass("is-vertical", sbVertical), shown) {
      let sw = sb.offsetWidth, sh = sb.offsetHeight, sl, stp;
      if (pinned)
        sl = ((_f = (_e = st2.slotsPos) == null ? void 0 : _e.x) != null ? _f : 0.3) * W2, stp = ((_h = (_g = st2.slotsPos) == null ? void 0 : _g.y) != null ? _h : 0.15) * H2;
      else {
        let a3 = this.brushBtn.getBoundingClientRect(), ax = a3.left - host.left, ay = a3.top - host.top;
        opens === "right" ? (sl = left + w3 + 8, stp = ay + a3.height / 2 - sh / 2) : opens === "left" ? (sl = left - sw - 8, stp = ay + a3.height / 2 - sh / 2) : opens === "down" ? (stp = top + h3 + 8, sl = ax + a3.width / 2 - sw / 2) : (stp = top - sh - 8, sl = ax + a3.width / 2 - sw / 2);
      }
      sl = Math.max(4, Math.min(W2 - sw - 4, sl)), stp = Math.max(safe.top + 4, Math.min(H2 - safe.bottom - sh - 4, stp)), sb.style.left = `${sl}px`, sb.style.top = `${stp}px`;
      let sOpens = pinned ? stp + sh / 2 < H2 / 2 ? "down" : "up" : opens;
      for (let d3 of ["right", "left", "down", "up"]) sb.toggleClass(`opens-${d3}`, d3 === sOpens);
    }
    this.popKind && this.popAnchor && this.positionPop(this.popAnchor);
  }
  // --- popovers ---
  togglePop(kind, anchor) {
    if (this.popKind === kind) return this.closePop();
    this.openPop(kind, anchor);
  }
  closePop() {
    if (!this.pop) return;
    let was = this.popKind;
    this.libFor = null, was === "pixel" && (this.pixPage = null), this.resetAdjust = null, this.refreshAdjust = null, this.adjValues = null, this.pop.className = "ink-pop", this.pop.empty(), this.popKind = null, this.popAnchor = null, this.popRefresh = null, was && this.updateUI(), was && this.textEdit && this.textEdit.ta.focus();
  }
  openPop(kind, anchor) {
    kind !== "library" && (this.libFor = null), kind !== "fonts" && (this.fontBrowse = null), this.pop.empty(), this.popKind = kind, this.popAnchor = anchor, this.popRefresh = null;
    let p3 = this.pop;
    p3.className = `ink-pop is-open ink-pop-${kind}`, kind === "color" ? this.buildColorPop(p3) : kind === "size" ? this.buildSizePop(p3) : kind === "opacity" ? this.buildOpacityPop(p3) : kind === "library" ? this.buildLibraryPop(p3) : kind === "shapes" ? this.buildShapesPop(p3) : kind === "fonts" ? this.buildFontsPop(p3) : kind === "texteffects" ? this.buildTextEffectsPop(p3) : kind === "layers" ? this.buildLayersPop(p3) : kind === "eraser" ? this.buildEraserPop(p3) : kind === "fx" ? this.buildFxPop(p3) : kind === "bake" ? this.buildBakePop(p3) : kind === "fill" ? this.buildFillPop(p3) : kind === "pixel" ? this.buildPixelPop(p3) : kind === "item" ? this.buildItemPop(p3) : kind === "image" ? this.buildImagePop(p3) : kind === "sidecolor" ? this.buildSideColorPop(p3) : kind === "board" ? this.buildBoardPop(p3) : kind === "alter" ? this.buildAlterPop(p3) : kind === "painting" ? this.buildPaintingPop(p3) : kind === "selection" ? this.buildSelectionPop(p3) : kind === "textfill" ? this.buildTextFillPop(p3) : kind === "adjust" && this.buildAdjustPop(p3), this.positionPop(anchor), this.updateUI();
  }
  positionPop(anchor) {
    let host = this.ui.getBoundingClientRect(), sheet = !!this.textEdit;
    if (this.pop.toggleClass("is-sheet", sheet), sheet) {
      if (!this.pop.querySelector(".ink-sheet-bar")) {
        let bar = createDiv({ cls: "ink-sheet-bar" });
        bar.createDiv({ cls: "ink-sheet-grip" });
        let x3 = bar.createEl("button", { cls: "ink-btn ink-sheet-close", attr: { type: "button", "aria-label": "Close" } });
        (0, import_obsidian3.setIcon)(x3, "x"), x3.addEventListener("click", () => this.closePop()), this.pop.prepend(bar);
      }
      let safe2 = this.lastSafe || { top: 0, bottom: 0, left: 0, right: 0 };
      this.pop.style.left = `${safe2.left}px`, this.pop.style.width = `${host.width - safe2.left - safe2.right}px`;
      let pr2 = this.pop.getBoundingClientRect();
      this.pop.style.top = `${Math.max(safe2.top + 8, host.height - safe2.bottom - pr2.height)}px`, this.placeTextEditor();
      return;
    }
    this.pop.style.width = "";
    let a3 = anchor.getBoundingClientRect(), box = (anchor.closest(".ink-slotbar, .ink-dock, .ink-textbar") || anchor).getBoundingClientRect(), pr = this.pop.getBoundingClientRect(), container = anchor.closest(".ink-slotbar, .ink-dock, .ink-textbar"), opens = ["right", "left", "down", "up"].find((d3) => container && container.hasClass(`opens-${d3}`)) || "right", safe = this.lastSafe || { top: 0, bottom: 0, left: 0, right: 0 }, left, top;
    opens === "right" ? (left = box.right - host.left + 8, top = a3.top - host.top + a3.height / 2 - pr.height / 2) : opens === "left" ? (left = box.left - host.left - pr.width - 8, top = a3.top - host.top + a3.height / 2 - pr.height / 2) : opens === "down" ? (top = box.bottom - host.top + 8, left = a3.left - host.left + a3.width / 2 - pr.width / 2) : (top = box.top - host.top - pr.height - 8, left = a3.left - host.left + a3.width / 2 - pr.width / 2), left = Math.max(8, Math.min(host.width - pr.width - 8, left)), top = Math.max(safe.top + 8, Math.min(host.height - safe.bottom - pr.height - 8, top)), this.pop.style.left = `${left}px`, this.pop.style.top = `${top}px`;
  }
  buildEraserPop(p3) {
    p3.createDiv({ cls: "ink-pop-title", text: "Eraser" });
    let mode = this.state.eraserMode || "element";
    this.modeGrid(p3, [
      { id: "element", name: "Element", icon: "ink-eraser-element", tint: "#e07a7a" },
      { id: "fine", name: "Fine", icon: "ink-eraser-fine", tint: "#f0a868" }
    ], mode, (id) => {
      this.state.eraserMode = id, this.plugin.saveState(), this.openPop("eraser", this.eraserBtn);
    }, () => {
    }), mode === "fine" && this.buildStrength(p3), p3.createDiv({ cls: "ink-hint", text: mode === "fine" ? "Rubs out just the ink under the eraser." : "Removes whole strokes, shapes and text you touch." }), mode === "fine" && this.buildBrushRow(p3, "eraser");
  }
  /** A row of icon buttons; those with more inside show a chevron and drill in. */
  modeGrid(parent, items, current, onPick, onOpen) {
    let grid = parent.createDiv({ cls: "ink-mode-grid" });
    for (let m3 of items) {
      let b3 = grid.createEl("button", { cls: "ink-mode-btn", attr: { type: "button", "aria-label": m3.name } });
      b3.toggleClass("is-active", current === m3.id);
      let ic = b3.createSpan({ cls: "ink-mode-icon" });
      (0, import_obsidian3.setIcon)(ic, m3.icon), m3.tint && (ic.style.color = m3.tint), b3.createSpan({ cls: "ink-mode-name", text: m3.name }), m3.page && (0, import_obsidian3.setIcon)(b3.createSpan({ cls: "ink-mode-more" }), "chevron-right"), b3.addEventListener("click", () => {
        m3.page && current === m3.id ? onOpen(m3.page) : onPick(m3.id);
      });
    }
    return grid;
  }
  pixelPage(p3, title, build) {
    let head = p3.createDiv({ cls: "ink-pop-head" });
    this.iconBtn(head, "chevron-left", "Back", () => {
      this.pixPage = null, this.openPop("pixel", this.pixelBtn);
    }, "ink-back"), head.createDiv({ cls: "ink-pop-title", text: title }), build(p3);
  }
  strengthSlider(p3) {
    let sec = p3.createDiv({ cls: "ink-section" });
    sec.createDiv({ cls: "ink-label", text: "Strength" }), slider(sec, {
      min: 1,
      max: 100,
      round: Math.round,
      get: () => {
        var _a2;
        return (_a2 = this.state.pixelStrength) != null ? _a2 : 50;
      },
      set: (v3) => {
        this.state.pixelStrength = v3, this.plugin.saveState();
      },
      format: (v3) => `${Math.round(v3)}%`
    });
  }
  buildPixelPop(p3) {
    let st2 = this.state, rebuild = () => this.openPop("pixel", this.pixelBtn), open = (page) => {
      this.pixPage = page, rebuild();
    };
    if (this.pixPage === "brush")
      return this.pixelPage(p3, "Pixel brush", () => {
        let current = st2.pixelBrush || "square", row = p3.createDiv({ cls: "ink-choice" }), sq = row.createEl("button", { cls: "ink-choice-row", attr: { type: "button" } });
        sq.toggleClass("is-active", current === "square"), (0, import_obsidian3.setIcon)(sq.createSpan({ cls: "ink-choice-icon" }), "square");
        let sqt = sq.createDiv({ cls: "ink-choice-text" });
        sqt.createDiv({ cls: "ink-choice-name", text: "Square" }), sqt.createDiv({ cls: "ink-choice-desc", text: "Solid pixels" }), sq.addEventListener("click", () => {
          st2.pixelBrush = "square", this.plugin.saveState(), rebuild();
        });
        let br = current === "square" ? null : getBrush(current), pickRow = row.createEl("button", { cls: "ink-choice-row", attr: { type: "button" } });
        pickRow.toggleClass("is-active", current !== "square");
        let img = pickRow.createEl("img", { cls: "ink-lib-preview", attr: { alt: "" } });
        br && this.plugin.brushPreview(br, this.resolveColor(st2.pixelStyle.color)).then((src) => {
          src && (img.src = src);
        });
        let t3 = pickRow.createDiv({ cls: "ink-choice-text" });
        t3.createDiv({ cls: "ink-choice-name", text: br ? br.name : "Choose a brush" }), t3.createDiv({ cls: "ink-choice-desc", text: "Approximated in pixels from its shape and grain" }), (0, import_obsidian3.setIcon)(pickRow.createSpan({ cls: "ink-mode-more" }), "chevron-right"), pickRow.addEventListener("click", () => {
          this.libFor = "pixel", this.openPop("library", this.pixelBtn);
        }), current !== "square" && this.strengthSlider(p3);
      });
    if (this.pixPage === "shape")
      return this.pixelPage(p3, "Shape", () => {
        this.modeGrid(p3, [
          { id: "line", name: "Line", icon: "minus", tint: "#7ecb8f" },
          { id: "rect", name: "Box", icon: "square", tint: "#7ecb8f" },
          { id: "ellipse", name: "Ellipse", icon: "circle", tint: "#7ecb8f" }
        ], st2.pixelShape || "line", (id) => {
          st2.pixelShape = id, this.plugin.saveState(), rebuild();
        }, () => {
        });
        let row = p3.createEl("label", { cls: "ink-toggle-row" }), cb = row.createEl("input", { type: "checkbox" });
        cb.checked = !!st2.pixelFilled, row.createSpan({ text: "Filled" }), cb.addEventListener("change", () => {
          st2.pixelFilled = cb.checked, this.plugin.saveState();
        });
      });
    if (this.pixPage === "fill")
      return this.pixelPage(p3, "Fill", () => {
        this.modeGrid(p3, [
          { id: "fill", name: "Area", icon: "paint-bucket", tint: "#f0a868" },
          { id: "replace", name: "Same color", icon: "replace", tint: "#f0a868" }
        ], st2.pixelFillMode || "fill", (id) => {
          st2.pixelFillMode = id, this.plugin.saveState(), rebuild();
        }, () => {
        }), p3.createDiv({ cls: "ink-hint", text: "Area fills the connected patch you tap. Same color swaps every pixel of that color across the canvas." });
      });
    if (this.pixPage === "alter")
      return this.pixelPage(p3, "Alterations", () => {
        let alter = st2.pixelAlter || "aggregate";
        if (this.modeGrid(p3, [
          { id: "lighten", name: "Lighten", icon: "ink-dodge", tint: "#f2c94c" },
          { id: "darken", name: "Darken", icon: "ink-burn", tint: "#9b7bd4" },
          { id: "aggregate", name: "Aggregate", icon: "ink-spray", tint: "#4bbf9a" },
          { id: "texture", name: "Texture", icon: "ink-charcoal", tint: "#c98b5e" },
          { id: "soften", name: "Soften", icon: "ink-blend", tint: "#8fd4c4" }
        ], alter, (id) => {
          st2.pixelAlter = id, this.plugin.saveState(), rebuild();
        }, () => {
        }), this.strengthSlider(p3), alter === "texture") {
          let sec = p3.createDiv({ cls: "ink-section" });
          sec.createDiv({ cls: "ink-label", text: "Texture" });
          let row = sec.createDiv({ cls: "ink-segmented" });
          for (let [id, name] of TEXTURES) {
            let btn = row.createEl("button", { text: name, attr: { type: "button" } });
            btn.toggleClass("is-active", (st2.pixelTexture || "grit") === id), btn.addEventListener("click", () => {
              st2.pixelTexture = id, this.plugin.saveState(), rebuild();
            });
          }
          this.colorRow(sec, "Texture color", () => st2.textureColor || st2.pixelStyle.color, (c3) => {
            st2.textureColor = c3, this.plugin.saveState();
          }, rebuild);
          let fillRow = sec.createEl("label", { cls: "ink-toggle-row" }), fcb = fillRow.createEl("input", { type: "checkbox" });
          fcb.checked = !!st2.textureFill, fillRow.createSpan({ text: "Fill a whole area in one tap" }), fcb.addEventListener("change", () => {
            st2.textureFill = fcb.checked, this.plugin.saveState();
          }), sec.createDiv({ cls: "ink-hint", text: "Haze veils an area, Grit and Noise roughen it, Cracks run thin dark lines through it, Dither checkers the color in. Filling covers the connected patch of matching color (or empty space) you tap." });
        }
        if (alter === "soften") {
          let sec = p3.createDiv({ cls: "ink-section" });
          sec.createDiv({ cls: "ink-label", text: "Range" }), slider(sec, {
            min: 5,
            max: 100,
            round: Math.round,
            get: () => {
              var _a2;
              return (_a2 = st2.softenRange) != null ? _a2 : 50;
            },
            set: (v3) => {
              st2.softenRange = v3, this.plugin.saveState();
            },
            format: (v3) => `${Math.round(v3)}%`
          }), sec.createDiv({ cls: "ink-hint", text: "Soften evens an area out towards the current color: pixels close to it are averaged together, and Range sets how far from that color still counts." });
        }
        if (alter === "aggregate") {
          this.buildPrismSection(p3, st2.prism, rebuild);
          let row = p3.createEl("label", { cls: "ink-toggle-row" }), cb = row.createEl("input", { type: "checkbox" });
          cb.checked = !!st2.aggregateAdds, row.createSpan({ text: "Also add new pixels" }), cb.addEventListener("change", () => {
            st2.aggregateAdds = cb.checked, this.plugin.saveState();
          }), p3.createDiv({ cls: "ink-hint", text: "Aggregate varies the pixels already there. Turn this on to let it paint into empty cells too." });
        }
      });
    if (this.pixPage === "canvas") return this.pixelPage(p3, "Canvas", () => this.buildPixelCanvasPage(p3, rebuild));
    p3.createDiv({ cls: "ink-pop-title", text: "Pixel tools" }), this.modeGrid(p3, [
      { id: "paint", name: "Paint", icon: "pencil", tint: "#6ba8f5", page: "brush" },
      { id: "erase", name: "Erase", icon: "ink-eraser-fine", tint: "#e07a7a" },
      { id: "shape", name: "Shape", icon: "square", tint: "#7ecb8f", page: "shape" },
      { id: "fill", name: "Fill", icon: "paint-bucket", tint: "#f0a868", page: "fill" },
      { id: "blend", name: "Blend", icon: "ink-blend", tint: "#8fb8d8" },
      { id: "alter", name: "Alter", icon: "ink-spray", tint: "#b58ce0", page: "alter" }
    ], st2.pixelMode || "paint", (id) => {
      st2.pixelMode = id, this.plugin.saveState(), rebuild();
    }, open), (["blend", "alter"].includes(st2.pixelMode) || st2.pixelMode === "paint" && (st2.pixelBrush || "square") !== "square") && this.strengthSlider(p3), this.colorRow(p3, "Pixel color", () => st2.pixelStyle.color, (c3) => {
      st2.pixelStyle.color = c3, this.plugin.saveState(), this.updateUI();
    }, rebuild);
    let go = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
    (0, import_obsidian3.setIcon)(go.createSpan(), "settings"), go.createSpan({ text: "Grid options" }), (0, import_obsidian3.setIcon)(go.createSpan({ cls: "ink-mode-more" }), "chevron-right"), go.addEventListener("click", () => open("canvas")), p3.createDiv({ cls: "ink-hint", text: "Tap a tool again to open its options. Size sets the brush in pixels; opacity makes translucent pixels." });
  }
  buildPixelCanvasPage(p3, rebuild) {
    let st2 = this.state, sec = p3.createDiv({ cls: "ink-section" });
    sec.createDiv({ cls: "ink-label", text: "New canvas size" }), this.gridSizeControls(sec, rebuild);
    let opt = p3.createDiv({ cls: "ink-section" }), toggle = (label, get, set) => {
      let row = opt.createEl("label", { cls: "ink-toggle-row" }), cb = row.createEl("input", { type: "checkbox" });
      cb.checked = get(), row.createSpan({ text: label }), cb.addEventListener("change", () => set(cb.checked));
    };
    toggle("Show pixel grid while painting", () => st2.pixelGrid !== !1, (v3) => {
      st2.pixelGrid = v3, this.plugin.saveState(), this.renderPixelGrid();
    });
    let mar = p3.createDiv({ cls: "ink-section" });
    mar.createDiv({ cls: "ink-label", text: "Margin around canvases" }), slider(mar, {
      min: 0,
      max: 60,
      round: Math.round,
      get: () => {
        var _a2;
        return (_a2 = st2.pixelBuffer) != null ? _a2 : 16;
      },
      set: (v3) => {
        st2.pixelBuffer = v3, this.plugin.saveState();
      },
      format: (v3) => `${Math.round(v3)} px`
    }), mar.createDiv({ cls: "ink-hint", text: "A stroke starting within this much of a canvas paints on it instead of starting a new one." });
    let target = this.targetPixel();
    if (target) {
      toggle("Border around this canvas", () => target.border !== !1, (v3) => this.commit((items) => items.map((i3) => i3.id === target.id ? { ...i3, border: v3 } : i3)));
      let res = p3.createDiv({ cls: "ink-section" });
      res.createDiv({ cls: "ink-label", text: `Resolution of this canvas (${target.cols}\xD7${target.rows})` });
      let apply = (cols, rows) => {
        let w3 = target.cols * target.cell, h3 = target.rows * target.cell, cells = resampleCells(target, cols, rows);
        this.commit((items) => items.map((i3) => i3.id === target.id ? { ...i3, cols, rows, cell: Math.min(w3 / cols, h3 / rows), cells } : i3)), rebuild();
      }, row = res.createDiv({ cls: "ink-segmented" });
      for (let n3 of [16, 32, 64, 128, 256]) {
        let b3 = row.createEl("button", { text: `${n3}\xB2`, attr: { type: "button" } });
        b3.toggleClass("is-active", target.cols === n3 && target.rows === n3), b3.addEventListener("click", () => apply(n3, n3));
      }
      let cw = res.createDiv({ cls: "ink-pixel-custom" }), field = (label, key2) => {
        let inp = cw.createEl("label", { text: label }).createEl("input", { type: "number", attr: { min: "1", max: String(MAX_GRID), inputmode: "numeric" } });
        inp.value = String(target[key2]), inp.addEventListener("keydown", (e3) => e3.stopPropagation()), inp.addEventListener("change", () => {
          let v3 = Math.max(1, Math.min(MAX_GRID, Math.round(+inp.value || 1)));
          apply(key2 === "cols" ? v3 : target.cols, key2 === "rows" ? v3 : target.rows);
        });
      };
      field("Width", "cols"), field("Height", "rows"), res.createDiv({ cls: "ink-hint", text: "Changing the resolution keeps the art, remapped onto the new grid. Up to 512\xD7512; very large grids get slower to paint on." }), target.ref && this.buildImageSection(opt, target, rebuild), opt.createDiv({ cls: "ink-label", text: `Save as PNG (${target.cols}\xD7${target.rows}, transparent background)` });
      let ex = opt.createDiv({ cls: "ink-segmented" });
      for (let f3 of [1, 4, 8, 16])
        ex.createEl("button", { text: `${f3}\xD7`, attr: { type: "button", "aria-label": `Save at ${f3}\xD7` } }).addEventListener("click", () => this.exportPixel(target, f3));
    } else
      opt.createDiv({ cls: "ink-hint", text: "Select or paint in a pixel canvas to change its border, resolution or save it as a PNG." });
  }
  /** Grid size presets plus width/height, shared by the panel and the placement bar. */
  gridSizeControls(parent, after) {
    let st2 = this.state, sizes = parent.createDiv({ cls: "ink-segmented" });
    for (let n3 of [16, 32, 64, 128]) {
      let b3 = sizes.createEl("button", { text: `${n3}\xB2`, attr: { type: "button" } });
      b3.toggleClass("is-active", st2.pixelNew.cols === n3 && st2.pixelNew.rows === n3), b3.addEventListener("click", () => {
        st2.pixelNew = { cols: n3, rows: n3 }, this.plugin.saveState(), after && after();
      });
    }
    let custom2 = parent.createDiv({ cls: "ink-pixel-custom" }), num = (label, key2) => {
      let inp = custom2.createEl("label", { text: label }).createEl("input", { type: "number", attr: { min: "1", max: String(MAX_GRID), inputmode: "numeric" } });
      inp.value = String(st2.pixelNew[key2]), inp.addEventListener("keydown", (e3) => e3.stopPropagation()), inp.addEventListener("change", () => {
        let v3 = Math.max(1, Math.min(MAX_GRID, Math.round(+inp.value || 1)));
        st2.pixelNew = { ...st2.pixelNew, [key2]: v3 }, inp.value = String(v3), this.plugin.saveState(), after && after();
      });
    };
    num("Width", "cols"), num("Height", "rows");
  }
  /**
   * Hue / saturation / brightness / contrast. The sliders hold their positions so you can
   * set several before applying; the tick commits, to the selection if there is one,
   * otherwise to the current color.
   */
  buildAdjustSection(p3, cp, opts = {}) {
    let sec = p3.createDiv({ cls: "ink-section ink-adjust" }), head = sec.createDiv({ cls: "ink-adjust-head" }), title = head.createDiv({ cls: "ink-label" }), adj = this.adjValues = this.adjValues || { hue: 0, sat: 0, light: 0, contrast: 0 }, selAtOpen = this.selectedItems(), base = this.currentStyle().color, handles = [], apply = null, reset = () => {
      adj.hue = adj.sat = adj.light = adj.contrast = 0, base = this.currentStyle().color, handles.forEach((h3) => h3.refresh()), apply && apply.toggleClass("is-ready", !1);
    };
    this.resetAdjust = reset;
    let previewSelection = () => {
      let f3 = `hue-rotate(${adj.hue}deg) saturate(${(100 + adj.sat) / 100}) brightness(${(100 + adj.light * 0.8) / 100}) contrast(${(100 + adj.contrast) / 100})`;
      for (let it of selAtOpen) {
        let el = this.idEl.get(it.id);
        el && (el.style.filter = f3);
      }
    }, clearPreview = () => {
      for (let it of selAtOpen) {
        let el = this.idEl.get(it.id);
        el && (el.style.filter = "");
      }
    }, commitSelection = () => {
      if (!isAdjusted(adj)) return;
      let ids = new Set(selAtOpen.map((i3) => i3.id)), values = { ...adj };
      clearPreview(), this.commit((items) => items.map((i3) => ids.has(i3.id) ? adjustItem(i3, values) : i3)), reset();
    };
    selAtOpen.length || (apply = head.createEl("button", { cls: "ink-apply", attr: { type: "button", "aria-label": "Apply to the current color" } }), (0, import_obsidian3.setIcon)(apply, "check"), apply.addEventListener("click", () => {
      isAdjusted(adj) && (this.applyStyle({ color: adjustColor(base, adj) }), cp && cp.sync(), reset());
    }));
    for (let [key2, label, min, max2] of [
      ["hue", "Hue", -180, 180],
      ["sat", "Saturation", -100, 100],
      ["light", "Brightness", -100, 100],
      ["contrast", "Contrast", -100, 100]
    ]) {
      let row = sec.createDiv({ cls: "ink-adjust-row" });
      row.createSpan({ cls: "ink-label", text: label }), handles.push(slider(row, {
        min,
        max: max2,
        round: Math.round,
        get: () => adj[key2],
        set: (v3, final) => {
          if (adj[key2] = v3, selAtOpen.length) {
            final ? commitSelection() : previewSelection();
            return;
          }
          apply && apply.toggleClass("is-ready", isAdjusted(adj));
          let next = adjustColor(base, adj);
          next !== base && (this.previewStyle({ color: next }), cp && cp.render(next));
        },
        format: (v3) => v3 > 0 ? `+${Math.round(v3)}` : String(Math.round(v3))
      }));
    }
    let hint = sec.createDiv({ cls: "ink-hint" });
    this.refreshAdjust = () => {
      title.setText(selAtOpen.length ? `Adjust ${selAtOpen.length} selected` : "Adjust color"), hint.setText(selAtOpen.length ? "Changes apply as you slide, to drawings, pixel art and pictures alike." : this.currentStyle().color === "auto" ? "Pick a color first: the theme color follows light and dark mode, so there is nothing to shift." : "Set the sliders, then tap the tick to keep the new color.");
    }, this.refreshAdjust(), opts.soloTitle && title.setText(opts.soloTitle);
  }
  /** Just the adjustment sliders, for a quick pass over a selection. */
  buildAdjustPop(p3) {
    this.buildAdjustSection(p3, null);
  }
  /**
   * Picture controls for a pixel canvas or a shape: use it as a reference underlay, convert
   * it (to pixels, or to strokes inside a shape), change its opacity or remove it.
   */
  /**
   * First page of a PDF as a picture, rendered once with Obsidian's own PDF engine and kept
   * in memory. Until it's ready the card shows a document glyph.
   */
  pdfThumb(path) {
    if (!path) return null;
    let cache2 = this.plugin.pdfThumbs = this.plugin.pdfThumbs || /* @__PURE__ */ new Map(), hit = cache2.get(path);
    return hit !== void 0 ? hit : (cache2.set(path, null), (async () => {
      try {
        let file = this.plugin.app.vault.getAbstractFileByPath(path);
        if (!file || typeof import_obsidian3.loadPdfJs != "function") return;
        let pdfjs = await (0, import_obsidian3.loadPdfJs)(), data = await this.plugin.app.vault.readBinary(file), pdf = await pdfjs.getDocument({ data: new Uint8Array(data) }).promise, page = await pdf.getPage(1), vp0 = page.getViewport({ scale: 1 }), vp = page.getViewport({ scale: Math.min(2, 900 / vp0.width) }), c3 = document.createElement("canvas");
        c3.width = Math.round(vp.width), c3.height = Math.round(vp.height), await page.render({ canvasContext: c3.getContext("2d"), viewport: vp }).promise, cache2.set(path, c3.toDataURL("image/jpeg", 0.85)), c3.width = c3.height = 0, pdf.destroy && pdf.destroy();
        for (let it of this.items)
          if (it.type === "image" && it.ref && it.ref.path === path) {
            let el = this.idEl.get(it.id);
            el && el.replaceChildren(...buildItemEl(it, this.renderOpts()).childNodes);
          }
      } catch (e3) {
        console.warn("[Palette] PDF preview failed", e3);
      }
    })(), null);
  }
  /** Open a file from the drawing layer in Obsidian's own viewer. */
  openMedia(item) {
    let file = item.ref && item.ref.path && this.plugin.app.vault.getAbstractFileByPath(item.ref.path);
    if (!file) {
      new import_obsidian3.Notice("Palette: that file isn't in the vault any more.");
      return;
    }
    this.plugin.app.workspace.getLeaf("tab").openFile(file);
  }
  /**
   * When items are replaced by a new one (flatten, or an effect turning them into a group),
   * move any connector ends on them onto the replacement, pinned to exactly the same spot.
   */
  reanchorEnds(connectors, ids, newId, box) {
    let opts = this.renderOpts(), move = (end) => {
      if (!end || !end.id || !ids.has(end.id)) return end;
      let pt = endPoint(end, opts.lookup, (x3) => this.edgeBox(x3), opts.nodeBox);
      if (!pt || !box) return end;
      let dir = pt.side && pt.side !== "in" ? pt.side : end.dir;
      return { id: newId, u: (pt.x - box.x) / (box.width || 1), v: (pt.y - box.y) / (box.height || 1), side: "in", ...dir ? { dir } : {}, part: end.id };
    }, out = /* @__PURE__ */ new Map();
    for (let c3 of connectors) {
      let from = move(c3.from), to = move(c3.to);
      (from !== c3.from || to !== c3.to) && out.set(c3.id, { ...c3, from, to });
    }
    return out;
  }
  /** Turn everything selected about the selection's middle (or a given point). */
  rotateSelection(deg, cx, cy) {
    let sel = this.selection;
    if (sel.size) {
      if (cx === void 0) {
        let b3 = this.selectionBox();
        if (!b3) return;
        cx = b3.x + b3.width / 2, cy = b3.y + b3.height / 2;
      }
      this.commit((items) => items.map((i3) => sel.has(i3.id) ? rotateItem(i3, deg, cx, cy) : i3)), this.renderSelection();
    }
  }
  /**
   * Merge the selection into one drawing. It keeps every part as it was (vector stays
   * vector), but moves, scales, rotates and takes effects as a single thing. Connectors
   * attached to the parts are re-attached to the whole.
   */
  flattenSelection() {
    let sel = this.selection, parts = this.items.filter((i3) => sel.has(i3.id) && i3.type !== "connector");
    if (parts.length < 2) return;
    let group = { id: uid(), type: "group", flat: !0, items: parts, fx: [] }, gb = unionBox(parts.map((i3) => this.edgeBox(i3))), ids = new Set(parts.map((i3) => i3.id)), opts = this.renderOpts(), reattach = (end) => {
      if (!end || !end.id || !ids.has(end.id)) return end;
      let pt = endPoint(end, opts.lookup, (x3) => this.edgeBox(x3), opts.nodeBox);
      if (!pt || !gb) return end;
      let dir = pt.side && pt.side !== "in" ? pt.side : end.dir;
      return { id: group.id, u: (pt.x - gb.x) / (gb.width || 1), v: (pt.y - gb.y) / (gb.height || 1), side: "in", ...dir ? { dir } : {}, part: end.id };
    }, lastIdx = Math.max(...parts.map((q2) => this.items.indexOf(q2)));
    this.commit((items) => {
      let out = [];
      return items.forEach((it, i3) => {
        if (ids.has(it.id)) {
          i3 === lastIdx && out.push(group);
          return;
        }
        out.push(it.type === "connector" ? { ...it, from: reattach(it.from), to: reattach(it.to) } : it);
      }), out;
    }), this.selection = /* @__PURE__ */ new Set([group.id]), this.renderSelection(), new import_obsidian3.Notice(`Flattened ${parts.length} items into one.`);
  }
  unflattenSelection() {
    let grp = this.selectedItems().find((i3) => i3.type === "group" && i3.flat && !(i3.fx || []).length);
    if (!grp) return;
    let opts = this.renderOpts(), gb = this.edgeBox(grp), back = (end) => {
      if (!end || end.id !== grp.id) return end;
      let pt = endPoint(end, opts.lookup, (x3) => this.edgeBox(x3), opts.nodeBox);
      if (!pt) return end;
      let part = grp.items.find((c3) => c3.id === end.part);
      if (!part) {
        let best = 1 / 0;
        for (let c3 of grp.items) {
          let e4 = this.edgeBox(c3), dx = Math.max(e4.x - pt.x, 0, pt.x - e4.x - e4.width), dy = Math.max(e4.y - pt.y, 0, pt.y - e4.y - e4.height), dd = Math.hypot(dx, dy);
          dd < best && (best = dd, part = c3);
        }
      }
      if (!part) return end;
      let e3 = this.edgeBox(part), side = end.dir || sideOf(e3, pt.x, pt.y);
      return { id: part.id, u: r22(Math.max(0, Math.min(1, (pt.x - e3.x) / (e3.width || 1)))), v: r22(Math.max(0, Math.min(1, (pt.y - e3.y) / (e3.height || 1)))), side };
    };
    this.commit((items) => items.flatMap((it) => it.id === grp.id ? grp.items : it.type === "connector" ? [{ ...it, from: back(it.from), to: back(it.to) }] : [it])), this.selection = new Set(grp.items.map((i3) => i3.id)), this.renderSelection();
  }
  /** Selection options, from tapping the active pointer, transform or lasso tool. */
  buildSelectionPop(p3) {
    let rebuild = () => this.openPop("selection", this.toolBtns.get(this.tool)), sel = this.selectedItems();
    p3.createDiv({ cls: "ink-pop-title", text: sel.length ? `Selection (${sel.length})` : "Selection" });
    let row = p3.createEl("label", { cls: "ink-toggle-row" }), cb = row.createEl("input", { type: "checkbox" });
    cb.checked = !!this.state.multiSelect, row.createSpan({ text: "Multi-select: taps add to the selection" }), cb.addEventListener("change", () => {
      this.state.multiSelect = cb.checked, this.plugin.saveState();
    });
    let grid = [];
    sel.length > 1 && grid.push({ id: "flatten", name: "Flatten", icon: "layers", tint: "#6ba8f5" }), sel.length === 1 && sel[0].type === "group" && sel[0].flat && !(sel[0].fx || []).length && grid.push({ id: "unflatten", name: "Unflatten", icon: "ungroup", tint: "#6ba8f5" }), sel.length && (grid.push({ id: "rotl", name: "Rotate left", icon: "rotate-ccw", tint: "#7ecb8f" }), grid.push({ id: "rotr", name: "Rotate right", icon: "rotate-cw", tint: "#7ecb8f" })), grid.length && this.modeGrid(p3, grid, null, (id) => {
      id === "flatten" ? this.flattenSelection() : id === "unflatten" ? this.unflattenSelection() : id === "rotl" ? this.rotateSelection(-15) : id === "rotr" && this.rotateSelection(15), rebuild();
    }, () => {
    }), p3.createDiv({ cls: "ink-hint", text: sel.length ? "Flatten merges the selection into one drawing that moves, scales and rotates as a whole. Drag the round handle above a selection to rotate it freely." : "Select something to flatten or rotate it. With multi-select on, each tap adds or removes an item." });
  }
  /** Alter brush options: same set as the pixel Alter tools, for ordinary ink. */
  buildAlterPop(p3) {
    let A3 = this.state.alter, rebuild = () => this.openPop("alter", this.alterBtn);
    p3.createDiv({ cls: "ink-pop-title", text: "Alter ink" });
    let mode = A3.mode || "aggregate";
    this.modeGrid(p3, [
      { id: "lighten", name: "Lighten", icon: "ink-dodge", tint: "#f2c94c" },
      { id: "darken", name: "Darken", icon: "ink-burn", tint: "#9b7bd4" },
      { id: "aggregate", name: "Aggregate", icon: "ink-spray", tint: "#4bbf9a" },
      { id: "texture", name: "Texture", icon: "ink-charcoal", tint: "#c98b5e" },
      { id: "soften", name: "Soften", icon: "ink-blend", tint: "#8fd4c4" }
    ], mode, (id) => {
      A3.mode = id, this.plugin.saveState(), rebuild();
    }, () => {
    });
    let sec = p3.createDiv({ cls: "ink-section" });
    if (sec.createDiv({ cls: "ink-label", text: "Strength" }), slider(sec, {
      min: 1,
      max: 100,
      round: Math.round,
      get: () => {
        var _a2;
        return (_a2 = A3.strength) != null ? _a2 : 40;
      },
      set: (v3) => {
        A3.strength = v3, this.plugin.saveState();
      },
      format: (v3) => `${Math.round(v3)}%`
    }), mode === "aggregate") {
      this.buildPrismSection(p3, A3.prism, rebuild);
      let row = p3.createEl("label", { cls: "ink-toggle-row" }), cb = row.createEl("input", { type: "checkbox" });
      cb.checked = !!A3.addNew, row.createSpan({ text: "Also add new ink" }), cb.addEventListener("change", () => {
        A3.addNew = cb.checked, this.plugin.saveState();
      }), p3.createDiv({ cls: "ink-hint", text: 'Picks up the color under the brush and paints related shades of it, lighter, darker, richer or duller, for depth. Prismatic mixes in neighboring hues or a second color. Turn on "add new ink" to paint over empty canvas too, in the current color.' });
    }
    if (mode === "texture") {
      let ts = p3.createDiv({ cls: "ink-section" });
      ts.createDiv({ cls: "ink-label", text: "Texture" });
      let row = ts.createDiv({ cls: "ink-segmented" });
      for (let [id, name] of [["grit", "Grit"], ["noise", "Noise"], ["haze", "Haze"]]) {
        let b3 = row.createEl("button", { text: name, attr: { type: "button" } });
        b3.toggleClass("is-active", (A3.texture || "grit") === id), b3.addEventListener("click", () => {
          A3.texture = id, this.plugin.saveState(), rebuild();
        });
      }
      (A3.texture || "grit") === "haze" && this.colorRow(ts, "Texture color", () => A3.textureColor || this.state.alterStyle.color, (c3) => {
        A3.textureColor = c3, this.plugin.saveState();
      }, rebuild), ts.createDiv({ cls: "ink-hint", text: "Grit lays a darker shade of the ink in the brush's grain, Noise scatters lighter and darker shades, Haze veils it in a color. Grainy brushes (charcoal, pencil, crayon) show the most texture." });
    }
    mode === "soften" && p3.createDiv({ cls: "ink-section" }).createDiv({ cls: "ink-hint", text: "Picks up the colors around the brush and glazes their average over the edge between them, so neighboring colors melt together." }), (mode === "lighten" || mode === "darken") && p3.createDiv({ cls: "ink-hint", text: "Picks up the color under the brush and paints a lighter or darker shade of the same hue, so greens stay green. Strength sets how far the shade goes and how firmly it lays down." });
    let br = getBrush(this.state.alterStyle.brush || "softround"), pick = p3.createEl("button", { cls: "ink-choice-row", attr: { type: "button" } }), img = pick.createEl("img", { cls: "ink-lib-preview", attr: { alt: "" } });
    this.plugin.brushPreview(br, this.resolveColor("auto")).then((src) => {
      src && (img.src = src);
    });
    let t3 = pick.createDiv({ cls: "ink-choice-text" });
    t3.createDiv({ cls: "ink-choice-name", text: br.name }), t3.createDiv({ cls: "ink-choice-desc", text: "Brush shape and grain. Tap to change." }), pick.addEventListener("click", () => {
      this.libFor = "alter", this.openPop("library", this.alterBtn);
    }), p3.createDiv({ cls: "ink-hint", text: "It paints like a brush: each stroke is its own layer of paint over what's there, so it draws as fast as normal ink and undoes, erases and moves like any stroke. Nothing is laid down over empty canvas." });
  }
  /**
   * Fill for text: solid, a gradient from the text color to a second color, or a texture
   * of the second color over the first. Applies to the text you're editing (or selected
   * text) and becomes the default for new text.
   */
  buildTextFillPop(p3) {
    let ts = this.state.textStyle, cur = () => {
      let te2 = this.textEdit;
      if (te2) return te2.item.paint || ts.paint || { kind: "solid" };
      let sel = this.selectedItems().find((i3) => i3.type === "text");
      return sel && sel.paint || ts.paint || { kind: "solid" };
    }, apply = (patch) => {
      let next = { ...cur(), ...patch };
      ts.paint = next, this.plugin.saveState();
      let te2 = this.textEdit;
      te2 && (te2.item = { ...te2.item, paint: next }, this.items.some((i3) => i3.id === te2.item.id) && this.commit((items) => items.map((i3) => i3.id === te2.item.id ? { ...i3, paint: next } : i3)), this.styleTextEditor());
      let ids = new Set(this.selectedItems().filter((i3) => i3.type === "text").map((i3) => i3.id));
      ids.size && this.commit((items) => items.map((i3) => ids.has(i3.id) ? { ...i3, paint: next } : i3)), this.openPop("textfill", this.textFillBtn);
    }, st2 = cur();
    if (p3.createDiv({ cls: "ink-pop-title", text: "Text fill" }), this.modeGrid(p3, [
      { id: "solid", name: "Solid", icon: "square", tint: "#8fb8d8" },
      { id: "gradient", name: "Gradient", icon: "ink-gradient", tint: "#6ba8f5" },
      { id: "texture", name: "Texture", icon: "ink-charcoal", tint: "#c98b5e" }
    ], st2.kind || "solid", (id) => apply({ kind: id }), () => {
    }), st2.kind && st2.kind !== "solid" && this.colorRow(p3, "Second color", () => st2.color2 || "#f08c00", (c3) => {
      ts.paint = { ...cur(), color2: c3 }, this.plugin.saveState();
    }, () => apply({ color2: ts.paint.color2 })), st2.kind === "gradient") {
      let row = p3.createDiv({ cls: "ink-adjust-row" });
      row.createSpan({ cls: "ink-label", text: "Angle" }), slider(row, {
        min: -180,
        max: 180,
        round: Math.round,
        get: () => st2.angle || 0,
        set: (v3, final) => {
          final && apply({ angle: v3 });
        },
        format: (v3) => `${Math.round(v3)}\xB0`
      });
    }
    if (st2.kind === "texture") {
      let seg = p3.createDiv({ cls: "ink-segmented" });
      for (let [id, name] of [["dots", "Dots"], ["lines", "Lines"], ["hatch", "Hatch"], ["check", "Check"], ["grain", "Grain"]]) {
        let b3 = seg.createEl("button", { text: name, attr: { type: "button" } });
        b3.toggleClass("is-active", (st2.pattern || "dots") === id), b3.addEventListener("click", () => apply({ pattern: id }));
      }
    }
    p3.createDiv({ cls: "ink-hint", text: "The first color is the text color; the second comes from here. New text uses whatever you set last." });
  }
  /** Layers for the whole canvas: stack order, show/hide, lock, freeze, and where new ink goes. */
  buildLayersPop(p3) {
    let layers = this.layers(), active = this.activeLayerId(), refresh = () => this.openPop("layers", this.layersBtn);
    if (p3.createDiv({ cls: "ink-pop-title", text: "Layers" }), this.focused) {
      p3.createDiv({ cls: "ink-hint", text: "Layers work on the whole canvas. Leave the painting to use them." });
      return;
    }
    let list = p3.createDiv({ cls: "ink-layers" }), counts = /* @__PURE__ */ new Map();
    for (let it of this.items) counts.set(layerOfItem(it), (counts.get(layerOfItem(it)) || 0) + 1);
    [...layers].reverse().forEach((lay) => {
      let i3 = layers.indexOf(lay), row = list.createDiv({ cls: "ink-layer-row" });
      row.toggleClass("is-active", lay.id === active), row.toggleClass("is-hidden", lay.visible === !1);
      let eye = row.createEl("button", { cls: "ink-btn", attr: { type: "button", "aria-label": lay.visible === !1 ? "Show" : "Hide" } });
      (0, import_obsidian3.setIcon)(eye, lay.visible === !1 ? "eye-off" : "eye"), eye.addEventListener("click", (e3) => {
        e3.stopPropagation(), lay.visible = lay.visible === !1, this.selection.clear(), this.saveLayers(), refresh();
      });
      let name = row.createDiv({ cls: "ink-layer-name" });
      name.createDiv({ text: lay.name }), name.createDiv({ cls: "ink-layer-meta", text: `${counts.get(lay.id) || 0} items${lay.locked ? " \xB7 locked" : ""}${lay._building ? " \xB7 preparing\u2026" : ""}` }), name.addEventListener("click", () => {
        this.activeLayer = lay.id, refresh();
      }), name.addEventListener("dblclick", () => this.renameLayer(lay, refresh));
      let lock = row.createEl("button", { cls: "ink-btn", attr: { type: "button", "aria-label": lay.locked ? "Unlock" : "Lock" } });
      (0, import_obsidian3.setIcon)(lock, lay.locked ? "lock" : "unlock"), lock.addEventListener("click", (e3) => {
        e3.stopPropagation(), lay.locked = !lay.locked, this.selection.clear(), this.saveLayers(), refresh();
      });
      let more = row.createEl("button", { cls: "ink-btn", attr: { type: "button", "aria-label": "More" } });
      (0, import_obsidian3.setIcon)(more, "ellipsis"), more.addEventListener("click", (e3) => {
        e3.stopPropagation();
        let menu = new import_obsidian3.Menu();
        menu.addItem((m3) => m3.setTitle("Rename").setIcon("pencil").onClick(() => this.renameLayer(lay, refresh))), menu.addItem((m3) => m3.setTitle("Rebuild tiles").setIcon("refresh-cw").onClick(() => {
          this.closePop(), this.rebuildLayer(lay);
        })), menu.addItem((m3) => m3.setTitle("Move up").setIcon("arrow-up").setDisabled(i3 >= layers.length - 1).onClick(() => {
          layers.splice(i3, 1), layers.splice(i3 + 1, 0, lay), this.reorderItems(), refresh();
        })), menu.addItem((m3) => m3.setTitle("Move down").setIcon("arrow-down").setDisabled(i3 <= 0).onClick(() => {
          layers.splice(i3, 1), layers.splice(i3 - 1, 0, lay), this.reorderItems(), refresh();
        })), menu.addItem((m3) => m3.setTitle("Merge down").setIcon("arrow-down-to-line").setDisabled(i3 <= 0).onClick(() => {
          let below = layers[i3 - 1];
          this.commit((items) => items.map((it) => layerOfItem(it) === lay.id ? { ...it, layer: below.id } : it)), layers.splice(i3, 1), this.activeLayer === lay.id && (this.activeLayer = below.id), this.saveLayers(), refresh();
        })), menu.addItem((m3) => m3.setTitle("Delete").setIcon("trash-2").setDisabled(layers.length <= 1 || !!counts.get(lay.id)).onClick(() => {
          layers.splice(i3, 1), this.saveLayers(), refresh();
        })), menu.showAtMouseEvent(e3);
      });
    });
    let add = p3.createEl("button", { cls: "ink-choice-row", attr: { type: "button" } }), ic = add.createSpan({ cls: "ink-mode-icon" });
    (0, import_obsidian3.setIcon)(ic, "plus"), add.createDiv({ cls: "ink-choice-text" }).createDiv({ cls: "ink-choice-name", text: "New layer" }), add.addEventListener("click", () => {
      let lay = { id: uid2(), name: `Layer ${layers.length + 1}`, visible: !0 };
      layers.push(lay), this.activeLayer = lay.id, this.saveLayers(), refresh();
    }), p3.createDiv({ cls: "ink-hint", text: 'New ink goes on the highlighted layer. Each layer is kept as tiles on disk and updated as you draw; "Rebuild tiles" redraws them from scratch if anything ever looks off. Deleting needs an empty layer: merge down first.' });
  }
  renameLayer(lay, done) {
    let name = window.prompt ? window.prompt("Layer name", lay.name) : null;
    name && name.trim() && (lay.name = name.trim(), this.saveLayers(), done && done());
  }
  /** After a reorder, items follow their layers' new order. */
  reorderItems() {
    let layers = this.layers();
    this.doc.update((items) => orderByLayer(items, layers)), this.saveLayers();
  }
  /**
   * Text effects, stackable: tap a chip to add or remove one; the settings below are for the
   * effect you tapped last. Applies to the text you're editing (or selected) and becomes
   * the default for new text.
   */
  buildTextEffectsPop(p3) {
    let ts = this.state.textStyle, cur = () => {
      let te2 = this.textEdit, it = te2 ? te2.item : this.selectedItems().find((i3) => i3.type === "text");
      return ((it ? Array.isArray(it.effects) ? it.effects : it.effect ? [it.effect] : null : null) || ts.effects || []).filter((e3) => e3 && e3.kind && e3.kind !== "none");
    }, apply = (next) => {
      ts.effects = next, this.plugin.saveState();
      let te2 = this.textEdit;
      te2 && (te2.item = { ...te2.item, effects: next, effect: void 0 }, this.items.some((i3) => i3.id === te2.item.id) && this.commit((items) => items.map((i3) => i3.id === te2.item.id ? { ...i3, effects: next, effect: void 0 } : i3)), this.styleTextEditor());
      let ids = new Set(this.selectedItems().filter((i3) => i3.type === "text").map((i3) => i3.id));
      ids.size && this.commit((items) => items.map((i3) => ids.has(i3.id) ? { ...i3, effects: next, effect: void 0 } : i3)), this.openPop("texteffects", this.textFxBtn);
    }, list = cur(), has = (k3) => list.some((e3) => e3.kind === k3), patchOne = (k3, patch) => apply(list.map((e3) => e3.kind === k3 ? { ...e3, ...patch } : e3));
    p3.createDiv({ cls: "ink-pop-title", text: "Text effects" });
    let chips = p3.createDiv({ cls: "ink-chips" });
    for (let [id, name] of [["outline", "Outline"], ["shadow", "Shadow"], ["glow", "Glow"], ["emboss", "Emboss"], ["extrude", "3D"]]) {
      let b3 = chips.createEl("button", { cls: "ink-chip", text: name, attr: { type: "button" } });
      b3.toggleClass("is-active", has(id)), b3.addEventListener("click", () => {
        has(id) && this.fxEdit === id ? apply(list.filter((e3) => e3.kind !== id)) : (this.fxEdit = id, has(id) ? this.openPop("texteffects", this.textFxBtn) : apply([...list, { kind: id }]));
      }), has(id) && this.fxEdit === id && b3.addClass("is-editing");
    }
    if (!list.length) {
      p3.createDiv({ cls: "ink-hint", text: "Tap one or more to stack them. Tap a selected effect twice to remove it." });
      return;
    }
    let ek = has(this.fxEdit) ? this.fxEdit : list[list.length - 1].kind;
    this.fxEdit = ek;
    let fx = list.find((e3) => e3.kind === ek), fxDef = TEXT_EFFECTS.find((e3) => e3.id === ek) || {};
    p3.createDiv({ cls: "ink-label", text: `${fxDef.name || ek}: tap it again to remove` });
    let defColor = () => {
      if (fxDef.color) return fxDef.color;
      let c3 = parseHex(this.resolveColor(this.textEdit ? this.textEdit.item.color : ts.color)) || [0.5, 0.5, 0.5];
      return toHex2(c3.map((v3) => v3 * 0.55));
    };
    this.colorRow(p3, ek === "emboss" ? "Relief color" : "Effect color", () => fx.color || defColor(), (c3) => {
      fx.color = c3, ts.effects = list, this.plugin.saveState();
    }, () => patchOne(ek, { color: fx.color }));
    let row = p3.createDiv({ cls: "ink-adjust-row" });
    if (row.createSpan({ cls: "ink-label", text: ek === "outline" ? "Width" : ek === "glow" ? "Spread" : ek === "extrude" ? "Depth" : "Distance" }), slider(row, {
      min: 0,
      max: 100,
      round: Math.round,
      get: () => {
        var _a2;
        return (_a2 = fx.strength) != null ? _a2 : 50;
      },
      set: (v3, final) => {
        final && patchOne(ek, { strength: v3 });
      },
      format: (v3) => `${Math.round(v3)}%`
    }), ek === "shadow" || ek === "emboss" || ek === "extrude") {
      let arow = p3.createDiv({ cls: "ink-adjust-row" });
      arow.createSpan({ cls: "ink-label", text: "Direction" }), slider(arow, {
        min: -180,
        max: 180,
        round: Math.round,
        get: () => {
          var _a2, _b2;
          return (_b2 = (_a2 = fx.angle) != null ? _a2 : fxDef.angle) != null ? _b2 : 45;
        },
        set: (v3, final) => {
          final && patchOne(ek, { angle: v3 });
        },
        format: (v3) => `${Math.round(v3)}\xB0`
      });
    }
  }
  // ---------- paintings: a framed area you work on by itself ----------
  /** Open a painting: everything else steps back, and it gets the view to itself. */
  enterPainting(item) {
    if (!item || item.type !== "painting") return;
    this.cancelGesture(), this.closePop(), this.selection.clear(), this.focusId = item.id, this.elCache = /* @__PURE__ */ new WeakMap(), this.render(), this.renderFocusChrome();
    let c3 = this.view.canvas, pad = Math.max(item.w, item.h) * 0.06;
    try {
      c3 && typeof c3.zoomToBbox == "function" && c3.zoomToBbox({ minX: item.x - pad, minY: item.y - pad, maxX: item.x + item.w + pad, maxY: item.y + item.h + pad });
    } catch {
    }
    this.updateUI();
  }
  exitPainting() {
    if (!this.focusId) return;
    this.cancelGesture(), this.closePop(), this.selection.clear();
    let id = this.focusId;
    this.focusId = null, this.elCache = /* @__PURE__ */ new WeakMap(), this.focusChrome && this.focusChrome.forEach((el) => el.remove()), this.focusChrome = null, this.render(), this.selection = /* @__PURE__ */ new Set([id]), this.renderSelection(), this.updateUI();
  }
  /**
   * While a painting is open: a backdrop that hides the rest of the canvas, the painting's
   * paper, its frame, and a bar to get back out.
   */
  renderFocusChrome() {
    this.focusChrome && this.focusChrome.forEach((el) => el.remove()), this.focusChrome = null;
    let item = this.focused;
    if (!item || !this.svg) return;
    let big = 1e6, back = svgEl("rect", { class: "ink-focus-backdrop", x: -big, y: -big, width: big * 2, height: big * 2 }), paper = svgEl("rect", { class: "ink-focus-paper", x: item.x, y: item.y, width: item.w, height: item.h, fill: item.bg || "var(--background-primary)" }), frame = svgEl("rect", { class: "ink-painting-frame is-open", x: item.x, y: item.y, width: item.w, height: item.h, fill: "none", "vector-effect": "non-scaling-stroke" }), under = svgEl("g", { class: "ink-focus-under" });
    under.append(back, paper), this.svg.insertBefore(under, this.svg.firstChild), this.overlayG.prepend(frame), this.svg.style.overflow = "visible";
    let bar = this.ui.createDiv({ cls: "ink-crumbs ink-focus-bar" }), out = bar.createEl("button", { attr: { type: "button", "aria-label": "Back to the canvas" } });
    (0, import_obsidian3.setIcon)(out.createSpan(), "arrow-left"), out.createSpan({ text: "Back to canvas" }), out.addEventListener("click", () => this.exitPainting()), bar.createSpan({ cls: "sep", text: "\xB7" }), bar.createSpan({ cls: "is-here", text: item.label || "Painting" }), this.focusChrome = [under, frame, bar];
  }
  buildPaintingPop(p3) {
    p3.createDiv({ cls: "ink-pop-title", text: "Painting" });
    let inp = p3.createEl("input", { type: "text", cls: "ink-board-name", attr: { placeholder: "Name (optional)" } });
    inp.addEventListener("keydown", (e3) => e3.stopPropagation());
    let go = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
    if ((0, import_obsidian3.setIcon)(go.createSpan(), "frame"), go.createSpan({ text: "Drag out a painting area" }), go.addEventListener("click", () => {
      this.pendingPainting = { label: (inp.value || "").trim() }, this.closePop(), new import_obsidian3.Notice("Drag out the area to paint in. Anything already inside it moves into the painting.");
    }), this.selection.size) {
      let fromSel = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
      (0, import_obsidian3.setIcon)(fromSel.createSpan(), "layers"), fromSel.createSpan({ text: "Make a painting from the selection" }), fromSel.addEventListener("click", () => {
        let b3 = this.selectionBox();
        if (!b3) return;
        let pad = 16;
        this.createPainting({ x: b3.x - pad, y: b3.y - pad, w: b3.width + pad * 2, h: b3.height + pad * 2 }, (inp.value || "").trim(), this.selection);
      });
    }
    p3.createDiv({ cls: "ink-hint", text: "A painting is a framed area that opens on its own: tap it twice with the Pointer tool (or hold it) to work inside, where only that painting is drawn, so detailed work stays quick. On the canvas it shows as a single image." });
  }
  /** Make a painting over an area, moving in anything that sits fully inside it (or the given ids). */
  createPainting(box, label, ids) {
    let inside = (it) => {
      if (it.type === "connector" || it.type === "painting") return !1;
      if (ids) return ids.has(it.id);
      let b3 = itemBox(it);
      return b3 && b3.x >= box.x && b3.y >= box.y && b3.x + b3.width <= box.x + box.w && b3.y + b3.height <= box.y + box.h;
    }, moving = this.items.filter(inside), moveIds = new Set(moving.map((i3) => i3.id)), item = { id: uid(), type: "painting", x: r22(box.x), y: r22(box.y), w: r22(box.w), h: r22(box.h), label: label || "", items: moving, bg: null, border: !0 };
    this.commit((items) => [...items.filter((i3) => !moveIds.has(i3.id)), item]), this.enterPainting(item);
  }
  buildPaintingOptions(p3, item, rebuild) {
    let inp = p3.createEl("input", { type: "text", cls: "ink-board-name" });
    inp.value = item.label || "", inp.setAttribute("placeholder", "Name"), inp.addEventListener("keydown", (e3) => e3.stopPropagation()), inp.addEventListener("change", () => this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, label: inp.value.trim() } : i3)));
    let open = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
    (0, import_obsidian3.setIcon)(open.createSpan(), "maximize"), open.createSpan({ text: "Open the painting" }), open.addEventListener("click", () => this.enterPainting(item)), this.colorRow(p3, "Paper", () => item.bg || "auto", (c3) => this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, bg: c3 === "auto" ? null : c3 } : i3)), rebuild);
    let row = p3.createEl("label", { cls: "ink-toggle-row" }), cb = row.createEl("input", { type: "checkbox" });
    cb.checked = item.border !== !1, row.createSpan({ text: "Show the frame" }), cb.addEventListener("change", () => this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, border: cb.checked } : i3)));
    let release2 = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
    (0, import_obsidian3.setIcon)(release2.createSpan(), "ungroup"), release2.createSpan({ text: "Release its contents onto the canvas" }), release2.addEventListener("click", () => {
      this.commit((items) => items.flatMap((i3) => i3.id === item.id ? i3.items : [i3])), this.closePop();
    }), p3.createDiv({ cls: "ink-hint", text: `${item.items.length} thing${item.items.length === 1 ? "" : "s"} painted inside. Moving or scaling the painting carries them along.` });
  }
  // ---------- boards: canvases inside canvases ----------
  buildBoardPop(p3) {
    p3.createDiv({ cls: "ink-pop-title", text: "New board" });
    let inp = p3.createEl("input", { type: "text", cls: "ink-board-name", attr: { placeholder: "Name, e.g. Characters" } });
    inp.addEventListener("keydown", (e3) => {
      e3.stopPropagation(), e3.key === "Enter" && go();
    });
    let go = () => {
      let name = (inp.value || "").trim() || "Board";
      this.closePop(), this.pendingBoard = { name }, new import_obsidian3.Notice(`Tap where "${name}" should go, or drag out its size.`);
    }, btn = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
    (0, import_obsidian3.setIcon)(btn.createSpan(), "layout-dashboard"), btn.createSpan({ text: "Create and place" }), btn.addEventListener("click", go), p3.createDiv({ cls: "ink-hint", text: "A board is a whole canvas inside this one. Tap it with the Pointer tool to go in; a bar at the top takes you back up. Hold it to rename or change its color." }), setTimeout(() => inp.focus(), 50);
  }
  /**
   * Make this canvas a folder note (Map/Map.canvas) so its boards can live inside that
   * folder instead of piling up beside it. A canvas already set up that way is left alone.
   * Returns the folder its boards go in.
   */
  async ensureFolderNote() {
    let { app } = this.plugin, here = this.view.file;
    if (!here) return "";
    let parent = here.parent && here.parent.path !== "/" ? here.parent.path : "";
    if (parent.split("/").pop() === here.basename) return parent;
    let folder = parent ? `${parent}/${here.basename}` : here.basename;
    if (!app.vault.getAbstractFileByPath(folder))
      try {
        await app.vault.createFolder(folder);
      } catch {
      }
    return await app.fileManager.renameFile(here, `${folder}/${here.name}`), new import_obsidian3.Notice(`Palette: ${here.basename} is now a folder note, so its boards can live inside it.`), folder;
  }
  /** Create the child canvas inside this canvas's folder and drop a card for it. */
  async createBoard(name, box) {
    let { app } = this.plugin, dir = await this.ensureFolderNote(), here = this.view.file, path = `${dir ? `${dir}/` : ""}${name}.canvas`;
    for (let n3 = 2; app.vault.getAbstractFileByPath(path); n3++) path = `${dir}/${name} ${n3}.canvas`;
    await app.vault.create(path, JSON.stringify({ nodes: [], edges: [] }));
    let boards = this.plugin.state.boards = this.plugin.state.boards || {};
    boards[path] = here ? here.path : "", this.plugin.saveState();
    let item = { id: uid(), type: "board", x: r22(box.x), y: r22(box.y), w: r22(box.w), h: r22(box.h), path, label: name, color: "auto" };
    this.commit((items) => [...items, item]);
  }
  openBoard(item) {
    let file = this.plugin.app.vault.getAbstractFileByPath(item.path);
    if (!file) return new import_obsidian3.Notice(`Palette: the "${item.label}" board's canvas is missing.`);
    let boards = this.plugin.state.boards = this.plugin.state.boards || {};
    this.view.file && !boards[item.path] && (boards[item.path] = this.view.file.path, this.plugin.saveState()), this.view.leaf.openFile(file);
  }
  /** "Parent ›  Child" at the top of a board, so you can always get back up. */
  renderCrumbs() {
    this.crumbs && this.crumbs.remove(), this.crumbs = null;
    let here = this.view.file, boards = this.plugin.state.boards || {};
    if (!here || !boards[here.path]) return;
    let chain = [], p3 = boards[here.path], seen = /* @__PURE__ */ new Set([here.path]);
    for (; p3 && !seen.has(p3) && chain.length < 8; )
      seen.add(p3), chain.unshift(p3), p3 = boards[p3];
    let root = this.view.containerEl || this.view.contentEl;
    if (!root) return;
    let bar = (root.querySelector(".canvas-wrapper") || root).createDiv({ cls: "ink-crumbs" }), up = bar.createEl("button", { attr: { type: "button", "aria-label": "Up a level" } });
    (0, import_obsidian3.setIcon)(up.createSpan(), "arrow-up-left"), up.addEventListener("click", () => this.openPath(chain[chain.length - 1])), chain.forEach((path) => {
      bar.createEl("button", { text: path.split("/").pop().replace(/\.canvas$/, ""), attr: { type: "button" } }).addEventListener("click", () => this.openPath(path)), bar.createSpan({ cls: "sep", text: "\u203A" });
    }), bar.createSpan({ cls: "is-here", text: here.basename }), this.crumbs = bar;
  }
  openPath(path) {
    let f3 = path && this.plugin.app.vault.getAbstractFileByPath(path);
    f3 ? this.view.leaf.openFile(f3) : new import_obsidian3.Notice("Palette: that canvas isn't there any more.");
  }
  /** A usable URL for a picture reference, whether it's a vault file or older inline data. */
  refUrl(ref) {
    if (!ref) return "";
    if (ref.src) return ref.src;
    let f3 = ref.path && this.plugin.app.vault.getAbstractFileByPath(ref.path);
    return f3 ? this.plugin.app.vault.getResourcePath(f3) : "";
  }
  /**
   * Older drawings kept pictures inline, which made every save rewrite megabytes. Move any
   * of those out to attachment files, once, without touching undo.
   */
  async externalizePictures() {
    if (this.migrating) return;
    let inline = this.items.filter((i3) => i3.ref && typeof i3.ref.src == "string" && i3.ref.src.startsWith("data:"));
    if (!inline.length) return;
    this.migrating = !0;
    let { app } = this.plugin, srcFile = this.view.file, paths = /* @__PURE__ */ new Map();
    try {
      for (let it of inline) {
        if (paths.has(it.ref.src)) continue;
        let m3 = /^data:([^;,]+)?(;base64)?,(.*)$/.exec(it.ref.src);
        if (!m3) continue;
        let bin = m3[2] ? atob(m3[3]) : decodeURIComponent(m3[3]), buf = new Uint8Array(bin.length);
        for (let i3 = 0; i3 < bin.length; i3++) buf[i3] = bin.charCodeAt(i3);
        let ext = (m3[1] || "image/png").split("/")[1].replace("jpeg", "jpg").replace(/\+.*$/, "") || "png", path = await app.fileManager.getAvailablePathForAttachment(`${srcFile ? srcFile.basename : "Palette"} picture.${ext}`, srcFile ? srcFile.path : "");
        await app.vault.createBinary(path, buf.buffer), paths.set(it.ref.src, path);
      }
      if (!paths.size || !this.doc) return;
      this.doc.replaceSilently((it) => {
        if (!it.ref || !paths.has(it.ref.src)) return null;
        let { src, ...rest } = it.ref;
        return { ...it, ref: { ...rest, path: paths.get(src) } };
      }), new import_obsidian3.Notice(`Palette: moved ${paths.size} picture${paths.size === 1 ? "" : "s"} out of the drawing into attachments, so it saves faster.`);
    } catch (e3) {
      console.warn("[Palette] Could not move pictures out of the drawing", e3);
    } finally {
      this.migrating = !1;
    }
  }
  /** Somewhere a picture can go: a selected (or last used) pixel canvas, rectangle or ellipse. */
  imageTarget() {
    let sel = this.selectedItems().find((i3) => i3.type === "pixels" || isContainer(i3));
    if (sel) return sel;
    let last = this.items.find((i3) => i3.id === this.activePixel && i3.type === "pixels");
    if (last) return last;
    let shapes = this.items.filter((i3) => isContainer(i3) || i3.type === "pixels");
    return shapes.length === 1 ? shapes[0] : null;
  }
  openImagePanel() {
    let target = this.imageTarget();
    target && (this.itemMenuFor = target.id), this.togglePop("image", this.imageBtn);
  }
  buildImagePop(p3) {
    let item = this.items.find((i3) => i3.id === this.itemMenuFor) || this.imageTarget();
    item ? (p3.createDiv({ cls: "ink-label", text: item.type === "pixels" ? `Picture in the ${item.cols}\xD7${item.rows} canvas` : "Picture in this shape" }), this.buildImageSection(p3, item, () => this.openPop("image", this.imageBtn))) : p3.createDiv({ cls: "ink-hint", text: "Select a pixel canvas, rectangle or ellipse to put a picture inside it, to trace over or convert." }), this.buildAttachSection(p3);
  }
  /**
   * Putting a file on the canvas itself, as an ordinary card: it sits under the ink, moves
   * with the canvas, and connectors can anchor to it.
   */
  buildAttachSection(p3) {
    let sec = p3.createDiv({ cls: "ink-section" });
    sec.createDiv({ cls: "ink-label", text: "Place a picture" });
    let where = sec.createDiv({ cls: "ink-segmented" });
    for (let [id, name] of [["canvas", "Canvas layer"], ["ink", "Drawing layer"]]) {
      let b3 = where.createEl("button", { text: name, attr: { type: "button" } });
      b3.toggleClass("is-active", (this.state.placeLayer || "canvas") === id), b3.addEventListener("click", () => {
        this.state.placeLayer = id, this.plugin.saveState(), this.openPop("image", this.imageBtn);
      });
    }
    let lab = sec.createEl("label", { cls: "ink-pop-action" });
    (0, import_obsidian3.setIcon)(lab.createSpan(), "image-plus"), lab.createSpan({ text: "From this device" });
    let input = lab.createEl("input", { type: "file", attr: { accept: "image/*" } });
    input.addEventListener("change", async () => {
      let file = (input.files || [])[0];
      if (file) {
        if (this.closePop(), kindOf(file.name || "") !== "image" && !/^image\//.test(file.type || "")) {
          new import_obsidian3.Notice("Palette: only pictures can be placed for now.");
          return;
        }
        try {
          let saved = await this.saveAttachment(file);
          (this.state.placeLayer || "canvas") === "ink" ? this.armAttachment(saved.file, saved.width, saved.height, null, "image") : this.armAttachment(saved.file, saved.width, saved.height);
        } catch (e3) {
          new import_obsidian3.Notice(`Palette: ${e3.message}`);
        }
      }
    });
    let pick = sec.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
    (0, import_obsidian3.setIcon)(pick.createSpan(), "folder-open"), pick.createSpan({ text: "From the vault" }), pick.addEventListener("click", () => this.pickVaultFile()), sec.createDiv({ cls: "ink-hint", text: (this.state.placeLayer || "canvas") === "ink" ? "Into your drawing, where you can move, erase, adjust and bake it with everything else. Then drag out where it goes, or tap for a default size." : "Onto the canvas itself as a card, under your drawing. Pictures from your device are saved into your attachments folder automatically. Then drag out where it goes, or tap for a default size." });
  }
  async saveAttachment(file) {
    let { app } = this.plugin, MB = 1024 * 1024;
    if (file.size > 200 * MB)
      throw new Error(`${file.name} is ${Math.round(file.size / MB)} MB, too big to copy in safely. Put it in the vault first, then use "Place a file from the vault".`);
    let src = this.view.file, buf = await file.arrayBuffer(), path = await app.fileManager.getAvailablePathForAttachment(file.name, src ? src.path : ""), saved = await app.vault.createBinary(path, buf), width = 0, height = 0;
    if (/^image\//.test(file.type || "") || /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(file.name || ""))
      try {
        let img = await loadImageFile(file, 2e3);
        width = img.width, height = img.height;
      } catch {
      }
    return { file: saved || app.vault.getAbstractFileByPath(path), width, height };
  }
  /** Ready to drop: the next tap or drag on the canvas puts the card there. */
  armAttachment(file, width, height, src, kind) {
    !file && !src || (this.pendingAttach = { file, width, height, src, kind }, new import_obsidian3.Notice(`Drag out where ${file ? file.name : "the picture"} should go, or tap for a default size.`), this.updateUI());
  }
  cancelAttachment() {
    this.pendingAttach && (this.pendingAttach = null, this.updateUI());
  }
  /** Put a card on the canvas, either in a box you dragged or centered in the view. */
  async placeCard(file, width, height, box) {
    if (!file) return;
    let place = box;
    if (!place) {
      let v3 = this.viewportBox(), w3 = Math.min(520, v3.width * 0.5), h3 = width && height ? w3 * height / width : w3 * 0.62;
      place = { x: v3.x + (v3.width - w3) / 2, y: v3.y + (v3.height - h3) / 2, w: w3, h: h3 };
    }
    let node = { x: r22(place.x), y: r22(place.y), w: r22(Math.max(40, place.w)), h: r22(Math.max(40, place.h)) }, ok = await addFileNode(this.plugin.app, this.view.canvas, this.view.file, file, node);
    new import_obsidian3.Notice(ok ? `Added ${file.name} to the canvas.` : `Palette: couldn't place ${file.name}; try adding it from the canvas itself.`), this.closePop();
  }
  pickVaultFile() {
    let { app } = this.plugin, layer = this, files = app.vault.getFiles().filter((f3) => kindOf(f3.path) === "image");
    if (!files.length) {
      new import_obsidian3.Notice("Palette: no pictures in this vault yet.");
      return;
    }
    let rank = (f3) => /(png|jpe?g|gif|webp|svg|avif)$/i.test(f3.extension) ? 0 : /pdf$/i.test(f3.extension) ? 1 : 2;
    files.sort((a3, b3) => rank(a3) - rank(b3) || a3.path.localeCompare(b3.path));
    class FilePicker extends import_obsidian3.FuzzySuggestModal {
      getItems() {
        return files;
      }
      getItemText(f3) {
        return f3.path;
      }
      onChooseItem(f3) {
        (layer.state.placeLayer || "canvas") === "ink" ? layer.armAttachment(f3, 0, 0, null, "image") : layer.armAttachment(f3, 0, 0);
      }
    }
    let modal = new FilePicker(app);
    modal.setPlaceholder("Pick a picture"), modal.open();
  }
  buildImageSection(parent, item, rebuild) {
    let sec = parent.createDiv({ cls: "ink-section" });
    if (sec.createDiv({ cls: "ink-label", text: "Picture" }), !item.ref) {
      let lab = sec.createEl("label", { cls: "ink-pop-action" });
      (0, import_obsidian3.setIcon)(lab.createSpan(), "image-plus"), lab.createSpan({ text: "Insert picture" });
      let input = lab.createEl("input", { type: "file", attr: { accept: "image/*" } });
      input.addEventListener("change", async () => {
        let file = (input.files || [])[0];
        if (file)
          try {
            let saved = await this.saveAttachment(file);
            this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, ref: { path: saved.file.path, opacity: 60, fit: "cover", scale: 100, ox: 0, oy: 0, rotate: 0 } } : i3)), rebuild();
          } catch (e3) {
            new import_obsidian3.Notice(`Palette: ${e3.message}`);
          }
      }), sec.createDiv({ cls: "ink-hint", text: "Insert a picture to trace over, or convert it into pixels or strokes." });
      return;
    }
    let patch = (ref) => this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, ref } : i3)), hist = this.refHist = this.refHist && this.refHist.id === item.id ? this.refHist : { id: item.id, list: [item.ref], at: 0 }, push = (ref) => {
      hist.list = hist.list.slice(0, hist.at + 1), hist.list.push(ref), hist.at = hist.list.length - 1, patch(ref);
    }, head = sec.createDiv({ cls: "ink-adjust-head" });
    head.createDiv({ cls: "ink-label", text: "Position" });
    let nav = head.createDiv({ cls: "ink-row" }), back = this.iconBtn(nav, "undo-2", "Undo this picture change", () => {
      hist.at <= 0 || (hist.at--, patch(hist.list[hist.at]), rebuild());
    }), fwd = this.iconBtn(nav, "redo-2", "Redo", () => {
      hist.at >= hist.list.length - 1 || (hist.at++, patch(hist.list[hist.at]), rebuild());
    });
    back.disabled = hist.at <= 0, fwd.disabled = hist.at >= hist.list.length - 1;
    let refSlider = (label, key2, min, max2, fmt, dflt) => {
      let row2 = sec.createDiv({ cls: "ink-adjust-row" });
      row2.createSpan({ cls: "ink-label", text: label }), slider(row2, {
        min,
        max: max2,
        round: Math.round,
        get: () => {
          var _a2;
          return (_a2 = item.ref[key2]) != null ? _a2 : dflt;
        },
        set: (v3, final) => {
          final && push({ ...item.ref, [key2]: v3 });
        },
        format: fmt
      });
    };
    refSlider("Opacity", "opacity", 5, 100, (v3) => `${Math.round(v3)}%`, 60), refSlider("Scale", "scale", 25, 400, (v3) => `${Math.round(v3)}%`, 100), refSlider("Across", "ox", -100, 100, (v3) => `${Math.round(v3)}%`, 0), refSlider("Down", "oy", -100, 100, (v3) => `${Math.round(v3)}%`, 0), refSlider("Rotate", "rotate", -180, 180, (v3) => `${Math.round(v3)}\xB0`, 0);
    let fitRow = sec.createDiv({ cls: "ink-segmented" });
    for (let [id, name] of [["cover", "Crop"], ["contain", "Fit"], ["stretch", "Stretch"]]) {
      let b3 = fitRow.createEl("button", { text: name, attr: { type: "button" } });
      b3.toggleClass("is-active", (item.ref.fit || "cover") === id), b3.addEventListener("click", () => {
        push({ ...item.ref, fit: id }), rebuild();
      });
    }
    let row = sec.createDiv({ cls: "ink-row" }), act = (icon, text, fn) => {
      let b3 = row.createEl("button", { cls: "ink-chip", attr: { type: "button" } });
      return (0, import_obsidian3.setIcon)(b3.createSpan(), icon), b3.createSpan({ text }), b3.addEventListener("click", fn), b3;
    };
    if (item.type === "pixels")
      act("ink-pixels", "To pixels", async () => {
        let img = await imageFromSrc(this.refUrl(item.ref)), cells = imageToCells(img, item.cols, item.rows, { ref: item.ref }), before = item.cells;
        this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, cells: { ...i3.cells, ...cells }, preConvert: before } : i3)), new import_obsidian3.Notice(`Converted the picture into ${Object.keys(cells).length} pixels.`), rebuild();
      }), item.preConvert && act("rotate-ccw", "Undo convert", () => {
        this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, cells: item.preConvert, preConvert: void 0 } : i3)), new import_obsidian3.Notice("Put the pixels back the way they were before the conversion."), rebuild();
      });
    else {
      let dsec = sec.createDiv({ cls: "ink-adjust-row" });
      dsec.createSpan({ cls: "ink-label", text: "Trace detail" }), slider(dsec, {
        min: 1,
        max: 5,
        round: Math.round,
        get: () => {
          var _a2;
          return (_a2 = this.state.traceDetail) != null ? _a2 : 3;
        },
        set: (v3) => {
          this.state.traceDetail = v3, this.plugin.saveState();
        },
        format: (v3) => ["Rough", "Low", "Medium", "High", "Very high"][Math.round(v3) - 1]
      }), act("pen-line", "To strokes", async () => {
        var _a2;
        let img = await imageFromSrc(this.refUrl(item.ref)), box = { x: Math.min(item.x1, item.x2), y: Math.min(item.y1, item.y2), width: Math.abs(item.x2 - item.x1), height: Math.abs(item.y2 - item.y1) }, detail = (_a2 = this.state.traceDetail) != null ? _a2 : 3, loops = imageToStrokes(img, box, { levels: 1 + detail * 2, detail, ref: item.ref });
        if (!loops.length) {
          new import_obsidian3.Notice("Palette: couldn't find enough contrast in that picture to trace.");
          return;
        }
        let slot = this.state.slots[this.state.slot], strokes = loops.map((pts) => ({
          id: uid(),
          type: "stroke",
          brush: slot.brush,
          color: slot.color,
          size: Math.max(0.5, slot.size * 0.6),
          opacity: slot.opacity,
          pressure: !1,
          seed: Math.floor(Math.random() * 2 ** 31),
          points: pts.map(([x3, y3]) => [r22(x3), r22(y3)]),
          closed: !0,
          tracedFrom: item.id
        }));
        this.commit((items) => [...items, ...strokes]), new import_obsidian3.Notice(`Traced the picture into ${strokes.length} strokes.`), rebuild();
      }), this.items.some((i3) => i3.tracedFrom === item.id) && act("rotate-ccw", "Undo trace", () => {
        this.commit((items) => items.filter((i3) => i3.tracedFrom !== item.id)), new import_obsidian3.Notice("Removed the traced strokes."), rebuild();
      });
    }
    act("trash-2", "Remove", () => {
      push(void 0), rebuild();
    }), sec.createDiv({ cls: "ink-hint", text: "Crop fills the box and cuts off the overflow, Fit shows all of it. Converting uses the picture as you see it here, crop and all." });
  }
  /** Something under the pointer worth holding on: a picture, or a pixel canvas. */
  holdMenuFor(p3) {
    for (let i3 = this.items.length - 1; i3 >= 0; i3--) {
      let it = this.items[i3];
      if (it.type !== "pixels" && it.type !== "connector" && it.type !== "image" && it.type !== "board" && it.type !== "painting" && !(it.type === "shape" && it.ref)) continue;
      let b3 = this.bboxOf(it) || itemBox(it);
      if (b3 && p3.x >= b3.x && p3.y >= b3.y && p3.x <= b3.x + b3.width && p3.y <= b3.y + b3.height) return it;
    }
    return null;
  }
  /** Options for one item, opened by holding it with the Pointer tool. */
  openItemMenu(item) {
    this.selection = /* @__PURE__ */ new Set([item.id]), this.renderSelection(), this.itemMenuFor = item.id, this.openPop("item", this.pointerAnchor(item));
  }
  pointerAnchor(item) {
    let b3 = this.bboxOf(item) || itemBox(item), m3 = this.metrics(), host = this.ui.getBoundingClientRect(), el = this.ui.createDiv({ cls: "ink-anchor" });
    return el.style.left = `${m3.left + (b3.x + b3.width / 2) * m3.scale - host.left}px`, el.style.top = `${m3.top + b3.y * m3.scale - host.top}px`, setTimeout(() => el.remove(), 0), el;
  }
  buildItemPop(p3) {
    let item = this.items.find((i3) => i3.id === this.itemMenuFor);
    if (!item) return p3.createDiv({ cls: "ink-hint", text: "That item is gone." });
    let kinds = { pixels: `Pixel canvas ${item.cols || ""}\xD7${item.rows || ""}`, connector: "Connector", shape: "Shape", image: "Picture", board: "Board", painting: item.label || "Painting" };
    p3.createDiv({ cls: "ink-pop-title", text: kinds[item.type] || "Item" });
    let rebuild = () => this.openPop("item", this.popAnchor && this.popAnchor.isConnected ? this.popAnchor : this.pointerAnchor(item));
    if (item.type === "connector") return this.buildConnectorOptions(p3, item, rebuild);
    if (item.type === "image") return this.buildPictureItemOptions(p3, item, rebuild);
    if (item.type === "painting") return this.buildPaintingOptions(p3, item, rebuild);
    if (item.type === "board") {
      let inp = p3.createEl("input", { type: "text", cls: "ink-board-name", attr: { value: item.label || "" } });
      inp.value = item.label || "", inp.addEventListener("keydown", (e3) => e3.stopPropagation()), inp.addEventListener("change", () => this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, label: inp.value.trim() || "Board" } : i3))), this.colorRow(p3, "Color", () => item.color || "auto", (c3) => this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, color: c3 } : i3)), rebuild);
      let open = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
      (0, import_obsidian3.setIcon)(open.createSpan(), "log-in"), open.createSpan({ text: "Open this board" }), open.addEventListener("click", () => {
        this.closePop(), this.openBoard(item);
      }), p3.createDiv({ cls: "ink-hint", text: "Renaming here changes the card; the canvas file keeps its name." });
      return;
    }
    if (this.buildImageSection(p3, item, rebuild), item.type === "pixels") {
      let row = p3.createEl("label", { cls: "ink-toggle-row" }), cb = row.createEl("input", { type: "checkbox" });
      cb.checked = item.border !== !1, row.createSpan({ text: "Border around this canvas" }), cb.addEventListener("change", () => {
        this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, border: cb.checked } : i3)), rebuild();
      });
    }
  }
  /** Options for a picture sitting in the drawing, including sending it down to the canvas. */
  buildPictureItemOptions(p3, item, rebuild) {
    let media = item.ref && item.ref.kind && item.ref.kind !== "image";
    if (media) {
      let open = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
      (0, import_obsidian3.setIcon)(open.createSpan(), item.ref.kind === "pdf" ? "file-text" : "play"), open.createSpan({ text: item.ref.kind === "pdf" ? "Open the PDF" : `Play the ${item.ref.kind}` }), open.addEventListener("click", () => {
        this.closePop(), this.openMedia(item);
      });
    }
    let patchItem = (fields) => {
      this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, ...fields } : i3)), rebuild();
    }, sec = p3.createDiv({ cls: "ink-section" });
    sec.createDiv({ cls: "ink-label", text: "Opacity" }), slider(sec, {
      min: 5,
      max: 100,
      round: Math.round,
      get: () => {
        var _a2;
        return (_a2 = item.opacity) != null ? _a2 : 100;
      },
      set: (v3, final) => {
        final && patchItem({ opacity: v3 });
      },
      format: (v3) => `${Math.round(v3)}%`
    });
    let rot = p3.createDiv({ cls: "ink-adjust-row" });
    if (rot.createSpan({ cls: "ink-label", text: "Rotate" }), slider(rot, {
      min: -180,
      max: 180,
      round: Math.round,
      get: () => item.ref.rotate || 0,
      set: (v3, final) => {
        final && patchItem({ ref: { ...item.ref, rotate: v3 } });
      },
      format: (v3) => `${Math.round(v3)}\xB0`
    }), media && item.ref.kind !== "pdf") {
      p3.createDiv({ cls: "ink-hint", text: "Video and audio stay in the drawing layer: putting them on the canvas itself is what crashes on mobile." });
      return;
    }
    let send = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
    (0, import_obsidian3.setIcon)(send.createSpan(), "send-to-back"), send.createSpan({ text: "Send to the canvas layer" }), send.addEventListener("click", () => media ? this.sendFileToCanvas(item) : this.sendPictureToCanvas(item)), p3.createDiv({ cls: "ink-hint", text: media ? "Sends this PDF down to the canvas as an ordinary card, in the same place." : "Sending it down bakes it into a PNG with any color adjustments applied, saves that to your attachments, and puts it on the canvas as a card." });
  }
  /** A file-backed item (a PDF) moves to the canvas as-is: nothing to bake. */
  async sendFileToCanvas(item) {
    let file = this.plugin.app.vault.getAbstractFileByPath(item.ref.path);
    if (!file) return new import_obsidian3.Notice("Palette: that file isn't in the vault any more.");
    await addFileNode(this.plugin.app, this.view.canvas, this.view.file, file, { x: item.x, y: item.y, w: item.w, h: item.h }), this.commit((items) => items.filter((i3) => i3.id !== item.id)), this.closePop();
  }
  /** Bake a drawing-layer picture (adjustments and all) and hand it to the canvas as a card. */
  async sendPictureToCanvas(item) {
    var _a2;
    try {
      let img = await imageFromSrc(this.refUrl(item.ref)), scale = Math.min(2, Math.max(1, 1200 / Math.max(item.w, item.h))), c3 = document.createElement("canvas");
      c3.width = Math.max(1, Math.round(item.w * scale)), c3.height = Math.max(1, Math.round(item.h * scale));
      let ctx = c3.getContext("2d"), f3 = adjustFilter(item.ref.adjust);
      f3 && (ctx.filter = f3), ctx.globalAlpha = ((_a2 = item.opacity) != null ? _a2 : 100) / 100, drawRefInto(ctx, img, item.ref, c3.width, c3.height);
      let blob = await new Promise((res) => c3.toBlob(res, "image/png"));
      if (c3.width = c3.height = 0, !blob) throw new Error("that picture could not be baked");
      let { app } = this.plugin, src = this.view.file, name = `${src ? src.basename : "Palette"} picture.png`, path = await app.fileManager.getAvailablePathForAttachment(name, src ? src.path : ""), file = await app.vault.createBinary(path, await blob.arrayBuffer());
      await addFileNode(app, this.view.canvas, src, file || app.vault.getAbstractFileByPath(path), { x: item.x, y: item.y, w: item.w, h: item.h }), this.commit((items) => items.filter((i3) => i3.id !== item.id)), this.closePop(), new import_obsidian3.Notice("Sent to the canvas layer as a card.");
    } catch (e3) {
      new import_obsidian3.Notice(`Palette: ${e3.message}`);
    }
  }
  /** Style options for one placed connector. */
  buildConnectorOptions(p3, item, rebuild) {
    let patch = (fields) => {
      this.commit((items) => items.map((i3) => i3.id === item.id ? { ...i3, ...fields } : i3)), rebuild();
    }, seg = (label, options, get) => {
      let sec = p3.createDiv({ cls: "ink-section" });
      sec.createDiv({ cls: "ink-label", text: label });
      let row2 = sec.createDiv({ cls: "ink-segmented" });
      for (let [val, text, field] of options) {
        let b3 = row2.createEl("button", { text, attr: { type: "button" } });
        b3.toggleClass("is-active", get() === val), b3.addEventListener("click", () => patch({ [field]: val }));
      }
    };
    seg("Line", [["curve", "Curved", "style"], ["elbow", "Elbow", "style"], ["straight", "Straight", "style"]], () => item.style || "curve");
    let arrow = item.arrow === !1 ? "none" : item.arrow === !0 || item.arrow === void 0 ? "end" : item.arrow;
    seg("Arrows", [["none", "None", "arrow"], ["end", "One way", "arrow"], ["both", "Both ways", "arrow"]], () => arrow);
    let row = p3.createEl("label", { cls: "ink-toggle-row" }), cb = row.createEl("input", { type: "checkbox" });
    if (cb.checked = !!item.node, row.createSpan({ text: "Round nodes at each end" }), cb.addEventListener("change", () => patch({ node: cb.checked })), (item.waypoints || []).length) {
      let smooth2 = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
      (0, import_obsidian3.setIcon)(smooth2.createSpan(), "spline"), smooth2.createSpan({ text: "Smooth the line" }), smooth2.addEventListener("click", () => patch({ waypoints: smoothWaypoints(item.waypoints) }));
      let clear = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
      (0, import_obsidian3.setIcon)(clear.createSpan(), "rotate-ccw"), clear.createSpan({ text: `Straighten out (${item.waypoints.length} bend${item.waypoints.length === 1 ? "" : "s"})` }), clear.addEventListener("click", () => patch({ waypoints: [] }));
    }
    p3.createDiv({ cls: "ink-hint", text: "Each end stays pinned where you put it and leaves square-on from that edge. Select a connector to edit it: drag a ring at either end to re-attach it, drag a dot to move a bend, double-tap a bend to remove it, or drag one of the dots on the line to add one." });
  }
  /** Prismatic controls: how much other color gets mixed in, and where it comes from. */
  /**
   * A labelled color swatch that opens the color wheel, for colors that live inside a panel
   * (Prismatic's second color, the color a texture is laid in, the pixel brush's color).
   */
  colorRow(parent, label, get, set, back) {
    let row = parent.createDiv({ cls: "ink-row ink-color-row" });
    row.createSpan({ cls: "ink-label", text: label });
    let sw = row.createEl("button", { cls: "ink-swatch is-big", attr: { type: "button", "aria-label": `${label}: open the color wheel` } });
    return sw.style.setProperty("--swatch", this.resolveColor(get())), sw.addEventListener("click", () => {
      this.sideColor = { get, set, label, back }, this.openPop("sidecolor", sw);
    }), row;
  }
  buildSideColorPop(p3) {
    let target = this.sideColor;
    if (!target) return;
    let head = p3.createDiv({ cls: "ink-pop-head" });
    this.iconBtn(head, "chevron-left", "Back", () => {
      let back = target.back;
      this.sideColor = null, this.closePop(), back && back();
    }, "ink-back"), head.createDiv({ cls: "ink-pop-title", text: target.label }), new ColorPicker(p3, {
      get: () => target.get(),
      recents: this.state.recents,
      onInput: (c3) => target.set(c3),
      onCommit: (c3) => {
        target.set(c3), this.plugin.addRecent(c3), this.plugin.saveState();
      },
      resolve: (c3) => this.resolveColor(c3)
    }).sync();
  }
  buildPrismSection(p3, prism, rebuild) {
    let sec = p3.createDiv({ cls: "ink-section" });
    sec.createDiv({ cls: "ink-label", text: "Prismatic" }), slider(sec, {
      min: 0,
      max: 100,
      round: Math.round,
      get: () => {
        var _a2;
        return (_a2 = prism.amount) != null ? _a2 : 0;
      },
      set: (v3) => {
        prism.amount = v3, this.plugin.saveState();
      },
      format: (v3) => `${Math.round(v3)}%`
    }), this.modeGrid(sec, [
      { id: "auto", name: "Hue shift", icon: "ink-hue", tint: "#e07a7a" },
      { id: "secondary", name: "Second", icon: "ink-second", tint: "#4bbf9a" },
      { id: "gradient", name: "Gradient", icon: "ink-gradient", tint: "#6ba8f5" },
      { id: "nearby", name: "Neighbors", icon: "ink-neighbors", tint: "#f0a868" }
    ], prism.mode || "auto", (id) => {
      prism.mode = id, this.plugin.saveState(), rebuild();
    }, () => {
    });
    let notes = {
      auto: "Hue shift: moves each pixel's own hue around the wheel, so a flat color gains variety.",
      secondary: "Second: mixes in the color you choose.",
      gradient: "Gradient: fades from the base color to the second color across the brush.",
      nearby: "Neighbors: samples colors already in the art nearby, which softens boundaries between colors."
    };
    sec.createDiv({ cls: "ink-hint", text: notes[prism.mode || "auto"] }), ["secondary", "gradient"].includes(prism.mode) && this.colorRow(sec, "Second color", () => prism.secondary || "#00b8a9", (c3) => {
      prism.secondary = c3, this.plugin.saveState();
    }, rebuild);
  }
  buildFillPop(p3) {
    let st2 = this.state.fillStyle;
    p3.createDiv({ cls: "ink-pop-title", text: "Paint bucket" }), p3.createDiv({ cls: "ink-label", text: "Fill" });
    let grid = p3.createDiv({ cls: "ink-fill-grid" }), color = this.resolveColor(st2.color), circle = [];
    for (let i3 = 0; i3 < 40; i3++) {
      let t3 = i3 / 40 * Math.PI * 2;
      circle.push([22 + 20 * Math.cos(t3), 22 + 20 * Math.sin(t3)]);
    }
    let thumb = (pattern, brush) => {
      let r4 = renderFill({ pattern, brush, color, spacing: 9, seed: 5 }, [circle], 2, { resolveColor: (c3) => c3 }), url = r4 ? r4.canvas.toDataURL() : "";
      return r4 && (r4.canvas.width = r4.canvas.height = 0), url;
    };
    for (let [id, name] of PATTERNS) {
      let b3 = grid.createEl("button", { cls: "ink-fill-opt", attr: { type: "button", "aria-label": name } });
      b3.toggleClass("is-active", (st2.pattern || "solid") === id), b3.createEl("img", { attr: { src: thumb(id, st2.brush), alt: "" } }), b3.createSpan({ text: name }), b3.addEventListener("click", () => {
        st2.pattern = id, this.plugin.saveState(), this.openPop("fill", this.bucketBtn);
      });
    }
    let sec = p3.createDiv({ cls: "ink-section" });
    sec.createDiv({ cls: "ink-label", text: "Drawn with" });
    let row = sec.createDiv({ cls: "ink-fill-brushes" });
    for (let fb of FILL_BRUSHES) {
      let b3 = row.createEl("button", { cls: "ink-chip", text: fb.name, attr: { type: "button" } });
      b3.toggleClass("is-active", (st2.brush || "fineliner") === fb.id), b3.addEventListener("click", () => {
        st2.brush = fb.id, this.plugin.saveState(), this.openPop("fill", this.bucketBtn);
      });
    }
    let sc = p3.createDiv({ cls: "ink-section" });
    sc.createDiv({ cls: "ink-label", text: "Pattern scale" }), slider(sc, {
      min: 4,
      max: 160,
      log: !0,
      round: Math.round,
      get: () => st2.size,
      set: (v3, final) => {
        if (st2.size = v3, this.plugin.saveState(), this.updateUI(!0), !final) return;
        let ids = new Set(this.selectedItems().filter((i3) => i3.type === "fill").map((i3) => i3.id));
        !ids.size && this.lastFillId && ids.add(this.lastFillId), ids.size && this.commit((items) => items.map((i3) => ids.has(i3.id) && i3.type === "fill" ? { ...i3, spacing: v3 } : i3));
      },
      format: (v3) => `${Math.round(v3)}`
    }), p3.createDiv({ cls: "ink-hint", text: "Tap inside a closed outline, rectangle or ellipse to fill it; tap a fill to restyle it. Pattern scale applies to new fills and to the selected (or last) fill. While the bucket is on, new rectangles and ellipses come out filled." });
    let off = p3.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
    (0, import_obsidian3.setIcon)(off.createSpan(), "x"), off.createSpan({ text: "Stop filling" }), off.addEventListener("click", () => {
      this.closePop(), this.setTool("brush");
    });
  }
  buildBakePop(p3) {
    p3.createDiv({ cls: "ink-pop-title", text: "Bake" });
    let list = p3.createDiv({ cls: "ink-choice" }), row = (icon, name, desc, enabled, fn) => {
      let b3 = list.createEl("button", { cls: "ink-choice-row", attr: { type: "button" } });
      b3.disabled = !enabled, (0, import_obsidian3.setIcon)(b3.createSpan({ cls: "ink-choice-icon" }), icon);
      let t3 = b3.createDiv({ cls: "ink-choice-text" });
      t3.createDiv({ cls: "ink-choice-name", text: name }), t3.createDiv({ cls: "ink-choice-desc", text: desc }), b3.addEventListener("click", () => {
        this.closePop(), fn();
      });
    }, n3 = this.selection.size;
    row(
      "ink-bread",
      "Bake selection",
      n3 ? `Turn the ${n3} selected item${n3 === 1 ? "" : "s"} into an image card` : "Select some ink first",
      n3 > 0,
      () => this.bake(this.items.filter((i3) => this.selection.has(i3.id)))
    ), row("ink-oven", "Bake everything", "All ink on this canvas becomes one image card", this.items.length > 0, () => this.bakeAll()), row("ink-unbake", "Unbake a drawing", "Then tap a baked card to turn it back into ink", !0, () => this.startUnbakePick());
  }
  startUnbakePick() {
    this.unbakePick = !0, this.view.contentEl.addClass("ink-picking"), new import_obsidian3.Notice("Tap a baked drawing to unbake it.");
  }
  /** Unbake the baked card under p, if there is one. */
  async unbakeAt(p3) {
    this.unbakePick = !1, this.view.contentEl.removeClass("ink-picking");
    let c3 = this.view.canvas, nodes = [];
    c3 && c3.nodes && typeof c3.nodes.values == "function" ? nodes = [...c3.nodes.values()] : c3 && typeof c3.getData == "function" && (nodes = c3.getData().nodes.filter((n3) => n3.type === "file").map((n3) => ({ ...n3, file: this.plugin.app.vault.getAbstractFileByPath(n3.file) })));
    let hit = nodes.reverse().filter((n3) => p3.x >= n3.x && p3.y >= n3.y && p3.x <= n3.x + n3.width && p3.y <= n3.y + n3.height), svgs = svgNodes(hit);
    if (!svgs.length) {
      new import_obsidian3.Notice("That isn't a baked drawing. Tap Unbake again and tap the card itself.");
      return;
    }
    await unbakeNodes(this, [svgs[0]]);
  }
  buildFxPop(p3) {
    p3.createDiv({ cls: "ink-pop-title", text: "Effects" });
    let tints = { smudge: "#6ba8f5", blend: "#8fb8d8", blur: "#b58ce0", burn: "#9b7bd4", dodge: "#f2c94c" };
    this.modeGrid(p3, FX_KINDS.map((k3) => ({ id: k3, name: FX_META[k3][1], icon: FX_META[k3][0], tint: tints[k3] })), this.state.fx, (k3) => {
      this.state.fx = k3, this.plugin.saveState(), this.openPop("fx", this.fxBtn);
    }, () => {
    }), this.buildStrength(p3);
    let desc = {
      smudge: "Drags color along like a fingertip.",
      blend: "Mixes neighboring colors while keeping edges where they are.",
      blur: "Softens everything under the brush.",
      burn: "Darkens colors under the brush.",
      dodge: "Lightens colors under the brush."
    };
    p3.createDiv({ cls: "ink-hint", text: desc[this.state.fx] || "" }), this.buildBrushRow(p3, "fx");
  }
  /** Strength presets + slider (the dock's opacity knob controls the same value). */
  buildStrength(p3) {
    let sec = p3.createDiv({ cls: "ink-section" });
    sec.createDiv({ cls: "ink-label", text: "Strength" });
    let mark = () => {
    };
    slider(sec, {
      min: 5,
      max: 100,
      round: Math.round,
      get: () => this.currentStyle().opacity,
      set: (v3, final) => {
        final ? this.applyStyle({ opacity: v3 }) : this.previewStyle({ opacity: v3 }), mark();
      },
      format: (v3) => `${Math.round(v3)}%`
    }), mark();
  }
  /** Remember colors as they're applied, so the picker can step back and forward. */
  pushColorHistory(c3) {
    this.colorHist || (this.colorHist = { list: [], at: -1 });
    let h3 = this.colorHist;
    h3.list[h3.at] !== c3 && (h3.list = h3.list.slice(0, h3.at + 1), h3.list.push(c3), h3.list.length > 40 && h3.list.shift(), h3.at = h3.list.length - 1);
  }
  stepColor(dir, cp) {
    let h3 = this.colorHist;
    if (!h3) return;
    let next = h3.at + dir;
    if (next < 0 || next >= h3.list.length) return;
    h3.at = next;
    let st2 = this.currentStyle();
    if (st2.color = h3.list[next], this.plugin.saveState(), this.selection.size) {
      let sel = this.selection;
      this.commit((items) => items.map((i3) => sel.has(i3.id) ? { ...i3, color: h3.list[next] } : i3));
    }
    this.updateUI(), cp && cp.sync();
  }
  buildColorPop(p3) {
    let bar = p3.createDiv({ cls: "ink-color-bar" }), hist = () => this.colorHist || { list: [], at: -1 }, undoBtn = this.iconBtn(bar, "undo-2", "Back to the previous color", () => {
      this.stepColor(-1, this.colorCp), this.openPop("color", this.popAnchor);
    }), redoBtn = this.iconBtn(bar, "redo-2", "Forward again", () => {
      this.stepColor(1, this.colorCp), this.openPop("color", this.popAnchor);
    });
    undoBtn.disabled = hist().at <= 0, redoBtn.disabled = hist().at < 0 || hist().at >= hist().list.length - 1;
    let pick = bar.createEl("button", { cls: "ink-pop-action ink-eyedropper", attr: { type: "button" } });
    (0, import_obsidian3.setIcon)(pick.createSpan(), "pipette"), pick.createSpan({ text: "Pick from canvas" }), pick.addEventListener("click", () => {
      this.closePop(), this.textEdit && this.closeTextEditor(!0), this.startPicker(this.tool);
    });
    let cp = new ColorPicker(p3, {
      getColor: () => this.currentStyle().color,
      recents: () => this.state.recents,
      onInput: (c3) => this.previewStyle({ color: c3 }),
      onCommit: (c3) => {
        this.applyStyle({ color: c3 }), this.resetAdjust && this.resetAdjust(), this.refreshAdjust && this.refreshAdjust();
      }
    });
    this.colorCp = cp, cp.sync(), this.buildAdjustSection(p3, cp), this.pushColorHistory(this.currentStyle().color), this.popRefresh = () => {
      cp.markActive(this.currentStyle().color), this.refreshAdjust && this.refreshAdjust();
    };
  }
  buildSizePop(p3) {
    let info = this.sizeInfo();
    p3.createDiv({ cls: "ink-label", text: "Size" });
    let row = p3.createDiv({ cls: "ink-row ink-presets" }), s3, mark = () => btns.forEach((b3, i3) => b3.toggleClass("is-active", Math.abs(info.presets[i3] - this.currentStyle().size) < 0.05)), btns = info.presets.map((v3, i3) => {
      let b3 = row.createEl("button", { cls: "ink-size", attr: { type: "button", "aria-label": fmtSize(v3) } });
      return b3.createSpan({ cls: "ink-size-dot" }).style.setProperty("--d", `${[4, 7, 11, 16][i3]}px`), b3.createSpan({ cls: "ink-size-num", text: fmtSize(v3) }), b3.addEventListener("click", () => {
        this.applyStyle({ size: v3 }), s3.refresh(), mark();
      }), b3;
    });
    s3 = slider(p3, {
      min: info.range[0],
      max: info.range[1],
      log: !0,
      round: roundSize,
      get: () => this.currentStyle().size,
      set: (v3, final) => {
        final ? this.applyStyle({ size: v3 }) : this.previewStyle({ size: v3 }), mark();
      },
      format: fmtSize
    }), mark();
  }
  buildOpacityPop(p3) {
    p3.createDiv({ cls: "ink-label", text: "Opacity" });
    let row = p3.createDiv({ cls: "ink-segmented" }), vals = [25, 50, 75, 100], s3, mark = () => btns.forEach((b3, i3) => b3.toggleClass("is-active", vals[i3] === this.currentStyle().opacity)), btns = vals.map((v3) => {
      let b3 = row.createEl("button", { text: `${v3}%`, attr: { type: "button" } });
      return b3.addEventListener("click", () => {
        this.applyStyle({ opacity: v3 }), s3.refresh(), mark();
      }), b3;
    });
    s3 = slider(p3, {
      min: 5,
      max: 100,
      round: Math.round,
      get: () => this.currentStyle().opacity,
      set: (v3, final) => {
        final ? this.applyStyle({ opacity: v3 }) : this.previewStyle({ opacity: v3 }), mark();
      },
      format: (v3) => `${Math.round(v3)}%`
    }), mark();
  }
  /** Which style the brush library is choosing a brush for. */
  libTarget() {
    if (this.libFor === "pixel") {
      let st2 = this.state;
      return {
        style: { get brush() {
          return st2.pixelBrush;
        }, set brush(v3) {
          st2.pixelBrush = v3;
        } },
        title: "Brush for pixel painting",
        fallback: "pencil",
        stampOnly: !0,
        backTo: "pixel"
      };
    }
    return this.libFor === "alter" ? { style: this.state.alterStyle, title: "Brush for Alter", fallback: "softround", stampOnly: !0, backTo: "alter" } : this.libFor === "fx" ? { style: this.state.fxStyle, title: `Brush for ${(FX_META[this.state.fx] || FX_META.smudge)[1].toLowerCase()}`, fallback: "softround", stampOnly: !0 } : this.libFor === "eraser" ? { style: this.state.eraserStyle, title: "Brush for the fine eraser", fallback: "hardround", stampOnly: !0 } : { style: this.state.slots[this.state.slot], title: `Brush for slot ${this.state.slot + 1}` };
  }
  /** A "Brush: …" row that opens the library for the effect tool or fine eraser. */
  buildBrushRow(p3, forWhat) {
    let t3 = (this.libFor = forWhat, this.libTarget());
    this.libFor = null;
    let br = getBrush(t3.style.brush || t3.fallback), row = p3.createEl("button", { cls: "ink-choice-row ink-brush-row", attr: { type: "button" } }), img = row.createEl("img", { cls: "ink-lib-preview", attr: { alt: "" } });
    this.plugin.brushPreview(br, this.resolveColor("auto")).then((src) => {
      src && (img.src = src);
    });
    let tx = row.createDiv({ cls: "ink-choice-text" });
    tx.createDiv({ cls: "ink-choice-name", text: br.name }), tx.createDiv({ cls: "ink-choice-desc", text: "Brush shape, grain and pressure. Tap to change." }), row.addEventListener("click", () => {
      let anchor = this.popAnchor;
      this.libFor = forWhat, this.openPop("library", anchor);
    });
  }
  buildLibraryPop(p3) {
    var _a2;
    let tgt = this.libTarget(), slot = tgt.style;
    if (p3.createDiv({ cls: "ink-pop-title", text: tgt.title }), !tgt.stampOnly) {
      let sec = p3.createDiv({ cls: "ink-section" });
      sec.createDiv({ cls: "ink-label", text: "StreamLine (smoothing)" }), slider(sec, {
        min: 0,
        max: 100,
        round: Math.round,
        get: () => {
          var _a3;
          return (_a3 = slot.smoothing) != null ? _a3 : 30;
        },
        set: (v3) => {
          slot.smoothing = v3, this.plugin.saveState();
        },
        format: (v3) => `${Math.round(v3)}%`
      });
    }
    let cur = getBrush(slot.brush || tgt.fallback);
    if (cur && cur.wet) {
      let sec = p3.createDiv({ cls: "ink-section" });
      sec.createDiv({ cls: "ink-label", text: "Wetness: how far the water spreads (0 = texture only)" }), slider(sec, {
        min: 0,
        max: 100,
        round: Math.round,
        get: () => {
          var _a3;
          return (_a3 = slot.wetness) != null ? _a3 : 50;
        },
        set: (v3) => {
          slot.wetness = v3, this.plugin.saveState();
        },
        format: (v3) => v3 < 0.5 ? "Off" : `${Math.round(v3)}%`
      }), sec.createDiv({ cls: "ink-label", text: "Overlaps (inside paintings)" });
      let seg = sec.createDiv({ cls: "ink-segmented" });
      for (let [val, text] of [[!0, "Mix like paint"], [!1, "Lay on top"]]) {
        let b3 = seg.createEl("button", { text, attr: { type: "button" } });
        b3.toggleClass("is-active", ((_a2 = slot.pigment) != null ? _a2 : !0) === val), b3.addEventListener("click", () => {
          slot.pigment = val, this.plugin.saveState(), seg.querySelectorAll("button").forEach((x3) => x3.toggleClass("is-active", x3 === b3));
        });
      }
    }
    let list = p3.createDiv({ cls: "ink-lib" }), groups = /* @__PURE__ */ new Map();
    for (let b3 of allBrushes()) {
      if (tgt.stampOnly && b3.kind !== "stamp") continue;
      let g3 = b3.group === "Imported" ? b3.set || "Imported" : b3.group;
      groups.has(g3) || groups.set(g3, []), groups.get(g3).push(b3);
    }
    let color = this.resolveColor(slot.color);
    for (let [name, brushes] of groups) {
      list.createDiv({ cls: "ink-label", text: name });
      for (let b3 of brushes) {
        let row = list.createEl("button", { cls: "ink-lib-row", attr: { type: "button" } });
        row.toggleClass("is-active", b3.id === (slot.brush || tgt.fallback));
        let img = row.createEl("img", { cls: "ink-lib-preview", attr: { alt: "" } });
        if (this.plugin.brushPreview(b3, color).then((src) => {
          src && (img.src = src);
        }), row.createSpan({ cls: "ink-lib-name", text: b3.name }), row.addEventListener("click", () => {
          if (slot.brush = b3.id, tgt.backTo) {
            this.plugin.saveState(), this.libFor = null, tgt.backTo === "pixel" ? (this.pixPage = "brush", this.openPop("pixel", this.pixelBtn)) : this.openPop(tgt.backTo, this.alterBtn);
            return;
          }
          if (!tgt.stampOnly) {
            let [lo, hi] = b3.range || [0.5, 100];
            (slot.size < lo || slot.size > hi) && (slot.size = (b3.presets || [4, 8])[1]);
          }
          this.plugin.saveState(), this.closePop();
        }), isCustom(b3.id)) {
          let del = row.createSpan({ cls: "ink-lib-del", attr: { role: "button", "aria-label": `Remove ${b3.name}` } });
          (0, import_obsidian3.setIcon)(del, "x"), del.addEventListener("click", (e3) => {
            e3.stopPropagation(), this.plugin.removeBrush(b3.id).then(() => this.openPop("library", this.libAnchor()));
          });
        }
      }
    }
    let foot = p3.createDiv({ cls: "ink-pop-foot" }), fileBtn = foot.createEl("label", { cls: "ink-pop-action" });
    (0, import_obsidian3.setIcon)(fileBtn.createSpan(), "upload"), fileBtn.createSpan({ text: "Import Procreate brushes" });
    let input = fileBtn.createEl("input", { type: "file", attr: { multiple: "true" } });
    input.addEventListener("change", async () => {
      let files = Array.from(input.files || []);
      if (files.length) {
        for (let f3 of files) await this.plugin.importBrushBytes(f3.name, new Uint8Array(await f3.arrayBuffer()));
        this.openPop("library", this.libAnchor());
      }
    });
    let vaultBtn = foot.createEl("button", { cls: "ink-pop-action", attr: { type: "button" } });
    (0, import_obsidian3.setIcon)(vaultBtn.createSpan(), "folder-open"), vaultBtn.createSpan({ text: "Import from vault" }), vaultBtn.addEventListener("click", () => {
      this.closePop(), this.plugin.importFromVault();
    });
  }
  buildShapesPop(p3) {
    let st2 = this.state.shapeStyle;
    p3.createDiv({ cls: "ink-pop-title", text: "Shapes" });
    let qs = p3.createEl("label", { cls: "ink-toggle-row" }), qcb = qs.createEl("input", { type: "checkbox" });
    qcb.checked = this.settings.quickShape === !0, qs.createSpan({ text: "QuickShape: hold at the end of a stroke to snap it into a shape" }), qcb.addEventListener("change", async () => {
      this.settings.quickShape = qcb.checked, this.plugin.persist ? await this.plugin.persist() : this.plugin.saveState();
    }), this.modeGrid(p3, SHAPES.map((s3) => ({ id: s3, name: SHAPE_META[s3][1], icon: SHAPE_META[s3][0], tint: s3 === "connector" ? "#4bbf9a" : "#7ecb8f" })), this.state.shape, (s3) => {
      this.state.shape = s3, this.plugin.saveState(), this.updateUI(), this.openPop("shapes", this.shapeBtn);
    }, () => {
    });
    let seg = (label, options, key2) => {
      let s3 = p3.createDiv({ cls: "ink-section" });
      s3.createDiv({ cls: "ink-label", text: label });
      let r4 = s3.createDiv({ cls: "ink-segmented" });
      for (let [val, text] of options) {
        let b3 = r4.createEl("button", { text, attr: { type: "button" } });
        b3.toggleClass("is-active", st2[key2] === val), b3.addEventListener("click", () => {
          this.applyStyle({ [key2]: val }), r4.querySelectorAll("button").forEach((x3) => x3.removeClass("is-active")), b3.addClass("is-active");
        });
      }
    };
    if (this.state.shape === "connector") {
      let sec = p3.createDiv({ cls: "ink-section" });
      sec.createDiv({ cls: "ink-label", text: "Connector" });
      let r4 = sec.createDiv({ cls: "ink-segmented" });
      for (let [val, text] of [["curve", "Curved"], ["elbow", "Elbow"], ["straight", "Straight"]]) {
        let b3 = r4.createEl("button", { text, attr: { type: "button" } });
        b3.toggleClass("is-active", (this.state.connectorStyle || "curve") === val), b3.addEventListener("click", () => {
          this.state.connectorStyle = val, this.plugin.saveState(), this.restyleConnectors({ style: val }), this.openPop("shapes", this.shapeBtn);
        });
      }
      let arrows = sec.createDiv({ cls: "ink-segmented" }), cur = this.state.connectorArrow, mode = cur === !1 ? "none" : cur === !0 || cur === void 0 ? "end" : cur;
      for (let [val, text] of [["none", "None"], ["end", "One way"], ["both", "Both ways"]]) {
        let b3 = arrows.createEl("button", { text, attr: { type: "button" } });
        b3.toggleClass("is-active", mode === val), b3.addEventListener("click", () => {
          this.state.connectorArrow = val, this.plugin.saveState(), this.restyleConnectors({ arrow: val }), this.openPop("shapes", this.shapeBtn);
        });
      }
      let nodeRow = sec.createEl("label", { cls: "ink-toggle-row" }), ncb = nodeRow.createEl("input", { type: "checkbox" });
      ncb.checked = !!this.state.connectorNode, nodeRow.createSpan({ text: "Round nodes at each end" }), ncb.addEventListener("change", () => {
        this.state.connectorNode = ncb.checked, this.plugin.saveState(), this.restyleConnectors({ node: ncb.checked });
      }), sec.createDiv({ cls: "ink-hint", text: "Drag from one thing to another: each end attaches where you touch it, on the nearest edge, and follows it from then on. Ends dropped on empty canvas stay put." });
    }
    let solo = this.soloShape();
    solo && isContainer(solo) && this.buildImageSection(p3, solo, () => this.openPop("shapes", this.shapeBtn)), seg("Edges", [[!0, "Sketchy"], [!1, "Clean"]], "rough"), seg("Line", [[!1, "Solid"], [!0, "Dashed"]], "dash");
  }
  /** Apply connector options to any selected connectors as well. */
  restyleConnectors(patch) {
    let sel = this.selection;
    sel.size && this.commit((items) => items.map((i3) => sel.has(i3.id) && i3.type === "connector" ? { ...i3, ...patch } : i3));
  }
  buildFontsPop(p3) {
    if (this.fontBrowse) return this.buildFontBrowser(p3);
    p3.createDiv({ cls: "ink-pop-title", text: "Text" }), p3.createDiv({ cls: "ink-label", text: "Font" });
    let list = p3.createDiv({ cls: "ink-fonts" }), custom2 = (this.settings.customFonts || "").split(",").map((s3) => s3.trim()).filter(Boolean), fonts = [...FONTS, ...cloudFonts().sort().map((n3) => ({ id: "cloud:" + n3, name: n3, cloud: !0 })), ...custom2.map((n3) => ({ id: "custom:" + n3, name: n3 }))];
    for (let f3 of fonts) {
      let b3 = list.createEl("button", { cls: "ink-font-row", attr: { type: "button" } });
      if (b3.toggleClass("is-active", this.state.textStyle.font === f3.id), b3.createSpan({ cls: "ink-font-sample", text: f3.name }).style.fontFamily = fontFamily(f3.id), b3.addEventListener("click", () => {
        this.applyStyle({ font: f3.id }), list.querySelectorAll(".ink-font-row").forEach((x3) => x3.removeClass("is-active")), b3.addClass("is-active");
      }), f3.cloud) {
        let x3 = b3.createSpan({ cls: "ink-font-remove", attr: { "aria-label": `Remove ${f3.name}` } });
        (0, import_obsidian3.setIcon)(x3, "x"), x3.addEventListener("click", async (e3) => {
          e3.stopPropagation(), await removeCloudFont(this.plugin.app, f3.name), this.state.textStyle.font === f3.id && this.applyStyle({ font: "default" }), this.openPop("fonts", this.popAnchor);
        });
      }
    }
    let more = p3.createEl("button", { cls: "ink-choice-row ink-font-more", attr: { type: "button" } }), ic = more.createSpan({ cls: "ink-mode-icon" });
    (0, import_obsidian3.setIcon)(ic, "cloud-download");
    let t3 = more.createDiv({ cls: "ink-choice-text" });
    t3.createDiv({ cls: "ink-choice-name", text: `Get more fonts (Palette ${this.plugin.manifest.version})` }), t3.createDiv({ cls: "ink-choice-desc", text: `${CLOUD_FONTS.length} free fonts from Google Fonts. Downloaded into your vault, so they work offline and sync.` }), more.addEventListener("click", () => {
      this.fontBrowse = { q: "", cat: "Handwriting" }, this.openPop("fonts", this.popAnchor);
    });
  }
  /** Browse and download fonts from the catalog. Each family is one tap: download, keep, use. */
  buildFontBrowser(p3) {
    let fb = this.fontBrowse, head = p3.createDiv({ cls: "ink-pop-head" });
    this.iconBtn(head, "chevron-left", "Back", () => {
      this.fontBrowse = null, this.openPop("fonts", this.popAnchor);
    }, "ink-back"), head.createDiv({ cls: "ink-pop-title", text: "Get fonts" });
    let search = p3.createEl("input", { cls: "ink-font-search", type: "search", attr: { placeholder: "Search fonts", "aria-label": "Search fonts" } });
    search.value = fb.q;
    let seg = p3.createDiv({ cls: "ink-segmented ink-font-cats" }), cats = ["All", ...FONT_CATEGORIES], rows = p3.createDiv({ cls: "ink-fonts ink-font-catalog" }), io = typeof IntersectionObserver == "function" ? new IntersectionObserver((ents) => {
      for (let e3 of ents) {
        if (!e3.isIntersecting) continue;
        io.unobserve(e3.target);
        let { name, sample } = e3.target._fontPreview || {};
        name && previewCloudFont(name).then((face) => {
          face && sample.isConnected && (sample.style.fontFamily = `"${face}", var(--font-text)`);
        }).catch(() => {
          e3.target._fontFailed = !0;
        });
      }
    }, { root: rows, rootMargin: "120px" }) : null, watch = (row, name, sample) => {
      row._fontPreview = { name, sample }, io && io.observe(row);
    }, build = () => {
      rows.empty();
      let q2 = fb.q.trim().toLowerCase(), hits = CLOUD_FONTS.filter(([name, cat]) => (fb.cat === "All" || cat === fb.cat || q2) && (!q2 || name.toLowerCase().includes(q2)));
      hits.length || rows.createDiv({ cls: "ink-hint", text: "Nothing matches." });
      for (let [name, cat] of hits.slice(0, 80)) {
        let have = installed.has(name), b3 = rows.createEl("button", { cls: "ink-font-row", attr: { type: "button" } });
        b3.toggleClass("is-active", this.state.textStyle.font === `cloud:${name}`);
        let sample = b3.createSpan({ cls: "ink-font-sample", text: name });
        have ? sample.style.fontFamily = fontFamily(`cloud:${name}`) : watch(b3, name, sample), b3.createSpan({ cls: "ink-font-meta", text: have ? "Downloaded" : cat }), b3.addEventListener("click", async () => {
          if (!b3.hasClass("is-busy")) {
            b3.addClass("is-busy"), b3.querySelector(".ink-font-meta").setText(have ? "Using" : "Downloading\u2026");
            try {
              let id = await installCloudFont(this.plugin.app, this.settings.fontFolder || "Palette fonts", name);
              this.applyStyle({ font: id }), build();
            } catch (e3) {
              b3.removeClass("is-busy"), b3.querySelector(".ink-font-meta").setText("Failed"), new import_obsidian3.Notice(`Palette: ${e3.message || e3}. Check the connection and try again.`);
            }
          }
        });
      }
      hits.length > 80 && rows.createDiv({ cls: "ink-hint", text: `${hits.length - 80} more: narrow the search.` });
    };
    for (let c3 of cats) {
      let b3 = seg.createEl("button", { text: c3, attr: { type: "button" } });
      b3.toggleClass("is-active", fb.cat === c3), b3.addEventListener("click", () => {
        fb.cat = c3, seg.querySelectorAll("button").forEach((x3) => x3.toggleClass("is-active", x3 === b3)), build();
      });
    }
    search.addEventListener("input", () => {
      fb.q = search.value, build();
    }), build(), p3.createDiv({ cls: "ink-hint", text: "All of these are open-licensed (SIL OFL, Apache or Ubuntu), free for anything you make. Files go in the fonts folder set in Palette's settings." });
  }
  updateUI(light = !1) {
    if (!this.ui) return;
    let wasVisible = this.ui.hasClass("is-visible");
    if (this.ui.toggleClass("is-visible", this.active), !this.active) return;
    let tool = this.tool, st2 = this.currentStyle();
    this.colorBtn.style.setProperty("--c", paint(this.colorless ? "auto" : st2.color)), this.colorBtn.toggleClass("is-auto", !this.colorless && st2.color === "auto"), this.colorBtn.toggleClass("is-disabled", this.colorless), this.sizeKnob.update(), this.opacityKnob.update();
    let slot = this.state.slots[this.state.slot], paintSlot = (b3, s3, i3) => {
      let br = getBrush(s3.brush), ic = b3.querySelector(".ink-slot-icon");
      ic.dataset.brush !== br.id && (ic.dataset.brush = br.id, ic.empty(), (0, import_obsidian3.setIcon)(ic, br.icon || "brush"), ic.querySelector("svg") || ic.setText(br.name.slice(0, 1))), b3.setAttribute("aria-label", i3 === void 0 ? `${br.name}: tap for presets` : `${br.name} (${i3 + 1})`), b3.querySelector(".ink-slot-color").style.background = paint(s3.color);
    };
    if (paintSlot(this.brushBtn, slot), this.brushBtn.toggleClass("is-active", tool === "brush"), this.slotBtns.forEach((b3, i3) => {
      paintSlot(b3, this.state.slots[i3], i3), b3.toggleClass("is-active", tool === "brush" && this.state.slot === i3);
    }), light) return;
    for (let [id, b3] of this.toolBtns) b3.toggleClass("is-active", id === tool);
    this.bucketBtn.toggleClass("is-armed", !!this.state.fillActive && tool !== "bucket");
    let [shapeIcon] = SHAPE_META[this.state.shape] || SHAPE_META.rect;
    this.setBtnIcon(this.shapeBtn, shapeIcon), this.setBtnIcon(this.eraserBtn, this.state.eraserMode === "fine" ? "ink-eraser-fine" : "ink-eraser-element"), this.setBtnIcon(this.fxBtn, (FX_META[this.state.fx] || FX_META.smudge)[0]);
    let shared = !!this.hookedCanvas;
    this.undoBtn.disabled = !shared && !(this.doc && this.doc.canUndo), this.redoBtn.disabled = !shared && !(this.doc && this.doc.canRedo), this.dupBtn.toggleClass("is-hidden", this.selection.size === 0), this.delBtn.toggleClass("is-hidden", this.selection.size === 0), this.bakeBtn.disabled = !this.items.length, this.bakeBtn.setAttribute("aria-label", this.selection.size ? "Bake selection into canvas" : "Bake all ink into canvas"), this.colorBtn.toggleClass("is-open", this.popKind === "color"), this.popRefresh && this.popRefresh(), wasVisible || this.layout();
  }
};

// src/store.js
var import_obsidian4 = require("obsidian");
var sidecarPath = (canvasPath) => `${canvasPath}.ink.json`, CACHE_ROOT = ".palette/cache", hashOf = (text) => {
  let h3 = 5381;
  for (let i3 = 0; i3 < text.length; i3++) h3 = (Math.imul(h3, 33) ^ text.charCodeAt(i3)) >>> 0;
  return h3.toString(36);
}, cachePath = (canvasPath) => {
  let base = canvasPath.split("/").pop().replace(/\.canvas$/i, "").replace(/[^a-z0-9_-]/gi, "_").slice(0, 40);
  return `${CACHE_ROOT}/${base}-${hashOf(canvasPath)}`;
}, legacyCachePath = (canvasPath) => `${canvasPath}.ink.cache`, SnapshotStore = class {
  constructor(doc) {
    this.doc = doc, this.map = /* @__PURE__ */ new Map(), this.dirty = !1, this.timer = null, this.chain = Promise.resolve();
  }
  get adapter() {
    return this.doc.adapter;
  }
  get dir() {
    return cachePath(this.doc.path);
  }
  entry(k3, s3) {
    let e3 = { sig: s3.sig, k: s3.k, dx: s3.dx, dy: s3.dy, w: s3.w, h: s3.h, file: s3.file };
    Number.isFinite(s3.x) && (e3.x = s3.x, e3.y = s3.y), e3.read = () => this.adapter.readBinary(`${this.dir}/${e3.file}`);
    try {
      e3.url = this.adapter.getResourcePath ? this.adapter.getResourcePath(`${this.dir}/${e3.file}`) : null;
    } catch {
      e3.url = null;
    }
    return e3;
  }
  /**
   * Keep the phone's photo gallery out of the cache: Android's media scanner skips any
   * folder holding a ".nomedia" file, and new pictures get a non-image extension as well.
   */
  async shield() {
    try {
      if (!await this.adapter.exists(this.dir)) return;
      let nm = `${this.dir}/.nomedia`;
      await this.adapter.exists(nm) || await this.adapter.write(nm, "");
    } catch {
    }
  }
  /** Create the cache folder (and the hidden root above it) if needed. */
  async ensureDir() {
    let a3 = this.adapter, parts = this.dir.split("/");
    for (let i3 = 1; i3 <= parts.length; i3++) {
      let sub = parts.slice(0, i3).join("/");
      try {
        await a3.exists(sub) || await a3.mkdir(sub);
      } catch {
      }
    }
  }
  /** A cache left beside the canvas by earlier versions moves into the hidden folder. */
  async migrate() {
    let a3 = this.adapter, old = legacyCachePath(this.doc.path);
    try {
      if (!await a3.exists(old)) return;
      if (await a3.exists(this.dir)) {
        await a3.rmdir(old, !0);
        return;
      }
      await this.ensureDir(), await a3.rmdir(this.dir, !0), await a3.rename(old, this.dir);
    } catch (e3) {
      console.warn("[Palette] Could not move the old cache folder; it will be rebuilt", old, e3);
      try {
        await a3.rmdir(old, !0);
      } catch {
      }
    }
  }
  async load() {
    let p3 = `${this.dir}/index.json`;
    await this.migrate(), await this.shield();
    try {
      if (await this.adapter.exists(p3)) {
        let data = JSON.parse(await this.adapter.read(p3)), snaps = data && data.snapshots;
        if (snaps && typeof snaps == "object")
          for (let k3 in snaps) {
            let s3 = snaps[k3];
            s3 && k3.includes("|") && typeof s3.file == "string" && Number.isFinite(s3.k) && Number.isFinite(s3.w) && Number.isFinite(s3.h) && this.map.set(k3, this.entry(k3, s3));
          }
      }
    } catch (e3) {
      console.warn("[Palette] Could not read the render cache; effects will re-render", p3, e3);
    }
  }
  /** Snapshots are per theme key: 'auto' colors differ between light and dark. */
  get(id, key2 = "") {
    return this.map.get(`${id}|${key2}`);
  }
  /**
   * A piece the drawing refers to but the index has lost (the app closed between the
   * pieces being written and the index being saved): find its file in the cache folder
   * by name and take it back into the index.
   */
  async adopt(id, key2 = "", info = {}) {
    let k3 = `${id}|${key2}`;
    if (this.map.has(k3)) return this.map.get(k3);
    try {
      (!this.listing || Date.now() - this.listingAt > 5e3) && (this.listing = await this.adapter.exists(this.dir) ? (await this.adapter.list(this.dir)).files.map((p3) => p3.split("/").pop()) : [], this.listingAt = Date.now());
      let prefix = `${String(id).replace(/[^a-z0-9_-]/gi, "_")}-${(key2 || "x").replace(/[^a-z0-9]/gi, "").slice(0, 12)}-`, file = this.listing.filter((f3) => f3.startsWith(prefix)).sort().pop();
      if (!file) return null;
      let e3 = this.entry(k3, { sig: info.sig || "pyr", key: key2, k: info.k || 1, dx: 0, dy: 0, w: info.w || 0, h: info.h || 0, file });
      return this.map.set(k3, e3), this.dirty = !0, this.scheduleSave(), e3;
    } catch {
      return null;
    }
  }
  /** Save a rendered group: snap.blob is the encoded image. Resolves once the image file is on disk. */
  async set(id, key2, snap) {
    return this.writeChain = (this.writeChain || Promise.resolve()).then(() => this.setNow(id, key2, snap)).then((r4) => new Promise((res) => setTimeout(() => res(r4), 15)), () => null), this.writeChain;
  }
  async setNow(id, key2, snap) {
    let k3 = `${id}|${key2}`, file = `${String(id).replace(/[^a-z0-9_-]/gi, "_")}-${(key2 || "x").replace(/[^a-z0-9]/gi, "").slice(0, 12)}-${Date.now().toString(36)}.pal`;
    try {
      await this.adapter.exists(this.dir) || (await this.ensureDir(), await this.shield()), await this.adapter.writeBinary(`${this.dir}/${file}`, await snap.blob.arrayBuffer());
    } catch (e3) {
      console.warn("[Palette] Could not save a render to the cache", e3);
      return;
    }
    let old = this.map.get(k3);
    this.map.set(k3, this.entry(k3, { ...snap, file })), old && old.file && old.file !== file && this.removeFile(old.file), this.dirty = !0, this.listing = null, this.batch || this.flush();
  }
  async removeFile(file) {
    try {
      await this.adapter.remove(`${this.dir}/${file}`);
    } catch {
    }
  }
  /** Every group id the drawing (including its undo history) still refers to. */
  liveIds() {
    let ids = /* @__PURE__ */ new Set(), walk = (items) => {
      for (let it of items) it && it.id && (ids.add(it.id), Array.isArray(it.items) && walk(it.items));
    };
    walk(this.doc.items);
    for (let arr of this.doc.undoStack) walk(arr);
    for (let arr of this.doc.redoStack) walk(arr);
    if (Array.isArray(this.doc.layers)) for (let l3 of this.doc.layers) {
      for (let rec of [l3.frozen, l3.freezing]) if (rec) for (let p3 of rec.pieces) ids.add(p3.snap);
      for (let rec of [l3.pyramid, l3.pyramidBuilding]) if (rec && rec.levels) for (let lv of rec.levels) for (let p3 of lv.pieces) ids.add(p3.snap);
    }
    return ids;
  }
  scheduleSave() {
    this.batch || (clearTimeout(this.timer), this.timer = setTimeout(() => {
      let idle = typeof window < "u" && window.requestIdleCallback;
      idle ? idle(() => this.flush(), { timeout: 4e3 }) : this.flush();
    }, 2500));
  }
  flush() {
    return clearTimeout(this.timer), this.timer = null, this.chain = this.chain.then(() => this.write()), this.chain;
  }
  async write() {
    if (!this.dirty) return;
    this.dirty = !1;
    let p3 = `${this.dir}/index.json`;
    try {
      let live = this.liveIds(), rev2 = String(this.doc.rev || 0);
      for (let k3 of [...this.map.keys()]) {
        if (live.has(k3.slice(0, k3.indexOf("|")))) continue;
        let e3 = this.map.get(k3);
        k3.startsWith("tile:") && e3.sig === rev2 || (this.map.delete(k3), e3.file && this.removeFile(e3.file));
      }
      if (!this.map.size) {
        await this.adapter.exists(this.dir) && await this.adapter.rmdir(this.dir, !0);
        return;
      }
      let snapshots = {};
      for (let [k3, s3] of this.map)
        snapshots[k3] = { sig: s3.sig, k: s3.k, dx: s3.dx, dy: s3.dy, w: s3.w, h: s3.h, file: s3.file }, Number.isFinite(s3.x) && (snapshots[k3].x = s3.x, snapshots[k3].y = s3.y);
      await this.adapter.exists(this.dir) || (await this.ensureDir(), await this.shield()), await this.adapter.write(p3, JSON.stringify({ version: 2, snapshots }));
    } catch (e3) {
      this.dirty = !0, console.warn("[Palette] Could not save the render cache", p3, e3);
    }
  }
}, InkDoc = class {
  constructor(plugin, path) {
    this.plugin = plugin, this.path = path, this.items = [], this.undoStack = [], this.redoStack = [], this.listeners = /* @__PURE__ */ new Set(), this.refs = 0, this.dirty = !1, this.timer = null, this.chain = Promise.resolve(), this.snapshots = new SnapshotStore(this), this.ready = this.load();
  }
  get adapter() {
    return this.plugin.app.vault.adapter;
  }
  async load() {
    let p3 = sidecarPath(this.path);
    try {
      if (await this.adapter.exists(p3)) {
        let data = JSON.parse(await this.adapter.read(p3));
        if (Array.isArray(data.items) && (this.items = data.items), Number.isFinite(data.rev) && (this.rev = data.rev), Array.isArray(data.layers) && data.layers.length && (this.layers = data.layers), data.brushes && typeof data.brushes == "object")
          for (let id in data.brushes) isCustom(id) || registerBrush({ ...data.brushes[id], hidden: !0 });
      }
    } catch (e3) {
      console.error("[Palette] Could not read", p3, e3), new import_obsidian4.Notice(`Palette: couldn't read ${p3}. The drawing file may be damaged.`);
    }
    this.items.length && await this.snapshots.load(), this.emit();
  }
  subscribe(fn) {
    return this.listeners.add(fn), () => this.listeners.delete(fn);
  }
  emit() {
    for (let fn of this.listeners) fn();
  }
  set(items) {
    this.items = items, this.dirty = !0, this.emit(), this.scheduleSave();
  }
  /** Apply a change as one undoable step. */
  update(fn) {
    let next = fn(this.items);
    next !== this.items && (this.undoStack.push(this.items), this.undoStack.length > 200 && this.undoStack.shift(), this.redoStack = [], this.set(next));
  }
  get canUndo() {
    return this.undoStack.length > 0;
  }
  get canRedo() {
    return this.redoStack.length > 0;
  }
  undo() {
    this.canUndo && (this.redoStack.push(this.items), this.set(this.undoStack.pop()));
  }
  redo() {
    this.canRedo && (this.undoStack.push(this.items), this.set(this.redoStack.pop()));
  }
  /**
   * Swap items in place without adding an undo step (used to move inline pictures out to
   * files). Undo history gets the same swap, so undoing never brings the old copy back.
   */
  replaceSilently(mapItem) {
    let map = (arr) => arr.map((it) => mapItem(it) || it);
    this.items = map(this.items), this.undoStack = this.undoStack.map(map), this.redoStack = this.redoStack.map(map), this.dirty = !0, this.emit(), this.scheduleSave();
  }
  scheduleSave() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      let idle = typeof window < "u" && window.requestIdleCallback;
      idle ? idle(() => this.flush(), { timeout: 2e3 }) : this.flush();
    }, 1200);
  }
  flush() {
    if (clearTimeout(this.timer), this.timer = null, this.chain = this.chain.then(() => this.write()), this.snapshots.dirty) {
      let c3 = this.snapshots.flush();
      this.chain = this.chain.then(() => c3);
    }
    return this.chain;
  }
  discard() {
    clearTimeout(this.timer), this.dirty = !1, clearTimeout(this.snapshots.timer), this.snapshots.dirty = !1;
  }
  async write() {
    if (!this.dirty) return;
    this.dirty = !1;
    let p3 = sidecarPath(this.path);
    try {
      if (!this.items.length) {
        await this.adapter.exists(p3) && await this.adapter.remove(p3);
        return;
      }
      let brushes = {};
      for (let it of this.items)
        for (let id of brushIds(it))
          if (isCustom(id) && !brushes[id]) {
            let { hidden, ...def } = getBrush(id);
            brushes[id] = def;
          }
      this.rev = (this.rev || 0) + 1;
      let out = { version: 2, items: this.items, rev: this.rev };
      Array.isArray(this.layers) && (this.layers.length > 1 || this.layers.some((l3) => l3.pyramid || l3.frozen || l3.freezing || l3.visible === !1 || l3.locked || l3.name !== "Layer 1")) && (out.layers = this.layers.map(({ _running, _building, pyramidBuilding, ...l3 }) => l3.pyramid && l3.pyramid.levels ? { ...l3, pyramid: { ...l3.pyramid, levels: l3.pyramid.levels.map(({ _index, ...lv }) => lv) } } : l3)), Object.keys(brushes).length && (out.brushes = brushes), await this.adapter.write(p3, JSON.stringify(out));
    } catch (e3) {
      this.dirty = !0, console.error("[Palette] Could not save", p3, e3), new import_obsidian4.Notice("Palette: couldn't save the drawing. Your strokes are kept in memory; try again or check storage.");
    }
  }
};

// node_modules/fflate/esm/browser.js
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array, fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), freb = function(eb, start) {
  for (var b3 = new u16(31), i3 = 0; i3 < 31; ++i3)
    b3[i3] = start += 1 << eb[i3 - 1];
  for (var r4 = new i32(b3[30]), i3 = 1; i3 < 30; ++i3)
    for (var j3 = b3[i3]; j3 < b3[i3 + 1]; ++j3)
      r4[j3] = j3 - b3[i3] << 5 | i3;
  return { b: b3, r: r4 };
}, _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b, revfd = _b.r, rev = new u16(32768);
for (i3 = 0; i3 < 32768; ++i3)
  x3 = (i3 & 43690) >> 1 | (i3 & 21845) << 1, x3 = (x3 & 52428) >> 2 | (x3 & 13107) << 2, x3 = (x3 & 61680) >> 4 | (x3 & 3855) << 4, rev[i3] = ((x3 & 65280) >> 8 | (x3 & 255) << 8) >> 1;
var x3, i3, hMap = function(cd, mb, r4) {
  for (var s3 = cd.length, i3 = 0, l3 = new u16(mb); i3 < s3; ++i3)
    cd[i3] && ++l3[cd[i3] - 1];
  var le = new u16(mb);
  for (i3 = 1; i3 < mb; ++i3)
    le[i3] = le[i3 - 1] + l3[i3 - 1] << 1;
  var co;
  if (r4) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i3 = 0; i3 < s3; ++i3)
      if (cd[i3])
        for (var sv = i3 << 4 | cd[i3], r_1 = mb - cd[i3], v3 = le[cd[i3] - 1]++ << r_1, m3 = v3 | (1 << r_1) - 1; v3 <= m3; ++v3)
          co[rev[v3] >> rvb] = sv;
  } else
    for (co = new u16(s3), i3 = 0; i3 < s3; ++i3)
      cd[i3] && (co[i3] = rev[le[cd[i3] - 1]++] >> 15 - cd[i3]);
  return co;
}, flt = new u8(288);
for (i3 = 0; i3 < 144; ++i3)
  flt[i3] = 8;
var i3;
for (i3 = 144; i3 < 256; ++i3)
  flt[i3] = 9;
var i3;
for (i3 = 256; i3 < 280; ++i3)
  flt[i3] = 7;
var i3;
for (i3 = 280; i3 < 288; ++i3)
  flt[i3] = 8;
var i3, fdt = new u8(32);
for (i3 = 0; i3 < 32; ++i3)
  fdt[i3] = 5;
var i3;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1), max = function(a3) {
  for (var m3 = a3[0], i3 = 1; i3 < a3.length; ++i3)
    a3[i3] > m3 && (m3 = a3[i3]);
  return m3;
}, bits = function(d3, p3, m3) {
  var o3 = p3 / 8 | 0;
  return (d3[o3] | d3[o3 + 1] << 8) >> (p3 & 7) & m3;
}, bits16 = function(d3, p3) {
  var o3 = p3 / 8 | 0;
  return (d3[o3] | d3[o3 + 1] << 8 | d3[o3 + 2] << 16) >> (p3 & 7);
}, shft = function(p3) {
  return (p3 + 7) / 8 | 0;
}, slc = function(v3, s3, e3) {
  return (s3 == null || s3 < 0) && (s3 = 0), (e3 == null || e3 > v3.length) && (e3 = v3.length), new u8(v3.subarray(s3, e3));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  // determined by compression function
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], err = function(ind, msg, nt2) {
  var e3 = new Error(msg || ec[ind]);
  if (e3.code = ind, Error.captureStackTrace && Error.captureStackTrace(e3, err), !nt2)
    throw e3;
  return e3;
}, inflt = function(dat, st2, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st2.f && !st2.l)
    return buf || new u8(0);
  var noBuf = !buf, resize = noBuf || st2.i != 2, noSt = st2.i;
  noBuf && (buf = new u8(sl * 3));
  var cbuf = function(l4) {
    var bl = buf.length;
    if (l4 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l4));
      nbuf.set(buf), buf = nbuf;
    }
  }, final = st2.f || 0, pos = st2.p || 0, bt = st2.b || 0, lm = st2.l, dm = st2.d, lbt = st2.m, dbt = st2.n, tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      if (pos += 3, type)
        if (type == 1)
          lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4, tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          for (var ldt = new u8(tl), clt = new u8(19), i3 = 0; i3 < hcLen; ++i3)
            clt[clim[i3]] = bits(dat, pos + i3 * 3, 7);
          pos += hcLen * 3;
          for (var clb = max(clt), clbmsk = (1 << clb) - 1, clm = hMap(clt, clb, 1), i3 = 0; i3 < tl; ) {
            var r4 = clm[bits(dat, pos, clbmsk)];
            pos += r4 & 15;
            var s3 = r4 >> 4;
            if (s3 < 16)
              ldt[i3++] = s3;
            else {
              var c3 = 0, n3 = 0;
              for (s3 == 16 ? (n3 = 3 + bits(dat, pos, 3), pos += 2, c3 = ldt[i3 - 1]) : s3 == 17 ? (n3 = 3 + bits(dat, pos, 7), pos += 3) : s3 == 18 && (n3 = 11 + bits(dat, pos, 127), pos += 7); n3--; )
                ldt[i3++] = c3;
            }
          }
          var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
          lbt = max(lt), dbt = max(dt), lm = hMap(lt, lbt, 1), dm = hMap(dt, dbt, 1);
        } else
          err(1);
      else {
        var s3 = shft(pos) + 4, l3 = dat[s3 - 4] | dat[s3 - 3] << 8, t3 = s3 + l3;
        if (t3 > sl) {
          noSt && err(0);
          break;
        }
        resize && cbuf(bt + l3), buf.set(dat.subarray(s3, t3), bt), st2.b = bt += l3, st2.p = pos = t3 * 8, st2.f = final;
        continue;
      }
      if (pos > tbts) {
        noSt && err(0);
        break;
      }
    }
    resize && cbuf(bt + 131072);
    for (var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1, lpos = pos; ; lpos = pos) {
      var c3 = lm[bits16(dat, pos) & lms], sym = c3 >> 4;
      if (pos += c3 & 15, pos > tbts) {
        noSt && err(0);
        break;
      }
      if (c3 || err(2), sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i3 = sym - 257, b3 = fleb[i3];
          add = bits(dat, pos, (1 << b3) - 1) + fl[i3], pos += b3;
        }
        var d3 = dm[bits16(dat, pos) & dms], dsym = d3 >> 4;
        d3 || err(3), pos += d3 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b3 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b3) - 1, pos += b3;
        }
        if (pos > tbts) {
          noSt && err(0);
          break;
        }
        resize && cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          for (shift + bt < 0 && err(3); bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st2.l = lm, st2.p = lpos, st2.b = bt, st2.f = final, lm && (final = 1, st2.m = lbt, st2.d = dm, st2.n = dbt);
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et2 = /* @__PURE__ */ new u8(0);
var b22 = function(d3, b3) {
  return d3[b3] | d3[b3 + 1] << 8;
}, b4 = function(d3, b3) {
  return (d3[b3] | d3[b3 + 1] << 8 | d3[b3 + 2] << 16 | d3[b3 + 3] << 24) >>> 0;
}, b8 = function(d3, b3) {
  return b4(d3, b3) + b4(d3, b3 + 4) * 4294967296;
};
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var td = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), tds = 0;
try {
  td.decode(et2, { stream: !0 }), tds = 1;
} catch {
}
var dutf8 = function(d3) {
  for (var r4 = "", i3 = 0; ; ) {
    var c3 = d3[i3++], eb = (c3 > 127) + (c3 > 223) + (c3 > 239);
    if (i3 + eb > d3.length)
      return { s: r4, r: slc(d3, i3 - 1) };
    eb ? eb == 3 ? (c3 = ((c3 & 15) << 18 | (d3[i3++] & 63) << 12 | (d3[i3++] & 63) << 6 | d3[i3++] & 63) - 65536, r4 += String.fromCharCode(55296 | c3 >> 10, 56320 | c3 & 1023)) : eb & 1 ? r4 += String.fromCharCode((c3 & 31) << 6 | d3[i3++] & 63) : r4 += String.fromCharCode((c3 & 15) << 12 | (d3[i3++] & 63) << 6 | d3[i3++] & 63) : r4 += String.fromCharCode(c3);
  }
};
function strFromU8(dat, latin1) {
  if (latin1) {
    for (var r4 = "", i3 = 0; i3 < dat.length; i3 += 16384)
      r4 += String.fromCharCode.apply(null, dat.subarray(i3, i3 + 16384));
    return r4;
  } else {
    if (td)
      return td.decode(dat);
    var _a2 = dutf8(dat), s3 = _a2.s, r4 = _a2.r;
    return r4.length && err(8), s3;
  }
}
var slzh = function(d3, b3) {
  return b3 + 30 + b22(d3, b3 + 26) + b22(d3, b3 + 28);
}, zh = function(d3, b3, z2) {
  var fnl = b22(d3, b3 + 28), efl = b22(d3, b3 + 30), fn = strFromU8(d3.subarray(b3 + 46, b3 + 46 + fnl), !(b22(d3, b3 + 8) & 2048)), es = b3 + 46 + fnl, _a2 = z64hs(d3, es, efl, z2, b4(d3, b3 + 20), b4(d3, b3 + 24), b4(d3, b3 + 42)), sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b22(d3, b3 + 10), sc, su, fn, es + efl + b22(d3, b3 + 32), off];
}, z64hs = function(d3, b3, l3, z2, sc, su, off) {
  var nsc = sc == 4294967295, nsu = su == 4294967295, noff = off == 4294967295, e3 = b3 + l3, nf = nsc + nsu + noff;
  if (z2 && nf) {
    for (; b3 + 4 < e3; b3 += 4 + b22(d3, b3 + 2))
      if (b22(d3, b3) == 1)
        return [
          nsc ? b8(d3, b3 + 4 + 8 * nsu) : sc,
          nsu ? b8(d3, b3 + 4) : su,
          noff ? b8(d3, b3 + 4 + 8 * (nsu + nsc)) : off,
          1
        ];
    z2 < 2 && err(13);
  }
  return [sc, su, off, 0];
};
function unzipSync(data, opts) {
  for (var files = {}, e3 = data.length - 22; b4(data, e3) != 101010256; --e3)
    (!e3 || data.length - e3 > 65558) && err(13);
  var c3 = b22(data, e3 + 8);
  if (!c3)
    return {};
  var o3 = b4(data, e3 + 16), z2 = b4(data, e3 - 20) == 117853008;
  if (z2) {
    var ze = b4(data, e3 - 12);
    z2 = b4(data, ze) == 101075792, z2 && (c3 = b4(data, ze + 32), o3 = b4(data, ze + 48));
  }
  for (var fltr = opts && opts.filter, i3 = 0; i3 < c3; ++i3) {
    var _a2 = zh(data, o3, z2), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b3 = slzh(data, off);
    o3 = no, (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) && (c_2 ? c_2 == 8 ? files[fn] = inflateSync(data.subarray(b3, b3 + sc), { out: new u8(su) }) : err(14, "unknown compression type " + c_2) : files[fn] = slc(data, b3, b3 + sc));
  }
  return files;
}

// src/brushes/plist.js
var UID = class {
  constructor(v3) {
    this.v = v3;
  }
};
function parsePlist(bytes) {
  return new TextDecoder().decode(bytes.subarray(0, 8)) === "bplist00" ? parseBinary(bytes) : parseXml(new TextDecoder().decode(bytes));
}
function parseBinary(bytes) {
  let dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), t3 = bytes.length - 32, offSize = dv.getUint8(t3 + 6), refSize = dv.getUint8(t3 + 7), numObjects = Number(dv.getBigUint64(t3 + 8)), top = Number(dv.getBigUint64(t3 + 16)), tableOff = Number(dv.getBigUint64(t3 + 24)), readUInt = (pos, size) => {
    let v3 = 0;
    for (let i3 = 0; i3 < size; i3++) v3 = v3 * 256 + bytes[pos + i3];
    return v3;
  }, offsets = new Array(numObjects);
  for (let i3 = 0; i3 < numObjects; i3++) offsets[i3] = readUInt(tableOff + i3 * offSize, offSize);
  let cache2 = /* @__PURE__ */ new Map(), readLen = (pos, low) => {
    if (low !== 15) return [low, pos + 1];
    let size = 1 << (bytes[pos + 1] & 15);
    return [readUInt(pos + 2, size), pos + 2 + size];
  }, read = (idx) => {
    if (cache2.has(idx)) return cache2.get(idx);
    let pos = offsets[idx], marker = bytes[pos], type = marker >> 4, low = marker & 15, out;
    switch (type) {
      case 0:
        out = low === 9 ? !0 : low === 8 ? !1 : null;
        break;
      case 1: {
        let size = 1 << low;
        size === 8 ? out = Number(dv.getBigInt64(pos + 1)) : out = readUInt(pos + 1, size);
        break;
      }
      case 2:
        out = low === 2 ? dv.getFloat32(pos + 1) : dv.getFloat64(pos + 1);
        break;
      case 3:
        out = new Date((978307200 + dv.getFloat64(pos + 1)) * 1e3);
        break;
      case 4: {
        let [len, start] = readLen(pos, low);
        out = bytes.slice(start, start + len);
        break;
      }
      case 5: {
        let [len, start] = readLen(pos, low);
        out = new TextDecoder("ascii").decode(bytes.subarray(start, start + len));
        break;
      }
      case 6: {
        let [len, start] = readLen(pos, low), s3 = "";
        for (let i3 = 0; i3 < len; i3++) s3 += String.fromCharCode(dv.getUint16(start + i3 * 2));
        out = s3;
        break;
      }
      case 8:
        out = new UID(readUInt(pos + 1, low + 1));
        break;
      case 10:
      case 12: {
        let [len, start] = readLen(pos, low);
        out = [], cache2.set(idx, out);
        for (let i3 = 0; i3 < len; i3++) out.push(read(readUInt(start + i3 * refSize, refSize)));
        break;
      }
      case 13: {
        let [len, start] = readLen(pos, low);
        out = {}, cache2.set(idx, out);
        for (let i3 = 0; i3 < len; i3++) {
          let k3 = read(readUInt(start + i3 * refSize, refSize));
          out[k3] = read(readUInt(start + (len + i3) * refSize, refSize));
        }
        break;
      }
      default:
        out = null;
    }
    return cache2.set(idx, out), out;
  };
  return read(top);
}
function parseXml(text) {
  let doc = new DOMParser().parseFromString(text, "application/xml"), conv = (el) => {
    switch (el.tagName) {
      case "dict": {
        let o3 = {}, kids = Array.from(el.children);
        for (let i3 = 0; i3 < kids.length; i3 += 2) o3[kids[i3].textContent] = conv(kids[i3 + 1]);
        return o3.CF$UID !== void 0 && Object.keys(o3).length === 1 ? new UID(o3.CF$UID) : o3;
      }
      case "array":
        return Array.from(el.children).map(conv);
      case "string":
        return el.textContent;
      case "integer":
        return parseInt(el.textContent, 10);
      case "real":
        return parseFloat(el.textContent);
      case "true":
        return !0;
      case "false":
        return !1;
      case "data":
        return Uint8Array.from(atob(el.textContent.replace(/\s/g, "")), (c3) => c3.charCodeAt(0));
      default:
        return el.textContent;
    }
  }, root = doc.querySelector("plist > *");
  return root ? conv(root) : null;
}
function unarchive(plist) {
  if (!plist || !Array.isArray(plist.$objects)) return plist;
  let objs = plist.$objects, memo = /* @__PURE__ */ new Map(), resolve = (v3) => {
    if (v3 instanceof UID) {
      if (memo.has(v3.v)) return memo.get(v3.v);
      let raw = objs[v3.v];
      if (raw === "$null") return null;
      if (raw && typeof raw == "object" && !Array.isArray(raw) && !(raw instanceof Uint8Array)) {
        let o3 = {};
        if (memo.set(v3.v, o3), Array.isArray(raw["NS.objects"]) && !raw["NS.keys"]) {
          let arr = raw["NS.objects"].map(resolve);
          return memo.set(v3.v, arr), arr;
        }
        if (Array.isArray(raw["NS.keys"]))
          return raw["NS.keys"].forEach((k3, i3) => o3[resolve(k3)] = resolve(raw["NS.objects"][i3])), o3;
        if (raw["NS.string"] !== void 0) return raw["NS.string"];
        for (let k3 in raw) k3 !== "$class" && (o3[k3] = resolve(raw[k3]));
        return o3;
      }
      return memo.set(v3.v, raw), raw;
    }
    return Array.isArray(v3) ? v3.map(resolve) : v3;
  }, top = plist.$top || {};
  return resolve(top.root !== void 0 ? top.root : Object.values(top)[0]);
}

// src/brushes/procreate.js
var BLEND = { 1: "multiply", 2: "screen", 11: "overlay", 4: "lighten", 19: "darken", 17: "soft-light", 12: "hard-light" }, clamp = (v3, a3, b3) => Math.max(a3, Math.min(b3, v3));
function hash(bytes) {
  let h3 = 2166136261;
  for (let i3 = 0; i3 < bytes.length; i3 += Math.max(1, Math.floor(bytes.length / 4096))) h3 = Math.imul(h3 ^ bytes[i3], 16777619);
  return (h3 >>> 0).toString(36);
}
async function toMask(bytes, maxSide, isShape) {
  let blob = new Blob([bytes], { type: "image/png" }), url = URL.createObjectURL(blob);
  try {
    let img = await new Promise((res, rej) => {
      let i3 = new Image();
      i3.onload = () => res(i3), i3.onerror = rej, i3.src = url;
    }), sc = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight)), w3 = Math.max(1, Math.round(img.naturalWidth * sc)), h3 = Math.max(1, Math.round(img.naturalHeight * sc)), c3 = document.createElement("canvas");
    c3.width = w3, c3.height = h3;
    let ctx = c3.getContext("2d");
    ctx.drawImage(img, 0, 0, w3, h3);
    let d3 = ctx.getImageData(0, 0, w3, h3), px = d3.data, lum = (p3) => (0.299 * px[p3] + 0.587 * px[p3 + 1] + 0.114 * px[p3 + 2]) / 255, invert = !1;
    if (isShape) {
      let sum = 0, n3 = 0;
      for (let x3 = 0; x3 < w3; x3++)
        sum += lum(x3 * 4), sum += lum(((h3 - 1) * w3 + x3) * 4), n3 += 2;
      for (let y3 = 0; y3 < h3; y3++)
        sum += lum(y3 * w3 * 4), sum += lum((y3 * w3 + w3 - 1) * 4), n3 += 2;
      invert = sum / n3 > 0.6;
    }
    for (let p3 = 0; p3 < px.length; p3 += 4) {
      let v3 = lum(p3);
      invert && (v3 = 1 - v3), px[p3 + 3] = Math.round(v3 * px[p3 + 3]), px[p3] = px[p3 + 1] = px[p3 + 2] = 255;
    }
    return ctx.putImageData(d3, 0, 0), c3.toDataURL("image/png");
  } finally {
    URL.revokeObjectURL(url);
  }
}
async function decodeBrush(files, dir, fallbackName) {
  let find = (name2) => {
    let want = ((dir ? dir + "/" : "") + name2).toLowerCase(), key2 = Object.keys(files).find((k3) => k3.toLowerCase() === want);
    return key2 ? files[key2] : null;
  }, archive = find("Brush.archive");
  if (!archive) return null;
  let root = unarchive(parsePlist(archive)) || {}, g3 = (k3, d3) => typeof root[k3] == "number" || typeof root[k3] == "boolean" ? root[k3] : d3, shapePng = find("Shape.png"), grainPng = find("Grain.png"), shape = shapePng ? { type: "image", src: await toMask(shapePng, 256, !0) } : { type: "round", hardness: 0.85 }, grain = null;
  grainPng ? grain = { type: "image", src: await toMask(grainPng, 512, !1) } : typeof root.bundledGrainPath == "string" && root.bundledGrainPath && !/blank|none/i.test(root.bundledGrainPath) && (grain = { type: "paper" });
  let maxSize = g3("maxSize", 1), minSize = g3("minSize", 0), pct = (raw, a3, e3) => a3 * Math.pow(Math.max(0, raw), e3) / 100, name = typeof root.name == "string" && root.name.trim() ? root.name.trim() : fallbackName, def = {
    id: "pc-" + hash(archive) + (shapePng ? hash(shapePng) : ""),
    name,
    group: "Imported",
    icon: "brush",
    kind: "stamp",
    source: "procreate",
    shape,
    roundness: clamp(g3("shapeRoundness", 1), 0.05, 1),
    angle: g3("shapeAngle", 0) * 180 / Math.PI,
    rotationFollow: clamp(g3("shapeRotation", 0), -1, 1),
    rotationJitter: clamp(g3("shapeScatter", 0), 0, 1),
    count: Math.max(1, Math.round(g3("shapeCount", 0) * 16)),
    countJitter: clamp(g3("shapeCountJitter", 0), 0, 1),
    flipX: !!g3("shapeFlipXJitter", !1),
    flipY: !!g3("shapeFlipYJitter", !1),
    grain,
    grainScale: clamp(0.25 * Math.sqrt(g3("textureScale", 4)) * 2, 0.1, 8),
    grainDepth: grain ? clamp(g3("grainDepth", 1), 0, 1) : 0,
    spacing: clamp(g3("plotSpacing", 0.1), 0.02, 3),
    jitterLateral: clamp(pct(g3("plotJitter", 0), 60.6919, 0.4545), 0, 2),
    jitterLinear: clamp(pct(g3("plotJitterLongitudinal", 0), 60.6919, 0.4545), 0, 2),
    streamline: clamp(g3("plotSmoothing", 0), 0, 0.9),
    sizePressure: clamp(g3("dynamicsPressureSize", 0), -1, 1),
    flowPressure: clamp(g3("dynamicsPressureOpacity", 0), -1, 1),
    opacityPressure: clamp(g3("dynamicsPressureOpacityTransfer", 0), 0, 1),
    sizeJitter: clamp(g3("dynamicsJitterSize", 0), 0, 1),
    opacityJitter: clamp(g3("dynamicsJitterOpacity", 0), 0, 1),
    flow: clamp(g3("dynamicsGlazedFlow", 1), 0.01, 1) * clamp(g3("maxOpacity", 1), 0.05, 1),
    minSizeRatio: maxSize > 0 ? clamp(minSize / maxSize, 0, 1) : 0,
    taperStart: clamp(g3("pencilTaperStartLength", 0), 0, 1),
    taperEnd: clamp(g3("pencilTaperEndLength", 0), 0, 1),
    taperSize: clamp(g3("pencilTaperSize", 0.8), 0, 1),
    taperOpacity: clamp(g3("pencilTaperOpacity", 0), 0, 1),
    blend: BLEND[g3("blendMode", 0)] || "normal",
    range: [0.5, 300]
  }, s3 = clamp(maxSize * 12, 2, 60);
  return def.presets = [s3 * 0.35, s3 * 0.6, s3, s3 * 1.8].map((v3) => Math.round(v3 * 10) / 10), def;
}
async function importProcreate(fileName, bytes) {
  let files;
  try {
    files = unzipSync(bytes);
  } catch {
    throw new Error(`${fileName} isn't a Procreate brush file (couldn't unzip it).`);
  }
  let base = fileName.replace(/\.(brushset|brush|zip)$/i, ""), dirs = /* @__PURE__ */ new Set();
  for (let k3 of Object.keys(files))
    /(^|\/)brush\.archive$/i.test(k3) && dirs.add(k3.includes("/") ? k3.slice(0, k3.lastIndexOf("/")) : "");
  if (!dirs.size) throw new Error(`${fileName} doesn't contain any Procreate brushes.`);
  let setName = base, setPlistKey = Object.keys(files).find((k3) => /brushset\.plist$/i.test(k3)), order = null;
  if (setPlistKey)
    try {
      let sp = unarchive(parsePlist(files[setPlistKey]));
      sp && typeof sp.name == "string" && (setName = sp.name), sp && Array.isArray(sp.brushes) && (order = sp.brushes.map(String));
    } catch {
    }
  let list = [...dirs];
  order && list.sort((a3, b3) => (order.indexOf(a3) + 1 || 1e9) - (order.indexOf(b3) + 1 || 1e9));
  let brushes = [], i3 = 0;
  for (let dir of list) {
    i3++;
    try {
      let def = await decodeBrush(files, dir, list.length > 1 ? `${setName} ${i3}` : setName);
      def && (def.set = setName, brushes.push(def));
    } catch (e3) {
      console.warn("[Palette] Skipped a brush in", fileName, e3);
    }
  }
  if (!brushes.length) throw new Error(`None of the brushes in ${fileName} could be read.`);
  return { setName, brushes };
}

// src/icons.js
var import_obsidian5 = require("obsidian"), S3 = (body) => `<g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">${body}</g>`, dot = (x3, y3, r4 = 3.5) => `<circle cx="${x3}" cy="${y3}" r="${r4}" fill="currentColor" stroke="none"/>`, ICONS = {
  // brushes
  "ink-fineliner": S3('<path d="M36 62L78 20L84 26L42 68Z"/><path d="M39 65L14 90"/><path d="M70 28L64 16"/>'),
  "ink-pen": S3('<path d="M52 44L76 20L84 28L60 52"/><path d="M52 44L30 52L18 86L50 72L60 52Z"/><path d="M18 86L36 68"/>') + dot(42, 60, 4),
  "ink-brushpen": S3('<path d="M40 60L76 24L84 32L48 68"/><path d="M40 60C28 62 20 72 14 88C30 84 42 78 48 68Z"/>'),
  "ink-marker": S3('<path d="M28 50L62 16L84 38L50 72Z"/><path d="M28 50L14 74L26 86L50 72"/><path d="M42 36L64 58"/>'),
  "ink-highlighter": S3('<path d="M36 52L66 22L82 38L52 68Z"/><path d="M36 52L28 70L34 76L52 68"/><path d="M28 70L18 80H34"/><path d="M12 90H88"/>'),
  "ink-pencil": S3('<path d="M32 60L72 20L82 30L42 70Z"/><path d="M32 60L16 86L42 70"/><path d="M64 28L74 38"/>') + dot(19, 81, 4),
  "ink-charcoal": S3('<path d="M26 66L62 30Q68 24 74 30L76 32Q82 38 76 44L40 80Q34 86 28 80L24 76Q18 70 26 66Z"/>') + dot(14, 58) + dot(20, 50, 2.5) + dot(10, 70, 2.5),
  "ink-crayon": S3('<path d="M34 58L66 26Q72 20 78 26L80 28Q86 34 80 40L48 72Z"/><path d="M34 58L22 76Q20 82 26 82L48 72"/><path d="M46 46L50 54L56 50L60 58"/>'),
  "ink-gouache": S3('<path d="M62 38L86 14"/><path d="M46 46L56 36L66 46L56 56Z"/><path d="M46 46L20 60Q14 74 26 82L56 56"/>'),
  "ink-watercolor": S3('<path d="M60 36L84 12"/><path d="M50 40L58 32L68 42L60 50Z"/><path d="M50 40C36 46 24 60 16 80C34 74 50 64 60 50"/><path d="M76 60C82 68 86 72 86 78A10 10 0 0 1 66 78C66 72 70 68 76 60Z"/>'),
  "ink-calligraphy": S3('<path d="M52 50L78 24L88 34L62 60Z"/><path d="M52 50L44 64L56 60L62 60"/><path d="M10 78C26 64 32 90 48 76"/>'),
  "ink-airbrush": S3('<path d="M26 40H70A8 8 0 0 1 70 56H26Z"/><path d="M14 48H26"/><path d="M46 40V26H58V40"/><path d="M64 56L68 76"/>') + dot(6, 38, 2.5) + dot(4, 50, 2.5) + dot(7, 60, 2.5),
  "ink-spray": S3('<rect x="36" y="38" width="30" height="50" rx="6"/><path d="M42 38V26H60V38"/><path d="M60 30H66"/>') + dot(22, 18, 3) + dot(14, 28, 3) + dot(26, 32, 3) + dot(12, 14, 3),
  "ink-softround": S3('<circle cx="50" cy="50" r="12"/>') + '<circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="3 7" stroke-linecap="round"/>',
  "ink-hardround": S3('<circle cx="50" cy="50" r="30"/>') + dot(50, 50, 16),
  // effect tools
  "ink-burn": S3('<path d="M50 88C32 88 22 76 22 62C22 46 36 38 38 22C48 30 52 40 50 50C56 46 58 40 58 34C70 44 78 54 78 64C78 78 66 88 50 88Z"/>') + dot(50, 70, 6),
  "ink-dodge": S3('<circle cx="50" cy="50" r="16"/><path d="M50 14V24M50 76V86M14 50H24M76 50H86M25 25L32 32M68 68L75 75M25 75L32 68M68 32L75 25"/>'),
  "ink-oven": S3('<rect x="14" y="18" width="72" height="66" rx="8"/><path d="M14 36H86"/><rect x="26" y="46" width="48" height="28" rx="4"/>') + dot(28, 27, 4) + dot(42, 27, 4) + dot(56, 27, 4),
  "ink-unbake": S3('<path d="M22 58C13 56 10 49 12 42C15 31 30 22 50 22C70 22 85 31 88 42C90 49 87 56 78 58V78C78 82 75 84 71 84H29C25 84 22 82 22 78Z"/><path d="M36 54L64 54M36 54L46 44M36 54L46 64"/>'),
  "ink-smudge": S3('<path d="M58 14C68 14 74 20 74 30V58C74 68 66 74 56 74C46 74 40 68 40 58V30C40 20 48 14 58 14Z"/><path d="M48 58C50 66 62 66 64 58"/><path d="M10 86C22 80 32 78 40 78"/><path d="M16 94C26 90 34 88 42 88"/>'),
  "ink-blend": S3('<circle cx="38" cy="50" r="24"/><circle cx="62" cy="50" r="24"/><path d="M50 32V68"/>'),
  "ink-blur": S3('<circle cx="50" cy="50" r="10"/><circle cx="50" cy="50" r="24" stroke-dasharray="8 8"/><circle cx="50" cy="50" r="38" stroke-dasharray="4 10"/>'),
  // erasers
  "ink-eraser-element": S3('<path d="M22 64L56 30L80 54L54 80H34Z"/><path d="M38 48L62 72"/><path d="M60 88H88"/>'),
  "ink-eraser-fine": S3('<path d="M22 64L56 30L80 54L54 80H34Z"/><path d="M38 48L62 72"/>') + dot(70, 86) + dot(82, 80) + dot(86, 90, 2.5),
  "ink-pixels": `<g fill="currentColor"><rect x="34" y="12" width="18" height="18" rx="2"/><rect x="56" y="12" width="18" height="18" rx="2"/><rect x="12" y="34" width="18" height="18" rx="2"/><rect x="34" y="34" width="18" height="18" rx="2"/><rect x="56" y="34" width="18" height="18" rx="2"/><rect x="78" y="34" width="18" height="18" rx="2" opacity='0.5'/><rect x="12" y="56" width="18" height="18" rx="2" opacity='0.5'/><rect x="34" y="56" width="18" height="18" rx="2"/><rect x="56" y="56" width="18" height="18" rx="2"/><rect x="78" y="56" width="18" height="18" rx="2"/><rect x="34" y="78" width="18" height="18" rx="2"/><rect x="56" y="78" width="18" height="18" rx="2"/></g>`,
  "ink-hue": '<circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="9" stroke-dasharray="30 14"/><circle cx="50" cy="50" r="10" fill="currentColor"/>',
  "ink-second": '<circle cx="38" cy="50" r="22" fill="none" stroke="currentColor" stroke-width="8"/><circle cx="64" cy="50" r="22" fill="currentColor" opacity="0.55"/>',
  "ink-gradient": '<defs><linearGradient id="ink-grad-ic" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="currentColor" stop-opacity="1"/><stop offset="1" stop-color="currentColor" stop-opacity="0.15"/></linearGradient></defs><rect x="18" y="26" width="64" height="48" rx="8" fill="url(#ink-grad-ic)"/>',
  "ink-neighbors": '<g fill="currentColor"><circle cx="50" cy="50" r="11"/><circle cx="24" cy="34" r="7" opacity="0.6"/><circle cx="76" cy="34" r="7" opacity="0.6"/><circle cx="24" cy="66" r="7" opacity="0.6"/><circle cx="76" cy="66" r="7" opacity="0.6"/></g>',
  "ink-sliders": '<g stroke="currentColor" stroke-width="8" stroke-linecap="round" fill="none"><path d="M22 30h56M22 50h56M22 70h56"/></g><g fill="currentColor"><circle cx="38" cy="30" r="9"/><circle cx="64" cy="50" r="9"/><circle cx="32" cy="70" r="9"/></g>',
  // dock
  "ink-grip": `<g fill="currentColor">${[30, 50, 70].map((y3) => `<circle cx="38" cy="${y3}" r="6"/><circle cx="62" cy="${y3}" r="6"/>`).join("")}</g>`
};
function registerIcons() {
  for (let [id, svg] of Object.entries(ICONS)) (0, import_obsidian5.addIcon)(id, svg);
}

// src/main.js
var DEFAULT_SETTINGS = {
  pencilOnly: !0,
  pressure: !0,
  layer: "above",
  smoothing: 50,
  eraserSize: 20,
  sharedUndo: !0,
  hideBakedBorders: !0,
  quickShape: !1,
  // off unless you want it: a held pen turning a sketch into an ellipse surprises more than it helps
  quickShapeDelay: 500,
  customFonts: "",
  fontFolder: "Palette fonts",
  freezeTips: !0
}, defaultState = () => ({
  tool: "brush",
  slot: 0,
  shape: "rect",
  visible: !0,
  slots: [
    { brush: "ink", color: "auto", size: 4, opacity: 100 },
    { brush: "pencil", color: "auto", size: 3, opacity: 100 },
    { brush: "marker", color: "#1971c2", size: 10, opacity: 100 },
    { brush: "highlighter", color: "#fab005", size: 20, opacity: 100 },
    { brush: "watercolor", color: "#1971c2", size: 30, opacity: 100 }
  ],
  shapeStyle: { color: "auto", size: 2, opacity: 100, fill: "none", rough: !0, dash: !1 },
  eraserMode: "element",
  eraserStyle: { size: 16, opacity: 100 },
  fx: "smudge",
  fxStyle: { size: 30, opacity: 70 },
  fillStyle: { color: "#1971c2", size: 18, opacity: 100, pattern: "solid", brush: "fineliner" },
  fillActive: !1,
  pixelStyle: { color: "#1e1e1e", size: 1, opacity: 100 },
  pixelMode: "paint",
  pixelNew: { cols: 32, rows: 32 },
  pixelGrid: !0,
  pixelFilled: !1,
  pixelStrength: 50,
  pixelBrush: "square",
  pixelTexture: "grit",
  textureFill: !1,
  textureColor: null,
  pixelBuffer: 16,
  traceDetail: 3,
  placeLayer: "canvas",
  alterStyle: { color: "#e8c33a", size: 24, opacity: 100, brush: "softround" },
  alter: { mode: "aggregate", strength: 40, addNew: !1, prism: { amount: 0, mode: "auto", secondary: "#00b8a9" }, texture: "grit", textureColor: null, softenRange: 50 },
  prism: { amount: 0, mode: "auto", secondary: "#00b8a9" },
  connectorStyle: "curve",
  connectorArrow: !0,
  dock: { edge: "left", t: 0.5, x: 0.1, y: 0.3, orient: "v" },
  toolsOpen: !1,
  minimized: !1,
  slotsPinned: !1,
  slotsPos: null,
  textStyle: { color: "auto", size: 24, opacity: 100, font: "caveat" },
  recents: []
});
function migrateState(saved) {
  let st2 = { ...defaultState(), ...saved || {} }, old = st2.tool;
  old === "pen" ? (st2.tool = "brush", st2.slot = 0) : old === "highlighter" ? (st2.tool = "brush", st2.slot = 3) : ["line", "arrow", "rect", "ellipse"].includes(old) && (st2.shape = old, st2.tool = "shape"), (!Array.isArray(st2.slots) || st2.slots.length !== 5) && (st2.slots = defaultState().slots);
  let d3 = defaultState();
  for (let k3 of ["dock", "eraserStyle", "fxStyle", "fillStyle", "pixelStyle", "pixelNew", "prism", "alterStyle", "alter", "shapeStyle", "textStyle"]) st2[k3] = { ...d3[k3], ...st2[k3] || {} };
  return ["smudge", "blend", "blur"].includes(st2.fx) || (st2.fx = "smudge"), st2.dock.orient !== "h" && st2.dock.orient !== "v" && (st2.dock.orient = st2.dock.edge === "top" || st2.dock.edge === "bottom" ? "h" : "v"), st2;
}
function brushFileSafe(id) {
  return id.replace(/[^a-z0-9_-]/gi, "_");
}
var CanvasInkPlugin = class extends import_obsidian6.Plugin {
  async onload() {
    try {
      await this.onloadInner();
    } catch (e3) {
      let text = `${e3 && e3.stack ? e3.stack : e3}`;
      console.error("[Palette] failed to load", e3);
      try {
        new import_obsidian6.Notice(`Palette failed to load: ${e3 && e3.message ? e3.message : e3}. Details in "Palette load error.md".`, 15e3);
      } catch {
      }
      try {
        await this.app.vault.adapter.write("Palette load error.md", `# Palette ${this.manifest.version} failed to load

Platform: ${navigator.userAgent}

\`\`\`
${text}
\`\`\`
`);
      } catch {
      }
      throw e3;
    }
  }
  async onloadInner() {
    let data = await this.loadData() || {};
    this.settings = { ...DEFAULT_SETTINGS, ...data.settings || {} }, this.settings.quickShapeOptIn || (this.settings.quickShape = !1, this.settings.quickShapeOptIn = !0), this.state = migrateState(data.state), this.saveState = (0, import_obsidian6.debounce)(() => this.persist(), 500, !0), this.previews = /* @__PURE__ */ new Map(), this.register(installFonts()), this.app.workspace.onLayoutReady(() => loadInstalledFonts(this.app, this.settings.fontFolder || "Palette fonts")), (0, import_obsidian6.addIcon)("ink-bread", BREAD_ICON), registerIcons(), await this.loadBrushes(), this.layers = /* @__PURE__ */ new Map(), this.docs = /* @__PURE__ */ new Map(), this.addSettingTab(new InkSettingTab(this));
    let sync = () => this.syncViews();
    this.app.workspace.onLayoutReady(sync), this.registerEvent(this.app.workspace.on("layout-change", sync)), this.registerEvent(this.app.workspace.on("active-leaf-change", sync)), this.registerEvent(this.app.workspace.on("file-open", sync)), this.registerEvent(this.app.workspace.on("css-change", () => {
      this.previews.clear(), this.layers.forEach((L3) => L3.invalidateRender());
    })), this.registerEvent(this.app.vault.on("rename", (f3, oldPath) => this.onRename(f3, oldPath))), this.registerEvent(this.app.vault.on("delete", (f3) => this.onDelete(f3))), this.registerDomEvent(
      document,
      "keydown",
      (e3) => {
        let L3 = this.activeLayer();
        if (!L3 || !L3.active) return;
        let t3 = e3.target;
        t3 instanceof HTMLElement && t3.closest('input, textarea, [contenteditable="true"]') || L3.onKey(e3);
      },
      !0
    );
    let withLayer = (fn) => (checking) => {
      let L3 = this.activeLayer();
      return L3 ? (checking || fn(L3), !0) : !1;
    };
    this.addCommand({ id: "toggle-draw-mode", name: "Toggle draw mode", checkCallback: withLayer((L3) => L3.setActive(!L3.active)) }), this.addCommand({ id: "undo", name: "Undo last drawing change", checkCallback: withLayer((L3) => L3.undo()) }), this.addCommand({ id: "render-report", name: "Rendering report (what is and isn't drawing)", checkCallback: withLayer((L3) => new RenderReport(this.app, L3).open()) }), this.addCommand({ id: "redo", name: "Redo drawing change", checkCallback: withLayer((L3) => L3.redo()) }), this.addCommand({
      id: "bake-selection",
      name: "Bake selected ink into canvas",
      checkCallback: (checking) => {
        let L3 = this.activeLayer();
        return !L3 || !L3.selection.size ? !1 : (checking || L3.bakeAction(), !0);
      }
    }), this.addCommand({
      id: "bake-all",
      name: "Bake all ink into canvas",
      checkCallback: (checking) => {
        let L3 = this.activeLayer();
        return !L3 || !L3.items.length ? !1 : (checking || (L3.selection.clear(), L3.bakeAction()), !0);
      }
    }), this.addCommand({
      id: "unbake",
      name: "Unbake selected drawing into editable ink",
      checkCallback: (checking) => {
        let L3 = this.activeLayer(), sel = L3 && L3.view.canvas && L3.view.canvas.selection ? [...L3.view.canvas.selection] : [];
        return !L3 || !svgNodes(sel).length ? !1 : (checking || unbakeNodes(L3, sel), !0);
      }
    });
    let addUnbake = (menu, nodes, canvas) => {
      let svgs = svgNodes(nodes);
      if (!svgs.length) return;
      let L3 = [...this.layers.values()].find((x3) => x3.view.canvas === canvas) || this.activeLayer();
      L3 && menu.addItem((i3) => i3.setTitle("Unbake into editable ink").setIcon("ink-bread").onClick(() => unbakeNodes(L3, svgs)));
    };
    this.registerEvent(this.app.workspace.on("canvas:node-menu", (menu, node) => addUnbake(menu, [node], node && node.canvas))), this.registerEvent(this.app.workspace.on("canvas:selection-menu", (menu, canvas) => addUnbake(menu, canvas && canvas.selection ? [...canvas.selection] : [], canvas))), this.addCommand({ id: "toggle-finger-mode", name: "Switch between pen and finger drawing", callback: () => this.toggleFingerMode() }), this.addCommand({ id: "import-brushes", name: "Import Procreate brushes from vault", callback: () => this.importFromVault() }), this.addCommand({
      id: "toggle-visibility",
      name: "Show or hide drawings",
      callback: () => {
        this.state.visible = !this.state.visible, this.saveState(), this.layers.forEach((L3) => L3.applyVisibility());
      }
    }), this.addCommand({
      id: "clear",
      name: "Erase all drawings on this canvas",
      checkCallback: withLayer((L3) => {
        !L3.doc || !L3.doc.items.length || new ConfirmModal(
          this.app,
          "Erase all drawings on this canvas?",
          "You can undo this while the canvas stays open.",
          "Erase all",
          () => L3.doc.update(() => [])
        ).open();
      })
    });
  }
  onunload() {
    this.layers.forEach((L3) => L3.destroy()), this.layers.clear(), this.docs.forEach((d3) => d3.flush());
  }
  async persist() {
    await this.saveData({ settings: this.settings, state: this.state });
  }
  /** Is this SVG a Palette drawing? Cached by path and modification time. */
  isBakedFile(file) {
    this.bakedCache = this.bakedCache || /* @__PURE__ */ new Map();
    let key2 = `${file.path}|${file.stat ? file.stat.mtime : ""}`;
    return this.bakedCache.has(key2) || this.bakedCache.set(key2, this.app.vault.cachedRead(file).then((t3) => t3.includes("canvas-ink-data") && !!parseBaked(t3)).catch(() => !1)), this.bakedCache.get(key2);
  }
  confirm(title, body, cta, fn) {
    new ConfirmModal(this.app, title, body, cta, fn).open();
  }
  toggleFingerMode() {
    this.settings.pencilOnly = !this.settings.pencilOnly, this.saveState(), this.layers.forEach((L3) => L3.refreshModeIcon()), new import_obsidian6.Notice(this.settings.pencilOnly ? "Pen mode: the pen draws, fingers pan and zoom." : "Finger mode: one finger draws, two fingers pan and zoom.");
  }
  addRecent(color) {
    let r4 = this.state.recents.filter((c3) => c3.toLowerCase() !== color.toLowerCase());
    r4.unshift(color), this.state.recents = r4.slice(0, 12), this.saveState();
  }
  // ---------- brushes ----------
  get brushDir() {
    return `${this.manifest.dir}/brushes`;
  }
  async loadBrushes() {
    let a3 = this.app.vault.adapter;
    try {
      if (!await a3.exists(this.brushDir)) return;
      let { files } = await a3.list(this.brushDir);
      for (let f3 of files)
        if (f3.endsWith(".json"))
          try {
            registerBrush(JSON.parse(await a3.read(f3)));
          } catch (e3) {
            console.warn("[Palette] Skipped unreadable brush", f3, e3);
          }
    } catch (e3) {
      console.error("[Palette] Could not load brushes", e3);
    }
  }
  async importBrushBytes(name, bytes) {
    try {
      let { setName, brushes } = await importProcreate(name, bytes), a3 = this.app.vault.adapter;
      await a3.exists(this.brushDir) || await a3.mkdir(this.brushDir);
      for (let def of brushes)
        registerBrush(def), await a3.write(`${this.brushDir}/${brushFileSafe(def.id)}.json`, JSON.stringify(def));
      return new import_obsidian6.Notice(`Imported ${brushes.length} brush${brushes.length === 1 ? "" : "es"} from ${setName}. Tap a brush slot twice to use ${brushes.length === 1 ? "it" : "them"}.`), brushes;
    } catch (e3) {
      return console.error("[Palette] Import failed", e3), new import_obsidian6.Notice(`Palette: ${e3.message || "couldn't import that file."}`), [];
    }
  }
  importFromVault() {
    let files = this.app.vault.getFiles().filter((f3) => /^(brush|brushset)$/i.test(f3.extension));
    if (!files.length) {
      new import_obsidian6.Notice("No .brush or .brushset files found in this vault. Copy them into any folder in the vault first.");
      return;
    }
    new BrushFileModal(this.app, files, async (f3) => {
      await this.importBrushBytes(f3.name, new Uint8Array(await this.app.vault.readBinary(f3)));
    }).open();
  }
  async removeBrush(id) {
    let def = getBrush(id);
    registerBrush({ ...def, hidden: !0 });
    let p3 = `${this.brushDir}/${brushFileSafe(id)}.json`;
    try {
      await this.app.vault.adapter.exists(p3) && await this.app.vault.adapter.remove(p3);
    } catch (e3) {
      console.error("[Palette] Could not remove brush file", e3);
    }
    for (let s3 of this.state.slots) s3.brush === id && (s3.brush = "pencil");
    this.saveState(), this.layers.forEach((L3) => L3.updateUI());
  }
  /** A small sample stroke for the brush library. */
  brushPreview(brush, color) {
    let key2 = brush.id + "|" + color;
    if (this.previews.has(key2)) return this.previews.get(key2);
    let job = (async () => {
      var _a2;
      await brushReady(brush);
      let W2 = 180, H2 = 40, k3 = 2, pts = [];
      for (let i3 = 0; i3 <= 40; i3++) {
        let t3 = i3 / 40;
        pts.push([12 + t3 * (W2 - 24), H2 / 2 + Math.sin(t3 * Math.PI * 2) * 8, 0.25 + 0.75 * Math.sin(t3 * Math.PI)]);
      }
      let presets = brush.presets || [4, 8], size = Math.max(2, Math.min(16, presets[1])), item = { type: "stroke", brush: brush.id, points: pts, size, pressure: !0, seed: 7, opacity: 100 }, c3 = document.createElement("canvas");
      c3.width = W2 * k3, c3.height = H2 * k3;
      let ctx = c3.getContext("2d");
      if (ctx.globalAlpha = (_a2 = brush.opacityMult) != null ? _a2 : 1, brush.kind === "stamp") {
        let r4 = rasterizeStroke(item, brush, color, k3);
        r4 && ctx.drawImage(r4.canvas, r4.x * k3, r4.y * k3, r4.w * k3, r4.h * k3);
      } else
        ctx.scale(k3, k3), ctx.fillStyle = color, ctx.fill(new Path2D(strokeD(item, { streamline: 0.3 })));
      return c3.toDataURL("image/png");
    })().catch(() => null);
    return this.previews.set(key2, job), job;
  }
  activeLayer() {
    let v3 = this.app.workspace.getActiveViewOfType(import_obsidian6.View);
    return v3 && this.layers.get(v3) || null;
  }
  syncViews() {
    let live = /* @__PURE__ */ new Set();
    for (let leaf of this.app.workspace.getLeavesOfType("canvas")) {
      let v3 = leaf.view;
      if (!v3 || v3.getViewType() !== "canvas" || !v3.contentEl) continue;
      live.add(v3);
      let L3 = this.layers.get(v3);
      if (!L3) {
        if (L3 = new InkLayer(this, v3), !L3.mount()) continue;
        this.layers.set(v3, L3);
      }
      L3.sync();
    }
    for (let [v3, L3] of this.layers)
      live.has(v3) || (L3.destroy(), this.layers.delete(v3));
  }
  acquireDoc(path) {
    let d3 = this.docs.get(path);
    return d3 || (d3 = new InkDoc(this, path), this.docs.set(path, d3)), d3.refs++, d3;
  }
  releaseDoc(doc) {
    doc.refs--, doc.refs <= 0 && (doc.flush(), this.docs.get(doc.path) === doc && this.docs.delete(doc.path));
  }
  async onRename(file, oldPath) {
    let a3 = this.app.vault.adapter;
    if (file instanceof import_obsidian6.TFile && file.extension === "canvas") {
      let doc = this.docs.get(oldPath);
      doc && await doc.flush();
      for (let [from, to] of [[sidecarPath(oldPath), sidecarPath(file.path)], [cachePath(oldPath), cachePath(file.path)], [legacyCachePath(oldPath), legacyCachePath(file.path)]])
        try {
          await a3.exists(from) && !await a3.exists(to) && await a3.rename(from, to);
        } catch (e3) {
          console.error("[Palette] Could not move drawing with its canvas", e3);
        }
      doc && (this.docs.delete(oldPath), doc.path = file.path, this.docs.set(file.path, doc));
      let boards = this.state && this.state.boards;
      if (boards) {
        let changed = !1;
        for (let k3 of Object.keys(boards))
          boards[k3] === oldPath && (boards[k3] = file.path, changed = !0), k3 === oldPath && (boards[file.path] = boards[k3], delete boards[k3], changed = !0);
        changed && this.saveState();
      }
    } else if (file instanceof import_obsidian6.TFolder)
      for (let [p3, doc] of [...this.docs])
        p3.startsWith(oldPath + "/") && (this.docs.delete(p3), doc.path = file.path + p3.slice(oldPath.length), this.docs.set(doc.path, doc));
  }
  async onDelete(file) {
    if (!(file instanceof import_obsidian6.TFile) || file.extension !== "canvas") return;
    let doc = this.docs.get(file.path);
    doc && doc.discard();
    let a3 = this.app.vault.adapter;
    try {
      for (let cp of [cachePath(file.path), legacyCachePath(file.path)]) await a3.exists(cp) && await a3.rmdir(cp, !0);
    } catch {
    }
    let p3 = sidecarPath(file.path);
    try {
      if (!await a3.exists(p3)) return;
      let f3 = this.app.vault.getAbstractFileByPath(p3);
      f3 instanceof import_obsidian6.TFile && this.app.fileManager.trashFile ? await this.app.fileManager.trashFile(f3) : a3.trashLocal ? await a3.trashLocal(p3) : await a3.remove(p3);
    } catch (e3) {
      console.error("[Palette] Could not remove drawing for deleted canvas", e3);
    }
  }
}, BrushFileModal = class extends import_obsidian6.FuzzySuggestModal {
  constructor(app, files, onPick) {
    super(app), this.files = files, this.onPick = onPick, this.setPlaceholder("Choose a Procreate brush or brush set to import");
  }
  getItems() {
    return this.files;
  }
  getItemText(f3) {
    return f3.path;
  }
  onChooseItem(f3) {
    this.onPick(f3);
  }
}, ConfirmModal = class extends import_obsidian6.Modal {
  constructor(app, title, body, cta, onConfirm) {
    super(app), this.titleText = title, this.body = body, this.cta = cta, this.onConfirm = onConfirm;
  }
  onOpen() {
    this.setTitle ? this.setTitle(this.titleText) : this.titleEl.setText(this.titleText), this.contentEl.createEl("p", { text: this.body }), new import_obsidian6.Setting(this.contentEl).addButton((b3) => b3.setButtonText("Cancel").onClick(() => this.close())).addButton(
      (b3) => b3.setButtonText(this.cta).setWarning().onClick(() => {
        this.close(), this.onConfirm();
      })
    );
  }
  onClose() {
    this.contentEl.empty();
  }
}, InkSettingTab = class extends import_obsidian6.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin), this.plugin = plugin;
  }
  display() {
    let { containerEl } = this, p3 = this.plugin, save = async () => {
      await p3.persist();
    };
    containerEl.empty(), new import_obsidian6.Setting(containerEl).setName("Draw with Apple Pencil only").setDesc("Pencil draws and fingers pan and zoom the canvas. Turn off to draw with your finger; then use the Pan tool to move around.").addToggle((t3) => t3.setValue(p3.settings.pencilOnly).onChange(async (v3) => {
      p3.settings.pencilOnly = v3, await save(), p3.layers.forEach((L3) => L3.refreshModeIcon());
    })), new import_obsidian6.Setting(containerEl).setName("Pressure sensitivity").setDesc("Vary line width with Pencil pressure. Mouse and finger strokes use speed instead.").addToggle((t3) => t3.setValue(p3.settings.pressure).onChange(async (v3) => {
      p3.settings.pressure = v3, await save();
    })), new import_obsidian6.Setting(containerEl).setName("Share undo with the canvas").setDesc("One undo history for cards and drawings, in the order you made changes. Uses Obsidian's internal canvas history; turn off if undo behaves oddly.").addToggle((t3) => t3.setValue(p3.settings.sharedUndo).onChange(async (v3) => {
      p3.settings.sharedUndo = v3, await save(), p3.layers.forEach((L3) => v3 ? L3.hookHistory() : L3.unhookHistory());
    })), new import_obsidian6.Setting(containerEl).setName("QuickShape").setDesc("Hold the pen still at the end of a stroke to turn a rough line, arrow, curve, circle, oval, triangle, rectangle or one-stroke star into a perfect one, then move the pen to adjust it.").addToggle((t3) => t3.setValue(p3.settings.quickShape === !0).onChange(async (v3) => {
      p3.settings.quickShape = v3, await save();
    })), new import_obsidian6.Setting(containerEl).setName("QuickShape hold time").setDesc("How long to hold before the shape snaps, in milliseconds.").addSlider((sl) => sl.setLimits(250, 1200, 50).setValue(p3.settings.quickShapeDelay || 500).setDynamicTooltip().onChange(async (v3) => {
      p3.settings.quickShapeDelay = v3, await save();
    })), new import_obsidian6.Setting(containerEl).setName("Hide borders on baked drawings").setDesc("Baked drawings show without the card outline, so they sit on the canvas like ink. The outline still appears when a card is selected.").addToggle((t3) => t3.setValue(p3.settings.hideBakedBorders !== !1).onChange(async (v3) => {
      p3.settings.hideBakedBorders = v3, await save(), p3.layers.forEach((L3) => L3.markBakedNodes());
    })), new import_obsidian6.Setting(containerEl).setName("Suggest freezing layers").setDesc("When panning a big drawing keeps stuttering, show a one-time tip about freezing layers.").addToggle((t3) => t3.setValue(p3.settings.freezeTips !== !1).onChange(async (v3) => {
      p3.settings.freezeTips = v3, await save();
    })), new import_obsidian6.Setting(containerEl).setName("Fonts folder").setDesc("Where fonts downloaded from the catalog (text tool \u2192 Font \u2192 Get more fonts) are kept in the vault.").addText((t3) => t3.setPlaceholder("Palette fonts").setValue(p3.settings.fontFolder).onChange(async (v3) => {
      p3.settings.fontFolder = v3.trim() || "Palette fonts", await save(), loadInstalledFonts(p3.app, p3.settings.fontFolder);
    })), new import_obsidian6.Setting(containerEl).setName("Extra fonts").setDesc("Comma-separated font names to offer for text, for fonts your device has or that a CSS snippet loads. Example: Noteworthy, Bradley Hand").addText((t3) => t3.setPlaceholder("Noteworthy, Chalkboard SE").setValue(p3.settings.customFonts).onChange(async (v3) => {
      p3.settings.customFonts = v3, await save();
    })), new import_obsidian6.Setting(containerEl).setName("Outline smoothing").setDesc("Softens the outline of pen, marker and highlighter strokes. For steadier lines while drawing, use StreamLine on each brush slot (tap the active slot).").addSlider(
      (s3) => s3.setLimits(0, 90, 5).setValue(p3.settings.smoothing).setDynamicTooltip().onChange(async (v3) => {
        p3.settings.smoothing = v3, await save(), p3.layers.forEach((L3) => L3.invalidateRender());
      })
    ), new import_obsidian6.Setting(containerEl).setName("Drawings sit").setDesc("Above cards lets you annotate them. Below cards keeps cards readable.").addDropdown(
      (d3) => d3.addOption("above", "Above cards").addOption("below", "Below cards").setValue(p3.settings.layer).onChange(async (v3) => {
        p3.settings.layer = v3, await save(), p3.layers.forEach((L3) => L3.placeSvg());
      })
    ), containerEl.createEl("p", {
      cls: "setting-item-description",
      text: 'Drawings are saved next to each canvas as "<name>.canvas.ink.json". Keep that file with the canvas when syncing or sharing.'
    });
  }
}, RenderReport = class extends import_obsidian6.Modal {
  constructor(app, layer) {
    super(app), this.layer = layer;
  }
  onOpen() {
    let L3 = this.layer, { contentEl } = this;
    contentEl.createEl("h3", { text: `Palette ${this.app.plugins.plugins.palette ? this.app.plugins.plugins.palette.manifest.version : ""} rendering report` });
    let counts = {}, walk = (list, depth) => {
      for (let i3 of list)
        counts[i3.type] = (counts[i3.type] || 0) + 1, i3.items && walk(i3.items, depth + 1);
    };
    walk(L3.items, 0);
    let top = L3.items.length;
    contentEl.createEl("p", { text: `${top} items on this canvas (${Object.entries(counts).map(([k3, v3]) => `${v3} ${k3}`).join(", ")}).` });
    let raster = 0, done = 0, waiting = 0, blank = 0, broken = 0, blanks = [];
    for (let it of L3.items) {
      let el = L3.idEl.get(it.id);
      if (el && el.classList.contains("ink-broken")) {
        broken++;
        continue;
      }
      if (isRaster(it)) {
        if (raster++, !el) {
          blank++, blanks.push(`${it.type} ${it.id} (no element)`);
          continue;
        }
        el._rendered ? done++ : el._pending ? (waiting++, blanks.push(`${it.type} ${it.id} (waiting)`)) : (blank++, blanks.push(`${it.type} ${it.id} (not drawn${el._fails ? `, ${el._fails} failed tries` : ""})`));
      }
    }
    contentEl.createEl("p", { text: `Images (textured strokes, fills, effects): ${raster} total, ${done} drawn, ${waiting} still waiting, ${blank} not drawn. Items that couldn't be built at all: ${broken}.` });
    let busy = queueStatus.current ? `Rendering now: ${queueStatus.current}, running for ${Math.round((performance.now() - queueStatus.startedAt) / 1e3)}s. ${queueStatus.waiting()} more queued.` : `The render queue is idle${waiting ? " (waiting items are still loading their brushes, or were never queued)" : ""}.`;
    contentEl.createEl("p", { text: `${busy} Jobs abandoned for taking too long: ${queueStatus.stalls}.` });
    try {
      let a3 = this.app.vault.adapter;
      contentEl.createEl("p", { text: `Direct file URLs: ${typeof a3.getResourcePath == "function" ? "available" : "not available (tiles are read as bytes)"}.` });
      for (let lay of L3.layers ? L3.layers() : []) {
        let rec = lay.pyramid;
        if (!rec) {
          contentEl.createEl("p", { text: `Tiles for ${lay.name}: ${lay._building ? "being prepared" : "none yet"}.` });
          continue;
        }
        let pyr = L3.pyramids && L3.pyramids.get(lay.id), tc = L3.tileCanvas;
        if (contentEl.createEl("p", { text: `Tiles for ${lay.name}: ${rec.levels.map((l3) => l3.pieces.length).join(" / ")} pieces by level; live items ${L3.hot ? L3.hot.size : 0}; queued cells ${pyr ? pyr.queued.size : 0}${pyr && pyr.busy ? " (refreshing)" : ""}.` }), tc && contentEl.createEl("p", { text: `Tile canvas: ${tc.el.isConnected ? "in the page" : "NOT in the page"}, ${tc.el.width}\xD7${tc.el.height} px, ${tc.hidden ? "hidden (zoomed in, drawing live)" : "showing"}; drew ${tc.stats.drawn} tiles last frame; images loaded ${tc.stats.loaded}, failed ${tc.stats.failed}, cached ${tc.images.size}. Rebuild in progress: ${pyr && pyr.building ? "yes" : "no"}.` }), tc) {
          let few = [...tc.images.entries()].slice(0, 3);
          for (let [snap, im] of few) {
            let sn = L3.doc.snapshots.get(snap, ""), line = contentEl.createEl("p", { text: `Tile ${snap}: ${sn ? `file ${sn.file}` : "NO cache entry"}; image ${im.img ? `${im.img.complete ? "complete" : "still loading"}, ${im.img.naturalWidth}\xD7${im.img.naturalHeight}` : "none"}; ready ${im.ready}, failed ${im.failed}; src ${(im.img && im.img.src || "").slice(-60)}` });
            sn && sn.file && a3.exists(`${L3.doc.snapshots.dir}/${sn.file}`).then((ok) => {
              line.setText(line.textContent + (ok ? " \u2014 on disk: yes" : " \u2014 on disk: NO"));
            }).catch(() => {
            });
          }
        }
      }
    } catch {
    }
    let fxGroups = L3.items.filter((it) => it.type === "group" && it.fx && it.fx.length);
    if (fxGroups.length) {
      let snaps = L3.doc && L3.doc.snapshots, themeKey = L3.resolveColor("auto"), saved = snaps ? fxGroups.filter((g3) => {
        let sn = snaps.get(g3.id, themeKey);
        return sn && sn.sig === groupSig(g3);
      }).length : 0, pending = snaps && snaps.dirty ? " (new renders not yet written to the cache file)" : "";
      contentEl.createEl("p", { text: `Effect groups: ${fxGroups.length}, ${saved} opened from the saved render cache, ${fxGroups.length - saved} replayed (they're saved once rendered)${pending}.` });
    }
    if (blanks.length) {
      contentEl.createEl("p", { text: "Not showing:" });
      let ul = contentEl.createEl("ul");
      blanks.slice(0, 20).forEach((b3) => ul.createEl("li", { text: b3 }));
    }
    let errs = [...this.app.plugins.plugins.palette ? this.app.plugins.plugins.palette.renderErrors || [] : [], ...rasterErrors].sort((a3, b3) => b3.at - a3.at).slice(0, 12);
    if (contentEl.createEl("p", { text: errs.length ? "Recent errors:" : "No errors recorded." }), errs.length) {
      let ul = contentEl.createEl("ul");
      errs.forEach((e3) => ul.createEl("li", { text: `${new Date(e3.at).toLocaleTimeString()} \xB7 ${e3.type} ${e3.id}${e3.scale ? ` @${Math.round(e3.scale * 100) / 100}\xD7` : ""}: ${e3.message}` }));
    }
    contentEl.createEl("button", { text: "Try drawing everything again" }).addEventListener("click", () => {
      resetQueue(), L3.elCache = /* @__PURE__ */ new WeakMap(), L3.render(), this.close();
    });
  }
  onClose() {
    this.contentEl.empty();
  }
};
} catch (__paletteLoadError) {
  // The bundle itself failed to evaluate (a syntax or platform error before the plugin
  // could start): a stand-in plugin reports it, since on a tablet there's no console.
  const __ob = require('obsidian');
  module.exports = class PaletteLoadFailure extends __ob.Plugin {
    async onload() {
      const e = __paletteLoadError;
      const text = `${e && e.stack ? e.stack : e}`;
      console.error('[Palette] failed to evaluate', e);
      try { new __ob.Notice(`Palette could not start: ${e && e.message ? e.message : e}. Details in "Palette load error.md".`, 15000); } catch (e2) { /* ignore */ }
      try { await this.app.vault.adapter.write('Palette load error.md', `# Palette ${this.manifest.version} could not start\n\nPlatform: ${navigator.userAgent}\n\n\`\`\`\n${text}\n\`\`\`\n`); } catch (e2) { /* ignore */ }
      throw e;
    }
  };
}
