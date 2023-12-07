import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;

export default {
  state: {
    loading: false,
    books: []
  },

  getters: {
    books: (state) => state.books,
  },

  actions: {
    async fetchBooks({ commit }) {
      commit('SET_LOADING', true)
      try {
        const res = await axios.get(url + "book");
        if (!res.data && res.status !== 200) {
          return;
        }

        commit("SET_LOADING", false)
        commit("SET_BOOKS", res.data);
      } catch (error) {
        errorToast('Sorry! Cannot fetch books from server');
      }
    },
  },

  mutations: {
    SET_LOADING: (state, payload) => state.loading = payload,
    SET_BOOKS: (state, payload) => (state.books = payload),
  }
}