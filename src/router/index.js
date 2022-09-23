import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
    path: '/Signin',
    name: 'Signin',
    component:() => import('../views/Signin.vue')
  },
  {
    path:'/Signup',
    name:'Signup',
    component: () => import('../views/Signup.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
