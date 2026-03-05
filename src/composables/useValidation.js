/**
 * @file useValidation.js
 * @description A Vue composable handling all form validation logic.
 */

import { reactive, computed } from 'vue'
import { REGEX } from '../constants/regex.js'

export function useValidation() {
  //-----------------------------------------------
  // STATE
  //-----------------------------------------------
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

  const hasErrors = computed(() => {
    return Object.values(errors).some((errorMsg) => errorMsg !== '')
  })

  //-----------------------------------------------
  // LOGIC
  //-----------------------------------------------
  // We pass the entire form state in so we can compare fields (like passwords)
  const validateField = (field, val, formState) => {
    switch (field) {
      case 'firstName':
        if (!val) errors.firstName = 'First name is required.'
        else if (!REGEX.ALPHA_ONLY.test(val))
          errors.firstName = 'First name must contain letters only.'
        else errors.firstName = ''
        break

      case 'lastName':
        if (!val) errors.lastName = 'Last name is required.'
        else if (!REGEX.ALPHA_ONLY.test(val))
          errors.lastName = 'Last name must contain letters only.'
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
        else if (!REGEX.PASSWORD_SPECIAL_CHAR.test(val))
          errors.password = 'Must include at least one special character ($, %, ^, &, *).'
        else errors.password = ''

        if (formState.confirmPassword)
          validateField('confirmPassword', formState.confirmPassword, formState)
        break

      case 'confirmPassword':
        if (val !== formState.password) errors.confirmPassword = 'Passwords do not match.'
        else errors.confirmPassword = ''
        break

      case 'email':
        if (!val) errors.email = 'Email is required.'
        else if (!REGEX.EMAIL.test(val)) errors.email = 'Please enter a valid email format.'
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
        if (!val) errors.postcode = 'Postcode is required.'
        else if (!REGEX.NUMERIC_EXACT_4.test(val))
          errors.postcode = 'Must be exactly 4 numeric digits.'
        else errors.postcode = ''
        break

      case 'mobile':
        if (!val) errors.mobile = 'Mobile number is required.'
        else if (!REGEX.NUMERIC_EXACT_8.test(val))
          errors.mobile = 'Please enter exactly 8 numeric digits.'
        else errors.mobile = ''
        break

      case 'dob':
        if (!val) {
          errors.dob = 'Date of Birth is required.'
        } else {
          const today = new Date()
          const birthDate = new Date(val)
          let age = today.getFullYear() - birthDate.getFullYear()
          const m = today.getMonth() - birthDate.getMonth()
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--

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

  const validateAll = (formState) => {
    Object.keys(formState).forEach((key) => validateField(key, formState[key], formState))
  }

  return {
    errors,
    hasErrors,
    validateField,
    validateAll,
  }
}
