<template>
  <div className="mb-3">
    <h2 className="text-lg px-2 mx-1 mb-1.5 font-bold inline-block" style="background: linear-gradient(transparent 60%, #8effa1 60%);">{{title}}</h2>
    <div class="flex flex-wrap">
      <div v-for="word in words" :key="word" class="m-1">
        <router-link :to="`/search/${word}`">
          <div class="flex border border-solid border-gray-300 rounded p-2 cursor-pointer hover:opacity-70">
            <img :src="require(`@/assets/img/words/${word}.png`)" class="object-contain w-6 h-6 mr-1.5" />
            {{word}}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
    }
  },
});
</script>
