<template>
  <fieldset class="mb-4 p-4 border rounded bg-light">
    <legend class="visually-hidden">Address & Contact</legend>

    <div class="fw-bold text-primary h5 border-bottom border-primary border-opacity-25 pb-2 mb-3">
      Address & Contact
    </div>

    <div class="row g-3">
      <div class="col-12">
        <label for="street" class="form-label fw-bold small text-secondary">Street Address</label>
        <input
          type="text"
          id="street"
          name="street"
          v-model="street"
          @input="$emit('validate', 'street')"
          @blur="$emit('validate', 'street')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.street }"
          placeholder="Optional (Max 40 characters)"
          maxlength="40"
        />
        <div class="invalid-feedback">{{ errors.street }}</div>
      </div>

      <div class="col-md-4">
        <label for="suburb" class="form-label fw-bold small text-secondary">Suburb</label>
        <input
          type="text"
          id="suburb"
          name="suburb"
          v-model="suburb"
          @input="$emit('validate', 'suburb')"
          @blur="$emit('validate', 'suburb')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.suburb }"
          placeholder="Optional (Max 20 chars)"
          maxlength="20"
        />
        <div class="invalid-feedback">{{ errors.suburb }}</div>
      </div>

      <div class="col-md-4">
        <label for="postcode" class="form-label fw-bold small text-secondary">Postcode *</label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          v-model="postcode"
          @input="$emit('validate', 'postcode')"
          @blur="$emit('validate', 'postcode')"
          class="form-control form-control-lg fs-6"
          :class="{ 'is-invalid': errors.postcode }"
          placeholder="e.g., 3000"
          maxlength="4"
        />
        <div class="invalid-feedback">{{ errors.postcode }}</div>
      </div>

      <div class="col-md-4">
        <label for="mobile_visible" class="form-label fw-bold small text-secondary"
          >Mobile Number *</label
        >

        <input type="hidden" name="mobile" :value="'04' + (mobile || '')" />

        <div class="input-group input-group-lg has-validation">
          <span
            class="input-group-text bg-white fw-bold fs-6 border-end-0"
            :class="errors.mobile ? 'border-danger text-danger' : 'text-secondary'"
            id="mobile-prefix"
          >
            04
          </span>
          <input
            type="text"
            id="mobile_visible"
            v-model="mobile"
            @input="$emit('validate', 'mobile')"
            @blur="$emit('validate', 'mobile')"
            class="form-control fs-6 border-start-0"
            :class="{ 'is-invalid': errors.mobile }"
            placeholder="12 345 678"
            aria-describedby="mobile-prefix"
            maxlength="8"
          />
          <div class="invalid-feedback">{{ errors.mobile }}</div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
//-----------------------------------------------
// STATE & EMITS
//-----------------------------------------------
const street = defineModel('street')
const suburb = defineModel('suburb')
const postcode = defineModel('postcode')
const mobile = defineModel('mobile')

defineProps({ errors: { type: Object, required: true } })
defineEmits(['validate'])
</script>
