<template>
  <div>
    <div>
      {{site}}
    </div>
    <div>
      {{reviewScore}}
      <br />
      {{reviewCount}}件
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/lib/axios'

export default defineComponent({
  name: 'Review',
  props: ['site', 'review_score', 'review_count', 'link', 'isbn'],
  data() {
    return {
      reviewScore: this.review_score,
      reviewCount: this.review_count,
      linkData: this.link,
    }
  },
  async mounted() {
    if (this.site === '楽天ブックス' || this.link) return

    const response = await axios.get(`/amazon/${this.isbn}`)
    const book = response.data
    this.reviewScore = book.amazon_review_score
    this.reviewCount = book.amazon_review_count
    this.linkData = book.amazon_link
  }
});
</script>
