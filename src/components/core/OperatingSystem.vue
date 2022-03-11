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
      v-model="command"
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
      command : "",
      message: ""
    }
  },
  methods:{
    async onEnter(){
      // console.log(this.command)
      let command = this.command.trim()
      if (command.length > 0){
        if (command == "history"){
          this.$bvModal.show("modal-history")
        }
        if(command == "help"){
          this.$bvModal.show("modal-help")
        }
        let result = await this.$onCommand(command)
        this.message = result.result

        this.command = result.inputNew || ""
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
