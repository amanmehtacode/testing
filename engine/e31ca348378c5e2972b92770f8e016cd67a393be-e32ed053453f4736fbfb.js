(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [361],
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
                return e.$$typeof === r;
              })(e)
            );
          })(e)
        );
      };
      var r =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? l(((r = e), Array.isArray(r) ? [] : {}), e, t)
          : e;
        var r;
      }
      function o(e, t, r) {
        return e.concat(t).map(function (e) {
          return n(e, r);
        });
      }
      function a(e) {
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
      function i(e, t) {
        try {
          return t in e;
        } catch (r) {
          return !1;
        }
      }
      function u(e, t, r) {
        var o = {};
        return (
          r.isMergeableObject(e) &&
            a(e).forEach(function (t) {
              o[t] = n(e[t], r);
            }),
          a(t).forEach(function (a) {
            (function (e, t) {
              return (
                i(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              );
            })(e, a) ||
              (i(e, a) && r.isMergeableObject(t[a])
                ? (o[a] = (function (e, t) {
                    if (!t.customMerge) return l;
                    var r = t.customMerge(e);
                    return "function" == typeof r ? r : l;
                  })(a, r)(e[a], t[a], r))
                : (o[a] = n(t[a], r)));
          }),
          o
        );
      }
      function l(e, r, a) {
        ((a = a || {}).arrayMerge = a.arrayMerge || o),
          (a.isMergeableObject = a.isMergeableObject || t),
          (a.cloneUnlessOtherwiseSpecified = n);
        var i = Array.isArray(r);
        return i === Array.isArray(e)
          ? i
            ? a.arrayMerge(e, r, a)
            : u(e, r, a)
          : n(r, a);
      }
      l.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, r) {
          return l(e, r, t);
        }, {});
      };
      var c = l;
      e.exports = c;
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
      function r(e, t) {
        e.onreadystatechange = function () {
          ("complete" != this.readyState && "loaded" != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, n, o) {
        var a = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("script");
        "function" == typeof n && ((o = n), (n = {})),
          (n = n || {}),
          (o = o || function () {}),
          (i.type = n.type || "text/javascript"),
          (i.charset = n.charset || "utf8"),
          (i.async = !("async" in n) || !!n.async),
          (i.src = e),
          n.attrs &&
            (function (e, t) {
              for (var r in t) e.setAttribute(r, t[r]);
            })(i, n.attrs),
          n.text && (i.text = "" + n.text),
          ("onload" in i ? t : r)(i, o),
          i.onload || t(i, o),
          a.appendChild(i);
      };
    },
    49393: function (e, t, r) {
      "use strict";
      r.r(t);
      var n =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function o(e, t) {
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++)
          if (((o = e[r]), (a = t[r]), !(o === a || (n(o) && n(a))))) return !1;
        var o, a;
        return !0;
      }
      t.default = function (e, t) {
        var r;
        void 0 === t && (t = o);
        var n,
          a = [],
          i = !1;
        return function () {
          for (var o = [], u = 0; u < arguments.length; u++)
            o[u] = arguments[u];
          return (
            (i && r === this && t(o, a)) ||
              ((n = e.apply(this, o)), (i = !0), (r = this), (a = o)),
            n
          );
        };
      };
    },
    20578: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          (n =
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
          n(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        a = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== n(e) && "function" != typeof e))
            return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, a, i)
                : (r[a] = e[a]);
            }
          (r.default = e), t && t.set(e, r);
          return r;
        })(r(67294)),
        i = (o = r(32993)) && o.__esModule ? o : { default: o },
        u = r(47311);
      function l() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        return (
          (c =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          c.apply(this, arguments)
        );
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          p(e, t)
        );
      }
      function y(e) {
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
          var r,
            n = v(e);
          if (t) {
            var o = v(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return d(this, r);
        };
      }
      function d(e, t) {
        return !t || ("object" !== n(t) && "function" != typeof t) ? h(e) : t;
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function v(e) {
        return (
          (v = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          v(e)
        );
      }
      function b(e, t, r) {
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
      var m = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(u, e);
        var t,
          r,
          n,
          o = y(u);
        function u() {
          var e;
          s(this, u);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            b(h((e = o.call.apply(o, [this].concat(r)))), "mounted", !1),
            b(h(e), "isReady", !1),
            b(h(e), "isPlaying", !1),
            b(h(e), "isLoading", !0),
            b(h(e), "loadOnReady", null),
            b(h(e), "startOnPlay", !0),
            b(h(e), "seekOnPlay", null),
            b(h(e), "onDurationCalled", !1),
            b(h(e), "handlePlayerMount", function (t) {
              (e.player = t), e.player.load(e.props.url), e.progress();
            }),
            b(h(e), "getInternalPlayer", function (t) {
              return e.player ? e.player[t] : null;
            }),
            b(h(e), "progress", function () {
              if (e.props.url && e.player && e.isReady) {
                var t = e.getCurrentTime() || 0,
                  r = e.getSecondsLoaded(),
                  n = e.getDuration();
                if (n) {
                  var o = { playedSeconds: t, played: t / n };
                  null !== r && ((o.loadedSeconds = r), (o.loaded = r / n)),
                    (o.playedSeconds === e.prevPlayed &&
                      o.loadedSeconds === e.prevLoaded) ||
                      e.props.onProgress(o),
                    (e.prevPlayed = o.playedSeconds),
                    (e.prevLoaded = o.loadedSeconds);
                }
              }
              e.progressTimeout = setTimeout(
                e.progress,
                e.props.progressFrequency || e.props.progressInterval
              );
            }),
            b(h(e), "handleReady", function () {
              if (e.mounted) {
                (e.isReady = !0), (e.isLoading = !1);
                var t = e.props,
                  r = t.onReady,
                  n = t.playing,
                  o = t.volume,
                  a = t.muted;
                r(),
                  a || null === o || e.player.setVolume(o),
                  e.loadOnReady
                    ? (e.player.load(e.loadOnReady, !0), (e.loadOnReady = null))
                    : n && e.player.play(),
                  e.handleDurationCheck();
              }
            }),
            b(h(e), "handlePlay", function () {
              (e.isPlaying = !0), (e.isLoading = !1);
              var t = e.props,
                r = t.onStart,
                n = t.onPlay,
                o = t.playbackRate;
              e.startOnPlay &&
                (e.player.setPlaybackRate &&
                  1 !== o &&
                  e.player.setPlaybackRate(o),
                r(),
                (e.startOnPlay = !1)),
                n(),
                e.seekOnPlay && (e.seekTo(e.seekOnPlay), (e.seekOnPlay = null)),
                e.handleDurationCheck();
            }),
            b(h(e), "handlePause", function (t) {
              (e.isPlaying = !1), e.isLoading || e.props.onPause(t);
            }),
            b(h(e), "handleEnded", function () {
              var t = e.props,
                r = t.activePlayer,
                n = t.loop,
                o = t.onEnded;
              r.loopOnEnded && n && e.seekTo(0), n || ((e.isPlaying = !1), o());
            }),
            b(h(e), "handleError", function () {
              var t;
              (e.isLoading = !1), (t = e.props).onError.apply(t, arguments);
            }),
            b(h(e), "handleDurationCheck", function () {
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
            b(h(e), "handleLoaded", function () {
              e.isLoading = !1;
            }),
            e
          );
        }
        return (
          (t = u),
          (r = [
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
                  var r = this.props,
                    n = r.url,
                    o = r.playing,
                    a = r.volume,
                    u = r.muted,
                    l = r.playbackRate,
                    c = r.pip,
                    s = r.loop,
                    f = r.activePlayer;
                  if (!(0, i.default)(e.url, n)) {
                    if (this.isLoading && !f.forceLoad)
                      return (
                        console.warn(
                          "ReactPlayer: the attempt to load ".concat(
                            n,
                            " is being deferred until the player has loaded"
                          )
                        ),
                        void (this.loadOnReady = n)
                      );
                    (this.isLoading = !0),
                      (this.startOnPlay = !0),
                      (this.onDurationCalled = !1),
                      this.player.load(n, this.isReady);
                  }
                  e.playing || !o || this.isPlaying || this.player.play(),
                    e.playing && !o && this.isPlaying && this.player.pause(),
                    !e.pip &&
                      c &&
                      this.player.enablePIP &&
                      this.player.enablePIP(),
                    e.pip &&
                      !c &&
                      this.player.disablePIP &&
                      this.player.disablePIP(),
                    e.volume !== a && null !== a && this.player.setVolume(a),
                    e.muted !== u &&
                      (u
                        ? this.player.mute()
                        : (this.player.unmute(),
                          null !== a &&
                            setTimeout(function () {
                              return t.player.setVolume(a);
                            }))),
                    e.playbackRate !== l &&
                      this.player.setPlaybackRate &&
                      this.player.setPlaybackRate(l),
                    e.loop !== s &&
                      this.player.setLoop &&
                      this.player.setLoop(s);
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
                var r = this;
                if (!this.isReady && 0 !== e)
                  return (
                    (this.seekOnPlay = e),
                    void setTimeout(function () {
                      r.seekOnPlay = null;
                    }, 5e3)
                  );
                if (t ? "fraction" === t : e > 0 && e < 1) {
                  var n = this.player.getDuration();
                  return n
                    ? void this.player.seekTo(n * e)
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
                  ? a.default.createElement(
                      e,
                      c({}, this.props, {
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
          r && f(t.prototype, r),
          n && f(t, n),
          u
        );
      })(a.Component);
      (t.default = m),
        b(m, "displayName", "Player"),
        b(m, "propTypes", u.propTypes),
        b(m, "defaultProps", u.defaultProps);
    },
    87312: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          (n =
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
          n(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== n(e) && "function" != typeof e))
          return { default: e };
        var t = a();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set)
              ? Object.defineProperty(r, i, u)
              : (r[i] = e[i]);
          }
        (r.default = e), t && t.set(e, r);
        return r;
      })(r(67294));
      function a() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function s(e, t) {
        return (
          (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          s(e, t)
        );
      }
      function f(e) {
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
          var r,
            n = d(e);
          if (t) {
            var o = d(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return p(this, r);
        };
      }
      function p(e, t) {
        return !t || ("object" !== n(t) && "function" != typeof t) ? y(e) : t;
      }
      function y(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function d(e) {
        return (
          (d = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          d(e)
        );
      }
      function h(e, t, r) {
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
      var v = "64px",
        b = {},
        m = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && s(e, t);
          })(i, e);
          var t,
            r,
            n,
            a = f(i);
          function i() {
            var e;
            l(this, i);
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return (
              h(y((e = a.call.apply(a, [this].concat(r)))), "mounted", !1),
              h(y(e), "state", { image: null }),
              h(y(e), "handleKeyPress", function (t) {
                ("Enter" !== t.key && " " !== t.key) || e.props.onClick();
              }),
              e
            );
          }
          return (
            (t = i),
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this.fetchImage(this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props,
                    r = t.url,
                    n = t.light;
                  (e.url === r && e.light === n) || this.fetchImage(this.props);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "fetchImage",
                value: function (e) {
                  var t = this,
                    r = e.url,
                    n = e.light;
                  if ("string" != typeof n) {
                    if (!b[r])
                      return (
                        this.setState({ image: null }),
                        window
                          .fetch("https://noembed.com/embed?url=".concat(r))
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            if (e.thumbnail_url && t.mounted) {
                              var n = e.thumbnail_url.replace(
                                "height=100",
                                "height=480"
                              );
                              t.setState({ image: n }), (b[r] = n);
                            }
                          })
                      );
                    this.setState({ image: b[r] });
                  } else this.setState({ image: n });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.onClick,
                    r = e.playIcon,
                    n = e.previewTabIndex,
                    a = this.state.image,
                    i = {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    l = {
                      preview: u(
                        {
                          width: "100%",
                          height: "100%",
                          backgroundImage: a ? "url(".concat(a, ")") : void 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          cursor: "pointer",
                        },
                        i
                      ),
                      shadow: u(
                        {
                          background:
                            "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                          borderRadius: v,
                          width: v,
                          height: v,
                        },
                        i
                      ),
                      playIcon: {
                        borderStyle: "solid",
                        borderWidth: "16px 0 16px 26px",
                        borderColor:
                          "transparent transparent transparent white",
                        marginLeft: "7px",
                      },
                    },
                    c = o.default.createElement(
                      "div",
                      { style: l.shadow, className: "react-player__shadow" },
                      o.default.createElement("div", {
                        style: l.playIcon,
                        className: "react-player__play-icon",
                      })
                    );
                  return o.default.createElement(
                    "div",
                    {
                      style: l.preview,
                      className: "react-player__preview",
                      onClick: t,
                      tabIndex: n,
                      onKeyPress: this.handleKeyPress,
                    },
                    r || c
                  );
                },
              },
            ]) && c(t.prototype, r),
            n && c(t, n),
            i
          );
        })(o.Component);
      t.default = m;
    },
    72753: function (e, t, r) {
      "use strict";
      t.e = void 0;
      var n = k(r(67294)),
        o = s(r(95185)),
        a = s(r(49393)),
        i = s(r(32993)),
        u = r(47311),
        l = r(22074),
        c = s(r(20578));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e) {
        return (
          (f =
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
          f(e)
        );
      }
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                S(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function d() {
        return (
          (d =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          d.apply(this, arguments)
        );
      }
      function h(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return v(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return v(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return v(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function b(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function g(e, t) {
        return (
          (g =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          g(e, t)
        );
      }
      function O(e) {
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
          var r,
            n = _(e);
          if (t) {
            var o = _(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return w(this, r);
        };
      }
      function w(e, t) {
        return !t || ("object" !== f(t) && "function" != typeof t) ? P(e) : t;
      }
      function P(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _(e) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          _(e)
        );
      }
      function S(e, t, r) {
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
      function j() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function k(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== f(e) && "function" != typeof e))
          return { default: e };
        var t = j();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, o, a)
              : (r[o] = e[o]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      var T = (0, n.lazy)(function () {
          return Promise.resolve().then(function () {
            return k(r(87312));
          });
        }),
        E = "undefined" != typeof window && window.document,
        A = void 0 !== r.g && r.g.window && r.g.window.document,
        R = Object.keys(u.propTypes),
        I =
          E || A
            ? n.Suspense
            : function () {
                return null;
              },
        C = [];
      t.e = function (e, t) {
        var r, s;
        return (
          (s = r =
            (function (r) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && g(e, t);
              })(w, r);
              var s,
                f,
                p,
                v = O(w);
              function w() {
                var r;
                b(this, w);
                for (
                  var i = arguments.length, s = new Array(i), f = 0;
                  f < i;
                  f++
                )
                  s[f] = arguments[f];
                return (
                  S(P((r = v.call.apply(v, [this].concat(s)))), "state", {
                    showPreview: !!r.props.light,
                  }),
                  S(P(r), "references", {
                    wrapper: function (e) {
                      r.wrapper = e;
                    },
                    player: function (e) {
                      r.player = e;
                    },
                  }),
                  S(P(r), "handleClickPreview", function (e) {
                    r.setState({ showPreview: !1 }), r.props.onClickPreview(e);
                  }),
                  S(P(r), "showPreview", function () {
                    r.setState({ showPreview: !0 });
                  }),
                  S(P(r), "getDuration", function () {
                    return r.player ? r.player.getDuration() : null;
                  }),
                  S(P(r), "getCurrentTime", function () {
                    return r.player ? r.player.getCurrentTime() : null;
                  }),
                  S(P(r), "getSecondsLoaded", function () {
                    return r.player ? r.player.getSecondsLoaded() : null;
                  }),
                  S(P(r), "getInternalPlayer", function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "player";
                    return r.player ? r.player.getInternalPlayer(e) : null;
                  }),
                  S(P(r), "seekTo", function (e, t) {
                    if (!r.player) return null;
                    r.player.seekTo(e, t);
                  }),
                  S(P(r), "handleReady", function () {
                    r.props.onReady(P(r));
                  }),
                  S(
                    P(r),
                    "getActivePlayer",
                    (0, a.default)(function (r) {
                      for (
                        var n = 0, o = [].concat(C, h(e));
                        n < o.length;
                        n++
                      ) {
                        var a = o[n];
                        if (a.canPlay(r)) return a;
                      }
                      return t || null;
                    })
                  ),
                  S(
                    P(r),
                    "getConfig",
                    (0, a.default)(function (e, t) {
                      var n = r.props.config;
                      return o.default.all([
                        u.defaultProps.config,
                        u.defaultProps.config[t] || {},
                        n,
                        n[t] || {},
                      ]);
                    })
                  ),
                  S(
                    P(r),
                    "getAttributes",
                    (0, a.default)(function (e) {
                      return (0, l.omit)(r.props, R);
                    })
                  ),
                  S(P(r), "renderActivePlayer", function (e) {
                    if (!e) return null;
                    var t = r.getActivePlayer(e);
                    if (!t) return null;
                    var o = r.getConfig(e, t.key);
                    return n.default.createElement(
                      c.default,
                      d({}, r.props, {
                        key: t.key,
                        ref: r.references.player,
                        config: o,
                        activePlayer: t.lazyPlayer || t,
                        onReady: r.handleReady,
                      })
                    );
                  }),
                  r
                );
              }
              return (
                (s = w),
                (f = [
                  {
                    key: "shouldComponentUpdate",
                    value: function (e, t) {
                      return (
                        !(0, i.default)(this.props, e) ||
                        !(0, i.default)(this.state, t)
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
                        r = t.light,
                        o = t.playIcon,
                        a = t.previewTabIndex;
                      return n.default.createElement(T, {
                        url: e,
                        light: r,
                        playIcon: o,
                        previewTabIndex: a,
                        onClick: this.handleClickPreview,
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.url,
                        r = e.style,
                        o = e.width,
                        a = e.height,
                        i = e.fallback,
                        u = e.wrapper,
                        l = this.state.showPreview,
                        c = this.getAttributes(t);
                      return n.default.createElement(
                        u,
                        d(
                          {
                            ref: this.references.wrapper,
                            style: y(y({}, r), {}, { width: o, height: a }),
                          },
                          c
                        ),
                        n.default.createElement(
                          I,
                          { fallback: i },
                          l ? this.renderPreview(t) : this.renderActivePlayer(t)
                        )
                      );
                    },
                  },
                ]),
                f && m(s.prototype, f),
                p && m(s, p),
                w
              );
            })(n.Component)),
          S(r, "displayName", "ReactPlayer"),
          S(r, "propTypes", u.propTypes),
          S(r, "defaultProps", u.defaultProps),
          S(r, "addCustomPlayer", function (e) {
            C.push(e);
          }),
          S(r, "removeCustomPlayers", function () {
            C.length = 0;
          }),
          S(r, "canPlay", function (t) {
            for (var r = 0, n = [].concat(C, h(e)); r < n.length; r++) {
              if (n[r].canPlay(t)) return !0;
            }
            return !1;
          }),
          S(r, "canEnablePIP", function (t) {
            for (var r = 0, n = [].concat(C, h(e)); r < n.length; r++) {
              var o = n[r];
              if (o.canEnablePIP && o.canEnablePIP(t)) return !0;
            }
            return !1;
          }),
          s
        );
      };
    },
    8220: function (e, t, r) {
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
      var n = r(22074);
      function o(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return a(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return a(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          u = !0,
          l = !1;
        return {
          s: function () {
            r = e[Symbol.iterator]();
          },
          n: function () {
            var e = r.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (l = !0), (i = e);
          },
          f: function () {
            try {
              u || null == r.return || r.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var i =
        /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
      t.MATCH_URL_YOUTUBE = i;
      var u = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
      t.MATCH_URL_SOUNDCLOUD = u;
      var l = /vimeo\.com\/.+/;
      t.MATCH_URL_VIMEO = l;
      var c =
        /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
      t.MATCH_URL_FACEBOOK = c;
      var s = /^https?:\/\/fb\.watch\/.+$/;
      t.MATCH_URL_FACEBOOK_WATCH = s;
      var f = /streamable\.com\/([a-z0-9]+)$/;
      t.MATCH_URL_STREAMABLE = f;
      var p =
        /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
      t.MATCH_URL_WISTIA = p;
      var y = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
      t.MATCH_URL_TWITCH_VIDEO = y;
      var d = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
      t.MATCH_URL_TWITCH_CHANNEL = d;
      var h =
        /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
      t.MATCH_URL_DAILYMOTION = h;
      var v = /mixcloud\.com\/([^/]+\/[^/]+)/;
      t.MATCH_URL_MIXCLOUD = v;
      var b = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;
      t.MATCH_URL_VIDYARD = b;
      var m =
        /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;
      t.MATCH_URL_KALTURA = m;
      var g =
        /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
      t.AUDIO_EXTENSIONS = g;
      var O = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
      t.VIDEO_EXTENSIONS = O;
      var w = /\.(m3u8)($|\?)/i;
      t.HLS_EXTENSIONS = w;
      var P = /\.(mpd)($|\?)/i;
      t.DASH_EXTENSIONS = P;
      var _ = /\.(flv)($|\?)/i;
      t.FLV_EXTENSIONS = _;
      var S = {
        youtube: function (e) {
          return e instanceof Array
            ? e.every(function (e) {
                return i.test(e);
              })
            : i.test(e);
        },
        soundcloud: function (e) {
          return u.test(e) && !g.test(e);
        },
        vimeo: function (e) {
          return l.test(e) && !O.test(e) && !w.test(e);
        },
        facebook: function (e) {
          return c.test(e) || s.test(e);
        },
        streamable: function (e) {
          return f.test(e);
        },
        wistia: function (e) {
          return p.test(e);
        },
        twitch: function (e) {
          return y.test(e) || d.test(e);
        },
        dailymotion: function (e) {
          return h.test(e);
        },
        mixcloud: function (e) {
          return v.test(e);
        },
        vidyard: function (e) {
          return b.test(e);
        },
        kaltura: function (e) {
          return m.test(e);
        },
        file: function e(t) {
          if (t instanceof Array) {
            var r,
              a = o(t);
            try {
              for (a.s(); !(r = a.n()).done; ) {
                var i = r.value;
                if ("string" == typeof i && e(i)) return !0;
                if (e(i.src)) return !0;
              }
            } catch (u) {
              a.e(u);
            } finally {
              a.f();
            }
            return !1;
          }
          return (
            !(!(0, n.isMediaStream)(t) && !(0, n.isBlobUrl)(t)) ||
            g.test(t) ||
            O.test(t) ||
            w.test(t) ||
            P.test(t) ||
            _.test(t)
          );
        },
      };
      t.canPlay = S;
    },
    78021: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          (n =
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
          n(e)
        );
      }
      t.Z = void 0;
      var o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== n(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, a, i)
                : (r[a] = e[a]);
            }
          (r.default = e), t && t.set(e, r);
          return r;
        })(r(67294)),
        a = r(22074),
        i = r(8220);
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
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
      function p(e) {
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
          var r,
            n = h(e);
          if (t) {
            var o = h(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return y(this, r);
        };
      }
      function y(e, t) {
        return !t || ("object" !== n(t) && "function" != typeof t) ? d(e) : t;
      }
      function d(e) {
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
      function v(e, t, r) {
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
      var b = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && f(e, t);
        })(u, e);
        var t,
          r,
          n,
          i = p(u);
        function u() {
          var e;
          c(this, u);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            v(
              d((e = i.call.apply(i, [this].concat(r)))),
              "callPlayer",
              a.callPlayer
            ),
            v(d(e), "duration", null),
            v(d(e), "currentTime", null),
            v(d(e), "secondsLoaded", null),
            v(d(e), "mute", function () {
              e.setVolume(0);
            }),
            v(d(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            v(d(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (t = u),
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (this.duration = null),
                  (0, a.getSDK)(
                    "https://player.vimeo.com/api/player.js",
                    "Vimeo"
                  ).then(function (r) {
                    t.container &&
                      ((t.player = new r.Player(
                        t.container,
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? l(Object(r), !0).forEach(function (t) {
                                  v(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r)
                                )
                              : l(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            url: e,
                            autoplay: t.props.playing,
                            muted: t.props.muted,
                            loop: t.props.loop,
                            playsinline: t.props.playsinline,
                            controls: t.props.controls,
                          },
                          t.props.config.playerOptions
                        )
                      )),
                      t.player
                        .ready()
                        .then(function () {
                          var e = t.container.querySelector("iframe");
                          (e.style.width = "100%"), (e.style.height = "100%");
                        })
                        .catch(t.props.onError),
                      t.player.on("loaded", function () {
                        t.props.onReady(), t.refreshDuration();
                      }),
                      t.player.on("play", function () {
                        t.props.onPlay(), t.refreshDuration();
                      }),
                      t.player.on("pause", t.props.onPause),
                      t.player.on("seeked", function (e) {
                        return t.props.onSeek(e.seconds);
                      }),
                      t.player.on("ended", t.props.onEnded),
                      t.player.on("error", t.props.onError),
                      t.player.on("timeupdate", function (e) {
                        var r = e.seconds;
                        t.currentTime = r;
                      }),
                      t.player.on("progress", function (e) {
                        var r = e.seconds;
                        t.secondsLoaded = r;
                      }),
                      t.player.on("bufferstart", t.props.onBuffer),
                      t.player.on("bufferend", t.props.onBufferEnd));
                  }, this.props.onError);
              },
            },
            {
              key: "refreshDuration",
              value: function () {
                var e = this;
                this.player.getDuration().then(function (t) {
                  e.duration = t;
                });
              },
            },
            {
              key: "play",
              value: function () {
                var e = this.callPlayer("play");
                e && e.catch(this.props.onError);
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "stop",
              value: function () {
                this.callPlayer("unload");
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.callPlayer("setPlaybackRate", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                var e = {
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  display: this.props.display,
                };
                return o.default.createElement("div", {
                  key: this.props.url,
                  ref: this.ref,
                  style: e,
                });
              },
            },
          ]),
          r && s(t.prototype, r),
          n && s(t, n),
          u
        );
      })(o.Component);
      (t.Z = b),
        v(b, "displayName", "Vimeo"),
        v(b, "canPlay", i.canPlay.vimeo),
        v(b, "forceLoad", !0);
    },
    47311: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultProps = t.propTypes = void 0);
      var n,
        o = (n = r(45697)) && n.__esModule ? n : { default: n };
      var a = o.default.string,
        i = o.default.bool,
        u = o.default.number,
        l = o.default.array,
        c = o.default.oneOfType,
        s = o.default.shape,
        f = o.default.object,
        p = o.default.func,
        y = o.default.node,
        d = {
          url: c([a, l, f]),
          playing: i,
          loop: i,
          controls: i,
          volume: u,
          muted: i,
          playbackRate: u,
          width: c([a, u]),
          height: c([a, u]),
          style: f,
          progressInterval: u,
          playsinline: i,
          pip: i,
          stopOnUnmount: i,
          light: c([i, a]),
          playIcon: y,
          previewTabIndex: u,
          fallback: y,
          wrapper: c([a, p, s({ render: p.isRequired })]),
          config: s({
            soundcloud: s({ options: f }),
            youtube: s({ playerVars: f, embedOptions: f, onUnstarted: p }),
            facebook: s({ appId: a, version: a, playerId: a, attributes: f }),
            dailymotion: s({ params: f }),
            vimeo: s({ playerOptions: f }),
            file: s({
              attributes: f,
              tracks: l,
              forceVideo: i,
              forceAudio: i,
              forceHLS: i,
              forceDASH: i,
              forceFLV: i,
              hlsOptions: f,
              hlsVersion: a,
              dashVersion: a,
              flvVersion: a,
            }),
            wistia: s({ options: f, playerId: a, customControls: l }),
            mixcloud: s({ options: f }),
            twitch: s({ options: f, playerId: a }),
            vidyard: s({ options: f }),
          }),
          onReady: p,
          onStart: p,
          onPlay: p,
          onPause: p,
          onBuffer: p,
          onBufferEnd: p,
          onEnded: p,
          onError: p,
          onDuration: p,
          onSeek: p,
          onProgress: p,
          onClickPreview: p,
          onEnablePIP: p,
          onDisablePIP: p,
        };
      t.propTypes = d;
      var h = function () {},
        v = {
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
              onUnstarted: h,
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
          onReady: h,
          onStart: h,
          onPlay: h,
          onPause: h,
          onBuffer: h,
          onBufferEnd: h,
          onEnded: h,
          onError: h,
          onDuration: h,
          onSeek: h,
          onProgress: h,
          onClickPreview: h,
          onEnablePIP: h,
          onDisablePIP: h,
        };
      t.defaultProps = v;
    },
    22074: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseStartTime = function (e) {
          return p(e, l);
        }),
        (t.parseEndTime = function (e) {
          return p(e, c);
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
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    return !0;
                  },
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : n.default,
            i = y(t);
          if (i && o(i)) return Promise.resolve(i);
          return new Promise(function (n, o) {
            if (d[e]) d[e].push({ resolve: n, reject: o });
            else {
              d[e] = [{ resolve: n, reject: o }];
              var i = function (t) {
                d[e].forEach(function (e) {
                  return e.resolve(t);
                });
              };
              if (r) {
                var u = window[r];
                window[r] = function () {
                  u && u(), i(y(t));
                };
              }
              a(e, function (n) {
                n
                  ? (d[e].forEach(function (e) {
                      return e.reject(n);
                    }),
                    (d[e] = null))
                  : r || i(y(t));
              });
            }
          });
        }),
        (t.getConfig = function (e, t) {
          return (0, o.default)(t.config, e.config);
        }),
        (t.omit = function (e) {
          for (
            var t,
              r = arguments.length,
              n = new Array(r > 1 ? r - 1 : 0),
              o = 1;
            o < r;
            o++
          )
            n[o - 1] = arguments[o];
          for (
            var a = (t = []).concat.apply(t, n),
              i = {},
              u = Object.keys(e),
              l = 0,
              c = u;
            l < c.length;
            l++
          ) {
            var s = c[l];
            -1 === a.indexOf(s) && (i[s] = e[s]);
          }
          return i;
        }),
        (t.callPlayer = function (e) {
          var t;
          if (!this.player || !this.player[e]) {
            var r = "ReactPlayer: "
              .concat(this.constructor.displayName, " player could not call %c")
              .concat(e, "%c – ");
            return (
              this.player
                ? this.player[e] || (r += "The method was not available")
                : (r += "The player was not available"),
              console.warn(r, "font-weight: bold", ""),
              null
            );
          }
          for (
            var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            o[a - 1] = arguments[a];
          return (t = this.player)[e].apply(t, o);
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
      var n = a(r(49586)),
        o = a(r(95185));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var r = [],
              n = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, u = e[Symbol.iterator]();
                !(n = (i = u.next()).done) &&
                (r.push(i.value), !t || r.length !== t);
                n = !0
              );
            } catch (l) {
              (o = !0), (a = l);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (o) throw a;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return u(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return u(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var l = /[?&#](?:start|t)=([0-9hms]+)/,
        c = /[?&#]end=([0-9hms]+)/,
        s = /(\d+)(h|m|s)/g,
        f = /^\d+$/;
      function p(e, t) {
        if (!(e instanceof Array)) {
          var r = e.match(t);
          if (r) {
            var n = r[1];
            if (n.match(s))
              return (function (e) {
                var t = 0,
                  r = s.exec(e);
                for (; null !== r; ) {
                  var n = i(r, 3),
                    o = n[1],
                    a = n[2];
                  "h" === a && (t += 60 * parseInt(o, 10) * 60),
                    "m" === a && (t += 60 * parseInt(o, 10)),
                    "s" === a && (t += parseInt(o, 10)),
                    (r = s.exec(e));
                }
                return t;
              })(n);
            if (f.test(n)) return parseInt(n);
          }
        }
      }
      function y(e) {
        return window[e]
          ? window[e]
          : window.exports && window.exports[e]
          ? window.exports[e]
          : window.module && window.module.exports && window.module.exports[e]
          ? window.module.exports[e]
          : null;
      }
      var d = {};
    },
    92005: function (e, t, r) {
      var n = r(72753).e,
        o = r(78021).Z;
      e.exports = n([{ key: "vimeo", canPlay: o.canPlay, lazyPlayer: o }]);
    },
  },
]);
//# sourceMappingURL=e31ca348378c5e2972b92770f8e016cd67a393be-e32ed053453f4736fbfb.js.map
