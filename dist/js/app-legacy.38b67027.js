(function(){var e={1661:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1661,e.exports=t},4451:function(e,t,n){"use strict";n(6992),n(8674),n(9601),n(7727),n(4916),n(3123);var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view"),n("nav",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1)},i=[],a=(n(1539),n(8783),n(3948),{name:"DevApp",components:{NavBar:function(){return n.e(320).then(n.bind(n,320))}}}),s=a,u=n(1001),l=(0,u.Z)(s,o,i,!1,null,null,null),c=l.exports,d=n(563);(0,d.z)("".concat("/dev/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("This app has been updated, please, close and reopen.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n(2809),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("OperatingSystem"),null==e.world?n("WorldChoose"):n("div",[n("b-button",{on:{click:function(t){e.world=null}}},[e._v("Leave "+e._s(e.world.name)+" world")]),n("WorldView")],1)],1)},h=[],m={name:"HomeView",components:{WorldChoose:function(){return n.e(484).then(n.bind(n,3484))},WorldView:function(){return n.e(488).then(n.bind(n,5488))},OperatingSystem:function(){return n.e(860).then(n.bind(n,860))}},computed:{world:{get:function(){return this.$store.state.app.world},set:function(){this.$store.commit("app/setWorld",null)}}}},v=m,b=(0,u.Z)(v,f,h,!1,null,null,null),g=b.exports;r["default"].use(p.Z);var w=[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,7267))}}],y=new p.Z({mode:"history",base:"/dev/",routes:w}),k=y,j=n(4665),x=function(){return{world:null,brain:null,brains:[],worlds:[{id:"gun",name:"GunDB",status:"enabled",description:"A decentralized database",img:"https://camo.githubusercontent.com/64213f411349db936a0fa36ef41741b170d4c8d34d1cc0d1c887f7d880838707/68747470733a2f2f636c6475702e636f6d2f5445793979476834356c2e737667",links:[{name:"Doc",url:"https://gun.eco/"}]},{id:"graph",name:"Graph",status:"enabled",description:"description",img:"http://gist.github.com/vasturiano/02affe306ce445e423f992faeea13521/raw/preview.png",links:[{name:"3D force-directed graph",url:"https://vasturiano.github.io/3d-force-graph/"}]},{id:"solid",name:"Solid",status:"enabled",description:"Your data, your choice. Advancing Web standards to empower people.",img:"https://solidproject.org/assets/img/solid-emblem.svg",links:[{name:"Solid Project",url:"https://solidproject.org/"},{name:"Forum",url:"https://forum.solidproject.org/"},{name:"Inrupt",url:"https://inrupt.com/"}]},{id:"physic",name:"Physic",status:"enabled",description:"A physic 3D world based on enble3D",img:"https://enable3d.io/img/enable3d-logo.png",links:[{name:"enable3D",url:"https://enable3d.io/"}]},{id:"html",name:"Html",status:"todo",description:"a basic html world"},{id:"js",name:"JavaScript",status:"todo",description:"some interaction js world"},{id:"vuejs",name:"VueJs",status:"todo",description:"building a webapp is really simple",links:[{name:"nodejs",url:"https://www.youtube.com/watch?v=KvzmOlxaAWo&t=9s"},{name:"vue component",url:"https://www.youtube.com/watch?v=_2cZ3u7jznc&t=93s"}]},{id:"ipfs",name:"Ipfs",status:"enabled",description:"description"},{id:"safe",name:"Safe",status:"disabled",description:"description"},{id:"notion",name:"Notion",status:"disabled",description:"description"},{id:"mld",name:"m-ld",status:"enabled",description:"description"},{id:"local",name:"local/indexdb",status:"work in progress",description:"description"},{id:"meta",name:"Metaverse",status:"disabled",description:"description"},{id:"filecoin",name:"filecoin",status:"disabled",description:"description"},{id:"robot",name:"Robots",status:"todo",description:"robots"},{id:"ia",name:"IA",status:"todo",description:"ia"},{id:"quantique",name:"Informatique Quantique",status:"todo",description:"quantique"},{id:"semapps",name:"Semapps",status:"todo",description:""},{id:"fediverse",name:"Fediverse",status:"todo",description:""},{id:"blockchain",name:"Blockchain",status:"todo",description:""},{id:"crdt",name:"Crdt",status:"todo",description:""}]}},O={setWorld:function(e,t){e.world=t},setBrain:function(e,t){e.brain=t}},Z={},W={namespaced:!0,state:x,actions:Z,mutations:O},C=function(){return{history:[],lastCommand:null}},A={pushHistory:function(e,t){e.lastCommand=t,e.history.push(t)}},S={},T={namespaced:!0,state:C,actions:S,mutations:A};r["default"].use(j.ZP);var _=new j.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{app:W,os:T}}),E=n(137),N=n.n(E),q=n(6198),D=(n(8975),n(7197)),P={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;e.prototype.$onCommand=function(){var e=(0,q.Z)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new D.mY({command:t,store:n}),console.log("command",r),e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$addToBrain=function(){var e=(0,q.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("command for add ing to brain",t),e.t0=n.state.app.brain.world.id,e.next="gun"===e.t0?4:9;break;case 4:return console.log("add to gun"),e.next=7,this.$gunAddTriple(t);case 7:return t=e.sent,e.abrupt("break",9);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(P);var $=P,B=(n(8309),{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n),e.prototype.$gunAddTriple=function(){var t=(0,q.Z)(regeneratorRuntime.mark((function t(r){var o,i,a,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=r.value,i=e.prototype.$gun.get(n.state.app.brain.name),console.log(i,o),a=i.get(r.value.subject),a.put({name:r.value.subject}),s=i.get(r.value.object),u=s.put({name:r.value.object}),a.get(r.value.predicate).set(u);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}});"undefined"!==typeof window&&window.Vue&&window.Vue.use(B);var F=B,R=n(8262),V=n(3266),z=(n(44),n(7345)),H={en:{message:{hello:"Hello World",chooseWorld:"Choose the world you want to enter"}},fr:{message:{hello:"Salut Tout le monde",chooseWorld:"Choisissez le monde dans lequel vous voulez entrer"}},ja:{message:{hello:"こんにちは、世界",chooseWorld:"入りたい世界を選んでください"}},de:{message:{hello:"Hallo Welt",chooseWorld:"Wählen Sie die Welt, die Sie betreten möchten"}},es:{message:{hello:"Hola Mundo",chooseWorld:"Elige el mundo al que quieres entrar"}},ru:{message:{hello:"Привет мир",chooseWorld:"Выберите мир, в который хотите войти"}}};r["default"].use(N(),{peers:["https://gun-manhattan.herokuapp.com/gun","https://gunjs.herokuapp.com/gun"]}),r["default"].use($,{store:_}),r["default"].use(F,{store:_}),r["default"].use(R.XG7),r["default"].use(V.A7),r["default"].use(z.Z);var L=H,M=new z.Z({locale:navigator.language.split("-")[0]||"en",fallbackLocale:"en",messages:L});r["default"].config.productionTip=!1,new r["default"]({router:k,store:_,i18n:M,render:function(e){return e(c)}}).$mount("#app")},7197:function(e,t,n){"use strict";n.d(t,{mY:function(){return h},GI:function(){return d}});var r=n(2751),o=n(6133),i=n(9418),a=n(9161),s=n(905),u={"@context":{as:"https://www.w3.org/ns/activitystreams#",ve:"https://scenaristeur.github.io/verse#",id:"@id",type:"@type",name:"ve:name",age:"ve:age",url:"ve:url",privacy:"ve:privacy",properties:"ve:properties",links:"ve:links",synapses:"ve:synapses",created:"ve:created",updated:"ve:updated",synchronized:"ve:synchronized"},id:null,name:"",age:0,url:"",privacy:"private",type:null,properties:[],links:[],synapses:[],created:null,updated:null,synchronized:null},l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,o.Z)(this,e),Object.assign(this,u),this.id=(0,s.Z)(),this["type"]="base",this["created"]=Date.now(),Object.assign(this,t)}return(0,r.Z)(e,[{key:"debug",value:function(){console.log(this)}}]),e}(),c=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.Z)(this,n),e=t.call(this,r),void 0==r["type"]&&(e["type"]="brain"),e}return(0,r.Z)(n)}(l),d=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.Z)(this,n),e=t.call(this,r),void 0==r["type"]&&(e["type"]="neurone"),e}return(0,r.Z)(n)}(l),p=n(6198),f=(n(8975),n(7042),n(4916),n(3123),n(8309),n(9826),n(1539),n(4747),n(3210),n(6755),n(7852),n(8783),n(3948),n(285),n(1637),n(8935)),h=function(e){(0,i.Z)(n,e);var t=(0,a.Z)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.Z)(this,n),e=t.call(this,r),void 0==r["type"]&&(e["type"]="command"),e.init(),e}return(0,r.Z)(n,[{key:"init",value:function(){var e=(0,p.Z)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.command,!this.isValidUrl(t)){e.next=7;break}this.type="url",this.value=t,this.isFile=this.isFile(t),e.next=28;break;case 7:if(this.date=Date.now(),n=t.slice(-1),","!=n&&";"!=n&&"."!=n&&"-"!=n){e.next=13;break}this.traiteTriplet(t),e.next=28;break;case 13:this.lower=t.toLowerCase(),this.array=t.split(" "),this.arrayLower=this.lower.split(" "),this.result=void 0,e.t0=this.arrayLower[0],e.next="leave"===e.t0?20:"brain"===e.t0?23:26;break;case 20:return this.result="leaving ",this.store.commit("app/setWorld",null),e.abrupt("break",28);case 23:return this.world=this.store.state.app.world,null==this.world?alert("Please enter a world to create a brain"):(this.brain=new c({world:this.world,name:this.array[1]}),(void 0==this.brain.name||0==this.brain.name.length)&&(this.brain.name=this.brain.id),this.store.commit("app/setBrain",this.brain)),e.abrupt("break",28);case 26:this.existWorld=this.store.state.app.worlds.find((function(e){return e.id==t})),void 0!=this.existWorld&&(this.result="opening "+this.existWorld.name,this.store.commit("app/setWorld",this.existWorld));case 28:if(this.store.commit("os/pushHistory",this),console.log(this),"triplet"!=this.type){e.next=33;break}return e.next=33,f["default"].prototype.$addToBrain(this);case 33:return e.abrupt("return",this);case 34:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"traiteTriplet",value:function(e){var t={},n="",r=e.slice(-1),o=e.slice(0,-1).split(" "),i=!0,a="",s=[];switch(o.forEach((function(e){e=e.trim(),e.startsWith('"')?(a="debut",s.push(e.substr(1))):e.endsWith('"')?(a="fin",s.push(s.pop()+" "+e.slice(0,-1))):"debut"==a?s.push(s.pop()+" "+e):s.push(e)})),s.length>0&&(o=s),r){case".":n="";break;case";":n=o[0].indexOf(" ")>-1?'"'+o[0]+'" ':o[0]+" ";break;case",":n=o[0].indexOf(" ")>-1?'"'+o[0]+'" ':o[0]+" ",o[1].indexOf(" ")>-1?n+='"'+o[1]+'" ':n+=o[1]+" ";break;case"-":n=o[2].indexOf(" ")>-1?'"'+o[2]+'" ':o[2]+" ";break;default:console.log("Oh oh Houston this message should never be shown !  "+e)}if(i){t.type="triplet";var u={};u.subject=o[0],u.predicate=o[1],u.object=o[2],t.value=u,t.inputNew=n}else t.type="message",t.value=e,t.inputNew=n;Object.assign(this,t)}},{key:"isValidUrl",value:function(e){try{return new URL(e),!0}catch(t){return!1}}},{key:"isFile",value:function(e){return e.split("/").pop().indexOf(".")>-1}}]),n}(l)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"-legacy."+{75:"194fff46",161:"930516f3",320:"6ba3d703",443:"65773967",484:"b35542b5",488:"acb50c44",553:"ab74c82f",571:"352dc837",681:"47e33f49",860:"0eb292f6",924:"9b7ff153"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dev:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/dev/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var c=u(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkdev"]=self["webpackChunkdev"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4451)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.38b67027.js.map