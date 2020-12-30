import { createStore } from 'vuex'
import { State } from '@/store/types'

export default createStore<State>({
  state: {
    keyword: '',
    loading: false,
  },
  getters: {
    keyword: state => state.keyword,
    loading: state => state.loading,
  },
  mutations: {
    changeKeyword(state, keyword) {
      state.keyword = keyword
    },
    setLoading(state, payload) {
      state.loading = payload
    },
  },
  actions: {
    changeKeyword({ commit }, keyword) {
      commit('changeKeyword', keyword)
    },
    setLoading({ commit }, payload) {
      commit('setLoading', payload)
    },
  },
  modules: {
  }
})
