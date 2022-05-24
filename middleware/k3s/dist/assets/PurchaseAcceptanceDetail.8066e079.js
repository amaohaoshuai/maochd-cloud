var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;import{_ as l}from"./EditForm.8c35f1a6.js";import{_ as p}from"./BaseTable.36f55649.js";import{_ as m}from"./BaseCard.46de0c24.js";import"./element-plus.b44d97a8.js";import{_ as n}from"./SubmitButton.99d990fd.js";import{_ as d}from"./BaseForm.bc55ad6b.js";import{_ as c}from"./BaseName.1aa32b4b.js";import{i as u}from"./PurchaseAcceptance.9cfc0e35.js";import{b}from"./vue-router.91336ba9.js";import{g as f,j as y,G as h,D as j,t as g,B as v,o as k,a5 as w,e as x,w as D,a6 as F,z as I,a9 as _,aa as B}from"./@vue.23a4bd1a.js";import{_ as N}from"./index.ab904951.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./sortablejs.621e50ab.js";import"./vuex.c868d4e0.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./public.9c1d8f39.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";/* empty css                                                             */import"./axios.7b768d2b.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";var P={name:"PurchaseAcceptanceDetail",components:{BaseCard:m,SubmitButton:n,BaseForm:d,BaseTable:p,EditForm:l},setup(){const e=f(null),l=f(null),p=y({tabClose:!1,supplierList:[],formData:{inline:!0,labelWidth:"100px",list:[{label:"验收单编号：",key:"checkNo",type:"DIV",span:8},{label:"创建人：",key:"applicant",span:8,type:"DIV"},{label:"门店：",key:"business",span:8,type:"DIV"},{label:"随货同行单：",key:"peer",span:8,type:"DIV"},{label:"开票日期：",key:"invoiceTime",span:8,type:"DIV"},{label:"供应商名称：",key:"supplierName",span:8,type:"DIV"},{label:"收货单编号：",key:"receiveNo",span:8,type:"DIV"},{label:"收货员：",key:"receiveUser",span:8,type:"DIV"},{label:"采购单编号：",key:"orderNo",span:8,type:"DIV"},{label:"备注：",key:"remark",span:8,type:"DIV"}]},submitForm:{},tableData:[],columns:[{title:"序号",type:"index",formConfig:{width:50},fixed:"left"},{key:"code",title:"商品编码",fixed:"left",width:80},{title:"商品名称",key:"name",fixed:"left",width:180,render:e=>h(c,{row:e}),formConfig:{"show-overflow-tooltip":!1}},{key:"receiveNum",title:"收货数量",align:"right",width:120},{key:"batchNumber",title:"批号",width:200},{key:"productionDate",title:"生产日期",width:110},{key:"expireDate",title:"有效期至",width:110},{key:"checkNum",title:"验收数量",width:120,align:"right"},{key:"checkResult",title:"验收结果",width:120},{key:"returnNum",title:"拒收数量",width:120,align:"right"},{key:"refuseReason",title:"拒收原因",width:160},{key:"taxPaid",title:"含税进价",width:150,align:"right"},{key:"price",title:"进价",width:150,align:"right"},{key:"taxAmount",title:"含税金额",width:150,align:"right"},{key:"amount",title:"金额",align:"right",width:150},{key:"tax",title:"税额",align:"right",width:150},{key:"retailPrice",title:"零售价",align:"right",width:150},{key:"retailAmount",title:"零售金额",align:"right",width:150},{key:"inputTaxRate",title:"进项税率(%)",width:110,align:"right"},{key:"approvalNumber",title:"批准文号",width:224},{key:"holderPermit",title:"上市许可持有人",width:170,isShowTwo:!0,formConfig:{"show-overflow-tooltip":!1}},{key:"medicineBeverage",title:"中药饮片产地",width:110}],loading:!1}),m=b(),n=()=>{let e={uuid:m.query.uuid};u(e).then((e=>{p.tableData=e.detailVOs,p.submitForm=e}))};return j((()=>{n()})),d=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))o.call(t,a)&&s(e,a,t[a]);return e})({},g(p)),t(d,a({ruleForm:e,receiptForm:l,getReceivingGoodDetail:n}));var d}};const V=e=>(_("data-v-0fa3f82e"),e=e(),B(),e),O={class:"addPurchaseAcceptance formItem-noMargin"},T=V((()=>F("span",{style:{"font-size":"16px","font-weight":"600"}},"查看验收单",-1))),A={class:"top-content"},z=V((()=>F("div",{class:"title"},"单据信息",-1))),C={class:"commodityInfo"},R=V((()=>F("div",{class:"title"},"商品信息",-1))),S={class:"titleFlex"},E={class:"titleFlexRight"};var U=N(P,[["render",function(e,t,a,i,r,o){const s=l,n=p,d=v("el-scrollbar"),c=m;return k(),w("div",O,[x(c,{close:!1,backTips:!1,route:{path:"/purchase/purchase-acceptance"}},{header:D((()=>[T])),top:D((()=>[F("div",A,[z,x(s,{"form-data":e.formData,"onUpdate:form-data":t[0]||(t[0]=t=>e.formData=t),"submit-form":e.submitForm,"onUpdate:submit-form":t[1]||(t[1]=t=>e.submitForm=t),style:{"margin-top":"12px"},ref:"ruleForm"},null,8,["form-data","submit-form"])])])),default:D((()=>[x(d,null,{default:D((()=>[F("div",C,[R,F("div",S,[F("div",E,[F("span",null,"商品种类合计："+I(e.submitForm.categories),1),F("span",null,"验收数量合计："+I(e.submitForm.checkNum),1),F("span",null,"含税金额合计："+I(e.submitForm.totalAmountTax)+"元",1),F("span",null,"金额合计："+I(e.submitForm.totalAmount)+"元",1),F("span",null,"税额合计："+I(e.submitForm.tax)+"元",1)])]),x(n,{style:{"margin-top":"22px"},"table-data":e.tableData,columns:e.columns,optionShow:!1},null,8,["table-data","columns"])])])),_:1})])),_:1})])}],["__scopeId","data-v-0fa3f82e"]]);export{U as default};
