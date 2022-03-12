<template>
  <div>
  <GraphUi :Graph="Graph" :nodes="nodes" v-on:switch-brain="switchBrain"/>
  <div id="graph" ref="graph">Loading graph...

    {{nodes}}
    <hr>
    {{links}}


  </div>
</div>
</template>

<script>
import ForceGraph3D from '3d-force-graph';
import {CSS2DRenderer, CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import SpriteText from 'three-spritetext';


export default {
  name: "GraphComponent",
  props: ['nodes', 'links'],
  components: {
    'GraphUi': ()=>import('@/components/worlds/graph/GraphUi'),
  },
  data(){
    return{
      Graph: null,
      selectedNodes: new Set(),
      highlightNodes: new Set(),
      highlightLinks: new Set(),
      hoverNode: null
    }
  },
  mounted(){
    let app = this
    let elem = this.$refs.graph
    this.Graph = ForceGraph3D({
      extraRenderers: [new CSS2DRenderer()]
    })(elem)
    // .enableNodeDrag(false)
    // .onNodeClick(this.removeNode)
    .graphData({nodes: this.nodes, links: this.links})
    .nodeAutoColorBy('type')
    .nodeColor(node => app.highlightNodes.has(node) ? node === app.hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)')
    .nodeThreeObjectExtend(true)
    .linkThreeObjectExtend(true)
    .nodeThreeObject(node => {
      const nodeEl = document.createElement('div');
      nodeEl.textContent = node.name //node.id;
      nodeEl.style.color = node.color || "#ffffff";
      nodeEl.className = 'node-label';
      return new CSS2DObject(nodeEl);
    })


    .linkThreeObject(link => {
      // extend link with text sprite
      if(link.label != undefined){
        const sprite = new SpriteText(`${link.label}`);
        sprite.color = 'lightgrey';
        sprite.textHeight = 1.5;
        return sprite;
      }
    })
    .linkDirectionalArrowLength(3.5)
    .linkDirectionalArrowRelPos(1)
    //  .linkCurvature(0.25)
    .linkPositionUpdate((sprite, { start, end }) => {
      if(sprite != undefined){
        const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
          [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
        })))



        // Position sprite
        Object.assign(sprite.position, middlePos);
      }
    })
    .linkDirectionalParticles(link => app.highlightLinks.has(link) ? 4 : 0)
    .linkDirectionalParticleWidth(4)
    .onNodeHover(node => {
      // no state change

      if ((!node && !app.highlightNodes.size) || (node && app.hoverNode === node)) return;

      app.highlightNodes.clear();
      app.highlightLinks.clear();
      if (node) {
        //   if (node.neighbors != undefined){
        console.log(node)
        app.highlightNodes.add(node);
        //   node.neighbors.forEach(neighbor => app.highlightNodes.add(neighbor));
        // node.links.forEach(link => app.highlightLinks.add(link));
        //}
      }

      app.hoverNode = node || null;

      app.updateHighlight()
    })
    .onLinkHover(link => {
      app.highlightNodes.clear();
      app.highlightLinks.clear();

      if (link) {
        app.highlightLinks.add(link);
        app.highlightNodes.add(link.source);
        app.highlightNodes.add(link.target);
      }

      app.updateHighlight();
    })
    .onNodeDragEnd(node => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        })  .onNodeClick(node => {
      // Aim at node from outside it
      //  console.log(node)
      this.selectedNodes.clear()
      this.selectedNodes.has(node) ? this.selectedNodes.delete(node) : this.selectedNodes.add(node);
      console.log(this.selectedNodes)
      if(node.url != undefined && node.url.startsWith('http')){
        app.$store.commit ('app/mustExplore', node.url)
      }

      const distance = 160;
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

      this.Graph.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000  // ms transition duration
      );
      app.$store.commit ('app/setCurrentNode', node)
    })
    .onBackgroundClick(event => {
      console.log("onBackgroundClick", event)
    //  app.$store.commit('app/setCurrentNode', null)
    //  app.$bvModal.show("modal-node")
    })
    .onBackgroundRightClick(event => {
      alert("onBackgroundRightClick", event)
    })
  },
  methods:{
    update(){
      this.Graph.graphData({
        nodes: this.nodes,
        links: this.links //[...links/*, { source: "https://spoggy-test13.solidcommunity.net/", target: f.url }*/]
      })
    },
    updateHighlight() {
    // trigger update of highlighted objects in scene
    this.Graph
    .nodeColor(this.Graph.nodeColor())
    .linkWidth(this.Graph.linkWidth())
    .linkDirectionalParticles(this.Graph.linkDirectionalParticles());
  },
  async switchBrain(b){
  console.log("switch", b)
  await this.$store.dispatch('nodes/saveNode', b)
  console.log("must save ", this.Graph.graphData())
  let {nodes, links} = this.Graph.graphData()
  for await (const n of nodes){
    console.log(n)
    delete n.__threeObj
    console.log(n)
    await this.$store.dispatch('nodes/saveNode', n)
  }
  console.log(links)
  // for await (const l of links){
  //   console.log(l)
  //   await this.$store.dispatch('nodes/saveNode', n)
  // }

},
  },
  watch:{
    nodes(){
      this.update()
    },
    links(){
      this.update()
    },
    search(){
    this.highlightNodes.clear()
    if (this.search.length > 0){
      // console.log(this.search)
      this.nodes.forEach(n => {
        if(n.name.includes(this.search)){
          this.highlightNodes.add(n);
          // console.log(this.highlightNodes)
        }
      });


      // app.highlightNodes.add(link.source);

    }
    this.updateHighlight()
  }
},
computed:{
  search:{
    get () { return this.$store.state.app.search },
    set (/*value*/) { /*this.updateTodo(value)*/ }
  },
}
}
</script>

<style>
.node-label {
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.5);
  user-select: none;
}
</style>
