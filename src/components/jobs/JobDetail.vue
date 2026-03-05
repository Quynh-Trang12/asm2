<template>
  <article v-if="job" class="job-detail card shadow-sm border-0 flex-grow-1">
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
            <p
              class="mb-1 small text-muted text-uppercase fw-bold tracking-wide responsive-heading"
            >
              Salary Range
            </p>
            <p class="mb-0 fw-medium text-dark responsive-text">{{ job.salary_range }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border h-100">
            <p
              class="mb-1 small text-muted text-uppercase fw-bold tracking-wide responsive-heading"
            >
              Job Level
            </p>
            <p class="mb-0 fw-medium text-dark responsive-text">{{ job.job_level }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border h-100">
            <p
              class="mb-1 small text-muted text-uppercase fw-bold tracking-wide responsive-heading"
            >
              Positions
            </p>
            <p class="mb-0 fw-medium text-dark responsive-text">{{ job.positions_available }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border h-100">
            <p
              class="mb-1 small text-muted text-uppercase fw-bold tracking-wide responsive-heading"
            >
              Supervisor
            </p>
            <p class="mb-0 fw-medium text-dark responsive-text">{{ job.supervisor }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border h-100">
            <p
              class="mb-1 small text-muted text-uppercase fw-bold tracking-wide responsive-heading"
            >
              Start Date
            </p>
            <p class="mb-0 fw-medium text-dark responsive-text">{{ job.start_date }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="p-3 bg-light rounded border border-primary-subtle h-100">
            <p
              class="mb-1 small text-primary text-uppercase fw-bold tracking-wide responsive-heading"
            >
              Deadline
            </p>
            <p class="mb-0 fw-bold text-dark responsive-text">{{ job.application_deadline }}</p>
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

  <div
    v-else
    class="alert alert-danger d-flex align-items-center p-4 shadow-sm flex-grow-1"
    role="alert"
  >
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
 * @description Displays the full details of a specific job by importing
 * directly from the hard-coded data file.
 */

import { computed } from 'vue'
import { useRoute } from 'vue-router'
// 1. Import the jobs array directly from your new assets folder
import { jobsData as jobs } from '../../assets/data/jobs.js'

const route = useRoute()

// 2. Replace the old getJobById function with a standard JavaScript array .find()
const job = computed(() => {
  return jobs.find((j) => j.job_id === route.params.id)
})
</script>

<style scoped>
.line-height-lg {
  line-height: 1.8;
}
.tracking-wide {
  letter-spacing: 0.05em;
}

/* RESPONSIVE TYPOGRAPHY FOR TABLETS */
@media (max-width: 991.98px) {
  .responsive-text {
    font-size: 0.9rem; /* Shrinks the text slightly to prevent awkward line breaks */
  }
  .responsive-heading {
    font-size: 0.75rem;
  }
}
</style>
