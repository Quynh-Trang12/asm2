<template>
  <div class="list-group list-group-flush">
    <router-link
      to="/jobs"
      class="list-group-item list-group-item-action p-3 transition-all overview-link"
      exact-active-class="active shadow-sm"
    >
      <div class="d-flex align-items-center">
        <h6 class="mb-0 fw-bold w-100">Overview</h6>
      </div>
    </router-link>

    <JobListItem v-for="job in jobs" :key="job.job_id" :job="job" />
  </div>
</template>

<script setup>
/**
 * @file JobList.vue
 * @description Acts as the bridge between the job data and the UI sidebar.
 */

import JobListItem from './JobListItem.vue'
import { jobsData as jobs } from '../../assets/data/jobs.js'
</script>

<style scoped>
.transition-all {
  transition: all 0.2s ease-in-out;
}

/* WCAG AAA COMPLIANCE OVERRIDES */
.overview-link {
  background-color: #f8f9fa !important;
  color: #000000 !important;
  border-bottom: 2px solid #e9ecef !important;
}

.overview-link.active {
  background-color: #084298 !important;
  border-color: #084298 !important;
  color: #ffffff !important;
}

.overview-link h6 {
  color: inherit !important;
}
</style>
