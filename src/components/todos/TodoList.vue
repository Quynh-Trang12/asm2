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
 */

import TodoInput from './TodoInput.vue'
import TodoItem from './TodoItem.vue'

// Import our business logic layer
import { useTodos } from '../../../composables/useTodos.js'

//-----------------------------------------------
// STATE & LOGIC BINDING
//-----------------------------------------------
// Destructure exactly what we need from the composable
const { tasks, addTask, deleteTask, togglePriority } = useTodos()
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
