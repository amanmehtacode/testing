/*! For license information please see 3e11337fcf04970efaf373a1ecd75b34ea5b118b-03739338fe6f4017acbd.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [395],
  {
    81419: function (e, t, n) {
      var r = n(67294);
      function i(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var a = i(r),
        s = function () {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            s.apply(this, arguments)
          );
        };
      !(function (e) {
        if (e && "undefined" != typeof window) {
          var t = document.createElement("style");
          t.setAttribute("type", "text/css"),
            (t.innerHTML = e),
            document.head.appendChild(t);
        }
      })(
        '.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'
      );
      t.Z = function (e) {
        var t,
          n,
          i,
          o,
          l = e.style,
          d = void 0 === l ? {} : l,
          c = e.className,
          u = void 0 === c ? "" : c,
          p = e.play,
          f = void 0 === p || p,
          h = e.pauseOnHover,
          v = void 0 !== h && h,
          m = e.pauseOnClick,
          g = void 0 !== m && m,
          w = e.direction,
          y = void 0 === w ? "left" : w,
          b = e.speed,
          E = void 0 === b ? 20 : b,
          x = e.delay,
          S = void 0 === x ? 0 : x,
          T = e.gradient,
          C = void 0 === T || T,
          k = e.gradientColor,
          P = void 0 === k ? [255, 255, 255] : k,
          _ = e.gradientWidth,
          O = void 0 === _ ? 200 : _,
          M = e.children,
          L = e.loop,
          N = void 0 === L ? 0 : L,
          I = r.useState(0),
          z = I[0],
          A = I[1],
          D = r.useState(0),
          G = D[0],
          j = D[1],
          B = r.useState(0),
          F = B[0],
          R = B[1],
          Z = r.useState(!1),
          H = Z[0],
          V = Z[1],
          W = r.useRef(null),
          $ = r.useRef(null),
          q = function () {
            $.current &&
              W.current &&
              (A(W.current.getBoundingClientRect().width),
              j($.current.getBoundingClientRect().width)),
              R(G < z ? z / E : G / E);
          };
        r.useEffect(function () {
          return (
            q(),
            window.addEventListener("resize", q),
            function () {
              window.removeEventListener("resize", q);
            }
          );
        }),
          r.useEffect(function () {
            V(!0);
          }, []);
        var X = "rgba(" + P[0] + ", " + P[1] + ", " + P[2];
        return a.default.createElement(
          r.Fragment,
          null,
          H
            ? a.default.createElement(
                "div",
                {
                  ref: W,
                  style: s(
                    s({}, d),
                    ((t = {}),
                    (t["--pause-on-hover"] = v ? "paused" : "running"),
                    (t["--pause-on-click"] = g ? "paused" : "running"),
                    t)
                  ),
                  className: u + " marquee-container",
                },
                C &&
                  a.default.createElement("div", {
                    style:
                      ((n = {}),
                      (n["--gradient-color"] = X + ", 1), " + X + ", 0)"),
                      (n["--gradient-width"] =
                        "number" == typeof O ? O + "px" : O),
                      n),
                    className: "overlay",
                  }),
                a.default.createElement(
                  "div",
                  {
                    ref: $,
                    style:
                      ((i = {}),
                      (i["--play"] = f ? "running" : "paused"),
                      (i["--direction"] = "left" === y ? "normal" : "reverse"),
                      (i["--duration"] = F + "s"),
                      (i["--delay"] = S + "s"),
                      (i["--iteration-count"] = N ? "" + N : "infinite"),
                      i),
                    className: "marquee",
                  },
                  M
                ),
                a.default.createElement(
                  "div",
                  {
                    style:
                      ((o = {}),
                      (o["--play"] = f ? "running" : "paused"),
                      (o["--direction"] = "left" === y ? "normal" : "reverse"),
                      (o["--duration"] = F + "s"),
                      (o["--delay"] = S + "s"),
                      (o["--iteration-count"] = N ? "" + N : "infinite"),
                      o),
                    className: "marquee",
                  },
                  M
                )
              )
            : null
        );
      };
    },
    97660: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var r = n(67294),
        i = n(19692),
        a = n(18040),
        s = i.default.svg.withConfig({
          displayName: "styles__SVG",
          componentId: "sc-1t77bps-0",
        })(["width:100%;height:100%;pointer-events:none;"]),
        o = (0, i.default)(a.ZC).withConfig({
          displayName: "styles__Wrapper",
          componentId: "sc-1t77bps-1",
        })(function (e) {
          return (0,
          i.css)(["position:absolute;top:0;left:0;right:0;bottom:0;padding:1.2rem;z-index:2;pointer-events:none;"]);
        }),
        l = i.default.text.withConfig({
          displayName: "styles__Text",
          componentId: "sc-1t77bps-2",
        })(function (e) {
          return (0,
          i.css)(["font-family:", ";font-size:1.8rem;line-height:1;font-weight:", ";letter-spacing:0.2em;fill:", ";"], e.theme.heading, e.theme.reg, e.theme.white);
        }),
        d = i.default.textPath.withConfig({
          displayName: "styles__TextPath",
          componentId: "sc-1t77bps-3",
        })(function (e) {
          return (0,
          i.css)(["font-family:", ";font-size:1.8rem;line-height:1;font-weight:", ";letter-spacing:0.2em;fill:", ";"], e.theme.heading, e.theme.reg, e.theme.white);
        }),
        c = n(32884),
        u = n(44441),
        p = 12;
      var f,
        h,
        v = function (e) {
          var t = e.isPlaying,
            n =
              "BUILT BY PEOPLE FOR PEOPLE. FIERCELY RELIABLE. FINELY TUNED. TUNED IN. FUELED BY THE FUTURE. CHARGED UP AND CHARGING FORWARD. DRIVEN BY INNOVATION. IN MOTION.",
            i = (0, r.useRef)(null),
            a = (0, r.useRef)(null),
            f = (0, r.useRef)(null),
            h = (0, r.useRef)(null),
            v = (0, r.useRef)(null),
            m = (0, r.useState)({ width: 0, height: 0 }),
            g = m[0],
            w = m[1],
            y = (0, r.useState)(!1),
            b = y[0],
            E = y[1],
            x = (0, r.useState)(12),
            S = x[0],
            T = x[1],
            C = (0, r.useState)(2),
            k = C[0],
            P = C[1],
            _ = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(function () {
              function e() {
                var e = i.current.getBoundingClientRect(),
                  t = window
                    .getComputedStyle(f.current, null)
                    .getPropertyValue("font-size");
                w({ width: e.width, height: e.height }), T(parseFloat(t));
              }
              return (
                e(),
                window.addEventListener("resize", e),
                c.ZP.set("svg", { autoAlpha: 1 }),
                new u("Alternate Gothic").load(null, 2e4).then(function () {
                  e(), E(!0);
                }),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (b) {
                  _.current && (_.current.kill(), (_.current = null));
                  var e = a.current,
                    r = v.current,
                    i = e.getComputedTextLength() + 0.2 * S * n.length,
                    s = r.getTotalLength(),
                    o = (i / s) * 100;
                  P(Math.round(s / i) + 2),
                    t &&
                      ((_.current = c.ZP.timeline({
                        defaults: {
                          ease: "none",
                          duration: window.innerWidth < 700 ? 20 : 13,
                        },
                        repeat: -1,
                      }).fromTo(
                        h.current,
                        { attr: { startOffset: "0%" } },
                        { attr: { startOffset: -o + "%" } }
                      )),
                      c.ZP.set(h.current, { attr: { startOffset: -o + "%" } }),
                      c.ZP.set(a.current, { attr: { startOffset: "0%" } }));
                }
              },
              [g, b, S, t]
            ),
            r.createElement(
              o,
              null,
              r.createElement(
                s,
                { ref: i, viewBox: "0 0 " + g.width + " " + g.height },
                r.createElement("path", {
                  ref: v,
                  id: "squarePath",
                  fill: "transparent",
                  d:
                    "\n        M " +
                    (S + p) +
                    ", " +
                    S +
                    "\n        H " +
                    (g.width - S - p) +
                    "\n\t\tC   " +
                    (g.width - S) +
                    " " +
                    S +
                    ", \n\t\t \t" +
                    (g.width - S) +
                    " " +
                    S +
                    ", \n\t    \t" +
                    (g.width - S) +
                    " " +
                    (S + p) +
                    "\n        V " +
                    (g.height - S - p) +
                    "\n\t\tC   " +
                    (g.width - S) +
                    " " +
                    (g.height - S) +
                    ", \n\t\t \t" +
                    (g.width - S) +
                    " " +
                    (g.height - S) +
                    ", \n\t    \t" +
                    (g.width - S - p) +
                    " " +
                    (g.height - S) +
                    "\n        H " +
                    (S + p) +
                    "\n\t\tC   " +
                    S +
                    " " +
                    (g.height - S) +
                    ", \n\t\t \t" +
                    S +
                    " " +
                    (g.height - S) +
                    ", \n\t    \t" +
                    S +
                    " " +
                    (g.height - S - p) +
                    "\n        V " +
                    (S + p) +
                    "\n\t\tC   " +
                    S +
                    " " +
                    S +
                    ", \n\t\t \t" +
                    S +
                    " " +
                    S +
                    ", \n\t    \t" +
                    (S + p) +
                    " " +
                    S +
                    "\n    ",
                }),
                r.createElement(
                  "text",
                  { width: g.width },
                  r.createElement(
                    d,
                    {
                      ref: h,
                      style: { opacity: 1 },
                      alignmentBaseline: "top",
                      className: "text",
                      xlinkHref: "#squarePath",
                    },
                    Array.from({ length: k }, function () {
                      return n;
                    }).join("")
                  ),
                  r.createElement(
                    d,
                    {
                      ref: a,
                      style: { opacity: 0 },
                      alignmentBaseline: "top",
                      className: "text-2 test",
                      xlinkHref: "#squarePath",
                    },
                    n
                  )
                ),
                r.createElement(l, { style: { opacity: 0 }, ref: f }, "A")
              )
            )
          );
        },
        m = n(35639),
        g = n(6125),
        w = n(53128),
        y = n(81880),
        b = n(52068),
        E = n(68275),
        x = (0, i.default)(a.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1bxkxe-0",
        })(
          [
            "position:relative;z-index:7;overflow:hidden;background:black;",
            " min-height:36rem;",
            " > div{width:100%;height:100%;}",
          ],
          function (e) {
            return e.theme.vhsCalc(50);
          },
          a.Fs.large(
            f ||
              (f = (0, y.Z)([
                "\n\t\t\theight: 75vh;\n\t\t\tmin-height: 60rem;\n\t\t\tmax-height: 60rem;\n\t\t",
              ]))
          )
        ),
        S = i.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-1bxkxe-1",
        })(["position:relative;z-index:2;text-align:center;"]),
        T = (0, i.default)(a.H2).withConfig({
          displayName: "styles__Title",
          componentId: "sc-1bxkxe-2",
        })([""]),
        C = (0, i.default)(E.ZP).withConfig({
          displayName: "styles__TitleLink",
          componentId: "sc-1bxkxe-3",
        })(
          [
            "",
            " position:relative;color:",
            ";&:visited{color:",
            ";}&:after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:",
            ";transition:",
            ";",
            "}",
          ],
          b.Iq,
          function (e) {
            return e.theme.bc1;
          },
          function (e) {
            return e.theme.bc1;
          },
          function (e) {
            return e.theme.bc1;
          },
          function (e) {
            return e.theme.ease;
          },
          a.Fs.large(h || (h = (0, y.Z)(["\n\t\t\t\theight: 4px;\n\t\t\t"])))
        ),
        k = i.default.div.withConfig({
          displayName: "styles__Background",
          componentId: "sc-1bxkxe-4",
        })([
          "position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;opacity:0.5;.gatsby-image-wrapper{width:100%;height:100%;filter:grayscale(100%);}",
        ]),
        P = i.default.div.withConfig({
          displayName: "styles__BackgroundAnimation",
          componentId: "sc-1bxkxe-5",
        })(["position:relative;width:100%;height:100%;"]),
        _ = function (e) {
          var t = e.override,
            n = e.fallback,
            i = (0, r.useState)(!1),
            a = i[0],
            s = i[1],
            o = 0 === t.text.length ? n.text : t.text,
            l = 0 === t.textLink.length ? n.textLink : t.textLink,
            d = null === t.link ? n.link : t.link,
            c = null === t.image ? n.image : t.image;
          return r.createElement(
            m.Z,
            {
              onEnter: function () {
                s(!0);
              },
              onExit: function () {
                s(!1);
              },
            },
            r.createElement(
              x,
              null,
              r.createElement(v, { isPlaying: a }),
              r.createElement(
                k,
                null,
                r.createElement(
                  P,
                  null,
                  r.createElement(g.G, {
                    objectFit: "cover",
                    image: c.data,
                    alt: c.alt,
                  })
                )
              ),
              r.createElement(
                w.X,
                { isExpanded: !0, isCenter: !0 },
                r.createElement(
                  w.s,
                  { small: 12, smedium: 10, pushOnSmedium: 1, mpad: !0 },
                  r.createElement(
                    S,
                    null,
                    r.createElement(T, null, o),
                    r.createElement(
                      C,
                      {
                        to: "/" + d.slug + "/",
                        className: "cursor-go",
                        exit: { length: 1, delay: 1 },
                        entry: { length: 1 },
                      },
                      l
                    )
                  )
                )
              )
            )
          );
        };
    },
    15575: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return It;
        },
      });
      var r,
        i,
        a,
        s,
        o,
        l = n(67294),
        d = n(97026),
        c = n(6125),
        u = n(68275),
        p = n(81880),
        f = n(19692),
        h = n(18040),
        v = n(52068),
        m = n(25444),
        g = (0, f.css)(
          [
            "display:flex;flex-flow:column;align-items:flex-start;justify-content:space-between;width:100%;height:100%;&:hover{.gatsby-image-wrapper{",
            "}}",
          ],
          h.Fs.large(
            r ||
              (r = (0, p.Z)([
                "\n                filter: grayscale(0%);\n            ",
              ]))
          )
        ),
        w = (0, f.default)(m.Link).withConfig({
          displayName: "styles__Mobile",
          componentId: "sc-1u5zu45-0",
        })(["", ""], g),
        y = (0, f.default)(u.ZP).withConfig({
          displayName: "styles__Desktop",
          componentId: "sc-1u5zu45-1",
        })(["", ""], g),
        b = f.default.div.withConfig({
          displayName: "styles__Image",
          componentId: "sc-1u5zu45-2",
        })(
          [
            "position:absolute;top:0;left:0;right:0;bottom:0;z-index:0;user-select:none;.gatsby-image-wrapper{width:100%;height:100%;filter:grayscale(100%);opacity:0.4;transition:",
            ";}",
          ],
          function (e) {
            return e.theme.ease;
          }
        ),
        E = (0, f.default)(h.H3).withConfig({
          displayName: "styles__Title",
          componentId: "sc-1u5zu45-3",
        })(
          [
            "position:absolute;top:",
            ";left:2.4rem;right:2.4rem;&:before{",
            " display:block;margin:0 0 0.6rem 0;content:'Featured Project';}",
            " ",
            "",
          ],
          function (e) {
            return e.theme.padS;
          },
          v.Qs,
          h.Fs.medium(
            i ||
              (i = (0, p.Z)([
                "\n        top: ",
                ";\n        left: 4.8rem;\n        right: 4.8rem;\n    ",
              ])),
            function (e) {
              return e.theme.padM;
            }
          ),
          h.Fs.large(
            a ||
              (a = (0, p.Z)([
                "\n        top: ",
                ";\n        left: 6rem;\n        right: 6rem;\n    ",
              ])),
            function (e) {
              return e.theme.padL;
            }
          )
        ),
        x = f.default.div.withConfig({
          displayName: "styles__Text",
          componentId: "sc-1u5zu45-4",
        })(
          ["position:absolute;left:2.4rem;bottom:", ";", " ", ""],
          function (e) {
            return e.theme.padS;
          },
          h.Fs.medium(
            s ||
              (s = (0, p.Z)([
                "\n        left: 4.8rem;\n        right: 4.8rem;\n        bottom: ",
                ";\n    ",
              ])),
            function (e) {
              return e.theme.padM;
            }
          ),
          h.Fs.large(
            o ||
              (o = (0, p.Z)([
                "\n        left: 6rem;\n        right: 6rem;\n        bottom: ",
                ";\n    ",
              ])),
            function (e) {
              return e.theme.padL;
            }
          )
        ),
        S = (0, f.default)(h.P).withConfig({
          displayName: "styles__Excerpt",
          componentId: "sc-1u5zu45-5",
        })(["color:", ";"], function (e) {
          return e.theme.white;
        }),
        T = f.default.button.withConfig({
          displayName: "styles__FakeButton",
          componentId: "sc-1u5zu45-6",
        })(
          [
            "",
            " margin:1.2rem 0 0 0;padding:1.3rem 2.4rem 1.1rem;border-radius:3.6rem;background:",
            ";color:",
            ";",
          ],
          v.kU,
          function (e) {
            return e.theme.bc1;
          },
          function (e) {
            return e.theme.black;
          }
        ),
        C = f.default.div.withConfig({
          displayName: "styles__TransitionImage",
          componentId: "sc-1u5zu45-7",
        })(
          [
            "position:fixed;z-index:999;top:0;left:0;right:0;bottom:0;overflow:hidden;pointer-events:none;clip-path:inset( ",
            " );transition:clip-path 1s ",
            ";.gatsby-image-wrapper{width:100%;height:100%;}",
          ],
          function (e) {
            return e.inTrans
              ? "\n\t\t\t0% 0% 0% 0%"
              : "\n\t\t\t50% 50% 50% 50%\n\t\t\t";
          },
          function (e) {
            return e.theme.bezzy;
          }
        ),
        k = function (e) {
          var t = e.image,
            n = e.title,
            r = e.excerpt,
            i = (0, d.Gc)();
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              b,
              null,
              l.createElement(c.G, {
                objectFit: "cover",
                image: t.data,
                alt: t.alt,
              })
            ),
            l.createElement(E, null, n),
            l.createElement(
              x,
              null,
              l.createElement(S, { small: !0 }, r),
              i.large
                ? l.createElement(T, { type: "button" }, "Explore Project")
                : null
            )
          );
        },
        P = function (e) {
          var t = e.slug,
            n = e.image,
            r = e.title,
            i = e.excerpt,
            a = (0, l.useState)(!1),
            s = a[0],
            o = a[1],
            p = (0, d.Gc)(),
            f = {
              to: "/projects/" + t + "/",
              label: "Explore Project",
              onClick: function () {
                o(!0);
              },
              exit: { length: 1, delay: 1 },
              entry: { length: 1, delay: 0 },
            };
          return l.createElement(
            l.Fragment,
            null,
            p.large
              ? l.createElement(
                  w,
                  f,
                  l.createElement(k, {
                    slug: t,
                    image: n,
                    title: r,
                    excerpt: i,
                  })
                )
              : l.createElement(
                  y,
                  f,
                  l.createElement(k, {
                    slug: t,
                    image: n,
                    title: r,
                    excerpt: i,
                  }),
                  l.createElement(
                    u.kX,
                    { level: "top" },
                    l.createElement(
                      C,
                      { inTrans: s },
                      l.createElement(c.G, {
                        objectFit: "cover",
                        image: n.data,
                        alt: n.alt,
                      })
                    )
                  )
                )
          );
        },
        _ = n(12276),
        O = f.default.div.withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1nh90cs-0",
        })(
          [
            "position:relative;display:flex;align-items:center;width:100%;height:100%;padding-bottom:",
            ";",
          ],
          function (e) {
            return e.theme.padL;
          }
        ),
        M = f.default.button.withConfig({
          displayName: "styles__Content",
          componentId: "sc-1nh90cs-1",
        })(["margin:0;padding:0;width:100%;background:transparent;"]),
        L = f.default.div.withConfig({
          displayName: "styles__Image",
          componentId: "sc-1nh90cs-2",
        })(
          [
            "position:relative;z-index:1;height:50vh;max-height:40rem;cursor:pointer;user-select:none;background:",
            ";svg{position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%,-50%);width:6rem;height:6rem;stroke-width:1px;stroke:",
            ";fill:none;}.gatsby-image-wrapper{position:relative;z-index:1;width:100%;height:100%;filter:grayscale(100%);opacity:0.4;}",
          ],
          function (e) {
            return e.theme.trueblack;
          },
          function (e) {
            return e.theme.white;
          }
        ),
        N = (0, f.default)(h.Dr).withConfig({
          displayName: "styles__Text",
          componentId: "sc-1nh90cs-3",
        })(
          [
            "display:block;width:100%;color:",
            ";text-transform:uppercase;text-align:",
            ";padding:",
            ";",
          ],
          function (e) {
            return e.theme.black;
          },
          function (e) {
            return e.isAlt ? "right" : "left";
          },
          function (e) {
            return e.isAlt ? "1.2rem 0 0 0" : "0 0 1.2rem 0";
          }
        ),
        I = function (e) {
          var t = e.title,
            n = e.image,
            r = e.children;
          return l.createElement(
            O,
            null,
            r,
            l.createElement(
              M,
              { className: "cursor-trigger" },
              l.createElement(N, null, "Next Up"),
              l.createElement(
                L,
                null,
                l.createElement(_.Z, { type: "arrow-right" }),
                l.createElement(c.G, {
                  objectFit: "cover",
                  image: n.data,
                  alt: n.alt,
                })
              ),
              l.createElement(N, { isAlt: !0 }, t)
            )
          );
        },
        z = n(53128),
        A = n(70885),
        D = n(63366);
      function G(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (0, D.Z)(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      var j = n(42982),
        B = n(15671),
        F = n(43144);
      function R(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function Z() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach(function (n) {
          void 0 === e[n]
            ? (e[n] = t[n])
            : R(t[n]) &&
              R(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              Z(e[n], t[n]);
        });
      }
      var H = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function V() {
        var e = "undefined" != typeof document ? document : {};
        return Z(e, H), e;
      }
      var W = {
        document: H,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" == typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function $() {
        var e = "undefined" != typeof window ? window : {};
        return Z(e, W), e;
      }
      var q = n(97326),
        X = n(60136),
        Y = n(82963),
        U = n(61120),
        K = n(89611);
      function J() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function Q(e, t, n) {
        return (
          (Q = J()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r))();
                return n && (0, K.Z)(i, n.prototype), i;
              }),
          Q.apply(null, arguments)
        );
      }
      function ee(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (ee = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return Q(e, arguments, (0, U.Z)(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              (0, K.Z)(r, e)
            );
          }),
          ee(e)
        );
      }
      function te(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, U.Z)(e);
          if (t) {
            var i = (0, U.Z)(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return (0, Y.Z)(this, n);
        };
      }
      var ne = (function (e) {
        (0, X.Z)(n, e);
        var t = te(n);
        function n(e) {
          var r, i, a;
          return (
            (0, B.Z)(this, n),
            (r = t.call.apply(t, [this].concat((0, j.Z)(e || [])))),
            (i = (0, q.Z)(r)),
            (a = i.__proto__),
            Object.defineProperty(i, "__proto__", {
              get: function () {
                return a;
              },
              set: function (e) {
                a.__proto__ = e;
              },
            }),
            r
          );
        }
        return n;
      })(ee(Array));
      function re() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, (0, j.Z)(re(e))) : t.push(e);
          }),
          t
        );
      }
      function ie(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function ae(e, t) {
        var n = $(),
          r = V(),
          i = [];
        if (!t && e instanceof ne) return e;
        if (!e) return new ne(i);
        if ("string" == typeof e) {
          var a = e.trim();
          if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
            var s = "div";
            0 === a.indexOf("<li") && (s = "ul"),
              0 === a.indexOf("<tr") && (s = "tbody"),
              (0 !== a.indexOf("<td") && 0 !== a.indexOf("<th")) || (s = "tr"),
              0 === a.indexOf("<tbody") && (s = "table"),
              0 === a.indexOf("<option") && (s = "select");
            var o = r.createElement(s);
            o.innerHTML = a;
            for (var l = 0; l < o.childNodes.length; l += 1)
              i.push(o.childNodes[l]);
          } else
            i = (function (e, t) {
              if ("string" != typeof e) return [e];
              for (
                var n = [], r = t.querySelectorAll(e), i = 0;
                i < r.length;
                i += 1
              )
                n.push(r[i]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) i.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof ne) return e;
          i = e;
        }
        return new ne(
          (function (e) {
            for (var t = [], n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(i)
        );
      }
      ae.fn = ne.prototype;
      var se = "resize scroll".split(" ");
      function oe(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          if (void 0 === n[0]) {
            for (var i = 0; i < this.length; i += 1)
              se.indexOf(e) < 0 &&
                (e in this[i] ? this[i][e]() : ae(this[i]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(n));
        };
      }
      oe("click"),
        oe("blur"),
        oe("focus"),
        oe("focusin"),
        oe("focusout"),
        oe("keyup"),
        oe("keydown"),
        oe("keypress"),
        oe("submit"),
        oe("change"),
        oe("mousedown"),
        oe("mousemove"),
        oe("mouseup"),
        oe("mouseenter"),
        oe("mouseleave"),
        oe("mouseout"),
        oe("mouseover"),
        oe("touchstart"),
        oe("touchend"),
        oe("touchmove"),
        oe("resize"),
        oe("scroll");
      var le = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = re(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, (0, j.Z)(r));
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = re(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, (0, j.Z)(r));
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = re(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            ie(this, function (e) {
              return (
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = re(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (var r in e)
                (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? "".concat(e, "ms") : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            i = t[1],
            a = t[2],
            s = t[3];
          function o(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), ae(t).is(i)))
                a.apply(t, n);
              else
                for (var r = ae(t).parents(), s = 0; s < r.length; s += 1)
                  ae(r[s]).is(i) && a.apply(r[s], n);
            }
          }
          function l(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
          }
          "function" == typeof t[1] &&
            ((r = t[0]), (a = t[1]), (s = t[2]), (i = void 0)),
            s || (s = !1);
          for (var d, c = r.split(" "), u = 0; u < this.length; u += 1) {
            var p = this[u];
            if (i)
              for (d = 0; d < c.length; d += 1) {
                var f = c[d];
                p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                  p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []),
                  p.dom7LiveListeners[f].push({
                    listener: a,
                    proxyListener: o,
                  }),
                  p.addEventListener(f, o, s);
              }
            else
              for (d = 0; d < c.length; d += 1) {
                var h = c[d];
                p.dom7Listeners || (p.dom7Listeners = {}),
                  p.dom7Listeners[h] || (p.dom7Listeners[h] = []),
                  p.dom7Listeners[h].push({ listener: a, proxyListener: l }),
                  p.addEventListener(h, l, s);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            i = t[1],
            a = t[2],
            s = t[3];
          "function" == typeof t[1] &&
            ((r = t[0]), (a = t[1]), (s = t[2]), (i = void 0)),
            s || (s = !1);
          for (var o = r.split(" "), l = 0; l < o.length; l += 1)
            for (var d = o[l], c = 0; c < this.length; c += 1) {
              var u = this[c],
                p = void 0;
              if (
                (!i && u.dom7Listeners
                  ? (p = u.dom7Listeners[d])
                  : i && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]),
                p && p.length)
              )
                for (var f = p.length - 1; f >= 0; f -= 1) {
                  var h = p[f];
                  (a && h.listener === a) ||
                  (a &&
                    h.listener &&
                    h.listener.dom7proxy &&
                    h.listener.dom7proxy === a)
                    ? (u.removeEventListener(d, h.proxyListener, s),
                      p.splice(f, 1))
                    : a ||
                      (u.removeEventListener(d, h.proxyListener, s),
                      p.splice(f, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = $(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var i = n[0].split(" "), a = n[1], s = 0; s < i.length; s += 1)
            for (var o = i[s], l = 0; l < this.length; l += 1) {
              var d = this[l];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(o, {
                  detail: a,
                  bubbles: !0,
                  cancelable: !0,
                });
                (d.dom7EventData = n.filter(function (e, t) {
                  return t > 0;
                })),
                  d.dispatchEvent(c),
                  (d.dom7EventData = []),
                  delete d.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function n(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = $();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = $(),
              t = V(),
              n = this[0],
              r = n.getBoundingClientRect(),
              i = t.body,
              a = n.clientTop || i.clientTop || 0,
              s = n.clientLeft || i.clientLeft || 0,
              o = n === e ? e.scrollY : n.scrollTop,
              l = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + o - a, left: r.left + l - s };
          }
          return null;
        },
        css: function (e, t) {
          var n,
            r = $();
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (var i in e) this[n].style[i] = e[i];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, n) {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            n,
            r = $(),
            i = V(),
            a = this[0];
          if (!a || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (a.matches) return a.matches(e);
            if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
            if (a.msMatchesSelector) return a.msMatchesSelector(e);
            for (t = ae(e), n = 0; n < t.length; n += 1)
              if (t[n] === a) return !0;
            return !1;
          }
          if (e === i) return a === i;
          if (e === r) return a === r;
          if (e.nodeType || e instanceof ne) {
            for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
              if (t[n] === a) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          var t = this.length;
          if (e > t - 1) return ae([]);
          if (e < 0) {
            var n = t + e;
            return ae(n < 0 ? [] : [this[n]]);
          }
          return ae([this[e]]);
        },
        append: function () {
          for (var e, t = V(), n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var r = 0; r < this.length; r += 1)
              if ("string" == typeof e) {
                var i = t.createElement("div");
                for (i.innerHTML = e; i.firstChild; )
                  this[r].appendChild(i.firstChild);
              } else if (e instanceof ne)
                for (var a = 0; a < e.length; a += 1) this[r].appendChild(e[a]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            n,
            r = V();
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              var i = r.createElement("div");
              for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
                this[t].insertBefore(i.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof ne)
              for (n = 0; n < e.length; n += 1)
                this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                ae(this[0].nextElementSibling).is(e)
                ? ae([this[0].nextElementSibling])
                : ae([])
              : this[0].nextElementSibling
              ? ae([this[0].nextElementSibling])
              : ae([])
            : ae([]);
        },
        nextAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return ae([]);
          for (; n.nextElementSibling; ) {
            var r = n.nextElementSibling;
            e ? ae(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return ae(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && ae(t.previousElementSibling).is(e)
                ? ae([t.previousElementSibling])
                : ae([])
              : t.previousElementSibling
              ? ae([t.previousElementSibling])
              : ae([]);
          }
          return ae([]);
        },
        prevAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return ae([]);
          for (; n.previousElementSibling; ) {
            var r = n.previousElementSibling;
            e ? ae(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return ae(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? ae(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return ae(t);
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].parentNode; r; )
              e ? ae(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          return ae(t);
        },
        closest: function (e) {
          var t = this;
          return void 0 === e
            ? ae([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (
              var r = this[n].querySelectorAll(e), i = 0;
              i < r.length;
              i += 1
            )
              t.push(r[i]);
          return ae(t);
        },
        children: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].children, i = 0; i < r.length; i += 1)
              (e && !ae(r[i]).is(e)) || t.push(r[i]);
          return ae(t);
        },
        filter: function (e) {
          return ae(ie(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(le).forEach(function (e) {
        Object.defineProperty(ae.fn, e, { value: le[e], writable: !0 });
      });
      var de,
        ce,
        ue,
        pe = ae,
        fe = n(4942);
      function he(e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (n) {}
          try {
            delete t[e];
          } catch (n) {}
        });
      }
      function ve(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return setTimeout(e, t);
      }
      function me() {
        return Date.now();
      }
      function ge(e) {
        var t,
          n = $();
        return (
          n.getComputedStyle && (t = n.getComputedStyle(e, null)),
          !t && e.currentStyle && (t = e.currentStyle),
          t || (t = e.style),
          t
        );
      }
      function we(e) {
        var t,
          n,
          r,
          i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "x",
          a = $(),
          s = ge(e);
        return (
          a.WebKitCSSMatrix
            ? ((n = s.transform || s.webkitTransform).split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (r = new a.WebKitCSSMatrix("none" === n ? "" : n)))
            : (t = (r =
                s.MozTransform ||
                s.OTransform ||
                s.MsTransform ||
                s.msTransform ||
                s.transform ||
                s
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === i &&
            (n = a.WebKitCSSMatrix
              ? r.m41
              : 16 === t.length
              ? parseFloat(t[12])
              : parseFloat(t[4])),
          "y" === i &&
            (n = a.WebKitCSSMatrix
              ? r.m42
              : 16 === t.length
              ? parseFloat(t[13])
              : parseFloat(t[5])),
          n || 0
        );
      }
      function ye(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function be(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function Ee() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"],
            n = 1;
          n < arguments.length;
          n += 1
        ) {
          var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != r && !be(r))
            for (
              var i = Object.keys(Object(r)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                a = 0,
                s = i.length;
              a < s;
              a += 1
            ) {
              var o = i[a],
                l = Object.getOwnPropertyDescriptor(r, o);
              void 0 !== l &&
                l.enumerable &&
                (ye(e[o]) && ye(r[o])
                  ? r[o].__swiper__
                    ? (e[o] = r[o])
                    : Ee(e[o], r[o])
                  : !ye(e[o]) && ye(r[o])
                  ? ((e[o] = {}),
                    r[o].__swiper__ ? (e[o] = r[o]) : Ee(e[o], r[o]))
                  : (e[o] = r[o]));
            }
        }
        return e;
      }
      function xe(e, t, n) {
        e.style.setProperty(t, n);
      }
      function Se(e) {
        var t,
          n = e.swiper,
          r = e.targetPosition,
          i = e.side,
          a = $(),
          s = -n.translate,
          o = null,
          l = n.params.speed;
        (n.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(n.cssModeFrameID);
        var d = r > s ? "next" : "prev",
          c = function (e, t) {
            return ("next" === d && e >= t) || ("prev" === d && e <= t);
          };
        !(function e() {
          (t = new Date().getTime()), null === o && (o = t);
          var d = Math.max(Math.min((t - o) / l, 1), 0),
            u = 0.5 - Math.cos(d * Math.PI) / 2,
            p = s + u * (r - s);
          if (
            (c(p, r) && (p = r),
            n.wrapperEl.scrollTo((0, fe.Z)({}, i, p)),
            c(p, r))
          )
            return (
              (n.wrapperEl.style.overflow = "hidden"),
              (n.wrapperEl.style.scrollSnapType = ""),
              setTimeout(function () {
                (n.wrapperEl.style.overflow = ""),
                  n.wrapperEl.scrollTo((0, fe.Z)({}, i, p));
              }),
              void a.cancelAnimationFrame(n.cssModeFrameID)
            );
          n.cssModeFrameID = a.requestAnimationFrame(e);
        })();
      }
      function Te() {
        return (
          de ||
            (de = (function () {
              var e = $(),
                t = V();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  var t = !1;
                  try {
                    var n = Object.defineProperty({}, "passive", {
                      get: function () {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (r) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          de
        );
      }
      function Ce() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.userAgent,
          n = Te(),
          r = $(),
          i = r.navigator.platform,
          a = t || r.navigator.userAgent,
          s = { ios: !1, android: !1 },
          o = r.screen.width,
          l = r.screen.height,
          d = a.match(/(Android);?[\s\/]+([\d.]+)?/),
          c = a.match(/(iPad).*OS\s([\d_]+)/),
          u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
          p = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          f = "Win32" === i,
          h = "MacIntel" === i,
          v = [
            "1024x1366",
            "1366x1024",
            "834x1194",
            "1194x834",
            "834x1112",
            "1112x834",
            "768x1024",
            "1024x768",
            "820x1180",
            "1180x820",
            "810x1080",
            "1080x810",
          ];
        return (
          !c &&
            h &&
            n.touch &&
            v.indexOf("".concat(o, "x").concat(l)) >= 0 &&
            ((c = a.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, "13_0_0"]),
            (h = !1)),
          d && !f && ((s.os = "android"), (s.android = !0)),
          (c || p || u) && ((s.os = "ios"), (s.ios = !0)),
          s
        );
      }
      function ke() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return ce || (ce = Ce(e)), ce;
      }
      function Pe() {
        return (
          ue ||
            (ue = (function () {
              var e,
                t = $();
              return {
                isSafari:
                  ((e = t.navigator.userAgent.toLowerCase()),
                  e.indexOf("safari") >= 0 &&
                    e.indexOf("chrome") < 0 &&
                    e.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  t.navigator.userAgent
                ),
              };
            })()),
          ue
        );
      }
      var _e = {
        on: function (e, t, n) {
          var r = this;
          if ("function" != typeof t) return r;
          var i = n ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][i](t);
            }),
            r
          );
        },
        once: function (e, t, n) {
          var r = this;
          if ("function" != typeof t) return r;
          function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            t.apply(r, a);
          }
          return (i.__emitterProxy = t), r.on(e, i, n);
        },
        onAny: function (e, t) {
          var n = this;
          if ("function" != typeof e) return n;
          var r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function (e, t) {
          var n = this;
          return n.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach(function (r, i) {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(i, 1);
                    });
              }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            r = this;
          if (!r.eventsListeners) return r;
          for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
            a[s] = arguments[s];
          "string" == typeof a[0] || Array.isArray(a[0])
            ? ((e = a[0]), (t = a.slice(1, a.length)), (n = r))
            : ((e = a[0].events), (t = a[0].data), (n = a[0].context || r)),
            t.unshift(n);
          var o = Array.isArray(e) ? e : e.split(" ");
          return (
            o.forEach(function (e) {
              r.eventsAnyListeners &&
                r.eventsAnyListeners.length &&
                r.eventsAnyListeners.forEach(function (r) {
                  r.apply(n, [e].concat((0, j.Z)(t)));
                }),
                r.eventsListeners &&
                  r.eventsListeners[e] &&
                  r.eventsListeners[e].forEach(function (e) {
                    e.apply(n, t);
                  });
            }),
            r
          );
        },
      };
      var Oe = {
        updateSize: function () {
          var e,
            t,
            n = this,
            r = n.$el;
          (e =
            void 0 !== n.params.width && null !== n.params.width
              ? n.params.width
              : r[0].clientWidth),
            (t =
              void 0 !== n.params.height && null !== n.params.height
                ? n.params.height
                : r[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
              (0 === t && n.isVertical()) ||
              ((e =
                e -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var r = e.params,
            i = e.$wrapperEl,
            a = e.size,
            s = e.rtlTranslate,
            o = e.wrongRTL,
            l = e.virtual && r.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = i.children(".".concat(e.params.slideClass)),
            u = l ? e.virtual.slides.length : c.length,
            p = [],
            f = [],
            h = [],
            v = r.slidesOffsetBefore;
          "function" == typeof v && (v = r.slidesOffsetBefore.call(e));
          var m = r.slidesOffsetAfter;
          "function" == typeof m && (m = r.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            w = e.slidesGrid.length,
            y = r.spaceBetween,
            b = -v,
            E = 0,
            x = 0;
          if (void 0 !== a) {
            "string" == typeof y &&
              y.indexOf("%") >= 0 &&
              (y = (parseFloat(y.replace("%", "")) / 100) * a),
              (e.virtualSize = -y),
              s
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              r.centeredSlides &&
                r.cssMode &&
                (xe(e.wrapperEl, "--swiper-centered-offset-before", ""),
                xe(e.wrapperEl, "--swiper-centered-offset-after", ""));
            var S,
              T = r.grid && r.grid.rows > 1 && e.grid;
            T && e.grid.initSlides(u);
            for (
              var C =
                  "auto" === r.slidesPerView &&
                  r.breakpoints &&
                  Object.keys(r.breakpoints).filter(function (e) {
                    return void 0 !== r.breakpoints[e].slidesPerView;
                  }).length > 0,
                k = 0;
              k < u;
              k += 1
            ) {
              S = 0;
              var P = c.eq(k);
              if (
                (T && e.grid.updateSlide(k, P, u, t),
                "none" !== P.css("display"))
              ) {
                if ("auto" === r.slidesPerView) {
                  C && (c[k].style[t("width")] = "");
                  var _ = getComputedStyle(P[0]),
                    O = P[0].style.transform,
                    M = P[0].style.webkitTransform;
                  if (
                    (O && (P[0].style.transform = "none"),
                    M && (P[0].style.webkitTransform = "none"),
                    r.roundLengths)
                  )
                    S = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                  else {
                    var L = n(_, "width"),
                      N = n(_, "padding-left"),
                      I = n(_, "padding-right"),
                      z = n(_, "margin-left"),
                      A = n(_, "margin-right"),
                      D = _.getPropertyValue("box-sizing");
                    if (D && "border-box" === D) S = L + z + A;
                    else {
                      var G = P[0],
                        j = G.clientWidth;
                      S = L + N + I + z + A + (G.offsetWidth - j);
                    }
                  }
                  O && (P[0].style.transform = O),
                    M && (P[0].style.webkitTransform = M),
                    r.roundLengths && (S = Math.floor(S));
                } else
                  (S = (a - (r.slidesPerView - 1) * y) / r.slidesPerView),
                    r.roundLengths && (S = Math.floor(S)),
                    c[k] && (c[k].style[t("width")] = "".concat(S, "px"));
                c[k] && (c[k].swiperSlideSize = S),
                  h.push(S),
                  r.centeredSlides
                    ? ((b = b + S / 2 + E / 2 + y),
                      0 === E && 0 !== k && (b = b - a / 2 - y),
                      0 === k && (b = b - a / 2 - y),
                      Math.abs(b) < 0.001 && (b = 0),
                      r.roundLengths && (b = Math.floor(b)),
                      x % r.slidesPerGroup == 0 && p.push(b),
                      f.push(b))
                    : (r.roundLengths && (b = Math.floor(b)),
                      (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                        e.params.slidesPerGroup ==
                        0 && p.push(b),
                      f.push(b),
                      (b = b + S + y)),
                  (e.virtualSize += S + y),
                  (E = S),
                  (x += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, a) + m),
              s &&
                o &&
                ("slide" === r.effect || "coverflow" === r.effect) &&
                i.css({
                  width: "".concat(e.virtualSize + r.spaceBetween, "px"),
                }),
              r.setWrapperSize &&
                i.css(
                  (0, fe.Z)(
                    {},
                    t("width"),
                    "".concat(e.virtualSize + r.spaceBetween, "px")
                  )
                ),
              T && e.grid.updateWrapperSize(S, p, t),
              !r.centeredSlides)
            ) {
              for (var B = [], F = 0; F < p.length; F += 1) {
                var R = p[F];
                r.roundLengths && (R = Math.floor(R)),
                  p[F] <= e.virtualSize - a && B.push(R);
              }
              (p = B),
                Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - a);
            }
            if ((0 === p.length && (p = [0]), 0 !== r.spaceBetween)) {
              var Z = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
              c.filter(function (e, t) {
                return !r.cssMode || t !== c.length - 1;
              }).css((0, fe.Z)({}, Z, "".concat(y, "px")));
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              var H = 0;
              h.forEach(function (e) {
                H += e + (r.spaceBetween ? r.spaceBetween : 0);
              });
              var V = (H -= r.spaceBetween) - a;
              p = p.map(function (e) {
                return e < 0 ? -v : e > V ? V + m : e;
              });
            }
            if (r.centerInsufficientSlides) {
              var W = 0;
              if (
                (h.forEach(function (e) {
                  W += e + (r.spaceBetween ? r.spaceBetween : 0);
                }),
                (W -= r.spaceBetween) < a)
              ) {
                var $ = (a - W) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - $;
                }),
                  f.forEach(function (e, t) {
                    f[t] = e + $;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: p,
                slidesGrid: f,
                slidesSizesGrid: h,
              }),
              r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
            ) {
              xe(
                e.wrapperEl,
                "--swiper-centered-offset-before",
                "".concat(-p[0], "px")
              ),
                xe(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  "".concat(e.size / 2 - h[h.length - 1] / 2, "px")
                );
              var q = -e.snapGrid[0],
                X = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map(function (e) {
                return e + q;
              })),
                (e.slidesGrid = e.slidesGrid.map(function (e) {
                  return e + X;
                }));
            }
            u !== d && e.emit("slidesLengthChange"),
              p.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              f.length !== w && e.emit("slidesGridLengthChange"),
              r.watchSlidesProgress && e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            r = [],
            i = n.virtual && n.params.virtual.enabled,
            a = 0;
          "number" == typeof e
            ? n.setTransition(e)
            : !0 === e && n.setTransition(n.params.speed);
          var s = function (e) {
            return i
              ? n.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              n.visibleSlides.each(function (e) {
                r.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var o = n.activeIndex + t;
                if (o > n.slides.length && !i) break;
                r.push(s(o));
              }
          else r.push(s(n.activeIndex));
          for (t = 0; t < r.length; t += 1)
            if (void 0 !== r[t]) {
              var l = r[t].offsetHeight;
              a = l > a ? l : a;
            }
          a && n.$wrapperEl.css("height", "".concat(a, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (this && this.translate) || 0,
            t = this,
            n = t.params,
            r = t.slides,
            i = t.rtlTranslate,
            a = t.snapGrid;
          if (0 !== r.length) {
            void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
            var s = -e;
            i && (s = e),
              r.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var o = 0; o < r.length; o += 1) {
              var l = r[o],
                d = l.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (d -= r[0].swiperSlideOffset);
              var c =
                  (s + (n.centeredSlides ? t.minTranslate() : 0) - d) /
                  (l.swiperSlideSize + n.spaceBetween),
                u =
                  (s - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) /
                  (l.swiperSlideSize + n.spaceBetween),
                p = -(s - d),
                f = p + t.slidesSizesGrid[o],
                h =
                  (p >= 0 && p < t.size - 1) ||
                  (f > 1 && f <= t.size) ||
                  (p <= 0 && f >= t.size);
              h &&
                (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(o),
                r.eq(o).addClass(n.slideVisibleClass)),
                (l.progress = i ? -c : c),
                (l.originalProgress = i ? -u : u);
            }
            t.visibleSlides = pe(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if (void 0 === e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var r = t.params,
            i = t.maxTranslate() - t.minTranslate(),
            a = t.progress,
            s = t.isBeginning,
            o = t.isEnd,
            l = s,
            d = o;
          0 === i
            ? ((a = 0), (s = !0), (o = !0))
            : ((s = (a = (e - t.minTranslate()) / i) <= 0), (o = a >= 1)),
            Object.assign(t, { progress: a, isBeginning: s, isEnd: o }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !l && t.emit("reachBeginning toEdge"),
            o && !d && t.emit("reachEnd toEdge"),
            ((l && !s) || (d && !o)) && t.emit("fromEdge"),
            t.emit("progress", a);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            r = t.params,
            i = t.$wrapperEl,
            a = t.activeIndex,
            s = t.realIndex,
            o = t.virtual && r.virtual.enabled;
          n.removeClass(
            ""
              .concat(r.slideActiveClass, " ")
              .concat(r.slideNextClass, " ")
              .concat(r.slidePrevClass, " ")
              .concat(r.slideDuplicateActiveClass, " ")
              .concat(r.slideDuplicateNextClass, " ")
              .concat(r.slideDuplicatePrevClass)
          ),
            (e = o
              ? t.$wrapperEl.find(
                  "."
                    .concat(r.slideClass, '[data-swiper-slide-index="')
                    .concat(a, '"]')
                )
              : n.eq(a)).addClass(r.slideActiveClass),
            r.loop &&
              (e.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(s, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass)
                : i
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(s, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass));
          var l = e
            .nextAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop && 0 === l.length && (l = n.eq(0)).addClass(r.slideNextClass);
          var d = e
            .prevAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop && 0 === d.length && (d = n.eq(-1)).addClass(r.slidePrevClass),
            r.loop &&
              (l.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(l.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass)
                : i
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(l.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass),
              d.hasClass(r.slideDuplicateClass)
                ? i
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(d.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)
                : i
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(d.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            r = n.rtlTranslate ? n.translate : -n.translate,
            i = n.slidesGrid,
            a = n.snapGrid,
            s = n.params,
            o = n.activeIndex,
            l = n.realIndex,
            d = n.snapIndex,
            c = e;
          if (void 0 === c) {
            for (var u = 0; u < i.length; u += 1)
              void 0 !== i[u + 1]
                ? r >= i[u] && r < i[u + 1] - (i[u + 1] - i[u]) / 2
                  ? (c = u)
                  : r >= i[u] && r < i[u + 1] && (c = u + 1)
                : r >= i[u] && (c = u);
            s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (a.indexOf(r) >= 0) t = a.indexOf(r);
          else {
            var p = Math.min(s.slidesPerGroupSkip, c);
            t = p + Math.floor((c - p) / s.slidesPerGroup);
          }
          if ((t >= a.length && (t = a.length - 1), c !== o)) {
            var f = parseInt(
              n.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(n, {
              snapIndex: t,
              realIndex: f,
              previousIndex: o,
              activeIndex: c,
            }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              l !== f && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) &&
                n.emit("slideChange");
          } else t !== d && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            r = n.params,
            i = pe(e.target).closest(".".concat(r.slideClass))[0],
            a = !1;
          if (i)
            for (var s = 0; s < n.slides.length; s += 1)
              if (n.slides[s] === i) {
                (a = !0), (t = s);
                break;
              }
          if (!i || !a)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = i),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  pe(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = t),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var Me = {
        getTranslate: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.isHorizontal()
                ? "x"
                : "y",
            t = this,
            n = t.params,
            r = t.rtlTranslate,
            i = t.translate,
            a = t.$wrapperEl;
          if (n.virtualTranslate) return r ? -i : i;
          if (n.cssMode) return i;
          var s = we(a[0], e);
          return r && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          var n = this,
            r = n.rtlTranslate,
            i = n.params,
            a = n.$wrapperEl,
            s = n.wrapperEl,
            o = n.progress,
            l = 0,
            d = 0;
          n.isHorizontal() ? (l = r ? -e : e) : (d = e),
            i.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
            i.cssMode
              ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -l : -d)
              : i.virtualTranslate ||
                a.transform(
                  "translate3d("
                    .concat(l, "px, ")
                    .concat(d, "px, ")
                    .concat(0, "px)")
                ),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? l : d);
          var c = n.maxTranslate() - n.minTranslate();
          (0 === c ? 0 : (e - n.minTranslate()) / c) !== o &&
            n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            r =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3],
            i = arguments.length > 4 ? arguments[4] : void 0,
            a = this,
            s = a.params,
            o = a.wrapperEl;
          if (a.animating && s.preventInteractionOnTransition) return !1;
          var l,
            d = a.minTranslate(),
            c = a.maxTranslate();
          if (
            ((l = r && e > d ? d : r && e < c ? c : e),
            a.updateProgress(l),
            s.cssMode)
          ) {
            var u = a.isHorizontal();
            if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -l;
            else {
              var p;
              if (!a.support.smoothScroll)
                return (
                  Se({
                    swiper: a,
                    targetPosition: -l,
                    side: u ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo(
                ((p = {}),
                (0, fe.Z)(p, u ? "left" : "top", -l),
                (0, fe.Z)(p, "behavior", "smooth"),
                p)
              );
            }
            return !0;
          }
          return (
            0 === t
              ? (a.setTransition(0),
                a.setTranslate(l),
                n &&
                  (a.emit("beforeTransitionStart", t, i),
                  a.emit("transitionEnd")))
              : (a.setTransition(t),
                a.setTranslate(l),
                n &&
                  (a.emit("beforeTransitionStart", t, i),
                  a.emit("transitionStart")),
                a.animating ||
                  ((a.animating = !0),
                  a.onTranslateToWrapperTransitionEnd ||
                    (a.onTranslateToWrapperTransitionEnd = function (e) {
                      a &&
                        !a.destroyed &&
                        e.target === this &&
                        (a.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          a.onTranslateToWrapperTransitionEnd
                        ),
                        a.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          a.onTranslateToWrapperTransitionEnd
                        ),
                        (a.onTranslateToWrapperTransitionEnd = null),
                        delete a.onTranslateToWrapperTransitionEnd,
                        n && a.emit("transitionEnd"));
                    }),
                  a.$wrapperEl[0].addEventListener(
                    "transitionend",
                    a.onTranslateToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    a.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Le(e) {
        var t = e.swiper,
          n = e.runCallbacks,
          r = e.direction,
          i = e.step,
          a = t.activeIndex,
          s = t.previousIndex,
          o = r;
        if (
          (o || (o = a > s ? "next" : a < s ? "prev" : "reset"),
          t.emit("transition".concat(i)),
          n && a !== s)
        ) {
          if ("reset" === o)
            return void t.emit("slideResetTransition".concat(i));
          t.emit("slideChangeTransition".concat(i)),
            "next" === o
              ? t.emit("slideNextTransition".concat(i))
              : t.emit("slidePrevTransition".concat(i));
        }
      }
      var Ne = {
        setTransition: function (e, t) {
          var n = this;
          n.params.cssMode || n.$wrapperEl.transition(e),
            n.emit("setTransition", e, t);
        },
        transitionStart: function () {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = this,
            r = n.params;
          r.cssMode ||
            (r.autoHeight && n.updateAutoHeight(),
            Le({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function () {
          var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = this,
            r = n.params;
          (n.animating = !1),
            r.cssMode ||
              (n.setTransition(0),
              Le({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
        },
      };
      var Ie = {
        slideTo: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0;
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                typeof e,
                "] given."
              )
            );
          if ("string" == typeof e) {
            var a = parseInt(e, 10),
              s = isFinite(a);
            if (!s)
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = a;
          }
          var o = this,
            l = e;
          l < 0 && (l = 0);
          var d = o.params,
            c = o.snapGrid,
            u = o.slidesGrid,
            p = o.previousIndex,
            f = o.activeIndex,
            h = o.rtlTranslate,
            v = o.wrapperEl,
            m = o.enabled;
          if (
            (o.animating && d.preventInteractionOnTransition) ||
            (!m && !r && !i)
          )
            return !1;
          var g = Math.min(o.params.slidesPerGroupSkip, l),
            w = g + Math.floor((l - g) / o.params.slidesPerGroup);
          w >= c.length && (w = c.length - 1),
            (f || d.initialSlide || 0) === (p || 0) &&
              n &&
              o.emit("beforeSlideChangeStart");
          var y,
            b = -c[w];
          if ((o.updateProgress(b), d.normalizeSlideIndex))
            for (var E = 0; E < u.length; E += 1) {
              var x = -Math.floor(100 * b),
                S = Math.floor(100 * u[E]),
                T = Math.floor(100 * u[E + 1]);
              void 0 !== u[E + 1]
                ? x >= S && x < T - (T - S) / 2
                  ? (l = E)
                  : x >= S && x < T && (l = E + 1)
                : x >= S && (l = E);
            }
          if (o.initialized && l !== f) {
            if (!o.allowSlideNext && b < o.translate && b < o.minTranslate())
              return !1;
            if (
              !o.allowSlidePrev &&
              b > o.translate &&
              b > o.maxTranslate() &&
              (f || 0) !== l
            )
              return !1;
          }
          if (
            ((y = l > f ? "next" : l < f ? "prev" : "reset"),
            (h && -b === o.translate) || (!h && b === o.translate))
          )
            return (
              o.updateActiveIndex(l),
              d.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              "slide" !== d.effect && o.setTranslate(b),
              "reset" !== y && (o.transitionStart(n, y), o.transitionEnd(n, y)),
              !1
            );
          if (d.cssMode) {
            var C = o.isHorizontal(),
              k = h ? b : -b;
            if (0 === t) {
              var P = o.virtual && o.params.virtual.enabled;
              P &&
                ((o.wrapperEl.style.scrollSnapType = "none"),
                (o._immediateVirtual = !0)),
                (v[C ? "scrollLeft" : "scrollTop"] = k),
                P &&
                  requestAnimationFrame(function () {
                    (o.wrapperEl.style.scrollSnapType = ""),
                      (o._swiperImmediateVirtual = !1);
                  });
            } else {
              var _;
              if (!o.support.smoothScroll)
                return (
                  Se({
                    swiper: o,
                    targetPosition: k,
                    side: C ? "left" : "top",
                  }),
                  !0
                );
              v.scrollTo(
                ((_ = {}),
                (0, fe.Z)(_, C ? "left" : "top", k),
                (0, fe.Z)(_, "behavior", "smooth"),
                _)
              );
            }
            return !0;
          }
          return (
            0 === t
              ? (o.setTransition(0),
                o.setTranslate(b),
                o.updateActiveIndex(l),
                o.updateSlidesClasses(),
                o.emit("beforeTransitionStart", t, r),
                o.transitionStart(n, y),
                o.transitionEnd(n, y))
              : (o.setTransition(t),
                o.setTranslate(b),
                o.updateActiveIndex(l),
                o.updateSlidesClasses(),
                o.emit("beforeTransitionStart", t, r),
                o.transitionStart(n, y),
                o.animating ||
                  ((o.animating = !0),
                  o.onSlideToWrapperTransitionEnd ||
                    (o.onSlideToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          o.onSlideToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          o.onSlideToWrapperTransitionEnd
                        ),
                        (o.onSlideToWrapperTransitionEnd = null),
                        delete o.onSlideToWrapperTransitionEnd,
                        o.transitionEnd(n, y));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    "transitionend",
                    o.onSlideToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    o.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.params.speed,
            n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this,
            a = e;
          return i.params.loop && (a += i.loopedSlides), i.slideTo(a, t, n, r);
        },
        slideNext: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = this,
            i = r.animating,
            a = r.enabled,
            s = r.params;
          if (!a) return r;
          var o = s.slidesPerGroup;
          "auto" === s.slidesPerView &&
            1 === s.slidesPerGroup &&
            s.slidesPerGroupAuto &&
            (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          var l = r.activeIndex < s.slidesPerGroupSkip ? 1 : o;
          if (s.loop) {
            if (i && s.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return r.slideTo(r.activeIndex + l, e, t, n);
        },
        slidePrev: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = this,
            i = r.params,
            a = r.animating,
            s = r.snapGrid,
            o = r.slidesGrid,
            l = r.rtlTranslate,
            d = r.enabled;
          if (!d) return r;
          if (i.loop) {
            if (a && i.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          var c = l ? r.translate : -r.translate;
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var p,
            f = u(c),
            h = s.map(function (e) {
              return u(e);
            }),
            v = s[h.indexOf(f) - 1];
          void 0 === v &&
            i.cssMode &&
            (s.forEach(function (e, t) {
              f >= e && (p = t);
            }),
            void 0 !== p && (v = s[p > 0 ? p - 1 : p]));
          var m = 0;
          return (
            void 0 !== v &&
              ((m = o.indexOf(v)) < 0 && (m = r.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((m = m - r.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            r.slideTo(m, e, t, n)
          );
        },
        slideReset: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = this;
          return r.slideTo(r.activeIndex, e, t, n);
        },
        slideToClosest: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.params.speed,
            t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            i = this,
            a = i.activeIndex,
            s = Math.min(i.params.slidesPerGroupSkip, a),
            o = s + Math.floor((a - s) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[o]) {
            var d = i.snapGrid[o],
              c = i.snapGrid[o + 1];
            l - d > (c - d) * r && (a += i.params.slidesPerGroup);
          } else {
            var u = i.snapGrid[o - 1],
              p = i.snapGrid[o];
            l - u <= (p - u) * r && (a -= i.params.slidesPerGroup);
          }
          return (
            (a = Math.max(a, 0)),
            (a = Math.min(a, i.slidesGrid.length - 1)),
            i.slideTo(a, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            r = t.$wrapperEl,
            i =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            a = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(
              pe(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              n.centeredSlides
                ? a < t.loopedSlides - i / 2 ||
                  a > t.slides.length - t.loopedSlides + i / 2
                  ? (t.loopFix(),
                    (a = r
                      .children(
                        "."
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    ve(function () {
                      t.slideTo(a);
                    }))
                  : t.slideTo(a)
                : a > t.slides.length - i
                ? (t.loopFix(),
                  (a = r
                    .children(
                      "."
                        .concat(n.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(n.slideDuplicateClass, ")")
                    )
                    .eq(0)
                    .index()),
                  ve(function () {
                    t.slideTo(a);
                  }))
                : t.slideTo(a);
          } else t.slideTo(a);
        },
      };
      var ze = {
        loopCreate: function () {
          var e = this,
            t = V(),
            n = e.params,
            r = e.$wrapperEl,
            i = pe(r.children()[0].parentNode);
          i.children(
            ".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)
          ).remove();
          var a = i.children(".".concat(n.slideClass));
          if (n.loopFillGroupWithBlank) {
            var s = n.slidesPerGroup - (a.length % n.slidesPerGroup);
            if (s !== n.slidesPerGroup) {
              for (var o = 0; o < s; o += 1) {
                var l = pe(t.createElement("div")).addClass(
                  "".concat(n.slideClass, " ").concat(n.slideBlankClass)
                );
                i.append(l);
              }
              a = i.children(".".concat(n.slideClass));
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = a.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > a.length && (e.loopedSlides = a.length);
          var d = [],
            c = [];
          a.each(function (t, n) {
            var r = pe(t);
            n < e.loopedSlides && c.push(t),
              n < a.length && n >= a.length - e.loopedSlides && d.push(t),
              r.attr("data-swiper-slide-index", n);
          });
          for (var u = 0; u < c.length; u += 1)
            i.append(pe(c[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var p = d.length - 1; p >= 0; p -= 1)
            i.prepend(pe(d[p].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            n = e.activeIndex,
            r = e.slides,
            i = e.loopedSlides,
            a = e.allowSlidePrev,
            s = e.allowSlideNext,
            o = e.snapGrid,
            l = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var d = -o[n] - e.getTranslate();
          if (n < i)
            (t = r.length - 3 * i + n),
              (t += i),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
          else if (n >= r.length - i) {
            (t = -r.length + n + i),
              (t += i),
              e.slideTo(t, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((l ? -e.translate : e.translate) - d);
          }
          (e.allowSlidePrev = a), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            r = e.slides;
          t
            .children(
              "."
                .concat(n.slideClass, ".")
                .concat(n.slideDuplicateClass, ",.")
                .concat(n.slideClass, ".")
                .concat(n.slideBlankClass)
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function Ae(e) {
        var t = this,
          n = V(),
          r = $(),
          i = t.touchEventsData,
          a = t.params,
          s = t.touches;
        if (t.enabled && (!t.animating || !a.preventInteractionOnTransition)) {
          !t.animating && a.cssMode && a.loop && t.loopFix();
          var o = e;
          o.originalEvent && (o = o.originalEvent);
          var l = pe(o.target);
          if (
            ("wrapper" !== a.touchEventsTarget ||
              l.closest(t.wrapperEl).length) &&
            ((i.isTouchEvent = "touchstart" === o.type),
            (i.isTouchEvent || !("which" in o) || 3 !== o.which) &&
              !(
                (!i.isTouchEvent && "button" in o && o.button > 0) ||
                (i.isTouched && i.isMoved)
              ))
          ) {
            !!a.noSwipingClass &&
              "" !== a.noSwipingClass &&
              o.target &&
              o.target.shadowRoot &&
              e.path &&
              e.path[0] &&
              (l = pe(e.path[0]));
            var d = a.noSwipingSelector
                ? a.noSwipingSelector
                : ".".concat(a.noSwipingClass),
              c = !(!o.target || !o.target.shadowRoot);
            if (
              a.noSwiping &&
              (c
                ? (function (e) {
                    function t(n) {
                      return n && n !== V() && n !== $()
                        ? (n.assignedSlot && (n = n.assignedSlot),
                          n.closest(e) || t(n.getRootNode().host))
                        : null;
                    }
                    return t(
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this
                    );
                  })(d, o.target)
                : l.closest(d)[0])
            )
              t.allowClick = !0;
            else if (!a.swipeHandler || l.closest(a.swipeHandler)[0]) {
              (s.currentX =
                "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
                (s.currentY =
                  "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
              var u = s.currentX,
                p = s.currentY,
                f = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                h = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
              if (f && (u <= h || u >= r.innerWidth - h)) {
                if ("prevent" !== f) return;
                e.preventDefault();
              }
              if (
                (Object.assign(i, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (s.startX = u),
                (s.startY = p),
                (i.touchStartTime = me()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                a.threshold > 0 && (i.allowThresholdMove = !1),
                "touchstart" !== o.type)
              ) {
                var v = !0;
                l.is(i.focusableElements) && (v = !1),
                  n.activeElement &&
                    pe(n.activeElement).is(i.focusableElements) &&
                    n.activeElement !== l[0] &&
                    n.activeElement.blur();
                var m = v && t.allowTouchMove && a.touchStartPreventDefault;
                (!a.touchStartForcePreventDefault && !m) ||
                  l[0].isContentEditable ||
                  o.preventDefault();
              }
              t.emit("touchStart", o);
            }
          }
        }
      }
      function De(e) {
        var t = V(),
          n = this,
          r = n.touchEventsData,
          i = n.params,
          a = n.touches,
          s = n.rtlTranslate;
        if (n.enabled) {
          var o = e;
          if ((o.originalEvent && (o = o.originalEvent), r.isTouched)) {
            if (!r.isTouchEvent || "touchmove" === o.type) {
              var l =
                  "touchmove" === o.type &&
                  o.targetTouches &&
                  (o.targetTouches[0] || o.changedTouches[0]),
                d = "touchmove" === o.type ? l.pageX : o.pageX,
                c = "touchmove" === o.type ? l.pageY : o.pageY;
              if (o.preventedByNestedSwiper)
                return (a.startX = d), void (a.startY = c);
              if (!n.allowTouchMove)
                return (
                  (n.allowClick = !1),
                  void (
                    r.isTouched &&
                    (Object.assign(a, {
                      startX: d,
                      startY: c,
                      currentX: d,
                      currentY: c,
                    }),
                    (r.touchStartTime = me()))
                  )
                );
              if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                if (n.isVertical()) {
                  if (
                    (c < a.startY && n.translate <= n.maxTranslate()) ||
                    (c > a.startY && n.translate >= n.minTranslate())
                  )
                    return (r.isTouched = !1), void (r.isMoved = !1);
                } else if (
                  (d < a.startX && n.translate <= n.maxTranslate()) ||
                  (d > a.startX && n.translate >= n.minTranslate())
                )
                  return;
              if (
                r.isTouchEvent &&
                t.activeElement &&
                o.target === t.activeElement &&
                pe(o.target).is(r.focusableElements)
              )
                return (r.isMoved = !0), void (n.allowClick = !1);
              if (
                (r.allowTouchCallbacks && n.emit("touchMove", o),
                !(o.targetTouches && o.targetTouches.length > 1))
              ) {
                (a.currentX = d), (a.currentY = c);
                var u = a.currentX - a.startX,
                  p = a.currentY - a.startY;
                if (
                  !(
                    n.params.threshold &&
                    Math.sqrt(Math.pow(u, 2) + Math.pow(p, 2)) <
                      n.params.threshold
                  )
                ) {
                  var f;
                  if (void 0 === r.isScrolling)
                    (n.isHorizontal() && a.currentY === a.startY) ||
                    (n.isVertical() && a.currentX === a.startX)
                      ? (r.isScrolling = !1)
                      : u * u + p * p >= 25 &&
                        ((f =
                          (180 * Math.atan2(Math.abs(p), Math.abs(u))) /
                          Math.PI),
                        (r.isScrolling = n.isHorizontal()
                          ? f > i.touchAngle
                          : 90 - f > i.touchAngle));
                  if (
                    (r.isScrolling && n.emit("touchMoveOpposite", o),
                    void 0 === r.startMoving &&
                      ((a.currentX === a.startX && a.currentY === a.startY) ||
                        (r.startMoving = !0)),
                    r.isScrolling)
                  )
                    r.isTouched = !1;
                  else if (r.startMoving) {
                    (n.allowClick = !1),
                      !i.cssMode && o.cancelable && o.preventDefault(),
                      i.touchMoveStopPropagation &&
                        !i.nested &&
                        o.stopPropagation(),
                      r.isMoved ||
                        (i.loop && !i.cssMode && n.loopFix(),
                        (r.startTranslate = n.getTranslate()),
                        n.setTransition(0),
                        n.animating &&
                          n.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (r.allowMomentumBounce = !1),
                        !i.grabCursor ||
                          (!0 !== n.allowSlideNext &&
                            !0 !== n.allowSlidePrev) ||
                          n.setGrabCursor(!0),
                        n.emit("sliderFirstMove", o)),
                      n.emit("sliderMove", o),
                      (r.isMoved = !0);
                    var h = n.isHorizontal() ? u : p;
                    (a.diff = h),
                      (h *= i.touchRatio),
                      s && (h = -h),
                      (n.swipeDirection = h > 0 ? "prev" : "next"),
                      (r.currentTranslate = h + r.startTranslate);
                    var v = !0,
                      m = i.resistanceRatio;
                    if (
                      (i.touchReleaseOnEdges && (m = 0),
                      h > 0 && r.currentTranslate > n.minTranslate()
                        ? ((v = !1),
                          i.resistance &&
                            (r.currentTranslate =
                              n.minTranslate() -
                              1 +
                              Math.pow(
                                -n.minTranslate() + r.startTranslate + h,
                                m
                              )))
                        : h < 0 &&
                          r.currentTranslate < n.maxTranslate() &&
                          ((v = !1),
                          i.resistance &&
                            (r.currentTranslate =
                              n.maxTranslate() +
                              1 -
                              Math.pow(
                                n.maxTranslate() - r.startTranslate - h,
                                m
                              ))),
                      v && (o.preventedByNestedSwiper = !0),
                      !n.allowSlideNext &&
                        "next" === n.swipeDirection &&
                        r.currentTranslate < r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      !n.allowSlidePrev &&
                        "prev" === n.swipeDirection &&
                        r.currentTranslate > r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      n.allowSlidePrev ||
                        n.allowSlideNext ||
                        (r.currentTranslate = r.startTranslate),
                      i.threshold > 0)
                    ) {
                      if (!(Math.abs(h) > i.threshold || r.allowThresholdMove))
                        return void (r.currentTranslate = r.startTranslate);
                      if (!r.allowThresholdMove)
                        return (
                          (r.allowThresholdMove = !0),
                          (a.startX = a.currentX),
                          (a.startY = a.currentY),
                          (r.currentTranslate = r.startTranslate),
                          void (a.diff = n.isHorizontal()
                            ? a.currentX - a.startX
                            : a.currentY - a.startY)
                        );
                    }
                    i.followFinger &&
                      !i.cssMode &&
                      (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
                        i.watchSlidesProgress) &&
                        (n.updateActiveIndex(), n.updateSlidesClasses()),
                      n.params.freeMode &&
                        i.freeMode.enabled &&
                        n.freeMode &&
                        n.freeMode.onTouchMove(),
                      n.updateProgress(r.currentTranslate),
                      n.setTranslate(r.currentTranslate));
                  }
                }
              }
            }
          } else
            r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
        }
      }
      function Ge(e) {
        var t = this,
          n = t.touchEventsData,
          r = t.params,
          i = t.touches,
          a = t.rtlTranslate,
          s = t.slidesGrid;
        if (t.enabled) {
          var o = e;
          if (
            (o.originalEvent && (o = o.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", o),
            (n.allowTouchCallbacks = !1),
            !n.isTouched)
          )
            return (
              n.isMoved && r.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          r.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var l,
            d = me(),
            c = d - n.touchStartTime;
          if (
            (t.allowClick &&
              (t.updateClickedSlide(o),
              t.emit("tap click", o),
              c < 300 &&
                d - n.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", o)),
            (n.lastClickTime = me()),
            ve(function () {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === i.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          if (
            ((n.isTouched = !1),
            (n.isMoved = !1),
            (n.startMoving = !1),
            (l = r.followFinger
              ? a
                ? t.translate
                : -t.translate
              : -n.currentTranslate),
            !r.cssMode)
          )
            if (t.params.freeMode && r.freeMode.enabled)
              t.freeMode.onTouchEnd({ currentPos: l });
            else {
              for (
                var u = 0, p = t.slidesSizesGrid[0], f = 0;
                f < s.length;
                f += f < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
              ) {
                var h = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                void 0 !== s[f + h]
                  ? l >= s[f] &&
                    l < s[f + h] &&
                    ((u = f), (p = s[f + h] - s[f]))
                  : l >= s[f] &&
                    ((u = f), (p = s[s.length - 1] - s[s.length - 2]));
              }
              var v = (l - s[u]) / p,
                m = u < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
              if (c > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                  (v >= r.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)),
                  "prev" === t.swipeDirection &&
                    (v > 1 - r.longSwipesRatio
                      ? t.slideTo(u + m)
                      : t.slideTo(u));
              } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation &&
                (o.target === t.navigation.nextEl ||
                  o.target === t.navigation.prevEl)
                  ? o.target === t.navigation.nextEl
                    ? t.slideTo(u + m)
                    : t.slideTo(u)
                  : ("next" === t.swipeDirection && t.slideTo(u + m),
                    "prev" === t.swipeDirection && t.slideTo(u));
              }
            }
        }
      }
      function je() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var r = e.allowSlideNext,
            i = e.allowSlidePrev,
            a = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = r),
            e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
        }
      }
      function Be(e) {
        var t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function Fe() {
        var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var r = e.maxTranslate() - e.minTranslate();
          (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
            e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
      }
      var Re = !1;
      function Ze() {}
      var He = function (e, t) {
        var n = V(),
          r = e.params,
          i = e.touchEvents,
          a = e.el,
          s = e.wrapperEl,
          o = e.device,
          l = e.support,
          d = !!r.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (l.touch) {
          var p = !(
            "touchstart" !== i.start ||
            !l.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          a[c](i.start, e.onTouchStart, p),
            a[c](
              i.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: d } : d
            ),
            a[c](i.end, e.onTouchEnd, p),
            i.cancel && a[c](i.cancel, e.onTouchEnd, p);
        } else
          a[c](i.start, e.onTouchStart, !1),
            n[c](i.move, e.onTouchMove, d),
            n[c](i.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          a[c]("click", e.onClick, !0),
          r.cssMode && s[c]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[u](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                je,
                !0
              )
            : e[u]("observerUpdate", je, !0);
      };
      var Ve = {
          attachEvents: function () {
            var e = this,
              t = V(),
              n = e.params,
              r = e.support;
            (e.onTouchStart = Ae.bind(e)),
              (e.onTouchMove = De.bind(e)),
              (e.onTouchEnd = Ge.bind(e)),
              n.cssMode && (e.onScroll = Fe.bind(e)),
              (e.onClick = Be.bind(e)),
              r.touch &&
                !Re &&
                (t.addEventListener("touchstart", Ze), (Re = !0)),
              He(e, "on");
          },
          detachEvents: function () {
            He(this, "off");
          },
        },
        We = function (e, t) {
          return e.grid && t.grid && t.grid.rows > 1;
        };
      var $e = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            n = e.initialized,
            r = e.loopedSlides,
            i = void 0 === r ? 0 : r,
            a = e.params,
            s = e.$el,
            o = a.breakpoints;
          if (o && (!o || 0 !== Object.keys(o).length)) {
            var l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (l && e.currentBreakpoint !== l) {
              var d = (l in o ? o[l] : void 0) || e.originalParams,
                c = We(e, a),
                u = We(e, d),
                p = a.enabled;
              c && !u
                ? (s.removeClass(
                    ""
                      .concat(a.containerModifierClass, "grid ")
                      .concat(a.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses())
                : !c &&
                  u &&
                  (s.addClass("".concat(a.containerModifierClass, "grid")),
                  ((d.grid.fill && "column" === d.grid.fill) ||
                    (!d.grid.fill && "column" === a.grid.fill)) &&
                    s.addClass(
                      "".concat(a.containerModifierClass, "grid-column")
                    ),
                  e.emitContainerClasses());
              var f = d.direction && d.direction !== a.direction,
                h = a.loop && (d.slidesPerView !== a.slidesPerView || f);
              f && n && e.changeDirection(), Ee(e.params, d);
              var v = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                p && !v ? e.disable() : !p && v && e.enable(),
                (e.currentBreakpoint = l),
                e.emit("_beforeBreakpoint", d),
                h &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "window",
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (e && ("container" !== t || n)) {
            var r = !1,
              i = $(),
              a = "window" === t ? i.innerHeight : n.clientHeight,
              s = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: a * t, point: e };
                }
                return { value: e, point: e };
              });
            s.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var o = 0; o < s.length; o += 1) {
              var l = s[o],
                d = l.point,
                c = l.value;
              "window" === t
                ? i.matchMedia("(min-width: ".concat(c, "px)")).matches &&
                  (r = d)
                : c <= n.clientWidth && (r = d);
            }
            return r || "max";
          }
        },
      };
      var qe = {
        addClasses: function () {
          var e,
            t,
            n,
            r = this,
            i = r.classNames,
            a = r.params,
            s = r.rtl,
            o = r.$el,
            l = r.device,
            d = r.support,
            c =
              ((e = [
                "initialized",
                a.direction,
                { "pointer-events": !d.touch },
                { "free-mode": r.params.freeMode && a.freeMode.enabled },
                { autoheight: a.autoHeight },
                { rtl: s },
                { grid: a.grid && a.grid.rows > 1 },
                {
                  "grid-column":
                    a.grid && a.grid.rows > 1 && "column" === a.grid.fill,
                },
                { android: l.android },
                { ios: l.ios },
                { "css-mode": a.cssMode },
                { centered: a.cssMode && a.centeredSlides },
              ]),
              (t = a.containerModifierClass),
              (n = []),
              e.forEach(function (e) {
                "object" == typeof e
                  ? Object.keys(e).forEach(function (r) {
                      e[r] && n.push(t + r);
                    })
                  : "string" == typeof e && n.push(t + e);
              }),
              n);
          i.push.apply(i, (0, j.Z)(c)),
            o.addClass((0, j.Z)(i).join(" ")),
            r.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        },
      };
      var Xe = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function Ye(e, t) {
        return function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = Object.keys(n)[0],
            i = n[r];
          "object" == typeof i && null !== i
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in i
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" != typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  Ee(t, n))
                : Ee(t, n))
            : Ee(t, n);
        };
      }
      var Ue = {
          eventsEmitter: _e,
          update: Oe,
          translate: Me,
          transition: Ne,
          slide: Ie,
          loop: ze,
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (
                !(
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
              ) {
                var n =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (n.style.cursor = "move"),
                  (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                  (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                  (n.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: Ve,
          breakpoints: $e,
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.isLocked,
                n = e.params,
                r = n.slidesOffsetBefore;
              if (r) {
                var i = e.slides.length - 1,
                  a = e.slidesGrid[i] + e.slidesSizesGrid[i] + 2 * r;
                e.isLocked = e.size > a;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: qe,
          images: {
            loadImage: function (e, t, n, r, i, a) {
              var s,
                o = $();
              function l() {
                a && a();
              }
              pe(e).parent("picture")[0] || (e.complete && i)
                ? l()
                : t
                ? (((s = new o.Image()).onload = l),
                  (s.onerror = l),
                  r && (s.sizes = r),
                  n && (s.srcset = n),
                  t && (s.src = t))
                : l();
            },
            preloadImages: function () {
              var e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                var r = e.imagesToLoad[n];
                e.loadImage(
                  r,
                  r.currentSrc || r.getAttribute("src"),
                  r.srcset || r.getAttribute("srcset"),
                  r.sizes || r.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        Ke = {},
        Je = (function () {
          function e() {
            var t, n;
            (0, B.Z)(this, e);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            if (
              (1 === i.length &&
              i[0].constructor &&
              "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
                ? (n = i[0])
                : ((t = i[0]), (n = i[1])),
              n || (n = {}),
              (n = Ee({}, n)),
              t && !n.el && (n.el = t),
              n.el && pe(n.el).length > 1)
            ) {
              var s = [];
              return (
                pe(n.el).each(function (t) {
                  var r = Ee({}, n, { el: t });
                  s.push(new e(r));
                }),
                s
              );
            }
            var o,
              l = this;
            ((l.__swiper__ = !0),
            (l.support = Te()),
            (l.device = ke({ userAgent: n.userAgent })),
            (l.browser = Pe()),
            (l.eventsListeners = {}),
            (l.eventsAnyListeners = []),
            (l.modules = (0, j.Z)(l.__modules__)),
            n.modules && Array.isArray(n.modules)) &&
              (o = l.modules).push.apply(o, (0, j.Z)(n.modules));
            var d = {};
            l.modules.forEach(function (e) {
              e({
                swiper: l,
                extendParams: Ye(n, d),
                on: l.on.bind(l),
                once: l.once.bind(l),
                off: l.off.bind(l),
                emit: l.emit.bind(l),
              });
            });
            var c,
              u,
              p = Ee({}, Xe, d);
            return (
              (l.params = Ee({}, p, Ke, n)),
              (l.originalParams = Ee({}, l.params)),
              (l.passedParams = Ee({}, n)),
              l.params &&
                l.params.on &&
                Object.keys(l.params.on).forEach(function (e) {
                  l.on(e, l.params.on[e]);
                }),
              l.params && l.params.onAny && l.onAny(l.params.onAny),
              (l.$ = pe),
              Object.assign(l, {
                enabled: l.params.enabled,
                el: t,
                classNames: [],
                slides: pe(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === l.params.direction;
                },
                isVertical: function () {
                  return "vertical" === l.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEvents:
                  ((c = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                  (u = ["pointerdown", "pointermove", "pointerup"]),
                  (l.touchEventsTouch = {
                    start: c[0],
                    move: c[1],
                    end: c[2],
                    cancel: c[3],
                  }),
                  (l.touchEventsDesktop = {
                    start: u[0],
                    move: u[1],
                    end: u[2],
                  }),
                  l.support.touch || !l.params.simulateTouch
                    ? l.touchEventsTouch
                    : l.touchEventsDesktop),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: l.params.focusableElements,
                  lastClickTime: me(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              l.emit("_swiper"),
              l.params.init && l.init(),
              l
            );
          }
          return (
            (0, F.Z)(
              e,
              [
                {
                  key: "enable",
                  value: function () {
                    var e = this;
                    e.enabled ||
                      ((e.enabled = !0),
                      e.params.grabCursor && e.setGrabCursor(),
                      e.emit("enable"));
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var e = this;
                    e.enabled &&
                      ((e.enabled = !1),
                      e.params.grabCursor && e.unsetGrabCursor(),
                      e.emit("disable"));
                  },
                },
                {
                  key: "setProgress",
                  value: function (e, t) {
                    var n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var r = n.minTranslate(),
                      i = (n.maxTranslate() - r) * e + r;
                    n.translateTo(i, void 0 === t ? 0 : t),
                      n.updateActiveIndex(),
                      n.updateSlidesClasses();
                  },
                },
                {
                  key: "emitContainerClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = e.el.className.split(" ").filter(function (t) {
                        return (
                          0 === t.indexOf("swiper") ||
                          0 === t.indexOf(e.params.containerModifierClass)
                        );
                      });
                      e.emit("_containerClasses", t.join(" "));
                    }
                  },
                },
                {
                  key: "getSlideClasses",
                  value: function (e) {
                    var t = this;
                    return e.className
                      .split(" ")
                      .filter(function (e) {
                        return (
                          0 === e.indexOf("swiper-slide") ||
                          0 === e.indexOf(t.params.slideClass)
                        );
                      })
                      .join(" ");
                  },
                },
                {
                  key: "emitSlidesClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = [];
                      e.slides.each(function (n) {
                        var r = e.getSlideClasses(n);
                        t.push({ slideEl: n, classNames: r }),
                          e.emit("_slideClass", n, r);
                      }),
                        e.emit("_slideClasses", t);
                    }
                  },
                },
                {
                  key: "slidesPerViewDynamic",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "current",
                      t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = this,
                      r = n.params,
                      i = n.slides,
                      a = n.slidesGrid,
                      s = n.slidesSizesGrid,
                      o = n.size,
                      l = n.activeIndex,
                      d = 1;
                    if (r.centeredSlides) {
                      for (
                        var c, u = i[l].swiperSlideSize, p = l + 1;
                        p < i.length;
                        p += 1
                      )
                        i[p] &&
                          !c &&
                          ((d += 1),
                          (u += i[p].swiperSlideSize) > o && (c = !0));
                      for (var f = l - 1; f >= 0; f -= 1)
                        i[f] &&
                          !c &&
                          ((d += 1),
                          (u += i[f].swiperSlideSize) > o && (c = !0));
                    } else if ("current" === e)
                      for (var h = l + 1; h < i.length; h += 1) {
                        var v = t ? a[h] + s[h] - a[l] < o : a[h] - a[l] < o;
                        v && (d += 1);
                      }
                    else
                      for (var m = l - 1; m >= 0; m -= 1) {
                        var g = a[l] - a[m] < o;
                        g && (d += 1);
                      }
                    return d;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        n = e.params;
                      n.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                          ? (r(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                              e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                        n.watchOverflow &&
                          t !== e.snapGrid &&
                          e.checkOverflow(),
                        e.emit("update");
                    }
                    function r() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(n),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e) {
                    var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      n = this,
                      r = n.params.direction;
                    return (
                      e || (e = "horizontal" === r ? "vertical" : "horizontal"),
                      e === r ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (n.$el
                          .removeClass(
                            "".concat(n.params.containerModifierClass).concat(r)
                          )
                          .addClass(
                            "".concat(n.params.containerModifierClass).concat(e)
                          ),
                        n.emitContainerClasses(),
                        (n.params.direction = e),
                        n.slides.each(function (t) {
                          "vertical" === e
                            ? (t.style.width = "")
                            : (t.style.height = "");
                        }),
                        n.emit("changeDirection"),
                        t && n.update()),
                      n
                    );
                  },
                },
                {
                  key: "mount",
                  value: function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var n = pe(e || t.params.el);
                    if (!(e = n[0])) return !1;
                    e.swiper = t;
                    var r = function () {
                        return ".".concat(
                          (t.params.wrapperClass || "")
                            .trim()
                            .split(" ")
                            .join(".")
                        );
                      },
                      i = (function () {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                          var t = pe(e.shadowRoot.querySelector(r()));
                          return (
                            (t.children = function (e) {
                              return n.children(e);
                            }),
                            t
                          );
                        }
                        return n.children(r());
                      })();
                    if (0 === i.length && t.params.createElements) {
                      var a = V().createElement("div");
                      (i = pe(a)),
                        (a.className = t.params.wrapperClass),
                        n.append(a),
                        n
                          .children(".".concat(t.params.slideClass))
                          .each(function (e) {
                            i.append(e);
                          });
                    }
                    return (
                      Object.assign(t, {
                        $el: n,
                        el: e,
                        $wrapperEl: i,
                        wrapperEl: i[0],
                        mounted: !0,
                        rtl:
                          "rtl" === e.dir.toLowerCase() ||
                          "rtl" === n.css("direction"),
                        rtlTranslate:
                          "horizontal" === t.params.direction &&
                          ("rtl" === e.dir.toLowerCase() ||
                            "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === i.css("display"),
                      }),
                      !0
                    );
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t = this;
                    return (
                      t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                          ? t.slideTo(
                              t.params.initialSlide + t.loopedSlides,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            )
                          : t.slideTo(
                              t.params.initialSlide,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                      t
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1],
                      n = this,
                      r = n.params,
                      i = n.$el,
                      a = n.$wrapperEl,
                      s = n.slides;
                    return (
                      void 0 === n.params ||
                        n.destroyed ||
                        (n.emit("beforeDestroy"),
                        (n.initialized = !1),
                        n.detachEvents(),
                        r.loop && n.loopDestroy(),
                        t &&
                          (n.removeClasses(),
                          i.removeAttr("style"),
                          a.removeAttr("style"),
                          s &&
                            s.length &&
                            s
                              .removeClass(
                                [
                                  r.slideVisibleClass,
                                  r.slideActiveClass,
                                  r.slideNextClass,
                                  r.slidePrevClass,
                                ].join(" ")
                              )
                              .removeAttr("style")
                              .removeAttr("data-swiper-slide-index")),
                        n.emit("destroy"),
                        Object.keys(n.eventsListeners).forEach(function (e) {
                          n.off(e);
                        }),
                        !1 !== e && ((n.$el[0].swiper = null), he(n)),
                        (n.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    Ee(Ke, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return Ke;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return Xe;
                  },
                },
                {
                  key: "installModule",
                  value: function (t) {
                    e.prototype.__modules__ || (e.prototype.__modules__ = []);
                    var n = e.prototype.__modules__;
                    "function" == typeof t && n.indexOf(t) < 0 && n.push(t);
                  },
                },
                {
                  key: "use",
                  value: function (t) {
                    return Array.isArray(t)
                      ? (t.forEach(function (t) {
                          return e.installModule(t);
                        }),
                        e)
                      : (e.installModule(t), e);
                  },
                },
              ]
            ),
            e
          );
        })();
      Object.keys(Ue).forEach(function (e) {
        Object.keys(Ue[e]).forEach(function (t) {
          Je.prototype[t] = Ue[e][t];
        });
      }),
        Je.use([
          function (e) {
            var t = e.swiper,
              n = e.on,
              r = e.emit,
              i = $(),
              a = null,
              s = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              o = function () {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", function () {
              t.params.resizeObserver && void 0 !== i.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((a = new ResizeObserver(function (e) {
                    var n = t.width,
                      r = t.height,
                      i = n,
                      a = r;
                    e.forEach(function (e) {
                      var n = e.contentBoxSize,
                        r = e.contentRect,
                        s = e.target;
                      (s && s !== t.el) ||
                        ((i = r ? r.width : (n[0] || n).inlineSize),
                        (a = r ? r.height : (n[0] || n).blockSize));
                    }),
                      (i === n && a === r) || s();
                  })),
                  a.observe(t.el))
                : (i.addEventListener("resize", s),
                  i.addEventListener("orientationchange", o));
            }),
              n("destroy", function () {
                a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
                  i.removeEventListener("resize", s),
                  i.removeEventListener("orientationchange", o);
              });
          },
          function (e) {
            var t = e.swiper,
              n = e.extendParams,
              r = e.on,
              i = e.emit,
              a = [],
              s = $(),
              o = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = s.MutationObserver || s.WebkitMutationObserver,
                  r = new n(function (e) {
                    if (1 !== e.length) {
                      var t = function () {
                        i("observerUpdate", e[0]);
                      };
                      s.requestAnimationFrame
                        ? s.requestAnimationFrame(t)
                        : s.setTimeout(t, 0);
                    } else i("observerUpdate", e[0]);
                  });
                r.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  a.push(r);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", function () {
                if (t.params.observer) {
                  if (t.params.observeParents)
                    for (var e = t.$el.parents(), n = 0; n < e.length; n += 1)
                      o(e[n]);
                  o(t.$el[0], { childList: t.params.observeSlideChildren }),
                    o(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", function () {
                a.forEach(function (e) {
                  e.disconnect();
                }),
                  a.splice(0, a.length);
              });
          },
        ]);
      var Qe = Je;
      function et(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function tt(e, t) {
        var n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return n.indexOf(e) < 0;
          })
          .forEach(function (n) {
            void 0 === e[n]
              ? (e[n] = t[n])
              : et(t[n]) && et(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : tt(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function nt() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          e.navigation &&
          void 0 === e.navigation.nextEl &&
          void 0 === e.navigation.prevEl
        );
      }
      function rt() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.pagination && void 0 === e.pagination.el;
      }
      function it() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.scrollbar && void 0 === e.scrollbar.el;
      }
      function at() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          n = [];
        return (
          t.forEach(function (e) {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      var st = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function ot() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = { on: {} },
          n = {},
          r = {};
        tt(t, Qe.defaults),
          tt(t, Qe.extendedDefaults),
          (t._emitClasses = !0),
          (t.init = !1);
        var i = {},
          a = st.map(function (e) {
            return e.replace(/_/, "");
          });
        return (
          Object.keys(e).forEach(function (s) {
            a.indexOf(s) >= 0
              ? et(e[s])
                ? ((t[s] = {}), (r[s] = {}), tt(t[s], e[s]), tt(r[s], e[s]))
                : ((t[s] = e[s]), (r[s] = e[s]))
              : 0 === s.search(/on[A-Z]/) && "function" == typeof e[s]
              ? (n["".concat(s[2].toLowerCase()).concat(s.substr(3))] = e[s])
              : (i[s] = e[s]);
          }),
          ["navigation", "pagination", "scrollbar"].forEach(function (e) {
            !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
          }),
          { params: t, passedParams: r, rest: i, events: n }
        );
      }
      function lt(e) {
        return new Qe(e);
      }
      function dt(e, t) {
        var n = e.el,
          r = e.nextEl,
          i = e.prevEl,
          a = e.paginationEl,
          s = e.scrollbarEl,
          o = e.swiper;
        nt(t) &&
          r &&
          i &&
          ((o.params.navigation.nextEl = r),
          (o.originalParams.navigation.nextEl = r),
          (o.params.navigation.prevEl = i),
          (o.originalParams.navigation.prevEl = i)),
          rt(t) &&
            a &&
            ((o.params.pagination.el = a),
            (o.originalParams.pagination.el = a)),
          it(t) &&
            s &&
            ((o.params.scrollbar.el = s), (o.originalParams.scrollbar.el = s)),
          o.init(n);
      }
      function ct(e, t) {
        var n = t.slidesPerView;
        if (t.breakpoints) {
          var r = Qe.prototype.getBreakpoint(t.breakpoints),
            i = r in t.breakpoints ? t.breakpoints[r] : void 0;
          i && i.slidesPerView && (n = i.slidesPerView);
        }
        var a = Math.ceil(parseFloat(t.loopedSlides || n, 10));
        return (a += t.loopAdditionalSlides) > e.length && (a = e.length), a;
      }
      function ut(e, t, n) {
        var r = t.map(function (t, n) {
          return l.cloneElement(t, { swiper: e, "data-swiper-slide-index": n });
        });
        function i(e, t, r) {
          return l.cloneElement(e, {
            key: "".concat(e.key, "-duplicate-").concat(t, "-").concat(r),
            className: ""
              .concat(e.props.className || "", " ")
              .concat(n.slideDuplicateClass),
          });
        }
        if (n.loopFillGroupWithBlank) {
          var a = n.slidesPerGroup - (r.length % n.slidesPerGroup);
          if (a !== n.slidesPerGroup)
            for (var s = 0; s < a; s += 1) {
              var o = l.createElement("div", {
                className: ""
                  .concat(n.slideClass, " ")
                  .concat(n.slideBlankClass),
              });
              r.push(o);
            }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = r.length);
        var d = ct(r, n),
          c = [],
          u = [];
        return (
          r.forEach(function (e, t) {
            t < d && u.push(i(e, t, "prepend")),
              t < r.length && t >= r.length - d && c.push(i(e, t, "append"));
          }),
          e && (e.loopedSlides = d),
          [].concat(c, (0, j.Z)(r), u)
        );
      }
      function pt(e, t, n, r) {
        var i = [];
        if (!t) return i;
        var a = function (e) {
            i.indexOf(e) < 0 && i.push(e);
          },
          s = r.map(function (e) {
            return e.key;
          }),
          o = n.map(function (e) {
            return e.key;
          });
        return (
          s.join("") !== o.join("") && a("children"),
          r.length !== n.length && a("children"),
          st
            .filter(function (e) {
              return "_" === e[0];
            })
            .map(function (e) {
              return e.replace(/_/, "");
            })
            .forEach(function (n) {
              if (n in e && n in t)
                if (et(e[n]) && et(t[n])) {
                  var r = Object.keys(e[n]),
                    i = Object.keys(t[n]);
                  r.length !== i.length
                    ? a(n)
                    : (r.forEach(function (r) {
                        e[n][r] !== t[n][r] && a(n);
                      }),
                      i.forEach(function (r) {
                        e[n][r] !== t[n][r] && a(n);
                      }));
                } else e[n] !== t[n] && a(n);
            }),
          i
        );
      }
      function ft(e) {
        var t = [];
        return (
          l.Children.toArray(e).forEach(function (e) {
            e.type && "SwiperSlide" === e.type.displayName
              ? t.push(e)
              : e.props &&
                e.props.children &&
                ft(e.props.children).forEach(function (e) {
                  return t.push(e);
                });
          }),
          t
        );
      }
      function ht(e) {
        var t = [],
          n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          l.Children.toArray(e).forEach(function (e) {
            if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
            else if (e.props && e.props.slot && n[e.props.slot])
              n[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var r = ft(e.props.children);
              r.length > 0
                ? r.forEach(function (e) {
                    return t.push(e);
                  })
                : n["container-end"].push(e);
            } else n["container-end"].push(e);
          }),
          { slides: t, slots: n }
        );
      }
      function vt(e) {
        var t,
          n,
          r,
          i,
          a,
          s = e.swiper,
          o = e.slides,
          l = e.passedParams,
          d = e.changedParams,
          c = e.nextEl,
          u = e.prevEl,
          p = e.scrollbarEl,
          f = e.paginationEl,
          h = d.filter(function (e) {
            return "children" !== e && "direction" !== e;
          }),
          v = s.params,
          m = s.pagination,
          g = s.navigation,
          w = s.scrollbar,
          y = s.virtual,
          b = s.thumbs;
        d.includes("thumbs") &&
          l.thumbs &&
          l.thumbs.swiper &&
          v.thumbs &&
          !v.thumbs.swiper &&
          (t = !0),
          d.includes("controller") &&
            l.controller &&
            l.controller.control &&
            v.controller &&
            !v.controller.control &&
            (n = !0),
          d.includes("pagination") &&
            l.pagination &&
            (l.pagination.el || f) &&
            (v.pagination || !1 === v.pagination) &&
            m &&
            !m.el &&
            (r = !0),
          d.includes("scrollbar") &&
            l.scrollbar &&
            (l.scrollbar.el || p) &&
            (v.scrollbar || !1 === v.scrollbar) &&
            w &&
            !w.el &&
            (i = !0),
          d.includes("navigation") &&
            l.navigation &&
            (l.navigation.prevEl || u) &&
            (l.navigation.nextEl || c) &&
            (v.navigation || !1 === v.navigation) &&
            g &&
            !g.prevEl &&
            !g.nextEl &&
            (a = !0);
        (h.forEach(function (e) {
          if (et(v[e]) && et(l[e])) tt(v[e], l[e]);
          else {
            var t = l[e];
            (!0 !== t && !1 !== t) ||
            ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
              ? (v[e] = l[e])
              : !1 === t &&
                s[(n = e)] &&
                (s[n].destroy(),
                "navigation" === n
                  ? ((v[n].prevEl = void 0),
                    (v[n].nextEl = void 0),
                    (s[n].prevEl = void 0),
                    (s[n].nextEl = void 0))
                  : ((v[n].el = void 0), (s[n].el = void 0)));
          }
          var n;
        }),
        d.includes("children") && y && v.virtual.enabled
          ? ((y.slides = o), y.update(!0))
          : d.includes("children") &&
            s.lazy &&
            s.params.lazy.enabled &&
            s.lazy.load(),
        t) &&
          b.init() &&
          b.update(!0);
        n && (s.controller.control = v.controller.control),
          r && (f && (v.pagination.el = f), m.init(), m.render(), m.update()),
          i &&
            (p && (v.scrollbar.el = p),
            w.init(),
            w.updateSize(),
            w.setTranslate()),
          a &&
            (c && (v.navigation.nextEl = c),
            u && (v.navigation.prevEl = u),
            g.init(),
            g.update()),
          d.includes("allowSlideNext") && (s.allowSlideNext = l.allowSlideNext),
          d.includes("allowSlidePrev") && (s.allowSlidePrev = l.allowSlidePrev),
          d.includes("direction") && s.changeDirection(l.direction, !1),
          s.update();
      }
      function mt(e) {
        !e ||
          e.destroyed ||
          !e.params.virtual ||
          (e.params.virtual && !e.params.virtual.enabled) ||
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.lazy && e.params.lazy.enabled && e.lazy.load(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      }
      function gt(e, t, n) {
        if (!n) return null;
        var r = e.isHorizontal()
          ? (0, fe.Z)(
              {},
              e.rtlTranslate ? "right" : "left",
              "".concat(n.offset, "px")
            )
          : { top: "".concat(n.offset, "px") };
        return t
          .filter(function (e, t) {
            return t >= n.from && t <= n.to;
          })
          .map(function (t) {
            return l.cloneElement(t, { swiper: e, style: r });
          });
      }
      function wt(e, t) {
        return "undefined" == typeof window
          ? (0, l.useEffect)(e, t)
          : (0, l.useLayoutEffect)(e, t);
      }
      var yt = ["className", "tag", "wrapperTag", "children", "onSwiper"];
      function bt() {
        return (
          (bt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          bt.apply(this, arguments)
        );
      }
      var Et = (0, l.forwardRef)(function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.className,
          n = e.tag,
          r = void 0 === n ? "div" : n,
          i = e.wrapperTag,
          a = void 0 === i ? "div" : i,
          s = e.children,
          o = e.onSwiper,
          d = G(e, yt),
          c = arguments.length > 1 ? arguments[1] : void 0,
          u = !1,
          p = (0, l.useState)("swiper"),
          f = (0, A.Z)(p, 2),
          h = f[0],
          v = f[1],
          m = (0, l.useState)(null),
          g = (0, A.Z)(m, 2),
          w = g[0],
          y = g[1],
          b = (0, l.useState)(!1),
          E = (0, A.Z)(b, 2),
          x = E[0],
          S = E[1],
          T = (0, l.useRef)(!1),
          C = (0, l.useRef)(null),
          k = (0, l.useRef)(null),
          P = (0, l.useRef)(null),
          _ = (0, l.useRef)(null),
          O = (0, l.useRef)(null),
          M = (0, l.useRef)(null),
          L = (0, l.useRef)(null),
          N = (0, l.useRef)(null),
          I = ot(d),
          z = I.params,
          D = I.passedParams,
          j = I.rest,
          B = I.events,
          F = ht(s),
          R = F.slides,
          Z = F.slots,
          H = function () {
            S(!x);
          };
        if (
          (Object.assign(z.on, {
            _containerClasses: function (e, t) {
              v(t);
            },
          }),
          !C.current &&
            (Object.assign(z.on, B),
            (u = !0),
            (k.current = lt(z)),
            (k.current.loopCreate = function () {}),
            (k.current.loopDestroy = function () {}),
            z.loop && (k.current.loopedSlides = ct(R, z)),
            k.current.virtual && k.current.params.virtual.enabled))
        ) {
          k.current.virtual.slides = R;
          var V = {
            cache: !1,
            slides: R,
            renderExternal: y,
            renderExternalUpdate: !1,
          };
          tt(k.current.params.virtual, V),
            tt(k.current.originalParams.virtual, V);
        }
        k.current && k.current.on("_beforeBreakpoint", H);
        var W = function () {
            !u &&
              B &&
              k.current &&
              Object.keys(B).forEach(function (e) {
                k.current.on(e, B[e]);
              });
          },
          $ = function () {
            B &&
              k.current &&
              Object.keys(B).forEach(function (e) {
                k.current.off(e, B[e]);
              });
          };
        function q() {
          return z.virtual
            ? gt(k.current, R, w)
            : !z.loop || (k.current && k.current.destroyed)
            ? R.map(function (e) {
                return l.cloneElement(e, { swiper: k.current });
              })
            : ut(k.current, R, z);
        }
        return (
          (0, l.useEffect)(function () {
            return function () {
              k.current && k.current.off("_beforeBreakpoint", H);
            };
          }),
          (0, l.useEffect)(function () {
            !T.current &&
              k.current &&
              (k.current.emitSlidesClasses(), (T.current = !0));
          }),
          wt(function () {
            if ((c && (c.current = C.current), C.current))
              return (
                dt(
                  {
                    el: C.current,
                    nextEl: O.current,
                    prevEl: M.current,
                    paginationEl: L.current,
                    scrollbarEl: N.current,
                    swiper: k.current,
                  },
                  z
                ),
                o && o(k.current),
                function () {
                  k.current &&
                    !k.current.destroyed &&
                    k.current.destroy(!0, !1);
                }
              );
          }, []),
          wt(function () {
            W();
            var e = pt(D, P.current, R, _.current);
            return (
              (P.current = D),
              (_.current = R),
              e.length &&
                k.current &&
                !k.current.destroyed &&
                vt({
                  swiper: k.current,
                  slides: R,
                  passedParams: D,
                  changedParams: e,
                  nextEl: O.current,
                  prevEl: M.current,
                  scrollbarEl: N.current,
                  paginationEl: L.current,
                }),
              function () {
                $();
              }
            );
          }),
          wt(
            function () {
              mt(k.current);
            },
            [w]
          ),
          l.createElement(
            r,
            bt(
              {
                ref: C,
                className: at("".concat(h).concat(t ? " ".concat(t) : "")),
              },
              j
            ),
            Z["container-start"],
            nt(z) &&
              l.createElement(
                l.Fragment,
                null,
                l.createElement("div", {
                  ref: M,
                  className: "swiper-button-prev",
                }),
                l.createElement("div", {
                  ref: O,
                  className: "swiper-button-next",
                })
              ),
            it(z) &&
              l.createElement("div", { ref: N, className: "swiper-scrollbar" }),
            rt(z) &&
              l.createElement("div", {
                ref: L,
                className: "swiper-pagination",
              }),
            l.createElement(
              a,
              { className: "swiper-wrapper" },
              Z["wrapper-start"],
              q(),
              Z["wrapper-end"]
            ),
            Z["container-end"]
          )
        );
      });
      Et.displayName = "Swiper";
      var xt = [
        "tag",
        "children",
        "className",
        "swiper",
        "zoom",
        "virtualIndex",
      ];
      function St() {
        return (
          (St =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          St.apply(this, arguments)
        );
      }
      var Tt,
        Ct,
        kt = (0, l.forwardRef)(function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.tag,
            r = void 0 === n ? "div" : n,
            i = t.children,
            a = t.className,
            s = void 0 === a ? "" : a,
            o = t.swiper,
            d = t.zoom,
            c = t.virtualIndex,
            u = G(t, xt),
            p = arguments.length > 1 ? arguments[1] : void 0,
            f = (0, l.useRef)(null),
            h = (0, l.useState)("swiper-slide"),
            v = (0, A.Z)(h, 2),
            m = v[0],
            g = v[1];
          function w(e, t, n) {
            t === f.current && g(n);
          }
          wt(function () {
            if ((p && (p.current = f.current), f.current && o)) {
              if (!o.destroyed)
                return (
                  o.on("_slideClass", w),
                  function () {
                    o && o.off("_slideClass", w);
                  }
                );
              "swiper-slide" !== m && g("swiper-slide");
            }
          }),
            wt(
              function () {
                o && f.current && g(o.getSlideClasses(f.current));
              },
              [o]
            ),
            "function" == typeof i &&
              (e = {
                isActive:
                  m.indexOf("swiper-slide-active") >= 0 ||
                  m.indexOf("swiper-slide-duplicate-active") >= 0,
                isVisible: m.indexOf("swiper-slide-visible") >= 0,
                isDuplicate: m.indexOf("swiper-slide-duplicate") >= 0,
                isPrev:
                  m.indexOf("swiper-slide-prev") >= 0 ||
                  m.indexOf("swiper-slide-duplicate-prev") >= 0,
                isNext:
                  m.indexOf("swiper-slide-next") >= 0 ||
                  m.indexOf("swiper-slide-duplicate-next") >= 0,
              });
          var y = function () {
            return "function" == typeof i ? i(e) : i;
          };
          return l.createElement(
            r,
            St(
              {
                ref: f,
                className: at("".concat(m).concat(s ? " ".concat(s) : "")),
                "data-swiper-slide-index": c,
              },
              u
            ),
            d
              ? l.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof d ? d : void 0,
                  },
                  y()
                )
              : y()
          );
        });
      kt.displayName = "SwiperSlide";
      var Pt = (0, f.default)(h.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1yntmww-0",
        })(
          [
            "position:relative;z-index:6;display:flex;height:75vh;min-height:60rem;max-height:72rem;",
            " .swiper{height:100%;&-slide{-webkit-transform:translateZ(0);-webkit-backface-visibility:hidden;}}",
          ],
          h.Fs.large(
            Tt ||
              (Tt = (0, p.Z)([
                "\n        height: 100vh;\n        max-height: 96rem;\n    ",
              ]))
          )
        ),
        _t = f.default.div.withConfig({
          displayName: "styles__Main",
          componentId: "sc-1yntmww-1",
        })(
          ["width:100%;height:100%;background:", ";", ""],
          function (e) {
            return e.theme.trueblack;
          },
          h.Fs.large(Ct || (Ct = (0, p.Z)(["\n        width: 50%;\n    "])))
        ),
        Ot = f.default.div.withConfig({
          displayName: "styles__Next",
          componentId: "sc-1yntmww-2",
        })(
          [
            "width:50%;height:100%;background:",
            ";> div{height:100%;> div{align-items:center;height:100%;.swiper{width:100%;}}}",
          ],
          function (e) {
            return e.theme.bc1;
          }
        ),
        Mt = f.default.div.withConfig({
          displayName: "styles__NextButton",
          componentId: "sc-1yntmww-3",
        })([
          "position:absolute;z-index:12;top:50%;left:0;transform:translateY(-50%);width:100%;height:50%;cursor:pointer;",
        ]),
        Lt = f.default.div.withConfig({
          displayName: "styles__Progress",
          componentId: "sc-1yntmww-4",
        })(
          [
            "position:absolute;bottom:",
            ";left:0;width:100%;display:flex;align-items:center;justify-content:space-between;.fraction{",
            " display:inline-block;color:",
            ";}",
          ],
          function (e) {
            return e.theme.padL;
          },
          v.Qs,
          function (e) {
            return e.theme.black;
          }
        ),
        Nt = f.default.div.withConfig({
          displayName: "styles__Bar",
          componentId: "sc-1yntmww-5",
        })(
          [
            "position:relative;flex:1;width:100%;height:2px;margin:0 2.4rem;background:",
            "50;&:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:",
            ";transform:scaleX(",
            ");transform-origin:center left;transition:transform 1s ",
            ";}",
          ],
          function (e) {
            return e.theme.black;
          },
          function (e) {
            return e.theme.black;
          },
          function (e) {
            return e.progress;
          },
          function (e) {
            return e.theme.bezzy;
          }
        ),
        It = function (e) {
          var t = e.projects,
            n = (0, l.useState)(0),
            r = n[0],
            i = n[1],
            a = (0, l.useRef)(),
            s = (0, l.useRef)(),
            o = (0, d.Gc)(),
            c = function () {
              s.current.swiper.slideNext(), a.current.swiper.slideNext();
            },
            u = {
              spaceBetween: 0,
              slidesPerView: 1,
              loop: !0,
              speed: 750,
              slideToClickedSlide: !1,
              allowTouchMove: !0,
              breakpoints: { 1024: { allowTouchMove: !1 } },
            };
          return l.createElement(
            Pt,
            null,
            l.createElement(
              _t,
              { className: "cursor-link" },
              l.createElement(
                Et,
                Object.assign(
                  {
                    ref: s,
                    onSlideChange: function (e) {
                      i(e.realIndex + 1);
                    },
                    onSwiper: function (e) {
                      i(e.realIndex + 1);
                    },
                  },
                  u
                ),
                t.map(function (e) {
                  var t = e.id,
                    n = e.slug,
                    r = e.title,
                    i = e.excerpt,
                    a = e.image;
                  return l.createElement(
                    kt,
                    { key: t },
                    l.createElement(P, {
                      slug: n,
                      title: r,
                      excerpt: i,
                      image: a,
                    })
                  );
                })
              )
            ),
            !o.large &&
              l.createElement(
                Ot,
                { className: "cursor-white" },
                l.createElement(
                  z.X,
                  { isExpanded: !0 },
                  l.createElement(
                    z.s,
                    { small: 12, large: 6, pushOnLarge: 3 },
                    l.createElement(
                      Et,
                      Object.assign({ ref: a, initialSlide: 1 }, u),
                      t.map(function (e) {
                        var t = e.id,
                          n = e.image,
                          r = e.title;
                        return l.createElement(
                          kt,
                          { key: t },
                          l.createElement(
                            I,
                            { image: n, title: r },
                            l.createElement(Mt, {
                              onClick: c,
                              className: "cursor-trigger",
                            })
                          )
                        );
                      })
                    ),
                    l.createElement(
                      Lt,
                      null,
                      l.createElement("div", { className: "fraction" }, "0", r),
                      l.createElement(Nt, { progress: r / 3 }),
                      l.createElement("div", { className: "fraction" }, "03")
                    )
                  )
                )
              )
          );
        };
    },
    64131: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(67294),
        i = n(19692),
        a = (n(18040), n(52068)),
        s = i.default.div.withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1oh0rbo-0",
        })(function (e) {
          return (0,
          i.css)(["", " position:relative;text-transform:uppercase;padding:0 0 6rem 0;&:before{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:2px;height:4.8rem;background:", ";}"], a.Qs, e.theme.bc1);
        });
      var o = function () {
        return r.createElement(s, null, "Scroll");
      };
    },
    87372: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var r,
        i,
        a,
        s,
        o,
        l,
        d,
        c,
        u,
        p,
        f,
        h = n(67294),
        v = n(6125),
        m = n(81880),
        g = n(19692),
        w = n(18040),
        y = g.default.div.withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-49x6b6-0",
        })(function (e) {
          return (0,
          g.css)(["position:relative;padding:0 3rem;width:auto;", " .gatsby-image-wrapper{display:block;max-width:18rem;height:6rem;img{width:100%;height:100%;max-width:18rem;max-height:6rem;}}"], w.Fs.large(r || (r = (0, m.Z)(["\n\t\t\twidth: 20%;\n\t\t\tmargin: 3.6rem 0;\n\t\t"]))));
        }),
        b = function (e) {
          var t = e.data;
          return h.createElement(
            h.Fragment,
            null,
            t.map(function (e) {
              var t = e.gatsby,
                n = e.alt;
              return h.createElement(
                y,
                { key: n },
                h.createElement(v.G, {
                  objectFit: "contain",
                  loading: "lazy",
                  image: t,
                  alt: n,
                })
              );
            })
          );
        },
        E = n(35639),
        x = n(81419),
        S = n(53128),
        T = n(97026),
        C = n(52068),
        k = (0, g.default)(w.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-w55fju-0",
        })(function (e) {
          return (0,
          g.css)(["position:relative;z-index:6;padding:calc(", " * 3) 0;overflow:hidden;", " ", " &:before,&:after{content:'';position:absolute;left:calc(50% - 1px);width:2px;height:", ";background:", ";", " ", "}&:before{top:4.8rem;", "}&:after{bottom:4.8rem;", "}"], e.theme.padS, w.Fs.medium(i || (i = (0, m.Z)(["\n\t\t\tpadding: calc(", " * 2) 0;\n\t\t"])), e.theme.padM), w.Fs.large(a || (a = (0, m.Z)(["\n\t\t\tpadding: calc(", " * 2) 0;\n\t\t"])), e.theme.padL), e.theme.padS, e.theme.bc1, w.Fs.large(s || (s = (0, m.Z)(["\n\t\t\t\theight: ", ";\n\t\t\t"])), e.theme.padM), w.Fs.large(o || (o = (0, m.Z)(["\n\t\t\t\theight: ", ";\n\t\t\t"])), e.theme.padL), w.Fs.large(l || (l = (0, m.Z)(["\n\t\t\t\ttop: 6rem;\n\t\t\t"]))), w.Fs.large(d || (d = (0, m.Z)(["\n\t\t\t\tbottom: 6rem;\n\t\t\t"]))));
        }),
        P = g.default.h2.withConfig({
          displayName: "styles__Title",
          componentId: "sc-w55fju-1",
        })(function (e) {
          return (0,
          g.css)(["", " position:relative;padding-top:2.7rem;", " span{display:block;width:100%;text-align:center;&:first-child{position:absolute;top:0;left:50%;transform:translateX(-50%);text-transform:lowercase;font-family:", ";color:", ";}}"], C.g_, w.Fs.large(c || (c = (0, m.Z)(["\n\t\t\tpadding-top: 4.85rem;\n\t\t"]))), e.theme.script, e.theme.bc1);
        }),
        _ = g.default.div.withConfig({
          displayName: "styles__ClientLogos",
          componentId: "sc-w55fju-2",
        })(function (e) {
          return (0,
          g.css)(["position:relative;pointer-events:none;display:flex;align-items:center;padding:", " 0;", ""], e.theme.padS, w.Fs.large(u || (u = (0, m.Z)(["\n\t\t\tpadding: ", " 0;\n\t\t"])), e.theme.padL));
        }),
        O = g.default.div.withConfig({
          displayName: "styles__ClientLogo",
          componentId: "sc-w55fju-3",
        })(function (e) {
          return (0,
          g.css)(["padding:0 3rem;width:auto;.gatsby-image-wrapper{display:block;max-width:24rem;height:8.4rem;img{width:100%;height:100%;max-width:24rem;max-height:8.4rem;}}"]);
        }),
        M = (0, g.default)(w.ZC).withConfig({
          displayName: "styles__AwardsContent",
          componentId: "sc-w55fju-4",
        })(function (e) {
          return (0,
          g.css)(["padding:0 0 ", ";", ""], e.theme.padS, w.Fs.large(p || (p = (0, m.Z)(["\n\t\t\tpadding: 0 0 ", ";\n\t\t"])), e.theme.padM));
        }),
        L = (0, g.default)(w.P).withConfig({
          displayName: "styles__Content",
          componentId: "sc-w55fju-5",
        })(function (e) {
          return (0, g.css)(["text-align:center;color:", ";"], e.theme.white);
        }),
        N = g.default.div.withConfig({
          displayName: "styles__AwardsLogos",
          componentId: "sc-w55fju-6",
        })(function (e) {
          return (0,
          g.css)(["position:relative;pointer-events:none;display:flex;flex-flow:row wrap;align-items:center;justify-content:center;", ""], w.Fs.large(f || (f = (0, m.Z)(["\n\t\t\tmax-width: calc(8.333vw * 10 - 3.6rem);\n\t\t\tmargin: 0 auto;\n\t\t"]))));
        }),
        I = function (e) {
          var t = e.main,
            n = e.script,
            r = e.clients,
            i = e.awards,
            a = e.awardsText,
            s = (0, T.Gc)(),
            o = (0, h.useState)(!1),
            l = o[0],
            d = o[1];
          return h.createElement(
            k,
            null,
            h.createElement(
              E.Z,
              {
                onEnter: function () {
                  d(!0);
                },
                onExit: function () {
                  d(!1);
                },
              },
              h.createElement(
                S.X,
                { isExpanded: !0 },
                h.createElement(
                  S.s,
                  { small: 12, mpad: !0 },
                  h.createElement(
                    P,
                    null,
                    h.createElement("span", null, n),
                    h.createElement("span", null, t)
                  )
                )
              ),
              h.createElement(
                _,
                null,
                h.createElement(
                  x.Z,
                  { speed: 100, gradient: !1, play: l },
                  r.map(function (e) {
                    var t = e.gatsby,
                      n = e.alt;
                    return h.createElement(
                      O,
                      { key: n, className: "content" },
                      h.createElement(v.G, {
                        objectFit: "contain",
                        loading: "lazy",
                        image: t,
                        alt: n,
                      })
                    );
                  })
                )
              ),
              h.createElement(
                S.X,
                { isExpanded: !0 },
                h.createElement(
                  S.s,
                  {
                    small: 12,
                    large: 10,
                    pushOnLarge: 1,
                    xlarge: 8,
                    pushOnXlarge: 2,
                    mpad: !0,
                  },
                  h.createElement(M, null, h.createElement(L, null, a))
                )
              ),
              h.createElement(
                N,
                null,
                s.large
                  ? h.createElement(
                      x.Z,
                      {
                        speed: 100,
                        gradient: !1,
                        direction: "right",
                        play: !!s.large,
                      },
                      h.createElement(b, { data: i })
                    )
                  : h.createElement(
                      h.Fragment,
                      null,
                      h.createElement(b, { data: i })
                    )
              )
            )
          );
        };
    },
  },
]);
//# sourceMappingURL=3e11337fcf04970efaf373a1ecd75b34ea5b118b-03739338fe6f4017acbd.js.map
