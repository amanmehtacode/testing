(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(916);
        },
      ]);
    },
    6673: function (e, t, s) {
      "use strict";
      var n = s(5893),
        i = (s(7294), s(1664)),
        a = s(5675);
      t.Z = function () {
        return (0, n.jsxs)("footer", {
          className:
            "min-h-full flex flex-wrap gap-8 items-center justify-center bg-black text-white px-4 py-20",
          children: [
            (0, n.jsx)(a.default, {
              src: "/assets/logo.svg",
              width: 18,
              height: 18,
              alt: "logo",
            }),
            (0, n.jsx)(i.default, { href: "/imprint", children: "Imprint" }),
            (0, n.jsx)(i.default, {
              href: "/privacy",
              children: "Privacy Policy",
            }),
            (0, n.jsx)(i.default, {
              href: "https://github.com/margelo",
              children: "GitHub",
            }),
            (0, n.jsx)(i.default, {
              href: "https://twitter.com/margelo_io",
              children: "Twitter",
            }),
          ],
        });
      };
    },
    916: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return ne;
          },
        });
      var n = s(5893),
        i = s(8100),
        a = s(7294),
        r = s(4847),
        l = s(5675),
        c = function () {
          var e = (0, a.useState)(!1),
            t = e[0],
            s = e[1],
            i = (0, a.useRef)(null),
            c = (0, a.useContext)(r.$).scrollY,
            o = 0,
            d = i.current;
          d && (o = Math.min(1, c / d.clientHeight));
          var h = (0, a.useCallback)(function () {
            s(!0);
          }, []);
          return (0, n.jsxs)("div", {
            ref: i,
            className:
              "min-h-screen flex flex-col items-center justify-center bg-[a2a2a4] sticky top-0 -z-10",
            style: { transform: "translateY(-".concat(20 * o, "vh)") },
            children: [
              (0, n.jsxs)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: "absolute w-full h-full object-cover",
                children: [
                  (0, n.jsx)("source", {
                    src: "/assets/masthead-bg.m4v",
                    type: "video/mp4; codecs=hvc1",
                  }),
                  (0, n.jsx)("source", {
                    src: "/assets/masthead-bg.webm",
                    type: "video/webm; codecs=vp9",
                  }),
                  (0, n.jsx)("source", {
                    src: "/assets/masthead-bg.mp4",
                    type: "video/mp4",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "flex-grow-0 pt-10 transition-opacity duration-1000 ".concat(
                    t ? "opacity-100" : "opacity-0"
                  ),
                children: (0, n.jsx)(l.default, {
                  src: "/assets/logo.svg",
                  width: 128 / 3,
                  height: 38,
                  alt: "logo",
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col",
                children: [
                  (0, n.jsx)("h1", {
                    className: "mb-6 text-4xl xl:text-5xl",
                    children: "Margelo",
                  }),
                  (0, n.jsxs)("h2", {
                    className: "mb-2 text-2xl xl:text-3xl tracking-tight",
                    children: [
                      (0, n.jsx)("span", {
                        className: "whitespace-nowrap",
                        children: "App Development,",
                      }),
                      " ",
                      (0, n.jsx)("span", {
                        className: "whitespace-nowrap",
                        children: "done right.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ".concat(
                    t ? "opacity-100" : "opacity-0 -translate-y-10"
                  ),
                children: (0, n.jsx)(l.default, {
                  src: "/assets/arrow-down.png",
                  width: 188 / 3,
                  height: 35,
                  alt: "scroll down",
                  onLoad: h,
                }),
              }),
            ],
          });
        },
        o = s(9491),
        d = s.n(o),
        h = s(1664),
        u = function (e) {
          var t = e.id,
            s = e.name,
            i = e.socialId,
            a = e.link;
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(l.default, {
                src: "/assets/team/margelo_faces_".concat(t, ".svg"),
                alt: s,
                width: 1366,
                height: 1555,
              }),
              (0, n.jsx)("div", {
                className: "text-2xl xl:text-3xl",
                children: s,
              }),
              (0, n.jsx)("div", {
                className: "text-xl",
                children: (0, n.jsx)(h.default, {
                  href: a,
                  children: (0, n.jsx)("a", { target: "_blank", children: i }),
                }),
              }),
            ],
          });
        },
        x = function () {
          return (0, n.jsxs)("section", {
            className:
              "flex flex-col bg-white py-20 text-3xl md:text-4xl ".concat(
                d().section
              ),
            children: [
              (0, n.jsx)("div", {
                className: "container mx-auto px-11",
                children: (0, n.jsxs)("p", {
                  className:
                    "leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight",
                  children: [
                    (0, n.jsx)("strong", {
                      children: "We will help you ship better apps, faster.",
                    }),
                    " Our team of expert engineers has created the best user experiences in some of the most popular apps worldwide.",
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className: "container mx-auto px-11 text-center mt-28",
                children: [
                  (0, n.jsx)("h2", {
                    className: "font-bold",
                    children: "Our Team",
                  }),
                  (0, n.jsx)("div", {
                    className: "mt-2",
                    children: "the \u201cspec-ops\u201d",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20",
                    children: [
                      (0, n.jsx)(u, {
                        id: "marc",
                        name: "Marc",
                        socialId: "@mrousavy",
                        link: "https://github.com/mrousavy",
                      }),
                      (0, n.jsx)(u, {
                        id: "szymon",
                        name: "Szymon",
                        socialId: "@szymon20000",
                        link: "https://github.com/Szymon20000",
                      }),
                      (0, n.jsx)(u, {
                        id: "thomas",
                        name: "Thomas",
                        socialId: "@thomas-coldwell",
                        link: "https://github.com/thomas-coldwell",
                      }),
                      (0, n.jsx)(u, {
                        id: "christoph",
                        name: "Christoph",
                        socialId: "@chrispader",
                        link: "https://github.com/chrispader",
                      }),
                      (0, n.jsx)(u, {
                        id: "janic",
                        name: "Janic",
                        socialId: "@janicduplessis",
                        link: "https://github.com/janicduplessis",
                      }),
                      (0, n.jsx)(u, {
                        id: "akinn",
                        name: "Akinn",
                        socialId: "@akinncar",
                        link: "https://github.com/akinncar",
                      }),
                      (0, n.jsx)(u, {
                        id: "mo",
                        name: "Mo",
                        socialId: "@gorhom",
                        link: "https://github.com/gorhom",
                      }),
                      (0, n.jsx)(u, {
                        id: "eric",
                        name: "Eric",
                        socialId: "@ericvicenti",
                        link: "https://github.com/ericvicenti",
                      }),
                      (0, n.jsx)(u, {
                        id: "matei",
                        name: "Matei",
                        socialId: "@mateioprea",
                        link: "https://github.com/mateioprea",
                      }),
                      (0, n.jsx)(u, {
                        id: "viktoria",
                        name: "Viktoria",
                        socialId: "@viktoria.psd",
                        link: "https://www.instagram.com/viktoria.psd",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        m = s(2971),
        f = s.n(m),
        p = function (e, t) {
          var s = e - t;
          return s >= 0 && s < 1 ? 1 : 0.2;
        },
        g = function (e) {
          var t = e.downloads,
            s = e.commits,
            i = (0, a.useContext)(r.$).scrollY,
            l = (0, a.useRef)(null),
            c = 0,
            o = l.current;
          if (o) {
            var d = o.clientHeight,
              h = o.offsetTop,
              u = window.innerHeight,
              x = u / 2,
              m = Math.min(d + x, Math.max(-u, i - h) + x) / d;
            c = Math.min(2.5, Math.max(0.5, 3 * m));
          }
          var g =
              Math.round((t || 21669135) / 1e3 / 1e3).toLocaleString() +
              " million",
            j = Math.round(s || 284).toLocaleString();
          return (0, n.jsx)("div", {
            ref: l,
            className: "bg-black text-white",
            children: (0, n.jsx)("div", {
              className:
                "min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold",
              children: (0, n.jsxs)("div", {
                className: "leading-[1.15]",
                children: [
                  (0, n.jsx)("div", {
                    className: f().skillText,
                    style: { opacity: p(c, 0) },
                    children: "We know our tools inside out.",
                  }),
                  (0, n.jsxs)("span", {
                    className: "".concat(
                      f().skillText,
                      " inline-block after:content-['_']"
                    ),
                    style: { opacity: p(c, 1) },
                    children: [
                      "Our team has contributed ",
                      j,
                      " commits to React Native core, powering thousands of apps worldwide.",
                    ],
                  }),
                  (0, n.jsxs)("span", {
                    className: "".concat(f().skillText, " inline-block"),
                    style: { opacity: p(c, 2) },
                    children: [
                      "We're maintaining some of the most popular open-source projects, with over ",
                      (0, n.jsxs)("strong", { children: [g, " downloads"] }),
                      ".",
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        j = s(8993),
        b = a.createContext({ numOfPages: 0, currentPage: 0 }),
        w = function (e) {
          var t = e.children,
            s = e.numOfPages,
            i = (0, a.useContext)(r.$).scrollY,
            l = (0, a.useRef)(null),
            c = 0,
            o = l.current;
          if (o) {
            var d = o.clientHeight,
              h = o.offsetTop,
              u = window.innerHeight,
              x = u / 2;
            c = (Math.min(d + x, Math.max(-u, i - h) + x) / d) * s;
          }
          return (0, n.jsx)(b.Provider, {
            value: { numOfPages: s, currentPage: c },
            children: (0, n.jsx)("div", {
              ref: l,
              className: "relative bg-black text-white",
              style: { height: 100 * s + "vh" },
              children: t,
            }),
          });
        },
        v = function (e) {
          var t = e.children;
          return (0, n.jsx)("div", {
            className: "absolute h-full w-full",
            children: t,
          });
        },
        y = function (e) {
          var t = e.children;
          return (0, n.jsx)("div", {
            className: "sticky top-0 h-screen overflow-hidden",
            children: t,
          });
        },
        k = function (e) {
          var t = e.page,
            s = e.renderContent,
            i = (0, a.useContext)(b),
            r = i.currentPage,
            l = i.numOfPages,
            c = Math.max(0, r - t),
            o = (0, a.useRef)(null),
            d = Math.min(1, Math.max(0, 4 * c));
          return (
            c > 0.85 && t < l - 1 && (d = Math.max(0, 4 * (1 - c))),
            (0, n.jsx)("div", {
              ref: o,
              className: "absolute top-0 w-full",
              style: {
                pointerEvents: c <= 0 || c >= 1 ? "none" : void 0,
                opacity: d,
              },
              children: s({ progress: c }),
            })
          );
        },
        N = function (e) {
          var t = e.children;
          return (0, n.jsx)("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen",
            children: t,
          });
        },
        C = function () {
          return (0, n.jsxs)("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen sticky top-0",
            children: [
              (0, n.jsx)("div", { className: "bg-black h-[30vh] lg:h-auto" }),
              (0, n.jsx)("div", {
                className: "bg-white h-[70vh] lg:min-h-screen",
              }),
            ],
          });
        },
        S = function (e) {
          var t = e.children,
            s = e.progress,
            i = Math.max(0, 50 - 3 * s * 50);
          return (
            s > 0.85 && (i = Math.max(-50, 2 * -(s - 0.85) * 50)),
            (0, n.jsx)("div", {
              className:
                "work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto",
              style: { transform: "translateY(".concat(i, "px)") },
              children: (0, n.jsx)("div", {
                className: "leading-10",
                children: t,
              }),
            })
          );
        },
        _ = function (e) {
          var t = e.children,
            s = e.progress,
            i = Math.max(-50, 50 * -(s - 0.5));
          return (0, n.jsx)("div", {
            className:
              "work-right flex flex-1 lg:items-center justify-center h-screen",
            style: { transform: "translateY(".concat(i, "px)") },
            children: (0, n.jsx)("div", {
              className: "w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0",
              children: t,
            }),
          });
        },
        P = function (e) {
          var t = e.href,
            s = e.children;
          return (0, n.jsx)(h.default, {
            href: t,
            children: (0, n.jsx)("a", {
              target: "_blank",
              rel: "noreferrer",
              className: "underline underline-offset-8 decoration-1",
              children: s,
            }),
          });
        },
        M = function () {
          var e = (0, a.useContext)(j.y);
          return (0, n.jsxs)(w, {
            numOfPages: 3,
            children: [
              (0, n.jsx)(v, { children: (0, n.jsx)(C, {}) }),
              (0, n.jsxs)(y, {
                children: [
                  (0, n.jsx)(k, {
                    page: 0,
                    renderContent: function (t) {
                      var s = t.progress;
                      return (0, n.jsxs)(N, {
                        children: [
                          (0, n.jsxs)(S, {
                            progress: s,
                            children: [
                              (0, n.jsx)("div", { children: "We built" }),
                              (0, n.jsxs)("div", {
                                className:
                                  "text-4xl md:text-5xl font-semibold tracking-tight",
                                children: [
                                  (0, n.jsx)(P, {
                                    href: "https://pinkpanda.io/",
                                    children: "Pink Panda",
                                  }),
                                  "'s app.",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)(_, {
                            progress: s,
                            children: (0, n.jsx)(l.default, {
                              src: "/assets/works/pinkpanda.png",
                              layout: "responsive",
                              width: 840,
                              height: 1620,
                              alt: "Pink Panda",
                              priority: e,
                            }),
                          }),
                        ],
                      });
                    },
                  }),
                  (0, n.jsx)(k, {
                    page: 1,
                    renderContent: function (t) {
                      var s = t.progress;
                      return (0, n.jsxs)(N, {
                        children: [
                          (0, n.jsxs)(S, {
                            progress: s,
                            children: [
                              (0, n.jsx)("div", { children: "We made" }),
                              (0, n.jsxs)("div", {
                                className:
                                  "text-4xl md:text-5xl font-semibold tracking-tight",
                                children: [
                                  (0, n.jsx)(P, {
                                    href: "https://steakwallet.fi/",
                                    children: "Steakwallet",
                                  }),
                                  "\xa0faster.",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)(_, {
                            progress: s,
                            children: (0, n.jsx)(l.default, {
                              className: "my-4",
                              src: "/assets/works/steakwallet.png",
                              layout: "responsive",
                              width: 840,
                              height: 1620,
                              alt: "Steakwallet",
                              priority: e,
                            }),
                          }),
                        ],
                      });
                    },
                  }),
                  (0, n.jsx)(k, {
                    page: 2,
                    renderContent: function (t) {
                      var s = t.progress;
                      return (0, n.jsxs)(N, {
                        children: [
                          (0, n.jsxs)(S, {
                            progress: s,
                            children: [
                              (0, n.jsx)("div", { children: "We helped" }),
                              (0, n.jsxs)("div", {
                                className:
                                  "text-4xl md:text-5xl font-semibold tracking-tight",
                                children: [
                                  (0, n.jsx)(P, {
                                    href: "https://showtime.io/",
                                    children: "Showtime",
                                  }),
                                  " ship faster.",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)(_, {
                            progress: s,
                            children: (0, n.jsx)(l.default, {
                              src: "/assets/works/showtime.png",
                              layout: "responsive",
                              width: 840,
                              height: 1620,
                              alt: "Showtime",
                              priority: e,
                            }),
                          }),
                        ],
                      });
                    },
                  }),
                ],
              }),
            ],
          });
        },
        O = s(1778),
        F = function (e, t) {
          var s = (0, a.useRef)(),
            n = (0, a.useCallback)(
              function () {
                t(), (s.current = requestAnimationFrame(n));
              },
              [t]
            );
          (0, a.useEffect)(
            function () {
              if (e)
                return (
                  (s.current = requestAnimationFrame(n)),
                  function () {
                    if (s.current) return cancelAnimationFrame(s.current);
                  }
                );
            },
            [e, n]
          );
        },
        I = function (e) {
          var t = e.children,
            s = e.width;
          return (0, n.jsx)("div", {
            className: "inline-flex justify-center items-center mx-4",
            style: { width: s },
            children: t,
          });
        },
        E = function (e) {
          var t = e.children,
            s = e.initialOffsetX,
            i = e.className,
            r = e.breakpoint,
            l = e.onContentLayout,
            c = (0, a.useContext)(O.X).innerWidth,
            o = (0, a.useRef)(s),
            d = (0, a.useRef)(null),
            h = (0, a.useRef)(null),
            u = c < r;
          return (
            F(
              u,
              (0, a.useCallback)(function () {
                var e = d.current,
                  t = h.current;
                e &&
                  t &&
                  ((o.current += 0.5),
                  (e.scrollLeft = o.current),
                  e.scrollLeft >= t.clientWidth &&
                    ((o.current = 0), (e.scrollLeft = 0)));
              }, [])
            ),
            (0, a.useEffect)(
              function () {
                var e = h.current;
                e && l(e.clientWidth);
              },
              [l]
            ),
            (0, n.jsxs)("div", {
              ref: d,
              className:
                "slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ".concat(
                  i
                ),
              children: [
                (0, n.jsx)("div", {
                  ref: h,
                  className: "inline-block",
                  children: t,
                }),
                (0, n.jsxs)("div", {
                  className: u ? "inline-block" : "hidden",
                  children: [t, t],
                }),
              ],
            })
          );
        },
        T = function () {
          var e = (0, a.useState)(0),
            t = e[0],
            s = e[1],
            i = (0, a.useCallback)(function (e) {
              s(function (t) {
                return Math.max(t, e);
              });
            }, []);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(E, {
                className: "",
                breakpoint: t,
                initialOffsetX: 0,
                onContentLayout: i,
                children: [
                  (0, n.jsx)(I, {
                    width: 150,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/shopify.png",
                      width: 150,
                      height: 50,
                      alt: "Shopify",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 170,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/coinbase.png",
                      width: 170,
                      height: 50,
                      alt: "Coinbase",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 170,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/rainbow.png",
                      width: 170,
                      height: 50,
                      alt: "Rainbow",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 200,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/walletconnect.png",
                      width: 200,
                      height: 50,
                      alt: "WalletConnect",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 150,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/exodus.png",
                      width: 150,
                      height: 50,
                      alt: "Exodus",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 80,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/picnic.png",
                      width: 80,
                      height: 50,
                      alt: "Picnic",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 140,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/status.png",
                      width: 140,
                      height: 50,
                      alt: "Status",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 120,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/extra.png",
                      width: 120,
                      height: 50,
                      alt: "ExtraCard",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 110,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/stori.png",
                      width: 110,
                      height: 50,
                      alt: "Stori",
                      objectFit: "contain",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(E, {
                className: "mt-6",
                breakpoint: t,
                initialOffsetX: 70,
                onContentLayout: i,
                children: [
                  (0, n.jsx)(I, {
                    width: 150,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/slingshot.png",
                      width: 150,
                      height: 50,
                      alt: "Slingshot Finance",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 150,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/showtime.png",
                      width: 150,
                      height: 50,
                      alt: "Showtime",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 150,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/steakwallet.png",
                      width: 150,
                      height: 50,
                      alt: "Steakwallet",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 130,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/expensify.png",
                      width: 130,
                      height: 50,
                      alt: "Expensify",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 200,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/pinkpanda.png",
                      width: 200,
                      height: 50,
                      alt: "Pink Panda",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 130,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/litentry.png",
                      width: 130,
                      height: 50,
                      alt: "Litentry",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 150,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/scribeware.png",
                      width: 150,
                      height: 50,
                      alt: "ScribeWare",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 120,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/snapcalorie.png",
                      width: 120,
                      height: 50,
                      alt: "SnapCalorie",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 110,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/tocsen.png",
                      width: 110,
                      height: 50,
                      alt: "Tocsen",
                      objectFit: "contain",
                    }),
                  }),
                  (0, n.jsx)(I, {
                    width: 150,
                    children: (0, n.jsx)(l.default, {
                      src: "/assets/trustedby/audubon.png",
                      width: 150,
                      height: 50,
                      alt: "Audubon",
                      objectFit: "contain",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        A = s(5585),
        W = s(9635),
        R = s(2074),
        L = s(9221),
        z = s.n(L);
      function Y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var s = 0, n = new Array(t); s < t; s++) n[s] = e[s];
        return n;
      }
      function Z(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var s =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != s) {
              var n,
                i,
                a = [],
                r = !0,
                l = !1;
              try {
                for (
                  s = s.call(e);
                  !(r = (n = s.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  r = !0
                );
              } catch (c) {
                (l = !0), (i = c);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (l) throw i;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Y(e, t);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === s && e.constructor && (s = e.constructor.name);
            if ("Map" === s || "Set" === s) return Array.from(s);
            if (
              "Arguments" === s ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
            )
              return Y(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var q = a.createContext({ embla: void 0, selectedIndex: -1 }),
        D = function (e) {
          var t = e.children,
            s = e.className,
            i = (0, a.useState)(0),
            r = i[0],
            l = i[1],
            c = Z(
              (0, A.Z)({ loop: !0, align: "center", skipSnaps: !1 }, [
                (0, W.Z)(),
                (0, R.Z)({ delay: 7e3 }),
              ]),
              2
            ),
            o = c[0],
            d = c[1],
            h = (0, a.useCallback)(
              function () {
                d && l(d.selectedScrollSnap());
              },
              [d, l]
            );
          return (
            (0, a.useEffect)(
              function () {
                d && (h(), d.on("select", h));
              },
              [d, h]
            ),
            (0, n.jsx)(q.Provider, {
              value: { embla: d, selectedIndex: r },
              children: (0, n.jsx)("div", {
                ref: o,
                className: ""
                  .concat(z().viewport, " w-full overflow-hidden ")
                  .concat(s),
                children: (0, n.jsx)("div", {
                  className: "".concat(z().container, " flex"),
                  children: t,
                }),
              }),
            })
          );
        },
        H = function (e) {
          var t = e.children,
            s = e.index,
            i = (0, a.useContext)(q),
            r = i.embla,
            l = i.selectedIndex === s,
            c = (0, a.useCallback)(
              function () {
                void 0 !== r && r.scrollTo(s);
              },
              [r, s]
            );
          return (0, n.jsx)("div", {
            className: ""
              .concat(z().slide, " relative ")
              .concat(l ? "active" : ""),
            onClick: c,
            children: t,
          });
        },
        X = function (e) {
          var t = e.children,
            s = e.by;
          return (0, n.jsxs)("div", {
            className:
              "flex flex-col justify-center text-center px-5 md:px-10 lg:px-20",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "text-xl md:text-2xl lg:leading-[3rem] tracking-tight",
                children: ["\u201c", t, "\u201d"],
              }),
              (0, n.jsxs)("div", {
                className: "mt-6",
                children: ["\u2014 ", s],
              }),
            ],
          });
        },
        $ = function () {
          return (0, n.jsxs)(D, {
            className: "bg-black text-white py-10 lg:py-20",
            children: [
              (0, n.jsx)(H, {
                index: 0,
                children: (0, n.jsx)(X, {
                  by: "Axel (Showtime)",
                  children:
                    "Margelo and Showtime both share the love for high-quality software, the passion for building something people want and the ambition of always doing our best. 10/10 would recommend working with Marc and his team.",
                }),
              }),
              (0, n.jsx)(H, {
                index: 1,
                children: (0, n.jsx)(X, {
                  by: "Adam Carlton (CEO of Pink Panda)",
                  children:
                    "Margelo is a collection of world class talent, from React Native to website, full stack to design - I've been nothing but pleased with their communication, imagination, insight and delivery.",
                }),
              }),
              (0, n.jsx)(H, {
                index: 2,
                children: (0, n.jsx)(X, {
                  by: "Alex (CTO of Steakwallet)",
                  children:
                    "The output of Margelo is unlike any other team we\u2019ve worked with. Their speed, professionalism and familiarity with all things mobile helped turn Steakwallet into the slick application it is known as today.",
                }),
              }),
              (0, n.jsx)(H, {
                index: 3,
                children: (0, n.jsx)(X, {
                  by: "Clinton (CEO of Slingshot)",
                  children:
                    "Working with the Margelo team feels like a cheat code. When it comes to building performant and scalable React Native mobile apps, they're the best hands down.",
                }),
              }),
              (0, n.jsx)(H, {
                index: 4,
                children: (0, n.jsx)(X, {
                  by: "Louise (CEO of Stori)",
                  children:
                    "When we first found Margelo they seemed too good to be true. Professional, fast and ridiculously talented; the 3D AR Filter component they have developed for our React Native app is super smooth and responsive.",
                }),
              }),
            ],
          });
        },
        V = s(7480),
        G = s.n(V),
        Q = function () {
          return (0, n.jsxs)("section", {
            className:
              "bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ".concat(
                G().bg
              ),
            children: [
              (0, n.jsx)("div", { className: "flex-1" }),
              (0, n.jsxs)("div", {
                className: "flex flex-col justify-center items-center",
                children: [
                  (0, n.jsxs)("h3", {
                    className: "text-xl mb-10 font-bold text-center",
                    children: [
                      (0, n.jsx)("span", {
                        className: "whitespace-nowrap",
                        children: "trusted by",
                      }),
                      " ",
                      (0, n.jsx)("span", {
                        className: "whitespace-nowrap",
                        children: "the apps on your phone",
                      }),
                    ],
                  }),
                  (0, n.jsx)(T, {}),
                ],
              }),
              (0, n.jsx)("div", {
                className: "flex flex-col justify-center items-center",
                children: (0, n.jsx)("div", {
                  className: "container mx-auto lg:max-w-[70%] lg:px-10",
                  children: (0, n.jsx)("h3", {
                    className:
                      "text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]",
                    children:
                      "We believe in good communication and a fully transparent development process.",
                  }),
                }),
              }),
              (0, n.jsx)($, {}),
              (0, n.jsx)("div", { className: "flex-1 bg-black" }),
            ],
          });
        },
        U = s(9669),
        J = s.n(U);
      function B(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              B(e, t, s[t]);
            });
        }
        return e;
      }
      var ee = function () {
          var e = (0, a.useState)({
              submitted: !1,
              submitting: !1,
              info: { error: !1, msg: null },
            }),
            t = e[0],
            s = e[1],
            i = (0, a.useState)({ companyName: "", email: "", message: "" }),
            r = i[0],
            c = i[1],
            o = (0, a.useCallback)(function (e) {
              e.persist(),
                c(function (t) {
                  return K({}, t, B({}, e.target.id, e.target.value));
                }),
                s({
                  submitted: !1,
                  submitting: !1,
                  info: { error: !1, msg: null },
                });
            }, []),
            d = (0, a.useCallback)(function (e, t) {
              e
                ? (s({
                    submitted: !0,
                    submitting: !1,
                    info: { error: !1, msg: t },
                  }),
                  c({ companyName: "", email: "", message: "" }))
                : s({
                    submitted: !1,
                    submitting: !1,
                    info: { error: !0, msg: t },
                  });
            }, []),
            h = (0, a.useCallback)(
              function (e) {
                e.preventDefault(),
                  s(function (e) {
                    return K({}, e, { submitting: !0 });
                  }),
                  J()({
                    method: "POST",
                    url: "https://formspree.io/f/xlezwekg",
                    data: r,
                  })
                    .then(function (e) {
                      d(!0, "Thank you, your message has been submitted.");
                    })
                    .catch(function (e) {
                      d(!1, e.response.data.error);
                    });
              },
              [r, d]
            );
          return (0, n.jsx)("div", {
            className:
              "bg-black text-white flex flex-col justify-center pt-10 min-h-screen",
            children: (0, n.jsxs)("div", {
              className:
                "flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6",
              children: [
                (0, n.jsx)("div", {
                  className: "pb-10",
                  children: (0, n.jsx)(l.default, {
                    src: "/assets/logo.svg",
                    width: 30,
                    height: 30,
                    alt: "logo",
                  }),
                }),
                (0, n.jsx)("h2", {
                  className: "text-4xl font-bold",
                  children: "Contact Us",
                }),
                (0, n.jsxs)("form", {
                  onSubmit: h,
                  className:
                    "flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]",
                  children: [
                    t.info.error &&
                      (0, n.jsxs)("div", {
                        className:
                          "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
                        role: "alert",
                        children: [
                          (0, n.jsx)("strong", {
                            className: "font-bold",
                            children: "Error",
                          }),
                          ":",
                          " ",
                          (0, n.jsx)("span", {
                            className: "block sm:inline",
                            children: t.info.msg,
                          }),
                        ],
                      }),
                    t.submitted
                      ? (0, n.jsx)("div", {
                          className:
                            "text-white text-xl font-bold px-4 py-3 rounded relative",
                          role: "alert",
                          children:
                            "Your message has been successfully sent. We will contact you very soon!",
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("input", {
                              id: "companyName",
                              name: "companyName",
                              required: !0,
                              maxLength: 128,
                              type: "text",
                              placeholder: "Company name",
                              className:
                                "bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2",
                              onChange: o,
                              value: r.companyName,
                            }),
                            (0, n.jsx)("input", {
                              id: "email",
                              name: "email",
                              type: "email",
                              required: !0,
                              maxLength: 128,
                              placeholder: "Your E-mail",
                              className:
                                "bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2",
                              onChange: o,
                              value: r.email,
                            }),
                            (0, n.jsx)("textarea", {
                              id: "message",
                              name: "message",
                              required: !0,
                              maxLength: 1048576,
                              placeholder: "Additional information",
                              className:
                                "bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]",
                              onChange: o,
                              value: r.message,
                            }),
                            (0, n.jsx)("div", {
                              className: "text-center mt-10",
                              children: (0, n.jsx)("button", {
                                type: "submit",
                                disabled: t.submitting,
                                className:
                                  "bg-white text-black rounded-3xl px-8 py-2",
                                children: t.submitting
                                  ? "Submitting..."
                                  : t.submitted
                                  ? "Submitted"
                                  : "Submit",
                              }),
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          });
        },
        te = s(6673),
        se = function (e, t) {
          return fetch(e, t).then(function (e) {
            return e.json();
          });
        },
        ne = function () {
          var e = (0, i.ZP)("/api/stats", se).data;
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(c, {}),
              (0, n.jsx)(x, {}),
              (0, n.jsx)(g, {
                downloads: null === e || void 0 === e ? void 0 : e.downloads,
                commits: null === e || void 0 === e ? void 0 : e.commits,
              }),
              (0, n.jsx)(M, {}),
              (0, n.jsx)(Q, {}),
              (0, n.jsx)(ee, {}),
              (0, n.jsx)("div", {
                className: "sticky top-0",
                children: (0, n.jsx)(te.Z, {}),
              }),
            ],
          });
        };
    },
    9491: function (e) {
      e.exports = { section: "aboutus_section__xSPZD" };
    },
    9221: function (e) {
      e.exports = {
        viewport: "carousel_viewport__Qs9Qr",
        container: "carousel_container__zV0MF",
        slide: "carousel_slide__AaCxi",
      };
    },
    2971: function (e) {
      e.exports = { skillText: "skills_skillText__V8gIj" };
    },
    7480: function (e) {
      e.exports = { bg: "trustedby_bg__fGD1R" };
    },
  },
  function (e) {
    e.O(0, [61, 854, 774, 888, 179], function () {
      return (t = 5301), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
