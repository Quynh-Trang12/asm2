<template>
  <li
    class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center p-3 p-md-4 gap-3 transition-all"
    :class="
      task.isHighPriority ? 'bg-warning bg-opacity-10 border-warning border-opacity-50' : 'bg-white'
    "
  >
    <div class="task-content">
      <span class="fw-medium fs-6" :class="{ 'fw-bold text-dark': task.isHighPriority }">
        {{ task.text }}
        <span :class="task.isHighPriority ? 'text-danger' : 'text-muted'">
          ({{ task.isHighPriority ? 'High Priority' : 'Low Priority' }})
        </span>
      </span>
    </div>

    <div class="task-actions d-flex gap-2">
      <button
        @click="$emit('toggle', task.id)"
        class="btn btn-sm fw-bold"
        :class="task.isHighPriority ? 'btn-outline-secondary' : 'btn-outline-warning'"
      >
        Mark as {{ task.isHighPriority ? 'Low' : 'High' }} Priority
      </button>

      <button @click="$emit('delete', task.id)" class="btn btn-sm btn-danger fw-bold">
        Delete
      </button>
    </div>
  </li>
</template>

<script setup>
/**
 * @file ToDoItem.vue
 * @description A presentational component rendering a single task row.
 */

//-----------------------------------------------
// PROPS & EMITS
//-----------------------------------------------
defineProps({
  task: {
    type: Object,
    required: true,
  },
})

defineEmits(['toggle', 'delete'])
</script>

<style scoped>
/* Adds a smooth fade when the background color changes on priority toggle */
.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>
