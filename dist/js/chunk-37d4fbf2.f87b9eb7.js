(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37d4fbf2"],{"384a":function(t,i,a){},"5dcb":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"mainContent w-100"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(i){t.isLoading=i}}},[a("Circle4")],1),a("div",{staticClass:"container"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb my-2 p-0 bg-transparent mb-4"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/products"}},[t._v("相關產品")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.title))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 offset-md-2"},[a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img img-fluid productImg mb-4 mb-md-0",attrs:{src:""+t.product.imageUrl,alt:""+t.product.title}})]),a("div",{staticClass:"col-md-6 d-flex align-items-end flex-column"},[a("div",{staticClass:"productInfo_up w-100"},[a("h4",{staticClass:"mb-4 productTitle"},[t._v(t._s(t.product.title))]),t._m(0),a("div",{staticClass:"price"},[a("div",{staticClass:"price_origin"},[t._v("NT"+t._s(t._f("currency")(t.product.origin_price)))]),a("div",{staticClass:"price_final"},[t._v("NT"+t._s(t._f("currency")(t.product.price)))])])]),a("div",{staticClass:"productInfo_down w-100 mt-auto"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mb-4",on:{change:function(i){var a=Array.prototype.filter.call(i.target.options,(function(t){return t.selected})).map((function(t){var i="_value"in t?t._value:t.value;return i}));t.$set(t.product,"num",i.target.multiple?a:a[0])}}},t._l(10,(function(i){return a("option",{key:i,domProps:{value:i}},[t._v("選購 "+t._s(i)+" "+t._s(t.product.unit))])})),0),a("button",{staticClass:"btn btn-primary btn-block",on:{click:function(i){return t.addToCart(t.product.id,t.product.num)}}},[t._v("加入購物車")])])])]),a("div",{staticClass:"row mb-4"},[t._m(1),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"jumbotron special p-3 h-100"},[a("p",{staticClass:"special_title m-0"},[t._v("商品特色")]),a("div",{staticClass:"special_text"},[t._v(t._s(t.product.content))])])])]),a("h4",{staticClass:"productLike mb-3"},[t._v("你可能喜歡")]),a("div",{staticClass:"row mb-4"},t._l(t.filterData,(function(i){return a("div",{key:i.id,staticClass:"col-6 col-md-4 productBox"},[a("div",{staticClass:"card productLike_item border-0",on:{click:function(a){return t.getLikeProduct(i.id)}}},[a("img",{staticClass:"card-img-top",attrs:{src:""+i.imageUrl,alt:""+i.title}}),a("div",{staticClass:"card-body p-2"},[a("h3",{staticClass:"productLike_title mb-0"},[t._v(t._s(t._f("titleFilter")(i.title)))])])])])})),0)])])]),a("Cart",{attrs:{cart:t.carts},on:{emitDelete:t.deleteItem}})],1)},c=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"coupon d-flex mb-4"},[a("div",{staticClass:"coupon_item mr-1"},[t._v("指定新會員獨享")]),a("div",{staticClass:"coupon_item mr-1"},[t._v("超取滿NT$899免運")]),a("div",{staticClass:"coupon_item"},[t._v("國家/地區配送")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[a("div",{staticClass:"giftInfo rounded"},[a("div",{staticClass:"giftInfo_Item d-flex align-items-center mb-2"},[a("div",{staticClass:"giftInfo_Item_title mr-2 text-center rounded"},[t._v("折價券")]),a("div",{staticClass:"giftInfo_Item_text"},[t._v("熊熊遇見你，可享首購優惠 8 折")])]),a("div",{staticClass:"giftInfo_Item d-flex align-items-center mb-2"},[a("div",{staticClass:"giftInfo_Item_title mr-2 text-center rounded"},[t._v("贈品")]),a("div",{staticClass:"giftInfo_Item_text"},[t._v("小熊維尼聯名蜂蜜奶茶一罐")])]),a("div",{staticClass:"giftInfo_Item d-flex align-items-center mb-2"},[a("div",{staticClass:"giftInfo_Item_title mr-2 text-center rounded"},[t._v("白金會員")]),a("div",{staticClass:"giftInfo_Item_text"},[t._v("單筆消費滿千可享折扣 75 折")])]),a("div",{staticClass:"giftInfo_Item d-flex align-items-center"},[a("div",{staticClass:"giftInfo_Item_title mr-2 text-center rounded"},[t._v("鑽石會員")]),a("div",{staticClass:"giftInfo_Item_text"},[t._v("單筆消費滿千可享折扣 76 折")])])])])}],e=(a("99af"),a("4de4"),a("4160"),a("159b"),a("d58b")),o=a("b3b1"),r={name:"product",data:function(){return{pageName:"系列產品",products:[],product:{},sameProducts:[],carts:[],category:"",isLoading:!1,status:{addToCartIcon:!1}}},components:{Circle4:e["a"],Cart:o["a"]},computed:{filterData:function(){var t=this,i=[],a=[];return i=t.products.filter((function(i,a){return i.category===t.category})),i.forEach((function(i,s){i.title!==t.product.title&&a.push(i)})),a}},methods:{getProducts:function(){var t=this,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/products/all");t.$http.get(i).then((function(i){t.products=i.data.products}))},getProduct:function(){var t=this,i=t.$route.params.id,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/product/").concat(i);t.isLoading=!0,t.$http.get(a).then((function(i){t.isLoading=!1,t.product=i.data.product,t.category=i.data.product.category,t.product.num=1}))},getLikeProduct:function(t){var i=this;i.$router.push("/product/".concat(t)),i.getProduct()},getCart:function(){var t=this,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart");t.$http.get(i).then((function(i){t.carts=i.data.data.carts}))},addToCart:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart"),c={product_id:t,qty:i};a.isLoading=!0,a.$http.post(s,{data:c}).then((function(t){a.getCart(),a.isLoading=!1}))},deleteItem:function(t){var i=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart/").concat(t);i.isLoading=!0,i.$http.delete(a).then((function(t){i.getCart(),i.isLoading=!1}))}},created:function(){this.getProducts(),this.getProduct(),this.getCart()}},n=r,d=(a("c7a3"),a("2877")),l=Object(d["a"])(n,s,c,!1,null,"f994aed6",null);i["default"]=l.exports},c7a3:function(t,i,a){"use strict";var s=a("384a"),c=a.n(s);c.a}}]);
//# sourceMappingURL=chunk-37d4fbf2.f87b9eb7.js.map