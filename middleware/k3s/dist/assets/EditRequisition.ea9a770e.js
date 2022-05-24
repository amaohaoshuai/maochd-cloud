var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,i,r)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r;import{_ as l}from"./BaseStencil.46c3d678.js";import{g as n}from"./index.c5c9c03a.js";import{d as p}from"./element-plus.b44d97a8.js";import{u}from"./vue-router.91336ba9.js";import{j as m,e as d,G as c,D as b,t as y,o as f,a5 as j}from"./@vue.23a4bd1a.js";import{_ as v}from"./index.ab904951.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./vuex.c868d4e0.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./axios.7b768d2b.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";const h={class:"supplier"};var k=v({name:"EditRequisition",components:{BaseStencil:l},setup(){const e=u(),l=m({submitForm:{"page.currentPage":1,"page.pageSize":10,isFirst:0},tableData:[],options:[],form:{inline:!0,labelWidth:"82px",list:[{type:"INPUT",key:"number",placeholder:"编号"},{type:"INPUT",key:"name",placeholder:"供应商信息"},{key:"state",type:"SELECT",placeholder:"审核状态",list:()=>l.options},{type:"LINKAGETIME",keys:["createTime.start","createTime.end"],design:{width:"220px"},key:"registerDate",config:{"start-placeholder":"开始时间","end-placeholder":"结束时间"}}]},columns:[{type:"index",title:"序号",formConfig:{width:50}},{title:"申请单编号",key:"applyNumber"},{title:"供应商编号",key:"supplierKey"},{title:"供应商名称",key:"supplierName"},{title:"申请理由",key:"reason"},{title:"申请人",key:"applyer"},{title:"创建时间",key:"createTime"},{title:"审核状态",key:"state",render:e=>d("span",null,[(()=>{switch(e.state){case 0:return"待提交";case 1:return"审批中";case 2:return"审批通过";case 3:return"审批拒绝(可重新发起)";case 4:return"审批拒绝(不可重新发起)";default:return null}})()])},{title:"操作",key:"options",render:({state:t,uuid:i},r)=>c("div",[{type:"text",innerHTML:"查看",onClick:()=>{e.push({name:"AddEditRequisition",query:{uuid:i,type:"see",isSee:1,reduceNum:120}})}},{type:"text",innerHTML:"重新发起",show:3!==t,onClick:()=>{e.push({name:"AddEditRequisition",query:{uuid:i,type:"edit",reduceNum:180}})}}].map((e=>{if(!e.show)return c(p,e)})))}]}),f=()=>{n(l.submitForm).then((e=>{l.submitForm.pageNumber=e.currentPage,l.submitForm.total=e.totalCount,l.tableData=e.list}))};b((()=>{l.options=[{label:"待提交",value:0},{label:"审核中",value:1},{label:"审核通过",value:2},{label:"审批拒绝(可重新发起)",value:3},{label:"审批拒绝(不可重新发起)",value:4}],f()}));return j=((e,t)=>{for(var i in t||(t={}))a.call(t,i)&&o(e,i,t[i]);if(r)for(var i of r(t))s.call(t,i)&&o(e,i,t[i]);return e})({},y(l)),t(j,i({handleTableOptionClick:(e,t)=>{},editRequisitionList:f,EditRequisitiondbl:({item:t,type:i})=>{"dblclick"===i&&e.push({name:"AddEditRequisition",query:{uuid:t.uuid,type:"see",isSee:1,reduceNum:120}})}}));var j}},[["render",function(e,t,i,r,a,s){const o=l;return f(),j("div",h,[d(o,{add:{path:"/business-manage/editRequisition/add-edit-requisition"},"form-data":e.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.columns,pagination:e.submitForm,draggable:!1,options:!0,select:r.editRequisitionList,"table-option-click":r.handleTableOptionClick,onOnClick:r.EditRequisitiondbl},null,8,["form-data","submit-form","table-data","columns","pagination","select","table-option-click","onOnClick"])])}],["__scopeId","data-v-495bcae8"]]);export{k as default};
