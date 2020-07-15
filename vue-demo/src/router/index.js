import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
      {
        path:'/',
        redirect:'/home/a'
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
        children:[
            {
              path:'a',
              name:'a',
              component:() => import('@/views/home/a')
            },
            {
              path:'b',
              name:'b',
              component:() => import('@/views/home/b')
            }
        ]
      }
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
