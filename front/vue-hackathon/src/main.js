// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('material-design-lite');
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMdl from 'vue-mdl'

Vue.use(VueMdl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
