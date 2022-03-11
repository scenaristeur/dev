<template>
  <div>
    Graph World !
    <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
     <b-button-group class="mx-1">
     </b-button-group>
     <b-dropdown class="mx-1" right text="New">
       <b-dropdown-item>graph</b-dropdown-item>
       <b-dropdown-item>node</b-dropdown-item>
       <b-dropdown-item>link</b-dropdown-item>
     </b-dropdown>
       <!-- <b-button>New</b-button> -->
       <b-button>Edit</b-button>
       <b-button>Undo</b-button>

     <b-button-group class="mx-1">
       <b-button>Save</b-button>
       <b-button>Cancel</b-button>
     </b-button-group>
   </b-button-toolbar>
    <div id="graph" ref="graph">Loading graph...</div>
  </div>
</template>

<script>

import ForceGraph3D from '3d-force-graph';
import SpriteText from 'three-spritetext';
// node text https://github.com/vasturiano/3d-force-graph/blob/master/example/html-nodes/index.html
// import '//unpkg.com/three/examples/js/renderers/CSS2DRenderer.js'
import {CSS2DRenderer, CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export default {
  name: "GraphWorld",
  data(){
    return{
      Graph: null,
      nodes: [],
      links: []
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init(){
      let app = this
      let elem = this.$refs.graph
      let width = window.innerWidth/2

      console.log(width)

      this.Graph = ForceGraph3D({
        extraRenderers: [new CSS2DRenderer()],
            })(elem)
      // .backgroundColor("#999999")
      // .width(width)
      // .height(400)
      // .enableNodeDrag(false)
      // .onNodeClick(this.removeNode)
      .graphData({nodes: this.nodes, links: this.links})
      // .dagMode('td')
      // .dagLevelDistance(100)
      .nodeLabel('name')
      .nodeId('url')
      .nodeColor(node => app.highlightNodes.has(node) ? node === app.hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(0,255,255,0.6)')
      .linkWidth(link => app.highlightLinks.has(link) ? 4 : 1)
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
      .nodeAutoColorBy('type')
      // .nodeColor(node => this.selectedNodes.has(node) ? 'rgb(255,0,0,1)' : node.color)
      // .nodeThreeObject(({ url }) => {
      //
      //   // if(url == undefined){
      //   //   url = "root"
      //   // }
      //   if (url != undefined && (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg'))){
      //     const imgTexture = new THREE.TextureLoader().load(`${url}`);
      //     const material = new THREE.SpriteMaterial({ map: imgTexture });
      //     const sprite = new THREE.Sprite(material);
      //     sprite.scale.set(12, 12);
      //     return sprite;
      //   }
      //
      // })
      .nodeThreeObject(node => {
        const nodeEl = document.createElement('div');
        nodeEl.textContent = node.name //node.id;
        nodeEl.style.color = node.color || "#ffffff";
        nodeEl.className = 'node-label';
        return new CSS2DObject(nodeEl);
      })
      .nodeThreeObjectExtend(true)

      .linkThreeObjectExtend(true)
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
      .onNodeClick(node => {
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
      console.log(this.Graph)
    }

  }
}
</script>

<style>

</style>
