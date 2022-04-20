!(function () {
  "use strict";
  function c(t, e) {
    var n,
      r =
        ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!r) {
      if (
        Array.isArray(t) ||
        (r = s(t)) ||
        (e && t && "number" == typeof t.length)
      )
        return (
          r && (t = r),
          (n = 0),
          {
            s: (e = function () {}),
            n: function () {
              return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
            },
            e: function (t) {
              throw t;
            },
            f: e,
          }
        );
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var o,
      a = !0,
      i = !1;
    return {
      s: function () {
        r = r.call(t);
      },
      n: function () {
        var t = r.next();
        return (a = t.done), t;
      },
      e: function (t) {
        (i = !0), (o = t);
      },
      f: function () {
        try {
          a || null == r.return || r.return();
        } finally {
          if (i) throw o;
        }
      },
    };
  }
  function s(t, e) {
    if (t) {
      if ("string" == typeof t) return r(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return "Map" ===
        (n = "Object" === n && t.constructor ? t.constructor.name : n) ||
        "Set" === n
        ? Array.from(t)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? r(t, e)
        : void 0;
    }
  }
  function r(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function l(t, e) {
    return (e || document).querySelector(t);
  }
  function f(t, n) {
    for (var e in ((t = Array.isArray(t) ? t : [t]), n))
      !(function (e) {
        t.forEach(function (t) {
          return t.style.setProperty(e, n[e]);
        });
      })(e);
  }
  function u(t, e, n) {
    var r = t[(e = -1 < ["text"].indexOf(e) ? "" : e)];
    r ? (r.length || (t[e] = [r]), t[e].push(n)) : (t[e] = n);
  }
  function m(t) {
    var e,
      n = c(t.children);
    try {
      for (n.s(); !(e = n.n()).done; ) {
        var r = e.value,
          o = r.tagName.toLowerCase(),
          a = r.classList,
          i = r.id;
        delete t[o],
          delete t[i],
          a.length && delete t[a[0]],
          r.children.length && m(r);
      }
    } catch (t) {
      n.e(t);
    } finally {
      n.f();
    }
  }
  function d(t) {
    m(t);
    var e,
      n = c(t.children);
    try {
      for (n.s(); !(e = n.n()).done; ) {
        var r,
          o = e.value,
          a = o.tagName.toLowerCase(),
          i = o.classList,
          s = o.id;
        u(t, a, o),
          u(t, s, o),
          i.length && ((r = i[0]), u(t, r, o)),
          o.children.length && d(o);
      }
    } catch (t) {
      n.e(t);
    } finally {
      n.f();
    }
    return t;
  }
  function h(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var n =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != n) {
          var r,
            o,
            a = [],
            i = !0,
            s = !1;
          try {
            for (
              n = n.call(t);
              !(i = (r = n.next()).done) &&
              (a.push(r.value), !e || a.length !== e);
              i = !0
            );
          } catch (t) {
            (s = !0), (o = t);
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          }
          return a;
        }
      })(t, e) ||
      (function (t, e) {
        if (t) {
          if ("string" == typeof t) return a(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && t.constructor ? t.constructor.name : n) ||
            "Set" === n
            ? Array.from(t)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? a(t, e)
            : void 0;
        }
      })(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function a(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function e(t, e, n) {
    return (
      e && i(t.prototype, e),
      n && i(t, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function t(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function v(t) {
    return t * t * t * t;
  }
  function g(t) {
    return 1 - n(1 - t, 4);
  }
  var b,
    w = ["ease", "onUpdate", "onComplete", "delay", "duration"],
    y = [],
    o = e(function t() {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }),
    p =
      (t(o, "to", function (t, e, n) {
        (n.duration = isNaN(n.duration) ? 500 : 1e3 * n.duration),
          (n.ease =
            n.ease ||
            function (t) {
              return t;
            }),
          (n.delay = 1e3 * n.delay || 0);
        var r = Date.now();
        y.push({
          target: t,
          props: e,
          fromProps: Object.assign({}, e),
          toProps: n,
          entries: Object.entries(n).filter(function (t) {
            return !w.includes(t[0]);
          }),
          time: r,
          startTime: r + n.delay,
        }),
          (e.target = t),
          b || o.render();
      }),
      t(o, "kill", function (n) {
        y.forEach(function (t, e) {
          t.target == n && y.splice(e, 1);
        });
      }),
      t(o, "render", function () {
        y.forEach(function (t, e) {
          var o,
            n = t.target,
            a = t.props,
            i = t.toProps,
            s = t.fromProps,
            r = i.duration,
            c = t.entries,
            u = t.time,
            t = t.startTime,
            l = Date.now();
          (i.delay && l - u <= i.delay) ||
            ((i.delay = 0),
            (o = Math.min((Date.now() - t) / r, 1)),
            c.forEach(function (t) {
              var t = h(t, 2),
                e = t[0],
                t = t[1],
                n = Array.isArray(t),
                r = n ? t[1] : null,
                t = n ? t[0] : t,
                n = s[e] + (t - s[e]) * i.ease(o);
              a[e] = r ? n + r : n;
            }),
            n && n instanceof Element && f(n, a),
            i.onUpdate && i.onUpdate(a, o),
            1 == o && (y.splice(e, 1), i.onComplete && i.onComplete()));
        }),
          (b = y.length ? requestAnimationFrame(o.render) : null);
      }),
      o),
    n = (Math.PI, Math.PI, Math.cos, Math.sin, Math.pow);
  Math.sqrt;
  window.startPreloader = function () {
    function e() {
      var t;
      i < 100 &&
        ((t = Math.floor(100 * a)),
        (i += t = i < t ? 1 : 0),
        c.span.mcgyver && t && u(),
        50 < i &&
          !s.texts.macgyver &&
          ((s.texts.macgyver = !0),
          f(s.texts.temp, { "--y": "-100%", "--d": "0s" }),
          f(s.texts.lets, { "--y": "0%", "--d": ".5s" })),
        requestAnimationFrame(e));
    }
    function n() {
      c.pct = i;
      var t = Math.min(i, 99);
      (c.span.innerHTML = "00".concat(t).slice(100 == t ? -3 : -2)),
        p.to(
          c.span,
          { "--y": 100 },
          { "--y": [0, "%"], duration: 0.5, ease: g, onComplete: u }
        );
    }
    function t() {
      p.to(
        c.span,
        { "--y": 0 },
        {
          "--y": [-100, "%"],
          duration: 0.75,
          ease: v,
          onComplete: function () {
            f(s.texts.lets, { "--y": "-100%", "--d": "0s" }),
              f(s["dot-divisor"], { "--s": "0", "--d": "0s" }),
              main.start();
          },
        }
      );
    }
    var r = assets.length + 2,
      o = 0,
      a = 0,
      i = 0,
      s = d(l(".center"), preloader),
      c = d(l(".count", preloader)),
      u =
        ((window.updateProgress = function (t) {
          r <= o || (a = ++o / r);
        }),
        function () {
          c.pct < 100
            ? c.pct != i || c.span.mcgyver
              ? ((c.span.mcgyver = !1),
                p.to(
                  c.span,
                  { "--y": 0 },
                  {
                    "--y": [-100, "%"],
                    duration: 0.75,
                    ease: v,
                    onComplete: function () {
                      n();
                    },
                  }
                ))
              : (c.span.mcgyver = !0)
            : t();
        });
    f(s.texts.temp, { "--y": "0%", "--d": "1.2s" }),
      f(s["dot-divisor"], { "--s": "1", "--d": "1s" }),
      (function (t) {
        for (
          var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        (t = t.classList).add.apply(t, n);
      })(preloader, "show"),
      s["dot-divisor"].addEventListener(
        "transitionend",
        function (t) {
          "::before" == t.pseudoElement &&
            (n(),
            (t = document.querySelectorAll(".hide")).forEach(function (t) {
              return t.classList.remove("hide");
            }),
            assets.forEach(function (t) {
              var e = t.oSrc,
                n = (t.ext, t.tagName.toLowerCase()),
                r =
                  ((t.onerror = function (t) {
                    updateProgress(this);
                  }),
                  "video" == n
                    ? (t.onloadedmetadata = function () {
                        return updateProgress(t);
                      })
                    : (t.onload = function () {
                        updateProgress(this);
                      }),
                  "object" == n
                    ? (t.data = e)
                    : "use" == n
                    ? t.setAttribute("xlink:href", e)
                    : (t.src = e),
                  assetsClones[t.oSrc]);
              r &&
                r.forEach(function (t) {
                  "object" == n
                    ? (t.data = e)
                    : "use" == n
                    ? t.setAttribute("xlink:href", e)
                    : (t.src = e);
                });
            }),
            t.forEach(function (t) {
              return t.classList.add("hide");
            }),
            document.body.appendChild(
              Object.assign(document.createElement("script"), {
                async: "true",
                src: "./js/".concat(manifest.js["main.js"]),
              })
            ),
            e());
        },
        { once: !0 }
      );
  };
})();
//# sourceMappingURL=http://192.168.0.101/cappen-2022/dev/build/sourcemaps/js/preloader.42702c7ca3.js.map
