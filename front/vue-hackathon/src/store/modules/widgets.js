/**
 * Created by Alex on 18/03/2017.
 */
/**
 * Created by Alex on 19/02/2017.
 */
import * as types from '../mutations'

const state = {
  idGen: 0,
  types: [{
    name: 'Graphique',
    component: 'diagram',
    subtypes: [{
      name: 'Courbe',
      value: 0,
      configuration: {
        type: 'line',
      }
    }, {
      name: 'Histogramme horizontal',
      value: 1,
      configuration: {
        type: 'bar',
      }
    }, {
      name: 'Camembert',
      value: 2,
      configuration: {
        type: 'pie',
      }
    }, {
      name: 'Aire',
      value: 3,
      configuration: {
        type: 'area',
      }
    }, {
      name: 'Histogramme',
      value: 4,
      configuration: {
        type: 'column',
      }
    }
    ],
    value: 0
  }, {
    name: 'Carte',
    component: 'carte',
    subtypes: [{
      name: 'Simple',
      value: 0,
    }],
    value: 1
  }],
  list: [],
  force_render :[]
}

const mutations = {
  CREATE: (state) => {
    state.list.push({
      id: state.idGen,
      type: 0,
      subtype: 0,
    });
    state.idGen++;
  },
}

const actions = {
  create: (store) => {
    store.commit('CREATE')
  },
}

// getters are functions
const getters = {}

export default {
  state,
  getters,
  actions,
  mutations
}
