import { api } from "boot/axios";

const state = {
  category: "",
  subCategories: "",
  sub: ""
};

const mutations = {
  getAllCategories(state, payload) {
    state.category = payload;
  },
  getSubCategoryById(state, payload) {
    state.subCategories = payload;
  },
  getSubCategory(state, payload) {
    state.sub = payload
  }

};

const actions = {
  async getAllCategories({ commit, dispatch }, payload) {
    return await api.get("categories").then((res) => {

      commit("getAllCategories", res.data);
    });
  },
  async getSubCategory({ commit, dispatch },) {


    return await api.get(`sub-categories/`).then((res) => {
      commit("getSubCategory", res.data);
      console.log("subg", res.data);

    });
  },

  async getSubCategoryById({ commit, dispatch }, payload) {


    return await api.get(`sub-categories/${payload}`).then((res) => {
      console.log("asfa", res.data.cars_lists);
      commit("getSubCategoryById", res.data.cars_lists);
    });
  },
};

const getters = {
  sub(state) {
    return state.sub
  },
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
