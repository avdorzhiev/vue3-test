import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 1
  },
  getters: {
    currentCount (state) {
      return state.count;
    }
  },
  mutations: {
    initialiseStore(state) {
      // Check if the store exists
      if(localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store') || ''))
        );
      }
    },
    increment (state) {
      state.count++;
    },
    decrement (state) {
      state.count--;
    }
  },
  actions: {},
  modules: {}
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
