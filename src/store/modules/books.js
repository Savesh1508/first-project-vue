// store/modules/books.js
import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;

export default {
  state: {
    loading: false,
    books: [],
    currentBook: null,
  },

  getters: {
    books: (state) => state.books,
    currentBook: (state) => state.currentBook,
  },

  actions: {
    async fetchBooks({ commit }) {
      commit("SET_LOADING", true);
      try {
        const res = await axios.get(url + "book");
        if (!res.data && res.status !== 200) {
          return;
        }

        commit("SET_LOADING", false);
        commit("SET_BOOKS", res.data);
      } catch (error) {
        errorToast("Sorry! We have some problems with server");
      }
    },

    async fetchBookById({ commit }, bookId) {
      commit("SET_LOADING", true);
      try {
        const res = await axios.get(url + `book/${bookId}`);
        if (!res.data && res.status !== 200) {
          return;
        }

        commit("SET_LOADING", false);
        commit("SET_CURRENT_BOOK", res.data);
      } catch (error) {
        errorToast(`Sorry! Invalid book ${bookId}`);
      }
    },
  },

  mutations: {
    SET_LOADING: (state, payload) => (state.loading = payload),
    SET_BOOKS: (state, payload) => (state.books = payload),
    SET_CURRENT_BOOK: (state, payload) => (state.currentBook = payload),
  },
};
