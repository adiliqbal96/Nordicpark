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

    <header class="topbar glass" :class="{ 'topbar-hidden': showingSplash }">
      <div class="topbar-inner">
        <!-- Brand & Nav Group - Hidden on Intro -->
        <div class="topbar-left-group" v-if="route.name !== 'intro'">
          <RouterLink :to="{ name: 'intro' }" class="logo-link">
            <img src="/logoNPHvidt.svg" alt="NordicPark" class="logo-img" />
            <span class="logo-text">NordicPark</span>
          </RouterLink>

          <nav class="main-nav">
            <template v-if="route.name === 'ticket'">
              <RouterLink :to="{ name: 'intro' }">{{ i18n.t('nav.home') }}</RouterLink>
              <RouterLink :to="{ name: 'ticket' }" class="nav-cta active">{{ i18n.t('nav.ticket') }}</RouterLink>
            </template>
            <template v-else>
              <RouterLink :to="{ name: 'erhverv', hash: '#solutions' }">{{ i18n.t('nav.solutions') }}</RouterLink>
              <RouterLink :to="{ name: 'erhverv', hash: '#why' }">{{ i18n.t('nav.why') }}</RouterLink>
              <RouterLink :to="{ name: 'erhverv', hash: '#process' }">{{ i18n.t('nav.process') }}</RouterLink>
              <RouterLink :to="{ name: 'contact' }" class="nav-cta">{{ i18n.t('nav.contact') }}</RouterLink>
            </template>
          </nav>
        </div>

        <!-- ALWAYS VISIBLE LANG SELECTOR -->
        <div class="lang-selector-pill">
          <button 
            class="lang-item" 
            :class="{ active: i18n.locale.value === 'da' }" 
            @click="i18n.setLocale('da')"
            title="Dansk"
          >
            <div class="flag-circle-img">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="512" fill="#c8102e"/>
                <path d="M146.3 0h73.1v512h-73.1zM0 219.4h512v73.1H0z" fill="#fff"/>
              </svg>
            </div>
          </button>
          <button 
            class="lang-item" 
            :class="{ active: i18n.locale.value === 'en' }" 
            @click="i18n.setLocale('en')"
            title="English"
          >
            <div class="flag-circle-img">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="512" fill="#012169"/>
                <path d="m0 0 512 512M512 0 0 512" stroke="#fff" stroke-width="80"/>
                <path d="m0 0 512 512M512 0 0 512" stroke="#c8102e" stroke-width="48"/>
                <path d="M256 0v512M0 256h512" stroke="#fff" stroke-width="120"/>
                <path d="M256 0v512M0 256h512" stroke="#c8102e" stroke-width="72"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>

    <main class="content" :class="{ 'content-blur': showingSplash, 'is-intro': route.name === 'intro' }">
      <RouterView />
    </main>

    <footer v-if="route.name !== 'intro'" class="footer">
      <div class="footer-links">
        <RouterLink :to="{ name: 'terms' }">{{ i18n.t('footer.terms') }}</RouterLink>
        <RouterLink :to="{ name: 'parking-terms' }">{{ i18n.t('footer.parkingTerms') }}</RouterLink>
        <RouterLink :to="{ name: 'privacy' }">{{ i18n.t('footer.privacy') }}</RouterLink>
        <RouterLink :to="{ name: 'cookie' }">{{ i18n.t('footer.cookie') }}</RouterLink>
      </div>
      <p>{{ i18n.t('footer.copyright', { year: year }) }}</p>
    </footer>
    <FaqChatBubble />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import FaqChatBubble from './components/FaqChatBubble.vue'
import { i18n } from './i18n.js'

const route = useRoute()

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
  background: var(--color-base);
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
  flex: 1;
}

.content.is-intro {
  padding-top: 4rem;
}

/* Language Selector Pill Styles */
.lang-selector-pill {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.35rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-left: auto;
  position: relative;
  gap: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.lang-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
}

.lang-item.active {
  background: linear-gradient(135deg, var(--color-accent) 0%, #F59E0B 100%);
  box-shadow: 0 4px 15px rgba(251, 191, 36, 0.4);
  transform: scale(1.05);
}

.lang-item:hover:not(.active) {
  background: rgba(255, 255, 255, 0.1);
}

.flag-circle-img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  background: transparent; /* Fixed the white background issue */
}

.lang-item:hover .flag-circle-img {
  transform: scale(1.1);
}

.flag-circle-img svg {
  width: 100%;
  height: 100%;
  display: block;
}

.topbar-left-group {
  display: flex;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 900px) {
  .topbar-inner {
    justify-content: space-between;
  }
}

</style>
