<template>
  <div class="app">
    <!-- Instagram-style Splash Screen -->
    <Transition name="splash-fade">
      <div v-if="showingSplash" class="splash-screen">
        <div class="splash-content">
          <img src="/logoNPHvidt.svg" alt="NordicPark logo" class="splash-logo" />
        </div>
      </div>
    </Transition>

    <header class="topbar" :class="{ 'topbar-hidden': showingSplash }">
      <div class="topbar-inner">
        <RouterLink :to="{ name: 'home', hash: '#top' }" class="logo-link">
          <img src="/logoNPHvidt.svg" alt="NordicPark logo" class="logo-img" />
          <span class="logo-text">NordicPark</span>
        </RouterLink>

        <nav class="main-nav">
          <RouterLink :to="{ name: 'home', hash: '#solutions' }">Løsninger</RouterLink>
          <RouterLink :to="{ name: 'home', hash: '#why' }">Hvorfor os</RouterLink>
          <RouterLink :to="{ name: 'home', hash: '#process' }">Proces</RouterLink>
          <RouterLink :to="{ name: 'home', hash: '#contact-cta' }" class="nav-cta">Kontakt</RouterLink>
        </nav>
      </div>
    </header>

    <main class="content" :class="{ 'content-blur': showingSplash }">
      <RouterView />
    </main>

    <footer class="footer">
      <div class="footer-links">
        <RouterLink :to="{ name: 'terms' }">Handelsbetingelser</RouterLink>
        <RouterLink :to="{ name: 'parking-terms' }">Parkeringsbetingelser</RouterLink>
        <RouterLink :to="{ name: 'privacy' }">Privatlivspolitik</RouterLink>
        <RouterLink :to="{ name: 'cookie' }">Cookiepolitik</RouterLink>
      </div>
      <p>© {{ year }} NordicPark · Professionel parkeringskontrol</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const year = new Date().getFullYear()
const showingSplash = ref(true)

onMounted(() => {
  // Simulate load time for splash screen effect - shortened for performance
  setTimeout(() => {
    showingSplash.value = false
  }, 800)
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Splash Screen Styles */
.splash-screen {
  position: fixed;
  inset: 0;
  background: var(--color-bg);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.splash-logo {
  height: clamp(200px, 40vw, 400px);
  width: auto;
  animation: splash-pulse 1.8s ease-in-out infinite;
}

@keyframes splash-pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
}

/* Transitions */
.splash-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.splash-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.topbar-hidden {
  opacity: 0;
  transform: translateY(-20px);
}

.content-blur {
  filter: blur(10px);
  transform: scale(0.98);
}

.topbar {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.content {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Nav CTA specific */
.nav-cta {
  background: #fff !important;
  color: #000 !important;
  font-weight: 700 !important;
}

.nav-cta:hover {
  background: #f0f0f0 !important;
  transform: translateY(-1px);
}
</style>
