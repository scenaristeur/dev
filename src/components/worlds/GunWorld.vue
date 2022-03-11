<template>
  <div>
    Gun World
  </div>
</template>

<script>
import {Brain } from '@/neurone-factory'
export default {
  name: "GunWorld",
  methods:{
    process(c){
      let brain = new Brain()
      switch (c.command) {
        case "brain":

        if (c.array[1] != undefined){
          brain.name = c.array[1]

        }else{
          brain.name = prompt("Please choose a brain name");
        }
        console.log(brain)
        break;
        default:

      }
    }
  },
  watch:{
    history(){
      let last = this.history[this.history.length - 1]
      this.process(last)
    }
  },
  computed:{
    history:{
      get () { return this.$store.state.os.history },
      set (/*value*/) { }
    },
  },
}
</script>

<style>

</style>
