import { createStore } from "vuex";

const store = createStore({
  state: {
    displayPage: "Me",
  },
  mutations: {
    updateDisplayPage(state, payload) {
      state.displayPage = payload;
    },
  },
});

export default store;
