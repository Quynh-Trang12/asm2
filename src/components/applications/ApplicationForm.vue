<template>
  <form
    method="post"
    action="http://mercury.swin.edu.au/it000000/formtest.php"
    @submit="validateAndSubmit"
    class="application-form bg-white p-4 p-md-5 rounded shadow-sm border"
    novalidate
  >
    <FieldsetPersonal
      v-model:firstName="form.firstName"
      v-model:lastName="form.lastName"
      v-model:dob="form.dob"
      :errors="errors"
      @validate="handleValidate"
    />

    <FieldsetAccount
      v-model:username="form.username"
      v-model:email="form.email"
      v-model:password="form.password"
      v-model:confirmPassword="form.confirmPassword"
      :errors="errors"
      @validate="handleValidate"
    />

    <FieldsetAddress
      v-model:street="form.street"
      v-model:suburb="form.suburb"
      v-model:postcode="form.postcode"
      v-model:mobile="form.mobile"
      :errors="errors"
      @validate="handleValidate"
    />

    <FieldsetPreferences
      v-model:category="form.category"
      :errors="errors"
      @validate="handleValidate"
    />

    <div class="mb-4 p-3 border rounded bg-white">
      <button type="button" class="btn btn-outline-secondary btn-sm" @click="toggleTerms">
        {{ showTerms ? 'Hide' : 'View' }} Terms and Conditions
      </button>
      <div v-show="showTerms" class="p-3 bg-light border rounded small text-muted mt-2">
        By submitting this application, you agree that all information provided is accurate and true
        to the best of your knowledge.
      </div>
    </div>

    <div class="d-flex align-items-center gap-3 mt-4">
      <button type="submit" class="btn btn-primary px-5 py-2 fw-bold shadow-sm">
        Submit Application
      </button>
      <span v-if="hasSubmissionAttempted && hasErrors" class="text-danger fw-bold">
        Please fix the highlighted errors above.
      </span>
      <span v-if="isSuccess" class="text-success fw-bold">
        Application validated successfully!
      </span>
    </div>
  </form>
</template>

<script setup>
/**
 * @file ApplicationForm.vue
 * @description The ultimate "Smart Parent". It manages state and handles validation
 * internally using standard Vue Composition API and centralized RegEx patterns.
 */

import { reactive, ref, computed } from 'vue'

// Import UI Modules
import FieldsetPersonal from './FieldsetPersonal.vue'
import FieldsetAccount from './FieldsetAccount.vue'
import FieldsetAddress from './FieldsetAddress.vue'
import FieldsetPreferences from './FieldsetPreferences.vue'

// Import Centralized RegEx Rules from the new constants folder
import { REGEX } from '../../constants/regex.js'

//-----------------------------------------------
// STATE MANAGEMENT
//-----------------------------------------------
const form = reactive({
  firstName: '',
  lastName: '',
  dob: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  street: '',
  suburb: '',
  postcode: '',
  mobile: '',
  category: '',
})

const showTerms = ref(false)
const hasSubmissionAttempted = ref(false)
const isSuccess = ref(false)

// Validation State
const errors = reactive({})
const hasErrors = computed(() => Object.keys(errors).length > 0)

//-----------------------------------------------
// VALIDATION LOGIC
//-----------------------------------------------

const validateField = (field, value, formState) => {
  // Clear the error for this field before re-evaluating
  delete errors[field]

  // Check if the field is empty
  if (!value || (typeof value === 'string' && !value.trim())) {
    errors[field] = 'This field is required.'
    return
  }

  // Apply specific RegEx rules based on the field name
  switch (field) {
    case 'firstName':
    case 'lastName':
      if (!REGEX.ALPHA_ONLY.test(value)) {
        errors[field] = 'Must contain letters only.'
      }
      break
    case 'email':
      if (!REGEX.EMAIL.test(value)) {
        errors[field] = 'Please enter a valid email address.'
      }
      break
    case 'password':
      if (!REGEX.PASSWORD_SPECIAL_CHAR.test(value)) {
        errors[field] = 'Must contain at least one special character ($%^&*).'
      }
      break
    case 'confirmPassword':
      if (value !== formState.password) {
        errors[field] = 'Passwords do not match.'
      }
      break
    case 'postcode':
      if (!REGEX.NUMERIC_EXACT_4.test(value)) {
        errors[field] = 'Postcode must be exactly 4 digits.'
      }
      break
    case 'mobile':
      if (!REGEX.NUMERIC_EXACT_8.test(value)) {
        errors[field] = 'Mobile suffix must be exactly 8 digits.'
      }
      break
  }
}

const validateAll = (formState) => {
  // Loop through every field in the form and run the validation
  Object.keys(formState).forEach((field) => {
    validateField(field, formState[field], formState)
  })
}

//-----------------------------------------------
// UI INTERACTION LOGIC
//-----------------------------------------------
const toggleTerms = () => (showTerms.value = !showTerms.value)

// Wrapper function called by child fieldsets on blur/input
const handleValidate = (field) => {
  validateField(field, form[field], form)
}

const validateAndSubmit = (event) => {
  hasSubmissionAttempted.value = true
  isSuccess.value = false

  // Trigger full form validation
  validateAll(form)

  if (hasErrors.value) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    // Prevent default form submission to mercury server during local Vercel test
    event.preventDefault()
    isSuccess.value = true
    console.log('Form perfectly validated!', form)
    alert('Success! The form is perfectly validated.')
  }
}
</script>
