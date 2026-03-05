<template>
  <div class="list-group list-group-flush">
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

// Fetch the data from our logic layer
const { jobs } = useJobs()
</script>
