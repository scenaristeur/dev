// import * as sc from '@inrupt/solid-client-authn-browser'
import { Command } from '@/neurone-factory'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    // console.log(store)

    Vue.prototype.$onCommand = async function(command){
      let c = new Command({command: command, store: store})
      console.log("command",c)
      store.commit('os/pushHistory', c)
      return c
    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
