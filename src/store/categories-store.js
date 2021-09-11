
import { api } from 'boot/axios'

const state = {

}

const mutations = {

}

const actions = {
async getAll ({commit, dispatch}, payload){

  return await api.get('categories').then(res=>{
    console.log(res)
  })
}

}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
