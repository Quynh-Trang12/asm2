<template>
  <div class="todos-view container my-5">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <header class="mb-4 text-center">
          <h2 class="fw-bold text-primary">To-Do List</h2>
          <p class="text-muted">Manage your application tasks and priorities efficiently.</p>
        </header>

        <main>
          <TodoList />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * @file ToDosView.vue
 * @description The main page layout for the To-Do List feature.
 */
import TodoList from '../components/TodoList.vue'
</script>

<style scoped>
.todos-view {
  padding-bottom: 3rem;
  min-height: 60vh;
}
</style>
