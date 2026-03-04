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
      @validate="validateField"
    />

    <FieldsetAccount
      v-model:username="form.username"
      v-model:email="form.email"
      v-model:password="form.password"
      v-model:confirmPassword="form.confirmPassword"
      :errors="errors"
      @validate="validateField"
    />

    <FieldsetAddress
      v-model:street="form.street"
      v-model:suburb="form.suburb"
      v-model:postcode="form.postcode"
      v-model:mobile="form.mobile"
      :errors="errors"
      @validate="validateField"
    />

    <FieldsetPreferences
      v-model:category="form.category"
      :errors="errors"
      @validate="validateField"
    />

    <div class="mb-4 p-3 border rounded bg-white">
      <button type="button" class="btn btn-outline-secondary btn-sm" @click="toggleTerms">
        {{ showTerms ? 'Hide' : 'View' }} Terms and Conditions
      </button>

      <div v-show="showTerms" class="p-3 bg-light border rounded small text-muted mt-3">
        By submitting this application, you agree that all information provided is accurate and true
        to the best of your knowledge. You understand that false statements may result in
        disqualification from the hiring process. You also consent to Insight Hire processing your
        data in accordance with our Privacy Policy.
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
 * @description The "Smart Parent" component that orchestrates state and validation
 * for the job application, importing smaller layout micro-components.
 */

import { reactive, ref, computed } from 'vue'

import FieldsetPersonal from './FieldsetPersonal.vue'
import FieldsetAccount from './FieldsetAccount.vue'
import FieldsetAddress from './FieldsetAddress.vue'
import FieldsetPreferences from './FieldsetPreferences.vue'

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

const errors = reactive({
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

const hasErrors = computed(() => {
  return Object.values(errors).some((errorMsg) => errorMsg !== '')
})

//-----------------------------------------------
// TOGGLE LOGIC
//-----------------------------------------------
const toggleTerms = () => {
  showTerms.value = !showTerms.value
}

//-----------------------------------------------
// VALIDATION LOGIC
//-----------------------------------------------
const validateField = (field) => {
  const val = form[field]

  switch (field) {
    case 'firstName':
      if (!val) errors.firstName = 'First name is required.'
      else if (!/^[A-Za-z]+$/.test(val)) errors.firstName = 'First name must contain letters only.'
      else errors.firstName = ''
      break

    case 'lastName':
      if (!val) errors.lastName = 'Last name is required.'
      else if (!/^[A-Za-z]+$/.test(val)) errors.lastName = 'Last name must contain letters only.'
      else errors.lastName = ''
      break

    case 'username':
      if (!val) errors.username = 'Username is required.'
      else if (val.length < 3) errors.username = 'Username must be at least 3 characters.'
      else errors.username = ''
      break

    case 'password':
      if (!val) errors.password = 'Password is required.'
      else if (val.length < 8) errors.password = 'Password must be at least 8 characters.'
      else if (!/[$%^&*]/.test(val))
        errors.password = 'Must include at least one special character ($, %, ^, &, *).'
      else errors.password = ''

      if (form.confirmPassword) validateField('confirmPassword')
      break

    case 'confirmPassword':
      if (val !== form.password) errors.confirmPassword = 'Passwords do not match.'
      else errors.confirmPassword = ''
      break

    case 'email':
      if (!val) errors.email = 'Email is required.'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
        errors.email = 'Please enter a valid email format.'
      else errors.email = ''
      break

    case 'street':
      if (val.length > 40) errors.street = 'Street address cannot exceed 40 characters.'
      else errors.street = ''
      break

    case 'suburb':
      if (val.length > 20) errors.suburb = 'Suburb cannot exceed 20 characters.'
      else errors.suburb = ''
      break

    case 'postcode':
      if (!val) {
        errors.postcode = 'Postcode is required.'
      } else if (!/^\d{4}$/.test(val)) {
        errors.postcode = 'Must be exactly 4 numeric digits.'
      } else {
        errors.postcode = ''
      }
      break

    case 'mobile':
      if (!val) {
        errors.mobile = 'Mobile number is required.'
      }
      // Strictly checks that the user entered exactly 8 numbers (no letters or symbols)
      else if (!/^\d{8}$/.test(val)) {
        errors.mobile = 'Please enter exactly 8 numeric digits.'
      } else {
        errors.mobile = ''
      }
      break

    case 'dob':
      if (!val) {
        errors.dob = 'Date of Birth is required.'
      } else {
        const today = new Date()
        const birthDate = new Date(val)
        let age = today.getFullYear() - birthDate.getFullYear()
        const m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--
        }
        if (age < 16) errors.dob = 'You must be at least 16 years old.'
        else errors.dob = ''
      }
      break

    case 'category':
      if (!val) errors.category = 'Please select a preferred job category.'
      else errors.category = ''
      break
  }
}

//-----------------------------------------------
// SUBMISSION HANDLER
//-----------------------------------------------
const validateAndSubmit = (event) => {
  hasSubmissionAttempted.value = true
  isSuccess.value = false

  // Run validation on every single field
  Object.keys(form).forEach((key) => validateField(key))

  if (hasErrors.value) {
    // If errors exist, stop the submission immediately
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    // VERCEL DEPLOYMENT FIX
    event.preventDefault()
    isSuccess.value = true

    console.log('Form validated perfectly! Payload:', form)
    alert(
      'Success! The form is perfectly validated. (Network POST blocked for Vercel compatibility).',
    )
  }
}
</script>
