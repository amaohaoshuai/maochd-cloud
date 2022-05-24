var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,s=(e,s)=>{for(var i in s||(s={}))a.call(s,i)&&o(e,i,s[i]);if(t)for(var i of t(s))r.call(s,i)&&o(e,i,s[i]);return e};import{_ as i}from"./BaseForm.bc55ad6b.js";import{_ as m}from"./BaseTable.36f55649.js";import{_ as l}from"./BaseCard.46de0c24.js";import{_ as p}from"./index.ab904951.js";import"./element-plus.b44d97a8.js";import{_ as n}from"./BaseName.1aa32b4b.js";import"./lodash.d7ab6f48.js";import{G as u,j as d,D as b,t as f,o as c,a5 as j,e as y,w as v,a6 as g,z as h,a9 as x,aa as w}from"./@vue.23a4bd1a.js";import{b as D}from"./index.4384aed0.js";import{b as k}from"./vue-router.91336ba9.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./sortablejs.621e50ab.js";import"./vuex.c868d4e0.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./public.9c1d8f39.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./dayjs.bad04745.js";import"./nprogress.8b4927f9.js";import"./axios.7b768d2b.js";import"./default-passive-events.74004992.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";/* empty css                                                             */const C={name:"CabinetGroupDetail",setup(e,o){let i=d({tableData:[]});const m=d(s({query:"***",title:"查看柜组",uuid:"",submitForm:{},tabClose:!1,formConfig:{},optionShow:!1},{columns:[{type:"index",title:"序号",fixed:"left",formConfig:{width:50}},{title:"商品编码",key:"code"},{title:"商品名称",width:180,formConfig:{"show-overflow-tooltip":!1},key:"productName",render:e=>(e.name=e.productName,u(n,{row:e}))},{title:"零售价",key:"retailPrice",align:"right"},{title:"最后进价",key:"purchasePrice",align:"right"},{title:"毛利率%",key:"grossMargin",align:"right"},{title:"批准文号",key:"approvalNumber"}],formData:{inline:!0,labelWidth:"100px",config:{size:"medium","label-suffix":"："},list:[{label:"柜组编号",key:"code",span:8,type:"DIV"},{label:"柜组名称",key:"name",span:8,type:"DIV"},{label:"门店",key:"mechanismName",span:8,type:"DIV"}]}})),l=()=>{D(m.submitForm.uuid).then((e=>{let o=e,{productInfo:s}=o,l=((e,o)=>{var s={};for(var i in e)a.call(e,i)&&o.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&t)for(var i of t(e))o.indexOf(i)<0&&r.call(e,i)&&(s[i]=e[i]);return s})(o,["productInfo"]);m.submitForm=l,i.tableData=s}))},p=k();return b((()=>{m.query!==p.query.uuid&&(m.query=p.query.uuid,m.submitForm.uuid=p.query.uuid,l())})),s(s({},f(m)),f(i))}},_=e=>(x("data-v-14822877"),e=e(),w(),e),F={class:"supplierDetail formItem-noMargin"},I={style:{"font-size":"16px"}},O={class:"top-content"},z=_((()=>g("div",{class:"title"},"柜组信息",-1))),q=_((()=>g("div",{class:"title"},"商品信息",-1)));var N=p(C,[["render",function(e,t,a,r,o,s){const p=i,n=m,u=l;return c(),j("div",F,[y(u,{close:e.tabClose,backTips:!1,route:{path:"/system/cabinet-group"}},{header:v((()=>[g("span",I,h(e.title),1)])),top:v((()=>[g("div",O,[z,y(p,{"form-data":e.formData,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),style:{"margin-top":"12px"},ref:"baseForm"},null,8,["form-data","submit-form"])])])),default:v((()=>[g("div",null,[q,y(n,{style:{"margin-top":"22px"},"table-data":e.tableData,formConfig:e.formConfig,columns:e.columns,optionShow:e.optionShow},null,8,["table-data","formConfig","columns","optionShow"])])])),_:1},8,["close"])])}],["__scopeId","data-v-14822877"]]);export{N as default};