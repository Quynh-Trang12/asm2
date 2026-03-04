/**
 * @file useTodos.js
 * @description A Vue 3 Composable that encapsulates all state and business logic
 * for the To-Do List feature. This ensures strict Separation of Concerns.
 */

import { ref } from 'vue'

// We define the state outside the exported function so it acts as a global,
// persistent store. If the user navigates away to "Jobs" and comes back,
// their tasks will still be here!
const tasks = ref([
  // Let's add the default tasks from your lecturer's screenshot so it looks perfect!
  { id: 1, text: 'Update resume and LinkedIn profile', isHighPriority: true },
  { id: 2, text: 'Review AI Research Assistant job description', isHighPriority: false },
  { id: 3, text: 'Submit job application form for Insight Hire', isHighPriority: false },
])

export function useTodos() {
  /**
   * Adds a new task to the BEGINNING of the list, as strictly required.
   * @param {string} text - The text content of the new task.
   */
  const addTask = (text) => {
    if (!text.trim()) return // Prevent adding empty tasks

    const newTask = {
      id: Date.now(), // Generate a unique ID
      text: text.trim(),
      isHighPriority: false, // Default to low priority
    }

    // .unshift() adds the item to the start of the array
    tasks.value.unshift(newTask)
  }

  /**
   * Removes a task from the list by its ID.
   * @param {number} id - The unique ID of the task to delete.
   */
  const deleteTask = (id) => {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }

  /**
   * Toggles the priority status of a specific task.
   * @param {number} id - The unique ID of the task to toggle.
   */
  const togglePriority = (id) => {
    const task = tasks.value.find((task) => task.id === id)
    if (task) {
      task.isHighPriority = !task.isHighPriority
    }
  }

  // Expose the state and methods to whatever component uses this composable
  return {
    tasks,
    addTask,
    deleteTask,
    togglePriority,
  }
}
