"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[481],{6481:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v(" Graph World ! "),null!=e.brain?s("div",[e._v(" Working on "),s("b",[e._v(e._s(e.brain.name))]),e._v(" in "),s("b",[e._v(e._s(e.brain.world.id))]),e._v(" "+e._s(e.nodes.length)+" nodes / "+e._s(e.links.length)+" links ")]):e._e(),s("GraphComponent",{attrs:{nodes:e.nodes,links:e.links}})],1)},o=[],a={name:"GraphWorld",components:{GraphComponent:()=>Promise.all([s.e(667),s.e(650)]).then(s.bind(s,6650))},data(){return{}},methods:{addTriplet(e){let t,s,n;t=this.nodeFromLabel(e.value.subject),this.saveNode(t),s=this.nodeFromLabel(e.value.object),this.saveNode(s),console.log(t.id,s.id),n=this.edgeFromLabel({source:t.id,target:s.id,label:e.value.predicate}),console.log(n),this.saveEdge(n),e.triple={subject:t,edge:n,object:s}},saveNode(e){var t=this.nodes.findIndex((t=>t.id==e.id));-1===t?this.nodes.push(e):Object.assign(this.nodes[t],e)},saveEdge(e){console.log(e),console.log(this.links),this.links.push(e),console.log(this.nodes,this.links)},nodeFromLabel(e){let t="#"+e.trim().split(" ").join("_");return{id:t,name:e,age:0,type:"neurone"}},edgeFromLabel(e){return console.log(e),{source:e.source,target:e.target,label:e.label}}},watch:{lastCommand(){switch(console.log(this.lastCommand),this.lastCommand.type){case"triplet":this.addTriplet(this.lastCommand);break;case"url":console.log(this.lastCommand.url);break;default:console.log("TODO",this.lastCommand)}}},computed:{nodes:{get(){return null==this.$store.state.app.brain?[]:this.$store.state.app.brain.neurones},set(){}},links:{get(){return null==this.$store.state.app.brain?[]:this.$store.state.app.brain.synapses},set(){}},brain:{get(){return this.$store.state.app.brain},set(){}},lastCommand:{get(){return this.$store.state.os.lastCommand},set(){}}}},l=a,r=s(1001),i=(0,r.Z)(l,n,o,!1,null,null,null),d=i.exports}}]);
//# sourceMappingURL=481.9ca96257.js.map