var p=Object.defineProperty,h=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var c=(e,a,t)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,r=(e,a)=>{for(var t in a||(a={}))b.call(a,t)&&c(e,t,a[t]);if(o)for(var t of o(a))_.call(a,t)&&c(e,t,a[t]);return e},n=(e,a)=>h(e,v(a));import{a as C,c as g,n as y}from"./index.f4b33e31.js";import{R as $}from"./Recaptcha.9f7df94f.js";var m=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"section"},[t("div",{staticClass:"content"},[t("div",{staticClass:"page-title"},[e._v("Didn't receive confirmation instructions?")]),t("p",[e._v(" Please enter your email address below to receive an activation link. ")]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6"},[t("ValidationObserver",{ref:"observer",attrs:{tag:"form"},on:{submit:function(i){return i.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("ValidationProvider",{attrs:{name:e.$t("customer.common.email"),rules:"required|email",slim:""},scopedSlots:e._u([{key:"default",fn:function(i){var s=i.errors,d=i.valid;return[t("b-field",{class:{"is-filled":e.email,"has-error":s[0]},attrs:{type:{"is-danger":s[0],"is-success":d},message:s,label:e.$t("customer.common.email")+":","label-for":`${e.$options.name}-email`,horizontal:""}},[t("b-input",{attrs:{id:`${e.$options.name}-email`,name:"email"},model:{value:e.email,callback:function(f){e.email=f},expression:"email"}})],1)]}}])}),t("b-field",[e.recaptchaPublicKey?t("re-captcha",{ref:"recaptcha",attrs:{sitekey:e.recaptchaPublicKey,callback:e.captchaCallback}}):e._e()],1),t("br"),t("div",{staticClass:"buttons"},[t("button",{staticClass:"button is-primary is-medium",attrs:{disabled:!e.isButtonActive}},[e._v(" Resend confirmation instructions ")])])],1),t("b-loading",{attrs:{"is-full-page":!1,active:e.loading}})],1)])])])])},k=[];m._withStripped=!0;const P={name:"ResetConfirmationForm",metaInfo(){return{title:"Forgot Your Password"}},components:{ReCaptcha:$},data(){return{recaptchaVerified:!1,loading:!1,email:""}},computed:n(r({},C({recaptchaPublicKey:e=>e.app.config.recaptcha_key})),{isButtonActive(){return!0}}),methods:n(r({},g("auth",["confirm"])),{captchaCallback(e){this.recaptchaVerified=!!e},handleSubmit(){this.$refs.observer.validate().then(async e=>{if(e){if(this.$refs.recaptcha&&!this.recaptchaVerified)return this.raiseError("Captcha is not verified."),!1;this.loading=!0;try{await this.confirm({email:this.email})&&(this.email="",this.$router.push({name:"home"}),this.$buefy.toast.open({type:"is-success",message:"Confirmation has been sent.",duration:4e3}))}catch{}this.loading=!1}})}})},l={};var u=y(P,m,k,!1,S,null,null,null);function S(e){for(let a in l)this[a]=l[a]}u.options.__file="src/pages/auth/resend-confirmation.vue";var x=function(){return u.exports}();export{x as default};
