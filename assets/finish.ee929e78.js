var _=Object.defineProperty;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var c=(t,i,e)=>i in t?_(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,n=(t,i)=>{for(var e in i||(i={}))h.call(i,e)&&c(t,e,i[e]);if(s)for(var e of s(i))u.call(i,e)&&c(t,e,i[e]);return t};import{a as l,n as d}from"./index.bbea77ac.js";var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"section checkout-finish"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("checkout.finish.heading")))]),e("hr"),e("div",{staticClass:"checkout-finish__order"},[e("i18n",{attrs:{path:"checkout.finish.text"}},[e("div",{staticClass:"checkout-finish__order-number",attrs:{place:"0"}},[t._v(" "+t._s(t.orderId||"00000000000")+" ")])])],1),e("br"),t._v(" "+t._s(t.$t("checkout.finish.check-email"))+" "),e("hr"),e("div",{staticClass:"checkout-finish__notice"},[t._v(" "+t._s(t.$t("checkout.finish.notice"))+" ")])])},f=[];o._withStripped=!0;const v={computed:n({},l("cart",["orderId"])),mounted(){this.orderId||this.$router.push("/")}},r={};var a=d(v,o,f,!1,p,null,null,null);function p(t){for(let i in r)this[i]=r[i]}a.options.__file="src/pages/checkout/finish.vue";var C=function(){return a.exports}();export{C as default};
