var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&o(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&o(e,r,t[r]);return e};import{_ as l}from"./BaseStencil.46c3d678.js";import{g as n,s as p}from"./index.0da746e8.js";import{J as d,Q as m,e as c,B as b,S as h,g as f,j as y,D as g,t as j,o as v,a5 as w}from"./@vue.23a4bd1a.js";import{r as k,_ as P}from"./index.ab904951.js";import{u as x}from"./vue-router.91336ba9.js";import{s as U,g as C}from"./businessRule.60794e55.js";import{u as T}from"./vuex.c868d4e0.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./axios.7b768d2b.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";function D(e,t,r,a){const s={columns:[{type:"index",title:"序号",formConfig:{width:50}},{title:"门店",key:"business",formConfig:{"min-width":150}},{title:"冲红单编号",key:"rushNo",width:135,render:e=>[d(c(b("el-button"),{type:"text",onClick:()=>{const t=e.uuid;k.push({path:"/purchase/rush-red/detail",query:{uuid:t}})}},{default:()=>[e.rushNo]}),[[m,e.rushNo]]),d(c("div",null,[h("-")]),[[m,!e.rushNo]])]},{title:"原单据编号",key:"orderNo",width:135,render:e=>[c(b("el-button"),{type:"text",onClick:t=>{o(e)}},{default:()=>[e.orderNo]})]},{title:"供应商名称",key:"supplierName",width:176},{title:"商品种类",key:"category1",align:"right",width:128},{title:"数量",key:"rushNum",align:"right",width:110},{title:"含税金额合计",key:"totalAmountTax",align:"right",width:130},{title:"金额合计",key:"totalAmount",align:"right",width:110},{title:"创建人",key:"createUser",width:78},{title:"制单时间",key:"planDate",width:180},{title:"操作",key:"options",width:100,render:e=>[c(b("el-button"),{type:"text",onClick:()=>{i(e)}},{default:()=>[h("查看")]})]}]},i=e=>{1===e.type?k.push({name:"RushRedDetail",query:{uuid:e.uuid,returnPath:"/purchase/rush-red"}}):2===e.type?k.push({name:"PurchaseWarehousingDetail",query:{uuid:e.sourceUuid,returnPath:"/purchase/rush-red"}}):k.push({name:"PurchaseReturnDetail",query:{uuid:e.sourceUuid,returnPath:"/purchase/rush-red"}})},o=e=>{"RK"===e.source?k.push({name:"PurchaseWarehousingDetail",query:{uuid:e.sourceUuid,returnPath:"/purchase/rush-red"}}):k.push({name:"PurchaseReturnDetail",query:{uuid:e.sourceUuid,returnPath:"/purchase/rush-red"}})};return{form:{inline:!0,labelWidth:"82px",list:[{type:"INPUT",key:"orderNo",placeholder:"原单据编号"},{type:"SELECT",key:"supplierUuid",placeholder:"供应商名称",props:{label:"supplierName",value:"supplierUuid"},list:()=>t.value},{label:"",type:"SELECT",placeholder:"门店",config:{multiple:!0},key:"businessUuid",props:{label:"name",value:"uuid"},list:()=>r.value},{type:"LINKAGETIME",keys:["startTime","endTime"],design:{width:"220px"},key:"registerDate",config:{"start-placeholder":"制单开始时间","end-placeholder":"制单结束时间"}}]},tableConfig:s}}const N={class:"supplier"};var S=P({name:"RushRed",setup(e,o){x();const l=T();f(null);const d=f([]),m=f([]),c=y({isClear:!1,loading:!1,tableData:[],deepSearchTable:D(0,d,m),submitForm:{"page.currentPage":1,"page.pageSize":10,businessUuid:[]},columns:[]}),b=()=>{let e=c.submitForm,{total:t,businessUuid:r}=e,o=((e,t)=>{var r={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&i.call(e,o)&&(r[o]=e[o]);return r})(e,["total","businessUuid"]);r=U(r);let l=u({businessUuid:r},o);n(l).then((e=>{c.submitForm.currentPage=e.currentPage,c.submitForm.pageSize=e.pageSize,c.tableData=e.list,c.submitForm.total=e.totalElements}))};return g((()=>{b(),(async()=>{try{const e=await p();d.value=e,m.value=await l.dispatch("common/mechanism"),C(m.value,c,c.deepSearchTable.form)}catch(e){return e}})()})),h=u({findList:d},j(c)),t(h,r({getList:b}));var h}},[["render",function(e,t,r,a,s,i){const o=l;return v(),w("div",N,[c(o,{"form-data":e.deepSearchTable.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.deepSearchTable.tableConfig.columns,pagination:e.submitForm,options:!0,select:a.getList,ref:"form",isClear:e.isClear},null,8,["form-data","submit-form","table-data","columns","pagination","select","isClear"])])}],["__scopeId","data-v-2ba82a0f"]]);export{S as default};
