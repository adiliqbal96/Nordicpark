<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero" id="top">
      <!-- Spotlight effect -->
      <svg class="hero-spotlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none" aria-hidden="true">
        <g filter="url(#spotlight-filter)">
          <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill="white" fill-opacity="0.18"/>
        </g>
        <defs>
          <filter id="spotlight-filter" x="0.86" y="0.84" width="3785.16" height="2840.26"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur"/>
          </filter>
        </defs>
      </svg>

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

          <!-- RIGHT: 2D parking lot animation -->
          <div class="hero-visual" aria-hidden="true">
            <ParkingVisual />
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

    <!-- PROCESS / KONTROLRUTE -->
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

        <!-- KONTROLRUTE TRACK -->
        <div class="route-track">

          <!-- Step 1: above left — DOM order matches mobile flow -->
          <div class="rt-slot rt-above rt-col-1">
            <div class="cp-card">
              <span class="cp-num">01</span>
              <div class="cp-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h3>{{ i18n.t('business.processSteps.analysis.title') }}</h3>
              <p>{{ i18n.t('business.processSteps.analysis.desc') }}</p>
            </div>
            <div class="cp-stem"></div>
          </div>

          <!-- Step 2: below center — DOM order 2 ensures correct mobile flow -->
          <div class="rt-slot rt-below rt-col-2">
            <div class="cp-stem"></div>
            <div class="cp-card">
              <span class="cp-num">02</span>
              <div class="cp-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <h3>{{ i18n.t('business.processSteps.setup.title') }}</h3>
              <p>{{ i18n.t('business.processSteps.setup.desc') }}</p>
            </div>
          </div>

          <!-- Step 3: above right — DOM order 3 ensures correct mobile flow -->
          <div class="rt-slot rt-above rt-col-3">
            <div class="cp-card">
              <span class="cp-num">03</span>
              <div class="cp-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>{{ i18n.t('business.processSteps.operation.title') }}</h3>
              <p>{{ i18n.t('business.processSteps.operation.desc') }}</p>
            </div>
            <div class="cp-stem"></div>
          </div>

          <!-- Road row — spans all 3 columns -->
          <div class="rt-road">
            <div class="road-surface">
              <div class="road-dashes"></div>
            </div>
            <div class="road-node rn-1"><div class="rn-pulse"></div><div class="rn-core"></div></div>
            <div class="road-node rn-2"><div class="rn-pulse"></div><div class="rn-core"></div></div>
            <div class="road-node rn-3"><div class="rn-pulse"></div><div class="rn-core"></div></div>
            <div class="route-car">
              <svg width="52" height="22" viewBox="0 0 52 22" fill="none">
                <rect x="2" y="8" width="48" height="11" rx="3.5" fill="#1B3461"/>
                <rect x="10" y="2" width="26" height="9" rx="2" fill="#1B3461"/>
                <rect x="12" y="3" width="10" height="6" rx="1.2" fill="#93C5FD" opacity="0.75"/>
                <rect x="24" y="3" width="10" height="6" rx="1.2" fill="#93C5FD" opacity="0.75"/>
                <rect x="2" y="13" width="48" height="2.5" rx="0.5" fill="#FACC15"/>
                <rect x="16" y="0" width="20" height="3.5" rx="1.75" fill="#1D4ED8"/>
                <rect x="16" y="0" width="9" height="3.5" rx="1.5" class="rcar-blue"/>
                <rect x="27" y="0" width="9" height="3.5" rx="1.5" class="rcar-red"/>
                <circle cx="12" cy="20" r="3.5" fill="#0F172A" stroke="#334155" stroke-width="1.2"/>
                <circle cx="12" cy="20" r="1.6" fill="#475569"/>
                <circle cx="38" cy="20" r="3.5" fill="#0F172A" stroke="#334155" stroke-width="1.2"/>
                <circle cx="38" cy="20" r="1.6" fill="#475569"/>
              </svg>
            </div>
          </div>

          <!-- Empty layout slots for desktop grid (hidden on mobile) -->
          <div class="rt-slot rt-above rt-col-2 rt-empty"></div>
          <div class="rt-slot rt-below rt-col-1 rt-empty"></div>
          <div class="rt-slot rt-below rt-col-3 rt-empty"></div>

        </div>
      </div>
    </section>

    <!-- BRAND STORY -->
    <section class="brand-story-section">
      <div class="brand-story-inner">
        <p class="brand-story-eyebrow">Hvem er vi?</p>
        <h2 class="brand-story-title">Find din plads i Norden</h2>
        <p class="brand-story-sub">– Skabt af tre p-vagter med hjertet og ordentligheden i orden.</p>
        <div class="brand-story-body">
          <p>For de fleste er parkering bare praktisk. Men vi ved, at det også kan være en kilde til stress. Vi kender følelsen af at lede forgæves efter en plads, frustrationen over en app, der driller, eller usikkerheden ved et skilt, der er svært at tyde.</p>
          <p>Vi er tre stiftere, der alle startede vores karriere som p-vagter på gaden. Vi har brugt tusindvis af timer på asfalten — vi startede vores eget firma, fordi vi så et behov for en parkeringsservice, der bygger på mere end bare kontrol.</p>
        </div>
        <RouterLink :to="{ name: 'about' }" class="brand-story-link">
          Læs vores historie
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </RouterLink>
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
import ParkingVisual from '../components/ParkingVisual.vue'

const solutionCards = [
  {
    route: 'service-residential',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    titleKey: 'business.solutions.residential.title',
    descKey:  'business.solutions.residential.desc',
    linkKey:  'business.solutions.residential.link'
  },
  {
    route: 'service-business',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
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

.hero-spotlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 138%;
  height: 169%;
  opacity: 0;
  pointer-events: none;
  z-index: 0;
  animation: spotlight-in 1.2s 0.3s ease forwards;
}

@keyframes spotlight-in {
  to { opacity: 1; }
}

.hero-split {
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  min-width: 0;
}

.hero-visual {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
@media (max-width: 1100px) {
  .hero-split {
    grid-template-columns: 1fr 420px;
    gap: 3rem;
  }
}

@media (max-width: 900px) {
  .hero-split {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .hero-visual {
    display: flex;
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
  }

  .hero {
    min-height: auto;
  }
}

@media (max-width: 600px) {
  .hero-visual {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  :deep(.hero h1) {
    font-size: 1.9rem !important;
  }
}

</style>
