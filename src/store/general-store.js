import { api } from "boot/axios";
import { LocalStorage } from "quasar";

const state = {
  language: "en",
};

const mutations = {
  changeLanguage(state, payload) {
    state.language = payload;
    LocalStorage.set("language", state.language);
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
