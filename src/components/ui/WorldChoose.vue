<template>
  <div>
    <h2>{{ $t('message.chooseWorld') }}</h2>
    <b-card-group columns>

      <!-- <b-card
      title="Card title that wraps to a new line"
      img-src="https://placekitten.com/g/400/450"
      img-alt="Image"
      img-top
      > -->
      <b-card
      v-for="w in worlds" :key="w.id">
      <b-card-title>
        {{w.name}}
      </b-card-title>
      <b-card-text>
        {{w.description}}
      </b-card-text>
      <b-button variant="primary" @click="changeWorld(w)" v-if="w.status == 'enabled'">Open</b-button>
      <b-card-footer v-else>
        {{w.status}}
      </b-card-footer>
    </b-card>

  </b-card-group>
</div>
</template>

<script>
export default {
  name: "WorldChoose",
  computed:{
    worlds:{
      get () { return this.$store.state.app.worlds },
      set (/*value*/) { /*this.updateTodo(value)*/ }
    },
  },
  methods:{
    changeWorld(w){
      this.$store.commit('app/setWorld', w)
    }
  }
}
</script>

<style>

</style>
