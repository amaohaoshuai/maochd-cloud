var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,d=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&r(e,a,t[a]);if(i)for(var a of i(t))o.call(t,a)&&r(e,a,t[a]);return e},s=(e,i)=>t(e,a(i));import{_ as l}from"./SubmitButton.99d990fd.js";import{_ as u}from"./EditForm.8c35f1a6.js";import{_ as c}from"./BaseTable.36f55649.js";import{_ as m}from"./SelectTable.80e1f2f6.js";import{_ as p}from"./KeyBoard.96ba8d0b.js";import{_ as b}from"./BaseCard.46de0c24.js";import{_ as h}from"./BaseName.1aa32b4b.js";import{_ as f}from"./InputDate.1acc5e94.js";import{g as w,j as g,e as y,S as N,B as v,J as I,Q as U,D as k,t as j,o as T,c as B,w as x,a5 as C,v as P,a6 as D,a9 as _,aa as O}from"./@vue.23a4bd1a.js";import{b as z}from"./vue-router.91336ba9.js";import{u as q}from"./vuex.c868d4e0.js";import{a as S,b as F,u as V,c as W,d as A}from"./BatchNumber.b846d4bb.js";import{_ as H}from"./lodash.d7ab6f48.js";import{b as L,_ as $}from"./element-plus.b44d97a8.js";import{f as E}from"./filter.c2c8f0b9.js";import{a as K}from"./businessRule.60794e55.js";import{_ as M}from"./index.ab904951.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./sortablejs.621e50ab.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./public.9c1d8f39.js";/* empty css                                                             */import"./moment.08a7f518.js";import"./dayjs.bad04745.js";import"./axios.7b768d2b.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";var R={name:"BatchNumberAdd",components:{SelectTable:m},setup(){let e=z(),t=q();const a=w([]);let i=g({batchObject:{productUuid:"",batchNum:""},selectArr:[],keys:["code","name","dosageForm","specification","manufacturer"],batchKeys:["batchNum","batchNumIn","overallPackNum","deleavePackNum"],batchHeader:["批号","批次号","整装数量","拆零数量"],batchNumberIn:{},batchProps:{label:"batchNumIn",value:"batchNumIn"},top:{"margin-top":"5px"},design:{width:"220px",height:"36px"},barchWidth:{width:"160px"}}),n=g({number:0,uuid:e.query.uuid,pagination:{page:1,size:10,total:100},index:0,editForm:null,editForm1:null,baseTable:null,keyBoard:null,selectParams:{orderUuid:"",fuzzyValue:""},close:!1,go:{path:"/storage/batch-number"},config:{size:"medium"},pot:-1,query:{},formInfo:{labelWidth:"90px",span:8,list:[{label:"调整单编号",type:"DIV",key:"number"},{label:"创建人",type:"DIV",key:"creator"},{label:"制单时间",type:"DIV",key:"createTime"},{label:"门店",type:"SELECT",require:!0,placeholder:"请选择门店",key:"businessUuid",disabled:()=>!!n.uuid,props:{label:"name",value:"uuid"},config:{onChange:e=>{0==n.data.length&&(n.oldBusiness=n.info.businessUuid),n.isDisabled=!1,n.data.length>0&&L.confirm("切换当前门店会清空数据!","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{n.data=[],n.oldBusiness=n.info.businessUuid,n.isDisabled=!1,n.number=0})).catch((()=>{n.info.businessUuid&&(n.info.businessUuid=n.oldBusiness),n.isDisabled=!0}))}},list:()=>a.value},{label:"备注",type:"INPUT",key:"note",design:{width:"200px"},disabled:()=>!!n.uuid,config:{type:"textarea",maxlength:200,showWordLimit:!1,placeholder:"请输入，不超过200字",autosize:{minRows:1,maxRows:1}}}]},info:{creator:t.state.common.info.userName},columns:[{title:"序号",type:"index",formConfig:{width:50},fixed:"left"},{title:"商品编码",key:"code",width:150},{title:"商品名称",key:"name",width:180,formConfig:{"show-overflow-tooltip":!1},render:e=>y(h,{row:e},null)},{title:"批次",key:"batchNumIn",width:250,require:!0,formConfig:{"show-overflow-tooltip":!1},header:()=>y("div",{class:"table-title"},[y("i",null,[N("*")]),N("批次")]),render:(e,t,a,o)=>y(m,{class:e[`batchNumIn_${o}`],keys:i.batchKeys,placeholder:"请输入",design:i.design,head:i.batchHeader,icon:!1,options:i.batchNumberIn[n.data[o].productUuid],props:i.batchProps,"style-enum":{1:{width:"220px"}},top:i.top,onOnInput:e=>{r(e)},config:{modelValue:e.batchNumIn,onChange:t=>{if(t){n.data.filter(((e,t)=>t!==o)).some((a=>a.batchNumIn===t&&a.productUuid===e.productUuid))?($.warning("入库单批次不能相同!"),e.batchNumIn=""):e.batchNumIn=t;const a=H.find(i.batchNumberIn[n.data[o].productUuid],{batchNumIn:t});e.oldBatchNum=a.batchNum,e.oldProducedTime=a.producedTime,e.oldIndate=a.indate,e.storageUuid=a.storageUuid,e.stocksUuid=a.stocksUuid,e.source=a.source,e.sourceUuid=a.sourceUuid}}}},null)},{title:"上次修改批号",key:"oldBatchNum",width:150},{title:"上次修改生产日期",key:"oldProducedTime",width:150},{title:"上次修改有效期至",key:"oldIndate",width:150},{title:"批号",key:"newBatchNum",width:200,require:!0,formConfig:{"show-overflow-tooltip":!1},header:()=>y("div",{class:"table-title"},[y("i",null,[N("*")]),N("批号")]),render:(e,t,a,n)=>y(v("el-input"),{maxlength:"25",step:1e-6,style:i.barchWidth,class:e[`newBatchNum_${n}`],modelValue:e.newBatchNum,onInput:t=>{u(e,"newBatchNum",t,n)},onChange:t=>{c(e,"newBatchNum",t,n)},placeholder:"请输入内容"},null)},{title:"生产日期",keyWord:"newProducedTime",width:180,formConfig:{"show-overflow-tooltip":!1},render:(e,t,a,i)=>y(f,{data:e,text:"newProducedTime",onChange:t=>{!t||E(t)>=E((new Date).getTime())?e.newProducedTime="":e.newProducedTime=t}},null)},{title:"有效期至",keyWord:"newIndate",require:!0,header:()=>y("span",null,[I(y("span",{class:"tag-title"},[n.number<99?n.number:"99+"]),[[U,n.number>0]]),y("span",{class:"table-title"},[y("i",null,[N("*")]),N("有效期至")])]),width:180,formConfig:{"show-overflow-tooltip":!1},render:(t,a,i,r)=>{const d=(new Date).getTime(),s=(new Date(t.newIndate)-d)/1e3/3600/24;let l="";return l=e.query.uuid?"":s>=0&&s<=181?"waring":s<0?"error":"",y(f,{class:t[`newIndate_${r}`],slots:()=>o(t),data:t,isStyle:"waring"==l,text:"newIndate",onChange:e=>{!e||E(e)<=E((new Date).getTime())?t.newIndate=e:(t.newIndate=e,n.newIndate=e);let a="";const i=(new Date).getTime(),o=(new Date(t.newIndate)-i)/1e3/3600/24;a=o>=0&&o<=181?"waring":o<0?"error":"","waring"==a?(n.number+=1,$.warning("该商品有效期小于180天！")):n.number-=1}},null)}},{title:"批准文号",key:"approvalNumber",width:200},{title:"上市许可持有人",key:"holderPermit",width:150},{title:"操作",key:"options",width:150,render:(e,t,a,i)=>y(v("el-button"),{type:"text",class:"delete",onClick:()=>{n.data.splice(i,1),n.pot=i;let t="";const a=(new Date).getTime(),o=(new Date(e.newIndate)-a)/1e3/3600/24;t=o>=0&&o<=180?"waring":o<0?"error":"","waring"==t&&(n.number-=1)}},{default:()=>[N("删除")]})}],columns1:[{title:"序号",type:"index",formConfig:{width:50},fixed:"left"},{title:"商品编码",key:"code",width:150},{title:"商品名称",key:"name",width:180,formConfig:{"show-overflow-tooltip":!1},render:e=>y(h,{row:e},null)},{title:"批次",key:"batchNumIn",width:250,require:!0,formConfig:{"show-overflow-tooltip":!1},header:()=>y("div",{class:"table-title"},[y("i",null,[N("*")]),N("批次")]),render:(e,t,a,o)=>y(m,{class:e[`batchNumIn_${o}`],keys:i.batchKeys,placeholder:"请输入",design:i.design,head:i.batchHeader,icon:!1,options:i.batchNumberIn[n.data[o].productUuid],props:i.batchProps,top:i.top,onOnInput:e=>{r(e)},config:{disabled:!!n.uuid,modelValue:e.batchNumIn,onChange:t=>{if(t){n.data.filter(((e,t)=>t!==o)).some((a=>a.batchNumIn===t&&a.productUuid===e.productUuid))?($.warning("入库单批次不能相同!"),e.batchNumIn=""):e.batchNumIn=t;const a=H.find(i.batchNumberIn[n.data[o].productUuid],{batchNumIn:t});e.oldBatchNum=a.batchNum,e.oldProducedTime=a.producedTime,e.oldIndate=a.indate,e.storageUuid=a.storageUuid,e.stocksUuid=a.stocksUuid,e.source=a.source,e.sourceUuid=a.sourceUuid}}}},null)},{title:"上次修改批号",key:"oldBatchNum",width:150},{title:"上次修改生产日期",key:"oldProducedTime",width:150},{title:"上次修改有效期至",key:"oldIndate",width:150},{title:"批号",key:"newBatchNum",width:200,require:!0,formConfig:{"show-overflow-tooltip":!1},header:()=>y("div",{class:"table-title"},[y("i",null,[N("*")]),N("批号")]),render:(e,t,a,o)=>y(v("el-input"),{maxlength:"25",style:i.barchWidth,class:e[`newBatchNum_${o}`],modelValue:e.newBatchNum,disabled:!!n.uuid,onInput:t=>{u(e,"newBatchNum",t,o)},onChange:t=>{c(e,"newBatchNum",t,o)},placeholder:"请输入内容"},null)},{title:"生产日期",keyWord:"newProducedTime",width:180,formConfig:{"show-overflow-tooltip":!1},render:(e,t,a,i)=>y(f,{disabled:!!n.uuid,data:e,text:"newProducedTime"},null)},{title:"有效期至",keyWord:"newIndate",require:!0,width:180,header:()=>y("div",{class:"table-title"},[y("i",null,[N("*")]),N("有效期至")]),formConfig:{"show-overflow-tooltip":!1},render:(e,t,a,i)=>y(f,{disabled:!!n.uuid,data:e,text:"newIndate"},null)},{title:"批准文号",key:"approvalNumber",width:200},{title:"上市许可持有人",key:"holderPermit",width:150}],data:[]});const o=e=>{const t=(new Date).getTime(),a=(new Date(e.newIndate)-t)/1e3/3600/24;let i=a>=0&&a<=180?"waring":a<0?"error":"";return e.newIndate?"error"==i?y(v("el-tooltip"),{effect:"dark",content:"过期商品不允许保存",placement:"top-start"},{default:()=>[y("div",null,[y("i",{className:"el-icon-warning",style:"color:rgb(245, 108, 108);margin-right: 10px;"},null)])]}):void 0:y("div",null,null)},r=async e=>{i.batchObject.batchNum=e,l()},l=async()=>{try{let e=s(d({},i.batchObject),{businessUuid:n.info.businessUuid});const t=await S(e);t.map((e=>{e.overallPackNum=e.overallPackNum+e.unit,e.isSplit?e.deleavePackNum=e.deleavePackNum+e.splitUnit:e.deleavePackNum=""}));const a=t.some((e=>null==e.batchNumIn||""==e.batchNumIn));if(0===t.length||a)return void $.warning("该商品暂无批次号");i.batchNumberIn[i.batchObject.productUuid]=t}catch(e){return e}},u=(e,t,a,i)=>{e[t]="newBatchNum"===t?a.trim():a},c=(e,t,a,i)=>{if(n.data.filter(((e,t)=>t!==i)).some((t=>t.newBatchNum===e.newBatchNum&&t.productUuid===e.productUuid)))return $.warning("该商品批号已存在！"),void(e.newBatchNum="")},p=async e=>{const t=await A(e);n.info=t,n.data=t.batchNumberModifyDetail,n.data.map((e=>{e.name=e.productName}))};k((async()=>{let{query:i}=e;n.uuid=i.uuid,a.value=await t.dispatch("common/mechanism"),K(n.info,a.value),n.query.uuid!==i.uuid&&(i.uuid?p(i.uuid):(n.info={creator:t.state.common.info.userName},n.data=[],n.selectParams.orderUuid=""),n.query=H.cloneDeep(i))}));const b=()=>{L.confirm("请选择门店后,再进行操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{n.isFlag=!0})).catch((()=>{n.isFlag=!0}))};return s(d(d({},j(n)),j(i)),{getDetail:p,handleInput:async e=>{if(!n.info.businessUuid)return void b();let{selectParams:t}=n;t.fuzzyValue=e;let a={invincible:e,businessUuid:n.info.businessUuid};const o=(await F(a)).map((e=>{let t=e.info;return t.name=e.info.productName,t.productUuid=e.productUuid,t.drugUuid=e.productUuid,t.businessUuid=e.businessUuid,t.onlyUuid=e.businessUuid+e.productUuid,t}));i.selectArr=o},handleChange:e=>{n.data.push(H.cloneDeep(e)),n.pot=n.data.length-1,i.batchObject.productUuid=e.productUuid,i.selectArr=[],l()},handleSubmit:async t=>{if(!n.info.businessUuid)return void b();let{info:a,data:i,editForm:o,editForm1:r,baseTable:d}=n,s=!0;if(s=o.handleClick(t),r&&(s=r.handleClick(t)),!s)return!1;if(!i.length)return $.warning({message:"请添加商品信息",type:"warning"}),!1;if(i.length&&(s=d.verification()),!s)return!1;let l=n.query.uuid?V:W;await l({createTime:a.createTime,creator:a.creator,batchNumberModifyDetail:i,note:a.note,number:a.number,uuid:e.query.uuid,state:0,businessUuid:n.info.businessUuid}),n.close=!0},getBatchList:l,batchHandleInput:r,clearMsg:()=>{i.selectArr=[]},delTable:t=>{if(e.uuid)return;let a="";const i=(new Date).getTime(),o=(new Date(n.data[t].newIndate)-i)/1e3/3600/24;a=o>=0&&o<=180?"waring":o<0?"error":"","waring"==a&&(n.number-=1),n.data.splice(t,1),n.pot=t},handlcurrentChange:e=>{n.pagination.page=e},handlSizeChange:e=>{n.pagination.size=e},handleRender:o,submitTips:b})}};const J=(e=>(_("data-v-7c4c9004"),e=e(),O(),e))((()=>D("div",{class:"title"},"批号调整详情",-1))),Q={key:0},G=N(" 提交审核 "),X={class:"top-content"},Y={class:"main"};var Z=M(R,[["render",function(e,t,a,i,n,o){const r=l,d=u,s=c,h=m,f=p,w=b;return T(),B(w,{close:e.close,route:e.go,"t-id":"tab",backTips:!e.uuid},{header:x((()=>[J,e.uuid?P("",!0):(T(),C("div",Q,[y(r,{config:e.config,onClick:t[0]||(t[0]=e=>i.handleSubmit(!0))},{default:x((()=>[G])),_:1},8,["config"])]))])),top:x((()=>[D("div",X,[y(d,{"form-data":e.formInfo,"onUpdate:form-data":t[1]||(t[1]=t=>e.formInfo=t),"submit-form":e.info,"onUpdate:submit-form":t[2]||(t[2]=t=>e.info=t),ref:"editForm"},null,8,["form-data","submit-form"])])])),default:x((()=>[y(f,{ref:"keyBoard",data:e.data.slice((e.pagination.page-1)*e.pagination.size,(e.pagination.page-1)*e.pagination.size+e.pagination.size),down:[".main .select-table .el-table__body-wrapper .el-table__row"],range:[0,1,2,3],first:".main .select-input",pot:e.pot},{default:x((()=>[D("div",Y,[y(s,{class:"select-table",columns:e.uuid?e.columns1:e.columns,"table-data":e.data,"fixed-head":!1,"table-data-sum":e.data,pageList:e.pagination,"onUpdate:pageList":t[3]||(t[3]=t=>e.pagination=t),optionShow:!1,ref:"baseTable","reduce-num":70,"class-id":"tab",delTable:i.delTable,onDel:i.delTable},null,8,["columns","table-data","table-data-sum","pageList","delTable","onDel"]),D("div",null,[y(h,{class:"select-input",keys:e.keys,options:e.selectArr,"onUpdate:options":t[4]||(t[4]=t=>e.selectArr=t),head:e.batchHeader,placeholder:"请输入商品编码/助记码/商品名称/条码",onOnInput:i.handleInput,onOnChange:i.handleChange,onClear:i.clearMsg,disabled:e.uuid,props:{label:"name",value:"onlyUuid"}},null,8,["keys","options","head","onOnInput","onOnChange","onClear","disabled"])])])])),_:1},8,["data","down","pot"])])),_:1},8,["close","route","backTips"])}],["__scopeId","data-v-7c4c9004"]]);export{Z as default};