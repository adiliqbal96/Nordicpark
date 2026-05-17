<template>
  <div class="page">
    <div class="container--standard">
      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv' }" :label="i18n.t('services.back')" />
      </div>

      <header class="service-header">
        <h1>{{ i18n.t('services.business.title') }}</h1>
        <p class="service-intro">
          {{ i18n.t('services.business.intro') }}
        </p>
      </header>

      <div class="service-grid">
        <div class="service-content">
          <h2>{{ i18n.t('services.business.contentTitle') }}</h2>
          <p>
            {{ i18n.t('services.business.contentDesc') }}
          </p>
          <ul class="premium-list">
            <li v-for="(item, idx) in i18n.t('services.business.list')" :key="idx">
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        
        <aside class="service-visual">
          <div class="visual-card">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" :alt="i18n.t('services.business.title')" loading="lazy" />
          </div>
        </aside>
      </div>

      <section class="service-cta">
        <h2>{{ i18n.t('services.business.ctaTitle') }}</h2>
        <p>
          {{ i18n.t('services.business.ctaDesc') }}
        </p>
        <RouterLink :to="{ name: 'contact' }" class="btn primary lg">{{ i18n.t('services.business.ctaBtn') }}</RouterLink>
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
  title: 'Parkeringskontrol til erhverv & retail | Nordic Park ApS',
  meta: [
    { name: 'description', content: 'Sørg for fri parkering til dine kunder og medarbejdere. Nordic Park leverer professionel kundeparkering og erhvervsparkering til virksomheder, butikker og kontorejendomme på Sjælland.' },
    { property: 'og:title', content: 'Parkeringskontrol til erhverv & retail | Nordic Park ApS' },
    { property: 'og:description', content: 'Professionel kundeparkering og medarbejderparkering til erhverv og retail på Sjælland. Nordic Park ApS.' },
    { property: 'og:url', content: 'https://nordicpark.eu/service/erhverv-retail' },
    { name: 'twitter:title', content: 'Parkeringskontrol til erhverv & retail | Nordic Park ApS' },
    { name: 'twitter:description', content: 'Professionel kundeparkering og medarbejderparkering til erhverv og retail på Sjælland.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://nordicpark.eu/service/erhverv-retail' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Parkeringskontrol til erhverv og retail',
        'description': 'Professionel kundeparkering og medarbejderparkering til virksomheder, butikker og kontorejendomme på Sjælland.',
        'provider': { '@id': 'https://nordicpark.eu/#business' },
        'serviceType': 'Parkeringskontrol',
        'areaServed': { '@type': 'AdministrativeArea', 'name': 'Sjælland' },
        'url': 'https://nordicpark.eu/service/erhverv-retail'
      })
    }
  ]
})
</script>

<style scoped>
</style>
