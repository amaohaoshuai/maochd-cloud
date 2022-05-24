var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,i,a)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[i]=a,o=(e,t)=>{for(var i in t||(t={}))l.call(t,i)&&s(e,i,t[i]);if(a)for(var i of a(t))n.call(t,i)&&s(e,i,t[i]);return e},r=(e,a)=>t(e,i(a)),d=(e,t)=>{var i={};for(var s in e)l.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&a)for(var s of a(e))t.indexOf(s)<0&&n.call(e,s)&&(i[s]=e[s]);return i};import{_ as u}from"./SubmitButton.99d990fd.js";import{_ as p}from"./EditForm.8c35f1a6.js";import{_ as m}from"./BaseTable.36f55649.js";import{_ as c}from"./SelectTable.80e1f2f6.js";import{_ as b}from"./KeyBoard.96ba8d0b.js";import{_ as g}from"./BaseForm.bc55ad6b.js";import{_ as f}from"./BaseCard.46de0c24.js";import{g as h}from"./formRule.f80f9ec7.js";import{b as y,e as x,f as v,d as w,_ as k}from"./element-plus.b44d97a8.js";import{_ as T}from"./index.ab904951.js";import{j as F,h as S,i as U,q as N,t as C,B as P,o as j,c as D,w as z,a5 as L,N as M,F as _,x as A,G as V,D as O,g as R,e as I,v as q,a6 as H,z as B,a9 as E,aa as W,S as $}from"./@vue.23a4bd1a.js";import{_ as K}from"./BaseName.1aa32b4b.js";import{_ as G}from"./lodash.d7ab6f48.js";import{s as J,f as Q,e as X,h as Y,i as Z,p as ee}from"./index.1eb722f1.js";import{e as te}from"./index.778e5621.js";import{b as ie}from"./vue-router.91336ba9.js";import{g as ae}from"./filter.c2c8f0b9.js";import"./moment.08a7f518.js";import{a as le}from"./businessRule.60794e55.js";import{u as ne}from"./vuex.c868d4e0.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./sortablejs.621e50ab.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./public.9c1d8f39.js";import"./verification.ecddc814.js";import"./resize-observer-polyfill.d4249adb.js";import"./dayjs.bad04745.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./axios.7b768d2b.js";import"./default-passive-events.74004992.js";/* empty css                                                             */var se=T({props:{config:{type:Object,default:()=>({})},list:{type:Array,default:()=>[]},data:{type:[Object,Array],default:()=>({})},keyWord:{type:String,default:()=>""},disabled:[Function,Boolean],props:Object,placeholder:String},setup(e,{emit:t}){const i=F({options:[],modelValue:void 0}),a=S((()=>"function"==typeof e.disabled?e.disabled():e.disabled));return U((()=>e.list),((t,a)=>{i.options=[],N((()=>{i.options=e.list}))}),{immediate:!0}),r(o({},C(i)),{d:a,reset:()=>{e.data[key]=void 0}})}},[["render",function(e,t,i,a,l,n){const s=P("el-option"),o=P("el-select");return j(),D(o,A({clearable:"",filterable:"",disabled:a.d},i.config,{modelValue:i.data[i.keyWord],"onUpdate:modelValue":t[0]||(t[0]=e=>i.data[i.keyWord]=e)}),{default:z((()=>[(j(!0),L(_,null,M(e.options,(e=>(j(),D(s,{key:e[i.props?i.props.value:"value"],label:e[i.props?i.props.label:"label"],value:e[i.props?i.props.value:"value"]},null,8,["label","value"])))),128))])),_:1},16,["disabled","modelValue"])}]]);const oe=["name","specification","unit","manufacturer"];let re="";const de={name:"ProcurementPlanAdd",setup(e,t){const i=ne();let a=F({supList:[],tableData:[],findList:[],pot:0});const l=new Date,n=F({isFlag:!0,oldBusiness:"",type:"",query:"***",title:"新增采购计划单",tabClose:!1,submitForm:{},submitForm1:{"page.currentPage":1,"page.pageSize":10,isFirst:0},textarea1:"",submitForm3:{tips:"建议采购量<补货下限,不生成计划单"},multipleSelectionList:[],currentObj:{},tableData2:[],formConfig2:{"highlight-current-row":!0},dialogVisible:!1,draggable:!0,optionShow:!1,loading:!1,loading2:!1,loading3:!1,currentRow:{},supplier:{},options:[],value:"",baseTable:null,dialogVisible2:!1,selectForm2:null,pagination:{page:1,size:10,total:100},columnsList:[],keys:["code","name","dosageForm","specification","manufacturer"]}),s=S((()=>{let e=0;return a.tableData.map((t=>{t.taxAmount&&(e+=100*t.taxAmount)})),(e/100).toFixed(2)})),u=()=>{te(n.submitForm1).then((e=>{n.tableData2=e.list,n.submitForm1.total=e.totalCount}))},p=ie();O((async()=>{n.type=p.query.type,"see"==n.type?n.columnsList=T.columns1:n.columnsList=T.columns,n.query!==p.query.uuid&&(n.query=p.query.uuid,a.supList=await J(),a.findList=await i.dispatch("common/mechanism"),p.query.uuid&&(n.submitForm.uuid=p.query.uuid,n.title="编辑采购计划单",ee(n.submitForm.uuid).then((e=>{let t=e,{details:i}=t,l=d(t,["details"]);n.submitForm=l,i.forEach((e=>{null===e.purchaseNum&&(e.purchaseNum=void 0),null===e.taxPaid&&(e.taxPaid=void 0),null===e.inputTaxRate&&(e.inputTaxRate=void 0)})),a.tableData=i,n.oldBusiness=e.businessUuid}))),void 0===p.query.uuid&&(n.submitForm={},a.findList.length&&(le(n.submitForm,a.findList),n.submitForm.business=a.findList[0].name),a.tableData=[])),n.options=[],n.submitForm.createUser=i.state.common.info.userName}));const m=R(null);const c=e=>{n.dialogVisible2=!1};const b=e=>{a.tableData.push(o(o({},e),{purchaseNum:void 0,taxPaid:null===e.taxPaid?void 0:e.taxPaid,inputTaxRate:null===e.inputTaxRate?void 0:e.inputTaxRate})),n.value="",n.options=[],n.pagination.page=Math.ceil(a.tableData.length/n.pagination.size);let t=a.tableData.length%n.pagination.size;a.pot=t?t-1:n.pagination.size-1,n.options=[]},g=e=>G.findIndex(a.tableData,{drugUuid:e})>-1,f=R(null),T=F(function(e,t,i,a,l,n,s,o){return{columns:[{type:"selection",fixed:"left"},{type:"index",title:"序号",formConfig:{width:50},fixed:"left"},{title:"商品编号",key:"code",fixed:"left",width:80},{title:"商品名称/规格/单位/生产厂家",key:"name",width:256,fixed:"left",formConfig:{"show-overflow-tooltip":!1},render:e=>V(K,{row:e,list:oe})},{title:"库存数量",header:({})=>V("div",{innerHTML:"see"==n()?"参考库存":"库存数量"}),key:"availableStock",width:100,render:e=>(0==e.overallPackNum?"0"+e.unit:e.overallPackNum?e.overallPackNum+e.unit:"")+(e.deleavePackNum?e.deleavePackNum+e.splitUnit:"")||"-"},{title:"月销量",key:"amount",width:100,header:({})=>V("div",{innerHTML:"see"==n()?"参考月销量":"月销量"}),render:e=>(0==e.overallMonthSales?"0"+e.unit:e.overallMonthSales?e.overallMonthSales+e.unit:"")+(e.deleaveMonthSales?e.deleaveMonthSales+e.splitUnit:"")||"-"},{title:"周销量",key:"weekSales",width:100,header:({})=>V("div",{innerHTML:"see"==n()?"参考周销量":"周销量"}),render:e=>(0==e.overallWeekSales?"0"+e.unit:e.overallWeekSales?e.overallWeekSales+e.unit:"")+(e.deleaveWeekSales?e.deleaveWeekSales+e.splitUnit:"")||"-"},{title:"采购数量",key:"purchaseNum",width:120,header:({})=>V("div",{innerHTML:'<span style="color: red">*</span>采购数量'}),render:(e,t,i,a)=>V(x,{class:e[`purchaseNum_${a}`],size:"mini",step:1e-6,"step-strictly":!0,"model-value":e.purchaseNum?e.purchaseNum:void 0,min:1e-6,max:999999.999999,controls:!1,placeholder:"请输入",style:"width:100px;",disabled:"see"==n(),onInput:t=>{e.purchaseNum=t}}),require:!0},{title:"含税进价",key:"taxPaid",width:140,header:({})=>V("div",{innerHTML:'<span style="color: red">*</span>含税进价'}),render:(e,t,i,a)=>V("div",null,[V(x,{class:e[`taxPaid_${a}`],size:"mini",step:1e-6,"step-strictly":!0,"model-value":e.taxPaid?e.taxPaid:void 0,min:1e-6,max:99999999.999999,controls:!1,placeholder:"请输入",style:"width:100px",ref:"input",disabled:"see"==n(),onChange:t=>{e.taxPaid=t}}),V("i",{class:e.taxPaid==e.lastTaxPaid?"":e.taxPaid>e.lastTaxPaid?"el-icon-top":"el-icon-bottom",style:e.taxPaid>e.lastTaxPaid?"position: absolute; right: 17px; top: 14px; color: red; font-weight: 700;":"position: absolute; right: 17px; top: 14px; color: green; font-weight: 700;"})]),require:!0},{title:"供应商名称",key:"supplierUuid",width:200,header:({})=>V("div",{innerHTML:'<span style="color: red">*</span>供应商名称'}),render:(t,i,a,l)=>V(se,{size:"mini",list:e(),props:{label:"supplierName",value:"supplierUuid"},"model-value":t.supplierUuid,class:t[`supplierUuid_${l}`],style:"width:160px",disabled:"see"==n(),onChange:i=>{let a=e(),l=G.findIndex(a,{supplierUuid:i});t.supplierUuid=i,l>-1&&(t.supplierName=a[l].supplierName)}}),require:!0},{title:"含税金额",key:"taxAmount",width:110,align:"right",render:e=>{let t=(e.purchaseNum*e.taxPaid).toFixed(2);return t=isNaN(t)?0:t,e.taxAmount=t,V("span",{innerText:t})}},{title:"进价",key:"price",width:100,align:"right",render:e=>{let t="-";return e.taxPaid&&(t=parseFloat((e.taxPaid/(1+e.inputTaxRate/100)).toFixed(6)),e.price=t),V("span",{innerText:t})}},{title:"金额",key:"amount",width:100,align:"right",render:e=>{let t="-";return e.price&&e.purchaseNum&&"-"!=e.price&&(t=(e.price*e.purchaseNum).toFixed(2),e.amount=t),V("span",{innerText:t})}},{title:"差额",key:"diffAmount",width:80,align:"right",header:()=>V(v,{effect:"dark",content:"=此次含税进价-上次含税进价",placement:"top"},[V("div",{innerHTML:'差额<i class="el-icon-warning"></i>'})]),render:e=>(e.diffAmount=e.taxPaid?e.taxPaid-e.lastTaxPaid:0-e.lastTaxPaid,V("span",{style:e.diffAmount>0?"color: red":e.diffAmount<0?"color: green":"",innerHTML:e.diffAmount}))},{title:"进项税率",key:"inputTaxRate",width:120,render:e=>V(x,{size:"mini","model-value":e.inputTaxRate,style:"width:100px",min:0,max:100,"step-strictly":!0,controls:!1,disabled:"see"==n(),placeholder:"请输入",onInput:t=>{e.inputTaxRate=t}})},{title:"税额",key:"tax",width:100,align:"right",render:e=>{let t="-";return e.taxAmount&&e.amount&&(t=(e.taxAmount-e.amount).toFixed(2)),V("span",{innerText:isNaN(t)?"0.00":t})}},{title:"零售价",key:"retailPrice",align:"right",width:100},{title:"零售金额",key:"retailAmount",align:"right",width:100,render:e=>{let t="-";return e.retailPrice&&e.purchaseNum&&(t=(e.retailPrice*e.purchaseNum).toFixed(2),e.retailAmount=t),V("span",{innerText:t})}},{title:"批准文号",key:"approvalNumber",width:224},{title:"上市许可持有人",key:"holderPermit",width:170,isShowTwo:!0,formConfig:{"show-overflow-tooltip":!1}},{title:"操作",key:"options",fixed:"right",width:100,render:(e,i,l,n)=>V("div",[{type:"text",innerHTML:"删除",onClick:()=>{let i=t(),l=G.findIndex(i,{drugUuid:e.drugUuid});i.splice(l,1),a()},style:{color:"#f56c6c"}}].map((e=>{if(!e.show)return V(w,e)})))}],columns1:[{type:"index",title:"序号",formConfig:{width:50},fixed:"left"},{title:"商品编号",key:"code",fixed:"left",width:80},{title:"商品名称/规格/单位/生产厂家",key:"name",width:256,fixed:"left",formConfig:{"show-overflow-tooltip":!1},render:e=>V(K,{row:e,list:oe})},{title:"库存数量",header:({})=>V("div",{innerHTML:"see"==n()?"参考库存":"库存数量"}),key:"availableStock",width:100,render:e=>(0==e.overallPackNum?"0"+e.unit:e.overallPackNum?e.overallPackNum+e.unit:"")+(e.deleavePackNum?e.deleavePackNum+e.splitUnit:"")||"-"},{title:"月销量",key:"amount",width:100,header:({})=>V("div",{innerHTML:"see"==n()?"参考月销量":"月销量"}),render:e=>(0==e.overallMonthSales?"0"+e.unit:e.overallMonthSales?e.overallMonthSales+e.unit:"")+(e.deleaveMonthSales?e.deleaveMonthSales+e.splitUnit:"")||"-"},{title:"周销量",key:"weekSales",width:100,header:({})=>V("div",{innerHTML:"see"==n()?"参考周销量":"周销量"}),render:e=>(0==e.overallWeekSales?"0"+e.unit:e.overallWeekSales?e.overallWeekSales+e.unit:"")+(e.deleaveWeekSales?e.deleaveWeekSales+e.splitUnit:"")||"-"},{title:"采购数量",key:"purchaseNum",width:120,header:({})=>V("div",{innerHTML:'<span style="color: red">*</span>采购数量'}),render:(e,t,i,a)=>V(x,{class:e[`purchaseNum_${a}`],size:"mini",step:1e-6,"step-strictly":!0,"model-value":e.purchaseNum,min:1e-6,max:999999.999999,controls:!1,placeholder:"请输入",style:"width:100px;",disabled:"see"==n(),onInput:t=>{e.purchaseNum=t}}),require:!0},{title:"含税进价",key:"taxPaid",width:140,header:({})=>V("div",{innerHTML:'<span style="color: red">*</span>含税进价'}),render:(e,t,i,a)=>V("div",null,[V(x,{class:e[`taxPaid_${a}`],size:"mini",step:1e-6,"step-strictly":!0,"model-value":e.taxPaid,min:0,max:99999999.999999,controls:!1,placeholder:"请输入",style:"width:100px",ref:"input",disabled:"see"==n(),onChange:t=>{e.taxPaid=t}}),V("i",{class:e.diffAmount?e.diffAmount>0?"el-icon-top":"el-icon-bottom":"",style:e.taxPaid>e.lastTaxPaid?"position: absolute; right: 17px; top: 14px; color: red; font-weight: 700;":"position: absolute; right: 17px; top: 14px; color: green; font-weight: 700;"})]),require:!0},{title:"供应商名称",key:"supplierUuid",width:200,header:({})=>V("div",{innerHTML:'<span style="color: red">*</span>供应商名称'}),render:(t,i,a,l)=>V(se,{size:"mini",list:e(),props:{label:"supplierName",value:"supplierUuid"},"model-value":t.supplierUuid,class:t[`supplierUuid_${l}`],style:"width:160px",disabled:"see"==n(),onChange:i=>{let a=e(),l=G.findIndex(a,{supplierUuid:i});t.supplierUuid=i,l>-1&&(t.supplierName=a[l].supplierName)}}),require:!0},{title:"含税金额",key:"taxAmount",width:110,align:"right",render:e=>{let t=(e.purchaseNum*e.taxPaid).toFixed(2);return t=isNaN(t)?0:t,e.taxAmount=t,V("span",{innerText:t})}},{title:"进价",key:"price",width:100,align:"right",render:e=>{let t="-";return e.taxPaid&&(t=parseFloat((e.taxPaid/(1+e.inputTaxRate/100)).toFixed(6)),e.price=t),V("span",{innerText:t})}},{title:"金额",key:"amount",width:100,align:"right",render:e=>{let t="-";return e.price&&e.purchaseNum&&"-"!=e.price&&(t=(e.price*e.purchaseNum).toFixed(2),e.amount=t),V("span",{innerText:t})}},{title:"差额",key:"diffAmount",width:80,align:"right",header:()=>V(v,{effect:"dark",content:"=此次含税进价-上次含税进价",placement:"top"},[V("div",{innerHTML:'差额<i class="el-icon-warning"></i>'})]),render:e=>V("span",{style:e.diffAmount>0?"color: red":e.diffAmount<0?"color: green":"",innerHTML:e.diffAmount?e.diffAmount:"-"})},{title:"进项税率",key:"inputTaxRate",width:120,render:e=>V(x,{size:"mini","model-value":e.inputTaxRate,style:"width:100px",min:0,max:100,"step-strictly":!0,controls:!1,disabled:"see"==n(),placeholder:"请输入",onInput:t=>{e.inputTaxRate=t}})},{title:"税额",key:"tax",width:100,align:"right",render:e=>{let t="-";return e.taxAmount&&e.amount&&(t=(e.taxAmount-e.amount).toFixed(2)),V("span",{innerText:isNaN(t)?"0.00":t})}},{title:"零售价",key:"retailPrice",align:"right",width:100},{title:"零售金额",key:"retailAmount",align:"right",width:100,render:e=>{let t="-";return e.retailPrice&&e.purchaseNum&&(t=(e.retailPrice*e.purchaseNum).toFixed(2),e.retailAmount=t),V("span",{innerText:t})}},{title:"批准文号",key:"approvalNumber",width:224},{title:"上市许可持有人",key:"holderPermit",width:170,isShowTwo:!0,formConfig:{"show-overflow-tooltip":!1}}],columns2:[{title:"供应商编号",key:"supplierKey"},{title:"供应商名称",key:"supplierName"},{title:"供应商类别",key:"supplierType",width:78},{title:"助记码",key:"mnemonic"},{title:"地址",key:"address"}],formData:{inline:!0,labelWidth:"90px",list:[{type:"SELECT",placeholder:"请选择",label:"门店",key:"businessUuid",span:8,require:!0,rules:h("SELECT","请选择门店"),design:{width:"224px"},props:{label:"name",value:"uuid"},config:{onChange:e=>{let a=G.find(i(),{uuid:e}),n=l();n.business=a.name;let r=t();0==r.length&&(re=n.businessUuid),r.length>0&&y.confirm("切换当前门店会清空数据!","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{o.tableData=[],re=n.businessUuid})).catch((()=>{let e=s();e&&(re=e),""!=n.businessUuid&&(n.businessUuid=re)}))}},list:()=>i(),disabled:()=>"see"==n()},{type:"INPUT",placeholder:"请输入,不超过100字",label:"备注",key:"remark",span:16,design:{width:"414px"},config:{"show-word-limit":!1,type:"textarea",maxlength:100,autosize:{minRows:1,maxRows:1}},disabled:()=>"see"==n()},{label:"计划单编号",key:"planNo",span:8,type:"DIV"},{label:"创建人",key:"createUser",span:8,type:"DIV"},{placeholder:"请输入",label:"制单时间",key:"planDate",span:8,type:"DIV"}]},formData2:{inline:!0,labelWidth:"82px",config:{size:"medium"},list:[{type:"INPUT",placeholder:"供应商编号/供应商名称/助记码",label:"供应商名称",key:"name",design:{width:"350px"}}]},formData3:{inline:!1,labelWidth:"150px",list:[{label:"日均销量计算日期段",type:"TIME2",key:"time",keys:["planDate.start","planDate.end"],plas:["创建开始时间","创建结束日期"],config:{type:"daterange"},design:{width:"240px"},required:!0,rules:h("SELECT","日均销量计算日期段")},{type:"NUMBER-INPUT",placeholder:"请输入",label:"补货下限",key:"replenishDay",design:{width:"170px"},precision:0,add2:'<span style="margin-left:4px;">天×日均销量<span>',required:!0,config:{min:0},rules:h("SELECT","补货下限")},{type:"NUMBER-INPUT",placeholder:"请输入",label:"建议采购量",key:"purchaseDay",design:{width:"180px"},config:{min:0},precision:0,add2:'<span style="margin-left:4px;">天×日均销量-剩余库存-在途数量<span>',add:'<span style="margin-right:4px;">采购周期<span>',required:!0,rules:h("SELECT","建议采购量")},{key:"tips",span:8,type:"DIV",config:{style:{color:"#909399",lineHeight:"18px",fontSize:"12px"}}}]}}}((()=>a.supList),(()=>a.tableData),(()=>a.findList),(()=>a.pot),(()=>n.submitForm),(()=>n.type),(()=>n.oldBusiness),a)),U=()=>{n.submitForm.businessUuid||y.confirm("请选择门店后,再进行操作","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{n.isFlag=!0})).catch((()=>{n.isFlag=!0}))};return r(o(o(o({},C(n)),C(a)),C(T)),{del:function(){if(n.multipleSelectionList.length){for(let e=a.tableData.length-1;e>=0;e--){G.findIndex(n.multipleSelectionList,{drugUuid:a.tableData[e].drugUuid})>-1&&a.tableData.splice(e,1)}a.pot=0}else k.warning({message:"还未选择商品！",type:"warning"})},addMsg:function(){n.submitForm.businessUuid?n.multipleSelectionList.length?(u(),n.dialogVisible=!0,n.currentObj={}):k.warning({message:"还未选择药品！",type:"warning"}):U()},handleSubmit:function(){if("{}"!==JSON.stringify(n.currentObj)){for(let e=a.tableData.length-1;e>=0;e--){G.findIndex(n.multipleSelectionList,{drugUuid:a.tableData[e].drugUuid})>-1&&(a.tableData[e].supplierUuid=n.currentObj.uuid,a.tableData[e].supplierName=n.currentObj.supplierName)}n.dialogVisible=!1}else k.warning({message:"还未选择供应商！",type:"warning"})},remoteMethod:function(e){if(n.isFlag){if(!n.submitForm.businessUuid)return void U();let t=e.replace(/(^\s*)|(\s*$)/g,"");t?(n.loading2=!0,setTimeout((()=>{Q({fuzzyValue:t,businessUuid:n.submitForm.businessUuid}).then((e=>{n.options=e,1==e.length&&(g(e[0].drugUuid)?k.warning({message:e[0].name+"已存在请勿重复添加！",type:"warning"}):b(e[0]))})).finally((()=>{n.loading2=!1}))}),200)):n.options=[],n.submitForm.businessUuid||(n.isFlag=!1)}},getStr:e=>e||!e&0===e?e:"-",drugChange:b,isDisabled:g,handleOnInput:(e,t,i)=>{e[t]=i},multipleSelection:e=>{e.length?n.multipleSelectionList=e:n.baseTable.toggleSelection(n.multipleSelectionList)},currentRow:e=>{n.currentObj=e},hold:e=>{if(n.submitForm.businessUuid){if(f.value.handleClick(e)){n.loading3=!0;const e=r(o({},n.submitForm),{details:a.tableData,planStatus:0});X(e).then((e=>{n.tabClose=!0})).finally((()=>{n.loading3=!1}))}}else U()},submitTips:U,dialogVisibleTips:()=>{n.submitForm.businessUuid?n.dialogVisible2=!0:U()},submitMsg:async e=>{if(n.submitForm.businessUuid){if(!f.value.handleClick(e))return;if(!n.baseTable.verification())return;if(!a.tableData.length)return void k.warning({message:"还未选择商品！",type:"warning"});const t=r(o({},n.submitForm),{details:a.tableData,planStatus:1});n.loading3=!0,Y(t).then((e=>{n.tabClose=!0})).finally((()=>{n.loading3=!1}))}else U()},editForm:f,getList:u,selectForm:m,handleClose:e=>{m.value.handleRest(),e()},count:s,clearMsg:()=>{n.dialogVisible=!1,m.value&&m.value.handleRest()},generate:async()=>{if(await n.selectForm2.verification()){let e=n.submitForm3,{tips:t,businessUuid:i}=e,l=d(e,["tips","businessUuid"]);n.loading=!0,n.submitForm3.businessUuid=n.submitForm.businessUuid;let s=o({businessUuid:n.submitForm.businessUuid},l);Z(s).then((e=>{a.tableData=e,c()})).finally((()=>{n.loading=!1}))}},handleClose2:c,handlcurrentChange:e=>{n.pagination.page=e},handlSizeChange:e=>{n.pagination.size=e},delTable:e=>{if("see"==n.type)return;let t=n.pagination.page-1;t=t*n.pagination.size+e,a.tableData.splice(t,1),n.pot=e},open:()=>{n.selectForm2.handleRest(),n.selectForm2.timeChange(["planDate.start","planDate.end"],ae(l,90,!0),"time"),n.submitForm3.purchaseDay=15,n.submitForm3.replenishDay=3}})}},ue={class:"supplierAdd"},pe=(e=>(E("data-v-11218429"),e=e(),W(),e))((()=>H("span",{style:{"font-size":"16px"}},"采购计划单详情",-1))),me={key:0},ce=$("快速生成计划单"),be=$("批量选择供应商"),ge=$("暂存"),fe=$(" 转单 "),he={class:"top-content"},ye={class:"main"},xe={class:"scope-line"},ve={class:"add-msg"},we={class:"block"},ke={class:"dialog-footer"},Te=$("取 消"),Fe=$(" 确 定 "),Se={class:"dialog-footer"},Ue=$("取 消"),Ne=$(" 生 成 ");var Ce=T(de,[["render",function(e,t,i,a,l,n){const s=P("el-button"),o=u,r=p,d=m,h=c,y=P("el-pagination"),x=b,v=g,w=P("el-dialog"),k=f;return j(),L("div",ue,[I(k,{close:e.tabClose,backTips:"see"!=e.type,route:{path:"/purchase/pocurement-plan"},"t-id":"tab"},{header:z((()=>[pe,"see"!==e.type?(j(),L("div",me,[I(s,{size:"small",type:"primary",onClick:t[0]||(t[0]=e=>a.dialogVisibleTips())},{default:z((()=>[ce])),_:1}),I(s,{size:"small",type:"primary",onClick:t[1]||(t[1]=e=>a.addMsg())},{default:z((()=>[be])),_:1}),I(s,{size:"small",onClick:t[2]||(t[2]=e=>a.hold(!1)),loading:e.loading3},{default:z((()=>[ge])),_:1},8,["loading"]),I(o,{class:"btn",onClick:t[3]||(t[3]=e=>a.submitMsg(!0)),config:{size:"small"}},{default:z((()=>[fe])),_:1})])):q("",!0)])),top:z((()=>[H("div",he,[I(r,{"form-data":e.formData,"onUpdate:form-data":t[4]||(t[4]=t=>e.formData=t),"submit-form":e.submitForm,"onUpdate:submit-form":t[5]||(t[5]=t=>e.submitForm=t),ref:"editForm"},null,8,["form-data","submit-form"])])])),default:z((()=>[I(x,{data:e.tableData.slice((e.pagination.page-1)*e.pagination.size,(e.pagination.page-1)*e.pagination.size+e.pagination.size),down:[".main .select-table .el-table__body-wrapper  .el-table__row"],range:[1,2,4],first:".main .select-input",pot:e.pot},{default:z((()=>[H("div",ye,[I(d,{class:"select-table","table-data":e.tableData.slice((e.pagination.page-1)*e.pagination.size,(e.pagination.page-1)*e.pagination.size+e.pagination.size),columns:e.columnsList,"class-id":"tab",optionShow:e.optionShow,"reduce-num":74,multipleSelection:a.multipleSelection,formConfig:{highlightCurrentRow:!0},delTable:a.delTable,ref:"baseTable"},{buttons:z((()=>[H("div",xe,[H("div",null,[H("span",null,"商品种类："+B(e.tableData.length),1),H("span",null,"含税金额合计："+B(a.count)+"元",1)])])])),_:1},8,["table-data","columns","optionShow","multipleSelection","delTable"]),H("div",ve,[I(h,{class:"select-input","fixed-head":!1,keys:e.keys,options:e.options,"onUpdate:options":t[6]||(t[6]=t=>e.options=t),placeholder:"请输入商品编码/助记码/商品名称/条码",onOnInput:a.remoteMethod,onOnChange:a.drugChange,onClear:a.clearMsg,props:{label:"userName",value:"drugUuid"},tableData:e.tableData,disabledKey:"drugUuid",config:{disabled:"see"==e.type}},null,8,["keys","options","onOnInput","onOnChange","onClear","tableData","config"])]),H("div",we,[I(y,{"current-page":e.pagination.page,"page-sizes":[10,20,50,100],"page-size":e.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.length,onCurrentChange:a.handlcurrentChange,onSizeChange:a.handlSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])])),_:1},8,["data","down","pot"]),e.dialogVisible?(j(),D(w,{key:0,title:"请选择供应商",modelValue:e.dialogVisible,"onUpdate:modelValue":t[10]||(t[10]=t=>e.dialogVisible=t),width:"1200px","before-close":a.handleClose,"modal-append-to-body":!1},{footer:z((()=>[H("span",ke,[I(s,{onClick:t[8]||(t[8]=e=>a.clearMsg()),size:"small"},{default:z((()=>[Te])),_:1}),I(s,{type:"primary",loading:e.loading,onClick:t[9]||(t[9]=e=>a.handleSubmit()),size:"small"},{default:z((()=>[Fe])),_:1},8,["loading"])])])),default:z((()=>[I(v,{"form-data":e.formData2,options:!0,"submit-form":e.submitForm1,"onUpdate:submit-form":t[7]||(t[7]=t=>e.submitForm1=t),select:a.getList,ref:"selectForm"},null,8,["form-data","submit-form","select"]),I(d,{maxHeight:385,"table-data":e.tableData2,pagination:e.submitForm1,formConfig:e.formConfig2,columns:e.columns2,optionShow:e.optionShow,currentRow:a.currentRow,select:a.getList},null,8,["table-data","pagination","formConfig","columns","optionShow","currentRow","select"])])),_:1},8,["modelValue","before-close"])):q("",!0),I(w,{title:"快速生成计划单",modelValue:e.dialogVisible2,"onUpdate:modelValue":t[13]||(t[13]=t=>e.dialogVisible2=t),width:"800px","before-close":a.handleClose2,onOpened:a.open},{footer:z((()=>[H("span",Se,[I(s,{onClick:a.handleClose2,size:"small"},{default:z((()=>[Ue])),_:1},8,["onClick"]),I(s,{type:"primary",loading:e.loading,size:"small",onClick:t[12]||(t[12]=e=>a.generate())},{default:z((()=>[Ne])),_:1},8,["loading"])])])),default:z((()=>[I(v,{"form-data":e.formData3,"submit-form":e.submitForm3,"onUpdate:submit-form":t[11]||(t[11]=t=>e.submitForm3=t),ref:"selectForm2"},null,8,["form-data","submit-form"])])),_:1},8,["modelValue","before-close","onOpened"])])),_:1},8,["close","backTips"])])}],["__scopeId","data-v-11218429"]]);export{Ce as default};