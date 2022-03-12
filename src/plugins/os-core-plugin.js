import { Command } from '@/neurone-factory'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    // console.log(store)

    Vue.prototype.$onCommand = async function(command){
      let c = new Command({command: command, store: store})
      console.log("command",c)

      return c
    }

    // Vue.prototype.$loadBrain = async function(brain){
    //   switch (brain.world.id) {
    //     case 'gun':
    //     brain = await this.$gunGet(brain)
    //     break;
    //     default:
    //     console.log("todo load ", brain)
    //   }
    //
    //   console.log("brain with data", brain)
    //   return brain
    // },
    Vue.prototype.$addToBrain = async function(command){
      console.log("command for add ing to brain", command)
      switch (store.state.app.brain.world.id) {
        case 'gun':
        console.log("add to gun")
        command = await this.$gunAddTriple(command)

        break;
        default:

      }
      return command
    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
