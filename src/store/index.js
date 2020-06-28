import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checkoutComplete: false,
    checkoutError: false,
    payerInfo: {}
  },
  mutations: {
    setCheckoutResult (state, { isComplete, hasError, payerInfo }) {
      state.checkoutComplete = isComplete
      state.checkoutError = hasError
      state.payerInfo = payerInfo
    },

    clearCheckoutState (state) {
      state.checkoutComplete = false
      state.checkoutError = false
      state.payerInfo = {}
    }
  },
  actions: {},
  modules: {}
})
