import"./index.ab904951.js";import{a}from"./axios.7b768d2b.js";function t(t){return a.get("/gateway/chain-store/find/page",{params:t})}function e(t){return a.get("/gateway/chain-store/mechanism/find/list",{params:t})}function n(t){return a.get(`/gateway/chain-store/change/state/${t}`)}function r(t){return a.get(`/gateway/chain-store/delete/${t}`)}function i(t){return a.post("/gateway/chain-store/save",t)}function s(t){return a.post("/gateway/chain-store/integralDeductCofig",t)}function o(t){return a.get(`/gateway/chain-store/set/default/${t}`)}function c(t){return a.get("/gateway/chain-store/receive/detail/page",{params:t})}function g(t){return a.get("/gateway/chain-store/receive/total",{params:t})}function u(t){return a.get("/gateway/chain-store/receive/detail/total",{params:t})}export{u as a,c as b,n as c,r as d,o as e,t as f,g,i as h,s as i,e as j};