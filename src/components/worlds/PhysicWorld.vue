<template>
  <div>
    Physic World
    <div class="home" id="myCanvas">
  </div>
  </div>
</template>

<script>
import { Project,  PhysicsLoader, /*  ExtendedObject3D, ExtendedMesh, CatmullRomCurve3*/ } from 'enable3d'
import { MainScene } from '@/components/worlds/physic/MainScene.js'

export default {
  name: "PhysicWorld",
  created(){
  console.log(process.env.BASE_URL)
  PhysicsLoader('lib/ammo', () => new Project(
    {
      scenes: [MainScene],
      // gravity: { x: 0, y: -9.81, z: 4},
      // antialias: true,
      // maxSubSteps: 10, //20, //10
      // fixedTimeStep: 1/240, //1 / 360, // 1/240
    }
  ))
}
}
</script>

<style>

</style>
