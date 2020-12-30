<template>
  <div>
    <div>
      {{site}}
    </div>
    <div>
      {{reviewScoreData}}
      <br />
      {{reviewCountData}}件
    </div>
  </div>
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
