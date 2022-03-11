<template>
  <b-modal id="modal-help" title="Help" size="lg">
    <h5>To enter a world type its id</h5>
    Available worlds id are: <br>
    <span v-for="w in worlds" :key="w.id">
      <span v-if="w.status == 'enabled'">  '{{w.id}}'</span>
    </span>
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
</template>

<script>
export default {
  name: "OsHelp",
  data(){
    return{
      help_items: [
        {command: "history", action: "show the history", scope: "os", attributes: "none"},
        {command: "help", action: "show the help", scope: "operating system", attributes: "none"},
      ],
      help_fields: [
        { key: 'command', label: 'Command', sortable: true },
        { key: 'action', label: 'Action' },
        { key: 'scope', label: 'Scope', sortable: true },
        { key: 'attributes', label: 'Attributes' },
      ]
    }
  },
  methods:{
    redo(h){
      this.$bvModal.hide("modal-help")
      this.$emit('redo', h)
    }
  },
  computed:{
    worlds:{
      get () { return this.$store.state.app.worlds },
      set (/*value*/) { }
    },
  },
}
</script>

<style>

</style>
