"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [354],
  {
    43696: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return Tt;
          },
        });
      var a,
        i,
        r,
        l,
        o,
        m,
        s,
        c,
        d,
        u,
        p,
        h,
        g,
        f,
        b,
        E,
        w = n(67294),
        y = n(99616),
        v = n(92005),
        x = n.n(v),
        _ = n(64131),
        Z = n(89344),
        k = n(32884),
        C = n(82932),
        F = n(35639),
        N = n(6125),
        I = n(53128),
        M = n(97026),
        L = n(81880),
        O = n(19692),
        T = n(18040),
        P = (0, O.default)(T.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1b3xp68-0",
        })(
          [
            "position:relative;",
            " ",
            " &:before,&:after{position:absolute;z-index:3;background:",
            ";}&:before{top:0;left:calc(50% - 1px);width:2px;height:",
            ";background:",
            ";",
            "}&:after{content:'';bottom:-2px;left:0;right:2.4rem;height:2px;",
            "}",
          ],
          function (t) {
            return t.theme.vhsCalc(100);
          },
          T.Fs.large(a || (a = (0, L.Z)(["\n\t\t", "\n\t"])), function (t) {
            return t.theme.vh;
          }),
          function (t) {
            return t.theme.bc1;
          },
          function (t) {
            return t.theme.padS;
          },
          function (t) {
            return t.theme.bc1;
          },
          T.Fs.large(
            i ||
              (i = (0, L.Z)([
                '\n\t\t\tcontent: "";\n\t\t\theight: ',
                ";\n\t\t",
              ])),
            function (t) {
              return t.theme.padL;
            }
          ),
          T.Fs.large(
            r || (r = (0, L.Z)(["\n\t\t\tright: calc(8.333vw * 2);\n\t\t"]))
          )
        ),
        S = O.default.div.withConfig({
          displayName: "styles__Media",
          componentId: "sc-1b3xp68-1",
        })(
          [
            "",
            " position:absolute;top:0;left:0;right:0;z-index:1;overflow:hidden;",
            " &:after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:black;opacity:0.4;}video{object-fit:cover;filter:grayscale(100%);}iframe{filter:grayscale(100%);width:100vw !important;height:56.25vw !important;min-height:100vh;min-width:177.77vh;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}.gatsby-image-wrapper{width:100%;height:100%;}",
          ],
          function (t) {
            return t.theme.vhsCalc(100);
          },
          T.Fs.large(
            l || (l = (0, L.Z)(["\n\t\theight: auto;\n\t\tbottom: 0;\n\t"]))
          )
        ),
        X = O.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-1b3xp68-2",
        })([
          "position:relative;z-index:2;overflow:visible;.tilt{transform-style:preserve-3d;transform:perspective(100rem);}",
        ]),
        B = (0, O.default)(T.H1).withConfig({
          displayName: "styles__Title",
          componentId: "sc-1b3xp68-3",
        })(
          [
            "position:relative;padding-top:2.7rem;",
            " span{display:block;width:100%;text-align:center;&:first-child{text-transform:lowercase;font-family:",
            ";color:",
            ";position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-50%);",
            "}&:last-child{color:",
            ";}}",
          ],
          T.Fs.large(o || (o = (0, L.Z)(["\n\t\tpadding-top: 7.2rem;\n\t"]))),
          function (t) {
            return t.theme.script;
          },
          function (t) {
            return t.theme.bc1;
          },
          T.Fs.large(
            m ||
              (m = (0, L.Z)([
                "\n\t\t\t\t",
                "\n\t\t\t\ttransform: translate(-50%, -50%) translateZ(3.6rem);\n\t\t\t",
              ])),
            function (t) {
              return t.theme.desktopShadow;
            }
          ),
          function (t) {
            return t.theme.white;
          }
        ),
        R = O.default.div.withConfig({
          displayName: "styles__ScrollPos",
          componentId: "sc-1b3xp68-4",
        })([
          "position:absolute;z-index:3;bottom:0;left:50%;transform:translateX(-50%);",
        ]),
        j = function (t) {
          var e = t.title,
            n = t.script,
            a = t.video,
            i = t.videoFallback,
            r = (0, w.useState)(!1),
            l = r[0],
            o = r[1],
            m = (0, w.useState)(!1),
            s = m[0],
            c = m[1],
            d = (0, w.useState)(!0),
            u = d[0],
            p = d[1],
            h = (0, M.Gc)(),
            g = (0, w.useRef)(),
            f = (0, w.useRef)();
          (0, w.useEffect)(
            function () {
              k.ZP.registerPlugin(C.i);
              var t = setTimeout(function () {
                C.i.matchMedia({
                  "(min-width: 1025px)": function () {
                    k.ZP.to(g.current, {
                      opacity: "0",
                      ease: "none",
                      scrollTrigger: {
                        trigger: f.current,
                        start: "100% 100%",
                        end: "200% 100%",
                        scrub: 0.5,
                        markers: !1,
                        pin: !0,
                        anticipatePin: !0,
                      },
                    });
                  },
                });
              }, 250);
              return function () {
                clearTimeout(t), C.i.refresh();
              };
            },
            [g, f]
          );
          return w.createElement(
            F.Z,
            {
              onEnter: function () {
                o(!0), p(!0);
              },
              onExit: function () {
                o(!1), p(!1), c(!0);
              },
            },
            w.createElement(
              P,
              { ref: f, className: "cursor-reset" },
              w.createElement(
                S,
                { ref: g },
                h.large
                  ? w.createElement(N.G, {
                      src: i.url,
                      image: i.data,
                      alt: i.alt,
                    })
                  : w.createElement(x(), {
                      url: a,
                      muted: !0,
                      playing: l,
                      width: "100%",
                      height: "100%",
                      controls: !1,
                      className: "video-wrapper",
                      loop: !0,
                    })
              ),
              w.createElement(
                I.X,
                { isExpanded: !0, isCenter: !0 },
                w.createElement(
                  I.s,
                  { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
                  w.createElement(
                    X,
                    null,
                    w.createElement(
                      B,
                      null,
                      w.createElement(
                        Z.Z,
                        {
                          perspective: 500,
                          scale: 1,
                          tiltReverse: !0,
                          trackOnWindow: !0,
                          reset: s,
                          tiltEnable: !h.medium && u,
                          tiltMaxAngleX: 12,
                          tiltMaxAngleY: 12,
                          onLeave: function () {
                            c(!0);
                          },
                          className: "tilt",
                        },
                        w.createElement("span", null, n),
                        w.createElement("span", null, e)
                      )
                    )
                  )
                )
              ),
              w.createElement(R, null, w.createElement(_.Z, null))
            )
          );
        },
        A = (0, O.default)(T.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1o5bbwv-0",
        })([""]),
        z = (0, O.default)(T.ZC).withConfig({
          displayName: "styles__Part",
          componentId: "sc-1o5bbwv-1",
        })(
          [
            "position:relative;display:flex;flex-flow:column wrap;align-items:stretch;",
            "",
          ],
          function (t) {
            return (
              t.padBottomCustom &&
              (0, O.css)(
                ["padding-bottom:2.4rem;", " ", ""],
                T.Fs.medium(
                  s || (s = (0, L.Z)([" padding-bottom: ", "; "])),
                  function (t) {
                    return t.theme.padM;
                  }
                ),
                T.Fs.large(
                  c || (c = (0, L.Z)([" padding-bottom: ", "; "])),
                  function (t) {
                    return t.theme.padL;
                  }
                )
              )
            );
          }
        ),
        H = (0, O.default)(T.ZC).withConfig({
          displayName: "styles__Content",
          componentId: "sc-1o5bbwv-2",
        })(["", ""], function (t) {
          return (
            t.padBottomCustom &&
            (0, O.css)(
              ["padding-bottom:2.4rem;", " ", ""],
              T.Fs.medium(
                d || (d = (0, L.Z)([" padding-bottom: ", "; "])),
                function (t) {
                  return t.theme.padM;
                }
              ),
              T.Fs.large(
                u || (u = (0, L.Z)([" padding-bottom: ", "; "])),
                function (t) {
                  return t.theme.padL;
                }
              )
            )
          );
        }),
        D = (0, O.default)(T.H2).withConfig({
          displayName: "styles__Heading",
          componentId: "sc-1o5bbwv-3",
        })(
          ["", " color:", ";", " > span{display:block;color:", ";", "}"],
          function (t) {
            return t.theme.desktopShadow;
          },
          function (t) {
            return t.theme.white;
          },
          function (t) {
            return (
              t.mobileMargin &&
              (0, O.css)(
                ["margin:0 0 2.4rem 0;", " &:last-child{margin:0;}"],
                T.Fs.large(p || (p = (0, L.Z)([" margin: 0; "])))
              )
            );
          },
          function (t) {
            return t.theme.bc1;
          },
          T.Fs.large(h || (h = (0, L.Z)([" display: inline; "])))
        ),
        G = (0, O.default)(T.P).withConfig({
          displayName: "styles__Text",
          componentId: "sc-1o5bbwv-4",
        })(
          ["", " color:", ";", ""],
          function (t) {
            return t.theme.desktopShadow;
          },
          function (t) {
            return t.theme.white;
          },
          function (t) {
            return (
              t.margin &&
              (0, O.css)(
                ["padding:2.4rem 0 0 0;", ""],
                T.Fs.large(
                  g ||
                    (g = (0, L.Z)([
                      "\n                padding: 6rem 0 0 0;\n            ",
                    ]))
                )
              )
            );
          }
        ),
        U = O.default.picture.withConfig({
          displayName: "styles__Picture1",
          componentId: "sc-1o5bbwv-5",
        })(
          [
            "position:absolute;top:0;right:0;width:calc(8.333vw * 5 - 1.8rem);height:100%;",
            " .gatsby-image-wrapper{width:100%;height:100%;}",
          ],
          T.Fs.large(f || (f = (0, L.Z)([" top: ", "; "])), function (t) {
            return t.theme.padL;
          })
        ),
        q = O.default.picture.withConfig({
          displayName: "styles__Picture2",
          componentId: "sc-1o5bbwv-6",
        })(
          [
            "position:relative;height:50vh;min-height:36rem;max-height:48rem;margin:0 0 4.8rem 0;",
            " .gatsby-image-wrapper{width:100%;height:100%;}",
          ],
          T.Fs.large(
            b ||
              (b = (0, L.Z)([
                "\n            position: absolute;\n            top: 0; left: 0;\n\n            width: calc(8.333vw * 5);\n            height: 100%;\n            max-height: none;\n            margin: 0;\n        ",
              ]))
          )
        ),
        J = O.default.picture.withConfig({
          displayName: "styles__Picture3",
          componentId: "sc-1o5bbwv-7",
        })(
          [
            "position:relative;overflow:hidden;height:50vh;min-height:36rem;max-height:46rem;margin:0 0 4.8rem 0;",
            " .gatsby-image-wrapper{width:100%;height:100%;}",
          ],
          T.Fs.large(
            E ||
              (E = (0, L.Z)([
                "\n            position: absolute;\n            bottom: 0rem; right: 8.333vw;\n\n            width: calc(8.333vw * 4 - 3.6rem);\n            height: 100%;\n            margin: 0;\n        ",
              ]))
          )
        ),
        V = (0, O.default)(T.P).withConfig({
          displayName: "styles__TextBlock",
          componentId: "sc-1o5bbwv-8",
        })(
          [
            "position:relative;color:",
            ";&:before{content:'';position:absolute;top:0;left:-8.333vw;bottom:0;width:2px;background:",
            ";}",
          ],
          function (t) {
            return t.theme.white;
          },
          function (t) {
            return t.theme.bc1;
          }
        );
      var $,
        K,
        Y,
        W,
        Q,
        tt,
        et,
        nt,
        at,
        it,
        rt,
        lt,
        ot,
        mt,
        st,
        ct,
        dt,
        ut,
        pt,
        ht = function (t) {
          var e = t.p1h,
            n = t.p1t,
            a = t.p1i,
            i = t.p2h,
            r = t.p2t,
            l = t.p2i,
            o = t.p3h,
            m = t.p3t,
            s = t.p4h,
            c = t.p4t,
            d = t.p4i,
            u = (0, M.Gc)(),
            p = (0, w.useRef)(),
            h = (0, w.useRef)(),
            g = (0, w.useRef)(),
            f = (0, w.useRef)(),
            b = (0, w.useRef)(),
            E = (0, w.useRef)();
          return (
            (0, w.useEffect)(function () {
              k.ZP.registerPlugin(C.i);
              var t = setTimeout(function () {
                C.i.matchMedia({
                  "(min-width: 1025px)": function () {
                    k.ZP.to(h.current, {
                      y: "-50%",
                      ease: "none",
                      scrollTrigger: {
                        trigger: p.current,
                        start: "-50% 100%",
                        end: "500% 100%",
                        scrub: 0.5,
                      },
                    }),
                      k.ZP.to(f.current, {
                        y: "50%",
                        ease: "none",
                        scrollTrigger: {
                          trigger: g.current,
                          start: "-50% 100%",
                          end: "500% 100%",
                          scrub: 0.5,
                        },
                      }),
                      k.ZP.to(E.current, {
                        y: "-50%",
                        ease: "none",
                        scrollTrigger: {
                          trigger: b.current,
                          start: "-50% 100%",
                          end: "150% 100%",
                          scrub: 0.5,
                        },
                      });
                  },
                });
              }, 250);
              return function () {
                clearTimeout(t), C.i.refresh();
              };
            }, []),
            w.createElement(
              A,
              { padTop: !0 },
              w.createElement(
                z,
                { padBottom: !0, ref: p },
                w.createElement(
                  U,
                  { ref: h },
                  !u.large &&
                    w.createElement(N.G, {
                      objectFit: "cover",
                      image: a.data,
                      alt: a.alt,
                    })
                ),
                w.createElement(
                  I.X,
                  { isExpanded: !0 },
                  w.createElement(
                    I.s,
                    {
                      small: 12,
                      medium: 10,
                      pushOnMedium: 1,
                      large: 7,
                      mpad: !0,
                    },
                    w.createElement(H, null, w.createElement(D, null, e))
                  )
                ),
                w.createElement(
                  I.X,
                  { isExpanded: !0 },
                  w.createElement(
                    I.s,
                    {
                      small: 12,
                      medium: 10,
                      pushOnMedium: 1,
                      large: 6,
                      mpad: !0,
                    },
                    w.createElement(
                      H,
                      null,
                      w.createElement(G, { margin: !0 }, n)
                    )
                  )
                )
              ),
              w.createElement(
                z,
                { padBottomCustom: !0, ref: g },
                w.createElement(
                  q,
                  { ref: f },
                  w.createElement(N.G, {
                    objectFit: "cover",
                    image: l.data,
                    alt: l.alt,
                  })
                ),
                w.createElement(
                  I.X,
                  { isExpanded: !0 },
                  w.createElement(
                    I.s,
                    {
                      small: 12,
                      medium: 10,
                      pushOnMedium: 1,
                      large: 8,
                      mpad: !0,
                    },
                    w.createElement(
                      H,
                      { padBottomCustom: !0 },
                      w.createElement(D, null, i)
                    )
                  )
                ),
                w.createElement(
                  I.X,
                  { isExpanded: !0 },
                  w.createElement(
                    I.s,
                    {
                      small: 12,
                      medium: 10,
                      pushOnMedium: 1,
                      pushOnLarge: 6,
                      large: 5,
                      mpad: !0,
                    },
                    w.createElement(H, null, w.createElement(G, null, r))
                  )
                )
              ),
              w.createElement(
                z,
                { padBottom: !0 },
                w.createElement(
                  I.X,
                  { isExpanded: !0 },
                  w.createElement(
                    I.s,
                    { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
                    w.createElement(
                      H,
                      { padBottomCustom: !0 },
                      w.createElement(D, null, o)
                    )
                  )
                ),
                w.createElement(
                  I.X,
                  { isExpanded: !0 },
                  w.createElement(
                    I.s,
                    {
                      small: 11,
                      pushOnSmall: 1,
                      smedium: 10,
                      medium: 9,
                      pushOnMedium: 2,
                      pushOnLarge: 3,
                      large: 7,
                      mpad: !0,
                    },
                    w.createElement(H, null, w.createElement(V, null, m))
                  )
                )
              ),
              w.createElement(
                z,
                { padBottom: !0, ref: b },
                w.createElement(
                  J,
                  { ref: E },
                  w.createElement(N.G, {
                    objectFit: "cover",
                    image: d.data,
                    alt: d.alt,
                  })
                ),
                w.createElement(
                  I.X,
                  { isExpanded: !0 },
                  w.createElement(
                    I.s,
                    { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
                    w.createElement(
                      H,
                      { padBottomCustom: !0 },
                      s.map(function (t) {
                        var e = t.uid,
                          n = t.title;
                        return w.createElement(
                          D,
                          { key: e, mobileMargin: !0 },
                          w.createElement("span", null, "The future of "),
                          n
                        );
                      })
                    )
                  )
                ),
                w.createElement(
                  I.X,
                  { isExpanded: !0 },
                  w.createElement(
                    I.s,
                    {
                      small: 12,
                      medium: 10,
                      pushOnMedium: 1,
                      large: 6,
                      mpad: !0,
                    },
                    w.createElement(H, null, w.createElement(G, null, c))
                  )
                )
              )
            )
          );
        },
        gt = n(12276),
        ft = O.default.div.withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-77amoe-0",
        })(
          [
            "position:relative;display:flex;align-items:center;justify-content:space-between;margin:0 0 2.4rem 0;user-select:none;",
            " ",
            " &:last-child{margin:0;}&:before{display:block;width:100%;padding-top:100%;",
            "}&:hover{",
            "}",
          ],
          T.Fs.medium(
            $ ||
              ($ = (0, L.Z)(["\n\t\tflex-flow: column;\n\t\tmargin: 0;\n\t"]))
          ),
          T.Fs.large(
            K ||
              (K = (0, L.Z)([
                "\n\t\tflex-flow: row;\n\t\tmargin: 0; \n\t\t\n\t",
              ]))
          ),
          T.Fs.large(Y || (Y = (0, L.Z)(["\n\t\t\tcontent: '';\n\t\t"]))),
          T.Fs.large(
            W ||
              (W = (0, L.Z)([
                "\n\t\t\tfigure {\n\t\t\t\t&:after {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t> div {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t",
              ]))
          )
        ),
        bt = O.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-77amoe-1",
        })(
          [
            "flex:1;display:flex;flex-flow:column;justify-content:center;align-items:center;text-align:center;margin-left:1.2rem;margin-top:2.4rem;transition:",
            ";",
            " ",
            " ",
            "",
          ],
          function (t) {
            return t.theme.ease;
          },
          T.Fs.medium(
            Q ||
              (Q = (0, L.Z)(["\n\t\tflex: initial;\n\t\tmargin-left: 0;\n\t"]))
          ),
          T.Fs.large(
            tt ||
              (tt = (0, L.Z)([
                "\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 3;\n\n\t\tjustify-content: space-between;\n\t\talign-items: flex-start;\n\t\ttext-align: left;\n\n\t\tpadding: 4.8rem;\n\t\tmargin: 0;\n\t\topacity: 0;\n\t",
              ]))
          ),
          T.Fs.xlarge(et || (et = (0, L.Z)(["\n\t\tpadding: 4.8rem;\n\t"])))
        ),
        Et = O.default.figure.withConfig({
          displayName: "styles__Image",
          componentId: "sc-77amoe-2",
        })(
          [
            "width:12rem;margin-left:1.2rem;",
            " ",
            " ",
            " &:after{content:'';position:absolute;z-index:2;top:0;right:0;bottom:0;left:0;background:",
            ";mix-blend-mode:multiply;opacity:0;transition:",
            ";}.gatsby-image-wrapper{width:100%;height:100%;filter:grayscale(100%);}",
          ],
          T.Fs.phablet(nt || (nt = (0, L.Z)(["\n\t\twidth: 40%;\n\t"]))),
          T.Fs.medium(
            at ||
              (at = (0, L.Z)([
                "\n\t\twidth: 100%;\n\t\tmax-width: 100%;\n\t\tmargin-left: 0;\n\t",
              ]))
          ),
          T.Fs.large(
            it ||
              (it = (0, L.Z)([
                "\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\tz-index: 1;\n\n\t\t\tmargin: 0;\n\t\t\twidth: 100%;\n\t\t\tmax-width: none;\n\t\t",
              ]))
          ),
          function (t) {
            return t.theme.bc1;
          },
          function (t) {
            return t.theme.ease;
          }
        ),
        wt = O.default.a.withConfig({
          displayName: "styles__Linkedin",
          componentId: "sc-77amoe-3",
        })(
          ["display:none;padding:2.4rem;", ""],
          T.Fs.large(
            rt ||
              (rt = (0, L.Z)([
                "\n\t\tdisplay: inline-block;\n\t\ttransform: translate(-2.4rem, -2.4rem);\n\t",
              ]))
          )
        ),
        yt = (0, O.default)(T.Dr).withConfig({
          displayName: "styles__Role",
          componentId: "sc-77amoe-4",
        })(
          ["margin-top:auto;color:", ";", ""],
          function (t) {
            return t.theme.bc1;
          },
          T.Fs.large(
            lt || (lt = (0, L.Z)(["\n\t\tcolor: ", ";\n\t"])),
            function (t) {
              return t.theme.white;
            }
          )
        ),
        vt = (0, O.default)(T.H4).withConfig({
          displayName: "styles__Name",
          componentId: "sc-77amoe-5",
        })(["margin-top:0.6rem;color:", ";"], function (t) {
          return t.theme.white;
        }),
        xt = function (t) {
          var e = t.name,
            n = t.role,
            a = t.image,
            i = t.hasLinkedin,
            r = t.linkedinURL;
          return w.createElement(
            ft,
            { className: "cursor-white" },
            w.createElement(
              Et,
              null,
              w.createElement(N.G, {
                objectFit: "cover",
                image: a.data,
                alt: a.alt,
              })
            ),
            w.createElement(
              bt,
              null,
              i &&
                w.createElement(
                  wt,
                  {
                    "aria-label": "View Linkedin",
                    href: r,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "cursor-trigger",
                  },
                  w.createElement(gt.Z, { type: "linkedin" })
                ),
              w.createElement(yt, null, n),
              w.createElement(vt, null, e)
            )
          );
        },
        _t = w.memo(xt),
        Zt = (0, O.default)(T.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1t3q13i-0",
        })(["position:relative;overflow:hidden;"]),
        kt = (0, O.default)(T.ZC).withConfig({
          displayName: "styles__Sweater",
          componentId: "sc-1t3q13i-1",
        })(
          ["", ""],
          T.Fs.large(
            ot || (ot = (0, L.Z)(["\n\t\tpadding-bottom: 12rem;\n\t"]))
          )
        ),
        Ct = (0, O.default)(T.H2).withConfig({
          displayName: "styles__Heading",
          componentId: "sc-1t3q13i-2",
        })(
          [
            "position:relative;display:inline-block;margin-right:auto;&:after{content:'';position:absolute;top:50%;left:calc(100% + 2.4rem);width:calc(8.333vw * 10);height:2px;background:",
            ";",
            "}",
          ],
          function (t) {
            return t.theme.bc1;
          },
          T.Fs.large(
            mt || (mt = (0, L.Z)(["\n\t\t\tleft: calc(100% + 12rem);\n\t\t"]))
          )
        ),
        Ft = O.default.div.withConfig({
          displayName: "styles__TeamMembers",
          componentId: "sc-1t3q13i-3",
        })(
          [
            "position:relative;margin:3.6rem 0 0 0;display:grid;grid-template-columns:repeat(1,1fr);grid-template-rows:repeat(1,1fr);",
            " ",
            " &:before{content:'';position:absolute;z-index:0;top:0;left:7rem;bottom:0;width:2px;background:",
            ";",
            " ",
            " ",
            "}",
          ],
          T.Fs.medium(
            st ||
              (st = (0, L.Z)([
                "\n\t\trow-gap: 4.8rem;\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t\tpadding: 0 1.2rem;\n\t",
              ]))
          ),
          T.Fs.large(
            ct ||
              (ct = (0, L.Z)([
                "\n\t\trow-gap: 0;\n\t\tmargin: 6rem 0 0 0;\n\t\tpadding: 0;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t",
              ]))
          ),
          function (t) {
            return t.theme.bc1;
          },
          T.Fs.phablet(dt || (dt = (0, L.Z)(["\n\t\t\tleft: 22%;\n\t\t"]))),
          T.Fs.medium(
            ut || (ut = (0, L.Z)(["\n\t\t\tleft: calc(50% - 1px);\n\t\t"]))
          ),
          function (t) {
            return (
              t.hasEnough &&
              "\n\t\t\t\t" +
                T.Fs.large(
                  pt ||
                    (pt = (0, L.Z)([
                      "\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tright: 0;\n\t\t\t\t\tbottom: 0;\n\t\t\t\t\tborder: 2px solid ",
                      ";\n\t\t\t\t\tbackground: transparent;\n\n\t\t\t\t\twidth: auto;\n\t\t\t\t\t\n\t\t\t\t\tpointer-events: none;\n\t\t\t\t\tmargin: 16% 16%;\n\t\t\t\t",
                    ])),
                  function (t) {
                    return t.theme.bc1;
                  }
                ) +
                "\n\t\t\t"
            );
          }
        ),
        Nt = function (t) {
          var e = t.heading,
            n = t.team;
          return w.createElement(
            Zt,
            { padBottom: !0 },
            w.createElement(
              kt,
              null,
              w.createElement(
                I.X,
                { isExpanded: !0 },
                w.createElement(
                  I.s,
                  { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
                  w.createElement(Ct, null, e)
                )
              ),
              w.createElement(
                I.X,
                { isExpanded: !0, isCollapsed: !0 },
                w.createElement(
                  I.s,
                  { small: 12, medium: 10, pushOnMedium: 1 },
                  w.createElement(
                    I.X,
                    { isExpanded: !0 },
                    w.createElement(
                      I.s,
                      { small: 12 },
                      w.createElement(
                        Ft,
                        { hasEnough: n.length > 3 },
                        n.map(function (t) {
                          var e = t.name,
                            n = t.role,
                            a = t.hasLinkedin,
                            i = t.linkedinURL,
                            r = t.image,
                            l = t.id;
                          return w.createElement(_t, {
                            key: l,
                            role: n,
                            name: e,
                            hasLinkedin: a,
                            linkedinURL: i,
                            image: r,
                          });
                        })
                      )
                    )
                  )
                )
              )
            )
          );
        },
        It = n(15575),
        Mt = n(87372),
        Lt = n(97660),
        Ot = n(2065),
        Tt = function (t) {
          var e = t.transitionStatus,
            n = t.entry,
            a = t.exit,
            i = t.data,
            r = t.location;
          return w.createElement(
            Ot.Z,
            { status: e, entry: n, exit: a, location: r },
            w.createElement(y.Z, {
              content: i.about.seo,
              schema: i.about.schema,
              fallback: i.seoFallback.seo.fallback,
            }),
            w.createElement(j, {
              title: i.about.heroTitle,
              script: i.about.heroScript,
              video: i.about.heroVideo,
              videoFallback: i.about.heroVideoFallback,
            }),
            w.createElement(ht, {
              p1h: i.about.p1h,
              p1t: i.about.p1t,
              p1i: i.about.p1i,
              p2h: i.about.p2h,
              p2t: i.about.p2t,
              p2i: i.about.p2i,
              p3h: i.about.p3h,
              p3t: i.about.p3t,
              p4h: i.about.p4h,
              p4t: i.about.p4t,
              p4i: i.about.p4i,
            }),
            w.createElement(Nt, {
              heading: i.about.teamTitle,
              team: i.about.team,
            }),
            w.createElement(It.Z, { projects: i.featured.projects }),
            w.createElement(Mt.Z, {
              main: i.home.trustMain,
              script: i.home.trustScript,
              clients: i.home.trustClients,
              awards: i.home.trustAwards,
              awardsText: i.home.trustAwardsText,
            }),
            w.createElement(Lt.Z, { override: i.about, fallback: i.fallback })
          );
        };
    },
  },
]);
//# sourceMappingURL=component---src-pages-about-jsx-099149b894a0c6138400.js.map
