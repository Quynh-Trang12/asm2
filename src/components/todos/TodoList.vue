<template>
  <div class="todo-list-container bg-white p-4 p-md-5 rounded shadow-sm border">
    <TodoInput @add="addTask" />

    <div class="mt-5">
      <h5 class="fw-bold text-secondary mb-3 border-bottom pb-2">Your Tasks</h5>

      <ul v-if="tasks.length > 0" class="list-group shadow-sm">
        <TransitionGroup name="list">
          <TodoItem
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @toggle="togglePriority"
            @delete="deleteTask"
          />
        </TransitionGroup>
      </ul>

      <div v-else class="text-center p-5 bg-light rounded border border-dashed">
        <p class="text-muted mb-0">No tasks remaining. You are all caught up!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * @file TodoList.vue
 * @description The "Smart Parent" orchestrating the To-Do List functionality.
 * The logic has been refactored directly into the component using Vue's Composition API.
 */

import { ref } from 'vue'
import TodoInput from './TodoInput.vue'
import TodoItem from './TodoItem.vue'

//-----------------------------------------------
// STATE & LOGIC
//-----------------------------------------------

// Reactive array to hold our tasks
const tasks = ref([])

// Adds a new task to the beginning of the array
const addTask = (taskText) => {
  if (!taskText || !taskText.trim()) return

  tasks.value.unshift({
    id: Date.now(), // Simple way to generate a unique ID
    text: taskText,
    isHighPriority: false, // Default to Low Priority based on standard behavior
  })
}

// Removes a task by its ID
const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}

// Toggles the priority of a specific task
const togglePriority = (id) => {
  const task = tasks.value.find((task) => task.id === id)
  if (task) {
    task.isHighPriority = !task.isHighPriority
  }
}
</script>

<style scoped>
/* Vue TransitionGroup animations.
  This gives the list a premium, app-like feel when adding/removing tasks.
*/
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.border-dashed {
  border-style: dashed !important;
}
</style>
