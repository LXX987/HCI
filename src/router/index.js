import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import view3D from '@/components/view3D'
import ShowModel from '@/components/ShowModel'
import gifvedio from '@/components/gifvedio'
import TAIHEDIAN from '@/components/TAIHEDIAN'
import supplierAllBack from '@/components/supplierAllBack'
import CReel from '@/components/CReel'

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
      component: view3D,
      meta:{
      	keepAlive:true
      }
    },
    {
      path: '/ShowModel',
      name: 'ShowModel',
      component: ShowModel,
      meta:{
      	keepAlive:true
      }
    },
    {
      path: '/',
      name: 'gifvedio',
      component: gifvedio
    },
    {
      path: '/TAIHEDIAN',
      name: 'TAIHEDIAN',
      component: TAIHEDIAN
    },
    {
      path: '/supplierAllBack',
      name: 'supplierAllBack',
      component: supplierAllBack
    },
    {
      path: '/CReel',
      name: 'CReel',
      component: CReel
    },

  ]
})
