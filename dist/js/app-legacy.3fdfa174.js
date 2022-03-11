(function(){"use strict";var e={4895:function(e,t,n){n(6992),n(8674),n(9601),n(7727),n(4916),n(3123);var o=n(8935),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view"),n("nav",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1)},i=[],a=(n(1539),n(8783),n(3948),{name:"DevApp",components:{NavBar:function(){return n.e(237).then(n.bind(n,5237))}}}),s=a,u=n(1001),d=(0,u.Z)(s,r,i,!1,null,null,null),c=d.exports,l=n(563);(0,l.z)("".concat("/dev/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("This app has been updated, please, close and reopen.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n(2809),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("OperatingSystem"),null==e.world?n("WorldChoose"):n("div",[n("b-button",{on:{click:function(t){e.world=null}}},[e._v("Leave "+e._s(e.world.name)+" world")]),n("WorldView")],1)],1)},m=[],h={name:"HomeView",components:{WorldChoose:function(){return n.e(120).then(n.bind(n,6120))},WorldView:function(){return n.e(488).then(n.bind(n,5488))},OperatingSystem:function(){return n.e(347).then(n.bind(n,4347))}},computed:{world:{get:function(){return this.$store.state.app.world},set:function(){this.$store.commit("app/setWorld",null)}}}},v=h,b=(0,u.Z)(v,f,m,!1,null,null,null),g=b.exports;o["default"].use(p.Z);var w=[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,7267))}}],y=new p.Z({mode:"history",base:"/dev/",routes:w}),k=y,j=n(4665),W=function(){return{world:null,worlds:[{id:"graph",name:"Graph",status:"enabled",description:"description",img:"http://gist.github.com/vasturiano/02affe306ce445e423f992faeea13521/raw/preview.png",links:[{name:"3D force-directed graph",url:"https://vasturiano.github.io/3d-force-graph/"}]},{id:"solid",name:"Solid",status:"enabled",description:"Your data, your choice. Advancing Web standards to empower people.",img:"https://solidproject.org/assets/img/solid-emblem.svg",links:[{name:"Solid Project",url:"https://solidproject.org/"},{name:"Forum",url:"https://forum.solidproject.org/"},{name:"Inrupt",url:"https://inrupt.com/"}]},{id:"physic",name:"Physic",status:"enabled",description:"A physic 3D world based on enble3D",img:"https://enable3d.io/img/enable3d-logo.png",links:[{name:"enable3D",url:"https://enable3d.io/"}]},{id:"gun",name:"GunDB",status:"enabled",description:"A decentralized database",img:"https://camo.githubusercontent.com/64213f411349db936a0fa36ef41741b170d4c8d34d1cc0d1c887f7d880838707/68747470733a2f2f636c6475702e636f6d2f5445793979476834356c2e737667",links:[{name:"Doc",url:"https://gun.eco/"}]},{id:"html",name:"Html",status:"todo",description:"a basic html world"},{id:"js",name:"JavaScript",status:"todo",description:"some interaction js world"},{id:"vuejs",name:"VueJs",status:"todo",description:"building a webapp is really simple",links:[{name:"nodejs",url:"https://www.youtube.com/watch?v=KvzmOlxaAWo&t=9s"},{name:"vue component",url:"https://www.youtube.com/watch?v=_2cZ3u7jznc&t=93s"}]},{id:"ipfs",name:"Ipfs",status:"enabled",description:"description"},{id:"safe",name:"Safe",status:"disabled",description:"description"},{id:"notion",name:"Notion",status:"disabled",description:"description"},{id:"mld",name:"m-ld",status:"enabled",description:"description"},{id:"local",name:"local/indexdb",status:"work in progress",description:"description"},{id:"meta",name:"Metaverse",status:"disabled",description:"description"},{id:"filecoin",name:"filecoin",status:"disabled",description:"description"},{id:"robot",name:"Robots",status:"todo",description:"robots"},{id:"ia",name:"IA",status:"todo",description:"ia"},{id:"quantique",name:"Informatique Quantique",status:"todo",description:"quantique"},{id:"semapps",name:"Semapps",status:"todo",description:""},{id:"fediverse",name:"Fediverse",status:"todo",description:""},{id:"blockchain",name:"Blockchain",status:"todo",description:""},{id:"crdt",name:"Crdt",status:"todo",description:""}]}},O={setWorld:function(e,t){e.world=t}},S={},A={namespaced:!0,state:W,actions:S,mutations:O},C=function(){return{history:[]}},_={pushHistory:function(e,t){e.history.push(t)}},q={},E={namespaced:!0,state:C,actions:q,mutations:_};o["default"].use(j.ZP);var P=new j.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{app:A,os:E}}),T=n(6198),Z=(n(8975),{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n),e.prototype.$onCommand=function(){var e=(0,T.Z)(regeneratorRuntime.mark((function e(t){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o="done "+t,n.commit("os/pushHistory",{command:t,result:o,date:Date.now()}),e.abrupt("return",o);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}});"undefined"!==typeof window&&window.Vue&&window.Vue.use(Z);var x=Z,N=n(8262),D=n(3266),H=(n(44),n(7345)),z={en:{message:{hello:"Hello World",chooseWorld:"Choose the world you want to enter"}},fr:{message:{hello:"Salut Tout le monde",chooseWorld:"Choisissez le monde dans lequel vous voulez entrer"}},ja:{message:{hello:"こんにちは、世界",chooseWorld:"入りたい世界を選んでください"}},de:{message:{hello:"Hallo Welt",chooseWorld:"Wählen Sie die Welt, die Sie betreten möchten"}},es:{message:{hello:"Hola Mundo",chooseWorld:"Elige el mundo al que quieres entrar"}},ru:{message:{hello:"Привет мир",chooseWorld:"Выберите мир, в который хотите войти"}}};o["default"].use(x,{store:P}),o["default"].use(N.XG7),o["default"].use(D.A7),o["default"].use(H.Z);var B=z,F=new H.Z({locale:navigator.language.split("-")[0]||"en",fallbackLocale:"en",messages:B});o["default"].config.productionTip=!1,new o["default"]({router:k,store:P,i18n:F,render:function(e){return e(c)}}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"-legacy."+{120:"d9e3d735",237:"7baa65cb",347:"d8e001ba",349:"94b16394",443:"65773967",488:"8a0b49ce",553:"ab74c82f",571:"352dc837",795:"01d72462"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dev:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,u;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var l=d[c];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){s=l;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/dev/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],u=o[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(t&&t(o);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkdev"]=self["webpackChunkdev"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4895)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.3fdfa174.js.map