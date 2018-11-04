import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store/store'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.use(VeeValidate)

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
