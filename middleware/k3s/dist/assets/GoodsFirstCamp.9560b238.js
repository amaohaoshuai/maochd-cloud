var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;import{_ as s}from"./BaseStencil.46c3d678.js";import{u as o}from"./vue-router.91336ba9.js";import{g as l,j as p,t as m,B as b,o as d,a5 as n,e as u,w as c,S as y}from"./@vue.23a4bd1a.js";import{_ as f}from"./index.ab904951.js";import"./BaseForm.bc55ad6b.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./BaseTable.36f55649.js";import"./sortablejs.621e50ab.js";import"./vuex.c868d4e0.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./element-plus.b44d97a8.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./nprogress.8b4927f9.js";import"./axios.7b768d2b.js";import"./default-passive-events.74004992.js";var j={name:"GoodsFirstCamp",setup(e,s){o(),l(null),l([]);const b=p({loading:!1,tableData:[],deepSearchTable:{form:{inline:!0,labelWidth:"100px",list:[{label:"商品信息",type:"INPUT",key:""},{label:"商品类别",type:"SELECT",key:"",list:[{label:"11",value:"22"}]},{label:"商品分类",type:"SELECT",key:"",list:[{label:"11",value:"22"}]},{label:"创建人",type:"INPUT",key:""},{label:"创建时间",type:"LINKAGETIME",keys:["startTime","endTime"],design:{width:"220px"},key:""}]},tableConfig:{columns:[{title:"商品编码",key:"",width:80},{title:"商品名称",key:"",width:180},{title:"商品分类",key:"",width:128},{title:"商品类别",key:"",width:110},{title:"规格",key:"",width:170},{title:"单位",key:"",width:64},{title:"零售价",key:"",align:"right",width:110},{title:"会员价",key:"",align:"right",width:110},{title:"生产厂家",key:"",width:170},{title:"批准文号",key:"",width:224},{title:"上市持有人",key:"",width:170},{title:"创建时间",key:"",width:110},{title:"审核状态",key:"",width:78}]}},submitForm:{"page.currentPage":1,"page.pageSize":10},columns:[]});return((e,s)=>{for(var o in s||(s={}))a.call(s,o)&&r(e,o,s[o]);if(t)for(var o of t(s))i.call(s,o)&&r(e,o,s[o]);return e})({},m(b))}};const h={class:"supplier"},v=y("导出");var g=f(j,[["render",function(e,t,a,i,r,o){const l=b("el-button"),p=s;return d(),n("div",h,[u(p,{"form-data":e.deepSearchTable.form,"submit-form":e.submitForm,"onUpdate:submit-form":t[0]||(t[0]=t=>e.submitForm=t),class:"base-stencil","table-data":e.tableData,columns:e.deepSearchTable.tableConfig.columns,pagination:e.submitForm,options:!0,optionShow:!1,ref:"form"},{buttons:c((()=>[u(l,{style:{"margin-bottom":"22px"},plain:"",type:"primary"},{default:c((()=>[v])),_:1})])),_:1},8,["form-data","submit-form","table-data","columns","pagination"])])}],["__scopeId","data-v-2aa7e42e"]]);export{g as default};
