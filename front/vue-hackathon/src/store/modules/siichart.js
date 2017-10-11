/**
 * Created by Alex on 23/03/2017.
 */
import * as types from '../mutations'

const state = {
  pie : { series : []},
  horizontalBar : { labels : [], series:[]},
  treeMap : [],
}


const mutations = {
  UPDATE_CHART_STATE: (state, newState) => {
    for(let p in newState)
      state[p] = newState[p];
  }
}

const actions = {
  updateChartState: (store, newState) => {
    store.commit('UPDATE_CHART_STATE', newState)
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
