/*! For license information please see cfd6cea686d86c82243904a55a1ce47f4cf330ca-2ba909e61039ba369f14.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [19],
  {
    44441: function (e) {
      !(function () {
        function t(e, t) {
          document.addEventListener
            ? e.addEventListener("scroll", t, !1)
            : e.attachEvent("scroll", t);
        }
        function n(e) {
          (this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(e)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function r(e, t) {
          e.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            t +
            ";";
        }
        function i(e) {
          var t = e.a.offsetWidth,
            n = t + 100;
          return (
            (e.f.style.width = n + "px"),
            (e.c.scrollLeft = n),
            (e.b.scrollLeft = e.b.scrollWidth + 100),
            e.g !== t && ((e.g = t), !0)
          );
        }
        function o(e, n) {
          function r() {
            var e = o;
            i(e) && e.a.parentNode && n(e.g);
          }
          var o = e;
          t(e.b, r), t(e.c, r), i(e);
        }
        function a(e, t) {
          var n = t || {};
          (this.family = e),
            (this.style = n.style || "normal"),
            (this.weight = n.weight || "normal"),
            (this.stretch = n.stretch || "normal");
        }
        var s = null,
          l = null,
          c = null,
          u = null;
        function f() {
          return null === u && (u = !!document.fonts), u;
        }
        function d() {
          if (null === c) {
            var e = document.createElement("div");
            try {
              e.style.font = "condensed 100px sans-serif";
            } catch (t) {}
            c = "" !== e.style.font;
          }
          return c;
        }
        function p(e, t) {
          return [e.style, e.weight, d() ? e.stretch : "", "100px", t].join(
            " "
          );
        }
        (a.prototype.load = function (e, t) {
          var i = this,
            a = e || "BESbswy",
            c = 0,
            u = t || 3e3,
            d = new Date().getTime();
          return new Promise(function (e, t) {
            if (
              f() &&
              !(function () {
                if (null === l)
                  if (f() && /Apple/.test(window.navigator.vendor)) {
                    var e =
                      /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        window.navigator.userAgent
                      );
                    l = !!e && 603 > parseInt(e[1], 10);
                  } else l = !1;
                return l;
              })()
            ) {
              var h = new Promise(function (e, t) {
                  !(function n() {
                    new Date().getTime() - d >= u
                      ? t(Error(u + "ms timeout exceeded"))
                      : document.fonts
                          .load(p(i, '"' + i.family + '"'), a)
                          .then(function (t) {
                            1 <= t.length ? e() : setTimeout(n, 25);
                          }, t);
                  })();
                }),
                g = new Promise(function (e, t) {
                  c = setTimeout(function () {
                    t(Error(u + "ms timeout exceeded"));
                  }, u);
                });
              Promise.race([g, h]).then(function () {
                clearTimeout(c), e(i);
              }, t);
            } else
              !(function (e) {
                document.body
                  ? e()
                  : document.addEventListener
                  ? document.addEventListener("DOMContentLoaded", function t() {
                      document.removeEventListener("DOMContentLoaded", t), e();
                    })
                  : document.attachEvent("onreadystatechange", function t() {
                      ("interactive" != document.readyState &&
                        "complete" != document.readyState) ||
                        (document.detachEvent("onreadystatechange", t), e());
                    });
              })(function () {
                function l() {
                  var t;
                  (t =
                    (-1 != m && -1 != v) ||
                    (-1 != m && -1 != y) ||
                    (-1 != v && -1 != y)) &&
                    ((t = m != v && m != y && v != y) ||
                      (null === s &&
                        ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          window.navigator.userAgent
                        )),
                        (s =
                          !!t &&
                          (536 > parseInt(t[1], 10) ||
                            (536 === parseInt(t[1], 10) &&
                              11 >= parseInt(t[2], 10))))),
                      (t =
                        s &&
                        ((m == x && v == x && y == x) ||
                          (m == b && v == b && y == b) ||
                          (m == w && v == w && y == w)))),
                    (t = !t)),
                    t &&
                      (T.parentNode && T.parentNode.removeChild(T),
                      clearTimeout(c),
                      e(i));
                }
                var f = new n(a),
                  h = new n(a),
                  g = new n(a),
                  m = -1,
                  v = -1,
                  y = -1,
                  x = -1,
                  b = -1,
                  w = -1,
                  T = document.createElement("div");
                (T.dir = "ltr"),
                  r(f, p(i, "sans-serif")),
                  r(h, p(i, "serif")),
                  r(g, p(i, "monospace")),
                  T.appendChild(f.a),
                  T.appendChild(h.a),
                  T.appendChild(g.a),
                  document.body.appendChild(T),
                  (x = f.a.offsetWidth),
                  (b = h.a.offsetWidth),
                  (w = g.a.offsetWidth),
                  (function e() {
                    if (new Date().getTime() - d >= u)
                      T.parentNode && T.parentNode.removeChild(T),
                        t(Error(u + "ms timeout exceeded"));
                    else {
                      var n = document.hidden;
                      (!0 !== n && void 0 !== n) ||
                        ((m = f.a.offsetWidth),
                        (v = h.a.offsetWidth),
                        (y = g.a.offsetWidth),
                        l()),
                        (c = setTimeout(e, 50));
                    }
                  })(),
                  o(f, function (e) {
                    (m = e), l();
                  }),
                  r(f, p(i, '"' + i.family + '",sans-serif')),
                  o(h, function (e) {
                    (v = e), l();
                  }),
                  r(h, p(i, '"' + i.family + '",serif')),
                  o(g, function (e) {
                    (y = e), l();
                  }),
                  r(g, p(i, '"' + i.family + '",monospace'));
              });
          });
        }),
          (e.exports = a);
      })();
    },
    82932: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return ht;
        },
      });
      var r,
        i,
        o,
        a,
        s,
        l,
        c,
        u,
        f,
        d,
        p,
        h,
        g,
        m,
        v,
        y,
        x,
        b,
        w,
        T,
        E,
        C,
        k,
        S,
        O,
        L,
        _,
        A,
        M = 1,
        P = [],
        B = [],
        R = Date.now,
        N = R(),
        D = 0,
        I = 1,
        z = function (e) {
          return e;
        },
        W = function (e) {
          return (
            p(e)[0] || (Z(e) ? console.warn("Element not found:", e) : null)
          );
        },
        F = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        H = function () {
          return "undefined" != typeof window;
        },
        U = function () {
          return r || (H() && (r = window.gsap) && r.registerPlugin && r);
        },
        q = function (e) {
          return !!~c.indexOf(e);
        },
        V = function (e, t) {
          return ~P.indexOf(e) && P[P.indexOf(e) + 1][t];
        },
        K = function (e, t) {
          var n = t.s,
            r = t.sc,
            i = B.indexOf(e),
            o = r === Te.sc ? 1 : 2;
          return (
            !~i && (i = B.push(e) - 1),
            B[i + o] ||
              (B[i + o] =
                V(e, n) ||
                (q(e)
                  ? r
                  : function (t) {
                      return arguments.length ? (e[n] = t) : e[n];
                    }))
          );
        },
        j = function (e) {
          return (
            V(e, "getBoundingClientRect") ||
            (q(e)
              ? function () {
                  return (
                    (ct.width = o.innerWidth), (ct.height = o.innerHeight), ct
                  );
                }
              : function () {
                  return ke(e);
                })
          );
        },
        X = function (e, t) {
          var n = t.s,
            r = t.d2,
            i = t.d,
            a = t.a;
          return (n = "scroll" + r) && (a = V(e, n))
            ? a() - j(e)()[i]
            : q(e)
            ? (l[n] || s[n]) -
              (o["inner" + r] || s["client" + r] || l["client" + r])
            : e[n] - e["offset" + r];
        },
        Y = function (e, t) {
          for (var n = 0; n < E.length; n += 3)
            (!t || ~t.indexOf(E[n + 1])) && e(E[n], E[n + 1], E[n + 2]);
        },
        Z = function (e) {
          return "string" == typeof e;
        },
        $ = function (e) {
          return "function" == typeof e;
        },
        G = function (e) {
          return "number" == typeof e;
        },
        J = function (e) {
          return "object" == typeof e;
        },
        Q = function (e) {
          return $(e) && e();
        },
        ee = function (e, t) {
          return function () {
            var n = Q(e),
              r = Q(t);
            return function () {
              Q(n), Q(r);
            };
          };
        },
        te = function (e, t, n) {
          return e && e.progress(t ? 0 : 1) && n && e.pause();
        },
        ne = function (e, t) {
          var n = t(e);
          n && n.totalTime && (e.callbackAnimation = n);
        },
        re = Math.abs,
        ie = "scrollLeft",
        oe = "scrollTop",
        ae = "left",
        se = "top",
        le = "right",
        ce = "bottom",
        ue = "width",
        fe = "height",
        de = "Right",
        pe = "Left",
        he = "Top",
        ge = "Bottom",
        me = "padding",
        ve = "margin",
        ye = "Width",
        xe = "Height",
        be = "px",
        we = {
          s: ie,
          p: ae,
          p2: pe,
          os: le,
          os2: de,
          d: ue,
          d2: ye,
          a: "x",
          sc: function (e) {
            return arguments.length
              ? o.scrollTo(e, Te.sc())
              : o.pageXOffset ||
                  a.scrollLeft ||
                  s.scrollLeft ||
                  l.scrollLeft ||
                  0;
          },
        },
        Te = {
          s: oe,
          p: se,
          p2: he,
          os: ce,
          os2: ge,
          d: fe,
          d2: xe,
          a: "y",
          op: we,
          sc: function (e) {
            return arguments.length
              ? o.scrollTo(we.sc(), e)
              : o.pageYOffset || a.scrollTop || s.scrollTop || l.scrollTop || 0;
          },
        },
        Ee = function (e) {
          return o.getComputedStyle(e);
        },
        Ce = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        ke = function (e, t) {
          var n =
              t &&
              "matrix(1, 0, 0, 1, 0, 0)" !== Ee(e)[x] &&
              r
                .to(e, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                })
                .progress(1),
            i = e.getBoundingClientRect();
          return n && n.progress(0).kill(), i;
        },
        Se = function (e, t) {
          var n = t.d2;
          return e["offset" + n] || e["client" + n] || 0;
        },
        Oe = function (e) {
          var t,
            n = [],
            r = e.labels,
            i = e.duration();
          for (t in r) n.push(r[t] / i);
          return n;
        },
        Le = function (e) {
          var t = r.utils.snap(e),
            n =
              Array.isArray(e) &&
              e.slice(0).sort(function (e, t) {
                return e - t;
              });
          return n
            ? function (e, r) {
                var i;
                if (!r) return t(e);
                if (r > 0) {
                  for (e -= 1e-4, i = 0; i < n.length; i++)
                    if (n[i] >= e) return n[i];
                  return n[i - 1];
                }
                for (i = n.length, e += 1e-4; i--; ) if (n[i] <= e) return n[i];
                return n[0];
              }
            : function (n, r) {
                var i = t(n);
                return !r || Math.abs(i - n) < 0.001 || i - n < 0 == r < 0
                  ? i
                  : t(r < 0 ? n - e : n + e);
              };
        },
        _e = function (e, t, n, r) {
          return n.split(",").forEach(function (n) {
            return e(t, n, r);
          });
        },
        Ae = function (e, t, n) {
          return e.addEventListener(t, n, { passive: !0 });
        },
        Me = function (e, t, n) {
          return e.removeEventListener(t, n);
        },
        Pe = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        Be = { toggleActions: "play", anticipatePin: 0 },
        Re = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        Ne = function (e, t) {
          if (Z(e)) {
            var n = e.indexOf("="),
              r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n &&
              (e.indexOf("%") > n && (r *= t / 100), (e = e.substr(0, n - 1))),
              (e =
                r +
                (e in Re
                  ? Re[e] * t
                  : ~e.indexOf("%")
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0));
          }
          return e;
        },
        De = function (e, t, n, r, i, o, s, c) {
          var u = i.startColor,
            f = i.endColor,
            d = i.fontSize,
            p = i.indent,
            h = i.fontWeight,
            g = a.createElement("div"),
            m = q(n) || "fixed" === V(n, "pinType"),
            v = -1 !== e.indexOf("scroller"),
            y = m ? l : n,
            x = -1 !== e.indexOf("start"),
            b = x ? u : f,
            w =
              "border-color:" +
              b +
              ";font-size:" +
              d +
              ";color:" +
              b +
              ";font-weight:" +
              h +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (w += "position:" + ((v || c) && m ? "fixed;" : "absolute;")),
            (v || c || !m) &&
              (w += (r === Te ? le : ce) + ":" + (o + parseFloat(p)) + "px;"),
            s &&
              (w +=
                "box-sizing:border-box;text-align:left;width:" +
                s.offsetWidth +
                "px;"),
            (g._isStart = x),
            g.setAttribute(
              "class",
              "gsap-marker-" + e + (t ? " marker-" + t : "")
            ),
            (g.style.cssText = w),
            (g.innerText = t || 0 === t ? e + "-" + t : e),
            y.children[0] ? y.insertBefore(g, y.children[0]) : y.appendChild(g),
            (g._offset = g["offset" + r.op.d2]),
            Ie(g, 0, r, x),
            g
          );
        },
        Ie = function (e, t, n, i) {
          var o = { display: "block" },
            a = n[i ? "os2" : "p2"],
            s = n[i ? "p2" : "os2"];
          (e._isFlipped = i),
            (o[n.a + "Percent"] = i ? -100 : 0),
            (o[n.a] = i ? "1px" : 0),
            (o["border" + a + ye] = 1),
            (o["border" + s + ye] = 0),
            (o[n.p] = t + "px"),
            r.set(e, o);
        },
        ze = [],
        We = {},
        Fe = function () {
          return R() - D > 20 && nt();
        },
        He = function () {
          var e = R();
          D !== e ? (nt(), D || Ye("scrollStart"), (D = e)) : d || (d = f(nt));
        },
        Ue = function () {
          return !v && !S && !a.fullscreenElement && u.restart(!0);
        },
        qe = {},
        Ve = [],
        Ke = [],
        je = function (e) {
          var t,
            n = r.ticker.frame,
            a = [],
            s = 0;
          if (_ !== n || M) {
            for (Ge(); s < Ke.length; s += 4)
              (t = o.matchMedia(Ke[s]).matches) !== Ke[s + 3] &&
                ((Ke[s + 3] = t),
                t ? a.push(s) : Ge(1, Ke[s]) || ($(Ke[s + 2]) && Ke[s + 2]()));
            for ($e(), s = 0; s < a.length; s++)
              (t = a[s]), (L = Ke[t]), (Ke[t + 2] = Ke[t + 1](e));
            (L = 0), i && Qe(0, 1), (_ = n), Ye("matchMedia");
          }
        },
        Xe = function e() {
          return Me(ht, "scrollEnd", e) || Qe(!0);
        },
        Ye = function (e) {
          return (
            (qe[e] &&
              qe[e].map(function (e) {
                return e();
              })) ||
            Ve
          );
        },
        Ze = [],
        $e = function (e) {
          for (var t = 0; t < Ze.length; t += 5)
            (e && Ze[t + 4] !== e) ||
              ((Ze[t].style.cssText = Ze[t + 1]),
              Ze[t].getBBox && Ze[t].setAttribute("transform", Ze[t + 2] || ""),
              (Ze[t + 3].uncache = 1));
        },
        Ge = function (e, t) {
          var n;
          for (b = 0; b < ze.length; b++)
            (n = ze[b]), (t && n.media !== t) || (e ? n.kill(1) : n.revert());
          t && $e(t), t || Ye("revert");
        },
        Je = function () {
          return B.forEach(function (e) {
            return "function" == typeof e && (e.rec = 0);
          });
        },
        Qe = function (e, t) {
          if (!D || e) {
            A = !0;
            var n = Ye("refreshInit");
            C && ht.sort(),
              t || Ge(),
              ze.forEach(function (e) {
                return e.refresh();
              }),
              n.forEach(function (e) {
                return e && e.render && e.render(-1);
              }),
              Je(),
              u.pause(),
              (A = !1),
              Ye("refresh");
          } else Ae(ht, "scrollEnd", Xe);
        },
        et = 0,
        tt = 1,
        nt = function () {
          if (!A) {
            var e = ze.length,
              t = R(),
              n = t - N >= 50,
              r = e && ze[0].scroll();
            if (
              ((tt = et > r ? -1 : 1),
              (et = r),
              n &&
                (D && !y && t - D > 200 && ((D = 0), Ye("scrollEnd")),
                (g = N),
                (N = t)),
              tt < 0)
            ) {
              for (b = e; b-- > 0; ) ze[b] && ze[b].update(0, n);
              tt = 1;
            } else for (b = 0; b < e; b++) ze[b] && ze[b].update(0, n);
            d = 0;
          }
        },
        rt = [
          ae,
          se,
          ce,
          le,
          "marginBottom",
          "marginRight",
          "marginTop",
          "marginLeft",
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "grid-column-start",
          "grid-column-end",
          "grid-row-start",
          "grid-row-end",
          "grid-area",
          "justify-self",
          "align-self",
          "place-self",
        ],
        it = rt.concat([
          ue,
          fe,
          "boxSizing",
          "maxWidth",
          "maxHeight",
          "position",
          ve,
          me,
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
        ]),
        ot = function (e, t, n, r) {
          if (e.parentNode !== t) {
            for (var i, o = rt.length, a = t.style, s = e.style; o--; )
              a[(i = rt[o])] = n[i];
            (a.position = "absolute" === n.position ? "absolute" : "relative"),
              "inline" === n.display && (a.display = "inline-block"),
              (s.bottom = s.right = "auto"),
              (a.overflow = "visible"),
              (a.boxSizing = "border-box"),
              (a.width = Se(e, we) + be),
              (a.height = Se(e, Te) + be),
              (a.padding = s.margin = s.top = s.left = "0"),
              st(r),
              (s.width = s.maxWidth = n.width),
              (s.height = s.maxHeight = n.height),
              (s.padding = n.padding),
              e.parentNode.insertBefore(t, e),
              t.appendChild(e);
          }
        },
        at = /([A-Z])/g,
        st = function (e) {
          if (e) {
            var t,
              n,
              i = e.t.style,
              o = e.length,
              a = 0;
            for ((e.t._gsap || r.core.getCache(e.t)).uncache = 1; a < o; a += 2)
              (n = e[a + 1]),
                (t = e[a]),
                n
                  ? (i[t] = n)
                  : i[t] &&
                    i.removeProperty(t.replace(at, "-$1").toLowerCase());
          }
        },
        lt = function (e) {
          for (var t = it.length, n = e.style, r = [], i = 0; i < t; i++)
            r.push(it[i], n[it[i]]);
          return (r.t = e), r;
        },
        ct = { left: 0, top: 0 },
        ut = function (e, t, n, r, i, o, a, c, u, f, d, p, h) {
          $(e) && (e = e(c)),
            Z(e) &&
              "max" === e.substr(0, 3) &&
              (e = p + ("=" === e.charAt(4) ? Ne("0" + e.substr(3), n) : 0));
          var g,
            m,
            v,
            y = h ? h.time() : 0;
          if ((h && h.seek(0), G(e))) a && Ie(a, n, r, !0);
          else {
            $(t) && (t = t(c));
            var x,
              b,
              w,
              T,
              E = e.split(" ");
            (v = W(t) || l),
              ((x = ke(v) || {}) && (x.left || x.top)) ||
                "none" !== Ee(v).display ||
                ((T = v.style.display),
                (v.style.display = "block"),
                (x = ke(v)),
                T ? (v.style.display = T) : v.style.removeProperty("display")),
              (b = Ne(E[0], x[r.d])),
              (w = Ne(E[1] || "0", n)),
              (e = x[r.p] - u[r.p] - f + b + i - w),
              a && Ie(a, w, r, n - w < 20 || (a._isStart && w > 20)),
              (n -= n - w);
          }
          if (o) {
            var C = e + n,
              k = o._isStart;
            (g = "scroll" + r.d2),
              Ie(
                o,
                C,
                r,
                (k && C > 20) ||
                  (!k && (d ? Math.max(l[g], s[g]) : o.parentNode[g]) <= C + 1)
              ),
              d &&
                ((u = ke(a)),
                d && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + be));
          }
          return (
            h &&
              v &&
              ((g = ke(v)),
              h.seek(p),
              (m = ke(v)),
              (h._caScrollDist = g[r.p] - m[r.p]),
              (e = (e / h._caScrollDist) * p)),
            h && h.seek(y),
            h ? e : Math.round(e)
          );
        },
        ft = /(?:webkit|moz|length|cssText|inset)/i,
        dt = function (e, t, n, i) {
          if (e.parentNode !== t) {
            var o,
              a,
              s = e.style;
            if (t === l) {
              for (o in ((e._stOrig = s.cssText), (a = Ee(e))))
                +o ||
                  ft.test(o) ||
                  !a[o] ||
                  "string" != typeof s[o] ||
                  "0" === o ||
                  (s[o] = a[o]);
              (s.top = n), (s.left = i);
            } else s.cssText = e._stOrig;
            (r.core.getCache(e).uncache = 1), t.appendChild(e);
          }
        },
        pt = function (e, t) {
          var n,
            i,
            o = K(e, t),
            a = "_scroll" + t.p2,
            s = function t(s, l, c, u, f) {
              var d = t.tween,
                p = l.onComplete,
                h = {};
              return (
                d && d.kill(),
                (n = Math.round(c)),
                (l[a] = s),
                (l.modifiers = h),
                (h[a] = function (e) {
                  return (
                    (e = F(o())) !== n && e !== i && Math.abs(e - n) > 2
                      ? (d.kill(), (t.tween = 0))
                      : (e = c + u * d.ratio + f * d.ratio * d.ratio),
                    (i = n),
                    (n = F(e))
                  );
                }),
                (l.onComplete = function () {
                  (t.tween = 0), p && p.call(d);
                }),
                (d = t.tween = r.to(e, l))
              );
            };
          return (
            (e[a] = o),
            e.addEventListener(
              "wheel",
              function () {
                return s.tween && s.tween.kill() && (s.tween = 0);
              },
              { passive: !0 }
            ),
            s
          );
        };
      we.op = Te;
      var ht = (function () {
        function e(t, n) {
          i ||
            e.register(r) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            this.init(t, n);
        }
        return (
          (e.prototype.init = function (t, n) {
            if (
              ((this.progress = this.start = 0), this.vars && this.kill(1), I)
            ) {
              var i,
                c,
                u,
                f,
                d,
                m,
                x,
                w,
                T,
                E,
                S,
                _,
                A,
                B,
                N,
                F,
                H,
                U,
                Y,
                Q,
                ee,
                ie,
                oe,
                ae,
                se,
                le,
                ce,
                ue,
                fe,
                de,
                pe,
                he,
                ge,
                xe,
                _e,
                Re,
                Ie,
                Fe,
                qe,
                Ve,
                Ke = (t = Ce(
                  Z(t) || G(t) || t.nodeType ? { trigger: t } : t,
                  Be
                )),
                je = Ke.onUpdate,
                Ye = Ke.toggleClass,
                Ze = Ke.id,
                $e = Ke.onToggle,
                Ge = Ke.onRefresh,
                Je = Ke.scrub,
                Qe = Ke.trigger,
                et = Ke.pin,
                nt = Ke.pinSpacing,
                rt = Ke.invalidateOnRefresh,
                it = Ke.anticipatePin,
                at = Ke.onScrubComplete,
                ft = Ke.onSnapComplete,
                ht = Ke.once,
                gt = Ke.snap,
                mt = Ke.pinReparent,
                vt = Ke.pinSpacer,
                yt = Ke.containerAnimation,
                xt = Ke.fastScrollEnd,
                bt = Ke.preventOverlaps,
                wt =
                  t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                    ? we
                    : Te,
                Tt = !Je && 0 !== Je,
                Et = W(t.scroller || o),
                Ct = r.core.getCache(Et),
                kt = q(Et),
                St =
                  "fixed" ===
                  ("pinType" in t
                    ? t.pinType
                    : V(Et, "pinType") || (kt && "fixed")),
                Ot = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                Lt = Tt && t.toggleActions.split(" "),
                _t = "markers" in t ? t.markers : Be.markers,
                At = kt ? 0 : parseFloat(Ee(Et)["border" + wt.p2 + ye]) || 0,
                Mt = this,
                Pt =
                  t.onRefreshInit &&
                  function () {
                    return t.onRefreshInit(Mt);
                  },
                Bt = (function (e, t, n) {
                  var r = n.d,
                    i = n.d2,
                    a = n.a;
                  return (a = V(e, "getBoundingClientRect"))
                    ? function () {
                        return a()[r];
                      }
                    : function () {
                        return (t ? o["inner" + i] : e["client" + i]) || 0;
                      };
                })(Et, kt, wt),
                Rt = (function (e, t) {
                  return !t || ~P.indexOf(e)
                    ? j(e)
                    : function () {
                        return ct;
                      };
                })(Et, kt),
                Nt = 0,
                Dt = K(Et, wt);
              if (
                ((Mt.media = L),
                (it *= 45),
                (Mt.scroller = Et),
                (Mt.scroll = yt ? yt.time.bind(yt) : Dt),
                (f = Dt()),
                (Mt.vars = t),
                (n = n || t.animation),
                "refreshPriority" in t && (C = 1),
                (Ct.tweenScroll = Ct.tweenScroll || {
                  top: pt(Et, Te),
                  left: pt(Et, we),
                }),
                (Mt.tweenTo = i = Ct.tweenScroll[wt.p]),
                n &&
                  ((n.vars.lazy = !1),
                  n._initted ||
                    (!1 !== n.vars.immediateRender &&
                      !1 !== t.immediateRender &&
                      n.render(0, !0, !0)),
                  (Mt.animation = n.pause()),
                  (n.scrollTrigger = Mt),
                  (pe = G(Je) && Je) &&
                    (de = r.to(n, {
                      ease: "power3",
                      duration: pe,
                      onComplete: function () {
                        return at && at(Mt);
                      },
                    })),
                  (ue = 0),
                  Ze || (Ze = n.vars.id)),
                ze.push(Mt),
                gt &&
                  ((J(gt) && !gt.push) || (gt = { snapTo: gt }),
                  "scrollBehavior" in l.style &&
                    r.set(kt ? [l, s] : Et, { scrollBehavior: "auto" }),
                  (u = $(gt.snapTo)
                    ? gt.snapTo
                    : "labels" === gt.snapTo
                    ? (function (e) {
                        return function (t) {
                          return r.utils.snap(Oe(e), t);
                        };
                      })(n)
                    : "labelsDirectional" === gt.snapTo
                    ? ((Fe = n),
                      function (e, t) {
                        return Le(Oe(Fe))(e, t.direction);
                      })
                    : !1 !== gt.directional
                    ? function (e, t) {
                        return Le(gt.snapTo)(e, t.direction);
                      }
                    : r.utils.snap(gt.snapTo)),
                  (he = gt.duration || { min: 0.1, max: 2 }),
                  (he = J(he) ? h(he.min, he.max) : h(he, he)),
                  (ge = r
                    .delayedCall(gt.delay || pe / 2 || 0.1, function () {
                      if (
                        Math.abs(Mt.getVelocity()) < 10 &&
                        !y &&
                        Nt !== Dt()
                      ) {
                        var e = n && !Tt ? n.totalProgress() : Mt.progress,
                          t = ((e - fe) / (R() - g)) * 1e3 || 0,
                          o = r.utils.clamp(
                            -Mt.progress,
                            1 - Mt.progress,
                            (re(t / 2) * t) / 0.185
                          ),
                          a = Mt.progress + (!1 === gt.inertia ? 0 : o),
                          s = h(0, 1, u(a, Mt)),
                          l = Dt(),
                          c = Math.round(m + s * A),
                          f = gt,
                          d = f.onStart,
                          p = f.onInterrupt,
                          v = f.onComplete,
                          b = i.tween;
                        if (l <= x && l >= m && c !== l) {
                          if (b && !b._initted && b.data <= re(c - l)) return;
                          !1 === gt.inertia && (o = s - Mt.progress),
                            i(
                              c,
                              {
                                duration: he(
                                  re(
                                    (0.185 * Math.max(re(a - e), re(s - e))) /
                                      t /
                                      0.05 || 0
                                  )
                                ),
                                ease: gt.ease || "power3",
                                data: re(c - l),
                                onInterrupt: function () {
                                  return ge.restart(!0) && p && p(Mt);
                                },
                                onComplete: function () {
                                  (Nt = Dt()),
                                    (ue = fe =
                                      n && !Tt
                                        ? n.totalProgress()
                                        : Mt.progress),
                                    ft && ft(Mt),
                                    v && v(Mt);
                                },
                              },
                              l,
                              o * A,
                              c - l - o * A
                            ),
                            d && d(Mt, i.tween);
                        }
                      } else Mt.isActive && ge.restart(!0);
                    })
                    .pause())),
                Ze && (We[Ze] = Mt),
                (Qe = Mt.trigger = W(Qe || et)),
                (et = !0 === et ? Qe : W(et)),
                Z(Ye) && (Ye = { targets: Qe, className: Ye }),
                et &&
                  (!1 === nt ||
                    nt === ve ||
                    (nt = !(!nt && "flex" === Ee(et.parentNode).display) && me),
                  (Mt.pin = et),
                  !1 !== t.force3D && r.set(et, { force3D: !0 }),
                  (c = r.core.getCache(et)).spacer
                    ? (B = c.pinState)
                    : (vt &&
                        ((vt = W(vt)) &&
                          !vt.nodeType &&
                          (vt = vt.current || vt.nativeElement),
                        (c.spacerIsNative = !!vt),
                        vt && (c.spacerState = lt(vt))),
                      (c.spacer = H = vt || a.createElement("div")),
                      H.classList.add("pin-spacer"),
                      Ze && H.classList.add("pin-spacer-" + Ze),
                      (c.pinState = B = lt(et))),
                  (Mt.spacer = H = c.spacer),
                  (ce = Ee(et)),
                  (oe = ce[nt + wt.os2]),
                  (Y = r.getProperty(et)),
                  (Q = r.quickSetter(et, wt.a, be)),
                  ot(et, H, ce),
                  (F = lt(et))),
                _t &&
                  ((_ = J(_t) ? Ce(_t, Pe) : Pe),
                  (E = De("scroller-start", Ze, Et, wt, _, 0)),
                  (S = De("scroller-end", Ze, Et, wt, _, 0, E)),
                  (U = E["offset" + wt.op.d2]),
                  (w = De("start", Ze, Et, wt, _, U, 0, yt)),
                  (T = De("end", Ze, Et, wt, _, U, 0, yt)),
                  yt && (Ie = r.quickSetter([w, T], wt.a, be)),
                  St ||
                    (P.length && !0 === V(Et, "fixedMarkers")) ||
                    ((Ve = Ee((qe = kt ? l : Et)).position),
                    (qe.style.position =
                      "absolute" === Ve || "fixed" === Ve ? Ve : "relative"),
                    r.set([E, S], { force3D: !0 }),
                    (se = r.quickSetter(E, wt.a, be)),
                    (le = r.quickSetter(S, wt.a, be)))),
                yt)
              ) {
                var It = yt.vars.onUpdate,
                  zt = yt.vars.onUpdateParams;
                yt.eventCallback("onUpdate", function () {
                  Mt.update(0, 0, 1), It && It.apply(zt || []);
                });
              }
              (Mt.previous = function () {
                return ze[ze.indexOf(Mt) - 1];
              }),
                (Mt.next = function () {
                  return ze[ze.indexOf(Mt) + 1];
                }),
                (Mt.revert = function (e) {
                  var t = !1 !== e || !Mt.enabled,
                    r = v;
                  t !== Mt.isReverted &&
                    (t &&
                      (Mt.scroll.rec || (Mt.scroll.rec = Dt()),
                      (_e = Math.max(Dt(), Mt.scroll.rec || 0)),
                      (xe = Mt.progress),
                      (Re = n && n.progress())),
                    w &&
                      [w, T, E, S].forEach(function (e) {
                        return (e.style.display = t ? "none" : "block");
                      }),
                    t && (v = 1),
                    Mt.update(t),
                    (v = r),
                    et &&
                      (t
                        ? (function (e, t, n) {
                            st(n);
                            var r = e._gsap;
                            if (r.spacerIsNative) st(r.spacerState);
                            else if (e.parentNode === t) {
                              var i = t.parentNode;
                              i && (i.insertBefore(e, t), i.removeChild(t));
                            }
                          })(et, H, B)
                        : (!mt || !Mt.isActive) && ot(et, H, Ee(et), ae)),
                    (Mt.isReverted = t));
                }),
                (Mt.refresh = function (i, o) {
                  if ((!v && Mt.enabled) || o)
                    if (et && i && D) Ae(e, "scrollEnd", Xe);
                    else {
                      (v = 1),
                        de && de.pause(),
                        rt && n && n.progress(0).invalidate(),
                        Mt.isReverted || Mt.revert();
                      for (
                        var a,
                          s,
                          c,
                          u,
                          p,
                          h,
                          g,
                          y,
                          b,
                          C,
                          O = Bt(),
                          L = Rt(),
                          _ = yt ? yt.duration() : X(Et, wt),
                          M = 0,
                          P = 0,
                          R = t.end,
                          I = t.endTrigger || Qe,
                          z =
                            t.start ||
                            (0 !== t.start && Qe ? (et ? "0 0" : "0 100%") : 0),
                          U = t.pinnedContainer && W(t.pinnedContainer),
                          q = (Qe && Math.max(0, ze.indexOf(Mt))) || 0,
                          V = q;
                        V--;

                      )
                        (h = ze[V]).end || h.refresh(0, 1) || (v = 1),
                          !(g = h.pin) ||
                            (g !== Qe && g !== et) ||
                            h.isReverted ||
                            (C || (C = []), C.unshift(h), h.revert());
                      for (
                        $(z) && (z = z(Mt)),
                          m =
                            ut(
                              z,
                              Qe,
                              O,
                              wt,
                              Dt(),
                              w,
                              E,
                              Mt,
                              L,
                              At,
                              St,
                              _,
                              yt
                            ) || (et ? -0.001 : 0),
                          $(R) && (R = R(Mt)),
                          Z(R) &&
                            !R.indexOf("+=") &&
                            (~R.indexOf(" ")
                              ? (R = (Z(z) ? z.split(" ")[0] : "") + R)
                              : ((M = Ne(R.substr(2), O)),
                                (R = Z(z) ? z : m + M),
                                (I = Qe))),
                          x =
                            Math.max(
                              m,
                              ut(
                                R || (I ? "100% 0" : _),
                                I,
                                O,
                                wt,
                                Dt() + M,
                                T,
                                S,
                                Mt,
                                L,
                                At,
                                St,
                                _,
                                yt
                              )
                            ) || -0.001,
                          A = x - m || ((m -= 0.01) && 0.001),
                          M = 0,
                          V = q;
                        V--;

                      )
                        (g = (h = ze[V]).pin) &&
                          h.start - h._pinPush < m &&
                          !yt &&
                          ((a = h.end - h.start),
                          (g === Qe || g === U) && !G(z) && (M += a),
                          g === et && (P += a));
                      if (
                        ((m += M),
                        (x += M),
                        (Mt._pinPush = P),
                        w &&
                          M &&
                          (((a = {})[wt.a] = "+=" + M),
                          U && (a[wt.p] = "-=" + Dt()),
                          r.set([w, T], a)),
                        et)
                      )
                        (a = Ee(et)),
                          (u = wt === Te),
                          (c = Dt()),
                          (ee = parseFloat(Y(wt.a)) + P),
                          !_ &&
                            x > 1 &&
                            ((kt ? l : Et).style["overflow-" + wt.a] =
                              "scroll"),
                          ot(et, H, a),
                          (F = lt(et)),
                          (s = ke(et, !0)),
                          (y = St && K(Et, u ? we : Te)()),
                          nt &&
                            (((ae = [nt + wt.os2, A + P + be]).t = H),
                            (V = nt === me ? Se(et, wt) + A + P : 0) &&
                              ae.push(wt.d, V + be),
                            st(ae),
                            St && Dt(_e)),
                          St &&
                            (((p = {
                              top: s.top + (u ? c - m : y) + be,
                              left: s.left + (u ? y : c - m) + be,
                              boxSizing: "border-box",
                              position: "fixed",
                            }).width = p.maxWidth =
                              Math.ceil(s.width) + be),
                            (p.height = p.maxHeight = Math.ceil(s.height) + be),
                            (p.margin =
                              p.marginTop =
                              p.marginRight =
                              p.marginBottom =
                              p.marginLeft =
                                "0"),
                            (p.padding = a.padding),
                            (p.paddingTop = a.paddingTop),
                            (p.paddingRight = a.paddingRight),
                            (p.paddingBottom = a.paddingBottom),
                            (p.paddingLeft = a.paddingLeft),
                            (N = (function (e, t, n) {
                              for (
                                var r, i = [], o = e.length, a = n ? 8 : 0;
                                a < o;
                                a += 2
                              )
                                (r = e[a]), i.push(r, r in t ? t[r] : e[a + 1]);
                              return (i.t = e.t), i;
                            })(B, p, mt))),
                          n
                            ? ((b = n._initted),
                              k(1),
                              n.render(n.duration(), !0, !0),
                              (ie = Y(wt.a) - ee + A + P),
                              A !== ie && N.splice(N.length - 2, 2),
                              n.render(0, !0, !0),
                              b || n.invalidate(),
                              k(0))
                            : (ie = A);
                      else if (Qe && Dt() && !yt)
                        for (s = Qe.parentNode; s && s !== l; )
                          s._pinOffset &&
                            ((m -= s._pinOffset), (x -= s._pinOffset)),
                            (s = s.parentNode);
                      C &&
                        C.forEach(function (e) {
                          return e.revert(!1);
                        }),
                        (Mt.start = m),
                        (Mt.end = x),
                        (f = d = Dt()),
                        yt || (f < _e && Dt(_e), (Mt.scroll.rec = 0)),
                        Mt.revert(!1),
                        (v = 0),
                        n &&
                          Tt &&
                          n._initted &&
                          n.progress() !== Re &&
                          n.progress(Re, !0).render(n.time(), !0, !0),
                        xe !== Mt.progress &&
                          (n && !Tt && n.totalProgress(xe, !0),
                          (Mt.progress = xe),
                          Mt.update(0, 0, 1)),
                        et &&
                          nt &&
                          (H._pinOffset = Math.round(Mt.progress * ie)),
                        Ge && Ge(Mt);
                    }
                }),
                (Mt.getVelocity = function () {
                  return ((Dt() - d) / (R() - g)) * 1e3 || 0;
                }),
                (Mt.endAnimation = function () {
                  te(Mt.callbackAnimation),
                    n &&
                      (de
                        ? de.progress(1)
                        : n.paused()
                        ? Tt || te(n, Mt.direction < 0, 1)
                        : te(n, n.reversed()));
                }),
                (Mt.getTrailing = function (e) {
                  var t = ze.indexOf(Mt),
                    n =
                      Mt.direction > 0
                        ? ze.slice(0, t).reverse()
                        : ze.slice(t + 1);
                  return Z(e)
                    ? n.filter(function (t) {
                        return t.vars.preventOverlaps === e;
                      })
                    : n;
                }),
                (Mt.update = function (e, t, r) {
                  if (!yt || r || e) {
                    var o,
                      a,
                      s,
                      c,
                      u,
                      h,
                      y,
                      b = Mt.scroll(),
                      w = e ? 0 : (b - m) / A,
                      T = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                      C = Mt.progress;
                    if (
                      (t &&
                        ((d = f),
                        (f = yt ? Dt() : b),
                        gt &&
                          ((fe = ue), (ue = n && !Tt ? n.totalProgress() : T))),
                      it &&
                        !T &&
                        et &&
                        !v &&
                        !M &&
                        D &&
                        m < b + ((b - d) / (R() - g)) * it &&
                        (T = 1e-4),
                      T !== C && Mt.enabled)
                    ) {
                      if (
                        ((c =
                          (u =
                            (o = Mt.isActive = !!T && T < 1) !==
                            (!!C && C < 1)) || !!T != !!C),
                        (Mt.direction = T > C ? 1 : -1),
                        (Mt.progress = T),
                        c &&
                          !v &&
                          ((a = T && !C ? 0 : 1 === T ? 1 : 1 === C ? 2 : 3),
                          Tt &&
                            ((s =
                              (!u && "none" !== Lt[a + 1] && Lt[a + 1]) ||
                              Lt[a]),
                            (y =
                              n &&
                              ("complete" === s || "reset" === s || s in n)))),
                        bt &&
                          u &&
                          (y || Je || !n) &&
                          ($(bt)
                            ? bt(Mt)
                            : Mt.getTrailing(bt).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        Tt ||
                          (!de || v || M
                            ? n && n.totalProgress(T, !!v)
                            : ((de.vars.totalProgress = T),
                              de.invalidate().restart())),
                        et)
                      )
                        if ((e && nt && (H.style[nt + wt.os2] = oe), St)) {
                          if (c) {
                            if (
                              ((h =
                                !e && T > C && x + 1 > b && b + 1 >= X(Et, wt)),
                              mt)
                            )
                              if (e || (!o && !h)) dt(et, H);
                              else {
                                var k = ke(et, !0),
                                  S = b - m;
                                dt(
                                  et,
                                  l,
                                  k.top + (wt === Te ? S : 0) + be,
                                  k.left + (wt === Te ? 0 : S) + be
                                );
                              }
                            st(o || h ? N : F),
                              (ie !== A && T < 1 && o) ||
                                Q(ee + (1 !== T || h ? 0 : ie));
                          }
                        } else Q(ee + ie * T);
                      gt && !i.tween && !v && !M && ge.restart(!0),
                        Ye &&
                          (u || (ht && T && (T < 1 || !O))) &&
                          p(Ye.targets).forEach(function (e) {
                            return e.classList[o || ht ? "add" : "remove"](
                              Ye.className
                            );
                          }),
                        je && !Tt && !e && je(Mt),
                        c && !v
                          ? (Tt &&
                              (y &&
                                ("complete" === s
                                  ? n.pause().totalProgress(1)
                                  : "reset" === s
                                  ? n.restart(!0).pause()
                                  : "restart" === s
                                  ? n.restart(!0)
                                  : n[s]()),
                              je && je(Mt)),
                            (!u && O) ||
                              ($e && u && ne(Mt, $e),
                              Ot[a] && ne(Mt, Ot[a]),
                              ht && (1 === T ? Mt.kill(!1, 1) : (Ot[a] = 0)),
                              u ||
                                (Ot[(a = 1 === T ? 1 : 3)] && ne(Mt, Ot[a]))),
                            xt &&
                              !o &&
                              Math.abs(Mt.getVelocity()) >
                                (G(xt) ? xt : 2500) &&
                              (te(Mt.callbackAnimation),
                              de ? de.progress(1) : te(n, !T, 1)))
                          : Tt && je && !v && je(Mt);
                    }
                    if (le) {
                      var L = yt
                        ? (b / yt.duration()) * (yt._caScrollDist || 0)
                        : b;
                      se(L + (E._isFlipped ? 1 : 0)), le(L);
                    }
                    Ie && Ie((-b / yt.duration()) * (yt._caScrollDist || 0));
                  }
                }),
                (Mt.enable = function (t, n) {
                  Mt.enabled ||
                    ((Mt.enabled = !0),
                    Ae(Et, "resize", Ue),
                    Ae(Et, "scroll", He),
                    Pt && Ae(e, "refreshInit", Pt),
                    !1 !== t && ((Mt.progress = xe = 0), (f = d = Nt = Dt())),
                    !1 !== n && Mt.refresh());
                }),
                (Mt.getTween = function (e) {
                  return e && i ? i.tween : de;
                }),
                (Mt.disable = function (t, n) {
                  if (
                    Mt.enabled &&
                    (!1 !== t && Mt.revert(),
                    (Mt.enabled = Mt.isActive = !1),
                    n || (de && de.pause()),
                    (_e = 0),
                    c && (c.uncache = 1),
                    Pt && Me(e, "refreshInit", Pt),
                    ge &&
                      (ge.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                    !kt)
                  ) {
                    for (var r = ze.length; r--; )
                      if (ze[r].scroller === Et && ze[r] !== Mt) return;
                    Me(Et, "resize", Ue), Me(Et, "scroll", He);
                  }
                }),
                (Mt.kill = function (e, t) {
                  Mt.disable(e, t), de && de.kill(), Ze && delete We[Ze];
                  var r = ze.indexOf(Mt);
                  ze.splice(r, 1),
                    r === b && tt > 0 && b--,
                    (r = 0),
                    ze.forEach(function (e) {
                      return e.scroller === Mt.scroller && (r = 1);
                    }),
                    r || (Mt.scroll.rec = 0),
                    n &&
                      ((n.scrollTrigger = null),
                      e && n.render(-1),
                      t || n.kill()),
                    w &&
                      [w, T, E, S].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e);
                      }),
                    et &&
                      (c && (c.uncache = 1),
                      (r = 0),
                      ze.forEach(function (e) {
                        return e.pin === et && r++;
                      }),
                      r || (c.spacer = 0));
                }),
                Mt.enable(!1, !1),
                n && n.add && !A
                  ? r.delayedCall(0.01, function () {
                      return m || x || Mt.refresh();
                    }) &&
                    (A = 0.01) &&
                    (m = x = 0)
                  : Mt.refresh();
            } else this.update = this.refresh = this.kill = z;
          }),
          (e.register = function (t) {
            if (
              !i &&
              ((r = t || U()),
              H() &&
                window.document &&
                ((o = window),
                (a = document),
                (s = a.documentElement),
                (l = a.body)),
              r &&
                ((p = r.utils.toArray),
                (h = r.utils.clamp),
                (k = r.core.suppressOverwrites || z),
                r.core.globals("ScrollTrigger", e),
                l))
            ) {
              (f =
                o.requestAnimationFrame ||
                function (e) {
                  return setTimeout(e, 16);
                }),
                Ae(o, "wheel", He),
                (c = [o, a, s, l]),
                Ae(a, "scroll", He);
              var n,
                d = l.style,
                g = d.borderTopStyle;
              (d.borderTopStyle = "solid"),
                (n = ke(l)),
                (Te.m = Math.round(n.top + Te.sc()) || 0),
                (we.m = Math.round(n.left + we.sc()) || 0),
                g
                  ? (d.borderTopStyle = g)
                  : d.removeProperty("border-top-style"),
                (m = setInterval(Fe, 200)),
                r.delayedCall(0.5, function () {
                  return (M = 0);
                }),
                Ae(a, "touchcancel", z),
                Ae(l, "touchstart", z),
                _e(Ae, a, "pointerdown,touchstart,mousedown", function () {
                  return (y = 1);
                }),
                _e(Ae, a, "pointerup,touchend,mouseup", function () {
                  return (y = 0);
                }),
                (x = r.utils.checkPrefix("transform")),
                it.push(x),
                (i = R()),
                (u = r.delayedCall(0.2, Qe).pause()),
                (E = [
                  a,
                  "visibilitychange",
                  function () {
                    var e = o.innerWidth,
                      t = o.innerHeight;
                    a.hidden
                      ? ((w = e), (T = t))
                      : (w === e && T === t) || Ue();
                  },
                  a,
                  "DOMContentLoaded",
                  Qe,
                  o,
                  "load",
                  function () {
                    return D || Qe();
                  },
                  o,
                  "resize",
                  Ue,
                ]),
                Y(Ae);
            }
            return i;
          }),
          (e.defaults = function (e) {
            for (var t in e) Be[t] = e[t];
          }),
          (e.kill = function () {
            (I = 0),
              ze.slice(0).forEach(function (e) {
                return e.kill(1);
              });
          }),
          (e.config = function (e) {
            "limitCallbacks" in e && (O = !!e.limitCallbacks);
            var t = e.syncInterval;
            (t && clearInterval(m)) || ((m = t) && setInterval(Fe, t)),
              "autoRefreshEvents" in e &&
                (Y(Me) || Y(Ae, e.autoRefreshEvents || "none"),
                (S = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
          }),
          (e.scrollerProxy = function (e, t) {
            var n = W(e),
              r = B.indexOf(n),
              i = q(n);
            ~r && B.splice(r, i ? 6 : 2),
              i ? P.unshift(o, t, l, t, s, t) : P.unshift(n, t);
          }),
          (e.matchMedia = function (e) {
            var t, n, r, i, a;
            for (n in e)
              (r = Ke.indexOf(n)),
                (i = e[n]),
                (L = n),
                "all" === n
                  ? i()
                  : (t = o.matchMedia(n)) &&
                    (t.matches && (a = i()),
                    ~r
                      ? ((Ke[r + 1] = ee(Ke[r + 1], i)),
                        (Ke[r + 2] = ee(Ke[r + 2], a)))
                      : ((r = Ke.length),
                        Ke.push(n, i, a),
                        t.addListener
                          ? t.addListener(je)
                          : t.addEventListener("change", je)),
                    (Ke[r + 3] = t.matches)),
                (L = 0);
            return Ke;
          }),
          (e.clearMatchMedia = function (e) {
            e || (Ke.length = 0), (e = Ke.indexOf(e)) >= 0 && Ke.splice(e, 4);
          }),
          (e.isInViewport = function (e, t, n) {
            var r = (Z(e) ? W(e) : e).getBoundingClientRect(),
              i = r[n ? ue : fe] * t || 0;
            return n
              ? r.right - i > 0 && r.left + i < o.innerWidth
              : r.bottom - i > 0 && r.top + i < o.innerHeight;
          }),
          (e.positionInViewport = function (e, t, n) {
            Z(e) && (e = W(e));
            var r = e.getBoundingClientRect(),
              i = r[n ? ue : fe],
              a =
                null == t
                  ? i / 2
                  : t in Re
                  ? Re[t] * i
                  : ~t.indexOf("%")
                  ? (parseFloat(t) * i) / 100
                  : parseFloat(t) || 0;
            return n
              ? (r.left + a) / o.innerWidth
              : (r.top + a) / o.innerHeight;
          }),
          e
        );
      })();
      (ht.version = "3.8.0"),
        (ht.saveStyles = function (e) {
          return e
            ? p(e).forEach(function (e) {
                if (e && e.style) {
                  var t = Ze.indexOf(e);
                  t >= 0 && Ze.splice(t, 5),
                    Ze.push(
                      e,
                      e.style.cssText,
                      e.getBBox && e.getAttribute("transform"),
                      r.core.getCache(e),
                      L
                    );
                }
              })
            : Ze;
        }),
        (ht.revert = function (e, t) {
          return Ge(!e, t);
        }),
        (ht.create = function (e, t) {
          return new ht(e, t);
        }),
        (ht.refresh = function (e) {
          return e ? Ue() : (i || ht.register()) && Qe(!0);
        }),
        (ht.update = nt),
        (ht.clearScrollMemory = Je),
        (ht.maxScroll = function (e, t) {
          return X(e, t ? we : Te);
        }),
        (ht.getScrollFunc = function (e, t) {
          return K(W(e), t ? we : Te);
        }),
        (ht.getById = function (e) {
          return We[e];
        }),
        (ht.getAll = function () {
          return ze.slice(0);
        }),
        (ht.isScrolling = function () {
          return !!D;
        }),
        (ht.snapDirectional = Le),
        (ht.addEventListener = function (e, t) {
          var n = qe[e] || (qe[e] = []);
          ~n.indexOf(t) || n.push(t);
        }),
        (ht.removeEventListener = function (e, t) {
          var n = qe[e],
            r = n && n.indexOf(t);
          r >= 0 && n.splice(r, 1);
        }),
        (ht.batch = function (e, t) {
          var n,
            i = [],
            o = {},
            a = t.interval || 0.016,
            s = t.batchMax || 1e9,
            l = function (e, t) {
              var n = [],
                i = [],
                o = r
                  .delayedCall(a, function () {
                    t(n, i), (n = []), (i = []);
                  })
                  .pause();
              return function (e) {
                n.length || o.restart(!0),
                  n.push(e.trigger),
                  i.push(e),
                  s <= n.length && o.progress(1);
              };
            };
          for (n in t)
            o[n] =
              "on" === n.substr(0, 2) && $(t[n]) && "onRefreshInit" !== n
                ? l(0, t[n])
                : t[n];
          return (
            $(s) &&
              ((s = s()),
              Ae(ht, "refresh", function () {
                return (s = t.batchMax());
              })),
            p(e).forEach(function (e) {
              var t = {};
              for (n in o) t[n] = o[n];
              (t.trigger = e), i.push(ht.create(t));
            }),
            i
          );
        }),
        (ht.sort = function (e) {
          return ze.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  e.start -
                  (t.start + -1e6 * (t.vars.refreshPriority || 0))
                );
              }
          );
        }),
        U() && r.registerPlugin(ht);
    },
  },
]);
//# sourceMappingURL=cfd6cea686d86c82243904a55a1ce47f4cf330ca-2ba909e61039ba369f14.js.map
