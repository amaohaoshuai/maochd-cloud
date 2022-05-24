var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{_ as l}from"./EditForm.8c35f1a6.js";import{_ as n}from"./BaseTable.36f55649.js";import{_ as m}from"./BaseCard.46de0c24.js";import{_ as d}from"./BaseName.1aa32b4b.js";import{b as p}from"./vue-router.91336ba9.js";import{c as u}from"./index.11e7499a.js";import{u as c}from"./vuex.c868d4e0.js";import"./lodash.d7ab6f48.js";import"./element-plus.b44d97a8.js";import{j as f,e as b,D as j,t as y,B as v,o as h,c as w,w as g,a6 as k,z as x,a9 as I,aa as N}from"./@vue.23a4bd1a.js";import{_ as D}from"./index.ab904951.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./sortablejs.621e50ab.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./public.9c1d8f39.js";/* empty css                                                             */import"./axios.7b768d2b.js";import"./dayjs.bad04745.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";var _={name:"PurchaseReturnDetail",setup(){let e=p(),l=c(),n=f({index:0,editForm:null,baseTable:null,close:!1,go:{path:"/purchase/purchase-return"},config:{size:"medium"},formInfo:{labelWidth:"90px",span:8,list:[{label:"退货单编号:",type:"DIV",key:"returnNo"},{label:"创建人:",type:"DIV",key:"createUser"},{label:"门店:",type:"DIV",key:"business"},{label:"供应商名称:",type:"DIV",key:"supplierName"},{label:"采购员:",type:"DIV",key:"purchaseUser"},{label:"备注:",type:"DIV",key:"remark"}]},info:{user:l.state.common.info.userName},columns:[{title:"序号",type:"index",formConfig:{width:50},fixed:"left"},{title:"商品编码",key:"code",width:150,fixed:"left"},{title:"商品名称",width:300,render:e=>b(d,{row:e},null),fixed:"left"},{title:"批次",key:"batchNumIn",width:250},{title:"批号",key:"batchNum",width:200},{title:"生产日期",key:"productionDate",width:220},{title:"有效期至",key:"expireDate",width:220},{title:"整装库存数量",key:"overallPackNum",width:220,align:"right",render:e=>b("div",null,[e.overallPackNum+e.unit])},{title:"本次整装退货数量",key:"returnNum",width:220,align:"right",render:e=>b("div",null,[e.returnNum+e.unit])},{title:"退货原因",key:"reason",width:150}],data:[]});const m=async e=>{u({uuid:e}).then((e=>{n.info=e,e.detail.forEach((e=>{e.name=e.productName})),n.data=e.detail}))};return j((()=>{let{query:t}=e;m(t.uuid)})),v=((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&i(e,a,t[a]);return e})({},y(n)),t(v,a({getDetail:m}));var v}};const O=e=>(I("data-v-09685606"),e=e(),N(),e),P=O((()=>k("div",{class:"title"},"查看退货单",-1))),z={class:"top-content"},T=O((()=>k("div",{class:"tit",style:{"margin-bottom":"12px"}},"单据信息",-1))),V={class:"main"},B=O((()=>k("div",{class:"tit"},"商品信息",-1))),U={class:"getInfo"},A={class:"text",style:{flex:"1"}};var E=D(_,[["render",function(e,t,a,r,s,o){const i=l,d=n,p=v("el-scrollbar"),u=m;return h(),w(u,{class:"detail-view",close:e.close,route:e.go,backTips:!1},{header:g((()=>[P])),top:g((()=>[k("div",z,[T,b(i,{"form-data":e.formInfo,"onUpdate:form-data":t[0]||(t[0]=t=>e.formInfo=t),"submit-form":e.info,"onUpdate:submit-form":t[1]||(t[1]=t=>e.info=t),ref:"editForm"},null,8,["form-data","submit-form"])])])),default:g((()=>[b(p,null,{default:g((()=>[k("div",V,[B,b(d,{class:"select-table",columns:e.columns,"table-data":e.data,"fixed-head":!1,ref:"baseTable","option-show":!1},{buttons:g((()=>[k("div",U,[k("div",A,[k("span",null,"商品种类合计："+x(e.info.category1),1),k("span",null,"退货数量合计："+x(e.info.returnNum),1),k("span",null,"含税金额合计："+x(e.info.totalAmountTax)+"元",1),k("span",null,"金额合计："+x(e.info.totalAmount)+"元",1),k("span",null,"零售金额合计："+x(e.info.retailAmount)+"元",1)])])])),_:1},8,["columns","table-data"])])])),_:1})])),_:1},8,["close","route"])}],["__scopeId","data-v-09685606"]]);export{E as default};