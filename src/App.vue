<template>
  <div id="app">
    <header class="bg-dark text-white p-3 mb-4 shadow-sm">
      <div
        class="container d-flex flex-column flex-md-row justify-content-between align-items-center"
      >
        <h1 class="h3 mb-3 mb-md-0 fw-bold d-flex align-items-center">
          <span class="text-primary me-2">Insight</span>Hire
        </h1>

        <nav class="d-flex gap-3 gap-md-4">
          <router-link
            to="/jobs"
            class="text-white text-decoration-none"
            active-class="fw-bold border-bottom border-primary border-3 pb-1"
          >
            Job Explorer
          </router-link>

          <router-link
            to="/apply"
            class="text-white text-decoration-none"
            active-class="fw-bold border-bottom border-primary border-3 pb-1"
          >
            Job Application
          </router-link>

          <router-link
            to="/todos"
            class="text-white text-decoration-none"
            active-class="fw-bold border-bottom border-primary border-3 pb-1"
          >
            To-Do List
          </router-link>
        </nav>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="text-center text-muted mt-5 py-4 border-top">
      <small>&copy; 2025 Insight Hire. All rights reserved.</small>
    </footer>
  </div>
</template>

<script setup>
/**
 * @file App.vue
 * @description The root component of the application.
 * It provides the global layout (header/footer) and a <router-view>
 * for rendering feature modules.
 */
</script>

<style>
/* Global styles can go here, but Bootstrap handles most of what we need.
   We keep it clean! */
body {
  background-color: #f8f9fa; /* Very light gray to make white cards pop */
}
</style>
