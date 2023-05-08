import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import { createStore } from 'vuex'
export default createStore({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
})/*
export default createStore({
   
  modules: {
  }
})*/
