/**
 * Created by Alex on 19/02/2017.
 */
import * as types from '../mutations'

const state = {
  count: 0
}

const mutations = {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  },
  [types.COUCOU] (state) {
    console.log("Je suis un compteur, je dis pas coucou...")
  }
}

const actions = {
  increment: ({ commit }) => commit(types.INCREMENT),
  decrement: ({ commit }) => commit(types.DECREMENT),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit(types.INCREMENT)
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.INCREMENT)
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default {
  state,
  getters,
  actions,
  mutations
}
