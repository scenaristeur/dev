if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const u=e=>l(e,i),o={module:{uri:i},exports:d,require:u};s[i]=Promise.all(n.map((e=>o[e]||u(e)))).then((e=>(r(...e),d)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"dev"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/dev/css/app.bd071c00.css",revision:null},{url:"/dev/css/chunk-vendors.339c5200.css",revision:null},{url:"/dev/index.html",revision:"16fae406ba9ab55a9868db57eb950f38"},{url:"/dev/js/120.0554188e.js",revision:null},{url:"/dev/js/237.533b059b.js",revision:null},{url:"/dev/js/347.494ec83e.js",revision:null},{url:"/dev/js/349.94b16394.js",revision:null},{url:"/dev/js/457.d97d9a3f.js",revision:null},{url:"/dev/js/488.dae0e785.js",revision:null},{url:"/dev/js/553.ab74c82f.js",revision:null},{url:"/dev/js/571.352dc837.js",revision:null},{url:"/dev/js/about.65773967.js",revision:null},{url:"/dev/js/app.6e3af1df.js",revision:null},{url:"/dev/js/chunk-vendors.da2103a9.js",revision:null},{url:"/dev/manifest.json",revision:"2d92139db899dbb0969d5d66af823675"},{url:"/dev/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
