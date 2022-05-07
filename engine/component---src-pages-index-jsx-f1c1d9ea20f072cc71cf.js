"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [230],
  {
    39680: function (e, t, n) {
      var r = n(67294),
        i = n(69788),
        a = n(97026),
        o = n(49229),
        s = (0, i.default)({
          resolved: {},
          chunkName: function () {
            return "react-player-vimeo";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!n.m[t];
          },
          importAsync: function () {
            return n.e(361).then(n.t.bind(n, 92005, 23));
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
            return 92005;
          },
        }),
        l = r.forwardRef(function (e, t) {
          var n = (0, a.Gc)(),
            i = {
              url: e.url,
              width: "100%",
              height: "100%",
              playing: !n.large && e.isPlaying,
              muted: !0,
              controls: !!n.large,
              loop: !0,
            };
          return r.createElement(
            o.g,
            { ref: t },
            e.isNeeded && r.createElement(s, i)
          );
        });
      t.Z = l;
    },
    49229: function (e, t, n) {
      n.d(t, {
        g: function () {
          return a;
        },
      });
      var r = n(19692),
        i = n(52068),
        a = r.default.div.withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1ufj6dm-0",
        })(
          [
            "",
            " position:relative;width:100%;padding-top:56.25%;background:",
            ";pointer-events:none;filter:grayscale(100%);&:after{",
            ' content:"Loading Video";position:absolute;z-index:1;top:50%;left:50%;transform:translate(-50%,-50%);color:',
            ";}> div{position:absolute;z-index:2;top:0;left:0;}",
          ],
          function (e) {
            return e.theme.dropshadow;
          },
          function (e) {
            return e.theme.black;
          },
          i.LD,
          function (e) {
            return e.theme.bc1;
          }
        );
    },
    84061: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r,
        i,
        a = n(67294),
        o = n(53128),
        s = n(81880),
        l = n(19692),
        c = n(18040),
        u = (0, l.default)(c.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1q9sgy9-0",
        })(function (e) {
          return (0,
          l.css)(["position:relative;background:linear-gradient( 180deg,", "00 0%,", " 100% );&:before,&:after{content:'';position:absolute;width:2px;left:calc(50% - 1px);background:", ";height:", ";", "}&:before{top:0;}&:after{bottom:0;}"], e.theme.black, e.theme.black, e.theme.bc1, e.theme.padS, c.Fs.large(r || (r = (0, s.Z)(["\n                height: ", ";\n            "])), e.theme.padL));
        }),
        m = (0, l.default)(c.H2).withConfig({
          displayName: "styles__Content",
          componentId: "sc-1q9sgy9-1",
        })(function (e) {
          return (0,
          l.css)(["text-align:center;padding:3.6rem 0;", ""], c.Fs.large(i || (i = (0, s.Z)(["\n            padding: 6rem 0;\n        "]))));
        }),
        d = function (e) {
          var t = e.content;
          return a.createElement(
            u,
            { pad: !0 },
            a.createElement(
              o.X,
              { isExpanded: !0 },
              a.createElement(
                o.s,
                { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
                a.createElement(m, null, t)
              )
            )
          );
        };
    },
    99537: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r,
        i,
        a = n(67294),
        o = n(53128),
        s = n(81880),
        l = n(19692),
        c = n(18040),
        u = (0, l.default)(c.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1tnm3cd-0",
        })(function (e) {
          return (0,
          l.css)(["position:relative;padding:", " 0;background:linear-gradient( 0deg,", "00 0%,", " 100% );", " &:before{content:'';position:absolute;top:0;right:2.4rem;left:0;height:2px;background:", ";", "}"], e.theme.padS, e.theme.black, e.theme.black, c.Fs.large(r || (r = (0, s.Z)(["\n\t\t\tpadding: ", " 0;\n\t\t"])), e.theme.padL), e.theme.bc1, c.Fs.large(i || (i = (0, s.Z)(["\n                top: 50%;\n                right: auto;\n                width: calc(8.333vw * 1);\n                transform: translateY(-50%);\n            "]))));
        }),
        m = (0, l.default)(c.ZC).withConfig({
          displayName: "styles__Content",
          componentId: "sc-1tnm3cd-1",
        })(function (e) {
          return (0, l.css)([""]);
        }),
        d = (0, l.default)(c.H3).withConfig({
          displayName: "styles__Text",
          componentId: "sc-1tnm3cd-2",
        })(function (e) {
          return (0, l.css)([""]);
        }),
        f = function (e) {
          var t = e.content;
          return a.createElement(
            u,
            null,
            a.createElement(
              o.X,
              { isExpanded: !0 },
              a.createElement(
                o.s,
                {
                  small: 12,
                  medium: 10,
                  pushOnMedium: 1,
                  large: 9,
                  pushOnLarge: 2,
                  mpad: !0,
                },
                a.createElement(m, null, a.createElement(d, null, t))
              )
            )
          );
        };
    },
    3546: function (e, t, n) {
      var r = n(67294),
        i = n(69788),
        a = n(84061),
        o = n(99537),
        s = n(50681),
        l = n(97026),
        c = n(75429),
        u = (0, i.default)({
          resolved: {},
          chunkName: function () {
            return "parts-Starwars";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!n.m[t];
          },
          importAsync: function () {
            return n.e(443).then(n.bind(n, 96347));
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
            return 96347;
          },
        }),
        m = function (e) {
          var t = e.isHome,
            n = e.intro,
            i = e.outro,
            m = e.linkPath,
            d = e.passedData,
            f = e.useFilter,
            h = e.useOriginalPosition,
            p = (0, l.Gc)(),
            g = {
              isHome: t,
              linkPath: m,
              data: d,
              useFilter: f,
              useOriginalPosition: h,
            };
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(a.Z, { content: n }),
            r.createElement(
              c.p,
              null,
              p.large ? r.createElement(s.Z, g) : r.createElement(u, g)
            ),
            r.createElement(o.Z, { content: i })
          );
        };
      t.Z = m;
    },
    75429: function (e, t, n) {
      n.d(t, {
        p: function () {
          return a;
        },
      });
      var r = n(19692),
        i = n(18040),
        a = (0, r.default)(i.$0).withConfig({
          displayName: "styles__Gradient",
          componentId: "sc-3s1yg6-0",
        })(function (e) {
          return (0, r.css)(["background:", ";"], e.theme.black);
        });
    },
    3631: function (e, t, n) {
      n.d(t, {
        gM: function () {
          return m;
        },
        pY: function () {
          return d;
        },
        PO: function () {
          return f;
        },
        qF: function () {
          return h;
        },
        Re: function () {
          return p;
        },
        sG: function () {
          return g;
        },
        Nz: function () {
          return y;
        },
      });
      var r,
        i,
        a,
        o,
        s = n(81880),
        l = n(19692),
        c = n(18040),
        u = n(52068),
        m = (0, l.default)(c.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-3to0xi-0",
        })(function (e) {
          return (0,
          l.css)(["position:fixed;z-index:5;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;opacity:", ";transition:opacity 0.5s linear;", ""], e.isMenuOpen ? 0 : 1, e.badPerf && (0, l.css)(["position:relative;top:auto;right:auto;bottom:auto;left:auto;"]));
        }),
        d = l.default.div.withConfig({
          displayName: "styles__Sweater",
          componentId: "sc-3to0xi-1",
        })(function (e) {
          return (0,
          l.css)(["position:relative;perspective:50rem;transform-style:preserve-3d;"]);
        }),
        f = l.default.div.withConfig({
          displayName: "styles__FoldAlign",
          componentId: "sc-3to0xi-2",
        })(function (e) {
          return (0, l.css)(["width:100%;height:100%;"]);
        }),
        h = l.default.div.withConfig({
          displayName: "styles__Fold",
          componentId: "sc-3to0xi-3",
        })(function (e) {
          return (0,
          l.css)(["overflow:hidden;width:calc(100vw - 48px);height:calc(var(--vhs,1vh) * 80);transition:", ";pointer-events:none;", " ", " ", " ", ""], e.theme.ease, c.Fs.large(r || (r = (0, s.Z)(["\n            width: calc(66.666vw - 3.6rem);\n            height: calc(var(--vh, 1vh) * 80);\n        "]))), e.badPerf && (0, l.css)(["height:auto !important;"]), e.top && (0, l.css)(["background:transparent;position:absolute;transform-origin:bottom center;left:0;right:0;bottom:100%;transform-origin:bottom center;transform:rotateX(-90deg);", "{transform:translateY(100%);}"], f), e.bottom && (0, l.css)(["background:transparent;position:absolute;transform-origin:top center;right:0;left:0;top:100%;transform-origin:top center;transform:rotateX(90deg);", "{transform:translateY(-100%);}"], f));
        }),
        p = l.default.ul.withConfig({
          displayName: "styles__FoldContent",
          componentId: "sc-3to0xi-4",
        })(function (e) {
          return (0,
          l.css)(["text-align:center;margin:0 auto;pointer-events:all;will-change:transform;"]);
        }),
        g = l.default.div.withConfig({
          displayName: "styles__ScrollIndicatorPos",
          componentId: "sc-3to0xi-5",
        })(function (e) {
          return (0, l.css)(["position:fixed;bottom:0;left:6rem;"]);
        }),
        y = l.default.button.withConfig({
          displayName: "styles__FilterToggle",
          componentId: "sc-3to0xi-6",
        })(function (e) {
          return (0,
          l.css)(["position:fixed;z-index:10;left:0;bottom:0;display:flex;align-items:center;justify-content:center;background:", ";width:100%;height:4.8rem;padding:1.2rem;margin:0;cursor:pointer;", " svg{fill:none;stroke:", ";stroke-width:2px;width:1.6rem;height:1.6rem;", "}span{", " margin-left:0.6rem;color:", ";", "}"], e.theme.white, c.Fs.large(i || (i = (0, s.Z)(["\n\t\t\tleft: auto;\n\t\t\tright: 4.8rem;\n\t\t\tbottom: 4.8rem;\n\t\t\tbackground: transparent;\n\t\t\tjustify-content: flex-end;\n\t\t\theight: auto;\n\t\t"]))), e.theme.black, c.Fs.large(a || (a = (0, s.Z)(["\n\t\t\t\tstroke: ", ";\n\t\t\t\twidth: 2.4rem;\n\t\t\t\theight: 2.4rem;\n\t\t\t"])), e.theme.white), u.Qs, e.theme.black, c.Fs.large(o || (o = (0, s.Z)(["\n\t\t\t\tmargin-left: 1.2rem;\n\t\t\t\tcolor: ", ";\n\t\t\t"])), e.theme.white));
        });
    },
    80610: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var r,
        i = n(67294),
        a = n(32884),
        o = n(82932),
        s = n(6125),
        l = n(2346),
        c = n(94136),
        u = n(81880),
        m = n(19692),
        d = n(25444),
        f = n(18040),
        h = n(52068),
        p = (0, m.default)(d.Link).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1ezn1qw-0",
        })(function (e) {
          return (0,
          m.css)(["position:relative;display:flex;flex-flow:column wrap;align-items:center;justify-content:center;overflow:hidden;min-height:36rem;", ""], f.Fs.medium(r || (r = (0, u.Z)(["\n\t\t\theight: 50vh;\n\t\t"]))));
        }),
        g = m.default.div.withConfig({
          displayName: "styles__Background",
          componentId: "sc-1ezn1qw-1",
        })(function (e) {
          return (0,
          m.css)(["position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0.4;transform:scale(1.2);filter:grayscale(100%);", " .gatsby-image-wrapper{width:100%;height:100%;filter:brightness(0.4);}"], e.isHidden && (0, m.css)(["opacity:0;"]));
        }),
        y = m.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-1ezn1qw-2",
        })(function (e) {
          return (0,
          m.css)(["position:relative;z-index:2;display:flex;flex-flow:column wrap;align-items:center;justify-content:center;width:100%;height:100%;padding:0 2.4rem;text-align:center;"]);
        }),
        v = m.default.h2.withConfig({
          displayName: "styles__Title",
          componentId: "sc-1ezn1qw-3",
        })(function (e) {
          return (0,
          m.css)(["", " color:transparent;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:", ";transition:", ";"], h.Iq, e.theme.white, e.theme.ease);
        }),
        w = (0, m.default)(f.P).withConfig({
          displayName: "styles__Excerpt",
          componentId: "sc-1ezn1qw-4",
        })(function (e) {
          return (0, m.css)(["color:", ";"], e.theme.white);
        }),
        b = m.default.ul.withConfig({
          displayName: "styles__Tags",
          componentId: "sc-1ezn1qw-5",
        })(function (e) {
          return (0,
          m.css)(["display:flex;flex-flow:column;align-items:center;justify-content:center;margin:1.2rem 0;"]);
        }),
        x = m.default.li.withConfig({
          displayName: "styles__Tag",
          componentId: "sc-1ezn1qw-6",
        })(function (e) {
          return (0,
          m.css)(["", " color:", ";text-transform:uppercase;padding:0 1.2rem;"], h.Qs, e.theme.bc1);
        });
      var E = function (e) {
        var t = e.title,
          n = e.excerpt,
          r = e.tags,
          u = e.slug,
          m = e.image,
          d = e.linkPath,
          f = e.isHome,
          h = (0, i.useRef)(),
          E = (0, i.useRef)(),
          _ = (0, i.useState)(!1),
          k = _[0],
          Z = _[1],
          C = {
            onClick: function () {
              Z(!0);
              (0, l.z)(function () {
                c.f.service = u;
              });
            },
            to: "" + d + (!f && u),
            className: "cursor-link",
            exit: { length: 1, delay: 0 },
            entry: { length: 1, delay: 0 },
          };
        return (
          (0, i.useEffect)(function () {
            a.ZP.registerPlugin(o.i);
            var e = setTimeout(function () {
              a.ZP.to(h.current, {
                opacity: 1,
                transform: "scale(1)",
                filter: "grayscale(0%)",
                ease: [0.8, 0, 0.2, 1],
                scrollTrigger: {
                  trigger: E.current,
                  start: "0% 50%",
                  end: "100% 50%",
                  scrub: !1,
                  toggleActions: "play reverse play reverse",
                },
              });
            }, 500);
            return function () {
              clearTimeout(e), o.i.refresh();
            };
          }, []),
          i.createElement(
            p,
            Object.assign({ ref: E }, C),
            i.createElement(
              g,
              { ref: h, isHidden: k },
              i.createElement(s.G, {
                objectFit: "cover",
                image: m.data,
                alt: m.alt,
              })
            ),
            i.createElement(
              y,
              null,
              i.createElement(v, { "data-project": t }, t),
              r &&
                i.createElement(
                  b,
                  null,
                  r.map(function (e) {
                    var t = e.tag;
                    return i.createElement(x, { key: t }, t);
                  })
                ),
              n && i.createElement(w, { small: !0 }, n)
            )
          )
        );
      };
    },
    50681: function (e, t, n) {
      var r = n(67294),
        i = n(80610),
        a = n(69788),
        o = n(12276),
        s = n(88706),
        l = n(2346),
        c = n(51672),
        u = n(3631),
        m = (0, a.default)({
          resolved: {},
          chunkName: function () {
            return "parts-Starwars-Filter";
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
        });
      function d(e) {
        var t = e.isHome,
          n = e.linkPath,
          a = e.data,
          d = e.useFilter,
          f = void 0 === d || d,
          h = e.children,
          p = (0, r.useState)(a),
          g = p[0],
          y = p[1];
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            c.g,
            null,
            h,
            g.map(function (e) {
              var a = e.id,
                o = e.title,
                s = e.slug,
                l = e.excerpt,
                c = e.tags,
                u = e.image;
              return r.createElement(i.Z, {
                key: a,
                title: o,
                slug: s,
                excerpt: l,
                tags: c,
                image: u,
                linkPath: n,
                isHome: t,
              });
            })
          ),
          f &&
            r.createElement(
              u.Nz,
              {
                className: "cursor-trigger",
                onClick: (0, l.aD)(function (e) {
                  !(function (e) {
                    (s.L.isOpen = !0), e.stopPropagation();
                  })(e);
                }),
              },
              r.createElement(o.Z, { type: "filter" }),
              r.createElement("span", null, "Filter")
            ),
          !t && r.createElement(m, { data: a, setFilteredData: y })
        );
      }
      t.Z = d;
    },
    51672: function (e, t, n) {
      n.d(t, {
        g: function () {
          return a;
        },
      });
      var r = n(19692),
        i = n(18040),
        a = (0, r.default)(i.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-n5a8ky-0",
        })(function (e) {
          return (0, r.css)(["padding-bottom:", ";"], e.theme.padS);
        });
    },
    59248: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ne;
          },
        });
      var r,
        i,
        a,
        o,
        s,
        l,
        c,
        u,
        m,
        d,
        f,
        h,
        p,
        g,
        y,
        v,
        w,
        b = n(67294),
        x = n(99616),
        E = n(2065),
        _ = n(89344),
        k = n(12276),
        Z = n(64131),
        C = n(35639),
        N = n(53128),
        F = n(97026),
        I = n(71702),
        S = n(93075),
        P = n(81880),
        L = n(19692),
        z = n(18040),
        A = (0, L.default)(z.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-lddcyi-0",
        })(function (e) {
          return (0,
          L.css)(["height:90vh;min-height:50rem;max-height:80rem;position:relative;z-index:6;user-select:none;overflow:hidden;", " &:after{position:absolute;top:0;left:50%;width:2px;height:", ";background:", ";", "}.tilt{width:100%;height:100%;transform-style:preserve-3d;will-change:transform;}"], z.Fs.large(r || (r = (0, P.Z)(["\n\t\t\theight: 100vh;\n\t\t\tmax-height: 100vh;\n\t\t"]))), e.theme.padS, e.theme.bc1, z.Fs.large(i || (i = (0, P.Z)(['\n                content: "";\n                height: ', ";\n            "])), e.theme.padL));
        }),
        O = (0, L.default)(z.ZC).withConfig({
          displayName: "styles__Content",
          componentId: "sc-lddcyi-1",
        })(function (e) {
          return (0,
          L.css)(["text-align:center;opacity:", ";transform:scale(", ");transition:all 1s ", ";"], e.isLoaderComplete ? 1 : 0, e.isLoaderComplete ? 1 : 1.6, e.theme.bezzy);
        }),
        T = (0, L.default)(z.H1).withConfig({
          displayName: "styles__Title",
          componentId: "sc-lddcyi-2",
        })(function (e) {
          return (0,
          L.css)(["text-align:center;transform:translateY(1.35rem);", " span{", " display:block;", " &:first-child{color:", ";text-align:center;", " ", "}&:last-child{text-transform:lowercase;font-family:", ";color:", ";transform:translateY(-50%);", "}}"], z.Fs.large(a || (a = (0, P.Z)(["\n\t\t\ttransform: translateY(3.6rem);\n\t\t"]))), e.theme.mobileShadow, z.Fs.large(o || (o = (0, P.Z)(["\n\t\t\t\t", "\n\t\t\t"])), e.theme.desktopShadow), e.theme.white, z.Fs.large(s || (s = (0, P.Z)([" padding: 0 15%; "]))), z.Fs.xxlarge(l || (l = (0, P.Z)([" padding: 0 6vw; "]))), e.theme.script, e.theme.bc1, z.Fs.large(c || (c = (0, P.Z)(["\n\t\t\t\t\ttransform: translateZ(6rem) translateY(-50%);\n\t\t\t\t"]))));
        }),
        q = L.default.ul.withConfig({
          displayName: "styles__Social",
          componentId: "sc-lddcyi-3",
        })(function (e) {
          return (0,
          L.css)(["position:absolute;bottom:4.8rem;right:4.8rem;display:flex;flex-flow:row;align-items:center;justify-content:center;li{a{position:relative;display:inline-block;padding:1.2rem;&:hover{svg{fill:", ";}}svg{transition:", ";}}}"], e.theme.bc1, e.theme.ease);
        }),
        H = L.default.div.withConfig({
          displayName: "styles__ScrollPos",
          componentId: "sc-lddcyi-4",
        })(function (e) {
          return (0,
          L.css)(["position:absolute;bottom:0;left:50%;transform:translateX(-50%);", ""], z.Fs.large(u || (u = (0, P.Z)(["\n\t\t\tleft: 6rem;\n\t\t\ttransform: none;\n\t\t"]))));
        }),
        j = (0, S.Pi)(function (e) {
          var t = e.main,
            n = e.script,
            r = e.social,
            i = (0, F.Gc)(),
            a = (0, b.useState)(!I.s.isNeeded),
            o = a[0],
            s = a[1],
            l = (0, b.useState)(!1),
            c = l[0],
            u = l[1],
            m = (0, b.useState)(!0),
            d = m[0],
            f = m[1];
          return (
            (0, b.useEffect)(
              function () {
                var e;
                return (
                  !1 === I.s.isNeeded &&
                    !1 === o &&
                    (e = setTimeout(function () {
                      s(!0);
                    }, 2e3)),
                  function () {
                    clearTimeout(e);
                  }
                );
              },
              [I.s.isNeeded]
            ),
            b.createElement(
              A,
              null,
              b.createElement(
                N.X,
                { isExpanded: !0, isCenter: !0 },
                b.createElement(
                  N.s,
                  {
                    small: 12,
                    medium: 10,
                    pushOnMedium: 1,
                    xxlarge: 8,
                    pushOnXxlarge: 2,
                    mpad: !0,
                  },
                  b.createElement(
                    C.Z,
                    {
                      onEnter: function () {
                        f(!0);
                      },
                      onExit: function () {
                        f(!1), u(!0);
                      },
                    },
                    b.createElement(
                      O,
                      { className: "cursor-reset", isLoaderComplete: o },
                      b.createElement(
                        T,
                        null,
                        b.createElement(
                          _.Z,
                          {
                            perspective: 500,
                            scale: 1,
                            tiltReverse: !0,
                            trackOnWindow: !0,
                            reset: c,
                            tiltEnable: !i.medium && d,
                            tiltMaxAngleX: 12,
                            tiltMaxAngleY: 12,
                            onLeave: function () {
                              u(!0);
                            },
                            className: "tilt",
                          },
                          b.createElement("span", null, t),
                          b.createElement("span", null, n)
                        )
                      )
                    )
                  )
                )
              ),
              b.createElement(H, null, b.createElement(Z.Z, null)),
              i.medium
                ? null
                : b.createElement(
                    q,
                    null,
                    r.ig &&
                      b.createElement(
                        "li",
                        { className: "cursor-trigger" },
                        b.createElement(
                          "a",
                          {
                            href: r.ig,
                            target: "_blank",
                            rel: "noreferrer nofollow",
                            "aria-label": "Go to Instagram",
                          },
                          b.createElement(k.Z, { type: "instagram" })
                        )
                      ),
                    r.tw &&
                      b.createElement(
                        "li",
                        { className: "cursor-trigger" },
                        b.createElement(
                          "a",
                          {
                            href: r.tw,
                            target: "_blank",
                            rel: "noreferrer nofollow",
                            "aria-label": "Go to Twitter",
                          },
                          b.createElement(k.Z, { type: "twitter" })
                        )
                      ),
                    r.li &&
                      b.createElement(
                        "li",
                        { className: "cursor-trigger" },
                        b.createElement(
                          "a",
                          {
                            href: r.li,
                            target: "_blank",
                            rel: "noreferrer nofollow",
                            "aria-label": "Go to LinkedIn",
                          },
                          b.createElement(k.Z, { type: "linkedin" })
                        )
                      ),
                    r.fb &&
                      b.createElement(
                        "li",
                        { className: "cursor-trigger" },
                        b.createElement(
                          "a",
                          {
                            href: r.fb,
                            target: "_blank",
                            rel: "noreferrer nofollow",
                            "aria-label": "Go to Facebook",
                          },
                          b.createElement(k.Z, { type: "facebook" })
                        )
                      )
                  )
            )
          );
        }),
        M = n(32884),
        D = n(39680),
        G = n(82932),
        R = n(68275),
        X = n(52068),
        Y = (0, L.default)(z.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-wg36py-0",
        })(
          [
            "position:relative;z-index:7;overflow:visible;&:before,&:after{content:'';position:absolute;z-index:1;background:",
            ";}&:before{top:0;left:calc(50% - 1px);width:2px;height:",
            ";",
            " ",
            "}&:after{bottom:0;left:calc(50% - 1px);width:2px;height:",
            ";",
            "}",
          ],
          function (e) {
            return e.theme.bc1;
          },
          function (e) {
            return e.theme.padS;
          },
          z.Fs.medium(
            m || (m = (0, P.Z)(["\n\t\t\theight: ", ";\n\t\t"])),
            function (e) {
              return e.theme.padM;
            }
          ),
          z.Fs.large(
            d ||
              (d = (0, P.Z)([
                "\n\t\t\theight: ",
                ";\n\t\t\tleft: 9.3rem;\n\t\t",
              ])),
            function (e) {
              return e.theme.padL;
            }
          ),
          function (e) {
            return e.theme.padS;
          },
          z.Fs.large(
            f ||
              (f = (0, P.Z)([
                "\n\t\t\tbottom: 0;\n\t\t\tleft: calc(50% - 1px);\n\t\t\tright: 0;\n\t\t\twidth: auto;\n\t\t\theight: 2px;\n\t\t",
              ]))
          )
        ),
        J = (0, L.default)(z.ZC).withConfig({
          displayName: "styles__TextContent",
          componentId: "sc-wg36py-1",
        })(
          [
            "position:relative;z-index:3;&:before{content:'';position:absolute;top:0;left:-2.4rem;height:2px;width:100%;background:",
            ";",
            "}",
            "",
          ],
          function (e) {
            return e.theme.bc1;
          },
          z.Fs.large(
            h ||
              (h = (0, P.Z)([
                "\n\t\t\t\tleft: calc(-8.333vw - 1.8rem);\n\t\t\t\tright: calc(-8.333vw - 1.8rem);\n\t\t\t\twidth: auto;\n\t\t\t",
              ]))
          ),
          z.Fs.large(
            p || (p = (0, P.Z)(["\n\t\t\tmargin-bottom: ", ";\n\t\t"])),
            function (e) {
              return e.theme.padL;
            }
          )
        ),
        $ = (0, L.default)(z.ZC).withConfig({
          displayName: "styles__VideoContent",
          componentId: "sc-wg36py-2",
        })(["position:relative;z-index:2;"]),
        B = (0, L.default)(z.H2).withConfig({
          displayName: "styles__Text",
          componentId: "sc-wg36py-3",
        })(
          ["", " position:relative;z-index:2;", " ", ""],
          function (e) {
            return e.theme.desktopShadow;
          },
          z.Fs.medium(
            g || (g = (0, P.Z)(["\n\t\t\tpadding: 0 8.333vw;\n\t\t"]))
          ),
          z.Fs.large(y || (y = (0, P.Z)(["\n\t\t\tpadding: 0;\n\t\t"])))
        ),
        V = (0, L.default)(R.ZP).withConfig({
          displayName: "styles__AboutLink",
          componentId: "sc-wg36py-4",
        })(
          [
            "",
            " position:relative;display:inline-block;color:",
            ";&:visited{color:",
            ";}&:before{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:",
            ";",
            "}",
          ],
          X.Iq,
          function (e) {
            return e.theme.bc1;
          },
          function (e) {
            return e.theme.bc1;
          },
          function (e) {
            return e.theme.bc1;
          },
          z.Fs.large(v || (v = (0, P.Z)(["\n\t\t\theight: 4px;\n\t\t"])))
        ),
        K = (0, L.default)(z.ZC).withConfig({
          displayName: "styles__Parallax",
          componentId: "sc-wg36py-5",
        })(
          ["", ""],
          z.Fs.large(
            w ||
              (w = (0, P.Z)([
                "\n\t\tposition: absolute;\n\t\tz-index: 2;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: -50%;\n\t",
              ]))
          )
        ),
        Q = function (e) {
          var t = e.link,
            n = e.text,
            r = e.video,
            i = (0, b.useRef)(),
            a = (0, b.useRef)();
          (0, b.useEffect)(function () {
            M.ZP.registerPlugin(G.i),
              G.i.matchMedia({
                "(min-width: 1025px)": function () {
                  M.ZP.to(i.current, {
                    y: "-200%",
                    ease: "none",
                    scrollTrigger: {
                      trigger: a.current,
                      start: "0% 100%",
                      end: "100% 0%",
                      scrub: 0.5,
                      markers: !1,
                    },
                  });
                },
              });
          }, []);
          var o = (0, b.useState)(!1),
            s = o[0],
            l = o[1],
            c = (0, b.useState)(!1),
            u = c[0],
            m = c[1];
          return b.createElement(
            Y,
            { padTop: !0, ref: a },
            b.createElement(
              C.Z,
              {
                onEnter: function () {
                  l(!0), m(!0);
                },
                onExit: function () {
                  m(!1);
                },
              },
              b.createElement(
                N.X,
                { isExpanded: !0 },
                b.createElement(
                  N.s,
                  {
                    small: 12,
                    large: 10,
                    pushOnLarge: 1,
                    xlarge: 9,
                    xxlarge: 8,
                    mpad: !0,
                  },
                  b.createElement(
                    J,
                    { pad: !0 },
                    b.createElement(
                      B,
                      null,
                      b.createElement(
                        V,
                        {
                          to: "/about/",
                          className: "cursor-go",
                          exit: { length: 1, delay: 1 },
                          entry: { length: 1, delay: 0 },
                        },
                        t
                      ),
                      " ",
                      n
                    )
                  )
                )
              )
            ),
            b.createElement(
              K,
              null,
              b.createElement(
                N.X,
                { isExpanded: !0 },
                b.createElement(
                  N.s,
                  {
                    small: 12,
                    medium: 10,
                    pushOnMedium: 1,
                    large: 6,
                    pushOnLarge: 5,
                    mpad: !0,
                  },
                  b.createElement(
                    $,
                    null,
                    b.createElement(D.Z, {
                      ref: i,
                      isNeeded: s,
                      isPlaying: u,
                      url: r,
                    })
                  )
                )
              )
            )
          );
        },
        U = n(3546),
        W = n(15575),
        ee = n(87372),
        te = n(97660),
        ne = function (e) {
          var t = e.transitionStatus,
            n = e.entry,
            r = e.exit,
            i = e.data,
            a = e.location;
          return b.createElement(
            E.Z,
            { status: t, entry: n, exit: r, location: a },
            b.createElement(x.Z, {
              content: i.home.seo,
              fallback: i.seoFallback.seo.fallback,
              schema: i.home.schema,
            }),
            b.createElement(j, {
              main: i.home.heroMain,
              script: i.home.heroScript,
              social: i.social,
            }),
            b.createElement(Q, {
              text: i.home.aboutText,
              link: i.home.aboutLink,
              video: i.home.aboutVideo,
            }),
            b.createElement(U.Z, {
              isHome: !0,
              intro: i.home.servicesIntro,
              outro: i.home.servicesOutro,
              linkPath: "/services#",
              passedData: i.services.nodes,
              useFilter: !1,
              useOriginalPosition: !0,
            }),
            b.createElement(W.Z, { projects: i.featured.projects }),
            b.createElement(ee.Z, {
              main: i.home.trustMain,
              script: i.home.trustScript,
              clients: i.home.trustClients,
              awards: i.home.trustAwards,
              awardsText: i.home.trustAwardsText,
            }),
            b.createElement(te.Z, { override: i.home, fallback: i.fallback })
          );
        };
    },
    94136: function (e, t, n) {
      n.d(t, {
        f: function () {
          return r;
        },
      });
      var r = (0, n(2346).LO)({ service: "#" });
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-jsx-f1c1d9ea20f072cc71cf.js.map
