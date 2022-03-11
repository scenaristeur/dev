<template>
  <div>
    <b>{{ message }}</b>
    <b-input-group class="mt-3">
      <b-input-group-prepend>
        <b-button v-b-modal.modal-history variant="info">></b-button>
      </b-input-group-prepend>
      <b-input
      ref="commandInput"
      v-on:keyup.enter="onEnter"
      v-on:keydown.tab.prevent="onTab"
      placeholder="type help + 'Enter' for a list of commands"
      v-model="c"
      autofocus/>
    </b-input-group>

    <OsHistory v-on:redo="redo"/>
    <OsHelp v-on:redo="redo"/>

  </div>
</template>

<script>

export default {
  name: "OperatingSystem",
  components: {
    // HelloWorld,
    'OsHistory': ()=>import('@/components/core/tools/OsHelp'),
    'OsHelp': ()=>import('@/components/core/tools/OsHistory'),
  },
  data(){
    return{
      c : "",
      message: ""
    }
  },
  methods:{
    async onEnter(){
      // console.log(this.command)
      let c = this.c.trim()
      if (c.length > 0){
        c = await this.$onCommand(c)
        if (c.lower == "history"){this.$bvModal.show("modal-history")}
        if(c.lower == "help"){this.$bvModal.show("modal-help")}
        this.message = c.result
        this.c = c.inputNew || ""
      }
      // else{
      //   this.$bvModal.show("modal-help")
      // }
    },
    onTab(){
      console.log("should autocomplete")
    },
    redo(h){
      console.log(h)

      this.$bvModal.hide("modal-help")
      this.command = h[0].command
      let app = this
      setTimeout(function () {
        app.$refs.commandInput.focus()
      }, 500);
    }
  },
}
</script>

<style>

</style>
