(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bcdd02ee"],{"19b3":function(t,e,a){},"3ca3":function(t,e,a){"use strict";var r=a("6547").charAt,i=a("69f3"),n=a("7dd0"),s="String Iterator",c=i.set,o=i.getterFor(s);n(String,"String",(function(t){c(this,{type:s,string:String(t),index:0})}),(function(){var t,e=o(this),a=e.string,i=e.index;return i>=a.length?{value:void 0,done:!0}:(t=r(a,i),e.index+=t.length,{value:t,done:!1})}))},"3ec1":function(t,e,a){"use strict";var r=a("19b3"),i=a.n(r);i.a},"4df4":function(t,e,a){"use strict";var r=a("f8c2"),i=a("7b0b"),n=a("9bdd"),s=a("e95a"),c=a("50c4"),o=a("8418"),u=a("35a1");t.exports=function(t){var e,a,l,d,f,v=i(t),g="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,m=void 0!==h,b=0,C=u(v);if(m&&(h=r(h,p>2?arguments[2]:void 0,2)),void 0==C||g==Array&&s(C))for(e=c(v.length),a=new g(e);e>b;b++)o(a,b,m?h(v[b],b):v[b]);else for(d=C.call(v),f=d.next,a=new g;!(l=f.call(d)).done;b++)o(a,b,m?n(d,h,[l.value,b],!0):l.value);return a.length=b,a}},6062:function(t,e,a){"use strict";var r=a("6d61"),i=a("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,a){"use strict";var r=a("9bf2").f,i=a("7c73"),n=a("e2cc"),s=a("f8c2"),c=a("19aa"),o=a("2266"),u=a("7dd0"),l=a("2626"),d=a("83ab"),f=a("f183").fastKey,v=a("69f3"),g=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,a,u){var l=t((function(t,r){c(t,l,e),g(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&o(r,t[u],t,a)})),v=p(e),h=function(t,e,a){var r,i,n=v(t),s=m(t,e);return s?s.value=a:(n.last=s={index:i=f(e,!0),key:e,value:a,previous:r=n.last,next:void 0,removed:!1},n.first||(n.first=s),r&&(r.next=s),d?n.size++:t.size++,"F"!==i&&(n.index[i]=s)),t},m=function(t,e){var a,r=v(t),i=f(e);if("F"!==i)return r.index[i];for(a=r.first;a;a=a.next)if(a.key==e)return a};return n(l.prototype,{clear:function(){var t=this,e=v(t),a=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete a[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,a=v(e),r=m(e,t);if(r){var i=r.next,n=r.previous;delete a.index[r.index],r.removed=!0,n&&(n.next=i),i&&(i.previous=n),a.first==r&&(a.first=i),a.last==r&&(a.last=n),d?a.size--:e.size--}return!!r},forEach:function(t){var e,a=v(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),n(l.prototype,a?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),d&&r(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,a){var r=e+" Iterator",i=p(e),n=p(r);u(t,e,(function(t,e){g(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=n(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),l(e)}}},"6d61":function(t,e,a){"use strict";var r=a("23e7"),i=a("da84"),n=a("94ca"),s=a("6eeb"),c=a("f183"),o=a("2266"),u=a("19aa"),l=a("861d"),d=a("d039"),f=a("1c7e"),v=a("d44e"),g=a("7156");t.exports=function(t,e,a,p,h){var m=i[t],b=m&&m.prototype,C=m,y=p?"set":"add",x={},k=function(t){var e=b[t];s(b,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!l(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(n(t,"function"!=typeof m||!(h||b.forEach&&!d((function(){(new m).entries().next()})))))C=a.getConstructor(e,t,p,y),c.REQUIRED=!0;else if(n(t,!0)){var _=new C,w=_[y](h?{}:-0,1)!=_,P=d((function(){_.has(1)})),D=f((function(t){new m(t)})),E=!h&&d((function(){var t=new m,e=5;while(e--)t[y](e,e);return!t.has(-0)}));D||(C=e((function(e,a){u(e,C,t);var r=g(new m,e,C);return void 0!=a&&o(a,r[y],r,p),r})),C.prototype=b,b.constructor=C),(P||E)&&(k("delete"),k("has"),p&&k("get")),(E||w)&&k(y),h&&b.clear&&delete b.clear}return x[t]=C,r({global:!0,forced:C!=m},x),v(C,t),h||a.setStrong(C,t,p),C}},a630:function(t,e,a){var r=a("23e7"),i=a("4df4"),n=a("1c7e"),s=!n((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:i})},bb2f:function(t,e,a){var r=a("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},ddb0:function(t,e,a){var r=a("da84"),i=a("fdbc"),n=a("e260"),s=a("9112"),c=a("b622"),o=c("iterator"),u=c("toStringTag"),l=n.values;for(var d in i){var f=r[d],v=f&&f.prototype;if(v){if(v[o]!==l)try{s(v,o,l)}catch(p){v[o]=l}if(v[u]||s(v,u,d),i[d])for(var g in n)if(v[g]!==n[g])try{s(v,g,n[g])}catch(p){v[g]=n[g]}}}},f183:function(t,e,a){var r=a("d012"),i=a("861d"),n=a("5135"),s=a("9bf2").f,c=a("90e3"),o=a("bb2f"),u=c("meta"),l=0,d=Object.isExtensible||function(){return!0},f=function(t){s(t,u,{value:{objectID:"O"+ ++l,weakData:{}}})},v=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!n(t,u)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[u].objectID},g=function(t,e){if(!n(t,u)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[u].weakData},p=function(t){return o&&h.REQUIRED&&d(t)&&!n(t,u)&&f(t),t},h=t.exports={REQUIRED:!1,fastKey:v,getWeakData:g,onFreeze:p};r[u]=!0},f61e:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainContent w-100"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("Circle4")],1),a("div",{staticClass:"container"},[a("div",{staticClass:"pageFullBanner mb-2"}),a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb mb-2 p-0 bg-transparent"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"breadcrumb-link",attrs:{to:"/"}},[t._v(" 首頁 ")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.breadcrumbName)+" ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2 mb-4 mb-md-0 d-none d-md-block"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card selectCategory"},[a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item categoryItem",class:{active:""===t.currentCategory},on:{click:function(e){t.currentCategory=""}}},[t._v(" 全部 ")]),t._l(t.categories,(function(e){return a("li",{key:e,staticClass:"list-group-item categoryItem",class:{active:t.currentCategory===e},on:{click:function(a){t.currentCategory=e}}},[t._v(" "+t._s(e)+" ")])}))],2)])])])]),a("div",{staticClass:"col-md-2 mb-4 mb-md-0 d-block d-md-none"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group mb-0"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.currentCategory,expression:"currentCategory"}],staticClass:"form-control",attrs:{id:"selectMobile"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentCategory=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v(" 全部 ")]),t._l(t.categories,(function(e){return a("option",{key:e,domProps:{value:""+e}},[t._v(" "+t._s(e)+" ")])}))],2)])])])]),a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"row"},t._l(t.filterData[t.currentPage],(function(e){return a("div",{key:e.id,staticClass:"col-6 col-md-3 mb-2 mb-md-4 productBox"},[a("div",{staticClass:"card productItem",on:{click:function(a){return t.getProduct(e.id)}}},[a("img",{staticClass:"card-img-top",attrs:{src:""+e.imageUrl,alt:""+e.title}}),a("div",{staticClass:"card-body p-2"},[a("h5",{staticClass:"card-title productItem_title mb-0"},[t._v(" "+t._s(t._f("titleFilter")(e.title))+" ")]),a("div",{staticClass:"d-flex justify-content-between align-items-end px-1"},[a("div",{staticClass:"price-group"},[a("div",{staticClass:"origin_price mb-0"},[t._v(" NT"+t._s(t._f("currency")(e.origin_price))+" ")]),a("div",{staticClass:"final_price text-danger mb-0"},[t._v(" NT"+t._s(t._f("currency")(e.price))+" ")])])]),a("div",{staticClass:"icon-group"},[a("i",{staticClass:"far fa-heart likeIcon mr-0 mr-md-3",class:{fa:e.likeThis},on:{click:function(t){t.stopPropagation(),e.likeThis=!e.likeThis}}}),a("i",{staticClass:"fas fa-shopping-cart",on:{click:function(a){return a.stopPropagation(),t.addToCart(e.id,e.qty)}}})])])])])})),0),t.filterData.length>=2?a("div",{staticClass:"row mb-4 justify-content-center"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination m-0"},[a("li",{staticClass:"page-item",class:{disabled:0===t.currentPage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){e.preventDefault(),t.currentPage=t.currentPage-1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.filterData.length,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.currentPage===e-1}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.currentPage=e-1}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){e.preventDefault(),t.currentPage=t.currentPage+1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])]):t._e()])]),a("Cart",{attrs:{cart:t.carts},on:{emitDelete:t.deleteItem}})],1)],1)},i=[],n=(a("99af"),a("4de4"),a("4160"),a("a630"),a("d3b7"),a("e25e"),a("6062"),a("3ca3"),a("159b"),a("ddb0"),a("d58b")),s=a("b3b1"),c={name:"Products",components:{Circle4:n["a"],Cart:s["a"]},data:function(){return{breadcrumbName:"相關產品",products:[],categories:[],currentCategory:"",currentPage:0,carts:[],isLoading:!1}},computed:{filterData:function(){var t=this,e=[];t.currentPage=0,e=""!==t.currentCategory?t.products.filter((function(e,a){return e.category===t.currentCategory})):t.products;var a=[];return e.forEach((function(t,e){e%12===0&&a.push([]);var r=parseInt(e/12);a[r].push(t)})),a}},created:function(){this.getProducts(),this.getCart()},methods:{getProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/products/all");t.isLoading=!0,t.$http.get(e).then((function(e){t.products=e.data.products,t.products.forEach((function(e){t.$set(e,"likeThis",!1)})),t.getCategory(),t.isLoading=!1}))},getCategory:function(){var t=this,e=new Set;t.products.forEach((function(t){e.add(t.category)})),t.categories=Array.from(e)},getProduct:function(t){var e=this;e.$router.push("/product/".concat(t))},getCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart");t.$http.get(e).then((function(e){t.carts=e.data.data.carts}))},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart"),i={product_id:t,qty:e};a.isLoading=!0,a.$http.post(r,{data:i}).then((function(t){t.data.success?(a.getCart(),a.isLoading=!1,a.$bus.$emit("message:push",t.data.message,"success")):a.$bus.$emit("message:push",t.data.message,"danger")}))},deleteItem:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart/").concat(t);e.isLoading=!0,e.$http.delete(a).then((function(t){t.data.success?(e.getCart(),e.isLoading=!1,e.$bus.$emit("message:push",t.data.message,"success")):e.$bus.$emit("message:push",t.data.message,"danger")}))}}},o=c,u=(a("3ec1"),a("2877")),l=Object(u["a"])(o,r,i,!1,null,"751c16d5",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-bcdd02ee.27a35a1b.js.map