<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    class="rounded p-1 bg-red-100 text-center w-24"
  >
    <div class="text-sm">
      {{site}}
    </div>
    <div v-if="reviewCountData" class="flex space-x-1 text-xs">
      <svg class="text-yellow-500 fill-current" width="16" height="20">
        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
      </svg>
      <div class="text-yellow-800 my-1">
        {{reviewScoreData}}
      </div>
      <div class="text-gray-500 font-light my-1">
        ({{reviewCountData}}件)
      </div>
    </div>
    <div v-else class="text-gray-500">
      -
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
