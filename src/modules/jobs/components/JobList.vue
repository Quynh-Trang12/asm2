<template>
  <div class="list-group list-group-flush">
    <router-link
      to="/jobs"
      class="list-group-item list-group-item-action p-3 transition-all overview-link"
      exact-active-class="active shadow-sm"
    >
      <div class="d-flex align-items-center">
        <h6 class="mb-0 fw-bold w-100">← Job Overview</h6>
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

/* WCAG AAA COMPLIANCE OVERRIDES
  WAVE is extremely strict. These colors guarantee passing contrast ratios.
*/

/* INACTIVE STATE: Pure black text on light gray background (Contrast Ratio ~ 18:1) */
.overview-link {
  background-color: #f8f9fa !important;
  color: #000000 !important;
  border-bottom: 2px solid #e9ecef !important;
}

/* ACTIVE STATE: Pure white text on Dark Blue background (Contrast Ratio ~ 8.6:1) */
.overview-link.active {
  background-color: #084298 !important; /* Much darker than Bootstrap's standard primary blue */
  border-color: #084298 !important;
  color: #ffffff !important;
}

/* Force the h6 tag inside the link to inherit these strict colors so the browser doesn't override them */
.overview-link h6 {
  color: inherit !important;
}
</style>
