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
    // Vue.prototype.$addToBrain = async function(command){
    //   console.log("command for add ing to brain", command)
    //           let nodeSubject, nodeObject, edge
    //   switch (store.state.app.brain.world.id) {
    //     case 'gun':
    //     console.log("add to gun")
    //     command = await this.$gunAddTriple(command)
    //
    //     break;
    //     case 'graph':
    //     console.log("add to graph")
    //
    //     nodeSubject = nodeFromLabel(command.value.subject)
    //     saveNode(nodeSubject)
    //     nodeObject = nodeFromLabel(command.value.object)
    //     saveNode(nodeObject)
    //
    //     console.log(nodeSubject.id, nodeObject.id)
    //     edge = edgeFromLabel({source: nodeSubject.id, target: nodeObject.id, label: command.value.predicate})
    //     console.log(edge)
    //     //saveEdge(edge)
    //
    //
    //
    //
    //
    //
    //     break;
    //     default:
    //
    //   }
    //   return command
    // }
    //
    // function saveNode(n){
    //   let brain = store.state.app.brain
    //   var index = brain.neurones.findIndex(x => x.id==n.id);
    //   index === -1 ? brain.neurones.push(n) : Object.assign(brain.neurones[index], n)
    //   store.commit('app/setBrain', brain)
    // //  this.sendUpdate(n)
    // }
    // // function saveEdge(e){
    // //   console.log(e)
    // //   console.log(store.state.app.brain.synapses)
    // //   store.state.app.brain.synapses.push(e)
    // //   //  var index = this.links.findIndex(x => x.id==e.id);
    // //   //index === -1 ? this.links.push(e) : Object.assign(this.links[index], e)
    // //   console.log(store.state.app.brain.neurones, store.state.app.brain.synapses)
    // // //  this.sendUpdate(e)
    // // }
    //
    // function nodeFromLabel(label) {
    //   let id = "#"+label.trim().split(' ').join('_')
    //   return {id: id , name: label,   age: 0,
    //     type: "neurone"/*, color: "#D2E5FF"*//*, type: "storage"*/}
    //   }
    //   function edgeFromLabel(data){
    //     console.log(data)
    //     return { source: data.source, target: data.target, label: data.label}
    //   }
    }
  }

  // Auto-install
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }

  export default plugin
