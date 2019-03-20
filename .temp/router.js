import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWeex from '@/components/HelloWeex'
import Slider from '@/components/Slider'
import List from '@/components/List'
import Loading from '@/components/Loading'
Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hiweex',
      name: 'HelloWeex',
      component: HelloWeex
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }
  ]
})
