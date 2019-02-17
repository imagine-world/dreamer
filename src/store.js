import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_takan: false,
    hi: false
  },
  mutations: {
    CONTROL_PLAYLIST (state, type) {
      console.log('in', state, type)
      state.is_takan = type
    }
  },
  actions: {

  }
})
