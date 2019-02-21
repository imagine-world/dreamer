import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let Give = 0
export default new Vuex.Store({
  state: {
    is_takan: false,
    nav: true,
    thumbs: Give
  },
  mutations: {
    CONTROL_PLAYLIST (state, type) {
      console.log('in', type)
      state.is_takan = type
    },
    Navigation (state, type) {
      state.nav = type
      console.log('in', type)
    },
    thumbs (state, type) {
      state.thumbs = type
      console.log('in', type)
    }
  },
  actions: {

  }
})
