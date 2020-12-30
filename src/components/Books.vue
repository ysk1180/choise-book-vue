<template>
  <div v-if="loading">
    Loading...
  </div>
  <div v-else v-for="book in books" :key="book.isbn">
    <hr/>
    <Book :book="book"/>
  </div>
  <template/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapGetters } from 'vuex';
import Book from '@/components/Book.vue';
import { BookData } from '@/types/book.t'

export default defineComponent({
  name: 'Books',
  props: {
    books: {
      type: Object as PropType<BookData[]>,
      required: true,
    }
  },
  components: {
    Book,
  },
  computed: mapGetters(['books', 'loading']),
});
</script>

<style scoped>
hr {
  border-top: 1px solid #cccccc;
}
</style>
