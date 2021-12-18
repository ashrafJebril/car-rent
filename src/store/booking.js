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
  async bookACar({ commit }, payload) {
    return await api.post(`bookings`, payload).then((res) => {
      console.log(res);
      commit("bookACar", res.data);
    });
  },
  async uploadImage({ commit }, payload) {
    return await api.post(`upload`, payload).then((res) => {
      console.log(res);
    });
  },
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
