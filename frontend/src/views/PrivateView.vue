<template>
  <div class="page">
    <div class="container">
      <Backlink :to="{ name: 'erhverv', hash: '#solutions' }" :label="i18n.t('services.back')" />

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
</script>

<style scoped>
</style>
