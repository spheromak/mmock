import Vue from 'vue'
import Router from 'vue-router'
import RealTimeActivity from './pages/RealTimeActivity.vue'
import Search from './pages/Search.vue'
import Mapping from './pages/Mapping.vue'
import Recording from './pages/Recording.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'RealTimeActivity',
      component: RealTimeActivity
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/mapping',
      name: 'Mapping',
      component: Mapping
    },
    {
      path: '/recording',
      name: 'Recording',
      component: Recording
    }
  ]
})
