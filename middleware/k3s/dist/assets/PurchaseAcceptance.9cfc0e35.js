import"./index.ab904951.js";import{a as e}from"./axios.7b768d2b.js";function t(t){return e.get("/gateway/chain-store/check/accept/getCheckAcceptPage",{params:t})}function a(t){return e.get("/gateway/chain-store/check/accept/detail/page",{params:t})}function c(t){return e.get("/gateway/chain-store/check/accept/getCheckAcceptInfo",{params:t})}function r(t){return e.post(`/gateway/chain-store/check/accept/deleteCheckAccept?checkUuid=${t}`)}function n(t){return e.post("/gateway/chain-store/check/accept/crateCheckAccept",t)}function i(t){return e.get("/gateway/chain-store/receive/queryPage",{params:t})}function s(t){return e.get(`/gateway/chain-store/receive/detail/${t}`)}function o(t){return e.get(`/gateway/chain-store/receive/detail/${t}`)}function p(){return e.get("/gateway/chain-store/supplier/find/supplierSelectList")}function g(t){return e.get("/gateway/chain-store/check/accept/getCheckAcceptTotal",{params:t})}function u(t){return e.get("/gateway/chain-store/check/accept/detail/total",{params:t})}export{t as a,u as b,a as c,r as d,n as e,s as f,g,o as h,c as i,i as r,p as s};
