/**
 * Created by Alex on 19/02/2017.
 */
import * as types from '../mutations'

const state = {
  msg: 'Hello'
}

const mutations = {
  [types.COUCOU] (state) {
    state.msg = "Coucou papa !"
  }
}

const actions = {

}

// getters are functions
const getters = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
