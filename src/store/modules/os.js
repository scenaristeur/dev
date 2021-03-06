// import Vue from 'vue'
const state = () => ({
  history: [],
  lastCommand: null
})

const mutations = {
  pushHistory(state, c){
    state.lastCommand = c
    state.history.push(c)
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
