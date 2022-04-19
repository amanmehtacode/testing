(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [854],
  {
    9669: function (e, n, t) {
      e.exports = t(1609);
    },
    5448: function (e, n, t) {
      "use strict";
      var r = t(4867),
        o = t(6026),
        i = t(4372),
        u = t(5327),
        a = t(4097),
        s = t(4109),
        c = t(7985),
        f = t(5061),
        l = t(7874),
        d = t(5263);
      e.exports = function (e) {
        return new Promise(function (n, t) {
          var p,
            h = e.data,
            v = e.headers,
            m = e.responseType;
          function g() {
            e.cancelToken && e.cancelToken.unsubscribe(p),
              e.signal && e.signal.removeEventListener("abort", p);
          }
          r.isFormData(h) && delete v["Content-Type"];
          var y = new XMLHttpRequest();
          if (e.auth) {
            var b = e.auth.username || "",
              w = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            v.Authorization = "Basic " + btoa(b + ":" + w);
          }
          var x = a(e.baseURL, e.url);
          function E() {
            if (y) {
              var r =
                  "getAllResponseHeaders" in y
                    ? s(y.getAllResponseHeaders())
                    : null,
                i = {
                  data:
                    m && "text" !== m && "json" !== m
                      ? y.response
                      : y.responseText,
                  status: y.status,
                  statusText: y.statusText,
                  headers: r,
                  config: e,
                  request: y,
                };
              o(
                function (e) {
                  n(e), g();
                },
                function (e) {
                  t(e), g();
                },
                i
              ),
                (y = null);
            }
          }
          if (
            (y.open(
              e.method.toUpperCase(),
              u(x, e.params, e.paramsSerializer),
              !0
            ),
            (y.timeout = e.timeout),
            "onloadend" in y
              ? (y.onloadend = E)
              : (y.onreadystatechange = function () {
                  y &&
                    4 === y.readyState &&
                    (0 !== y.status ||
                      (y.responseURL &&
                        0 === y.responseURL.indexOf("file:"))) &&
                    setTimeout(E);
                }),
            (y.onabort = function () {
              y && (t(f("Request aborted", e, "ECONNABORTED", y)), (y = null));
            }),
            (y.onerror = function () {
              t(f("Network Error", e, null, y)), (y = null);
            }),
            (y.ontimeout = function () {
              var n = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                r = e.transitional || l;
              e.timeoutErrorMessage && (n = e.timeoutErrorMessage),
                t(
                  f(
                    n,
                    e,
                    r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                    y
                  )
                ),
                (y = null);
            }),
            r.isStandardBrowserEnv())
          ) {
            var S =
              (e.withCredentials || c(x)) && e.xsrfCookieName
                ? i.read(e.xsrfCookieName)
                : void 0;
            S && (v[e.xsrfHeaderName] = S);
          }
          "setRequestHeader" in y &&
            r.forEach(v, function (e, n) {
              "undefined" === typeof h && "content-type" === n.toLowerCase()
                ? delete v[n]
                : y.setRequestHeader(n, e);
            }),
            r.isUndefined(e.withCredentials) ||
              (y.withCredentials = !!e.withCredentials),
            m && "json" !== m && (y.responseType = e.responseType),
            "function" === typeof e.onDownloadProgress &&
              y.addEventListener("progress", e.onDownloadProgress),
            "function" === typeof e.onUploadProgress &&
              y.upload &&
              y.upload.addEventListener("progress", e.onUploadProgress),
            (e.cancelToken || e.signal) &&
              ((p = function (e) {
                y &&
                  (t(!e || (e && e.type) ? new d("canceled") : e),
                  y.abort(),
                  (y = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(p),
              e.signal &&
                (e.signal.aborted
                  ? p()
                  : e.signal.addEventListener("abort", p))),
            h || (h = null),
            y.send(h);
        });
      };
    },
    1609: function (e, n, t) {
      "use strict";
      var r = t(4867),
        o = t(1849),
        i = t(321),
        u = t(7185);
      var a = (function e(n) {
        var t = new i(n),
          a = o(i.prototype.request, t);
        return (
          r.extend(a, i.prototype, t),
          r.extend(a, t),
          (a.create = function (t) {
            return e(u(n, t));
          }),
          a
        );
      })(t(5546));
      (a.Axios = i),
        (a.Cancel = t(5263)),
        (a.CancelToken = t(4972)),
        (a.isCancel = t(6502)),
        (a.VERSION = t(7288).version),
        (a.all = function (e) {
          return Promise.all(e);
        }),
        (a.spread = t(8713)),
        (a.isAxiosError = t(6268)),
        (e.exports = a),
        (e.exports.default = a);
    },
    5263: function (e) {
      "use strict";
      function n(e) {
        this.message = e;
      }
      (n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (n.prototype.__CANCEL__ = !0),
        (e.exports = n);
    },
    4972: function (e, n, t) {
      "use strict";
      var r = t(5263);
      function o(e) {
        if ("function" !== typeof e)
          throw new TypeError("executor must be a function.");
        var n;
        this.promise = new Promise(function (e) {
          n = e;
        });
        var t = this;
        this.promise.then(function (e) {
          if (t._listeners) {
            var n,
              r = t._listeners.length;
            for (n = 0; n < r; n++) t._listeners[n](e);
            t._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var n,
              r = new Promise(function (e) {
                t.subscribe(e), (n = e);
              }).then(e);
            return (
              (r.cancel = function () {
                t.unsubscribe(n);
              }),
              r
            );
          }),
          e(function (e) {
            t.reason || ((t.reason = new r(e)), n(t.reason));
          });
      }
      (o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (o.prototype.subscribe = function (e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }),
        (o.prototype.unsubscribe = function (e) {
          if (this._listeners) {
            var n = this._listeners.indexOf(e);
            -1 !== n && this._listeners.splice(n, 1);
          }
        }),
        (o.source = function () {
          var e;
          return {
            token: new o(function (n) {
              e = n;
            }),
            cancel: e,
          };
        }),
        (e.exports = o);
    },
    6502: function (e) {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    321: function (e, n, t) {
      "use strict";
      var r = t(4867),
        o = t(5327),
        i = t(782),
        u = t(3572),
        a = t(7185),
        s = t(4875),
        c = s.validators;
      function f(e) {
        (this.defaults = e),
          (this.interceptors = { request: new i(), response: new i() });
      }
      (f.prototype.request = function (e, n) {
        "string" === typeof e ? ((n = n || {}).url = e) : (n = e || {}),
          (n = a(this.defaults, n)).method
            ? (n.method = n.method.toLowerCase())
            : this.defaults.method
            ? (n.method = this.defaults.method.toLowerCase())
            : (n.method = "get");
        var t = n.transitional;
        void 0 !== t &&
          s.assertOptions(
            t,
            {
              silentJSONParsing: c.transitional(c.boolean),
              forcedJSONParsing: c.transitional(c.boolean),
              clarifyTimeoutError: c.transitional(c.boolean),
            },
            !1
          );
        var r = [],
          o = !0;
        this.interceptors.request.forEach(function (e) {
          ("function" === typeof e.runWhen && !1 === e.runWhen(n)) ||
            ((o = o && e.synchronous), r.unshift(e.fulfilled, e.rejected));
        });
        var i,
          f = [];
        if (
          (this.interceptors.response.forEach(function (e) {
            f.push(e.fulfilled, e.rejected);
          }),
          !o)
        ) {
          var l = [u, void 0];
          for (
            Array.prototype.unshift.apply(l, r),
              l = l.concat(f),
              i = Promise.resolve(n);
            l.length;

          )
            i = i.then(l.shift(), l.shift());
          return i;
        }
        for (var d = n; r.length; ) {
          var p = r.shift(),
            h = r.shift();
          try {
            d = p(d);
          } catch (v) {
            h(v);
            break;
          }
        }
        try {
          i = u(d);
        } catch (v) {
          return Promise.reject(v);
        }
        for (; f.length; ) i = i.then(f.shift(), f.shift());
        return i;
      }),
        (f.prototype.getUri = function (e) {
          return (
            (e = a(this.defaults, e)),
            o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
          );
        }),
        r.forEach(["delete", "get", "head", "options"], function (e) {
          f.prototype[e] = function (n, t) {
            return this.request(
              a(t || {}, { method: e, url: n, data: (t || {}).data })
            );
          };
        }),
        r.forEach(["post", "put", "patch"], function (e) {
          f.prototype[e] = function (n, t, r) {
            return this.request(a(r || {}, { method: e, url: n, data: t }));
          };
        }),
        (e.exports = f);
    },
    782: function (e, n, t) {
      "use strict";
      var r = t(4867);
      function o() {
        this.handlers = [];
      }
      (o.prototype.use = function (e, n, t) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: n,
            synchronous: !!t && t.synchronous,
            runWhen: t ? t.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (o.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (o.prototype.forEach = function (e) {
          r.forEach(this.handlers, function (n) {
            null !== n && e(n);
          });
        }),
        (e.exports = o);
    },
    4097: function (e, n, t) {
      "use strict";
      var r = t(1793),
        o = t(7303);
      e.exports = function (e, n) {
        return e && !r(n) ? o(e, n) : n;
      };
    },
    5061: function (e, n, t) {
      "use strict";
      var r = t(481);
      e.exports = function (e, n, t, o, i) {
        var u = new Error(e);
        return r(u, n, t, o, i);
      };
    },
    3572: function (e, n, t) {
      "use strict";
      var r = t(4867),
        o = t(8527),
        i = t(6502),
        u = t(5546),
        a = t(5263);
      function s(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new a("canceled");
      }
      e.exports = function (e) {
        return (
          s(e),
          (e.headers = e.headers || {}),
          (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = r.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers
          )),
          r.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (n) {
              delete e.headers[n];
            }
          ),
          (e.adapter || u.adapter)(e).then(
            function (n) {
              return (
                s(e),
                (n.data = o.call(e, n.data, n.headers, e.transformResponse)),
                n
              );
            },
            function (n) {
              return (
                i(n) ||
                  (s(e),
                  n &&
                    n.response &&
                    (n.response.data = o.call(
                      e,
                      n.response.data,
                      n.response.headers,
                      e.transformResponse
                    ))),
                Promise.reject(n)
              );
            }
          )
        );
      };
    },
    481: function (e) {
      "use strict";
      e.exports = function (e, n, t, r, o) {
        return (
          (e.config = n),
          t && (e.code = t),
          (e.request = r),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          }),
          e
        );
      };
    },
    7185: function (e, n, t) {
      "use strict";
      var r = t(4867);
      e.exports = function (e, n) {
        n = n || {};
        var t = {};
        function o(e, n) {
          return r.isPlainObject(e) && r.isPlainObject(n)
            ? r.merge(e, n)
            : r.isPlainObject(n)
            ? r.merge({}, n)
            : r.isArray(n)
            ? n.slice()
            : n;
        }
        function i(t) {
          return r.isUndefined(n[t])
            ? r.isUndefined(e[t])
              ? void 0
              : o(void 0, e[t])
            : o(e[t], n[t]);
        }
        function u(e) {
          if (!r.isUndefined(n[e])) return o(void 0, n[e]);
        }
        function a(t) {
          return r.isUndefined(n[t])
            ? r.isUndefined(e[t])
              ? void 0
              : o(void 0, e[t])
            : o(void 0, n[t]);
        }
        function s(t) {
          return t in n ? o(e[t], n[t]) : t in e ? o(void 0, e[t]) : void 0;
        }
        var c = {
          url: u,
          method: u,
          data: u,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: s,
        };
        return (
          r.forEach(Object.keys(e).concat(Object.keys(n)), function (e) {
            var n = c[e] || i,
              o = n(e);
            (r.isUndefined(o) && n !== s) || (t[e] = o);
          }),
          t
        );
      };
    },
    6026: function (e, n, t) {
      "use strict";
      var r = t(5061);
      e.exports = function (e, n, t) {
        var o = t.config.validateStatus;
        t.status && o && !o(t.status)
          ? n(
              r(
                "Request failed with status code " + t.status,
                t.config,
                null,
                t.request,
                t
              )
            )
          : e(t);
      };
    },
    8527: function (e, n, t) {
      "use strict";
      var r = t(4867),
        o = t(5546);
      e.exports = function (e, n, t) {
        var i = this || o;
        return (
          r.forEach(t, function (t) {
            e = t.call(i, e, n);
          }),
          e
        );
      };
    },
    5546: function (e, n, t) {
      "use strict";
      var r = t(3454),
        o = t(4867),
        i = t(6016),
        u = t(481),
        a = t(7874),
        s = { "Content-Type": "application/x-www-form-urlencoded" };
      function c(e, n) {
        !o.isUndefined(e) &&
          o.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = n);
      }
      var f = {
        transitional: a,
        adapter: (function () {
          var e;
          return (
            ("undefined" !== typeof XMLHttpRequest ||
              ("undefined" !== typeof r &&
                "[object process]" === Object.prototype.toString.call(r))) &&
              (e = t(5448)),
            e
          );
        })(),
        transformRequest: [
          function (e, n) {
            return (
              i(n, "Accept"),
              i(n, "Content-Type"),
              o.isFormData(e) ||
              o.isArrayBuffer(e) ||
              o.isBuffer(e) ||
              o.isStream(e) ||
              o.isFile(e) ||
              o.isBlob(e)
                ? e
                : o.isArrayBufferView(e)
                ? e.buffer
                : o.isURLSearchParams(e)
                ? (c(n, "application/x-www-form-urlencoded;charset=utf-8"),
                  e.toString())
                : o.isObject(e) ||
                  (n && "application/json" === n["Content-Type"])
                ? (c(n, "application/json"),
                  (function (e, n, t) {
                    if (o.isString(e))
                      try {
                        return (n || JSON.parse)(e), o.trim(e);
                      } catch (r) {
                        if ("SyntaxError" !== r.name) throw r;
                      }
                    return (t || JSON.stringify)(e);
                  })(e))
                : e
            );
          },
        ],
        transformResponse: [
          function (e) {
            var n = this.transitional || f.transitional,
              t = n && n.silentJSONParsing,
              r = n && n.forcedJSONParsing,
              i = !t && "json" === this.responseType;
            if (i || (r && o.isString(e) && e.length))
              try {
                return JSON.parse(e);
              } catch (a) {
                if (i) {
                  if ("SyntaxError" === a.name)
                    throw u(a, this, "E_JSON_PARSE");
                  throw a;
                }
              }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      o.forEach(["delete", "get", "head"], function (e) {
        f.headers[e] = {};
      }),
        o.forEach(["post", "put", "patch"], function (e) {
          f.headers[e] = o.merge(s);
        }),
        (e.exports = f);
    },
    7874: function (e) {
      "use strict";
      e.exports = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      };
    },
    7288: function (e) {
      e.exports = { version: "0.26.1" };
    },
    1849: function (e) {
      "use strict";
      e.exports = function (e, n) {
        return function () {
          for (var t = new Array(arguments.length), r = 0; r < t.length; r++)
            t[r] = arguments[r];
          return e.apply(n, t);
        };
      };
    },
    5327: function (e, n, t) {
      "use strict";
      var r = t(4867);
      function o(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, n, t) {
        if (!n) return e;
        var i;
        if (t) i = t(n);
        else if (r.isURLSearchParams(n)) i = n.toString();
        else {
          var u = [];
          r.forEach(n, function (e, n) {
            null !== e &&
              "undefined" !== typeof e &&
              (r.isArray(e) ? (n += "[]") : (e = [e]),
              r.forEach(e, function (e) {
                r.isDate(e)
                  ? (e = e.toISOString())
                  : r.isObject(e) && (e = JSON.stringify(e)),
                  u.push(o(n) + "=" + o(e));
              }));
          }),
            (i = u.join("&"));
        }
        if (i) {
          var a = e.indexOf("#");
          -1 !== a && (e = e.slice(0, a)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
        }
        return e;
      };
    },
    7303: function (e) {
      "use strict";
      e.exports = function (e, n) {
        return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
      };
    },
    4372: function (e, n, t) {
      "use strict";
      var r = t(4867);
      e.exports = r.isStandardBrowserEnv()
        ? {
            write: function (e, n, t, o, i, u) {
              var a = [];
              a.push(e + "=" + encodeURIComponent(n)),
                r.isNumber(t) && a.push("expires=" + new Date(t).toGMTString()),
                r.isString(o) && a.push("path=" + o),
                r.isString(i) && a.push("domain=" + i),
                !0 === u && a.push("secure"),
                (document.cookie = a.join("; "));
            },
            read: function (e) {
              var n = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return n ? decodeURIComponent(n[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    1793: function (e) {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      };
    },
    6268: function (e, n, t) {
      "use strict";
      var r = t(4867);
      e.exports = function (e) {
        return r.isObject(e) && !0 === e.isAxiosError;
      };
    },
    7985: function (e, n, t) {
      "use strict";
      var r = t(4867);
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
            var e,
              n = /(msie|trident)/i.test(navigator.userAgent),
              t = document.createElement("a");
            function o(e) {
              var r = e;
              return (
                n && (t.setAttribute("href", r), (r = t.href)),
                t.setAttribute("href", r),
                {
                  href: t.href,
                  protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                  host: t.host,
                  search: t.search ? t.search.replace(/^\?/, "") : "",
                  hash: t.hash ? t.hash.replace(/^#/, "") : "",
                  hostname: t.hostname,
                  port: t.port,
                  pathname:
                    "/" === t.pathname.charAt(0)
                      ? t.pathname
                      : "/" + t.pathname,
                }
              );
            }
            return (
              (e = o(window.location.href)),
              function (n) {
                var t = r.isString(n) ? o(n) : n;
                return t.protocol === e.protocol && t.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    6016: function (e, n, t) {
      "use strict";
      var r = t(4867);
      e.exports = function (e, n) {
        r.forEach(e, function (t, r) {
          r !== n &&
            r.toUpperCase() === n.toUpperCase() &&
            ((e[n] = t), delete e[r]);
        });
      };
    },
    4109: function (e, n, t) {
      "use strict";
      var r = t(4867),
        o = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var n,
          t,
          i,
          u = {};
        return e
          ? (r.forEach(e.split("\n"), function (e) {
              if (
                ((i = e.indexOf(":")),
                (n = r.trim(e.substr(0, i)).toLowerCase()),
                (t = r.trim(e.substr(i + 1))),
                n)
              ) {
                if (u[n] && o.indexOf(n) >= 0) return;
                u[n] =
                  "set-cookie" === n
                    ? (u[n] ? u[n] : []).concat([t])
                    : u[n]
                    ? u[n] + ", " + t
                    : t;
              }
            }),
            u)
          : u;
      };
    },
    8713: function (e) {
      "use strict";
      e.exports = function (e) {
        return function (n) {
          return e.apply(null, n);
        };
      };
    },
    4875: function (e, n, t) {
      "use strict";
      var r = t(7288).version,
        o = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, n) {
          o[e] = function (t) {
            return typeof t === e || "a" + (n < 1 ? "n " : " ") + e;
          };
        }
      );
      var i = {};
      (o.transitional = function (e, n, t) {
        function o(e, n) {
          return (
            "[Axios v" +
            r +
            "] Transitional option '" +
            e +
            "'" +
            n +
            (t ? ". " + t : "")
          );
        }
        return function (t, r, u) {
          if (!1 === e)
            throw new Error(o(r, " has been removed" + (n ? " in " + n : "")));
          return (
            n &&
              !i[r] &&
              ((i[r] = !0),
              console.warn(
                o(
                  r,
                  " has been deprecated since v" +
                    n +
                    " and will be removed in the near future"
                )
              )),
            !e || e(t, r, u)
          );
        };
      }),
        (e.exports = {
          assertOptions: function (e, n, t) {
            if ("object" !== typeof e)
              throw new TypeError("options must be an object");
            for (var r = Object.keys(e), o = r.length; o-- > 0; ) {
              var i = r[o],
                u = n[i];
              if (u) {
                var a = e[i],
                  s = void 0 === a || u(a, i, e);
                if (!0 !== s)
                  throw new TypeError("option " + i + " must be " + s);
              } else if (!0 !== t) throw Error("Unknown option " + i);
            }
          },
          validators: o,
        });
    },
    4867: function (e, n, t) {
      "use strict";
      var r = t(1849),
        o = Object.prototype.toString;
      function i(e) {
        return Array.isArray(e);
      }
      function u(e) {
        return "undefined" === typeof e;
      }
      function a(e) {
        return "[object ArrayBuffer]" === o.call(e);
      }
      function s(e) {
        return null !== e && "object" === typeof e;
      }
      function c(e) {
        if ("[object Object]" !== o.call(e)) return !1;
        var n = Object.getPrototypeOf(e);
        return null === n || n === Object.prototype;
      }
      function f(e) {
        return "[object Function]" === o.call(e);
      }
      function l(e, n) {
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), i(e)))
            for (var t = 0, r = e.length; t < r; t++) n.call(null, e[t], t, e);
          else
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                n.call(null, e[o], o, e);
      }
      e.exports = {
        isArray: i,
        isArrayBuffer: a,
        isBuffer: function (e) {
          return (
            null !== e &&
            !u(e) &&
            null !== e.constructor &&
            !u(e.constructor) &&
            "function" === typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          return "[object FormData]" === o.call(e);
        },
        isArrayBufferView: function (e) {
          return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && a(e.buffer);
        },
        isString: function (e) {
          return "string" === typeof e;
        },
        isNumber: function (e) {
          return "number" === typeof e;
        },
        isObject: s,
        isPlainObject: c,
        isUndefined: u,
        isDate: function (e) {
          return "[object Date]" === o.call(e);
        },
        isFile: function (e) {
          return "[object File]" === o.call(e);
        },
        isBlob: function (e) {
          return "[object Blob]" === o.call(e);
        },
        isFunction: f,
        isStream: function (e) {
          return s(e) && f(e.pipe);
        },
        isURLSearchParams: function (e) {
          return "[object URLSearchParams]" === o.call(e);
        },
        isStandardBrowserEnv: function () {
          return (
            ("undefined" === typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" !== typeof window &&
            "undefined" !== typeof document
          );
        },
        forEach: l,
        merge: function e() {
          var n = {};
          function t(t, r) {
            c(n[r]) && c(t)
              ? (n[r] = e(n[r], t))
              : c(t)
              ? (n[r] = e({}, t))
              : i(t)
              ? (n[r] = t.slice())
              : (n[r] = t);
          }
          for (var r = 0, o = arguments.length; r < o; r++) l(arguments[r], t);
          return n;
        },
        extend: function (e, n, t) {
          return (
            l(n, function (n, o) {
              e[o] = t && "function" === typeof n ? r(n, t) : n;
            }),
            e
          );
        },
        trim: function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
      };
    },
    2074: function (e, n) {
      "use strict";
      var t = {
        delay: 4e3,
        playOnInit: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
      };
      function r(e, n) {
        var o,
          i = Object.assign({}, t, r.globalOptions, e),
          u = i.playOnInit,
          a = i.stopOnInteraction,
          s = i.stopOnMouseEnter,
          c = i.stopOnLastSnap,
          f = i.delay,
          l = a ? p : v,
          d = 0;
        function p() {
          o.off("pointerDown", l), a || o.off("pointerUp", m), v(), (d = 0);
        }
        function h() {
          v(), (d = window.setTimeout(g, f));
        }
        function v() {
          d && window.clearTimeout(d);
        }
        function m() {
          d && (v(), h());
        }
        function g() {
          var e = o.internalEngine().index;
          if (c && e.get() === e.max) return p();
          o.canScrollNext() ? o.scrollNext() : o.scrollTo(0), h();
        }
        return {
          name: "Autoplay",
          options: i,
          init: function (e) {
            var t = (o = e).internalEngine().eventStore,
              r = o.rootNode(),
              i = (n && n(r)) || r;
            o.on("pointerDown", l),
              a || o.on("pointerUp", m),
              s && (t.add(i, "mouseenter", l), a || t.add(i, "mouseleave", m)),
              t.add(document, "visibilitychange", function () {
                if ("hidden" === document.visibilityState) return v();
                m();
              }),
              t.add(window, "pagehide", function (e) {
                e.persisted && v();
              }),
              u && h();
          },
          destroy: p,
          play: h,
          stop: v,
          reset: m,
        };
      }
      (r.globalOptions = void 0), (n.Z = r);
    },
    9635: function (e, n) {
      "use strict";
      var t = {
        selected: "is-selected",
        draggable: "is-draggable",
        dragging: "is-dragging",
      };
      function r(e, n) {
        var t = e.classList;
        n && t.contains(n) && t.remove(n);
      }
      function o(e, n) {
        var t = e.classList;
        n && !t.contains(n) && t.add(n);
      }
      function i(e) {
        var n,
          u,
          a,
          s = Object.assign({}, t, i.globalOptions, e),
          c = s.selected,
          f = s.draggable,
          l = s.dragging,
          d = ["select", "pointerUp"],
          p = ["pointerDown", "pointerUp"];
        function h(e) {
          "pointerDown" === e ? o(u, l) : r(u, l);
        }
        function v() {
          var e = n.slidesInView(!0);
          n.slidesNotInView(!0).forEach(function (e) {
            return r(a[e], c);
          }),
            e.forEach(function (e) {
              return o(a[e], c);
            });
        }
        return {
          name: "ClassNames",
          options: s,
          init: function (e) {
            (u = (n = e).rootNode()),
              (a = n.slideNodes()),
              n.internalEngine().options.draggable && o(u, f),
              l &&
                p.forEach(function (e) {
                  return n.on(e, h);
                }),
              c &&
                (d.forEach(function (e) {
                  return n.on(e, v);
                }),
                v());
          },
          destroy: function () {
            r(u, f),
              p.forEach(function (e) {
                return n.off(e, h);
              }),
              d.forEach(function (e) {
                return n.off(e, v);
              }),
              a.forEach(function (e) {
                return r(e, c);
              });
          },
        };
      }
      (i.globalOptions = void 0), (n.Z = i);
    },
    5585: function (e, n, t) {
      "use strict";
      var r = t(7294);
      function o(e, n) {
        return (
          Object.keys(e).length === Object.keys(n).length &&
          Object.keys(e).every(function (t) {
            return (
              !!Object.prototype.hasOwnProperty.call(n, t) && e[t] === n[t]
            );
          })
        );
      }
      function i(e) {
        return e
          .concat()
          .sort(function (e, n) {
            return e.name > n.name ? 1 : -1;
          })
          .map(function (e) {
            return e.options;
          });
      }
      function u(e, n) {
        var t = {
          start: function () {
            return 0;
          },
          center: function (e) {
            return r(e) / 2;
          },
          end: r,
        };
        function r(e) {
          return n - e;
        }
        return {
          measure: function (r) {
            return "number" === typeof e ? n * Number(e) : t[e](r);
          },
        };
      }
      function a(e) {
        return Math.abs(e);
      }
      function s(e) {
        return e ? e / a(e) : 0;
      }
      function c(e, n) {
        return a(e - n);
      }
      function f(e, n) {
        for (var t = [], r = 0; r < e.length; r += n) t.push(e.slice(r, r + n));
        return t;
      }
      function l(e) {
        return Object.keys(e).map(Number);
      }
      function d(e) {
        return e[p(e)];
      }
      function p(e) {
        return Math.max(0, e.length - 1);
      }
      function h(e, n) {
        var t = a(e - n);
        function r(n) {
          return n < e;
        }
        function o(e) {
          return e > n;
        }
        function i(e) {
          return r(e) || o(e);
        }
        return {
          length: t,
          max: n,
          min: e,
          constrain: function (t) {
            return i(t) ? (r(t) ? e : n) : t;
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function (e) {
            return t ? e - t * Math.ceil((e - n) / t) : e;
          },
        };
      }
      function v(e, n, t) {
        var r = h(0, e),
          o = r.min,
          i = r.constrain,
          u = e + 1,
          s = c(n);
        function c(e) {
          return t ? a((u + e) % u) : i(e);
        }
        function f() {
          return s;
        }
        function l(e) {
          return (s = c(e)), d;
        }
        var d = {
          add: function (e) {
            return l(f() + e);
          },
          clone: function () {
            return v(e, f(), t);
          },
          get: f,
          set: l,
          min: o,
          max: e,
        };
        return d;
      }
      function m() {
        var e = [];
        var n = {
          add: function (t, r, o, i) {
            return (
              void 0 === i && (i = !1),
              t.addEventListener(r, o, i),
              e.push(function () {
                return t.removeEventListener(r, o, i);
              }),
              n
            );
          },
          removeAll: function () {
            return (
              (e = e.filter(function (e) {
                return e();
              })),
              n
            );
          },
        };
        return n;
      }
      function g(e) {
        var n = e;
        function t(e) {
          return (n /= e), o;
        }
        function r(e) {
          return "number" === typeof e ? e : e.get();
        }
        var o = {
          add: function (e) {
            return (n += r(e)), o;
          },
          divide: t,
          get: function () {
            return n;
          },
          multiply: function (e) {
            return (n *= e), o;
          },
          normalize: function () {
            return 0 !== n && t(n), o;
          },
          set: function (e) {
            return (n = r(e)), o;
          },
          subtract: function (e) {
            return (n -= r(e)), o;
          },
        };
        return o;
      }
      function y(e, n, t, r, o, i, u, f, l, d, p, h, v, y, b) {
        var w = e.cross,
          x = ["INPUT", "SELECT", "TEXTAREA"],
          E = g(0),
          S = m(),
          O = m(),
          T = { mouse: 300, touch: 400 },
          A = { mouse: 500, touch: 600 },
          R = o ? 5 : 16,
          k = 0,
          C = 0,
          N = !1,
          j = !1,
          P = !1,
          L = !1;
        function B(e) {
          if (!(L = "mousedown" === e.type) || 0 === e.button) {
            var n = c(r.get(), u.get()) >= 2,
              o = L || !n,
              a = !(function (e) {
                var n = e.nodeName || "";
                return x.indexOf(n) > -1;
              })(e.target),
              s = n || (L && a);
            (N = !0),
              i.pointerDown(e),
              E.set(r),
              r.set(u),
              d.useBaseMass().useSpeed(80),
              (function () {
                var e = L ? document : t;
                O.add(e, "touchmove", D)
                  .add(e, "touchend", I)
                  .add(e, "mousemove", D)
                  .add(e, "mouseup", I);
              })(),
              (k = i.readPoint(e)),
              (C = i.readPoint(e, w)),
              v.emit("pointerDown"),
              o && (P = !1),
              s && e.preventDefault();
          }
        }
        function D(e) {
          if (!j && !L) {
            if (!e.cancelable) return I(e);
            var t = i.readPoint(e),
              o = i.readPoint(e, w),
              u = c(t, k),
              a = c(o, C);
            if (!(j = u > a) && !P) return I(e);
          }
          var s = i.pointerMove(e);
          !P && s && (P = !0), f.start(), r.add(n.apply(s)), e.preventDefault();
        }
        function I(e) {
          var t = p.byDistance(0, !1).index !== h.get(),
            u = i.pointerUp(e) * (o ? A : T)[L ? "mouse" : "touch"],
            f = (function (e, n) {
              var t = h.clone().add(-1 * s(e)),
                r = t.get() === h.min || t.get() === h.max,
                i = p.byDistance(e, !o).distance;
              return o || a(e) < 20
                ? i
                : !y && r
                ? 0.4 * i
                : b && n
                ? 0.5 * i
                : p.byIndex(t.get(), 0).distance;
            })(n.apply(u), t),
            m = (function (e, n) {
              if (0 === e || 0 === n) return 0;
              if (a(e) <= a(n)) return 0;
              var t = c(a(e), a(n));
              return a(t / e);
            })(u, f),
            g = c(r.get(), E.get()) >= 0.5,
            w = t && m > 0.75,
            x = a(u) < 20,
            S = w ? 10 : R,
            k = w ? 1 + 2.5 * m : 1;
          g && !L && (P = !0),
            (j = !1),
            (N = !1),
            O.removeAll(),
            d.useSpeed(x ? 9 : S).useMass(k),
            l.distance(f, !o),
            (L = !1),
            v.emit("pointerUp");
        }
        function U(e) {
          P && e.preventDefault();
        }
        return {
          addActivationEvents: function () {
            var e = t;
            S.add(e, "touchmove", function () {})
              .add(e, "touchend", function () {})
              .add(e, "touchstart", B)
              .add(e, "mousedown", B)
              .add(e, "touchcancel", I)
              .add(e, "contextmenu", I)
              .add(e, "click", U);
          },
          clickAllowed: function () {
            return !P;
          },
          pointerDown: function () {
            return N;
          },
          removeAllEvents: function () {
            S.removeAll(), O.removeAll();
          },
        };
      }
      function b(e, n, t) {
        var r = (function (e) {
            var n = Math.pow(10, e);
            return function (e) {
              return Math.round(e * n) / n;
            };
          })(2),
          o = g(0),
          i = g(0),
          u = g(0),
          a = 0,
          c = n,
          f = t;
        function l(e) {
          return (c = e), p;
        }
        function d(e) {
          return (f = e), p;
        }
        var p = {
          direction: function () {
            return a;
          },
          seek: function (n) {
            u.set(n).subtract(e);
            var t,
              r,
              l,
              d,
              h =
                ((t = u.get()),
                (l = 0) + ((t - (r = 0)) / (100 - r)) * (c - l));
            return (
              (a = s(u.get())),
              u.normalize().multiply(h).subtract(o),
              (d = u).divide(f),
              i.add(d),
              p
            );
          },
          settle: function (n) {
            var t = n.get() - e.get(),
              o = !r(t);
            return o && e.set(n), o;
          },
          update: function () {
            o.add(i), e.add(o), i.multiply(0);
          },
          useBaseMass: function () {
            return d(t);
          },
          useBaseSpeed: function () {
            return l(n);
          },
          useMass: d,
          useSpeed: l,
        };
        return p;
      }
      function w(e, n, t, r) {
        var o = !1;
        return {
          constrain: function (i) {
            if (!o && e.reachedAny(t.get()) && e.reachedAny(n.get())) {
              var u = e.reachedMin(n.get()) ? "min" : "max",
                s = a(e[u] - n.get()),
                c = t.get() - n.get(),
                f = Math.min(s / 50, 0.85);
              t.subtract(c * f),
                !i &&
                  a(c) < 10 &&
                  (t.set(e.constrain(t.get())), r.useSpeed(10).useMass(3));
            }
          },
          toggleActive: function (e) {
            o = !e;
          },
        };
      }
      function x(e, n, t, r, o) {
        var i = h(-n + e, t[0]),
          u = r.map(i.constrain);
        return {
          snapsContained: (function () {
            if (n <= e) return [i.max];
            if ("keepSnaps" === o) return u;
            var t = (function () {
                var e = u[0],
                  n = d(u),
                  t = u.lastIndexOf(e),
                  r = u.indexOf(n) + 1;
                return h(t, r);
              })(),
              r = t.min,
              a = t.max;
            return u.slice(r, a);
          })(),
        };
      }
      function E(e, n, t, r, o) {
        var i = h(t.min + n.measure(0.1), t.max + n.measure(0.1)),
          u = i.reachedMin,
          a = i.reachedMax;
        return {
          loop: function (n) {
            if (
              (function (e) {
                return 1 === e ? a(r.get()) : -1 === e && u(r.get());
              })(n)
            ) {
              var t = e * (-1 * n);
              o.forEach(function (e) {
                return e.add(t);
              });
            }
          },
        };
      }
      function S(e) {
        var n = e.max,
          t = e.length;
        return {
          get: function (e) {
            return (e - n) / -t;
          },
        };
      }
      function O(e, n, t, r, o, i) {
        var u = e.startEdge,
          s = e.endEdge,
          c = o
            .map(function (e) {
              return r[u] - e[u];
            })
            .map(t.measure)
            .map(function (e) {
              return -a(e);
            }),
          l = (function () {
            var e = f(c, i).map(function (e) {
                return e[0];
              }),
              r = f(o, i)
                .map(function (e) {
                  return d(e)[s] - e[0][u];
                })
                .map(t.measure)
                .map(a)
                .map(n.measure);
            return e.map(function (e, n) {
              return e + r[n];
            });
          })();
        return { snaps: c, snapsAligned: l };
      }
      function T(e, n, t, r, o) {
        var i = r.reachedAny,
          u = r.removeOffset,
          s = r.constrain;
        function c(e, n) {
          return a(e) < a(n) ? e : n;
        }
        function f(n, r) {
          var o = n,
            i = n + t,
            u = n - t;
          return e ? (r ? a(c(o, 1 === r ? i : u)) * r : c(c(o, i), u)) : o;
        }
        return {
          byDistance: function (t, r) {
            var c = o.get() + t,
              l = (function (t) {
                var r = e ? u(t) : s(t);
                return {
                  index: n
                    .map(function (e) {
                      return e - r;
                    })
                    .map(function (e) {
                      return f(e, 0);
                    })
                    .map(function (e, n) {
                      return { diff: e, index: n };
                    })
                    .sort(function (e, n) {
                      return a(e.diff) - a(n.diff);
                    })[0].index,
                  distance: r,
                };
              })(c),
              d = l.index,
              p = l.distance,
              h = !e && i(c);
            return !r || h
              ? { index: d, distance: t }
              : { index: d, distance: t + f(n[d] - p, 0) };
          },
          byIndex: function (e, t) {
            return { index: e, distance: f(n[e] - o.get(), t) };
          },
          shortcut: f,
        };
      }
      function A(e, n, t, r, o, i, u, a) {
        var s = l(r),
          c = l(r).reverse(),
          f = (function () {
            var e = o[0] - 1;
            return h(p(c, e), "end");
          })().concat(
            (function () {
              var e = n - o[0] - 1;
              return h(p(s, e), "start");
            })()
          );
        function d(e, n) {
          return e.reduce(function (e, n) {
            return e - r[n];
          }, n);
        }
        function p(e, n) {
          return e.reduce(function (e, t) {
            return d(e, n) > 0 ? e.concat([t]) : e;
          }, []);
        }
        function h(e, n) {
          var r = "start" === n,
            o = r ? -t : t,
            a = i.findSlideBounds([o]);
          return e.map(function (e) {
            var n = r ? 0 : -t,
              o = r ? t : 0,
              i = a.filter(function (n) {
                return n.index === e;
              })[0][r ? "end" : "start"];
            return {
              point: i,
              getTarget: function () {
                return u.get() > i ? n : o;
              },
              index: e,
              location: -1,
            };
          });
        }
        return {
          canLoop: function () {
            return f.every(function (e) {
              var t = e.index;
              return (
                d(
                  s.filter(function (e) {
                    return e !== t;
                  }),
                  n
                ) <= 0
              );
            });
          },
          clear: function () {
            f.forEach(function (n) {
              var t = n.index;
              a[t].style[e.startEdge] = "";
            });
          },
          loop: function () {
            f.forEach(function (n) {
              var t = n.getTarget,
                r = n.location,
                o = n.index,
                i = t();
              i !== r &&
                ((a[o].style[e.startEdge] = i + "%"), (n.location = i));
            });
          },
          loopPoints: f,
        };
      }
      function R(e, n, t) {
        var r =
            "x" === e.scroll
              ? function (e) {
                  return "translate3d(" + e + "%,0px,0px)";
                }
              : function (e) {
                  return "translate3d(0px," + e + "%,0px)";
                },
          o = t.style,
          i = !1;
        return {
          clear: function () {
            o.transform = "";
          },
          to: function (e) {
            i || (o.transform = r(n.apply(e.get())));
          },
          toggleActive: function (e) {
            i = !e;
          },
        };
      }
      function k(e, n, t, r, o) {
        var i,
          s = r.align,
          c = r.axis,
          f = r.direction,
          k = r.startIndex,
          C = r.inViewThreshold,
          N = r.loop,
          j = r.speed,
          P = r.dragFree,
          L = r.slidesToScroll,
          B = r.skipSnaps,
          D = r.containScroll,
          I = n.getBoundingClientRect(),
          U = t.map(function (e) {
            return e.getBoundingClientRect();
          }),
          M = (function (e) {
            var n = "rtl" === e ? -1 : 1;
            return {
              apply: function (e) {
                return e * n;
              },
            };
          })(f),
          V = (function (e, n) {
            var t = "y" === e ? "y" : "x";
            return {
              scroll: t,
              cross: "y" === e ? "x" : "y",
              startEdge: "y" === t ? "top" : "rtl" === n ? "right" : "left",
              endEdge: "y" === t ? "bottom" : "rtl" === n ? "left" : "right",
              measureSize: function (e) {
                var n = e.width,
                  r = e.height;
                return "x" === t ? n : r;
              },
            };
          })(c, f),
          _ =
            ((i = V.measureSize(I)),
            {
              measure: function (e) {
                return 0 === i ? 0 : (e / i) * 100;
              },
              totalPercent: 100,
            }),
          q = _.totalPercent,
          F = u(s, q),
          z = (function (e, n, t, r, o) {
            var i = e.measureSize,
              u = e.startEdge,
              s = e.endEdge,
              c = r.map(i);
            return {
              slideSizes: c.map(n.measure),
              slideSizesWithGaps: r
                .map(function (e, n, r) {
                  var i = n === p(r),
                    a = window.getComputedStyle(d(t)),
                    f = parseFloat(a.getPropertyValue("margin-" + s));
                  return i ? c[n] + (o ? f : 0) : r[n + 1][u] - e[u];
                })
                .map(n.measure)
                .map(a),
            };
          })(V, _, t, U, N),
          H = z.slideSizes,
          J = z.slideSizesWithGaps,
          W = O(V, F, _, I, U, L),
          X = W.snaps,
          $ = W.snapsAligned,
          G = -d(X) + d(J),
          Z = x(q, G, X, $, D).snapsContained,
          K = !N && "" !== D ? Z : $,
          Y = (function (e, n, t) {
            return {
              limit: (function () {
                var r = n[0],
                  o = d(n);
                return h(t ? r - e : o, r);
              })(),
            };
          })(G, K, N).limit,
          Q = v(p(K), k, N),
          ee = Q.clone(),
          ne = l(t),
          te = (function (e) {
            var n = 0;
            function t(e, t) {
              return function () {
                e === !!n && t();
              };
            }
            function r() {
              n = window.requestAnimationFrame(e);
            }
            return {
              proceed: t(!0, r),
              start: t(!1, r),
              stop: t(!0, function () {
                window.cancelAnimationFrame(n), (n = 0);
              }),
            };
          })(function () {
            N || le.scrollBounds.constrain(le.dragHandler.pointerDown()),
              le.scrollBody.seek(ie).update();
            var e = le.scrollBody.settle(ie);
            e &&
              !le.dragHandler.pointerDown() &&
              (le.animation.stop(), o.emit("settle")),
              e || o.emit("scroll"),
              N &&
                (le.scrollLooper.loop(le.scrollBody.direction()),
                le.slideLooper.loop()),
              le.translate.to(oe),
              le.animation.proceed();
          }),
          re = K[Q.get()],
          oe = g(re),
          ie = g(re),
          ue = b(oe, j, 1),
          ae = T(N, K, G, Y, ie),
          se = (function (e, n, t, r, o, i) {
            function u(r) {
              var u = r.distance,
                a = r.index !== n.get();
              u && (e.start(), o.add(u)),
                a && (t.set(n.get()), n.set(r.index), i.emit("select"));
            }
            return {
              distance: function (e, n) {
                u(r.byDistance(e, n));
              },
              index: function (e, t) {
                var o = n.clone().set(e);
                u(r.byIndex(o.get(), t));
              },
            };
          })(te, Q, ee, ae, ie, o),
          ce = (function (e, n, t, r, o, i, u) {
            var a = o.removeOffset,
              s = o.constrain,
              c = Math.min(Math.max(u, 0.01), 0.99),
              f = i ? [0, n, -n] : [0],
              l = d(f, c);
            function d(n, o) {
              var i = n || f,
                u = o || 0,
                a = t.map(function (e) {
                  return e * u;
                });
              return i.reduce(function (n, o) {
                var i = r.map(function (n, r) {
                  return {
                    start: n - t[r] + a[r] + o,
                    end: n + e - a[r] + o,
                    index: r,
                  };
                });
                return n.concat(i);
              }, []);
            }
            return {
              check: function (e, n) {
                var t = i ? a(e) : s(e);
                return (n || l).reduce(function (e, n) {
                  var r = n.index,
                    o = n.start,
                    i = n.end;
                  return -1 === e.indexOf(r) && o < t && i > t
                    ? e.concat([r])
                    : e;
                }, []);
              },
              findSlideBounds: d,
            };
          })(q, G, H, X, Y, N, C),
          fe = y(
            V,
            M,
            e,
            ie,
            P,
            (function (e, n) {
              var t, r;
              function o(e) {
                return (
                  "undefined" !== typeof TouchEvent && e instanceof TouchEvent
                );
              }
              function i(e) {
                return e.timeStamp;
              }
              function u(n, t) {
                var r = "client" + ("x" === (t || e.scroll) ? "X" : "Y");
                return (o(n) ? n.touches[0] : n)[r];
              }
              return {
                isTouchEvent: o,
                pointerDown: function (e) {
                  return (t = e), (r = e), n.measure(u(e));
                },
                pointerMove: function (e) {
                  var o = u(e) - u(r),
                    a = i(e) - i(t) > 170;
                  return (r = e), a && (t = e), n.measure(o);
                },
                pointerUp: function (e) {
                  if (!t || !r) return 0;
                  var o = u(r) - u(t),
                    s = i(e) - i(t),
                    c = i(e) - i(r) > 170,
                    f = o / s;
                  return s && !c && a(f) > 0.1 ? n.measure(f) : 0;
                },
                readPoint: u,
              };
            })(V, _),
            oe,
            te,
            se,
            ue,
            ae,
            Q,
            o,
            N,
            B
          ),
          le = {
            containerRect: I,
            slideRects: U,
            animation: te,
            axis: V,
            direction: M,
            dragHandler: fe,
            eventStore: m(),
            pxToPercent: _,
            index: Q,
            indexPrevious: ee,
            limit: Y,
            location: oe,
            options: r,
            scrollBody: ue,
            scrollBounds: w(Y, oe, ie, ue),
            scrollLooper: E(G, _, Y, oe, [oe, ie]),
            scrollProgress: S(Y),
            scrollSnaps: K,
            scrollTarget: ae,
            scrollTo: se,
            slideLooper: A(V, q, G, J, K, ce, oe, t),
            slidesInView: ce,
            slideIndexes: ne,
            target: ie,
            translate: R(V, M, n),
          };
        return le;
      }
      var C = {
        align: "center",
        axis: "x",
        containScroll: "",
        direction: "ltr",
        dragFree: !1,
        draggable: !0,
        inViewThreshold: 0,
        loop: !1,
        skipSnaps: !1,
        slidesToScroll: 1,
        speed: 10,
        startIndex: 0,
      };
      function N(e, n, t) {
        var r,
          o,
          i,
          u,
          a,
          s,
          c = (function () {
            var e = {};
            function n(n) {
              return e[n] || [];
            }
            var t = {
              emit: function (e) {
                return (
                  n(e).forEach(function (n) {
                    return n(e);
                  }),
                  t
                );
              },
              off: function (r, o) {
                return (
                  (e[r] = n(r).filter(function (e) {
                    return e !== o;
                  })),
                  t
                );
              },
              on: function (r, o) {
                return (e[r] = n(r).concat([o])), t;
              },
            };
            return t;
          })(),
          f = (function (e, n) {
            var t = 0;
            return function () {
              window.clearTimeout(t), (t = window.setTimeout(e, n) || 0);
            };
          })(function () {
            if (!h) return;
            var e = r.axis.measureSize(u.getBoundingClientRect());
            g !== e && w();
            c.emit("resize");
          }, 500),
          l = w,
          d = c.on,
          p = c.off,
          h = !1,
          v = Object.assign({}, C, N.globalOptions),
          m = Object.assign({}, v),
          g = 0;
        function y() {
          var n = "container" in e && e.container,
            t = "slides" in e && e.slides;
          (u = "root" in e ? e.root : e),
            (a = n || u.children[0]),
            (s = t || [].slice.call(a.children)),
            (o = (function (e) {
              var n = getComputedStyle(e, ":before").content;
              return {
                get: function () {
                  try {
                    return JSON.parse(n.slice(1, -1).replace(/\\/g, ""));
                  } catch (e) {}
                  return {};
                },
              };
            })(u));
        }
        function b(e, n) {
          if (
            (y(),
            (v = Object.assign({}, v, e)),
            (m = Object.assign({}, v, o.get())),
            (i = Object.assign([], n)),
            (r = k(u, a, s, m, c)).eventStore.add(window, "resize", f),
            r.translate.to(r.location),
            (g = r.axis.measureSize(u.getBoundingClientRect())),
            i.forEach(function (e) {
              return e.init(T);
            }),
            m.loop)
          ) {
            if (!r.slideLooper.canLoop()) return x(), b({ loop: !1 }, n);
            r.slideLooper.loop();
          }
          m.draggable &&
            a.offsetParent &&
            s.length &&
            r.dragHandler.addActivationEvents(),
            h ||
              (setTimeout(function () {
                return c.emit("init");
              }, 0),
              (h = !0));
        }
        function w(e, n) {
          if (h) {
            var t = O(),
              r = Object.assign({ startIndex: t }, e);
            x(), b(r, n || i), c.emit("reInit");
          }
        }
        function x() {
          r.dragHandler.removeAllEvents(),
            r.animation.stop(),
            r.eventStore.removeAll(),
            r.translate.clear(),
            r.slideLooper.clear(),
            i.forEach(function (e) {
              return e.destroy();
            });
        }
        function E(e) {
          var n = r[e ? "target" : "location"].get(),
            t = m.loop ? "removeOffset" : "constrain";
          return r.slidesInView.check(r.limit[t](n));
        }
        function S(e, n, t) {
          r.scrollBody.useBaseMass().useSpeed(n ? 100 : m.speed),
            h && r.scrollTo.index(e, t || 0);
        }
        function O() {
          return r.index.get();
        }
        var T = {
          canScrollNext: function () {
            return r.index.clone().add(1).get() !== O();
          },
          canScrollPrev: function () {
            return r.index.clone().add(-1).get() !== O();
          },
          clickAllowed: function () {
            return r.dragHandler.clickAllowed();
          },
          containerNode: function () {
            return a;
          },
          internalEngine: function () {
            return r;
          },
          destroy: function () {
            h && (x(), (h = !1), c.emit("destroy"));
          },
          off: p,
          on: d,
          previousScrollSnap: function () {
            return r.indexPrevious.get();
          },
          reInit: l,
          rootNode: function () {
            return u;
          },
          scrollNext: function (e) {
            S(r.index.clone().add(1).get(), !0 === e, -1);
          },
          scrollPrev: function (e) {
            S(r.index.clone().add(-1).get(), !0 === e, 1);
          },
          scrollProgress: function () {
            return r.scrollProgress.get(r.location.get());
          },
          scrollSnapList: function () {
            return r.scrollSnaps.map(r.scrollProgress.get);
          },
          scrollTo: S,
          selectedScrollSnap: O,
          slideNodes: function () {
            return s;
          },
          slidesInView: E,
          slidesNotInView: function (e) {
            var n = E(e);
            return r.slideIndexes.filter(function (e) {
              return -1 === n.indexOf(e);
            });
          },
        };
        return b(n, t), T;
      }
      function j(e, n) {
        void 0 === e && (e = {}), void 0 === n && (n = []);
        var t = (0, r.useState)(),
          u = t[0],
          a = t[1],
          s = (0, r.useState)(),
          c = s[0],
          f = s[1],
          l = (0, r.useRef)(e),
          d = (0, r.useRef)(n),
          p = (0, r.useMemo)(
            function () {
              return o(l.current, e) || (l.current = e), l.current;
            },
            [l, e]
          ),
          h = (0, r.useMemo)(
            function () {
              return (
                (function (e, n) {
                  if (e.length !== n.length) return !1;
                  var t = i(e),
                    r = i(n);
                  return t.every(function (e, n) {
                    return o(e, r[n]);
                  });
                })(d.current, n) || (d.current = n),
                d.current
              );
            },
            [d, n]
          );
        return (
          (0, r.useEffect)(
            function () {
              if (
                "undefined" !== typeof window &&
                window.document &&
                window.document.createElement &&
                c
              ) {
                N.globalOptions = j.globalOptions;
                var e = N(c, p, h);
                return (
                  a(e),
                  function () {
                    return e.destroy();
                  }
                );
              }
              a(void 0);
            },
            [c, p, h, a]
          ),
          [f, u]
        );
      }
      (N.globalOptions = void 0), (j.globalOptions = void 0), (n.Z = j);
    },
    3454: function (e, n, t) {
      "use strict";
      var r, o;
      e.exports =
        (null === (r = t.g.process) || void 0 === r ? void 0 : r.env) &&
        "object" ===
          typeof (null === (o = t.g.process) || void 0 === o ? void 0 : o.env)
          ? t.g.process
          : t(7663);
    },
    7663: function (e) {
      !(function () {
        var n = {
            162: function (e) {
              var n,
                t,
                r = (e.exports = {});
              function o() {
                throw new Error("setTimeout has not been defined");
              }
              function i() {
                throw new Error("clearTimeout has not been defined");
              }
              function u(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === o || !n) && setTimeout)
                  return (n = setTimeout), setTimeout(e, 0);
                try {
                  return n(e, 0);
                } catch (r) {
                  try {
                    return n.call(null, e, 0);
                  } catch (r) {
                    return n.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  n = "function" === typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  n = o;
                }
                try {
                  t = "function" === typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  t = i;
                }
              })();
              var a,
                s = [],
                c = !1,
                f = -1;
              function l() {
                c &&
                  a &&
                  ((c = !1),
                  a.length ? (s = a.concat(s)) : (f = -1),
                  s.length && d());
              }
              function d() {
                if (!c) {
                  var e = u(l);
                  c = !0;
                  for (var n = s.length; n; ) {
                    for (a = s, s = []; ++f < n; ) a && a[f].run();
                    (f = -1), (n = s.length);
                  }
                  (a = null),
                    (c = !1),
                    (function (e) {
                      if (t === clearTimeout) return clearTimeout(e);
                      if ((t === i || !t) && clearTimeout)
                        return (t = clearTimeout), clearTimeout(e);
                      try {
                        t(e);
                      } catch (n) {
                        try {
                          return t.call(null, e);
                        } catch (n) {
                          return t.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function p(e, n) {
                (this.fun = e), (this.array = n);
              }
              function h() {}
              (r.nextTick = function (e) {
                var n = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var t = 1; t < arguments.length; t++)
                    n[t - 1] = arguments[t];
                s.push(new p(e, n)), 1 !== s.length || c || u(d);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = h),
                (r.addListener = h),
                (r.once = h),
                (r.off = h),
                (r.removeListener = h),
                (r.removeAllListeners = h),
                (r.emit = h),
                (r.prependListener = h),
                (r.prependOnceListener = h),
                (r.listeners = function (e) {
                  return [];
                }),
                (r.binding = function (e) {
                  throw new Error("process.binding is not supported");
                }),
                (r.cwd = function () {
                  return "/";
                }),
                (r.chdir = function (e) {
                  throw new Error("process.chdir is not supported");
                }),
                (r.umask = function () {
                  return 0;
                });
            },
          },
          t = {};
        function r(e) {
          var o = t[e];
          if (void 0 !== o) return o.exports;
          var i = (t[e] = { exports: {} }),
            u = !0;
          try {
            n[e](i, i.exports, r), (u = !1);
          } finally {
            u && delete t[e];
          }
          return i.exports;
        }
        r.ab = "//";
        var o = r(162);
        e.exports = o;
      })();
    },
    8100: function (e, n, t) {
      "use strict";
      t.d(n, {
        ZP: function () {
          return Z;
        },
      });
      var r = t(7294);
      function o(e, n, t, r) {
        return new (t || (t = Promise))(function (o, i) {
          function u(e) {
            try {
              s(r.next(e));
            } catch (n) {
              i(n);
            }
          }
          function a(e) {
            try {
              s(r.throw(e));
            } catch (n) {
              i(n);
            }
          }
          function s(e) {
            var n;
            e.done
              ? o(e.value)
              : ((n = e.value),
                n instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })).then(u, a);
          }
          s((r = r.apply(e, n || [])).next());
        });
      }
      function i(e, n) {
        var t,
          r,
          o,
          i,
          u = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(i) {
          return function (a) {
            return (function (i) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; u; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return u.label++, { value: i[1], done: !1 };
                    case 5:
                      u.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = u.ops.pop()), u.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = u.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        u = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        u.label = i[1];
                        break;
                      }
                      if (6 === i[0] && u.label < o[1]) {
                        (u.label = o[1]), (o = i);
                        break;
                      }
                      if (o && u.label < o[2]) {
                        (u.label = o[2]), u.ops.push(i);
                        break;
                      }
                      o[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  i = n.call(e, u);
                } catch (a) {
                  (i = [6, a]), (r = 0);
                } finally {
                  t = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, a]);
          };
        }
      }
      var u,
        a = function () {},
        s = a(),
        c = Object,
        f = function (e) {
          return e === s;
        },
        l = function (e) {
          return "function" == typeof e;
        },
        d = function (e, n) {
          return c.assign({}, e, n);
        },
        p = "undefined",
        h = function () {
          return typeof window != p;
        },
        v = new WeakMap(),
        m = 0,
        g = function (e) {
          var n,
            t,
            r = typeof e,
            o = e && e.constructor,
            i = o == Date;
          if (c(e) !== e || i || o == RegExp)
            n = i
              ? e.toJSON()
              : "symbol" == r
              ? e.toString()
              : "string" == r
              ? JSON.stringify(e)
              : "" + e;
          else {
            if ((n = v.get(e))) return n;
            if (((n = ++m + "~"), v.set(e, n), o == Array)) {
              for (n = "@", t = 0; t < e.length; t++) n += g(e[t]) + ",";
              v.set(e, n);
            }
            if (o == c) {
              n = "#";
              for (var u = c.keys(e).sort(); !f((t = u.pop())); )
                f(e[t]) || (n += t + ":" + g(e[t]) + ",");
              v.set(e, n);
            }
          }
          return n;
        },
        y = !0,
        b = h(),
        w = typeof document != p,
        x =
          b && window.addEventListener
            ? window.addEventListener.bind(window)
            : a,
        E = w ? document.addEventListener.bind(document) : a,
        S =
          b && window.removeEventListener
            ? window.removeEventListener.bind(window)
            : a,
        O = w ? document.removeEventListener.bind(document) : a,
        T = {
          isOnline: function () {
            return y;
          },
          isVisible: function () {
            var e = w && document.visibilityState;
            return f(e) || "hidden" !== e;
          },
        },
        A = {
          initFocus: function (e) {
            return (
              E("visibilitychange", e),
              x("focus", e),
              function () {
                O("visibilitychange", e), S("focus", e);
              }
            );
          },
          initReconnect: function (e) {
            var n = function () {
                (y = !0), e();
              },
              t = function () {
                y = !1;
              };
            return (
              x("online", n),
              x("offline", t),
              function () {
                S("online", n), S("offline", t);
              }
            );
          },
        },
        R = !h() || "Deno" in window,
        k = function (e) {
          return h() && typeof window.requestAnimationFrame != p
            ? window.requestAnimationFrame(e)
            : setTimeout(e, 1);
        },
        C = R ? r.useEffect : r.useLayoutEffect,
        N = "undefined" !== typeof navigator && navigator.connection,
        j =
          !R &&
          N &&
          (["slow-2g", "2g"].includes(N.effectiveType) || N.saveData),
        P = function (e) {
          if (l(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          var n = [].concat(e);
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? g(e)
                : ""),
            n,
            e ? "$swr$" + e : "",
          ];
        },
        L = new WeakMap(),
        B = function (e, n, t, r, o, i, u) {
          void 0 === u && (u = !0);
          var a = L.get(e),
            s = a[0],
            c = a[1],
            f = a[3],
            l = s[n],
            d = c[n];
          if (u && d) for (var p = 0; p < d.length; ++p) d[p](t, r, o);
          return i && (delete f[n], l && l[0])
            ? l[0](2).then(function () {
                return e.get(n);
              })
            : e.get(n);
        },
        D = 0,
        I = function () {
          return ++D;
        },
        U = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          return o(void 0, void 0, void 0, function () {
            var n, t, r, o, u, a, c, p, h, v, m, g, y, b, w, x, E, S, O, T, A;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    ((n = e[0]),
                    (t = e[1]),
                    (r = e[2]),
                    (o = e[3]),
                    (a =
                      !!f(
                        (u =
                          "boolean" === typeof o ? { revalidate: o } : o || {})
                          .populateCache
                      ) || u.populateCache),
                    (c = !1 !== u.revalidate),
                    (p = !1 !== u.rollbackOnError),
                    (h = u.optimisticData),
                    (v = P(t)),
                    (m = v[0]),
                    (g = v[2]),
                    !m)
                  )
                    return [2];
                  if (((y = L.get(n)), (b = y[2]), e.length < 3))
                    return [2, B(n, m, n.get(m), s, s, c, !0)];
                  if (
                    ((w = r),
                    (E = I()),
                    (b[m] = [E, 0]),
                    (S = !f(h)),
                    (O = n.get(m)),
                    S && ((T = l(h) ? h(O) : h), n.set(m, T), B(n, m, T)),
                    l(w))
                  )
                    try {
                      w = w(n.get(m));
                    } catch (R) {
                      x = R;
                    }
                  return w && l(w.then)
                    ? [
                        4,
                        w.catch(function (e) {
                          x = e;
                        }),
                      ]
                    : [3, 2];
                case 1:
                  if (((w = i.sent()), E !== b[m][0])) {
                    if (x) throw x;
                    return [2, w];
                  }
                  x && S && p && ((a = !0), (w = O), n.set(m, O)),
                    (i.label = 2);
                case 2:
                  return (
                    a &&
                      (x || (l(a) && (w = a(w, O)), n.set(m, w)),
                      n.set(g, d(n.get(g), { error: x }))),
                    (b[m][1] = I()),
                    [4, B(n, m, w, x, s, c, !!a)]
                  );
                case 3:
                  if (((A = i.sent()), x)) throw x;
                  return [2, a ? A : w];
              }
            });
          });
        },
        M = function (e, n) {
          for (var t in e) e[t][0] && e[t][0](n);
        },
        V = function (e, n) {
          if (!L.has(e)) {
            var t = d(A, n),
              r = {},
              o = U.bind(s, e),
              i = a;
            if ((L.set(e, [r, {}, {}, {}, o]), !R)) {
              var u = t.initFocus(setTimeout.bind(s, M.bind(s, r, 0))),
                c = t.initReconnect(setTimeout.bind(s, M.bind(s, r, 1)));
              i = function () {
                u && u(), c && c(), L.delete(e);
              };
            }
            return [e, o, i];
          }
          return [e, L.get(e)[4]];
        },
        _ = V(new Map()),
        q = _[0],
        F = _[1],
        z = d(
          {
            onLoadingSlow: a,
            onSuccess: a,
            onError: a,
            onErrorRetry: function (e, n, t, r, o) {
              var i = t.errorRetryCount,
                u = o.retryCount,
                a =
                  ~~((Math.random() + 0.5) * (1 << (u < 8 ? u : 8))) *
                  t.errorRetryInterval;
              (!f(i) && u > i) || setTimeout(r, a, o);
            },
            onDiscarded: a,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: j ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: j ? 5e3 : 3e3,
            compare: function (e, n) {
              return g(e) == g(n);
            },
            isPaused: function () {
              return !1;
            },
            cache: q,
            mutate: F,
            fallback: {},
          },
          T
        ),
        H = function (e, n) {
          var t = d(e, n);
          if (n) {
            var r = e.use,
              o = e.fallback,
              i = n.use,
              u = n.fallback;
            r && i && (t.use = r.concat(i)), o && u && (t.fallback = d(o, u));
          }
          return t;
        },
        J = (0, r.createContext)({}),
        W = function (e) {
          return l(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}];
        },
        X = function () {
          return d(z, (0, r.useContext)(J));
        },
        $ = function (e, n, t) {
          var r = n[e] || (n[e] = []);
          return (
            r.push(t),
            function () {
              var e = r.indexOf(t);
              e >= 0 && ((r[e] = r[r.length - 1]), r.pop());
            }
          );
        },
        G = { dedupe: !0 },
        Z =
          (c.defineProperty(
            function (e) {
              var n = e.value,
                t = H((0, r.useContext)(J), n),
                o = n && n.provider,
                i = (0, r.useState)(function () {
                  return o ? V(o(t.cache || q), n) : s;
                })[0];
              return (
                i && ((t.cache = i[0]), (t.mutate = i[1])),
                C(function () {
                  return i ? i[2] : s;
                }, []),
                (0, r.createElement)(J.Provider, d(e, { value: t }))
              );
            },
            "default",
            { value: z }
          ),
          (u = function (e, n, t) {
            var u = t.cache,
              a = t.compare,
              c = t.fallbackData,
              p = t.suspense,
              h = t.revalidateOnMount,
              v = t.refreshInterval,
              m = t.refreshWhenHidden,
              g = t.refreshWhenOffline,
              y = L.get(u),
              b = y[0],
              w = y[1],
              x = y[2],
              E = y[3],
              S = P(e),
              O = S[0],
              T = S[1],
              A = S[2],
              N = (0, r.useRef)(!1),
              j = (0, r.useRef)(!1),
              D = (0, r.useRef)(O),
              M = (0, r.useRef)(n),
              V = (0, r.useRef)(t),
              _ = function () {
                return V.current;
              },
              q = function () {
                return _().isVisible() && _().isOnline();
              },
              F = function (e) {
                return u.set(A, d(u.get(A), e));
              },
              z = u.get(O),
              H = f(c) ? t.fallback[O] : c,
              J = f(z) ? H : z,
              W = u.get(A) || {},
              X = W.error,
              Z = !N.current,
              K = function () {
                return Z && !f(h)
                  ? h
                  : !_().isPaused() &&
                      (p
                        ? !f(J) && t.revalidateIfStale
                        : f(J) || t.revalidateIfStale);
              },
              Y = !(!O || !n) && (!!W.isValidating || (Z && K())),
              Q = (function (e, n) {
                var t = (0, r.useState)({})[1],
                  o = (0, r.useRef)(e),
                  i = (0, r.useRef)({ data: !1, error: !1, isValidating: !1 }),
                  u = (0, r.useCallback)(function (e) {
                    var r = !1,
                      u = o.current;
                    for (var a in e) {
                      var s = a;
                      u[s] !== e[s] &&
                        ((u[s] = e[s]), i.current[s] && (r = !0));
                    }
                    r && !n.current && t({});
                  }, []);
                return (
                  C(function () {
                    o.current = e;
                  }),
                  [o, i.current, u]
                );
              })({ data: J, error: X, isValidating: Y }, j),
              ee = Q[0],
              ne = Q[1],
              te = Q[2],
              re = (0, r.useCallback)(
                function (e) {
                  return o(void 0, void 0, void 0, function () {
                    var n, r, o, c, d, p, h, v, m, g, y, b, w;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (
                            ((n = M.current),
                            !O || !n || j.current || _().isPaused())
                          )
                            return [2, !1];
                          (c = !0),
                            (d = e || {}),
                            (p = !E[O] || !d.dedupe),
                            (h = function () {
                              return !j.current && O === D.current && N.current;
                            }),
                            (v = function () {
                              var e = E[O];
                              e && e[1] === o && delete E[O];
                            }),
                            (m = { isValidating: !1 }),
                            (g = function () {
                              F({ isValidating: !1 }), h() && te(m);
                            }),
                            F({ isValidating: !0 }),
                            te({ isValidating: !0 }),
                            (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 3, , 4]),
                            p &&
                              (B(u, O, ee.current.data, ee.current.error, !0),
                              t.loadingTimeout &&
                                !u.get(O) &&
                                setTimeout(function () {
                                  c && h() && _().onLoadingSlow(O, t);
                                }, t.loadingTimeout),
                              (E[O] = [n.apply(void 0, T), I()])),
                            (w = E[O]),
                            (r = w[0]),
                            (o = w[1]),
                            [4, r]
                          );
                        case 2:
                          return (
                            (r = i.sent()),
                            p && setTimeout(v, t.dedupingInterval),
                            E[O] && E[O][1] === o
                              ? (F({ error: s }),
                                (m.error = s),
                                (y = x[O]),
                                !f(y) && (o <= y[0] || o <= y[1] || 0 === y[1])
                                  ? (g(),
                                    p && h() && _().onDiscarded(O),
                                    [2, !1])
                                  : (a(ee.current.data, r)
                                      ? (m.data = ee.current.data)
                                      : (m.data = r),
                                    a(u.get(O), r) || u.set(O, r),
                                    p && h() && _().onSuccess(r, O, t),
                                    [3, 4]))
                              : (p && h() && _().onDiscarded(O), [2, !1])
                          );
                        case 3:
                          return (
                            (b = i.sent()),
                            v(),
                            _().isPaused() ||
                              (F({ error: b }),
                              (m.error = b),
                              p &&
                                h() &&
                                (_().onError(b, O, t),
                                (("boolean" === typeof t.shouldRetryOnError &&
                                  t.shouldRetryOnError) ||
                                  (l(t.shouldRetryOnError) &&
                                    t.shouldRetryOnError(b))) &&
                                  q() &&
                                  _().onErrorRetry(b, O, t, re, {
                                    retryCount: (d.retryCount || 0) + 1,
                                    dedupe: !0,
                                  }))),
                            [3, 4]
                          );
                        case 4:
                          return (
                            (c = !1),
                            g(),
                            h() && p && B(u, O, m.data, m.error, !1),
                            [2, !0]
                          );
                      }
                    });
                  });
                },
                [O]
              ),
              oe = (0, r.useCallback)(
                U.bind(s, u, function () {
                  return D.current;
                }),
                []
              );
            if (
              (C(function () {
                (M.current = n), (V.current = t);
              }),
              C(
                function () {
                  if (O) {
                    var e = O !== D.current,
                      n = re.bind(s, G),
                      t = 0,
                      r = $(O, w, function (e, n, t) {
                        te(
                          d(
                            { error: n, isValidating: t },
                            a(ee.current.data, e) ? s : { data: e }
                          )
                        );
                      }),
                      o = $(O, b, function (e) {
                        if (0 == e) {
                          var r = Date.now();
                          _().revalidateOnFocus &&
                            r > t &&
                            q() &&
                            ((t = r + _().focusThrottleInterval), n());
                        } else if (1 == e)
                          _().revalidateOnReconnect && q() && n();
                        else if (2 == e) return re();
                      });
                    return (
                      (j.current = !1),
                      (D.current = O),
                      (N.current = !0),
                      e && te({ data: J, error: X, isValidating: Y }),
                      K() && (f(J) || R ? n() : k(n)),
                      function () {
                        (j.current = !0), r(), o();
                      }
                    );
                  }
                },
                [O, re]
              ),
              C(
                function () {
                  var e;
                  function n() {
                    var n = l(v) ? v(J) : v;
                    n && -1 !== e && (e = setTimeout(t, n));
                  }
                  function t() {
                    ee.current.error ||
                    (!m && !_().isVisible()) ||
                    (!g && !_().isOnline())
                      ? n()
                      : re(G).then(n);
                  }
                  return (
                    n(),
                    function () {
                      e && (clearTimeout(e), (e = -1));
                    }
                  );
                },
                [v, m, g, re]
              ),
              (0, r.useDebugValue)(J),
              p && f(J) && O)
            )
              throw (
                ((M.current = n),
                (V.current = t),
                (j.current = !1),
                f(X) ? re(G) : X)
              );
            return {
              mutate: oe,
              get data() {
                return (ne.data = !0), J;
              },
              get error() {
                return (ne.error = !0), X;
              },
              get isValidating() {
                return (ne.isValidating = !0), Y;
              },
            };
          }),
          function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            var t = X(),
              r = W(e),
              o = r[0],
              i = r[1],
              a = r[2],
              s = H(t, a),
              c = u,
              f = s.use;
            if (f) for (var l = f.length; l-- > 0; ) c = f[l](c);
            return c(o, i || s.fetcher, s);
          });
    },
  },
]);
