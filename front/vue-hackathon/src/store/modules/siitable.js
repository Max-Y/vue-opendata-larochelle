/**
 * Created by Alex on 22/03/2017.
 */
import * as types from '../mutations'

const state = {
  rows : [[new Date(),'Test 1', 1, 'Prout1',0],[new Date(),'Test 3', 1, 'Prout3',1],[new Date(),'Test 3', 3, 'Prout3',0]],
}

const mutations = {
  UPDATE_TABLE_STATE: (state, newState) => {
    for (let p in newState) {
      state[p] = newState[p]
    }
  }
}

const actions = {
  updateTableState: (store, newState) => {
    store.commit('UPDATE_TABLE_STATE', newState)
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
