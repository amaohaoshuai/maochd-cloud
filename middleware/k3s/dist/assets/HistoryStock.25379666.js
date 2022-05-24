var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,l=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&r(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&r(e,a,t[a]);return e},n=(e,s)=>t(e,a(s)),m=(e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a};import{_ as c}from"./BaseStencil.46c3d678.js";import{s as u,_ as p}from"./index.ab904951.js";import"./element-plus.b44d97a8.js";import{_ as d}from"./BaseName.1aa32b4b.js";import{G as b,e as f,g,j as y,D as v,t as h,B as j,L as k,o as P,a5 as w,J as C,w as x,a6 as N,z as S,a9 as U,aa as D,S as O}from"./@vue.23a4bd1a.js";import{a as T}from"./axios.7b768d2b.js";import{u as F}from"./vue-router.91336ba9.js";import{d as _}from"./index.7c4fa9df.js";import{s as B,g as L}from"./businessRule.60794e55.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./vuex.c868d4e0.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";/* empty css                                                             */const z=["name","specification","unit","manufacturer"];function E(e,t,a){return{form:{inline:!0,labelWidth:"100px",list:[{type:"DATEPICKER",key:"historyDate"},{type:"INPUT",key:"productInfo",placeholder:"编码/品名/助记码/条码"},{type:"SELECT",key:"businessUuid",props:{label:"name",value:"uuid"},list:()=>a.value,placeholder:"请输入门店",config:{multiple:!0}}]},tableConfig:{columns:[{type:"index",title:"序号",formConfig:{width:50},fixed:"left"},{title:"商品编码",key:"code",width:110},{title:"商品名称/规格/单位/生产厂家",key:"name",width:256,formConfig:{"show-overflow-tooltip":!1},render:e=>(e.name=e.productName,b(d,{row:e,list:z}))},{title:"当日库存",key:"productTypeNum",render:e=>f("div",null,[0==e.overallPackNum&&0!=e.deleavePackNum?"":0==e.overallPackNum&&0==e.deleavePackNum?"-":e.overallPackNum,e.overallPackNum?e.unit:"",e.deleavePackNum?e.deleavePackNum:"",e.deleavePackNum?e.splitUnit:""])},{title:"当日成本进价",key:"overallPackPrice",align:"right"},{title:"当日成本金额",key:"totalPrice",width:256,align:"right"},{title:"零售价",key:"retailPrice",width:120,align:"right"},{title:"门店",key:"business",width:120}]}}}var H={name:"HistoryStock",components:{BaseStencil:c},setup(e,t){const a=g(null),{dict:s}=u.state.common,i=g([]),o=F(),r=y({storeList:[],isClear:!1,totalCount:{},dict:s,otherData:{},tableData:[],loading:!1,deepSearchTable:E(0,0,i),submitForm:{"page.currentPage":1,"page.pageSize":10,businessUuid:[]}}),c=async()=>{r.loading=!0;try{let e=r.submitForm,{businessUuid:t}=e,a=m(e,["businessUuid"]);t=B(t);let s=l({businessUuid:t},a);const i=await function(e){return T.get("/gateway/chain-store/stock/getStockHistoryPage",{params:e})}(s);r.submitForm.pageNumber=i.current,r.tableData=i.records,r.submitForm.total=i.total,p(s),r.loading=!1}catch(e){return r.loading=!1,e}},p=async e=>{const t=await function(e){return T.get("/gateway/chain-store/stock/getStockHistoryTotal",{params:e})}(e);r.totalCount=t};v((async()=>{r.storeList=await u.dispatch("common/mechanism"),L(r.storeList,r,r.deepSearchTable.form),i.value=r.storeList,c()}));return n(l({},h(r)),{getStockHistoryPageData:c,exportExcel:async()=>{let{storeUuid:e}=u.state.common.info,t=r.submitForm,{businessUuid:a}=t,s=m(t,["businessUuid"]),i={};i=0==r.submitForm.businessUuid.length?l({businessUuid:r.storeList.map((e=>e.uuid)).join(",")},s):r.submitForm;let o=_("/gateway/chain-store/stock/exportStockHistory",n(l({},i),{storeUuid:e}));window.open(o,"_self")},form:a,handleClick:({item:e,type:t})=>{if("dblclick"===t){let t=e.uuid;o.push({name:"BatchNumberAdd",query:{uuid:t}})}},businessMechanismList:i})}};const I={class:"business-manage"},A={style:{display:"flex","justify-content":"space-between","align-items":"center"}},R=(e=>(U("data-v-f3b184aa"),e=e(),D(),e))((()=>N("span",{style:{"margin-right":"32px"}},"合计",-1))),q={style:{"margin-right":"25px"}},G={style:{"margin-right":"25px"}},J=O("导出");var K=p(H,[["render",function(e,t,a,s,i,o){const r=j("el-button"),l=c,n=k("loading");return P(),w("div",I,[C(f(l,{"form-data":e.deepSearchTable.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.deepSearchTable.tableConfig.columns,pagination:e.submitForm,draggable:!1,options:!0,"option-show":!1,select:s.getStockHistoryPageData,ref:"form",otherData:e.deepSearchTable.tableConfig.listData,onOnClick:s.handleClick,isClear:e.isClear},{buttons:x((()=>[N("div",A,[N("div",null,[R,N("span",q,"当日整装库存："+S(e.totalCount.overallPackNum),1),N("span",G,"当日拆零库存："+S(e.totalCount.deleavePackNum),1),N("span",null,"当日成本金额："+S(e.totalCount.totalPrice),1)]),N("div",null,[f(r,{type:"primary",onClick:s.exportExcel,size:"small"},{default:x((()=>[J])),_:1},8,["onClick"])])])])),_:1},8,["form-data","submit-form","table-data","columns","pagination","select","otherData","onOnClick","isClear"]),[[n,e.loading]])])}],["__scopeId","data-v-f3b184aa"]]);export{K as default};