<template>
  <article class="p-4 flex space-x-4">
    <img
      :src="book.image_url"
      class="flex-none object-contain w-18 h-full rounded-lg"
    />
    <div class="flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
      <h2 class="text-base font-semibold text-black mb-0.5">
        {{book.title}}
      </h2>
      <div class="flex flex-wrap text-xs font-normal whitespace-pre text-gray-500 space-x-1">
        <div v-if="book.published_date">
          {{book.published_date}}発売
        </div>
        <div v-if="book.price">
          {{book.price.toLocaleString()}}円
        </div>
        <div v-if="book.page_count">
          {{book.page_count}}ページ
        </div>
      </div>
      <div class="text-xs font-light text-gray-800 my-1">
        {{book.item_caption}}
      </div>
      <div class="flex space-x-2">
        <Review
          site="楽天ブックス"
          :reviewScore="book.rakuten_review_score"
          :reviewCount="book.rakuten_review_count"
          :link="book.rakuten_link"
          :isbn="book.isbn"
          :index="index"
        />
        <Review
          site="Amazon"
          :reviewScore="book.amazon_review_score"
          :reviewCount="book.amazon_review_count"
          :link="book.amazon_link"
          :isbn="book.isbn"
          :index="index"
        />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Review from '@/components/Review.vue';
import { BookData } from '@/types/book.t'

export default defineComponent({
  name: 'Book',
  components: {
    Review,
  },
  props: {
    book: {
      type: Object as PropType<BookData>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  },
});
</script>
