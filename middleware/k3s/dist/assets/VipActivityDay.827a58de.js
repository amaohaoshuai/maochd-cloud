var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s;import{_ as p}from"./BaseTable.36f55649.js";import{k as n,l,m as d,n as m}from"./index.05639c88.js";import{u}from"./vue-router.91336ba9.js";import{b as c}from"./element-plus.b44d97a8.js";import{j as b,e as j,x as f,B as v,D as y,t as h,o as x,a5 as g,a6 as k,w}from"./@vue.23a4bd1a.js";import{_ as O}from"./index.ab904951.js";import"./sortablejs.621e50ab.js";import"./vuex.c868d4e0.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./axios.7b768d2b.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";const D={class:"stencil",id:"tab"},C={class:"main"};var P=O({name:"VipActivityDay",setup(){let t=u(),p=b({tableData:[],columns:[{title:"序号",type:"index",formConfig:{width:50}},{title:"会员活动日名称",key:"name"},{title:"参与等级",key:"participationLevels"},{title:"备注",key:"remark"},{title:"状态",key:"status",width:70,render:t=>j("div",null,[1===t.status?"启用":"禁用"])},{title:"创建人",key:"creator"},{title:"创建时间",key:"createTime"},{title:"操作",key:"options",fixed:"right",width:150,render:e=>[{text:"编辑",props:{onClick:()=>{t.push({path:"/vipsales/vip/add-vip-activity-day",query:{uuid:e.uuid}})}}},{text:"启用",judgment:()=>2===e.status,props:{onClick:()=>{n(e.uuid).then((t=>{x()}))}}},{text:"禁用",judgment:()=>1===e.status,props:{onClick:()=>{l(e.uuid).then((t=>{x()}))}}},{text:"删除",className:"delete",judgment:()=>2===e.status,props:{onClick:()=>{c.confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{d(e.uuid).then((t=>{x()}))}))}}}].map((t=>{if(!t.judgment||t.judgment())return j(v("el-button"),f({type:"text",class:t.className},t.props),{default:()=>[t.text]})}))}],submitForm:{}});const x=()=>{m(p.submitForm).then((t=>{p.tableData=t}))};return y((()=>{x()})),g=((t,e)=>{for(var a in e||(e={}))r.call(e,a)&&o(t,a,e[a]);if(s)for(var a of s(e))i.call(e,a)&&o(t,a,e[a]);return t})({},h(p)),e(g,a({getVipActivitydayData:x}));var g}},[["render",function(t,e,a,s,r,i){const o=p,n=v("el-scrollbar");return x(),g("div",D,[k("div",C,[j(n,null,{default:w((()=>[j(o,{class:"base-table",columns:t.columns,"class-id":"tab","reduce-num":50,"table-data":t.tableData,"fixed-head":!1,pagination:t.submitForm,ref:"baseTable",add:{path:"/vipsales/vip/add-vip-activity-day"}},null,8,["columns","table-data","pagination"])])),_:1})])])}],["__scopeId","data-v-30b26b4e"]]);export{P as default};