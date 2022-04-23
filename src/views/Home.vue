<template>
  <Header />
  <Attention />
  <RecommendWords />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Attention from '@/components/Attention.vue';
import RecommendWords from '@/components/RecommendWords.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Attention,
    RecommendWords,
  },
  created() {
    this.$store.dispatch('changeKeyword', '')
    this.$store.dispatch('clearBooks')
  },
});
</script>
