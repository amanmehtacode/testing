(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [61],
  {
    8045: function (e, t, r) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (l) {
                (c = !0), (o = l);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          c(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return n(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          c(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e, t) {
        if (e) {
          if ("string" === typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(r)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(e, t)
              : void 0
          );
        }
      }
      t.default = function (e) {
        var t = e.src,
          r = e.sizes,
          n = e.unoptimized,
          c = void 0 !== n && n,
          l = e.priority,
          y = void 0 !== l && l,
          b = e.loading,
          O = e.lazyRoot,
          k = void 0 === O ? null : O,
          E = e.lazyBoundary,
          z = void 0 === E ? "200px" : E,
          x = e.className,
          I = e.quality,
          R = e.width,
          L = e.height,
          P = e.objectFit,
          M = e.objectPosition,
          C = e.onLoadingComplete,
          _ = e.loader,
          q = void 0 === _ ? j : _,
          U = e.placeholder,
          D = void 0 === U ? "empty" : U,
          N = e.blurDataURL,
          W = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]));
            }
            return o;
          })(e, [
            "src",
            "sizes",
            "unoptimized",
            "priority",
            "loading",
            "lazyRoot",
            "lazyBoundary",
            "className",
            "quality",
            "width",
            "height",
            "objectFit",
            "objectPosition",
            "onLoadingComplete",
            "loader",
            "placeholder",
            "blurDataURL",
          ]),
          H = u.useRef(null),
          B = u.useContext(p.ImageConfigContext),
          T = u.useMemo(
            function () {
              var e = h || B || f.imageConfigDefault,
                t = a(e.deviceSizes)
                  .concat(a(e.imageSizes))
                  .sort(function (e, t) {
                    return e - t;
                  }),
                r = e.deviceSizes.sort(function (e, t) {
                  return e - t;
                });
              return g({}, e, { allSizes: t, deviceSizes: r });
            },
            [B]
          ),
          K = W,
          F = r ? "responsive" : "intrinsic";
        "layout" in K && (K.layout && (F = K.layout), delete K.layout);
        var $ = "";
        if (
          (function (e) {
            return (
              "object" === typeof e &&
              (w(e) ||
                (function (e) {
                  return void 0 !== e.src;
                })(e))
            );
          })(t)
        ) {
          var G = w(t) ? t.default : t;
          if (!G.src)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                JSON.stringify(G)
              )
            );
          if (
            ((N = N || G.blurDataURL),
            ($ = G.src),
            (!F || "fill" !== F) &&
              ((L = L || G.height), (R = R || G.width), !G.height || !G.width))
          )
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                JSON.stringify(G)
              )
            );
        }
        t = "string" === typeof t ? t : $;
        var J = S(R),
          V = S(L),
          Q = S(I),
          X = !y && ("lazy" === b || "undefined" === typeof b);
        (t.startsWith("data:") || t.startsWith("blob:")) &&
          ((c = !0), (X = !1));
        m.has(t) && (X = !1);
        0;
        var Y,
          Z = i(
            d.useIntersection({ rootRef: k, rootMargin: z, disabled: !X }),
            2
          ),
          ee = Z[0],
          te = Z[1],
          re = !X || te,
          ne = {
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          oe = {
            boxSizing: "border-box",
            display: "block",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          ie = !1,
          ae = {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            padding: 0,
            border: "none",
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: P,
            objectPosition: M,
          },
          ce =
            "blur" === D
              ? {
                  filter: "blur(20px)",
                  backgroundSize: P || "cover",
                  backgroundImage: 'url("'.concat(N, '")'),
                  backgroundPosition: M || "0% 0%",
                }
              : {};
        if ("fill" === F)
          (ne.display = "block"),
            (ne.position = "absolute"),
            (ne.top = 0),
            (ne.left = 0),
            (ne.bottom = 0),
            (ne.right = 0);
        else if ("undefined" !== typeof J && "undefined" !== typeof V) {
          var le = V / J,
            ue = isNaN(le) ? "100%" : "".concat(100 * le, "%");
          "responsive" === F
            ? ((ne.display = "block"),
              (ne.position = "relative"),
              (ie = !0),
              (oe.paddingTop = ue))
            : "intrinsic" === F
            ? ((ne.display = "inline-block"),
              (ne.position = "relative"),
              (ne.maxWidth = "100%"),
              (ie = !0),
              (oe.maxWidth = "100%"),
              (Y =
                "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"
                  .concat(J, "%27%20height=%27")
                  .concat(V, "%27/%3e")))
            : "fixed" === F &&
              ((ne.display = "inline-block"),
              (ne.position = "relative"),
              (ne.width = J),
              (ne.height = V));
        } else 0;
        var se = { src: v, srcSet: void 0, sizes: void 0 };
        re &&
          (se = A({
            config: T,
            src: t,
            unoptimized: c,
            layout: F,
            width: J,
            quality: Q,
            sizes: r,
            loader: q,
          }));
        var fe = t;
        0;
        var de;
        0;
        var pe =
            (o((de = {}), "imagesrcset", se.srcSet),
            o(de, "imagesizes", se.sizes),
            de),
          ye = u.default.useLayoutEffect,
          ge = u.useRef(C);
        return (
          u.useEffect(
            function () {
              ge.current = C;
            },
            [C]
          ),
          ye(
            function () {
              ee(H.current);
            },
            [ee]
          ),
          u.useEffect(
            function () {
              !(function (e, t, r, n, o) {
                var i = function () {
                  var r = e.current;
                  r &&
                    r.src !== v &&
                    ("decode" in r ? r.decode() : Promise.resolve())
                      .catch(function () {})
                      .then(function () {
                        if (
                          e.current &&
                          (m.add(t),
                          "blur" === n &&
                            ((r.style.filter = ""),
                            (r.style.backgroundSize = ""),
                            (r.style.backgroundImage = ""),
                            (r.style.backgroundPosition = "")),
                          o.current)
                        ) {
                          var i = r.naturalWidth,
                            a = r.naturalHeight;
                          o.current({ naturalWidth: i, naturalHeight: a });
                        }
                      });
                };
                e.current &&
                  (e.current.complete ? i() : (e.current.onload = i));
              })(H, fe, 0, D, ge);
            },
            [fe, F, D, re]
          ),
          u.default.createElement(
            "span",
            { style: ne },
            ie
              ? u.default.createElement(
                  "span",
                  { style: oe },
                  Y
                    ? u.default.createElement("img", {
                        style: {
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        },
                        alt: "",
                        "aria-hidden": !0,
                        src: Y,
                      })
                    : null
                )
              : null,
            u.default.createElement(
              "img",
              Object.assign({}, K, se, {
                decoding: "async",
                "data-nimg": F,
                className: x,
                ref: H,
                style: g({}, ae, ce),
              })
            ),
            X &&
              u.default.createElement(
                "noscript",
                null,
                u.default.createElement(
                  "img",
                  Object.assign(
                    {},
                    K,
                    A({
                      config: T,
                      src: t,
                      unoptimized: c,
                      layout: F,
                      width: J,
                      quality: Q,
                      sizes: r,
                      loader: q,
                    }),
                    {
                      decoding: "async",
                      "data-nimg": F,
                      style: ae,
                      className: x,
                      loading: b || "lazy",
                    }
                  )
                )
              ),
            y
              ? u.default.createElement(
                  s.default,
                  null,
                  u.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + se.src + se.srcSet + se.sizes,
                        rel: "preload",
                        as: "image",
                        href: se.srcSet ? void 0 : se.src,
                      },
                      pe
                    )
                  )
                )
              : null
          )
        );
      };
      var l,
        u = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {};
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r]);
              }
          return (t.default = e), t;
        })(r(7294)),
        s = (l = r(5443)) && l.__esModule ? l : { default: l },
        f = r(5809),
        d = r(7190),
        p = r(9977);
      function y(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function g(e) {
        for (
          var t = arguments,
            r = function (r) {
              var n = null != t[r] ? t[r] : {},
                o = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                o.forEach(function (t) {
                  y(e, t, n[t]);
                });
            },
            n = 1;
          n < arguments.length;
          n++
        )
          r(n);
        return e;
      }
      var h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
        },
        m = new Set(),
        v =
          (new Map(),
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      var b = new Map([
        [
          "default",
          function (e) {
            var t = e.config,
              r = e.src,
              n = e.width,
              o = e.quality;
            0;
            if (r.endsWith(".svg") && !t.dangerouslyAllowSVG) return r;
            return ""
              .concat(t.path, "?url=")
              .concat(encodeURIComponent(r), "&w=")
              .concat(n, "&q=")
              .concat(o || 75);
          },
        ],
        [
          "imgix",
          function (e) {
            var t = e.config,
              r = e.src,
              n = e.width,
              o = e.quality,
              i = new URL("".concat(t.path).concat(O(r))),
              a = i.searchParams;
            a.set("auto", a.get("auto") || "format"),
              a.set("fit", a.get("fit") || "max"),
              a.set("w", a.get("w") || n.toString()),
              o && a.set("q", o.toString());
            return i.href;
          },
        ],
        [
          "cloudinary",
          function (e) {
            var t = e.config,
              r = e.src,
              n = e.width,
              o = e.quality,
              i =
                ["f_auto", "c_limit", "w_" + n, "q_" + (o || "auto")].join(
                  ","
                ) + "/";
            return "".concat(t.path).concat(i).concat(O(r));
          },
        ],
        [
          "akamai",
          function (e) {
            var t = e.config,
              r = e.src,
              n = e.width;
            return "".concat(t.path).concat(O(r), "?imwidth=").concat(n);
          },
        ],
        [
          "custom",
          function (e) {
            var t = e.src;
            throw new Error(
              'Image with src "'.concat(t, '" is missing "loader" prop.') +
                "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
            );
          },
        ],
      ]);
      function w(e) {
        return void 0 !== e.default;
      }
      function A(e) {
        var t = e.config,
          r = e.src,
          n = e.unoptimized,
          o = e.layout,
          i = e.width,
          c = e.quality,
          l = e.sizes,
          u = e.loader;
        if (n) return { src: r, srcSet: void 0, sizes: void 0 };
        var s = (function (e, t, r, n) {
            var o = e.deviceSizes,
              i = e.allSizes;
            if (n && ("fill" === r || "responsive" === r)) {
              for (var c, l = /(^|\s)(1?\d?\d)vw/g, u = []; (c = l.exec(n)); c)
                u.push(parseInt(c[2]));
              if (u.length) {
                var s,
                  f = 0.01 * (s = Math).min.apply(s, a(u));
                return {
                  widths: i.filter(function (e) {
                    return e >= o[0] * f;
                  }),
                  kind: "w",
                };
              }
              return { widths: i, kind: "w" };
            }
            return "number" !== typeof t || "fill" === r || "responsive" === r
              ? { widths: o, kind: "w" }
              : {
                  widths: a(
                    new Set(
                      [t, 2 * t].map(function (e) {
                        return (
                          i.find(function (t) {
                            return t >= e;
                          }) || i[i.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(t, i, o, l),
          f = s.widths,
          d = s.kind,
          p = f.length - 1;
        return {
          sizes: l || "w" !== d ? l : "100vw",
          srcSet: f
            .map(function (e, n) {
              return ""
                .concat(u({ config: t, src: r, quality: c, width: e }), " ")
                .concat("w" === d ? e : n + 1)
                .concat(d);
            })
            .join(", "),
          src: u({ config: t, src: r, quality: c, width: f[p] }),
        };
      }
      function S(e) {
        return "number" === typeof e
          ? e
          : "string" === typeof e
          ? parseInt(e, 10)
          : void 0;
      }
      function j(e) {
        var t,
          r =
            (null === (t = e.config) || void 0 === t ? void 0 : t.loader) ||
            "default",
          n = b.get(r);
        if (n) return n(e);
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(f.VALID_LOADERS.join(", "), ". Received: ")
            .concat(r)
        );
      }
      function O(e) {
        return "/" === e[0] ? e.slice(1) : e;
      }
    },
    8418: function (e, t, r) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (l) {
                (c = !0), (o = l);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return n(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      t.default = void 0;
      var i,
        a = (i = r(7294)) && i.__esModule ? i : { default: i },
        c = r(6273),
        l = r(387),
        u = r(7190);
      var s = {};
      function f(e, t, r, n) {
        if (e && c.isLocalURL(t)) {
          e.prefetch(t, r, n).catch(function (e) {
            0;
          });
          var o =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          s[t + "%" + r + (o ? "%" + o : "")] = !0;
        }
      }
      var d = function (e) {
        var t,
          r = !1 !== e.prefetch,
          n = l.useRouter(),
          i = a.default.useMemo(
            function () {
              var t = o(c.resolveHref(n, e.href, !0), 2),
                r = t[0],
                i = t[1];
              return { href: r, as: e.as ? c.resolveHref(n, e.as) : i || r };
            },
            [n, e.href, e.as]
          ),
          d = i.href,
          p = i.as,
          y = e.children,
          g = e.replace,
          h = e.shallow,
          m = e.scroll,
          v = e.locale;
        "string" === typeof y && (y = a.default.createElement("a", null, y));
        var b =
            (t = a.default.Children.only(y)) && "object" === typeof t && t.ref,
          w = o(u.useIntersection({ rootMargin: "200px" }), 2),
          A = w[0],
          S = w[1],
          j = a.default.useCallback(
            function (e) {
              A(e),
                b &&
                  ("function" === typeof b
                    ? b(e)
                    : "object" === typeof b && (b.current = e));
            },
            [b, A]
          );
        a.default.useEffect(
          function () {
            var e = S && r && c.isLocalURL(d),
              t = "undefined" !== typeof v ? v : n && n.locale,
              o = s[d + "%" + p + (t ? "%" + t : "")];
            e && !o && f(n, d, p, { locale: t });
          },
          [p, d, S, v, r, n]
        );
        var O = {
          ref: j,
          onClick: function (e) {
            t.props &&
              "function" === typeof t.props.onClick &&
              t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, r, n, o, i, a, l) {
                  ("A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      c.isLocalURL(r))) &&
                    (e.preventDefault(),
                    t[o ? "replace" : "push"](r, n, {
                      shallow: i,
                      locale: l,
                      scroll: a,
                    }));
                })(e, n, d, p, g, h, m, v);
          },
          onMouseEnter: function (e) {
            t.props &&
              "function" === typeof t.props.onMouseEnter &&
              t.props.onMouseEnter(e),
              c.isLocalURL(d) && f(n, d, p, { priority: !0 });
          },
        };
        if (e.passHref || ("a" === t.type && !("href" in t.props))) {
          var k = "undefined" !== typeof v ? v : n && n.locale,
            E =
              n &&
              n.isLocaleDomain &&
              c.getDomainLocale(p, k, n && n.locales, n && n.domainLocales);
          O.href = E || c.addBasePath(c.addLocale(p, k, n && n.defaultLocale));
        }
        return a.default.cloneElement(t, O);
      };
      t.default = d;
    },
    7190: function (e, t, r) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (l) {
                (c = !0), (o = l);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return n(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return n(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            r = e.rootMargin,
            n = e.disabled || !c,
            s = i.useRef(),
            f = o(i.useState(!1), 2),
            d = f[0],
            p = f[1],
            y = o(i.useState(t ? t.current : null), 2),
            g = y[0],
            h = y[1],
            m = i.useCallback(
              function (e) {
                s.current && (s.current(), (s.current = void 0)),
                  n ||
                    d ||
                    (e &&
                      e.tagName &&
                      (s.current = (function (e, t, r) {
                        var n = (function (e) {
                            var t,
                              r = {
                                root: e.root || null,
                                margin: e.rootMargin || "",
                              },
                              n = u.find(function (e) {
                                return (
                                  e.root === r.root && e.margin === r.margin
                                );
                              });
                            n ? (t = l.get(n)) : ((t = l.get(r)), u.push(r));
                            if (t) return t;
                            var o = new Map(),
                              i = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = o.get(e.target),
                                    r =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  t && r && t(r);
                                });
                              }, e);
                            return (
                              l.set(
                                r,
                                (t = { id: r, observer: i, elements: o })
                              ),
                              t
                            );
                          })(r),
                          o = n.id,
                          i = n.observer,
                          a = n.elements;
                        return (
                          a.set(e, t),
                          i.observe(e),
                          function () {
                            if ((a.delete(e), i.unobserve(e), 0 === a.size)) {
                              i.disconnect(), l.delete(o);
                              var t = u.findIndex(function (e) {
                                return (
                                  e.root === o.root && e.margin === o.margin
                                );
                              });
                              t > -1 && u.splice(t, 1);
                            }
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && p(e);
                        },
                        { root: g, rootMargin: r }
                      )));
              },
              [n, g, r, d]
            );
          return (
            i.useEffect(
              function () {
                if (!c && !d) {
                  var e = a.requestIdleCallback(function () {
                    return p(!0);
                  });
                  return function () {
                    return a.cancelIdleCallback(e);
                  };
                }
              },
              [d]
            ),
            i.useEffect(
              function () {
                t && h(t.current);
              },
              [t]
            ),
            [m, d]
          );
        });
      var i = r(7294),
        a = r(9311),
        c = "undefined" !== typeof IntersectionObserver;
      var l = new Map(),
        u = [];
    },
    5675: function (e, t, r) {
      e.exports = r(8045);
    },
    1664: function (e, t, r) {
      e.exports = r(8418);
    },
  },
]);
