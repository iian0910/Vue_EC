(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5cffbfe"],{8418:function(t,a,e){"use strict";var s=e("c04e"),r=e("9bf2"),i=e("5c6c");t.exports=function(t,a,e){var o=s(a);o in t?r.f(t,o,i(0,e)):t[o]=e}},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),i=e("e8b5"),o=e("861d"),n=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),m=e("b622"),v=e("60ae"),p=m("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",C=v>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=u("concat"),_=function(t){if(!o(t))return!1;var a=t[p];return void 0!==a?!!a:i(t)},b=!C||!h;s({target:"Array",proto:!0,forced:b},{concat:function(t){var a,e,s,r,i,o=n(this),u=d(o,0),m=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?o:arguments[a],_(i)){if(r=c(i.length),m+r>f)throw TypeError(g);for(e=0;e<r;e++,m++)e in i&&l(u,m,i[e])}else{if(m>=f)throw TypeError(g);l(u,m++,i)}return u.length=m,u}})},a27a:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-100"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("Circle4")],1),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 offset-md-3"},[e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col-12"},[e("div",{attrs:{id:"accordion"}},[e("div",{staticClass:"card"},[e("button",{staticClass:"card-header btn btn-link d-flex justify-content-between",attrs:{id:"headingOne","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[e("h5",{staticClass:"mb-0"},[t._v("購物車清單")]),e("div",{staticClass:"totalPrice"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]),e("div",{staticClass:"collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},[e("div",{staticClass:"card-body p-0"},[e("table",{staticClass:"table mb-0"},[t._m(1),e("tbody",t._l(t.cart.carts,(function(a){return e("tr",{key:a.id},[e("td",[e("img",{staticClass:"img img-fluid cartImg",attrs:{src:""+a.product.imageUrl,alt:""+a.product.title}})]),e("td",{staticClass:"text-left"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?e("div",{staticClass:"text-success"},[t._v(" 已套用優惠券 ")]):t._e()]),e("td",{staticClass:"text-center"},[t._v(t._s(a.qty)+"/"+t._s(a.product.unit))]),e("td",{staticClass:"text-right"},[t._v(t._s(a.final_total))])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("合計：")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!==t.cart.total?e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),e("td",{staticClass:"text-right text-success"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]):t._e()])])])])]),e("div",{staticClass:"input-group mt-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"輸入優惠代碼"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("輸入優惠碼")])])])])])]),e("div",{staticClass:"row mb-4"},[e("div",{staticClass:"col-12"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),t.errors.has("email")?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"userName"}},[t._v("收件人姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"userName",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),t.errors.has("name")?e("span",{staticClass:"text-danger"},[t._v("姓名必須輸入")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"userTel"}},[t._v("收件人電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"tel",name:"tel",id:"userTel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),t.errors.has("tel")?e("span",{staticClass:"text-danger"},[t._v("電話必須輸入")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"userAdd"}},[t._v("收件人地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",name:"address",id:"userAdd",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),t.errors.has("address")?e("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"comment"}},[t._v("留言")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"comment",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"text-center"},[e("router-link",{staticClass:"btn btn-secondary mr-4",attrs:{to:"/products"}},[t._v("繼續購物")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("送出訂單")])],1)])])])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10 offset-md-1"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mb-2 mb-md-4"},[e("div",{staticClass:"step active"},[t._v("資料填寫")])]),e("div",{staticClass:"col-md-4 mb-2 mb-md-4"},[e("div",{staticClass:"step"},[t._v("確認訂單")])]),e("div",{staticClass:"col-md-4 mb-2 mb-md-4"},[e("div",{staticClass:"step"},[t._v("完成")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"20%"}}),e("th",{staticClass:"text-left",attrs:{width:"40%"}},[t._v("產品名稱")]),e("th",{staticClass:"text-center"},[t._v("單位")]),e("th",{staticClass:"text-right"},[t._v("價格")])])])}],i=(e("99af"),e("d58b")),o={name:"checkuot",data:function(){return{cart:{},isLoading:!1,finalTotal:0,coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{Circle4:i["a"]},methods:{getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/cart");t.isLoading=!0,t.$http.get(a).then((function(a){t.isLoading=!1,t.cart=a.data.data,t.finalTotal=a.data.data.final_total}))},addCouponCode:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/coupon"),e={code:t.coupon_code};t.isLoading=!0,t.$http.post(a,{data:e}).then((function(a){t.getCart(),t.isLoading=!1}))},createOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("iian0910","/order"),e=t.form;t.isLoading=!0,t.$validator.validate().then((function(s){s?t.$http.post(a,{data:e}).then((function(a){a.data.success&&t.$router.push("/checkout/".concat(a.data.orderId)),t.isLoading=!1})):t.$bus.$emit("message:push",response.data.message,"danger")}))}},created:function(){this.getCart()}},n=o,c=(e("cee6"),e("2877")),l=Object(c["a"])(n,s,r,!1,null,"c0ad6332",null);a["default"]=l.exports},cee6:function(t,a,e){"use strict";var s=e("e8a6"),r=e.n(s);r.a},e8a6:function(t,a,e){}}]);
//# sourceMappingURL=chunk-c5cffbfe.b9146d38.js.map