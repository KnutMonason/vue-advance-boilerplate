import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/views/Index/Index.vue'
import StartPage from '@/views/start.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: IndexPage },
    { path: '/start', name: 'start', component: StartPage },
    { path: '*', redirect: { name: 'index' } }

  ]
})
