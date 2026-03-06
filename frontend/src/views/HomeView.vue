<template>
  <div class="home">
    <!-- B2B HERO (ERHVERV) -->
    <section class="hero reveal" id="top">
      <div class="hero-inner">
        <p class="hero-kicker">{{ i18n.t('business.heroKicker') }}</p>
        <h1 class="text-gradient">{{ i18n.t('business.heroTitle') }}</h1>
        <p class="hero-subtitle">
          {{ i18n.t('business.heroSubtitle') }}
        </p>

        <div class="hero-actions">
          <RouterLink :to="{ name: 'contact' }" class="btn primary-gold lg">{{ i18n.t('business.heroCtaPrimary') }}</RouterLink>
          <a href="#solutions" class="btn secondary lg">{{ i18n.t('business.heroCtaSecondary') }}</a>
        </div>
      </div>
    </section>

    <!-- B2B SOLUTIONS -->
    <section class="cards-section reveal" id="solutions">
      <div class="container--standard">
        <div class="section-kicker">{{ i18n.t('business.sectionBadge') }}</div>
        <h2 class="section-title centered">{{ i18n.t('business.solutionsTitle') }}</h2>

        <div class="cards-grid">
          <RouterLink :to="{ name: 'service-residential' }" class="card">
            <div class="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" :alt="i18n.t('business.solutions.residential.title')" class="card-image" loading="lazy" />
            </div>
            <h3>{{ i18n.t('business.solutions.residential.title') }}</h3>
            <p>
              {{ i18n.t('business.solutions.residential.desc') }}
            </p>
            <span class="link">{{ i18n.t('business.solutions.residential.link') }}</span>
          </RouterLink>

          <RouterLink :to="{ name: 'service-business' }" class="card">
            <div class="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" :alt="i18n.t('business.solutions.business.title')" class="card-image" loading="lazy" />
            </div>
            <h3>{{ i18n.t('business.solutions.business.title') }}</h3>
            <p>
              {{ i18n.t('business.solutions.business.desc') }}
            </p>
            <span class="link">{{ i18n.t('business.solutions.business.link') }}</span>
          </RouterLink>

          <RouterLink :to="{ name: 'service-private' }" class="card">
            <div class="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800" :alt="i18n.t('business.solutions.private.title')" class="card-image" loading="lazy" />
            </div>
            <h3>{{ i18n.t('business.solutions.private.title') }}</h3>
            <p>
              {{ i18n.t('business.solutions.private.desc') }}
            </p>
            <span class="link">{{ i18n.t('business.solutions.private.link') }}</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- WHY / HVORFOR VÆLGE OS -->
    <section class="why-section" id="why">
      <div class="why-inner">
        <h2 class="section-title centered">{{ i18n.t('business.whyTitle') }}</h2>

        <div class="why-layout">
          <div class="why-list">
            <article class="why-card">
              <h3>
                <span class="why-icon">✅</span>
                {{ i18n.t('business.whyCards.traditional.title') }}
              </h3>
              <p>{{ i18n.t('business.whyCards.traditional.desc') }}</p>
            </article>

            <article class="why-card">
              <h3>
                <span class="why-icon">⚖️</span>
                {{ i18n.t('business.whyCards.fair.title') }}
              </h3>
              <p>{{ i18n.t('business.whyCards.fair.desc') }}</p>
            </article>

            <article class="why-card">
              <h3>
                <span class="why-icon">🤝</span>
                {{ i18n.t('business.whyCards.custom.title') }}
              </h3>
              <p>{{ i18n.t('business.whyCards.custom.desc') }}</p>
            </article>
          </div>

          <aside class="why-highlight">
            <h3>{{ i18n.t('business.whyHighlight.title') }}</h3>
            <p>
              {{ i18n.t('business.whyHighlight.desc') }}
            </p>
          </aside>
        </div>
      </div>
    </section>

    <!-- PROCESS / SÅDAN ARBEJDER VI -->
    <section class="process-section" id="process">
      <div class="process-inner">
        <p class="section-kicker">{{ i18n.t('business.processBadge') }}</p>
        <h2 class="section-title centered">{{ i18n.t('business.processTitle') }}</h2>
        <p class="process-intro">
          {{ i18n.t('business.processIntro') }}
        </p>

        <div class="process-grid">
          <article class="process-card">
            <div class="process-badge">1</div>
            <h3>{{ i18n.t('business.processSteps.analysis.title') }}</h3>
            <p>
              {{ i18n.t('business.processSteps.analysis.desc') }}
            </p>
          </article>

          <article class="process-card">
            <div class="process-badge">2</div>
            <h3>{{ i18n.t('business.processSteps.setup.title') }}</h3>
            <p>
              {{ i18n.t('business.processSteps.setup.desc') }}
            </p>
          </article>

          <article class="process-card">
            <div class="process-badge">3</div>
            <h3>{{ i18n.t('business.processSteps.operation.title') }}</h3>
            <p>
              {{ i18n.t('business.processSteps.operation.desc') }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA / KONTAKT -->
    <section class="cta-section" id="contact-cta">
      <div class="cta-inner">
        <h2>{{ i18n.t('business.ctaTitle') }}</h2>
        <p>
          {{ i18n.t('business.ctaDesc') }}
        </p>

        <div class="cta-actions">
          <RouterLink :to="{ name: 'contact' }" class="btn cta-primary">
            {{ i18n.t('business.ctaBtnPrimary') }}
          </RouterLink>
          <RouterLink :to="{ name: 'erhverv', hash: '#solutions' }" class="btn cta-secondary">
            {{ i18n.t('business.ctaBtnSecondary') }}
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { i18n } from '../i18n.js'
</script>

<style scoped>
.hero {
  /* Ensure hero fills space well on the Erhverv page */
  min-height: 80vh;
}

@media (max-width: 900px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }
}
</style>
