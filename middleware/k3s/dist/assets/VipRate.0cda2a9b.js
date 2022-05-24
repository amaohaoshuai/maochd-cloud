var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,i,l)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l;import{_ as r}from"./BaseTable.36f55649.js";import{_ as n}from"./EditForm.8c35f1a6.js";import{c as d,d as m,f as p,h as u,s as b,i as c,j as f}from"./index.05639c88.js";import{u as g}from"./vue-router.91336ba9.js";import{b as y}from"./element-plus.b44d97a8.js";import{c as v}from"./common.6e2a0964.js";import{j,e as h,x as V,B as x,S as k,D as F,i as P,t as w,o as C,a5 as R,a6 as _,w as N,z as D,v as z,a9 as S,aa as E}from"./@vue.23a4bd1a.js";import{_ as T}from"./index.ab904951.js";import"./sortablejs.621e50ab.js";import"./vuex.c868d4e0.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./axios.7b768d2b.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";const{_:O}=v();var U={name:"VipRate",setup(){g();let e=j({editForm:null,dialogVisible:!1,dialogVisible1:!1,isEdit:!1,tableData:[],pointRatio:null,columns:[{title:"序号",type:"index",formConfig:{width:50}},{title:"会员等级",key:"level"},{title:"等级名称",key:"levelName"},{title:"等级积分",key:"levelPoints",align:"right"},{title:"会员商品折扣",key:"discount",align:"right"},{title:"积分效益系数",key:"pointsBenefitFactor",align:"right"},{title:"状态",key:"status",width:70,render:e=>h("div",null,[1===e.status?"启用":"禁用"])},{title:"创建时间",key:"createTime"},{title:"操作",key:"options",fixed:"right",width:150,render:(t,i,l,a)=>[{text:"编辑",props:{onClick:()=>{e.isEdit=!0,e.dialogSubmitForm=Object.assign(e.dialogSubmitForm,t),e.dialogVisible=!0}}},{text:"启用",judgment:()=>v(t),props:{onClick:()=>{d(t.uuid).then((e=>{r()}))}}},{text:"删除",className:"delete",judgment:()=>n(t,a),props:{onClick:()=>{y.confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{m(t.uuid).then((e=>{r()}))}))}}},{text:"禁用",judgment:()=>C(t),props:{onClick:()=>{p(t.uuid).then((e=>{r()}))}}}].map((e=>{if(!e.judgment||e.judgment())return h(x("el-button"),V({class:e.className},e.props,{type:"text"}),{default:()=>[e.text]})}))}],submitForm:{},dialogForm:{labelWidth:"100px",inline:!0,list:[{label:"会员等级",type:"TEMP",key:"",render:()=>{if(e.isEdit)return h("div",null,[e.dialogSubmitForm.level]);{const t=O.last(e.tableData);return e.dialogSubmitForm.level=t?`VIP${t.levelNo+1}`:"VIP1",e.dialogSubmitForm.levelNo=t?t.levelNo+1:1,h("div",null,[k("VIP"),t?t.levelNo+1:1])}}},{label:"等级名称",type:"INPUT",key:"levelName",require:!0,design:{width:"350px"},maxlength:30},{label:"等级积分",type:"INPUT",key:"levelPoints",require:!0,design:{width:"350px"}},{label:"会员商品折扣",type:"INPUT",inputType:"number",key:"discount",require:!0,design:{width:"350px"},tools:{design:{width:"350px"},tempHtml:()=>h("p",{style:"font-size:12px;color:#909399;display:block;"},[k("要求：系数范围不低于5，不大于10")])}},{label:"积分效益系数",type:"INPUT",inputType:"number",key:"pointsBenefitFactor",require:!0,design:{width:"350px"},tools:{design:{width:"350px"},tempHtml:()=>h("div",null,[h("p",{style:"font-size:12px;color:#909399;display:block;"},[k("要求：系数范围不低于1，不大于2")]),h("p",{style:"font-size:12px;color:#909399;display:block;"},[k("举例：一个10积分的商品，若该会员的积分效益系数为1.2，则购买可获得12积分")])])}}]},dialogSubmitForm:{},percent:""});const r=()=>{u(e.submitForm).then((t=>{e.tableData=t.memberLevelList,e.pointRatio=t.pointRatio,e.percent=t.pointRatio?t.pointRatio:1}))},n=(t,i)=>2===t.status&&i===e.tableData.length-1,v=t=>{if(2!==t.status)return!1;let i=!0;return e.tableData.forEach((e=>{e.levelNo<t.levelNo&&2===e.status&&(i=!1)})),i},C=t=>{if(1!==t.status)return!1;let i=!0;return e.tableData.forEach((e=>{e.levelNo>t.levelNo&&1===e.status&&(i=!1)})),i},R=()=>{e.dialogVisible=!1,e.isEdit=!1,e.dialogSubmitForm={}};return F((()=>{r()})),P((()=>e.dialogVisible1),(t=>{t||(e.percent=e.pointRatio)})),_=((e,t)=>{for(var i in t||(t={}))a.call(t,i)&&s(e,i,t[i]);if(l)for(var i of l(t))o.call(t,i)&&s(e,i,t[i]);return e})({},w(e)),t(_,i({addVipRateDialog:()=>{e.dialogVisible=!e.dialogVisible,e.submitForm={}},changePercent:()=>{e.dialogVisible1=!e.dialogVisible1},getVipRateListRequest:r,canDelete:n,canEnable:v,canDisable:C,setPointRatio:()=>{b(e.percent).then((t=>{e.dialogVisible1=!1,r()}))},addOrUpdateVipRate:()=>{let{editForm:t}=e,i=!0;i=t.handleClick(!0),i&&(e.isEdit?c(e.dialogSubmitForm).then((t=>{e.dialogVisible=!1,r(),R()})):f(e.dialogSubmitForm).then((t=>{e.dialogVisible=!1,r(),R()})))},beforeDialogClose:t=>{e.isEdit=!1,e.dialogSubmitForm={},t()},cancelPointRatio:R}));var _}};const I=e=>(S("data-v-735991be"),e=e(),E(),e),B={class:"stencil",id:"tab"},q={class:"main"},H={class:"getInfo"},L={key:0},M=k(" 新增 "),W=k(" 积分设定 "),$=k("取 消"),A=k(" 确 定 "),G={class:"changePercent"},J=I((()=>_("span",null,"1元=",-1))),K=I((()=>_("div",{style:{"margin-left":"-35px",position:"relative"}},"积分",-1))),Q=k("取 消"),X=k("确 定");var Y=T(U,[["render",function(e,t,i,l,a,o){const s=x("el-button"),d=r,m=x("el-scrollbar"),p=n,u=x("el-dialog"),b=x("el-input-number");return C(),R("div",B,[_("div",q,[h(m,null,{default:N((()=>[h(d,{class:"base-table","class-id":"tab","reduce-num":80,columns:e.columns,"table-data":e.tableData,"fixed-head":!1,pagination:e.submitForm,ref:"baseTable"},{buttons:N((()=>[_("div",H,[e.pointRatio?(C(),R("p",L,"积分转换比：1："+D(e.pointRatio),1)):z("",!0),h(s,{type:"primary",size:"small",onClick:l.addVipRateDialog},{default:N((()=>[M])),_:1},8,["onClick"]),h(s,{type:"primary",size:"small",onClick:l.changePercent,plain:""},{default:N((()=>[W])),_:1},8,["onClick"])])])),_:1},8,["columns","table-data","pagination"])])),_:1}),h(u,{title:e.isEdit?"编辑会员等级":"新增会员等级",modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialogVisible=t),width:"600px","before-close":l.beforeDialogClose},{footer:N((()=>[h(s,{onClick:l.cancelPointRatio,size:"small"},{default:N((()=>[$])),_:1},8,["onClick"]),h(s,{type:"primary",onClick:l.addOrUpdateVipRate,size:"small"},{default:N((()=>[A])),_:1},8,["onClick"])])),default:N((()=>[h(p,{"form-data":e.dialogForm,"onUpdate:form-data":t[0]||(t[0]=t=>e.dialogForm=t),"submit-form":e.dialogSubmitForm,"onUpdate:submit-form":t[1]||(t[1]=t=>e.dialogSubmitForm=t),ref:"editForm"},null,8,["form-data","submit-form"])])),_:1},8,["title","modelValue","before-close"]),h(u,{title:"积分转换比",modelValue:e.dialogVisible1,"onUpdate:modelValue":t[5]||(t[5]=t=>e.dialogVisible1=t),width:"420px"},{footer:N((()=>[h(s,{onClick:t[4]||(t[4]=t=>e.dialogVisible1=!1),size:"small"},{default:N((()=>[Q])),_:1}),h(s,{type:"primary",onClick:l.setPointRatio,size:"small"},{default:N((()=>[X])),_:1},8,["onClick"])])),default:N((()=>[_("div",G,[J,h(b,{modelValue:e.percent,"onUpdate:modelValue":t[3]||(t[3]=t=>e.percent=t),min:0,max:9999.99,precision:2,placeholder:"请输入",style:{width:"155px"}},null,8,["modelValue","max"]),K])])),_:1},8,["modelValue"])])])}],["__scopeId","data-v-735991be"]]);export{Y as default};