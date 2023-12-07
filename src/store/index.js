import { createStore } from "vuex";
import books from './modules/books'
import login from "./modules/login";

const store = createStore({
  state: {},

  getters: {},

  actions: {},

  mutations: {},

  modules: {
    books,
    login
  }
});

export default store;
