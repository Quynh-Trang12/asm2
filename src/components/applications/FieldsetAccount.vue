<template>
  <fieldset class="mb-4 p-4 border rounded bg-light">
    <legend class="visually-hidden">Account Details</legend>

    <div class="fw-bold text-primary h5 border-bottom border-primary border-opacity-25 pb-2 mb-3">
      Account Details
    </div>

    <div class="row g-3">
      <div class="col-md-6">
        <label for="username" class="form-label fw-bold small text-secondary">Username *</label>
        <input
          type="text"
          id="username"
          name="username"
          v-model="username"
          @blur="$emit('validate', 'username')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.username }"
          placeholder="Choose a username"
        />
        <div class="invalid-feedback">{{ errors.username }}</div>
      </div>

      <div class="col-md-6">
        <label for="email" class="form-label fw-bold small text-secondary">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          @blur="$emit('validate', 'email')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.email }"
          placeholder="name@example.com"
        />
        <div class="invalid-feedback">{{ errors.email }}</div>
      </div>

      <div class="col-md-6">
        <label for="password" class="form-label fw-bold small text-secondary">Password *</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          @blur="$emit('validate', 'password')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.password }"
          placeholder="Min 8 chars, incl. 1 special ($, %, ^, &, *)"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>

      <div class="col-md-6">
        <label for="confirm_password" class="form-label fw-bold small text-secondary"
          >Confirm Password *</label
        >
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          v-model="confirmPassword"
          @input="$emit('validate', 'confirmPassword')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.confirmPassword }"
          placeholder="Re-enter password"
        />
        <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
/**
 * @file FieldsetAccount.vue
 * @description Encapsulates the Account Details section of the application form.
 */

//-----------------------------------------------
// STATE & EMITS
//-----------------------------------------------
const username = defineModel('username')
const email = defineModel('email')
const password = defineModel('password')
const confirmPassword = defineModel('confirmPassword')

defineProps({ errors: { type: Object, required: true } })
defineEmits(['validate'])
</script>
