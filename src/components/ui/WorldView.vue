<template>
  <div>
    <!-- WorldView {{ world }} -->
    <GunWorld v-if="world.id == 'gun'" />
    <PhysicWorld v-else-if="world.id == 'physic'" />
    <SolidWorld v-else-if="world.id == 'solid'" />
    <GraphWorld v-else-if="world.id == 'graph'" />
    <div v-else> This world has not been implemented yet</div>
  </div>
</template>

<script>
export default {
  name: "WorldView",
  components: {
    'GunWorld': ()=>import('@/components/worlds/GunWorld'),
    'SolidWorld': ()=>import('@/components/worlds/SolidWorld'),
    'GraphWorld': ()=>import('@/components/worlds/GraphWorld'),
    'PhysicWorld': ()=>import('@/components/worlds/PhysicWorld')
  },
  computed:{
    world:{
      get () { return this.$store.state.app.world },
      set (/*value*/) {  }
    },
  },
}
</script>

<style>

</style>
