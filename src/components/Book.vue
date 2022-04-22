<template>
  <article class="p-4 flex space-x-4">
    <a :href="book.amazon_link || book.rakuten_link" target="_blank" rel="noopener" class="flex-none object-contain w-20 h-full rounded-sm cursor-pointer hover:opacity-80">
      <img :src="book.image_url" />
    </a>
    <div class="flex-auto">
      <h2 class="text-base font-semibold text-black mb-0.5 cursor-pointer hover:underline">
        <a :href="book.amazon_link || book.rakuten_link" target="_blank" rel="noopener">
          {{book.title}}
        </a>
      </h2>
      <div class="flex flex-wrap mt-1 mb-1 text-xs font-normal whitespace-pre text-gray-500">
        <div v-if="book.published_date" class="mx-0.5">
          {{book.published_date}}発売
        </div>
        <div v-if="book.price" class="mx-0.5">
          {{book.price.toLocaleString()}}円
        </div>
        <div v-if="book.page_count" class="mx-0.5">
          {{book.page_count}}ページ
        </div>
      </div>
      <Tags :book="book" />
      <div v-if="book.item_caption" class="text-xs font-light text-gray-800 mt-1.5 mb-2 px-2 py-0.5 line-clamp-3 md:line-clamp-2 bg-gray-100 rounded">
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
import Tags from '@/components/Tags.vue';
import { BookData } from '@/types/book.t'

export default defineComponent({
  name: 'Book',
  components: {
    Review,
    Tags,
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
