var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,l=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&r(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&r(e,a,t[a]);return e},n=(e,s)=>t(e,a(s));import{_ as m}from"./BaseStencil.46c3d678.js";import{u as d}from"./vuex.c868d4e0.js";import{_ as p}from"./BaseName.1aa32b4b.js";import{G as u,g as c,j as b,D as f,t as j,B as h,o as y,a5 as g,e as v,w,S as x}from"./@vue.23a4bd1a.js";import{g as U,f as k}from"./filter.c2c8f0b9.js";import{_ as D}from"./index.ab904951.js";import{a as T}from"./axios.7b768d2b.js";import{d as C}from"./index.7c4fa9df.js";import{s as F,g as S}from"./businessRule.60794e55.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./vue-router.91336ba9.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";/* empty css                                                             */import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";function O(e,t,a){return{form:{inline:!0,labelWidth:"100px",list:[{placeholder:"请输入商品信息",type:"INPUT",key:"productInfo"},{placeholder:"请选择门店",type:"SELECT",props:{label:"name",value:"uuid"},config:{multiple:!0},list:()=>t.value,key:"businessUuid"},{type:"LINKAGETIME",keys:["startTime","endTime"],design:{width:"220px"},config:{"start-placeholder":"开始时间","end-placeholder":"结束时间"}}]},tableConfig:{columns:[{title:"序号",type:"index",fixed:"left",formConfig:{width:50}},{title:"拆零起始日期",fixed:"left",key:"deleaveDate",width:110},{title:"商品名称/规格/单位/生产厂家",key:"productName",fixed:"left",formConfig:{"show-overflow-tooltip":!1,"min-width":210},render:e=>u(p,{row:e})},{title:"剂型",key:"dosageForm",width:90},{title:"批号",key:"batchNumber",width:178},{title:"生产日期",key:"productionDate",width:110},{title:"有效期至",key:"expireDate",width:110},{title:"销售数量",key:"saleNum",width:90,align:"right"},{title:"拆分人",key:"deleavePeople",width:80},{title:"复核人",key:"reviewer",width:80},{title:"门店",key:"business",width:130},{title:"销售单号",key:"orderNo",width:160}]}}}var N={name:"DrugSell",setup(e,t){c(null);const a=d(),r=new Date,m=c([]);let p=U(r,30,!0);const u=b({isClear:!1,loading:!0,tableData:[],excelUrl:"",deepSearchTable:O(0,m),submitForm:{"page.currentPage":1,"page.pageSize":10,startTime:p[0],endTime:k(new Date),productName:"",businessUuid:[],productInfo:""},columns:[]});f((async()=>{await h(),y()}));const h=async()=>{let{storeUuid:e}=a.state.common.info;u.submitForm.storeUuid=e,m.value=await a.dispatch("common/mechanism"),S(m.value,u,u.deepSearchTable.form)},y=async()=>{u.loading=!1;let{storeUuid:e}=a.state.common.info,t=u.submitForm,{businessUuid:r}=t,n=((e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a})(t,["businessUuid"]);r=F(r),function(e){return T.get("/gateway/chain-store/sale/saleDeleaveRecord",{params:e})}(l({businessUuid:r,storeUuid:e},n)).then((e=>{u.submitForm.total=e.totalCount,e.list.forEach((e=>{e.name=e.productName})),u.tableData=e.list})).catch((e=>{}))};return n(l({},j(u)),{getTableData:y,exportExcel:async()=>{let{storeUuid:e}=a.state.common.info,t=await a.dispatch("common/mechanism"),s="";s=u.submitForm.businessUuid.length?F(u.submitForm.businessUuid):t.map((e=>e.uuid)).join(",");let i=C("/gateway/chain-store/sale/exportSaleDeleaveRecord",n(l({},u.submitForm),{storeUuid:e,businessUuid:s}));window.open(i,"_self")}})}};const _={class:"supplier"},E=x(" 导出 ");var P=D(N,[["render",function(e,t,a,s,i,o){const r=h("el-button"),l=m;return y(),g("div",_,[v(l,{"form-data":e.deepSearchTable.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.deepSearchTable.tableConfig.columns,pagination:e.submitForm,options:!0,optionShow:!1,select:s.getTableData,loading:e.loading,ref:"form",isClear:e.isClear},{buttons:w((()=>[v(r,{class:"retail-details-btn",plain:"",type:"primary",size:"small",onClick:s.exportExcel},{default:w((()=>[E])),_:1},8,["onClick"])])),_:1},8,["form-data","submit-form","table-data","columns","pagination","select","loading","isClear"])])}],["__scopeId","data-v-103e7685"]]);export{P as default};