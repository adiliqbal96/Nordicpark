<template>
  <RouterLink class="back-link" :to="to">
    <span class="back-arrow">←</span>
    <span>{{ label }}</span>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    default: () => ({ name: 'home' })
  },
  label: {
    type: String,
    default: 'Tilbage'
  }
})
</script>
