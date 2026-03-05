<template>
  <div class="job-explorer-container container my-3">
    <div class="row g-3">
      <aside class="col-12 col-md-4 col-lg-3">
        <div class="card shadow-sm border-0 h-100">
          <div class="card-header bg-primary text-white py-3">
            <h5 class="mb-0 fw-bold fs-6">Available Positions</h5>
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

import JobList from '../components/JobList.vue'
</script>

<style scoped>
.job-explorer-container {
  min-height: 70vh;
}
</style>
