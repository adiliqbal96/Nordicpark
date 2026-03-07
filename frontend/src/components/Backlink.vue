<template>
  <div class="back-link-wrapper">
    <RouterLink v-if="to" class="back-link glass" :to="to">
      <div class="back-arrow-container">
        <svg class="back-arrow-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="back-label">{{ label }}</span>
    </RouterLink>
    <button v-else class="back-link glass" @click="$emit('click')">
      <div class="back-arrow-container">
        <svg class="back-arrow-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="back-label">{{ label }}</span>
    </button>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: [Object, String, null],
    default: null
  },
  label: {
    type: String,
    default: 'Til forsiden'
  }
})

defineEmits(['click'])
</script>

<style scoped>
.back-link-wrapper {
  margin-bottom: 1.5rem;
  display: inline-flex;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1.25rem 0.6rem 0.8rem;
  text-decoration: none;
  border-radius: var(--radius-full);
  color: var(--color-white);
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  background: none;
  font-family: inherit;
}

.back-link.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.back-arrow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: var(--color-primary);
  border-radius: 50%;
  color: white;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.back-arrow-svg {
  width: 14px;
  height: 14px;
  transition: transform 0.4s ease;
}

.back-label {
  opacity: 0.8;
  letter-spacing: 0.02em;
}

/* Hover Effects */
.back-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-primary);
  transform: translateX(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.back-link:hover .back-arrow-container {
  background: var(--color-white);
  color: var(--color-primary);
}

.back-link:hover .back-arrow-svg {
  transform: translateX(-2px);
}

.back-link:hover .back-label {
  opacity: 1;
}

@media (max-width: 768px) {
  .back-link {
    padding: 0.5rem 1rem 0.5rem 0.6rem;
    font-size: 0.85rem;
    border: none;
    background: rgba(255, 255, 255, 0.05);
    cursor: pointer;
    font-family: inherit;
    width: auto;
  }
  .back-arrow-container {
    width: 24px;
    height: 24px;
  }
}
</style>
