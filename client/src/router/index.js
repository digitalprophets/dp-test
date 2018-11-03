import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Register from '../components/Register.vue'
import Products from '../components/Products.vue'
import Product from '../components/Product.vue'
import User from '../components/User.vue'

import Header from '../components/Header.vue'

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
    },
    {
      path: '/testing', name: 'header', component: Header, props: { header_content5: '' }
      // , props: { header_content1: 'govna' } TODO ANDRIJA msm sta reci ovo jos samo da dodam
    },
    {
      path: '/user', name: 'user', component: User
      // , props: { header_content1: 'govna' } TODO ANDRIJA msm sta reci ovo jos samo da dodam
    }
  ]
})
