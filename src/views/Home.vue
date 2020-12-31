<template>
  <Header @fetchBooks="fetchBooks"/>
  <Books v-if="books.length !== 0" :books="books"/>
  <Attention v-else/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Books from '@/components/Books.vue';
import Header from '@/components/Header.vue';
import Attention from '@/components/Attention.vue';
import axios from '@/lib/axios'
import { BookData } from '@/types/book.t'

export default defineComponent({
  name: 'Home',
  components: {
    Books,
    Header,
    Attention,
  },
  data(): {
    books: BookData[] | [];
  }{
    return {
      books: []
    }
  },
  methods: {
    async fetchBooks(keyword: string) {
      this.$store.dispatch('setLoading', true)
      const response = await axios.get(`/search?q=${keyword}`)
      const books: BookData[] = response.data
      this.$store.dispatch('setLoading', false)
      this.books = books
    }
  }
});
</script>
