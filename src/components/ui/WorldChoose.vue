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
      <b-card-img-lazy v-if="w.img != undefined" :src="w.img" alt="Image" top></b-card-img-lazy>
      <b-card-title>
        {{w.name}}
      </b-card-title>
      <b-card-text>
        {{w.description}}
      </b-card-text>


      <b-button v-if="w.status == 'enabled'" variant="primary" @click="changeWorld(w)">Open</b-button>
      <small v-else><i>{{w.status}}</i></small>

      <b-card-footer v-if="w.links != undefined && w.links.length > 0">
        <a v-for="l in w.links" :key="l.url" :href="l.url" class="card-link" target="_blank">{{l.name}}</a>
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
