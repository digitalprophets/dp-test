import Vue from 'vue'
import Shop from '../components/Shop.vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'

Vue.use(VueRouter)
// majke mu ga nabijem routave
// TODO VELJKO, ovde definisemo sve putanje, logicno..
export default new VueRouter({
  mode: 'history', // skini ono # u linku..
  base: __dirname,
  routes: [
    {
      path: '/', component: Main
    },
    {
      path: '/shop', name: 'shop', component: Shop 
      // path: '/shop:user:pass', name: 'shop', component: Shop // kad se salju parametri u url
    }
  ]
})
