<template>
  <div class="intro-page">
    <div class="bg-glow"></div>

    <div class="intro-container">
      <!-- HEADER -->
      <header class="intro-header reveal">
        <div class="brand-wrapper">
          <img src="/logoNPHvidt.svg" alt="NordicPark" class="main-logo" />
          <div class="logo-divider"></div>
          <span class="premium-label">Est. 2026</span>
        </div>
        <h1 class="hero-title" v-html="i18n.t('intro.title', { name: '<span class=\'text-gradient\'>NordicPark</span>' })"></h1>
        <p class="hero-subtitle">{{ i18n.t('intro.subtitle') }}</p>
        <p class="hero-subtitle2">{{ i18n.t('intro.subtitle2') }}</p>
      </header>

      <!-- TRUST BAR -->
      <div class="trust-bar reveal" style="animation-delay: 0.1s">
        <div class="trust-pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Fair kontrol
        </div>
        <div class="trust-pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Dokumentation ved hver afgift
        </div>
        <div class="trust-pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Hurtig dialog
        </div>
      </div>

      <!-- GATEWAY CARDS -->
      <div class="gateway-grid">
        <!-- PRIVATE -->
        <RouterLink :to="{ name: 'ticket' }" class="gateway-card reveal" style="animation-delay: 0.15s">
          <div class="card-badge blue">Privat</div>
          <div class="card-icon blue">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h2>{{ i18n.t('intro.privateTitle') }}</h2>
          <p>{{ i18n.t('intro.privateDesc') }}</p>
          <div class="card-btn blue">
            {{ i18n.t('intro.privateCta') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </RouterLink>

        <!-- BUSINESS -->
        <RouterLink :to="{ name: 'erhverv' }" class="gateway-card reveal" style="animation-delay: 0.25s">
          <div class="card-badge gold">Erhverv</div>
          <div class="card-icon gold">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
          </div>
          <h2>{{ i18n.t('intro.businessTitle') }}</h2>
          <p>{{ i18n.t('intro.businessDesc') }}</p>
          <div class="card-btn gold">
            {{ i18n.t('intro.businessCta') }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </RouterLink>
      </div>

      <!-- FOOTER -->
      <footer class="intro-footer reveal" style="animation-delay: 0.35s">
        <div class="footer-line"></div>
        <p>{{ i18n.t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
        <p class="footer-meta">CVR: 45 90 04 36 · C/O Værftet, Carlsensvej 4, 4600 Køge</p>
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
  min-height: 100dvh;
  background-color: var(--color-base);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1.5rem;
  color: var(--color-white);
  position: relative;
  overflow: hidden;
}

.bg-glow {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.07) 0%, transparent 68%);
  pointer-events: none;
  z-index: 0;
}

.intro-container {
  max-width: 860px;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* HEADER */
.intro-header {
  text-align: center;
  margin-bottom: 2rem;
}

.brand-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.main-logo {
  height: 32px;
  opacity: 0.92;
}

.logo-divider {
  width: 1px;
  height: 22px;
  background: var(--glass-border);
}

.premium-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-text-muted);
}

.hero-title {
  font-size: clamp(1.9rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.015em;
  margin-bottom: 1rem;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 55%, #93C5FD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  color: var(--color-slate);
  max-width: 520px;
  margin: 0 auto 0.4rem;
  line-height: 1.6;
}

.hero-subtitle2 {
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  color: var(--color-text-muted);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
}

/* TRUST BAR */
.trust-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
}

.trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 0.35rem 0.85rem;
  letter-spacing: 0.02em;
}

.trust-pill svg {
  color: var(--color-primary);
  flex-shrink: 0;
}

/* GATEWAY GRID */
.gateway-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.gateway-card {
  position: relative;
  padding: 2.5rem 2rem;
  text-decoration: none;
  border-radius: 28px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(8, 13, 28, 0.96));
  display: flex;
  flex-direction: column;
  transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.28s ease,
              box-shadow 0.32s ease;
}

.gateway-card:hover {
  transform: translateY(-6px);
  border-color: rgba(96, 165, 250, 0.35);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(96, 165, 250, 0.12);
}

/* CARD BADGE */
.card-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
}

.card-badge.blue {
  color: var(--color-primary);
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.card-badge.gold {
  color: var(--color-accent);
  background: rgba(250, 204, 21, 0.08);
  border: 1px solid rgba(250, 204, 21, 0.18);
}

/* CARD ICON */
.card-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.card-icon.blue {
  background: rgba(59, 130, 246, 0.12);
  color: #60A5FA;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.card-icon.gold {
  background: rgba(250, 204, 21, 0.08);
  color: var(--color-accent);
  border: 1px solid rgba(250, 204, 21, 0.16);
}

.gateway-card h2 {
  font-size: 1.45rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-white);
  letter-spacing: -0.02em;
  line-height: 1.25;
  padding-right: 3rem;
}

.gateway-card p {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin-bottom: 2rem;
  flex-grow: 1;
}

/* CTA BUTTON */
.card-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.65rem 1.25rem;
  border-radius: 10px;
  align-self: flex-start;
  transition: gap 0.25s ease, opacity 0.25s ease;
}

.card-btn.blue {
  background: var(--color-primary);
  color: #ffffff;
}

.card-btn.gold {
  background: rgba(250, 204, 21, 0.1);
  color: var(--color-accent);
  border: 1px solid rgba(250, 204, 21, 0.2);
}

.gateway-card:hover .card-btn {
  gap: 0.85rem;
  opacity: 0.9;
}

/* FOOTER */
.intro-footer {
  text-align: center;
  margin-top: 3rem;
}

.footer-line {
  width: 36px;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 auto 1.25rem;
}

.intro-footer p {
  color: var(--color-text-dim);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
}

.footer-meta {
  margin-top: 0.4rem;
  font-size: 0.72rem !important;
  letter-spacing: 0.02em !important;
  opacity: 0.7;
}

/* ANIMATIONS */
.reveal {
  opacity: 0;
  animation: revealUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* RESPONSIVE */
@media (max-width: 720px) {
  .intro-page {
    padding: 2rem 1.25rem;
    align-items: flex-start;
    padding-top: 5.5rem;
  }

  .gateway-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .gateway-card {
    padding: 2rem 1.5rem;
  }

  .trust-bar {
    gap: 0.45rem;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 1.85rem;
  }
}
</style>
