(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c927aa4"],{"4a2f":function(t,a,s){"use strict";var e=s("b1d9"),i=s.n(e);i.a},"56a6":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n={name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:s}),this.removeMessageWithTiming(s)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(s,e){s.timestamp===t&&a.messages.splice(e,1)}))}),5e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,s)}))}},l=n,r=(s("4a2f"),s("2877")),c=Object(r["a"])(l,e,i,!1,null,null,null);a["a"]=c.exports},b1d9:function(t,a,s){},b470:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard"},[s("Navbar"),s("Alert"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("Sidebar"),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[s("router-view")],1)],1)])],1)},i=[],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[s("Circle4")],1),s("nav",{staticClass:"navbar navbar-dark fixed-top bg-white flex-md-nowrap p-0 shadow"},[s("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("WMall 後台管理")]),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[s("i",{staticClass:"fas fa-sign-out-alt fa-2x text-primary"})])])])])],1)},l=[],r=s("d58b"),c={name:"dashboardNav",components:{Circle4:r["a"]},data:function(){return{isLoading:!1}},methods:{signout:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/logout");t.isLoading=!0,t.$http.post(a).then((function(a){t.isLoading=!1,a.data.success&&t.$router.push("/login")}))}}},o=c,u=s("2877"),m=Object(u["a"])(o,n,l,!1,null,null,null),d=m.exports,f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[t._m(0),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"productsList"}},[s("i",{staticClass:"fas fa-box-open mr-2"}),t._v("產品總覽 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"orderList"}},[s("i",{staticClass:"fas fa-list mr-2"}),t._v("訂購清單 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"coupons"}},[s("i",{staticClass:"fas fa-ticket-alt mr-2"}),t._v("優惠券列表 ")])],1)]),t._m(1),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/",target:"_blank"}},[s("i",{staticClass:"fas fa-home mr-2"}),t._v("WMall 購物中心 ")])],1)])])])])},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("後台管理")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("前台購物")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])}],h={},p=Object(u["a"])(h,f,v,!1,null,null,null),b=p.exports,g=s("56a6"),C={name:"dashboard",components:{Navbar:d,Sidebar:b,Alert:g["a"]}},_=C,x=Object(u["a"])(_,e,i,!1,null,null,null);a["default"]=x.exports}}]);
//# sourceMappingURL=chunk-3c927aa4.62286865.js.map