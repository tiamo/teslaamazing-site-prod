var o=Object.defineProperty;var a=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var i=(t,e,s)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,r=(t,e)=>{for(var s in e||(e={}))c.call(e,s)&&i(t,s,e[s]);if(a)for(var s of a(e))u.call(e,s)&&i(t,s,e[s]);return t};import{m as _,n as m}from"./index.bbea77ac.js";var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"page-title"},[t._v(t._s(t.$t("customer.dashboard.title")))]),s("div",{staticClass:"card mb-4"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"card-header-title is-uppercase"},[t._v(" "+t._s(t.$t("customer.edit.title"))+" ")]),s("div",{staticClass:"card-header-icon"},[s("router-link",{attrs:{to:{name:"customer.edit"}}},[s("span",[t._v(t._s(t.$t("common.edit")))])])],1)]),s("div",{staticClass:"card-content"},[s("p",[t._v(t._s(t.user.firstname)+" "+t._s(t.user.lastname))]),t._v(" "+t._s(t.user.email)+" ")])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"card-header-title is-uppercase"},[t._v(" "+t._s(t.$t("customer.address-book.title"))+" ")]),s("div",{staticClass:"card-header-icon"},[s("router-link",{attrs:{to:{name:"customer.addresses"}}},[s("span",[t._v(t._s(t.$t("common.edit")))])])],1)]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"title heading"},[t._v(" "+t._s(t.$t("customer.common.default-shipping"))+" ")]),t.defaultShippingAddress?s("div",{domProps:{innerHTML:t._s(t.$options.filters.formatAddress(t.defaultShippingAddress))}}):t._e()]),s("div",{staticClass:"column"},[s("div",{staticClass:"title heading"},[t._v(" "+t._s(t.$t("customer.common.default-billing"))+" ")]),t.defaultBillingAddress?s("div",{domProps:{innerHTML:t._s(t.$options.filters.formatAddress(t.defaultBillingAddress))}}):t._e()])])])])])},v=[];l._withStripped=!0;const p={metaInfo(){return{title:this.$t("customer.dashboard.title")}},data(){return{}},computed:r({},_({user:"auth/user",defaultShippingAddress:"auth/userDefaultShipping",defaultBillingAddress:"auth/userDefaultBilling"}))},d={};var n=m(p,l,v,!1,f,null,null,null);function f(t){for(let e in d)this[e]=d[e]}n.options.__file="src/pages/customer/dashboard.vue";var g=function(){return n.exports}();export{g as default};
