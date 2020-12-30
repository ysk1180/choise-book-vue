<template>
  <div class="wrapper">
    <div>
      <img :src="book.image_url" />
    </div>
    <div>
      <div>
        {{book.title}}
      </div>
      <div>
        <div>
          {{book.published_date}}
        </div>
        <div>
          {{book.price}}
        </div>
        <div>
          {{book.page_count}}
        </div>
      </div>
      <div>
        {{book.item_caption}}
      </div>
      <Review
        site="楽天ブックス"
        :reviewScore="book.rakuten_review_score"
        :reviewCount="book.rakuten_review_count"
        :link="book.rakuten_link"
        :isbn="book.isbn"
      />
      <Review
        site="Amazon"
        :reviewScore="book.amazon_review_score"
        :reviewCount="book.amazon_review_count"
        :link="book.amazon_link"
        :isbn="book.isbn"
      />
    </div>
  </div>
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
    }
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
