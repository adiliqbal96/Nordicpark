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
        <div class="topbar-left-group">
          <RouterLink :to="{ name: 'intro' }" class="logo-link" :class="{ 'is-intro-logo': route.name === 'intro' }">
            <img src="/logoNPHvidt.svg" alt="NordicPark" class="logo-img" />
            <span class="logo-text" v-show="route.name !== 'intro'">NordicPark</span>
          </RouterLink>

          <!-- Desktop Nav -->
          <nav class="main-nav desktop-nav">
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

        <!-- Hamburger Button -->
        <button 
          class="mobile-toggle" 
          @click="toggleMobileMenu" 
          :class="{ 'is-active': mobileMenuOpen }"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay">
        <nav class="mobile-nav-links">
          <template v-if="route.name === 'intro'">
            <RouterLink @click="closeMobileMenu" :to="{ name: 'intro' }">{{ i18n.t('nav.home') }}</RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'ticket' }">{{ i18n.t('nav.ticket') }}</RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'erhverv' }">{{ i18n.t('nav.solutions') }}</RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'contact' }" class="nav-cta">{{ i18n.t('nav.contact') }}</RouterLink>
          </template>
          <template v-else-if="route.name === 'ticket'">
            <RouterLink @click="closeMobileMenu" :to="{ name: 'intro' }">{{ i18n.t('nav.home') }}</RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'ticket' }" class="nav-cta active">{{ i18n.t('nav.ticket') }}</RouterLink>
          </template>
          <template v-else>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'erhverv', hash: '#solutions' }">{{ i18n.t('nav.solutions') }}</RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'erhverv', hash: '#why' }">{{ i18n.t('nav.why') }}</RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'erhverv', hash: '#process' }">{{ i18n.t('nav.process') }}</RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'contact' }" class="nav-cta">{{ i18n.t('nav.contact') }}</RouterLink>
          </template>
        </nav>
      </div>
    </Transition>

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
import { ref, onMounted, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import FaqChatBubble from './components/FaqChatBubble.vue'
import { i18n } from './i18n.js'

const route = useRoute()

const year = new Date().getFullYear()
const showingSplash = ref(true)
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close menu when route changes
watch(() => route.path, () => {
  closeMobileMenu()
})

onMounted(() => {
  // Simulate load time for splash screen effect
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

/* Mobile Toggle Button */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10001; /* Above the overlay */
}

.mobile-toggle span {
  width: 32px;
  height: 3px;
  background: var(--color-white);
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.mobile-toggle.is-active span:first-child { transform: rotate(45deg); }
.mobile-toggle.is-active span:nth-child(2) { opacity: 0; transform: translateX(20px); }
.mobile-toggle.is-active span:nth-child(3) { transform: rotate(-45deg); }

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(5, 10, 24, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

.mobile-nav-links a {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
}

.mobile-nav-links a:hover,
.mobile-nav-links a.active {
  color: var(--color-primary);
}

.mobile-nav-links .nav-cta {
  color: var(--color-accent);
}

/* Animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.topbar-left-group {
  display: flex;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 900px) {
  .topbar-left-group {
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .topbar-left-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .desktop-nav {
    display: none !important;
  }
  .mobile-toggle {
    display: flex;
    margin-left: 1rem;
  }
  .lang-selector-pill {
    margin-left: auto;
    padding: 0.25rem;
    gap: 0.25rem;
  }
  .lang-item {
    width: 38px;
    height: 38px;
  }
}
</style>
