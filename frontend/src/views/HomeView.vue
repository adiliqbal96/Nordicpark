<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero" id="top">
      <div class="hero-inner hero-inner--wide">
        <div class="hero-split">

          <!-- LEFT: Text -->
          <div class="hero-text">
            <div class="hero-eyebrow">
              <span class="hero-eyebrow-line"></span>
              <p class="hero-kicker">{{ i18n.t('business.heroKicker') }}</p>
            </div>

            <h1>{{ i18n.t('business.heroTitle') }}</h1>
            <p class="hero-subtitle">{{ i18n.t('business.heroSubtitle') }}</p>

            <div class="hero-actions">
              <RouterLink :to="{ name: 'contact' }" class="btn btn-cta-gold">
                {{ i18n.t('business.heroCtaPrimary') }}
              </RouterLink>
              <a href="#solutions" class="btn btn-ghost">
                {{ i18n.t('business.heroCtaSecondary') }}
              </a>
            </div>
          </div>

          <!-- RIGHT: Parking sign visual -->
          <div class="hero-visual" aria-hidden="true">
            <div class="sign-scene">
              <div class="sign-glow"></div>

              <div class="sign-wrapper">
                <!-- Realistic Danish parking sign -->
                <svg class="sign-svg" viewBox="0 0 200 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Sign face -->
                  <rect width="200" height="232" rx="9" fill="#003FA0"/>
                  <!-- Inner border (standard road sign detail) -->
                  <rect x="7" y="7" width="186" height="218" rx="5" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
                  <!-- The P -->
                  <text x="100" y="161" text-anchor="middle" fill="white"
                    font-size="144" font-weight="900"
                    font-family="Arial Black, Arial, system-ui, sans-serif"
                    letter-spacing="-3">P</text>
                  <!-- White time restriction strip -->
                  <rect x="0" y="195" width="200" height="37" rx="0" fill="white"/>
                  <path d="M0 195 H200 V228 Q200 232 196 232 H4 Q0 232 0 228 Z" fill="white"/>
                  <text x="100" y="210" text-anchor="middle" fill="#003FA0"
                    font-size="9" font-weight="600"
                    font-family="Arial, system-ui, sans-serif"
                    letter-spacing="0.8">MANDAG – FREDAG</text>
                  <text x="100" y="225" text-anchor="middle" fill="#003FA0"
                    font-size="13.5" font-weight="800"
                    font-family="Arial, system-ui, sans-serif">08:00 – 17:00</text>
                  <!-- Post -->
                  <rect x="91" y="232" width="18" height="30" fill="#1E293B"/>
                  <!-- Base plate -->
                  <rect x="76" y="260" width="48" height="12" rx="5" fill="#1E293B"/>
                </svg>

                <!-- NordicPark plate under sign -->
                <div class="sign-plate">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  NordicPark
                </div>
              </div>

              <!-- Floating badge: active zone -->
              <div class="zone-badge">
                <span class="zone-dot"></span>
                Aktiv kontrolzone
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- TRUST STRIP -->
    <div class="trust-strip">
      <div class="trust-item">
        <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
        </svg>
        <span class="trust-label">Professionel kontrol</span>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/>
        </svg>
        <span class="trust-label">Fair & transparent</span>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        <span class="trust-label">Skræddersyet aftale</span>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <svg class="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <span class="trust-label">Dokumenteret kontrol</span>
      </div>
    </div>

    <!-- SOLUTIONS -->
    <section class="cards-section" id="solutions">
      <div class="container--standard">
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, ease: [0.16, 1, 0.3, 1] } }"
          class="section-kicker"
        >{{ i18n.t('business.sectionBadge') }}</div>

        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80, ease: [0.16, 1, 0.3, 1] } }"
          class="section-title centered"
        >{{ i18n.t('business.solutionsTitle') }}</h2>

        <div class="cards-grid">
          <RouterLink
            v-for="(card, i) in solutionCards"
            :key="card.route"
            :to="{ name: card.route }"
            class="card"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 550, delay: i * 110, ease: [0.16, 1, 0.3, 1] } }"
          >
            <div class="card-image-wrapper">
              <img :src="card.img" :alt="i18n.t(card.titleKey)" class="card-image" loading="lazy" />
            </div>
            <h3>{{ i18n.t(card.titleKey) }}</h3>
            <p>{{ i18n.t(card.descKey) }}</p>
            <span class="link">{{ i18n.t(card.linkKey) }}</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section class="why-section" id="why">
      <div class="why-inner">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, ease: [0.16, 1, 0.3, 1] } }"
          class="section-title centered"
        >{{ i18n.t('business.whyTitle') }}</h2>

        <div class="why-layout">
          <div class="why-list">
            <article
              class="why-card"
              v-motion
              :initial="{ opacity: 0, x: -28 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 480, ease: [0.16, 1, 0.3, 1] } }"
            >
              <div class="why-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div class="why-text">
                <h3>{{ i18n.t('business.whyCards.traditional.title') }}</h3>
                <p>{{ i18n.t('business.whyCards.traditional.desc') }}</p>
              </div>
            </article>

            <article
              class="why-card"
              v-motion
              :initial="{ opacity: 0, x: -28 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 480, delay: 110, ease: [0.16, 1, 0.3, 1] } }"
            >
              <div class="why-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/>
                </svg>
              </div>
              <div class="why-text">
                <h3>{{ i18n.t('business.whyCards.fair.title') }}</h3>
                <p>{{ i18n.t('business.whyCards.fair.desc') }}</p>
              </div>
            </article>

            <article
              class="why-card"
              v-motion
              :initial="{ opacity: 0, x: -28 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 480, delay: 220, ease: [0.16, 1, 0.3, 1] } }"
            >
              <div class="why-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div class="why-text">
                <h3>{{ i18n.t('business.whyCards.custom.title') }}</h3>
                <p>{{ i18n.t('business.whyCards.custom.desc') }}</p>
              </div>
            </article>
          </div>

          <aside
            class="why-highlight"
            v-motion
            :initial="{ opacity: 0, x: 36 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 560, delay: 160, ease: [0.16, 1, 0.3, 1] } }"
          >
            <h3>{{ i18n.t('business.whyHighlight.title') }}</h3>
            <p>{{ i18n.t('business.whyHighlight.desc') }}</p>
          </aside>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="process-section" id="process">
      <div class="process-inner">
        <p
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, ease: [0.16, 1, 0.3, 1] } }"
          class="section-kicker"
        >{{ i18n.t('business.processBadge') }}</p>

        <h2
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80, ease: [0.16, 1, 0.3, 1] } }"
          class="section-title centered"
        >{{ i18n.t('business.processTitle') }}</h2>

        <p
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 420, delay: 140, ease: [0.16, 1, 0.3, 1] } }"
          class="process-intro"
        >{{ i18n.t('business.processIntro') }}</p>

        <div class="process-grid">
          <article
            v-for="(step, i) in processSteps"
            :key="step.titleKey"
            class="process-card"
            v-motion
            :initial="{ opacity: 0, scale: 0.96, y: 20 }"
            :visible-once="{ opacity: 1, scale: 1, y: 0, transition: { duration: 480, delay: i * 130, ease: [0.16, 1, 0.3, 1] } }"
          >
            <span class="process-number" aria-hidden="true">0{{ i + 1 }}</span>
            <div class="process-badge">{{ i + 1 }}</div>
            <h3>{{ i18n.t(step.titleKey) }}</h3>
            <p>{{ i18n.t(step.descKey) }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section" id="contact-cta">
      <div
        class="cta-inner"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 560, ease: [0.16, 1, 0.3, 1] } }"
      >
        <h2>{{ i18n.t('business.ctaTitle') }}</h2>
        <p>{{ i18n.t('business.ctaDesc') }}</p>
        <div class="cta-actions">
          <RouterLink :to="{ name: 'contact' }" class="btn cta-primary">
            {{ i18n.t('business.ctaBtnPrimary') }}
          </RouterLink>
          <RouterLink :to="{ name: 'erhverv', hash: '#solutions' }" class="btn cta-secondary">
            {{ i18n.t('business.ctaBtnSecondary') }}
          </RouterLink>
        </div>
        <p class="cta-subtext">Gratis og uforpligtende · Vi vender tilbage inden for 24 timer</p>
      </div>
    </section>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { i18n } from '../i18n.js'

