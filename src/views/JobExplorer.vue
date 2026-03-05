<template>
  <div class="job-explorer-container container my-3">
    <div class="row g-3 align-items-start">
      <aside class="col-12 col-md-4 col-lg-3 sticky-sidebar">
        <div class="card shadow-sm border-0">
          <div class="card-header bg-primary text-white py-3">
            <h5 class="mb-0 fw-bold fs-6">Job Explorer</h5>
          </div>

          <JobList />
        </div>
      </aside>

      <main class="col-12 col-md-8 col-lg-9">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
/**
 * @file JobExplorer.vue
 * @description Main layout view. Strictly handles the page grid.
 */

import JobList from '../components/jobs/JobList.vue'
</script>

<style scoped>
.job-explorer-container {
  min-height: 70vh;
}

/* Sticky Sidebar Pattern */
.sticky-sidebar {
  position: sticky;
  top: 0; /* Keeps the sidebar perfectly in view as you scroll down long job descriptions */
  z-index: 10;
}
</style>
