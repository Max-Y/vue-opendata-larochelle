/**
 * Created by Alex on 19/02/2017.
 */
import * as types from '../mutations'

const state = {
  charts: [],
  type: {
    simpleLine: 0,
    pie: 1,
    horizontalBar: 2,
    treeMap: 3
  },
  responsiveOptions: [
    ['screen and (min-width: 641px) and (max-width: 1024px)', {
      showPoint: false,
      lineSmooth: false
    }],
    ['screen and (max-width: 640px)', {
      showLine: false,
      axisX: {
        labelInterpolationFnc: function(value) {
          return 'W' + value;
        }
      }
    }]
  ]
}

// ACRONYME DG FOR DIAGRAM
const mutations = {
  DG_SHARE_ALL_DATA: (labels, series) => {

  },
  DG_SHARE_LINE_DATA: () => {

  },
  DG_SHARE_COLUMN_DATA: (state, labels) => {
    state.labels =  labels
  },
  DG_DESTROY: () => {

  },
  DG_BUILD: () => {
    
  },
  DG_RESIZE: (state) => {
    
  },
  DG_CHANGE_LABEL: (state, labels) => {
  },
  DG_CHANGE_CLASS: (state, chart) => {
    switch (chart.size) {
      case 3:
        return state.charts[chart.index].class.size = 'mdl-cell--4-col';
      case 2:
        return state.charts[chart.index].class.size = 'mdl-cell--6-col';
      case 1:
       return state.charts[chart.index].class.size = 'mdl-cell--12-col';
    }
  },
  DG_CHANGE_TO_PIE: (state, index) => {
    var sum = function(a, b) { return a + b };
    state.charts[index].class.type = 'ct-chart__pie';
    state.charts[index].options = {
      labelInterpolationFnc: function(value) {
        return Math.round(value / state.charts[index].data.series.reduce(sum) * 100) + '%';
      }
    };
  },
  DG_CHANGE_TO_SIMPLE_LINE: (state, index) => {
    state.charts[index].class.type = 'ct-chart__simple_line';
    state.charts[index].options = {
      high: 20,
      low: -3,
      fullWidth: true,
      axisY: {
        onlyInteger: true,
        offset: 20
      }
    };
  },
  DG_CHANGE_TO_HORIZONTAL_BAR: (state, index) => {
    state.charts[index].class.type = 'ct-chart__horizontal_bar';
    state.charts[index].options = {
      stackBars: true,
      seriesBarDistance: 10,
      reverseData: false,
      horizontalBars: true,
      low: 0,
      fullWidth: true,
      chartPadding: {
        right: 30,
        left: 30
      },
      axisX: {
        showGrid: true,
        showLabel: true
      },
      axisY: {
        showGrid: false,
        showLabel: true,
        offset: 60,
        onlyInteger: true,
        labelInterpolationFnc: function(value) {
          return value;
        }
      }
    };
  },
  DG_CHANGE_TO_TREE_MAP: (state, index) => {
    state.charts[index].class.type = 'ct-chart__tree-map';
  },
  DG_ADD_OBJECT_CHART: (state, data) => {
    var chart = {
        class: {
          type: '',
          size: ''
        },
        data: data,
        options: {}
    };
    state.charts.push(chart);
  }
}

const actions = {
  createChart: (store, data) => {
    store.commit('DG_ADD_OBJECT_CHART', data)
  },
  assignLabel: (store, labels) => {
    store.commit('DG_CHANGE_LABEL', labels)
  },
  assignClass: (store, chart) => {
    store.commit('DG_CHANGE_CLASS',{size: chart.size, index: chart.index})
  },
  simpleLine: (store, index) => {
    store.commit('DG_CHANGE_TO_SIMPLE_LINE', index)
  },
  horizontalBar: (store, index) => {
    store.commit('DG_CHANGE_TO_HORIZONTAL_BAR', index)
  },
  pie: (store, index) => {
    store.commit('DG_CHANGE_TO_PIE', index)
  },
  treeMap: (store, index) => {
    store.commit('DG_CHANGE_TO_TREE_MAP', index)
  }
}

// getters for options diagrams
const getters = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
