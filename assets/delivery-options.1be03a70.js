var me=Object.defineProperty,$e=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var L=(e,i,t)=>i in e?me(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,b=(e,i)=>{for(var t in i||(i={}))be.call(i,t)&&L(e,t,i[t]);if(T)for(var t of T(i))Ce.call(i,t)&&L(e,t,i[t]);return e},S=(e,i)=>$e(e,Ae(i));import{z as Pe,A as ee,D as te,E as Me,F as ie,G as Se,H as Oe,I as we,J as se,K as De,L as ke,M as Ee,N as m,P as Te,Q as Le,R as qe,T as ae,U as Re,W as xe,X as k,Y as ne,Z as re,$ as le,a0 as oe,a1 as Fe,a2 as Ie,a3 as Be,a4 as Ge,a5 as He,a6 as Ke,a7 as Ne,a8 as Ue,a9 as We,B as Je,S as Qe,a as Xe,m as Ye,aa as Ze,d as ze,ab as C,ac as q,ad as R,c as Ve,ae as x,n as je,f as et}from"./index.b818385b.js";import{A as F}from"./ascii-folder.6927e8d2.js";function tt(e,i,t,a){for(var n=-1,s=e==null?0:e.length;++n<s;){var r=e[n];i(a,r,t(r),e)}return a}var it=tt,st=Pe,at=ee;function nt(e,i){return e&&st(e,i,at)}var rt=nt,lt=te;function ot(e,i){return function(t,a){if(t==null)return t;if(!lt(t))return e(t,a);for(var n=t.length,s=i?n:-1,r=Object(t);(i?s--:++s<n)&&a(r[s],s,r)!==!1;);return t}}var ct=ot,pt=rt,dt=ct,ut=dt(pt),ce=ut,ht=ce;function _t(e,i,t,a){return ht(e,function(n,s,r){i(a,n,t(n),r)}),a}var ft=_t,gt="__lodash_hash_undefined__";function vt(e){return this.__data__.set(e,gt),this}var yt=vt;function mt(e){return this.__data__.has(e)}var $t=mt,At=Me,bt=yt,Ct=$t;function M(e){var i=-1,t=e==null?0:e.length;for(this.__data__=new At;++i<t;)this.add(e[i])}M.prototype.add=M.prototype.push=bt;M.prototype.has=Ct;var Pt=M;function Mt(e,i){for(var t=-1,a=e==null?0:e.length;++t<a;)if(i(e[t],t,e))return!0;return!1}var St=Mt;function Ot(e,i){return e.has(i)}var wt=Ot,Dt=Pt,kt=St,Et=wt,Tt=1,Lt=2;function qt(e,i,t,a,n,s){var r=t&Tt,l=e.length,o=i.length;if(l!=o&&!(r&&o>l))return!1;var c=s.get(e),u=s.get(i);if(c&&u)return c==i&&u==e;var d=-1,p=!0,f=t&Lt?new Dt:void 0;for(s.set(e,i),s.set(i,e);++d<l;){var h=e[d],_=i[d];if(a)var g=r?a(_,h,d,i,e,s):a(h,_,d,e,i,s);if(g!==void 0){if(g)continue;p=!1;break}if(f){if(!kt(i,function(v,y){if(!Et(f,y)&&(h===v||n(h,v,t,a,s)))return f.push(y)})){p=!1;break}}else if(!(h===_||n(h,_,t,a,s))){p=!1;break}}return s.delete(e),s.delete(i),p}var pe=qt;function Rt(e){var i=-1,t=Array(e.size);return e.forEach(function(a,n){t[++i]=[n,a]}),t}var xt=Rt;function Ft(e){var i=-1,t=Array(e.size);return e.forEach(function(a){t[++i]=a}),t}var It=Ft,I=ie,B=Se,Bt=Oe,Gt=pe,Ht=xt,Kt=It,Nt=1,Ut=2,Wt="[object Boolean]",Jt="[object Date]",Qt="[object Error]",Xt="[object Map]",Yt="[object Number]",Zt="[object RegExp]",zt="[object Set]",Vt="[object String]",jt="[object Symbol]",ei="[object ArrayBuffer]",ti="[object DataView]",G=I?I.prototype:void 0,O=G?G.valueOf:void 0;function ii(e,i,t,a,n,s,r){switch(t){case ti:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case ei:return!(e.byteLength!=i.byteLength||!s(new B(e),new B(i)));case Wt:case Jt:case Yt:return Bt(+e,+i);case Qt:return e.name==i.name&&e.message==i.message;case Zt:case Vt:return e==i+"";case Xt:var l=Ht;case zt:var o=a&Nt;if(l||(l=Kt),e.size!=i.size&&!o)return!1;var c=r.get(e);if(c)return c==i;a|=Ut,r.set(e,i);var u=Gt(l(e),l(i),a,n,s,r);return r.delete(e),u;case jt:if(O)return O.call(e)==O.call(i)}return!1}var si=ii,H=we,ai=1,ni=Object.prototype,ri=ni.hasOwnProperty;function li(e,i,t,a,n,s){var r=t&ai,l=H(e),o=l.length,c=H(i),u=c.length;if(o!=u&&!r)return!1;for(var d=o;d--;){var p=l[d];if(!(r?p in i:ri.call(i,p)))return!1}var f=s.get(e),h=s.get(i);if(f&&h)return f==i&&h==e;var _=!0;s.set(e,i),s.set(i,e);for(var g=r;++d<o;){p=l[d];var v=e[p],y=i[p];if(a)var E=r?a(y,v,p,i,e,s):a(v,y,p,e,i,s);if(!(E===void 0?v===y||n(v,y,t,a,s):E)){_=!1;break}g||(g=p=="constructor")}if(_&&!g){var $=e.constructor,A=i.constructor;$!=A&&"constructor"in e&&"constructor"in i&&!(typeof $=="function"&&$ instanceof $&&typeof A=="function"&&A instanceof A)&&(_=!1)}return s.delete(e),s.delete(i),_}var oi=li,w=se,ci=pe,pi=si,di=oi,K=De,N=m,U=ke.exports,ui=Ee,hi=1,W="[object Arguments]",J="[object Array]",P="[object Object]",_i=Object.prototype,Q=_i.hasOwnProperty;function fi(e,i,t,a,n,s){var r=N(e),l=N(i),o=r?J:K(e),c=l?J:K(i);o=o==W?P:o,c=c==W?P:c;var u=o==P,d=c==P,p=o==c;if(p&&U(e)){if(!U(i))return!1;r=!0,u=!1}if(p&&!u)return s||(s=new w),r||ui(e)?ci(e,i,t,a,n,s):pi(e,i,o,t,a,n,s);if(!(t&hi)){var f=u&&Q.call(e,"__wrapped__"),h=d&&Q.call(i,"__wrapped__");if(f||h){var _=f?e.value():e,g=h?i.value():i;return s||(s=new w),n(_,g,t,a,s)}}return p?(s||(s=new w),di(e,i,t,a,n,s)):!1}var gi=fi,vi=gi,X=Te;function de(e,i,t,a,n){return e===i?!0:e==null||i==null||!X(e)&&!X(i)?e!==e&&i!==i:vi(e,i,t,a,de,n)}var ue=de,yi=se,mi=ue,$i=1,Ai=2;function bi(e,i,t,a){var n=t.length,s=n,r=!a;if(e==null)return!s;for(e=Object(e);n--;){var l=t[n];if(r&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++n<s;){l=t[n];var o=l[0],c=e[o],u=l[1];if(r&&l[2]){if(c===void 0&&!(o in e))return!1}else{var d=new yi;if(a)var p=a(c,u,o,e,i,d);if(!(p===void 0?mi(u,c,$i|Ai,a,d):p))return!1}}return!0}var Ci=bi,Pi=Le;function Mi(e){return e===e&&!Pi(e)}var he=Mi,Si=he,Oi=ee;function wi(e){for(var i=Oi(e),t=i.length;t--;){var a=i[t],n=e[a];i[t]=[a,n,Si(n)]}return i}var Di=wi;function ki(e,i){return function(t){return t==null?!1:t[e]===i&&(i!==void 0||e in Object(t))}}var _e=ki,Ei=Ci,Ti=Di,Li=_e;function qi(e){var i=Ti(e);return i.length==1&&i[0][2]?Li(i[0][0],i[0][1]):function(t){return t===e||Ei(t,e,i)}}var Ri=qi;function xi(e,i){return e!=null&&i in Object(e)}var Fi=xi,Ii=qe,Bi=ae,Gi=m,Hi=Re,Ki=xe,Ni=k;function Ui(e,i,t){i=Ii(i,e);for(var a=-1,n=i.length,s=!1;++a<n;){var r=Ni(i[a]);if(!(s=e!=null&&t(e,r)))break;e=e[r]}return s||++a!=n?s:(n=e==null?0:e.length,!!n&&Ki(n)&&Hi(r,n)&&(Gi(e)||Bi(e)))}var Wi=Ui,Ji=Fi,Qi=Wi;function Xi(e,i){return e!=null&&Qi(e,i,Ji)}var Yi=Xi,Zi=ue,zi=ne,Vi=Yi,ji=re,es=he,ts=_e,is=k,ss=1,as=2;function ns(e,i){return ji(e)&&es(i)?ts(is(e),i):function(t){var a=zi(t,e);return a===void 0&&a===i?Vi(t,e):Zi(i,a,ss|as)}}var rs=ns;function ls(e){return function(i){return i==null?void 0:i[e]}}var os=ls,cs=le;function ps(e){return function(i){return cs(i,e)}}var ds=ps,us=os,hs=ds,_s=re,fs=k;function gs(e){return _s(e)?us(fs(e)):hs(e)}var vs=gs,ys=Ri,ms=rs,$s=oe,As=m,bs=vs;function Cs(e){return typeof e=="function"?e:e==null?$s:typeof e=="object"?As(e)?ms(e[0],e[1]):ys(e):bs(e)}var fe=Cs,Ps=it,Ms=ft,Ss=fe,Os=m;function ws(e,i){return function(t,a){var n=Os(t)?Ps:Ms,s=i?i():{};return n(t,e,Ss(a),s)}}var Ds=ws,ks=Fe,Es=Ds,Ts=Object.prototype,Ls=Ts.hasOwnProperty,qs=Es(function(e,i,t){Ls.call(e,t)?e[t].push(i):ks(e,t,[i])}),Rs=qs,Y=ie,xs=ae,Fs=m,Z=Y?Y.isConcatSpreadable:void 0;function Is(e){return Fs(e)||xs(e)||!!(Z&&e&&e[Z])}var Bs=Is,Gs=Ie,Hs=Bs;function ge(e,i,t,a,n){var s=-1,r=e.length;for(t||(t=Hs),n||(n=[]);++s<r;){var l=e[s];i>0&&t(l)?i>1?ge(l,i-1,t,a,n):Gs(n,l):a||(n[n.length]=l)}return n}var Ks=ge,Ns=ce,Us=te;function Ws(e,i){var t=-1,a=Us(e)?Array(e.length):[];return Ns(e,function(n,s,r){a[++t]=i(n,s,r)}),a}var Js=Ws;function Qs(e,i){var t=e.length;for(e.sort(i);t--;)e[t]=e[t].value;return e}var Xs=Qs,z=Be;function Ys(e,i){if(e!==i){var t=e!==void 0,a=e===null,n=e===e,s=z(e),r=i!==void 0,l=i===null,o=i===i,c=z(i);if(!l&&!c&&!s&&e>i||s&&r&&o&&!l&&!c||a&&r&&o||!t&&o||!n)return 1;if(!a&&!s&&!c&&e<i||c&&t&&n&&!a&&!s||l&&t&&n||!r&&n||!o)return-1}return 0}var Zs=Ys,zs=Zs;function Vs(e,i,t){for(var a=-1,n=e.criteria,s=i.criteria,r=n.length,l=t.length;++a<r;){var o=zs(n[a],s[a]);if(o){if(a>=l)return o;var c=t[a];return o*(c=="desc"?-1:1)}}return e.index-i.index}var js=Vs,D=Ge,ea=le,ta=fe,ia=Js,sa=Xs,aa=He,na=js,ra=oe,la=m;function oa(e,i,t){i.length?i=D(i,function(s){return la(s)?function(r){return ea(r,s.length===1?s[0]:s)}:s}):i=[ra];var a=-1;i=D(i,aa(ta));var n=ia(e,function(s,r,l){var o=D(i,function(c){return c(s)});return{criteria:o,index:++a,value:s}});return sa(n,function(s,r){return na(s,r,t)})}var ca=oa,pa=Ks,da=ca,ua=Ke,V=Ne,ha=ua(function(e,i){if(e==null)return[];var t=i.length;return t>1&&V(e,i[0],i[1])?i=[]:t>2&&V(i[0],i[1],i[2])&&(i=[i[0]]),da(e,pa(i,1),[])}),_a=ha,ve=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"checkout-fieldset",class:{"is-filled":e.isFilled,"is-active":e.isRealActive},attrs:{id:"delivery-options"}},[t("div",{staticClass:"fieldset-head"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"fieldset-title"},[t("svg-icon",{attrs:{icon:e.isFilled?"check-circle":"circle"}}),t("span",[e._v(e._s(e.$t("checkout.shipping-details.delivery-options.title")))])],1)])])]),t("div",{staticClass:"fieldset-body fieldset-collapse"},[t("div",{staticClass:"checkout-shipping-methods is-clearfix"},[t("b-loading",{attrs:{"is-full-page":!1,active:e.loading}}),t("ValidationProvider",{attrs:{rules:{required:!0},slim:""},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.errors;return[n[0]?t("b-message",{attrs:{type:"is-danger"}},[e._v(" "+e._s(e.$t("checkout.shipping-details.delivery-options.not-selected"))+" ")]):e._e(),e._l(e.shippingMethods,function(s){return t("div",{key:s.code,staticClass:"checkout-shipping-method has-text-centered-mobile",class:{"is-active":e.selectedMethodCode===s.code},on:{click:function(r){return e.handleSelectMethod(s)}}},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column column-input is-narrow"},[t("b-radio",{attrs:{type:n[0]?"is-danger":null,"native-value":s.code,name:"shippingMethod"},model:{value:e.selectedMethodCode,callback:function(r){e.selectedMethodCode=r},expression:"selectedMethodCode"}})],1),t("div",{staticClass:"column column-icon is-narrow"},[s.image?t("img",{attrs:{src:s.image,alt:s.carrier_title}}):t("span",[e._v(e._s(s.carrier_title))])]),t("div",{staticClass:"column column-title is-3-tablet"},[t("div",[e._v(" "+e._s(s.method_title)+" "),s.method_type==="pickup-point"&&e.selectedMethodCode===s.code?t("div",{staticClass:"pickup-point-selector"},[t("a",{on:{click:function(r){return e.handleSelectPickupPoint(s)}}},[e.pickupPoint.selected.zip?t("span",[e._v(" "+e._s(e.pickupPoint.selected.name)+" ")]):t("span",[e._v(" "+e._s(e.$t("checkout.common.select-pickup-point"))+" ")])])]):e._e()]),s.method_desc?t("b-tooltip",{attrs:{label:e.$t(s.method_desc),type:"is-light",position:"is-top",multilined:""}},[t("b-icon",{attrs:{icon:"information"}})],1):e._e()],1),t("div",{staticClass:"column column-date is-3"},[s.transit_days?t("div",[s.delivery_icon?t("img",{attrs:{src:s.delivery_icon,alt:""}}):t("img",{attrs:{src:Ue,alt:""}}),e._v(" "+e._s(e.$t("checkout.delivery.workdays",[s.transit_days.join("-")]))+" ")]):e._e(),s.delivery_info?t("b-tooltip",{attrs:{label:e.$t(s.delivery_info),type:"is-light",position:"is-top",multilined:""}},[t("b-icon",{attrs:{icon:"information"}})],1):e._e()],1),t("div",{staticClass:"column column-tracking is-2"},[t("p",{staticClass:"has-text-centered"},[t("img",{attrs:{src:We,alt:""}})])]),t("div",{staticClass:"column column-price"},[t("p",[e._v(e._s(e._f("price")(s.amount)))])])])])})]}}])}),e.shippingMethods.length?e._e():[e.loading||e.deliveryRequest.isSent||!e.wasLoaded?t("div",{staticClass:"empty"},[e._v(" "+e._s(e.$t("checkout.shipping-details.delivery-options.empty"))+" ")]):t("div",{staticClass:"delivery-request"},[t("div",{staticClass:"delivery-request__text"},[e._v(" "+e._s(e.$t("checkout.shipping-details.delivery-request.text"))+" ")]),t("div",{staticClass:"delivery-request__form"},[t("div",{staticClass:"delivery-request__heading"},[t("div",{staticClass:"delivery-request__heading-text"},[e._v(" "+e._s(e.$t("checkout.shipping-details.delivery-request.title",[`${e.shippingDetails.firstname} ${e.shippingDetails.lastname}`]))+" ")]),t("div",{staticClass:"delivery-request__heading-email"},[e._v(" "+e._s(e.shippingDetails.email)+" ")])]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[e._v(" "+e._s(e.$t("checkout.shipping-details.delivery-request.issue-text",[e.formattedAddress]))+" ")]),t("div",{staticClass:"column"},[t("button",{staticClass:"button is-light",class:{"is-loading":e.deliveryRequest.loading},on:{click:e.handleDeliveryRequest}},[t("span",[e._v(e._s(e.$t("common.submit")))])])])])])])]],2)]),t("b-modal",{staticClass:"shipping-request-modal",attrs:{active:e.deliveryRequest.isModalOpen}},[t("div",{staticClass:"content"},[t("b-icon",{attrs:{icon:"check-circle"}}),t("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("checkout.shipping-details.delivery-request.success.title"))+" ")]),e._v(" "+e._s(e.$t("checkout.shipping-details.delivery-request.success.text"))+" ")],1)]),e.pickupPoint.items.length>0?t("b-modal",{staticClass:"pickup-point-modal",attrs:{width:"700px",active:e.pickupPoint.isModalOpen}},[t("div",{staticClass:"modal-card-head"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.pickupPoint.query,expression:"pickupPoint.query"}],staticClass:"input",attrs:{type:"text",placeholder:e.$t("common.start-search")},domProps:{value:e.pickupPoint.query},on:{input:function(a){a.target.composing||e.$set(e.pickupPoint,"query",a.target.value)}}})]),Object.keys(e.pickupPointListFiltered).length>0?t("div",{staticClass:"modal-card-body is-paddingless"},e._l(Object.keys(e.pickupPointListFiltered),function(a,n){return t("b-collapse",{key:`pickup-point-${n}`,staticClass:"card",attrs:{open:!1,animation:""},scopedSlots:e._u([{key:"trigger",fn:function(s){return t("div",{staticClass:"card-header"},[t("div",{staticClass:"card-header-title"},[e._v(e._s(a))]),t("span",{staticClass:"card-header-icon",attrs:{"aria-label":"more options"}},[t("b-icon",{attrs:{icon:s.open?"chevron-up":"chevron-down"}})],1)])}}],null,!0)},[t("div",{staticClass:"dropdown-content"},e._l(e.pickupPointListFiltered[a],function(s,r){return t("a",{key:`item-${r}`,staticClass:"dropdown-item",class:{"is-active":e.pickupPoint.selected.zip===s.zip},on:{click:function(l){return e.handleChosePickupPoint(s)}}},[t("b",[e._v(e._s(s.name))]),t("br"),t("span",[e._v(e._s(s.location))]),e._v(", "+e._s(s.zip)+" ")])}),0)])}),1):t("div",{staticClass:"modal-card-body has-text-grey-light"},[t("div",{staticClass:"dropdown-item"},[e._v(" "+e._s(e.$t("common.no-results"))+" ")])])]):e._e(),t("b-loading",{attrs:{active:e.pickupPoint.loading}})],1)},fa=[];ve._withStripped=!0;const ga={components:{BIcon:Je,SvgIcon:Qe},props:{isActive:{type:Boolean,default:!1}},data(){return{wasLoaded:!1,pickupPoint:{isModalOpen:!1,loading:!1,query:"",selected:{},items:[]},deliveryRequest:{isModalOpen:!1,isSent:!1,loading:!1}}},computed:S(b(b({},Xe({user:e=>e.auth.user,loading:e=>e.cart.isLoadingShippingMethods,shippingDetails:e=>e.cart.shippingDetails})),Ye({shippingMethods:"cart/shippingMethods"})),{selectedMethodCode:{get(){return this.$store.state.cart.shippingMethod},set(e){this.$store.commit("cart/setShippingMethod",e)}},addressId(){return this.shippingDetails.customer_address_id||this.user&&this.user.default_shipping},formattedAddress(){return`
      ${this.shippingDetails.street.join(", ")}
      ${this.shippingDetails.city},
      ${Ze(this.shippingDetails.country_id)},
      ${this.shippingDetails.postcode}
      `},isFilled(){return!this.loading&&this.isValidMethod},isRealActive(){return this.isActive||this.loading||this.shippingMethods&&this.shippingMethods.length>0},isValidMethod(){const e=this.shippingMethods.find(i=>i.code===this.selectedMethodCode);return e?!(e.method_type==="pickup-point"&&!this.pickupPoint.selected.zip):!1},pickupPointListFiltered(){const e=this.pickupPoint.query.toLowerCase(),i=this.pickupPoint.items.map(t=>(t._name=F.fold(t.name),t._locality=F.fold(t.locality),t.matches={name:e?String(t._name).toLowerCase().startsWith(e):!0,locality:e?String(t._locality).toLowerCase().startsWith(e):!0,location:e?String(t.location).toLowerCase().startsWith(e):!0},t.isMatch=Object.keys(t.matches).some(a=>!!t.matches[a]),t)).filter(t=>t.isMatch);return Rs(_a(i,"_locality"),t=>t.locality)}}),watch:{loading(e){e&&(this.wasLoaded=!0)},isFilled:{immediate:!0,handler(e,i){i&&!e&&(this.wasLoaded=!1),this.$emit("input",e)}}},created(){this.estimateShippingMethodsDebounced=ze(e=>{if(this.loading||!this.shippingDetails||!this.shippingDetails.country_id)return;this.deliveryRequest.isSent=!1;const i=et.isCountryHasPostcode(this.shippingDetails.country_id)?"postcode":"city";this.shippingDetails[i]&&this.estimateShippingMethods(e)},700),C.$on(q,this.onShippingDetailsChanged),C.$on(R,this.afterEstimateShippingMethods),this.loading||(this.shippingMethods.length?this.afterEstimateShippingMethods():this.estimateShippingMethodsDebounced()),this.shippingDetails.pickup_point&&this.shippingDetails.pickup_point.zip?this.$nextTick(()=>{this.pickupPoint.selected=this.shippingDetails.pickup_point}):this.shippingDetails.street[1]&&String(this.shippingDetails.street[1]).startsWith("Pickup Point")&&this.$nextTick(()=>{this.pickupPoint.selected={zip:this.shippingDetails.postcode,name:this.shippingDetails.street[1].replace("Pickup Point","").replace(/"/g,""),location:this.shippingDetails.street[0]}})},destroyed(){C.$off(q,this.onShippingDetailsChanged),C.$off(R,this.afterEstimateShippingMethods)},methods:S(b({},Ve("cart",["estimateShippingMethods","saveShippingInformation"])),{afterEstimateShippingMethods(){this.$nextTick(()=>{this.shippingMethods.length===1&&(this.selectedMethodCode=ne(this.shippingMethods,[0,"code"]))})},onShippingDetailsChanged({key:e,value:i}){console.log("onShippingDetailsChanged",e,i),this.$nextTick(()=>{["customer_address_id","country_id","city","postcode"].includes(e)&&(this.pickupPoint.selected={},this.pickupPoint.items=[],this.estimateShippingMethodsDebounced(e==="customer_address_id"?i:null))})},setLoading(e){this.$store.commit("app/SET_LOADING",e)},async handleDeliveryRequest(){this.deliveryRequest.loading=!0;try{await x.post("V1/spa/contact",{data:{name:`${this.shippingDetails.firstname} ${this.shippingDetails.lastname}`,email:this.shippingDetails.email,telephone:this.shippingDetails.telephone,comment:`Issue with delivery to the following address: ${this.formattedAddress}`}}),this.deliveryRequest.isModalOpen=!0,this.deliveryRequest.isSent=!0}catch{}this.deliveryRequest.loading=!1},async handleSelectPickupPoint(e){if(this.pickupPoint.loading=!0,e.pickup_points_endpoint){this.pickupPoint.isModalOpen=!0;try{const i=await x.get(e.pickup_points_endpoint);i.status===200&&(this.pickupPoint.items=i.data)}catch{}}this.pickupPoint.loading=!1},handleChosePickupPoint(e){this.pickupPoint.isModalOpen=!1,this.pickupPoint.selected=e||{},this.pickupPoint.query="",this.$store.commit("cart/shippingDetails/update",{key:"pickup_point",value:e||{}})},handleSelectMethod(e){e.method_type!=="pickup-point"&&this.handleChosePickupPoint(null),this.selectedMethodCode=e.code}})},j={};var ye=je(ga,ve,fa,!1,va,null,null,null);function va(e){for(let i in j)this[i]=j[i]}ye.options.__file="src/pages/checkout/blocks/delivery-options.vue";var Aa=function(){return ye.exports}();export{Aa as default};
