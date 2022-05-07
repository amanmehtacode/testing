"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [443],
  {
    66194: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return A;
        },
      });
      var r,
        i,
        a,
        l,
        o,
        c,
        s,
        u = n(67294),
        m = n(94578),
        d = n(73935),
        f =
          "undefined" != typeof document
            ? document.getElementById("portal")
            : null,
        p = (function (e) {
          function t() {
            var t;
            return (
              ((t = e.call(this) || this).componentDidMount = function () {
                f.appendChild(t.el);
              }),
              (t.componentWillUnmount = function () {
                f.removeChild(t.el);
              }),
              (t.el =
                "undefined" != typeof document
                  ? document.createElement("div")
                  : null),
              t
            );
          }
          return (
            (0, m.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props.children;
              return this.el ? d.createPortal(e, this.el) : null;
            }),
            t
          );
        })(u.Component),
        g = n(68275),
        h = n(2346),
        E = n(94136),
        v = n(20908),
        y = n(6125),
        w = n(97026),
        x = n(81880),
        k = n(19692),
        _ = n(18040),
        b = n(52068),
        F = n(35866),
        L = n(4126),
        P = k.default.li.withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-ppew1r-0",
        })(function (e) {
          return (0,
          k.css)(["", " position:relative;z-index:1;padding:", " 0;", " ", " &:last-child{", " ", "}"], F.F, e.theme.padS, _.Fs.medium(r || (r = (0, x.Z)(["\n\t\t\tpadding: ", " 0 0;\n\t\t"])), e.theme.padM), _.Fs.large(i || (i = (0, x.Z)(["\n\t\t\tpadding: ", " 0 0;\n\t\t"])), e.theme.padL), _.Fs.medium(a || (a = (0, x.Z)(["\n\t\t\t\tpadding: ", " 0;\n\t\t\t"])), e.theme.padM), _.Fs.large(l || (l = (0, x.Z)(["\n\t\t\t\tpadding: ", " 0;\n\t\t\t"])), e.theme.padL));
        }),
        Z = (0, k.default)(g.ZP).withConfig({
          displayName: "styles__ProjectLink",
          componentId: "sc-ppew1r-1",
        })(function (e) {
          return (0, k.css)(["display:block;"]);
        }),
        C = k.default.h2.withConfig({
          displayName: "styles__Title",
          componentId: "sc-ppew1r-2",
        })(function (e) {
          return (0,
          k.css)(["", " color:transparent;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:", ";transition:", ";", ""], b.g_, e.theme.white, e.theme.ease, _.Fs.large(o || (o = (0, x.Z)(["\n\t\t\t-webkit-text-stroke-width: 2px;\n\n\t\t\t&:hover,\n\t\t\t&.hovering {\n\t\t\t\tcolor: ", ";\n\t\t\t\t-webkit-text-stroke-color: ", ";\n\t\t\t}\n\t\t"])), e.theme.bc1, e.theme.bc1));
        }),
        H = (0, k.default)(_.P).withConfig({
          displayName: "styles__Excerpt",
          componentId: "sc-ppew1r-3",
        })(function (e) {
          return (0,
          k.css)(["color:", ";", ""], e.theme.white, _.Fs.large(c || (c = (0, x.Z)(["\n\t\t\tmax-width: calc(8.333vw * 6 - 3.6rem);\n\t\t\tmargin: 0 auto;\n\t\t"]))));
        }),
        N = k.default.ul.withConfig({
          displayName: "styles__Tags",
          componentId: "sc-ppew1r-4",
        })(function (e) {
          return (0,
          k.css)(["display:flex;flex-flow:column;align-items:center;justify-content:center;margin:1.2rem 0;", ""], _.Fs.large(s || (s = (0, x.Z)(["\n\t\t\tflex-flow: row;\n\t\t"]))));
        }),
        I = k.default.li.withConfig({
          displayName: "styles__Tag",
          componentId: "sc-ppew1r-5",
        })(function (e) {
          return (0,
          k.css)(["", " color:", ";text-transform:uppercase;padding:0 1.2rem;"], b.Qs, e.theme.bc1);
        }),
        M = (0, k.default)(L.E.div).withConfig({
          displayName: "styles__FeaturedImage",
          componentId: "sc-ppew1r-6",
        })(function (e) {
          return (0,
          k.css)(["position:fixed;z-index:4;top:0;left:0;right:0;bottom:0;z-index:0;opacity:0;pointer-events:none;.gatsby-image-wrapper{width:100%;height:100%;filter:grayscale(100%) brightness(0.6);}"]);
        }),
        R = (0, k.default)(L.E.div).withConfig({
          displayName: "styles__TransitionImage",
          componentId: "sc-ppew1r-7",
        })(function (e) {
          return (0,
          k.css)(["position:fixed;z-index:999;top:0;left:0;right:0;bottom:0;z-index:0;opacity:0;pointer-events:none;.gatsby-image-wrapper{width:100%;height:100%;}"]);
        }),
        A = u.forwardRef(function (e, t) {
          var n = e.title,
            r = e.excerpt,
            i = e.tags,
            a = e.slug,
            l = e.image,
            o = e.onEnter,
            c = e.showImageMobile,
            s = e.onLeave,
            m = e.linkPath,
            d = e.isHome,
            f = (0, w.Gc)(),
            x = (0, u.useState)(!1),
            k = x[0],
            _ = x[1],
            b = (0, u.useState)(!1),
            F = b[0],
            L = b[1],
            A = {
              to: "" + m + a,
              className: "cursor-link",
              exit: { length: 0.5, delay: 0.75 },
              entry: { length: 0.5, delay: 0 },
            };
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              P,
              { ref: t },
              u.createElement(
                Z,
                A,
                u.createElement(
                  C,
                  {
                    onClick: function () {
                      L(!0), _(!1);
                      (0, h.z)(function () {
                        E.f.service = a;
                      });
                    },
                    "data-project": n,
                    onMouseEnter: function (e) {
                      _(!0), o(e);
                    },
                    onMouseLeave: function (e) {
                      _(!1), s(e);
                    },
                  },
                  n
                ),
                i &&
                  u.createElement(
                    N,
                    null,
                    i.map(function (e) {
                      var t = e.tag;
                      return u.createElement(I, { key: t }, t);
                    })
                  ),
                r && u.createElement(H, { small: !0 }, r)
              )
            ),
            u.createElement(
              p,
              null,
              u.createElement(
                v.M,
                null,
                (k || (c && !F)) &&
                  u.createElement(
                    M,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                    },
                    u.createElement(y.G, {
                      objectFit: "cover",
                      image: l.data,
                      alt: l.alt,
                    })
                  )
              )
            ),
            !d &&
              u.createElement(
                u.Fragment,
                null,
                f.large
                  ? null
                  : u.createElement(
                      g.kX,
                      null,
                      u.createElement(
                        v.M,
                        null,
                        F &&
                          u.createElement(
                            R,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                            },
                            u.createElement(y.G, {
                              objectFit: "cover",
                              image: l.data,
                              alt: l.alt,
                            })
                          )
                      )
                    )
              )
          );
        });
    },
    96347: function (e, t, n) {
      n.r(t);
      var r = n(67294),
        i = n(69788),
        a = n(66194),
        l = n(32884),
        o = n(12276),
        c = n(64131),
        s = n(44441),
        u = n.n(s),
        m = n(97026),
        d = n(2346),
        f = n(93075),
        p = n(88706),
        g = n(96514),
        h = n(3631),
        E = (0, i.default)({
          resolved: {},
          chunkName: function () {
            return "Filter";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!n.m[t];
          },
          importAsync: function () {
            return n.e(652).then(n.bind(n, 70570));
          },
          requireAsync: function (e) {
            var t = this,
              n = this.resolve(e);
            return (
              (this.resolved[n] = !1),
              this.importAsync(e).then(function (e) {
                return (t.resolved[n] = !0), e;
              })
            );
          },
          requireSync: function e(t) {
            var r = this.resolve(t);
            return n(r);
          },
          resolve: function e() {
            return 70570;
          },
        }),
        v = 0,
        y = function (e) {
          var t = e.linkPath,
            n = e.isHome,
            i = e.data,
            s = e.services,
            f = e.useFilter,
            y = void 0 === f || f,
            w = e.children,
            x = e.useOriginalPosition,
            k = void 0 !== x && x,
            _ = (0, m.Gc)(),
            b = (0, r.useRef)(),
            F = (0, r.useRef)(),
            L = (0, r.useRef)(),
            P = (0, r.useRef)(),
            Z = (0, r.useRef)(),
            C = (0, r.useRef)(),
            H = (0, r.useContext)(g.$),
            N = (0, r.useRef)([]),
            I = (0, r.useState)(-1),
            M = I[0],
            R = I[1],
            A = (0, r.useRef)(-1),
            j = (0, r.useState)("100vh"),
            S = j[0],
            z = j[1],
            D = function (e) {
              document.querySelectorAll("[data-project]").forEach(function (t) {
                t.dataset.project === e.target.dataset.project &&
                  t.classList.add("hovering");
              });
            },
            O = function (e) {
              document.querySelectorAll("[data-project]").forEach(function (t) {
                t.dataset.project === e.target.dataset.project &&
                  t.classList.remove("hovering");
              });
            },
            q = (0, r.useState)(i),
            G = q[0],
            T = q[1];
          return (
            (0, r.useEffect)(function () {
              var e = Z.current,
                t = F.current,
                n = e.clientHeight,
                r = t.clientHeight,
                i = window.innerHeight,
                a = n - r + i,
                o = 0,
                c = [];
              function s() {
                if (
                  ((n = e.clientHeight),
                  (r = t.clientHeight),
                  (a = n - r + i),
                  k)
                ) {
                  Math.abs(r - n);
                  z(n + "px"),
                    (o = C.current.offsetTop - (window.innerHeight - r) / 2);
                } else document.body.style.height = a + "px";
                c = N.current.map(function (e) {
                  return e.offsetTop;
                });
              }
              v++,
                new (u())("Alternate Gothic").load(null, 2e4).then(function () {
                  s();
                }),
                window.addEventListener("resize", s),
                s();
              var m = [L.current, Z.current, P.current],
                d = H.scroll,
                f = !1,
                p = function (e, t, a, l, s) {
                  void 0 === s && (s = !1),
                    (d = H.scroll),
                    C.current && (d += o);
                  var u = Math.abs(H.scroll) - 0.05 * window.innerHeight;
                  if ((u + window.innerHeight > o && u < o + 1.1 * n) || s) {
                    var p = 1e5,
                      g = A.current;
                    if (!s)
                      for (var h = 0; h < c.length; h++) {
                        var E = c[h] + d,
                          v = Math.abs(E - r / 2);
                        if (v > p) {
                          if (p >= r / 4) {
                            h == c.length - 1 && (g = -1);
                            continue;
                          }
                          h - 1 != A.current && (g = h - 1);
                          break;
                        }
                        if (h == c.length - 1) {
                          g = h != A.current && v < r / 4 ? h : -1;
                          break;
                        }
                        p = v;
                      }
                    g != A.current && (R(g), (A.current = g)),
                      m.forEach(function (e) {
                        e.style.transform = "translate3d(0px," + d + "px,0px)";
                      }),
                      (f = !1);
                  } else
                    -1 != M && R(-1),
                      (A.current = -1),
                      f ||
                        ((f = !0),
                        m.forEach(function (e) {
                          e.style.transform =
                            "translate3d(0px, " + 10 * i + "px, 0px)";
                        }));
                };
              return (
                p(0, 0, 0, 0, !0),
                l.ZP.ticker.add(p),
                function () {
                  l.ZP.ticker.remove(p),
                    0 == --v && (document.body.style.height = "auto"),
                    window.removeEventListener("resize", s);
                }
              );
            }, []),
            r.createElement(
              r.Fragment,
              null,
              k && r.createElement("div", { style: { height: S }, ref: C }),
              r.createElement(
                h.gM,
                { ref: b },
                r.createElement(
                  h.pY,
                  null,
                  r.createElement(
                    h.qF,
                    { top: !0 },
                    r.createElement(
                      h.PO,
                      null,
                      r.createElement(
                        h.Re,
                        { ref: L },
                        w,
                        G.map(function (e) {
                          var i = e.id,
                            l = e.title,
                            o = e.slug,
                            c = e.excerpt,
                            s = e.tags,
                            u = e.image;
                          return r.createElement(a.Z, {
                            onEnter: D,
                            onLeave: O,
                            key: i + c,
                            title: l,
                            slug: o,
                            excerpt: c,
                            tags: s,
                            image: u,
                            linkPath: t,
                            isHome: n,
                          });
                        })
                      )
                    )
                  ),
                  r.createElement(
                    h.qF,
                    { center: !0, ref: F },
                    r.createElement(
                      h.PO,
                      null,
                      r.createElement(
                        h.Re,
                        { ref: Z },
                        w,
                        G.map(function (e, i) {
                          var l = e.id,
                            o = e.title,
                            c = e.slug,
                            s = e.excerpt,
                            u = e.tags,
                            m = e.image;
                          return r.createElement(a.Z, {
                            key: l + o,
                            onEnter: D,
                            onLeave: O,
                            title: o,
                            slug: c,
                            excerpt: s,
                            tags: u,
                            image: m,
                            linkPath: t,
                            isHome: n,
                            showImageMobile: !!_.medium && i === M,
                            ref: function (e) {
                              return (N.current[i] = e);
                            },
                          });
                        })
                      )
                    )
                  ),
                  r.createElement(
                    h.qF,
                    { bottom: !0 },
                    r.createElement(
                      h.PO,
                      null,
                      r.createElement(
                        h.Re,
                        { ref: P },
                        w,
                        G.map(function (e) {
                          var i = e.id,
                            l = e.title,
                            o = e.slug,
                            c = e.excerpt,
                            s = e.tags,
                            u = e.image;
                          return r.createElement(a.Z, {
                            key: i + i,
                            onEnter: D,
                            onLeave: O,
                            title: l,
                            slug: o,
                            image: u,
                            excerpt: c,
                            tags: s,
                            linkPath: t,
                            isHome: n,
                          });
                        })
                      )
                    )
                  )
                )
              ),
              _.large
                ? null
                : r.createElement(
                    r.Fragment,
                    null,
                    !n &&
                      r.createElement(
                        h.sG,
                        { isHome: n },
                        r.createElement(c.Z, null)
                      )
                  ),
              y &&
                r.createElement(
                  h.Nz,
                  {
                    className: "cursor-trigger",
                    onClick: (0, d.aD)(function (e) {
                      !(function (e) {
                        (p.L.isOpen = !0), e.stopPropagation();
                      })(e);
                    }),
                  },
                  r.createElement(o.Z, { type: "filter" }),
                  r.createElement("span", null, "Filter")
                ),
              !n &&
                r.createElement(E, { data: i, setFilteredData: T, services: s })
            )
          );
        };
      t.default = (0, f.Pi)(y);
    },
  },
]);
//# sourceMappingURL=parts-Starwars-dd0aa0b6baf5195022ad.js.map
