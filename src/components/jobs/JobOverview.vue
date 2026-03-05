<template>
  <article class="job-overview card shadow-sm flex-grow-1">
    <div class="card-body p-4 p-md-5">
      <h2 class="card-title text-primary mb-4 fw-bold">Job Overview</h2>

      <p class="card-text lead text-secondary">
        Insight Hire connects passionate individuals with exciting opportunities in the fields of
        Artificial Intelligence, Data Science, Cybersecurity, and Software Development...
      </p>

      <p class="card-text mt-3">
        Whether you're a student looking to break into the tech industry, a researcher aiming to
        apply machine learning in real-world contexts, or a developer seeking your next challenge...
      </p>

      <div class="alert alert-primary mt-4 mb-0" role="alert">
        Our team is dedicated to promoting meaningful employment by highlighting roles that provide
        mentorship, skill development, and long-term impact...
      </div>
    </div>
  </article>
</template>

<script setup>
/**
 * @file JobOverview.vue
 * @description Displays the static welcome text for the Job Explorer section.
 * As a purely presentational component, it has no reactive state or logic,
 * making it incredibly fast to render and highly decoupled.
 */
</script>

<style scoped>
.job-overview {
  border: none;
  border-top: 5px solid #0d6efd;
  border-radius: 0.5rem;
}
.card-text {
  line-height: 1.7;
}
</style>
