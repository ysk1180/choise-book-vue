<template>
  <div class="m-4">
    <div class="flex text-sm my-1 text-gray-800">
      よく検索されるワード
      <svg class="h-5 w-5 px-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    </div>
    <ul class="flex flex-wrap space-x-1">
      <li
        v-for="word in popularWords"
        :key="word"
        @click="clickWord(word)"
        class="text-xs text-gray-700 rounded bg-gray-200 hover:bg-gray-300 px-2 py-1 my-1 cursor-pointer"
      >
        {{word}}
      </li>
    </ul>
  </div>
  <div class="m-4 mb-1.5 flex">
  <!-- TODO: 日本語入力時のエンターの制御必要かも（参考：https://r17n.page/2020/04/04/vue-submit-on-enter-japanese/） -->
    <input
      type="text"
      :value="keyword"
      @input="updateKeyword"
      @keyup.enter="search"
      class="rounded-l-lg w-9/12 md:w-10/12 px-3 py-2 border-t mr-0 border-b border-l text-gray-800 border-gray-300 bg-white"
      placeholder="キーワードを入力"
    />
    <button
      @click="search"
      class="pl-1 pr-2 flex rounded-r-lg w-3/12 md:w-2/12 bg-red-500 hover:bg-red-600 text-white p-2 border-red-500 border-t border-b border-r"
    >
      <div class="mx-auto flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 mr-1 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        検索
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      popularWords: [
        'Ruby',
        'Rails',
        'PHP',
        'Laravel',
        'Python',
        'Django',
        'Go言語',
        'Java',
        'TypeScript',
        'JavaScript',
        'React',
        'Next.js',
        'Vue.js',
        'Nuxt.js',
        'SQL',
        'AWS',
        'Docker',
        'Kubernetes',
        'Linux',
        'Swift',
        'Kotlin',
        'Flutter',
        '機械学習',
        'セキュリティ',
        'ネットワーク',
      ],
    }
  },
  computed: mapGetters(['keyword']),
  emits: ['fetchBooks', 'clearBooks'],
  methods: {
    search() {
      if(this.keyword === '') {
        alert('キーワードを入力してください')
        return
      }

      this.$emit('clearBooks')
      router.push(`/search/${this.keyword}`)
      this.$emit('fetchBooks')
    },
    clickWord(word: string) {
      this.$store.dispatch('changeKeyword', word)
      this.search()
    },
    updateKeyword(e: any) {
      this.$store.dispatch('changeKeyword', e.target.value)
    },
  }
});
</script>
