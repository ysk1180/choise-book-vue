<template>
  <div class="min-h-screen flex flex-col">
    <Navbar/>
    <main class="flex-grow">
      <div class="max-w-4xl mx-auto">
      <router-view/>
      </div>
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