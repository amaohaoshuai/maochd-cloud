import"./index.ab904951.js";import{a as e}from"./axios.7b768d2b.js";function t(t){return e.get("/gateway/chain-store/userInfo/page",{params:t})}function a(){return e.get("/gateway/chain-store/store/list")}function n(t){return e.get(`/gateway/chain-store/userInfo/forbidden/${t}`)}function r(t){return e.get(`/gateway/chain-store/userInfo/pwdReset/${t}`)}function s(t){return e.post("/gateway/chain-store/userInfo/add",t)}function o(t){return e.get(`/gateway/chain-store/userInfo/view/${t}`)}function i(t){return e.post("/gateway/chain-store/userInfo/update",t)}export{s as a,a as b,i as e,t as g,n as o,r,o as s};
