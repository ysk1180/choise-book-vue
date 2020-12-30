<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    class="rounded p-1 bg-red-100"
  >
    <div class="text-sm">
      {{site}}
    </div>
    <div class="flex space-x-1 text-xs">
      <div>
        {{reviewScoreData}}点
      </div>
      <div>
        {{reviewCountData}}件
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from '@/lib/axios'

export default defineComponent({
  name: 'Review',
  props: {
    site: {
      type: String,
      require: true,
    },
    reviewScore: {
      type: Number,
    },
    reviewCount: {
      type: Number,
    },
    link: {
      type: String,
    },
    isbn: {
      type: String,
    },
  },
  setup(props) {
    let reviewScoreData = ref(props.reviewScore)
    let reviewCountData = ref(props.reviewCount)
    let linkData = ref(props.link)

    onMounted(async () => {
      if (props.site === '楽天ブックス' || props.link) return

      const response = await axios.get(`/amazon/${props.isbn}`)
      const book = response.data
      reviewScoreData = book.amazon_review_score
      reviewCountData = book.amazon_review_count
      linkData = book.amazon_link
    })

    return {
      reviewScoreData,
      reviewCountData,
      linkData,
    }
  },
});
</script>
