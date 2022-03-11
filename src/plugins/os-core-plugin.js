// import * as sc from '@inrupt/solid-client-authn-browser'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$onCommand = async function(command){
      let result = "done "+command
      store.commit('os/pushHistory', {command: command, result: result, date: Date.now()})
      return result
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
