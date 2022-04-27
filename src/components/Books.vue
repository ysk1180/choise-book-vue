<template>
  <h1 class="text-lg mt-4 mb-1 mx-2">
    「{{searchKeyword}}」の検索結果
  </h1>
  <ul
    class="divide-y divide-gray-300"
  >
    <Book
      v-for="(book, index) in books"
      :key="book.isbn"
      :book="book"
      :index="index"
    />
  </ul>
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
    },
    searchKeyword: {
      type: String,
    }
  },
  components: {
    Book,
  },
  computed: mapGetters(['books']),
  emits: ['fetchBooks'],
  mounted() {
    window.onscroll = () => {
      // 一定位置以上スクロールされたかどうかを判定する
      const scrollingPosition = document.documentElement.scrollTop + window.innerHeight
      const bottomPosition = document.documentElement.offsetHeight - 100 // スマホでうまく判定できないので調整

      if (scrollingPosition >= bottomPosition) {
        //無限スクロールでデータ取得
        this.$emit('fetchBooks')
      }
    }
  },
});
</script>
