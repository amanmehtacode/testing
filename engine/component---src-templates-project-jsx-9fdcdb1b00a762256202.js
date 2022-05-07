(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [360],
  {
    95185: function (e) {
      "use strict";
      var t = function (e) {
        return (
          (function (e) {
            return !!e && "object" == typeof e;
          })(e) &&
          !(function (e) {
            var t = Object.prototype.toString.call(e);
            return (
              "[object RegExp]" === t ||
              "[object Date]" === t ||
              (function (e) {
                return e.$$typeof === n;
              })(e)
            );
          })(e)
        );
      };
      var n =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? s(((n = e), Array.isArray(n) ? [] : {}), e, t)
          : e;
        var n;
      }
      function a(e, t, n) {
        return e.concat(t).map(function (e) {
          return r(e, n);
        });
      }
      function i(e) {
        return Object.keys(e).concat(
          (function (e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function (t) {
                  return e.propertyIsEnumerable(t);
                })
              : [];
          })(e)
        );
      }
      function o(e, t) {
        try {
          return t in e;
        } catch (n) {
          return !1;
        }
      }
      function l(e, t, n) {
        var a = {};
        return (
          n.isMergeableObject(e) &&
            i(e).forEach(function (t) {
              a[t] = r(e[t], n);
            }),
          i(t).forEach(function (i) {
            (function (e, t) {
              return (
                o(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              );
            })(e, i) ||
              (o(e, i) && n.isMergeableObject(t[i])
                ? (a[i] = (function (e, t) {
                    if (!t.customMerge) return s;
                    var n = t.customMerge(e);
                    return "function" == typeof n ? n : s;
                  })(i, n)(e[i], t[i], n))
                : (a[i] = r(t[i], n)));
          }),
          a
        );
      }
      function s(e, n, i) {
        ((i = i || {}).arrayMerge = i.arrayMerge || a),
          (i.isMergeableObject = i.isMergeableObject || t),
          (i.cloneUnlessOtherwiseSpecified = r);
        var o = Array.isArray(n);
        return o === Array.isArray(e)
          ? o
            ? i.arrayMerge(e, n, i)
            : l(e, n, i)
          : r(n, i);
      }
      s.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return s(e, n, t);
        }, {});
      };
      var u = s;
      e.exports = u;
    },
    49586: function (e) {
      function t(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(new Error("Failed to load " + this.src), e);
          });
      }
      function n(e, t) {
        e.onreadystatechange = function () {
          ("complete" != this.readyState && "loaded" != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, r, a) {
        var i = document.head || document.getElementsByTagName("head")[0],
          o = document.createElement("script");
        "function" == typeof r && ((a = r), (r = {})),
          (r = r || {}),
          (a = a || function () {}),
          (o.type = r.type || "text/javascript"),
          (o.charset = r.charset || "utf8"),
          (o.async = !("async" in r) || !!r.async),
          (o.src = e),
          r.attrs &&
            (function (e, t) {
              for (var n in t) e.setAttribute(n, t[n]);
            })(o, r.attrs),
          r.text && (o.text = "" + r.text),
          ("onload" in o ? t : n)(o, a),
          o.onload || t(o, a),
          i.appendChild(o);
      };
    },
    49393: function (e, t, n) {
      "use strict";
      n.r(t);
      var r =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function a(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (((a = e[n]), (i = t[n]), !(a === i || (r(a) && r(i))))) return !1;
        var a, i;
        return !0;
      }
      t.default = function (e, t) {
        var n;
        void 0 === t && (t = a);
        var r,
          i = [],
          o = !1;
        return function () {
          for (var a = [], l = 0; l < arguments.length; l++)
            a[l] = arguments[l];
          return (
            (o && n === this && t(a, i)) ||
              ((r = e.apply(this, a)), (o = !0), (n = this), (i = a)),
            r
          );
        };
      };
    },
    52705: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a,
        i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" != typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(67294)),
        o = (a = n(32993)) && a.__esModule ? a : { default: a },
        l = n(4523);
      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          u.apply(this, arguments)
        );
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          f(e, t)
        );
      }
      function m(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var a = h(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      function p(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var v = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && f(e, t);
        })(l, e);
        var t,
          n,
          r,
          a = m(l);
        function l() {
          var e;
          c(this, l);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            g(y((e = a.call.apply(a, [this].concat(n)))), "mounted", !1),
            g(y(e), "isReady", !1),
            g(y(e), "isPlaying", !1),
            g(y(e), "isLoading", !0),
            g(y(e), "loadOnReady", null),
            g(y(e), "startOnPlay", !0),
            g(y(e), "seekOnPlay", null),
            g(y(e), "onDurationCalled", !1),
            g(y(e), "handlePlayerMount", function (t) {
              (e.player = t), e.player.load(e.props.url), e.progress();
            }),
            g(y(e), "getInternalPlayer", function (t) {
              return e.player ? e.player[t] : null;
            }),
            g(y(e), "progress", function () {
              if (e.props.url && e.player && e.isReady) {
                var t = e.getCurrentTime() || 0,
                  n = e.getSecondsLoaded(),
                  r = e.getDuration();
                if (r) {
                  var a = { playedSeconds: t, played: t / r };
                  null !== n && ((a.loadedSeconds = n), (a.loaded = n / r)),
                    (a.playedSeconds === e.prevPlayed &&
                      a.loadedSeconds === e.prevLoaded) ||
                      e.props.onProgress(a),
                    (e.prevPlayed = a.playedSeconds),
                    (e.prevLoaded = a.loadedSeconds);
                }
              }
              e.progressTimeout = setTimeout(
                e.progress,
                e.props.progressFrequency || e.props.progressInterval
              );
            }),
            g(y(e), "handleReady", function () {
              if (e.mounted) {
                (e.isReady = !0), (e.isLoading = !1);
                var t = e.props,
                  n = t.onReady,
                  r = t.playing,
                  a = t.volume,
                  i = t.muted;
                n(),
                  i || null === a || e.player.setVolume(a),
                  e.loadOnReady
                    ? (e.player.load(e.loadOnReady, !0), (e.loadOnReady = null))
                    : r && e.player.play(),
                  e.handleDurationCheck();
              }
            }),
            g(y(e), "handlePlay", function () {
              (e.isPlaying = !0), (e.isLoading = !1);
              var t = e.props,
                n = t.onStart,
                r = t.onPlay,
                a = t.playbackRate;
              e.startOnPlay &&
                (e.player.setPlaybackRate &&
                  1 !== a &&
                  e.player.setPlaybackRate(a),
                n(),
                (e.startOnPlay = !1)),
                r(),
                e.seekOnPlay && (e.seekTo(e.seekOnPlay), (e.seekOnPlay = null)),
                e.handleDurationCheck();
            }),
            g(y(e), "handlePause", function (t) {
              (e.isPlaying = !1), e.isLoading || e.props.onPause(t);
            }),
            g(y(e), "handleEnded", function () {
              var t = e.props,
                n = t.activePlayer,
                r = t.loop,
                a = t.onEnded;
              n.loopOnEnded && r && e.seekTo(0), r || ((e.isPlaying = !1), a());
            }),
            g(y(e), "handleError", function () {
              var t;
              (e.isLoading = !1), (t = e.props).onError.apply(t, arguments);
            }),
            g(y(e), "handleDurationCheck", function () {
              clearTimeout(e.durationCheckTimeout);
              var t = e.getDuration();
              t
                ? e.onDurationCalled ||
                  (e.props.onDuration(t), (e.onDurationCalled = !0))
                : (e.durationCheckTimeout = setTimeout(
                    e.handleDurationCheck,
                    100
                  ));
            }),
            g(y(e), "handleLoaded", function () {
              e.isLoading = !1;
            }),
            e
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.mounted = !0;
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.progressTimeout),
                  clearTimeout(this.durationCheckTimeout),
                  this.isReady &&
                    this.props.stopOnUnmount &&
                    (this.player.stop(),
                    this.player.disablePIP && this.player.disablePIP()),
                  (this.mounted = !1);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this;
                if (this.player) {
                  var n = this.props,
                    r = n.url,
                    a = n.playing,
                    i = n.volume,
                    l = n.muted,
                    s = n.playbackRate,
                    u = n.pip,
                    c = n.loop,
                    d = n.activePlayer;
                  if (!(0, o.default)(e.url, r)) {
                    if (this.isLoading && !d.forceLoad)
                      return (
                        console.warn(
                          "ReactPlayer: the attempt to load ".concat(
                            r,
                            " is being deferred until the player has loaded"
                          )
                        ),
                        void (this.loadOnReady = r)
                      );
                    (this.isLoading = !0),
                      (this.startOnPlay = !0),
                      (this.onDurationCalled = !1),
                      this.player.load(r, this.isReady);
                  }
                  e.playing || !a || this.isPlaying || this.player.play(),
                    e.playing && !a && this.isPlaying && this.player.pause(),
                    !e.pip &&
                      u &&
                      this.player.enablePIP &&
                      this.player.enablePIP(),
                    e.pip &&
                      !u &&
                      this.player.disablePIP &&
                      this.player.disablePIP(),
                    e.volume !== i && null !== i && this.player.setVolume(i),
                    e.muted !== l &&
                      (l
                        ? this.player.mute()
                        : (this.player.unmute(),
                          null !== i &&
                            setTimeout(function () {
                              return t.player.setVolume(i);
                            }))),
                    e.playbackRate !== s &&
                      this.player.setPlaybackRate &&
                      this.player.setPlaybackRate(s),
                    e.loop !== c &&
                      this.player.setLoop &&
                      this.player.setLoop(c);
                }
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.isReady ? this.player.getDuration() : null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.isReady ? this.player.getCurrentTime() : null;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.isReady ? this.player.getSecondsLoaded() : null;
              },
            },
            {
              key: "seekTo",
              value: function (e, t) {
                var n = this;
                if (!this.isReady && 0 !== e)
                  return (
                    (this.seekOnPlay = e),
                    void setTimeout(function () {
                      n.seekOnPlay = null;
                    }, 5e3)
                  );
                if (t ? "fraction" === t : e > 0 && e < 1) {
                  var r = this.player.getDuration();
                  return r
                    ? void this.player.seekTo(r * e)
                    : void console.warn(
                        "ReactPlayer: could not seek using fraction – duration not yet available"
                      );
                }
                this.player.seekTo(e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.activePlayer;
                return e
                  ? i.default.createElement(
                      e,
                      u({}, this.props, {
                        onMount: this.handlePlayerMount,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError,
                      })
                    )
                  : null;
              },
            },
          ]),
          n && d(t.prototype, n),
          r && d(t, r),
          l
        );
      })(i.Component);
      (t.default = v),
        g(v, "displayName", "Player"),
        g(v, "propTypes", l.propTypes),
        g(v, "defaultProps", l.defaultProps);
    },
    58275: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createReactPlayer = void 0);
      var a = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" != typeof e))
            return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(67294)),
        i = d(n(95185)),
        o = d(n(49393)),
        l = d(n(32993)),
        s = n(4523),
        u = n(15428),
        c = d(n(52705));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                k(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function y() {
        return (
          (y =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          y.apply(this, arguments)
        );
      }
      function h(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return g(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return g(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return g(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function v(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function b(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function w(e, t) {
        return (
          (w =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          w(e, t)
        );
      }
      function E(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = I(e);
          if (t) {
            var a = I(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return P(this, n);
        };
      }
      function P(e, t) {
        return !t || ("object" !== r(t) && "function" != typeof t) ? _(e) : t;
      }
      function _(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function I(e) {
        return (
          (I = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          I(e)
        );
      }
      function k(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var O = (0, a.lazy)(function () {
          return n.e(664).then(n.bind(n, 77164));
        }),
        x = "undefined" != typeof window && window.document,
        C = void 0 !== n.g && n.g.window && n.g.window.document,
        T = Object.keys(s.propTypes),
        S =
          x || C
            ? a.Suspense
            : function () {
                return null;
              },
        N = [];
      t.createReactPlayer = function (e, t) {
        var n, r;
        return (
          (r = n =
            (function (n) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && w(e, t);
              })(g, n);
              var r,
                d,
                f,
                m = E(g);
              function g() {
                var n;
                v(this, g);
                for (
                  var r = arguments.length, l = new Array(r), d = 0;
                  d < r;
                  d++
                )
                  l[d] = arguments[d];
                return (
                  k(_((n = m.call.apply(m, [this].concat(l)))), "state", {
                    showPreview: !!n.props.light,
                  }),
                  k(_(n), "references", {
                    wrapper: function (e) {
                      n.wrapper = e;
                    },
                    player: function (e) {
                      n.player = e;
                    },
                  }),
                  k(_(n), "handleClickPreview", function (e) {
                    n.setState({ showPreview: !1 }), n.props.onClickPreview(e);
                  }),
                  k(_(n), "showPreview", function () {
                    n.setState({ showPreview: !0 });
                  }),
                  k(_(n), "getDuration", function () {
                    return n.player ? n.player.getDuration() : null;
                  }),
                  k(_(n), "getCurrentTime", function () {
                    return n.player ? n.player.getCurrentTime() : null;
                  }),
                  k(_(n), "getSecondsLoaded", function () {
                    return n.player ? n.player.getSecondsLoaded() : null;
                  }),
                  k(_(n), "getInternalPlayer", function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "player";
                    return n.player ? n.player.getInternalPlayer(e) : null;
                  }),
                  k(_(n), "seekTo", function (e, t) {
                    if (!n.player) return null;
                    n.player.seekTo(e, t);
                  }),
                  k(_(n), "handleReady", function () {
                    n.props.onReady(_(n));
                  }),
                  k(
                    _(n),
                    "getActivePlayer",
                    (0, o.default)(function (n) {
                      for (
                        var r = 0, a = [].concat(N, h(e));
                        r < a.length;
                        r++
                      ) {
                        var i = a[r];
                        if (i.canPlay(n)) return i;
                      }
                      return t || null;
                    })
                  ),
                  k(
                    _(n),
                    "getConfig",
                    (0, o.default)(function (e, t) {
                      var r = n.props.config;
                      return i.default.all([
                        s.defaultProps.config,
                        s.defaultProps.config[t] || {},
                        r,
                        r[t] || {},
                      ]);
                    })
                  ),
                  k(
                    _(n),
                    "getAttributes",
                    (0, o.default)(function (e) {
                      return (0, u.omit)(n.props, T);
                    })
                  ),
                  k(_(n), "renderActivePlayer", function (e) {
                    if (!e) return null;
                    var t = n.getActivePlayer(e);
                    if (!t) return null;
                    var r = n.getConfig(e, t.key);
                    return a.default.createElement(
                      c.default,
                      y({}, n.props, {
                        key: t.key,
                        ref: n.references.player,
                        config: r,
                        activePlayer: t.lazyPlayer || t,
                        onReady: n.handleReady,
                      })
                    );
                  }),
                  n
                );
              }
              return (
                (r = g),
                (d = [
                  {
                    key: "shouldComponentUpdate",
                    value: function (e, t) {
                      return (
                        !(0, l.default)(this.props, e) ||
                        !(0, l.default)(this.state, t)
                      );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      var t = this.props.light;
                      !e.light && t && this.setState({ showPreview: !0 }),
                        e.light && !t && this.setState({ showPreview: !1 });
                    },
                  },
                  {
                    key: "renderPreview",
                    value: function (e) {
                      if (!e) return null;
                      var t = this.props,
                        n = t.light,
                        r = t.playIcon,
                        i = t.previewTabIndex;
                      return a.default.createElement(O, {
                        url: e,
                        light: n,
                        playIcon: r,
                        previewTabIndex: i,
                        onClick: this.handleClickPreview,
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.url,
                        n = e.style,
                        r = e.width,
                        i = e.height,
                        o = e.fallback,
                        l = e.wrapper,
                        s = this.state.showPreview,
                        u = this.getAttributes(t);
                      return a.default.createElement(
                        l,
                        y(
                          {
                            ref: this.references.wrapper,
                            style: p(p({}, n), {}, { width: r, height: i }),
                          },
                          u
                        ),
                        a.default.createElement(
                          S,
                          { fallback: o },
                          s ? this.renderPreview(t) : this.renderActivePlayer(t)
                        )
                      );
                    },
                  },
                ]),
                d && b(r.prototype, d),
                f && b(r, f),
                g
              );
            })(a.Component)),
          k(n, "displayName", "ReactPlayer"),
          k(n, "propTypes", s.propTypes),
          k(n, "defaultProps", s.defaultProps),
          k(n, "addCustomPlayer", function (e) {
            N.push(e);
          }),
          k(n, "removeCustomPlayers", function () {
            N.length = 0;
          }),
          k(n, "canPlay", function (t) {
            for (var n = 0, r = [].concat(N, h(e)); n < r.length; n++) {
              if (r[n].canPlay(t)) return !0;
            }
            return !1;
          }),
          k(n, "canEnablePIP", function (t) {
            for (var n = 0, r = [].concat(N, h(e)); n < r.length; n++) {
              var a = r[n];
              if (a.canEnablePIP && a.canEnablePIP(t)) return !0;
            }
            return !1;
          }),
          r
        );
      };
    },
    41301: function (e, t, n) {
      "use strict";
      t.Z = void 0;
      var r,
        a = (r = n(51681)) && r.__esModule ? r : { default: r },
        i = n(58275);
      var o = a.default[a.default.length - 1],
        l = (0, i.createReactPlayer)(a.default, o);
      t.Z = l;
    },
    32159: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canPlay =
          t.FLV_EXTENSIONS =
          t.DASH_EXTENSIONS =
          t.HLS_EXTENSIONS =
          t.VIDEO_EXTENSIONS =
          t.AUDIO_EXTENSIONS =
          t.MATCH_URL_KALTURA =
          t.MATCH_URL_VIDYARD =
          t.MATCH_URL_MIXCLOUD =
          t.MATCH_URL_DAILYMOTION =
          t.MATCH_URL_TWITCH_CHANNEL =
          t.MATCH_URL_TWITCH_VIDEO =
          t.MATCH_URL_WISTIA =
          t.MATCH_URL_STREAMABLE =
          t.MATCH_URL_FACEBOOK_WATCH =
          t.MATCH_URL_FACEBOOK =
          t.MATCH_URL_VIMEO =
          t.MATCH_URL_SOUNDCLOUD =
          t.MATCH_URL_YOUTUBE =
            void 0);
      var r = n(15428);
      function a(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return i(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return i(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          l = !0,
          s = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]();
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var o =
        /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
      t.MATCH_URL_YOUTUBE = o;
      var l = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
      t.MATCH_URL_SOUNDCLOUD = l;
      var s = /vimeo\.com\/.+/;
      t.MATCH_URL_VIMEO = s;
      var u =
        /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
      t.MATCH_URL_FACEBOOK = u;
      var c = /^https?:\/\/fb\.watch\/.+$/;
      t.MATCH_URL_FACEBOOK_WATCH = c;
      var d = /streamable\.com\/([a-z0-9]+)$/;
      t.MATCH_URL_STREAMABLE = d;
      var f =
        /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
      t.MATCH_URL_WISTIA = f;
      var m = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
      t.MATCH_URL_TWITCH_VIDEO = m;
      var p = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
      t.MATCH_URL_TWITCH_CHANNEL = p;
      var y =
        /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
      t.MATCH_URL_DAILYMOTION = y;
      var h = /mixcloud\.com\/([^/]+\/[^/]+)/;
      t.MATCH_URL_MIXCLOUD = h;
      var g = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;
      t.MATCH_URL_VIDYARD = g;
      var v =
        /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;
      t.MATCH_URL_KALTURA = v;
      var b =
        /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
      t.AUDIO_EXTENSIONS = b;
      var w = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
      t.VIDEO_EXTENSIONS = w;
      var E = /\.(m3u8)($|\?)/i;
      t.HLS_EXTENSIONS = E;
      var P = /\.(mpd)($|\?)/i;
      t.DASH_EXTENSIONS = P;
      var _ = /\.(flv)($|\?)/i;
      t.FLV_EXTENSIONS = _;
      var I = {
        youtube: function (e) {
          return e instanceof Array
            ? e.every(function (e) {
                return o.test(e);
              })
            : o.test(e);
        },
        soundcloud: function (e) {
          return l.test(e) && !b.test(e);
        },
        vimeo: function (e) {
          return s.test(e) && !w.test(e) && !E.test(e);
        },
        facebook: function (e) {
          return u.test(e) || c.test(e);
        },
        streamable: function (e) {
          return d.test(e);
        },
        wistia: function (e) {
          return f.test(e);
        },
        twitch: function (e) {
          return m.test(e) || p.test(e);
        },
        dailymotion: function (e) {
          return y.test(e);
        },
        mixcloud: function (e) {
          return h.test(e);
        },
        vidyard: function (e) {
          return g.test(e);
        },
        kaltura: function (e) {
          return v.test(e);
        },
        file: function e(t) {
          if (t instanceof Array) {
            var n,
              i = a(t);
            try {
              for (i.s(); !(n = i.n()).done; ) {
                var o = n.value;
                if ("string" == typeof o && e(o)) return !0;
                if (e(o.src)) return !0;
              }
            } catch (l) {
              i.e(l);
            } finally {
              i.f();
            }
            return !1;
          }
          return (
            !(!(0, r.isMediaStream)(t) && !(0, r.isBlobUrl)(t)) ||
            b.test(t) ||
            w.test(t) ||
            E.test(t) ||
            P.test(t) ||
            _.test(t)
          );
        },
      };
      t.canPlay = I;
    },
    51681: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(67294),
        a = n(15428),
        i = n(32159),
        o = [
          {
            key: "youtube",
            name: "YouTube",
            canPlay: i.canPlay.youtube,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(439).then(n.bind(n, 5945));
            }),
          },
          {
            key: "soundcloud",
            name: "SoundCloud",
            canPlay: i.canPlay.soundcloud,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(125).then(n.bind(n, 37809));
            }),
          },
          {
            key: "vimeo",
            name: "Vimeo",
            canPlay: i.canPlay.vimeo,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(743).then(n.bind(n, 23192));
            }),
          },
          {
            key: "facebook",
            name: "Facebook",
            canPlay: i.canPlay.facebook,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(121).then(n.bind(n, 22012));
            }),
          },
          {
            key: "streamable",
            name: "Streamable",
            canPlay: i.canPlay.streamable,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(546).then(n.bind(n, 41803));
            }),
          },
          {
            key: "wistia",
            name: "Wistia",
            canPlay: i.canPlay.wistia,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(55).then(n.bind(n, 36099));
            }),
          },
          {
            key: "twitch",
            name: "Twitch",
            canPlay: i.canPlay.twitch,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(216).then(n.bind(n, 88845));
            }),
          },
          {
            key: "dailymotion",
            name: "DailyMotion",
            canPlay: i.canPlay.dailymotion,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(596).then(n.bind(n, 28838));
            }),
          },
          {
            key: "mixcloud",
            name: "Mixcloud",
            canPlay: i.canPlay.mixcloud,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(667).then(n.bind(n, 53492));
            }),
          },
          {
            key: "vidyard",
            name: "Vidyard",
            canPlay: i.canPlay.vidyard,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(888).then(n.bind(n, 76724));
            }),
          },
          {
            key: "kaltura",
            name: "Kaltura",
            canPlay: i.canPlay.kaltura,
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(261).then(n.bind(n, 28285));
            }),
          },
          {
            key: "file",
            name: "FilePlayer",
            canPlay: i.canPlay.file,
            canEnablePIP: function (e) {
              return (
                i.canPlay.file(e) &&
                (document.pictureInPictureEnabled ||
                  (0, a.supportsWebKitPresentationMode)()) &&
                !i.AUDIO_EXTENSIONS.test(e)
              );
            },
            lazyPlayer: (0, r.lazy)(function () {
              return n.e(11).then(n.bind(n, 50560));
            }),
          },
        ];
      t.default = o;
    },
    4523: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultProps = t.propTypes = void 0);
      var r,
        a = (r = n(45697)) && r.__esModule ? r : { default: r };
      var i = a.default.string,
        o = a.default.bool,
        l = a.default.number,
        s = a.default.array,
        u = a.default.oneOfType,
        c = a.default.shape,
        d = a.default.object,
        f = a.default.func,
        m = a.default.node,
        p = {
          url: u([i, s, d]),
          playing: o,
          loop: o,
          controls: o,
          volume: l,
          muted: o,
          playbackRate: l,
          width: u([i, l]),
          height: u([i, l]),
          style: d,
          progressInterval: l,
          playsinline: o,
          pip: o,
          stopOnUnmount: o,
          light: u([o, i]),
          playIcon: m,
          previewTabIndex: l,
          fallback: m,
          wrapper: u([i, f, c({ render: f.isRequired })]),
          config: c({
            soundcloud: c({ options: d }),
            youtube: c({ playerVars: d, embedOptions: d, onUnstarted: f }),
            facebook: c({ appId: i, version: i, playerId: i, attributes: d }),
            dailymotion: c({ params: d }),
            vimeo: c({ playerOptions: d }),
            file: c({
              attributes: d,
              tracks: s,
              forceVideo: o,
              forceAudio: o,
              forceHLS: o,
              forceDASH: o,
              forceFLV: o,
              hlsOptions: d,
              hlsVersion: i,
              dashVersion: i,
              flvVersion: i,
            }),
            wistia: c({ options: d, playerId: i, customControls: s }),
            mixcloud: c({ options: d }),
            twitch: c({ options: d, playerId: i }),
            vidyard: c({ options: d }),
          }),
          onReady: f,
          onStart: f,
          onPlay: f,
          onPause: f,
          onBuffer: f,
          onBufferEnd: f,
          onEnded: f,
          onError: f,
          onDuration: f,
          onSeek: f,
          onProgress: f,
          onClickPreview: f,
          onEnablePIP: f,
          onDisablePIP: f,
        };
      t.propTypes = p;
      var y = function () {},
        h = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          stopOnUnmount: !0,
          light: !1,
          fallback: null,
          wrapper: "div",
          previewTabIndex: 0,
          config: {
            soundcloud: {
              options: {
                visual: !0,
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_comments: !1,
                show_playcount: !1,
              },
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1,
              },
              embedOptions: {},
              onUnstarted: y,
            },
            facebook: {
              appId: "1309697205772819",
              version: "v3.3",
              playerId: null,
              attributes: {},
            },
            dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
            vimeo: {
              playerOptions: {
                autopause: !1,
                byline: !1,
                portrait: !1,
                title: !1,
              },
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: !1,
              forceAudio: !1,
              forceHLS: !1,
              forceDASH: !1,
              forceFLV: !1,
              hlsOptions: {},
              hlsVersion: "0.14.16",
              dashVersion: "3.1.3",
              flvVersion: "1.5.0",
            },
            wistia: { options: {}, playerId: null, customControls: null },
            mixcloud: { options: { hide_cover: 1 } },
            twitch: { options: {}, playerId: null },
            vidyard: { options: {} },
          },
          onReady: y,
          onStart: y,
          onPlay: y,
          onPause: y,
          onBuffer: y,
          onBufferEnd: y,
          onEnded: y,
          onError: y,
          onDuration: y,
          onSeek: y,
          onProgress: y,
          onClickPreview: y,
          onEnablePIP: y,
          onDisablePIP: y,
        };
      t.defaultProps = h;
    },
    15428: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseStartTime = function (e) {
          return f(e, s);
        }),
        (t.parseEndTime = function (e) {
          return f(e, u);
        }),
        (t.randomString = function () {
          return Math.random().toString(36).substr(2, 5);
        }),
        (t.queryString = function (e) {
          return Object.keys(e)
            .map(function (t) {
              return "".concat(t, "=").concat(e[t]);
            })
            .join("&");
        }),
        (t.getSDK = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    return !0;
                  },
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : r.default,
            o = m(t);
          if (o && a(o)) return Promise.resolve(o);
          return new Promise(function (r, a) {
            if (p[e]) p[e].push({ resolve: r, reject: a });
            else {
              p[e] = [{ resolve: r, reject: a }];
              var o = function (t) {
                p[e].forEach(function (e) {
                  return e.resolve(t);
                });
              };
              if (n) {
                var l = window[n];
                window[n] = function () {
                  l && l(), o(m(t));
                };
              }
              i(e, function (r) {
                r
                  ? (p[e].forEach(function (e) {
                      return e.reject(r);
                    }),
                    (p[e] = null))
                  : n || o(m(t));
              });
            }
          });
        }),
        (t.getConfig = function (e, t) {
          return (0, a.default)(t.config, e.config);
        }),
        (t.omit = function (e) {
          for (
            var t,
              n = arguments.length,
              r = new Array(n > 1 ? n - 1 : 0),
              a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          for (
            var i = (t = []).concat.apply(t, r),
              o = {},
              l = Object.keys(e),
              s = 0,
              u = l;
            s < u.length;
            s++
          ) {
            var c = u[s];
            -1 === i.indexOf(c) && (o[c] = e[c]);
          }
          return o;
        }),
        (t.callPlayer = function (e) {
          var t;
          if (!this.player || !this.player[e]) {
            var n = "ReactPlayer: "
              .concat(this.constructor.displayName, " player could not call %c")
              .concat(e, "%c – ");
            return (
              this.player
                ? this.player[e] || (n += "The method was not available")
                : (n += "The player was not available"),
              console.warn(n, "font-weight: bold", ""),
              null
            );
          }
          for (
            var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            a[i - 1] = arguments[i];
          return (t = this.player)[e].apply(t, a);
        }),
        (t.isMediaStream = function (e) {
          return (
            "undefined" != typeof window &&
            void 0 !== window.MediaStream &&
            e instanceof window.MediaStream
          );
        }),
        (t.isBlobUrl = function (e) {
          return /^blob:/.test(e);
        }),
        (t.supportsWebKitPresentationMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document.createElement("video"),
            t = !1 === /iPhone|iPod/.test(navigator.userAgent);
          return (
            e.webkitSupportsPresentationMode &&
            "function" == typeof e.webkitSetPresentationMode &&
            t
          );
        });
      var r = i(n(49586)),
        a = i(n(95185));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var o, l = e[Symbol.iterator]();
                !(r = (o = l.next()).done) &&
                (n.push(o.value), !t || n.length !== t);
                r = !0
              );
            } catch (s) {
              (a = !0), (i = s);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (a) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return l(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var s = /[?&#](?:start|t)=([0-9hms]+)/,
        u = /[?&#]end=([0-9hms]+)/,
        c = /(\d+)(h|m|s)/g,
        d = /^\d+$/;
      function f(e, t) {
        if (!(e instanceof Array)) {
          var n = e.match(t);
          if (n) {
            var r = n[1];
            if (r.match(c))
              return (function (e) {
                var t = 0,
                  n = c.exec(e);
                for (; null !== n; ) {
                  var r = o(n, 3),
                    a = r[1],
                    i = r[2];
                  "h" === i && (t += 60 * parseInt(a, 10) * 60),
                    "m" === i && (t += 60 * parseInt(a, 10)),
                    "s" === i && (t += parseInt(a, 10)),
                    (n = c.exec(e));
                }
                return t;
              })(r);
            if (d.test(r)) return parseInt(r);
          }
        }
      }
      function m(e) {
        return window[e]
          ? window[e]
          : window.exports && window.exports[e]
          ? window.exports[e]
          : window.module && window.module.exports && window.module.exports[e]
          ? window.module.exports[e]
          : null;
      }
      var p = {};
    },
    39131: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r,
        a = n(67294),
        i = n(81880),
        o = n(19692),
        l = n(68275),
        s = n(25444),
        u = n(18040),
        c = n(52068),
        d = (0, o.default)(l.ZP).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1ng4k5v-0",
        })(["display:inline-block;"]),
        f = o.default.a.withConfig({
          displayName: "styles__JacketExt",
          componentId: "sc-1ng4k5v-1",
        })(["display:inline-block;"]),
        m = o.default.span.withConfig({
          displayName: "styles__Label",
          componentId: "sc-1ng4k5v-2",
        })(
          [
            "",
            " display:block;position:relative;color:",
            ";&:after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);transform-origin:center left;width:100%;height:1px;background:",
            ";transition:transform 0.75s ",
            ";",
            "}",
          ],
          c.kU,
          function (e) {
            return e.theme.bc1;
          },
          function (e) {
            return e.theme.bc1;
          },
          function (e) {
            return e.theme.bezzy;
          },
          u.Fs.large(r || (r = (0, i.Z)(["\n\t\t\theight: 2px;\n\t\t"])))
        ),
        p =
          ((0, o.default)(s.Link).withConfig({
            displayName: "styles__MobileJacket",
            componentId: "sc-1ng4k5v-3",
          })(
            [
              "margin-right:auto;margin-top:2.4rem;padding:1.3rem 2.4rem 1.1rem;border-radius:3.6rem;background:",
              ";",
            ],
            function (e) {
              return e.theme.bc1;
            }
          ),
          o.default.span.withConfig({
            displayName: "styles__MobileText",
            componentId: "sc-1ng4k5v-4",
          })(["", " display:inline-block;"], c.kU),
          function (e) {
            var t = e.label,
              n = e.isExternal,
              r = e.to,
              i = e.aria,
              o = e.onClick,
              l = "cursor-go";
            return n
              ? n
                ? a.createElement(
                    f,
                    {
                      className: l,
                      href: r,
                      "aria-label": i,
                      target: "_blank",
                      rel: "noreferrer noopener",
                    },
                    a.createElement(m, null, t)
                  )
                : void 0
              : a.createElement(
                  d,
                  {
                    to: r,
                    onClick: o,
                    className: l,
                    exit: { length: 1 },
                    entry: { length: 1, delay: 1 },
                  },
                  a.createElement(m, null, t)
                );
          });
    },
    97660: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var r = n(67294),
        a = n(19692),
        i = n(18040),
        o = a.default.svg.withConfig({
          displayName: "styles__SVG",
          componentId: "sc-1t77bps-0",
        })(["width:100%;height:100%;pointer-events:none;"]),
        l = (0, a.default)(i.ZC).withConfig({
          displayName: "styles__Wrapper",
          componentId: "sc-1t77bps-1",
        })(function (e) {
          return (0,
          a.css)(["position:absolute;top:0;left:0;right:0;bottom:0;padding:1.2rem;z-index:2;pointer-events:none;"]);
        }),
        s = a.default.text.withConfig({
          displayName: "styles__Text",
          componentId: "sc-1t77bps-2",
        })(function (e) {
          return (0,
          a.css)(["font-family:", ";font-size:1.8rem;line-height:1;font-weight:", ";letter-spacing:0.2em;fill:", ";"], e.theme.heading, e.theme.reg, e.theme.white);
        }),
        u = a.default.textPath.withConfig({
          displayName: "styles__TextPath",
          componentId: "sc-1t77bps-3",
        })(function (e) {
          return (0,
          a.css)(["font-family:", ";font-size:1.8rem;line-height:1;font-weight:", ";letter-spacing:0.2em;fill:", ";"], e.theme.heading, e.theme.reg, e.theme.white);
        }),
        c = n(32884),
        d = n(44441),
        f = 12;
      var m,
        p,
        y = function (e) {
          var t = e.isPlaying,
            n =
              "BUILT BY PEOPLE FOR PEOPLE. FIERCELY RELIABLE. FINELY TUNED. TUNED IN. FUELED BY THE FUTURE. CHARGED UP AND CHARGING FORWARD. DRIVEN BY INNOVATION. IN MOTION.",
            a = (0, r.useRef)(null),
            i = (0, r.useRef)(null),
            m = (0, r.useRef)(null),
            p = (0, r.useRef)(null),
            y = (0, r.useRef)(null),
            h = (0, r.useState)({ width: 0, height: 0 }),
            g = h[0],
            v = h[1],
            b = (0, r.useState)(!1),
            w = b[0],
            E = b[1],
            P = (0, r.useState)(12),
            _ = P[0],
            I = P[1],
            k = (0, r.useState)(2),
            O = k[0],
            x = k[1],
            C = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(function () {
              function e() {
                var e = a.current.getBoundingClientRect(),
                  t = window
                    .getComputedStyle(m.current, null)
                    .getPropertyValue("font-size");
                v({ width: e.width, height: e.height }), I(parseFloat(t));
              }
              return (
                e(),
                window.addEventListener("resize", e),
                c.ZP.set("svg", { autoAlpha: 1 }),
                new d("Alternate Gothic").load(null, 2e4).then(function () {
                  e(), E(!0);
                }),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                if (w) {
                  C.current && (C.current.kill(), (C.current = null));
                  var e = i.current,
                    r = y.current,
                    a = e.getComputedTextLength() + 0.2 * _ * n.length,
                    o = r.getTotalLength(),
                    l = (a / o) * 100;
                  x(Math.round(o / a) + 2),
                    t &&
                      ((C.current = c.ZP.timeline({
                        defaults: {
                          ease: "none",
                          duration: window.innerWidth < 700 ? 20 : 13,
                        },
                        repeat: -1,
                      }).fromTo(
                        p.current,
                        { attr: { startOffset: "0%" } },
                        { attr: { startOffset: -l + "%" } }
                      )),
                      c.ZP.set(p.current, { attr: { startOffset: -l + "%" } }),
                      c.ZP.set(i.current, { attr: { startOffset: "0%" } }));
                }
              },
              [g, w, _, t]
            ),
            r.createElement(
              l,
              null,
              r.createElement(
                o,
                { ref: a, viewBox: "0 0 " + g.width + " " + g.height },
                r.createElement("path", {
                  ref: y,
                  id: "squarePath",
                  fill: "transparent",
                  d:
                    "\n        M " +
                    (_ + f) +
                    ", " +
                    _ +
                    "\n        H " +
                    (g.width - _ - f) +
                    "\n\t\tC   " +
                    (g.width - _) +
                    " " +
                    _ +
                    ", \n\t\t \t" +
                    (g.width - _) +
                    " " +
                    _ +
                    ", \n\t    \t" +
                    (g.width - _) +
                    " " +
                    (_ + f) +
                    "\n        V " +
                    (g.height - _ - f) +
                    "\n\t\tC   " +
                    (g.width - _) +
                    " " +
                    (g.height - _) +
                    ", \n\t\t \t" +
                    (g.width - _) +
                    " " +
                    (g.height - _) +
                    ", \n\t    \t" +
                    (g.width - _ - f) +
                    " " +
                    (g.height - _) +
                    "\n        H " +
                    (_ + f) +
                    "\n\t\tC   " +
                    _ +
                    " " +
                    (g.height - _) +
                    ", \n\t\t \t" +
                    _ +
                    " " +
                    (g.height - _) +
                    ", \n\t    \t" +
                    _ +
                    " " +
                    (g.height - _ - f) +
                    "\n        V " +
                    (_ + f) +
                    "\n\t\tC   " +
                    _ +
                    " " +
                    _ +
                    ", \n\t\t \t" +
                    _ +
                    " " +
                    _ +
                    ", \n\t    \t" +
                    (_ + f) +
                    " " +
                    _ +
                    "\n    ",
                }),
                r.createElement(
                  "text",
                  { width: g.width },
                  r.createElement(
                    u,
                    {
                      ref: p,
                      style: { opacity: 1 },
                      alignmentBaseline: "top",
                      className: "text",
                      xlinkHref: "#squarePath",
                    },
                    Array.from({ length: O }, function () {
                      return n;
                    }).join("")
                  ),
                  r.createElement(
                    u,
                    {
                      ref: i,
                      style: { opacity: 0 },
                      alignmentBaseline: "top",
                      className: "text-2 test",
                      xlinkHref: "#squarePath",
                    },
                    n
                  )
                ),
                r.createElement(s, { style: { opacity: 0 }, ref: m }, "A")
              )
            )
          );
        },
        h = n(35639),
        g = n(6125),
        v = n(53128),
        b = n(81880),
        w = n(52068),
        E = n(68275),
        P = (0, a.default)(i.$0).withConfig({
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
          i.Fs.large(
            m ||
              (m = (0, b.Z)([
                "\n\t\t\theight: 75vh;\n\t\t\tmin-height: 60rem;\n\t\t\tmax-height: 60rem;\n\t\t",
              ]))
          )
        ),
        _ = a.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-1bxkxe-1",
        })(["position:relative;z-index:2;text-align:center;"]),
        I = (0, a.default)(i.H2).withConfig({
          displayName: "styles__Title",
          componentId: "sc-1bxkxe-2",
        })([""]),
        k = (0, a.default)(E.ZP).withConfig({
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
          w.Iq,
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
          i.Fs.large(p || (p = (0, b.Z)(["\n\t\t\t\theight: 4px;\n\t\t\t"])))
        ),
        O = a.default.div.withConfig({
          displayName: "styles__Background",
          componentId: "sc-1bxkxe-4",
        })([
          "position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;opacity:0.5;.gatsby-image-wrapper{width:100%;height:100%;filter:grayscale(100%);}",
        ]),
        x = a.default.div.withConfig({
          displayName: "styles__BackgroundAnimation",
          componentId: "sc-1bxkxe-5",
        })(["position:relative;width:100%;height:100%;"]),
        C = function (e) {
          var t = e.override,
            n = e.fallback,
            a = (0, r.useState)(!1),
            i = a[0],
            o = a[1],
            l = 0 === t.text.length ? n.text : t.text,
            s = 0 === t.textLink.length ? n.textLink : t.textLink,
            u = null === t.link ? n.link : t.link,
            c = null === t.image ? n.image : t.image;
          return r.createElement(
            h.Z,
            {
              onEnter: function () {
                o(!0);
              },
              onExit: function () {
                o(!1);
              },
            },
            r.createElement(
              P,
              null,
              r.createElement(y, { isPlaying: i }),
              r.createElement(
                O,
                null,
                r.createElement(
                  x,
                  null,
                  r.createElement(g.G, {
                    objectFit: "cover",
                    image: c.data,
                    alt: c.alt,
                  })
                )
              ),
              r.createElement(
                v.X,
                { isExpanded: !0, isCenter: !0 },
                r.createElement(
                  v.s,
                  { small: 12, smedium: 10, pushOnSmedium: 1, mpad: !0 },
                  r.createElement(
                    _,
                    null,
                    r.createElement(I, null, l),
                    r.createElement(
                      k,
                      {
                        to: "/" + u.slug + "/",
                        className: "cursor-go",
                        exit: { length: 1, delay: 1 },
                        entry: { length: 1 },
                      },
                      s
                    )
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
          return l;
        },
      });
      var r = n(67294),
        a = n(19692),
        i = (n(18040), n(52068)),
        o = a.default.div.withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1oh0rbo-0",
        })(function (e) {
          return (0,
          a.css)(["", " position:relative;text-transform:uppercase;padding:0 0 6rem 0;&:before{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:2px;height:4.8rem;background:", ";}"], i.Qs, e.theme.bc1);
        });
      var l = function () {
        return r.createElement(o, null, "Scroll");
      };
    },
    35698: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Ye;
          },
        });
      var r,
        a,
        i,
        o = n(67294),
        l = n(99616),
        s = n(2065),
        u = n(64131),
        c = n(89344),
        d = n(32884),
        f = n(82932),
        m = n(53128),
        p = n(6125),
        y = n(4126),
        h = n(97026),
        g = n(81880),
        v = n(19692),
        b = n(18040),
        w = (0, v.default)(b.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-schkuf-0",
        })(
          [
            "position:relative;overflow:visible;",
            " ",
            " &:after{position:absolute;z-index:3;background:",
            ";}&:after{content:'';bottom:-2px;left:0;right:calc(50% - 1px);height:2px;}",
          ],
          function (e) {
            return e.theme.vhs;
          },
          b.Fs.large(r || (r = (0, g.Z)(["\n\t\t\t", "\n\t\t"])), function (e) {
            return e.theme.vh;
          }),
          function (e) {
            return e.theme.bc1;
          }
        ),
        E = (0, v.default)(y.E.div).withConfig({
          displayName: "styles__TopLine",
          componentId: "sc-schkuf-1",
        })(
          [
            "display:none;position:absolute;z-index:3;left:calc(50% - 1px);width:2px;height:",
            ";background:",
            ";transform-origin:center top;",
            "",
          ],
          function (e) {
            return e.theme.padS;
          },
          function (e) {
            return e.theme.bc1;
          },
          b.Fs.large(
            a ||
              (a = (0, g.Z)([
                "\n\t\t\tdisplay: block;\n\t\t\theight: ",
                ";\n\t\t",
              ])),
            function (e) {
              return e.theme.padL;
            }
          )
        ),
        P = (0, v.default)(y.E.div).withConfig({
          displayName: "styles__Media",
          componentId: "sc-schkuf-2",
        })([
          "position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;overflow:hidden;&:after{position:absolute;top:0;left:0;right:0;bottom:0;background:black;opacity:0.4;}.gatsby-image-wrapper{width:100%;height:100%;}",
        ]),
        _ = (0, v.default)(y.E.div).withConfig({
          displayName: "styles__Content",
          componentId: "sc-schkuf-3",
        })([
          "position:relative;z-index:2;.tilt{transform-style:preserve-3d;transform:perspective(100rem);}",
        ]),
        I = (0, v.default)(b.H1).withConfig({
          displayName: "styles__Title",
          componentId: "sc-schkuf-4",
        })(
          [
            "position:relative;span{display:block;width:100%;text-align:center;&:first-child{text-transform:lowercase;font-family:",
            ";color:",
            ";position:absolute;z-index:2;top:0;left:50%;transform:translateX(-50%) translateY(-50%);",
            "}&:last-child{color:",
            ";margin-top:",
            "rem;}}",
          ],
          function (e) {
            return e.theme.script;
          },
          function (e) {
            return e.theme.bc1;
          },
          b.Fs.large(
            i ||
              (i = (0, g.Z)([
                "\n\t\t\t\t\t",
                "\n\t\t\t\t\ttransform: translate(-50%, -50%) translateZ(3.6rem);\n\t\t\t\t",
              ])),
            function (e) {
              return e.theme.desktopShadow;
            }
          ),
          function (e) {
            return e.theme.white;
          },
          function (e) {
            return e.scriptSize / 2 / 10;
          }
        ),
        k = (0, v.default)(y.E.div).withConfig({
          displayName: "styles__ScrollPos",
          componentId: "sc-schkuf-5",
        })([
          "position:absolute;z-index:3;bottom:0;left:50%;transform:translateX(-50%);transform-origin:center bottom;",
        ]);
      var O,
        x,
        C,
        T,
        S,
        N,
        A,
        M,
        j,
        R,
        L,
        D,
        Z = function (e) {
          var t = e.data,
            n = (0, h.Gc)(),
            r = t.heroImage,
            a = t.heroScript,
            i = t.heroMain,
            l = (0, o.useRef)(),
            s = (0, o.useRef)(),
            g = (0, o.useRef)(),
            v = (0, o.useState)(25),
            b = v[0],
            O = v[1];
          (0, o.useEffect)(function () {
            var e = function () {
              O(l.current.offsetHeight);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
            (0, o.useEffect)(function () {
              d.ZP.registerPlugin(f.i);
              var e = setTimeout(function () {
                f.i.matchMedia({
                  "(min-width: 1025px)": function () {
                    d.ZP.to(s.current, {
                      opacity: "0",
                      ease: "none",
                      scrollTrigger: {
                        trigger: g.current,
                        start: "100% 100%",
                        end: "200% 100%",
                        scrub: 0.5,
                        markers: !1,
                        pin: !0,
                      },
                    });
                  },
                });
              }, 250);
              return function () {
                clearTimeout(e), f.i.refresh();
              };
            }, []);
          var x = {
              initial: { filter: "grayscale(0%) brightness(1)" },
              animate: {
                filter: "grayscale(100%) brightness(0.4)",
                transition: {
                  delay: n.large ? 0.75 : 1,
                  duration: n.large ? 0.75 : 1,
                  ease: "linear",
                },
              },
            },
            C = {
              initial: { opacity: 0, scale: 1.5 },
              animate: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: n.large ? 1 : 2,
                  duration: n.large ? 0.75 : 1,
                  ease: [0.8, 0, 0.2, 1],
                },
              },
            },
            T = {
              initial: { scale: 1.5 },
              animate: {
                scale: 1,
                transition: {
                  delay: n.large ? 1 : 2,
                  duration: n.large ? 0.75 : 1,
                  ease: [0.8, 0, 0.2, 1],
                },
              },
            },
            S = {
              initial: { scale: 1.5, x: "-50%", y: "-50%" },
              animate: {
                scale: 1,
                z: "6rem",
                transition: {
                  delay: n.large ? 1 : 2,
                  duration: n.large ? 0.75 : 1,
                  ease: [0.8, 0, 0.2, 1],
                },
              },
            },
            N = {
              initial: { scaleY: 0, translateX: "calc(-50% + 1px)" },
              animate: {
                scaleY: 1,
                translateX: "calc(-50% + 1px)",
                transition: {
                  duration: n.large ? 0.75 : 1,
                  ease: [0.8, 0, 0.2, 1],
                },
              },
            };
          return o.createElement(
            w,
            { ref: g, className: "cursor-reset" },
            o.createElement(E, N),
            o.createElement(
              P,
              Object.assign({ ref: s }, x),
              o.createElement(p.G, {
                objectFit: "cover",
                image: r.data,
                alt: r.alt,
              })
            ),
            o.createElement(
              m.X,
              { isExpanded: !0, isCenter: !0 },
              o.createElement(
                m.s,
                { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
                o.createElement(
                  _,
                  C,
                  o.createElement(
                    c.Z,
                    {
                      perspective: 500,
                      scale: 1,
                      trackOnWindow: !0,
                      tiltReverse: !0,
                      reset: !1,
                      tiltEnable: !n.medium,
                      tiltMaxAngleX: 6,
                      tiltMaxAngleY: 6,
                      className: "tilt",
                    },
                    o.createElement(
                      I,
                      { scriptSize: b },
                      o.createElement(
                        y.E.span,
                        Object.assign({ ref: l }, S),
                        a
                      ),
                      o.createElement(y.E.span, T, i)
                    )
                  )
                )
              )
            ),
            o.createElement(k, N, o.createElement(u.Z, null))
          );
        },
        z = n(89493),
        F = (0, v.default)(b.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-19oagfj-0",
        })(
          [".row{flex-flow:row-reverse wrap-reverse;", "}"],
          b.Fs.large(
            O || (O = (0, g.Z)(["\n\t\t\tflex-flow: row wrap;\n\t\t"]))
          )
        ),
        H = v.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-19oagfj-1",
        })(
          [
            "position:relative;padding:0 0 ",
            " 0;",
            " ",
            " &:after{content:'';position:absolute;left:-2.4rem;right:0;bottom:0;height:2px;background:",
            ";",
            "}",
          ],
          function (e) {
            return e.theme.marS;
          },
          b.Fs.medium(
            x || (x = (0, g.Z)(["\n\t\tpadding: 0 0 ", " 0;\n\t"])),
            function (e) {
              return e.theme.marM;
            }
          ),
          b.Fs.large(C || (C = (0, g.Z)(["\n\t\tpadding: 0;\n\t"]))),
          function (e) {
            return e.theme.bc1;
          },
          b.Fs.large(T || (T = (0, g.Z)(["\n\t\t\tdisplay: none;\n\t\t"])))
        ),
        U = (0, v.default)(b.H2).withConfig({
          displayName: "styles__Heading",
          componentId: "sc-19oagfj-2",
        })(
          ["margin:0 0 1.2rem;", ""],
          b.Fs.large(S || (S = (0, g.Z)(["\n\t\tmargin: 0 0 3.6rem 0;\n\t"])))
        ),
        B = (0, v.default)(b.b0).withConfig({
          displayName: "styles__WYSIWYG",
          componentId: "sc-19oagfj-3",
        })([""]),
        X = v.default.aside.withConfig({
          displayName: "styles__Sidebar",
          componentId: "sc-19oagfj-4",
        })(
          [
            "position:relative;margin:0 0 ",
            " 0;padding:0 0 ",
            " 0;",
            " ",
            " &:after{content:'';position:absolute;right:-2.4rem;left:0;bottom:0;height:2px;background:",
            ";",
            "}",
          ],
          function (e) {
            return e.theme.marS;
          },
          function (e) {
            return e.theme.marS;
          },
          b.Fs.medium(
            N ||
              (N = (0, g.Z)([
                "\n\t\tmargin: 0 0 ",
                " 0;\n\t\tpadding: 0 0 ",
                " 0;\n\t",
              ])),
            function (e) {
              return e.theme.marM;
            },
            function (e) {
              return e.theme.marM;
            }
          ),
          b.Fs.large(
            A ||
              (A = (0, g.Z)([
                "\n\t\tposition: sticky;\n\t\ttop: 6rem; left: 0;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t",
              ]))
          ),
          function (e) {
            return e.theme.bc1;
          },
          b.Fs.large(M || (M = (0, g.Z)(["\n\t\t\tdisplay: none;\n\t\t"])))
        ),
        V = v.default.div.withConfig({
          displayName: "styles__SidebarItem",
          componentId: "sc-19oagfj-5",
        })(
          [
            "position:relative;margin:0 0 3.6rem 0;&:after{position:absolute;top:100%;left:0;right:calc(-8.333vw - 1.8rem);height:2px;background:",
            ";",
            "}",
            " ",
            " &:last-child{margin:0;}img{max-width:24rem;}",
          ],
          function (e) {
            return e.theme.bc1;
          },
          b.Fs.large(j || (j = (0, g.Z)(["\n\t\t\tcontent: '';\n\t\t"]))),
          b.Fs.medium(R || (R = (0, g.Z)(["\n\t\tmargin: 0 0 4.8rem 0;\n\t"]))),
          b.Fs.large(
            L ||
              (L = (0, g.Z)([
                "\n\t\tmargin: 0 0 6rem 0;\n\t\tpadding-bottom: 6rem;\n\t",
              ]))
          )
        ),
        W = (0, v.default)(b.H3).withConfig({
          displayName: "styles__SidebarHeading",
          componentId: "sc-19oagfj-6",
        })(
          ["margin:0 0 ", " 0;", ""],
          function (e) {
            return e.hasImage ? "1.2rem" : "0.6rem ";
          },
          b.Fs.large(
            D || (D = (0, g.Z)(["\n\t\tmargin: 0 0 ", " 0;\n\t"])),
            function (e) {
              return e.hasImage ? "2.4rem" : "1.2rem ";
            }
          )
        ),
        G =
          ((0, v.default)(b.H4).withConfig({
            displayName: "styles__Year",
            componentId: "sc-19oagfj-7",
          })(["color:", ";"], function (e) {
            return e.theme.bc1;
          }),
          (0, v.default)(b.P).withConfig({
            displayName: "styles__Service",
            componentId: "sc-19oagfj-8",
          })(["color:", ";"], function (e) {
            return e.theme.white;
          }));
      var $,
        Y,
        J = function (e) {
          var t = e.data,
            n = t.introClient,
            r = t.introServices,
            a = t.introText;
          return o.createElement(
            F,
            { pad: !0 },
            o.createElement(
              m.X,
              { isExpanded: !0, className: "row", isEqual: !0 },
              o.createElement(
                m.s,
                {
                  small: 12,
                  medium: 10,
                  large: 6,
                  pullOnMedium: 1,
                  pushOnLarge: 1,
                  mpad: !0,
                },
                o.createElement(
                  H,
                  null,
                  o.createElement(U, null, "Introduction"),
                  o.createElement(B, null, (0, z.ZP)(a))
                )
              ),
              o.createElement(
                m.s,
                {
                  small: 12,
                  medium: 10,
                  pullOnMedium: 1,
                  large: 3,
                  pushOnLarge: 2,
                  mpad: !0,
                },
                o.createElement(
                  X,
                  null,
                  o.createElement(
                    V,
                    null,
                    o.createElement(W, { hasImage: !0 }, "Client"),
                    o.createElement(p.G, {
                      objectFit: "contain",
                      image: n.data,
                      alt: n.alt,
                    })
                  ),
                  o.createElement(
                    V,
                    null,
                    o.createElement(W, null, "Services"),
                    r.map(function (e) {
                      var t = e.service,
                        n = e.id;
                      return o.createElement(G, { small: !0, key: n }, t);
                    })
                  )
                )
              )
            )
          );
        },
        q = (0, v.default)(b.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-194evuo-0",
        })(
          [
            "position:relative;&:after{position:absolute;top:50%;left:0;width:calc(8.333vw - 1.8rem);height:2px;background:",
            ";",
            "}",
          ],
          function (e) {
            return e.theme.bc1;
          },
          b.Fs.large($ || ($ = (0, g.Z)(['\n\t\t\tcontent: "";\n\t\t'])))
        ),
        K = (0, v.default)(b.H2).withConfig({
          displayName: "styles__Content",
          componentId: "sc-194evuo-1",
        })(["color:", ";"], function (e) {
          return e.theme.white;
        }),
        Q = function (e) {
          var t = e.data;
          return o.createElement(
            q,
            { marBottom: !0 },
            o.createElement(
              m.X,
              { isExpanded: !0 },
              o.createElement(
                m.s,
                { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
                o.createElement(K, null, t.standOutInfo)
              )
            )
          );
        },
        ee = (0, v.default)(b.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-1qzms1d-0",
        })(["position:relative;overflow:hidden;"]),
        te = v.default.div.withConfig({
          displayName: "styles__Media",
          componentId: "sc-1qzms1d-1",
        })(
          [
            "height:",
            ";transform:scale(",
            ") translateY(",
            ");",
            " .gatsby-image-wrapper{",
            "}",
          ],
          function (e) {
            return e.isFullscreen ? e.theme.vhs : "auto";
          },
          function (e) {
            return e.isAnimated ? 1.2 : 1;
          },
          function (e) {
            return e.isAnimated ? "6%" : "0";
          },
          b.Fs.large(
            Y || (Y = (0, g.Z)(["\n\t\theight: ", ";\n\t"])),
            function (e) {
              return e.isFullscreen ? "100vh" : "auto";
            }
          ),
          function (e) {
            return (
              e.isFullscreen &&
              "\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t"
            );
          }
        ),
        ne = o.forwardRef(function (e, t) {
          d.ZP.registerPlugin(f.i);
          var n = (0, h.Gc)(),
            r = e.isMobileNeeded ? e.mobileImage.data : e.image.data,
            a = e.isMobileNeeded ? e.mobileImage.alt : e.image.alt;
          return o.createElement(
            te,
            { isFullscreen: e.isFullscreen, isAnimated: e.isAnimated, ref: t },
            o.createElement(
              "div",
              { style: { overflow: "hidden", width: "100%", height: "100%" } },
              o.createElement(p.G, {
                objectFit: "cover",
                image: n.large ? r : e.image.data,
                alt: n.large ? a : e.image.alt,
              })
            )
          );
        });
      var re,
        ae,
        ie,
        oe,
        le = function (e) {
          var t = e.image,
            n = e.mobileImage,
            r = e.isMobileNeeded,
            a = e.isFullscreen,
            i = e.isAnimated,
            l = (0, o.useRef)(),
            s = (0, o.useRef)(),
            u = {
              image: t,
              isMobileNeeded: r,
              mobileImage: n,
              isFullscreen: a,
              isAnimated: i,
            };
          return (
            (0, o.useEffect)(
              function () {
                var e = setTimeout(function () {
                  i &&
                    d.ZP.to(s.current, {
                      y: "-6%",
                      ease: "none",
                      scrollTrigger: {
                        trigger: l.current,
                        start: "0% 50%",
                        end: "100% 50%",
                        scrub: 0.5,
                        markers: !1,
                      },
                    });
                }, 500);
                return function () {
                  clearTimeout(e), f.i.refresh();
                };
              },
              [i]
            ),
            o.createElement(
              ee,
              { marBottom: !0, ref: l },
              a
                ? o.createElement(ne, Object.assign({}, u, { ref: s }))
                : o.createElement(
                    m.X,
                    { isExpanded: !0 },
                    o.createElement(
                      m.s,
                      { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
                      o.createElement(ne, u)
                    )
                  )
            )
          );
        },
        se = n(39131),
        ue = (0, v.default)(b.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-10t1okm-0",
        })([""]),
        ce = v.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-10t1okm-1",
        })([""]),
        de = (0, v.default)(b.H2).withConfig({
          displayName: "styles__Heading",
          componentId: "sc-10t1okm-2",
        })(
          ["margin:0 0 1.2rem 0;", " ", ""],
          b.Fs.medium(
            re || (re = (0, g.Z)(["\n\t\tmargin: 0 0 2.4rem 0;\n\t"]))
          ),
          b.Fs.large(ae || (ae = (0, g.Z)(["\n\t\tmargin: 0 0 3.6rem 0;\n\t"])))
        ),
        fe = (0, v.default)(b.b0).withConfig({
          displayName: "styles__WYSIWYG",
          componentId: "sc-10t1okm-3",
        })(
          ["margin:0 0 1.2rem 0;", " ", ""],
          b.Fs.medium(
            ie || (ie = (0, g.Z)(["\n\t\tmargin: 0 0 2.4rem 0;\n\t"]))
          ),
          b.Fs.large(oe || (oe = (0, g.Z)(["\n\t\tmargin: 0 0 3.6rem 0;\n\t"])))
        );
      var me = function (e) {
          var t = e.heading,
            n = e.wysiwyg,
            r = e.hasButton,
            a = e.buttonLabel,
            i = e.isButtonExternal,
            l = e.externalLink,
            s = e.internalLink,
            u = {
              small: 12,
              medium: 10,
              pushOnMedium: 1,
              large: 8,
              pushOnLarge: 2,
              mpad: !0,
            };
          return o.createElement(
            ue,
            { marBottom: !0 },
            o.createElement(
              m.X,
              { isExpanded: !0 },
              o.createElement(
                m.s,
                u,
                o.createElement(
                  ce,
                  null,
                  t && o.createElement(de, null, t),
                  n && o.createElement(fe, null, (0, z.ZP)(n)),
                  r &&
                    o.createElement(se.Z, {
                      label: a,
                      to: s ? "/" + s.slug + "/" : l,
                      isExternal: i,
                      aria: a,
                    })
                )
              )
            )
          );
        },
        pe = n(41301),
        ye = n(52068),
        he = (0, v.default)(b.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-mvghc4-0",
        })([""]),
        ge = v.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-mvghc4-1",
        })(
          [
            "position:relative;padding-top:56.25%;background:",
            ";&:after{",
            ' content:"Loading Video";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:',
            ";}.player{position:absolute;z-index:2;top:0;left:0;}",
          ],
          function (e) {
            return e.theme.bc1;
          },
          ye.LD,
          function (e) {
            return e.theme.black;
          }
        );
      var ve,
        be,
        we,
        Ee,
        Pe = function (e) {
          var t = { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
            n = {
              url: e.video.url,
              controls: !0,
              className: "player",
              width: "100%",
              height: "100%",
              pip: !0,
            };
          return o.createElement(
            he,
            { marBottom: !0 },
            o.createElement(
              m.X,
              { isExpanded: !0 },
              o.createElement(
                m.s,
                t,
                o.createElement(ge, null, o.createElement(pe.Z, n))
              )
            )
          );
        },
        _e = (0, v.default)(b.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-igm0d-0",
        })(["position:relative;overflow:hidden;"]),
        Ie = (0, v.default)(b.ZC).withConfig({
          displayName: "styles__Sweater",
          componentId: "sc-igm0d-1",
        })(["background:", ";"], function (e) {
          return e.theme.white;
        }),
        ke = v.default.div.withConfig({
          displayName: "styles__Content",
          componentId: "sc-igm0d-2",
        })(
          [
            "display:flex;flex-flow:column wrap;align-items:flex-start;justify-content:space-between;padding:0 2.4rem;",
            " ",
            "",
          ],
          b.Fs.medium(
            ve ||
              (ve = (0, g.Z)(["\n\t\tpadding: 0 calc(8.333% + 1.2rem);\n\t"]))
          ),
          b.Fs.large(
            be ||
              (be = (0, g.Z)(["\n\t\tpadding: 0 calc(8.333% + 2.4rem);\n\t"]))
          )
        ),
        Oe = v.default.blockquote.withConfig({
          displayName: "styles__QuoteText",
          componentId: "sc-igm0d-3",
        })(
          ["", " color:", ";width:100%;margin:0 0 3.6rem 0;", " ", ""],
          ye.Iq,
          function (e) {
            return e.theme.black;
          },
          b.Fs.medium(
            we || (we = (0, g.Z)(["\n\t\tmargin: 0 0 4.8rem 0;\n\t"]))
          ),
          b.Fs.large(Ee || (Ee = (0, g.Z)(["\n\t\tmargin: 0 0 6rem 0;\n\t"])))
        ),
        xe = v.default.div.withConfig({
          displayName: "styles__Author",
          componentId: "sc-igm0d-4",
        })(["display:flex;align-items:center;justify-content:flex-start;"]),
        Ce = v.default.div.withConfig({
          displayName: "styles__AuthorImage",
          componentId: "sc-igm0d-5",
        })(
          [
            "position:relative;margin-right:2.4rem;width:6rem;height:6rem;.gatsby-image-wrapper{position:relative;z-index:2;border-radius:100%;}&:after{content:'';position:absolute;z-index:1;top:50%;right:100%;width:calc(8.333vw * 2 + 1.8rem);height:2px;background:",
            ";}",
          ],
          function (e) {
            return e.theme.bc1;
          }
        ),
        Te = v.default.div.withConfig({
          displayName: "styles__AuthorText",
          componentId: "sc-igm0d-6",
        })(
          ["span{", " display:block;color:", ";&:last-child{opacity:0.6;}}"],
          ye.Qs,
          function (e) {
            return e.theme.black;
          }
        );
      var Se = function (e) {
        var t = e.author,
          n = e.authorDesc,
          r = e.authorImage,
          a = e.quote;
        return o.createElement(
          _e,
          { marBottom: !0 },
          o.createElement(
            m.X,
            { isExpanded: !0 },
            o.createElement(
              m.s,
              { small: 12, medium: 10, pushOnMedium: 1, mpad: !0 },
              o.createElement(
                Ie,
                { pad: !0 },
                o.createElement(
                  ke,
                  null,
                  o.createElement(Oe, null, a),
                  o.createElement(
                    xe,
                    null,
                    r &&
                      o.createElement(
                        Ce,
                        null,
                        o.createElement(p.G, {
                          objectFit: "cover",
                          image: r.data,
                          alt: r.alt,
                        })
                      ),
                    o.createElement(
                      Te,
                      null,
                      o.createElement("span", null, t),
                      o.createElement("span", null, n)
                    )
                  )
                )
              )
            )
          )
        );
      };
      var Ne,
        Ae,
        Me,
        je,
        Re,
        Le,
        De = function (e) {
          var t = e.data.projectBuilder;
          return o.createElement(
            o.Fragment,
            null,
            t.map(function (e) {
              return "DatoCmsImage" === e.type
                ? o.createElement(le, {
                    key: e.id,
                    image: e.image,
                    isMobileNeeded: e.isMobileNeeded,
                    mobileImage: e.mobileImage,
                    isFullscreen: e.isFullscreen,
                    isAnimated: e.isAnimated,
                  })
                : "DatoCmsText" === e.type
                ? o.createElement(me, {
                    key: e.id,
                    heading: e.heading,
                    wysiwyg: e.wysiwyg,
                    hasButton: e.buttonNeeded,
                    buttonLabel: e.buttonLabel,
                    isButtonExternal: e.isButtonExternal,
                    externalLink: e.externalLink,
                    internalLink: e.internalLink,
                  })
                : "DatoCmsVideo" === e.type
                ? o.createElement(Pe, { key: e.id, video: e.video })
                : "DatoCmsQuote" === e.type
                ? o.createElement(Se, {
                    key: e.id,
                    quote: e.quote,
                    author: e.authorName,
                    authorDesc: e.authorDesc,
                    authorImage: e.authorImage,
                  })
                : void 0;
            })
          );
        },
        Ze = n(68275),
        ze = (0, v.default)(b.$0).withConfig({
          displayName: "styles__Jacket",
          componentId: "sc-pzlfww-0",
        })(
          ["display:flex;flex-flow:column;", " ", ""],
          b.Fs.medium(
            Ne ||
              (Ne = (0, g.Z)([
                "\n\t\tflex-flow: row;\n\t\talign-items: stretch;\n\t\tjustify-content: space-between;\n\t",
              ]))
          ),
          b.Fs.large(
            Ae ||
              (Ae = (0, g.Z)([
                "\n\t\t",
                "\n\t\tmin-height: 60rem;\n\t\tmax-height: 80rem;\n\t",
              ])),
            function (e) {
              return e.theme.vh;
            }
          )
        ),
        Fe = (0, v.default)(b.ZC).withConfig({
          displayName: "styles__Sweater",
          componentId: "sc-pzlfww-1",
        })(
          [
            "flex:1;display:flex;align-items:center;background:",
            ";color:",
            ";",
          ],
          function (e) {
            return e.isPrev ? e.theme.white : e.theme.bc1;
          },
          function (e) {
            return e.theme.black;
          }
        ),
        He = (0, v.default)(Ze.ZP).withConfig({
          displayName: "styles__Content",
          componentId: "sc-pzlfww-2",
        })([
          "display:flex;flex-flow:column;align-items:center;justify-content:center;flex:1;",
        ]),
        Ue = v.default.div.withConfig({
          displayName: "styles__Media",
          componentId: "sc-pzlfww-3",
        })(
          [
            "position:relative;width:100%;height:25vh;height:calc(var(--vhs,1vh) * 25);min-height:16.8rem;",
            " ",
            " &:after{content:'';position:absolute;z-index:2;top:50%;left:50%;transform:translate(-50%,-50%) rotate(",
            "deg);transform-origin:center center;width:4.8rem;height:4.8rem;background:transparent url(",
            ") no-repeat center center;background-size:cover;}.gatsby-image-wrapper{position:relative;z-index:1;width:100%;height:100%;filter:grayscale(100%) brightness(0.4);}",
          ],
          b.Fs.medium(
            Me ||
              (Me = (0, g.Z)(["\n\t\theight: calc(var(--vhs, 1vh) * 50);\n\t"]))
          ),
          b.Fs.large(
            je ||
              (je = (0, g.Z)([
                "\n\t\theight: 50vh;\n\t\tmin-height: 40rem;\n\t\tmax-height: 48rem;\n\t",
              ]))
          ),
          function (e) {
            return e.isPrev ? 180 : 0;
          },
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMjRMNDUgMjQiIHN0cm9rZT0iI0YyRjJGMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTMxIDM4TDQ1IDI0TDMxIDEwIiBzdHJva2U9IiNGMkYyRjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+Cjwvc3ZnPgo="
        ),
        Be = (0, v.default)(b.Dr).withConfig({
          displayName: "styles__Label",
          componentId: "sc-pzlfww-4",
        })(
          ["text-transform:uppercase;", " ", " ", " ", ""],
          function (e) {
            return (
              e.isPrevTop &&
              "\n\t\t\tmargin-right: auto;\n\t\t\tmargin-bottom: 1.2rem;\n\n\t\t\t" +
                b.Fs.large(
                  Re ||
                    (Re = (0, g.Z)([
                      "\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: 0;\n\t\t",
                    ]))
                ) +
                "\n\t\t"
            );
          },
          function (e) {
            return (
              e.isPrevBottom &&
              "\n\t\t\tmargin-left: auto;\n\t\t\tmargin-top: 1.2rem;\n\n\t\t\t" +
                b.Fs.large(
                  Le ||
                    (Le = (0, g.Z)([
                      "\n\t\t\tmargin-left: 0;\n\t\t\tmargin-right: auto;\n\t\t",
                    ]))
                ) +
                "\n\t\t"
            );
          },
          function (e) {
            return (
              e.isNextTop &&
              "\n\t\t\tmargin-right: auto;\n\t\t\tmargin-bottom: 1.2rem;\n\t\t"
            );
          },
          function (e) {
            return (
              e.isNextBottom &&
              "\n\t\t\tmargin-left: auto;\n\t\t\tmargin-top: 1.2rem;\n\t\t"
            );
          }
        ),
        Xe = v.default.div.withConfig({
          displayName: "styles__TransitionImage",
          componentId: "sc-pzlfww-5",
        })(
          [
            "position:fixed;z-index:999;top:0;left:0;right:0;bottom:0;overflow:hidden;pointer-events:none;clip-path:inset( ",
            " );transition:clip-path 1s ",
            ";.gatsby-image-wrapper{width:100%;height:100%;}",
          ],
          function (e) {
            return e.inTrans
              ? "\n\t\t0% 0% 0% 0%"
              : "\n\t\t50% 50% 50% 50%\n\t\t";
          },
          function (e) {
            return e.theme.bezzy;
          }
        ),
        Ve = function (e) {
          var t = e.context,
            n = e.isPrev,
            r = e.isNext,
            a = (0, o.useState)(!1),
            i = a[0],
            l = a[1],
            s = (0, h.Gc)(),
            u = t.nextPage,
            c = t.previousPage,
            d = {
              onClick: function () {
                l(!0);
              },
              to: "/projects/" + (n ? c.slug : u.slug),
              className: "cursor-trigger " + (n && "cursor-white"),
              exit: { length: s.large ? 1 : 2, delay: s.large ? 0.75 : 1 },
              entry: { length: s.large ? 0.75 : 1, delay: s.large ? 0.75 : 1 },
            };
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              Fe,
              { isPrev: n, pad: !0, className: !n && "cursor-white" },
              o.createElement(
                m.X,
                { isExpanded: !0 },
                o.createElement(
                  m.s,
                  {
                    small: 12,
                    medium: 10,
                    pushOnMedium: 1,
                    large: 6,
                    pushOnLarge: 3,
                    mpad: !0,
                  },
                  o.createElement(
                    He,
                    d,
                    o.createElement(
                      Be,
                      { isPrevTop: n, isNextTop: r },
                      n ? "Previous" : "Next",
                      " Project"
                    ),
                    o.createElement(
                      Ue,
                      { isPrev: n },
                      o.createElement(p.G, {
                        objectFit: "cover",
                        image: n ? c.heroImage.data : u.heroImage.data,
                        alt: n ? c.heroImage.alt : u.heroImage.alt,
                      })
                    ),
                    o.createElement(
                      Be,
                      { isPrevBottom: n, isNextBottom: r },
                      n ? c.heroMain : u.heroMain
                    )
                  )
                )
              )
            ),
            !s.large &&
              o.createElement(
                Ze.kX,
                null,
                o.createElement(
                  Xe,
                  { inTrans: i },
                  o.createElement(p.G, {
                    objectFit: "cover",
                    image: n ? c.heroImage.data : u.heroImage.data,
                    alt: n ? c.heroImage.alt : u.heroImage.alt,
                  })
                )
              )
          );
        };
      function We(e) {
        var t = e.data,
          n = e.isPrev,
          r = e.isNext,
          a = (0, h.Gc)(),
          i = (0, o.useState)(!1),
          l = i[0],
          s = i[1],
          u = {
            small: 12,
            medium: 10,
            pushOnMedium: 1,
            large: 8,
            pushOnLarge: 2,
            xxlarge: 6,
            pushOnXxlarge: 3,
            mpad: !0,
          },
          c = {
            onClick: function () {
              s(!0);
            },
            to: "/projects/" + (n ? t[0].slug : t[1].slug),
            className: "cursor-trigger " + (n && "cursor-white"),
            exit: { length: 2, delay: 1 },
            entry: { length: 1, delay: 1 },
          };
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            Fe,
            { isPrev: n, pad: !0, className: !n && "cursor-white" },
            o.createElement(
              m.X,
              { isExpanded: !0 },
              o.createElement(
                m.s,
                u,
                o.createElement(
                  He,
                  c,
                  o.createElement(
                    Be,
                    { isPrevTop: n, isNextTop: r },
                    "Related Project"
                  ),
                  o.createElement(
                    Ue,
                    { isPrev: n },
                    o.createElement(p.G, {
                      objectFit: "cover",
                      image: n ? t[0].image.data : t[1].image.data,
                      alt: n ? t[0].image.alt : t[1].image.alt,
                    })
                  ),
                  o.createElement(
                    Be,
                    { isPrevBottom: n, isNextBottom: r },
                    n ? t[0].title : t[1].title
                  )
                )
              )
            )
          ),
          a.large
            ? null
            : o.createElement(
                Ze.kX,
                null,
                o.createElement(
                  Xe,
                  { inTrans: l },
                  o.createElement(p.G, {
                    objectFit: "cover",
                    image: n ? t[0].image.data : t[1].image.data,
                    alt: n ? t[0].image.alt : t[1].image.alt,
                  })
                )
              )
        );
      }
      var Ge = function (e) {
          var t = e.data,
            n = e.context;
          return t.relatedProjects.length > 0
            ? o.createElement(
                ze,
                null,
                o.createElement(We, { data: t.relatedProjects, isPrev: !0 }),
                o.createElement(We, { data: t.relatedProjects, isNext: !0 })
              )
            : o.createElement(
                ze,
                null,
                o.createElement(Ve, { context: n, isPrev: !0 }),
                o.createElement(Ve, { context: n, isNext: !0 })
              );
        },
        $e = n(97660),
        Ye = function (e) {
          var t = e.transitionStatus,
            n = e.entry,
            r = e.exit,
            a = e.data,
            i = e.pageContext,
            u = e.location;
          return o.createElement(
            s.Z,
            { status: t, entry: n, exit: r, location: u },
            o.createElement(l.Z, {
              content: a.page.seo,
              schema: a.page.schema,
              fallback: a.seoFallback.seo.fallback,
            }),
            o.createElement(Z, { data: a.page }),
            o.createElement(J, { data: a.page }),
            o.createElement(Q, { data: a.page }),
            o.createElement(De, { data: a.page }),
            o.createElement(Ge, { data: a.page, context: i }),
            o.createElement($e.Z, { override: a.page, fallback: a.fallback })
          );
        };
    },
  },
]);
//# sourceMappingURL=component---src-templates-project-jsx-9fdcdb1b00a762256202.js.map
