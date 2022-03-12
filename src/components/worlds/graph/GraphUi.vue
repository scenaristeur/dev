<template>
  <div>
    <div ref="guiDiv" style="position:absolute; top:500; left:200;z-index:2"></div>
    <div ref="guiProps" style="position:absolute;top:200;left:100;z-index:2"></div>

    <b-modal id="modal-field"
    title="New Field"
    @ok="addField"
    >
    <!--  -->
    <b-form-input v-if="field != null" v-model="field.name" placeholder="new property / link"></b-form-input>
  </b-modal>

  <b-modal id="modal-brain" title="Brain" size="lg">
    Current World : {{ world}}
    <b-form-input v-model="brainName" placeholder="Enter the brain name"></b-form-input>
    <b-form-radio-group label="New Brain privacy" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="privacy" :aria-describedby="ariaDescribedby" name="privacy" value="public">Public</b-form-radio>
      <b-form-radio v-model="privacy" :aria-describedby="ariaDescribedby" name="privacy" value="user">User</b-form-radio>
    </b-form-radio-group>
    <b-button variant="primary" @click="newBrain">New Brain</b-button>
    <b-list-group style="height:200px;overflow-y: scroll;">
      <b-list-group-item
      v-for="brain of brains"
      :key="brain.id"
      button
      @click="switchBrain(brain)">
      {{brain.name}}
    </b-list-group-item>


    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1" v-for="[world, brain] of Object.entries(brains)" :key="world">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">{{world}}</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            User :
            <ul>
              <li v-for="b of brain.user" :key="b['_']['#']">
                <b-button size="sm">  {{b.name}}</b-button>
              </li>
            </ul>
            Public :
            <div v-for="b of brain.public" :key="b['_']['#']">
              <b-button variant="light" size="sm" @click="switchBrain(b)">  {{b.name}}</b-button> <small>creation: {{b.created}}, author: public, number of nodes</small>
            </div>
            <small>todo : make a sort table</small>


            <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
            <b-card-text> text </b-card-text> -->

            <!-- {{brain}} -->
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text> text </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text> text </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    brains {{ brains}}






  </b-list-group>



</b-modal>


<b-modal id="modal-properties"
title="Properties"
>
<!--  -->
<!-- <b-form-input v-if="field != null" v-model="field.name" placeholder="new property / link"></b-form-input> -->
</b-modal>

<b-modal id="modal-links"
title="Links"
>
<!--  -->
<!-- <b-form-input v-if="field != null" v-model="field.name" placeholder="new property / link"></b-form-input> -->
</b-modal>

</div>
</template>

