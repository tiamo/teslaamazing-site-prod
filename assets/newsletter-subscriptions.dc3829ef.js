var m=Object.defineProperty,_=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var a=(t,e,s)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,i=(t,e)=>{for(var s in e||(e={}))d.call(e,s)&&a(t,s,e[s]);if(r)for(var s of r(e))h.call(e,s)&&a(t,s,e[s]);return t},n=(t,e)=>_(t,b(e));import{m as p,c as f,n as v}from"./index.f4b33e31.js";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"page-title"},[t._v(" "+t._s(t.$t("customer.newsletter-subscriptions.title"))+" ")]),s("b-field",[s("b-switch",{model:{value:t.isSubscribed,callback:function(l){t.isSubscribed=l},expression:"isSubscribed"}},[t._v(" \xA0 "+t._s(t.$t("customer.newsletter-subscriptions.general")))])],1),s("hr"),s("div",{staticClass:"buttons"},[s("button",{staticClass:"button is-primary",on:{click:t.handleSubmit}},[t._v(" "+t._s(t.$t("common.save"))+" ")])]),s("b-loading",{attrs:{"is-full-page":!1,active:t.loading}})],1)},g=[];o._withStripped=!0;const S={metaInfo(){return{title:this.$t("customer.newsletter-subscriptions.title")}},data(){return{loading:!1}},computed:n(i({},p({user:"auth/user"})),{isSubscribed:{get(){return this.user.extension_attributes.is_subscribed},set(t){this.$store.commit("auth/UPDATE_USER",{path:["extension_attributes","is_subscribed"],value:t})}}}),methods:n(i({},f({update:"auth/update"})),{handleSubmit(){this.loading=!0,this.update({email:this.user.email,firstname:this.user.firstname,lastname:this.user.lastname,gender:this.user.gender,extension_attributes:this.user.extension_attributes}).then(()=>{this.loading=!1,this.$buefy.toast.open({type:"is-success",message:this.$t("customer.newsletter-subscriptions.success")})}).catch(()=>{this.loading=!1})}})},u={};var c=v(S,o,g,!1,w,null,null,null);function w(t){for(let e in u)this[e]=u[e]}c.options.__file="src/pages/customer/newsletter-subscriptions.vue";var C=function(){return c.exports}();export{C as default};
