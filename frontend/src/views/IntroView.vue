<template>
  <div class="intro-page">
    <!-- SUBTLE BACKGROUND ELEMENTS -->
    <div class="bg-glow"></div>
    
    <div class="intro-container">
      <header class="intro-header reveal">
        <div class="brand-wrapper">
          <img src="/logoNPHvidt.svg" alt="NordicPark" class="main-logo" />
          <div class="logo-divider"></div>
          <span class="premium-label">Est. 2024</span>
        </div>
        <h1 class="wow-title" v-html="i18n.t('intro.title', { name: '<span class=\'text-gradient\'>NordicPark</span>' })"></h1>
        <p class="wow-subtitle">{{ i18n.t('intro.subtitle') }}</p>
      </header>

      <div class="gateway-grid">
        <!-- PRIVATE PATH -->
        <RouterLink :to="{ name: 'ticket' }" class="gateway-card glass reveal" style="transition-delay: 0.1s">
          <div class="card-tag">Privat</div>
          <div class="card-body">
            <div class="card-icon-wrapper">💳</div>
            <h2>{{ i18n.t('intro.privateTitle') }}</h2>
            <p>{{ i18n.t('intro.privateDesc') }}</p>
            <div class="card-cta">
              {{ i18n.t('intro.privateCta') }} <span class="arrow">→</span>
            </div>
          </div>
        </RouterLink>

        <!-- BUSINESS PATH -->
        <RouterLink :to="{ name: 'erhverv' }" class="gateway-card glass reveal" style="transition-delay: 0.2s">
          <div class="card-tag gold">Erhverv</div>
          <div class="card-body">
            <div class="card-icon-wrapper">🏢</div>
            <h2>{{ i18n.t('intro.businessTitle') }}</h2>
            <p>{{ i18n.t('intro.businessDesc') }}</p>
            <div class="card-cta gold">
              {{ i18n.t('intro.businessCta') }} <span class="arrow">→</span>
            </div>
          </div>
        </RouterLink>
      </div>

      <footer class="intro-footer reveal" style="transition-delay: 0.4s">
        <div class="footer-line"></div>
        <p>{{ i18n.t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { i18n } from '../i18n.js'
</script>

<style scoped>
.intro-page {
  min-height: 100vh;
  background-color: var(--color-base);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: var(--color-white);
  position: relative;
  overflow: hidden;
}

.bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(51, 102, 255, 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.intro-container {
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* HEADER STYLES */
.intro-header {
  text-align: center;
  margin-bottom: 5rem;
}

.brand-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.main-logo {
  height: 70px;
  filter: drop-shadow(0 0 20px rgba(51, 102, 255, 0.2));
}

.logo-divider {
  width: 1px;
  height: 30px;
  background: var(--glass-border);
}

.premium-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-slate);
}

.wow-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
}

.text-gradient {
  background: linear-gradient(135deg, var(--color-white) 30%, var(--color-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.wow-subtitle {
  font-size: clamp(1.1rem, 1.5vw, 1.3rem);
  color: var(--color-slate);
  max-width: 600px;
  margin: 0 auto;
}

/* GATEWAY GRID */
.gateway-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}

.gateway-card {
  position: relative;
  padding: 4rem 3rem;
  text-decoration: none;
  border-radius: var(--radius-xl);
  border: 1px solid var(--glass-border);
  transition: var(--transition-smooth);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  display: flex;
  flex-direction: column;
}

.gateway-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: rgba(51, 102, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), var(--shadow-premium);
}

.card-tag {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-primary);
  background: rgba(51, 102, 255, 0.1);
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
}

.card-tag.gold {
  color: var(--color-accent);
  background: rgba(252, 211, 77, 0.1);
}

.card-icon-wrapper {
  font-size: 4.5rem;
  margin-bottom: 2.5rem;
  display: flex;
}

.gateway-card h2 {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  color: var(--color-white);
  letter-spacing: -0.02em;
}

.gateway-card p {
  font-size: 1.15rem;
  color: var(--color-slate);
  line-height: 1.6;
  margin-bottom: 3.5rem;
  flex-grow: 1;
}

.card-cta {
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-primary);
  transition: gap 0.3s ease;
}

.card-cta.gold {
  color: var(--color-accent);
}

.gateway-card:hover .card-cta {
  gap: 1.25rem;
}

.arrow {
  font-size: 1.25rem;
}

/* FOOTER */
.intro-footer {
  text-align: center;
  margin-top: 6rem;
}

.footer-line {
  width: 50px;
  height: 2px;
  background: var(--color-primary);
  margin: 0 auto 2rem;
  opacity: 0.5;
}

.intro-footer p {
  color: var(--color-slate);
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ANIMATIONS */
.reveal {
  opacity: 0;
  animation: revealUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .gateway-grid {
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 1rem 1.5rem 2rem 1.5rem;
    margin: 0 -2rem; /* Bleed edge */
    scroll-padding-left: 1.5rem;
    -ms-overflow-style: none; /* Hide scrollbar IE/Edge */
    scrollbar-width: none; /* Hide scrollbar Firefox */
  }

  .gateway-grid::-webkit-scrollbar {
    display: none; /* Hide scrollbar Safari/Chrome */
  }

  .gateway-card {
    flex: 0 0 82%; /* Slightly smaller for a peek next card */
    scroll-snap-align: center; /* Center snap feels more premium */
    padding: 3rem 2rem;
  }
  
  .intro-header {
    margin-bottom: 3.5rem;
  }
  
  .brand-wrapper {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .main-logo {
    height: 40px; /* even smaller for mobile */
  }

  .logo-divider {
    height: 20px;
  }

  .premium-label {
    font-size: 0.7rem;
  }
  
  .wow-title {
    font-size: 2.25rem; /* Better wrapping on iPhone */
  }


  .card-icon-wrapper {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }

  .gateway-card h2 {
    font-size: 1.75rem;
  }

  .gateway-card p {
    font-size: 1rem; /* Slightly smaller text */
    margin-bottom: 2.5rem;
  }
}
@media (max-width: 400px) {
    .wow-title {
        font-size: 2rem;
    }
}
</style>
