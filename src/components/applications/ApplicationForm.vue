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
 * @description The ultimate "Smart Parent". It manages state and delegates validation
 * to the useValidation composable, leaving the UI exceptionally clean.
 */

import { reactive, ref } from 'vue'

// Import UI Modules
import FieldsetPersonal from './FieldsetPersonal.vue'
import FieldsetAccount from './FieldsetAccount.vue'
import FieldsetAddress from './FieldsetAddress.vue'
import FieldsetPreferences from './FieldsetPreferences.vue'

// Import Logic Layer
import { useValidation } from '../../../composables/useValidation.js'

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

// Extract state and methods from our composable
const { errors, hasErrors, validateField, validateAll } = useValidation()

//-----------------------------------------------
// LOGIC
//-----------------------------------------------
const toggleTerms = () => (showTerms.value = !showTerms.value)

// Wrapper function to pass the current value and the whole form state into the composable
const handleValidate = (field) => {
  validateField(field, form[field], form)
}

const validateAndSubmit = (event) => {
  hasSubmissionAttempted.value = true
  isSuccess.value = false

  // Run all logic through the composable
  validateAll(form)

  if (hasErrors.value) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    // Vercel deployment fix
    event.preventDefault()
    isSuccess.value = true
    console.log('Form perfectly validated!', form)
    alert('Success! The form is perfectly validated.')
  }
}
</script>
