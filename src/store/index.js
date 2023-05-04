import { createApp } from 'vue'
import { createStore } from 'vuex'
import auth from './modules/auth'
import App from './App.vue'
const store = createStore({
  modules: {
    auth
  }
})
const app = createApp({ App })

// Install the store instance as a plugin
app.use(store)