<template>
  <div class="job-explorer-container container my-4">
    <div class="row">
      <aside class="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
        <div class="card shadow-sm border-0 h-100">
          <div class="card-header bg-primary text-white py-3">
            <h5 class="mb-0 fw-bold fs-6">Available Positions</h5>
          </div>
          <div class="list-group list-group-flush">
            <JobListItem v-for="job in jobs" :key="job.job_id" :job="job" />
          </div>
        </div>
      </aside>

      <main class="col-12 col-md-8 col-lg-9">
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
.job-explorer-container {
  min-height: 70vh;
}
</style>
