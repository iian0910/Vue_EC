(function(e){function n(n){for(var r,a,o=n[0],i=n[1],l=n[2],f=0,s=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(s.length)s.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==c[o]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-b8fc4a48":"169a3792","chunk-1a4ed369":"4b072ae4","chunk-613aa2c3":"d51a3a24","chunk-c94fbb50":"8a17502c","chunk-159ae9c5":"1d400582","chunk-3c27f8e9":"9d441535","chunk-49970a4e":"e8b1cbf4","chunk-8048e892":"4ca040c3","chunk-8926e250":"f8b90fa9"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-b8fc4a48":1,"chunk-1a4ed369":1,"chunk-613aa2c3":1,"chunk-c94fbb50":1,"chunk-159ae9c5":1,"chunk-3c27f8e9":1,"chunk-8926e250":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-b8fc4a48":"d272258f","chunk-1a4ed369":"208abf4e","chunk-613aa2c3":"1374b4fc","chunk-c94fbb50":"40497771","chunk-159ae9c5":"87b515ef","chunk-3c27f8e9":"80c81a64","chunk-49970a4e":"31d6cfe0","chunk-8048e892":"31d6cfe0","chunk-8926e250":"38906f66"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var l=u[o],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===c))return n()}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){l=s[o],f=l.getAttribute("data-href");if(f===r||f===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],h.parentNode.removeChild(h),t(u)},h.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=u);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var s=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}c[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var h=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=t("bc3a"),c=t.n(a),u=t("a7fe"),o=t.n(u),i=t("9062"),l=t.n(i),f=(t("e40d"),t("7bb1")),s=t("427f"),h=t.n(s),d=(t("4989"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),p=[],b=(t("5c0b"),t("2877")),m={},k=Object(b["a"])(m,d,p,!1,null,null,null),g=k.exports,v=(t("d3b7"),t("8c4f"));r["a"].use(v["a"]);var y=[{path:"/login",name:"Login",component:function(){return Promise.all([t.e("chunk-c94fbb50"),t.e("chunk-8926e250")]).then(t.bind(null,"a55b"))}},{path:"/admin",name:"Dashboard",component:function(){return Promise.all([t.e("chunk-c94fbb50"),t.e("chunk-159ae9c5")]).then(t.bind(null,"7277"))},children:[{path:"productsList",name:"ProductsList",component:function(){return Promise.all([t.e("chunk-c94fbb50"),t.e("chunk-3c27f8e9")]).then(t.bind(null,"cae6"))},meta:{requiresAuth:!0}},{path:"orderList",name:"OrderList",component:function(){return Promise.all([t.e("chunk-c94fbb50"),t.e("chunk-8048e892")]).then(t.bind(null,"bf4b"))},meta:{requiresAuth:!0}},{path:"coupons",name:"Coupons",component:function(){return Promise.all([t.e("chunk-c94fbb50"),t.e("chunk-49970a4e")]).then(t.bind(null,"f329"))},meta:{requiresAuth:!0}}]},{path:"/products",name:"Prducts",component:function(){return Promise.all([t.e("chunk-b8fc4a48"),t.e("chunk-1a4ed369")]).then(t.bind(null,"e6dc"))}},{path:"/product/:id",name:"Prduct",component:function(){return Promise.all([t.e("chunk-b8fc4a48"),t.e("chunk-613aa2c3")]).then(t.bind(null,"d2f1"))}}],w=new v["a"]({base:"",routes:y}),P=w;r["a"].prototype.$bus=new r["a"];t("cafb"),t("a9e3"),t("b680"),t("ac1f"),t("5319");var O=function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var r=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return r})))},j=(t("0d03"),function(e){var n=new Date(1e3*e);return n.toLocaleDateString()}),L=function(e){var n="",t=e.length;return t>20?(n=e.substring(0,26)+" …",n):e},_=function(e){var n="",t=e.length;return t>10?(n=e.substring(0,7)+" ...",n):e};r["a"].config.productionTip=!1,f["a"].Validator.localize("zh_TW",h.a),r["a"].use(o.a,c.a),r["a"].use(f["a"]),r["a"].component("Loading",l.a),r["a"].filter("currency",O),r["a"].filter("date",j),r["a"].filter("textShow",L),r["a"].filter("titleFilter",_),c.a.defaults.withCredentials=!0,P.beforeEach((function(e,n,t){if(e.meta.requiresAuth){var r="".concat("https://vue-course-api.hexschool.io","/api/user/check");c.a.post(r).then((function(e){console.log(e.data),e.data.success?t():t({path:"/login"})}))}else t()})),new r["a"]({router:P,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),a=t.n(r);a.a},"9c0c":function(e,n,t){},cafb:function(e,n){console.log("HI")}});
//# sourceMappingURL=app.7269deea.js.map