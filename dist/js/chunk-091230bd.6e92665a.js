(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-091230bd"],{5875:function(t,a,e){},"8bed":function(t,a,e){"use strict";var s=e("5875"),r=e.n(s);r.a},f61e:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mainContent w-100"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("Circle4")],1),e("div",{staticClass:"container"},[e("div",{staticClass:"pageFullBanner mb-2"}),e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb mb-2 p-0 bg-transparent"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{staticClass:"breadcrumb-link",attrs:{to:"/"}},[t._v("首頁")])],1),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.breadcrumbName))])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2 mb-4 mb-md-0 d-none d-md-block"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"list-group-item categoryItem",class:{active:""===t.currentCategory},on:{click:function(a){t.currentCategory=""}}},[t._v("全部")]),t._l(t.categories,(function(a){return e("li",{key:a,staticClass:"list-group-item categoryItem",class:{active:t.currentCategory===a},on:{click:function(e){t.currentCategory=a}}},[t._v(t._s(a))])}))],2)])])])]),e("div",{staticClass:"col-md-2 mb-4 mb-md-0 d-block d-md-none"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"form-group mb-0"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentCategory,expression:"currentCategory"}],staticClass:"form-control",attrs:{id:"selectMobile"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.currentCategory=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("全部")]),t._l(t.categories,(function(a){return e("option",{key:a,domProps:{value:""+a}},[t._v(t._s(a))])}))],2)])])])]),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"row"},t._l(t.filterData[t.currentPage],(function(a){return e("div",{key:a.id,staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"card productItem"},[e("img",{staticClass:"card-img-top",attrs:{src:""+a.imageUrl,alt:""+a.title}}),e("div",{staticClass:"card-body productItem_body"},[e("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[e("h5",{staticClass:"card-title m-0"},[t._v(t._s(t._f("titleFilter")(a.title)))]),e("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(a.category))])]),e("div",{staticClass:"d-flex align-items-end"},[a.origin_price!==a.price?e("p",{staticClass:"card-text org_price mb-0"},[t._v("原價："),e("span",[t._v(t._s(t._f("currency")(a.origin_price)))])]):t._e(),e("p",{staticClass:"card-text price mb-0"},[t._v("網路價："),e("span",[t._v(t._s(t._f("currency")(a.price)))])])])]),e("div",{staticClass:"card-footer productItem_footer d-flex justify-content-between"},[e("button",{staticClass:"btn btn-primary px-0",attrs:{type:"button"},on:{click:function(e){return t.getProduct(a.id)}}},[t._v("查看更多")]),e("button",{staticClass:"btn btn-orange px-0",attrs:{type:"button"},on:{click:function(e){return t.addToCart(a.id,a.qty)}}},[t._v("加入購物車")])])])])})),0),t.filterData.length>=2?e("div",{staticClass:"row mb-4 justify-content-center"},[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination m-0"},[e("li",{staticClass:"page-item",class:{disabled:0===t.currentPage}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){a.preventDefault(),t.currentPage=t.currentPage-1}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),e("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.filterData.length,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.currentPage===a-1}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.currentPage=a-1}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){a.preventDefault(),t.currentPage=t.currentPage+1}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),e("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])]):t._e()])]),e("Cart",{attrs:{cart:t.carts},on:{emitDelete:t.deleteItem}})],1)],1)},r=[],i=e("d58b"),c=e("b3b1"),n={name:"products",data:function(){return{breadcrumbName:"系列產品",products:[],categories:[],currentCategory:"",currentPage:0,carts:[],isLoading:!1}},components:{Circle4:i["a"],Cart:c["a"]},computed:{filterData:function(){var t=this,a=[];t.currentPage=0,a=""!==t.currentCategory?t.products.filter((function(a,e){return a.category===t.currentCategory})):t.products;var e=[];return a.forEach((function(t,a){a%9===0&&e.push([]);var s=parseInt(a/9);e[s].push(t)})),e}},methods:{getProducts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/products/all");t.isLoading=!0,t.axios.get(a).then((function(a){t.products=a.data.products,t.getCategory(),t.isLoading=!1}))},getCategory:function(){var t=this,a=new Set;t.products.forEach((function(t){a.add(t.category)})),t.categories=Array.from(a)},getProduct:function(t){var a=this;a.$router.push("/product/".concat(t))},getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart");t.axios.get(a).then((function(a){t.carts=a.data.data.carts}))},addToCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart"),r={product_id:t,qty:a};e.isLoading=!0,e.$http.post(s,{data:r}).then((function(t){t.data.success?(e.getCart(),e.isLoading=!1,e.$bus.$emit("message:push",t.data.message,"success")):e.$bus.$emit("message:push",t.data.message,"danger")}))},deleteItem:function(t){var a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart/").concat(t);a.isLoading=!0,a.axios.delete(e).then((function(t){t.data.success?(a.getCart(),a.isLoading=!1,a.$bus.$emit("message:push",t.data.message,"success")):a.$bus.$emit("message:push",t.data.message,"danger")}))}},created:function(){this.getProducts(),this.getCart()}},o=n,l=(e("8bed"),e("2877")),u=Object(l["a"])(o,s,r,!1,null,"664d5675",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-091230bd.6e92665a.js.map