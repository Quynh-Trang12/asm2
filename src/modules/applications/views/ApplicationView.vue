<template>
  <div class="application-view container my-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <header class="mb-4 text-center">
          <h2 class="fw-bold text-primary">Job Application</h2>
          <p class="text-muted">
            Please fill out the form below to apply for a position. All required fields must be
            completed correctly before submission.
          </p>
        </header>

        <main>
          <ApplicationForm />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * @file ApplicationView.vue
 * @description The main page layout for the Job Application feature.
 * It centers the content and wraps the complex form component.
 */

// Import the ApplicationForm component
import ApplicationForm from '../components/ApplicationForm.vue'
</script>

<style scoped>
/* A little extra padding at the bottom ensures the footer doesn't hug the form too tightly */
.application-view {
  padding-bottom: 3rem;
}
</style>
