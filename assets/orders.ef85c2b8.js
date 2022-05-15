var u=Object.defineProperty,p=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var o=(t,s,e)=>s in t?u(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,r=(t,s)=>{for(var e in s||(s={}))f.call(s,e)&&o(t,e,s[e]);if(i)for(var e of i(s))h.call(s,e)&&o(t,e,s[e]);return t},n=(t,s)=>p(t,_(s));import m from"./order.aa87d8f4.js";import{m as g,d as v,c as b,af as y,n as $}from"./index.bbea77ac.js";var d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("div",{staticClass:"page-title"},[t._v(t._s(t.$t("customer.orders.title")))]),e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body p-4"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",[e("b-input",{attrs:{placeholder:t.$t("customer.orders.search-by-id")},model:{value:t.filter.query,callback:function(a){t.$set(t.filter,"query",a)},expression:"filter.query"}})],1)],1),e("div",{staticClass:"column is-narrow"},[e("b-field",[e("b-select",{model:{value:t.filter.status,callback:function(a){t.$set(t.filter,"status",a)},expression:"filter.status"}},[e("option",{attrs:{value:""}},[t._v("- "+t._s(t.$t("customer.orders.status"))+" -")]),e("option",{attrs:{value:"pending"}},[t._v(" "+t._s(t.$t("customer.orders.status-pending"))+" ")]),e("option",{attrs:{value:"processing"}},[t._v(" "+t._s(t.$t("customer.orders.status-processing"))+" ")]),e("option",{attrs:{value:"complete"}},[t._v(" "+t._s(t.$t("customer.orders.status-complete"))+" ")]),e("option",{attrs:{value:"canceled"}},[t._v(" "+t._s(t.$t("customer.orders.status-canceled"))+" ")]),e("option",{attrs:{value:"closed"}},[t._v(" "+t._s(t.$t("customer.orders.status-closed"))+" ")])])],1)],1)])])]),e("b-table",{attrs:{data:t.data,loading:t.loading,total:t.total,"per-page":t.perPage,"default-sort":[t.sortField,t.sortOrder],paginated:t.total>t.perPage,"backend-pagination":"",hoverable:"","backend-sorting":""},on:{"page-change":t.onPageChange,sort:t.onSort},scopedSlots:t._u([{key:"detail",fn:function(a){return[e("article",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[e("strong",[t._v(" "+t._s(a.row.shipping_address.firstname)+" "+t._s(a.row.shipping_address.lastname)+" ")]),e("small",[t._v(t._s(a.row.shipping_address.email))])]),e("p",[t._v(" "+t._s(t.$t("customer.address-book.shipping"))+": "+t._s(t._f("price")(a.row.shipping_amount))+" ( "+t._s(a.row.shipping_description)+" ) ")])])])])]}},{key:"empty",fn:function(){return[e("section",{staticClass:"section"},[e("div",{staticClass:"content has-text-grey-light has-text-centered"},[e("p",[t._v(t._s(t.$t("customer.orders.empty")))])])])]},proxy:!0}])},[e("b-table-column",{attrs:{label:t.$t("common.order-id",[""]),field:"entity_id",width:"40"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b",[t._v(t._s(a.row.increment_id))])]}}])}),e("b-table-column",{attrs:{label:t.$t("common.date"),field:"created_at"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(t._f("formatDate")(a.row.created_at))+" ")]}}])}),e("b-table-column",{attrs:{label:t.$t("common.ship-to"),field:"ship_to"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.shipping_address.firstname)+" "+t._s(a.row.shipping_address.lastname)+" ")]}}])}),e("b-table-column",{attrs:{label:t.$t("sales.grand-total"),centered:"",field:"grand_total"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(t._f("price")(a.row.grand_total))+" ")]}}])}),e("b-table-column",{attrs:{label:t.$t("common.status"),centered:"",field:"status"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"tag",class:t.statusStyle(a.row.status)},[t._v(" "+t._s(a.row.status)+" ")])]}}])}),e("b-table-column",{attrs:{centered:"",label:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{ref:`pdfLink${a.row.entity_id}`,attrs:{download:`order${a.row.increment_id}.pdf`}}),e("a",{on:{click:function(){return t.printOrder(a.row.entity_id)}}},[e("b-icon",{attrs:{icon:"printer",type:"is-dark"}})],1),t._v(" \xA0 "),e("a",{on:{click:function(){return t.handleShowOrder(a.row)}}},[e("b-icon",{attrs:{icon:"eye-outline",type:"is-dark"}})],1)]}}])})],1)],1)},w=[];d._withStripped=!0;const k={metaInfo(){return{title:this.$t("customer.orders.title")}},data(){return{loading:!1,page:1,perPage:10,total:0,data:[],filter:{query:"",status:""},sortField:"entity_id",sortOrder:"DESC"}},computed:r({},g({user:"auth/user"})),watch:{filter:{handler(){this.page=1,this.refreshDebounced()},deep:!0}},mounted(){this.loadAsyncData()},created(){this.refreshDebounced=v(()=>this.loadAsyncData(),500)},methods:n(r({},b({getOrders:"auth/getOrders"})),{async printOrder(t){const s=this.$refs[`pdfLink${t}`];if(!!s){if(!s.href){this.$store.commit("app/SET_LOADING",!0);const e=await y.post(`V1/orders/${t}/print/invoices`);this.$store.commit("app/SET_LOADING",!1),s.href="data:application/octet-stream;base64,"+escape(e.data)}s.click()}},loadAsyncData(){this.loading=!0;const t=[];this.filter.query&&t.push({field:"increment_id",value:this.filter.query}),this.filter.status&&t.push({field:"status",value:this.filter.status}),this.getOrders({pageSize:this.perPage,currentPage:this.page,sortOrders:[{field:this.sortField,direction:this.sortOrder}],filters:t}).then(s=>{this.loading=!1,this.data=s.data.items,this.total=s.data.total_count}).catch(s=>{throw this.data=[],this.total=0,this.loading=!1,s})},statusStyle(t){switch(t){case"pending":return"is-light";case"processing":case"processing_paid":return"is-info";case"complete":return"is-success";case"canceled":case"closed":case"holded":case"expired":return"is-danger"}},onPageChange(t){this.page=t,this.loadAsyncData()},onSort(t,s){this.sortField=t,this.sortOrder=s,this.loadAsyncData()},handleShowOrder(t){this.$buefy.modal.open({parent:this,component:m,hasModalCard:!0,props:{order:t},events:{update:()=>{}}})}})},l={};var c=$(k,d,w,!1,S,"e2a1bb3c",null,null);function S(t){for(let s in l)this[s]=l[s]}c.options.__file="src/pages/customer/orders.vue";var x=function(){return c.exports}();export{x as default};
