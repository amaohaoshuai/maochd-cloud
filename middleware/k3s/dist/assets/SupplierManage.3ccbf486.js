var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,i,r)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r;import{_ as p}from"./BaseStencil.46c3d678.js";import{r as l,_ as n}from"./index.ab904951.js";import{j as m,e as u,B as d,S as c,h as b,D as y,t as f,o as j,a5 as k}from"./@vue.23a4bd1a.js";import{g}from"./index.778e5621.js";import{u as h,m as v}from"./vuex.c868d4e0.js";import{u as S}from"./vue-router.91336ba9.js";import{c as T}from"./common.6e2a0964.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./axios.7b768d2b.js";import"./default-passive-events.74004992.js";const O=[{type:"index",title:"序号",formConfig:{width:50}},{title:"供应商编号",key:"supplierKey"},{title:"供应商名称",key:"supplierName"},{title:"供应商类别",key:"supplierType",width:78},{title:"助记码",key:"mnemonic"},{title:"地址",key:"address"},{title:"创建时间",key:"createTime"},{title:"来源",key:"source"},{title:"状态",key:"state",render:e=>u(d("el-button"),{type:"text",onClick:t=>{F(t,e)}},{default:()=>[0==e.isForbid?"启用":"禁用"]})},{title:"操作",key:"options",render:(e,t,i,r)=>[u(d("el-button"),{type:"text",onClick:t=>{x(t,e)}},{default:()=>[c("查看")]})]}],x=(e,t)=>{l.push({name:"SupplierManageDetail",query:{uuid:t.uuid,type:"see",isSee:1}})},F=(e,t)=>{l.push({name:"AddEditRequisition",query:{uuid:t.uuid,type:"otherEdit"}})};const{_:C}=T(),P={class:"supplier"};var w=n({name:"SupplierManage",components:{BaseStencil:p},setup(){const e=h(),p=S(),l=v("common",["dict"]),n=b(l.dict.bind({$store:e})),u=m({submitForm:{"page.currentPage":1,"page.pageSize":10,isFirst:0},tableData:[],options:[],form:{inline:!0,labelWidth:"82px",list:[{type:"INPUT",key:"supplierKey",placeholder:"供应商编号"},{type:"INPUT",key:"name",placeholder:"供应商信息"},{key:"supplierType",type:"SELECT",props:{label:"key",value:"key"},placeholder:"供应商类别",list:()=>u.options},{type:"LINKAGETIME",keys:["createTime.start","createTime.end"],design:{width:"220px"},key:"createTime",config:{"start-placeholder":"开始时间","end-placeholder":"结束时间"}}]}});let{columns:d}=m({columns:O});const c=()=>{u.options=C.find(n.value,{key:"supplier"}).data,g(u.submitForm).then((e=>{u.submitForm.pageNumber=e.currentPage,u.submitForm.total=e.totalCount,u.tableData=e.list}))};return y((()=>{c()})),j=((e,t)=>{for(var i in t||(t={}))a.call(t,i)&&o(e,i,t[i]);if(r)for(var i of r(t))s.call(t,i)&&o(e,i,t[i]);return e})({},f(u)),t(j,i({columns:d,firstSupplierList:c,handleTableOptionClick:(e,t)=>{},SupplierManagedbl:({item:e,type:t})=>{"dblclick"===t&&p.push({name:"SupplierManageDetail",query:{uuid:e.uuid,type:"see",isSee:1}})}}));var j}},[["render",function(e,t,i,r,a,s){const o=p;return j(),k("div",P,[u(o,{"form-data":e.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:r.columns,pagination:e.submitForm,draggable:!1,options:!0,select:r.firstSupplierList,"table-option-click":r.handleTableOptionClick,onOnClick:r.SupplierManagedbl},null,8,["form-data","submit-form","table-data","columns","pagination","select","table-option-click","onOnClick"])])}],["__scopeId","data-v-bad4b576"]]);export{w as default};
