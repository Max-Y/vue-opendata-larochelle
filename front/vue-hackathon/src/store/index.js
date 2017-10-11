/**
 * Created by Alex on 19/02/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import counter from './modules/counter'
import hello from './modules/hello'
import widgets from './modules/widgets'
import diagram from './modules/diagram'
import data from './modules/data'
import SIITable from './modules/siitable'
import SIIHits from './modules/siihits'
import SIIMap from './modules/siimap'
import SIIChart from './modules/siichart'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    counter,
    hello,
    widgets,
    diagram,
    data,
    SIITable,
    SIIHits,
    SIIMap,
    SIIChart
  }
})
