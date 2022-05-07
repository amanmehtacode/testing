"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [461],
  {
    2346: function (e, t, n) {
      n.d(t, {
        le: function () {
          return vt;
        },
        aD: function () {
          return kt;
        },
        jQ: function () {
          return Mt;
        },
        Gf: function () {
          return Ut;
        },
        rC: function () {
          return un;
        },
        LO: function () {
          return xe;
        },
        z: function () {
          return Pt;
        },
      });
      n(65743);
      function r(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw new Error(
          "number" == typeof e
            ? "[MobX] minified error nr: " +
              e +
              (n.length ? " " + n.map(String).join(",") : "") +
              ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
            : "[MobX] " + e
        );
      }
      var i = {};
      function o() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== n.g
          ? n.g
          : "undefined" != typeof self
          ? self
          : i;
      }
      var a = Object.assign,
        s = Object.getOwnPropertyDescriptor,
        u = Object.defineProperty,
        c = Object.prototype,
        l = [];
      Object.freeze(l);
      var h = {};
      Object.freeze(h);
      var _ = "undefined" != typeof Proxy,
        f = Object.toString();
      function v() {
        _ || r("Proxy not available");
      }
      function d(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var p = function () {};
      function b(e) {
        return "function" == typeof e;
      }
      function g(e) {
        switch (typeof e) {
          case "string":
          case "symbol":
          case "number":
            return !0;
        }
        return !1;
      }
      function y(e) {
        return null !== e && "object" == typeof e;
      }
      function m(e) {
        var t;
        if (!y(e)) return !1;
        var n = Object.getPrototypeOf(e);
        return (
          null == n ||
          (null == (t = n.constructor) ? void 0 : t.toString()) === f
        );
      }
      function O(e) {
        var t = null == e ? void 0 : e.constructor;
        return (
          !!t &&
          ("GeneratorFunction" === t.name ||
            "GeneratorFunction" === t.displayName)
        );
      }
      function A(e, t, n) {
        u(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
      }
      function w(e, t, n) {
        u(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
      }
      function S(e, t) {
        var n = "isMobX" + e;
        return (
          (t.prototype[n] = !0),
          function (e) {
            return y(e) && !0 === e[n];
          }
        );
      }
      function x(e) {
        return e instanceof Map;
      }
      function j(e) {
        return e instanceof Set;
      }
      var k = void 0 !== Object.getOwnPropertySymbols;
      var E =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : k
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : Object.getOwnPropertyNames;
      function P(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      function T(e, t) {
        return c.hasOwnProperty.call(e, t);
      }
      var V =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            E(e).forEach(function (n) {
              t[n] = s(e, n);
            }),
            t
          );
        };
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function N(e, t, n) {
        return t && C(e.prototype, t), n && C(e, n), e;
      }
      function D() {
        return (
          (D =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          D.apply(this, arguments)
        );
      }
      function R(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function L(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function B(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function M(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return B(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? B(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0;
            return function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      var I = Symbol("mobx-stored-annotations");
      function U(e) {
        return Object.assign(function (t, n) {
          K(t, n, e);
        }, e);
      }
      function K(e, t, n) {
        T(e, I) || A(e, I, D({}, e[I])),
          (function (e) {
            return e.annotationType_ === Y;
          })(n) || (e[I][t] = n);
      }
      var G = Symbol("mobx administration"),
        q = (function () {
          function e(e) {
            void 0 === e && (e = "Atom"),
              (this.name_ = void 0),
              (this.isPendingUnobservation_ = !1),
              (this.isBeingObserved_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = Ke.NOT_TRACKING_),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              (this.name_ = e);
          }
          var t = e.prototype;
          return (
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.reportObserved = function () {
              return _t(this);
            }),
            (t.reportChanged = function () {
              lt(), ft(this), ht();
            }),
            (t.toString = function () {
              return this.name_;
            }),
            e
          );
        })(),
        H = S("Atom", q);
      function z(e, t, n) {
        void 0 === t && (t = p), void 0 === n && (n = p);
        var r,
          i = new q(e);
        return t !== p && Lt(Dt, i, t, r), n !== p && Rt(i, n), i;
      }
      var W = {
        identity: function (e, t) {
          return e === t;
        },
        structural: function (e, t) {
          return er(e, t);
        },
        default: function (e, t) {
          return Object.is
            ? Object.is(e, t)
            : e === t
            ? 0 !== e || 1 / e == 1 / t
            : e != e && t != t;
        },
        shallow: function (e, t) {
          return er(e, t, 1);
        },
      };
      function X(e, t, n) {
        return Jt(e)
          ? e
          : Array.isArray(e)
          ? xe.array(e, { name: n })
          : m(e)
          ? xe.object(e, void 0, { name: n })
          : x(e)
          ? xe.map(e, { name: n })
          : j(e)
          ? xe.set(e, { name: n })
          : "function" != typeof e || Tt(e) || Ft(e)
          ? e
          : O(e)
          ? Wt(e)
          : Et(n, e);
      }
      function F(e) {
        return e;
      }
      var Y = "override";
      function J(e, t) {
        return { annotationType_: e, options_: t, make_: $, extend_: Q };
      }
      function $(e, t, n, r) {
        var i;
        if (null == (i = this.options_) ? void 0 : i.bound)
          return null === this.extend_(e, t, n, !1) ? 0 : 1;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (Tt(n.value)) return 1;
        var o = Z(e, this, t, n, !1);
        return u(r, t, o), 2;
      }
      function Q(e, t, n, r) {
        var i = Z(e, this, t, n);
        return e.defineProperty_(t, i, r);
      }
      function Z(e, t, n, r, i) {
        var o, a, s, u, c, l, h, _;
        void 0 === i && (i = at.safeDescriptors),
          (_ = r),
          t.annotationType_,
          _.value;
        var f,
          v = r.value;
        (null == (o = t.options_) ? void 0 : o.bound) &&
          (v = v.bind(null != (f = e.proxy_) ? f : e.target_));
        return {
          value: Re(
            null != (a = null == (s = t.options_) ? void 0 : s.name)
              ? a
              : n.toString(),
            v,
            null != (u = null == (c = t.options_) ? void 0 : c.autoAction) && u,
            (null == (l = t.options_) ? void 0 : l.bound)
              ? null != (h = e.proxy_)
                ? h
                : e.target_
              : void 0
          ),
          configurable: !i || e.isPlainObject_,
          enumerable: !1,
          writable: !i,
        };
      }
      function ee(e, t) {
        return { annotationType_: e, options_: t, make_: te, extend_: ne };
      }
      function te(e, t, n, r) {
        var i;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (
          (null == (i = this.options_) ? void 0 : i.bound) &&
          !Ft(e.target_[t]) &&
          null === this.extend_(e, t, n, !1)
        )
          return 0;
        if (Ft(n.value)) return 1;
        var o = re(e, this, t, n, !1, !1);
        return u(r, t, o), 2;
      }
      function ne(e, t, n, r) {
        var i,
          o = re(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
        return e.defineProperty_(t, o, r);
      }
      function re(e, t, n, r, i, o) {
        var a;
        void 0 === o && (o = at.safeDescriptors),
          (a = r),
          t.annotationType_,
          a.value;
        var s,
          u = r.value;
        i && (u = u.bind(null != (s = e.proxy_) ? s : e.target_));
        return {
          value: Wt(u),
          configurable: !o || e.isPlainObject_,
          enumerable: !1,
          writable: !o,
        };
      }
      function ie(e, t) {
        return { annotationType_: e, options_: t, make_: oe, extend_: ae };
      }
      function oe(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function ae(e, t, n, r) {
        return (
          (function (e, t, n, r) {
            t.annotationType_, r.get;
            0;
          })(0, this, 0, n),
          e.defineComputedProperty_(
            t,
            D({}, this.options_, { get: n.get, set: n.set }),
            r
          )
        );
      }
      function se(e, t) {
        return { annotationType_: e, options_: t, make_: ue, extend_: ce };
      }
      function ue(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function ce(e, t, n, r) {
        var i, o;
        return (
          (function (e, t, n, r) {
            t.annotationType_;
            0;
          })(0, this),
          e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer)
              ? i
              : X,
            r
          )
        );
      }
      var le = he();
      function he(e) {
        return { annotationType_: "true", options_: e, make_: _e, extend_: fe };
      }
      function _e(e, t, n, r) {
        var i, o, a, s;
        if (n.get) return Pe.make_(e, t, n, r);
        if (n.set) {
          var c = Re(t.toString(), n.set);
          return r === e.target_
            ? null ===
              e.defineProperty_(t, {
                configurable: !at.safeDescriptors || e.isPlainObject_,
                set: c,
              })
              ? 0
              : 2
            : (u(r, t, { configurable: !0, set: c }), 2);
        }
        if (r !== e.target_ && "function" == typeof n.value)
          return O(n.value)
            ? ((null == (s = this.options_) ? void 0 : s.autoBind)
                ? Wt.bound
                : Wt
              ).make_(e, t, n, r)
            : ((null == (a = this.options_) ? void 0 : a.autoBind)
                ? Et.bound
                : Et
              ).make_(e, t, n, r);
        var l,
          h =
            !1 === (null == (i = this.options_) ? void 0 : i.deep)
              ? xe.ref
              : xe;
        "function" == typeof n.value &&
          (null == (o = this.options_) ? void 0 : o.autoBind) &&
          (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
        return h.make_(e, t, n, r);
      }
      function fe(e, t, n, r) {
        var i, o, a;
        if (n.get) return Pe.extend_(e, t, n, r);
        if (n.set)
          return e.defineProperty_(
            t,
            {
              configurable: !at.safeDescriptors || e.isPlainObject_,
              set: Re(t.toString(), n.set),
            },
            r
          );
        "function" == typeof n.value &&
          (null == (i = this.options_) ? void 0 : i.autoBind) &&
          (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
        return (
          !1 === (null == (o = this.options_) ? void 0 : o.deep) ? xe.ref : xe
        ).extend_(e, t, n, r);
      }
      var ve = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function de(e) {
        return e || ve;
      }
      Object.freeze(ve);
      var pe = se("observable"),
        be = se("observable.ref", { enhancer: F }),
        ge = se("observable.shallow", {
          enhancer: function (e, t, n) {
            return null == e || In(e) || An(e) || Pn(e) || Cn(e)
              ? e
              : Array.isArray(e)
              ? xe.array(e, { name: n, deep: !1 })
              : m(e)
              ? xe.object(e, void 0, { name: n, deep: !1 })
              : x(e)
              ? xe.map(e, { name: n, deep: !1 })
              : j(e)
              ? xe.set(e, { name: n, deep: !1 })
              : void 0;
          },
        }),
        ye = se("observable.struct", {
          enhancer: function (e, t) {
            return er(e, t) ? t : e;
          },
        }),
        me = U(pe);
      function Oe(e) {
        return !0 === e.deep
          ? X
          : !1 === e.deep
          ? F
          : (t = e.defaultDecorator) &&
            null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
          ? n
          : X;
        var t, n, r;
      }
      function Ae(e, t, n) {
        if (!g(t))
          return Jt(e)
            ? e
            : m(e)
            ? xe.object(e, t, n)
            : Array.isArray(e)
            ? xe.array(e, t)
            : x(e)
            ? xe.map(e, t)
            : j(e)
            ? xe.set(e, t)
            : "object" == typeof e && null !== e
            ? e
            : xe.box(e, t);
        K(e, t, pe);
      }
      Object.assign(Ae, me);
      var we,
        Se,
        xe = a(Ae, {
          box: function (e, t) {
            var n = de(t);
            return new Ue(e, Oe(n), n.name, !0, n.equals);
          },
          array: function (e, t) {
            var n = de(t);
            return (!1 === at.useProxies || !1 === n.proxy ? Yn : fn)(
              e,
              Oe(n),
              n.name
            );
          },
          map: function (e, t) {
            var n = de(t);
            return new En(e, Oe(n), n.name);
          },
          set: function (e, t) {
            var n = de(t);
            return new Vn(e, Oe(n), n.name);
          },
          object: function (e, t, n) {
            return It(
              !1 === at.useProxies || !1 === (null == n ? void 0 : n.proxy)
                ? Ln({}, n)
                : (function (e, t) {
                    var n, r;
                    return (
                      v(),
                      (e = Ln(e, t)),
                      null != (r = (n = e[G]).proxy_)
                        ? r
                        : (n.proxy_ = new Proxy(e, en))
                    );
                  })({}, n),
              e,
              t
            );
          },
          ref: U(be),
          shallow: U(ge),
          deep: me,
          struct: U(ye),
        }),
        je = "computed",
        ke = ie(je),
        Ee = ie("computed.struct", { equals: W.structural }),
        Pe = function (e, t) {
          if (g(t)) return K(e, t, ke);
          if (m(e)) return U(ie(je, e));
          var n = m(t) ? t : {};
          return (n.get = e), n.name || (n.name = e.name || ""), new qe(n);
        };
      Object.assign(Pe, ke), (Pe.struct = U(Ee));
      var Te,
        Ve = 0,
        Ce = 1,
        Ne =
          null !=
            (we =
              null == (Se = s(function () {}, "name"))
                ? void 0
                : Se.configurable) && we,
        De = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function Re(e, t, n, r) {
        function i() {
          return Le(e, n, t, r || this, arguments);
        }
        return (
          void 0 === n && (n = !1),
          (i.isMobxAction = !0),
          Ne && ((De.value = e), Object.defineProperty(i, "name", De)),
          i
        );
      }
      function Le(e, t, n, i, o) {
        var a = (function (e, t, n, r) {
          var i = !1,
            o = 0;
          0;
          var a = at.trackingDerivation,
            s = !t || !a;
          lt();
          var u = at.allowStateChanges;
          s && (Qe(), (u = Be(!0)));
          var c = et(!0),
            l = {
              runAsAction_: s,
              prevDerivation_: a,
              prevAllowStateChanges_: u,
              prevAllowStateReads_: c,
              notifySpy_: i,
              startTime_: o,
              actionId_: Ce++,
              parentActionId_: Ve,
            };
          return (Ve = l.actionId_), l;
        })(0, t);
        try {
          return n.apply(i, o);
        } catch (s) {
          throw ((a.error_ = s), s);
        } finally {
          !(function (e) {
            Ve !== e.actionId_ && r(30);
            (Ve = e.parentActionId_),
              void 0 !== e.error_ && (at.suppressReactionErrors = !0);
            Me(e.prevAllowStateChanges_),
              tt(e.prevAllowStateReads_),
              ht(),
              e.runAsAction_ && Ze(e.prevDerivation_);
            0;
            at.suppressReactionErrors = !1;
          })(a);
        }
      }
      function Be(e) {
        var t = at.allowStateChanges;
        return (at.allowStateChanges = e), t;
      }
      function Me(e) {
        at.allowStateChanges = e;
      }
      Te = Symbol.toPrimitive;
      var Ie,
        Ue = (function (e) {
          function t(t, n, r, i, o) {
            var a;
            return (
              void 0 === r && (r = "ObservableValue"),
              void 0 === i && (i = !0),
              void 0 === o && (o = W.default),
              ((a = e.call(this, r) || this).enhancer = void 0),
              (a.name_ = void 0),
              (a.equals = void 0),
              (a.hasUnreportedChange_ = !1),
              (a.interceptors_ = void 0),
              (a.changeListeners_ = void 0),
              (a.value_ = void 0),
              (a.dehancer = void 0),
              (a.enhancer = n),
              (a.name_ = r),
              (a.equals = o),
              (a.value_ = n(t, void 0, r)),
              a
            );
          }
          R(t, e);
          var n = t.prototype;
          return (
            (n.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
              this.value_;
              if ((e = this.prepareNewValue_(e)) !== at.UNCHANGED) {
                0, this.setNewValue_(e);
              }
            }),
            (n.prepareNewValue_ = function (e) {
              if ((Fe(this), tn(this))) {
                var t = rn(this, { object: this, type: ln, newValue: e });
                if (!t) return at.UNCHANGED;
                e = t.newValue;
              }
              return (
                (e = this.enhancer(e, this.value_, this.name_)),
                this.equals(this.value_, e) ? at.UNCHANGED : e
              );
            }),
            (n.setNewValue_ = function (e) {
              var t = this.value_;
              (this.value_ = e),
                this.reportChanged(),
                on(this) &&
                  sn(this, {
                    type: ln,
                    object: this,
                    newValue: e,
                    oldValue: t,
                  });
            }),
            (n.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value_);
            }),
            (n.intercept_ = function (e) {
              return nn(this, e);
            }),
            (n.observe_ = function (e, t) {
              return (
                t &&
                  e({
                    observableKind: "value",
                    debugObjectName: this.name_,
                    object: this,
                    type: ln,
                    newValue: this.value_,
                    oldValue: void 0,
                  }),
                an(this, e)
              );
            }),
            (n.raw = function () {
              return this.value_;
            }),
            (n.toJSON = function () {
              return this.get();
            }),
            (n.toString = function () {
              return this.name_ + "[" + this.value_ + "]";
            }),
            (n.valueOf = function () {
              return P(this.get());
            }),
            (n[Te] = function () {
              return this.valueOf();
            }),
            t
          );
        })(q);
      Ie = Symbol.toPrimitive;
      var Ke,
        Ge,
        qe = (function () {
          function e(e) {
            (this.dependenciesState_ = Ke.NOT_TRACKING_),
              (this.observing_ = []),
              (this.newObserving_ = null),
              (this.isBeingObserved_ = !1),
              (this.isPendingUnobservation_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.runId_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = Ke.UP_TO_DATE_),
              (this.unboundDepsCount_ = 0),
              (this.value_ = new ze(null)),
              (this.name_ = void 0),
              (this.triggeredBy_ = void 0),
              (this.isComputing_ = !1),
              (this.isRunningSetter_ = !1),
              (this.derivation = void 0),
              (this.setter_ = void 0),
              (this.isTracing_ = Ge.NONE),
              (this.scope_ = void 0),
              (this.equals_ = void 0),
              (this.requiresReaction_ = void 0),
              (this.keepAlive_ = void 0),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              e.get || r(31),
              (this.derivation = e.get),
              (this.name_ = e.name || "ComputedValue"),
              e.set && (this.setter_ = Re("ComputedValue-setter", e.set)),
              (this.equals_ =
                e.equals ||
                (e.compareStructural || e.struct ? W.structural : W.default)),
              (this.scope_ = e.context),
              (this.requiresReaction_ = !!e.requiresReaction),
              (this.keepAlive_ = !!e.keepAlive);
          }
          var t = e.prototype;
          return (
            (t.onBecomeStale_ = function () {
              !(function (e) {
                if (e.lowestObserverState_ !== Ke.UP_TO_DATE_) return;
                (e.lowestObserverState_ = Ke.POSSIBLY_STALE_),
                  e.observers_.forEach(function (e) {
                    e.dependenciesState_ === Ke.UP_TO_DATE_ &&
                      ((e.dependenciesState_ = Ke.POSSIBLY_STALE_),
                      e.onBecomeStale_());
                  });
              })(this);
            }),
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.get = function () {
              if (
                (this.isComputing_ && r(32, this.name_, this.derivation),
                0 !== at.inBatch ||
                  0 !== this.observers_.size ||
                  this.keepAlive_)
              ) {
                if ((_t(this), Xe(this))) {
                  var e = at.trackingContext;
                  this.keepAlive_ && !e && (at.trackingContext = this),
                    this.trackAndCompute() &&
                      (function (e) {
                        if (e.lowestObserverState_ === Ke.STALE_) return;
                        (e.lowestObserverState_ = Ke.STALE_),
                          e.observers_.forEach(function (t) {
                            t.dependenciesState_ === Ke.POSSIBLY_STALE_
                              ? (t.dependenciesState_ = Ke.STALE_)
                              : t.dependenciesState_ === Ke.UP_TO_DATE_ &&
                                (e.lowestObserverState_ = Ke.UP_TO_DATE_);
                          });
                      })(this),
                    (at.trackingContext = e);
                }
              } else
                Xe(this) &&
                  (this.warnAboutUntrackedRead_(),
                  lt(),
                  (this.value_ = this.computeValue_(!1)),
                  ht());
              var t = this.value_;
              if (We(t)) throw t.cause;
              return t;
            }),
            (t.set = function (e) {
              if (this.setter_) {
                this.isRunningSetter_ && r(33, this.name_),
                  (this.isRunningSetter_ = !0);
                try {
                  this.setter_.call(this.scope_, e);
                } finally {
                  this.isRunningSetter_ = !1;
                }
              } else r(34, this.name_);
            }),
            (t.trackAndCompute = function () {
              var e = this.value_,
                t = this.dependenciesState_ === Ke.NOT_TRACKING_,
                n = this.computeValue_(!0),
                r = t || We(e) || We(n) || !this.equals_(e, n);
              return r && (this.value_ = n), r;
            }),
            (t.computeValue_ = function (e) {
              this.isComputing_ = !0;
              var t,
                n = Be(!1);
              if (e) t = Ye(this, this.derivation, this.scope_);
              else if (!0 === at.disableErrorBoundaries)
                t = this.derivation.call(this.scope_);
              else
                try {
                  t = this.derivation.call(this.scope_);
                } catch (r) {
                  t = new ze(r);
                }
              return Me(n), (this.isComputing_ = !1), t;
            }),
            (t.suspend_ = function () {
              this.keepAlive_ || (Je(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
              var n = this,
                r = !0,
                i = void 0;
              return Vt(function () {
                var o = n.get();
                if (!r || t) {
                  var a = Qe();
                  e({
                    observableKind: "computed",
                    debugObjectName: n.name_,
                    type: ln,
                    object: n,
                    newValue: o,
                    oldValue: i,
                  }),
                    Ze(a);
                }
                (r = !1), (i = o);
              });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
              return this.name_ + "[" + this.derivation.toString() + "]";
            }),
            (t.valueOf = function () {
              return P(this.get());
            }),
            (t[Ie] = function () {
              return this.valueOf();
            }),
            e
          );
        })(),
        He = S("ComputedValue", qe);
      !(function (e) {
        (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
          (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
          (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
          (e[(e.STALE_ = 2)] = "STALE_");
      })(Ke || (Ke = {})),
        (function (e) {
          (e[(e.NONE = 0)] = "NONE"),
            (e[(e.LOG = 1)] = "LOG"),
            (e[(e.BREAK = 2)] = "BREAK");
        })(Ge || (Ge = {}));
      var ze = function (e) {
        (this.cause = void 0), (this.cause = e);
      };
      function We(e) {
        return e instanceof ze;
      }
      function Xe(e) {
        switch (e.dependenciesState_) {
          case Ke.UP_TO_DATE_:
            return !1;
          case Ke.NOT_TRACKING_:
          case Ke.STALE_:
            return !0;
          case Ke.POSSIBLY_STALE_:
            for (
              var t = et(!0), n = Qe(), r = e.observing_, i = r.length, o = 0;
              o < i;
              o++
            ) {
              var a = r[o];
              if (He(a)) {
                if (at.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (s) {
                    return Ze(n), tt(t), !0;
                  }
                if (e.dependenciesState_ === Ke.STALE_) return Ze(n), tt(t), !0;
              }
            }
            return nt(e), Ze(n), tt(t), !1;
        }
      }
      function Fe(e) {}
      function Ye(e, t, n) {
        var r = et(!0);
        nt(e),
          (e.newObserving_ = new Array(e.observing_.length + 100)),
          (e.unboundDepsCount_ = 0),
          (e.runId_ = ++at.runId);
        var i,
          o = at.trackingDerivation;
        if (
          ((at.trackingDerivation = e),
          at.inBatch++,
          !0 === at.disableErrorBoundaries)
        )
          i = t.call(n);
        else
          try {
            i = t.call(n);
          } catch (a) {
            i = new ze(a);
          }
        return (
          at.inBatch--,
          (at.trackingDerivation = o),
          (function (e) {
            for (
              var t = e.observing_,
                n = (e.observing_ = e.newObserving_),
                r = Ke.UP_TO_DATE_,
                i = 0,
                o = e.unboundDepsCount_,
                a = 0;
              a < o;
              a++
            ) {
              var s = n[a];
              0 === s.diffValue_ &&
                ((s.diffValue_ = 1), i !== a && (n[i] = s), i++),
                s.dependenciesState_ > r && (r = s.dependenciesState_);
            }
            (n.length = i), (e.newObserving_ = null), (o = t.length);
            for (; o--; ) {
              var u = t[o];
              0 === u.diffValue_ && ut(u, e), (u.diffValue_ = 0);
            }
            for (; i--; ) {
              var c = n[i];
              1 === c.diffValue_ && ((c.diffValue_ = 0), st(c, e));
            }
            r !== Ke.UP_TO_DATE_ &&
              ((e.dependenciesState_ = r), e.onBecomeStale_());
          })(e),
          tt(r),
          i
        );
      }
      function Je(e) {
        var t = e.observing_;
        e.observing_ = [];
        for (var n = t.length; n--; ) ut(t[n], e);
        e.dependenciesState_ = Ke.NOT_TRACKING_;
      }
      function $e(e) {
        var t = Qe();
        try {
          return e();
        } finally {
          Ze(t);
        }
      }
      function Qe() {
        var e = at.trackingDerivation;
        return (at.trackingDerivation = null), e;
      }
      function Ze(e) {
        at.trackingDerivation = e;
      }
      function et(e) {
        var t = at.allowStateReads;
        return (at.allowStateReads = e), t;
      }
      function tt(e) {
        at.allowStateReads = e;
      }
      function nt(e) {
        if (e.dependenciesState_ !== Ke.UP_TO_DATE_) {
          e.dependenciesState_ = Ke.UP_TO_DATE_;
          for (var t = e.observing_, n = t.length; n--; )
            t[n].lowestObserverState_ = Ke.UP_TO_DATE_;
        }
      }
      var rt = function () {
          (this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0);
        },
        it = !0,
        ot = !1,
        at = (function () {
          var e = o();
          return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (it = !1),
            e.__mobxGlobals &&
              e.__mobxGlobals.version !== new rt().version &&
              (it = !1),
            it
              ? e.__mobxGlobals
                ? ((e.__mobxInstanceCount += 1),
                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                  e.__mobxGlobals)
                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new rt()))
              : (setTimeout(function () {
                  ot || r(35);
                }, 1),
                new rt())
          );
        })();
      function st(e, t) {
        e.observers_.add(t),
          e.lowestObserverState_ > t.dependenciesState_ &&
            (e.lowestObserverState_ = t.dependenciesState_);
      }
      function ut(e, t) {
        e.observers_.delete(t), 0 === e.observers_.size && ct(e);
      }
      function ct(e) {
        !1 === e.isPendingUnobservation_ &&
          ((e.isPendingUnobservation_ = !0), at.pendingUnobservations.push(e));
      }
      function lt() {
        at.inBatch++;
      }
      function ht() {
        if (0 == --at.inBatch) {
          pt();
          for (var e = at.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation_ = !1),
              0 === n.observers_.size &&
                (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
                n instanceof qe && n.suspend_());
          }
          at.pendingUnobservations = [];
        }
      }
      function _t(e) {
        var t = at.trackingDerivation;
        return null !== t
          ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ &&
                at.trackingContext &&
                ((e.isBeingObserved_ = !0), e.onBO())),
            !0)
          : (0 === e.observers_.size && at.inBatch > 0 && ct(e), !1);
      }
      function ft(e) {
        e.lowestObserverState_ !== Ke.STALE_ &&
          ((e.lowestObserverState_ = Ke.STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === Ke.UP_TO_DATE_ && e.onBecomeStale_(),
              (e.dependenciesState_ = Ke.STALE_);
          }));
      }
      var vt = (function () {
        function e(e, t, n, r) {
          void 0 === e && (e = "Reaction"),
            void 0 === r && (r = !1),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = Ke.NOT_TRACKING_),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.isDisposed_ = !1),
            (this.isScheduled_ = !1),
            (this.isTrackPending_ = !1),
            (this.isRunning_ = !1),
            (this.isTracing_ = Ge.NONE),
            (this.name_ = e),
            (this.onInvalidate_ = t),
            (this.errorHandler_ = n),
            (this.requiresObservable_ = r);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            this.schedule_();
          }),
          (t.schedule_ = function () {
            this.isScheduled_ ||
              ((this.isScheduled_ = !0), at.pendingReactions.push(this), pt());
          }),
          (t.isScheduled = function () {
            return this.isScheduled_;
          }),
          (t.runReaction_ = function () {
            if (!this.isDisposed_) {
              lt(), (this.isScheduled_ = !1);
              var e = at.trackingContext;
              if (((at.trackingContext = this), Xe(this))) {
                this.isTrackPending_ = !0;
                try {
                  this.onInvalidate_();
                } catch (t) {
                  this.reportExceptionInDerivation_(t);
                }
              }
              (at.trackingContext = e), ht();
            }
          }),
          (t.track = function (e) {
            if (!this.isDisposed_) {
              lt();
              0, (this.isRunning_ = !0);
              var t = at.trackingContext;
              at.trackingContext = this;
              var n = Ye(this, e, void 0);
              (at.trackingContext = t),
                (this.isRunning_ = !1),
                (this.isTrackPending_ = !1),
                this.isDisposed_ && Je(this),
                We(n) && this.reportExceptionInDerivation_(n.cause),
                ht();
            }
          }),
          (t.reportExceptionInDerivation_ = function (e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
              if (at.disableErrorBoundaries) throw e;
              var n = "[mobx] uncaught error in '" + this + "'";
              at.suppressReactionErrors || console.error(n, e),
                at.globalReactionErrorHandlers.forEach(function (n) {
                  return n(e, t);
                });
            }
          }),
          (t.dispose = function () {
            this.isDisposed_ ||
              ((this.isDisposed_ = !0),
              this.isRunning_ || (lt(), Je(this), ht()));
          }),
          (t.getDisposer_ = function () {
            var e = this.dispose.bind(this);
            return (e[G] = this), e;
          }),
          (t.toString = function () {
            return "Reaction[" + this.name_ + "]";
          }),
          (t.trace = function (e) {
            void 0 === e && (e = !1),
              (function () {
                r("trace() is not available in production builds");
                for (
                  var e = !1, t = arguments.length, n = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  n[i] = arguments[i];
                "boolean" == typeof n[n.length - 1] && (e = n.pop());
                var o = $t(n);
                if (!o)
                  return r(
                    "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly"
                  );
                o.isTracing_ === Ge.NONE &&
                  console.log("[mobx.trace] '" + o.name_ + "' tracing enabled");
                o.isTracing_ = e ? Ge.BREAK : Ge.LOG;
              })(this, e);
          }),
          e
        );
      })();
      var dt = function (e) {
        return e();
      };
      function pt() {
        at.inBatch > 0 || at.isRunningReactions || dt(bt);
      }
      function bt() {
        at.isRunningReactions = !0;
        for (var e = at.pendingReactions, t = 0; e.length > 0; ) {
          100 == ++t &&
            (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
          for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
            n[r].runReaction_();
        }
        at.isRunningReactions = !1;
      }
      var gt = S("Reaction", vt);
      var yt = "action",
        mt = "autoAction",
        Ot = "<unnamed action>",
        At = J(yt),
        wt = J("action.bound", { bound: !0 }),
        St = J(mt, { autoAction: !0 }),
        xt = J("autoAction.bound", { autoAction: !0, bound: !0 });
      function jt(e) {
        return function (t, n) {
          return b(t)
            ? Re(t.name || Ot, t, e)
            : b(n)
            ? Re(t, n, e)
            : g(n)
            ? K(t, n, e ? St : At)
            : g(t)
            ? U(J(e ? mt : yt, { name: t, autoAction: e }))
            : void 0;
        };
      }
      var kt = jt(!1);
      Object.assign(kt, At);
      var Et = jt(!0);
      function Pt(e) {
        return Le(e.name, !1, e, this, void 0);
      }
      function Tt(e) {
        return b(e) && !0 === e.isMobxAction;
      }
      function Vt(e, t) {
        var n, r;
        void 0 === t && (t = h);
        var i,
          o = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
        if (!t.scheduler && !t.delay)
          i = new vt(
            o,
            function () {
              this.track(u);
            },
            t.onError,
            t.requiresObservable
          );
        else {
          var a = Nt(t),
            s = !1;
          i = new vt(
            o,
            function () {
              s ||
                ((s = !0),
                a(function () {
                  (s = !1), i.isDisposed_ || i.track(u);
                }));
            },
            t.onError,
            t.requiresObservable
          );
        }
        function u() {
          e(i);
        }
        return i.schedule_(), i.getDisposer_();
      }
      Object.assign(Et, St), (kt.bound = U(wt)), (Et.bound = U(xt));
      var Ct = function (e) {
        return e();
      };
      function Nt(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
          ? function (t) {
              return setTimeout(t, e.delay);
            }
          : Ct;
      }
      var Dt = "onBO";
      function Rt(e, t, n) {
        return Lt("onBUO", e, t, n);
      }
      function Lt(e, t, n, r) {
        var i = "function" == typeof r ? Jn(t, n) : Jn(t),
          o = b(r) ? r : n,
          a = e + "L";
        return (
          i[a] ? i[a].add(o) : (i[a] = new Set([o])),
          function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
          }
        );
      }
      var Bt = "always";
      function Mt(e) {
        !0 === e.isolateGlobalState &&
          (function () {
            if (
              ((at.pendingReactions.length ||
                at.inBatch ||
                at.isRunningReactions) &&
                r(36),
              (ot = !0),
              it)
            ) {
              var e = o();
              0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
                (at = new rt());
            }
          })();
        var t,
          n,
          i = e.useProxies,
          a = e.enforceActions;
        if (
          (void 0 !== i &&
            (at.useProxies =
              i === Bt || ("never" !== i && "undefined" != typeof Proxy)),
          "ifavailable" === i && (at.verifyProxies = !0),
          void 0 !== a)
        ) {
          var s = a === Bt ? Bt : "observed" === a;
          (at.enforceActions = s),
            (at.allowStateChanges = !0 !== s && s !== Bt);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (t) {
          t in e && (at[t] = !!e[t]);
        }),
          (at.allowStateReads = !at.observableRequiresReaction),
          e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = dt),
            (dt = function (e) {
              return t(function () {
                return n(e);
              });
            }));
      }
      function It(e, t, n, r) {
        var i = V(t),
          o = Ln(e, r)[G];
        lt();
        try {
          E(i).forEach(function (e) {
            o.extend_(e, i[e], !n || !(e in n) || n[e]);
          });
        } finally {
          ht();
        }
        return e;
      }
      function Ut(e, t) {
        return Kt(Jn(e, t));
      }
      function Kt(e) {
        var t,
          n = { name: e.name_ };
        return (
          e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(
              Kt
            )),
          n
        );
      }
      var Gt = 0;
      function qt() {
        this.message = "FLOW_CANCELLED";
      }
      qt.prototype = Object.create(Error.prototype);
      var Ht = ee("flow"),
        zt = ee("flow.bound", { bound: !0 }),
        Wt = Object.assign(function (e, t) {
          if (g(t)) return K(e, t, Ht);
          var n = e,
            r = n.name || "<unnamed flow>",
            i = function () {
              var e,
                t = this,
                i = arguments,
                o = ++Gt,
                a = kt(r + " - runid: " + o + " - init", n).apply(t, i),
                s = void 0,
                u = new Promise(function (t, n) {
                  var i = 0;
                  function u(e) {
                    var t;
                    s = void 0;
                    try {
                      t = kt(
                        r + " - runid: " + o + " - yield " + i++,
                        a.next
                      ).call(a, e);
                    } catch (u) {
                      return n(u);
                    }
                    l(t);
                  }
                  function c(e) {
                    var t;
                    s = void 0;
                    try {
                      t = kt(
                        r + " - runid: " + o + " - yield " + i++,
                        a.throw
                      ).call(a, e);
                    } catch (u) {
                      return n(u);
                    }
                    l(t);
                  }
                  function l(e) {
                    if (!b(null == e ? void 0 : e.then))
                      return e.done
                        ? t(e.value)
                        : (s = Promise.resolve(e.value)).then(u, c);
                    e.then(l, n);
                  }
                  (e = n), u(void 0);
                });
              return (
                (u.cancel = kt(r + " - runid: " + o + " - cancel", function () {
                  try {
                    s && Xt(s);
                    var t = a.return(void 0),
                      n = Promise.resolve(t.value);
                    n.then(p, p), Xt(n), e(new qt());
                  } catch (r) {
                    e(r);
                  }
                })),
                u
              );
            };
          return (i.isMobXFlow = !0), i;
        }, Ht);
      function Xt(e) {
        b(e.cancel) && e.cancel();
      }
      function Ft(e) {
        return !0 === (null == e ? void 0 : e.isMobXFlow);
      }
      function Yt(e, t) {
        return (
          !!e &&
          (void 0 !== t
            ? !!In(e) && e[G].values_.has(t)
            : In(e) || !!e[G] || H(e) || gt(e) || He(e))
        );
      }
      function Jt(e) {
        return Yt(e);
      }
      function $t(e) {
        switch (e.length) {
          case 0:
            return at.trackingDerivation;
          case 1:
            return Jn(e[0]);
          case 2:
            return Jn(e[0], e[1]);
        }
      }
      function Qt(e, t) {
        void 0 === t && (t = void 0), lt();
        try {
          return e.apply(t);
        } finally {
          ht();
        }
      }
      function Zt(e) {
        return e[G];
      }
      Wt.bound = U(zt);
      var en = {
        has: function (e, t) {
          return Zt(e).has_(t);
        },
        get: function (e, t) {
          return Zt(e).get_(t);
        },
        set: function (e, t, n) {
          var r;
          return !!g(t) && (null == (r = Zt(e).set_(t, n, !0)) || r);
        },
        deleteProperty: function (e, t) {
          var n;
          return !!g(t) && (null == (n = Zt(e).delete_(t, !0)) || n);
        },
        defineProperty: function (e, t, n) {
          var r;
          return null == (r = Zt(e).defineProperty_(t, n)) || r;
        },
        ownKeys: function (e) {
          return Zt(e).ownKeys_();
        },
        preventExtensions: function (e) {
          r(13);
        },
      };
      function tn(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
      }
      function nn(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return (
          n.push(t),
          d(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function rn(e, t) {
        var n = Qe();
        try {
          for (
            var i = [].concat(e.interceptors_ || []), o = 0, a = i.length;
            o < a && ((t = i[o](t)) && !t.type && r(14), t);
            o++
          );
          return t;
        } finally {
          Ze(n);
        }
      }
      function on(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
      }
      function an(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return (
          n.push(t),
          d(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function sn(e, t) {
        var n = Qe(),
          r = e.changeListeners_;
        if (r) {
          for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
          Ze(n);
        }
      }
      function un(e, t, n) {
        var r = Ln(e, n)[G];
        lt();
        try {
          0,
            null != t ||
              (t = (function (e) {
                return T(e, I) || A(e, I, D({}, e[I])), e[I];
              })(e)),
            E(t).forEach(function (e) {
              return r.make_(e, t[e]);
            });
        } finally {
          ht();
        }
        return e;
      }
      var cn = "splice",
        ln = "update",
        hn = {
          get: function (e, t) {
            var n = e[G];
            return t === G
              ? n
              : "length" === t
              ? n.getArrayLength_()
              : "string" != typeof t || isNaN(t)
              ? T(vn, t)
                ? vn[t]
                : e[t]
              : n.get_(parseInt(t));
          },
          set: function (e, t, n) {
            var r = e[G];
            return (
              "length" === t && r.setArrayLength_(n),
              "symbol" == typeof t || isNaN(t)
                ? (e[t] = n)
                : r.set_(parseInt(t), n),
              !0
            );
          },
          preventExtensions: function () {
            r(15);
          },
        },
        _n = (function () {
          function e(e, t, n, r) {
            void 0 === e && (e = "ObservableArray"),
              (this.owned_ = void 0),
              (this.legacyMode_ = void 0),
              (this.atom_ = void 0),
              (this.values_ = []),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.enhancer_ = void 0),
              (this.dehancer = void 0),
              (this.proxy_ = void 0),
              (this.lastKnownLength_ = 0),
              (this.owned_ = n),
              (this.legacyMode_ = r),
              (this.atom_ = new q(e)),
              (this.enhancer_ = function (e, n) {
                return t(e, n, "ObservableArray[..]");
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.dehanceValues_ = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (t.intercept_ = function (e) {
              return nn(this, e);
            }),
            (t.observe_ = function (e, t) {
              return (
                void 0 === t && (t = !1),
                t &&
                  e({
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: "splice",
                    index: 0,
                    added: this.values_.slice(),
                    addedCount: this.values_.length,
                    removed: [],
                    removedCount: 0,
                  }),
                an(this, e)
              );
            }),
            (t.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (t.setArrayLength_ = function (e) {
              ("number" != typeof e || isNaN(e) || e < 0) &&
                r("Out of range: " + e);
              var t = this.values_.length;
              if (e !== t)
                if (e > t) {
                  for (var n = new Array(e - t), i = 0; i < e - t; i++)
                    n[i] = void 0;
                  this.spliceWithArray_(t, 0, n);
                } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
              e !== this.lastKnownLength_ && r(16),
                (this.lastKnownLength_ += t),
                this.legacyMode_ && t > 0 && Fn(e + t + 1);
            }),
            (t.spliceWithArray_ = function (e, t, n) {
              var r = this;
              this.atom_;
              var i = this.values_.length;
              if (
                (void 0 === e
                  ? (e = 0)
                  : e > i
                  ? (e = i)
                  : e < 0 && (e = Math.max(0, i + e)),
                (t =
                  1 === arguments.length
                    ? i - e
                    : null == t
                    ? 0
                    : Math.max(0, Math.min(t, i - e))),
                void 0 === n && (n = l),
                tn(this))
              ) {
                var o = rn(this, {
                  object: this.proxy_,
                  type: cn,
                  index: e,
                  removedCount: t,
                  added: n,
                });
                if (!o) return l;
                (t = o.removedCount), (n = o.added);
              }
              if (
                ((n =
                  0 === n.length
                    ? n
                    : n.map(function (e) {
                        return r.enhancer_(e, void 0);
                      })),
                this.legacyMode_)
              ) {
                var a = n.length - t;
                this.updateArrayLength_(i, a);
              }
              var s = this.spliceItemsIntoValues_(e, t, n);
              return (
                (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, s),
                this.dehanceValues_(s)
              );
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
              var r;
              if (n.length < 1e4)
                return (r = this.values_).splice.apply(r, [e, t].concat(n));
              var i = this.values_.slice(e, e + t),
                o = this.values_.slice(e + t);
              this.values_.length = e + n.length - t;
              for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
              for (var s = 0; s < o.length; s++)
                this.values_[e + n.length + s] = o[s];
              return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = on(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: ln,
                        debugObjectName: this.atom_.name_,
                        index: e,
                        newValue: t,
                        oldValue: n,
                      }
                    : null;
              this.atom_.reportChanged(), i && sn(this, o);
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = on(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: cn,
                        index: e,
                        removed: n,
                        added: t,
                        removedCount: n.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom_.reportChanged(), i && sn(this, o);
            }),
            (t.get_ = function (e) {
              if (e < this.values_.length)
                return (
                  this.atom_.reportObserved(),
                  this.dehanceValue_(this.values_[e])
                );
              console.warn(
                "[mobx.array] Attempt to read an array index (" +
                  e +
                  ") that is out of bounds (" +
                  this.values_.length +
                  "). Please check length first. Out of bound indices will not be tracked by MobX"
              );
            }),
            (t.set_ = function (e, t) {
              var n = this.values_;
              if (e < n.length) {
                this.atom_;
                var i = n[e];
                if (tn(this)) {
                  var o = rn(this, {
                    type: ln,
                    object: this.proxy_,
                    index: e,
                    newValue: t,
                  });
                  if (!o) return;
                  t = o.newValue;
                }
                (t = this.enhancer_(t, i)) !== i &&
                  ((n[e] = t), this.notifyArrayChildUpdate_(e, t, i));
              } else
                e === n.length
                  ? this.spliceWithArray_(e, 0, [t])
                  : r(17, e, n.length);
            }),
            e
          );
        })();
      function fn(e, t, n, r) {
        void 0 === n && (n = "ObservableArray"), void 0 === r && (r = !1), v();
        var i = new _n(n, t, r, !1);
        w(i.values_, G, i);
        var o = new Proxy(i.values_, hn);
        if (((i.proxy_ = o), e && e.length)) {
          var a = Be(!0);
          i.spliceWithArray_(0, 0, e), Me(a);
        }
        return o;
      }
      var vn = {
        clear: function () {
          return this.splice(0);
        },
        replace: function (e) {
          var t = this[G];
          return t.spliceWithArray_(0, t.values_.length, e);
        },
        toJSON: function () {
          return this.slice();
        },
        splice: function (e, t) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
            i < n;
            i++
          )
            r[i - 2] = arguments[i];
          var o = this[G];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return o.spliceWithArray_(e);
            case 2:
              return o.spliceWithArray_(e, t);
          }
          return o.spliceWithArray_(e, t, r);
        },
        spliceWithArray: function (e, t, n) {
          return this[G].spliceWithArray_(e, t, n);
        },
        push: function () {
          for (
            var e = this[G], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
        },
        pop: function () {
          return this.splice(Math.max(this[G].values_.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (
            var e = this[G], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(0, 0, n), e.values_.length;
        },
        reverse: function () {
          return (
            at.trackingDerivation && r(37, "reverse"),
            this.replace(this.slice().reverse()),
            this
          );
        },
        sort: function () {
          at.trackingDerivation && r(37, "sort");
          var e = this.slice();
          return e.sort.apply(e, arguments), this.replace(e), this;
        },
        remove: function (e) {
          var t = this[G],
            n = t.dehanceValues_(t.values_).indexOf(e);
          return n > -1 && (this.splice(n, 1), !0);
        },
      };
      function dn(e, t) {
        "function" == typeof Array.prototype[e] && (vn[e] = t(e));
      }
      function pn(e) {
        return function () {
          var t = this[G];
          t.atom_.reportObserved();
          var n = t.dehanceValues_(t.values_);
          return n[e].apply(n, arguments);
        };
      }
      function bn(e) {
        return function (t, n) {
          var r = this,
            i = this[G];
          return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
              return t.call(n, e, i, r);
            })
          );
        };
      }
      function gn(e) {
        return function () {
          var t = this,
            n = this[G];
          n.atom_.reportObserved();
          var r = n.dehanceValues_(n.values_),
            i = arguments[0];
          return (
            (arguments[0] = function (e, n, r) {
              return i(e, n, r, t);
            }),
            r[e].apply(r, arguments)
          );
        };
      }
      dn("concat", pn),
        dn("flat", pn),
        dn("includes", pn),
        dn("indexOf", pn),
        dn("join", pn),
        dn("lastIndexOf", pn),
        dn("slice", pn),
        dn("toString", pn),
        dn("toLocaleString", pn),
        dn("every", bn),
        dn("filter", bn),
        dn("find", bn),
        dn("findIndex", bn),
        dn("flatMap", bn),
        dn("forEach", bn),
        dn("map", bn),
        dn("some", bn),
        dn("reduce", gn),
        dn("reduceRight", gn);
      var yn,
        mn,
        On = S("ObservableArrayAdministration", _n);
      function An(e) {
        return y(e) && On(e[G]);
      }
      var wn = {},
        Sn = "add",
        xn = "delete";
      (yn = Symbol.iterator), (mn = Symbol.toStringTag);
      var jn,
        kn,
        En = (function () {
          function e(e, t, n) {
            void 0 === t && (t = X),
              void 0 === n && (n = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[G] = wn),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = t),
              (this.name_ = n),
              b(Map) || r(18),
              (this.keysAtom_ = z("ObservableMap.keys()")),
              (this.data_ = new Map()),
              (this.hasMap_ = new Map()),
              this.merge(e);
          }
          var t = e.prototype;
          return (
            (t.has_ = function (e) {
              return this.data_.has(e);
            }),
            (t.has = function (e) {
              var t = this;
              if (!at.trackingDerivation) return this.has_(e);
              var n = this.hasMap_.get(e);
              if (!n) {
                var r = (n = new Ue(this.has_(e), F, "ObservableMap.key?", !1));
                this.hasMap_.set(e, r),
                  Rt(r, function () {
                    return t.hasMap_.delete(e);
                  });
              }
              return n.get();
            }),
            (t.set = function (e, t) {
              var n = this.has_(e);
              if (tn(this)) {
                var r = rn(this, {
                  type: n ? ln : Sn,
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!r) return this;
                t = r.newValue;
              }
              return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                (this.keysAtom_, tn(this)) &&
                !rn(this, { type: xn, object: this, name: e })
              )
                return !1;
              if (this.has_(e)) {
                var n = on(this),
                  r = n
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: xn,
                        object: this,
                        oldValue: this.data_.get(e).value_,
                        name: e,
                      }
                    : null;
                return (
                  Qt(function () {
                    var n;
                    t.keysAtom_.reportChanged(),
                      null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                      t.data_.get(e).setNewValue_(void 0),
                      t.data_.delete(e);
                  }),
                  n && sn(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.updateValue_ = function (e, t) {
              var n = this.data_.get(e);
              if ((t = n.prepareNewValue_(t)) !== at.UNCHANGED) {
                var r = on(this),
                  i = r
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: ln,
                        object: this,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), r && sn(this, i);
              }
            }),
            (t.addValue_ = function (e, t) {
              var n = this;
              this.keysAtom_,
                Qt(function () {
                  var r,
                    i = new Ue(t, n.enhancer_, "ObservableMap.key", !1);
                  n.data_.set(e, i),
                    (t = i.value_),
                    null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                    n.keysAtom_.reportChanged();
                });
              var r = on(this),
                i = r
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: Sn,
                      object: this,
                      name: e,
                      newValue: t,
                    }
                  : null;
              r && sn(this, i);
            }),
            (t.get = function (e) {
              return this.has(e)
                ? this.dehanceValue_(this.data_.get(e).get())
                : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (t.values = function () {
              var e = this,
                t = this.keys();
              return rr({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : e.get(i) };
                },
              });
            }),
            (t.entries = function () {
              var e = this,
                t = this.keys();
              return rr({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : [i, e.get(i)] };
                },
              });
            }),
            (t[yn] = function () {
              return this.entries();
            }),
            (t.forEach = function (e, t) {
              for (var n, r = M(this); !(n = r()).done; ) {
                var i = n.value,
                  o = i[0],
                  a = i[1];
                e.call(t, a, o, this);
              }
            }),
            (t.merge = function (e) {
              var t = this;
              return (
                Pn(e) && (e = new Map(e)),
                Qt(function () {
                  m(e)
                    ? (function (e) {
                        var t = Object.keys(e);
                        if (!k) return t;
                        var n = Object.getOwnPropertySymbols(e);
                        return n.length
                          ? [].concat(
                              t,
                              n.filter(function (t) {
                                return c.propertyIsEnumerable.call(e, t);
                              })
                            )
                          : t;
                      })(e).forEach(function (n) {
                        return t.set(n, e[n]);
                      })
                    : Array.isArray(e)
                    ? e.forEach(function (e) {
                        var n = e[0],
                          r = e[1];
                        return t.set(n, r);
                      })
                    : x(e)
                    ? (e.constructor !== Map && r(19, e),
                      e.forEach(function (e, n) {
                        return t.set(n, e);
                      }))
                    : null != e && r(20, e);
                }),
                this
              );
            }),
            (t.clear = function () {
              var e = this;
              Qt(function () {
                $e(function () {
                  for (var t, n = M(e.keys()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                Qt(function () {
                  for (
                    var n,
                      i = (function (e) {
                        if (x(e) || Pn(e)) return e;
                        if (Array.isArray(e)) return new Map(e);
                        if (m(e)) {
                          var t = new Map();
                          for (var n in e) t.set(n, e[n]);
                          return t;
                        }
                        return r(21, e);
                      })(e),
                      o = new Map(),
                      a = !1,
                      s = M(t.data_.keys());
                    !(n = s()).done;

                  ) {
                    var u = n.value;
                    if (!i.has(u))
                      if (t.delete(u)) a = !0;
                      else {
                        var c = t.data_.get(u);
                        o.set(u, c);
                      }
                  }
                  for (var l, h = M(i.entries()); !(l = h()).done; ) {
                    var _ = l.value,
                      f = _[0],
                      v = _[1],
                      d = t.data_.has(f);
                    if ((t.set(f, v), t.data_.has(f))) {
                      var p = t.data_.get(f);
                      o.set(f, p), d || (a = !0);
                    }
                  }
                  if (!a)
                    if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
                    else
                      for (
                        var b = t.data_.keys(),
                          g = o.keys(),
                          y = b.next(),
                          O = g.next();
                        !y.done;

                      ) {
                        if (y.value !== O.value) {
                          t.keysAtom_.reportChanged();
                          break;
                        }
                        (y = b.next()), (O = g.next());
                      }
                  t.data_ = o;
                }),
                this
              );
            }),
            (t.toString = function () {
              return "[object ObservableMap]";
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.observe_ = function (e, t) {
              return an(this, e);
            }),
            (t.intercept_ = function (e) {
              return nn(this, e);
            }),
            N(e, [
              {
                key: "size",
                get: function () {
                  return this.keysAtom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: mn,
                get: function () {
                  return "Map";
                },
              },
            ]),
            e
          );
        })(),
        Pn = S("ObservableMap", En);
      var Tn = {};
      (jn = Symbol.iterator), (kn = Symbol.toStringTag);
      var Vn = (function () {
          function e(e, t, n) {
            void 0 === t && (t = X),
              void 0 === n && (n = "ObservableSet"),
              (this.name_ = void 0),
              (this[G] = Tn),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = n),
              b(Set) || r(22),
              (this.atom_ = z(this.name_)),
              (this.enhancer_ = function (e, r) {
                return t(e, r, n);
              }),
              e && this.replace(e);
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
              var e = this;
              Qt(function () {
                $e(function () {
                  for (var t, n = M(e.data_.values()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.forEach = function (e, t) {
              for (var n, r = M(this); !(n = r()).done; ) {
                var i = n.value;
                e.call(t, i, i, this);
              }
            }),
            (t.add = function (e) {
              var t = this;
              if (
                (this.atom_, tn(this)) &&
                !rn(this, { type: Sn, object: this, newValue: e })
              )
                return this;
              if (!this.has(e)) {
                Qt(function () {
                  t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var n = !1,
                  r = on(this),
                  i = r
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: Sn,
                        object: this,
                        newValue: e,
                      }
                    : null;
                n, r && sn(this, i);
              }
              return this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                tn(this) &&
                !rn(this, { type: xn, object: this, oldValue: e })
              )
                return !1;
              if (this.has(e)) {
                var n = on(this),
                  r = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: xn,
                        object: this,
                        oldValue: e,
                      }
                    : null;
                return (
                  Qt(function () {
                    t.atom_.reportChanged(), t.data_.delete(e);
                  }),
                  n && sn(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.has = function (e) {
              return (
                this.atom_.reportObserved(),
                this.data_.has(this.dehanceValue_(e))
              );
            }),
            (t.entries = function () {
              var e = 0,
                t = Array.from(this.keys()),
                n = Array.from(this.values());
              return rr({
                next: function () {
                  var r = e;
                  return (
                    (e += 1),
                    r < n.length
                      ? { value: [t[r], n[r]], done: !1 }
                      : { done: !0 }
                  );
                },
              });
            }),
            (t.keys = function () {
              return this.values();
            }),
            (t.values = function () {
              this.atom_.reportObserved();
              var e = this,
                t = 0,
                n = Array.from(this.data_.values());
              return rr({
                next: function () {
                  return t < n.length
                    ? { value: e.dehanceValue_(n[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                Cn(e) && (e = new Set(e)),
                Qt(function () {
                  Array.isArray(e) || j(e)
                    ? (t.clear(),
                      e.forEach(function (e) {
                        return t.add(e);
                      }))
                    : null != e && r("Cannot initialize set from " + e);
                }),
                this
              );
            }),
            (t.observe_ = function (e, t) {
              return an(this, e);
            }),
            (t.intercept_ = function (e) {
              return nn(this, e);
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.toString = function () {
              return "[object ObservableSet]";
            }),
            (t[jn] = function () {
              return this.values();
            }),
            N(e, [
              {
                key: "size",
                get: function () {
                  return this.atom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: kn,
                get: function () {
                  return "Set";
                },
              },
            ]),
            e
          );
        })(),
        Cn = S("ObservableSet", Vn),
        Nn = Object.create(null),
        Dn = "remove",
        Rn = (function () {
          function e(e, t, n, r) {
            void 0 === t && (t = new Map()),
              void 0 === r && (r = le),
              (this.target_ = void 0),
              (this.values_ = void 0),
              (this.name_ = void 0),
              (this.defaultAnnotation_ = void 0),
              (this.keysAtom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.proxy_ = void 0),
              (this.isPlainObject_ = void 0),
              (this.appliedAnnotations_ = void 0),
              (this.pendingKeys_ = void 0),
              (this.target_ = e),
              (this.values_ = t),
              (this.name_ = n),
              (this.defaultAnnotation_ = r),
              (this.keysAtom_ = new q("ObservableObject.keys")),
              (this.isPlainObject_ = m(this.target_));
          }
          var t = e.prototype;
          return (
            (t.getObservablePropValue_ = function (e) {
              return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
              var n = this.values_.get(e);
              if (n instanceof qe) return n.set(t), !0;
              if (tn(this)) {
                var r = rn(this, {
                  type: ln,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                });
                if (!r) return null;
                t = r.newValue;
              }
              if ((t = n.prepareNewValue_(t)) !== at.UNCHANGED) {
                var i = on(this),
                  o = i
                    ? {
                        type: ln,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), i && sn(this, o);
              }
              return !0;
            }),
            (t.get_ = function (e) {
              return (
                at.trackingDerivation && !T(this.target_, e) && this.has_(e),
                this.target_[e]
              );
            }),
            (t.set_ = function (e, t, n) {
              return (
                void 0 === n && (n = !1),
                T(this.target_, e)
                  ? this.values_.has(e)
                    ? this.setObservablePropValue_(e, t)
                    : n
                    ? Reflect.set(this.target_, e, t)
                    : ((this.target_[e] = t), !0)
                  : this.extend_(
                      e,
                      {
                        value: t,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      },
                      this.defaultAnnotation_,
                      n
                    )
              );
            }),
            (t.has_ = function (e) {
              if (!at.trackingDerivation) return e in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var t = this.pendingKeys_.get(e);
              return (
                t ||
                  ((t = new Ue(
                    e in this.target_,
                    F,
                    "ObservableObject.key?",
                    !1
                  )),
                  this.pendingKeys_.set(e, t)),
                t.get()
              );
            }),
            (t.make_ = function (e, t) {
              if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                if ((Kn(this, t, e), !(e in this.target_))) {
                  var n;
                  if (null == (n = this.target_[I]) ? void 0 : n[e]) return;
                  r(1, t.annotationType_, this.name_ + "." + e.toString());
                }
                for (var i = this.target_; i && i !== c; ) {
                  var o = s(i, e);
                  if (o) {
                    var a = t.make_(this, e, o, i);
                    if (0 === a) return;
                    if (1 === a) break;
                  }
                  i = Object.getPrototypeOf(i);
                }
                Un(this, t, e);
              }
            }),
            (t.extend_ = function (e, t, n, r) {
              if (
                (void 0 === r && (r = !1),
                !0 === n && (n = this.defaultAnnotation_),
                !1 === n)
              )
                return this.defineProperty_(e, t, r);
              Kn(this, n, e);
              var i = n.extend_(this, e, t, r);
              return i && Un(this, n, e), i;
            }),
            (t.defineProperty_ = function (e, t, n) {
              void 0 === n && (n = !1);
              try {
                lt();
                var r = this.delete_(e);
                if (!r) return r;
                if (tn(this)) {
                  var i = rn(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Sn,
                    newValue: t.value,
                  });
                  if (!i) return null;
                  var o = i.newValue;
                  t.value !== o && (t = D({}, t, { value: o }));
                }
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else u(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
              } finally {
                ht();
              }
              return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
              void 0 === r && (r = !1);
              try {
                lt();
                var i = this.delete_(e);
                if (!i) return i;
                if (tn(this)) {
                  var o = rn(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Sn,
                    newValue: t,
                  });
                  if (!o) return null;
                  t = o.newValue;
                }
                var a = Mn(e),
                  s = {
                    configurable: !at.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: a.get,
                    set: a.set,
                  };
                if (r) {
                  if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                } else u(this.target_, e, s);
                var c = new Ue(t, n, "ObservableObject.key", !1);
                this.values_.set(e, c),
                  this.notifyPropertyAddition_(e, c.value_);
              } finally {
                ht();
              }
              return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
              void 0 === n && (n = !1);
              try {
                lt();
                var r = this.delete_(e);
                if (!r) return r;
                if (tn(this))
                  if (
                    !rn(this, {
                      object: this.proxy_ || this.target_,
                      name: e,
                      type: Sn,
                      newValue: void 0,
                    })
                  )
                    return null;
                t.name || (t.name = "ObservableObject.key"),
                  (t.context = this.proxy_ || this.target_);
                var i = Mn(e),
                  o = {
                    configurable: !at.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: i.get,
                    set: i.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                } else u(this.target_, e, o);
                this.values_.set(e, new qe(t)),
                  this.notifyPropertyAddition_(e, void 0);
              } finally {
                ht();
              }
              return !0;
            }),
            (t.delete_ = function (e, t) {
              if ((void 0 === t && (t = !1), !T(this.target_, e))) return !0;
              if (
                tn(this) &&
                !rn(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: Dn,
                })
              )
                return null;
              try {
                var n, r;
                lt();
                var i,
                  o = on(this),
                  a = this.values_.get(e),
                  u = void 0;
                if (!a && o)
                  u = null == (i = s(this.target_, e)) ? void 0 : i.value;
                if (t) {
                  if (!Reflect.deleteProperty(this.target_, e)) return !1;
                } else delete this.target_[e];
                if (
                  (a &&
                    (this.values_.delete(e),
                    a instanceof Ue && (u = a.value_),
                    ft(a)),
                  this.keysAtom_.reportChanged(),
                  null == (n = this.pendingKeys_) ||
                    null == (r = n.get(e)) ||
                    r.set(e in this.target_),
                  o)
                ) {
                  var c = {
                    type: Dn,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: u,
                    name: e,
                  };
                  0, o && sn(this, c);
                }
              } finally {
                ht();
              }
              return !0;
            }),
            (t.observe_ = function (e, t) {
              return an(this, e);
            }),
            (t.intercept_ = function (e) {
              return nn(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
              var n,
                r,
                i = on(this);
              if (i) {
                var o = i
                  ? {
                      type: Sn,
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      name: e,
                      newValue: t,
                    }
                  : null;
                0, i && sn(this, o);
              }
              null == (n = this.pendingKeys_) ||
                null == (r = n.get(e)) ||
                r.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), E(this.target_);
            }),
            (t.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
          );
        })();
      function Ln(e, t) {
        var n;
        if (T(e, G)) return e;
        var r =
            null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
          i = new Rn(
            e,
            new Map(),
            String(r),
            (function (e) {
              var t;
              return e
                ? null != (t = e.defaultDecorator)
                  ? t
                  : he(e)
                : void 0;
            })(t)
          );
        return A(e, G, i), e;
      }
      var Bn = S("ObservableObjectAdministration", Rn);
      function Mn(e) {
        return (
          Nn[e] ||
          (Nn[e] = {
            get: function () {
              return this[G].getObservablePropValue_(e);
            },
            set: function (t) {
              return this[G].setObservablePropValue_(e, t);
            },
          })
        );
      }
      function In(e) {
        return !!y(e) && Bn(e[G]);
      }
      function Un(e, t, n) {
        var r;
        null == (r = e.target_[I]) || delete r[n];
      }
      function Kn(e, t, n) {}
      var Gn,
        qn,
        Hn = 0,
        zn = function () {};
      (Gn = zn),
        (qn = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(Gn.prototype, qn)
          : void 0 !== Gn.prototype.__proto__
          ? (Gn.prototype.__proto__ = qn)
          : (Gn.prototype = qn);
      var Wn = (function (e) {
        function t(t, n, r, i) {
          var o;
          void 0 === r && (r = "ObservableArray"),
            void 0 === i && (i = !1),
            (o = e.call(this) || this);
          var a = new _n(r, n, i, !0);
          if (((a.proxy_ = L(o)), w(L(o), G, a), t && t.length)) {
            var s = Be(!0);
            o.spliceWithArray(0, 0, t), Me(s);
          }
          return o;
        }
        R(t, e);
        var n = t.prototype;
        return (
          (n.concat = function () {
            this[G].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return Array.prototype.concat.apply(
              this.slice(),
              t.map(function (e) {
                return An(e) ? e.slice() : e;
              })
            );
          }),
          (n[Symbol.iterator] = function () {
            var e = this,
              t = 0;
            return rr({
              next: function () {
                return t < e.length
                  ? { value: e[t++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          N(t, [
            {
              key: "length",
              get: function () {
                return this[G].getArrayLength_();
              },
              set: function (e) {
                this[G].setArrayLength_(e);
              },
            },
            {
              key: Symbol.toStringTag,
              get: function () {
                return "Array";
              },
            },
          ]),
          t
        );
      })(zn);
      function Xn(e) {
        u(
          Wn.prototype,
          "" + e,
          (function (e) {
            return {
              enumerable: !1,
              configurable: !0,
              get: function () {
                return this[G].get_(e);
              },
              set: function (t) {
                this[G].set_(e, t);
              },
            };
          })(e)
        );
      }
      function Fn(e) {
        if (e > Hn) {
          for (var t = Hn; t < e + 100; t++) Xn(t);
          Hn = e;
        }
      }
      function Yn(e, t, n) {
        return new Wn(e, t, n);
      }
      function Jn(e, t) {
        if ("object" == typeof e && null !== e) {
          if (An(e)) return void 0 !== t && r(23), e[G].atom_;
          if (Cn(e)) return e[G];
          if (Pn(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || r(25, t, Qn(e)), n;
          }
          if (In(e)) {
            if (!t) return r(26);
            var i = e[G].values_.get(t);
            return i || r(27, t, Qn(e)), i;
          }
          if (H(e) || He(e) || gt(e)) return e;
        } else if (b(e) && gt(e[G])) return e[G];
        r(28);
      }
      function $n(e, t) {
        return (
          e || r(29),
          void 0 !== t
            ? $n(Jn(e, t))
            : H(e) || He(e) || gt(e) || Pn(e) || Cn(e)
            ? e
            : e[G]
            ? e[G]
            : void r(24, e)
        );
      }
      function Qn(e, t) {
        var n;
        if (void 0 !== t) n = Jn(e, t);
        else {
          if (Tt(e)) return e.name;
          n = In(e) || Pn(e) || Cn(e) ? $n(e) : Jn(e);
        }
        return n.name_;
      }
      Object.entries(vn).forEach(function (e) {
        var t = e[0],
          n = e[1];
        "concat" !== t && A(Wn.prototype, t, n);
      }),
        Fn(1e3);
      var Zn = c.toString;
      function er(e, t, n) {
        return void 0 === n && (n = -1), tr(e, t, n);
      }
      function tr(e, t, n, r, i) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        var o = typeof e;
        if (!b(o) && "object" !== o && "object" != typeof t) return !1;
        var a = Zn.call(e);
        if (a !== Zn.call(t)) return !1;
        switch (a) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;
          case "[object Symbol]":
            return (
              "undefined" != typeof Symbol &&
              Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
            );
          case "[object Map]":
          case "[object Set]":
            n >= 0 && n++;
        }
        (e = nr(e)), (t = nr(t));
        var s = "[object Array]" === a;
        if (!s) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var u = e.constructor,
            c = t.constructor;
          if (
            u !== c &&
            !(b(u) && u instanceof u && b(c) && c instanceof c) &&
            "constructor" in e &&
            "constructor" in t
          )
            return !1;
        }
        if (0 === n) return !1;
        n < 0 && (n = -1), (i = i || []);
        for (var l = (r = r || []).length; l--; )
          if (r[l] === e) return i[l] === t;
        if ((r.push(e), i.push(t), s)) {
          if ((l = e.length) !== t.length) return !1;
          for (; l--; ) if (!tr(e[l], t[l], n - 1, r, i)) return !1;
        } else {
          var h,
            _ = Object.keys(e);
          if (((l = _.length), Object.keys(t).length !== l)) return !1;
          for (; l--; )
            if (!T(t, (h = _[l])) || !tr(e[h], t[h], n - 1, r, i)) return !1;
        }
        return r.pop(), i.pop(), !0;
      }
      function nr(e) {
        return An(e)
          ? e.slice()
          : x(e) || Pn(e) || j(e) || Cn(e)
          ? Array.from(e.entries())
          : e;
      }
      function rr(e) {
        return (e[Symbol.iterator] = ir), e;
      }
      function ir() {
        return this;
      }
      ["Symbol", "Map", "Set"].forEach(function (e) {
        void 0 === o()[e] &&
          r("MobX requires global '" + e + "' to be available or polyfilled");
      }),
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
              return (
                console.warn("[mobx.spy] Is a no-op in production builds"),
                function () {}
              );
            },
            extras: { getDebugName: Qn },
            $mobx: G,
          });
    },
  },
]);
//# sourceMappingURL=e82996df-57a7d3ae5d2ee2377f4f.js.map
