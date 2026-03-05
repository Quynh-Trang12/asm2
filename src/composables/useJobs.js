/**
 * @file useJobs.js
 * @description Composable acting as the middleman between the UI and the Job Service.
 */

import { ref } from 'vue'
import { jobService } from '../services/jobService.js'

export function useJobs() {
  // Fetch all jobs once and hold them in state
  const jobs = ref(jobService.getAllJobs())

  // Helper method to grab a specific job
  const getJobById = (id) => {
    return jobService.getJobById(id)
  }

  return {
    jobs,
    getJobById,
  }
}
