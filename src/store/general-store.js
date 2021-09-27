import { api } from "boot/axios";

const state = {
  language: "en",
};

const mutations = {
  changeLanguage(state, payload) {
    state.language = payload;
  },
};

const actions = {
  changeLanguage({ commit }, payload) {
    commit("changeLanguage", payload);
  },
};

const getters = {
  language(state) {
    return state.language;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
