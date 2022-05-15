var y=Object.defineProperty,A=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var c=(e,s,t)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,n=(e,s)=>{for(var t in s||(s={}))k.call(s,t)&&c(e,t,s[t]);if(d)for(var t of d(s))M.call(s,t)&&c(e,t,s[t]);return e},o=(e,s)=>A(e,$(s));import{n as g,B as w,S,a as D,m as I,c as x,e as l,l as B}from"./index.66e74258.js";import u from"./AddressFormModal.65bb3ac9.js";import{A as O}from"./AddressSelector.bdc08599.js";import{p as m,c as h}from"./PhoneInput.a1b3bd8a.js";var f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("p",[e._v(e._s(e.address.firstname)+" "+e._s(e.address.lastname))]),t("p",[e._v(e._s(e.address.street&&e.address.street.join(", ")))]),t("p",[e._v(e._s(e.address.city)+" "+e._s(e.address.postcode))]),t("p",[e._v(e._s(e._f("countryName")(e.address.country_id)))]),t("p",[t("a",{attrs:{href:e.$t("customer.common.tel")+":"+e.address.telephone}},[e._v(e._s(e.address.telephone))])])])},P=[];f._withStripped=!0;const E={props:{address:{type:Object,required:!0}},data(){return{}}},p={};var _=g(E,f,P,!1,V,null,null,null);function V(e){for(let s in p)this[s]=p[s]}_.options.__file="src/components/AddressInformation.vue";var T=function(){return _.exports}(),C=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"checkout-review"},[t("div",{staticClass:"checkout-review-heading is-paddingless"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-half has-text-centered-mobile"},[t("span",[e._v(e._s(e.$t("checkout.review.billing-info")))])]),t("div",{staticClass:"column has-text-right is-hidden-mobile"},[t("span",[e._v(e._s(e.$t("sales.grand-total")))])]),t("div",{staticClass:"column column-price is-narrow has-text-right is-hidden-mobile"},[t("div",{staticClass:"price"},[e._v(e._s(e._f("price")(e.totalAmount)))])])])]),t("div",{staticClass:"checkout-review-content"},[t("div",{staticClass:"checkout-review-billing-info"},[t("b-switch",{on:{input:e.handleChangeSameAsBilling},model:{value:e.sameAsBilling,callback:function(i){e.sameAsBilling=i},expression:"sameAsBilling"}},[e._v(" "+e._s(e.$t("checkout.review.billing-address-the-same"))+" ")]),t("br"),t("br"),e.sameAsBilling?[t("address-information",{staticClass:"address-info-block",attrs:{address:e.shippingDetails}})]:[e.user.id?t("div",[t("address-selector",{model:{value:e.billingAddressId,callback:function(i){e.billingAddressId=i},expression:"billingAddressId"}}),t("div",{staticClass:"buttons"},[t("button",{staticClass:"button is-small is-primary",on:{click:e.handleAddNewAddress}},[e._v(" "+e._s(e.$t("checkout.review.change-address"))+" ")])])],1):t("div",[t("address-information",{attrs:{address:e.billingDetails}}),t("br"),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-narrow"},[t("button",{staticClass:"button is-small is-light is-primary",on:{click:e.handleUpdateAddress}},[e._v(" "+e._s(e.$t("checkout.review.change-address"))+" ")])])])],1)]],2)]),t("div",{staticClass:"checkout-review-heading"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-half has-text-centered-mobile"},[t("span",[e._v(e._s(e.$t("checkout.review.choose-method")))])])])]),t("div",{staticClass:"checkout-review-content"},[t("div",{staticClass:"payment-methods"},e._l(e.activePaymentMethods,function(i){var r;return t("div",{key:i.code,staticClass:"panel",class:(r={"is-active":i.code===e.selectedMethodCode,"payment-method":!0},r["payment-method-"+i.code]=!0,r)},[t("div",{staticClass:"panel-heading",on:{click:function(a){return e.handleSelectMethod(i)}}},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-item is-narrow method-input"},[t("b-radio",{attrs:{"native-value":i.code},model:{value:e.selectedMethodCode,callback:function(a){e.selectedMethodCode=a},expression:"selectedMethodCode"}})],1),t("div",{staticClass:"level-item level-left method-image is-narrow"},[t("img",{style:i.iconStyle,attrs:{src:i.icon,alt:i.title}})]),t("div",{staticClass:"level-item level-left method-info"},[i.info?t("p",[e._v(e._s(i.info))]):e._e(),i.supportedCardTypes?t("p",{staticClass:"supported-cart-types"},e._l(i.supportedCardTypes,function(a){return t("img",{key:a.id,class:`supported-cart-types__${a.id}`,attrs:{src:a.icon,alt:a.title}})}),0):e._e()])])]),i.component?t("div",{staticClass:"panel-content"},[t(i.component,{ref:"paymentComponent",refInFor:!0,tag:"component",attrs:{config:e.paymentConfig,code:i.code,"":i.options}})],1):e._e()])}),0)]),t("div",{staticClass:"checkout-review-agreement"},[t("div",{staticClass:"field"},[t("b-checkbox",{model:{value:e.isAgreementValid,callback:function(i){e.isAgreementValid=i},expression:"isAgreementValid"}},[t("i18n",{staticStyle:{"white-space":"pre-wrap"},attrs:{path:"checkout.review.agreement",tag:"div"}},[t("a",{attrs:{place:"0"},on:{click:e.handleShowAgreement}},[e._v(e._s(e.$t("links.terms-of-service")))])])],1)],1)]),t("div",{staticClass:"checkout-review-buttons"},[t("div",{staticClass:"columns is-vcentered is-mobile"},[t("div",{staticClass:"column is-narrow"},[t("router-link",{staticClass:"button is-primary is-outlined is-medium is-size-5-mobile",attrs:{to:{name:"checkout"}}},[t("span",{staticClass:"icon"},[t("svg-icon",{attrs:{icon:"arrow-return-left"}})],1)])],1),t("div",{staticClass:"column"},[e.totalAmount>0&&e.selectedMethod&&e.selectedMethod.buttonComponent?[t("div",{staticClass:"checkout-payment-button-container is-pulled-right"},[e.canSubmit?t(e.selectedMethod.buttonComponent,e._b({tag:"component",attrs:{config:e.paymentConfig,amount:e.totalAmount,currency:e.currencyCode},on:{authorize:e.placeOrder,error:e.onError}},"component",e.selectedMethod.options,!1)):t("span",{staticClass:"has-text-grey-light"},[t("b-icon",{attrs:{icon:"alert-circle",size:"is-small"}}),e._v("\xA0 "+e._s(e.$t("checkout.review.agreement-invalid"))+" ")],1)],1)]:[t("a",{staticClass:"button is-primary is-medium is-pulled-right is-size-5-mobile",class:{"is-loading":e.loading},attrs:{disabled:!e.canSubmit},on:{click:e.handleSubmit}},[t("span",[e._v(e._s(e.$t("checkout.review.place-order")))])])]],2)])]),t("b-modal",{model:{value:e.isAgreementModalActive,callback:function(i){e.isAgreementModalActive=i},expression:"isAgreementModalActive"}},[t("div",{staticClass:"modal-card"},[t("div",{staticClass:"modal-card-body"},[t(e.agreementComponent,{tag:"comment",staticClass:"content"})],1)])])],1)},j=[];C._withStripped=!0;const L={components:{BIcon:w,SvgIcon:S,AddressSelector:O,AddressInformation:T},data(){return{loading:!1,isValid:!1,isAgreementValid:!0,isAgreementModalActive:!1,agreementComponent:null}},computed:o(n(n({},D({user:e=>e.auth.user,storeCode:e=>e.app.storeCode,shippingDetails:e=>e.cart.shippingDetails,billingDetails:e=>e.cart.billingDetails,totals:e=>e.cart.totals})),I("cart",["itemsCount","summaryItemsCount","grandTotal","totalAmount","currencyCode","paymentMethods","products","orderId"])),{billingAddressId:{get(){return this.billingDetails.customer_address_id||this.user&&this.user.default_billing},set(e){if(!this.user.addresses)return;const s=this.user.addresses.find(t=>parseInt(t.id,10)===parseInt(e,10));if(s){const t=Object.assign({},s,{id:void 0,customer_address_id:e});this.$store.commit("cart/setBillingDetails",t)}}},sameAsBilling:{get(){return!!this.billingDetails.same_as_billing},set(e){this.$store.commit("cart/billingDetails/update",{key:"same_as_billing",value:e})}},paymentConfig:{get(){return this.$store.state.cart.paymentConfig},set(){}},selectedMethodCode:{get(){return this.$store.state.cart.paymentMethod},set(e){this.$store.commit("cart/setPaymentMethod",e)}},canSubmit(){return this.isValid&&this.selectedMethodCode&&this.isAgreementValid},selectedMethod(){return this.selectedMethodCode&&this.computedPaymentMethods.find(e=>e.code===this.selectedMethodCode)},activePaymentMethods(){return this.computedPaymentMethods.filter(e=>e.active)},computedPaymentMethods(){return this.paymentMethods.map(e=>(m[e.code]&&(e=Object.assign({},e,m[e.code])),e.supportedCardTypes&&(e.supportedCardTypes=e.supportedCardTypes.map(s=>h[s]?h[s]:null).filter(s=>s!==null)),e.code==="checkmo"&&(e.info=this.$t("checkout.bank.title")),e.sort||(e.sort=-1),e)).sort((e,s)=>s.sort>e.sort?-1:1)}}),created(){this.$on("validate",e=>{this.isValid=e}),this.$on("error",e=>{this.raiseError(e)}),this.$on("loading",e=>{this.loading=e})},mounted(){this.validateSelectedMethod()},methods:o(n({},x("cart",["getPaymentInformation","savePaymentInformation"])),{handleChangeSameAsBilling(e){e===!1&&this.handleUpdateAddress()},async placeOrder(e){this.$ga&&this.$ga.ecommerce.setAction("checkout_option",{step:2,option:this.selectedMethodCode}),this.setLoading(!0);let s;try{this.products.forEach(i=>{this.$ga&&this.$ga.ecommerce.addProduct({id:i.sku,name:i.name,category:i.category,variant:i.color,price:i.price,quantity:i.qty})});const t={affiliation:this.storeCode,revenue:this.totals.grand_total,shipping:this.totals.shipping_amount,tax:this.totals.tax_amount,coupon:this.totals.coupon_code};s=await this.savePaymentInformation({additional_data:e,extension_attributes:{agreement_ids:["1"]}}),this.$ga&&this.$ga.ecommerce.setAction("purchase",o(n({},t),{id:this.orderId})),this.$router.push({name:"checkout.finish"})}catch{}return this.setLoading(!1),s},validateSelectedMethod(){this.selectedMethod&&(this.selectedMethod.component?(this.paymentComponent=this.$refs.paymentComponent.find(e=>e.$attrs.code===this.selectedMethodCode),this.isValid=this.paymentComponent.isValid||!1):(this.paymentComponent=void 0,this.isValid=!0))},handleSubmit(){if(!this.canSubmit)return!1;this.paymentComponent&&this.paymentComponent.placeOrderHandler?this.paymentComponent.placeOrderHandler(this.placeOrder):this.placeOrder()},handleSelectMethod(e){this.selectedMethodCode=e.code,this.validateSelectedMethod()},handleUpdateAddress(){this.$buefy.modal.open({parent:this,component:u,hasModalCard:!0,props:{title:this.$t("checkout.review.billing-info"),showCompany:!0,showDefaults:!1,showSaveInAddressBook:!0,address:this.billingDetails},events:{update:e=>{const s=Object.assign({},e.$data.form,{});this.$store.commit("cart/setBillingDetails",s),e.$parent.close()},close:()=>{}},onCancel:()=>{}})},handleAddNewAddress(){let e=this.user.addresses.length?this.user.addresses.find(s=>s.id===l):!1;e||(e=this.billingDetails),this.$buefy.modal.open({parent:this,component:u,hasModalCard:!0,props:{title:this.$t("checkout.review.billing-info"),showCompany:!0,showDefaults:!1,showSaveInAddressBook:!0,address:e},events:{update:s=>{const t=Object.assign({},s.$data.form,{id:l});this.$store.commit("auth/UPDATE_ADDRESS",t),this.billingAddressId=l,s.$parent.close()}}})},async handleShowAgreement(e){if(e.preventDefault(),this.agreementComponent){this.isAgreementModalActive=!0;return}const s=await B("terms-of-service");this.agreementComponent=s.default,this.isAgreementModalActive=!0},setLoading(e){this.$store.commit("app/SET_LOADING",e)},onError(e){this.raiseError(e)}})},v={};var b=g(L,C,j,!1,z,null,null,null);function z(e){for(let s in v)this[s]=v[s]}b.options.__file="src/pages/checkout/review.vue";var G=function(){return b.exports}();export{G as default};
