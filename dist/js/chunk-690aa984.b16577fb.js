(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-690aa984"],{1580:function(t,s,e){},8418:function(t,s,e){"use strict";var r=e("c04e"),a=e("9bf2"),i=e("5c6c");t.exports=function(t,s,e){var c=r(s);c in t?a.f(t,c,i(0,e)):t[c]=e}},"99af":function(t,s,e){"use strict";var r=e("23e7"),a=e("d039"),i=e("e8b5"),c=e("861d"),o=e("7b0b"),d=e("50c4"),n=e("8418"),l=e("65f0"),u=e("1dde"),v=e("b622"),f=e("60ae"),_=v("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",m=f>=51||!a((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),b=u("concat"),C=function(t){if(!c(t))return!1;var s=t[_];return void 0!==s?!!s:i(t)},g=!m||!b;r({target:"Array",proto:!0,forced:g},{concat:function(t){var s,e,r,a,i,c=o(this),u=l(c,0),v=0;for(s=-1,r=arguments.length;s<r;s++)if(i=-1===s?c:arguments[s],C(i)){if(a=d(i.length),v+a>h)throw TypeError(p);for(e=0;e<a;e++,v++)e in i&&n(u,v,i[e])}else{if(v>=h)throw TypeError(p);n(u,v++,i)}return u.length=v,u}})},a159:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[e("Circle4")],1),e("Header"),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 offset-md-3"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[e("table",{staticClass:"table mb-4"},[t._m(1),e("tbody",[t._l(t.order.products,(function(s){return e("tr",{key:s.id},[e("td",{staticClass:"text-left"},[t._v(t._s(s.product.title))]),e("td",{staticClass:"text-center"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(s.final_total)))])])})),e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])])],2)]),e("table",{staticClass:"table mb-4"},[e("tr",[e("td",{attrs:{width:"20%"}},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("td",{attrs:{width:"20%"}},[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",[t._v("尚未付款")])])])]),e("div",{staticClass:"text-right"},[!1===t.order.is_paid?e("button",{staticClass:"btn btn-danger mb-4",attrs:{type:"submit"}},[t._v("確認付款去")]):t._e()])])])])]),e("Footer")],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10 offset-md-1"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-2 mb-md-4"},[e("div",{staticClass:"step"},[t._v("資料填寫")])]),e("div",{staticClass:"col-md-4 mb-2 mb-md-4"},[e("div",{staticClass:"step active"},[t._v("確認訂單")])]),e("div",{staticClass:"col-md-4 mb-2 mb-md-4"},[e("div",{staticClass:"step"},[t._v("完成")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("td",{staticClass:"text-left"},[t._v("品名")]),e("td",{staticClass:"text-center",attrs:{width:"20%"}},[t._v("數量")]),e("td",{staticClass:"text-center",attrs:{width:"30%"}},[t._v("單價")])])])}],i=(e("99af"),e("d58b")),c=e("0418"),o=e("fd2d"),d={name:"customerCheckuot",data:function(){return{isLoading:!1,order:{user:{}},orderId:""}},components:{Circle4:i["a"],Header:c["a"],Footer:o["a"]},methods:{getOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/order/").concat(t.orderId);t.isLoading=!0,t.$http.get(s).then((function(s){console.log(s),t.order=s.data.order,t.isLoading=!1}))},payOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/pay/").concat(t.orderId);t.isLoading=!0,t.$http.post(s).then((function(s){s.data.success?(console.log(s),t.$router.push("/payment_success/".concat(t.orderId))):console.log("結帳失敗"),t.isLoading=!1}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},n=d,l=(e("b322"),e("2877")),u=Object(l["a"])(n,r,a,!1,null,"78228d3e",null);s["default"]=u.exports},b322:function(t,s,e){"use strict";var r=e("1580"),a=e.n(r);a.a}}]);
//# sourceMappingURL=chunk-690aa984.b16577fb.js.map