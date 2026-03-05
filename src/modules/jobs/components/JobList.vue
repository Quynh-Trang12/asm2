<template>
  <div class="list-group list-group-flush">
    <router-link
      to="/jobs"
      class="list-group-item list-group-item-action p-3 transition-all bg-light text-dark"
      exact-active-class="active shadow-sm border-primary bg-primary text-white"
    >
      <div class="d-flex align-items-center">
        <h6 class="mb-0 fw-bold">← Job Overview</h6>
      </div>
    </router-link>

    <JobListItem v-for="job in jobs" :key="job.job_id" :job="job" />
  </div>
</template>

<script setup>
/**
 * @file JobList.vue
 * @description Acts as the bridge between the job data and the UI sidebar.
 * It retrieves the full array of available jobs from the application logic
 * and automatically generates a clickable list item for each one.
 */

import JobListItem from './JobListItem.vue'
import { useJobs } from '../../../composables/useJobs.js'

const { jobs } = useJobs()
</script>

<style scoped>
.transition-all {
  transition: all 0.2s ease-in-out;
}
/* Subtly separate the overview link from the job list */
.list-group-item.bg-light {
  border-bottom: 2px solid #e9ecef !important;
}
</style>
