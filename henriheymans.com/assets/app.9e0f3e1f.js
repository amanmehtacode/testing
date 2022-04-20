var L = Object.defineProperty;
var w = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty,
  M = Object.prototype.propertyIsEnumerable;
var _ = (a, e, t) =>
    e in a
      ? L(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (a[e] = t),
  v = (a, e) => {
    for (var t in e || (e = {})) I.call(e, t) && _(a, t, e[t]);
    if (w) for (var t of w(e)) M.call(e, t) && _(a, t, e[t]);
    return a;
  };
import {
  E,
  l as z,
  g as n,
  a as i,
  C as g,
  W as p,
  S as f,
  P as x,
  b as k,
  c as y,
  V as h,
  M as u,
  T,
  R as j,
  i as R,
  G as D,
  d as P,
  e as c,
  A as b,
  f as O,
  D as U,
  h as q,
  j as H,
  k as A,
} from "./vendor.513b68c2.js";
const B = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = t(r);
    fetch(r.href, s);
  }
};
B();
class d extends E {
  constructor({ element: e, elements: t }) {
    super();
    (this.selector = e),
      (this.selectorChildren = v({}, t)),
      this.create(),
      this.addEventListeners();
  }
  create() {
    this.selector instanceof window.HTMLElement
      ? (this.element = this.selector)
      : (this.element = document.querySelector(this.selector)),
      (this.elements = {}),
      z.exports.each(this.selectorChildren, (e, t) => {
        e instanceof window.HTMLElement ||
        e instanceof window.NodeList ||
        Array.isArray(e)
          ? (this.elements[t] = e)
          : ((this.elements[t] = document.querySelectorAll(e)),
            this.elements[t].length === 0
              ? (this.elements[t] = null)
              : this.elements[t].length === 1 &&
                (this.elements[t] = document.querySelector(e)));
      });
  }
  addEventListeners() {}
  removeEventListeners() {}
}
class G extends d {
  constructor() {
    super({
      componentId: "Preloader",
      element: ".l__preloader",
      elements: { subline: ".preloader__subline" },
    });
    (this.isDesktop = window.innerWidth > 1024),
      (this.allImages = document.querySelectorAll("img")),
      this.createLoader();
  }
  createLoader() {
    window.addEventListener("load", () => {
      this.onLoaded();
    });
  }
  onLoaded() {
    return new Promise((e) => {
      this.emit("completed");
      const t = n.timeline();
      this.isDesktop
        ? (t.to(
            ".preloader__roll",
            { opacity: 0, duration: 1, ease: i.easeOut },
            "out"
          ),
          t.to(
            this.element,
            { xPercent: -100, ease: i.easeInOut, duration: 1.5 },
            "out+=0.5"
          ),
          t.to(
            this.elements.subline,
            { xPercent: -100, ease: i.easeInOut, duration: 1.6 },
            "out+=0.55"
          ),
          n.to(
            ".preloader__blackline",
            { xPercent: -100, delay: 0.05, duration: 1.6, ease: i.easeInOut },
            ""
          ))
        : (t.to(
            this.element,
            { yPercent: -100, ease: i.easeInOut, duration: 1.5 },
            "out+=0.5"
          ),
          t.to(
            this.elements.subline,
            { yPercent: -100, ease: i.easeInOut, duration: 1.6 },
            "out+=0.55"
          ),
          n.to(
            ".preloader__blackline",
            { yPercent: -100, delay: 0.05, duration: 1.6, ease: i.easeInOut },
            ""
          ));
    });
  }
}
class S {
  constructor({ element: e, elements: t, id: o }) {
    (this.selector = e), (this.selectorChildren = v({}, t)), (this.id = o);
  }
  create() {
    (this.element = document.querySelector(this.selector)),
      (this.elements = {}),
      z.exports.each(this.selectorChildren, (e, t) => {
        e instanceof window.HTMLElement ||
        e instanceof window.NodeList ||
        Array.isArray(e)
          ? (this.elements[t] = e)
          : (this.elements[t] = document.querySelectorAll(e)),
          this.elements[t].length === 0
            ? this.elements[t]
            : this.elements[t].length === 1 &&
              (this.elements[t] = document.querySelector(e));
      });
  }
}
class C extends d {
  constructor(e, t) {
    super({
      componentId: "navbar",
      element: ".l__navbar",
      elements: {
        navbarLink: ".l__navbar .menu-item",
        navbarLogo: ".navbar__logo",
        projects: ".l__projects",
        about: ".l__about",
        contact: ".l__contact",
        hamburgah: ".hamburger__menu",
        mobileMenu: ".menu__mobile",
        close: ".menu__mobile--close",
        mobileMenuItem: ".mobile__menu--item",
      },
    });
    (this.asscroll = e),
      (this.navbarSize = document.querySelector(".l__navbar").offsetHeight),
      this.elements.navbarLink &&
        ((this.sectionsPosition = [
          document.querySelector(".l__projects").getBoundingClientRect().left,
          document.querySelector(".l__about").getBoundingClientRect().left +
            window.innerHeight,
          document.querySelector(".l__contact").getBoundingClientRect().left +
            window.innerHeight,
        ]),
        this.initClick()),
      this.initLogoClick();
  }
  initClick() {
    this.elements.navbarLink.forEach((e, t) => {
      e.addEventListener("click", (o) => {
        o.preventDefault();
        let r = 0;
        t === 0 && (r = this.sectionsPosition[0]),
          t === 1 &&
            (r =
              this.sectionsPosition[1] +
              document.querySelector(".pin-spacer").offsetHeight),
          t === 2 && (r = 2e4),
          this.asscroll.scrollTo(r);
      });
    });
  }
  initLogoClick() {
    this.elements.navbarLogo.addEventListener("click", (e) => {
      e.preventDefault(),
        window.innerWidth > 1024
          ? (n.to(".preloader__subline", {
              xPercent: 0,
              duration: 1.5,
              ease: i.easeInOut,
            }),
            n.to(".preloader__blackline", {
              xPercent: 0,
              delay: 0.05,
              duration: 1.6,
              ease: i.easeInOut,
              onComplete: () => (window.location.href = "/"),
            }))
          : (n.to(".preloader__subline", {
              yPercent: 0,
              duration: 1.5,
              ease: i.easeInOut,
              onComplete: () => (window.location.href = "/"),
            }),
            n.to(".preloader__blackline", {
              yPercent: 0,
              delay: 0.05,
              duration: 1.6,
              ease: i.easeInOut,
              onComplete: () => (window.location.href = "/"),
            }));
    }),
      this.elements.hamburgah &&
        (this.elements.hamburgah.addEventListener("click", (e) => {
          e.preventDefault(),
            n.to(".preloader__subline", {
              yPercent: 100,
              duration: 1.5,
              ease: i.easeInOut,
            }),
            n.to(this.elements.mobileMenu, {
              y: "0%",
              duration: 1.5,
              ease: i.easeInOut,
              delay: 0.05,
            });
        }),
        this.elements.close.addEventListener("click", (e) => {
          e.preventDefault(),
            n.to(".preloader__subline", {
              yPercent: -100,
              duration: 1.5,
              ease: i.easeInOut,
            }),
            n.to(".preloader__blackline", {
              xPercent: -100,
              delay: 0.05,
              duration: 1.6,
              ease: i.easeInOut,
            }),
            n.to(this.elements.mobileMenu, {
              y: "-100%",
              duration: 1.5,
              ease: i.easeInOut,
              delay: 0.05,
            });
        }),
        this.elements.mobileMenuItem.forEach((e, t) => {
          e.addEventListener("click", (o) => {
            o.preventDefault(),
              n.to(".preloader__subline", {
                yPercent: -100,
                duration: 1.5,
                ease: i.easeInOut,
              }),
              n.to(".preloader__blackline", {
                xPercent: -100,
                delay: 0.05,
                duration: 1.6,
                ease: i.easeInOut,
              }),
              n.to(this.elements.mobileMenu, {
                y: "-100%",
                duration: 1.5,
                ease: i.easeInOut,
                delay: 0.05,
                onComplete: () =>
                  this.asscroll.scrollTo(
                    document
                      .querySelectorAll(".section")
                      [t].getBoundingClientRect().top - this.navbarSize
                  ),
              });
          });
        }));
  }
  removeEventListeners() {}
}
var W = `varying vec2 vUv;

void main() {\r
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

    vUv = uv;\r
}`,
  $ = `uniform vec2 uResolution;\r
uniform float uTime;

varying vec2 vUv;

const int AMOUNT=10;

vec3 mod289(vec3 x)\r
{\r
    return x-floor(x*(1./289.))*289.;\r
}

vec4 mod289(vec4 x)\r
{\r
    return x-floor(x*(1./289.))*289.;\r
}

vec4 permute(vec4 x)\r
{\r
    return mod289(((x*34.)+1.)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159-.85373472095314*r;\r
}

vec3 fade(vec3 t){\r
    return t*t*t*(t*(t*6.-15.)+10.);\r
}

float pnoise(vec3 P,vec3 rep)\r
{\r
    vec3 Pi0=mod(floor(P),rep);
    vec3 Pi1=mod(Pi0+vec3(1.),rep);
    Pi0=mod289(Pi0);\r
    Pi1=mod289(Pi1);\r
    vec3 Pf0=fract(P);
    vec3 Pf1=Pf0-vec3(1.);
    vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);\r
    vec4 iy=vec4(Pi0.yy,Pi1.yy);\r
    vec4 iz0=Pi0.zzzz;\r
    vec4 iz1=Pi1.zzzz;\r
    \r
    vec4 ixy=permute(permute(ix)+iy);\r
    vec4 ixy0=permute(ixy+iz0);\r
    vec4 ixy1=permute(ixy+iz1);\r
    \r
    vec4 gx0=ixy0*(1./7.);\r
    vec4 gy0=fract(floor(gx0)*(1./7.))-.5;\r
    gx0=fract(gx0);\r
    vec4 gz0=vec4(.5)-abs(gx0)-abs(gy0);\r
    vec4 sz0=step(gz0,vec4(0.));\r
    gx0-=sz0*(step(0.,gx0)-.5);\r
    gy0-=sz0*(step(0.,gy0)-.5);\r
    \r
    vec4 gx1=ixy1*(1./7.);\r
    vec4 gy1=fract(floor(gx1)*(1./7.))-.5;\r
    gx1=fract(gx1);\r
    vec4 gz1=vec4(.5)-abs(gx1)-abs(gy1);\r
    vec4 sz1=step(gz1,vec4(0.));\r
    gx1-=sz1*(step(0.,gx1)-.5);\r
    gy1-=sz1*(step(0.,gy1)-.5);\r
    \r
    vec3 g000=vec3(gx0.x,gy0.x,gz0.x);\r
    vec3 g100=vec3(gx0.y,gy0.y,gz0.y);\r
    vec3 g010=vec3(gx0.z,gy0.z,gz0.z);\r
    vec3 g110=vec3(gx0.w,gy0.w,gz0.w);\r
    vec3 g001=vec3(gx1.x,gy1.x,gz1.x);\r
    vec3 g101=vec3(gx1.y,gy1.y,gz1.y);\r
    vec3 g011=vec3(gx1.z,gy1.z,gz1.z);\r
    vec3 g111=vec3(gx1.w,gy1.w,gz1.w);\r
    \r
    vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));\r
    g000*=norm0.x;\r
    g010*=norm0.y;\r
    g100*=norm0.z;\r
    g110*=norm0.w;\r
    vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));\r
    g001*=norm1.x;\r
    g011*=norm1.y;\r
    g101*=norm1.z;\r
    g111*=norm1.w;\r
    \r
    float n000=dot(g000,Pf0);\r
    float n100=dot(g100,vec3(Pf1.x,Pf0.yz));\r
    float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));\r
    float n110=dot(g110,vec3(Pf1.xy,Pf0.z));\r
    float n001=dot(g001,vec3(Pf0.xy,Pf1.z));\r
    float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));\r
    float n011=dot(g011,vec3(Pf0.x,Pf1.yz));\r
    float n111=dot(g111,Pf1);\r
    \r
    vec3 fade_xyz=fade(Pf0);\r
    vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);\r
    vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);\r
    float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);\r
    return 2.2*n_xyz;\r
}\r

float snoise(vec3 v)\r
{\r
    const vec2 C=vec2(1./6.,1./3.);\r
    const vec4 D=vec4(0.,.5,1.,2.);\r
    \r
    
    vec3 i=floor(v+dot(v,C.yyy));\r
    vec3 x0=v-i+dot(i,C.xxx);\r
    \r
    
    vec3 g=step(x0.yzx,x0.xyz);\r
    vec3 l=1.-g;\r
    vec3 i1=min(g.xyz,l.zxy);\r
    vec3 i2=max(g.xyz,l.zxy);\r
    \r
    
    
    
    
    vec3 x1=x0-i1+C.xxx;\r
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    \r
    
    i=mod289(i);\r
    vec4 p=permute(permute(permute(\r
                i.z+vec4(0.,i1.z,i2.z,1.))\r
                +i.y+vec4(0.,i1.y,i2.y,1.))\r
                +i.x+vec4(0.,i1.x,i2.x,1.));\r
                \r
                
                
                float n_=.142857142857;
                vec3 ns=n_*D.wyz-D.xzx;\r
                \r
                vec4 j=p-49.*floor(p*ns.z*ns.z);
                \r
                vec4 x_=floor(j*ns.z);\r
                vec4 y_=floor(j-7.*x_);
                \r
                vec4 x=x_*ns.x+ns.yyyy;\r
                vec4 y=y_*ns.x+ns.yyyy;\r
                vec4 h=1.-abs(x)-abs(y);\r
                \r
                vec4 b0=vec4(x.xy,y.xy);\r
                vec4 b1=vec4(x.zw,y.zw);\r
                \r
                
                
                vec4 s0=floor(b0)*2.+1.;\r
                vec4 s1=floor(b1)*2.+1.;\r
                vec4 sh=-step(h,vec4(0.));\r
                \r
                vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\r
                vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\r
                \r
                vec3 p0=vec3(a0.xy,h.x);\r
                vec3 p1=vec3(a0.zw,h.y);\r
                vec3 p2=vec3(a1.xy,h.z);\r
                vec3 p3=vec3(a1.zw,h.w);\r
                \r
                
                vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\r
                p0*=norm.x;\r
                p1*=norm.y;\r
                p2*=norm.z;\r
                p3*=norm.w;\r
                \r
                
                vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\r
                m=m*m;\r
                return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),\r
                dot(p2,x2),dot(p3,x3)));\r
            }\r
            \r
            float grain(vec2 vUv,vec2 uResolution,float frame,float multiplier){\r
                vec2 mult=vUv*uResolution;\r
                float offset=snoise(vec3(mult/multiplier,frame));\r
                float n1=pnoise(vec3(mult,offset),vec3(1./vUv*uResolution,1.));\r
                return n1/2.+.5;\r
            }\r
            \r
            float grain(vec2 vUv,vec2 uResolution,float frame){\r
                return grain(vUv,uResolution,frame,2.5);\r
            }\r
            \r
            float grain(vec2 vUv,vec2 uResolution){\r
                return grain(vUv + cos(uTime),uResolution,0.);\r
            }\r
            \r
            void main(){\r
                vec2 newUv=20.*(vUv.xy-uResolution);\r
                \r
                float len;\r
                \r
                for(int i=0;i<AMOUNT;i++){\r
                    len=length(vec2(newUv.x,newUv.y));\r
                    newUv.x=newUv.x-cos(newUv.y+sin(len))+cos(uTime/3.);\r
                    newUv.y=newUv.y+sin(newUv.x+cos(len))+sin(uTime/3.);\r
                }\r
                \r
                float grainSize=1.1;\r
                float g=grain(vUv,uResolution/grainSize);\r
                vec3 color=vec3(g);\r
                gl_FragColor=vec4(color,1.);\r
                \r
                gl_FragColor=vec4(cos(len + g),cos(len + g),cos(len + g),1.);\r
            }`;
