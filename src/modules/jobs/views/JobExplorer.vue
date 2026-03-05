<template>
  <div class="job-explorer container-fluid my-4">
    <div class="row gx-4">
      <aside class="col-12 col-lg-4 mb-4 mb-lg-0">
        <div class="card shadow-sm border-0 h-100">
          <div class="card-header bg-primary text-white py-3">
            <h5 class="mb-0 fw-bold">Available Positions</h5>
          </div>
          <div class="list-group list-group-flush">
            <JobListItem v-for="job in jobs" :key="job.job_id" :job="job" />
          </div>
        </div>
      </aside>

      <main class="col-12 col-lg-8">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
/**
 * @file JobExplorer.vue
 * @description Main layout for the Jobs module. Now utilizes composables and micro-components.
 */

// Import the micro-component
import JobListItem from '../components/JobListItem.vue'

// Import our new composable instead of the raw service
import { useJobs } from '../../../composables/useJobs.js'

// Destructure the jobs array perfectly from the logic layer
const { jobs } = useJobs()
</script>

<style scoped>
/* 'scoped' means these styles will ONLY apply to this specific component,
  preventing CSS conflicts across your application.
*/
.job-explorer-container {
  /* Ensures the container has a minimum height so it looks good even when empty */
  min-height: 70vh;
}
</style>
