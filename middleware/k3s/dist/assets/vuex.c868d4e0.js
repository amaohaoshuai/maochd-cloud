import{m as t,i as e,j as n,a3 as o}from"./@vue.23a4bd1a.js";
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */function r(e){return void 0===e&&(e=null),t(null!==e?e:"store")}function i(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function a(t){return null!==t&&"object"==typeof t}function s(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function c(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;l(t,n,[],t._modules.root,!0),u(t,n,e)}function u(t,o,r){var a=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,c={};i(s,(function(e,n){c[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return c[n]()},enumerable:!0})})),t._state=n({data:o}),t.strict&&function(t){e((function(){return t._state.data}),(function(){}),{deep:!0,flush:"sync"})}(t),a&&r&&t._withCommit((function(){a.data=null}))}function l(t,e,n,o,r){var i=!n.length,a=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=o),!i&&!r){var s=p(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){s[c]=o.state}))}var u=o.context=function(t,e,n){var o=""===e,r={dispatch:o?t.dispatch:function(n,o,r){var i=d(n,o,r),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:o?t.commit:function(n,o,r){var i=d(n,o,r),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(r,{getters:{get:o?function(){return t.getters}:function(){return f(t,e)}},state:{get:function(){return p(t.state,n)}}}),r}(t,a,n);o.forEachMutation((function(e,n){!function(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){n.call(t,o.state,e)}))}(t,a+n,e,u)})),o.forEachAction((function(e,n){var o=e.root?n:a+n,r=e.handler||e;!function(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push((function(e){var r,i=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e);return(r=i)&&"function"==typeof r.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,o,r,u)})),o.forEachGetter((function(e,n){!function(t,e,n,o){if(t._wrappedGetters[e])return;t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}(t,a+n,e,u)})),o.forEachChild((function(o,i){l(t,e,n.concat(i),o,r)}))}function f(t,e){if(!t._makeLocalGettersCache[e]){var n={},o=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function p(t,e){return e.reduce((function(t,e){return t[e]}),t)}function d(t,e,n){return a(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var h=0;function m(t,e){o({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:"vuex:mutations",label:"Vuex Mutations",color:v}),n.addTimelineLayer({id:"vuex:actions",label:"Vuex Actions",color:v}),n.addInspector({id:"vuex",label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&"vuex"===n.inspectorId)if(n.filter){var o=[];b(o,e._modules.root,n.filter,""),n.rootNodes=o}else n.rootNodes=[g(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&"vuex"===n.inspectorId){var o=n.nodeId;f(e,o),n.state=function(t,e,n){e="root"===n?e:e[n];var o=Object.keys(e),r={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(o.length){var i=function(t){var e={};return Object.keys(t).forEach((function(n){var o=n.split("/");if(o.length>1){var r=e,i=o.pop();o.forEach((function(t){r[t]||(r[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),r=r[t]._custom.value})),r[i]=w((function(){return t[n]}))}else e[n]=w((function(){return t[n]}))})),e}(e);r.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?_(t):t,editable:!1,value:w((function(){return i[t]}))}}))}return r}((r=e._modules,(a=(i=o).split("/").filter((function(t){return t}))).reduce((function(t,e,n){var o=t[e];if(!o)throw new Error('Missing module "'+e+'" for path "'+i+'".');return n===a.length-1?o:o._children}),"root"===i?r:r.root._children)),"root"===o?e.getters:e._makeLocalGettersCache,o)}var r,i,a})),n.on.editInspectorState((function(n){if(n.app===t&&"vuex"===n.inspectorId){var o=n.nodeId,r=n.path;"root"!==o&&(r=o.split("/").filter(Boolean).concat(r)),e._withCommit((function(){n.set(e._state.data,r,n.state.value)}))}})),e.subscribe((function(t,e){var o={};t.payload&&(o.payload=t.payload),o.state=e,n.notifyComponentUpdate(),n.sendInspectorTree("vuex"),n.sendInspectorState("vuex"),n.addTimelineEvent({layerId:"vuex:mutations",event:{time:Date.now(),title:t.type,data:o}})})),e.subscribeAction({before:function(t,e){var o={};t.payload&&(o.payload=t.payload),t._id=h++,t._time=Date.now(),o.state=e,n.addTimelineEvent({layerId:"vuex:actions",event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:o}})},after:function(t,e){var o={},r=Date.now()-t._time;o.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},t.payload&&(o.payload=t.payload),o.state=e,n.addTimelineEvent({layerId:"vuex:actions",event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:o}})}})}))}var v=8702998,y={label:"namespaced",textColor:16777215,backgroundColor:6710886};function _(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function g(t,e){return{id:e||"root",label:_(e),tags:t.namespaced?[y]:[],children:Object.keys(t._children).map((function(n){return g(t._children[n],e+n+"/")}))}}function b(t,e,n,o){o.includes(n)&&t.push({id:o||"root",label:o.endsWith("/")?o.slice(0,o.length-1):o||"Root",tags:e.namespaced?[y]:[]}),Object.keys(e._children).forEach((function(r){b(t,e._children[r],n,o+r+"/")}))}function w(t){try{return t()}catch(e){return e}}var j=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},x={namespaced:{configurable:!0}};x.namespaced.get=function(){return!!this._rawModule.namespaced},j.prototype.addChild=function(t,e){this._children[t]=e},j.prototype.removeChild=function(t){delete this._children[t]},j.prototype.getChild=function(t){return this._children[t]},j.prototype.hasChild=function(t){return t in this._children},j.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},j.prototype.forEachChild=function(t){i(this._children,t)},j.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},j.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},j.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(j.prototype,x);var C=function(t){this.register([],t,!1)};function O(t,e,n){if(e.update(n),n.modules)for(var o in n.modules){if(!e.getChild(o))return;O(t.concat(o),e.getChild(o),n.modules[o])}}function k(t){return new E(t)}C.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},C.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")}),"")},C.prototype.update=function(t){O([],this.root,t)},C.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var r=new j(e,n);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r);e.modules&&i(e.modules,(function(e,r){o.register(t.concat(r),e,n)}))},C.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],o=e.getChild(n);o&&o.runtime&&e.removeChild(n)},C.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var E=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var o=t.strict;void 0===o&&(o=!1);var r=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new C(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var i=this,a=this.dispatch,s=this.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return s.call(i,t,e,n)},this.strict=o;var c=this._modules.root.state;l(this,c,[],this._modules.root),u(this,c),n.forEach((function(t){return t(e)}))},M={state:{configurable:!0}};E.prototype.install=function(t,e){t.provide(e||"store",this),t.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&m(t,this)},M.state.get=function(){return this._state.data},M.state.set=function(t){},E.prototype.commit=function(t,e,n){var o=this,r=d(t,e,n),i=r.type,a=r.payload,s={type:i,payload:a},c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(s,o.state)})))},E.prototype.dispatch=function(t,e){var n=this,o=d(t,e),r=o.type,i=o.payload,a={type:r,payload:i},s=this._actions[r];if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,n.state)}))}catch(u){}var c=s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,n.state)}))}catch(u){}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,n.state,t)}))}catch(u){}e(t)}))}))}},E.prototype.subscribe=function(t,e){return s(t,this._subscribers,e)},E.prototype.subscribeAction=function(t,e){return s("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},E.prototype.watch=function(t,n,o){var r=this;return e((function(){return t(r.state,r.getters)}),n,Object.assign({},o))},E.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},E.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),l(this,this.state,t,this._modules.get(t),n.preserveState),u(this,this.state)},E.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){delete p(e.state,t.slice(0,-1))[t[t.length-1]]})),c(this)},E.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},E.prototype.hotUpdate=function(t){this._modules.update(t),c(this,!0)},E.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(E.prototype,M);var I=A((function(t,e){var n={};return S(e).forEach((function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=N(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0})),n})),G=A((function(t,e){var n={};return S(e).forEach((function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var i=N(this.$store,"mapActions",t);if(!i)return;o=i.context.dispatch}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}})),n}));function S(t){return function(t){return Array.isArray(t)||a(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function A(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function N(t,e,n){return t._modulesNamespaceMap[n]}export{G as a,k as c,I as m,r as u};