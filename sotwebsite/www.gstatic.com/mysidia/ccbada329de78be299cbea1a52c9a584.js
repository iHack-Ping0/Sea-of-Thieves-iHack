(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m = this || self;

    function aa(a) {
        a = a.o;
        const b = encodeURIComponent;
        let c = "";
        a.platform && (c += "&uap=" + b(a.platform));
        a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
        a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
        a.architecture && (c += "&uaa=" + b(a.architecture));
        a.model && (c += "&uam=" + b(a.model));
        a.bitness && (c += "&uab=" + b(a.bitness));
        a.fullVersionList && (c += "&uafvl=" + b(a.fullVersionList.map(d => b(d.brand) + ";" + b(d.version)).join("|")));
        "undefined" !== typeof a.wow64 && (c += "&uaw=" + Number(a.wow64));
        return c
    }

    function ba(a, b) {
        return a.g ? a.l.slice(0, a.g.index) + b + a.l.slice(a.g.index) : a.l + b
    }

    function ca(a) {
        let b = "&act=1&ri=1";
        a.h && a.o && (b += aa(a));
        return ba(a, b)
    }

    function da(a, b) {
        return a.h && a.i || a.m ? 1 == b ? a.h ? a.i : ba(a, "&dct=1") : 2 == b ? ba(a, "&ri=2") : ba(a, "&ri=16") : a.l
    }
    var ea = class {
        constructor({
            url: a,
            O: b
        }) {
            this.l = a;
            this.o = b;
            b = /[?&]dsh=1(&|$)/.test(a);
            this.h = !b && /[?&]ae=1(&|$)/.test(a);
            this.m = !b && /[?&]ae=2(&|$)/.test(a);
            if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
                let c;
                try {
                    c = decodeURIComponent(this.g[1])
                } catch (d) {
                    c = null
                }
                this.i = c
            }
        }
    };
    var q = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    q.prototype.h = !0;
    var fa;
    try {
        new URL("s://g"), fa = !0
    } catch (a) {
        fa = !1
    }
    var ha = fa,
        ia = {},
        ka = new q("about:invalid#zClosurez", ia);

    function la(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };

    function ma(a) {
        let b = 0;
        for (const c in a) b++
    };
    var na, oa;
    a: {
        for (var pa = ["CLOSURE_FLAGS"], qa = m, ra = 0; ra < pa.length; ra++)
            if (qa = qa[pa[ra]], null == qa) {
                oa = null;
                break a
            }
        oa = qa
    }
    var sa = oa && oa[610401301];
    na = null != sa ? sa : !1;
    var u;
    const ta = m.navigator;
    u = ta ? ta.userAgentData || null : null;

    function ua(a) {
        return na ? u ? u.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function v(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function w() {
        return na ? !!u && 0 < u.brands.length : !1
    }

    function va() {
        return w() ? ua("Chromium") : (v("Chrome") || v("CriOS")) && !(w() ? 0 : v("Edge")) || v("Silk")
    };

    function wa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    class xa {
        constructor(a) {
            this.X = a
        }
    }

    function x(a) {
        return new xa(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const ya = new xa(a => /^[^:]*([/?#]|$)/.test(a));
    var za = x("http"),
        Aa = x("https"),
        Ba = x("ftp"),
        Ca = x("mailto"),
        Da = x("intent"),
        Ea = x("market"),
        Ga = x("itms"),
        Ha = x("itms-appss");
    const Ia = [x("data"), za, Aa, Ca, Ba, ya];

    function Ja(a, b = Ia) {
        if (a instanceof q) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof xa && d.X(a)) return new q(a, ia)
        }
    }

    function Ka(a, b = Ia) {
        return Ja(a, b) || ka
    };

    function La(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };

    function Ma() {
        return v("iPhone") && !v("iPod") && !v("iPad")
    };

    function Na(a) {
        Na[" "](a);
        return a
    }
    Na[" "] = function() {};
    var Oa = Ma(),
        Pa = v("iPad");
    var Qa = Ma() || v("iPod"),
        Ra = v("iPad");
    !v("Android") || va();
    va();
    v("Safari") && (va() || (w() ? 0 : v("Coast")) || (w() ? 0 : v("Opera")) || (w() ? 0 : v("Edge")) || (w() ? ua("Microsoft Edge") : v("Edg/")) || w() && ua("Opera"));
    var Sa = {},
        Ta = null;

    function y(a) {
        return Array.prototype.slice.call(a)
    };
    const z = Symbol();

    function Ua(a) {
        const b = a[z] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = y(a)), a[z] = b | 1)
    }

    function Va() {
        var a = [];
        a[z] |= 1;
        return a
    }

    function A(a) {
        a[z] |= 34;
        return a
    }

    function Wa(a, b) {
        b[z] = (a | 0) & -255
    }

    function Xa(a, b) {
        b[z] = (a | 34) & -221
    }

    function Ya(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var Za = {};

    function C(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let $a;
    var E;
    const ab = [];
    ab[z] = 55;
    E = Object.freeze(ab);

    function bb(a) {
        if (a & 2) throw Error();
    }
    class cb {
        constructor(a, b, c) {
            this.i = 0;
            this.g = a;
            this.h = b;
            this.l = c
        }
        next() {
            if (this.i < this.g.length) {
                const a = this.g[this.i++];
                return {
                    done: !1,
                    value: this.h ? this.h.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new cb(this.g, this.h, this.l)
        }
    }
    var db = {};

    function eb() {
        const a = Error();
        wa(a, "incident");
        return a
    };

    function fb(a) {
        if (!Number.isFinite(a)) {
            const b = eb();
            La(b)
        }
        return a
    }

    function gb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function F(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function ib(a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.C === Za) return a;
        if (!e) return c ? d & 2 ? (a = b[jb]) ? b = a : (a = new b, A(a.j), b = b[jb] = a) : b = new b : b = void 0, b;
        e = c = a[z] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[z] = e);
        return new b(a)
    }
    const jb = Symbol();

    function kb(a) {
        return a
    }

    function lb(a, b, c) {
        return "string" === typeof a ? a : c ? "" : void 0
    };
    let nb;

    function ob(a) {
        if (a.h & 2) throw Error("Cannot mutate an immutable Map");
    }
    var G = class extends Map {
        constructor(a, b, c = kb, d = kb) {
            super();
            let e = a[z] | 0;
            e |= 64;
            this.h = a[z] = e;
            this.i = b;
            this.g = c || kb;
            this.m = this.i ? sb : d || kb;
            for (let f = 0; f < a.length; f++) {
                const h = a[f],
                    g = c(h[0], !1, !0);
                let k = h[1];
                b ? void 0 === k && (k = null) : k = d(h[1], !1, !0, void 0, void 0, e);
                super.set(g, k)
            }
        }
        s(a = tb) {
            return this.l(a)
        }
        l(a = tb) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            ob(this);
            super.clear()
        }
        delete(a) {
            ob(this);
            return super.delete(this.g(a, !0, !1))
        }
        entries() {
            var a = this.o();
            return new cb(a, ub, this)
        }
        keys() {
            return this.v()
        }
        values() {
            var a = this.o();
            return new cb(a, G.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            ob(this);
            a = this.g(a, !0, !1);
            return null == a ? this : null == b ? (super.delete(a), this) : super.set(a, this.m(b, !0, !0, this.i, !1, this.h))
        }
        has(a) {
            return super.has(this.g(a, !1, !1))
        }
        get(a) {
            a = this.g(a, !1, !1);
            const b = super.get(a);
            if (void 0 !== b) {
                var c = this.i;
                return c ? (c = this.m(b, !1, !0, c, this.u, this.h),
                    c !== b && super.set(a, c), c) : b
            }
        }
        o() {
            return Array.from(super.keys())
        }
        v() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    G.prototype.toJSON = void 0;

    function sb(a, b, c, d, e, f) {
        a = ib(a, d, c, f);
        e && (a = vb(a));
        return a
    }

    function tb(a) {
        return a
    }

    function ub(a) {
        return [a, this.get(a)]
    };

    function wb(a, b) {
        return xb(b)
    }

    function xb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a)) {
                    if (null != a && a instanceof Uint8Array) {
                        let b = "",
                            c = 0;
                        const d = a.length - 10240;
                        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        return btoa(b)
                    }
                    if (a instanceof G) return a.s()
                }
        }
        return a
    };

    function yb(a, b, c) {
        a = y(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) b[f] = c(e[f])
        }
        return a
    }

    function zb(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[z] | 0) & 1 ? void 0 : f && (a[z] | 0) & 2 ? a : Ab(a, b, c, void 0 !== d, e, f);
            else if (C(a)) {
                const h = {};
                for (let g in a) h[g] = zb(a[g], b, c, d, e, f);
                a = h
            } else a = b(a, d);
            return a
        }
    }

    function Ab(a, b, c, d, e, f) {
        const h = d || c ? a[z] | 0 : 0;
        d = d ? !!(h & 32) : void 0;
        a = y(a);
        for (let g = 0; g < a.length; g++) a[g] = zb(a[g], b, c, d, e, f);
        c && c(h, a);
        return a
    }

    function Bb(a) {
        return zb(a, Cb, void 0, void 0, !1, !1)
    }

    function Cb(a) {
        return a.C === Za ? a.toJSON() : a instanceof G ? a.s(Bb) : xb(a)
    };

    function Db(a, b, c = Xa) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[z] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[z] = d | 34, d & 4 && Object.freeze(a), a) : Ab(a, Db, d & 4 ? Xa : c, !0, !1, !0)
            }
            a.C === Za ? (c = a.j, d = c[z], a = d & 2 ? a : Eb(a, c, d, !0)) : a instanceof G && (c = A(a.l(Db)), a = new G(c, a.i, a.g, a.m));
            return a
        }
    }

    function Fb(a) {
        const b = a.j;
        return Eb(a, b, b[z], !1)
    }

    function Eb(a, b, c, d) {
        a = a.constructor;
        nb = b = Gb(b, c, d);
        b = new a(b);
        nb = void 0;
        return b
    }

    function Gb(a, b, c) {
        const d = c || b & 2 ? Xa : Wa,
            e = !!(b & 32);
        a = yb(a, b, f => Db(f, e, d));
        a[z] = a[z] | 32 | (c ? 2 : 0);
        return a
    }

    function vb(a) {
        const b = a.j,
            c = b[z];
        return c & 2 ? Eb(a, b, c, !1) : a
    };

    function I(a, b) {
        a = a.j;
        return J(a, a[z], b)
    }

    function J(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= Ya(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function Hb(a, b, c) {
        const d = a.j,
            e = d[z];
        bb(e);
        L(d, e, b, c);
        return a
    }

    function L(a, b, c, d, e) {
        var f = Ya(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[z] = e)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Ib(a, b, c, d, e) {
        var f = b & 2;
        let h = J(a, b, c, e);
        Array.isArray(h) || (h = E);
        const g = !(d & 2),
            k = !(d & 1);
        d = !!(b & 32);
        let l = h[z] | 0;
        0 !== l || !d || f || g ? l & 1 || (l |= 1, h[z] = l) : (l |= 33, h[z] = l);
        f ? (l & 2 || A(h), k && Object.freeze(h)) : (f = l & 2, k && f ? (h = y(h), f = 1, d && !g && (f |= 32), h[z] = f, L(a, b, c, h, e)) : g && l & 32 && !f && (h[z] &= -33));
        return h
    }
    let Jb;

    function Kb() {
        let a;
        return null != (a = Jb) ? a : Jb = new G(A([]), void 0, void 0, void 0, db)
    }

    function Lb(a, b, c, d, e, f) {
        const h = b & 2;
        a: {
            var g = c,
                k = b & 2;c = !1;
            if (null == g) {
                if (k) {
                    a = Kb();
                    break a
                }
                g = []
            } else if (g.constructor === G) {
                if (0 == (g.h & 2) || k) {
                    a = g;
                    break a
                }
                g = g.l()
            } else Array.isArray(g) ? c = !!((g[z] | 0) & 2) : g = [];
            if (k) {
                if (!g.length) {
                    a = Kb();
                    break a
                }
                c || (c = !0, A(g))
            } else if (c) {
                c = !1;
                k = y(g);
                for (g = 0; g < k.length; g++) {
                    const l = k[g] = y(k[g]);
                    Array.isArray(l[1]) && (l[1] = A(l[1]))
                }
                g = k
            }
            c || ((g[z] | 0) & 64 ? g[z] &= -33 : 32 & b && (g[z] |= 32));f = new G(g, e, lb, f);L(a, b, d, f, !1);a = f
        }
        if (null == a) return a;
        !h && e && (a.u = !0);
        return a
    }

    function Mb(a, b) {
        a = a.j;
        const c = a[z];
        return Lb(a, c, J(a, c, b), b, void 0, lb)
    }

    function M(a, b, c) {
        a = a.j;
        const d = a[z],
            e = J(a, d, c, !1);
        b = ib(e, b, !1, d);
        b !== e && null != b && L(a, d, c, b, !1);
        return b
    }

    function N(a, b, c) {
        b = M(a, b, c);
        if (null == b) return b;
        a = a.j;
        const d = a[z];
        if (!(d & 2)) {
            const e = vb(b);
            e !== b && (b = e, L(a, d, c, b, !1))
        }
        return b
    }

    function Nb(a, b, c, d = !1) {
        let e = a[z] | 0;
        var f = e | 5;
        b = b ? f | 8 : f & -9;
        b = c ? b | 16 : b & -17;
        e != b && (Object.isFrozen(a) && (a = y(a)), a[z] = b, !d && b & 2 && Object.freeze(a));
        return a
    }

    function Ob(a) {
        var b = a.j,
            c = b[z];
        a = !!(c & 2);
        var d = a ? 1 : 2,
            e = Pb,
            f = !!(c & 2),
            h = Ib(b, c, 7, 1),
            g = h === E;
        if (g && 2 !== d) b = h;
        else if (!g && (h[z] | 0) & 4) 3 !== d && (f ? 2 === d && (d = h[z] | 0, h = y(h), h[z] = d, L(b, c, 7, h)) : (e = Object.isFrozen(h), 1 === d ? e || Object.freeze(h) : (d = h[z] | 0, f = d & -33, e || d & 2 ? (h = y(h), h[z] = f & -3, L(b, c, 7, h)) : d !== f && (h[z] = f)))), b = h;
        else {
            f = !!(c & 2);
            var k = !!((h[z] | 0) & 2);
            g = h;
            !f && k && (h = y(h));
            var l = k || void 0;
            k = c | (l ? 2 : 0);
            let n = !1,
                p = 0,
                r = 0;
            for (; p < h.length; p++) {
                const t = ib(h[p], e, !1, k);
                if (null == t) continue;
                const H = !!((t.j[z] | 0) & 2);
                l =
                    l || H;
                n = n || !H;
                h[r++] = t
            }
            r < p && (h.length = r);
            h = Nb(h, !l, !n, !0);
            g !== h && L(b, c, 7, h);
            (f && 2 !== d || 1 === d) && Object.freeze(h);
            b = h
        }
        if (!(a || (b[z] | 0) & 8)) {
            for (a = 0; a < b.length; a++) c = b[a], d = vb(c), c !== d && (b[a] = d);
            b[z] |= 8
        }
        return b
    }

    function Qb(a, b) {
        {
            a = a.j;
            const d = a[z],
                e = d & 2;
            let f = Ib(a, d, b, 1),
                h = f[z] | 0;
            if (!(h & 4)) {
                if (Object.isFrozen(f)) {
                    f = y(f);
                    var c = h = h & -3 | 32;
                    f[z] = c;
                    L(a, d, b, f)
                }
                let g = c = 0;
                for (; c < f.length; c++) {
                    const k = F(f[c]);
                    null != k && (f[g++] = k)
                }
                g < c && (f.length = g);
                h |= 21;
                e ? h |= 34 : h &= -33;
                f[z] = h;
                h & 2 && Object.freeze(f)
            }!e && (h & 2 || Object.isFrozen(f)) && (f = y(f), f[z] = h & -35, L(a, d, b, f));
            b = f
        }
        return b
    }

    function O(a, b) {
        return null != a ? a : b
    }

    function P(a, b) {
        a = I(a, b);
        return O(null == a ? a : "boolean" === typeof a || "number" === typeof a ? !!a : void 0, !1)
    }

    function Q(a, b) {
        return O(F(I(a, b)), "")
    }

    function R(a, b, c = 0) {
        return O(I(a, b), c)
    }

    function Rb(a, b, c) {
        if (null != c) {
            if ("boolean" !== typeof c) throw a = typeof c, Error(`Expected boolean but got ${"object"!=a?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);
            c = !!c
        }
        return Hb(a, b, c)
    }

    function Sb(a, b, c) {
        if (null != c) {
            if ("number" !== typeof c) throw a = Error(), wa(a, "warning"), a;
            if (!Number.isFinite(c)) {
                const d = eb();
                La(d)
            }
        }
        Hb(a, b, c)
    }

    function S(a, b, c) {
        if (null != c && "string" !== typeof c) throw Error();
        return Hb(a, b, c)
    }

    function Tb(a, b, c) {
        Hb(a, b, null == c ? c : fb(c))
    };

    function Ub(a) {
        $a = !0;
        try {
            return JSON.stringify(a.toJSON(), wb)
        } finally {
            $a = !1
        }
    }
    var T = class {
        constructor(a) {
            a: {
                null == a && (a = nb);nb = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[z] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d) {
                        var e = d - 1;
                        d = c[e];
                        if (C(d)) {
                            b |= 256;
                            const f = +!!(b & 512) - 1;
                            e -= f;
                            if (1024 <= e) {
                                e = 1023 + f;
                                const h = c.length;
                                for (let g = e; g < h; g++) {
                                    const k = c[g];
                                    null != k && k !== d && (d[g - f] = k)
                                }
                                c.length = e + 1;
                                c[e] = d;
                                e = 1023
                            }
                            b = b & -2095105 | (e & 1023) << 11
                        }
                    }
                }
                a[z] = b
            }
            this.j = a
        }
        toJSON() {
            if ($a) var a = Vb(this, this.j, !1);
            else a = Ab(this.j, Cb, void 0, void 0, !1, !1), a = Vb(this,
                a, !0);
            return a
        }
    };
    T.prototype.C = Za;
    T.prototype.toString = function() {
        return Vb(this, this.j, !1).toString()
    };

    function Vb(a, b, c) {
        var d = a.constructor.B,
            e = Ya((c ? a.j : b)[z]),
            f = !1;
        if (d) {
            if (!c) {
                b = y(b);
                var h;
                if (b.length && C(h = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, h);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            h = a.j[z];
            a = Ya(h);
            h = +!!(h & 512) - 1;
            var g;
            for (let D = 0; D < d.length; D++) {
                var k = d[D];
                if (k < a) {
                    k += h;
                    var l = e[k];
                    null == l ? e[k] = c ? E : Va() : c && l !== E && Ua(l)
                } else {
                    if (!g) {
                        var n = void 0;
                        e.length && C(n = e[e.length - 1]) ? g = n : e.push(g = {})
                    }
                    l = g[k];
                    null == g[k] ? g[k] = c ? E : Va() : c && l !== E && Ua(l)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let p,
            r;
        if (C(g = b[d - 1])) {
            a: {
                var t = g;n = {};e = !1;
                for (let D in t) c = t[D],
                Array.isArray(c) && c != c && (e = !0),
                null != c ? n[D] = c : e = !0;
                if (e) {
                    for (let D in n) {
                        t = n;
                        break a
                    }
                    t = null
                }
            }
            t != g && (p = !0);d--
        }
        for (; 0 < d; d--) {
            g = b[d - 1];
            if (null != g) break;
            r = !0
        }
        if (!p && !r) return b;
        var H;
        f ? H = b : H = Array.prototype.slice.call(b, 0, d);
        b = H;
        f && (b.length = d);
        t && b.push(t);
        return b
    };
    var Wb = class extends T {
        constructor() {
            super()
        }
    };
    var Xb = class extends T {};
    var Yb = class extends T {};
    var Pb = class extends T {
        A() {
            return Q(this, 3)
        }
        N(a) {
            Rb(this, 5, a)
        }
    };
    var U = class extends T {
        A() {
            return Q(this, 1)
        }
        N(a) {
            Rb(this, 2, a)
        }
    };
    var Zb = class extends T {};
    var $b = class extends T {};
    $b.B = [6, 7];

    function ac(a) {
        a = a.j;
        const b = a[z];
        return Lb(a, b, J(a, b, 1), 1, $b)
    }
    var bc = class extends T {};
    bc.B = [17];
    var cc = class extends T {};
    var dc = class extends T {
        constructor() {
            super()
        }
    };

    function ec(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var fc = {
            capture: !0
        },
        gc = {
            passive: !0
        },
        hc = ec(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                m.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function ic(a) {
        return a ? a.passive && hc() ? a : a.capture || !1 : !1
    }

    function V(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, ic(d))
    };

    function jc(a, b) {
        if (!(b instanceof q || b instanceof q)) {
            b = "object" == typeof b && b.h ? b.g.toString() : String(b);
            b: {
                var c = b;
                if (ha) {
                    try {
                        var d = new URL(c)
                    } catch (e) {
                        c = "https:";
                        break b
                    }
                    c = d.protocol
                } else c: {
                    d = document.createElement("a");
                    try {
                        d.href = c
                    } catch (e) {
                        c = void 0;
                        break c
                    }
                    c = d.protocol;c = ":" === c || "" === c ? "https:" : c
                }
            }
            "javascript:" === c && (b = "about:invalid#zClosurez");
            b = new q(b, ia)
        }
        a.href = b instanceof q && b.constructor === q ? b.g : "type_error:SafeUrl"
    };
    var kc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function lc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) lc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }
    var mc = /#|$/;

    function nc(a, b) {
        var c = a.search(mc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };

    function oc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var pc = a => {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    let qc = [];
    const rc = () => {
        const a = qc;
        qc = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var sc = a => {
            qc.push(a);
            1 == qc.length && (window.Promise ? Promise.resolve().then(rc) : window.setImmediate ? setImmediate(rc) : setTimeout(rc, 0))
        },
        tc = a => {
            var b = W;
            "complete" === b.readyState || "interactive" === b.readyState ? sc(a) : b.addEventListener("DOMContentLoaded", a)
        },
        uc = a => {
            var b = window;
            "complete" === b.document.readyState ? sc(a) : b.addEventListener("load", a)
        };

    function vc(a = document) {
        return a.createElement("img")
    };

    function Bc(a, b, c = null, d = !1) {
        Cc(a, b, c, d)
    }

    function Cc(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = vc(a.document);
        if (c || d) {
            const f = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const g = Array.prototype.indexOf.call(h, e, void 0);
                    0 <= g && Array.prototype.splice.call(h, g, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, ic());
                e.removeEventListener && e.removeEventListener("error", f, ic())
            };
            V(e, "load", f);
            V(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Dc(a, b) {
        var c;
        if (c = a.navigator) c = a.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
        c && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : Bc(a, b, void 0, !1)
    };
    let Ec = 0;

    function Fc(a) {
        return (a = Gc(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Gc(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Hc(a) {
        if (!(.01 < Math.random())) {
            const b = Gc(a, document.currentScript);
            a = `https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Fc(a)}&sample=${.01}`;
            Dc(window, a)
        }
    };
    var W = document,
        X = window;
    const Ic = [za, Aa, Ca, Ba, ya, Ea, Ga, Da, Ha];

    function Jc(a, b) {
        if (a instanceof q) return a;
        const c = Ka(a, Ic);
        c === ka && b(a);
        return c
    }
    var Kc = a => {
        var b = `${"http:"===X.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var d = [];
            for (e in c) lc(e, c[e], d);
            var e = d.join("&");
            if (e) {
                c = b.indexOf("#");
                0 > c && (c = b.length);
                d = b.indexOf("?");
                if (0 > d || d > c) {
                    d = c;
                    var f = ""
                } else f = b.substring(d + 1, c);
                c = [b.slice(0, d), f, b.slice(c)];
                d = c[1];
                c[1] = e ? d ? d + "&" + e : e : d;
                e = c[0] + (c[1] ? "?" + c[1] : "") + c[2]
            } else e = b;
            navigator.sendBeacon && navigator.sendBeacon(e, "")
        }
    };
    var Lc = a => {
        var b = W;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    class Mc {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Nc = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Oc = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Pc = class {
            constructor(a, b) {
                this.url = a;
                this.M = !!b;
                this.depth = null
            }
        };
    let Qc = null;

    function Rc() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Sc() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var Tc = class {
        constructor(a, b) {
            var c = Sc() || Rc();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Y = m.performance,
        Uc = !!(Y && Y.mark && Y.measure && Y.clearMarks),
        Vc = ec(() => {
            var a;
            if (a = Uc) {
                var b;
                if (null === Qc) {
                    Qc = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (Qc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Qc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Wc(a) {
        a && Y && Vc() && (Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Xc {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Vc() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Tc(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Y && Vc() && Y.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Sc() || Rc()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Y && Vc() && Y.mark(b);
                !this.g ||
                    2048 < this.h.length || this.h.push(a)
            }
        }
    };

    function Yc(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Zc(a, b, c, d, e) {
        const f = [];
        oc(a, function(h, g) {
            (h = $c(h, b, c, d, e)) && f.push(g + "=" + h)
        });
        return f.join(b)
    }

    function $c(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let h = 0; h < a.length; h++) f.push($c(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Zc(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ad(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function bd(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = ad(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, h) {
            return f - h
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const h = a.g[f],
                g = a.h[h];
            for (let k = 0; k < g.length; k++) {
                if (!d) {
                    b = null == b ? h : b;
                    break
                }
                let l = Zc(g[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = null == b ? h : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class cd {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };

    function dd(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }

    function ed(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                Wc(e), c = a.m(b, new Mc(f, {
                    message: dd(f)
                }), void 0, void 0)
            } catch (h) {
                a.l(217, h)
            }
            if (c) {
                let h, g;
                null == (h = window.console) || null == (g = h.error) || g.call(h, f)
            } else throw f;
        }
        return d
    }

    function fd(a, b) {
        var c = gd;
        return (...d) => ed(c, a, () => b.apply(void 0, d))
    }
    var jd = class {
        constructor(a = null) {
            this.pinger = hd;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.l
        }
        l(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const B = new cd;
                B.g.push(1);
                B.h[1] = Yc("context", a);
                b.error && b.meta && b.id || (b = new Mc(b, {
                    message: dd(b)
                }));
                if (b.msg) {
                    var h = b.msg.substring(0, 512);
                    B.g.push(2);
                    B.h[2] = Yc("msg", h)
                }
                const Fa = b.meta || {};
                if (this.h) try {
                    this.h(Fa)
                } catch (K) {}
                if (d) try {
                    d(Fa)
                } catch (K) {}
                b = [Fa];
                B.g.push(3);
                B.h[3] = b;
                d = m;
                b = [];
                let pb;
                h = null;
                do {
                    var g = d;
                    try {
                        var k;
                        if (k = !!g && null != g.location.href) b: {
                            try {
                                Na(g.foo);
                                k = !0;
                                break b
                            } catch (K) {}
                            k = !1
                        }
                        var l = k
                    } catch (K) {
                        l = !1
                    }
                    l ? (pb = g.location.href, h = g.document && g.document.referrer || null) : (pb = h, h = null);
                    b.push(new Pc(pb || ""));
                    try {
                        d = g.parent
                    } catch (K) {
                        d = null
                    }
                } while (d && g != d);
                for (let K = 0, wc = b.length - 1; K <= wc; ++K) b[K].depth = wc - K;
                g = m;
                if (g.location && g.location.ancestorOrigins && g.location.ancestorOrigins.length == b.length - 1)
                    for (l = 1; l < b.length; ++l) {
                        var n = b[l];
                        n.url || (n.url = g.location.ancestorOrigins[l - 1] || "", n.M = !0)
                    }
                var p = b;
                let qb = new Pc(m.location.href, !1);
                g = null;
                const rb = p.length -
                    1;
                for (n = rb; 0 <= n; --n) {
                    var r = p[n];
                    !g && Nc.test(r.url) && (g = r);
                    if (r.url && !r.M) {
                        qb = r;
                        break
                    }
                }
                r = null;
                const Gd = p.length && p[rb].url;
                0 != qb.depth && Gd && (r = p[rb]);
                f = new Oc(qb, r);
                if (f.h) {
                    var t = f.h.url || "";
                    B.g.push(4);
                    B.h[4] = Yc("top", t)
                }
                var H = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var D = f.g.url.match(kc),
                        xc = D[1],
                        yc = D[3],
                        zc = D[4];
                    p = "";
                    xc && (p += xc + ":");
                    yc && (p += "//", p += yc, zc && (p += ":" + zc));
                    var Ac = p
                } else Ac = "";
                H = [H, {
                    url: Ac
                }];
                B.g.push(5);
                B.h[5] = H;
                id(this.pinger, e, B, this.i, c)
            } catch (B) {
                try {
                    id(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: dd(B),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (Fa) {}
            }
            return !0
        }
    };
    class kd {};

    function id(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof cd ? f = c : (f = new cd, oc(c, (g, k) => {
                var l = f;
                const n = l.l++;
                g = Yc(k, g);
                l.g.push(n);
                l.h[n] = g
            }));
            const h = bd(f, "/pagead/gen_204?id=" + b + "&");
            h && Bc(m, h)
        } catch (f) {}
    }

    function ld() {
        var a = hd,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
    class md {
        constructor() {
            this.g = Math.random()
        }
    };
    let hd, gd;
    const Z = new Xc;
    var nd = () => {
        window.google_measure_js_timing || (Z.g = !1, Z.h != Z.i.google_js_reporting_queue && (Vc() && Array.prototype.forEach.call(Z.h, Wc, void 0), Z.h.length = 0))
    };
    (a => {
        hd = null != a ? a : new md;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        ld();
        gd = new jd(Z);
        gd.h = b => {
            const c = Ec;
            0 !== c && (b.jc = String(c), b.shv = Fc(c))
        };
        gd.i = !0;
        "complete" == window.document.readyState ? nd() : Z.g && V(window, "load", () => {
            nd()
        })
    })();
    var od = (a, b) => fd(a, b),
        pd = a => {
            var b = kd;
            var c = "L";
            b.L && b.hasOwnProperty(c) || (c = new b, b.L = c);
            b = [];
            !a.eid && b.length && (a.eid = b.toString());
            id(hd, "gdn-asoch", a, !0)
        };

    function qd(a = window) {
        return a
    };
    ma({
        ia: 0,
        ha: 1,
        ea: 2,
        Z: 3,
        fa: 4,
        aa: 5,
        ga: 6,
        ca: 7,
        da: 8,
        Y: 9,
        ba: 10,
        ka: 11
    });
    ma({
        ma: 0,
        na: 1,
        la: 2
    });

    function rd(a) {
        var b = new sd;
        const c = b.j,
            d = c[z] | 0;
        bb(b.j[z]);
        b = Ib(c, d, 1, 2, !1);
        if (Array.isArray(a))
            for (var e = 0; e < a.length; e++) b.push(fb(a[e]));
        else
            for (e of a) b.push(fb(e))
    }
    var sd = class extends T {
        constructor() {
            super()
        }
    };
    sd.B = [1];
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    rd([1, 8, 10, 11, 12, 2, 3, 4, 5]);
    rd([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5]);
    rd([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5]);
    var td = (a, b) => {
            b = Q(a, 2) || b;
            if (!b) return "";
            if (P(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            Mb(a, 4).forEach((e, f) => {
                d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        ud = (a, b = []) => {
            b = 0 < b.length ? b : Lc("data-asoch-targets");
            a = ac(a);
            const c = [];
            for (let g = 0; g < b.length; ++g) {
                var d = b[g].getAttribute("data-asoch-targets"),
                    e = d.split(","),
                    f = !0;
                for (let k of e)
                    if (!a.has(k)) {
                        f = !1;
                        break
                    }
                if (f) {
                    f = a.get(e[0]);
                    for (d = 1; d < e.length; ++d) {
                        var h = a.get(e[d]);
                        f = Fb(f).toJSON();
                        h = h.toJSON();
                        const k = Math.max(f.length, h.length);
                        for (let l = 0; l < k; ++l) null == f[l] && (f[l] = h[l]);
                        f = new $b(f)
                    }
                    e = Mb(f, 4);
                    null != I(f, 5) && e.set("nb", R(f, 5, 0).toString());
                    c.push({
                        element: b[g],
                        data: f
                    })
                } else pd({
                    type: 1,
                    data: d
                })
            }
            return c
        },
        xd = (a, b, c, d) => {
            c = td(b, c);
            if (0 !== c.length) {
                if ("2" === nc(c, "ase") && 1087 !== d) {
                    const f = 609 === d;
                    var e;
                    const h = !(null == (e = W.featurePolicy) || !e.allowedFeatures().includes("attribution-reporting"));
                    e = f ? 4 : h ? 6 : 5;
                    let g = "";
                    f || h &&
                        !vd(c) ? (c = wd(c, "nis", e.toString()), a.setAttribute("attributionsrc", g)) : h && vd(c) && (g = wd(ca(new ea({
                            url: c
                        })), "nis", e.toString()), a.setAttribute("attributionsrc", g))
                }
                jc(a, Jc(c, Kc(d)));
                a.target || (a.target = null != F(I(b, 11)) ? Q(b, 11) : "_top")
            }
        },
        yd = a => {
            for (const b of a)
                if (a = b.data, "A" == b.element.tagName && !P(a, 1)) {
                    const c = b.element;
                    xd(c, a, c.href, 609)
                }
        },
        vd = a => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a),
        zd = a => {
            const b = m.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && void 0 !== M(a, Zb, 8)) {
                        const d = Q(N(a,
                            Zb, 8), 4);
                        if (d) {
                            b.fetchAppStoreOverlay(d, void 0, Q(N(a, Zb, 8), 6));
                            break
                        }
                    }
        },
        Ad = (a, b = 500) => {
            const c = [],
                d = [];
            for (var e of a)(a = e.data) && void 0 !== M(a, U, 12) && (d.push(N(a, U, 12)), c.push(N(a, U, 12).A()));
            e = (f, h) => {
                if (h)
                    for (const g of d) h[g.A()] && g.N(!0)
            };
            a = m.oneAfmaInstance;
            for (const f of c) {
                let h;
                null == (h = a) || h.canOpenAndroidApp(f, e, () => {}, b)
            }
        },
        Cd = (a, b, c, d, e) => {
            if (!b || void 0 === M(b, Zb, 8)) return !1;
            const f = N(b, Zb, 8);
            let h = Q(f, 2);
            Mb(b, 10).forEach((l, n) => {
                var p = h;
                n = encodeURIComponent(n);
                const r = encodeURIComponent(l);
                l = new RegExp("[?&]" + n + "=([^&]+)");
                const t = l.exec(p);
                console.log(t);
                n = n + "=" + r;
                h = t ? p.replace(l, t[0].charAt(0) + n) : p.replace("?", "?" + n + "&")
            });
            Bd(b) && P(b, 15) && !/[?&]label=/.test(c) && (c = wd(c, "label", "deep_link_fallback"));
            const g = l => d.openStoreOverlay(l, void 0, Q(f, 6)),
                k = l => Dc(X, l);
            return d.redirectForStoreU2({
                clickUrl: c,
                trackingUrl: Q(f, 3),
                finalUrl: h,
                pingFunc: P(b, 13) ? d.httpTrack : e ? k : d.click,
                openFunc: (null == a ? 0 : P(a, 1)) ? g : d.openIntentOrNativeApp,
                isExternalClickUrl: P(b, 13)
            })
        },
        Ed = (a, b, c, d, e, f, h, g = !1) => {
            e = P(e,
                15);
            const k = vd(f);
            !a || !b || e && k || (f = g ? Dd(f) : Dd(f, h.click));
            f && f.startsWith("intent:") ? h.openIntentOrNativeApp(f) : c ? d ? h.openBrowser(f) : h.openChromeCustomTab(f) : h.openSystemBrowser(f, {
                useFirstPackage: !0,
                useRunningProcess: !0
            })
        },
        Dd = (a, b = null) => {
            if (null !== b) {
                const c = new ea({
                    url: a
                });
                if (c.h && c.i || c.m) return b(ca(c)), da(c, 1)
            } else return {
                O: b
            } = {}, b = new ea({
                url: a,
                O: b
            }), b.h && b.i || b.m ? navigator.sendBeacon ? navigator.sendBeacon(ca(b), "") ? da(b, 1) : da(b, 2) : da(b, 0) : a;
            return a
        },
        Fd = (a, b = !0) => {
            b && X.fetch ? X.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(c => {
                c.ok || Bc(X, a)
            }) : Bc(X, a)
        },
        wd = (a, b, c) => {
            b = encodeURIComponent(String(b));
            c = encodeURIComponent(String(c));
            return a.replace("?", "?" + b + "=" + c + "&")
        },
        Bd = a => {
            for (const b of Ob(a))
                if (3 === R(b, 1, 0) && Q(b, 2)) return !0;
            return !1
        };
    var Hd = (a, b) => a && (a = a.match(b + "=([^&]+)")) && 2 == a.length ? a[1] : "";
    var Id = class extends T {
        constructor() {
            super()
        }
    };

    function Jd(a, b) {
        return S(a, 2, b)
    }

    function Kd(a, b) {
        return S(a, 3, b)
    }

    function Ld(a, b) {
        return S(a, 4, b)
    }

    function Md(a, b) {
        return S(a, 5, b)
    }

    function Nd(a, b) {
        return S(a, 9, b)
    }

    function Od(a, b) {
        const c = a.j,
            d = c[z];
        bb(d);
        if (null != b) {
            let e = !1,
                f = !0;
            if (!((b[z] | 0) & 2)) {
                e = !0;
                for (let h = 0; h < b.length; h++) {
                    const g = !!((b[h].j[z] | 0) & 2);
                    e = e && !g;
                    f = f && g
                }
            }
            b = Nb(b, e, f)
        }
        null == b && (b = void 0);
        L(c, d, 10, b);
        return a
    }

    function Pd(a, b) {
        return Rb(a, 11, b)
    }

    function Qd(a, b) {
        return S(a, 1, b)
    }

    function Rd(a, b) {
        return Rb(a, 7, b)
    }
    var Sd = class extends T {
        constructor() {
            super()
        }
    };
    Sd.B = [10, 6];
    const Td = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Ud(a) {
        let b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Vd(a) {
        let b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function Wd() {
        var a = window;
        if (!Vd(a)) return null;
        const b = Ud(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Td).then(c => {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function Xd(a) {
        let b;
        return Pd(Od(Md(Jd(Qd(Ld(Rd(Nd(Kd(new Sd, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(c => {
            var d = new Id;
            d = S(d, 1, c.brand);
            return S(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Yd() {
        let a, b;
        return null != (b = null == (a = Wd()) ? void 0 : a.then(c => Xd(c))) ? b : null
    };

    function Zd(a) {
        for (const b of a)
            if ("A" == b.element.tagName) {
                a = b.element;
                const c = b.data;
                null == F(I(c, 2)) && S(c, 2, a.href)
            }
    }

    function $d(a, b) {
        return la(a, c => c.element === b)
    }

    function ae(a) {
        tc(od(556, () => {
            new be(a || {})
        }))
    }

    function ce(a, b) {
        if (!b.defaultPrevented || a.u === b) {
            for (var c, d, e = b.target;
                (!c || !d) && e;) {
                d || "A" != e.tagName || (d = e);
                var f = e.hasAttribute("data-asoch-targets"),
                    h = e.hasAttribute("data-asoch-fixed-value");
                if (!c)
                    if (h) c = new $b(JSON.parse(e.getAttribute("data-asoch-fixed-value")) || []);
                    else if ("A" == e.tagName || f)
                    if (f = f && "true" === e.getAttribute("data-asoch-is-dynamic") ? ud(a.h, [e]) : a.g, f = $d(f, e)) c = f.data;
                e = e.parentElement
            }
            e = c && !P(c, 1);
            if (a.D && a.l && b.defaultPrevented) de(a, b, d, e ? c : a.l);
            else {
                if (e) {
                    if (!a.D && b.defaultPrevented) {
                        de(a,
                            b, d, c);
                        return
                    }
                    f = c;
                    for (var g of Qb(f, 6)) Fd(g)
                }
                if (d && e) {
                    c = e ? c : null;
                    (g = $d(a.g, d)) ? g = g.data: (g = new $b, S(g, 2, d.href), S(g, 11, d.target || "_top"), a.g.push({
                        element: d,
                        data: g
                    }));
                    xd(d, c || g, Q(g, 2), 557);
                    ee(a, b, d, c);
                    for (var k of Qb(a.h, 17)) g = W.body, e = {}, "function" === typeof window.CustomEvent ? f = new CustomEvent(k, e) : (f = document.createEvent("CustomEvent"), f.initCustomEvent(k, !!e.bubbles, !!e.cancelable, e.detail)), g.dispatchEvent(f);
                    if (null == c ? 0 : null != F(I(c, 19))) {
                        k = new Wb;
                        g = R(c, 5, 0);
                        Tb(k, 1, g);
                        g = Hd(d.href, "nx");
                        "" != g &&
                            Sb(k, 2, +g);
                        g = Hd(d.href, "ny");
                        "" != g && Sb(k, 3, +g);
                        g = Hd(d.href, "bg");
                        "" != g && S(k, 4, g);
                        g = Hd(d.href, "nm");
                        "" != g && Sb(k, 5, +g);
                        g = Hd(d.href, "mb");
                        "" != g && Sb(k, 6, +g);
                        g = Q(c, 19);
                        e = null != gb(I(c, 20)) ? O(gb(I(c, 20)), 0) : null;
                        h = Ub(k);
                        var l = a.o;
                        k = qd(m);
                        f = new dc;
                        S(f, 1, g);
                        null !== e && Sb(f, 2, e);
                        null !== l && S(f, 3, l);
                        g = S(f, 4, h);
                        Tb(g, 9, 4);
                        var n;
                        null == k || null == (n = k.fence) || n.reportEvent({
                            eventType: "click",
                            eventData: JSON.stringify(f),
                            destination: ["buyer"]
                        });
                        Tb(f, 9, 5);
                        var p;
                        null == k || null == (p = k.fence) || p.setReportEventDataForAutomaticBeacons({
                            eventType: "reserved.top_navigation",
                            eventData: JSON.stringify(f),
                            destination: ["buyer"],
                            once: !0
                        })
                    }
                    P(a.h, 16) || a.G ? fe(a, b, d, c) : (n = "", (p = m.oneAfmaInstance) && (n = p.appendClickSignals(d.href)), ge(a, b, d, c, n))
                }
            }
        }
    }

    function de(a, b, c, d) {
        if (a.u === b && a.v) {
            const f = new Yb(a.v),
                h = Q(d, 9);
            var e = "";
            switch (R(f, 4, 1)) {
                case 2:
                    if (O(gb(I(f, 2)), 0)) e = "blocked_fast_click";
                    else if (Q(f, 1) || Q(f, 7)) e = "blocked_border_click";
                    break;
                case 3:
                    e = W;
                    e = e.getElementById ? e.getElementById("common_15click_anchor") : null;
                    const g = window;
                    if ("function" === typeof g.copfcChm && e) {
                        d = Fb(d);
                        Tb(d, 5, 12);
                        Mb(d, 4).set("nb", (12).toString());
                        const k = $d(a.g, e);
                        k ? k.data = d : a.g.push({
                            element: e,
                            data: d
                        });
                        !a.K && c && (ee(a, b, c, d), S(d, 2, c.href));
                        g.copfcChm(b, td(d, e.href), null,
                            void 0 !== M(f, Xb, 10) ? Ub(N(f, Xb, 10)) : null);
                        a.K && ee(a, b, e, d)
                    }
                    e = "onepointfiveclick_first_click"
            }
            h && e && Fd(h + "&label=" + e, !1);
            Hc(a.H)
        }
    }

    function ee(a, b, c, d) {
        if (!P(d, 13)) {
            var e = c.href;
            var f = /[?&]adurl=([^&]+)/.exec(e);
            e = f ? [e.slice(0, f.index), e.slice(f.index)] : [e, ""];
            for (jc(c, Jc(e[0], Kc(557))); !c.id;)
                if (f = "asoch-id-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)), !W.getElementById(f)) {
                    c.id = f;
                    break
                }
            f = c.id;
            "function" === typeof window.xy && window.xy(b, c, W.body);
            "function" === typeof window.mb && window.mb(c);
            "function" === typeof window.bgz && window.bgz(f);
            "function" ===
            typeof window.ja && window.ja(f, d ? R(d, 5, 0) : 0);
            "function" === typeof window.vti && window.vti(c);
            a.i && "function" === typeof window.ss && (a.J ? window.ss(f, 1, a.i) : window.ss(a.i, 1));
            0 < e.length && (a = 0 < a.o.length && (null == d || null == F(I(d, 19))) ? c.href + "&uach=" + encodeURIComponent(a.o) + e[1] : c.href + e[1], jc(c, Jc(a, Kc(557))))
        }
    }
    async function fe(a, b, c, d) {
        let e = "";
        var f = m.oneAfmaInstance;
        if (f && (b.preventDefault(), e = await f.appendClickSignalsAsync(c.href) || "", a.G)) {
            if (a.S) return;
            if (f = await f.getNativeClickMeta()) {
                if (f.customClickGestureEligible) return;
                e = wd(e, "nas", f.encodedNas)
            }
        }
        ge(a, b, c, d, e)
    }

    function ge(a, b, c, d, e) {
        const f = P(a.h, 2),
            h = f && 300 < Date.now() - a.I,
            g = m.oneAfmaInstance;
        g ? (pc(b), (() => {
            let k = P(d, 13) ? e : g.logScionEventAndAddParam(e);
            if (!a.s && d && void 0 !== M(d, U, 12)) {
                var l = N(d, U, 12).A();
                if (0 < Ob(d).length)
                    for (const n of Ob(d));
                P(N(d, U, 12), 2) ? (g.click(k), g.openAndroidApp(l), l = !0) : l = !1
            } else l = !1;
            l || Cd(a.m, d, k, g, a.T) || Ed(f, h, a.V, a.s, d, k, g, a.U)
        })()) : (b = window, a.R && b.pawsig && "function" === typeof b.pawsig.clk ? b.pawsig.clk(c) : h && (b = null != c.getAttribute("attributionsrc") && "6" === nc(c.getAttribute("attributionsrc"),
            "nis") ? Dd(c.href, () => {}) : Dd(c.href), b !== c.href && jc(c, Jc(b, Kc(599)))));
        h && (a.I = Date.now());
        Hc(a.H)
    }
    var be = class {
        constructor(a) {
            this.s = Qa || Oa || Ra || Pa;
            var b = Lc("data-asoch-meta");
            if (1 !== b.length) pd({
                type: 2,
                data: b.length
            });
            else {
                this.H = 70;
                this.h = new bc(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.F = a["extra-meta"] ? new bc(JSON.parse(a["extra-meta"])) : null;
                this.G = "true" === a["is-fsn"];
                this.S = "true" === a["is-tap-disabled-for-fsn"];
                this.m = a["ios-store-overlay-config"] ? new cc(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.V = "true" === a["use-cct-over-browser"];
                this.T = "true" === a["send-ac-click-ping-by-js"];
                this.K = "true" === a["correct-redirect-url-for-och-15-click"];
                this.U = "true" === a["send-click-ping-by-js-in-och"];
                this.P = "true" === a["middle-clicks-in-och"];
                this.D = "true" === a["default-msg-in-och"];
                this.R = "true" === a["enable-paw"];
                this.o = "";
                b = Yd();
                null != b && b.then(d => {
                    var e = Ub(d);
                    d = [];
                    for (var f = 0, h = 0; h < e.length; h++) {
                        var g = e.charCodeAt(h);
                        255 < g && (d[f++] = g & 255, g >>= 8);
                        d[f++] = g
                    }
                    e = 3;
                    void 0 === e && (e = 0);
                    if (!Ta)
                        for (Ta = {}, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=",
                                "-_.", "-_"
                            ], g = 0; 5 > g; g++) {
                            var k = f.concat(h[g].split(""));
                            Sa[g] = k;
                            for (var l = 0; l < k.length; l++) {
                                var n = k[l];
                                void 0 === Ta[n] && (Ta[n] = l)
                            }
                        }
                    e = Sa[e];
                    f = Array(Math.floor(d.length / 3));
                    h = e[64] || "";
                    for (g = k = 0; k < d.length - 2; k += 3) {
                        var p = d[k],
                            r = d[k + 1];
                        n = d[k + 2];
                        l = e[p >> 2];
                        p = e[(p & 3) << 4 | r >> 4];
                        r = e[(r & 15) << 2 | n >> 6];
                        n = e[n & 63];
                        f[g++] = l + p + r + n
                    }
                    l = 0;
                    n = h;
                    switch (d.length - k) {
                        case 2:
                            l = d[k + 1], n = e[(l & 15) << 2] || h;
                        case 1:
                            d = d[k], f[g] = e[d >> 2] + e[(d & 3) << 4 | l >> 4] + n + h
                    }
                    this.o = f.join("")
                });
                this.g = ud(this.h);
                this.D && (this.l = null, ac(this.h).forEach(d => {
                    null == this.l && null != F(I(d, 2)) && null != F(I(d, 9)) && (this.l = d)
                }));
                this.W = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.I = -Infinity;
                this.i = Q(this.h, 5) || "";
                this.J = P(this.h, 11);
                this.F && (this.J = P(this.F, 11));
                this.v = this.u = null;
                P(this.h, 3) || (yd(this.g), Rb(this.h, 3, !0));
                Zd(this.g);
                a = m.oneAfmaInstance;
                !this.s && a && Ad(this.g, this.W);
                var c;
                if (a && (null == (c = this.m) ? 0 : P(c, 2))) switch (c = () => {
                    const d = O(gb(I(this.m, 4)), 0);
                    0 < d ? m.setTimeout(() => {
                        zd(this.g)
                    }, d) : zd(this.g)
                }, R(this.m, 3, 0)) {
                    case 1:
                        a.runOnOnShowEvent(c);
                        break;
                    case 2:
                        uc(c);
                        break;
                    default:
                        zd(this.g)
                }
                V(W, "click", od(557, d => {
                    ce(this, d)
                }), fc);
                this.P && V(W, "auxclick", od(557, d => {
                    1 === d.button && ce(this, d)
                }), fc);
                this.i && "function" === typeof window.ss && V(W.body, "mouseover", od(626, () => {
                    window.ss(this.i, 0)
                }), gc);
                "function" === typeof window.ivti && window.ivti(W.body);
                c = window;
                c.googqscp && "function" === typeof c.googqscp.registerCallback && c.googqscp.registerCallback((d, e) => {
                    this.u = d;
                    this.v = e
                })
            }
        }
    };
    var he = od(555, a => ae(a));
    Ec = 70;
    const ie = Gc(70, document.currentScript);
    if (null == ie) throw Error("JSC not found 70");
    const je = {},
        ke = ie.attributes;
    for (let a = ke.length - 1; 0 <= a; a--) {
        const b = ke[a].name;
        0 === b.indexOf("data-jcp-") && (je[b.substring(9)] = ke[a].value)
    }
    he(je);
}).call(this);