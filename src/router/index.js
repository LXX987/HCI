import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import view3D from '@/components/view3D'
import ShowModel from '@/components/ShowModel'
import gifvedio from '@/components/gifvedio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/view3D',
      name: 'view3D',
      component: view3D
    },
    {
      path: '/ShowModel',
      name: 'ShowModel',
      component: ShowModel
    },
    {
      path: '/',
      name: 'gifvedio',
      component: gifvedio
    }
  ]
})
