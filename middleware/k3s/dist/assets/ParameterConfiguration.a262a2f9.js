var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,t,i)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,r=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(i)for(var t of i(a))o.call(a,t)&&n(e,t,a[t]);return e},s=(e,i)=>a(e,t(i));import{_ as m}from"./EditForm.8c35f1a6.js";import{u as d}from"./vuex.c868d4e0.js";import{u}from"./vue-router.91336ba9.js";import{a as f,u as p,c,g as y,b,d as v}from"./index.d0e41a43.js";import{_ as g}from"./element-plus.b44d97a8.js";import{j as C,D as j,t as x,B as S,o as h,a5 as V,a6 as F,e as _,w as I,J as D,Q as O,a9 as w,aa as k,S as U}from"./@vue.23a4bd1a.js";import{_ as z}from"./index.ab904951.js";import"./TempHtml.vue_vue&type=script&lang.67ba229f.js";import"./lodash.d7ab6f48.js";import"./dayjs.bad04745.js";import"./axios.7b768d2b.js";import"./resize-observer-polyfill.d4249adb.js";import"./normalize-wheel.1d574cd1.js";import"./mitt.32ebca9f.js";import"./async-validator.1fa0d626.js";import"./@popperjs.192dcd39.js";import"./vue.6d04e91d.js";import"./echarts.e8cef18b.js";import"./tslib.34a40861.js";import"./zrender.5bef55a0.js";import"./vue3-print-nb.eccf419a.js";import"./nprogress.8b4927f9.js";import"./default-passive-events.74004992.js";var R={name:"ParameterConfiguration",components:{EditForm:m},setup(e,a){u();const t=d(),i=C({radio:[{label:"开启",value:1},{label:"关闭",value:0}],radio1:[{label:"开启",value:1},{label:"关闭",value:0}],radio2:[{label:"开启",value:1},{label:"关闭",value:0}],radio3:[{label:"开启",value:1},{label:"关闭",value:0}],radio4:[{label:"不同门店的零售价、会员价不一致，并展示商品参考价格",value:1},{label:"所有门店商品的零售价、会员价，价格统一",value:0}],radio5:[{label:"开启",value:1},{label:"关闭",value:0}]}),l=C({active:"1",commodityValidity:"",certificatesValidity:"",stayleConfig:{width:"800px"},radioStyle:{marginRight:"10px"},menuIndex:"1",submitForm:{},formData:{labelWidth:"80px",list:[{type:"RADIO",key:"oneClickStorageConfig",label:"一键入库",list:()=>i.radio,config:{onChange:e=>{m(e)}}}]},formData1:{labelWidth:"80px",list:[{type:"RADIO",key:"radio4",label:"门店价格",list:()=>i.radio4,config:{onChange:e=>{o(e)}}}]},submitForm1:{},remindSubmitForm:{},remindSubmitForm1:{},remindFormData1:{labelWidth:"110px",list:[{type:"RADIO",key:"radio4",label:"",list:()=>i.radio5,config:{onChange:e=>{h(e,2,1)}}}]},remindFormData:{labelWidth:"110px",list:[{type:"RADIO",key:"radio1",label:"单轨制药品登记",list:()=>i.radio1,config:{onChange:e=>{h(e,0)}}},{type:"RADIO",key:"radio2",label:"双轨制药品登记",list:()=>i.radio2,config:{onChange:e=>{h(e,1)}}},{type:"RADIO",key:"radio3",label:"麻黄碱药品登记",list:()=>i.radio3,config:{onChange:e=>{h(e,2)}}}]},tList:[]}),o=async e=>{await f({name:"openMultipleStores",value:e});let a=s(r({},t.state.common.info),{openMultipleStores:e});t.commit("common/USERINFO",a)},n=async()=>{const e=await y();l.submitForm.oneClickStorageConfig=e.tdata},m=async e=>{await p({oneClickStorageConfig:e});let a=s(r({},t.state.common.info),{oneClickStorageConfig:e});t.commit("common/USERINFO",a),n()},S=()=>{b().then((e=>{l.tList=e.remindVos;for(let a=0;a<e.remindVos.length;a++)for(let t=0;t<3;t++)e.remindVos[a].prescriptionType==t&&(l.remindSubmitForm["radio"+(t+1)]=e.remindVos[a].offOn)})),v({name:"discount"}).then((e=>{l.remindSubmitForm1.radio4=parseInt(e.value)}))},h=(e,a,t)=>{if(t)f({name:"discount",value:e});else{let t=s(r({},l.tList[a]),{offOn:e});c(t).then((()=>{g.success("成功"),S()}))}};return j((()=>{n()})),s(r({},x(l)),{menuSelect:(e,a)=>{l.menuIndex=e,2==e?S():1==e?n():3==e?v({name:"openMultipleStores"}).then((e=>{l.submitForm1.radio4=parseInt(e.value)})):4==e?v({name:"supplierValidity"}).then((e=>{l.certificatesValidity=e.value})):v({name:"productIndate"}).then((e=>{l.commodityValidity=e.value}))},getCommodityValidity:async()=>{/^([1-9][0-9]{0,3})$/.test(l.commodityValidity)||l.commodityValidity?await f({name:"productIndate",value:l.commodityValidity}):g.error("商品近效期只能为4位正整数!")},getCertificatesValidity:async()=>{/^([1-9][0-9]{0,3})$/.test(l.certificatesValidity)||l.certificatesValidity?await f({name:"supplierValidity",value:l.certificatesValidity}):g.error("供应商证件照效期只能为4位正整数!")}})}};const P=e=>(w("data-v-7ad88e6e"),e=e(),k(),e),A={class:"supplier"},T={class:"table_style"},E=P((()=>F("span",null,"采购配置",-1))),M=P((()=>F("span",null,"前台配置",-1))),W=P((()=>F("span",null,"门店价格配置",-1))),L=P((()=>F("span",null,"供应商证件照效期预警设置",-1))),N=P((()=>F("span",null,"商品近效期预警设置",-1))),$=P((()=>F("div",{class:"tips-title"},[F("span",null,"开启后，收货完成自动生成验收单和入库单")],-1))),q=P((()=>F("div",{class:"remindTitle"},[F("span",null," GSP登记提醒 ")],-1))),B=P((()=>F("div",{class:"remindTips"},[F("span",null,"开启后，收银台结算自动弹出登记提醒")],-1))),G=P((()=>F("div",{class:"remindTitle"},[F("span",null," 整单折扣 ")],-1))),H=P((()=>F("div",{class:"remindTips"},[F("span",null,"开启后，可在收银台对订单进行整单折扣")],-1))),J={style:{display:"flex"}},Q=P((()=>F("div",{style:{flex:"1","font-weight":"bold","font-size":"19px"}}," 供应商证件照效期预警设置 ",-1))),K=U("完成 "),X=U(" 供应商证件照有效期至当日，小于等于 "),Y=U(" 天，将提醒该供应商资质已近效期 "),Z={style:{display:"flex","font-weight":"bold","font-size":"19px"}},ee=P((()=>F("div",{style:{flex:"1"}},"商品近效期预警设置",-1))),ae=U("完成 "),te=U(" 商品有效期至当日，小于等于 "),ie=U(" 天，将提醒该供应商资质已近效期 ");var le=z(R,[["render",function(e,a,t,i,l,o){const n=S("el-menu-item"),r=S("el-menu"),s=S("el-aside"),d=m,u=S("el-main"),f=S("el-button"),p=S("el-input"),c=S("el-container");return h(),V("div",A,[F("div",T,[_(c,null,{default:I((()=>[_(s,{width:"auto",class:"menu-content"},{default:I((()=>[_(r,{"default-active":e.active,class:"el-menu-vertical-demo","unique-opened":!0,onSelect:i.menuSelect},{default:I((()=>[_(n,{index:"1"},{default:I((()=>[E])),_:1}),_(n,{index:"2"},{default:I((()=>[M])),_:1}),_(n,{index:"3"},{default:I((()=>[W])),_:1}),_(n,{index:"4"},{default:I((()=>[L])),_:1}),_(n,{index:"5"},{default:I((()=>[N])),_:1})])),_:1},8,["default-active","onSelect"])])),_:1}),_(c,{class:"content"},{default:I((()=>[D(_(u,{class:"main-content"},{default:I((()=>[_(d,{stayleConfig:e.stayleConfig,"form-data":e.formData,"onUpdate:form-data":a[0]||(a[0]=a=>e.formData=a),"submit-form":e.submitForm,"onUpdate:submit-form":a[1]||(a[1]=a=>e.submitForm=a)},null,8,["stayleConfig","form-data","submit-form"]),$])),_:1},512),[[O,1==e.menuIndex]]),D(_(u,{class:"remindMain"},{default:I((()=>[q,_(d,{radioStyle:e.radioStyle,stayleConfig:e.stayleConfig,"form-data":e.remindFormData,"onUpdate:form-data":a[2]||(a[2]=a=>e.remindFormData=a),"submit-form":e.remindSubmitForm,"onUpdate:submit-form":a[3]||(a[3]=a=>e.remindSubmitForm=a)},null,8,["radioStyle","stayleConfig","form-data","submit-form"]),B,G,_(d,{radioStyle:e.radioStyle,stayleConfig:e.stayleConfig,"form-data":e.remindFormData1,"onUpdate:form-data":a[4]||(a[4]=a=>e.remindFormData1=a),"submit-form":e.remindSubmitForm1,"onUpdate:submit-form":a[5]||(a[5]=a=>e.remindSubmitForm1=a)},null,8,["radioStyle","stayleConfig","form-data","submit-form"]),H])),_:1},512),[[O,2==e.menuIndex]]),D(_(u,{class:"main-content"},{default:I((()=>[_(d,{stayleConfig:e.stayleConfig,"form-data":e.formData1,"onUpdate:form-data":a[6]||(a[6]=a=>e.formData1=a),"submit-form":e.submitForm1,"onUpdate:submit-form":a[7]||(a[7]=a=>e.submitForm1=a)},null,8,["stayleConfig","form-data","submit-form"])])),_:1},512),[[O,3==e.menuIndex]]),D(_(u,{class:"main-content"},{default:I((()=>[F("div",J,[Q,_(f,{type:"primary",size:"small",onClick:i.getCertificatesValidity},{default:I((()=>[K])),_:1},8,["onClick"])]),F("div",null,[X,_(p,{placeholder:"请输入效期预警天数!",size:"small",style:{width:"100px"},modelValue:e.certificatesValidity,"onUpdate:modelValue":a[8]||(a[8]=a=>e.certificatesValidity=a)},null,8,["modelValue"]),Y])])),_:1},512),[[O,4==e.menuIndex]]),D(_(u,{class:"main-content"},{default:I((()=>[F("div",Z,[ee,_(f,{type:"primary",size:"small",onClick:i.getCommodityValidity},{default:I((()=>[ae])),_:1},8,["onClick"])]),F("div",null,[te,_(p,{placeholder:"请输入效期预警天数!",size:"small",modelValue:e.commodityValidity,"onUpdate:modelValue":a[9]||(a[9]=a=>e.commodityValidity=a),style:{width:"100px"}},null,8,["modelValue"]),ie])])),_:1},512),[[O,5==e.menuIndex]])])),_:1})])),_:1})])])}],["__scopeId","data-v-7ad88e6e"]]);export{le as default};
