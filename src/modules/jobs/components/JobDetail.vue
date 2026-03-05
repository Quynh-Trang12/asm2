<template>
  <article v-if="job" class="job-detail card shadow-sm border-0 h-100">
    <div class="card-body p-4 p-md-5">
      <header class="mb-4 pb-4 border-bottom">
        <h2 class="card-title text-primary fw-bold mb-2">
          {{ job.job_title }}
          <span class="text-muted fs-5 fw-normal">({{ job.job_id }})</span>
        </h2>
        <h5 class="text-secondary mb-4">{{ job.company }}</h5>

        <div class="d-flex flex-wrap gap-2">
          <span class="badge bg-light text-secondary border px-3 py-2 fw-medium">{{
            job.category
          }}</span>
          <span class="badge bg-light text-secondary border px-3 py-2 fw-medium">{{
            job.employment_type
          }}</span>
          <span class="badge bg-light text-secondary border px-3 py-2 fw-medium">{{
            job.location
          }}</span>
        </div>
      </header>

      <section class="row g-3 mb-5">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border h-100">
            <p class="mb-1 small text-muted text-uppercase fw-bold tracking-wide">Salary Range</p>
            <p class="mb-0 fw-medium text-dark">{{ job.salary_range }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border h-100">
            <p class="mb-1 small text-muted text-uppercase fw-bold tracking-wide">Job Level</p>
            <p class="mb-0 fw-medium text-dark">{{ job.job_level }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border h-100">
            <p class="mb-1 small text-muted text-uppercase fw-bold tracking-wide">Positions</p>
            <p class="mb-0 fw-medium text-dark">{{ job.positions_available }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border h-100">
            <p class="mb-1 small text-muted text-uppercase fw-bold tracking-wide">Supervisor</p>
            <p class="mb-0 fw-medium text-dark">{{ job.supervisor }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border h-100">
            <p class="mb-1 small text-muted text-uppercase fw-bold tracking-wide">Start Date</p>
            <p class="mb-0 fw-medium text-dark">{{ job.start_date }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border border-primary-subtle h-100">
            <p class="mb-1 small text-primary text-uppercase fw-bold tracking-wide">Deadline</p>
            <p class="mb-0 fw-bold text-dark">{{ job.application_deadline }}</p>
          </div>
        </div>
      </section>

      <section>
        <h5 class="fw-bold text-dark mb-3">Description</h5>
        <p class="card-text text-secondary line-height-lg mb-5">{{ job.job_description }}</p>

        <h5 class="fw-bold text-dark mb-3">Required Skills</h5>
        <ul class="list-inline mb-5">
          <li v-for="skill in job.required_skills" :key="skill" class="list-inline-item mb-2">
            <span
              class="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 fw-medium"
            >
              {{ skill }}
            </span>
          </li>
        </ul>

        <h5 class="fw-bold text-dark mb-3">Preferred Qualifications</h5>
        <ul class="list-inline mb-4">
          <li
            v-for="qual in job.preferred_qualifications"
            :key="qual"
            class="list-inline-item mb-2"
          >
            <span
              class="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25 rounded-pill px-3 py-2 fw-medium"
            >
              {{ qual }}
            </span>
          </li>
        </ul>
      </section>

      <footer class="mt-5 pt-4 border-top text-end">
        <router-link to="/apply" class="btn btn-primary px-5 py-2 fw-bold shadow-sm">
          Apply for this Position
        </router-link>
      </footer>
    </div>
  </article>

  <div v-else class="alert alert-danger d-flex align-items-center p-4 shadow-sm h-100" role="alert">
    <div>
      <h5 class="alert-heading fw-bold mb-2">Position Not Found</h5>
      <p class="mb-0">
        We couldn't find a job matching the ID in the URL. Please select a valid position from the
        list on the left.
      </p>
    </div>
  </div>
</template>

<script setup>
/**
 * @file JobDetail.vue
 * @description Displays the full details of a specific job, powered by the useJobs composable.
 */

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useJobs } from '../../../composables/useJobs.js'

const route = useRoute()
const { getJobById } = useJobs()

const job = computed(() => {
  return getJobById(route.params.id)
})
</script>

<style scoped>
.line-height-lg {
  line-height: 1.8;
}
.tracking-wide {
  letter-spacing: 0.05em;
}
</style>
