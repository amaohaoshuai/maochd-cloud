var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,u=(e,l)=>{for(var a in l||(l={}))r.call(l,a)&&i(e,a,l[a]);if(t)for(var a of t(l))n.call(l,a)&&i(e,a,l[a]);return e},o=(e,t)=>l(e,a(t));import{u as s,m as d}from"./vuex.c868d4e0.js";import{_ as p,c as m,d as c}from"./element-plus.b44d97a8.js";import{f}from"./filter.c2c8f0b9.js";import{d as b,b as v}from"./index.6efc7880.js";import{_,s as y}from"./index.ab904951.js";import{g,h as F,j as h,n as S,t as x,B as D,o as w,a5 as k,e as N,w as O,a6 as P,z as C,q as j,G as T,v as I,a9 as J,aa as R,S as L,Y as B}from"./@vue.23a4bd1a.js";import{_ as z}from"./BaseTable.36f55649.js";import{_ as M}from"./imageUpload.e9124177.js";import{_ as Y}from"./BaseDatePicker.831269d5.js";import{c as q}from"./common.6e2a0964.js";const U={name:"user",props:{ruleForm:{type:Object,default:{}},rules:{type:Object,default:{}},isEdit:{type:Boolean,default:!0},isAdd:{type:Boolean,default:!0}},setup(e,l){const a=g(null),t=s(),r=d("common",["dict"]),n=F(r.dict.bind({$store:t})),i=JSON.parse(JSON.stringify(n.value)).filter((e=>"category1"===e.key)),m=JSON.parse(JSON.stringify(n.value)).filter((e=>"unit"===e.key)),c=JSON.parse(JSON.stringify(n.value)).filter((e=>"prescription"===e.key)),_=h({dictCategoryInfo:i.length>0?i[0].data:"",dictUnitInfo:m.length>0?m[0].data:"",dictPrescriptionInfo:c.length>0?c[0].data:"",supplierList:[],formatDate:f,purchaseState:{1:"正常",2:"停购"},purchaseStateList:[{value:1,label:"正常"},{value:2,label:"停购"}],saleState:{1:"正常",2:"停销"},saleStateList:[{value:1,label:"正常"},{value:2,label:"停销"}],conditionState:{1:"常温",2:"阴凉",3:"冷藏"},conditionList:[{value:1,label:"常温"},{value:2,label:"阴凉"},{value:3,label:"冷藏"}],categoryList:[{value:"",label:"",children:[{value:"",label:""}]}],maintenanceType:{1:"一般养护",2:"重点养护"},maintenanceTypeList:[{value:1,label:"一般养护"},{value:2,label:"重点养护"}]});S((()=>{(async()=>{try{const e=await b();_.supplierList=e}catch(e){return e}})(),(async()=>{try{const e=await v();_.categoryList=JSON.parse(JSON.stringify(e)),_.categoryList.map((e=>{e.value=e.uuid,e.label=e.categoryName,e.children=e.list,e.children.map((e=>{e.value=e.uuid,e.label=e.name}))}))}catch(e){return e}})()}));return o(u({},x(_)),{quickInput:function(){l.emit("quick-input",{})},handleChange:function(e){if(e){const a=_.categoryList.filter((l=>l.uuid===JSON.parse(JSON.stringify(e))[0])),t=JSON.parse(JSON.stringify(a))[0].list.filter((l=>l.uuid===JSON.parse(JSON.stringify(e))[1]));l.emit("handle-change",JSON.parse(JSON.stringify(e))[1],t[0].name)}},baseInfoForm:a,verification:()=>new Promise((e=>{a.value.validate((l=>{e(l)}))})),toInteger:e=>{/^[0-9]+$/.test(e)||(p.error("只能输入整数"),j((()=>{e=parseInt(e)})))}})}},E={class:"base-info"},V={style:{"border-bottom":"1px solid #E4E7ED","margin-top":"20px"}},$={style:{"margin-top":"20px"}};var H=_(U,[["render",function(e,l,a,t,r,n){const i=D("el-form-item"),u=D("el-col"),o=D("el-row"),s=D("el-form");return w(),k("div",E,[N(s,{model:a.ruleForm,ref:"baseInfoForm",rules:a.rules,"label-width":"155px"},{default:O((()=>[P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"商品类别：",prop:"category1"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.category1?a.ruleForm.category1:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"商品分类：",prop:"category2Uuid"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.category2?a.ruleForm.category2:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"商品编码："},{default:O((()=>[P("span",null,C(a.ruleForm.code?a.ruleForm.code:"-"),1)])),_:1})])),_:1})])),_:1})]),P("div",V,[P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"商品名称:",prop:"productName"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.productName?a.ruleForm.productName:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"通用名：",prop:"commonName"},{default:O((()=>[P("div",null,C(a.ruleForm.commonName?a.ruleForm.commonName:"-"),1)])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"助记码："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.mnemonicCode?a.ruleForm.mnemonicCode:"-"),1)])])),_:1})])),_:1})])),_:1})]),P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"规格："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.specification?a.ruleForm.specification:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"剂型："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.dosageForm?a.ruleForm.dosageForm:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"单位："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.unit?a.ruleForm.unit:"-"),1)])])),_:1})])),_:1})])),_:1})]),P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"生产厂家："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.manufacturer?a.ruleForm.manufacturer:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"产地："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.origin?a.ruleForm.origin:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"中包装数：",prop:"number"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.number?a.ruleForm.number:"-"),1)])])),_:1})])),_:1})])),_:1})]),P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"是否药品：",prop:"isDrug"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.isDrug?"是":"否"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"采购状态：",prop:"purchaseState"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.purchaseState?e.purchaseState[a.ruleForm.purchaseState]:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"销售状态：",prop:"saleState"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.saleState?e.saleState[a.ruleForm.saleState]:"-"),1)])])),_:1})])),_:1})])),_:1})]),P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"储存条件：",prop:"condition"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.condition?e.conditionState[a.ruleForm.condition]:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"养护类型：",prop:"maintenanceType"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.maintenanceType?e.maintenanceType[a.ruleForm.maintenanceType]:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"条码："},{default:O((()=>[P("div",null,C(a.ruleForm.barCode?a.ruleForm.barCode:"-"),1)])),_:1})])),_:1})])),_:1})]),P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"批准文号："},{default:O((()=>[P("div",null,C(a.ruleForm.approvalNumber?a.ruleForm.approvalNumber:"-"),1)])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"批准文号有效期至："},{default:O((()=>[P("div",null,C(a.ruleForm.validPeriod?e.formatDate(a.ruleForm.validPeriod):"-"),1)])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"处方分类：",prop:"prescriptionClass"},{default:O((()=>[P("div",null,C(a.ruleForm.prescriptionClass?a.ruleForm.prescriptionClass:"-"),1)])),_:1})])),_:1})])),_:1})]),P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"是否拆零：",prop:"isSplit"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.isSplit?"是":"否"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"转换比：",prop:"conversionRatio"},{default:O((()=>[P("div",null,C(a.ruleForm.conversionRatio?a.ruleForm.conversionRatio:"-"),1)])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"拆零单位："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.splitUnit?a.ruleForm.splitUnit:"-"),1)])])),_:1})])),_:1})])),_:1})]),P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"上市许可持有人："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.holderPermit?a.ruleForm.holderPermit:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"上市许可持有人地址："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.addressPermitHolder?a.ruleForm.addressPermitHolder:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"上市许可持有有效期至："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.expireTime?e.formatDate(a.ruleForm.expireTime):"-"),1)])])),_:1})])),_:1})])),_:1})]),P("div",null,[N(i,{label:"供应商："},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.supplier?a.ruleForm.supplier:"-"),1)])])),_:1})])]),P("div",$,[P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"零售价(元)：",prop:"retailPrice"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.retailPrice?a.ruleForm.retailPrice:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"会员价(元)：",prop:"memberPrice"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.memberPrice?a.ruleForm.memberPrice:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"最高零售价(元)：",prop:"maxRetailPrice"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.maxRetailPrice?a.ruleForm.maxRetailPrice:"-"),1)])])),_:1})])),_:1})])),_:1})]),P("div",null,[N(o,null,{default:O((()=>[N(u,{span:8},{default:O((()=>[N(i,{label:"进项税率(%)：",prop:"inputTaxRate"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.inputTaxRate?a.ruleForm.inputTaxRate:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"销项税率(%)：",prop:"outputTaxRate"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.outputTaxRate?a.ruleForm.outputTaxRate:"-"),1)])])),_:1})])),_:1}),N(u,{span:8},{default:O((()=>[N(i,{label:"批发价(元)：",prop:"wholesalePrice"},{default:O((()=>[P("div",null,[P("span",null,C(a.ruleForm.wholesalePrice?a.ruleForm.wholesalePrice:"-"),1)])])),_:1})])),_:1})])),_:1})]),P("div",null,[N(i,{label:"含税批发价(元)："},{default:O((()=>[P("span",null,C(a.ruleForm.taxIncludedPrice?a.ruleForm.taxIncludedPrice:"-"),1)])),_:1})])])])),_:1},8,["model","rules"])])}],["__scopeId","data-v-0539ab8b"]]);const A={name:"user",props:{productBarcodeVos:{type:Array,default:[]},status:{type:String}},setup(e,l){let a=h({columns:[{title:"序号",type:"index",width:50},{title:"条码",key:"tmCode",formConfig:{minWidth:200},render:l=>T(m,{size:"mini",maxlength:18,placeholder:"请输入",disabled:"see"===e.status,"model-value":l.tmCode,onInput:e=>{l.tmCode=e}})},{title:"备注",key:"remark",formConfig:{minWidth:200},render:l=>T(m,{size:"mini",maxlength:100,placeholder:"请输入",disabled:"see"===e.status,"model-value":l.remark,onInput:e=>{l.remark=e}})},{title:"创建时间",key:"createTime",width:180},{title:"添加人",key:"creator",width:80},{title:"操作",key:"options",fixed:"right",width:80,render:({index:l})=>{let a=[{type:"text",innerHTML:"删除",show:"see"===e.status,onClick:()=>{e.productBarcodeVos.splice(l,1)},style:{color:"#f56c6c"}}];return T("div",a.map((e=>{if(!e.show)return T(c,e)})))}}]});return o(u({},x(a)),{addMsg:()=>{e.productBarcodeVos.push({})}})}},W={class:"extra-info"},G=[(e=>(J("data-v-9ab351be"),e=e(),R(),e))((()=>P("i",{class:"el-icon-plus"},null,-1))),L("新增 ")];var K=_(A,[["render",function(e,l,a,t,r,n){const i=z;return w(),k("div",W,[N(i,{"table-data":a.productBarcodeVos,columns:e.columns},null,8,["table-data","columns"]),"see"!==a.status?(w(),k("div",{key:0,class:"add-msg",onClick:l[0]||(l[0]=(...e)=>t.addMsg&&t.addMsg(...e))},G)):I("",!0)])}],["__scopeId","data-v-9ab351be"]]);const{status:Q,allCategoryList:X,dict:Z}=y.state.common;var ee={name:"user",components:{imageUpload:M},props:{ruleForm:{type:Array,default:[]},rules:{type:Object,default:{}},isEdit:{type:Boolean,default:!0},credentialStatus:{type:String,default:""}},setup(e,l){const{_:a}=q(),t=h({formatDate:f,options:[],columns:[{title:"序号",type:"index",width:50},{title:"资质名称",width:360,render:(l,a,r,n)=>{let u;return N(D("el-select"),{size:"mini",disabled:"see"===e.credentialStatus,class:l[`qualificationName_${n}`],modelValue:l.qualificationName,placeholder:"请选择",onChange:e=>{i(l,"qualificationName",e)}},"function"==typeof(o=u=t.options.map((e=>N(D("el-option"),{key:e.key,label:e.key,value:e.key},null))))||"[object Object]"===Object.prototype.toString.call(o)&&!B(o)?u:{default:()=>[u]});var o}},{title:"图片",width:280,render:(l,a,t,i)=>N(M,{disabled:"see"===e.credentialStatus,files:l.fileUrl,config:{onSuccess:e=>{r(e.data,i)},onRemove:()=>{n(i)}}},null)},{title:"编号",width:165,render:(l,a,t,r)=>N(D("el-input"),{size:"mini",modelValue:l.serialNumber,disabled:"see"===e.credentialStatus,onInput:e=>{i(l,"serialNumber",e,r)},onChange:e=>{i(l,"serialNumber",e,r)},placeholder:"请输入内容"},null)},{title:"注册时间",width:280,render:(l,a,t,r)=>N(Y,{size:"mini",class:l[`registrationDate_${r}`],data:l,"key-word":"registrationDate",config:{disabled:"see"===e.credentialStatus,size:"mini",valueFormat:"YYYY-MM-DD",disabledDate:e=>e.getTime()>(new Date).getTime()}},null)},{title:"有效日期",width:280,render:(l,a,t,r)=>N(Y,{data:l,class:l[`expireDate_${r}`],"key-word":"expireDate",limit:{keys:["registrationDate","expireDate"],num:180,callback:()=>{p.warning("该商品效期小于180天",{message:"该商品效期小于180天",type:"warning"})}},config:{disabled:"see"===e.credentialStatus,size:"mini",valueFormat:"YYYY-MM-DD",disabledDate:e=>{let a=l.registrationDate;return!!a&&e.getTime()<new Date(a).getTime()-864e5}}},null)},{title:"操作",key:"options",fixed:"right",render:({index:l})=>{let a=[{type:"text",innerHTML:"删除",show:"see"===e.credentialStatus,onClick:()=>{e.ruleForm.splice(l,1)},style:{color:"#f56c6c"}}];return T("div",a.map((e=>{if(!e.show)return T(c,e)})))}}]});function r(e,a){l.emit("handle-change-img",e,a)}function n(e){l.emit("handle-picture-card-remove",e)}const i=(e,l,a,t)=>{e[l]=a};return S((()=>{t.options=Z.length>0?a.find(Z,{key:"qualificationProduct"}).data:[]})),o(u({},x(t)),{del:function(e,l){l.splice(e,1)},add:function(){l.emit("add",{})},handleChange:r,handlePictureCardRemove:n,dateChange:e=>{if(e.registrationDate&&e.expireDate&&e.registrationDate>e.expireDate)return e.registrationDate="",void p.error("注册日期不得晚于有效期至")},dateChange1:e=>{if(e.registrationDate&&e.expireDate&&e.registrationDate>e.expireDate)return e.expireDate="",void p.error("注册日期不得晚于有效期至")},handleTableChange:i})}};const le={class:"credential-info"},ae={key:0,style:{"padding-bottom":"20px"}},te=L("新增");var re=_(ee,[["render",function(e,l,a,t,r,n){const i=D("el-button"),u=z;return w(),k("div",le,["see"!==a.credentialStatus?(w(),k("div",ae,[N(i,{type:"primary",onClick:t.add,size:"small"},{default:O((()=>[te])),_:1},8,["onClick"])])):I("",!0),N(u,{"table-data":a.ruleForm,columns:e.columns},null,8,["table-data","columns"])])}],["__scopeId","data-v-04e5cab8"]]);export{H as b,re as c,K as e};