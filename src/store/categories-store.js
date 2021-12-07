import { api } from "boot/axios";

const state = {
  category: "",
  subCategories: "",
};

const mutations = {
  getAllCategories(state, payload) {
    state.category = payload;
  },
  getSubCategoryById(state, payload) {
    state.subCategories = payload;
  },
};

const actions = {
  async getAllCategories({ commit, dispatch }, payload) {
    return await api.get("categories").then((res) => {
      commit("getAllCategories", res.data);
    });
  },
  async getSubCategoryById({ commit, dispatch }, payload) {
    console.log("category");

    return await api.get(`sub-categories/${payload}`).then((res) => {
      console.log("asfa", res.data.cars_lists);
      commit("getSubCategoryById", res.data.cars_lists);
    });
  },
};

const getters = {
  allCategories(state) {
    return state.category;
  },
  carsList(state) {
    return state.subCategories;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
