import axios from "axios";
import { RT_HOME, RT_LOGIN } from "../../constants/routeNames";
import { errorToast } from "../../utils/toast";
import router from "../../router";
const url = import.meta.env.VITE_BASE_URL;

export default {
  state: {
    user: {}
  },

  getters: {},

  actions: {
    async login({ commit }, payload) {
      try {
        const res = await axios.post(url + "users/signin", payload);
        if (!res.data?.user?.refresh_token && res.status !== 200) {
          return;
        }

        commit("SET_TOKEN", res.data.user.refresh_token);
        commit("SET_USER", res.data.user);
      } catch (error) {
        errorToast('Incorrect email or password', {hideProgressBar: true});
      }
    },
  },

  mutations: {
    SET_TOKEN: (_, payload) => {
      localStorage.setItem("refresh_token", payload);
    },

    SET_USER: (state, payload) => {
      state.user = payload;
      router.push({ name: RT_HOME });
    },

    LOGOUT: (state) => {
      state.user = {};
      localStorage.removeItem("refresh_token");
      router.push({ name: RT_LOGIN });
    },
  }
}