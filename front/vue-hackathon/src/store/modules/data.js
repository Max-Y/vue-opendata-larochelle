/**
 * Created by Alex on 19/03/2017.
 */
import * as types from '../mutations'
import AdaptatorService from '../../services/AdaptatorService'
import Store from '../index'

function getFacette(headers) {
  for (let header in headers) {
    if (headers[header].type == 'text')
      return headers[header].name;
  }
}

function parseFields(rows) {
  let set = []
  let array = []
  for (let row in rows) {
    for (let field in rows[row]) {
      if (rows[row][field] && rows[row][field].trim() != "")
        set.push(rows[row][field])
    }
  }
  return Array.from(new Set(set));
}

function refreshData() {
  Store.dispatch('updateWait',true);
  AdaptatorService[state.datatype].string({
    index: state.categorie,
    type: state.table,
    body: state.filters
  }).then(function (result) {
    Store.dispatch('updateFields', parseFields(result.table.rows));
    Store.dispatch('updateHitsState', result.hits);
    Store.dispatch('updateChartState', result.chart);
    Store.dispatch('updateTableState', result.table);
    Store.dispatch('updateMapState', result.map);
    Store.dispatch('updateWait',false);
  }).catch(function (e) {
    console.log('AdaptatorService.elastic.hits erreur : ', e)
  });
}

const state = {
  datatype: '',
  categorie: '',
  table: '',
  filters: {
    query: {
      match_all: {},
    },
    "aggs": {},
    "from": 0, "size": 2000,
  },
  agg: '',
  headers: [],
  data: {},
  fields: [],
  wait : true
}

const mutations = {
  UPDATE_AGG: (state, agg) => {
    if (state.agg != agg)
      state.agg = agg;
    state.filters.aggs[state.agg] = {
      "terms": {
        "field": state.agg + ".keyword",
        "size": 20,
        "order": {
          "_count": "desc"
        }
      }
    }
    refreshData();
  },
  UPDATE_SEARCH_PARAMS: (state, searchParams) => {
    for (let p in searchParams) {
      state[p] = searchParams[p]
    }
    AdaptatorService[state.datatype].headers({
      index: state.categorie,
      type: state.table
    }).then(function (result) {
      Store.dispatch('updateColumnsHeaders', result);
    }).catch(function (e) {
      console.log('AdaptatorService.elastic.headers erreur : ', e)
    });
  },
  UPDATE_COLUMNS_HEADERS: (state, headers) => {
    state.headers = headers;
    Store.dispatch('updateAgg', getFacette(headers));
  },
  UPDATE_FIELDS: (state, fields) => {
    state.fields = fields;
  },
  UPDATE_WAIT: (state, wait) => {
    state.wait = wait;
  },
  UPDATE_HEADER: (state, data) => {
    console.log(data);
  },
  UPDATE_FIELD_PARAM: (state, field) => {
    if (field && field.trim() != '') {
      state.filters.query = {
        "match": {
          "_all": field
        }
      };
    } else {
      state.filters.query = {
        "match_all": {}
      };
    }
    refreshData();
  }
}

const actions = {
  updateAgg: (store, agg) => {
    store.commit('UPDATE_AGG', agg)
  },
  updateSearchParams: (store, searchParams) => {
    store.commit('UPDATE_SEARCH_PARAMS', searchParams)
  },
  updateColumnsHeaders: (store, headers) => {
    store.commit('UPDATE_COLUMNS_HEADERS', headers)
  },
  updateFields: (store, fields) => {
    store.commit('UPDATE_FIELDS', fields)
  },
  updateFieldParam: (store, field) => {
    store.commit('UPDATE_FIELD_PARAM', field)
  },
  updateWait: (store, wait) => {
    store.commit('UPDATE_WAIT', wait)
  },
  updateHeader: (store, data) => {
    store.commit('UPDATE_HEADER', data)
  }
}

// getters are functions
const getters = {
  getHeaders(state){
    let array = [];
    for (let header in state.headers) {
      array.push(state.headers[header].name)
    }
    return array;
  },
  getAgg(state){
    return state.agg;
  },
  getFields(state){
    return state.fields;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
