<template>
  <fieldset class="mb-4 p-4 border rounded bg-light">
    <legend class="visually-hidden">Personal Information</legend>

    <div class="fw-bold text-primary h5 border-bottom border-primary border-opacity-25 pb-2 mb-3">
      Personal Information
    </div>

    <div class="row g-3">
      <div class="col-md-6">
        <label for="first_name" class="form-label fw-bold small text-secondary">First Name *</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          v-model="firstName"
          @blur="$emit('validate', 'firstName')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.firstName }"
          placeholder="Enter your first name"
        />
        <div class="invalid-feedback">{{ errors.firstName }}</div>
      </div>

      <div class="col-md-6">
        <label for="last_name" class="form-label fw-bold small text-secondary">Last Name *</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          v-model="lastName"
          @blur="$emit('validate', 'lastName')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.lastName }"
          placeholder="Enter your last name"
        />
        <div class="invalid-feedback">{{ errors.lastName }}</div>
      </div>

      <div class="col-md-6">
        <label for="dob" class="form-label fw-bold small text-secondary">
          Date of Birth * <span class="fw-normal opacity-75">(Must be 16+)</span>
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          v-model="dob"
          @blur="$emit('validate', 'dob')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.dob }"
        />
        <div class="invalid-feedback">{{ errors.dob }}</div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
/**
 * @file FieldsetPersonal.vue
 * @description Encapsulates the Personal Information section of the application form.
 */

//-----------------------------------------------
// STATE & EMITS
//-----------------------------------------------
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
const dob = defineModel('dob')

defineProps({ errors: { type: Object, required: true } })
defineEmits(['validate'])
</script>
