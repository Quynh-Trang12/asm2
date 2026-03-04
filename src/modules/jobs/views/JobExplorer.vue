<template>
  <div class="job-explorer-container container my-4">
    <div class="row">
      <aside class="col-12 col-md-3 mb-4 mb-md-0">
        <JobList />
      </aside>

      <main class="col-12 col-md-9">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
/**
 * @file JobExplorer.vue
 * @description The main layout view for the Job Explorer feature.
 * It strictly separates the layout logic from the data rendering logic.
 */

// Import the JobList component so we can use it in the template above
import JobList from '../components/JobList.vue'
</script>

<style scoped>
/* 'scoped' means these styles will ONLY apply to this specific component,
  preventing CSS conflicts across your application.
*/
.job-explorer-container {
  /* Ensures the container has a minimum height so it looks good even when empty */
  min-height: 70vh;
}
</style>
