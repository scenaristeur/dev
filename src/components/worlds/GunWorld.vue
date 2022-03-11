<template>
  <div>
    Gun World
    <div v-if="brain != null">
      Working on <b>{{brain.name}}</b> in <b>{{brain.world.id}}</b>

      <!-- <div v-if="brainContent['_'] != undefined">
      <hr>
      Content : {{ brainContent}}
      <hr>
      underscore    {{ brainContent["_"]}}
      <hr>
      diese    {{ brainContent["_"]['#']}}
      <hr>
      superier  {{ brainContent["_"][">"]}}
      <hr>

    </div> -->
    <div v-for="(node, idx) in Object.entries(brainContent)" :key="idx">
      --  {{ node[0] }} : {{node[1]}} <b-button @click="follow(node)">Follow</b-button>
    </div>



    <hr>
    <hr>
    {{brain.data}}
    <hr>
    {{ brain}}
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
      brainContent: {}
    }
  },
  methods:{
    follow(n){
      console.log(n)
      this.$gun.get(n[1]).once(function(node){
        // render it, but only once. No updates.
        console.log(node)
      })


    }
    // process(c){
    //   console.log(c)
    //   // let brain = new Brain()
    //   // switch (c.command) {
    //   //   case "brain":
    //   //
    //   //   if (c.array[1] != undefined){
    //   //     brain.name = c.array[1]
    //   //
    //   //   }else{
    //   //     brain.name = prompt("Please choose a brain name");
    //   //   }
    //   //   console.log(brain)
    //   //   break;
    //   //   default:
    //   //
    //   // }
    // }
  },
  watch:{
    brain(){
      this.brainContent = {}
      console.log("subscribing to ", this.brain.name, this.brain)
      let brain_sub = this.$gun.get(this.brain.name)
      let name =  this.brain.name
      let app = this
      brain_sub.on(function(node){
        console.log('Subscribed to ',name, node);
        app.brainContent = node
      })
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
