(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3de19c1d"],{"0418":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar bg-transparent"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/WMall"}},[t._v("WMall")]),a("div",{staticClass:"ml-auto"},[a("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"/login",target:"_blank"}},[t._v("後台管理")])],1)],1)])},r=[],i=(a("23c7"),a("2877")),n={},c=Object(i["a"])(n,s,r,!1,null,"78c7e48d",null);e["a"]=c.exports},"23c7":function(t,e,a){"use strict";var s=a("e6ff"),r=a.n(s);r.a},"731a":function(t,e,a){},8418:function(t,e,a){"use strict";var s=a("c04e"),r=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var n=s(e);n in t?r.f(t,n,i(0,a)):t[n]=a}},8579:function(t,e,a){},"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),i=a("e8b5"),n=a("861d"),c=a("7b0b"),o=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),v=a("b622"),f=a("60ae"),_=v("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",p=f>=51||!r((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),m=u("concat"),C=function(t){if(!n(t))return!1;var e=t[_];return void 0!==e?!!e:i(t)},g=!p||!m;s({target:"Array",proto:!0,forced:g},{concat:function(t){var e,a,s,r,i,n=c(this),u=l(n,0),v=0;for(e=-1,s=arguments.length;e<s;e++)if(i=-1===e?n:arguments[e],C(i)){if(r=o(i.length),v+r>h)throw TypeError(b);for(a=0;a<r;a++,v++)a in i&&d(u,v,i[a])}else{if(v>=h)throw TypeError(b);d(u,v++,i)}return u.length=v,u}})},bb0d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"orderPayment"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("Circle4")],1),a("div",{staticClass:"container mb-4"},[a("Header"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10 offset-md-1"},[t._m(0),a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-8 offset-2"},[a("table",{staticClass:"table table-hover mb-4"},[t._m(1),a("tbody",t._l(t.order.products,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"text-left"},[t._v(t._s(e.product.title))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))])])})),0)]),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("Email")]),a("td",[t._v(t._s(t.order.user.email))])]),a("tr",[a("th",[t._v("姓名")]),a("td",[t._v(t._s(t.order.user.name))])]),a("tr",[a("th",[t._v("收件人電話")]),a("td",[t._v(t._s(t.order.user.tel))])]),a("tr",[a("th",[t._v("收件人地址")]),a("td",[t._v(t._s(t.order.user.address))])]),a("tr",[a("th",[t._v("付款狀態")]),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])])])]),a("div",{staticClass:"text-center"},[a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/WMall"}},[t._v("回購物商城")])],1)])])],1),a("Footer")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row my-5"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"step"},[t._v("輸入資料")])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"step"},[t._v("金流付款")])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"step active"},[t._v("結帳完成")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("產品名稱")]),a("th",{staticClass:"text-center"},[t._v("數量")]),a("th",{staticClass:"text-center"},[t._v("小計")])])])}],i=(a("99af"),a("d58b")),n=a("0418"),c=a("fd2d"),o={name:"orderPayment",components:{Header:n["a"],Footer:c["a"],Circle4:i["a"]},data:function(){return{orderId:"",isLoading:!1,order:{user:{}}}},methods:{getOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(e).then((function(e){e.data.success&&(console.log(e),t.order=e.data.order,t.isLoading=!1)}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},d=o,l=(a("e1d4"),a("2877")),u=Object(l["a"])(d,s,r,!1,null,"0ed6f511",null);e["default"]=u.exports},c5b4:function(t,e,a){"use strict";var s=a("8579"),r=a.n(s);r.a},e1d4:function(t,e,a){"use strict";var s=a("731a"),r=a.n(s);r.a},e6ff:function(t,e,a){},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footerComponent"},[a("footer",{staticClass:"footer py-4 bg-primary text-center text-white"},[t._v("六角學院 作業演練使用")])])}],i=(a("c5b4"),a("2877")),n={},c=Object(i["a"])(n,s,r,!1,null,"6685b038",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-3de19c1d.98c72629.js.map