<template>
  <div>
    よく検索されるワード
    <ul>
      <li v-for="word in popularWords" :key="word" @click="clickWord(word)">
        {{word}}
      </li>
    </ul>
  </div>
  <div>
    <!-- TODO: 日本語入力時のエンターの制御必要かも（参考：https://r17n.page/2020/04/04/vue-submit-on-enter-japanese/） -->
    <input type="text" :value="keyword" @input="updateKeyword" @keyup.enter="search" />
    <button @click="search">検索</button>
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
        'React',
        'Vue',
        'Docker',
        'Kubernetes',
      ],
    }
  },
  computed: mapGetters(['keyword']),
  emits: ['fetchBooks'],
  methods: {
    search() {
      // this.$store.dispatch('fetchBooks', this.keyword)
      this.$emit('fetchBooks', this.keyword)
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
