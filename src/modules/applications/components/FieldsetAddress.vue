<template>
  <fieldset class="mb-5 border p-4 rounded bg-light">
    <legend class="w-auto px-3 fw-bold text-primary h5">Address & Contact</legend>
    <div class="row g-3">
      <div class="col-12">
        <label for="street" class="form-label fw-bold">Street Address</label>
        <input
          type="text"
          id="street"
          name="street"
          v-model="street"
          @blur="$emit('validate', 'street')"
          class="form-control"
          :class="{ 'is-invalid': errors.street }"
        />
        <div class="invalid-feedback">{{ errors.street }}</div>
        <div class="form-text text-muted small">Optional, maximum 40 characters.</div>
      </div>

      <div class="col-md-4">
        <label for="suburb" class="form-label fw-bold">Suburb</label>
        <input
          type="text"
          id="suburb"
          name="suburb"
          v-model="suburb"
          @blur="$emit('validate', 'suburb')"
          class="form-control"
          :class="{ 'is-invalid': errors.suburb }"
        />
        <div class="invalid-feedback">{{ errors.suburb }}</div>
        <div class="form-text text-muted small">Optional, maximum 20 characters.</div>
      </div>

      <div class="col-md-4">
        <label for="postcode" class="form-label fw-bold">Postcode *</label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          v-model="postcode"
          @blur="$emit('validate', 'postcode')"
          class="form-control"
          :class="{ 'is-invalid': errors.postcode }"
        />
        <div class="invalid-feedback">{{ errors.postcode }}</div>
      </div>

      <div class="col-md-4">
        <label for="mobile" class="form-label fw-bold">Mobile Number *</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          v-model="mobile"
          @blur="$emit('validate', 'mobile')"
          class="form-control"
          :class="{ 'is-invalid': errors.mobile }"
          placeholder="04..."
        />
        <div class="invalid-feedback">{{ errors.mobile }}</div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
/**
 * @file FieldsetAddress.vue
 * @description Encapsulates the Address section of the job application form.
 */

// Two-way data binding with the parent component
const street = defineModel('street')
const suburb = defineModel('suburb')
const postcode = defineModel('postcode')
const mobile = defineModel('mobile')

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
