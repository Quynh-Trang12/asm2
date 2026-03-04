<template>
  <fieldset class="mb-5 border p-4 rounded bg-light">
    <legend class="w-auto px-3 fw-bold text-primary h5">Personal Information</legend>
    <div class="row g-3">
      <div class="col-md-6">
        <label for="first_name" class="form-label fw-bold">First Name *</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          v-model="firstName"
          @blur="$emit('validate', 'firstName')"
          class="form-control"
          :class="{ 'is-invalid': errors.firstName }"
        />
        <div class="invalid-feedback">{{ errors.firstName }}</div>
      </div>

      <div class="col-md-6">
        <label for="last_name" class="form-label fw-bold">Last Name *</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          v-model="lastName"
          @blur="$emit('validate', 'lastName')"
          class="form-control"
          :class="{ 'is-invalid': errors.lastName }"
        />
        <div class="invalid-feedback">{{ errors.lastName }}</div>
      </div>

      <div class="col-md-6">
        <label for="dob" class="form-label fw-bold">Date of Birth *</label>
        <input
          type="date"
          id="dob"
          name="dob"
          v-model="dob"
          @blur="$emit('validate', 'dob')"
          class="form-control"
          :class="{ 'is-invalid': errors.dob }"
        />
        <div class="invalid-feedback">{{ errors.dob }}</div>
        <div class="form-text">You must be at least 16 years old to apply.</div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
/**
 * @file FieldsetPersonal.vue
 * @description Encapsulates the Personal Information section of the job application form.
 * It manages its own UI but defers the actual validation logic back to the parent.
 */

// defineModel creates a two-way binding with the parent component natively.
// If the user types in the input, it automatically updates the parent's state!
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
const dob = defineModel('dob')

// Accept the errors object from the parent so we know when to highlight fields in red
defineProps({
  errors: {
    type: Object,
    required: true,
  },
})

// Emit an event to tell the parent to run its validation logic when the user clicks away (@blur)
defineEmits(['validate'])
</script>
