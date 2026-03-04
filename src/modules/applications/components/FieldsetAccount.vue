<template>
  <fieldset class="mb-5 border p-4 rounded bg-light">
    <legend class="w-auto px-3 fw-bold text-primary h5">Account Details</legend>
    <div class="row g-3">
      <div class="col-md-6">
        <label for="username" class="form-label fw-bold">Username *</label>
        <input
          type="text"
          id="username"
          name="username"
          v-model="username"
          @blur="$emit('validate', 'username')"
          class="form-control"
          :class="{ 'is-invalid': errors.username }"
        />
        <div class="invalid-feedback">{{ errors.username }}</div>
      </div>

      <div class="col-md-6">
        <label for="email" class="form-label fw-bold">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          @blur="$emit('validate', 'email')"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
        />
        <div class="invalid-feedback">{{ errors.email }}</div>
      </div>

      <div class="col-md-6">
        <label for="password" class="form-label fw-bold">Password *</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          @blur="$emit('validate', 'password')"
          class="form-control"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
        <div class="form-text text-muted small">
          Min 8 characters, must include at least one special character ($, %, ^, &, *).
        </div>
      </div>

      <!-- We use @input here instead of @blur so it validates instantly
           as the user types to match the main password -->
      <div class="col-md-6">
        <label for="confirm_password" class="form-label fw-bold">Confirm Password *</label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          v-model="confirmPassword"
          @input="$emit('validate', 'confirmPassword')"
          class="form-control"
          :class="{ 'is-invalid': errors.confirmPassword }"
        />
        <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
/**
 * @file FieldsetAccount.vue
 * @description Encapsulates the Account Details section of the job application form.
 * Handles the UI for secure credentials while delegating logic to the parent.
 */

// Two-way data binding with the parent component
const username = defineModel('username')
const email = defineModel('email')
const password = defineModel('password')
const confirmPassword = defineModel('confirmPassword')

// Accept the errors object from the parent
defineProps({
  errors: {
    type: Object,
    required: true,
  },
})

// Emit validation triggers to the parent
defineEmits(['validate'])
</script>
