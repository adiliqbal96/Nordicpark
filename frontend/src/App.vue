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

        <!-- Logo -->
        <RouterLink :to="{ name: 'intro' }" class="logo-link">
          <img src="/logoNPHvidt.svg" alt="NordicPark" class="logo-img" />
        </RouterLink>

        <!-- Divider + Desktop Nav links -->
        <template v-if="route.name !== 'intro'">
          <div class="nav-divider desktop-nav"></div>
          <nav class="main-nav desktop-nav">
            <template v-if="route.name === 'ticket'">
              <RouterLink :to="{ name: 'intro' }">{{ i18n.t('nav.home') }}</RouterLink>
            </template>
            <template v-else>
              <RouterLink :to="{ name: 'erhverv', hash: '#solutions' }">{{ i18n.t('nav.solutions') }}</RouterLink>
              <RouterLink :to="{ name: 'erhverv', hash: '#why' }">{{ i18n.t('nav.why') }}</RouterLink>
              <RouterLink :to="{ name: 'erhverv', hash: '#process' }">{{ i18n.t('nav.process') }}</RouterLink>
            </template>
          </nav>
        </template>

        <!-- Spacer -->
        <div class="nav-flex-spacer"></div>

        <!-- Lang selector -->
        <div class="lang-selector-pill">
          <button class="lang-item" :class="{ active: i18n.locale.value === 'da' }" @click="i18n.setLocale('da')" title="Dansk">DA</button>
          <button class="lang-item" :class="{ active: i18n.locale.value === 'en' }" @click="i18n.setLocale('en')" title="English">EN</button>
        </div>

        <!-- Kontakt CTA (desktop only) -->
        <RouterLink v-if="route.name !== 'contact'" :to="{ name: 'contact' }" class="nav-pill-cta desktop-nav">
          {{ i18n.t('nav.contact') }}
        </RouterLink>

        <!-- Mobile hamburger -->
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
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu">
        <nav class="mobile-nav-links" @click.stop>
          <template v-if="route.name === 'intro'">
            <RouterLink @click="closeMobileMenu" :to="{ name: 'intro' }">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </span> {{ i18n.t('nav.home') }}
            </RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'ticket' }">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </span> {{ i18n.t('nav.ticket') }}
            </RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'erhverv' }">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              </span> {{ i18n.t('nav.solutions') }}
            </RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'contact' }" class="nav-cta gold">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span> {{ i18n.t('nav.contact') }}
            </RouterLink>
          </template>
          <template v-else-if="route.name === 'ticket'">
            <RouterLink @click="closeMobileMenu" :to="{ name: 'intro' }">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </span> {{ i18n.t('nav.home') }}
            </RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'ticket' }" class="active">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </span> {{ i18n.t('nav.ticket') }}
            </RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'contact' }" class="nav-cta gold">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span> {{ i18n.t('nav.contact') }}
            </RouterLink>
          </template>
          <template v-else>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'intro' }">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </span> {{ i18n.t('nav.home') }}
            </RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'erhverv', hash: '#solutions' }">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>
              </span> {{ i18n.t('nav.solutions') }}
            </RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'erhverv', hash: '#why' }">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.57a2.41 2.41 0 0 0 3.41 0l7.59-7.57a2.41 2.41 0 0 0 0-3.41l-7.59-7.57a2.41 2.41 0 0 0-3.41 0Z"/></svg>
              </span> {{ i18n.t('nav.why') }}
            </RouterLink>
            <RouterLink @click="closeMobileMenu" :to="{ name: 'contact' }" class="nav-cta gold">
              <span class="nav-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span> {{ i18n.t('nav.contact') }}
            </RouterLink>
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
      <div class="footer-info">
        <span>CVR: 45 90 04 36</span>
        <span class="footer-divider">·</span>
        <span>Tlf: 91 42 54 24</span>
        <span class="footer-divider">·</span>
        <span>C/O Værftet, Carlsensvej 4, 4600 Køge</span>
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

/* Lang selector — borderless inside the pill */
.lang-selector-pill {
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 0.25rem;
}

.lang-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  color: rgba(255, 255, 255, 0.38);
  transition: color 0.2s ease, background 0.2s ease;
}

.lang-item.active {
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.1);
}

.lang-item:hover:not(.active) {
  color: rgba(255, 255, 255, 0.65);
}

/* Kontakt CTA pill button */
.nav-pill-cta {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}

.nav-pill-cta:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.25);
  color: #fff;
}

/* Flex spacer to push lang+cta to right */
.nav-flex-spacer {
  flex: 1;
  min-width: 1.5rem;
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
  background: rgba(17, 17, 17, 0.97);
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
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-white);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  letter-spacing: -0.02em;
}

.nav-icon {
  font-size: 1.5rem;
  opacity: 0.8;
  filter: grayscale(0.2);
}

.mobile-nav-links a:hover,
.mobile-nav-links a.active {
  color: var(--color-accent);
  transform: scale(1.05);
}

.mobile-nav-links .nav-cta.gold {
  color: var(--color-accent);
  background: rgba(252, 211, 77, 0.1);
  padding: 0.8rem 2.5rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(252, 211, 77, 0.2);
  margin-top: 1rem;
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

@media (max-width: 768px) {
  .desktop-nav {
    display: none !important;
  }
  .mobile-toggle {
    display: flex;
    margin-left: 0.25rem;
  }
  .nav-flex-spacer {
    min-width: 0.5rem;
  }
}
</style>
