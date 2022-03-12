let debug = false
let statistiques = true


import {  Scene3D, THREE  } from 'enable3d'
import Stats from 'three/examples/jsm/libs/stats.module'



const stats = Stats()
let raycaster,  scene
// let INTERSECTED;
//
//
// const pointer = new THREE.Vector2();
let mouse = { x : 0, y : 0 }

export class MainScene extends Scene3D {
  constructor() {
    super('MainScene')
  }

  async init() {
    console.log('init')
    this.renderer.setPixelRatio(1)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    if (statistiques){
      document.body.appendChild(stats.dom)
    }
  }

  async preload() {
    console.log('preload')
  }

  create() {

    console.log('create')

    // set up scene (light, ground, grid, sky, orbitControls)
    this.warpSpeed() //'-orbitControls'

    this.debug = debug
    if (debug == true ){
      this.physics.debug?.enable()     // enable physics debug
    }
    this.camera.position.set(0, 14, 20)

    const blocks = []

    const addTower = () => {
      const material = this.add.material({ lambert: { color: 0xa04000 } })

      for (let i = 0; i < 12; i++) {
        if (i % 2 == 0) {
          blocks.push(
            this.physics.add.box({ y: i * 0.85, z: -1.3, width: 4, height: 0.65 }, { custom: material }),
            this.physics.add.box({ y: i * 0.85, z: 0, width: 4, height: 0.65 }, { custom: material }),
            this.physics.add.box({ y: i * 0.85, z: 1.3, width: 4, height: 0.65 }, { custom: material })
          )
        } else {
          blocks.push(
            this.physics.add.box({ y: i * 0.85, x: -1.3, depth: 4, height: 0.65 }, { custom: material }),
            this.physics.add.box({ y: i * 0.85, x: 0, depth: 4, height: 0.65 }, { custom: material }),
            this.physics.add.box({ y: i * 0.85, x: 1.3, depth: 4, height: 0.65 }, { custom: material })
          )
        }
      }
      blocks.forEach(block => {
        block.body.setFriction(0.8)
      })
    }
    addTower()

    scene = this
    raycaster = new THREE.Raycaster();
    this.renderer.domElement.addEventListener( 'click', this.raycast, false );

  }


  raycast ( e ) {

    //1. sets the mouse position with a coordinate system where the center
    //   of the screen is the origin
    // console.log(e.clientX, e.clientY)
    // mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    // mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    var rect = scene.renderer.domElement.getBoundingClientRect();
    mouse.x = ( ( e.clientX - rect.left ) / ( rect.right - rect.left ) ) * 2 - 1;
    mouse.y = - ( ( e.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1

    //2. set the picking ray from the camera position and mouse coordinates
    raycaster.setFromCamera( mouse, scene.camera );

    //3. compute intersections
    // console.log(scene)
    var intersects = raycaster.intersectObjects( scene.scene.children );

    for ( var i = 0; i < intersects.length; i++ ) {
      let name = intersects[ i ].object.name
      if(name.length > 0 && name != "ground"){
        console.log( name, intersects[ i ] );
      }else{
        let point = intersects[ i ].point
        scene.physics.add.box({x:point.x, y: point.y, z: point.z })
      }

      /*
      An intersection has the following properties :
      - object : intersected object (THREE.Mesh)
      - distance : distance from camera to intersection (number)
      - face : intersected face (THREE.Face3)
      - faceIndex : intersected face index (number)
      - point : intersection point (THREE.Vector3)
      - uv : intersection point in the object's UV coordinates (THREE.Vector2)
      */
    }

  }




  update() {

    if (statistiques){
      stats.update()
    }
  }



}
