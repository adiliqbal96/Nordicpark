<template>
  <div class="page">
    <div class="container">
      <Backlink :to="{ name: 'home', hash: '#solutions' }" label="Til forsiden" />

      <header class="service-header">
        <h1>Privat kontrol 🛡️</h1>
        <p class="service-intro">
          Har I udfordringer med uvedkommende parkering på jeres private arealer? Vi sikrer, at jeres regler bliver overholdt.
        </p>
      </header>

      <div class="service-grid">
        <div class="service-content">
          <h2>Ro på jeres private grund</h2>
          <p>
            Vi sørger for, at jeres private arealer ikke bliver brugt som gratis parkering af uvedkommende. Med tydelig skiltning og fast kontrol sikrer vi jeres ejendomsret.
          </p>
          <ul class="premium-list">
            <li><span>Håndhævelse af private parkeringsregler</span></li>
            <li><span>Opsætning af lovpligtig og tydelig skiltning</span></li>
            <li><span>Løbende patruljering af området 🛡️</span></li>
            <li><span>Sikker dokumentation af alle overtrædelser</span></li>
          </ul>
        </div>
        
        <aside class="service-visual">
          <div class="visual-card">
            <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200" alt="Privat kontrol" loading="lazy" />
          </div>
        </aside>
      </div>

      <section class="service-cta">
        <h2>Har I brug for privat parkeringskontrol?</h2>
        <p>
          Vi hjælper jer med at få bugt med uvedkommende parkering én gang for alle. Kontakt os for en uforpligtende snak om jeres ejendom.
        </p>
        <RouterLink :to="{ name: 'contact' }" class="btn primary lg">Kontakt os i dag</RouterLink>
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
