<template>
  <div class="page">
    <div class="container--standard">
      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv', hash: '#solutions' }" :label="i18n.t('services.back')" />
      </div>

      <header class="service-header">
        <h1>{{ i18n.t('services.private.title') }}</h1>
        <p class="service-intro">
          {{ i18n.t('services.private.intro') }}
        </p>
      </header>

      <div class="service-grid">
        <div class="service-content">
          <h2>{{ i18n.t('services.private.contentTitle') }}</h2>
          <p>
            {{ i18n.t('services.private.contentDesc') }}
          </p>
          <ul class="premium-list">
            <li v-for="(item, idx) in i18n.t('services.private.list')" :key="idx">
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        
        <aside class="service-visual">
          <div class="visual-card">
            <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200" :alt="i18n.t('services.private.title')" loading="lazy" />
          </div>
        </aside>
      </div>

      <section class="service-cta">
        <h2>{{ i18n.t('services.private.ctaTitle') }}</h2>
        <p>
          {{ i18n.t('services.private.ctaDesc') }}
        </p>
        <RouterLink :to="{ name: 'contact' }" class="btn primary lg">{{ i18n.t('services.private.ctaBtn') }}</RouterLink>
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
  title: 'Privat parkeringskontrol til grundejere | Nordic Park ApS',
  meta: [
    { name: 'description', content: 'Privat parkeringskontrol til private grundejere og ejendomme på Sjælland. Nordic Park sikrer fair, dokumenteret kontrol af dit parkeringsareal med lokal service.' },
    { property: 'og:title', content: 'Privat parkeringskontrol til grundejere | Nordic Park ApS' },
    { property: 'og:description', content: 'Professionel privat parkeringskontrol til grundejere og ejendomme på Sjælland. Fair og dokumenteret kontrol med lokal service.' },
    { property: 'og:url', content: 'https://nordicpark.eu/service/privat-kontrol' },
    { name: 'twitter:title', content: 'Privat parkeringskontrol | Nordic Park ApS' },
    { name: 'twitter:description', content: 'Privat parkeringskontrol til private grundejere og ejendomme på Sjælland. Nordic Park ApS.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://nordicpark.eu/service/privat-kontrol' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Privat parkeringskontrol',
        'description': 'Privat parkeringskontrol til private grundejere og ejendomme på Sjælland. Fair, dokumenteret kontrol med lokal service.',
        'provider': { '@id': 'https://nordicpark.eu/#business' },
        'serviceType': 'Privat parkeringskontrol',
        'areaServed': { '@type': 'AdministrativeArea', 'name': 'Sjælland' },
        'url': 'https://nordicpark.eu/service/privat-kontrol'
      })
    }
  ]
})
</script>

<style scoped>
</style>
