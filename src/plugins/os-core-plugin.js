// import * as sc from '@inrupt/solid-client-authn-browser'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$onCommand = async function(command){
      let c = {command: command, status: [], result: undefined, date: Date.now()}
      c.status[Date.now()] = "start"
      let existWorld = store.state.app.worlds.find(w => w.id == command)
      if(existWorld != undefined){
        c.result = "Done: opening "+existWorld.name
        c.status[Date.now()] = "open "+existWorld.name
        store.commit('app/setWorld', existWorld)
      }else{
        c.result = "done "+command
      }
      store.commit('os/pushHistory', c)
      // console.log(c)
      return c.result
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
