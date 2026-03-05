<template>
  <div class="page">
    <div class="container">
      <Backlink :to="{ name: 'erhverv' }" :label="i18n.t('services.back')" />

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
</script>

<style scoped>
</style>
