import"./index.ab904951.js";import{a}from"./axios.7b768d2b.js";function e(e){return a.get("/gateway/chain-store/purchaseReturn/queryPage",{params:e})}function t(e){return a.get("/gateway/chain-store/purchaseReturn/detail",{params:e})}function r(e){return a.get("/gateway/chain-store/purchaseReturn/findDrug",{params:e})}function n(e){return a.post("/gateway/chain-store/purchaseReturn/add",e)}function s(e){return a.post("/gateway/chain-store/purchaseReturn/rushRed",e)}function u(e){return a.get(`/gateway/chain-store/rushRed/getRedRush/${e}`)}function c(e){return a.get("/gateway/chain-store/rushRed/queryPageBySource",{params:e})}function o(e){return a.get("/gateway/chain-store/purchaseReturn/getNoPickList",{params:e})}function i(e){return a.post("/gateway/chain-store/purchaseReturn/pickUpProduct",e)}export{e as a,n as b,t as c,u as d,r as f,o as g,i as p,c as q,s as r};