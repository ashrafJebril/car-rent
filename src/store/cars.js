import { api } from "boot/axios";

const state = {
  bookedCar: "",
};

const mutations = {
  getCarById(state, payload) {
    state.bookedCar = payload;
  },
};

const actions = {
  async getCarById({ commit, dispatch }, payload) {
    console.log(payload);
    return await api.get(`cars/${payload}`).then((res) => {
      commit("getCarById", res.data);
    });
  },
};

const getters = {
  bookedCar(state) {
    return state.bookedCar;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