const solutionCards = [
  {
    route: 'service-residential',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
    titleKey: 'business.solutions.residential.title',
    descKey:  'business.solutions.residential.desc',
    linkKey:  'business.solutions.residential.link'
  },
  {
    route: 'service-business',
    img: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop',
    titleKey: 'business.solutions.business.title',
    descKey:  'business.solutions.business.desc',
    linkKey:  'business.solutions.business.link'
  },
  {
    route: 'service-private',
    img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop',
    titleKey: 'business.solutions.private.title',
    descKey:  'business.solutions.private.desc',
    linkKey:  'business.solutions.private.link'
  }
]

const processSteps = [
  { titleKey: 'business.processSteps.analysis.title',  descKey: 'business.processSteps.analysis.desc' },
  { titleKey: 'business.processSteps.setup.title',     descKey: 'business.processSteps.setup.desc' },
  { titleKey: 'business.processSteps.operation.title', descKey: 'business.processSteps.operation.desc' }
]
</script>

<style scoped>
/* ── HERO SPLIT LAYOUT ── */
.hero {
  min-height: 78vh;
}

:deep(.hero-inner--wide) {
  max-width: 1140px;
  padding: 0 2rem;
}

.hero-split {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5rem;
  align-items: center;
}

.hero-text {
  min-width: 0;
}

