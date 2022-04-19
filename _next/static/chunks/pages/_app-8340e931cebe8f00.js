(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2962: function (e, t, o) {
      "use strict";
      o.d(t, {
        lX: function () {
          return d;
        },
        PB: function () {
          return u;
        },
      });
      var n = o(9008),
        r = o(7294);
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function i(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      var p = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        l = function (e, t, o) {
          void 0 === t && (t = []);
          var n = void 0 === o ? {} : o,
            a = n.defaultWidth,
            i = n.defaultHeight;
          return t.reduce(function (t, o, n) {
            return (
              t.push(
                r.createElement("meta", {
                  key: "og:" + e + ":0" + n,
                  property: "og:" + e,
                  content: o.url,
                })
              ),
              o.alt &&
                t.push(
                  r.createElement("meta", {
                    key: "og:" + e + ":alt0" + n,
                    property: "og:" + e + ":alt",
                    content: o.alt,
                  })
                ),
              o.secureUrl &&
                t.push(
                  r.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + n,
                    property: "og:" + e + ":secure_url",
                    content: o.secureUrl.toString(),
                  })
                ),
              o.type &&
                t.push(
                  r.createElement("meta", {
                    key: "og:" + e + ":type0" + n,
                    property: "og:" + e + ":type",
                    content: o.type.toString(),
                  })
                ),
              o.width
                ? t.push(
                    r.createElement("meta", {
                      key: "og:" + e + ":width0" + n,
                      property: "og:" + e + ":width",
                      content: o.width.toString(),
                    })
                  )
                : a &&
                  t.push(
                    r.createElement("meta", {
                      key: "og:" + e + ":width0" + n,
                      property: "og:" + e + ":width",
                      content: a.toString(),
                    })
                  ),
              o.height
                ? t.push(
                    r.createElement("meta", {
                      key: "og:" + e + ":height" + n,
                      property: "og:" + e + ":height",
                      content: o.height.toString(),
                    })
                  )
                : i &&
                  t.push(
                    r.createElement("meta", {
                      key: "og:" + e + ":height" + n,
                      property: "og:" + e + ":height",
                      content: i.toString(),
                    })
                  ),
              t
            );
          }, []);
        },
        c = function (e) {
          var t,
            o,
            n,
            i = [];
          e.titleTemplate && (p.templateTitle = e.titleTemplate);
          var c = "";
          e.title
            ? ((c = e.title),
              p.templateTitle &&
                (c = p.templateTitle.replace(/%s/g, function () {
                  return c;
                })))
            : e.defaultTitle && (c = e.defaultTitle),
            c && i.push(r.createElement("title", { key: "title" }, c));
          var d,
            u,
            s = e.noindex || p.noindex || e.dangerouslySetAllPagesToNoIndex,
            h = e.nofollow || p.nofollow || e.dangerouslySetAllPagesToNoFollow,
            m = "";
          if (e.robotsProps) {
            var f = e.robotsProps,
              g = f.nosnippet,
              y = f.maxSnippet,
              v = f.maxImagePreview,
              w = f.maxVideoPreview,
              k = f.noarchive,
              G = f.noimageindex,
              b = f.notranslate,
              E = f.unavailableAfter;
            m =
              (g ? ",nosnippet" : "") +
              (y ? ",max-snippet:" + y : "") +
              (v ? ",max-image-preview:" + v : "") +
              (k ? ",noarchive" : "") +
              (E ? ",unavailable_after:" + E : "") +
              (G ? ",noimageindex" : "") +
              (w ? ",max-video-preview:" + w : "") +
              (b ? ",notranslate" : "");
          }
          (s || h
            ? (e.dangerouslySetAllPagesToNoIndex && (p.noindex = !0),
              e.dangerouslySetAllPagesToNoFollow && (p.nofollow = !0),
              i.push(
                r.createElement("meta", {
                  key: "robots",
                  name: "robots",
                  content:
                    (s ? "noindex" : "index") +
                    "," +
                    (h ? "nofollow" : "follow") +
                    m,
                })
              ))
            : i.push(
                r.createElement("meta", {
                  key: "robots",
                  name: "robots",
                  content: "index,follow" + m,
                })
              ),
          e.description &&
            i.push(
              r.createElement("meta", {
                key: "description",
                name: "description",
                content: e.description,
              })
            ),
          e.mobileAlternate &&
            i.push(
              r.createElement("link", {
                rel: "alternate",
                key: "mobileAlternate",
                media: e.mobileAlternate.media,
                href: e.mobileAlternate.href,
              })
            ),
          e.languageAlternates &&
            e.languageAlternates.length > 0 &&
            e.languageAlternates.forEach(function (e) {
              i.push(
                r.createElement("link", {
                  rel: "alternate",
                  key: "languageAlternate-" + e.hrefLang,
                  hrefLang: e.hrefLang,
                  href: e.href,
                })
              );
            }),
          e.twitter &&
            (e.twitter.cardType &&
              i.push(
                r.createElement("meta", {
                  key: "twitter:card",
                  name: "twitter:card",
                  content: e.twitter.cardType,
                })
              ),
            e.twitter.site &&
              i.push(
                r.createElement("meta", {
                  key: "twitter:site",
                  name: "twitter:site",
                  content: e.twitter.site,
                })
              ),
            e.twitter.handle &&
              i.push(
                r.createElement("meta", {
                  key: "twitter:creator",
                  name: "twitter:creator",
                  content: e.twitter.handle,
                })
              )),
          e.facebook &&
            e.facebook.appId &&
            i.push(
              r.createElement("meta", {
                key: "fb:app_id",
                property: "fb:app_id",
                content: e.facebook.appId,
              })
            ),
          (null != (t = e.openGraph) && t.title) || c) &&
            i.push(
              r.createElement("meta", {
                key: "og:title",
                property: "og:title",
                content: (null == (d = e.openGraph) ? void 0 : d.title) || c,
              })
            );
          ((null != (o = e.openGraph) && o.description) || e.description) &&
            i.push(
              r.createElement("meta", {
                key: "og:description",
                property: "og:description",
                content:
                  (null == (u = e.openGraph) ? void 0 : u.description) ||
                  e.description,
              })
            );
          if (e.openGraph) {
            if (
              ((e.openGraph.url || e.canonical) &&
                i.push(
                  r.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var _ = e.openGraph.type.toLowerCase();
              i.push(
                r.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: _,
                })
              ),
                "profile" === _ && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      i.push(
                        r.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      i.push(
                        r.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      i.push(
                        r.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      i.push(
                        r.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === _ && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        i.push(
                          r.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      i.push(
                        r.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      i.push(
                        r.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        i.push(
                          r.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === _ && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      i.push(
                        r.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      i.push(
                        r.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      i.push(
                        r.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        i.push(
                          r.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      i.push(
                        r.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        i.push(
                          r.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" !== _ &&
                      "video.episode" !== _ &&
                      "video.tv_show" !== _ &&
                      "video.other" !== _) ||
                    !e.openGraph.video ||
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          i.push(
                            r.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            i.push(
                              r.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        i.push(
                          r.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        i.push(
                          r.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      i.push(
                        r.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      i.push(
                        r.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        i.push(
                          r.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      i.push(
                        r.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            e.defaultOpenGraphImageWidth &&
              (p.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (p.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                i.push.apply(
                  i,
                  l("image", e.openGraph.images, {
                    defaultWidth: p.defaultOpenGraphImageWidth,
                    defaultHeight: p.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (p.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (p.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                i.push.apply(
                  i,
                  l("video", e.openGraph.videos, {
                    defaultWidth: p.defaultOpenGraphVideoWidth,
                    defaultHeight: p.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.locale &&
                i.push(
                  r.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              e.openGraph.site_name &&
                i.push(
                  r.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              i.push(
                r.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t, o, n;
                i.push(
                  r.createElement(
                    "meta",
                    a(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null !=
                            (o = null != (n = e.keyOverride) ? n : e.name)
                              ? o
                              : e.property)
                            ? t
                            : e.httpEquiv),
                      },
                      e
                    )
                  )
                );
              }),
            null != (n = e.additionalLinkTags) &&
              n.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t;
                i.push(
                  r.createElement(
                    "link",
                    a(
                      {
                        key:
                          "link" +
                          (null != (t = e.keyOverride) ? t : e.href) +
                          e.rel,
                      },
                      e
                    )
                  )
                );
              }),
            i
          );
        },
        d = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            i(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.title,
                o = e.titleTemplate,
                a = e.defaultTitle,
                i = e.dangerouslySetAllPagesToNoIndex,
                p = void 0 !== i && i,
                l = e.dangerouslySetAllPagesToNoFollow,
                d = void 0 !== l && l,
                u = e.description,
                s = e.canonical,
                h = e.facebook,
                m = e.openGraph,
                f = e.additionalMetaTags,
                g = e.twitter,
                y = e.defaultOpenGraphImageWidth,
                v = e.defaultOpenGraphImageHeight,
                w = e.defaultOpenGraphVideoWidth,
                k = e.defaultOpenGraphVideoHeight,
                G = e.mobileAlternate,
                b = e.languageAlternates,
                E = e.additionalLinkTags,
                _ = e.robotsProps;
              return r.createElement(
                n.default,
                null,
                c({
                  title: t,
                  titleTemplate: o,
                  defaultTitle: a,
                  dangerouslySetAllPagesToNoIndex: p,
                  dangerouslySetAllPagesToNoFollow: d,
                  description: u,
                  canonical: s,
                  facebook: h,
                  openGraph: m,
                  additionalMetaTags: f,
                  twitter: g,
                  defaultOpenGraphImageWidth: y,
                  defaultOpenGraphImageHeight: v,
                  defaultOpenGraphVideoWidth: w,
                  defaultOpenGraphVideoHeight: k,
                  mobileAlternate: G,
                  languageAlternates: b,
                  additionalLinkTags: E,
                  robotsProps: _,
                })
              );
            }),
            t
          );
        })(r.Component),
        u = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            i(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.title,
                o = e.noindex,
                a = void 0 !== o && o,
                i = e.nofollow,
                p = e.robotsProps,
                l = e.description,
                d = e.canonical,
                u = e.openGraph,
                s = e.facebook,
                h = e.twitter,
                m = e.additionalMetaTags,
                f = e.titleTemplate,
                g = e.mobileAlternate,
                y = e.languageAlternates,
                v = e.additionalLinkTags;
              return r.createElement(
                n.default,
                null,
                c({
                  title: t,
                  noindex: a,
                  nofollow: i,
                  robotsProps: p,
                  description: l,
                  canonical: d,
                  facebook: s,
                  openGraph: u,
                  additionalMetaTags: m,
                  twitter: h,
                  titleTemplate: f,
                  mobileAlternate: g,
                  languageAlternates: y,
                  additionalLinkTags: v,
                })
              );
            }),
            t
          );
        })(r.Component),
        s = Object.freeze({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
        });
      new RegExp("[" + Object.keys(s).join("") + "]", "g");
    },
    6363: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return o(9429);
        },
      ]);
    },
    9429: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return E;
          },
        });
      var n = o(5893),
        r = (o(906), o(9008)),
        a = o(4847),
        i = o(1778),
        p = o(8993),
        l = function (e) {
          (window.__fathomClientQueue = window.__fathomClientQueue || []),
            window.__fathomClientQueue.push(e);
        },
        c = function () {
          (window.__fathomClientQueue = window.__fathomClientQueue || []),
            window.__fathomClientQueue.forEach(function (e) {
              switch (e.type) {
                case "trackPageview":
                  return void u(e.opts);
                case "trackGoal":
                  return void s(e.code, e.cents);
                case "enableTrackingForMe":
                  return void m();
                case "blockTrackingForMe":
                  return void h();
                case "setSite":
                  return void f(e.id);
              }
            }),
            (window.__fathomClientQueue = []);
        },
        d = function (e) {
          var t = /(https?)(?=:|\/|$)/;
          e.forEach(function (e) {
            null !== t.exec(e) &&
              console.warn(
                "The include domain ".concat(
                  e,
                  " might fail to work as intended as it begins with a transfer protocol (http://, https://). Consider removing the protocol portion of the string."
                )
              );
          });
        },
        u = function (e) {
          window.fathom
            ? e
              ? window.fathom.trackPageview(e)
              : window.fathom.trackPageview()
            : l({ type: "trackPageview", opts: e });
        },
        s = function (e, t) {
          window.fathom
            ? window.fathom.trackGoal(e, t)
            : l({ type: "trackGoal", code: e, cents: t });
        },
        h = function () {
          window.fathom
            ? window.fathom.blockTrackingForMe()
            : l({ type: "blockTrackingForMe" });
        },
        m = function () {
          window.fathom
            ? window.fathom.enableTrackingForMe()
            : l({ type: "enableTrackingForMe" });
        },
        f = function (e) {
          window.fathom
            ? window.fathom.setSite(e)
            : l({ type: "setSite", id: e });
        },
        g = o(1163),
        y = o(7294),
        v = function () {
          var e = (0, g.useRouter)().events,
            t = "routeChangeComplete",
            o = "TQANHVMV",
            n = "margelo.io";
          return (
            (0, y.useEffect)(function () {
              var r = {};
              return (
                n.length && (r.includedDomains = n.split(",")),
                "".length && (r.excludedDomains = "".split(",")),
                (function (e, t) {
                  var o = document.createElement("script"),
                    n =
                      document.getElementsByTagName("script")[0] ||
                      document.querySelector("body");
                  (o.id = "fathom-script"),
                    (o.async = !0),
                    o.setAttribute("data-site", e),
                    (o.src =
                      t && t.url
                        ? t.url
                        : "https://cdn.usefathom.com/script.js"),
                    t &&
                      (void 0 !== t.auto &&
                        o.setAttribute("data-auto", "".concat(t.auto)),
                      void 0 !== t.honorDNT &&
                        o.setAttribute("data-honor-dnt", "".concat(t.honorDNT)),
                      void 0 !== t.canonical &&
                        o.setAttribute(
                          "data-canonical",
                          "".concat(t.canonical)
                        ),
                      t.includedDomains &&
                        (d(t.includedDomains),
                        o.setAttribute(
                          "data-included-domains",
                          t.includedDomains.join(",")
                        )),
                      t.excludedDomains &&
                        (d(t.excludedDomains),
                        o.setAttribute(
                          "data-excluded-domains",
                          t.excludedDomains.join(",")
                        )),
                      t.spa && o.setAttribute("data-spa", t.spa)),
                    (o.onload = c),
                    n.parentNode.insertBefore(o, n);
                })(o, r),
                e.on(t, u),
                function () {
                  return e.off(t, u);
                }
              );
            }, []),
            {}
          );
        },
        w = o(2962),
        k = {
          title: "Margelo",
          description: "App development, done right.",
          openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://margelo.io/",
            site_name: "Margelo",
            images: [
              {
                url: "https://margelo.io/card.jpg",
                width: 1200,
                height: 630,
                alt: "Margelo",
                type: "image/jpeg",
              },
            ],
          },
          twitter: {
            handle: "@margelo_io",
            site: "@margelo_io",
            cardType: "summary_large_image",
          },
        };
      function G(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              G(e, t, o[t]);
            });
        }
        return e;
      }
      var E = function (e) {
        var t = e.Component,
          o = e.pageProps;
        return (
          v(),
          (0, n.jsx)(a.Z, {
            children: (0, n.jsx)(i.Z, {
              children: (0, n.jsxs)(p.Z, {
                children: [
                  (0, n.jsx)(r.default, {
                    children: (0, n.jsx)("link", {
                      rel: "icon",
                      href: "/favicon.ico",
                    }),
                  }),
                  (0, n.jsx)(w.lX, b({}, k)),
                  (0, n.jsx)(t, b({}, o)),
                ],
              }),
            }),
          })
        );
      };
    },
    8993: function (e, t, o) {
      "use strict";
      o.d(t, {
        y: function () {
          return i;
        },
      });
      var n = o(5893),
        r = o(7294),
        a = o(4847),
        i = r.createContext(!1);
      t.Z = function (e) {
        var t = e.children,
          o = (0, r.useContext)(a.$).scrollY,
          p = window.innerHeight < o;
        return (0, n.jsx)(i.Provider, { value: p, children: t });
      };
    },
    4847: function (e, t, o) {
      "use strict";
      o.d(t, {
        $: function () {
          return a;
        },
      });
      var n = o(5893),
        r = o(7294),
        a = r.createContext({ scrollY: 0 });
      t.Z = function (e) {
        var t = e.children,
          o = (0, r.useState)(0),
          i = o[0],
          p = o[1],
          l = (0, r.useCallback)(function () {
            p(window.scrollY);
          }, []);
        return (
          (0, r.useEffect)(
            function () {
              return (
                document.addEventListener("scroll", l, { passive: !0 }),
                function () {
                  return document.removeEventListener("scroll", l);
                }
              );
            },
            [l]
          ),
          (0, n.jsx)(a.Provider, { value: { scrollY: i }, children: t })
        );
      };
    },
    1778: function (e, t, o) {
      "use strict";
      o.d(t, {
        X: function () {
          return a;
        },
      });
      var n = o(5893),
        r = o(7294),
        a = r.createContext({ innerWidth: 0 });
      t.Z = function (e) {
        var t = e.children,
          o = (0, r.useState)(0),
          i = o[0],
          p = o[1],
          l = (0, r.useCallback)(function () {
            p(window.innerWidth);
          }, []);
        return (
          (0, r.useEffect)(
            function () {
              return (
                l(),
                window.addEventListener("resize", l, { passive: !0 }),
                function () {
                  return window.removeEventListener("resize", l);
                }
              );
            },
            [l]
          ),
          (0, n.jsx)(a.Provider, { value: { innerWidth: i }, children: t })
        );
      };
    },
    906: function () {},
    9008: function (e, t, o) {
      e.exports = o(5443);
    },
    1163: function (e, t, o) {
      e.exports = o(387);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6363), t(387);
    });
    var o = e.O();
    _N_E = o;
  },
]);
