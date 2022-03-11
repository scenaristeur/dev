<template>
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
</template>

<script>
export default {
name: "OsHistory",
data(){
  return{
    fields: [
      { key: 'command', label: 'Command', sortable: true },
      { key: 'result', label: 'Result', sortable: true, class: 'text-right' },
      { key: 'date', label: 'Date', sortable: true, sortDirection: 'desc' }
    ],
  }
},
methods:{
  redo(h){
    this.$bvModal.hide("modal-history")
    this.$emit('redo', h)
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
