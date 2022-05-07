(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [615, 443],
  {
    29634: function (t) {
      !(function () {
        "use strict";
        t.exports = {
          polyfill: function () {
            var t = window,
              e = document;
            if (
              !("scrollBehavior" in e.documentElement.style) ||
              !0 === t.__forceSmoothScrollPolyfill__
            ) {
              var n,
                r = t.HTMLElement || t.Element,
                o = {
                  scroll: t.scroll || t.scrollTo,
                  scrollBy: t.scrollBy,
                  elementScroll: r.prototype.scroll || a,
                  scrollIntoView: r.prototype.scrollIntoView,
                },
                i =
                  t.performance && t.performance.now
                    ? t.performance.now.bind(t.performance)
                    : Date.now,
                l =
                  ((n = t.navigator.userAgent),
                  new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n)
                    ? 1
                    : 0);
              (t.scroll = t.scrollTo =
                function () {
                  void 0 !== arguments[0] &&
                    (!0 !== s(arguments[0])
                      ? p.call(
                          t,
                          e.body,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : t.scrollX || t.pageXOffset,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : t.scrollY || t.pageYOffset
                        )
                      : o.scroll.call(
                          t,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : t.scrollX || t.pageXOffset,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : t.scrollY || t.pageYOffset
                        ));
                }),
                (t.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (s(arguments[0])
                      ? o.scrollBy.call(
                          t,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : 0,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : 0
                        )
                      : p.call(
                          t,
                          e.body,
                          ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                          ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                        ));
                }),
                (r.prototype.scroll = r.prototype.scrollTo =
                  function () {
                    if (void 0 !== arguments[0])
                      if (!0 !== s(arguments[0])) {
                        var t = arguments[0].left,
                          e = arguments[0].top;
                        p.call(
                          this,
                          this,
                          void 0 === t ? this.scrollLeft : ~~t,
                          void 0 === e ? this.scrollTop : ~~e
                        );
                      } else {
                        if (
                          "number" == typeof arguments[0] &&
                          void 0 === arguments[1]
                        )
                          throw new SyntaxError("Value could not be converted");
                        o.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : "object" != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                        );
                      }
                  }),
                (r.prototype.scrollBy = function () {
                  void 0 !== arguments[0] &&
                    (!0 !== s(arguments[0])
                      ? this.scroll({
                          left: ~~arguments[0].left + this.scrollLeft,
                          top: ~~arguments[0].top + this.scrollTop,
                          behavior: arguments[0].behavior,
                        })
                      : o.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left + this.scrollLeft
                            : ~~arguments[0] + this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top + this.scrollTop
                            : ~~arguments[1] + this.scrollTop
                        ));
                }),
                (r.prototype.scrollIntoView = function () {
                  if (!0 !== s(arguments[0])) {
                    var n = m(this),
                      r = n.getBoundingClientRect(),
                      i = this.getBoundingClientRect();
                    n !== e.body
                      ? (p.call(
                          this,
                          n,
                          n.scrollLeft + i.left - r.left,
                          n.scrollTop + i.top - r.top
                        ),
                        "fixed" !== t.getComputedStyle(n).position &&
                          t.scrollBy({
                            left: r.left,
                            top: r.top,
                            behavior: "smooth",
                          }))
                      : t.scrollBy({
                          left: i.left,
                          top: i.top,
                          behavior: "smooth",
                        });
                  } else
                    o.scrollIntoView.call(
                      this,
                      void 0 === arguments[0] || arguments[0]
                    );
                });
            }
            function a(t, e) {
              (this.scrollLeft = t), (this.scrollTop = e);
            }
            function s(t) {
              if (
                null === t ||
                "object" != typeof t ||
                void 0 === t.behavior ||
                "auto" === t.behavior ||
                "instant" === t.behavior
              )
                return !0;
              if ("object" == typeof t && "smooth" === t.behavior) return !1;
              throw new TypeError(
                "behavior member of ScrollOptions " +
                  t.behavior +
                  " is not a valid value for enumeration ScrollBehavior."
              );
            }
            function c(t, e) {
              return "Y" === e
                ? t.clientHeight + l < t.scrollHeight
                : "X" === e
                ? t.clientWidth + l < t.scrollWidth
                : void 0;
            }
            function u(e, n) {
              var r = t.getComputedStyle(e, null)["overflow" + n];
              return "auto" === r || "scroll" === r;
            }
            function f(t) {
              var e = c(t, "Y") && u(t, "Y"),
                n = c(t, "X") && u(t, "X");
              return e || n;
            }
            function m(t) {
              for (; t !== e.body && !1 === f(t); ) t = t.parentNode || t.host;
              return t;
            }
            function d(e) {
              var n,
                r,
                o,
                l,
                a = (i() - e.startTime) / 468;
              (l = a = a > 1 ? 1 : a),
                (n = 0.5 * (1 - Math.cos(Math.PI * l))),
                (r = e.startX + (e.x - e.startX) * n),
                (o = e.startY + (e.y - e.startY) * n),
                e.method.call(e.scrollable, r, o),
                (r === e.x && o === e.y) ||
                  t.requestAnimationFrame(d.bind(t, e));
            }
            function p(n, r, l) {
              var s,
                c,
                u,
                f,
                m = i();
              n === e.body
                ? ((s = t),
                  (c = t.scrollX || t.pageXOffset),
                  (u = t.scrollY || t.pageYOffset),
                  (f = o.scroll))
                : ((s = n), (c = n.scrollLeft), (u = n.scrollTop), (f = a)),
                d({
                  scrollable: s,
                  method: f,
                  startTime: m,
                  startX: c,
                  startY: u,
                  x: r,
                  y: l,
                });
            }
          },
        };
      })();
    },
    2065: function (t, e, n) {
      "use strict";
      var r = n(67294),
        o = n(29634),
        i = n.n(o),
        l = n(20908),
        a = n(4126),
        s = n(97026);
      e.Z = function (t) {
        var e = t.children,
          n = t.status,
          o = (0, s.Gc)(),
          c = "exiting" === n,
          u = {
            initial: c ? { opacity: 1 } : { opacity: 0 },
            animate: c ? { opacity: 0 } : { opacity: 1 },
            transition: { duration: 0.5, ease: "linear" },
          },
          f = (0, r.useState)(!1),
          m = f[0],
          d = f[1];
        return (
          (0, r.useEffect)(function () {
            return (
              i().polyfill(),
              o.large ||
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
              d(!0),
              function () {
                d(!1);
              }
            );
          }),
          r.createElement(
            l.M,
            null,
            r.createElement(
              a.E.div,
              Object.assign({}, u, {
                style: { pointerEvents: m ? "all" : "none" },
              }),
              e
            )
          )
        );
      };
    },
    64131: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var r = n(67294),
        o = n(19692),
        i = (n(18040), n(52068)),
        l = o.default.div.withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1oh0rbo-0",
        })(function (t) {
          return (0,
          o.css)(["", " position:relative;text-transform:uppercase;padding:0 0 6rem 0;&:before{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:2px;height:4.8rem;background:", ";}"], i.Qs, t.theme.bc1);
        });
      var a = function () {
        return r.createElement(l, null, "Scroll");
      };
    },
    66194: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return H;
        },
      });
      var r,
        o,
        i,
        l,
        a,
        s,
        c,
        u = n(67294),
        f = n(94578),
        m = n(73935),
        d =
          "undefined" != typeof document
            ? document.getElementById("portal")
            : null,
        p = (function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).componentDidMount = function () {
                d.appendChild(e.el);
              }),
              (e.componentWillUnmount = function () {
                d.removeChild(e.el);
              }),
              (e.el =
                "undefined" != typeof document
                  ? document.createElement("div")
                  : null),
              e
            );
          }
          return (
            (0, f.Z)(e, t),
            (e.prototype.render = function () {
              var t = this.props.children;
              return this.el ? m.createPortal(t, this.el) : null;
            }),
            e
          );
        })(u.Component),
        h = n(68275),
        g = n(2346),
        v = n(94136),
        y = n(20908),
        w = n(6125),
        E = n(97026),
        b = n(81880),
        x = n(19692),
        _ = n(18040),
        k = n(52068),
        C = n(35866),
        F = n(4126),
        N = x.default.li.withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-ppew1r-0",
        })(function (t) {
          return (0,
          x.css)(["", " position:relative;z-index:1;padding:", " 0;", " ", " &:last-child{", " ", "}"], C.F, t.theme.padS, _.Fs.medium(r || (r = (0, b.Z)(["\n\t\t\tpadding: ", " 0 0;\n\t\t"])), t.theme.padM), _.Fs.large(o || (o = (0, b.Z)(["\n\t\t\tpadding: ", " 0 0;\n\t\t"])), t.theme.padL), _.Fs.medium(i || (i = (0, b.Z)(["\n\t\t\t\tpadding: ", " 0;\n\t\t\t"])), t.theme.padM), _.Fs.large(l || (l = (0, b.Z)(["\n\t\t\t\tpadding: ", " 0;\n\t\t\t"])), t.theme.padL));
        }),
        I = (0, x.default)(h.ZP).withConfig({
          displayName: "styles__ProjectLink",
          componentId: "sc-ppew1r-1",
        })(function (t) {
          return (0, x.css)(["display:block;"]);
        }),
        Z = x.default.h2.withConfig({
          displayName: "styles__Title",
          componentId: "sc-ppew1r-2",
        })(function (t) {
          return (0,
          x.css)(["", " color:transparent;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:", ";transition:", ";", ""], k.g_, t.theme.white, t.theme.ease, _.Fs.large(a || (a = (0, b.Z)(["\n\t\t\t-webkit-text-stroke-width: 2px;\n\n\t\t\t&:hover,\n\t\t\t&.hovering {\n\t\t\t\tcolor: ", ";\n\t\t\t\t-webkit-text-stroke-color: ", ";\n\t\t\t}\n\t\t"])), t.theme.bc1, t.theme.bc1));
        }),
        S = (0, x.default)(_.P).withConfig({
          displayName: "styles__Excerpt",
          componentId: "sc-ppew1r-3",
        })(function (t) {
          return (0,
          x.css)(["color:", ";", ""], t.theme.white, _.Fs.large(s || (s = (0, b.Z)(["\n\t\t\tmax-width: calc(8.333vw * 6 - 3.6rem);\n\t\t\tmargin: 0 auto;\n\t\t"]))));
        }),
        j = x.default.ul.withConfig({
          displayName: "styles__Tags",
          componentId: "sc-ppew1r-4",
        })(function (t) {
          return (0,
          x.css)(["display:flex;flex-flow:column;align-items:center;justify-content:center;margin:1.2rem 0;", ""], _.Fs.large(c || (c = (0, b.Z)(["\n\t\t\tflex-flow: row;\n\t\t"]))));
        }),
        P = x.default.li.withConfig({
          displayName: "styles__Tag",
          componentId: "sc-ppew1r-5",
        })(function (t) {
          return (0,
          x.css)(["", " color:", ";text-transform:uppercase;padding:0 1.2rem;"], k.Qs, t.theme.bc1);
        }),
        L = (0, x.default)(F.E.div).withConfig({
          displayName: "styles__FeaturedImage",
          componentId: "sc-ppew1r-6",
        })(function (t) {
          return (0,
          x.css)(["position:fixed;z-index:4;top:0;left:0;right:0;bottom:0;z-index:0;opacity:0;pointer-events:none;.gatsby-image-wrapper{width:100%;height:100%;filter:grayscale(100%) brightness(0.6);}"]);
        }),
        T = (0, x.default)(F.E.div).withConfig({
          displayName: "styles__TransitionImage",
          componentId: "sc-ppew1r-7",
        })(function (t) {
          return (0,
          x.css)(["position:fixed;z-index:999;top:0;left:0;right:0;bottom:0;z-index:0;opacity:0;pointer-events:none;.gatsby-image-wrapper{width:100%;height:100%;}"]);
        }),
        H = u.forwardRef(function (t, e) {
          var n = t.title,
            r = t.excerpt,
            o = t.tags,
            i = t.slug,
            l = t.image,
            a = t.onEnter,
            s = t.showImageMobile,
            c = t.onLeave,
            f = t.linkPath,
            m = t.isHome,
            d = (0, E.Gc)(),
            b = (0, u.useState)(!1),
            x = b[0],
            _ = b[1],
            k = (0, u.useState)(!1),
            C = k[0],
            F = k[1],
            H = {
              to: "" + f + i,
              className: "cursor-link",
              exit: { length: 0.5, delay: 0.75 },
              entry: { length: 0.5, delay: 0 },
            };
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              N,
              { ref: e },
              u.createElement(
                I,
                H,
                u.createElement(
                  Z,
                  {
                    onClick: function () {
                      F(!0), _(!1);
                      (0, g.z)(function () {
                        v.f.service = i;
                      });
                    },
                    "data-project": n,
                    onMouseEnter: function (t) {
                      _(!0), a(t);
                    },
                    onMouseLeave: function (t) {
                      _(!1), c(t);
                    },
                  },
                  n
                ),
                o &&
                  u.createElement(
                    j,
                    null,
                    o.map(function (t) {
                      var e = t.tag;
                      return u.createElement(P, { key: e }, e);
                    })
                  ),
                r && u.createElement(S, { small: !0 }, r)
              )
            ),
            u.createElement(
              p,
              null,
              u.createElement(
                y.M,
                null,
                (x || (s && !C)) &&
                  u.createElement(
                    L,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                    },
                    u.createElement(w.G, {
                      objectFit: "cover",
                      image: l.data,
                      alt: l.alt,
                    })
                  )
              )
            ),
            !m &&
              u.createElement(
                u.Fragment,
                null,
                d.large
                  ? null
                  : u.createElement(
                      h.kX,
                      null,
                      u.createElement(
                        y.M,
                        null,
                        C &&
                          u.createElement(
                            T,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                            },
                            u.createElement(w.G, {
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
    96347: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(67294),
        o = n(69788),
        i = n(66194),
        l = n(32884),
        a = n(12276),
        s = n(64131),
        c = n(44441),
        u = n.n(c),
        f = n(97026),
        m = n(2346),
        d = n(93075),
        p = n(88706),
        h = n(96514),
        g = n(3631),
        v = (0, o.default)({
          resolved: {},
          chunkName: function () {
            return "Filter";
          },
          isReady: function (t) {
            var e = this.resolve(t);
            return !0 === this.resolved[e] && !!n.m[e];
          },
          importAsync: function () {
            return n.e(652).then(n.bind(n, 70570));
          },
          requireAsync: function (t) {
            var e = this,
              n = this.resolve(t);
            return (
              (this.resolved[n] = !1),
              this.importAsync(t).then(function (t) {
                return (e.resolved[n] = !0), t;
              })
            );
          },
          requireSync: function t(e) {
            var r = this.resolve(e);
            return n(r);
          },
          resolve: function t() {
            return 70570;
          },
        }),
        y = 0,
        w = function (t) {
          var e = t.linkPath,
            n = t.isHome,
            o = t.data,
            c = t.services,
            d = t.useFilter,
            w = void 0 === d || d,
            E = t.children,
            b = t.useOriginalPosition,
            x = void 0 !== b && b,
            _ = (0, f.Gc)(),
            k = (0, r.useRef)(),
            C = (0, r.useRef)(),
            F = (0, r.useRef)(),
            N = (0, r.useRef)(),
            I = (0, r.useRef)(),
            Z = (0, r.useRef)(),
            S = (0, r.useContext)(h.$),
            j = (0, r.useRef)([]),
            P = (0, r.useState)(-1),
            L = P[0],
            T = P[1],
            H = (0, r.useRef)(-1),
            M = (0, r.useState)("100vh"),
            O = M[0],
            q = M[1],
            z = function (t) {
              document.querySelectorAll("[data-project]").forEach(function (e) {
                e.dataset.project === t.target.dataset.project &&
                  e.classList.add("hovering");
              });
            },
            X = function (t) {
              document.querySelectorAll("[data-project]").forEach(function (e) {
                e.dataset.project === t.target.dataset.project &&
                  e.classList.remove("hovering");
              });
            },
            A = (0, r.useState)(o),
            R = A[0],
            Y = A[1];
          return (
            (0, r.useEffect)(function () {
              var t = I.current,
                e = C.current,
                n = t.clientHeight,
                r = e.clientHeight,
                o = window.innerHeight,
                i = n - r + o,
                a = 0,
                s = [];
              function c() {
                if (
                  ((n = t.clientHeight),
                  (r = e.clientHeight),
                  (i = n - r + o),
                  x)
                ) {
                  Math.abs(r - n);
                  q(n + "px"),
                    (a = Z.current.offsetTop - (window.innerHeight - r) / 2);
                } else document.body.style.height = i + "px";
                s = j.current.map(function (t) {
                  return t.offsetTop;
                });
              }
              y++,
                new (u())("Alternate Gothic").load(null, 2e4).then(function () {
                  c();
                }),
                window.addEventListener("resize", c),
                c();
              var f = [F.current, I.current, N.current],
                m = S.scroll,
                d = !1,
                p = function (t, e, i, l, c) {
                  void 0 === c && (c = !1),
                    (m = S.scroll),
                    Z.current && (m += a);
                  var u = Math.abs(S.scroll) - 0.05 * window.innerHeight;
                  if ((u + window.innerHeight > a && u < a + 1.1 * n) || c) {
                    var p = 1e5,
                      h = H.current;
                    if (!c)
                      for (var g = 0; g < s.length; g++) {
                        var v = s[g] + m,
                          y = Math.abs(v - r / 2);
                        if (y > p) {
                          if (p >= r / 4) {
                            g == s.length - 1 && (h = -1);
                            continue;
                          }
                          g - 1 != H.current && (h = g - 1);
                          break;
                        }
                        if (g == s.length - 1) {
                          h = g != H.current && y < r / 4 ? g : -1;
                          break;
                        }
                        p = y;
                      }
                    h != H.current && (T(h), (H.current = h)),
                      f.forEach(function (t) {
                        t.style.transform = "translate3d(0px," + m + "px,0px)";
                      }),
                      (d = !1);
                  } else
                    -1 != L && T(-1),
                      (H.current = -1),
                      d ||
                        ((d = !0),
                        f.forEach(function (t) {
                          t.style.transform =
                            "translate3d(0px, " + 10 * o + "px, 0px)";
                        }));
                };
              return (
                p(0, 0, 0, 0, !0),
                l.ZP.ticker.add(p),
                function () {
                  l.ZP.ticker.remove(p),
                    0 == --y && (document.body.style.height = "auto"),
                    window.removeEventListener("resize", c);
                }
              );
            }, []),
            r.createElement(
              r.Fragment,
              null,
              x && r.createElement("div", { style: { height: O }, ref: Z }),
              r.createElement(
                g.gM,
                { ref: k },
                r.createElement(
                  g.pY,
                  null,
                  r.createElement(
                    g.qF,
                    { top: !0 },
                    r.createElement(
                      g.PO,
                      null,
                      r.createElement(
                        g.Re,
                        { ref: F },
                        E,
                        R.map(function (t) {
                          var o = t.id,
                            l = t.title,
                            a = t.slug,
                            s = t.excerpt,
                            c = t.tags,
                            u = t.image;
                          return r.createElement(i.Z, {
                            onEnter: z,
                            onLeave: X,
                            key: o + s,
                            title: l,
                            slug: a,
                            excerpt: s,
                            tags: c,
                            image: u,
                            linkPath: e,
                            isHome: n,
                          });
                        })
                      )
                    )
                  ),
                  r.createElement(
                    g.qF,
                    { center: !0, ref: C },
                    r.createElement(
                      g.PO,
                      null,
                      r.createElement(
                        g.Re,
                        { ref: I },
                        E,
                        R.map(function (t, o) {
                          var l = t.id,
                            a = t.title,
                            s = t.slug,
                            c = t.excerpt,
                            u = t.tags,
                            f = t.image;
                          return r.createElement(i.Z, {
                            key: l + a,
                            onEnter: z,
                            onLeave: X,
                            title: a,
                            slug: s,
                            excerpt: c,
                            tags: u,
                            image: f,
                            linkPath: e,
                            isHome: n,
                            showImageMobile: !!_.medium && o === L,
                            ref: function (t) {
                              return (j.current[o] = t);
                            },
                          });
                        })
                      )
                    )
                  ),
                  r.createElement(
                    g.qF,
                    { bottom: !0 },
                    r.createElement(
                      g.PO,
                      null,
                      r.createElement(
                        g.Re,
                        { ref: N },
                        E,
                        R.map(function (t) {
                          var o = t.id,
                            l = t.title,
                            a = t.slug,
                            s = t.excerpt,
                            c = t.tags,
                            u = t.image;
                          return r.createElement(i.Z, {
                            key: o + o,
                            onEnter: z,
                            onLeave: X,
                            title: l,
                            slug: a,
                            image: u,
                            excerpt: s,
                            tags: c,
                            linkPath: e,
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
                        g.sG,
                        { isHome: n },
                        r.createElement(s.Z, null)
                      )
                  ),
              w &&
                r.createElement(
                  g.Nz,
                  {
                    className: "cursor-trigger",
                    onClick: (0, m.aD)(function (t) {
                      !(function (t) {
                        (p.L.isOpen = !0), t.stopPropagation();
                      })(t);
                    }),
                  },
                  r.createElement(a.Z, { type: "filter" }),
                  r.createElement("span", null, "Filter")
                ),
              !n &&
                r.createElement(v, { data: o, setFilteredData: Y, services: c })
            )
          );
        };
      e.default = (0, d.Pi)(w);
    },
    3631: function (t, e, n) {
      "use strict";
      n.d(e, {
        gM: function () {
          return f;
        },
        pY: function () {
          return m;
        },
        PO: function () {
          return d;
        },
        qF: function () {
          return p;
        },
        Re: function () {
          return h;
        },
        sG: function () {
          return g;
        },
        Nz: function () {
          return v;
        },
      });
      var r,
        o,
        i,
        l,
        a = n(81880),
        s = n(19692),
        c = n(18040),
        u = n(52068),
        f = (0, s.default)(c.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-3to0xi-0",
        })(function (t) {
          return (0,
          s.css)(["position:fixed;z-index:5;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;opacity:", ";transition:opacity 0.5s linear;", ""], t.isMenuOpen ? 0 : 1, t.badPerf && (0, s.css)(["position:relative;top:auto;right:auto;bottom:auto;left:auto;"]));
        }),
        m = s.default.div.withConfig({
          displayName: "styles__Sweater",
          componentId: "sc-3to0xi-1",
        })(function (t) {
          return (0,
          s.css)(["position:relative;perspective:50rem;transform-style:preserve-3d;"]);
        }),
        d = s.default.div.withConfig({
          displayName: "styles__FoldAlign",
          componentId: "sc-3to0xi-2",
        })(function (t) {
          return (0, s.css)(["width:100%;height:100%;"]);
        }),
        p = s.default.div.withConfig({
          displayName: "styles__Fold",
          componentId: "sc-3to0xi-3",
        })(function (t) {
          return (0,
          s.css)(["overflow:hidden;width:calc(100vw - 48px);height:calc(var(--vhs,1vh) * 80);transition:", ";pointer-events:none;", " ", " ", " ", ""], t.theme.ease, c.Fs.large(r || (r = (0, a.Z)(["\n            width: calc(66.666vw - 3.6rem);\n            height: calc(var(--vh, 1vh) * 80);\n        "]))), t.badPerf && (0, s.css)(["height:auto !important;"]), t.top && (0, s.css)(["background:transparent;position:absolute;transform-origin:bottom center;left:0;right:0;bottom:100%;transform-origin:bottom center;transform:rotateX(-90deg);", "{transform:translateY(100%);}"], d), t.bottom && (0, s.css)(["background:transparent;position:absolute;transform-origin:top center;right:0;left:0;top:100%;transform-origin:top center;transform:rotateX(90deg);", "{transform:translateY(-100%);}"], d));
        }),
        h = s.default.ul.withConfig({
          displayName: "styles__FoldContent",
          componentId: "sc-3to0xi-4",
        })(function (t) {
          return (0,
          s.css)(["text-align:center;margin:0 auto;pointer-events:all;will-change:transform;"]);
        }),
        g = s.default.div.withConfig({
          displayName: "styles__ScrollIndicatorPos",
          componentId: "sc-3to0xi-5",
        })(function (t) {
          return (0, s.css)(["position:fixed;bottom:0;left:6rem;"]);
        }),
        v = s.default.button.withConfig({
          displayName: "styles__FilterToggle",
          componentId: "sc-3to0xi-6",
        })(function (t) {
          return (0,
          s.css)(["position:fixed;z-index:10;left:0;bottom:0;display:flex;align-items:center;justify-content:center;background:", ";width:100%;height:4.8rem;padding:1.2rem;margin:0;cursor:pointer;", " svg{fill:none;stroke:", ";stroke-width:2px;width:1.6rem;height:1.6rem;", "}span{", " margin-left:0.6rem;color:", ";", "}"], t.theme.white, c.Fs.large(o || (o = (0, a.Z)(["\n\t\t\tleft: auto;\n\t\t\tright: 4.8rem;\n\t\t\tbottom: 4.8rem;\n\t\t\tbackground: transparent;\n\t\t\tjustify-content: flex-end;\n\t\t\theight: auto;\n\t\t"]))), t.theme.black, c.Fs.large(i || (i = (0, a.Z)(["\n\t\t\t\tstroke: ", ";\n\t\t\t\twidth: 2.4rem;\n\t\t\t\theight: 2.4rem;\n\t\t\t"])), t.theme.white), u.Qs, t.theme.black, c.Fs.large(l || (l = (0, a.Z)(["\n\t\t\t\tmargin-left: 1.2rem;\n\t\t\t\tcolor: ", ";\n\t\t\t"])), t.theme.white));
        });
    },
    80610: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return x;
        },
      });
      var r,
        o = n(67294),
        i = n(32884),
        l = n(82932),
        a = n(6125),
        s = n(2346),
        c = n(94136),
        u = n(81880),
        f = n(19692),
        m = n(25444),
        d = n(18040),
        p = n(52068),
        h = (0, f.default)(m.Link).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1ezn1qw-0",
        })(function (t) {
          return (0,
          f.css)(["position:relative;display:flex;flex-flow:column wrap;align-items:center;justify-content:center;overflow:hidden;min-height:36rem;", ""], d.Fs.medium(r || (r = (0, u.Z)(["\n\t\t\theight: 50vh;\n\t\t"]))));
        }),
        g = f.default.div.withConfig({
          displayName: "styles__Background",
          componentId: "sc-1ezn1qw-1",
        })(function (t) {
          return (0,
          f.css)(["position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0.4;transform:scale(1.2);filter:grayscale(100%);", " .gatsby-image-wrapper{width:100%;height:100%;filter:brightness(0.4);}"], t.isHidden && (0, f.css)(["opacity:0;"]));
        }),
        v = f.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-1ezn1qw-2",
        })(function (t) {
          return (0,
          f.css)(["position:relative;z-index:2;display:flex;flex-flow:column wrap;align-items:center;justify-content:center;width:100%;height:100%;padding:0 2.4rem;text-align:center;"]);
        }),
        y = f.default.h2.withConfig({
          displayName: "styles__Title",
          componentId: "sc-1ezn1qw-3",
        })(function (t) {
          return (0,
          f.css)(["", " color:transparent;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:", ";transition:", ";"], p.Iq, t.theme.white, t.theme.ease);
        }),
        w = (0, f.default)(d.P).withConfig({
          displayName: "styles__Excerpt",
          componentId: "sc-1ezn1qw-4",
        })(function (t) {
          return (0, f.css)(["color:", ";"], t.theme.white);
        }),
        E = f.default.ul.withConfig({
          displayName: "styles__Tags",
          componentId: "sc-1ezn1qw-5",
        })(function (t) {
          return (0,
          f.css)(["display:flex;flex-flow:column;align-items:center;justify-content:center;margin:1.2rem 0;"]);
        }),
        b = f.default.li.withConfig({
          displayName: "styles__Tag",
          componentId: "sc-1ezn1qw-6",
        })(function (t) {
          return (0,
          f.css)(["", " color:", ";text-transform:uppercase;padding:0 1.2rem;"], p.Qs, t.theme.bc1);
        });
      var x = function (t) {
        var e = t.title,
          n = t.excerpt,
          r = t.tags,
          u = t.slug,
          f = t.image,
          m = t.linkPath,
          d = t.isHome,
          p = (0, o.useRef)(),
          x = (0, o.useRef)(),
          _ = (0, o.useState)(!1),
          k = _[0],
          C = _[1],
          F = {
            onClick: function () {
              C(!0);
              (0, s.z)(function () {
                c.f.service = u;
              });
            },
            to: "" + m + (!d && u),
            className: "cursor-link",
            exit: { length: 1, delay: 0 },
            entry: { length: 1, delay: 0 },
          };
        return (
          (0, o.useEffect)(function () {
            i.ZP.registerPlugin(l.i);
            var t = setTimeout(function () {
              i.ZP.to(p.current, {
                opacity: 1,
                transform: "scale(1)",
                filter: "grayscale(0%)",
                ease: [0.8, 0, 0.2, 1],
                scrollTrigger: {
                  trigger: x.current,
                  start: "0% 50%",
                  end: "100% 50%",
                  scrub: !1,
                  toggleActions: "play reverse play reverse",
                },
              });
            }, 500);
            return function () {
              clearTimeout(t), l.i.refresh();
            };
          }, []),
          o.createElement(
            h,
            Object.assign({ ref: x }, F),
            o.createElement(
              g,
              { ref: p, isHidden: k },
              o.createElement(a.G, {
                objectFit: "cover",
                image: f.data,
                alt: f.alt,
              })
            ),
            o.createElement(
              v,
              null,
              o.createElement(y, { "data-project": e }, e),
              r &&
                o.createElement(
                  E,
                  null,
                  r.map(function (t) {
                    var e = t.tag;
                    return o.createElement(b, { key: e }, e);
                  })
                ),
              n && o.createElement(w, { small: !0 }, n)
            )
          )
        );
      };
    },
    50681: function (t, e, n) {
      "use strict";
      var r = n(67294),
        o = n(80610),
        i = n(69788),
        l = n(12276),
        a = n(88706),
        s = n(2346),
        c = n(51672),
        u = n(3631),
        f = (0, i.default)({
          resolved: {},
          chunkName: function () {
            return "parts-Starwars-Filter";
          },
          isReady: function (t) {
            var e = this.resolve(t);
            return !0 === this.resolved[e] && !!n.m[e];
          },
          importAsync: function () {
            return n.e(652).then(n.bind(n, 70570));
          },
          requireAsync: function (t) {
            var e = this,
              n = this.resolve(t);
            return (
              (this.resolved[n] = !1),
              this.importAsync(t).then(function (t) {
                return (e.resolved[n] = !0), t;
              })
            );
          },
          requireSync: function t(e) {
            var r = this.resolve(e);
            return n(r);
          },
          resolve: function t() {
            return 70570;
          },
        });
      function m(t) {
        var e = t.isHome,
          n = t.linkPath,
          i = t.data,
          m = t.useFilter,
          d = void 0 === m || m,
          p = t.children,
          h = (0, r.useState)(i),
          g = h[0],
          v = h[1];
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            c.g,
            null,
            p,
            g.map(function (t) {
              var i = t.id,
                l = t.title,
                a = t.slug,
                s = t.excerpt,
                c = t.tags,
                u = t.image;
              return r.createElement(o.Z, {
                key: i,
                title: l,
                slug: a,
                excerpt: s,
                tags: c,
                image: u,
                linkPath: n,
                isHome: e,
              });
            })
          ),
          d &&
            r.createElement(
              u.Nz,
              {
                className: "cursor-trigger",
                onClick: (0, s.aD)(function (t) {
                  !(function (t) {
                    (a.L.isOpen = !0), t.stopPropagation();
                  })(t);
                }),
              },
              r.createElement(l.Z, { type: "filter" }),
              r.createElement("span", null, "Filter")
            ),
          !e && r.createElement(f, { data: i, setFilteredData: v })
        );
      }
      e.Z = m;
    },
    51672: function (t, e, n) {
      "use strict";
      n.d(e, {
        g: function () {
          return i;
        },
      });
      var r = n(19692),
        o = n(18040),
        i = (0, r.default)(o.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-n5a8ky-0",
        })(function (t) {
          return (0, r.css)(["padding-bottom:", ";"], t.theme.padS);
        });
    },
    17409: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return k;
          },
        });
      var r,
        o,
        i,
        l,
        a = n(67294),
        s = n(99616),
        c = n(50681),
        u = n(96347),
        f = n(89344),
        m = n(35639),
        d = n(64131),
        p = n(97026),
        h = n(81880),
        g = n(19692),
        v = n(18040),
        y = (0, g.default)(v.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-com6qj-0",
        })(
          [
            "height:calc(var(--vhs,1vh) * 100);display:flex;flex-flow:column wrap;align-items:center;justify-content:center;padding:0 2.4rem;text-align:center;",
            " ",
            " .tilt{transform-style:preserve-3d;transform:perspective(100rem);}",
          ],
          v.Fs.medium(
            r ||
              (r = (0, h.Z)([
                "\n\t\t\theight: auto;\n\t\t\twidth: calc(8.333vw * 10);\n\t\t\tmargin: 0 8.333vw;\n\t\t\tpadding: calc(",
                " * 2) 0 ",
                " ;\n\t",
              ])),
            function (t) {
              return t.theme.padM;
            },
            function (t) {
              return t.theme.padM;
            }
          ),
          v.Fs.large(
            o ||
              (o = (0, h.Z)([
                "\n\t\t\twidth: 100%;\n\t\t\tmargin: 0;\n\t\t\tpadding: calc(",
                " * 2) 0 0;\n\t\t",
              ])),
            function (t) {
              return t.theme.padL;
            }
          )
        ),
        w = (0, g.default)(v.H1).withConfig({
          displayName: "styles__Title",
          componentId: "sc-com6qj-1",
        })(
          [
            "position:relative;span{display:block;&:first-child{position:absolute;top:0;left:50%;text-transform:lowercase;font-family:",
            ";color:",
            ";transform:translateX(-50%) translateY(-50%);",
            "}}",
          ],
          function (t) {
            return t.theme.script;
          },
          function (t) {
            return t.theme.bc1;
          },
          v.Fs.large(
            i ||
              (i = (0, h.Z)([
                "\n\t\t\t\t",
                "\n\t\t\t\ttransform: translateX(-50%) translateY(-50%) translateZ(6rem);\n\t\t\t",
              ])),
            function (t) {
              return t.theme.desktopShadow;
            }
          )
        ),
        E = (0, g.default)(v.P).withConfig({
          displayName: "styles__Excerpt",
          componentId: "sc-com6qj-2",
        })(
          ["color:", ";margin:2.4rem 0 0 0;", ""],
          function (t) {
            return t.theme.white;
          },
          v.Fs.large(
            l ||
              (l = (0, h.Z)([
                "\n\t\twidth: calc(8.333vw * 6 - 3.6rem);\n\t\tmargin: 3.6rem auto 0 auto;\n\t",
              ]))
          )
        ),
        b = g.default.div.withConfig({
          displayName: "styles__MobileScrollPos",
          componentId: "sc-com6qj-3",
        })([
          "position:absolute;bottom:4.8rem;left:50%;transform:translateX(-50%);",
        ]),
        x = function (t) {
          var e = t.title,
            n = t.script,
            r = t.excerpt,
            o = (0, p.Gc)(),
            i = (0, a.useState)(!1),
            l = i[0],
            s = i[1],
            c = (0, a.useState)(!0),
            u = c[0],
            h = c[1];
          return a.createElement(
            m.Z,
            {
              onEnter: function () {
                h(!0);
              },
              onExit: function () {
                h(!1), s(!0);
              },
            },
            a.createElement(
              y,
              { className: "cursor-reset" },
              a.createElement(
                w,
                null,
                a.createElement(
                  f.Z,
                  {
                    perspective: 500,
                    scale: 1,
                    tiltReverse: !0,
                    trackOnWindow: !0,
                    reset: l,
                    tiltEnable: !o.medium && u,
                    tiltMaxAngleX: 12,
                    tiltMaxAngleY: 12,
                    onLeave: function () {
                      s(!0);
                    },
                    className: "tilt",
                  },
                  a.createElement("span", null, n),
                  a.createElement("span", null, e)
                )
              ),
              a.createElement(E, null, r),
              o.large && a.createElement(b, null, a.createElement(d.Z, null))
            )
          );
        },
        _ = n(2065),
        k = function (t) {
          var e = t.transitionStatus,
            n = t.entry,
            r = t.exit,
            o = t.data,
            i = t.location,
            l = (0, p.Gc)(),
            f = {
              services: o.projectServices,
              data: o.projects.nodes,
              linkPath: "/projects/",
            };
          return a.createElement(
            _.Z,
            { status: e, entry: n, exit: r, location: i },
            a.createElement(s.Z, {
              content: o.page.seo,
              fallback: o.seoFallback.seo.fallback,
              schema: o.page.schema,
            }),
            l.large
              ? a.createElement(
                  c.Z,
                  f,
                  a.createElement(x, {
                    title: o.page.heroTitle,
                    script: o.page.heroScript,
                    excerpt: o.page.heroExcerpt,
                  })
                )
              : a.createElement(
                  u.default,
                  f,
                  a.createElement(x, {
                    title: o.page.heroTitle,
                    script: o.page.heroScript,
                    excerpt: o.page.heroExcerpt,
                  })
                )
          );
        };
    },
    94136: function (t, e, n) {
      "use strict";
      n.d(e, {
        f: function () {
          return r;
        },
      });
      var r = (0, n(2346).LO)({ service: "#" });
    },
  },
]);
//# sourceMappingURL=component---src-pages-projects-jsx-54e87db448c2c4fcfda0.js.map
