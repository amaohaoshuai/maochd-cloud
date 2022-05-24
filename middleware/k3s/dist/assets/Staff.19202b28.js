var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{_ as l}from"./BaseStencil.46c3d678.js";import{o as p,r as n,g as m}from"./index.4d7e135d.js";import{u}from"./vuex.c868d4e0.js";import{g as c}from"./index.21c3d30d.js";import{g as d}from"./index.b67059af.js";import{d as b,_ as f}from"./element-plus.b44d97a8.js";import{_ as y,r as j}from"./index.ab904951.js";import{d as h}from"./public.9c1d8f39.js";import"./lodash.d7ab6f48.js";import{j as v,G as k,n as g,D as L,t as S,o as E,a5 as T,e as x}from"./@vue.23a4bd1a.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./vue-router.91336ba9.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./axios.7b768d2b.js";import"./resize-observer-polyfill.d4249adb.js";import"./dayjs.bad04745.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";const C={class:"staff"};var N=y({name:"Staff",components:{BaseStencil:l},setup(){let e=u();const l=v({btnData:{path:"/system/base-config/staffEdit"},storeList:[],characterSelectList:[],approvalRoleSelectList:[],options1:[],options2:[],formData:{inline:!0,labelWidth:"82px",list:[{type:"INPUT",key:"userNumber",placeholder:"员工编号"},{type:"INPUT",key:"userAccount",placeholder:"员工账号"},{type:"INPUT",key:"userName",placeholder:"员工姓名"},{type:"SELECT",key:"businessUuid",props:{label:"name",value:"name"},list:()=>l.storeList,placeholder:"门店"},{type:"SELECT",key:"roles",list:()=>l.characterSelectList,placeholder:"系统角色"},{type:"SELECT",key:"auditRoles",list:()=>l.approvalRoleSelectList,placeholder:"审批角色"},{type:"SELECT",key:"state",list:()=>l.options1,placeholder:"状态"},{type:"SELECT",key:"pharmacist",list:()=>l.options2,placeholder:"是否药师"}]},submitForm:{"page.currentPage":1,"page.pageSize":10,businessUuid:""},tableData:[],columns:[{key:"userNumber",title:"员工编号"},{key:"userAccount",title:"员工账号"},{key:"userName",title:"员工姓名"},{key:"pharmacist",title:"是否药师",render:e=>e.pharmacist?"是":"否"},{key:"roles",title:"系统角色"},{key:"auditRoles",title:"审核角色"},{key:"storeName",title:"门店"},{key:"state",title:"状态",render:e=>1==e.state?"启用":"禁用"},{key:"updateTime",title:"最新更新时间",width:180},{title:"操作",key:"options",width:220,render:e=>{let t=[{type:"text",innerHTML:"查看",onClick:()=>{j.push({name:"StaffEdit",query:{uuid:e.uuid,isEdit:1}})}},{type:"text",innerHTML:"编辑",onClick:()=>{j.push({name:"StaffEdit",query:{uuid:e.uuid,isEdit:2}})}},{type:"text",innerHTML:1===e.state?"禁用":"启用",onClick:()=>{let t=1==e.state?"禁用":"启用";h({msg:`确定要${t}该员工吗?`,callback:()=>{p(e.uuid).then((e=>{y()}))}})}},{type:"text",innerHTML:"重置密码",onClick:()=>{h({msg:"确定要重置密码吗?",callback:()=>{n(e.uuid).then((e=>{f({type:"success",message:"重置密码成功"}),y()}))}})}}];return k("div",t.map((e=>{if(!e.show)return k(b,e)})))}}]}),y=async()=>{l.options1=[{value:1,label:"启用"},{value:2,label:"禁用"}],l.options2=[{value:1,label:"是"},{value:0,label:"否"}],m(l.submitForm).then((e=>{l.submitForm.pageNumber=e.currentPage,l.submitForm.total=e.totalCount,l.tableData=e.list}))};return g((()=>{(async()=>{l.storeList=await e.dispatch("common/mechanism"),l.submitForm.businessUuid=l.storeList[0]})(),(async()=>{c(0).then((e=>{let t=e.map((function(e,t){return{label:e.roleName,value:e.uuid}}));l.characterSelectList=t}))})(),(async()=>{d(0).then((e=>{let t=e.map((function(e,t){return{label:e.auditRoleName,value:e.uuid}}));l.approvalRoleSelectList=t}))})()})),L((()=>{y()})),E=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&o(e,a,t[a]);if(s)for(var a of s(t))i.call(t,a)&&o(e,a,t[a]);return e})({},S(l)),t(E,a({getList:y,staffdbl:({item:e,type:t})=>{"dblclick"===t&&j.push({name:"StaffEdit",query:{uuid:e.uuid,isEdit:1}})}}));var E}},[["render",function(e,t,a,s,r,i){const o=l;return E(),T("div",C,[x(o,{class:"base-stencil","submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),"form-data":e.formData,"table-data":e.tableData,columns:e.columns,pagination:e.submitForm,options:!0,add:e.btnData,optionShow:!0,select:s.getList,onOnClick:s.staffdbl},null,8,["submit-form","form-data","table-data","columns","pagination","add","select","onOnClick"])])}],["__scopeId","data-v-5c15ea59"]]);export{N as default};