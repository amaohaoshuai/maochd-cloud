import{u as e,m as a}from"./vuex.c868d4e0.js";import{_ as s}from"./lodash.d7ab6f48.js";import{u as t,b as o}from"./vue-router.91336ba9.js";import{d as r}from"./public.9c1d8f39.js";import{_ as l}from"./index.ab904951.js";import{h as i,i as c,B as d,o as n,a5 as u,a6 as m,f as p,e as b,w as f,a8 as h}from"./@vue.23a4bd1a.js";const v={props:{close:{type:Boolean,default:()=>!1},beforeClose:Function,closed:Function,route:{type:Object,default:()=>({})},backTips:{type:Boolean,default:()=>!0},isEdit:{},tId:{type:String},tClass:{type:String}},emits:["click"],setup(l,{emit:d}){const n=e(),u=a("common",["tabActive","tabs"]),m=i(u.tabs.bind({$store:n})),p=t(),b=o(),f=e=>{l.beforeClose&&l.beforeClose();let a=s.findIndex(m.value,{path:b.path}),t=b.path,o=b.query.returnPath?b.query.returnPath.split("?")[0]:l.route.path,r=b.query.returnPath?b.query.returnPath:l.route;setTimeout((()=>{r&&p.push(r),l.closed&&closed(),n.commit("common/TABREMOVE",{path:t,index:a}),n.commit("common/TABACTIVE",o)}),e)};return c((()=>l.close),(e=>{e&&f(100)})),{handleSumit:()=>{d("click")},handleBack:()=>{l.backTips&&1!=l.isEdit?r({msg:"确认返回吗?",callback:()=>{f(0)}}):f(0)},closeView:f}}},k={class:"base-card"},y={class:"header"},B={class:"box"},j=["id"];var C=l(v,[["render",function(e,a,s,t,o,r){const l=d("el-scrollbar");return n(),u("div",k,[m("div",y,[m("i",{class:"el-icon-arrow-left",onClick:a[0]||(a[0]=(...e)=>t.handleBack&&t.handleBack(...e))}),p(e.$slots,"header",{},void 0,!0)]),b(l,null,{default:f((()=>[m("div",{class:h(["top",s.tClass])},[m("div",B,[p(e.$slots,"top",{},void 0,!0)])],2),m("div",{class:"content",id:s.tId},[p(e.$slots,"default",{},void 0,!0)],8,j)])),_:3})])}],["__scopeId","data-v-1081acb2"]]);export{C as _};