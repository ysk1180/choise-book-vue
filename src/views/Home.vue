<template>
  <Header @fetchBooks="fetchBooks" @clearBooks="clearBooks"/>
  <Books
    v-if="books.length !== 0"
    :books="books"
    :hasNextPage="hasNextPage"
    @fetchBooks="fetchBooks"
  />
  <Loading  v-if="loading"/>
  <Attention v-if="!loading && books.length === 0 && count !==0"/>
  <NoResult v-if="books.length === 0 && count === 0"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Books from '@/components/Books.vue';
import Header from '@/components/Header.vue';
import Attention from '@/components/Attention.vue';
import Loading from '@/components/Loading.vue'
import NoResult from '@/components/NoResult.vue'
import axios from '@/lib/axios'
import { BookData } from '@/types/book.t'
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Home',
  components: {
    Books,
    Header,
    Attention,
    Loading,
    NoResult,
  },
  data(): {
    books: BookData[] | [];
    currentPage: number;
    count: number | null;
    hasNextPage: boolean;
  }{
    return {
      books: [],
      currentPage: 0,
      count: null,
      hasNextPage: true,
    }
  },
  computed: mapGetters(['keyword', 'loading']),
  methods: {
    async fetchBooks() {
      if (this.loading) return
      if (!this.hasNextPage) return

      this.currentPage += 1

      this.$store.dispatch('setLoading', true)
      const response = await axios.get(`/search?q=${this.keyword}&page=${this.currentPage}`)
      this.$store.dispatch('setLoading', false)

      const { data } = response
      const books: BookData[] = data.books
      this.books = [ ...this.books, ...books ]
      this.count = data.count
      this.hasNextPage = data.has_next_page
    },
    clearBooks() {
      this.books = []
      this.count = null
      this.hasNextPage = true
      this.currentPage = 0
    }
  }
});
</script>
