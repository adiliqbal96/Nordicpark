<template>
  <div class="page">
    <div class="container--standard">
      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv', hash: '#solutions' }" :label="i18n.t('services.back')" />
      </div>

      <header class="service-header">
        <h1>{{ i18n.t('services.residential.title') }}</h1>
        <p class="service-intro">
          {{ i18n.t('services.residential.intro') }}
        </p>
      </header>

      <div class="service-grid">
        <div class="service-content">
          <h2>{{ i18n.t('services.residential.contentTitle') }}</h2>
          <p>
            {{ i18n.t('services.residential.contentDesc') }}
          </p>
          <ul class="premium-list">
            <li v-for="(item, idx) in i18n.t('services.residential.list')" :key="idx">
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        
        <aside class="service-visual">
          <div class="visual-card">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200" :alt="i18n.t('services.residential.title')" loading="lazy" />
          </div>
        </aside>
      </div>

      <section class="service-cta">
        <h2>{{ i18n.t('services.residential.ctaTitle') }}</h2>
        <p>
          {{ i18n.t('services.residential.ctaDesc') }}
        </p>
        <RouterLink :to="{ name: 'contact' }" class="btn primary lg">{{ i18n.t('services.residential.ctaBtn') }}</RouterLink>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { i18n } from '../i18n.js'
import Backlink from '../components/Backlink.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Parkeringskontrol til boligforeninger | Nordic Park ApS',
  meta: [
    { name: 'description', content: 'Professionel beboerparkering og parkeringskontrol til boligforeninger, ejerforeninger og andelsboligforeninger på Sjælland. Digital administration og fair, dokumenteret kontrol.' },
    { property: 'og:title', content: 'Parkeringskontrol til boligforeninger | Nordic Park ApS' },
    { property: 'og:description', content: 'Professionel parkeringskontrol og beboerparkering til boligforeninger og ejerforeninger på Sjælland. Digital administration og fair kontrol.' },
    { property: 'og:url', content: 'https://nordicpark.eu/service/boligforeninger' },
    { name: 'twitter:title', content: 'Parkeringskontrol til boligforeninger | Nordic Park ApS' },
    { name: 'twitter:description', content: 'Professionel beboerparkering og parkeringskontrol til boligforeninger på Sjælland. Nordic Park ApS.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://nordicpark.eu/service/boligforeninger' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Parkeringskontrol til boligforeninger',
        'description': 'Professionel parkeringskontrol og beboerparkering til boligforeninger, ejerforeninger og andelsboligforeninger på Sjælland.',
        'provider': { '@id': 'https://nordicpark.eu/#business' },
        'serviceType': 'Parkeringskontrol',
        'areaServed': { '@type': 'AdministrativeArea', 'name': 'Sjælland' },
        'url': 'https://nordicpark.eu/service/boligforeninger'
      })
    }
  ]
})
</script>

<style scoped>
/* Page-specific overrides can go here */
</style>
