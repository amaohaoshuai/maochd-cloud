import"./index.ab904951.js";import{a as t}from"./axios.7b768d2b.js";function a(){return t.get("/gateway/chain-store/dict/getAll")}function e({key:a,data:e}){return t.post(`/gateway/chain-store/dict/update/${a}`,e)}export{a as g,e as s};