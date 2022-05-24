var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,l=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&o(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&o(e,a,t[a]);return e},n=(e,t)=>{var a={};for(var o in e)r.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&s.call(e,o)&&(a[o]=e[o]);return a};import{_ as m}from"./BaseStencil.46c3d678.js";import{_ as p}from"./index.ab904951.js";import{a as u}from"./axios.7b768d2b.js";import{u as d}from"./vue-router.91336ba9.js";import{s as c,g as b}from"./businessRule.60794e55.js";import{u as h}from"./vuex.c868d4e0.js";import{_ as y}from"./lodash.d7ab6f48.js";import{g,j as f,D as j,t as v,G as w,o as T,a5 as k,e as S}from"./@vue.23a4bd1a.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./dayjs.bad04745.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";function P(e,t,a){return{form:{inline:!0,labelWidth:"82px",list:[{type:"LINKAGETIME",keys:["startTime","endTime"],design:{width:"240px"},key:"registerDate",config:{"start-placeholder":"交班开始时间","end-placeholder":"交班结束时间"}},{label:"",type:"SELECT",placeholder:"门店",config:{multiple:!0},key:"businessUuid",props:{label:"name",value:"uuid"},list:()=>t.value},{type:"INPUT",key:"cashier",placeholder:"请输入收银员姓名/编号"}]},tableConfig:{columns:[{type:"index",title:"序号",width:52},{title:"班次开始时间",key:"createTime",width:180},{title:"班次结束时间",key:"updateTime",width:180},{title:"收银员编号",key:"employCode",width:100},{title:"收银员姓名",key:"employName",width:100},{title:"实收金额",key:"payAmount",align:"right",width:110},{title:"应收金额",key:"orderAmount",align:"right",width:110},{title:"优惠金额",key:"discountAmount",align:"right",width:110},{title:"抹零金额",key:"roundMoney",align:"right",width:110},{title:"充值金额",key:"rechargeAmount",align:"right",width:110},{title:"赠送金额",key:"giftAmount",align:"right",width:110},{title:"储值新增金额",key:"rechargeAddAmount",align:"right",width:110},{title:"客流量",key:"customerFlow",align:"right",width:110},{title:"门店",key:"storeName",width:100}]}}}const x={class:"supplier"};var C=p({name:"Succession",setup(e,i){d();const r=h();g(null);const s=g([]),o=f({Payment:[]}),m=f({isClear:!1,loading:!1,tableData:[],deepSearchTable:P(0,s),submitForm:{"page.currentPage":1,"page.pageSize":10,businessUuid:[]},columns:[]}),p=async()=>{let e=m.submitForm,{businessUuid:t}=e,a=n(e,["businessUuid"]),i=s.value;t=1==i.length?i[0].uuid:c(t),function(e){return u.get("/gateway/chain-store/order/queryShiftExchange",{params:e})}(l({businessUuid:t},a)).then((e=>{m.submitForm.currentPage=e.currentPage,m.submitForm.pageSize=e.pageSize,m.tableData=e.list,m.submitForm.total=e.totalElements}))},T=async()=>{let e=m.submitForm,{businessUuid:t}=e,a=n(e,["businessUuid"]),i=s.value;t=1==i.length?i[0].uuid:c(t),l({businessUuid:t},a),await u.post("/gateway/chain-store/order/shiftExchangeCache"),o.Payment=await u.get("/gateway/chain-store/order/report/queryPayTypeUse"),m.deepSearchTable.tableConfig.columns.map((e=>e.title));let r=[];o.Payment.forEach((e=>{let t={title:e.payTypeName,key:e.payType+"ss",align:"right",width:110,render:t=>{let a=t.channelSumDayVos.find((t=>t.payType==e.payType));return w("span",{innerText:a?a.payMoney:"0"})}};r.push(t)}));let p=y.cloneDeep(m.deepSearchTable.tableConfig.columns),d=p.splice(p.length-5,5);m.deepSearchTable.tableConfig.columns=[...p,...r,...d]};return j((async()=>{s.value=await r.dispatch("common/mechanism"),b(s.value,m,m.deepSearchTable.form),T(),p()})),k=l({},v(m)),t(k,a({getList:p,getShiftHandover:T}));var k}},[["render",function(e,t,a,i,r,s){const o=m;return T(),k("div",x,[S(o,{"form-data":e.deepSearchTable.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.deepSearchTable.tableConfig.columns,pagination:e.submitForm,options:!0,select:i.getList,ref:"form",optionShow:!1,isClear:e.isClear},null,8,["form-data","submit-form","table-data","columns","pagination","select","isClear"])])}],["__scopeId","data-v-a199dab4"]]);export{C as default};