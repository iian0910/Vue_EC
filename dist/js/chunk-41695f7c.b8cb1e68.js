(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41695f7c"],{"01fd":function(t,a,i){},"0a18":function(t,a,i){"use strict";var c=i("01fd"),r=i.n(c);r.a},"5dcb":function(t,a,i){"use strict";i.r(a);var c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"mainContent w-100"},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[i("Circle4")],1),i("div",{staticClass:"container"},[i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb my-2 p-0 bg-transparent"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/products"}},[t._v("相關產品")])],1),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.title))])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("h3",{staticClass:"mb-4 productTitle"},[t._v(t._s(t.product.title))]),i("p",{staticClass:"mb-4 productPrice"},[t.product.origin_price!==t.product.price?i("span",{staticClass:"origin_price mr-2"},[t._v("市價:"+t._s(t._f("currency")(t.product.origin_price)))]):t._e(),t._v("網路價："),i("span",{staticClass:"price"},[t._v(t._s(t._f("currency")(t.product.price)))])]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mb-4",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?i:i[0])}}},t._l(10,(function(a){return i("option",{key:a,domProps:{value:a}},[t._v("選購 "+t._s(a)+" "+t._s(t.product.unit))])})),0),i("button",{staticClass:"btn btn-primary btn-block",on:{click:function(a){return t.addToCart(t.product.id,t.product.num)}}},[t._v("加入購物車")])]),i("div",{staticClass:"col-md-8"},[i("img",{staticClass:"img img-fluid mb-4",attrs:{src:""+t.product.imageUrl,alt:""+t.product.title}}),i("div",{staticClass:"jumbotron"},[t._v(" "+t._s(t.product.discription)+" ")])])])]),i("Cart",{attrs:{cart:t.carts},on:{emitDelete:t.deleteItem}})],1)},r=[],o=i("d58b"),e=i("b3b1"),n={name:"product",data:function(){return{pageName:"系列產品",product:{},carts:[],isLoading:!1,status:{addToCartIcon:!1}}},components:{Circle4:o["a"],Cart:e["a"]},methods:{getProduct:function(){var t=this,a=t.$route.params.id,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/product/").concat(a);t.isLoading=!0,t.$http.get(i).then((function(a){t.isLoading=!1,t.product=a.data.product,t.product.num=1}))},getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart");t.$http.get(a).then((function(a){t.carts=a.data.data.carts}))},addToCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this,c="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart"),r={product_id:t,qty:a};i.isLoading=!0,i.$http.post(c,{data:r}).then((function(t){i.getCart(),i.isLoading=!1}))},deleteItem:function(t){var a=this,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart/").concat(t);a.isLoading=!0,a.$http.delete(i).then((function(t){a.getCart(),a.isLoading=!1}))}},created:function(){this.getProduct(),this.getCart()}},s=n,u=(i("0a18"),i("2877")),d=Object(u["a"])(s,c,r,!1,null,"0166ff7e",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-41695f7c.b8cb1e68.js.map