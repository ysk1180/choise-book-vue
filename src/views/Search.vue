<template>
  <Header @fetchBooks="fetchBooks" @clearBooks="clearBooks"/>
  <Books
    v-if="books.length !== 0"
    :books="books"
    :hasNextPage="hasNextPage"
    @fetchBooks="fetchBooks"
    :count="count"
    :searchKeyword="searchKeyword"
  />
  <Loading  v-if="loading"/>
  <NoResult v-if="books.length === 0 && count === 0"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Books from '@/components/Books.vue';
import Header from '@/components/Header.vue';
import Loading from '@/components/Loading.vue'
import NoResult from '@/components/NoResult.vue'
import axios from '@/lib/axios'
import { BookData } from '@/types/book.t'
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Search',
  components: {
    Books,
    Header,
    Loading,
    NoResult,
  },
  data(): {
    currentPage: number;
    count: number | null;
    hasNextPage: boolean;
    searchKeyword: string;
  }{
    return {
      currentPage: 0,
      count: null,
      hasNextPage: true,
      searchKeyword: ''
    }
  },
  created() {
    const word = this.$route.params.keyword
    const title = `${word}の技術書一覧 - 技術書選び`
    document.title = title
    document.querySelector("meta[property='og:title']")!.setAttribute('content', title)
    const description = `${word}に関する技術書のAmazonと楽天ブックスのレビューが同時に見れることで、技術書選びをサポートします。`
    document.querySelector("meta[name='description']")!.setAttribute('content', description)
    document.querySelector("meta[property='og:description']")!.setAttribute('content', description)

    this.$store.dispatch('changeKeyword', word)
    this.fetchBooks()
    this.searchKeyword = this.keyword
  },
  computed: mapGetters(['keyword', 'loading', 'books']),
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
      this.$store.dispatch('setBooks', books)
      this.count = data.count
      this.hasNextPage = data.has_next_page
      this.searchKeyword = this.keyword
    },
    clearBooks() {
      this.$store.dispatch('clearBooks')
      this.count = null
      this.hasNextPage = true
      this.currentPage = 0
    }
  }
});
</script>
