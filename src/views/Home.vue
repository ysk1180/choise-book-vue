<template>
  <Header />
  <Attention />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Attention from '@/components/Attention.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Attention,
  },
  created() {
    this.$store.dispatch('changeKeyword', '')
    this.$store.dispatch('clearBooks')
  },
});
</script>
