<template>
  <div>
    Gun World
    <div v-if="brain != null">
      Working on <b>{{brain.name}}</b> in <b>{{brain.world.id}}</b> <b-button @click="root">root</b-button>

      <hr>

      <div class="container"  v-if="neurone != null">
        Form



        <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        description="the name of this neurone."
        >
        <b-form-input
        id="input-1"
        v-model="neurone.name"
        type="text"
        placeholder="Enter name"
        required
        ></b-form-input>
      </b-form-group>

      <b-form-group
      id="input-group-2"
      label="Age / Priority / Status:"
      label-for="input-2"
      description="You can give it an age, a priority or a status."
      >
      <b-form-input
      id="input-2"
      v-model="neurone.age"
      type="number"
      placeholder="Enter age / priority"
      required
      ></b-form-input>
    </b-form-group>

    <b-form-radio-group label="Privacy" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="neurone.privacy" :aria-describedby="ariaDescribedby" name="some-radios" value="public">Public</b-form-radio>
      <b-form-radio v-model="neurone.privacy" :aria-describedby="ariaDescribedby" name="some-radios" value="private">Private</b-form-radio>
    </b-form-radio-group>


    {{ neurone.relations}} <b-button   @click="editRelation(neurone.relations['#'])">explore</b-button>


    <b-list-group style="max-height:200px;overflow-y: scroll;">
      <b-list-group-item
      v-for="(value, name) of relations"
      :key="name"
      button
      >
      {{name}}
      : {{value}}

      <!-- <div v-if="name== '#'">{{getRelation(value)}}</div> -->


    </b-list-group-item>
  </b-list-group>

  <div v-if="newProperty != null">
    <b-input v-model="propName" v-if="newProperty.name== ''" @change="newPropertyAdded" />
  </div>



  <b-button variant="primary" @click="addProperty">Add property</b-button>



  <!-- <b-form-group id="input-group-3" label="Links:" label-for="input-3">
  <b-form-select
  id="input-3"
  v-model="neurone.links"
  :options="neurone.links"
  required
  ></b-form-select>
</b-form-group> -->

<hr>

<b-button @click="save" variant="primary">Submit</b-button>
<b-button @click="neurone = null" variant="danger">Reset</b-button>


{{ JSON.stringify(neurone, null, 2)}}

<!-- <hr>
<b-button @click="neurone = null">Cancel</b-button><b-button @click="save">Save</b-button> -->
</div>


<b-button @click="create" v-else>Create a Neurone</b-button>

<div v-for="(node, idx) in Object.entries(brainContent)" :key="idx">
  <!-- {{ node[0] }} :<br> -->

  {{node[1].name}} {{node[1].age}}

  <b-button variant="primary" @click="edit(node)" v-if="typeof node[1] == 'object'">edit</b-button>
  <!-- <hr>
  <b-button @click="get(node)" v-if="typeof node[1] == 'object'">get</b-button>
  <b-button @click="back(node)">back</b-button>
  <b-button @click="log(node)">log</b-button> -->
</div>




<!-- {{ brain}} -->
</div>
<div v-else>
  Try to type the command `brain test`, or `brain my`
</div>
<a href="https://gunjs.herokuapp.com/basic/paste.html" target="_blank">Test page</a>

</div>
</template>

<script>
import { Neurone } from '@/neurone-factory'
export default {
  name: "GunWorld",
  data(){
    return {
      neurone: null,
      brainContent: {},
      // input: {value: null, type: null},
      // types: ["object", "string", "number", "boolean", "null" ],
      brain_node : null,
      newProperty: null,
      propName: "",
      relations: {}
    }
  },
  methods:{
    create(){
      this.neurone = new Neurone()
      console.log(this.neurone)
    },
    save(){
      console.log("saving", this.neurone)
      delete this.neurone['@context']
      delete this.neurone.properties
      delete this.neurone.synapses
      delete this.neurone.links
      console.log("saving cleaned", this.neurone)
      this.$gun.get(this.brain.name).get(this.neurone.id).put(this.neurone)
      this.neurone = null
      this.root()

    },
    edit(n){
      console.log(n)
      let app = this
      let path = n[1]['_']['#']
      console.log(path)
      this.$gun.get(path).once(function(node){
        // render it, but only once. No updates.
        console.log(node)
        app.neurone = node
      })
    },
    addProperty(){
      this.newProperty = {"name": "", value: {name: "test"}}
    },
    newPropertyAdded(){
      this.newProperty.name = this.propName
      console.log(this.newProperty)
      this.neurone.relations == undefined ? this.neurone.relations = {} : ""
      this.neurone.relations[this.newProperty.name] = this.newProperty.value
      //this.$gun.get(this.brain.name).get(this.neurone.id).get('properties').set(this.newProperty)
      this.newProperty = null
    },
    editRelation(n){
      console.log(n)
      let relations = {}
      let res =   this.$gun.get(n).map().once(function(node, key){
        console.log('rs', node, key);
        relations[key] = node

      })
      console.log('res',res)
      console.log("rel",relations)

      this.relations = relations
    },
    getRelation(node_id){
      this.$gun.get(node_id).once(function(node, key){
        console.log('RELATION Subscribed to ',node_id, node, key);

      })
    },

    get(n){
      console.log(n)
      let app = this
      let path = n[1]['#'] || n[1]['_']['#']
      console.log(path)
      this.$gun.get(path).on(function(node){
        // render it, but only once. No updates.
        console.log(node)
        app.neurone = node
      })

      // let company = this.$gun.get('startup').put({
      //   name: "hype",
      //   profitable: false,
      //   address: {
      //     street: "123 Hipster Lane",
      //     city: "San Francisco",
      //     state: "CA",
      //     country: "USA"
      //   }
      // });
      //
      // company.once(function(startup){
      //   console.log("The startup:", startup);
      // });
    },
    back(n){
      console.log(n)
      let path = n[1]['_'] || n[1]['#']
      this.$gun.get(path).back(1)
    },
    root(){
      this.brainContent = {}
      console.log("subscribing to ", this.brain.name, this.brain)
      this.brain_node = this.$gun.get(this.brain.name)
      let name =  this.brain.name
      let app = this
      this.brain_node.map().on(function(node, key){
        console.log('Subscribed to ',name, node);
        app.brainContent[key] = node
      })
    },
    log(node){
      console.log(node, this.$gun)
    }
  },
  watch:{
    brain(){
      console.log(this.brain)
      this.root()
    }
  },
  computed:{
    brain:{
      get () { return this.$store.state.app.brain },
      set (/*value*/) { }
    },
  },
}
</script>

<style>

</style>
