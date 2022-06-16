import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import view3D from '@/components/view3D'
import ShowModel from '@/components/ShowModel'
import tonghe3D from '@/components/tonghe3D'
import ding3D from '@/components/ding3D'
import gifvedio from '@/components/gifvedio'
import TAIHEDIAN from '@/components/TAIHEDIAN'
import CReel from '@/components/CReel'
import taihepoint from '@/components/taihepoint'
import photo from '@/components/photo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo,
      meta:{
      	keepAlive:true
      }
    },
    {
      path: '/taihepoint',
      name: 'taigepoint',
      component: taihepoint
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
      path: '/tonghe3D',
      name: 'tonghe3D',
      component: tonghe3D,
      meta:{
      	keepAlive:true
      }
    },
    {
      path: '/ding3D',
      name: 'ding3D',
      component: ding3D,
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
      path: '/CReel',
      name: 'CReel',
      component: CReel,
      meta:{
      	keepAlive:true
      }
    },

  ]
})
