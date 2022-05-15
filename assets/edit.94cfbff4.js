var p=Object.defineProperty,v=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var u=(e,s,t)=>s in e?p(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,o=(e,s)=>{for(var t in s||(s={}))b.call(s,t)&&u(e,t,s[t]);if(m)for(var t of m(s))g.call(s,t)&&u(e,t,s[t]);return e},l=(e,s)=>v(e,h(s));import{m as $,x as _,ai as y,c as C,n as k}from"./index.6d6c1d5a.js";import x from"./change-password-modal.893a5aae.js";var c=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("div",{staticClass:"page-title"},[e._v(e._s(e.$t("customer.edit.title")))]),t("ValidationObserver",{ref:"observer",attrs:{tag:"form"},on:{submit:function(r){return r.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-8-desktop is-10-tablet"},[t("ValidationProvider",{attrs:{name:e.$t("customer.common.email"),rules:"required|email",slim:""},scopedSlots:e._u([{key:"default",fn:function(r){var a=r.errors,i=r.valid;return[t("b-field",{class:{"is-filled":!!e.email,"has-error":a[0]},attrs:{type:{"is-danger":a[0],"is-success":i},message:a,label:e.$t("customer.common.email"),"label-for":`${e.$options.name}-email`,horizontal:""}},[t("b-input",{attrs:{id:`${e.$options.name}-email`,name:"email"},model:{value:e.email,callback:function(n){e.email=n},expression:"email"}})],1)]}}])}),t("ValidationProvider",{attrs:{name:e.$t("customer.common.first-name"),rules:"required",slim:""},scopedSlots:e._u([{key:"default",fn:function(r){var a=r.errors,i=r.valid;return[t("b-field",{class:{"is-filled":!!e.firstname,"has-error":a[0]},attrs:{type:{"is-danger":a[0],"is-success":i},message:a,label:e.$t("customer.common.first-name"),"label-for":`${e.$options.name}-first-name`,horizontal:""}},[t("b-input",{attrs:{id:`${e.$options.name}-first-name`,name:"firstname"},model:{value:e.firstname,callback:function(n){e.firstname=n},expression:"firstname"}})],1)]}}])}),t("ValidationProvider",{attrs:{name:e.$t("customer.common.last-name"),rules:"required",slim:""},scopedSlots:e._u([{key:"default",fn:function(r){var a=r.errors,i=r.valid;return[t("b-field",{class:{"is-filled":!!e.lastname,"has-error":a[0]},attrs:{type:{"is-danger":a[0],"is-success":i},message:a,label:e.$t("customer.common.last-name"),"label-for":`${e.$options.name}-last-name`,horizontal:""}},[t("b-input",{attrs:{id:`${e.$options.name}-last-name`,name:"lastname"},model:{value:e.firstname,callback:function(n){e.firstname=n},expression:"firstname"}})],1)]}}])}),t("ValidationProvider",{attrs:{name:e.$t("customer.common.gender"),slim:""},scopedSlots:e._u([{key:"default",fn:function(r){var a=r.errors,i=r.valid;return[t("b-field",{class:{"is-filled":!!e.gender,"has-error":a[0]},attrs:{type:{"is-danger":a[0],"is-success":i},message:a,label:e.$t("customer.common.gender"),"label-for":`${e.$options.name}-gender`,horizontal:""}},[t("b-select",{staticClass:"is-custom",attrs:{id:`${e.$options.name}-gender`,name:"gender"},model:{value:e.gender,callback:function(n){e.gender=n},expression:"gender"}},[t("option",{attrs:{value:"0"}}),t("option",{attrs:{value:"1"}},[e._v(" "+e._s(e.$t("customer.common.gender-male"))+" ")]),t("option",{attrs:{value:"2"}},[e._v(" "+e._s(e.$t("customer.common.gender-female"))+" ")])])],1)]}}])}),t("br"),t("b-field",[t("a",{on:{click:e.handleChangePassword}},[e._v(" "+e._s(e.$t("customer.change-password.title"))+" ")])])],1)]),t("div",{staticClass:"buttons"},[t("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v(" "+e._s(e.$t("common.save"))+" ")])])]),t("b-loading",{attrs:{"is-full-page":!1,active:e.loading}})],1)},S=[];c._withStripped=!0;const w={name:"EditAccountForm",metaInfo(){return{title:this.$t("customer.edit.title")}},data(){return{loading:!1}},computed:l(o(o({},$({user:"auth/user"})),_("auth/user",["email","firstname","lastname","gender","dob"])),{dateOfBirth:{get(){return this.dob?new Date(Date.parse(this.dob)):null},set(e){this.dob=y(e).format("YYYY-MM-DD")}}}),methods:l(o({},C({update:"auth/update"})),{handleSubmit(){this.$refs.observer.validate().then(async e=>{if(e){this.loading=!0;try{await this.update({firstname:this.user.firstname,lastname:this.user.lastname,gender:this.user.gender,email:this.user.email,dob:this.user.dob,extension_attributes:this.user.extension_attributes}),this.$buefy.toast.open({type:"is-success",message:this.$t("customer.edit.success")})}catch{}this.loading=!1}})},handleChangePassword(){this.$buefy.modal.open({component:x,parent:this,hasModalCard:!0})}})},d={};var f=k(w,c,S,!1,P,null,null,null);function P(e){for(let s in d)this[s]=d[s]}f.options.__file="src/pages/customer/edit.vue";var V=function(){return f.exports}();export{V as default};
