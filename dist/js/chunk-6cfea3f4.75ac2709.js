(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cfea3f4"],{"24e8":function(t,s,a){t.exports=a.p+"img/newsImg.5bee536e.jpg"},"56b2":function(t){t.exports=JSON.parse('[{"id":"20200210","date":"2020.02.10","title":"戀愛季節【熊愛你】，購物滿 $5,000 送 $500","image":"https://images2.imgbox.com/41/eb/QiUL9xJw_o.jpg"},{"id":"20200123","date":"2020.01.23","title":"返鄉過年【熊黑皮】，過年期間暫停營業","image":"https://images2.imgbox.com/42/97/rM2FXABp_o.jpg"},{"id":"20200120","date":"2020.01.20","title":"過年放假【熊放肆】，食品系列商品 6 折起","image":"https://images2.imgbox.com/22/e1/L09RfsEO_o.jpg"},{"id":"20200101","date":"2020.01.01","title":"跨年無伴【熊孤單】，玩偶系列商品 7 折起","image":"https://images2.imgbox.com/c9/02/Cyg7InzC_o.jpg"},{"id":"20191225","date":"2019.12.25","title":"冬季聖誕【熊溫暖】，服飾系列商品 8 折起","image":"https://images2.imgbox.com/83/19/1bBrBed8_o.jpg"}]')},"5e99":function(t,s,a){},"5ea6":function(t,s,a){t.exports=a.p+"img/eeyore.b1c312ee.png"},"822d":function(t,s,a){t.exports=a.p+"img/pig.54c08ee6.png"},a969:function(t,s,a){"use strict";var i=a("5e99"),e=a.n(i);e.a},b8eb:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[i("Circle4")],1),i("div",{staticClass:"container"},[t._m(0),i("section",{staticClass:"section news"},[i("h3",{staticClass:"sectionTitle mb-4 text-center"},[t._v(" 最新消息 ")]),i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-md-6"},[i("ul",{staticClass:"news_list"},t._l(t.jsonData,(function(s){return i("li",{key:s.id,staticClass:"news_list_item mb-2"},[i("router-link",{staticClass:"news_link",attrs:{to:{name:"News",query:{queryId:s.id}}}},[i("div",{staticClass:"news_date"},[t._v(" "+t._s(s.date)+" ")]),i("div",{staticClass:"news_text"},[t._v(" "+t._s(s.title)+" ")])])],1)})),0)]),t._m(1)])]),i("section",{staticClass:"section"},[i("h3",{staticClass:"sectionTitle mb-4 text-center"},[t._v(" 經典熱銷 ")]),i("div",{staticClass:"row"},t._l(t.products.slice(0,4),(function(s){return i("div",{key:s.key,staticClass:"col-6 col-md-3 productBox"},[i("div",{staticClass:"card productItem",on:{click:function(a){return t.getProduct(s.id)}}},[i("img",{staticClass:"card-img-top",attrs:{src:""+s.imageUrl,alt:""+s.title}}),i("div",{staticClass:"card-body p-2"},[i("h5",{staticClass:"card-title productItem_title mb-0"},[t._v(" "+t._s(t._f("titleFilter")(s.title))+" ")]),i("div",{staticClass:"d-flex justify-content-between align-items-end px-1"},[i("div",{staticClass:"price-group"},[i("div",{staticClass:"origin_price mb-0"},[t._v(" NT"+t._s(t._f("currency")(s.origin_price))+" ")]),i("div",{staticClass:"final_price text-danger mb-0"},[t._v(" NT"+t._s(t._f("currency")(s.price))+" ")])])]),i("div",{staticClass:"icon-group"},[i("i",{staticClass:"far fa-heart likeIcon mr-0 mr-md-3",class:{fa:s.likeThis},on:{click:function(a){return a.stopPropagation(),t.likeItem(s)}}}),i("i",{staticClass:"fas fa-shopping-cart",on:{click:function(a){return a.stopPropagation(),t.addToCart(s.id,s.qty)}}})])])])])})),0)]),i("section",{staticClass:"section characters"},[i("h3",{staticClass:"sectionTitle mb-4 text-center"},[t._v(" 系列角色 ")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 col-md-3"},[i("router-link",{staticClass:"charactersLink",attrs:{to:"/characters/winnie"}},[i("div",{staticClass:"card border-0"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:a("bf88"),alt:""}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title text-center"},[t._v(" 維尼（Winnie） ")])])]),i("button",{staticClass:"btn btn-danger btn-lg charactersBtn"},[t._v(" 看更多 ")])])],1),i("div",{staticClass:"col-6 col-md-3"},[i("router-link",{staticClass:"charactersLink",attrs:{to:"/characters/pig"}},[i("div",{staticClass:"card border-0"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:a("822d"),alt:""}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title text-center"},[t._v(" 小豬（Piglet） ")])])]),i("button",{staticClass:"btn btn-danger btn-lg charactersBtn"},[t._v(" 看更多 ")])])],1),i("div",{staticClass:"col-6 col-md-3"},[i("router-link",{staticClass:"charactersLink",attrs:{to:"/characters/tiger"}},[i("div",{staticClass:"card border-0"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:a("bf91"),alt:""}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title text-center"},[t._v(" 跳跳虎（Tiger） ")])])]),i("button",{staticClass:"btn btn-danger btn-lg charactersBtn"},[t._v(" 看更多 ")])])],1),i("div",{staticClass:"col-6 col-md-3"},[i("router-link",{staticClass:"charactersLink",attrs:{to:"/characters/eeyore"}},[i("div",{staticClass:"card border-0"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:a("5ea6"),alt:""}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title text-center"},[t._v(" 屹耳（Eeyore） ")])])]),i("button",{staticClass:"btn btn-danger btn-lg charactersBtn"},[t._v(" 看更多 ")])])],1)])]),i("div",{staticClass:"sideiconGruop"},[i("LikeProduct",{attrs:{likeProduct:t.likeProducts},on:{emitLike:t.likeItem}}),i("Cart",{attrs:{cart:t.carts},on:{emitDelete:t.deleteItem}})],1)])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"carousel slide",attrs:{id:"indexBanner","data-ride":"carousel"}},[a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#indexBanner","data-slide-to":"0"}}),a("li",{attrs:{"data-target":"#indexBanner","data-slide-to":"1"}})]),a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item activeBanner01 active"}),a("div",{staticClass:"carousel-item activeBanner02"})]),a("a",{staticClass:"carousel-control-prev",attrs:{href:"#indexBanner",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),a("a",{staticClass:"carousel-control-next",attrs:{href:"#indexBanner",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-md-6 d-none d-md-block"},[i("img",{staticClass:"img img-fluid",attrs:{src:a("24e8"),alt:""}})])}],c=(a("99af"),a("4160"),a("159b"),a("d58b")),r=a("b3b1"),n=a("9a05"),o=a("56b2"),l={name:"Index",components:{Circle4:c["a"],Cart:r["a"],LikeProduct:n["a"]},data:function(){return{products:[],carts:[],likeProducts:[],jsonData:o,isLoading:!1}},methods:{getProducts:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/products/all");t.$http.get(s).then((function(s){t.products=s.data.products,t.products.forEach((function(s){t.$set(s,"likeThis",!1)}))}))},getProduct:function(t){var s=this;s.$router.push("/product/".concat(t))},getCart:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart");t.$http.get(s).then((function(s){t.carts=s.data.data.carts}))},addToCart:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart"),e={product_id:t,qty:s};a.isLoading=!0,a.$http.post(i,{data:e}).then((function(t){t.data.success?(a.getCart(),a.isLoading=!1,a.$bus.$emit("message:push",t.data.message,"success")):a.$bus.$emit("message:push",t.data.message,"danger")}))},deleteItem:function(t){var s=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart/").concat(t);s.isLoading=!0,s.$http.delete(a).then((function(t){t.data.success?(s.getCart(),s.isLoading=!1,s.$bus.$emit("message:push",t.data.message,"success")):s.$bus.$emit("message:push",t.data.message,"danger")}))},likeItem:function(t){t.likeThis=!t.likeThis,console.log("item",t),t.likeThis&&this.likeProducts.push(t),this.saveLocalStorage(t)},saveLocalStorage:function(t){localStorage.setItem("".concat(t.id),JSON.stringify(t)),t=this.getLocalStorage(t)},getLocalStorage:function(t){console.log(JSON.parse(localStorage.getItem("".concat(t.id))))}},created:function(){this.getCart(),this.getProducts()}},d=l,u=(a("a969"),a("2877")),g=Object(u["a"])(d,i,e,!1,null,"56a82248",null);s["default"]=g.exports},bf88:function(t,s,a){t.exports=a.p+"img/winnie.47961179.png"},bf91:function(t,s,a){t.exports=a.p+"img/tiger.af87180b.png"}}]);
//# sourceMappingURL=chunk-6cfea3f4.75ac2709.js.map