function m(a, e, t) {
  return a * (1 - t) + e * t;
}
class N {
  constructor() {
    (this.element = document.querySelector(".l__landing")),
      (this.viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      }),
      (this.mouse = { x: 0, y: 0 }),
      (this.clock = new g()),
      (this.update = this.update.bind(this)),
      this.init();
  }
  init() {
    this.addCanvas(),
      this.addScene(),
      this.addCamera(),
      this.addMesh(),
      this.addEventListeners(),
      this.onResize(),
      this.update();
  }
  addCanvas() {
    (this.renderer = new p({ alpha: !0, powerPreference: "high-performance" })),
      (this.canvas = this.renderer.domElement),
      this.canvas.classList.add("webgl"),
      this.element.appendChild(this.canvas);
  }
  addScene() {
    this.scene = new f();
  }
  addCamera() {
    (this.camera = new x(
      75,
      this.viewport.width / this.viewport.height,
      0.1,
      10
    )),
      this.camera.position.set(0, 0, 2.5),
      this.scene.add(this.camera);
  }
  addMesh() {
    (this.geometry = new k(1.1, 32, 32)),
      (this.material = new y({
        fragmentShader: $,
        vertexShader: W,
        uniforms: {
          uResolution: {
            value: new h(this.viewport.width, this.viewport.height),
          },
          uTime: { value: 0 },
          uMouse: { value: new h(this.mouse.x, this.mouse.y) },
        },
      })),
      (this.mesh = new u(this.geometry, this.material)),
      this.scene.add(this.mesh);
  }
  addControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }
  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this)),
      window.addEventListener("mousemove", (e) => {
        this.onMouseMove(e);
      });
  }
  onResize() {
    (this.viewport = { width: window.innerWidth, height: window.innerHeight }),
      (this.camera.aspect = this.viewport.width / this.viewport.height),
      this.camera.updateProjectionMatrix(),
      this.renderer.setSize(this.viewport.width, this.viewport.height),
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  }
  onMouseMove(e) {
    let t = this.mouse.x,
      o = this.mouse.y;
    (this.mouse.x = m(t, e.clientX / this.viewport.width - 0.5, 1)),
      (this.mouse.y = m(o, e.clientY / this.viewport.height - 0.5, 1));
  }
  update() {
    this.render(),
      (this.mesh.rotation.y = m(this.mesh.rotation.y, this.mouse.x, 0.075)),
      (this.mesh.rotation.x = m(this.mesh.rotation.x, this.mouse.y, 0.075)),
      (this.material.uniforms.uTime.value = this.clock.getElapsedTime()),
      window.requestAnimationFrame(this.update);
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
class F extends d {
  constructor(e) {
    super({
      componentId: "Landing",
      element: ".l__landing",
      elements: {
        titleMiddle: ".landing__centered-content__title.title_middle",
        titleBottom: ".landing__centered-content__title.title_bottom",
        subtitle: ".landing__centered-content__subtitle",
      },
    });
    (this.isDesktop = e), this.isDesktop && this.loadCanvas();
  }
  loadCanvas() {
    new N();
  }
  show() {
    if (this.isDesktop) {
      const e = n.timeline();
      e.to(
        this.elements.titleMiddle,
        { x: "-25rem", delay: 0.8, duration: 1.5, ease: i.easeInOut },
        "show"
      ),
        e.to(
          this.elements.titleBottom,
          { x: "10rem", delay: 0.8, duration: 1.5, ease: i.easeInOut },
          "show"
        ),
        e.to(
          ".preloader__blackline",
          { xPercent: -100, delay: 0.8, duration: 0.1, ease: i.easeInOut },
          "show"
        ),
        e.to(
          this.elements.subtitle,
          { xPercent: 100, delay: 0.8, duration: 1.5, ease: i.easeInOut },
          "show"
        );
    }
  }
  addEventListeners() {}
  removeEventListeners() {}
}
var V = `varying vec2 vUv;\r
#define PI 3.1415926535897932384626433832795

uniform float uScrollSpeed;\r
uniform vec2 uViewportSizes;\r
uniform float uHoverState;\r
uniform vec2 uHover;\r
uniform float uTime;

void main() {

    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);

    float dist = distance(uv, uHover);

    newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * - (uScrollSpeed * 15.0);

    newPosition.z += (uHoverState * 6.0) * sin(dist * 10.0 + (uTime * 1.5));

    gl_Position = projectionMatrix * newPosition;

    vUv = uv;\r
}`,
  X = `uniform sampler2D uImage;

varying vec2 vUv;

void main(){\r
    gl_FragColor=texture2D(uImage,vUv);\r
}`;
class Y {
  constructor(e) {
    (this.element = e.dom),
      (this.asscroll = e.asscroll),
      (this.viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      }),
      (this.loader = new T()),
      (this.scrollSpeed = 0),
      (this.clock = new g()),
      (this.update = this.update.bind(this)),
      (this.allImages = [...document.querySelectorAll(".project__item__img")]),
      (this.loadedLength = 0),
      (this.maxPos =
        document.querySelector(".about__separator").getBoundingClientRect()
          .left + window.innerHeight),
      (this.minPos = document
        .querySelector(".l__projects")
        .getBoundingClientRect().left),
      (this.mouse = new h()),
      (this.raycaster = new j());
    const t = new Promise((r, s) => {
      R(
        document.querySelectorAll(".project__item__img"),
        { background: !0 },
        r
      );
    });
    this.imagesGroup = new D();
    let o = [t];
    Promise.all(o).then(() => {
      this.init();
    });
  }
  init() {
    this.addCanvas(),
      this.addScene(),
      this.addCamera(),
      this.addImages(),
      this.setImagesPositions(),
      this.onMouseMovement(),
      this.onResize(),
      this.addEventListeners(),
      this.update();
  }
  addCanvas() {
    (this.renderer = new p({
      antialias: !0,
      alpha: !0,
      powerPreference: "high-performance",
    })),
      (this.canvas = this.renderer.domElement),
      this.canvas.classList.add("webgl"),
      this.element.appendChild(this.canvas);
  }
  addScene() {
    this.scene = new f();
  }
  addCamera() {
    (this.camera = new x(
      70,
      this.viewport.width / this.viewport.height,
      100,
      2e3
    )),
      this.scene.add(this.camera);
  }
  addImages() {
    (this.material = new y({
      uniforms: {
        uTime: { value: 0 },
        uImage: { value: 0 },
        uHover: { value: new h(0.5, 0.5) },
        uHoverState: { value: 0 },
        uScrollSpeed: { value: this.scrollSpeed },
        uViewportSizes: {
          value: new h(this.viewport.width, this.viewport.height),
        },
      },
      fragmentShader: X,
      vertexShader: V,
    })),
      (this.materials = []),
      (this.imageStore = this.allImages.map((e) => {
        let t = e.getBoundingClientRect(),
          o = new P(t.width, t.height, 16, 16),
          r = this.loader.load(e.src);
        r.needsUpdate = !0;
        let s = this.material.clone();
        this.materials.push(s), (s.uniforms.uImage.value = r);
        let l = new u(o, s);
        return (
          this.imagesGroup.add(l),
          e.addEventListener("mouseenter", () => {
            n.to(s.uniforms.uHoverState, {
              duration: 1,
              value: 1,
              ease: "power3.out",
            });
          }),
          e.addEventListener("mouseout", () => {
            n.to(s.uniforms.uHoverState, {
              duration: 1,
              value: 0,
              ease: "power3.out",
            });
          }),
          {
            img: e,
            mesh: l,
            top: t.top - window.innerHeight,
            left:
              t.left -
              (window.innerWidth +
                document.querySelector(".l__separator").offsetWidth),
            width: t.width,
            height: t.height,
          }
        );
      }));
  }
  setImagesPositions() {
    this.scene.add(this.imagesGroup),
      this.imageStore.forEach((e) => {
        (e.mesh.position.y =
          -e.top -
          document.querySelector(".projects__container").getBoundingClientRect()
            .top -
          this.viewport.height / 2 -
          e.height / 2),
          (e.mesh.position.x = e.left - this.viewport.width / 2 + e.width / 2);
      });
  }
  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this)),
      window.addEventListener("wheel", (e) => {
        this.scrollSpeed =
          ((this.asscroll.currentPos - this.asscroll.targetPos) /
            this.viewport.width) *
          15;
      });
  }
  onResize() {
    (this.viewport = { width: window.innerWidth, height: window.innerHeight }),
      (this.camera.position.z = 700),
      (this.camera.fov =
        2 *
        Math.atan(this.viewport.height / 2 / this.camera.position.z) *
        (180 / Math.PI)),
      (this.camera.aspect = this.viewport.width / this.viewport.height),
      this.camera.updateProjectionMatrix(),
      this.renderer.setSize(this.viewport.width, this.viewport.height),
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)),
      this.setImagesPositions();
  }
  onMouseMovement() {
    window.addEventListener(
      "mousemove",
      (e) => {
        (this.mouse.x = (e.clientX / this.viewport.width) * 2 - 1),
          (this.mouse.y = -(e.clientY / this.viewport.height) * 2 + 1),
          this.raycaster.setFromCamera(this.mouse, this.camera);
        const t = this.raycaster.intersectObjects(this.scene.children);
        if (t.length > 0) {
          let o = t[0].object;
          o.material.uniforms.uHover.value = t[0].uv;
        }
      },
      !1
    );
  }
  update() {
    const e = this.clock.getElapsedTime();
    this.materials.forEach((t) => {
      (t.uniforms.uTime.value = e),
        (t.uniforms.uScrollSpeed.value = this.scrollSpeed);
    }),
      this.asscroll.currentPos > this.minPos &&
        this.asscroll.currentPos < this.maxPos &&
        (this.setImagesPositions(), this.render()),
      window.requestAnimationFrame(this.update);
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
class K extends d {
  constructor(e, t) {
    super({
      componentId: "Projects",
      element: ".l__projects",
      elements: {
        projectsContainer: ".projects__container",
        projectItem: ".project__item",
      },
    });
    (this.isDesktop = t),
      (this.projectHeight =
        document.querySelector(".projects__introduction").offsetHeight +
        document.querySelector(".projects__container").offsetHeight),
      (this.containerHeight = this.elements.projectsContainer.offsetHeight),
      (this.asscroll = e),
      this.isDesktop && (this.loadCanvas(), this.initCustomAnimations());
  }
  loadCanvas() {
    new Y({
      dom: document.querySelector(".l__projects"),
      asscroll: this.asscroll,
    });
  }
  initCustomAnimations() {
    n.to(".l__projects", {
      scrollTrigger: {
        pin: !0,
        pinSpacing: !0,
        trigger: ".l__projects",
        horizontal: !0,
        end: `${this.containerHeight / 1.8}px`,
      },
    }),
      n.to(".projects__introduction__title.sans-serif-font", {
        x: "8rem",
        scrollTrigger: {
          trigger: ".l__projects",
          scrub: 0,
          horizontal: !0,
          start: "left left",
          end: `${this.containerHeight}px`,
        },
      }),
      n.to(".projects__introduction__title.serif-font", {
        x: "-8rem",
        scrollTrigger: {
          trigger: ".l__projects",
          scrub: 0,
          horizontal: !0,
          start: "left left",
          end: `${this.containerHeight}px`,
        },
      }),
      n.to(".projects__container", {
        y: this.asscroll.currentPos - this.projectHeight,
        scrollTrigger: {
          trigger: ".l__projects",
          scrub: 0,
          horizontal: !0,
          start: "left left",
          end: `${this.containerHeight}px`,
        },
      });
  }
  addEventListeners() {
    this.elements.projectItem.forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault(),
          this.isDesktop
            ? (n.to(".preloader__subline", {
                xPercent: 0,
                duration: 1.5,
                ease: i.easeInOut,
                onComplete: () => (window.location.href = `${e.dataset.src}`),
              }),
              n.to(".preloader__blackline", {
                xPercent: 0,
                delay: 0.05,
                duration: 1.6,
                ease: i.easeInOut,
                onComplete: () => (window.location.href = `${e.dataset.src}`),
              }))
            : (n.to(".preloader__subline", {
                yPercent: 0,
                duration: 1.5,
                ease: i.easeInOut,
              }),
              n.to(".preloader__blackline", {
                yPercent: 0,
                delay: 0.05,
                duration: 1.6,
                ease: i.easeInOut,
                onComplete: () => (window.location.href = `${e.dataset.src}`),
              }));
      });
    });
  }
  removeEventListeners() {}
}
class J extends d {
  constructor(e) {
    super({
      componentId: "Separator",
      element: ".l__separator",
      elements: {
        aboutSeparator: ".about__separator p",
        separator: ".l__separator",
      },
    });
    (this.isDesktop = e), this.isDesktop && this.initAnimation();
  }
  initAnimation() {
    const e = this.elements.separator.querySelector(".separator__top"),
      t = this.elements.separator.querySelector(".separator__bottom");
    n.to(e, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: this.elements.separator,
        horizontal: !0,
        scrub: 0,
        scroller: ".l__content",
      },
    }),
      n.to(t, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: this.elements.separator,
          horizontal: !0,
          scrub: 0,
          scroller: ".l__content",
        },
      }),
      n.to(this.elements.aboutSeparator, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".l__about",
          horizontal: !0,
          scrub: 0,
          scroller: ".l__content",
        },
      });
  }
}
class Q extends d {
  constructor(e) {
    super({
      componentId: "About",
      element: ".l__about",
      elements: {
        introductionLines: ".about__introduction__title",
        textBand: ".about__benefits__bottom-band h2",
      },
    });
    (this.isDesktop = e), this.isDesktop && this.initCustomAnimations();
  }
  initCustomAnimations() {
    Math.floor(Math.random() * 2) + 1 === 2 &&
      n.set(".about__introduction__picture img", { filter: "grayscale(100%)" }),
      n.to(".about__introduction__picture img", {
        scale: 1.5,
        scrollTrigger: {
          horizontal: !0,
          start: "left right",
          scrub: 0,
          trigger: ".about__introduction",
        },
      }),
      n.to(this.elements.introductionLines[0], {
        x: "-5rem",
        scrollTrigger: {
          horizontal: !0,
          start: "left right",
          scrub: 0,
          trigger: ".about__introduction",
        },
      }),
      n.to(this.elements.introductionLines[2], {
        x: "-20rem",
        scrollTrigger: {
          horizontal: !0,
          start: "left right",
          scrub: 0,
          trigger: ".about__introduction",
        },
      }),
      n.to(this.elements.introductionLines[3], {
        x: "5rem",
        scrollTrigger: {
          horizontal: !0,
          start: "left right",
          scrub: 0,
          trigger: ".about__introduction",
        },
      }),
      n.to(this.elements.textBand, {
        xPercent: 20,
        scrollTrigger: {
          horizontal: !0,
          start: "left right",
          scrub: 0,
          trigger: ".about__benefits",
        },
      });
  }
  addEventListeners() {
    document
      .querySelector(".about__character")
      .addEventListener("click", (e) => {
        e.preventDefault(),
          this.isDesktop
            ? (n.to(".preloader__subline", {
                xPercent: 0,
                duration: 1.5,
                ease: i.easeInOut,
                onComplete: () => (window.location.href = "/logo.html"),
              }),
              n.to(".preloader__blackline", {
                xPercent: 0,
                delay: 0.05,
                duration: 1.6,
                ease: i.easeInOut,
                onComplete: () => (window.location.href = "/logo.html"),
              }))
            : (n.to(".preloader__subline", {
                yPercent: 0,
                duration: 1.5,
                ease: i.easeInOut,
              }),
              n.to(".preloader__blackline", {
                yPercent: 0,
                delay: 0.05,
                duration: 1.6,
                ease: i.easeInOut,
                onComplete: () => (window.location.href = "/logo.html"),
              }));
      });
  }
}
class Z extends d {
  constructor(e) {
    super({
      componentId: "Contact",
      element: ".l__contact",
      elements: {
        titleSpans: ".contact__title span",
        backToStart: ".backToStart",
      },
    });
    (this.asscroll = e), this.initAnimations();
  }
  initAnimations() {
    n.to(n.utils.toArray(this.elements.titleSpans), {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: i.easeOut,
      duration: 1.5,
      scrollTrigger: {
        trigger: this.element,
        start: "left center",
        horizontal: !0,
      },
    });
  }
  addEventListeners() {
    this.elements.backToStart.forEach((e) => {
      e.addEventListener("click", (t) => {
        t.preventDefault(), this.asscroll.scrollTo(0);
      });
    });
  }
  removeEventListeners() {}
}
n.registerPlugin(c);
class ee extends S {
  constructor(e) {
    super({ id: "main", element: ".l__content", elements: {} });
    (this.asscroll = new b({ disableRaf: !0, touchScrollType: "scrollTop" })),
      (this.isDesktop = e),
      this.initScroll(),
      this.initComponents(),
      this.initHoverEffect(),
      this.redirectToProjects(),
      this.onResize();
  }
  initComponents() {
    new C(this.asscroll).create(),
      (this.landing = new F(this.isDesktop)),
      this.landing.create(),
      new K(this.asscroll, this.isDesktop).create(),
      new J(this.isDesktop).create(),
      new Q(this.isDesktop).create(),
      new Z(this.asscroll).create();
  }
  initScroll() {
    const e = this.asscroll;
    n.ticker.add(e.update),
      c.defaults({ scroller: ".l__content" }),
      c.scrollerProxy(".l__content", {
        scrollLeft(t) {
          return arguments.length ? (e.currentPos = t) : e.currentPos;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      }),
      e.on("update", c.update),
      c.addEventListener("refresh", e.resize),
      e.enable({ horizontalScroll: window.innerWidth > 1024, reset: !0 });
  }
  initHoverEffect() {
    [...document.querySelectorAll(".menu-item")].forEach((t) => {
      let o = t.children[0].children[0].innerText.split("");
      (t.children[0].innerHTML = ""),
        o.forEach((s, l) => {
          t.children[0].innerHTML += `<span style="--index: ${l}">${s}</span>`;
        });
      let r = t.children[0].cloneNode(!0);
      (r.style.position = "absolute"),
        (r.style.left = "0"),
        (r.style.top = "0"),
        r.classList.add("hover-clone"),
        t.appendChild(r);
    });
  }
  redirectToProjects() {
    document.referrer.indexOf("projects") > -1 &&
      setTimeout(() => {
        this.asscroll.scrollTo(
          document.querySelector(".l__projects").getBoundingClientRect().left
        );
      }, 200);
  }
  show() {
    this.landing.show();
  }
  onResize() {
    this.asscroll.resize();
  }
}
n.registerPlugin(c);
class te extends S {
  constructor() {
    super({ id: "ProjectDetail", element: ".l__content", elements: {} });
    (this.asscroll = new b({ disableRaf: !0 })),
      this.initScroll(),
      this.initComponents(),
      this.initHoverEffect(),
      this.initClicks(),
      this.onResize();
  }
  initComponents() {
    new C().create();
  }
  initScroll() {
    const e = this.asscroll;
    n.ticker.add(e.update),
      c.defaults({ scroller: ".l__content" }),
      c.scrollerProxy(".l__content", {
        scrollLeft(t) {
          return arguments.length ? (e.currentPos = t) : e.currentPos;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      }),
      e.on("update", c.update),
      c.addEventListener("refresh", e.resize),
      e.enable({ reset: !0, horizontalScroll: !1 });
  }
  initHoverEffect() {
    [...document.querySelectorAll(".menu-item")].forEach((t) => {
      let o = t.children[0].children[0].innerText.split("");
      (t.children[0].innerHTML = ""),
        o.forEach((s, l) => {
          t.children[0].innerHTML += `<span style="--index: ${l}">${s}</span>`;
        });
      let r = t.children[0].cloneNode(!0);
      (r.style.position = "absolute"),
        (r.style.left = "0"),
        (r.style.top = "0"),
        r.classList.add("hover-clone"),
        t.appendChild(r);
    });
  }
  initClicks() {
    [
      document.querySelector(".project__detail--return"),
      document.querySelector(".next__project--hover"),
    ].forEach((t) => {
      t.addEventListener("click", (o) => {
        o.preventDefault(),
          window.innerWidth > 1024
            ? (n.to(".preloader__subline", {
                xPercent: 0,
                duration: 1.5,
                ease: i.easeInOut,
              }),
              n.to(".preloader__blackline", {
                xPercent: 0,
                delay: 0.05,
                duration: 1.6,
                ease: i.easeInOut,
                onComplete: () => (window.location.href = `${t.dataset.src}`),
              }))
            : (n.to(".preloader__subline", {
                yPercent: 0,
                duration: 1.5,
                ease: i.easeInOut,
                onComplete: () => (window.location.href = `${t.dataset.src}`),
              }),
              n.to(".preloader__blackline", {
                yPercent: 0,
                delay: 0.05,
                duration: 1.6,
                ease: i.easeInOut,
                onComplete: () => (window.location.href = `${t.dataset.src}`),
              }));
      });
    });
  }
  show() {}
  onResize() {
    this.asscroll.resize();
  }
}
var ne = `uniform vec2 uResolution;\r
uniform float uTime;

uniform float R;\r
uniform float G;\r
uniform float B;\r

varying vec2 vUv;

const int AMOUNT=4;

vec3 mod289(vec3 x)\r
{\r
    return x-floor(x*(1./289.))*289.;\r
}

vec4 mod289(vec4 x)\r
{\r
    return x-floor(x*(1./289.))*289.;\r
}

vec4 permute(vec4 x)\r
{\r
    return mod289(((x*34.)+1.)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159-.85373472095314*r;\r
}

vec3 fade(vec3 t){\r
    return t*t*t*(t*(t*6.-15.)+10.);\r
}

float pnoise(vec3 P,vec3 rep)\r
{\r
    vec3 Pi0=mod(floor(P),rep);
    vec3 Pi1=mod(Pi0+vec3(1.),rep);
    Pi0=mod289(Pi0);\r
    Pi1=mod289(Pi1);\r
    vec3 Pf0=fract(P);
    vec3 Pf1=Pf0-vec3(1.);
    vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);\r
    vec4 iy=vec4(Pi0.yy,Pi1.yy);\r
    vec4 iz0=Pi0.zzzz;\r
    vec4 iz1=Pi1.zzzz;\r
    \r
    vec4 ixy=permute(permute(ix)+iy);\r
    vec4 ixy0=permute(ixy+iz0);\r
    vec4 ixy1=permute(ixy+iz1);\r
    \r
    vec4 gx0=ixy0*(1./7.);\r
    vec4 gy0=fract(floor(gx0)*(1./7.))-.5;\r
    gx0=fract(gx0);\r
    vec4 gz0=vec4(.5)-abs(gx0)-abs(gy0);\r
    vec4 sz0=step(gz0,vec4(0.));\r
    gx0-=sz0*(step(0.,gx0)-.5);\r
    gy0-=sz0*(step(0.,gy0)-.5);\r
    \r
    vec4 gx1=ixy1*(1./7.);\r
    vec4 gy1=fract(floor(gx1)*(1./7.))-.5;\r
    gx1=fract(gx1);\r
    vec4 gz1=vec4(.5)-abs(gx1)-abs(gy1);\r
    vec4 sz1=step(gz1,vec4(0.));\r
    gx1-=sz1*(step(0.,gx1)-.5);\r
    gy1-=sz1*(step(0.,gy1)-.5);\r
    \r
    vec3 g000=vec3(gx0.x,gy0.x,gz0.x);\r
    vec3 g100=vec3(gx0.y,gy0.y,gz0.y);\r
    vec3 g010=vec3(gx0.z,gy0.z,gz0.z);\r
    vec3 g110=vec3(gx0.w,gy0.w,gz0.w);\r
    vec3 g001=vec3(gx1.x,gy1.x,gz1.x);\r
    vec3 g101=vec3(gx1.y,gy1.y,gz1.y);\r
    vec3 g011=vec3(gx1.z,gy1.z,gz1.z);\r
    vec3 g111=vec3(gx1.w,gy1.w,gz1.w);\r
    \r
    vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));\r
    g000*=norm0.x;\r
    g010*=norm0.y;\r
    g100*=norm0.z;\r
    g110*=norm0.w;\r
    vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));\r
    g001*=norm1.x;\r
    g011*=norm1.y;\r
    g101*=norm1.z;\r
    g111*=norm1.w;\r
    \r
    float n000=dot(g000,Pf0);\r
    float n100=dot(g100,vec3(Pf1.x,Pf0.yz));\r
    float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));\r
    float n110=dot(g110,vec3(Pf1.xy,Pf0.z));\r
    float n001=dot(g001,vec3(Pf0.xy,Pf1.z));\r
    float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));\r
    float n011=dot(g011,vec3(Pf0.x,Pf1.yz));\r
    float n111=dot(g111,Pf1);\r
    \r
    vec3 fade_xyz=fade(Pf0);\r
    vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);\r
    vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);\r
    float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);\r
    return 2.2*n_xyz;\r
}

float snoise(vec3 v)\r
{\r
    const vec2 C=vec2(1./6.,1./3.);\r
    const vec4 D=vec4(0.,.5,1.,2.);\r
    \r
    
    vec3 i=floor(v+dot(v,C.yyy));\r
    vec3 x0=v-i+dot(i,C.xxx);\r
    \r
    
    vec3 g=step(x0.yzx,x0.xyz);\r
    vec3 l=1.-g;\r
    vec3 i1=min(g.xyz,l.zxy);\r
    vec3 i2=max(g.xyz,l.zxy);\r
    \r
    
    
    
    
    vec3 x1=x0-i1+C.xxx;\r
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    \r
    
    i=mod289(i);\r
    vec4 p=permute(permute(permute(\r
                i.z+vec4(0.,i1.z,i2.z,1.))\r
                +i.y+vec4(0.,i1.y,i2.y,1.))\r
                +i.x+vec4(0.,i1.x,i2.x,1.));\r
                \r
                
                
                float n_=.142857142857;
                vec3 ns=n_*D.wyz-D.xzx;\r
                \r
                vec4 j=p-49.*floor(p*ns.z*ns.z);
                \r
                vec4 x_=floor(j*ns.z);\r
                vec4 y_=floor(j-7.*x_);
                \r
                vec4 x=x_*ns.x+ns.yyyy;\r
                vec4 y=y_*ns.x+ns.yyyy;\r
                vec4 h=1.-abs(x)-abs(y);\r
                \r
                vec4 b0=vec4(x.xy,y.xy);\r
                vec4 b1=vec4(x.zw,y.zw);\r
                \r
                
                
                vec4 s0=floor(b0)*2.+1.;\r
                vec4 s1=floor(b1)*2.+1.;\r
                vec4 sh=-step(h,vec4(0.));\r
                \r
                vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\r
                vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\r
                \r
                vec3 p0=vec3(a0.xy,h.x);\r
                vec3 p1=vec3(a0.zw,h.y);\r
                vec3 p2=vec3(a1.xy,h.z);\r
                vec3 p3=vec3(a1.zw,h.w);\r
                \r
                
                vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\r
                p0*=norm.x;\r
                p1*=norm.y;\r
                p2*=norm.z;\r
                p3*=norm.w;\r
                \r
                
                vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\r
                m=m*m;\r
                return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),\r
                dot(p2,x2),dot(p3,x3)));\r
            }\r
            \r
            void main(){\r
                vec2 newUv=7.*(vUv.xy-uResolution);\r
                \r
                float len;\r
                \r
                for(int i=0;i<AMOUNT;i++){\r
                    len=length(vec2(newUv.x,newUv.y));\r
                    newUv.x=newUv.x-cos(newUv.y+sin(len))+cos(uTime/4.0);\r
                    newUv.y=newUv.y+sin(newUv.x+cos(len))+sin(uTime/4.0);\r
                }\r
                \r
                vec3 color=vec3(vUv,uResolution);\r
                \r
                gl_FragColor=vec4(cos(len+R),cos(len+G),cos(len+B),.1);\r
            }`,
  re = `varying vec2 vUv;

void main() {\r
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

    vUv = uv;\r
}`;
class ie {
  constructor(e) {
    (this.container = document.getElementById("logoPage")),
      (this.scene = new f()),
      (this.gltfLoader = new O()),
      (this.dracoLoader = new U()),
      (this.mouse = { x: 0, y: 0 }),
      (this.width = this.container.offsetWidth),
      (this.height = this.container.offsetHeight),
      (this.clock = new g()),
      (this.camera = new x(70, this.width / this.height, 100, 2e3)),
      (this.camera.position.z = 350),
      (this.camera.fov =
        2 *
        Math.atan(this.height / 2 / this.camera.position.z) *
        (180 / Math.PI)),
      (this.time = 0),
      (this.renderer = new p({ antialias: !0, alpha: !1 })),
      document.querySelector("#logoPage canvas") ||
        this.container.appendChild(this.renderer.domElement),
      this.addBackgroundObject(),
      this.addModel(),
      this.resize(),
      this.setupResize(),
      this.render();
  }
  lerp(e, t, o) {
    return e * (1 - o) + t * o;
  }
  setupResize() {
    window.addEventListener("resize", this.resize.bind(this)),
      window.addEventListener("mousemove", (e) => {
        this.onMouseMove(e);
      });
  }
  onMouseMove(e) {
    let t = this.mouse.x,
      o = this.mouse.y;
    (this.mouse.x = this.lerp(t, e.clientX / this.width - 0.5, 1)),
      (this.mouse.y = this.lerp(o, e.clientY / this.height - 0.5, 1));
  }
  resize() {
    (this.width = this.container.offsetWidth),
      (this.height = this.container.offsetHeight),
      this.renderer.setSize(this.width, this.height),
      (this.camera.aspect = this.width / this.height),
      this.camera.updateProjectionMatrix();
  }
  addBackgroundObject() {
    (this.backgroundMaterial = new y({
      vertexShader: re,
      fragmentShader: ne,
      side: q,
      uniforms: {
        uResolution: { value: new h(this.width, this.height) },
        uTime: { value: 0 },
        R: { value: 242.8 },
        G: { value: 500 },
        B: { value: 85 },
      },
    })),
      (this.backgroundGeometry = new P(
        this.container.offsetWidth,
        this.container.offsetHeight,
        64,
        64
      )),
      (this.backgroundMesh = new u(
        this.backgroundGeometry,
        this.backgroundMaterial
      )),
      this.scene.add(this.backgroundMesh);
  }
  addModel() {
    this.dracoLoader.setDecoderPath("/examples/js/libs/draco/"),
      this.gltfLoader.setDRACOLoader(this.dracoLoader),
      (this.modelMaterial = new H({
        metalness: 3,
        roughness: 8.8,
        reflectivity: 20,
        transmission: 1.7,
        thickness: 2.1,
        clearcoat: 7.3,
        color: new A("#9e9e9e"),
        emissive: 0,
      })),
      this.gltfLoader.load("/assets/logo.gltf", (e) => {
        (this.modelGeometry = e.scene.children[0].geometry),
          (this.modelMesh = new u(this.modelGeometry, this.modelMaterial)),
          this.modelMesh.scale.set(500, 500, 500),
          this.modelMesh.position.set(0, 0, 200),
          this.modelMesh.rotation.set(1.5, 0, 0),
          this.scene.add(this.modelMesh);
      });
  }
  render() {
    this.modelMesh &&
      ((this.modelMesh.rotation.z = this.lerp(
        this.modelMesh.rotation.z,
        -this.mouse.x * 1.25,
        0.075
      )),
      (this.modelMesh.rotation.x = this.lerp(
        this.modelMesh.rotation.y,
        20 + this.mouse.y * 20,
        0.075
      ))),
      this.renderer.render(this.scene, this.camera),
      (this.backgroundMaterial.uniforms.uTime.value =
        this.clock.getElapsedTime()),
      window.requestAnimationFrame(this.render.bind(this));
  }
  addGui() {
    this.GUI.add(this.backgroundMaterial.uniforms.R, "value")
      .min(0)
      .max(500)
      .step(0.1)
      .name("R"),
      this.GUI.add(this.backgroundMaterial.uniforms.G, "value")
        .min(0)
        .max(500)
        .step(0.1)
        .name("G"),
      this.GUI.add(this.backgroundMaterial.uniforms.B, "value")
        .min(0)
        .max(500)
        .step(0.1)
        .name("B"),
      this.GUI.add(this.camera.position, "z").min(0).max(5e3).step(1);
  }
  show() {}
}
class oe {
  constructor() {
    (this.isDesktop = window.innerWidth > 1024),
      this.createContent(),
      this.createPreloader(),
      this.addEventListeners(),
      this.onResize();
  }
  createPreloader() {
    (this.preloader = new G(this.isDesktop)),
      this.preloader.once("completed", this.onPreloaded.bind(this));
  }
  onPreloaded() {
    this.currentPage.show();
  }
  createContent() {
    (this.content = document.querySelector(".l__content")),
      (this.template = this.content.getAttribute("data-template")),
      this.template === "mainPage" &&
        (this.currentPage = new ee(this.isDesktop)),
      this.template === "ProjectDetail" &&
        (this.currentPage = new te(this.isDesktop)),
      this.template === "logoPage" && (this.currentPage = new ie());
  }
  reloadOnResize() {
    function e(o, r) {
      var r = r || 100,
        s;
      return function (l) {
        s && clearTimeout(s), (s = setTimeout(o, r, l));
      };
    }
    function t() {
      location.reload();
    }
    window.addEventListener("resize", e(t, 150));
  }
  onResize() {
    (this.isDesktop = window.innerWidth > 1024),
      this.isDesktop && this.reloadOnResize();
  }
  addEventListeners() {
    window.addEventListener("resize", () => {
      this.onResize();
    });
  }
}
new oe();
