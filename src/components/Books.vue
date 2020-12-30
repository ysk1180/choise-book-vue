<template>
  <div v-if="loading">
    Loading...
  </div>
  <ul
    v-else
    class="divide-y divide-gray-200"
  >
    <Book
      v-for="book in books"
      :key="book.isbn"
      :book="book"
    />
  </ul>
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
