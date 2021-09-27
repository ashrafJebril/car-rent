import { api } from "boot/axios";

const state = {
  category: "",
};

const mutations = {
  getAllCategories(state, payload) {
    state.category = payload;
  },
};

const actions = {
  async getAllCategories({ commit, dispatch }, payload) {
    return await api.get("categories").then((res) => {
      commit("getAllCategories", res.data);
    });
  },
  async getSubCategoryById({ commit, dispatch }, payload) {
    console.log(payload);
    return await api.get(`sub-categories/${payload}`).then((res) => {
      console.log(res);
    });
  },
};

const getters = {
  allCategories(state) {
    return state.category;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
