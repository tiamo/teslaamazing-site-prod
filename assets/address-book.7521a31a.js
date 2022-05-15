var C=Object.defineProperty,b=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var c=(t,e,s)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,d=(t,e)=>{for(var s in e||(e={}))u.call(e,s)&&c(t,s,e[s]);if(n)for(var s of n(e))_.call(e,s)&&c(t,s,e[s]);return t},l=(t,e)=>b(t,$(e));var p=(t,e)=>{var s={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&n)for(var a of n(t))e.indexOf(a)<0&&_.call(t,a)&&(s[a]=t[a]);return s};import{a as y,m as k,c as x,ah as S,n as w,r as A}from"./index.bbea77ac.js";var h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"page-title"},[t._v(t._s(t.$t("customer.address-book.title")))]),s("div",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item"},[s("a",{staticClass:"button is-primary is-outlined",on:{click:t.handleAdd}},[t._v(" "+t._s(t.$t("customer.address-book.add"))+" ")])])])]),t.addresses.length?t._l(t.addresses,function(a){return s("div",{key:a.id,staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"columns is-mobile is-multiline"},[s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"iti-flag",class:a.country_id.toLowerCase()})]),s("div",{staticClass:"column"},[s("div",{domProps:{innerHTML:t._s(t.$options.filters.formatAddress(a))}})]),s("div",{staticClass:"column has-text-right"},[a.default_billing||a.default_shipping?s("div",[s("p",[t._v(t._s(t.$t("customer.address-book.default-address-for"))+":")]),s("div",{staticClass:"tags is-right"},[a.default_shipping?s("div",{staticClass:"tag"},[t._v(" "+t._s(t.$t("customer.common.default-shipping"))+" ")]):t._e(),a.default_billing?s("div",{staticClass:"tag"},[t._v(" "+t._s(t.$t("customer.common.default-billing"))+" ")]):t._e()])]):t._e()]),s("div",{staticClass:"column is-narrow"},[s("div",{staticClass:"action-button"},[s("a",{staticClass:"button",on:{click:function(i){return t.handleUpdate(a)}}},[s("b-icon",{attrs:{icon:"pencil"}})],1)]),s("div",{staticClass:"action-button"},[s("a",{staticClass:"button",on:{click:function(i){return t.handleRemove(a)}}},[s("b-icon",{attrs:{icon:"delete"}})],1)])])])])])}):s("div",[s("span",{staticClass:"has-text-grey-light"},[t._v(" "+t._s(t.$t("customer.address-book.empty"))+" ")])])],2)},E=[];h._withStripped=!0;const m=()=>A(()=>import("./AddressFormModal.fad3893a.js"),["assets/AddressFormModal.fad3893a.js","assets/index.bbea77ac.js","assets/index.ef392696.css","assets/PhoneInput.19e1ecea.js","assets/PhoneInput.eeea2eb0.css"]),M={metaInfo(){return{title:this.$t("customer.address-book.title")}},data(){return{}},computed:l(d(d({},y({loading:"app/loading"})),k({user:"auth/user"})),{addresses(){return this.user.addresses.filter(t=>!t.id||t.id>0)}}),methods:l(d({},x({update:"auth/update"})),{async handleSave(t,e){if(e.loading)return;e.loading=!0;const r=e.$data.form,{region:s}=r,a=p(r,["region"]);a.save_in_address_book=void 0,a.region={region_code:null,region:s};const i=S(this.user);if(i.addresses||(i.addresses=[]),(a.default_billing||a.default_shipping)&&i.addresses.map(o=>{a.default_billing&&(o.default_billing=!1),a.default_shipping&&(o.default_shipping=!1)}),a.country_id=String(a.country_id).toUpperCase(),t.id){const o=i.addresses.findIndex(g=>g.id===t.id);i.addresses[o]=Object.assign({},i.addresses[o],a)}else i.addresses.push(a);try{await this.update(i),this.$buefy.toast.open({type:"is-success",message:this.$t("customer.address-book.success")}),e.$parent.close()}catch{}e.loading=!1},handleUpdate(t){this.$buefy.modal.open({parent:this,component:m,hasModalCard:!0,props:{address:t,showCompany:!0},events:{update:e=>{this.handleSave(t,e)}}})},handleRemove(t){this.$buefy.dialog.confirm({message:this.$t("common.confirm"),confirmText:this.$t("common.ok"),cancelText:this.$t("common.cancel"),onConfirm:()=>{this.$store.commit("auth/REMOVE_ADDRESS",t.id),this.update(this.user)}})},handleAdd(){this.$buefy.modal.open({parent:this,component:m,hasModalCard:!0,props:{showCompany:!0},events:{update:(t,e)=>{this.handleSave({},t,e)}}})}})},v={};var f=w(M,h,E,!1,R,"e9e6db42",null,null);function R(t){for(let e in v)this[e]=v[e]}f.options.__file="src/pages/customer/address-book.vue";var T=function(){return f.exports}();export{T as default};
