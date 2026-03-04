<template>
  <article v-if="job" class="job-detail card shadow-sm border-0">
    <div class="card-body p-4 p-md-5">
      <header class="mb-4 border-bottom pb-3">
        <h2 class="card-title text-primary fw-bold mb-1">
          {{ job.job_title }}
          <span class="text-muted fs-5">({{ job.job_id }})</span>
        </h2>
        <h5 class="text-secondary mb-3">{{ job.company }}</h5>

        <div class="d-flex flex-wrap gap-2">
          <span class="badge bg-info text-dark">{{ job.category }}</span>
          <span class="badge bg-secondary">{{ job.employment_type }}</span>
          <span class="badge bg-light text-dark border">{{ job.location }}</span>
        </div>
      </header>

      <section class="row mb-4">
        <div class="col-md-6 mb-3 mb-md-0">
          <p class="mb-1"><strong>Salary Range:</strong> {{ job.salary_range }}</p>
          <p class="mb-1"><strong>Job Level:</strong> {{ job.job_level }}</p>
          <p class="mb-1"><strong>Positions Available:</strong> {{ job.positions_available }}</p>
        </div>
        <div class="col-md-6">
          <p class="mb-1"><strong>Supervisor:</strong> {{ job.supervisor }}</p>
          <p class="mb-1"><strong>Start Date:</strong> {{ job.start_date }}</p>
          <p class="mb-1">
            <strong>Application Deadline:</strong>
            <span class="text-danger fw-bold">{{ job.application_deadline }}</span>
          </p>
        </div>
      </section>

      <section>
        <h5 class="fw-bold mt-4">Description</h5>
        <p class="card-text text-secondary line-height-lg">{{ job.job_description }}</p>

        <h5 class="fw-bold mt-4">Required Skills</h5>
        <ul class="list-inline mb-3">
          <li v-for="skill in job.required_skills" :key="skill" class="list-inline-item">
            <span class="badge bg-primary rounded-pill px-3">{{ skill }}</span>
          </li>
        </ul>

        <h5 class="fw-bold mt-4">Preferred Qualifications</h5>
        <ul class="list-inline">
          <li v-for="qual in job.preferred_qualifications" :key="qual" class="list-inline-item">
            <span class="badge bg-success rounded-pill px-3">{{ qual }}</span>
          </li>
        </ul>
      </section>

      <footer class="mt-5 text-end">
        <router-link to="/apply" class="btn btn-primary px-4 py-2 fw-bold"> Apply Now </router-link>
      </footer>
    </div>
  </article>

  <div v-else class="alert alert-danger d-flex align-items-center" role="alert">
    <div>
      <h4 class="alert-heading">Job Not Found</h4>
      <p class="mb-0">
        We couldn't find a job matching the ID in the URL. Please select a valid job from the list
        on the left.
      </p>
    </div>
  </div>
</template>

<script setup>
/**
 * @file JobDetail.vue
 * @description Displays the full details of a specific job.
 * It reactively responds to route parameter changes to fetch the correct data.
 */

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { jobService } from '../../../services/jobService.js'

// useRoute gives us access to the current URL parameters
const route = useRoute()

/**
 * We use a computed property here instead of a static variable.
 * Why? If the user is viewing MLA101 and clicks DSC202 on the sidebar,
 * the component doesn't destroy and recreate itself; only the URL changes.
 * 'computed' watches the route.params.id and automatically re-fetches the
 * correct job whenever the ID changes!
 */
const job = computed(() => {
  // Pass the ID from the URL (e.g., 'MLA101') to our service layer
  return jobService.getJobById(route.params.id)
})
</script>

<style scoped>
.line-height-lg {
  line-height: 1.7;
}
/* A subtle hover effect on badges makes the UI feel interactive */
.badge {
  font-size: 0.85em;
  padding: 0.5em 0.75em;
}
</style>
