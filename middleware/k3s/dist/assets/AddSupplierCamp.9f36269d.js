var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(a,s,t)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;import{_ as o}from"./SubmitButton.99d990fd.js";import{_ as n}from"./EditForm.8c35f1a6.js";import{_ as p}from"./BaseTable.36f55649.js";import{_ as d}from"./BaseCard.46de0c24.js";import{_ as m}from"./imageUpload.e9124177.js";import{a as u,u as c,b}from"./index.778e5621.js";import{u as y,b as f}from"./vue-router.91336ba9.js";import{u as v,m as g}from"./vuex.c868d4e0.js";import{c as D,_ as h}from"./element-plus.b44d97a8.js";import{c as k}from"./common.6e2a0964.js";import{g as j}from"./pinyin.e6905309.js";import{h as S,j as C,e as I,B as U,Y as N,G as P,S as F,g as T,n as E,D as R,t as _,q as w,o as q,a5 as x,w as z,v as V,a6 as Y,c as O,F as B,N as M,a9 as $,aa as A}from"./@vue.23a4bd1a.js";import{_ as K}from"./trash.2476a68d.js";import{_ as G}from"./index.ab904951.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./sortablejs.621e50ab.js";import"./element-resize-detector.5b0b5621.js";import"./batch-processor.94093b2a.js";import"./public.9c1d8f39.js";import"./axios.7b768d2b.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";var H={name:"AddSupplierCamp",components:{BaseTable:p,SubmitButton:o,BaseCard:d,imageUpload:m,EditForm:n},setup(){const{_:e}=k();y();const o=f(),n=v(),p=g("common",["dict"]),d=S(p.dict.bind({$store:n})),q=C({activeName:"first",type:"",options:[],options1:[],options2:[],isSee:null,reduceNum:180,baseSupplierData:{basicInfo:{isFirst:1,salers:[],businessScope:[]}},tabClose:!1,isEdit:"",itemRefs:[],columns:[{title:"序号",type:"index",formConfig:{width:50}},{width:180,key:"name",title:"资质名称",render:(e,a,s,t)=>{if(e.name&&!e.canDelete)return I("div",null,[e.name]);{let a;return I(U("el-select"),{modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,placeholder:"请选择"},"function"==typeof(l=a=q.options2.map((e=>I(U("el-option"),{key:t,label:e.key,value:e.key},null))))||"[object Object]"===Object.prototype.toString.call(l)&&!N(l)?a:{default:()=>[a]})}var l}},{width:100,key:"png",title:"图片",render:(e,a,s,t)=>P(m,{files:e.png,disabled:"see"===q.type,onHandleSuccess:e=>{x(e,t)},onHandleRemove:()=>{z(t)}})},{width:200,key:"issuer",title:"发证机关",render:e=>P(D,{size:"small",maxlength:100,placeholder:"请输入",disabled:"see"===q.type,"model-value":e.issuer,onInput:a=>{e.issuer=a}})},{width:200,key:"number",title:"编号",render:e=>P(D,{size:"small",maxlength:100,placeholder:"请输入",disabled:"see"===q.type,"model-value":e.number,onInput:a=>{e.number=a}})},{width:240,key:"registerDate",title:"注册日期",render:(e,a,s,t)=>I(U("el-date-picker"),{modelValue:e.registerDate,"onUpdate:modelValue":a=>e.registerDate=a,size:"small",type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DD",placement:"top",disabled:"see"===q.type},null)},{width:240,key:"validity",title:"有效期至",render:(e,a,s,t)=>I(U("el-date-picker"),{modelValue:e.validity,"onUpdate:modelValue":a=>e.validity=a,size:"small",type:"date",placeholder:"选择日期","value-format":"YYYY-MM-DD",placement:"top",disabled:"see"===q.type},null)},{width:80,key:"isControl",title:"控制",render:(e,a,s,t)=>I(U("el-switch"),{modelValue:e.isControl,"onUpdate:modelValue":a=>e.isControl=a,"active-color":"#409EFF","inactive-color":"#DCDFE6",disabled:"see"===q.type,"active-value":1,"inactive-value":0},null)},{width:80,key:"isRemind",title:"提示",render:(e,a,s,t)=>I(U("el-switch"),{modelValue:e.isRemind,"onUpdate:modelValue":a=>e.isRemind=a,"active-color":"#409EFF","inactive-color":"#DCDFE6",disabled:"see"===q.type,"active-value":1,"inactive-value":0},null)},{width:200,key:"supplierKey",title:"操作",render:(e,a,s,t)=>{if(e.canDelete)return[I(U("el-button"),{type:"text",style:"color: #f56c6c",size:"small",onClick:e=>{V(t)}},{default:()=>[F("删除")]})]}}],formData:{span:8,labelWidth:"100px",list:[{type:"DIV",key:"supplierKey",label:"供应商编号"},{type:"INPUT",key:"supplierName",label:"供应商名称",require:!0,config:{onChange:e=>{q.baseSupplierData.basicInfo.mnemonic=j(e,"",!0)}}},{type:"SELECT",key:"supplierType",label:"供应商类别",props:{value:"key",label:"key"},list:()=>q.options},{type:"DATEPICKER",key:"registerDate",label:"注册日期"},{type:"INPUT",key:"address",label:"地址"},{type:"INPUT",key:"legalPerson",label:"法定代表人"},{type:"INPUT",key:"mnemonic",label:"助记码"},{type:"INPUT",key:"bank",label:"开户行"},{type:"INPUT",key:"bankAccount",label:"银行账户"},{type:"INPUT",key:"accountName",label:"开户户名"},{type:"INPUT",key:"ceo",label:"企业负责人"},{type:"INPUT",key:"qa",label:"质量负责人"},{type:"INPUT",key:"mobile",label:"联系电话",rules:[{trigger:"blur",pattern:/^([\(\)\-\+0-9]{1,20})$/,message:"请输入正确的手机号码"}]},{type:"INPUT",key:"mail",label:"邮箱",rules:[{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}]},{type:"INPUT",key:"postalCode",label:"邮政编码",rules:[{trigger:"blur",pattern:/^[0-9]{6}$/,message:"请输入正确的邮政编码"}]},{type:"SELECT",key:"businessScope",label:"经营范围",props:{value:"key",label:"key"},config:{multiple:!0,filterable:!1,remote:!1},list:()=>q.options1,require:!0}]},salersForm:[],baseSalersForm:{span:8,labelWidth:"120px",list:[{type:"INPUT",key:"name",label:"姓名"},{type:"INPUT",key:"idNumber",label:"身份证号码",rules:[{trigger:"blur",pattern:/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,message:"请输入正确法人身份证号码"}]},{type:"DATEPICKER",key:"validTime",label:"身份证有效期",config:{"value-format":"YYYY-MM-DD"}},{type:"INPUT",key:"mobile",label:"手机号码",rules:[{trigger:"blur",pattern:/^(\+86|0086)?\s*1[345789]\d{9}$/,message:"请输入正确的手机号码"}]}]},queryUuid:""}),x=(e,a)=>{q.baseSupplierData.basicInfo.credentials[a].png=e},z=e=>{q.baseSupplierData.basicInfo.credentials[e].png=""},V=e=>{q.baseSupplierData.basicInfo.credentials.splice(e,1)},Y=()=>{q.options=e.find(d.value,{key:"supplier"}).data,q.options1=e.find(d.value,{key:"category1"}).data;let a=q.options1.map((e=>e.key));o.query.uuid?u(o.query.uuid).then((a=>{q.queryUuid=o.query.uuid,q.salersForm=[],q.baseSupplierData=e.cloneDeep(a),q.baseSupplierData.basicInfo.salers&&q.baseSupplierData.basicInfo.salers.length&&q.baseSupplierData.basicInfo.salers.map((e=>{q.salersForm.push(q.baseSalersForm)}))})):(q.queryUuid=void 0,q.salersForm=[],q.baseSupplierData={basicInfo:{businessScope:a,isFirst:1,salers:[{name:"",idNumber:"",validTime:"",mobile:""}],credentials:[{name:"营业执照",png:"",issuer:"",number:"",registerDate:"",validity:"",isControl:!1,isRemind:!1,canDelete:!1},{name:"生产许可证/经营许可证",png:"",issuer:"",number:"",registerDate:"",validity:"",isControl:!1,isRemind:!1,canDelete:!1},{name:"GSP证书/GMP证书",png:"",issuer:"",number:"",registerDate:"",validity:"",isControl:!1,isRemind:!1,canDelete:!1},{name:"销售人授权书",png:"",issuer:"",number:"",registerDate:"",validity:"",isControl:!1,isRemind:!1,canDelete:!1},{name:"质量管理规范",png:"",issuer:"",number:"",registerDate:"",validity:"",isControl:!1,isRemind:!1,canDelete:!1},{name:"发票样章",png:"",issuer:"",number:"",registerDate:"",validity:"",isControl:!1,isRemind:!1,canDelete:!1},{name:"质量保证书",png:"",issuer:"",number:"",registerDate:"",validity:"",isControl:!1,isRemind:!1,canDelete:!1}]}},q.salersForm.push(q.baseSalersForm)),w((()=>{O()}))},O=()=>{q.options2=[],setTimeout((()=>{q.options2=e.find(d.value,{key:"qualificationSupplier"}).data}))},B=T(null);return E((()=>{q.isSee=o.query.isSee,q.reduceNum=o.query.reduceNum})),R((()=>{q.isEdit=o.query.uuid,q.type=o.query.type,q.isEdit&&"edit"!=q.type?q.reduceNum=120:q.reduceNum=180,q.queryUuid!==o.query.uuid&&Y(),w((()=>{O()}))})),M=((e,a)=>{for(var s in a||(a={}))l.call(a,s)&&r(e,s,a[s]);if(t)for(var s of t(a))i.call(a,s)&&r(e,s,a[s]);return e})({},_(q)),a(M,s({initData:Y,addPerson:()=>{q.salersForm.push(q.baseSalersForm),q.baseSupplierData.basicInfo.salers.push({name:"",idNumber:"",time:"",phone:""}),q.itemRefs=[]},pushSh:e=>{let a=!0,s=B.value.handleClick(e);a=s;let{itemRefs:t,salersForm:l}=q;t.length==l.length-1&&(t=[]),t.forEach((s=>{s.handleClick(e)||(a=!1)})),a?q.isEdit?c(e,q.baseSupplierData).then((e=>{h.success("提交成功！"),q.tabClose=!0})):b(e,q.baseSupplierData).then((e=>{h.success("提交成功！"),q.tabClose=!0})):q.activeName="first"},addQualification:()=>{q.baseSupplierData.basicInfo.credentials.unshift({name:"",png:"",issuer:"",number:"",registerDate:"",validity:"",isControl:0,isRemind:0,canDelete:!0}),w((()=>{O()}))},handleChange:x,handlePictureCardRemove:z,delCredentials:V,delPerson:e=>{q.baseSupplierData.basicInfo.salers.splice(e,1),q.salersForm.splice(e,1),q.itemRefs=[]},setItemRef:e=>{let{itemRefs:a}=q;e&&a.push(e)},editForm:B}));var M}};const L=e=>($("data-v-f9bd2a7c"),e=e(),A(),e),Q={class:"supplier",id:"tab"},W=L((()=>Y("span",{style:{"font-size":"16px"}},null,-1))),X={key:0},J=F("暂存"),Z=F(" 提交审核 "),ee={class:"box"},ae={class:"person"},se=L((()=>Y("p",null,"销售人员信息",-1))),te=F("新增"),le=["onClick"],ie=F(" 新增 ");var re=G(H,[["render",function(e,a,s,t,l,i){const r=U("el-button"),m=o,u=n,c=U("el-tab-pane"),b=p,y=U("el-scrollbar"),f=U("el-tabs"),v=d;return q(),x("div",Q,[I(v,{close:e.tabClose,route:{path:"/first-camp/supplier"},isEdit:e.isSee,style:{"justify-content":"right"}},{header:z((()=>[W,"see"!=e.type?(q(),x("div",X,[I(r,{size:"small",onClick:a[0]||(a[0]=e=>t.pushSh(0))},{default:z((()=>[J])),_:1}),I(m,{class:"btn",onClick:a[1]||(a[1]=e=>t.pushSh(1)),config:{size:"small"}},{default:z((()=>[Z])),_:1})])):V("",!0)])),default:z((()=>[I(y,null,{default:z((()=>[Y("div",ee,[I(f,{modelValue:e.activeName,"onUpdate:modelValue":a[4]||(a[4]=a=>e.activeName=a)},{default:z((()=>[I(c,{label:"基础信息",name:"first"},{default:z((()=>[I(u,{"form-data":e.formData,"onUpdate:form-data":a[2]||(a[2]=a=>e.formData=a),"submit-form":e.baseSupplierData.basicInfo,"onUpdate:submit-form":a[3]||(a[3]=a=>e.baseSupplierData.basicInfo=a),ref:"editForm",disabled:"see"==e.type},null,8,["form-data","submit-form","disabled"]),Y("div",ae,[se,"see"!=e.type?(q(),O(r,{key:0,type:"primary",size:"small",onClick:t.addPerson},{default:z((()=>[te])),_:1},8,["onClick"])):V("",!0),(q(!0),x(B,null,M(e.salersForm,((a,s)=>(q(),x("div",{class:"person-box",key:s},[I(u,{"form-data":e.salersForm[s],"onUpdate:form-data":a=>e.salersForm[s]=a,"submit-form":e.baseSupplierData.basicInfo.salers[s],"onUpdate:submit-form":a=>e.baseSupplierData.basicInfo.salers[s]=a,ref:t.setItemRef,disabled:"see"==e.type},null,8,["form-data","onUpdate:form-data","submit-form","onUpdate:submit-form","disabled"]),e.salersForm.length>1?(q(),x("img",{key:0,class:"person-trash",src:K,alt:"",onClick:e=>t.delPerson(s)},null,8,le)):V("",!0)])))),128))])])),_:1}),I(c,{label:"资质信息",name:"second"},{default:z((()=>["see"!=e.type?(q(),O(r,{key:0,type:"primary",style:{"margin-bottom":"20px"},onClick:t.addQualification,size:"small"},{default:z((()=>[ie])),_:1},8,["onClick"])):V("",!0),I(y,{class:"scollbar"},{default:z((()=>[I(b,{optionShow:!1,"fixed-head":!1,class:"select-table","class-id":"tab","table-data":e.baseSupplierData.basicInfo.credentials,columns:e.columns,ref:"baseTable","reduce-num":e.reduceNum},null,8,["table-data","columns","reduce-num"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1})])),_:1},8,["close","isEdit"])])}],["__scopeId","data-v-f9bd2a7c"]]);export{re as default};