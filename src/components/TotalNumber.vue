<template>
  <div class="text-right mr-4 text-sm text-gray-800">
    検索結果 {{number}}件
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TotalNumber',
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
})
</script>