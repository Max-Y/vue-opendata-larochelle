import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/Hello'
import Counter from 'components/Counter'
import Diagrams from 'components/Diagrams'
import Home from 'components/Home'
import Map from 'components/Map'
import Graph from 'components/Graph'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/graph',
      name: 'graph',
      component: Graph
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/diagrams',
      name: 'diagrams',
      component: Diagrams
  },{
      path: '/home/:datatype/:categorie/:table',
      name: 'home',
      component: Home,
      props: true
  }]
})
