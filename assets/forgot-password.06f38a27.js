var h=Object.defineProperty,f=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(t,e,a)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,r=(t,e)=>{for(var a in e||(e={}))_.call(e,a)&&c(t,a,e[a]);if(l)for(var a of l(e))b.call(e,a)&&c(t,a,e[a]);return t},o=(t,e)=>f(t,v(e));import{a as g,i as $,c as w,n as y}from"./index.f4b33e31.js";import{R as C}from"./Recaptcha.9f7df94f.js";var u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"section"},[a("div",{staticClass:"content"},[a("div",{staticClass:"page-title"},[t._v(t._s(t.$t("auth.forgot-password.title")))]),a("p",[t._v(t._s(t.$t("auth.forgot-password.description")))]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-6"},[a("ValidationObserver",{ref:"observer",attrs:{tag:"form"},on:{submit:function(s){return s.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("ValidationProvider",{attrs:{name:t.$t("customer.common.email"),rules:"required|email",slim:""},scopedSlots:t._u([{key:"default",fn:function(s){var i=s.errors,d=s.valid;return[a("b-field",{class:{"is-filled":t.email,"has-error":i[0]},attrs:{type:{"is-danger":i[0],"is-success":d},message:i,label:t.$t("customer.common.email")+":","label-for":`${t.$options.name}-email`,horizontal:""}},[a("b-input",{attrs:{id:`${t.$options.name}-email`,name:"email"},model:{value:t.email,callback:function(p){t.email=p},expression:"email"}})],1)]}}])}),t.showRecaptcha?a("b-field",[t.recaptchaPublicKey?a("re-captcha",{ref:"recaptcha",attrs:{sitekey:t.recaptchaPublicKey,callback:t.captchaCallback}}):t._e()],1):t._e(),a("br"),a("div",{staticClass:"buttons"},[a("button",{staticClass:"button is-primary is-medium",attrs:{disabled:!t.isButtonActive}},[t._v(" "+t._s(t.$t("auth.forgot-password.submit"))+" ")])])],1),a("b-loading",{attrs:{"is-full-page":!1,active:t.loading}})],1)])])])])},P=[];u._withStripped=!0;const k={name:"ForgotPasswordForm",metaInfo(){return{title:this.$t("auth.forgot-password.title")}},components:{ReCaptcha:C},data(){return{recaptchaVerified:!1,loading:!1,email:""}},computed:o(r({},g({recaptchaPublicKey:t=>t.app.config.recaptcha_key})),{isButtonActive(){return!0},showRecaptcha(){return $}}),methods:o(r({},w("auth",["requestResetPassword"])),{captchaCallback(t){this.recaptchaVerified=!!t},handleSubmit(){this.$refs.observer.validate().then(async t=>{if(t){if(this.$refs.recaptcha&&!this.recaptchaVerified)return this.raiseError(this.$t("captcha.invalid")),!1;this.loading=!0;try{await this.requestResetPassword({email:this.email})&&(this.email="",this.$router.push({name:"login"}),this.$buefy.toast.open({type:"is-success",message:this.$t("auth.forgot-password.success",[this.email]),duration:4e3}))}catch{}this.loading=!1}})}})},n={};var m=y(k,u,P,!1,R,null,null,null);function R(t){for(let e in n)this[e]=n[e]}m.options.__file="src/pages/auth/forgot-password.vue";var q=function(){return m.exports}();export{q as default};