const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$gunGet = async function(brain){
      let data = []
      let brainNode = Vue.prototype.$gun.get(brain.name)
      console.log("brainNode", brainNode)
      brainNode.map().on((node, key) => {
        console.log(key, node)
        data.push({key: key, node: node})
        // add results straight to the Vue component state
        // and get updates when nodes are updated by GUN
        // this.todos[key] = node;
        //  console.log(this.todos)
      });
      brain.data = data

      return brain
    }

    Vue.prototype.$gunAddTriple = async function(command){
      let triple = command.value
      let brainNode = Vue.prototype.$gun.get(store.state.app.brain.name)
      console.log(brainNode, triple)
      let subjectNode = brainNode.get(command.value.subject)
      subjectNode.put({name: command.value.subject})

      let objectNode = brainNode.get(command.value.object)
      let nodeObject = objectNode.put({name: command.value.object})
      subjectNode.get(command.value.predicate).set(nodeObject)
      // console.log(objectNode)
      // let addit = {}
      // addit[command.value.predicate] = objectNode
      // console.log(addit)
      // subjectNode.set(addit)
      // objectNode.put
      // let objectNode = brainNode.set({name : triple.object, created: Date.now() })
      // let subjectNode = { name: triple.subject , created: Date.now()}
      // subjectNode[triple.predicate] = objectNode
      // console.log(subjectNode)
      // brainNode.set(subjectNode)
    //  Vue.prototype.$gunGet(store.state.app.brain)
    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
