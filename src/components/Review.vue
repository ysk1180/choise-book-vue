<template>
  <a
    :href="linkData"
    target="_blank"
    rel="noopener"
    class="rounded px-2 py-1 text-center w-28"
    :class="bgClass"
  >
    <div
      class="text-xs flex"
      :class="site === 'Amazon' ? 'text-yellow-800' : 'text-red-800'"
    >
      {{site}}
      <svg v-if="linkData" class="h-3 w-3 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </div>
    <div v-if="linkData" class="flex space-x-1 text-xs">
      <svg v-if="reviewScoreData" class="text-yellow-500 fill-current" width="16" height="20">
        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
      </svg>
      <div v-if="reviewScoreData" class="text-yellow-800 my-1">
        {{reviewScoreData}}
      </div>
      <div v-else class="my-auto ml-1.5 text-gray-500">
        -
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
import { defineComponent, ref, onMounted, computed } from 'vue';
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
    updatedAt: {
      type: String,
    },
    isbn: {
      type: String,
    },
    index: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    const reviewScoreData = ref(props.reviewScore)
    const reviewCountData = ref(props.reviewCount)
    const linkData = ref(props.link)

    onMounted(async () => {
      if (props.site === '楽天ブックス') return

      const oneMonthAgo = new Date()
      oneMonthAgo.setMonth(oneMonthAgo.getMonth()-1)
      if (props.updatedAt && new Date(props.updatedAt) > oneMonthAgo) return // 1ヶ月以内に更新されたデータなら再取得せずにそのまま使う

      const waitTimeMs = props.index * 0.5 * 1000 // AmazonAPIを連続で叩きすぎないように調整
      await new Promise(resolve => setTimeout(resolve, waitTimeMs))

      const response = await axios.get(`/amazon/${props.isbn}`)
      const book = response.data
      reviewScoreData.value = book.amazon_review_score
      reviewCountData.value = book.amazon_review_count
      linkData.value = book.amazon_link
    })

    const bgClass = computed(() => {
      if (!linkData.value) {
        return props.site === 'Amazon' ? 'bg-yellow-100' : 'bg-red-100'
      }

      return props.site === 'Amazon' ? 'bg-yellow-100 hover:bg-yellow-200' : 'bg-red-100 hover:bg-red-200'
    })

    return {
      reviewScoreData,
      reviewCountData,
      linkData,
      bgClass,
    }
  },
});
</script>
