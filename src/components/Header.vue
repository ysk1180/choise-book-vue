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
  <div class="m-4 flex">
  <!-- TODO: 日本語入力時のエンターの制御必要かも（参考：https://r17n.page/2020/04/04/vue-submit-on-enter-japanese/） -->
    <input
      type="text"
      :value="keyword"
      @input="updateKeyword"
      @keyup.enter="search"
      class="rounded-l-lg w-9/12 md:w-10/12 p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-300 bg-white"
      placeholder="キーワードを入力"
    />
    <button
      @click="search"
      class="px-2 rounded-r-lg w-3/12 md:w-2/12 bg-red-400 hover:bg-red-500 text-gray-800 p-2 border-red-500 border-t border-b border-r"
    >
      検索
    </button>
  </div>
</template>

<script lang="ts">
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
        'Go言語',
        'Java',
        'TypeScript',
        'JavaScript',
        'React',
        'Next.js',
        'Vue',
        'Nuxt.js',
        'SQL',
        'Docker',
        'Kubernetes',
        'Linux',
        'Swift',
        'Flutter',
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
