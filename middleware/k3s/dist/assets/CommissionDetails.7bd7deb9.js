var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,m=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&r(e,i,t[i]);if(s)for(var i of s(t))o.call(t,i)&&r(e,i,t[i]);return e};import{_ as n}from"./BaseStencil.46c3d678.js";import{_ as l}from"./BaseName.1aa32b4b.js";import{G as p,e as d,g as c,j as u,D as b,t as f,L as g,o as j,a5 as y,J as h}from"./@vue.23a4bd1a.js";import{_ as v}from"./index.ab904951.js";import{a as w}from"./axios.7b768d2b.js";import{b as T}from"./vue-router.91336ba9.js";import{d as D}from"./index.6efc7880.js";import{g as C,f as k}from"./filter.c2c8f0b9.js";import{s as x}from"./businessRule.60794e55.js";import{u as O}from"./vuex.c868d4e0.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";/* empty css                                                             */import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";const P=["name","specification","unit","manufacturer"];function F(e,t,i,s){return{form:{inline:!0,labelWidth:"100px",list:[{type:"LINKAGETIME",design:{width:"240px"},keys:["startTime","endTime"],key:"createTime",config:{"start-placeholder":"制单开始时间","end-placeholder":"制单结束时间"}},{label:"",type:"SELECT",placeholder:"门店",key:"businessUuid",props:{label:"name",value:"uuid"},list:()=>i.value}]},tableConfig:{columns:[{type:"index",title:"序号",formConfig:{width:50},fixed:"left"},{title:"商品编号",key:"productCode",width:135},{title:"商品名称/规格/单位/生产厂家",key:"name",width:256,formConfig:{"show-overflow-tooltip":!1},render:e=>(e.name=e.productName,p(l,{row:e,list:P}))},{title:"销售单号",key:"orderNo"},{title:"提成金额",key:"commissionAmount",width:124,align:"right"},{title:"销售金额",key:"sellAmount",width:124,align:"right"},{title:"销售数量",key:"sellNumber",width:124,align:"right"},{title:"提成方式",key:"commissionType",width:160,render:e=>d("div",null,[e.commissionType?["","按固定额度","按销售金额"][e.commissionType]:"-"])},{title:"提成比例",key:"commissionProportion",width:180,align:"right",render:e=>{let t="";return t=1===e.commissionType?e.commissionProportion+"元/件":100*e.commissionProportion+"%",d("div",null,[t])}},{title:"结算时间",key:"finishTime",width:180}]}}}const S={class:"commission-details"};var N=v({name:"CommissionDetails",setup(e,r){const n=O(),l=c([]),p=new Date;let d=C(p,30,!0);const g=c(null),{dict:j}=n.state.common;T();const y=c([]),h=u({isClear:!1,dict:j,otherData:{},tableData:[],loading:!1,deepSearchTable:F(0,0,l),submitForm:{"page.currentPage":1,"page.pageSize":10,startTime:d[0],endTime:k(new Date),businessUuid:[]}});b((()=>{v()}));const v=async()=>{const e=await D();y.value=e,l.value=await n.dispatch("common/mechanism"),e&&(h.submitForm.businessUuid=l.value[0].uuid)};return P=m({},f(h)),t(P,i({getCommissionDetailData:async()=>{h.loading=!0;try{let e=h.submitForm,{businessUuid:t}=e,i=((e,t)=>{var i={};for(var r in e)a.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&o.call(e,r)&&(i[r]=e[r]);return i})(e,["businessUuid"]);t=x(t);let r=m({businessUuid:t},i);const n=await function(e){return w.get("/gateway/businesshall-server/saler/commission/detail/page",{params:e})}(r);h.submitForm.pageNumber=n.currentPage,h.tableData=n.list,h.submitForm.total=n.totalElements,h.loading=!1}catch(e){return h.loading=!1,e}},getSupplierListData:v,supplierList:y,form:g}));var P}},[["render",function(e,t,i,s,a,o){const r=n,m=g("loading");return j(),y("div",S,[h(d(r,{"form-data":e.deepSearchTable.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.deepSearchTable.tableConfig.columns,pagination:e.submitForm,draggable:!1,options:!0,"option-show":!1,select:s.getCommissionDetailData,ref:"form",isClear:e.isClear},null,8,["form-data","submit-form","table-data","columns","pagination","select","isClear"]),[[m,e.loading]])])}],["__scopeId","data-v-a24ed296"]]);export{N as default};