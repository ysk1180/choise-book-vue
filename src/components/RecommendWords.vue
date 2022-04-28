<template>
  <div className="mb-4">
    <h2 :className="`font-bold inline-block ${isSmall ? 'mx-1 my-1' : 'text-lg px-2 mx-1 mb-1.5'}`" :style="`${isSmall ? '' : 'background: linear-gradient(transparent 60%, #8effa1 60%);'}`">{{title}}</h2>
    <div class="flex flex-wrap">
      <div v-for="word in words" :key="word" class="m-1">
        <button @click="clickWord(word)">
          <div :class="`flex border border-solid border-gray-300 rounded p-2 cursor-pointer hover:opacity-70 ${isSmall ? 'text-sm' : ''}`">
            <img :src="require(`@/assets/img/words/${word}.png`)" :class="`object-contain my-auto ${isSmall ? 'w-4 h-4 mr-1' : 'w-6 h-6 mr-1.5'}`" />
            {{word}}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
  name: 'RecommendWords',
  props: {
    title: {
      type: String,
      required: true,
    },
    words: {
      type: [String],
      required: true,
    },
    isSmall: {
      type: Boolean,
    }
  },
  emits: ['clearAndFetchBooks'],
  methods: {
    clickWord(word: string) {
      this.$store.dispatch('changeKeyword', word)
      this.$emit('clearAndFetchBooks')
      router.push(`/search/${word}`)
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
});
</script>
