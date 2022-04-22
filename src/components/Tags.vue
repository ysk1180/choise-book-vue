<template>
  <div v-if="tags.length > 0" class="flex flex-wrap mt-1 mb-1.5">
    <div v-for="tag in tags" :key="tag" class="bg-gray-500 text-white text-xs mx-0.5 my-0.5 px-1.5 py-1 rounded-sm">
      {{tag}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BookData } from '@/types/book.t'

export default defineComponent({
  name: 'Tags',
  props: {
    book: {
      type: Object as PropType<BookData>,
      required: true,
    },
  },
  data(): {
    tags: string[];
  }{
    return {
      tags: []
    }
  },
  created() {
    const publishedDate = this.book.published_date
    if (publishedDate.length > 7) {
      const year = Number(publishedDate.substr(0,4))
      const month = Number(publishedDate.substr(5,2))
      const oneYearAgo = new Date()
      oneYearAgo.setFullYear(oneYearAgo.getFullYear()-1)
      const threeYearAgo = new Date()
      threeYearAgo.setFullYear(threeYearAgo.getFullYear()-3)
      if (year && month && new Date(year, month-1) > oneYearAgo) {
        this.tags = [...this.tags, '発売1年以内']
      } else if (year && month && new Date(year, month-1) > threeYearAgo) {
        this.tags = [...this.tags, '発売3年以内']
      }
    }

    const totalReviewCount = this.book.rakuten_review_count + this.book.amazon_review_count
    if (totalReviewCount > 100) {
      this.tags = [...this.tags, 'レビュー100件超']
    } else if (totalReviewCount > 30) {
      this.tags = [...this.tags, 'レビュー30件超']
    }

    if (this.book.rakuten_review_score && this.book.amazon_review_score) {
      if ((this.book.rakuten_review_score + this.book.amazon_review_score)/2 >= 4) {
        this.tags = [...this.tags, '高評価']
      }
    } else if (this.book.rakuten_review_score && this.book.rakuten_review_score >= 4) {
      this.tags = [...this.tags, '高評価']
    } else if (this.book.amazon_review_score && this.book.amazon_review_score >= 4) {
      this.tags = [...this.tags, '高評価']
    }
  }
});
</script>
