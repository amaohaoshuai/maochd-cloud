var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,i,a)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a;import{_ as o}from"./BaseStencil.46c3d678.js";import{_ as m}from"./BaseName.1aa32b4b.js";import{G as n,e as d,g as p,j as c,D as u,t as b,B as h,L as g,o as f,a5 as y,J as j,w,a6 as v,S as k}from"./@vue.23a4bd1a.js";import{s as x,_ as P}from"./index.ab904951.js";import{u as D}from"./vue-router.91336ba9.js";import{g as F}from"./index.1eb722f1.js";import{b as U}from"./RetailReport.1533bc91.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./vuex.c868d4e0.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";/* empty css                                                             */import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./axios.7b768d2b.js";import"./default-passive-events.74004992.js";const N=["name","specification","unit","manufacturer"];function S(e,t,i){return{form:{inline:!0,labelWidth:"100px",list:[{label:"商品名称",type:"INPUT",key:"product",placeholder:"商品编码/条形码/品名/助记码"},{label:"销售员",type:"INPUT",key:"sell"},{label:"门店",type:"SELECT",config:{multiple:!0},list:()=>i.value,props:{label:"name",value:"uuid"},key:"businessUuid"}]},tableConfig:{columns:[{type:"index",title:"序号",width:52,fixed:"left"},{title:"门店",key:"business",formConfig:{"min-width":200}},{title:"销售单号",key:"orderNo",width:180},{title:"商品编码",key:"productCode",width:124},{title:"商品名称/规格/单位/生产厂家",key:"name",width:256,formConfig:{"show-overflow-tooltip":!1},render:e=>n(m,{row:e,list:N})},{title:"批号",key:"batchNumber",width:135},{title:"有效期至",key:"expireDate",width:110},{title:"销售数量",key:"num",width:110,align:"right",render:e=>d("div",null,[e.overallOrDeleave?e.num+e.unit:e.num+e.splitUnit])},{title:"零售价(元)",key:"retailPrice",width:110,align:"right",render:e=>d("div",null,[e.overallOrDeleave?e.retailPrice:e.splitRetailPrice," "])},{title:"会员价(元)",key:"memberPrice",width:110,align:"right"},{title:"成本进价(元)",key:"overallPackPrice",width:110,align:"right"},{title:"实价(元)",key:"payPrice",width:110,align:"right"},{title:"销售金额(元)",key:"sellPrice",width:110,align:"right"},{title:"毛利(元)",key:"grossProfit",width:110,align:"right"},{title:"毛利率(%)",key:"grossMargin",width:110,align:"right"},{title:"收银员",key:"employName",width:110},{title:"销售员",key:"sellName",width:110},{title:"会员姓名",key:"memberName",width:110},{title:"会员手机号",key:"memberPhone",width:110},{title:"是否处方",key:"hasEthical",width:110,render:e=>d("div",null,[e.hasEthical?"是":"否"])},{title:"是否特殊制剂",key:"isSpecial",width:110,render:e=>d("div",null,[e.isSpecial?"是":"否"])},{title:"姓名",key:"patientName",width:110},{title:"身份证",key:"idNumber",width:110},{title:"医疗机构",key:"medicalEstablishment",width:110},{title:"处方号",key:"prescriptionNo",width:110},{title:"医师",key:"physician",width:110},{title:"药师",key:"dispenser",width:110}]}}}var T={name:"RetailDetails",setup(e,o){const m=p(null),{dict:n}=x.state.common,d=p([]);D();const h=c({design:{width:"470px"},keys:["createTime.start","createTime.end"],activeName:"first",dict:n,otherData:{},excelUrl:"",tableData:[],loading:!1,deepSearchTable:S(0,0,d),submitForm:{"page.currentPage":1,"page.pageSize":10,sell:""}}),g=async()=>{h.loading=!0;try{let t=[];for(var e=0;e<h.submitForm.businessUuid.length;e++)t.push(h.submitForm.businessUuid[e]);let i={"page.currentPage":h.submitForm["page.currentPage"],"page.pageSize":h.submitForm["page.pageSize"],businessUuid:t.join(""),product:h.submitForm.product,sell:h.submitForm.sell};const a=await U(i);h.submitForm.pageNumber=a.currentPage,h.tableData=a.list,h.tableData.map((e=>{e.name=e.productName,e.drugUuid=e.productUuid})),h.submitForm.total=a.totalElements,h.loading=!1}catch(t){return h.loading=!1,t}};u((()=>{g(),f()}));const f=async()=>{const e=await F();d.value=e};return y=((e,t)=>{for(var i in t||(t={}))r.call(t,i)&&l(e,i,t[i]);if(a)for(var i of a(t))s.call(t,i)&&l(e,i,t[i]);return e})({},b(h)),t(y,i({getRetailDetailsData:g,exportExcel:()=>{let{storeUuid:e}=x.state.common.info,t=h.submitForm.product?h.submitForm.product:"";h.excelUrl="/gateway/chain-store/order/report/retail/details/export?storeUuid="+e+"&businessUuid="+h.submitForm.businessUuid+"&sell="+h.submitForm.sell+"&exportType=2&product="+t},businessMechanismList:d,form:m}));var y}};const O={class:"retail-details-manage"},C=["href"],E=k(" 导出 ");var _=P(T,[["render",function(e,t,i,a,r,s){const l=h("el-button"),m=o,n=g("loading");return f(),y("div",O,[j(d(m,{"form-data":e.deepSearchTable.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.deepSearchTable.tableConfig.columns,pagination:e.submitForm,draggable:!1,options:!0,"option-show":!1,select:a.getRetailDetailsData,ref:"form",reduceNum:10,otherData:e.deepSearchTable.tableConfig.listData},{buttons:w((()=>[v("a",{href:e.excelUrl,download:"零售明细.xlsx"},[d(l,{style:{"margin-bottom":"22px"},class:"retail-details-btn",plain:"",type:"primary",onClick:a.exportExcel},{default:w((()=>[E])),_:1},8,["onClick"])],8,C)])),_:1},8,["form-data","submit-form","table-data","columns","pagination","select","otherData"]),[[n,e.loading]])])}],["__scopeId","data-v-5c4b02f4"]]);export{_ as default};