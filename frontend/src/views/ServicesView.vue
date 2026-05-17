<template>
  <div class="page hub-page">
    <div class="container--standard">
      <div class="header-nav-group pt-8">
        <Backlink :to="{ name: 'erhverv', hash: '#solutions' }" :label="i18n.t('services.back')" />
      </div>

      <header class="service-header hub reveal">
        <h1 class="text-gradient">{{ i18n.t('services.hubTitle') }}</h1>
        <p class="service-intro">
          {{ i18n.t('services.hubIntro') }}
        </p>
      </header>

      <div class="cards-grid reveal" style="transition-delay: 0.2s">
        <RouterLink :to="{ name: 'service-residential' }" class="card">
          <div class="card-image-wrapper">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" :alt="i18n.t('services.residential.title')" class="card-image" loading="lazy" />
          </div>
          <h3>{{ i18n.t('business.solutions.residential.title') }}</h3>
          <p>{{ i18n.t('business.solutions.residential.desc') }}</p>
          <span class="link">{{ i18n.t('services.hubLink') }}</span>
        </RouterLink>

        <RouterLink :to="{ name: 'service-business' }" class="card">
          <div class="card-image-wrapper">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" :alt="i18n.t('services.business.title')" class="card-image" loading="lazy" />
          </div>
          <h3>{{ i18n.t('business.solutions.business.title') }}</h3>
          <p>{{ i18n.t('business.solutions.business.desc') }}</p>
          <span class="link">{{ i18n.t('services.hubLink') }}</span>
        </RouterLink>

        <RouterLink :to="{ name: 'service-private' }" class="card">
          <div class="card-image-wrapper">
            <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800" :alt="i18n.t('services.private.title')" class="card-image" loading="lazy" />
          </div>
          <h3>{{ i18n.t('business.solutions.private.title') }}</h3>
          <p>{{ i18n.t('business.solutions.private.desc') }}</p>
          <span class="link">{{ i18n.t('services.hubLink') }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { i18n } from '../i18n.js'
import Backlink from '../components/Backlink.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Vores løsninger – Parkeringskontrol | Nordic Park ApS',
  meta: [
    { name: 'description', content: 'Nordic Park tilbyder skræddersyede parkeringsløsninger til boligforeninger, erhverv og private grundejere. Digital administration og fair kontrol på Sjælland.' },
    { property: 'og:title', content: 'Vores løsninger – Parkeringskontrol | Nordic Park ApS' },
    { property: 'og:description', content: 'Skræddersyede parkeringsløsninger til boligforeninger, erhverv og private på Sjælland. Digital administration og fair kontrol.' },
    { property: 'og:url', content: 'https://nordicpark.eu/services' },
    { name: 'twitter:title', content: 'Vores løsninger – Parkeringskontrol | Nordic Park ApS' },
    { name: 'twitter:description', content: 'Parkeringsløsninger til boligforeninger, erhverv og private på Sjælland. Nordic Park ApS.' },
  ],
  link: [{ rel: 'canonical', href: 'https://nordicpark.eu/services' }]
})
</script>

<style scoped>
.hub {
  margin-bottom: 4rem;
}
</style>
