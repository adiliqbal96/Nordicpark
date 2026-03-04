<template>
  <div class="page">
    <div class="container">
      <Backlink :to="{ name: 'home', hash: '#solutions' }" label="Til forsiden" />

      <header class="service-header">
        <h1>Boligforeninger 🏢</h1>
        <p class="service-intro">
          Vi skaber orden og tryghed for beboerne ved at sikre, at parkeringspladserne altid er tilgængelige for dem, der har ret til at holde der.
        </p>
      </header>

      <div class="service-grid">
        <div class="service-content">
          <h2>Professionel kontrol & administration</h2>
          <p>
            Beboernes tryghed er vores højeste prioritet. Vi sørger for, at uvedkommende ikke optager pladsen, og at reglerne håndhæves med respekt og dialog.
          </p>
          <ul class="premium-list">
            <li><span>Administration af beboer- og gæstelicenser via app</span></li>
            <li><span>Kontrol af p-zoner og tidsbegrænsning</span></li>
            <li><span>Tydelig skiltning der guider gæster korrekt</span></li>
            <li><span>Nærhed og dialog med beboerne</span></li>
          </ul>
        </div>
        
        <aside class="service-visual">
          <div class="visual-card">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200" alt="Boligforeninger" loading="lazy" />
          </div>
        </aside>
      </div>

      <section class="service-cta">
        <h2>Skal vi hjælpe jeres boligforening?</h2>
        <p>
          Vi tilbyder en uforpligtende gennemgang af jeres parkeringsarealer og giver et bud på en fair og effektiv løsning.
        </p>
        <RouterLink :to="{ name: 'contact' }" class="btn primary lg">Book en gratis besigtigelse</RouterLink>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Backlink from '../components/Backlink.vue'
</script>

<style scoped>
/* Page-specific overrides can go here */
</style>
