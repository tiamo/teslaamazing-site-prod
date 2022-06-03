var V=Object.defineProperty,A=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var d=(e,s,t)=>s in e?V(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,l=(e,s)=>{for(var t in s||(s={}))q.call(s,t)&&d(e,t,s[t]);if(c)for(var t of c(s))x.call(s,t)&&d(e,t,s[t]);return e},u=(e,s)=>A(e,R(s));import{x as I,y as N,n as v,f as a,a as O,v as E}from"./index.2e7b3162.js";import{P as T,a as B}from"./PhoneInput.80322028.js";import{A as h}from"./ascii-folder.6927e8d2.js";var F=I,z={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},G=F(z),L=G,j=N,D=L,C=/&(?:amp|lt|gt|quot|#39);/g,H=RegExp(C.source);function M(e){return e=j(e),e&&H.test(e)?e.replace(C,D):e}var K=M;let m=!!window.google,b,$;const p=new Promise((e,s)=>{b=e,$=s});function U(e=[]){if(m)return p;const s="AIzaSyCjCzrbR7dokzA2tzXVkpXV191SVamaIto",t="gmapsCallback";m=!0,window[t]=()=>b(window.google);const o=document.createElement("script");return o.async=!0,o.defer=!0,o.src=`https://maps.googleapis.com/maps/api/js?key=${s}&callback=${t}&language=en&libraries=${e.join(",")}`,o.onerror=$,document.querySelector("head").appendChild(o),p}var P=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("b-input",{ref:"autocomplete",class:e.className,attrs:{id:e.id,placeholder:e.placeholder,type:"text"},on:{focus:e.onFocus,blur:e.onBlur,change:e.onChange,keypress:e.onKeyPress,keyup:e.onKeyUp},model:{value:e.computedValue,callback:function(o){e.computedValue=o},expression:"computedValue"}})},X=[];P._withStripped=!0;const f={premise:"short_name",subpremise:"short_name",street_number:"short_name",route:"long_name",locality:"long_name",sublocality_level_4:"long_name",administrative_area_level_1:"short_name",administrative_area_level_2:"long_name",country:"short_name",postal_code:"short_name",postal_town:"long_name"},Y=["locality","postal_town","administrative_area_level_3"],J=["locality","sublocality","postal_code","country","administrative_area_level_1","administrative_area_level_2"],Q={name:"GoogleAutocomplete",props:{value:[Number,String],id:{type:String,required:!0},className:{type:String,default:""},placeholder:{type:String,default:"Start typing"},types:{type:String,default:"address"},country:{type:[String,Array],default:null},enableGeolocation:{type:Boolean,default:!1},geolocationOptions:{type:Object,default:null}},data(){return{autocomplete:null,newValue:this.value,geolocation:{geocoder:null,loc:null,position:null}}},computed:{computedValue:{get(){return this.newValue},set(e){this.newValue=e,this.$emit("input",e)}}},watch:{country(){this.autocomplete&&this.autocomplete.setComponentRestrictions({country:this.country===null?[]:this.country})},value(e){this.newValue=e}},async mounted(){await U(["places"]);const e={};this.types&&(e.types=[this.types]),this.country&&(e.componentRestrictions={country:this.country}),window.google&&(this.autocomplete=new window.google.maps.places.Autocomplete(document.getElementById(this.id),e),this.autocomplete.addListener("place_changed",this.onPlaceChanged),window.gm_authFailure=()=>{document.getElementById(this.id).disabled=!1,document.getElementById(this.id).style=null})},methods:{onPlaceChanged(){let e=this.autocomplete.getPlace();if(!e.geometry){this.$emit("no-results-found",e,this.id);return}e.address_components!==void 0&&(this.computedValue=document.getElementById(this.id).value,this.$emit("placechanged",this.formatResult(e),e,this.id),this.onChange())},onFocus(e){this.biasAutocompleteLocation(),this.$emit("focus",e)},onBlur(){this.$emit("blur")},onChange(){this.$emit("change",this.computedValue)},onKeyPress(e){this.$emit("keypress",e)},onKeyUp(e){this.$emit("keyup",e)},clear(){this.computedValue=""},focus(){this.$refs.autocomplete.focus()},update(e){this.computedValue=e},updateCoordinates(e){!e&&!(e.lat||e.lng)||(this.geolocation.geocoder||(this.geolocation.geocoder=new google.maps.Geocoder),this.geolocation.geocoder.geocode({location:e},(s,t)=>{t==="OK"?(s=this.filterGeocodeResultTypes(s),s[0]?(this.$emit("placechanged",this.formatResult(s[0]),s[0],this.id),this.update(s[0].formatted_address)):this.$emit("error","no result for provided coordinates")):this.$emit("error","error getting address from coords")}))},geolocate(){this.updateGeolocation((e,s)=>{this.updateCoordinates(e,s)})},updateGeolocation(e=null){if(navigator.geolocation){let s={};this.geolocationOptions&&Object.assign(s,this.geolocationOptions),navigator.geolocation.getCurrentPosition(t=>{let o={lat:t.coords.latitude,lng:t.coords.longitude};this.geolocation.loc=o,this.geolocation.position=t,e&&e(o,t)},t=>{this.$emit("error","Cannot get Coordinates from navigator",t)},s)}},biasAutocompleteLocation(){this.enableGeolocation&&this.updateGeolocation((e,s)=>{let t=new google.maps.Circle({center:e,radius:s.coords.accuracy});this.autocomplete.setBounds(t.getBounds())})},formatResult(e){let s={};for(let t=0;t<e.address_components.length;t++){let o=e.address_components[t].types[0];f[o]&&(s[o]=h.fold(e.address_components[t][f[o]]))}return s.latitude=e.geometry.location.lat(),s.longitude=e.geometry.location.lng(),s.street_address=h.fold(e.adr_address.match(/<span[^>]*>(.*?)<\/span>/)[1]),s},filterGeocodeResultTypes(e){if(!e||!this.types)return e;let s=[],t=[this.types];t.includes("(cities)")&&(t=t.concat(Y)),t.includes("(regions)")&&(t=t.concat(J));for(let o of e)for(let i of o.types)if(t.includes(i)){s.push(o);break}return s}}},g={};var S=v(Q,P,X,!1,W,null,null,null);function W(e){for(let s in g)this[s]=g[s]}S.options.__file="src/components/GoogleAutocomplete.vue";var Z=function(){return S.exports}(),w=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"checkout-fieldset",class:e.rootClasses},[t("div",{staticClass:"fieldset-head"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("a",{staticClass:"fieldset-title"},[t("svg-icon",{attrs:{icon:e.isValid?"check-circle":"circle"}}),t("span",[e._v(e._s(e.$t("checkout.shipping-details.delivery-address.title")))])],1)])])]),t("b-message",{attrs:{type:"is-info","has-icon":"",active:e.isRemoteArea}},[e._v(" "+e._s(e.$t("checkout.shipping-details.remote-area-notification"))+" ")]),t("div",{staticClass:"fieldset-body fieldset-collapse"},[t("ValidationObserver",{ref:"observer",attrs:{slim:""}},[t("ValidationProvider",{ref:"country_id",attrs:{name:e.$t("customer.common.country"),rules:"required",debounce:200,slim:""},scopedSlots:e._u([{key:"default",fn:function(o){var i=o.errors,n=o.valid;return[t("b-field",{class:{"is-required":!0,"is-filled":e.country_id,"has-error":i[0]},attrs:{type:{"is-danger":i[0],"is-success":e.country_id&&n},message:i,label:e.$t("customer.common.country")+":",horizontal:"","label-for":"country_id"}},[t("b-autocomplete",{attrs:{id:"country_id","keep-first":!0,"open-on-focus":!0,data:e.filteredCountries,placeholder:e.$t("customer.common.country-placeholder"),name:"country_id",field:"fullName"},on:{select:function(r){return e.country_id=r?r.code:null},focus:e.onCountryFocus},scopedSlots:e._u([{key:"default",fn:function(r){return[t("div",{staticClass:"media"},[t("div",{staticClass:"media-left"},[t("div",{staticClass:"iti-flag",class:String(r.option.code).toLowerCase()})]),t("div",{staticClass:"media-content"},[e._v(e._s(r.option.fullName))])])]}}],null,!0),model:{value:e.country,callback:function(r){e.country=r},expression:"country"}})],1)]}}])}),t("ValidationProvider",{ref:"street_0",attrs:{name:e.$t("customer.common.street"),rules:"required",debounce:200,slim:""},scopedSlots:e._u([{key:"default",fn:function(o){var i=o.errors,n=o.valid;return[t("b-field",{class:{"is-required":!0,"is-filled":e.street_0,"has-error":i[0]},attrs:{type:{"is-danger":i[0],"is-success":n},message:i,label:e.$t("customer.common.street")+" 1:",horizontal:"","label-for":"street_0"}},[t("google-autocomplete",{ref:"street_address",staticClass:"input",attrs:{id:"street_0",country:e.country_id,placeholder:e.$t("common.address-placeholder"),name:"street_0"},on:{placechanged:e.onPlaceChanged,focus:e.onStreetAddressFocus,blur:e.onStreetAddressBlur},model:{value:e.street_0,callback:function(r){e.street_0=r},expression:"street_0"}})],1)]}}])}),e.isPlaceChanged?[t("ValidationProvider",{ref:"street_1",attrs:{name:e.$t("customer.common.street")+" 2",slim:""},scopedSlots:e._u([{key:"default",fn:function(o){var i=o.errors,n=o.valid;return[t("b-field",{class:{"is-required":!1,"is-filled":e.street_1,"has-error":i[0]},attrs:{type:{"is-danger":i[0],"is-success":e.street_1&&n},message:i,label:e.$t("customer.common.street")+" 2:",horizontal:"","label-for":"street_1"}},[t("b-input",{ref:"apartment",attrs:{id:"street_1",placeholder:e.$t("customer.common.apartment-placeholder"),name:"street_1"},model:{value:e.street_1,callback:function(r){e.street_1=typeof r=="string"?r.trim():r},expression:"street_1"}})],1)]}}],null,!1,928943063)}),t("ValidationProvider",{directives:[{name:"show",rawName:"v-show",value:e.regions.length,expression:"regions.length"}],ref:"region_id",attrs:{name:e.$t("customer.common.region"),rules:{required:e.regions.length>0},slim:""},scopedSlots:e._u([{key:"default",fn:function(o){var i=o.errors,n=o.valid;return[t("b-field",{class:{"is-required":!0,"is-filled":e.region_id,"has-error":i[0]},attrs:{type:{"is-danger":i[0],"is-success":n},message:i,label:e.$t("customer.common.region")+":",horizontal:"","label-for":"region_id"}},[t("b-select",{staticClass:"is-custom",attrs:{name:"region_id",loading:e.regionsLoading,placeholder:e.$t("customer.common.region-placeholder")},model:{value:e.regionIdComputed,callback:function(r){e.regionIdComputed=r},expression:"regionIdComputed"}},e._l(e.regions,function(r){return t("option",{key:r.id,domProps:{value:r.id}},[e._v(" "+e._s(r.name)+" ")])}),0)],1)]}}],null,!1,78097841)}),t("b-field",{staticClass:"is-marginless is-grouped"},[t("ValidationProvider",{ref:"city",attrs:{name:e.$t("customer.common.city"),rules:"required|latin",slim:""},scopedSlots:e._u([{key:"default",fn:function(o){var i=o.errors,n=o.valid;return[t("b-field",{class:{"is-required":!0,"is-filled":e.city,"has-error":i[0]},attrs:{type:{"is-danger":i[0],"is-success":n},message:i,label:e.$t("customer.common.city")+":",horizontal:"",expanded:"","label-for":"city"}},[t("b-input",{attrs:{id:"city",name:"city"},model:{value:e.city,callback:function(r){e.city=typeof r=="string"?r.trim():r},expression:"city"}})],1)]}}],null,!1,1714160924)}),t("ValidationProvider",{ref:"postcode",attrs:{name:e.$t("customer.common.postcode"),rules:{required:e.isPostCodeRequired},slim:""},scopedSlots:e._u([{key:"default",fn:function(o){var i=o.errors,n=o.valid;return[t("b-field",{class:{"is-required":e.isPostCodeRequired,"is-filled":e.postcode,"has-error":i[0]},attrs:{type:{"is-danger":i[0],"is-success":n},message:i,label:e.$t("customer.common.postcode")+":",horizontal:"",expanded:"","label-for":"postcode"}},[t("b-input",{attrs:{id:"postcode",name:"postcode"},model:{value:e.postcode,callback:function(r){e.postcode=typeof r=="string"?r.trim():r},expression:"postcode"}})],1)]}}],null,!1,1962758412)})],1),t("ValidationProvider",{ref:"phone",attrs:{name:e.$t("customer.common.phone"),rules:"required",debounce:200,slim:""},scopedSlots:e._u([{key:"default",fn:function(o){var i=o.errors,n=o.valid;return[t("b-field",{class:{"is-required":!0,"is-filled":e.telephone,"has-error":i[0]},attrs:{type:{"is-danger":i[0],"is-success":n},message:i,label:e.$t("customer.common.phone")+":",horizontal:"","label-for":"telephone"}},[t("phone-input",{staticClass:"control",attrs:{value:e.nationalPhone,country:e.country_id,"input-props":{id:"telephone"},name:"telephone"},on:{input:e.onPhoneInput}})],1)]}}],null,!1,3397587664)})]:e._e()],2)],1)],1)},ee=[];w._withStripped=!0;const _=a.getCountriesArray(),te=["CA","RU","BR","TR","AR"],se={components:{PhoneInput:T,GoogleAutocomplete:Z},props:{isActive:{type:Boolean,default:!1},isValid:{type:Boolean,default:!1}},data(){return{isDirty:!1,isPlaceChanged:!0,isStreetAddressFocused:!1,isPhoneFocused:!1,overlayTopOffset:0,countryName:"",regionName:"43",nationalPhone:"",isPhoneValid:!1,regions:[],regionsLoading:!1,test:null}},computed:u(l(l({},O({geoCountry:e=>e.app.geoCountry})),E("cart/shippingDetails",["country_id","region_id","region","city","street","postcode","telephone"])),{street_0:{get(){return this.street[0]},set(e){this.street=[e,""]}},street_1:{get(){return this.street[1]},set(e){this.street=[...this.street.slice(0,1),e]}},regionIdComputed:{get:function(){return this.region_id||null},set:function(e){this.region_id=e}},isPostCodeRequired(){return a.isCountryHasPostcode(this.country_id)},isRemoteArea(){return te.includes(this.country_id)},filteredCountries(){return this.countryName?_.filter(e=>e.fullName.toLowerCase().indexOf(this.countryName.toLowerCase())>=0):_},filteredRegions(){return this.regionName?this.regions.filter(e=>e.name.toLowerCase().indexOf(this.regionName.toLowerCase())>=0):this.regions},country:{get(){let e;return this.country_id&&(e=a.getCountryName(this.country_id,!0)),e||this.countryName},set(e){this.countryName=e}},rootClasses(){return{"is-filled":this.isValid,"is-active":this.isActive||this.isDirty}}}),watch:{telephone(e){this.nationalPhone||(this.nationalPhone=e)},isValid:{immediate:!0,handler(e){this.$emit("input",e)}},country_id:{immediate:!0,async handler(e,s){if(s&&(this.clear(),requestAnimationFrame(()=>{this.$refs.observer.reset(),this.telephone&&this.$refs.phone.validate()})),this.regions=[],e){if(!B.includes(e))return;this.regionsLoading=!0;try{const{data:t}=await a.loadCountry(e);t.available_regions&&(this.regions=t.available_regions)}catch{}this.regionsLoading=!1}}}},mounted(){!this.nationalPhone&&this.telephone&&(this.nationalPhone=this.telephone),this.country_id||setTimeout(()=>{this.country_id=this.geoCountry},1e3),this.street_0&&(this.isPlaceChanged=!0),this.country_id&&this.$refs.country_id.validate(),this.region_id&&this.$refs.region_id.validate(),this.street_0&&this.$refs.street_0.validate(),this.street_1&&this.$refs.street_1.validate(),this.city&&this.$refs.city.validate(),this.postcode&&this.$refs.postcode.validate()},methods:{clear(){this.region_id=null,this.street_0=null,this.street_1=null,this.city=null,this.postcode=null,this.$store.commit("cart/setShippingMethod",null),this.$store.commit("cart/setShippingMethods",[])},onCountryFocus(e){e.target.select()},onPhoneInput(e,{phone:s,possible:t,countryCallingCode:o}){s?(this.isPhoneValid=!!t,this.telephone=`+${o}${s}`,this.nationalPhone=s):(this.telephone=e,this.nationalPhone="",this.isPhoneValid=!1),this.telephone&&!this.isPhoneValid?this.$refs.phone.setErrors([this.$t("checkout.shipping-details.delivery-address.phone-invalid")]):this.$refs.phone.validate(this.telephone)},onStreetAddressFocus(e){this.calcTopOffset(e.target),this.isStreetAddressFocused=!0},onStreetAddressBlur(){this.isStreetAddressFocused=!1},onPlaceChanged(e){const s=this.regions.find(t=>{if(t.code===e.administrative_area_level_1||t.name===e.administrative_area_level_1)return!0});s?this.region_id=s.id:this.region=e.administrative_area_level_1,e.street_address?this.street_0=K(e.street_address):this.street_0=`${e.route} ${e.street_number||""}`,this.$refs.street_address.update(this.street_0),this.city=e.locality||e.postal_town,this.postcode=e.postal_code,this.isPlaceChanged=!0,this.$nextTick(()=>{this.$refs.apartment&&this.$refs.apartment.focus(),this.$refs.city.validate(),this.region_id&&this.$refs.region_id.validate(),this.postcode&&this.$refs.postcode.validate()})},calcTopOffset(e){const s=e.getBoundingClientRect();s.top<200?(window.scrollTo(0,300),this.overlayTopOffset=350):this.overlayTopOffset=s.top}}},y={};var k=v(se,w,ee,!1,oe,"84754c82",null,null);function oe(e){for(let s in y)this[s]=y[s]}k.options.__file="src/pages/checkout/blocks/delivery-address.vue";var le=function(){return k.exports}();export{le as default};