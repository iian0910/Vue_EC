(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fca8489"],{"159b":function(t,e,a){var r=a("da84"),s=a("fdbc"),i=a("17c2"),n=a("9112");for(var c in s){var o=r[c],l=o&&o.prototype;if(l&&l.forEach!==i)try{n(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,s=a("b301");t.exports=s("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"3ca3":function(t,e,a){"use strict";var r=a("6547").charAt,s=a("69f3"),i=a("7dd0"),n="String Iterator",c=s.set,o=s.getterFor(n);i(String,"String",(function(t){c(this,{type:n,string:String(t),index:0})}),(function(){var t,e=o(this),a=e.string,s=e.index;return s>=a.length?{value:void 0,done:!0}:(t=r(a,s),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,a){"use strict";var r=a("23e7"),s=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"4df4":function(t,e,a){"use strict";var r=a("f8c2"),s=a("7b0b"),i=a("9bdd"),n=a("e95a"),c=a("50c4"),o=a("8418"),l=a("35a1");t.exports=function(t){var e,a,u,d,f,v=s(t),p="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,b=void 0!==h,C=0,m=l(v);if(b&&(h=r(h,g>2?arguments[2]:void 0,2)),void 0==m||p==Array&&n(m))for(e=c(v.length),a=new p(e);e>C;C++)o(a,C,b?h(v[C],C):v[C]);else for(d=m.call(v),f=d.next,a=new p;!(u=f.call(d)).done;C++)o(a,C,b?i(d,h,[u.value,C],!0):u.value);return a.length=C,a}},"583d":function(t,e,a){},6062:function(t,e,a){"use strict";var r=a("6d61"),s=a("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},6566:function(t,e,a){"use strict";var r=a("9bf2").f,s=a("7c73"),i=a("e2cc"),n=a("f8c2"),c=a("19aa"),o=a("2266"),l=a("7dd0"),u=a("2626"),d=a("83ab"),f=a("f183").fastKey,v=a("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,a,l){var u=t((function(t,r){c(t,u,e),p(t,{type:e,index:s(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&o(r,t[l],t,a)})),v=g(e),h=function(t,e,a){var r,s,i=v(t),n=b(t,e);return n?n.value=a:(i.last=n={index:s=f(e,!0),key:e,value:a,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=n),r&&(r.next=n),d?i.size++:t.size++,"F"!==s&&(i.index[s]=n)),t},b=function(t,e){var a,r=v(t),s=f(e);if("F"!==s)return r.index[s];for(a=r.first;a;a=a.next)if(a.key==e)return a};return i(u.prototype,{clear:function(){var t=this,e=v(t),a=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete a[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,a=v(e),r=b(e,t);if(r){var s=r.next,i=r.previous;delete a.index[r.index],r.removed=!0,i&&(i.next=s),s&&(s.previous=i),a.first==r&&(a.first=s),a.last==r&&(a.last=i),d?a.size--:e.size--}return!!r},forEach:function(t){var e,a=v(this),r=n(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(u.prototype,a?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),d&&r(u.prototype,"size",{get:function(){return v(this).size}}),u},setStrong:function(t,e,a){var r=e+" Iterator",s=g(e),i=g(r);l(t,e,(function(t,e){p(this,{type:r,target:t,state:s(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),u(e)}}},"6d61":function(t,e,a){"use strict";var r=a("23e7"),s=a("da84"),i=a("94ca"),n=a("6eeb"),c=a("f183"),o=a("2266"),l=a("19aa"),u=a("861d"),d=a("d039"),f=a("1c7e"),v=a("d44e"),p=a("7156");t.exports=function(t,e,a,g,h){var b=s[t],C=b&&b.prototype,m=b,y=g?"set":"add",x={},_=function(t){var e=C[t];n(C,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!u(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(i(t,"function"!=typeof b||!(h||C.forEach&&!d((function(){(new b).entries().next()})))))m=a.getConstructor(e,t,g,y),c.REQUIRED=!0;else if(i(t,!0)){var k=new m,w=k[y](h?{}:-0,1)!=k,S=d((function(){k.has(1)})),E=f((function(t){new b(t)})),L=!h&&d((function(){var t=new b,e=5;while(e--)t[y](e,e);return!t.has(-0)}));E||(m=e((function(e,a){l(e,m,t);var r=p(new b,e,m);return void 0!=a&&o(a,r[y],r,g),r})),m.prototype=C,C.constructor=m),(S||L)&&(_("delete"),_("has"),g&&_("get")),(L||w)&&_(y),h&&C.clear&&delete C.clear}return x[t]=m,r({global:!0,forced:m!=b},x),v(m,t),h||a.setStrong(m,t,g),m}},9840:function(t,e,a){t.exports=a.p+"img/page_banner_2.5f60f6cd.jpg"},a630:function(t,e,a){var r=a("23e7"),s=a("4df4"),i=a("1c7e"),n=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:n},{from:s})},b301:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!a||!r((function(){a.call(null,e||function(){throw 1},1)}))}},b4d3:function(t,e,a){"use strict";var r=a("583d"),s=a.n(r);s.a},b9a2:function(t,e,a){},bb2f:function(t,e,a){var r=a("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c176:function(t,e,a){"use strict";var r=a("b9a2"),s=a.n(r);s.a},ddb0:function(t,e,a){var r=a("da84"),s=a("fdbc"),i=a("e260"),n=a("9112"),c=a("b622"),o=c("iterator"),l=c("toStringTag"),u=i.values;for(var d in s){var f=r[d],v=f&&f.prototype;if(v){if(v[o]!==u)try{n(v,o,u)}catch(g){v[o]=u}if(v[l]||n(v,l,d),s[d])for(var p in i)if(v[p]!==i[p])try{n(v,p,i[p])}catch(g){v[p]=i[p]}}}},e25e:function(t,e,a){var r=a("23e7"),s=a("e583");r({global:!0,forced:parseInt!=s},{parseInt:s})},e583:function(t,e,a){var r=a("da84"),s=a("58a8").trim,i=a("5899"),n=r.parseInt,c=/^[+-]?0[Xx]/,o=8!==n(i+"08")||22!==n(i+"0x16");t.exports=o?function(t,e){var a=s(String(t));return n(a,e>>>0||(c.test(a)?16:10))}:n},e6dc:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainContent"},[a("Header"),a("div",{staticClass:"container"},[t._m(0),a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb mb-2 p-0 bg-transparent"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"breadcrumb-link",attrs:{to:"/"}},[t._v("首頁")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.breadcrumbName))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2 mb-4 mb-md-0 d-none d-md-block"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card"},[a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item categoryItem",class:{active:""===t.currentCategory},on:{click:function(e){t.currentCategory=""}}},[t._v("全部")]),t._l(t.categories,(function(e){return a("li",{key:e,staticClass:"list-group-item categoryItem",class:{active:t.currentCategory===e},on:{click:function(a){t.currentCategory=e}}},[t._v(t._s(e))])}))],2)])])])]),a("div",{staticClass:"col-md-2 mb-4 mb-md-0 d-block d-md-none"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group mb-0"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentCategory,expression:"currentCategory"}],staticClass:"form-control",attrs:{id:"selectMobile"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentCategory=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("全部")]),t._l(t.categories,(function(e){return a("option",{key:e,domProps:{value:""+e}},[t._v(t._s(e))])}))],2)])])])]),a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"row"},t._l(t.filterData[t.currentPage],(function(e){return a("div",{key:e.id,staticClass:"col-md-4 mb-4"},[a("div",{staticClass:"card productItem"},[a("img",{staticClass:"card-img-top",attrs:{src:""+e.imageUrl,alt:""+e.title}}),a("div",{staticClass:"card-body productItem_body"},[a("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[a("h5",{staticClass:"card-title m-0"},[t._v(t._s(t._f("titleFilter")(e.title)))]),a("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(e.category))])]),a("p",{staticClass:"card-text"},[t._v(t._s(e.discription))])]),a("div",{staticClass:"card-footer productItem_footer d-flex justify-content-between"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.getProduct(e.id)}}},[t._v("查看更多")]),a("button",{staticClass:"btn btn-orange",attrs:{type:"button"},on:{click:function(a){return t.addToCart(e.id,e.qty)}}},[t._v("加入購物車")])])])])})),0),t.filterData.length>=2?a("div",{staticClass:"row mb-4 justify-content-center"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination m-0"},[a("li",{staticClass:"page-item",class:{disabled:0===t.currentPage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){e.preventDefault(),t.currentPage=t.currentPage-1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.filterData.length,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.currentPage===e-1}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.currentPage=e-1}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){e.preventDefault(),t.currentPage=t.currentPage+1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])]):t._e()])]),a("Cart",{attrs:{cart:t.carts},on:{emitDelete:t.deleteItem}})],1),a("Footer")],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"carousel slide mb-2",attrs:{id:"productsBanner","data-ride":"carousel"}},[r("ol",{staticClass:"carousel-indicators"},[r("li",{staticClass:"active",attrs:{"data-target":"#productsBanner","data-slide-to":"0"}}),r("li",{attrs:{"data-target":"#productsBanner","data-slide-to":"1"}})]),r("div",{staticClass:"carousel-inner"},[r("div",{staticClass:"carousel-item active"},[r("img",{staticClass:"d-block w-100",attrs:{src:a("effa"),alt:"First slide"}})]),r("div",{staticClass:"carousel-item"},[r("img",{staticClass:"d-block w-100",attrs:{src:a("9840"),alt:"Second slide"}})])]),r("a",{staticClass:"carousel-control-prev",attrs:{href:"#productsBanner",role:"button","data-slide":"prev"}},[r("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"sr-only"},[t._v("Previous")])]),r("a",{staticClass:"carousel-control-next",attrs:{href:"#productsBanner",role:"button","data-slide":"next"}},[r("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"sr-only"},[t._v("Next")])])])}],i=(a("99af"),a("4de4"),a("4160"),a("a630"),a("d3b7"),a("e25e"),a("6062"),a("3ca3"),a("159b"),a("ddb0"),a("0418")),n=a("fd2d"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"cartInfo"},[a("div",{staticClass:"cartIcon",attrs:{"data-toggle":"collapse","data-target":"#cartCollapse"}},[a("i",{staticClass:"fas fa-shopping-cart"},[0!==t.cart.length?a("div",{staticClass:"dot"}):t._e()])]),a("div",{staticClass:"collapse cartCollapse",attrs:{id:"cartCollapse"}},[a("div",{staticClass:"card card-body p-3"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.cart,(function(e){return a("tr",{key:e.id},[a("th",{staticClass:"px-0 text-center",attrs:{scope:"row"}},[a("button",{staticClass:"btn btn-sm btn-outline-danger",on:{click:function(a){return t.deleteItem(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),a("td",[t._v(t._s(e.product.title))]),a("td",[t._v(t._s(t._f("currency")(e.product.price)))])])})),0)]),a("button",{staticClass:"btn btn-orange btn-block",attrs:{type:"button"}},[t._v("結帳去")])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{scope:"col",width:"25%"}},[t._v("刪除")]),a("th",{staticClass:"text-left",attrs:{scope:"col",width:"50%"}},[t._v("品名")]),a("th",{staticClass:"text-left",attrs:{scope:"col",width:"25%"}},[t._v("價格")])])])}],l={name:"cart",props:["cart"],data:function(){return{}},methods:{deleteItem:function(t){this.$emit("emitDelete",t)}}},u=l,d=(a("c176"),a("2877")),f=Object(d["a"])(u,c,o,!1,null,"68c51386",null),v=f.exports,p={name:"product",data:function(){return{breadcrumbName:"系列產品",products:[],categories:[],currentCategory:"",currentPage:0,carts:[]}},components:{Header:i["a"],Footer:n["a"],Cart:v},computed:{filterData:function(){var t=this,e=[];t.currentPage=0,e=""!==t.currentCategory?t.products.filter((function(e,a){return console.log(e),e.category===t.currentCategory})):t.products,console.log(t.currentCategory);var a=[];return e.forEach((function(t,e){e%9===0&&a.push([]);var r=parseInt(e/9);a[r].push(t)})),console.log("newProducts",a),a}},methods:{getProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/products/all");t.axios.get(e).then((function(e){console.log(e.data),t.products=e.data.products,t.getCategory()}))},getCategory:function(){var t=this,e=new Set;t.products.forEach((function(t){e.add(t.category)})),t.categories=Array.from(e)},getProduct:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/product/").concat(t);e.axios.get(a).then((function(t){var a=t.data.product.id;console.log("pageID",a),e.$router.push("/product/".concat(a))}))},getCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart");t.axios.get(e).then((function(e){console.log(e.data.data.carts),t.carts=e.data.data.carts}))},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart"),s={product_id:t,qty:e};this.$http.post(r,{data:s}).then((function(t){console.log(t),a.getCart()}))},deleteItem:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart/").concat(t);e.axios.delete(a).then((function(t){e.getCart()}))}},created:function(){this.getProducts(),this.getCart()}},g=p,h=(a("b4d3"),Object(d["a"])(g,r,s,!1,null,"7f96c445",null));e["default"]=h.exports},effa:function(t,e,a){t.exports=a.p+"img/page_banner.d78b36db.jpg"},f183:function(t,e,a){var r=a("d012"),s=a("861d"),i=a("5135"),n=a("9bf2").f,c=a("90e3"),o=a("bb2f"),l=c("meta"),u=0,d=Object.isExtensible||function(){return!0},f=function(t){n(t,l,{value:{objectID:"O"+ ++u,weakData:{}}})},v=function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,l)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[l].objectID},p=function(t,e){if(!i(t,l)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[l].weakData},g=function(t){return o&&h.REQUIRED&&d(t)&&!i(t,l)&&f(t),t},h=t.exports={REQUIRED:!1,fastKey:v,getWeakData:p,onFreeze:g};r[l]=!0},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-5fca8489.7b960066.js.map