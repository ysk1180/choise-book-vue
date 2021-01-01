<template>
  <div class="min-h-screen flex flex-col">
    <Navbar/>
    <main class="flex-grow">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Navbar,
  }
})
</script>