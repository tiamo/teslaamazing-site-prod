var s=Object.defineProperty;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var i=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))p.call(t,a)&&i(e,a,t[a]);return e};import{m as u,n as h}from"./index.66e74258.js";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recaptcha-container"})},_=[];l._withStripped=!0;const m={props:{sitekey:{type:String,required:!0},theme:{type:String,default:"light",validator:e=>["dark","light"].includes(e)},size:{type:String,default:"normal",validator:e=>["normal","compact"].includes(e)},tabindex:{type:Number,default:0},callback:{type:Function,required:!0},expiredCallback:{type:Function,default:()=>null},errorCallback:{type:Function,default:()=>null}},data(){return{id:null}},computed:c({},u({locale:"app/locale"})),created(){if(typeof window!="undefined"){if(window.__recaptchaInitCallback===void 0){window.recaptchaLoaded=new Promise(t=>{window.__recaptchaInitCallback=t});const e=document.createElement("script");e.setAttribute("src","https://www.google.com/recaptcha/api.js?onload=__recaptchaInitCallback&render=explicit&hl="+this.locale),e.setAttribute("async",""),e.setAttribute("defer",""),(document.body||document.head).appendChild(e)}window.recaptchaLoaded.then(()=>{const e={sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:this.callback};this.expiredCallback&&(e["expired-callback"]=this.expiredCallback),this.errorCallback&&(e["error-callback"]=this.errorCallback),this.id=window.grecaptcha.render(this.$el,e)})}}},n={};var o=h(m,l,_,!1,b,null,null,null);function b(e){for(let t in n)this[t]=n[t]}o.options.__file="src/components/Recaptcha.vue";var w=function(){return o.exports}();export{w as R};
