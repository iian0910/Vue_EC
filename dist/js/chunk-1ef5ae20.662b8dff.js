(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ef5ae20"],{"4b6e":function(t,s,e){"use strict";var a=e("a1fe"),n=e.n(a);n.a},a1fe:function(t,s,e){},e347:function(t,s,e){t.exports=e.p+"img/logo.19c64fea.svg"},eb40:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[a("Circle4")],1),a("div",{staticClass:"signin-bg"},[a("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[a("img",{staticClass:"mb-3 logo",attrs:{src:e("e347"),alt:"logo",width:"100",height:"100"}}),a("h1",{staticClass:"h3 mb-3 font-weight-normal text-center"},[t._v("登入")]),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("帳號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"請輸入帳號",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}}),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("密碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"請輸入密碼",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}}),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("登入")])])])],1)},n=[],i=e("d58b"),o={name:"Login",components:{Circle4:i["a"]},data:function(){return{user:{username:"",password:""},isLoading:!1}},methods:{signin:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/admin/signin");t.isLoading=!0,t.$http.post(s,t.user).then((function(s){console.log(s.data),t.isLoading=!1,s.data.success&&t.$router.push("/admin/productsList")}))}}},r=o,u=(e("4b6e"),e("2877")),l=Object(u["a"])(r,a,n,!1,null,"53165974",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1ef5ae20.662b8dff.js.map