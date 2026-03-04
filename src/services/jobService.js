/**
 * @file jobService.js
 * @description Service layer for handling job-related data operations.
 * This abstracts the data source away from the UI components, ensuring
 * separation of concerns and making the application easier to test and scale.
 */

// Import the mock data we created in the previous step
import { jobsData } from '../assets/data/jobs.js'

export const jobService = {
  /**
   * Retrieves all available jobs.
   * In a real-world app, this would be an async function making an HTTP GET request.
   * * @returns {Array} An array of job objects.
   */
  getAllJobs() {
    return jobsData
  },

  /**
   * Retrieves a specific job by its unique ID.
   * * @param {string} id - The unique identifier of the job (e.g., 'MLA101').
   * @returns {Object|undefined} The job object if found, or undefined if not found.
   */
  getJobById(id) {
    // Array.prototype.find() returns the first element that satisfies the testing function
    return jobsData.find((job) => job.job_id === id)
  },
}
