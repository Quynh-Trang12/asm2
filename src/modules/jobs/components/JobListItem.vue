<template>
  <router-link
    :to="`/jobs/${job.job_id}`"
    class="job-list-item list-group-item list-group-item-action p-3 transition-all"
    active-class="active shadow-sm border-primary text-white"
  >
    <h6 class="mb-1 fw-bold">{{ job.job_id }} - {{ job.job_title }}</h6>

    <div class="d-flex justify-content-between align-items-center mt-2">
      <small :class="$route.params.id === job.job_id ? 'text-white' : 'text-secondary'">
        {{ job.company }}
      </small>
      <span
        class="badge"
        :class="$route.params.id === job.job_id ? 'bg-light text-primary' : 'bg-primary'"
      >
        {{ job.employment_type }}
      </span>
    </div>
  </router-link>
</template>

<script setup>
/**
 * @file JobListItem.vue
 * @description A micro-component representing a single selectable job card in the sidebar.
 */

defineProps({
  job: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.transition-all {
  transition: all 0.2s ease-in-out;
}
.job-list-item:hover:not(.active) {
  background-color: #f8f9fa;
  transform: translateX(4px);
}
</style>
