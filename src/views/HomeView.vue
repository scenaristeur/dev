<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <OperatingSystem />
    <WorldChoose v-if="world == null"/>
    <div v-else>
      <!-- World : {{ world }} -->
      <b-button @click="world = null">Leave {{world.name}} world</b-button>
      <WorldView />
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    'WorldChoose': ()=>import('@/components/ui/WorldChoose'),
    'WorldView': ()=>import('@/components/ui/WorldView'),
    'OperatingSystem': ()=>import('@/components/core/OperatingSystem'),
  },
  computed:{
    world:{
      get () { return this.$store.state.app.world },
      set (/*value*/) { this.$store.commit('app/setWorld', null) }
    },
  },
}
</script>
