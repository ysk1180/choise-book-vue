<template>
  <TotalNumber v-if="totalNumber" :number="totalNumber" />
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
  <NoMoreContent v-if="!hasNextPage"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapGetters } from 'vuex';
import Book from '@/components/Book.vue';
import TotalNumber from '@/components/TotalNumber.vue'
import NoMoreContent from '@/components/NoMoreContent.vue'
import { BookData } from '@/types/book.t'

export default defineComponent({
  name: 'Books',
  props: {
    books: {
      type: Object as PropType<BookData[]>,
      required: true,
    },
    totalNumber: {
      type: Number,
    },
    hasNextPage: {
      type: Boolean,
    }
  },
  components: {
    Book,
    TotalNumber,
    NoMoreContent,
  },
  computed: mapGetters(['books']),
  emits: ['fetchBooks'],
  mounted() {
    window.onscroll = () => {
      // 一定位置以上スクロールされたかどうかを判定する
      const scrollingPosition = document.documentElement.scrollTop + window.innerHeight
      const bottomPosition = document.documentElement.offsetHeight - 20 // スマホでうまく判定できないので調整

      if (scrollingPosition >= bottomPosition) {
        //無限スクロールでデータ取得
        this.$emit('fetchBooks')
      }
    }
  },
});
</script>
