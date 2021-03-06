import Vue from 'vue'
import Demo from '@/demo.vue'
import { router } from '@/router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Demo)
}).$mount('#app');
