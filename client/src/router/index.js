import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Register from '../components/Register.vue'
import Products from '../components/Products.vue'
import Product from '../components/Product.vue'

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
      path: '/register', name: 'register', component: Register
    },
    {
      path: '/products', name: 'products', component: Products 
      // path: '/shop:user:pass', name: 'shop', component: Shop // kad se salju parametri u url
    },
    {
      path: '/product', name: 'product', component: Product 
    }
  ]
})
