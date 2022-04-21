<template>
  <div class="text-center mt-4 mb-6 text-gray-800">
    <div class="flex justify-center mb-1">
      <p>検索結果は以上です</p>
      <svg class="h-4 w-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <p class="underline cursor-pointer" @click="scrollTop()">一番上へ戻る</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'NoMoreContent',
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
})
</script>