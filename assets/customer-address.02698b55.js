var p=Object.defineProperty,m=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var o=(s,e,t)=>e in s?p(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,a=(s,e)=>{for(var t in e||(e={}))_.call(e,t)&&o(s,t,e[t]);if(r)for(var t of r(e))v.call(e,t)&&o(s,t,e[t]);return s},n=(s,e)=>m(s,f(e));import{a as A,m as g,af as i,n as C}from"./index.2e7b3162.js";import l from"./AddressFormModal.b8d5a364.js";import{A as D}from"./AddressSelector.03d8b714.js";import"./PhoneInput.80322028.js";var u=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"checkout-fieldset"},[t("div",{staticClass:"fieldset-head"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("a",{staticClass:"fieldset-title"},[t("svg-icon",{attrs:{icon:s.isFilled?"check-circle":"circle"}}),t("span",[s._v(s._s(s.$t("checkout.shipping-details.delivery-address.title")))])],1)])])]),t("div",{staticClass:"fieldset-body"},[t("address-selector",{attrs:{"custom-addresses":s.customAddresses},model:{value:s.addressId,callback:function(d){s.addressId=d},expression:"addressId"}}),t("div",{staticClass:"buttons"},[t("button",{staticClass:"button is-small",on:{click:s.handleAddNewAddress}},[s._v(" "+s._s(s.$t("checkout.shipping-details.delivery-address.new"))+" ")]),t("button",{staticClass:"button is-small",on:{click:s.handleChangeAddress}},[s._v(" "+s._s(s.$t("checkout.shipping-details.delivery-address.edit"))+" ")])])],1)])},I=[];u._withStripped=!0;const $={components:{AddressSelector:D},props:{isActive:{type:Boolean,default:!1}},data(){return{loading:!0}},computed:n(a(a({},A({user:s=>s.auth.user,shippingDetails:s=>s.cart.shippingDetails,customAddresses:s=>s.cart.customAddresses})),g({getUserAddress:"auth/getUserAddress"})),{addressId:{get(){return this.shippingDetails.customer_address_id||this.user&&this.user.default_shipping},set(s){const e=this.getUserAddress(s);e&&this.$store.commit("cart/setShippingDetails",Object.assign({},e,{id:void 0,customer_address_id:s}))}},isFilled(){return!!this.addressId}}),watch:{isFilled:{immediate:!0,handler(s){this.$emit("input",s)}}},mounted(){if(!this.addressId){const s=this.user.addresses[0];this.addressId=s.id}},methods:{updateAddress(s,e){this.$store.commit("auth/UPDATE_ADDRESS",Object.assign({},e,{id:i,loading:void 0})),["customer_address_id","country_id","city","postcode"].forEach(d=>{s[d]!==e[d]&&this.$store.commit("cart/shippingDetails/update",{key:d,value:e[d]})}),this.addressId=i},handleAddNewAddress(){let s=this.user.addresses.find(e=>e.id===i);s||(s=this.shippingDetails),this.$buefy.modal.open({parent:this,component:l,hasModalCard:!0,props:{showCompany:!0,showDefaults:!1,showSaveInAddressBook:!0},events:{update:e=>{this.updateAddress(s,e.$data.form),e.$parent.close()}}})},handleChangeAddress(){let s=this.user.addresses.find(e=>e.id===i);s||(this.addressId?s=this.getUserAddress(this.addressId):s=this.shippingDetails),this.$buefy.modal.open({parent:this,component:l,hasModalCard:!0,props:{showCompany:!0,showDefaults:!1,showSaveInAddressBook:!0,address:s},events:{update:e=>{this.updateAddress(s,e.$data.form),e.$parent.close()}}})}}},c={};var h=C($,u,I,!1,S,null,null,null);function S(s){for(let e in c)this[e]=c[e]}h.options.__file="src/pages/checkout/blocks/customer-address.vue";var E=function(){return h.exports}();export{E as default};
