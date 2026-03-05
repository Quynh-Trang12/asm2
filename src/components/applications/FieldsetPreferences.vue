<template>
  <fieldset class="mb-4 p-4 border rounded bg-light">
    <legend class="visually-hidden">Job Preferences</legend>

    <div class="fw-bold text-primary h5 border-bottom border-primary border-opacity-25 pb-2 mb-3">
      Job Preferences
    </div>

    <div class="row g-3">
      <div class="col-md-6">
        <label for="job_category" class="form-label fw-bold small text-secondary"
          >Preferred Job Category *</label
        >
        <select
          id="job_category"
          name="job_category"
          v-model="category"
          @change="$emit('validate', 'category')"
          class="form-select form-select-lg fs-6"
          :class="{ 'is-invalid': errors.category }"
        >
          <option value="" disabled>-- Please select --</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="Data Science">Data Science</option>
          <option value="Web Development">Web Development</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>
        <div class="invalid-feedback">{{ errors.category }}</div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
/**
 * @file FieldsetPreferences.vue
 * @description Encapsulates the Job Preferences section of the application form.
 */

//-----------------------------------------------
// STATE & EMITS
//-----------------------------------------------
const category = defineModel('category')

defineProps({
  errors: {
    type: Object,
    required: true,
  },
})

defineEmits(['validate'])
</script>
