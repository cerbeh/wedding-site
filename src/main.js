import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy';
import { Plugin as VBreakpoint } from 'vue-breakpoint-component'

import 'buefy/dist/buefy.css';

Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(VBreakpoint)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
