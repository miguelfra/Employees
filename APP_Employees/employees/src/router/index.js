import Vue from 'vue'
import VueRouter from 'vue-router'
import employees from '../views/Employees.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'employees',
    component: employees
  },
  {
    path: '/newEmployee',
    name: 'newEmployee',
    component: () => import( '../views/NewEmployee.vue')
  },
  {
    path: '/editEmployee/:id',
    name: 'editEmployee',
    component: () => import( '../views/EditEmployee.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
