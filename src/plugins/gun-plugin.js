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
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
