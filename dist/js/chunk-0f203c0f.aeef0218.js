(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f203c0f"],{"24e8":function(t,a,s){t.exports=s.p+"img/newsImg.5bee536e.jpg"},5039:function(t,a,s){},"56b2":function(t){t.exports=JSON.parse('[{"id":"20200210","date":"2020.02.10","title":"戀愛季節【熊愛你】，購物滿 $5,000 送 $500","image":"https://images2.imgbox.com/41/eb/QiUL9xJw_o.jpg"},{"id":"20200123","date":"2020.01.23","title":"返鄉過年【熊黑皮】，過年期間暫停營業","image":"https://images2.imgbox.com/42/97/rM2FXABp_o.jpg"},{"id":"20200120","date":"2020.01.20","title":"過年放假【熊放肆】，食品系列商品 6 折起","image":"https://images2.imgbox.com/22/e1/L09RfsEO_o.jpg"},{"id":"20200101","date":"2020.01.01","title":"跨年無伴【熊孤單】，玩偶系列商品 7 折起","image":"https://images2.imgbox.com/c9/02/Cyg7InzC_o.jpg"},{"id":"20191225","date":"2019.12.25","title":"冬季聖誕【熊溫暖】，服飾系列商品 8 折起","image":"https://images2.imgbox.com/83/19/1bBrBed8_o.jpg"}]')},"5ea6":function(t,a,s){t.exports=s.p+"img/eeyore.b1c312ee.png"},"822d":function(t,a,s){t.exports=s.p+"img/pig.54c08ee6.png"},b8eb:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[i("Circle4")],1),i("div",{staticClass:"container"},[t._m(0),i("section",{staticClass:"section news"},[i("h3",{staticClass:"sectionTitle mb-4 text-center"},[t._v(" 最新消息 ")]),i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-md-6"},[i("ul",{staticClass:"news_list"},t._l(t.jsonData,(function(a){return i("li",{key:a.id,staticClass:"news_list_item mb-2"},[i("router-link",{staticClass:"news_link",attrs:{to:{name:"News",query:{queryId:a.id}}}},[i("div",{staticClass:"news_date"},[t._v(" "+t._s(a.date)+" ")]),i("div",{staticClass:"news_text"},[t._v(" "+t._s(a.title)+" ")])])],1)})),0)]),t._m(1)])]),i("section",{staticClass:"section"},[i("h3",{staticClass:"sectionTitle mb-4 text-center"},[t._v(" 經典熱銷 ")]),i("div",{staticClass:"row"},t._l(t.products.slice(0,4),(function(a){return i("div",{key:a.key,staticClass:"col-6 col-md-3 productBox"},[i("div",{staticClass:"card productItem",on:{click:function(s){return t.getProduct(a.id)}}},[i("img",{staticClass:"card-img-top",attrs:{src:""+a.imageUrl,alt:""+a.title}}),i("div",{staticClass:"card-body p-2"},[i("h5",{staticClass:"card-title productItem_title mb-0"},[t._v(" "+t._s(t._f("titleFilter")(a.title))+" ")]),i("div",{staticClass:"d-flex justify-content-between align-items-end px-1"},[i("div",{staticClass:"price-group"},[i("div",{staticClass:"origin_price mb-0"},[t._v(" NT"+t._s(t._f("currency")(a.origin_price))+" ")]),i("div",{staticClass:"final_price text-danger mb-0"},[t._v(" NT"+t._s(t._f("currency")(a.price))+" ")])])]),i("div",{staticClass:"icon-group"},[i("i",{staticClass:"far fa-heart likeIcon mr-0 mr-md-3",class:{fa:a.likeThis},on:{click:function(s){s.stopPropagation(),t.saveLocalStorage(a),t.getLocalStorage(a)}}}),i("i",{staticClass:"fas fa-shopping-cart",on:{click:function(s){return s.stopPropagation(),t.addToCart(a.id,a.qty)}}})])])])])})),0)]),i("section",{staticClass:"section characters"},[i("h3",{staticClass:"sectionTitle mb-4 text-center"},[t._v(" 系列角色 ")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 col-md-3"},[i("router-link",{staticClass:"charactersLink",attrs:{to:"/characters/winnie"}},[i("div",{staticClass:"card border-0"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:s("bf88"),alt:""}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title text-center"},[t._v(" 維尼（Winnie） ")])])]),i("button",{staticClass:"btn btn-danger btn-lg charactersBtn"},[t._v(" 看更多 ")])])],1),i("div",{staticClass:"col-6 col-md-3"},[i("router-link",{staticClass:"charactersLink",attrs:{to:"/characters/pig"}},[i("div",{staticClass:"card border-0"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:s("822d"),alt:""}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title text-center"},[t._v(" 小豬（Piglet） ")])])]),i("button",{staticClass:"btn btn-danger btn-lg charactersBtn"},[t._v(" 看更多 ")])])],1),i("div",{staticClass:"col-6 col-md-3"},[i("router-link",{staticClass:"charactersLink",attrs:{to:"/characters/tiger"}},[i("div",{staticClass:"card border-0"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:s("bf91"),alt:""}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title text-center"},[t._v(" 跳跳虎（Tiger） ")])])]),i("button",{staticClass:"btn btn-danger btn-lg charactersBtn"},[t._v(" 看更多 ")])])],1),i("div",{staticClass:"col-6 col-md-3"},[i("router-link",{staticClass:"charactersLink",attrs:{to:"/characters/eeyore"}},[i("div",{staticClass:"card border-0"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:s("5ea6"),alt:""}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title text-center"},[t._v(" 屹耳（Eeyore） ")])])]),i("button",{staticClass:"btn btn-danger btn-lg charactersBtn"},[t._v(" 看更多 ")])])],1)])]),i("Cart",{attrs:{cart:t.carts},on:{emitDelete:t.deleteItem}})],1)],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"carousel slide",attrs:{id:"indexBanner","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#indexBanner","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#indexBanner","data-slide-to":"1"}})]),s("div",{staticClass:"carousel-inner"},[s("div",{staticClass:"carousel-item activeBanner01 active"}),s("div",{staticClass:"carousel-item activeBanner02"})]),s("a",{staticClass:"carousel-control-prev",attrs:{href:"#indexBanner",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])]),s("a",{staticClass:"carousel-control-next",attrs:{href:"#indexBanner",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"col-md-6 d-none d-md-block"},[i("img",{staticClass:"img img-fluid",attrs:{src:s("24e8"),alt:""}})])}],c=(s("99af"),s("4160"),s("159b"),s("d58b")),r=s("b3b1"),n=s("56b2"),o={name:"Index",components:{Circle4:c["a"],Cart:r["a"]},data:function(){return{products:[],carts:[],jsonData:n,isLoading:!1}},methods:{getProducts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/products/all");t.$http.get(a).then((function(a){t.products=a.data.products,t.products.forEach((function(a){t.$set(a,"likeThis",!1)}))}))},getProduct:function(t){var a=this;a.$router.push("/product/".concat(t))},getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart");t.$http.get(a).then((function(a){t.carts=a.data.data.carts}))},addToCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart"),e={product_id:t,qty:a};s.isLoading=!0,s.$http.post(i,{data:e}).then((function(t){t.data.success?(s.getCart(),s.isLoading=!1,s.$bus.$emit("message:push",t.data.message,"success")):s.$bus.$emit("message:push",t.data.message,"danger")}))},deleteItem:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart/").concat(t);a.isLoading=!0,a.$http.delete(s).then((function(t){t.data.success?(a.getCart(),a.isLoading=!1,a.$bus.$emit("message:push",t.data.message,"success")):a.$bus.$emit("message:push",t.data.message,"danger")}))},saveLocalStorage:function(t){t.likeThis=!t.likeThis,localStorage.setItem("".concat(t.id),JSON.stringify(t)),t=this.getLocalStorage(t)},getLocalStorage:function(t){console.log(JSON.parse(localStorage.getItem("".concat(t.id))))}},created:function(){this.getCart(),this.getProducts()}},l=o,d=(s("cdae"),s("2877")),u=Object(d["a"])(l,i,e,!1,null,"0f836aad",null);a["default"]=u.exports},bf88:function(t,a,s){t.exports=s.p+"img/winnie.47961179.png"},bf91:function(t,a,s){t.exports=s.p+"img/tiger.af87180b.png"},cdae:function(t,a,s){"use strict";var i=s("5039"),e=s.n(i);e.a}}]);
//# sourceMappingURL=chunk-0f203c0f.aeef0218.js.map