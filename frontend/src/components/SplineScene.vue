<template>
  <div class="spline-wrapper" :class="className">
    <canvas ref="canvasRef" class="spline-canvas" />
    <div v-if="loading" class="spline-loader">
      <div class="spline-spinner" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Application } from '@splinetool/runtime'

const props = defineProps({
  scene: { type: String, required: true },
  className: { type: String, default: '' },
})

const canvasRef = ref(null)
const loading = ref(true)
let app = null

onMounted(async () => {
  if (!canvasRef.value) return
  try {
    app = new Application(canvasRef.value)
    await app.load(props.scene)
  } finally {
    loading.value = false
  }
})

onUnmounted(() => {
  if (app) app.dispose()
})
</script>

<style scoped>
.spline-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.spline-canvas {
  width: 100% !important;
  height: 100% !important;
}

.spline-loader {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spline-spinner {
  width: 36px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
