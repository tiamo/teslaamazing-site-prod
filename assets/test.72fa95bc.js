import{n as l}from"./index.01f84084.js";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"section"},[t("ValidationProvider",{attrs:{name:"test",rules:"required",slim:""}},[t("b-field",{attrs:{type:{"is-danger":e.errors[0],"is-success":e.valid},message:e.errors},scopedSlots:e._u([{key:"default",fn:function(r){return r.errors,r.required,r.invalid,r.valid,[t("b-select",{staticClass:"is-custom",attrs:{expanded:""},model:{value:e.value,callback:function(s){e.value=s},expression:"value"}},[t("option",{attrs:{value:""}},[e._v("-")]),e._l(e.options,function(s){return t("option",{key:`item-${s.key}`,domProps:{value:s.key}},[e._v(" "+e._s(s.value)+" ")])})],2)]}}])})],1)],1)])},o=[];const u={data(){return{value:null,options:[{key:1,value:"A"},{key:2,value:"B"},{key:3,value:"C"},{key:4,value:"D"}]}}},n={};var v=l(u,i,o,!1,c,null,null,null);function c(e){for(let a in n)this[a]=n[a]}var _=function(){return v.exports}();export{_ as default};
