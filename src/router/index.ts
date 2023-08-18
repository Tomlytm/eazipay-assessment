import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '../layouts/PublicLayout.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import EmployeeView from '../views/EmployeeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PublicLayout,
      children: [
        {path: '', component: HomeView}
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLayout,
      children:[
        {path: '', component: DashboardView}
      ]
    },
    {
      path: '/employee',
      name: 'employee',
      component: DashboardLayout,
      children:[
        {path: '', component: EmployeeView}
      ]
    }
  ]
})

export default router
