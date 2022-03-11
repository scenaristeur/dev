<template>
  <div>
    Gun World
    <div v-if="brain != null">
      Working on <b>{{brain.name}}</b> in <b>{{brain.world.id}}</b>
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
  methods:{
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
    // lastCommand(){
    //   this.process(this.lastCommand)
    // }
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
