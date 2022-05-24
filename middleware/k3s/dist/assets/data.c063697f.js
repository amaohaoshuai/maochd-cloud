import{e,_ as l,c as t,f as i}from"./element-plus.b44d97a8.js";import{_ as r}from"./BaseName.1aa32b4b.js";import{B as a}from"./BaseNotice.93ee8e4e.js";import"./lodash.d7ab6f48.js";import{G as o}from"./@vue.23a4bd1a.js";const u=["name","specification","unit","manufacturer"],n=/^(?:(?!0)\d*|0)(?:\.\d+)?$/;function m(m,s,N,d,v){return{compList:[{title:"序号",type:"index",formConfig:{width:50},fixed:"left"},{title:"商品编码",key:"code",sortable:!0,width:150,fixed:"left"},{title:"商品名称",key:"productName",sortable:!0,width:180,fixed:"left",render:e=>(e.name=e.productName,o(r,{row:e})),formConfig:{"show-overflow-tooltip":!1}},{title:"批号",key:"batchNum",width:150},{title:"生产日期",key:"producedTime",width:150},{title:"有效期至",key:"indate",width:150},{title:"库存数量",key:"overallPackNum",width:100,align:"right",sortable:!0,render:e=>o("div",[o("span",{innerText:e.overallPackNum}),o("span",{class:"unit",innerText:e.unit}),e.isSplit?o("div",[o("span",{innerText:e.deleavePackNum}),o("span",{class:"unit",innerText:e.splitUnit})]):""])},{title:"整装实盘数量",key:"overallRealNum",width:200,align:"right",sortable:!0,render:e=>o("div",{class:"table-content"},[m?o(t,{modelValue:null==e.overallRealNum?void 0:e.overallRealNum,style:{width:"100%",height:Number(e.overallRealNum)!==Number(e.overallPackNum)?"32px":""},size:"small",class:Number(e.overallRealNum)!==Number(e.overallPackNum)?"warning-tips el-input__inner":"",onInput:l=>{e.overallRealNum=void 0===l?null:l},onChange:t=>{if(!n.test(t))return e.overallRealNum=null,void l.warning("请输入大于0的数字");t?(e.overallProfitLossNum=(1e6*Number(e.overallRealNum)-1e6*Number(e.overallPackNum))/1e6,e.firmOfferCostAmount=(Number(e.overallRealNum)*Number(e.overallPackPrice)+Number(e.deleaveRealNum)*Number(e.deleavePackPrice)).toFixed(2),e.profitLossCostAmount=(Number(e.overallProfitLossNum)*Number(e.overallPackPrice)+Number(e.deleaveProfitLossNum)*Number(e.deleavePackPrice)).toFixed(2),e.firmRetailAmount=Number(e.overallRealNum)*Number(e.fullRetailPrice)+Number(e.deleaveRealNum)*(e.isSplit?Number(e.fullRetailPrice)/Number(e.conversionRatio):0),e.profitLossRetailAmount=Number(e.overallProfitLossNum)*Number(e.fullRetailPrice)+Number(e.deleaveRealNum)*(e.isSplit?Number(e.fullRetailPrice)/Number(e.conversionRatio):0)):(e.profitLossRetailAmount=null,e.firmRetailAmount=null,e.profitLossCostAmount=null,e.firmOfferCostAmount=null,e.overallProfitLossNum=null),m(e)}}):o("span",{innerText:e.overallRealNum}),o("span",{class:"unit",style:{color:Number(e.overallRealNum)!==Number(e.overallPackNum)?"#ff0000":""},innerText:m||"number"==typeof e.overallRealNum?e.unit:"-"})])},{title:"拆零实盘数量",key:"deleaveRealNum",width:200,align:"right",sortable:!0,render:e=>e.isSplit?o("div",{class:"table-content"},[m?o(t,{modelValue:null==e.deleaveRealNum?void 0:e.deleaveRealNum,style:{width:"100%",height:Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"32px":""},class:Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"warning-tips el-input__inner":"",size:"small",onInput:l=>{e.deleaveRealNum=void 0===l?null:l},onChange:t=>{if(!n.test(t))return e.deleaveRealNum=null,void l.warning("请输入大于0的数字");t?(e.firmOfferCostAmount=(Number(e.overallRealNum)*Number(e.overallPackPrice)+Number(e.deleaveRealNum)*Number(e.deleavePackPrice)).toFixed(2),e.profitLossCostAmount=(Number(e.overallProfitLossNum)*Number(e.overallPackPrice)+Number(e.deleaveProfitLossNum)*Number(e.deleavePackPrice)).toFixed(2),e.firmRetailAmount=Number(e.overallRealNum)*Number(e.fullRetailPrice)+Number(e.deleaveRealNum)*(e.isSplit?Number(e.fullRetailPrice)/Number(e.conversionRatio):0),e.profitLossRetailAmount=Number(e.overallProfitLossNum)*Number(e.fullRetailPrice)+Number(e.deleaveRealNum)*(e.isSplit?Number(e.fullRetailPrice)/Number(e.conversionRatio):0)):(e.profitLossRetailAmount=null,e.firmRetailAmount=null,e.profitLossCostAmount=null,e.firmOfferCostAmount=null,e.overallProfitLossNum=null),m(e)}}):o("span",{innerText:e.deleaveRealNum}),,o("span",{class:"unit",style:{color:Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"#ff0000":""},innerText:m||"number"==typeof e.deleaveRealNum?e.splitUnit:"-"})]):"-"},{title:"整装盈亏数量",key:"overallProfitLossNum",width:150,sortable:!0,header:()=>o(a,{title:"整装盈亏数量",content:"=整装实盘数量-整装数量，正数为盈收；负数为亏损"}),align:"right",render:e=>o("div",[o("span",{innerText:e.overallProfitLossNum,style:{color:Number(e.overallRealNum)!==Number(e.overallPackNum)||Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"#ff0000":""}}),o("span",{class:"unit",style:{color:Number(e.overallRealNum)!==Number(e.overallPackNum)||Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"#ff0000":""},innerText:"number"!=typeof e.overallProfitLossNum?"-":e.unit})])},{title:"拆零盈亏数量",key:"deleaveProfitLossNum",width:150,sortable:!0,header:()=>o(a,{title:"拆零盈亏数量",content:"=拆零实盘数量-拆零数量，正数为盈收；负数为亏损"}),align:"right",render:e=>o("div",[o("span",{innerText:e.deleaveProfitLossNum,style:{color:Number(e.overallRealNum)!==Number(e.overallPackNum)||Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"#ff0000":""}}),o("span",{class:"unit",style:{color:Number(e.overallRealNum)!==Number(e.overallPackNum)||Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"#ff0000":""},innerText:null==e.deleaveProfitLossNum?"-":e.splitUnit})])},{title:"成本进价",key:"overallPackPrice",width:150,sortable:!0,align:"right"},{title:"实盘成本金额",sortable:!0,key:"firmOfferCostAmount",header:()=>o(a,{title:"实盘成本金额",content:"=整装实盘数量*成本进价+拆零实盘数量*拆零成本进价"}),width:170,align:"right",render:e=>o("div",[o("span",{innerText:e.firmOfferCostAmount,style:{color:Number(e.overallRealNum)!==Number(e.overallPackNum)||Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"#ff0000":""}})])},{title:"盈亏成本金额",sortable:!0,key:"profitLossCostAmount",header:()=>o(a,{title:"盈亏成本金额",content:"=整装盈亏数量*成本进价+拆零盈亏数量*拆零成本进价"}),width:170,align:"right",render:e=>o("div",[o("span",{innerText:e.profitLossCostAmount,style:{color:Number(e.overallRealNum)!==Number(e.overallPackNum)||Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"#ff0000":""}})])},{title:"零售价",key:"fullRetailPrice",width:120,align:"right"},{title:"实盘零售金额",sortable:!0,key:"firmRetailAmount",header:()=>o(a,{title:"实盘零售金额",content:"=整装实盘数量*整装零售价+拆零实盘数量*（整装零售价/拆零转换比）"}),width:170,align:"right",render:e=>o("div",[o("span",{innerText:e.firmRetailAmount,style:{color:Number(e.overallRealNum)!==Number(e.overallPackNum)||Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"#ff0000":""}})])},{title:"盈亏零售金额",sortable:!0,key:"profitLossRetailAmount",header:()=>o(a,{title:"盈亏零售金额",content:"=整装盈亏数量*整装零售价+拆零盈亏数量*（整装零售价/拆零转换比）"}),width:170,align:"right",render:e=>o("div",[o("span",{innerText:e.profitLossRetailAmount,style:{color:Number(e.overallRealNum)!==Number(e.overallPackNum)||Number(e.deleaveRealNum)!==Number(e.deleavePackNum)?"#ff0000":""}})])},{title:"差异状态",key:"differences",render:e=>["无差异","有差异"][e.differences],width:120},{title:"柜组",key:"cabinetGroupName",width:150}],compListDetail:[{title:"序号",type:"index",formConfig:{width:50},fixed:"left"},{title:"商品编码",key:"code",sortable:!0,width:150,fixed:"left"},{title:"商品名称",sortable:!0,key:"productName",width:180,fixed:"left",render:e=>(e.name=e.productName,o(r,{row:e})),formConfig:{"show-overflow-tooltip":!1}},{title:"库存数量",key:"overallPackNum",width:100,sortable:!0,align:"right",render:e=>o("div",[o("span",{innerText:e.overallPackNum}),o("span",{class:"unit",innerText:e.unit}),e.isSplit?o("div",[o("span",{innerText:e.deleavePackNum}),o("span",{class:"unit",innerText:e.splitUnit})]):""])},{title:"整装实盘数量",key:"overallRealNum",width:200,sortable:!0,align:"right",render:e=>o("div",[o("span",{innerText:e.overallRealNum}),o("span",{class:"unit",innerText:m||"number"==typeof e.overallRealNum?e.unit:"-"})])},{title:"拆零实盘数量",key:"deleaveRealNum",width:200,sortable:!0,align:"right",render:e=>o("div",[o("span",{innerText:e.deleaveRealNum}),o("span",{class:"unit",innerText:"number"==typeof e.deleaveRealNum||m?e.splitUnit:"-"})])},{title:"整装盈亏数量",key:"overallProfitLossNum",sortable:!0,header:()=>o(a,{title:"整装盈亏数量",content:"=整装实盘数量-整装数量，正数为盈收；负数为亏损"}),width:150,align:"right",render:e=>o("div",[o("span",{innerText:e.overallProfitLossNum}),o("span",{class:"unit",innerText:"number"!=typeof e.overallProfitLossNum?"-":e.unit})])},{title:"拆零盈亏数量",key:"deleaveProfitLossNum",sortable:!0,header:()=>o(a,{title:"拆零盈亏数量",content:"=拆零实盘数量-拆零数量，正数为盈收；负数为亏损"}),width:150,align:"right",render:e=>o("div",[o("span",{innerText:e.deleaveProfitLossNum}),o("span",{class:"unit",innerText:null==e.deleaveProfitLossNum?"-":e.splitUnit})])},{title:"成本进价",key:"overallPackPrice",sortable:!0,width:150,align:"right"},{title:"实盘成本金额",key:"firmOfferCostAmount",sortable:!0,header:()=>o(a,{title:"实盘成本金额",content:"=整装实盘数量*成本进价+拆零实盘数量*拆零成本进价"}),width:170,align:"right"},{title:"盈亏成本金额",key:"profitLossCostAmount",sortable:!0,header:()=>o(a,{title:"盈亏成本金额",content:"=整装盈亏数量*成本进价+拆零盈亏数量*拆零成本进价"}),width:170,align:"right"},{title:"零售价",key:"fullRetailPrice",width:150,align:"right"},{title:"实盘零售金额",sortable:!0,key:"firmRetailAmount",header:()=>o(a,{title:"实盘零售金额",content:"=整装实盘数量*整装零售价+拆零实盘数量*（整装零售价/拆零转换比）"}),width:170,align:"right"},{title:"盈亏零售金额",sortable:!0,key:"profitLossRetailAmount",header:()=>o(a,{title:"盈亏零售金额",content:"=整装盈亏数量*整装零售价+拆零盈亏数量*（整装零售价/拆零转换比）"}),width:170,align:"right"},{title:"差异状态",key:"differences",render:e=>["无差异","有差异"][e.differences],width:120},{title:"柜组",key:"cabinetGroupName",width:150}],notCompList:[{title:"序号",type:"index",formConfig:{width:50},fixed:"left"},{title:"商品编码",key:"code",width:150,sortable:!0,fixed:"left"},{title:"商品名称",key:"productName",width:180,sortable:!0,fixed:"left",render:e=>(e.name=e.productName,o(r,{row:e})),formConfig:{"show-overflow-tooltip":!1}},{title:"批号",key:"batchNum",width:150},{title:"生产日期",key:"producedTime",width:150},{title:"有效期至",key:"indate",width:110},{title:"库存数量",key:"overallPackNum",width:100,sortable:!0,align:"right",render:e=>o("div",[o("span",{innerText:e.overallPackNum}),o("span",{class:"unit",innerText:e.unit}),e.isSplit?o("div",[o("span",{innerText:e.deleavePackNum}),o("span",{class:"unit",innerText:e.splitUnit})]):""])},{title:"整装实盘数量",key:"overallRealNum",width:200,align:"right",sortable:N,render:(t,i,r,a)=>{let u=!1;return u=!!t.overallRealNum&&Number(t.overallRealNum)!==Number(t.overallPackNum),o("div",{class:"table-content"},[m?o(e,{modelValue:null==t.overallRealNum?void 0:t.overallRealNum,style:{width:"100%",height:u?"32px":""},max:999999.999999,class:u?"warning-tips el-input__inner":"",size:"small",onInput:e=>{t.overallRealNum=void 0===e||""===e?null:e},onChange:e=>{if(v.data.list[a].overallRealNum=t.overallRealNum,!n.test(e))return t.overallRealNum=null,void l.warning("请输入大于0的数字");t.overallRealNum||t.deleaveRealNum?(t.overallProfitLossNum=(1e6*Number(t.overallRealNum)-1e6*Number(t.overallPackNum))/1e6,t.firmOfferCostAmount=(Number(t.overallRealNum)*Number(t.overallPackPrice)+Number(t.deleaveRealNum)*(t.isSplit?Number(t.overallPackPrice)/Number(t.conversionRatio):0)).toFixed(2),t.profitLossCostAmount=(Number(t.overallProfitLossNum)*Number(t.overallPackPrice)+Number(t.deleaveProfitLossNum)*(t.isSplit?Number(t.overallPackPrice)/Number(t.conversionRatio):0)).toFixed(2),t.firmRetailAmount=Number(t.overallRealNum)*Number(t.fullRetailPrice)+Number(t.deleaveRealNum)*(t.isSplit?Number(t.fullRetailPrice)/Number(t.conversionRatio):0),t.profitLossRetailAmount=Number(t.overallProfitLossNum)*Number(t.fullRetailPrice)+Number(t.deleaveProfitLossNum)*(t.isSplit?Number(t.fullRetailPrice)/Number(t.conversionRatio):0)):(t.overallProfitLossNum=null,t.firmOfferCostAmount=null,t.firmRetailAmount=null,t.profitLossRetailAmount=null,t.profitLossCostAmount=null),m(t)}}):o("span",{innerText:t.overallRealNum}),o("span",{class:"unit",style:{color:u?"#ff0000":""},innerText:m||"number"==typeof t.overallRealNum?t.unit:"-"})])}},{title:"拆零实盘数量",key:"deleaveRealNum",width:200,align:"right",sortable:N,render:(t,i,r,a)=>{let u=!1;return u=!!t.deleaveRealNum&&Number(t.deleaveRealNum)!==Number(t.deleavePackNum),t.isSplit?o("div",{class:"table-content"},[m?o(e,{modelValue:null==t.deleaveRealNum?void 0:t.deleaveRealNum,style:{width:"100%",height:u?"32px":""},max:999999.999999,class:u?"warning-tips el-input__inner":"",size:"small",onInput:e=>{t.deleaveRealNum=e},onChange:e=>{if(v.data.list[a].deleaveRealNum=t.deleaveRealNum,!n.test(e))return t.deleaveRealNum=null,void l.warning("请输入大于0的数字");t.overallRealNum||t.deleaveRealNum?(t.deleaveProfitLossNum=(1e6*Number(t.deleaveRealNum)-1e6*Number(t.deleavePackNum))/1e6,t.overallProfitLossNum=(1e6*Number(t.overallRealNum)-1e6*Number(t.overallPackNum))/1e6,t.firmOfferCostAmount=(Number(t.overallRealNum)*Number(t.overallPackPrice)+Number(t.deleaveRealNum)*(t.isSplit?Number(t.overallPackPrice)/Number(t.conversionRatio):0)).toFixed(2),t.profitLossCostAmount=(Number(t.overallProfitLossNum)*Number(t.overallPackPrice)+Number(t.deleaveProfitLossNum)*(t.isSplit?Number(t.overallPackPrice)/Number(t.conversionRatio):0)).toFixed(2),t.firmRetailAmount=Number(t.overallRealNum)*Number(t.fullRetailPrice)+Number(t.deleaveRealNum)*(t.isSplit?Number(t.fullRetailPrice)/Number(t.conversionRatio):0),t.profitLossRetailAmount=Number(t.overallProfitLossNum)*Number(t.fullRetailPrice)+Number(t.deleaveProfitLossNum)*(t.isSplit?Number(t.fullRetailPrice)/Number(t.conversionRatio):0)):(t.overallProfitLossNum=null,t.firmOfferCostAmount=null,t.firmRetailAmount=null,t.profitLossRetailAmount=null,t.profitLossCostAmount=null,t.deleaveProfitLossNum=null),m(t)}}):o("span",{innerText:t.overallRealNum}),o("span",{class:"unit",style:{color:u?"#ff0000":""},innerText:m||"number"==typeof t.deleaveRealNum?t.splitUnit:"-"})]):"-"}},{title:"整装盈亏数量",key:"overallProfitLossNum",width:150,sortable:N,header:()=>o(a,{title:"整装盈亏数量",content:"=整装实盘数量-整装数量，正数为盈收；负数为亏损"}),align:"right",render:e=>{let l=!1;return l=!!e.deleaveRealNum&&Number(e.deleaveRealNum)!==Number(e.deleavePackNum),o("div",[o("span",{innerText:e.overallProfitLossNum,style:{color:l?"#ff0000":""}}),o("span",{class:"unit",style:{color:l?"#ff0000":""},innerText:"number"!=typeof e.overallProfitLossNum?"-":e.unit})])}},{title:"拆零盈亏数量",key:"deleaveProfitLossNum",width:150,sortable:N,header:()=>o(a,{title:"拆零盈亏数量",content:"=拆零实盘数量-拆零数量，正数为盈收；负数为亏损"}),align:"right",render:e=>{let l=!1;return l=!!e.deleaveRealNum&&Number(e.deleaveRealNum)!==Number(e.deleavePackNum),o("div",[o("span",{innerText:e.deleaveProfitLossNum,style:{color:l?"#ff0000":""}}),o("span",{class:"unit",style:{color:l?"#ff0000":""},innerText:null==e.deleaveProfitLossNum?"-":e.splitUnit})])}},{title:"成本进价",key:"overallPackPrice",width:130,align:"right",sortable:!0},{title:"实盘成本金额",key:"firmOfferCostAmount",width:170,sortable:N,header:()=>o(a,{title:"实盘成本金额",content:"=整装实盘数量*成本进价+拆零实盘数量*拆零成本进价"}),align:"right",render:e=>{let l=!1;return l=!!e.deleaveRealNum&&Number(e.deleaveRealNum)!==Number(e.deleavePackNum),o("div",[o("span",{innerText:e.firmOfferCostAmount,style:{color:l?"#ff0000":""}})])}},{title:"盈亏成本金额",key:"profitLossCostAmount",width:170,sortable:N,header:()=>o(a,{title:"盈亏成本金额",content:"=整装盈亏数量*成本进价+拆零盈亏数量*拆零成本进价"}),align:"right",render:e=>{let l=!1;return l=!!e.deleaveRealNum&&Number(e.deleaveRealNum)!==Number(e.deleavePackNum),o("div",[o("span",{innerText:e.profitLossCostAmount,style:{color:l?"#ff0000":""}})])}},{title:"零售价",key:"fullRetailPrice",width:100,align:"right"},{title:"实盘零售金额",key:"firmRetailAmount",width:120,sortable:N,header:()=>o(a,{title:"实盘零售金额",content:"=整装实盘数量*整装零售价+拆零实盘数量*（整装零售价/拆零转换比）"}),align:"right",render:e=>{let l=!1;return l=!!e.deleaveRealNum&&Number(e.deleaveRealNum)!==Number(e.deleavePackNum),o("div",[o("span",{innerText:e.firmRetailAmount,style:{color:l?"#ff0000":""}})])}},{title:"盈亏零售金额",key:"profitLossRetailAmount",width:170,sortable:N,header:()=>o(a,{title:"盈亏零售金额",content:"=整装盈亏数量*整装零售价+拆零盈亏数量*（整装零售价/拆零转换比）"}),render:e=>{let l=!1;return l=!!e.deleaveRealNum&&Number(e.deleaveRealNum)!==Number(e.deleavePackNum),o("div",[o("span",{innerText:e.profitLossRetailAmount,style:{color:l?"#ff0000":""}})])},align:"right"},{title:"柜组",key:"cabinetGroupName",width:100}],home:{1:[{title:"序号",width:50,type:"index"},{title:"盘点单号",width:120,key:"inventoryNo"},{title:"未盘批号/已盘批号",width:150,align:"right",render:e=>`${e.notBatchNum}/${e.compBatchNum}`},{title:"实盘成本金额",width:120,key:"firmOfferCostAmount",align:"right"},{title:"盈亏成本金额",width:120,key:"profitLossCostAmount",align:"right"},{title:"门店",key:"business",formConfig:{"min-width":200}},{title:"记账状态",width:100,key:"accountState",render:e=>s.texts[e.accountState]},{title:"盘点类型",width:150,render:e=>o("div",null,[o("span",{innerText:1===e.inventoryType?"全盘":2===e.inventoryType?"柜组":"商品分类"}),o(i,{effect:"dark",content:1===e.inventoryType?"":2===e.inventoryType?e.cabinetGroupNames:e.categoryNames,placement:"top"},[1!=e.inventoryType?o("i",{class:"el-icon-warning"}):""])])},{title:"创建人",width:150,key:"createUser"},{title:"制单时间",width:160,key:"createTime"},{title:"记账时间",width:160,key:"accountTime"}],2:[{title:"序号",width:50,type:"index"},{title:"盘点单号",width:120,key:"inventoryNo"},{title:"商品编码",width:120,key:"code"},{title:"门店",key:"business",formConfig:{"min-width":120}},{title:"商品/规格/单位/生产厂家",key:"",formConfig:{"min-width":250},render:e=>(e.name=e.productName,o(r,{row:e,list:u}))},{title:"批号",width:120,key:"batchNum"},{title:"生产日期",width:100,key:"producedTime"},{title:"有效期至",width:100,key:"indate"},{title:"库存数量",width:120,key:"",render:e=>`${(e.overallPackNum||0===e.overallPackNum?e.overallPackNum+e.unit:" ")+(e.deleavePackNum?e.deleavePackNum+e.splitUnit:" ")}`},{title:"整装实盘数量",width:100,key:"overallRealNum"},{title:"拆零实盘数量",width:100,key:"deleaveRealNum"},{title:"整装盈亏数量",width:100,key:"overallProfitLossNum"},{title:"拆零盈亏数量",width:100,key:"deleaveProfitLossNum"},{title:"成本进价",width:100,key:"overallPackPrice"},{title:"实盘成本金额",width:100,key:"firmOfferCostAmount"},{title:"盈亏成本金额",width:100,key:"profitLossCostAmount"},{title:"零售价",width:100,key:"fullRetailPrice"},{title:"实盘零售金额",width:100,key:"firmRetailAmount"},{title:"盈亏零售金额",width:100,key:"profitLossRetailAmount"},{title:"柜组",width:100,key:"cabinetGroupName"},{title:"制单时间",width:160,key:"createTime"}]}}}export{m as c};