var p=Object.defineProperty,m=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var i=(s,e,t)=>e in s?p(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,n=(s,e)=>{for(var t in e||(e={}))w.call(e,t)&&i(s,t,e[t]);if(o)for(var t of o(e))h.call(e,t)&&i(s,t,e[t]);return s},l=(s,e)=>m(s,f(e));import{c as v,n as b}from"./index.bbea77ac.js";var c=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"section"},[t("div",{staticClass:"content"},[t("div",{staticClass:"page-title"},[s._v(s._s(s.$t("auth.create-password.title")))]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-7"},[t("ValidationObserver",{ref:"observer",staticClass:"create-password-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),s.handleSubmit.apply(null,arguments)}}},[t("ValidationProvider",{attrs:{name:s.$t("customer.common.new-password"),rules:"required|min:6",slim:"",vid:"password"}},[t("b-field",{class:{"is-filled":!!s.password,"has-error":s.errors[0]},attrs:{type:{"is-danger":s.errors[0],"is-success":s.valid},message:s.errors,label:s.$t("customer.common.new-password"),"label-for":`${s.$options.name}-new-password`,horizontal:""},scopedSlots:s._u([{key:"default",fn:function(a){return a.errors,a.valid,[t("b-input",{attrs:{id:`${s.$options.name}-new-password`,type:"password",name:"password",autocomplete:"new-password"},model:{value:s.password,callback:function(r){s.password=r},expression:"password"}})]}}])})],1),t("ValidationProvider",{attrs:{name:s.$t("customer.common.new-password-confirm"),rules:"required|confirmed:password",slim:""}},[t("b-field",{class:{"is-filled":!!s.passwordConfirmation,"has-error":s.errors[0]},attrs:{type:{"is-danger":s.errors[0],"is-success":s.valid},message:s.errors,label:s.$t("customer.common.new-password-confirm"),"label-for":`${s.$options.name}-new-password-confirm`,horizontal:""},scopedSlots:s._u([{key:"default",fn:function(a){return a.errors,a.valid,[t("b-input",{attrs:{id:`${s.$options.name}-new-password-confirm`,type:"password",name:"passwordConfirmation"},model:{value:s.passwordConfirmation,callback:function(r){s.passwordConfirmation=r},expression:"passwordConfirmation"}})]}}])})],1),t("br"),t("div",{staticClass:"buttons"},[t("button",{staticClass:"button is-primary is-medium"},[s._v(" "+s._s(s.$t("common.submit"))+" ")])])],1),t("b-loading",{attrs:{"is-full-page":!1,active:s.loading}})],1)])])])])},_=[];c._withStripped=!0;const $={metaInfo(){return{title:this.$t("auth.create-password.title")}},props:{email:{type:String,default:null},token:{type:String,default:null}},data(){return{loading:!1,password:"",passwordConfirmation:""}},created(){this.token||this.$router.push({path:"/404"})},methods:l(n({},v("auth",["resetPassword"])),{captchaCallback(s){this.recaptchaVerified=!!s},handleSubmit(){this.$refs.observer.validate().then(async s=>{if(s){this.loading=!0;try{await this.resetPassword({email:this.email||"",resetToken:this.token,newPassword:this.password}),this.$router.push({path:"/customer/account/login"}),this.$buefy.toast.open({type:"is-success",message:this.$t("auth.create-password.success"),duration:4e3})}catch{}this.loading=!1}})}})},d={};var u=b($,c,_,!1,g,null,null,null);function g(s){for(let e in d)this[e]=d[e]}u.options.__file="src/pages/auth/create-password.vue";var k=function(){return u.exports}();export{k as default};
