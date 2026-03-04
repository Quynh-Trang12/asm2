/**
 * @file router/index.js
 * @description The main router configuration for the Insight Hire application.
 * It utilizes nested routing for the Job Explorer module to maintain a persistent
 * sidebar while dynamically swapping the main content area.
 */

import { createRouter, createWebHistory } from 'vue-router'

// Import the main layout view for the jobs feature
import JobExplorer from '../modules/jobs/views/JobExplorer.vue'

const router = createRouter({
  // WebHistory provides clean URLs without the '#' symbol
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      // Automatically redirect the root URL to our Job Explorer
      path: '/',
      redirect: '/jobs',
    },
    {
      path: '/jobs',
      name: 'jobs-layout',
      component: JobExplorer,
      // The 'children' array is where the nested routing magic happens!
      children: [
        {
          // An empty path matches the parent exactly (i.e., exactly '/jobs')
          path: '',
          name: 'job-overview',
          // Route-level code-splitting (Lazy Loading)
          // This is an industry standard that makes the app load faster!
          component: () => import('../modules/jobs/components/JobOverview.vue'),
        },
        {
          // The ':id' is a dynamic parameter (e.g., '/jobs/MLA101')
          path: ':id',
          name: 'job-detail',
          // Lazy loading the detail component
          component: () => import('../modules/jobs/components/JobDetail.vue'),
        },
      ],
    },
    {
      path: '/apply',
      name: 'job-application',
      component: () => import('../modules/applications/views/ApplicationView.vue'),
    },
  ],
})

export default router
