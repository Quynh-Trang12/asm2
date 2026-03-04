/**
 * @file main.js
 * @description The main entry point for the Insight Hire Vue application.
 * It initializes the Vue instance, injects the router, and imports global
 * styles like Bootstrap to ensure they are served locally (no CDNs).
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // This automatically targets our router/index.js

// Import Bootstrap CSS and JS locally to meet assignment requirements
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// We can also import our own global CSS if we have any overrides
import './assets/css/main.css'

const app = createApp(App)

// Tell Vue to use our router configuration
app.use(router)

// Mount the app to the <div id="app"> in your index.html
app.mount('#app')
