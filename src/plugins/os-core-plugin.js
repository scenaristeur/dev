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

    Vue.prototype.$loadBrain = async function(brain){
      switch (brain.world.id) {
        case 'gun':
        brain = await this.$gunGet(brain)
        break;
        default:
        console.log("todo load ", brain)
      }

      console.log("brain with data", brain)
      return brain
    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
