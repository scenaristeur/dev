"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[556],{4556:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._v(" Gun World "),null!=n.brain?e("div",[n._v(" Working on "),e("b",[n._v(n._s(n.brain.name))]),n._v(" in "),e("b",[n._v(n._s(n.brain.world.id))]),n._l(Object.entries(n.brainContent),(function(t,r){return e("div",{key:r},[n._v(" -- "+n._s(t[0])+" : "+n._s(t[1])+" "),e("b-button",{on:{click:function(e){return n.follow(t)}}},[n._v("Follow")])],1)})),e("hr"),e("hr"),n._v(" "+n._s(n.brain.data)+" "),e("hr"),n._v(" "+n._s(n.brain)+" ")],2):e("div",[n._v(" Try to type the command `brain test`, or `brain my` ")]),e("a",{attrs:{href:"https://gunjs.herokuapp.com/basic/paste.html",target:"_blank"}},[n._v("Test page")])])},i=[],o={name:"GunWorld",data(){return{brainContent:{}}},methods:{follow(n){console.log(n),this.$gun.get(n[1]).once((function(n){console.log(n)}))}},watch:{brain(){this.brainContent={},console.log("subscribing to ",this.brain.name,this.brain);let n=this.$gun.get(this.brain.name),t=this.brain.name,e=this;n.on((function(n){console.log("Subscribed to ",t,n),e.brainContent=n}))}},computed:{brain:{get(){return this.$store.state.app.brain},set(){}}}},a=o,s=e(1001),l=(0,s.Z)(a,r,i,!1,null,null,null),u=l.exports}}]);
//# sourceMappingURL=556.6ac74440.js.map