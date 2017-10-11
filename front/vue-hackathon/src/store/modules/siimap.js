import * as types from '../mutations'

const state = {
}

const mutations = {
  UPDATE_MAP_STATE: (state, newState) => {
    state = newState;
  }
}

const actions = {
  updateMapState: (store, newState) => {
    store.commit('UPDATE_MAP_STATE', newState)
  }
}

// getters are functions
const getters = {}

export default {
  state,
  getters,
  actions,
  mutations
}
