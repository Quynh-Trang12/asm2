<template>
  <div class="todo-input mb-4">
    <label for="new_task" class="form-label fw-bold text-primary h5 mb-3"> Enter a new task </label>

    <div class="input-group input-group-lg shadow-sm">
      <input
        type="text"
        id="new_task"
        v-model="newTaskText"
        @keyup.enter="submitTask"
        class="form-control fs-6 border-primary border-opacity-25"
        placeholder="e.g., Update resume and LinkedIn profile"
      />
      <button
        @click="submitTask"
        class="btn btn-primary px-4 fw-bold"
        type="button"
        :disabled="!newTaskText.trim()"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup>
/**
 * @file ToDoInput.vue
 * @description A purely presentational component for capturing new tasks.
 */

import { ref } from 'vue'

//-----------------------------------------------
// STATE & EMITS
//-----------------------------------------------
const newTaskText = ref('')
const emit = defineEmits(['add'])

//-----------------------------------------------
// METHODS
//-----------------------------------------------
const submitTask = () => {
  // Prevent empty submissions
  if (newTaskText.value.trim()) {
    // Tell the parent component to add the task, then clear the input box
    emit('add', newTaskText.value)
    newTaskText.value = ''
  }
}
</script>
