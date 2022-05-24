var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,o=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&r(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&r(e,a,t[a]);return e},n=(e,i)=>t(e,a(i));import{_ as u}from"./BaseStencil.46c3d678.js";import{_ as d}from"./BaseTable.36f55649.js";import{_ as p}from"./BaseName.1aa32b4b.js";import{g as c,j as m,e as b,G as g,S as h,B as f,J as y,Q as k,n as j,D as w,t as v,L as V,o as x,a5 as C,c as S,w as F,a6 as U,z as N,v as T,F as D,a9 as _,aa as L}from"./@vue.23a4bd1a.js";import{j as O}from"./index.1eb722f1.js";import{g as R,a as P,r as z,p as E}from"./index.11e7499a.js";import{u as A}from"./vue-router.91336ba9.js";import{s as B,g as I}from"./businessRule.60794e55.js";import{u as q}from"./vuex.c868d4e0.js";import{_ as G}from"./index.ab904951.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./sortablejs.621e50ab.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";/* empty css                                                             */import"./axios.7b768d2b.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";var H={name:"PurchaseReturn",setup(){const e=A(),t=q(),a=c([]),r=m({supplier:[]}),u=m({keyList:["productName","specification","unit","manufacturer"],tableData2:[],row:{},submitForm1:{"page.currentPage":1,"page.pageSize":500},columns2:[{type:"selection",width:50,align:"center"},{type:"index",title:"序号",formConfig:{width:50},fixed:"left"},{title:"商品编码",key:"code",width:140},{title:"商品名称/规格/单位/生产厂家",width:300,render:e=>b(p,{row:e,list:u.keyList},null)},{title:"批次",key:"batchNumIn",width:78},{title:"批号",key:"batchNum",align:"right"},{title:"生产日期",key:"productionDate",align:"right"},{title:"有效期至",key:"expireDate",align:"right"},{title:"退货数量",key:"returnNum",align:"right"},{title:"退货原因",key:"reason"}],pickUpVisible:!1,isClear:!1,dialogVisible:!1,pageTitle:"冲红",loading:!1,dialogValue:{},tableData:[],baseForm:{labelWidth:"90px",inline:!0,list:[{type:"INPUT",key:"returnNo",placeholder:"退货单编号"},{type:"SELECT",key:"supplierName",placeholder:"供应商名称",props:{label:"supplierName",value:"supplierName"},list:()=>r.supplier},{label:"",type:"SELECT",placeholder:"门店",config:{multiple:!0},key:"businessUuids",props:{label:"name",value:"uuid"},list:()=>a.value},{label:"",type:"SELECT",placeholder:"供应商取货状态",key:"pickState",list:[{label:"待取货",value:0},{label:"部分取货",value:1},{label:"取货完成",value:2}]},{type:"LINKAGETIME",keys:["startTime","endTime"],design:{width:"240px"},key:"planDate",config:{"start-placeholder":"制单开始时间","end-placeholder":"制单结束时间"}}]},columns:[{title:"序号",type:"index",formConfig:{width:50}},{title:"门店",key:"business",formConfig:{"min-width":150}},{title:"退货单编号",key:"returnNo",width:150},{title:"供应商名称",key:"supplierName",width:180},{title:"商品种类",key:"category1",width:100,align:"right"},{title:"退货数量",width:120,align:"right",key:"returnNum"},{title:"含税金额合计",key:"totalAmountTax",width:150,align:"right"},{title:"金额合计",key:"totalAmount",width:120,align:"right"},{title:"创建人",key:"createUser",width:120},{title:"制单时间",key:"planDate",width:180},{title:"供应商结算状态",key:"pickState",width:100,render:e=>g("span",{innerText:["待取货","部分取货","取货完成"][e.pickState]})},{title:"结算状态",key:"settleState",width:78,render:e=>["未结算","结算中","已结算","已冲红"][e.settleState]||"-"},{title:"操作",key:"options",width:150,render:t=>[b(f("el-button"),{type:"text",onClick:()=>{e.push({path:"/purchase/add-purchase-return",query:{uuid:t.uuid,isDetail:!0}})}},{default:()=>[h("查看")]}),y(b(f("el-button"),{type:"text",onClick:()=>{S(t)}},{default:()=>[h("取货")]}),[[k,[0,1].includes(t.pickState)]]),y(b(f("el-button"),{type:"text",onClick:()=>{x(t)}},{default:()=>[h("冲红")]}),[[k,1===t.canRush]])]}],submitForm:{"page.currentPage":1,"page.pageSize":10,businessUuids:[]},select:[]}),d=async()=>{r.supplier=await O()},V=()=>{let e=u.submitForm,{total:t,businessUuids:a}=e,r=((e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(e,["total","businessUuids"]);a=B(a);let n=o({businessUuids:a},r);P(n).then((e=>{u.submitForm.total=e.totalCount,u.tableData=e.list}))},x=e=>{u.dialogVisible=!0,u.dialogValue=e},C=async()=>{try{a.value=await t.dispatch("common/mechanism"),I(a.value,u,u.baseForm)}catch(e){return e}},S=async e=>{let{uuid:t,businessUuid:a}=e,{records:i,total:l}=await R(n(o({},u.submitForm1),{uuid:t,businessUuid:a}));u.tableData2=i,u.submitForm1.total=l,u.pickUpVisible=!0,u.cacheRow=e};return j((()=>{d()})),w((()=>{V(),C()})),n(o(o({},v(r)),v(u)),{getPurchaseReturnList:V,getSupplierList:d,addMsg:x,handleRushRed:async()=>{let e=u.dialogValue.uuid;await z({uuid:e}),u.dialogVisible=!1,V()},getFindListData:C,handleClose:()=>{u.extractVisible=!1},getList:S,handleSubmit2:async()=>{u.select.length&&(await E({detail:u.select,uuid:u.cacheRow.uuid,getAll:!1}),await V()),u.cacheRow={},u.pickUpVisible=!1},handleSelect:e=>{u.select=e},handleTableClick:({type:t,item:a})=>{"dblclick"===t&&e.push({path:"/purchase/add-purchase-return",query:{uuid:a.uuid,isDetail:!0}})}})}};const M=e=>(_("data-v-1fb63091"),e=e(),L(),e),J=M((()=>U("i",{class:"el-icon-warning"},null,-1))),K=h(" 确认冲红吗？ "),Q={class:"dialogFather"},W=h(" 冲红商品种类： "),X={class:"dialogFather"},Y=h(" 冲红商品数量合计： "),Z={class:"dialogFather"},$=h(" 冲红金额合计： "),ee={class:"dialogFather"},te=h(" 冲红含税金额合计： "),ae=M((()=>U("div",{class:"dialogRemark"},"注：完成后系统自动调整库存数量和库存金额",-1))),ie={class:"dialog-footer"},le=h("取 消"),se=h(" 确 定 "),re={class:"dialog-footer"},oe=h("取 消"),ne=h(" 确 定 ");var ue=G(H,[["render",function(e,t,a,i,l,s){const r=u,o=f("el-button"),n=f("el-dialog"),p=d,c=V("loading");return x(),C(D,null,[b(r,{"form-data":e.baseForm,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.columns,pagination:e.submitForm,options:!0,select:i.getPurchaseReturnList,isClear:e.isClear,onOnClick:i.handleTableClick,add:{name:"新增退货单",path:{path:"/purchase/add-purchase-return"}}},null,8,["form-data","submit-form","table-data","columns","pagination","select","isClear","onOnClick"]),e.dialogVisible?(x(),S(n,{key:0,title:e.pageTitle,width:"420px",modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialogVisible=t)},{footer:F((()=>[U("span",ie,[b(o,{onClick:t[1]||(t[1]=t=>e.dialogVisible=!1)},{default:F((()=>[le])),_:1}),b(o,{type:"primary",loading:e.loading,onClick:i.handleRushRed},{default:F((()=>[se])),_:1},8,["loading","onClick"])])])),default:F((()=>[J,K,U("div",Q,[W,U("span",null,N(e.dialogValue.category1),1)]),U("div",X,[Y,U("span",null,N(e.dialogValue.returnNum),1)]),U("div",Z,[$,U("span",null,N(e.dialogValue.totalAmount)+"元",1)]),U("div",ee,[te,U("span",null,N(e.dialogValue.totalAmountTax)+"元",1)]),ae])),_:1},8,["title","modelValue"])):T("",!0),b(n,{title:"取货",modelValue:e.pickUpVisible,"onUpdate:modelValue":t[5]||(t[5]=t=>e.pickUpVisible=t),width:"1200px"},{footer:F((()=>[U("span",re,[b(o,{onClick:t[3]||(t[3]=t=>e.pickUpVisible=!1),size:"small"},{default:F((()=>[oe])),_:1}),y(b(o,{type:"primary",onClick:t[4]||(t[4]=e=>i.handleSubmit2()),size:"small"},{default:F((()=>[ne])),_:1},512),[[c,e.loading]])])])),default:F((()=>[b(p,{maxHeight:385,"table-data":e.tableData2,columns:e.columns2,select:i.getList,optionShow:!1,multipleSelection:i.handleSelect},null,8,["table-data","columns","select","multipleSelection"])])),_:1},8,["modelValue"])],64)}],["__scopeId","data-v-1fb63091"]]);export{ue as default};
