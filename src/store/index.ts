import { createStore } from 'vuex'
import { State } from '@/store/types'

export default createStore<State>({
  state: {
    keyword: '',
    loading: false,
    books: [],
  },
  getters: {
    keyword: state => state.keyword,
    loading: state => state.loading,
    books: state => state.books,
  },
  mutations: {
    changeKeyword(state, keyword) {
      state.keyword = keyword
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setBooks(state, books) {
      state.books = [...state.books, ...books]
    },
    clearBooks(state) {
      state.books = []
    }
  },
  actions: {
    changeKeyword({ commit }, keyword) {
      commit('changeKeyword', keyword)
    },
    setLoading({ commit }, payload) {
      commit('setLoading', payload)
    },
    setBooks({ commit }, payload) {
      commit('setBooks', payload)
    },
    clearBooks({ commit }, payload) {
      commit('clearBooks', payload)
    }
  },
  modules: {
  }
})
