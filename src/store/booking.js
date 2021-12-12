import { api } from "boot/axios";

const state = {
  bookingForm: "",
};

const mutations = {
  bookingForm(state, payload) {
    state.bookingForm = payload;
    console.log("fooom", state.bookingForm);
  },
};

const actions = {
  bookingForm({ commit }, payload) {
    commit("bookingForm", payload);
  },
};

const getters = {
  booking(state) {
    return state.bookingForm;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
