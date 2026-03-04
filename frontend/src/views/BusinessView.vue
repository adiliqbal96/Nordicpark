<template>
  <div class="page">
    <div class="container">
      <Backlink :to="{ name: 'home', hash: '#solutions' }" label="Til forsiden" />

      <header class="service-header">
        <h1>Erhverv & Retail 🛍️</h1>
        <p class="service-intro">
          Forretningsdrivende har brug for, at p-pladserne er ledige til kunderne. Vi minimerer langtidsparkering og sikrer høj rotation.
        </p>
      </header>

      <div class="service-grid">
        <div class="service-content">
          <h2>Optimer jeres kundeflow</h2>
          <p>
            Vi hjælper jer med at sikre, at jeres kunder altid kan finde en ledig plads tæt på indgangen. Ved at fjerne uvedkommende langtidsparkering skaber vi bedre adgang til jeres forretning.
          </p>
          <ul class="premium-list">
            <li><span>Tidsbegrænset parkering (p-skive kontrol)</span></li>
            <li><span>Håndtering af kundeparkering og af- og pålæsning</span></li>
            <li><span>Optimering af pladsudnyttelse og rotation</span></li>
            <li><span>Traditionel kontrol med fokus på kundeservice</span></li>
          </ul>
        </div>
        
        <aside class="service-visual">
          <div class="visual-card">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" alt="Erhverv & Retail" loading="lazy" />
          </div>
        </aside>
      </div>

      <section class="service-cta">
        <h2>Skal vi sikre plads til jeres kunder?</h2>
        <p>
          Kontakt os for en uforpligtende analyse af jeres parkeringsbehov. Vi finder den løsning, der bedst understøtter jeres drift.
        </p>
        <RouterLink :to="{ name: 'contact' }" class="btn primary lg">Få et uforpligtende tilbud</RouterLink>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Backlink from '../components/Backlink.vue'
</script>

<style scoped>
</style>
