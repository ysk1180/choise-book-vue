<template>
  <Header />
  <Attention />
  <RecommendLinks />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Attention from '@/components/Attention.vue';
import RecommendLinks from '@/components/RecommendLinks.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Attention,
    RecommendLinks,
  },
  created() {
    this.$store.dispatch('changeKeyword', '')
    this.$store.dispatch('clearBooks')
    document.title = '技術書選び'
  },
});
</script>
