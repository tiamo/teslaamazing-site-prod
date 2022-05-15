var w=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(s,a,r)=>a in s?w(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,l=(s,a)=>{for(var r in a||(a={}))h.call(a,r)&&d(s,r,a[r]);if(i)for(var r of i(a))b.call(a,r)&&d(s,r,a[r]);return s},c=(s,a)=>f(s,v(a));import{c as _,n as $}from"./index.8be7eb7b.js";var m=function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ValidationObserver",{ref:"observer",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),s.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"modal-card change-password-modal"},[r("div",{staticClass:"modal-card-head"},[r("p",{staticClass:"modal-card-title"},[s._v(" "+s._s(s.$t("customer.change-password.title"))+" ")])]),r("div",{staticClass:"modal-card-body"},[r("ValidationProvider",{attrs:{name:s.$t("customer.common.current-password"),rules:"required|min:6",slim:""},scopedSlots:s._u([{key:"default",fn:function(t){var e=t.errors,o=t.valid;return[r("b-field",{class:{"is-filled":!!s.currentPassword,"has-error":e[0]},attrs:{type:{"is-danger":e[0],"is-success":o},message:e,label:s.$t("customer.common.current-password"),"label-for":`${s.$options.name}-current-password`,horizontal:""}},[r("b-input",{attrs:{id:`${s.$options.name}-current-password`,type:"password",name:"currentPassword"},model:{value:s.currentPassword,callback:function(n){s.currentPassword=n},expression:"currentPassword"}})],1)]}}])}),r("ValidationProvider",{attrs:{name:s.$t("customer.common.new-password"),rules:"required|min:6",slim:"",vid:"password"},scopedSlots:s._u([{key:"default",fn:function(t){var e=t.errors,o=t.valid;return[r("b-field",{class:{"is-filled":!!s.password,"has-error":e[0]},attrs:{type:{"is-danger":e[0],"is-success":o},message:e,label:s.$t("customer.common.new-password"),"label-for":`${s.$options.name}-new-password`,horizontal:""}},[r("b-input",{attrs:{id:`${s.$options.name}-new-password`,type:"password",name:"password"},model:{value:s.password,callback:function(n){s.password=n},expression:"password"}})],1)]}}])}),r("ValidationProvider",{attrs:{name:s.$t("customer.common.new-password-confirm"),rules:"required|confirmed:password",slim:""},scopedSlots:s._u([{key:"default",fn:function(t){var e=t.errors,o=t.valid;return[r("b-field",{class:{"is-filled":!!s.passwordConfirm,"has-error":e[0]},attrs:{type:{"is-danger":e[0],"is-success":o},message:e,label:s.$t("customer.common.new-password-confirm"),"label-for":`${s.$options.name}-new-password-confirm`,horizontal:""}},[r("b-input",{attrs:{id:`${s.$options.name}-new-password-confirm`,type:"password",name:"passwordConfirm"},model:{value:s.passwordConfirm,callback:function(n){s.passwordConfirm=n},expression:"passwordConfirm"}})],1)]}}])})],1),r("div",{staticClass:"modal-card-foot"},[r("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[s._v(" "+s._s(s.$t("common.save"))+" ")]),r("button",{staticClass:"button",attrs:{type:"button"},on:{click:s.close}},[s._v(" "+s._s(s.$t("common.cancel"))+" ")])])]),r("b-loading",{attrs:{"is-full-page":!1,active:s.loading}})],1)},g=[];m._withStripped=!0;const y={name:"ChangePasswordModal",data(){return{currentPassword:"",password:"",passwordConfirm:"",loading:!1}},computed:{isButtonActive(){return this.recaptchaVerified}},methods:c(l({},_("auth",["changePassword"])),{handleSubmit(){this.$refs.observer.validate().then(async s=>{if(s){this.loading=!0;try{await this.changePassword({currentPassword:this.currentPassword,newPassword:this.password}),this.$buefy.toast.open({type:"is-success",message:this.$t("customer.change-password.success")}),this.close()}catch{}this.loading=!1}})},close(){this.$emit("close")}})},u={};var p=$(y,m,g,!1,C,null,null,null);function C(s){for(let a in u)this[a]=u[a]}p.options.__file="src/pages/customer/change-password-modal.vue";var S=function(){return p.exports}();export{S as default};
