// import Vue from 'vue'
const state = () => ({
  world: null,
  worlds: [
    {id: "solid", name: "Solid", status: "enabled", description: "description"},
    {id: "physic", name: "Physic", status: "enabled", description: "description"},
    {id: "graph", name: "Graph", status: "enabled", description: "description"},
    {id: "gun", name: "GunDB", status: "enabled", description: "description"},
    {id: "ipfs", name: "Ipfs", status: "enabled", description: "description"},
    {id: "safe", name: "Safe", status: "disabled", description: "description"},
    {id: "mld", name: "m-ld", status: "todo", description: "description"},
    {id: "local", name: "local/indexdb", status: "work in progress", description: "description"},
    {id: "filecoin", name: "filecoin", status: "disabled", description: "description"},
  ]
})

const mutations = {
  setWorld(state,w){
    state.world = w
  },
}

const actions = {
  // async addWorkspace(context, w) {
  //   context.state.pod.workspaces.push(w)
  //   Vue.prototype.$addWorkspaceToPod(w)
  // },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
