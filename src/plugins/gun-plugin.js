const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$gunGet = async function(brain){
      brain.data = []
      let brainNode = Vue.prototype.$gun.get(brain.name)
      brainNode.map().on((node, key) => {
        console.log(key, node)
        brain.data.push({key: key, node: node})
        // add results straight to the Vue component state
        // and get updates when nodes are updated by GUN
        // this.todos[key] = node;
        //  console.log(this.todos)
      });

      return brain
    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
