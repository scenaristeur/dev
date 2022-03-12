<template>
  <div>
    Gun World
    <div v-if="brain != null">
      Working on <b>{{brain.name}}</b> in <b>{{brain.world.id}}</b> <b-button @click="root">root</b-button>

    <div v-for="(node, idx) in Object.entries(brainContent)" :key="idx">
      --  {{ node[0] }} :<br>

       {{node[1]}} //<br>
       <!-- <b>UNDERSCORE</b>{{node[1]['_']}}<br>
       <b>DIESE</b> {{node[1]['_']['#']}}<br> -->

      <b-button @click="get(node)" v-if="typeof node[1] == 'object'">get</b-button>
      <b-button @click="back(node)">back</b-button>
      <b-button @click="log(node)">log</b-button>
    </div>




    <!-- {{ brain}} -->
  </div>
  <div v-else>
    Try to type the command `brain test`, or `brain my`
  </div>
  <a href="https://gunjs.herokuapp.com/basic/paste.html" target="_blank">Test page</a>

</div>
</template>

<script>
// import {Brain } from '@/neurone-factory'
export default {
  name: "GunWorld",
  data(){
    return {
      brainContent: {},
      // input: {value: null, type: null},
      // types: ["object", "string", "number", "boolean", "null" ],
      brain_node : null,

    }
  },
  methods:{
    get(n){
      console.log(n)
      let app = this
      let path = n[1]['#'] || n[1]['_']['#']
      this.$gun.get(path).on(function(node){
        // render it, but only once. No updates.
        console.log(node)
        app.brainContent = node
      })

      // let company = this.$gun.get('startup').put({
      //   name: "hype",
      //   profitable: false,
      //   address: {
      //     street: "123 Hipster Lane",
      //     city: "San Francisco",
      //     state: "CA",
      //     country: "USA"
      //   }
      // });
      //
      // company.once(function(startup){
      //   console.log("The startup:", startup);
      // });
    },
    back(n){
      console.log(n)
      let path = n[1]['_'] || n[1]['#']
      this.$gun.get(path).back(1)
    },
    root(){
      this.brainContent = {}
      console.log("subscribing to ", this.brain.name, this.brain)
      this.brain_node = this.$gun.get(this.brain.name)
      let name =  this.brain.name
      let app = this
      this.brain_node.map().on(function(node, key){
        console.log('Subscribed to ',name, node);
        app.brainContent[key] = node
      })
    },
    log(node){
      console.log(node, this.$gun)
    }
  },
  watch:{
    brain(){
      console.log(this.brain)
      this.root()
    }
  },
  computed:{
    brain:{
      get () { return this.$store.state.app.brain },
      set (/*value*/) { }
    },
  },
}
</script>

<style>

</style>
