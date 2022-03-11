<template>
  <div>
    Gun World
    Working on <b>{{brain.name}}</b> in <b>{{brain.world.id}}</b>
    <hr>
    ''{{ brain}}-
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
