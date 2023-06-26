import Vue from 'vue'
import Vuex, { mapMutations, mapGetters } from 'vuex'
/* eslint-disable */
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    ...mapGetters([
      'getTask'
    ]),
    getTask: (state) => {
      return state
    }
  },
  mutations: {
    ...mapMutations([
      'localTask',
    ]),
    initialiseStore(state) {
      if (localStorage.getItem('tasks')) {
        this.replaceState(
          Object.assign(state.tasks, JSON.parse(localStorage.getItem('tasks')))
        );
      } else {
        state.tasks = []
      }
    },
    localTask(state, newTasks) {
      state.tasks = newTasks
      if (state.tasks) {
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
// // Subscribe to store updates
// store.subscribe((mutation, state) => {
//   // Store the state object as a JSON string
//   if (state.tasks.length) {
//     localStorage.setItem('tasks', JSON.stringify(state.tasks));
//   }

// });
export default store