<script>
import { GUI } from 'dat.gui'
import * as THREE from "three";
import { Neurone ,  Brain/*, Graph*/ } from '@/neurone-factory'
export default {
  name: "GraphUi",
  props:['Graph', 'nodes'],
  data(){
    return{
      brain: null,
      //  brains: [],
      brainName: "",
      field: null,
      clearing: false,
      fieldType: "text",
      show: false,
      currentProp: {},
      newValue: null,
      link: {},
      permissions: null,
      privacy: "public"
    }
  },
  mounted(){

    //https://sbcode.net/threejs/dat-gui/
    //http://learningthreejs.com/blog/2011/08/14/dat-gui-simple-ui-for-demos/
    // dat.gui https://github.com/dataarts/dat.gui/blob/master/API.md
    // http://stemkoski.github.io/Three.js/#gui

    let guiDiv = this.$refs.guiDiv
    //  console.log(guiDiv)
    this.gui = new GUI(
      {autoPlace: false}
    )
    guiDiv.appendChild(this.gui.domElement);
    // const cameraFolder = gui.addFolder('Camera')
    // cameraFolder.add(camera.position, 'z', 0, 10)
    // cameraFolder.open()
    this.buildGuiTools()
    //this.buildGuiNode()
    //this.buildGuiTest()
  },
  methods:{
    updateNodeFolder(){
      if (this.nodeFolder != null){
        this.gui.removeFolder(this.nodeFolder)
      }

      var lignes = {
        // message: 'dat.gui',
        // speed: 0.8,
        // displayOutline: false,
        //color: "#ff0000", // color (change "#" to "0x")
        openProperties: this.openProperties,
        openLinks: this.openLinks,
        // resetCamera: this.resetCamera
      };

      this.nodeFolder = this.gui.addFolder('Node')
      // console.log(this.nodeFolder)
      console.log(this.currentNode)
      this.currentNode.age == undefined ? this.currentNode.age = 0 : ""
      this.currentNode.privacy == undefined ? this.currentNode.privacy = "" : ""
      //this.currentNode.age == undefined ?
      // console.log(this.nodeFolder.__controllers)
      // this.nodeFolder.__controllers.forEach((item) => {
      //   console.log('remove', item)
      //   this.nodeFolder.remove(item)
      // });
      //
      // console.log(this.nodeFolder.__controllers)
      // this.nodeFolder.domElement = ""
      //  Object.assign(this.nodeFolder.__controllers, [])
      //  this.nodeFolder.updateDisplay()
      // this.nodeFolder.remove('name')
      // this.nodeFolder.remove('color')
      // let nameController = new Controller()
      // this.nodeFolder.add(this.currentNode, 'name')
      this.nodeFolder.add(this.currentNode, 'name')
      this.nodeFolder.add(this.currentNode, 'age')
      // this.nodeFolder.add(this.currentNode, 'type')
      // this.nodeFolder.add(this.currentNode, 'url')
      this.nodeFolder.add(this.currentNode, 'privacy')
      this.currentNode.created != undefined ? this.nodeFolder.add(this.currentNode, 'created') : ""
      this.nodeFolder.add( lignes, 'openProperties' ).name("Properties");
      this.nodeFolder.add( lignes, 'openLinks' ).name("Links");
      // const propsFolder = this.nodeFolder.addFolder('Properties')
      // const linksFolder = this.nodeFolder.addFolder('Links')
      //
      //
      // var lignes = {
      //   newProperty: this.newProperty,
      //   newLink: this.newLink,
      //   message: 'props menu',
      //   messageLink: 'Link menu',
      //   speed: 0.8,
      // }
      //
      // propsFolder.add( lignes, 'newProperty' ).name("New property");
      // linksFolder.add( lignes, 'newLink' ).name("New link");
      //
      //
      // propsFolder.add(lignes, 'message')
      // linksFolder.add(lignes, 'messageLink')
      // const testsub = propsFolder.addFolder("sub")
      // testsub.add(lignes, "speed", -5, 5)
      //
      // this.currentNode["properties"].forEach((item) => {
      //   console.log(item)
      //   // templigne = {
      //   //
      //   // }
      //
      //   var lignes_value = {
      //     addValue: this.addValue,
      //   }
      //
      //   let folder = propsFolder.addFolder(item.name)
      //   folder.add( lignes_value, 'addValue' ).name("New value");
      //
      //   console.log(folder)
      //   item.values.forEach((v) => {
      //     console.log(v)
      //     //folder.add(item, 'name')//.name(item.name)
      //
      //   });
      //
      //
      //
      // });




      // this.nodeFolder.add(this.currentNode, 'url')
      //  this.nodeFolder.add(this.currentNode, 'created')
      //  this.nodeFolder.add(this.currentNode, 'color')
      let app = this
      if(this.currentNode.color != undefined){
        var nodeColor = this.nodeFolder.addColor( this.currentNode, 'color' ).name('Color').listen();
        nodeColor.onChange(function(value) // onFinishChange
        {
          console.log("must update color value", value)
          app.currentNode.color = value.replace("#", "0x") //);
        });
      }

      this.nodeFolder.add(this.currentNode, 'privacy')
      this.nodeFolder.open()
    },
    addValue(){
      console.log("new value")
    },
    buildGuiNode(){
      var lignes = {
        message: 'props menu',
        messageLink: 'Link menu',
        speed: 0.8,
      }
      this.nodeFolder = this.gui.addFolder('Node')
      const propsFolder = this.nodeFolder.addFolder('Props')
      const linksFolder = this.nodeFolder.addFolder('Links')
      propsFolder.add(lignes, 'message')
      linksFolder.add(lignes, 'messageLink')
      const testsub = propsFolder.addFolder("sub")
      testsub.add(lignes, "speed", -5, 5)
    },
    buildGuiTools(){
      var lignes = {
        // message: 'dat.gui',
        // speed: 0.8,
        // displayOutline: false,
        //color: "#ff0000", // color (change "#" to "0x")
        openBrains: this.openBrains,
        newNeurone: this.newNeurone,
        resetCamera: this.resetCamera
      };

      const toolFolder = this.gui.addFolder('Tools')
      toolFolder.add( lignes, 'openBrains' ).name("Brains");
      toolFolder.add( lignes, 'newNeurone' ).name("New neurone");
      toolFolder.add( lignes, 'resetCamera' ).name("Reset camera");
      toolFolder.open()
      this.gui.open()
    },
    buildGuiTest(){
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
      })
      const cube = new THREE.Mesh(geometry, material)
      this.Graph.scene().add(cube)

      var text = {
        message: 'dat.gui',
        speed: 0.8,
        displayOutline: false,
        color: "#ff0000", // color (change "#" to "0x")
        //  newNeurone: this.newNeurone
      };


      const cubeFolder = this.gui.addFolder('Test')
      cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2)
      cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2)
      cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2)
      cubeFolder.add(text, 'message');
      cubeFolder.add(text, 'speed', -5, 5);
      cubeFolder.add(text, 'displayOutline');
      // cubeFolder.add( text, 'newNeurone' ).name("New neurone");
      //cubeFolder.open()

      var cubeColor = cubeFolder.addColor( text, 'color' ).name('Color').listen();
      cubeColor.onChange(function(value) // onFinishChange
      {   cube.material.color.setHex( value.replace("#", "0x") );   });

    },
    openProperties(){
      this.$bvModal.show("modal-properties")
    },
    openLinks(){
      this.$bvModal.show("modal-links")

    },
    newProperty(){
      console.log("newProperty")
      this.field = {name: "", category: "ve:properties"}
      this.$bvModal.show("modal-field")
    },
    addField(){
      console.log(this.field)
      if(this.clearing == false){
        let p = {name: this.field.name, values: []}
        this.currentNode[this.field.category] == undefined ? this.currentNode[this.field.category] = [] : ""
        var index = this.currentNode[this.field.category].findIndex(x => x.name==p.name);
        index === -1 ? this.currentNode[this.field.category].push(p) : alert(p.name+" already exist")
      }
      console.log(this.currentNode)
      this.updateNodeFolder()
    },
    newLink(){
      console.log("newLink")
      this.field = {name: "", category: "links"}
      this.$bvModal.show("modal-field")
    },
    openBrains(){
      //alert("newBrain")

      this.$bvModal.show("modal-brain")
    },
    newBrain(){
      this.brain = new Brain({name: this.brainName, world: this.world, privacy: this.privacy})

      this.$createBrain( this.brain)
      //this.brains.push(this.brain)
      this.brainName = ""

    },
    switchBrain(b){
      console.log(b)
      this.$gunGet(b)
      //  console.error("must save current brain", this.Graph.graphData())
      this.$emit('switch-brain', b)
    },
    newNeurone(){
      console.log("newNeurone")
      let node = new Neurone(
        {
          //  blip: "blop",
          //  color: this.randomColor(),
          name: "name for graph_"+this.nodes.length,
          age: 0,
          type: "neurone"
        }
      )
      console.log("neurone ", node)
      //  let node = neurone._data
      // node['name'] == undefined ? node['name'] = "test" : ""
      // node['color'] == undefined ? node['color'] = this.randomColor() : ""
      //  let node = { name: "test", type: undefined, color: this.randomColor() /*"#ffffff"*/}

      // eslint-disable-next-line
      this.nodes.push(node)

      // this.Graph.graphData({
      //   nodes: this.nodes,
      //   //links: links
      //   links: this.links //[...links/*, { source: "https://spoggy-test13.solidcommunity.net/", target: f.url }*/]
      // })
      console.log("should make a node autofocus")
      // const distance = 40;
      // const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
      //
      // this.Graph.cameraPosition(
      //   { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      //   node, // lookAt ({ x, y, z })
      //   3000  // ms transition duration
      // );
    },
    resetCamera(){
      this.Graph.cameraPosition(
        { x: 0, y: 0, z: 40 },
        3000  // ms transition duration
      );
    },
    randomColor() {
      let color = '#'
      for (let i = 0; i < 6; i++){
        const random = Math.random()
        const bit = (random * 16) | 0
        color += (bit).toString(16)
      }
      return color
    }
  },
  watch:{
    currentNode(){
      console.log (this.currentNode)
      this.updateNodeFolder(this.currentNode)
    },
    world(){
      if (this.world == "gun"){
        this.$bvModal.show("modal-brain")
      }

    },
    brains(){
      console.log("must update", this.brains)
    }
  },
  computed:{
    currentNode:{
      get () { return this.$store.state.app.currentNode },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    brains: {
      get () { return this.$store.state.app.brains },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
    world: {
      get () { return this.$store.state.app.world },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    }
  }

}
</script>

<style>

</style>
