var e=Object.defineProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,i,a)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a;import{_ as r}from"./BaseStencil.46c3d678.js";import{u as s}from"./vue-router.91336ba9.js";import{g as o,j as p,t as d,B as m,o as b,a5 as n,e as y,w as c,S as u}from"./@vue.23a4bd1a.js";import{_ as h}from"./index.ab904951.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./vuex.c868d4e0.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./axios.7b768d2b.js";import"./default-passive-events.74004992.js";var f={name:"SellRecord",setup(e,r){s(),o(null),o([]);const m=p({loading:!1,tableData:[],deepSearchTable:{form:{inline:!0,labelWidth:"100px",list:[{label:"销售单号",type:"INPUT",key:""},{label:"商品名称",type:"INPUT",key:"",list:[{label:"11",value:"22"},{}]},{label:"会员信息",type:"INPUT",key:"",placeholder:"会员姓名/手机号"},{label:"商品类别",type:"SELECT",key:"",list:[{label:"11",value:"22"},{}]},{label:"门店",type:"SELECT",key:"",list:[{label:"11",value:"22"},{}]},{label:"结算时间",type:"LINKAGETIME",keys:["startTime","endTime"],design:{width:"220px"},key:""}]},tableConfig:{columns:[{title:"销售单号",key:"",width:160},{title:"会员姓名",key:"",width:78},{title:"会员手机号",key:"",width:110},{title:"应收金额",key:"",width:110},{title:"实收金额",key:"",width:110},{title:"获取积分",key:"",width:78},{title:"商品名称",key:"",width:200},{title:"批号",key:"",width:200},{title:"有效期至",key:"",width:110},{title:"销售数量",key:"",align:"right",width:90},{title:"小计",key:"",align:"right",width:90},{title:"零售价",key:"",align:"right",width:90},{title:"会员价",align:"right",key:"",width:90},{title:"是否处方",key:"",width:90},{title:"是否特殊制剂",key:"",width:110},{title:"姓名",key:"",width:60},{title:"身份证",key:"",width:180},{title:"医疗机构",key:"",width:90},{title:"处方号",key:"",width:178},{title:"医师",key:"",width:60},{title:"药师",key:"",width:60},{title:"门店",key:"",width:110},{title:"收银员",key:"",width:78},{title:"销售员",key:"",width:78},{title:"结算时间",key:"",width:178}]}},submitForm:{"page.currentPage":1,"page.pageSize":10},columns:[]});return((e,r)=>{for(var s in r||(r={}))i.call(r,s)&&l(e,s,r[s]);if(t)for(var s of t(r))a.call(r,s)&&l(e,s,r[s]);return e})({},d(m))}};const j={class:"supplier"},k=u("导出");var w=h(f,[["render",function(e,t,i,a,l,s){const o=m("el-button"),p=r;return b(),n("div",j,[y(p,{"form-data":e.deepSearchTable.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.deepSearchTable.tableConfig.columns,pagination:e.submitForm,options:!0,optionShow:!1,ref:"form"},{buttons:c((()=>[y(o,{style:{"margin-bottom":"22px"},plain:"",type:"primary"},{default:c((()=>[k])),_:1})])),_:1},8,["form-data","submit-form","table-data","columns","pagination"])])}],["__scopeId","data-v-48e432fe"]]);export{w as default};
