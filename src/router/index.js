/**
 * @file router/index.js
 * @description The main router configuration for the Insight Hire application.
 * It utilizes nested routing for the Job Explorer module to maintain a persistent
 * sidebar while dynamically swapping the main content area.
 */

import { createRouter, createWebHistory } from 'vue-router'

// Import the main layout view for the jobs feature from the new views folder
import JobExplorer from '../views/JobExplorer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      redirect: '/jobs',
    },
    {
      path: '/jobs',
      name: 'jobs-layout',
      component: JobExplorer,
      children: [
        {
          path: '',
          name: 'job-overview',
          // Lazy loading from the new components folder
          component: () => import('../components/jobs/JobOverview.vue'),
        },
        {
          path: ':id',
          name: 'job-detail',
          component: () => import('../components/jobs/JobDetail.vue'),
        },
      ],
    },
    {
      path: '/apply',
      name: 'job-application',
      // Pointing to the new views folder
      component: () => import('../views/ApplicationView.vue'),
    },
    {
      path: '/todos',
      name: 'todo-list',
      // Pointing to the new views folder
      component: () => import('../views/TodosView.vue'),
    },
  ],
})

export default router
