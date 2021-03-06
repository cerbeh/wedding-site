import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy';
import axios from 'axios'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const prodUrl = 'https://martins-server.herokuapp.com/api/wedding-pictures';
const baseURL = process.env.NODE_ENV === 'development' ? '/api' : prodUrl;

const $axios = axios.create({
  headers,
  baseURL,
  withCredentials: false,
});

Vue.prototype.$http = $axios

import 'buefy/dist/buefy.css';

Vue.config.productionTip = false

Vue.use(Buefy);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
