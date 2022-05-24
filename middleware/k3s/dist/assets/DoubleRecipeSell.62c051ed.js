var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,l=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(i)for(var a of i(t))r.call(t,a)&&o(e,a,t[a]);return e},n=(e,i)=>t(e,a(i));import{_ as m}from"./BaseStencil.46c3d678.js";import{u as d}from"./vuex.c868d4e0.js";import{_ as p}from"./BaseName.1aa32b4b.js";import{G as c,g as u,j as b,D as f,t as h,B as y,o as j,a5 as g,e as w,w as v,S as k}from"./@vue.23a4bd1a.js";import{g as x,f as U}from"./filter.c2c8f0b9.js";import{_ as T}from"./index.ab904951.js";import{a as C}from"./axios.7b768d2b.js";import{d as F}from"./index.7c4fa9df.js";import{s as S,g as D}from"./businessRule.60794e55.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./vue-router.91336ba9.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";/* empty css                                                             */import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";function N(e,t,a){return{form:{inline:!0,labelWidth:"100px",list:[{placeholder:"请输入商品信息",type:"INPUT",key:"productName"},{placeholder:"请选择门店",type:"SELECT",config:{multiple:!0},props:{label:"name",value:"uuid"},list:()=>t.value,key:"businessUuid"},{type:"LINKAGETIME",keys:["startTime","endTime"],design:{width:"220px"},config:{"start-placeholder":"开始时间","end-placeholder":"结束时间"}}]},tableConfig:{columns:[{title:"序号",type:"index",fixed:"left",formConfig:{width:50}},{title:"门店",key:"business",formConfig:{"min-width":150}},{title:"商品名称/规格/单位/生产厂家",key:"productName",fixed:"left",formConfig:{"show-overflow-tooltip":!1,"min-width":210},render:e=>c(p,{row:e})},{title:"剂型",key:"dosageForm",width:80},{title:"数量",key:"num",align:"right",width:70},{title:"批号",key:"batchNum",width:178},{title:"有效期至",key:"expireDate",width:110},{title:"顾客姓名",key:"patientName",width:78},{title:"性别",key:"sex",width:60},{title:"年龄",key:"age",width:60},{title:"身份证",key:"cardNo",width:60},{title:"地址",key:"address",width:180},{title:"病情主述",key:"illnessState",width:160},{title:"处方来源",key:"medicalEstablishment",width:90},{title:"配药人",key:"dispenser",width:178},{title:"复核人",key:"reviewer",width:160},{title:"登记日期",key:"createTime",width:180}]}}}var O={name:"DoubleRecipeSell",setup(e,t){const a=d();u(null);const o=u([]),m=new Date;let p=x(m,30,!0);const c=b({isClear:!1,loading:!0,tableData:[],excelUrl:"",deepSearchTable:N(0,o),submitForm:{"page.currentPage":1,"page.pageSize":10,productName:"",businessUuid:[],storeUuid:"",startTime:p[0],endTime:U(new Date)},columns:[]});f((async()=>{await y(),j()}));const y=async()=>{let{storeUuid:e}=a.state.common.info;c.submitForm.storeUuid=e,o.value=await a.dispatch("common/mechanism"),D(o.value,c,c.deepSearchTable.form)},j=async()=>{c.loading=!1;let{storeUuid:e}=a.state.common.info,t=c.submitForm,{businessUuid:o}=t,n=((e,t)=>{var a={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&r.call(e,o)&&(a[o]=e[o]);return a})(t,["businessUuid"]);o=S(o),function(e){return C.get("/gateway/chain-store/prescription/sale/dualtrack",{params:e})}(l({businessUuid:o,storeUuid:e},n)).then((e=>{c.submitForm.total=e.totalCount,e.list.forEach((e=>{e.name=e.productName})),c.tableData=e.list})).catch((e=>{}))};return n(l({},h(c)),{getTableData:j,exportExcel:async()=>{let{storeUuid:e}=a.state.common.info,t=await a.dispatch("common/mechanism"),i="";i=c.submitForm.businessUuid.length?S(c.submitForm.businessUuid):t.map((e=>e.uuid)).join(",");let s=F("/gateway/chain-store/prescription/sale/export/dualtrack",n(l({},c.submitForm),{storeUuid:e,businessUuid:i}));window.open(s,"_self")}})}};const _={class:"supplier"},E=k(" 导出 ");var P=T(O,[["render",function(e,t,a,i,s,r){const o=y("el-button"),l=m;return j(),g("div",_,[w(l,{"form-data":e.deepSearchTable.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.deepSearchTable.tableConfig.columns,pagination:e.submitForm,options:!0,optionShow:!1,select:i.getTableData,loading:e.loading,ref:"form",isClear:e.isClear},{buttons:v((()=>[w(o,{class:"retail-details-btn",plain:"",type:"primary",size:"small",onClick:i.exportExcel},{default:v((()=>[E])),_:1},8,["onClick"])])),_:1},8,["form-data","submit-form","table-data","columns","pagination","select","loading","isClear"])])}],["__scopeId","data-v-0a0ed17d"]]);export{P as default};
