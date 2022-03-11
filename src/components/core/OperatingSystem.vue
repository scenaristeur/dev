<template>
  <div>
    <b>{{ message }}</b>
    <b-input-group class="mt-3">
      <b-input-group-prepend>
        <b-button v-b-modal.modal-history variant="info">></b-button>
      </b-input-group-prepend>
      <b-input ref="commandInput" v-on:keyup.enter="onEnter" placeholder="type help + 'Enter' for a list of commands" v-model="command"/>
    </b-input-group>
    <b-modal id="modal-history" title="History" size="lg">
      <b-table hover
      :items="history"
      :fields="fields"
      selectable
      select-mode="single"
      responsive="sm"
      @row-selected="redo"
      sort-by.sync="date"
      sort-direction="desc"
      ></b-table>

    </b-modal>

    <b-modal id="modal-help" title="Help" size="lg">
      <b-table hover
      :items="help_items"
      :fields="help_fields"
      selectable
      select-mode="single"
      responsive="sm"
      @row-selected="redo"
      sort-by.sync="name"
      sort-direction="desc"
      ></b-table>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: "OperatingSystem",
  data(){
    return{
      command : "",
      message: "",
      fields: [
        { key: 'command', label: 'Command', sortable: true },
        { key: 'result', label: 'Result', sortable: true, class: 'text-right' },
        { key: 'date', label: 'Date', sortable: true, sortDirection: 'desc' }
      ],
      help_items: [
        {command: "history", action: "show the history", attributes: "none"},
        {command: "help", action: "show the help", attributes: "none"}
      ],
      help_fields: [
        { key: 'command', label: 'Command', sortable: true },
        { key: 'action', label: 'Action' },
        { key: 'attributes', label: 'Attributes' },
      ]
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
        this.message = await this.$onCommand(command)
        this.command = ""
      }else{
        this.$bvModal.show("modal-help")
      }
    },
    redo(h){
      // console.log(h)
      this.$bvModal.hide("modal-history")
      this.$bvModal.hide("modal-help")
      this.command = h[0].command
      let app = this
      setTimeout(function () {
        app.$refs.commandInput.focus()
      }, 500);
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
