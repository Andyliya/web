let e, t, n = !1;
const l = "undefined" != typeof window ? window : {}, s = l.document || {head: {}}, o = {
        t: 0,
        l: "",
        jmp: e => e(),
        raf: e => requestAnimationFrame(e),
        ael: (e, t, n, l) => e.addEventListener(t, n, l),
        rel: (e, t, n, l) => e.removeEventListener(t, n, l),
        ce: (e, t) => new CustomEvent(e, t)
    }, c = e => Promise.resolve(e), r = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof (new CSSStyleSheet).replace
        } catch (e) {
        }
        return !1
    })(), i = new WeakMap, a = e => "sc-" + e.o, u = {}, f = e => "object" == (e = typeof e) || "function" === e,
    $ = (e, t, ...n) => {
        let l = null, s = !1, o = !1, c = [];
        const r = t => {
            for (let n = 0; n < t.length; n++) l = t[n], Array.isArray(l) ? r(l) : null != l && "boolean" != typeof l && ((s = "function" != typeof e && !f(l)) && (l += ""), s && o ? c[c.length - 1].i += l : c.push(s ? d(null, l) : l), o = s)
        };
        if (r(n), t) {
            const e = t.className || t.class;
            e && (t.class = "object" != typeof e ? e : Object.keys(e).filter((t => e[t])).join(" "))
        }
        const i = d(e, null);
        return i.u = t, c.length > 0 && (i.$ = c), i
    }, d = (e, t) => ({t: 0, h: e, i: t, p: null, $: null, u: null}), y = {}, h = (e, t, n, l, s, o) => {
        if (n !== l) {
            let c = z(e, t);
            if (t.toLowerCase(), "class" === t) {
                const t = e.classList, s = m(n), o = m(l);
                t.remove(...s.filter((e => e && !o.includes(e)))), t.add(...o.filter((e => e && !s.includes(e))))
            } else {
                const r = f(l);
                if ((c || r && null !== l) && !s) try {
                    if (e.tagName.includes("-")) e[t] = l; else {
                        let s = null == l ? "" : l;
                        "list" === t ? c = !1 : null != n && e[t] == s || (e[t] = s)
                    }
                } catch (e) {
                }
                null == l || !1 === l ? !1 === l && "" !== e.getAttribute(t) || e.removeAttribute(t) : (!c || 4 & o || s) && !r && e.setAttribute(t, l = !0 === l ? "" : l)
            }
        }
    }, p = /\s/, m = e => e ? e.split(p) : [], w = (e, t, n, l) => {
        const s = 11 === t.p.nodeType && t.p.host ? t.p.host : t.p, o = e && e.u || u, c = t.u || u;
        for (l in o) l in c || h(s, l, o[l], void 0, n, t.t);
        for (l in c) h(s, l, o[l], c[l], n, t.t)
    }, b = (t, n, l) => {
        let o, c, r = n.$[l], i = 0;
        if (null !== r.i) o = r.p = s.createTextNode(r.i); else if (o = r.p = s.createElement(r.h), w(null, r, !1), null != e && o["s-si"] !== e && o.classList.add(o["s-si"] = e), r.$) for (i = 0; i < r.$.length; ++i) c = b(t, r, i), c && o.appendChild(c);
        return o
    }, S = (e, n, l, s, o, c) => {
        let r, i = e;
        for (i.shadowRoot && i.tagName === t && (i = i.shadowRoot); o <= c; ++o) s[o] && (r = b(null, l, o), r && (s[o].p = r, i.insertBefore(r, n)))
    }, g = (e, t, n, l) => {
        for (; t <= n; ++t) (l = e[t]) && l.p.remove()
    }, j = (e, t) => e.h === t.h, k = (e, t) => {
        const n = t.p = e.p, l = e.$, s = t.$, o = t.i;
        null === o ? (w(e, t, !1), null !== l && null !== s ? ((e, t, n, l) => {
            let s, o = 0, c = 0, r = t.length - 1, i = t[0], a = t[r], u = l.length - 1, f = l[0], $ = l[u];
            for (; o <= r && c <= u;) null == i ? i = t[++o] : null == a ? a = t[--r] : null == f ? f = l[++c] : null == $ ? $ = l[--u] : j(i, f) ? (k(i, f), i = t[++o], f = l[++c]) : j(a, $) ? (k(a, $), a = t[--r], $ = l[--u]) : j(i, $) ? (k(i, $), e.insertBefore(i.p, a.p.nextSibling), i = t[++o], $ = l[--u]) : j(a, f) ? (k(a, f), e.insertBefore(a.p, i.p), a = t[--r], f = l[++c]) : (s = b(t && t[c], n, c), f = l[++c], s && i.p.parentNode.insertBefore(s, i.p));
            o > r ? S(e, null == l[u + 1] ? null : l[u + 1].p, n, l, c, u) : c > u && g(t, o, r)
        })(n, l, t, s) : null !== s ? (null !== e.i && (n.textContent = ""), S(n, null, t, s, 0, s.length - 1)) : null !== l && g(l, 0, l.length - 1)) : e.i !== o && (n.data = o)
    }, v = e => N(e).m, C = (e, t) => {
        t && !e.S && t["s-p"] && t["s-p"].push(new Promise((t => e.S = t)))
    }, M = (e, t) => {
        if (e.t |= 16, !(4 & e.t)) return C(e, e.g), ee((() => O(e, t)));
        e.t |= 512
    }, O = (e, t) => {
        const n = e.j;
        return T(void 0, (() => P(e, n, t)))
    }, P = async (e, t, n) => {
        const l = e.m, o = l["s-rc"];
        n && (e => {
            const t = e.k, n = e.m, l = t.t, o = ((e, t) => {
                let n = a(t), l = I.get(n);
                if (e = 11 === e.nodeType ? e : s, l) if ("string" == typeof l) {
                    let t, o = i.get(e = e.head || e);
                    o || i.set(e, o = new Set), o.has(n) || (t = s.createElement("style"), t.innerHTML = l, e.insertBefore(t, e.querySelector("link")), o && o.add(n))
                } else e.adoptedStyleSheets.includes(l) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, l]);
                return n
            })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
            10 & l && (n["s-sc"] = o, n.classList.add(o + "-h"))
        })(e);
        x(e, t), o && (o.map((e => e())), l["s-rc"] = void 0);
        {
            const t = l["s-p"], n = () => E(e);
            0 === t.length ? n() : (Promise.all(t).then(n), e.t |= 4, t.length = 0)
        }
    }, x = (n, l) => {
        try {
            l = l.render(), n.t &= -17, n.t |= 2, ((n, l) => {
                const s = n.m, o = n.k, c = n.v || d(null, null), r = (e => e && e.h === y)(l) ? l : $(null, null, l);
                t = s.tagName, o.C && (r.u = r.u || {}, o.C.map((([e, t]) => r.u[t] = s[e]))), r.h = null, r.t |= 4, n.v = r, r.p = c.p = s.shadowRoot || s, e = s["s-sc"], k(c, r)
            })(n, l)
        } catch (e) {
            B(e, n.m)
        }
        return null
    }, E = e => {
        const t = e.m, n = e.g;
        64 & e.t || (e.t |= 64, U(t), e.M(t), n || L()), e.S && (e.S(), e.S = void 0), 512 & e.t && Z((() => M(e, !1))), e.t &= -517
    }, L = () => {
        U(s.documentElement), Z((() => (e => {
            const t = o.ce("appload", {detail: {namespace: "ionicons"}});
            return e.dispatchEvent(t), t
        })(l)))
    }, R = (e, t, n) => {
        if (e && e[t]) try {
            return e[t](n)
        } catch (e) {
            B(e)
        }
    }, T = (e, t) => e && e.then ? e.then(t) : t(), U = e => e.classList.add("hydrated"), A = (e, t, n) => {
        if (t.O) {
            e.watchers && (t.P = e.watchers);
            const l = Object.entries(t.O), s = e.prototype;
            if (l.map((([e, [l]]) => {
                (31 & l || 2 & n && 32 & l) && Object.defineProperty(s, e, {
                    get() {
                        return ((e, t) => N(this).L.get(t))(0, e)
                    }, set(n) {
                        ((e, t, n, l) => {
                            const s = N(e), o = s.m, c = s.L.get(t), r = s.t, i = s.j;
                            if (n = ((e, t) => null == e || f(e) ? e : 4 & t ? "false" !== e && ("" === e || !!e) : 1 & t ? e + "" : e)(n, l.O[t][0]), !(8 & r && void 0 !== c || n === c) && (s.L.set(t, n), i)) {
                                if (l.P && 128 & r) {
                                    const e = l.P[t];
                                    e && e.map((e => {
                                        try {
                                            i[e](n, c, t)
                                        } catch (e) {
                                            B(e, o)
                                        }
                                    }))
                                }
                                2 == (18 & r) && M(s, !1)
                            }
                        })(this, e, n, t)
                    }, configurable: !0, enumerable: !0
                })
            })), 1 & n) {
                const n = new Map;
                s.attributeChangedCallback = function (e, t, l) {
                    o.jmp((() => {
                        const t = n.get(e);
                        this[t] = (null !== l || "boolean" != typeof this[t]) && l
                    }))
                }, e.observedAttributes = l.filter((([e, t]) => 15 & t[0])).map((([e, l]) => {
                    const s = l[1] || e;
                    return n.set(s, e), 512 & l[0] && t.C.push([e, s]), s
                }))
            }
        }
        return e
    }, H = e => {
        R(e, "connectedCallback")
    }, W = (e, t = {}) => {
        const n = [], c = t.exclude || [], i = l.customElements, u = s.head, f = u.querySelector("meta[charset]"),
            $ = s.createElement("style"), d = [];
        let y, h = !0;
        Object.assign(o, t), o.l = new URL(t.resourcesUrl || "./", s.baseURI).href, e.map((e => e[1].map((t => {
            const l = {t: t[0], o: t[1], O: t[2], R: t[3]};
            l.O = t[2], l.C = [], l.P = {};
            const s = l.o, u = class extends HTMLElement {
                constructor(e) {
                    super(e), _(e = this, l), 1 & l.t && e.attachShadow({mode: "open"})
                }

                connectedCallback() {
                    y && (clearTimeout(y), y = null), h ? d.push(this) : o.jmp((() => (e => {
                        if (0 == (1 & o.t)) {
                            const t = N(e), n = t.k, l = () => {
                            };
                            if (1 & t.t) H(t.j); else {
                                t.t |= 1;
                                {
                                    let n = e;
                                    for (; n = n.parentNode || n.host;) if (n["s-p"]) {
                                        C(t, t.g = n);
                                        break
                                    }
                                }
                                n.O && Object.entries(n.O).map((([t, [n]]) => {
                                    if (31 & n && e.hasOwnProperty(t)) {
                                        const n = e[t];
                                        delete e[t], e[t] = n
                                    }
                                })), (async (e, t, n, l, s) => {
                                    if (0 == (32 & t.t)) {
                                        {
                                            if (t.t |= 32, (s = G(n)).then) {
                                                const e = () => {
                                                };
                                                s = await s, e()
                                            }
                                            s.isProxied || (n.P = s.watchers, A(s, n, 2), s.isProxied = !0);
                                            const e = () => {
                                            };
                                            t.t |= 8;
                                            try {
                                                new s(t)
                                            } catch (e) {
                                                B(e)
                                            }
                                            t.t &= -9, t.t |= 128, e(), H(t.j)
                                        }
                                        if (s.style) {
                                            let e = s.style;
                                            const t = a(n);
                                            if (!I.has(t)) {
                                                const l = () => {
                                                };
                                                ((e, t, n) => {
                                                    let l = I.get(e);
                                                    r && n ? (l = l || new CSSStyleSheet, l.replace(t)) : l = t, I.set(e, l)
                                                })(t, e, !!(1 & n.t)), l()
                                            }
                                        }
                                    }
                                    const o = t.g, c = () => M(t, !0);
                                    o && o["s-rc"] ? o["s-rc"].push(c) : c()
                                })(0, t, n)
                            }
                            l()
                        }
                    })(this)))
                }

                disconnectedCallback() {
                    o.jmp((() => (() => {
                        0 == (1 & o.t) && R(N(this).j, "disconnectedCallback")
                    })()))
                }

                componentOnReady() {
                    return N(this).T
                }
            };
            l.U = e[0], c.includes(s) || i.get(s) || (n.push(s), i.define(s, A(u, l, 1)))
        })))), $.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}", $.setAttribute("data-styles", ""), u.insertBefore($, f ? f.nextSibling : u.firstChild), h = !1, d.length ? d.map((e => e.connectedCallback())) : o.jmp((() => y = setTimeout(L, 30)))
    }, q = e => {
        const t = new URL(e, o.l);
        return t.origin !== l.location.origin ? t.href : t.pathname
    }, F = new WeakMap, N = e => F.get(e), V = (e, t) => F.set(t.j = e, t), _ = (e, t) => {
        const n = {t: 0, m: e, k: t, L: new Map};
        return n.T = new Promise((e => n.M = e)), e["s-p"] = [], e["s-rc"] = [], F.set(e, n)
    }, z = (e, t) => t in e, B = (e, t) => (0, console.error)(e, t), D = new Map, G = e => {
        const t = e.o.replace(/-/g, "_"), n = e.U, l = D.get(n);
        return l ? l[t] : import(`./${n}.entry.js`).then((e => (D.set(n, e), e[t])), B)
    }, I = new Map, J = [], K = [], Q = (e, t) => l => {
        e.push(l), n || (n = !0, t && 4 & o.t ? Z(Y) : o.raf(Y))
    }, X = e => {
        for (let t = 0; t < e.length; t++) try {
            e[t](performance.now())
        } catch (e) {
            B(e)
        }
        e.length = 0
    }, Y = () => {
        X(J), X(K), (n = J.length > 0) && o.raf(Y)
    }, Z = e => c().then(e), ee = Q(K, !0);
export {y as H, v as a, W as b, q as g, $ as h, c as p, V as r}
