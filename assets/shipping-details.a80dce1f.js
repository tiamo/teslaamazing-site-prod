var h=Object.defineProperty,f=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var n=(s,e,i)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,d=(s,e)=>{for(var i in e||(e={}))_.call(e,i)&&n(s,i,e[i]);if(l)for(var i of l(e))S.call(e,i)&&n(s,i,e[i]);return s},c=(s,e)=>f(s,m(e));import{V as g,a as k,n as b}from"./index.6d6c1d5a.js";import y from"./personal-details.65e6fd02.js";import $ from"./delivery-address.4ac7b242.js";import C from"./delivery-options.4d0ad78c.js";import x from"./customer-address.aad3f3b2.js";import"./PhoneInput.e5047336.js";import"./ascii-folder.6927e8d2.js";import"./AddressFormModal.a11cadc8.js";import"./AddressSelector.dc6345d2.js";var v=function(){var s,e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"checkout-section checkout-shipping"},[t("b-loading",{attrs:{active:e.cartLoading}}),e.cartLoading?e._e():[e.userToken&&e.hasSavedAddress?[t("validation-observer",{ref:"customer_address",scopedSlots:e._u([{key:"default",fn:function(a){return a.valid,[t("customer-address",{staticClass:"has-line",class:e.stepClasses(0),model:{value:e.validSteps[0],callback:function(o){e.$set(e.validSteps,0,o)},expression:"validSteps[0]"}})]}}],null,!1,88337677)}),t("validation-observer",{ref:"delivery_options"},[t("delivery-options",{model:{value:e.validSteps[1],callback:function(a){e.$set(e.validSteps,1,a)},expression:"validSteps[1]"}})],1)]:[t("validation-observer",{ref:"personal_details",scopedSlots:e._u([{key:"default",fn:function(a){var o=a.valid;return[t("personal-details",{staticClass:"has-line",attrs:{"is-valid":o,"is-active":!0},model:{value:e.validSteps[0],callback:function(r){e.$set(e.validSteps,0,r)},expression:"validSteps[0]"}})]}}],null,!1,1884824992)}),t("validation-observer",{ref:"delivery_address",scopedSlots:e._u([{key:"default",fn:function(a){var o=a.valid;return[t("delivery-address",{staticClass:"has-line",attrs:{"is-valid":o,"is-active":e.validSteps[0]},model:{value:e.validSteps[1],callback:function(r){e.$set(e.validSteps,1,r)},expression:"validSteps[1]"}})]}}],null,!1,842126406)}),t("validation-observer",{ref:"delivery_options"},[t("delivery-options",{model:{value:e.validSteps[2],callback:function(a){e.$set(e.validSteps,2,a)},expression:"validSteps[2]"}})],1)],t("br"),t("div",{staticClass:"checkout-shipping__buttons has-text-centered-mobile"},[t("div",{staticClass:"columns is-vcentered"},[t("div",{staticClass:"column is-narrow"},[t("button",{staticClass:"button is-primary is-size-5",class:(s={},s["is-loading"]=e.loading,s),attrs:{disabled:e.loading||e.shippingLoading},on:{click:e.handleNextStep}},[e._v(" "+e._s(e.$t("checkout.common.next-step"))+" ")])])])])]],2)},L=[];v._withStripped=!0;const A={components:{ValidationObserver:g,PersonalDetails:y,DeliveryAddress:$,DeliveryOptions:C,CustomerAddress:x},data(){return{validSteps:[],activeSteps:[],loading:!1}},computed:c(d({},k({shippingLoading:s=>s.cart.isLoadingShippingMethods,shippingMethod:s=>s.cart.shippingMethod,cartLoading:s=>s.cart.loading,userToken:s=>s.auth.token,user:s=>s.auth.user})),{isFilled(){return this.validSteps.every(s=>s===!0)},hasSavedAddress(){return this.user.addresses.find(s=>s.id>0)}}),methods:{stepClasses(s){return{"is-filled":this.validSteps[s],"is-active":this.activeSteps[s]}},async handleNextStep(){let s=!0;this.setLoading(!0);for(let e of Object.keys(this.$refs))if(this.$refs[e].$_veeObserver!==void 0&&(s=await this.$refs[e].validate(),!s))break;if(s)try{await this.$store.dispatch("cart/saveShippingInformation"),this.$router.push({name:"checkout.review"}),this.$ga&&(this.$ga.ecommerce.setAction("checkout_option",{step:1,option:this.shippingMethod}),this.$ga.ecommerce.setAction("checkout",{step:2}))}catch{}this.setLoading(!1)},setLoading(s){this.loading=!!s}}},p={};var u=b(A,v,L,!1,w,null,null,null);function w(s){for(let e in p)this[e]=p[e]}u.options.__file="src/pages/checkout/shipping-details.vue";var I=function(){return u.exports}();export{I as default};