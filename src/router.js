import Vue from 'vue'
import Router from 'vue-router'
import HelloWeex from '@/components/HelloWeex'
import SliderList from '@/components/SliderList'
Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWeex',
      component: SliderList
    },
    {
      path: '/slider',
      name: 'SliderList',
      component: HelloWeex
    }
  ]
})
