/**
 * Created by Alex on 22/03/2017.
 */
import * as types from '../mutations'

const state = {
  total : 1337,
}

const mutations = {
  UPDATE_HITS_STATE: (state, newState) => {
    for (let p in newState) {
      state[p] = newState[p]
    }
  }
}

const actions = {
  updateHitsState: (store, newState) => {
    store.commit('UPDATE_HITS_STATE', newState)
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
