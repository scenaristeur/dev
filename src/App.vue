<template>
  <div id="app">
    <NavBar />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import  'evejs/dist/eve.custom.js';
// import { AppAgent } from '@/agents/AppAgent.js';
// import { HelloAgent } from '@/agents/HelloAgent.js';
// import { SnifferAgent } from '@/agents/SnifferAgent.js';

// import { Brain } from 'neurone-factory'

export default {
  name: 'DevApp',
  components: {
    'NavBar': ()=>import('@/components/ui/NavBar')
  },

}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
