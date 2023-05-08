/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

import VueSession from 'vue-session';
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import store from './store'

const app = createApp(App).use(store,VueSession)

registerPlugins(app)

app.mount('#app')