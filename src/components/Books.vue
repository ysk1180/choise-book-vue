<template>
  <div v-if="loading">
    <Loading />
  </div>
  <ul
    v-else
    class="divide-y divide-gray-300"
  >
    <Book
      v-for="(book, index) in books"
      :key="book.isbn"
      :book="book"
      :index="index"
    />
  </ul>
  <template/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapGetters } from 'vuex';
import Book from '@/components/Book.vue';
import Loading from '@/components/Loading.vue'
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
    Loading,
  },
  computed: mapGetters(['books', 'loading']),
});
</script>
