<template>
  <nav class="job-list-nav" aria-label="Job Explorer Navigation">
    <div class="list-group shadow-sm">
      <router-link
        to="/jobs"
        class="list-group-item list-group-item-action fw-bold text-primary"
        exact-active-class="active text-white"
      >
        Overview
      </router-link>

      <router-link
        v-for="job in jobs"
        :key="job.job_id"
        :to="`/jobs/${job.job_id}`"
        class="list-group-item list-group-item-action"
        active-class="active text-white"
      >
        {{ job.job_id }} - {{ job.job_title }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
/**
 * @file JobList.vue
 * @description Renders the sidebar navigation for the Job Explorer.
 * It interacts with the jobService to retrieve data, keeping the template clean.
 */

import { ref, onMounted } from 'vue'
import { jobService } from '../../../services/jobService.js'

// We store the jobs in a reactive 'ref'. Even though our current data is static,
// using 'ref' ensures our component is perfectly prepared for future API calls.
const jobs = ref([])

// onMounted is a Vue Lifecycle Hook. It runs exactly when the component is added to the screen.
// This is the industry-standard place to fetch data.
onMounted(() => {
  jobs.value = jobService.getAllJobs()
})
</script>

<style scoped>
/* We add a slight hover effect to make the UI feel responsive and premium.
  Bootstrap handles most of the styling, but scoped CSS lets us add final touches.
*/
.list-group-item {
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

/* We truncate long job titles so they don't break the sidebar layout on smaller screens */
.list-group-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
