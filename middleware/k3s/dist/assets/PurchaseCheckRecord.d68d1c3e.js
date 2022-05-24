var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,i,a)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a,l=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&o(e,i,t[i]);if(a)for(var i of a(t))r.call(t,i)&&o(e,i,t[i]);return e},m=(e,a)=>t(e,i(a));import{_ as n}from"./BaseStencil.46c3d678.js";import{_ as p}from"./BaseName.1aa32b4b.js";import{G as d,g as c,j as u,D as b,n as f,q as h,t as g,B as y,o as j,a5 as w,e as v,w as k,S as x}from"./@vue.23a4bd1a.js";import{u as U}from"./vuex.c868d4e0.js";import{_ as F}from"./index.ab904951.js";import{a as S}from"./axios.7b768d2b.js";import{d as T}from"./index.7c4fa9df.js";import{g as C,f as D}from"./filter.c2c8f0b9.js";import{s as E,g as N}from"./businessRule.60794e55.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./vue-router.91336ba9.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";/* empty css                                                             */import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";function O(e,t,i){return{form:{inline:!0,labelWidth:"100px",list:[{label:"",type:"INPUT",key:"invincible",placeholder:"请输入商品信息"},{label:"",type:"SELECT",placeholder:"请选择门店",key:"businessUuid",props:{label:"name",value:"uuid"},list:()=>t.value,config:{multiple:!0}},{label:"",type:"LINKAGETIME",keys:["createTimeStart","createTimeEnd"],design:{width:"240px"},config:{"start-placeholder":"制单开始时间","end-placeholder":"制单结束时间"},key:""}]},tableConfig:{columns:[{title:"序号",type:"index",fixed:"left",formConfig:{width:50}},{title:"商品名称/规格/单位/生产厂家",key:"",fixed:"left",formConfig:{"show-overflow-tooltip":!1,"min-width":210},render:e=>d(p,{row:e})},{title:"剂型",key:"dosageForm",width:100},{title:"商品类别",key:"category1",width:100},{title:"批号",key:"batchNumber",width:200},{title:"生产日期",key:"productionDate",width:110},{title:"有效期至",key:"expireDate",width:110},{title:"到货数量",key:"receiveNum",align:"right",width:110},{title:"验收合格数量",key:"checkNum",align:"right",width:110},{title:"验收结果",key:"checkResult",width:80},{title:"制单时间",key:"createTime",width:180},{title:"供应商名称",key:"supplierName",width:176},{title:"批准文号",key:"approvalNumber",width:224},{title:"上市许可持有人",key:"holderPermit",width:140},{title:"中药饮片产地",key:"medicineBeverage",width:130},{title:"门店",key:"businessName",width:100},{title:"验收单编号",key:"checkNo",width:150},{title:"验收人",key:"applicant",width:150}]}}}var P={name:"PurchaseCheckRecord",setup(e,t){const i=U(),o=new Date;let n=C(o,30,!0);c(null);const p=c([]),d=u({isClear:!1,loading:!1,tableData:[],deepSearchTable:O(0,p),submitForm:{"page.currentPage":1,"page.pageSize":10,createTimeStart:n[0],createTimeEnd:D(new Date),invincible:"",businessUuid:[]},columns:[]}),y=()=>{d.loading=!0;let{storeUuid:e}=i.state.common.info,t=d.submitForm,{businessUuid:o}=t,m=((e,t)=>{var i={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&r.call(e,o)&&(i[o]=e[o]);return i})(t,["businessUuid"]);o=E(o),function(e){return S.get("/gateway/chain-store/check/accept/gsp/pagelist",{params:e})}(l({businessUuid:o,storeUuid:e},m)).then((e=>{d.submitForm.currentPage=e.currentPage,d.submitForm.pageSize=e.pageSize,d.tableData=e.list;for(let t=0;t<e.list.length;t++)d.tableData[t].drugUuid=e.list[t].productUuid;d.submitForm.total=e.totalElements,d.loading=!1}))};b((async()=>{p.value=await i.dispatch("common/mechanism"),y(),N(p.value,d,d.deepSearchTable.form)})),f((async()=>{h((()=>{d.submitForm.timeStart=n[0],d.submitForm.timeEnd=D(new Date)}))}));return m(l({},g(d)),{exportExcel:async()=>{let{storeUuid:e}=i.state.common.info,t=await i.dispatch("common/mechanism"),a="";a=d.submitForm.businessUuid.length?E(d.submitForm.businessUuid):t.map((e=>e.uuid)).join(",");let s=T("/gateway/chain-store/check/accept/gsp/export",m(l({},d.submitForm),{storeUuid:e,businessUuid:a}));window.open(s,"_self")},getList:y,findList:p})}};const _={class:"supplier"},z=x(" 导出 ");var B=F(P,[["render",function(e,t,i,a,s,r){const o=y("el-button"),l=n;return j(),w("div",_,[v(l,{ref:"form","submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),columns:e.deepSearchTable.tableConfig.columns,"form-data":e.deepSearchTable.form,isClear:e.isClear,loading:e.loading,optionShow:!1,options:!0,pagination:e.submitForm,select:a.getList,"table-data":e.tableData,class:"base-stencil"},{buttons:k((()=>[v(o,{plain:"",size:"small",style:{"margin-bottom":"10px"},type:"primary",onClick:a.exportExcel},{default:k((()=>[z])),_:1},8,["onClick"])])),_:1},8,["submit-form","columns","form-data","isClear","loading","pagination","select","table-data"])])}],["__scopeId","data-v-536ccb7a"]]);export{B as default};
