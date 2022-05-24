import{a as e,v as r}from"./verification.ecddc814.js";function a(e,r,a){if(""==r)a(new Error(e.message));else{/^[0-9]{6}$/.test(r)?a():a(new Error("请输入正确的邮政编码"))}}function n(e,a,n){r(a)?n():n(new Error("请输入正确的手机号码"))}function s(r,a,n){"string"!=typeof a||null!=a&&""!==a?"string"==typeof a&&e(a)?n(new Error(`${r.newMessage}头尾不能有空格`)):n():n(new Error(`请输入${r.newMessage}`))}function t(e,r,a){let n=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");r?n.test(r)?a():a(new Error("请输入正确的邮箱")):a(new Error(e.message))}function i(e,r,a){!e.required&&""===r||!e.required&&null===r||/0\d{2,3}-\d{7,8}/.test(r)?a():a(new Error("请输入正确的座机号码"))}function o(e,r,a){Array.isArray(r)?0===r.length?a(new Error(e.message)):a():a(new Error(e.message))}function u(e,r,a){if(r||a(new Error(e.message)),/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(r))if(18==r.length){let e=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),n=new Array(1,0,10,9,8,7,6,5,4,3,2),s=0;for(let a=0;a<17;a++)s+=r.substring(a,a+1)*e[a];let t=s%11,i=r.substring(17);2==t?"X"==i||"x"==i?a():a(new Error("请输入正确的身份证号")):i==n[t]?a():a(new Error("请输入正确的身份证号"))}else a(new Error("请输入正确的身份证号"));else a(new Error("请输入正确的身份证号"))}function c(e,r,a){isNaN(Number(r))?a(new Error(e.message)):a()}function d(e,r,a){r<0?a(new Error(e.message)):a()}function l(e,r,a){/^[0-9]\d*$/.test(r)?a():a(new Error(e.message))}function g(e,r,a){/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)/.test(r)?a():a(new Error(e.message))}function m(e,r,a){if(!Array.isArray(e.duplicData))throw new Error("duplicData is not Array Type!");e.duplicData.includes(r)?a(new Error(e.message)):a()}function f(e,r,a){if("function"!=typeof e.handler)throw new Error("handler is not a Function!");e.handler(r)?a():a(new Error(e.message))}function w(e,r,a){String(r).length>e.maxlength?a(new Error(e.message)):a()}function E(e,r,a){(e.required||!function(e){return""===e||null==e}(r))&&String(r).length<e.minlength?a(new Error(e.message)):a()}function $(e,r,a){parseFloat(r)>parseFloat(e.max)?a(new Error(e.message)):a()}function p(e,r,a){parseFloat(r)<parseFloat(e.min)?a(new Error(e.message)):a()}function b(e,r,a){r?/^[\u4E00-\u9FA5]{1,5}$/.test(r)?a():a(new Error("请输入中文")):a(new Error(e.message))}function h(e,r,a){r?/^[0-9a-zA-Z]*$/.test(r)?a():a(new Error("请输入字母和数字组合")):a(new Error(e.message))}function v(e,r,a){a()}function q(e="required",r={}){return Object.assign({},function(e){return{required:{},array:{validator:o},number:{validator:c},phone:{validator:n},mail:{validator:t},idCard:{validator:u},integer:{validator:l},price:{validator:g},duplic:{validator:m},positive:{validator:d},compare:{validator:f},maxlength:{validator:w},minlength:{validator:E},max:{validator:$},min:{validator:p},postcode:{validator:a},telePhone:{validator:i},Chinese:{validator:b},account:{validator:h},"no-required":{validator:v}}[e]}(e),r)}function k(e,r,a={}){const n={required:!0,trigger:"change"};switch(e){case"input":n.message=`请输入${r}`;break;case"select":n.message=`请选择${r}`;break;case"upload":n.message=`请上传${r}`;break;case"no-required":n.required=!1;break;case"required":n.message=`${r}不能为空`;break;case"maxlength":n.message=`${r}长度不能大于${a.maxlength}`;break;case"minlength":n.message=`${r}长度不能小于${a.minlength}`;break;case"max":n.message=`${r}数额不能大于${a.max}`;break;case"min":n.message=`${r}数额不能小于${a.min}`;break;case"number":n.message=`${r}必须为数字`;break;case"integer":n.message=`${r}必须为整数`;break;case"price":n.message=`${r}填写有误`;break;case"positive":n.message=`${r}必须为正数`;break;case"duplic":n.message=`${r}不能重复`;break;case"compare":n.message=`请输入正确的${r}`}return n}function x(e,r,a={}){a=Object.assign({},k(e,r,a),a);let n=[];if("required"===(e=["input","select","upload"].includes(e)?"required":e))n=[{validator:s},q(e,a)],n[0].newMessage=r;else if("no-required"===a.required){const s=Object.assign({},a,k("no-required",r));n.unshift(q(e,s))}else n=[q(e,a)];if("positive"===e){const e=Object.assign({},a,k("number",r));n.unshift(q("number",e))}if("required"!==e&&a.required){const e=Object.assign({},a,k("required",r));n.unshift(q("required",e))}return n}export{x as g};