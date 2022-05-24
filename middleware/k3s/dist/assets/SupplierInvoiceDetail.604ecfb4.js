var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a;import{_ as l}from"./EditForm.8c35f1a6.js";import{_ as n}from"./BaseTable.36f55649.js";import{_ as p}from"./BaseCard.46de0c24.js";import{_ as d}from"./BaseName.1aa32b4b.js";import{b as m}from"./vue-router.91336ba9.js";import{e as c}from"./SupplierInvoice.6bf9f95c.js";import{u}from"./vuex.c868d4e0.js";import{j as f,e as b,D as y,t as j,B as v,o as h,a5 as g,w as k,a6 as w,z as I,a9 as D,aa as x}from"./@vue.23a4bd1a.js";import{_}from"./index.ab904951.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./sortablejs.621e50ab.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./public.9c1d8f39.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";/* empty css                                                             */import"./axios.7b768d2b.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";var V={name:"SupplierInvoiceDetail",setup(){let e=m();u();let l=f({index:0,editForm:null,editForm1:null,baseTable:null,keyBoard:null,close:!1,go:{path:"/finance-manage/supplier-invoice"},config:{size:"medium"},pot:0,query:{},formInfo:{labelWidth:"90px",span:8,list:[{label:"结算单编号：",type:"DIV",key:"settleNo"},{label:"创建人：",type:"DIV",key:"createUser"},{label:"制单时间：",type:"DIV",key:"planDate"},{label:"供应商名称：",type:"DIV",key:"supplierName"},{label:"门店：",type:"DIV",key:"business"},{label:"发票号码：",type:"DIV",key:"invoiceNo"},{label:"发票代码：",type:"DIV",key:"invoiceCode"},{label:"发票金额：",type:"DIV",key:"invoiceAmount"},{label:"发票类型：",type:"DIV",key:"invoiceType"},{label:"备注：",type:"DIV",key:"remark"}]},info:{},columns:[{title:"序号",type:"index",formConfig:{width:50}},{title:"业务单编号",key:"orderNo",width:135},{title:"商品编码",key:"code",width:80},{title:"商品名称/规格/单位/生产厂家",key:"name",width:256,formConfig:{"show-overflow-tooltip":!1},render:e=>b(d,{row:e},null)},{title:"数量",key:"num",align:"right"},{title:"含税进价",key:"taxPaid",width:120,align:"right"},{title:"应结算金额",key:"shouldBeSettled",width:120,align:"right"},{title:"未结算金额",key:"noSettled",width:120,align:"right"},{title:"本次结算金额",key:"settleAmount",width:120,align:"right"},{title:"采购员",key:"purchaseUser",width:110},{title:"入库/退货时间",key:"operateTime",width:110},{title:"随货同行单",key:"peer",width:110}],data:[]});const n=async e=>{try{let t={uuid:e};const o=await c(t);l.info=o,l.info.invoiceType=0==l.info.invoiceType?"增值税普通发票":"增值税专用发票",l.info.invoiceAmount=l.info.invoiceAmount?l.info.invoiceAmount+"元":"-",l.data=o.detail,l.data.map((e=>{e.name=e.productName,e.drugUuid=e.productUuid}))}catch(t){return t}};return y((()=>{let{query:t}=e;e.query.uuid&&n(t.uuid)})),p=((e,t)=>{for(var o in t||(t={}))i.call(t,o)&&s(e,o,t[o]);if(a)for(var o of a(t))r.call(t,o)&&s(e,o,t[o]);return e})({},j(l)),t(p,o({getDetail:n}));var p}};const O={class:"formItem-noMargin",style:{height:"100%"}},T=(e=>(D("data-v-5140295f"),e=e(),x(),e))((()=>w("div",{class:"title"},"供应商发票结算详情",-1))),B={class:"top-content"},S={class:"main"},N={class:"scope-line"},z={style:{"margin-right":"60px"}},A={style:{"margin-right":"60px"}};var P=_(V,[["render",function(e,t,o,a,i,r){const s=l,d=n,m=v("el-scrollbar"),c=p;return h(),g("div",O,[b(c,{close:e.close,route:e.go,backTips:!1},{header:k((()=>[T])),top:k((()=>[w("div",B,[b(s,{"form-data":e.formInfo,"onUpdate:form-data":t[0]||(t[0]=t=>e.formInfo=t),"submit-form":e.info,"onUpdate:submit-form":t[1]||(t[1]=t=>e.info=t),ref:"editForm"},null,8,["form-data","submit-form"])]),b(m,null,{default:k((()=>[w("div",S,[b(d,{class:"select-table",columns:e.columns,"table-data":e.data,"fixed-head":!1,optionShow:!1,ref:"baseTable"},{buttons:k((t=>[w("div",N,[w("div",null,[w("span",z,"应结算金额合计："+I(e.info.shouldBeSettled)+"元",1),w("span",A,"未结算金额合计："+I(e.info.noSettled)+"元",1),w("span",null,"本次结算金额合计："+I(e.info.settleAmount)+"元",1)])])])),_:1},8,["columns","table-data"])])])),_:1})])),_:1},8,["close","route"])])}],["__scopeId","data-v-5140295f"]]);export{P as default};