/* ── PARKING SIGN VISUAL ── */
.hero-visual {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-scene {
  position: relative;
  width: 200px;
}

.sign-glow {
  position: absolute;
  inset: -60px;
  background: radial-gradient(circle, rgba(0, 63, 160, 0.18) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.sign-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sign-svg {
  width: 200px;
  height: auto;
  filter: drop-shadow(0 12px 32px rgba(0, 63, 160, 0.35)) drop-shadow(0 2px 8px rgba(0,0,0,0.4));
}

.sign-plate {
  margin-top: -2px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.sign-plate svg {
  color: var(--color-primary);
}

.zone-badge {
  position: absolute;
  bottom: 28px;
  right: -72px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(10, 20, 40, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 999px;
  padding: 0.35rem 0.85rem 0.35rem 0.6rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  white-space: nowrap;
}

.zone-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
  animation: pulse-dot 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2); }
  50%       { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.08); }
}

/* ── HERO BUTTON OVERRIDES ── */
.btn-cta-gold {
  background: var(--color-accent);
  color: #0B1220;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.85rem 2rem;
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-cta-gold:hover {
  background: var(--color-gold-light);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(250, 204, 21, 0.25);
}

.btn-ghost {
  background: transparent;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.85rem 2rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  border-color: rgba(255, 255, 255, 0.35);
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

/* ── SECTIONS ── */
.cards-section,
.why-section,
.process-section {
  padding-top: clamp(3.5rem, 6vw, 5.5rem);
  padding-bottom: clamp(3.5rem, 6vw, 5.5rem);
}

.cta-section {
  padding: clamp(4rem, 7vw, 6rem) 2rem;
}

/* ── CARDS ── */
:deep(.card) {
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.22);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.25s ease,
              box-shadow 0.3s ease;
}

:deep(.card:hover) {
  transform: translateY(-4px);
  border-color: rgba(96, 165, 250, 0.25);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.38);
}

:deep(.card .link) {
  transition: gap 0.22s ease, color 0.2s ease;
}

:deep(.card:hover .link) {
  gap: 1rem;
  color: #93C5FD;
}

/* ── PROCESS ── */
:deep(.process-card) {
  border: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: none;
}

:deep(.process-card:hover) {
  border-color: rgba(96, 165, 250, 0.25);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.3);
  transform: translateY(-4px);
}

:deep(.process-number) {
  color: rgba(255, 255, 255, 0.05);
  font-size: clamp(3.5rem, 6vw, 5rem);
}

:deep(.process-card:hover .process-number) {
  color: rgba(255, 255, 255, 0.08);
}

/* ── WHY ── */
:deep(.why-card) {
  border: 1px solid rgba(148, 163, 184, 0.11);
}

/* ── CTA SUBTEXT ── */
.cta-subtext {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.02em;
}

/* ── HERO TITLE SIZE ── */
:deep(.hero h1) {
  font-size: clamp(2rem, 4vw, 3.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.18;
}

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .hero-split {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-visual {
    display: none;
  }

  .hero {
    min-height: auto;
  }
}

@media (max-width: 768px) {
  :deep(.hero h1) {
    font-size: 1.9rem !important;
  }
}
</style>
