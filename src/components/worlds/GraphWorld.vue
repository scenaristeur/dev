<template>
  <div>
    Graph World !
    <div v-if="brain != null">
      Working on <b>{{brain.name}}</b> in <b>{{brain.world.id}}</b>
      {{nodes.length}} nodes / {{links.length}} links
    </div>
    <GraphComponent :nodes="nodes" :links="links" />
    <!-- <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
    <b-button-group class="mx-1">
  </b-button-group>
  <b-dropdown class="mx-1" right text="New">
  <b-dropdown-item>graph</b-dropdown-item>
  <b-dropdown-item>node</b-dropdown-item>
  <b-dropdown-item>link</b-dropdown-item>
</b-dropdown>

<b-button>Edit</b-button>
<b-button>Undo</b-button>

<b-button-group class="mx-1">
<b-button>Save</b-button>
<b-button>Cancel</b-button>
</b-button-group>
</b-button-toolbar> -->

</div>
</template>

<script>

export default {
  name: "GraphWorld",
  components: {
    'GraphComponent': ()=>import('@/components/worlds/graph/GraphComponent'),
  },
  data(){
    return{
      // nodes: [],
      // links: [],
    }
  },
  methods:{
    addTriplet(data){
            let nodeSubject, nodeObject, edge
      nodeSubject = this.nodeFromLabel(data.value.subject)
      this.saveNode(nodeSubject)
      nodeObject = this.nodeFromLabel(data.value.object)
      this.saveNode(nodeObject)
      console.log(nodeSubject.id, nodeObject.id)
      edge = this.edgeFromLabel({source: nodeSubject.id, target: nodeObject.id, label: data.value.predicate})
      console.log(edge)
      this.saveEdge(edge)
      data.triple = {subject: nodeSubject, edge: edge, object: nodeObject}
      //this.$saveToGun(data)
    },
    saveNode(n){
      var index = this.nodes.findIndex(x => x.id==n.id);
      index === -1 ? this.nodes.push(n) : Object.assign(this.nodes[index], n)
      //this.sendUpdate(n)
    },
    saveEdge(e){
      console.log(e)
      console.log(this.links)
      this.links.push(e)
      //  var index = this.links.findIndex(x => x.id==e.id);
      //index === -1 ? this.links.push(e) : Object.assign(this.links[index], e)
      console.log(this.nodes, this.links)
    //  this.sendUpdate(e)
    },
    // nodeFromLabelVis(label) {
    //   return {id: "#"+label.trim().split(' ').join('_'),
    //   label: label,
    //   color: {  background: '#D2E5FF', border: '#2B7CE9'},
    //   shape: 'ellipse'}
    // },
    nodeFromLabel(label) {
      let id = "#"+label.trim().split(' ').join('_')
      return {id: id , name: label,   age: 0,
        type: "neurone"/*, color: "#D2E5FF"*//*, type: "storage"*/}
      },
      edgeFromLabel(data){
        console.log(data)
        return { source: data.source, target: data.target, label: data.label}
      },
  },
  watch:{
    lastCommand(){
      console.log(this.lastCommand)
      switch (this.lastCommand.type) {
        case 'triplet':
        this.addTriplet(this.lastCommand)
        break;
        case 'url':
        console.log(this.lastCommand.url)
        break;
        default:
        console.log("TODO",this.lastCommand)
      }
    }
  },
  computed:{
    nodes:{
      get () { return this.$store.state.app.brain == null ? [] : this.$store.state.app.brain.neurones },
      set (/*value*/) { /*this.$store.commit('app/setBrain', value)*/ }
    },
    links:{
      get () { return this.$store.state.app.brain == null ? [] : this.$store.state.app.brain.synapses },
      set (/*value*/) { /*this.$store.commit('app/setBrain', value)*/ }
    },
    brain:{
      get () { return this.$store.state.app.brain },
      set (/*value*/) { /*this.$store.commit('app/setBrain', value)*/ }
    },
    lastCommand:{
      get () { return this.$store.state.os.lastCommand },
      set (/*value*/) { /*this.$store.commit('app/setBrain', value)*/ }
    }
  },
}
</script>

<style>

</style>
