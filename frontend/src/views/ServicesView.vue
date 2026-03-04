<template>
  <div class="page">
    <div class="container">
      <Backlink :to="{ name: 'home', hash: '#solutions' }" label="Til forsiden" />

      <header class="service-header hub">
        <h1>Vores P-løsninger 🅿️</h1>
        <p class="service-intro">
          NordicPark tilbyder professionelle løsninger til alle typer parkeringsarealer. Vælg nedenfor for at læse mere om vores specifikke ydelser.
        </p>
      </header>

      <div class="cards-grid">
        <RouterLink :to="{ name: 'service-residential' }" class="card">
          <div class="card-image-wrapper">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" alt="Boligforeninger" class="card-image" loading="lazy" />
          </div>
          <h3>Boligforeninger</h3>
          <p>Beboerparkering og gæstelicenser.</p>
          <span class="link">Se løsning →</span>
        </RouterLink>

        <RouterLink :to="{ name: 'service-business' }" class="card">
          <div class="card-image-wrapper">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Erhverv & Retail" class="card-image" loading="lazy" />
          </div>
          <h3>Erhverv & Retail</h3>
          <p>Optimering af kundeparkering.</p>
          <span class="link">Se løsning →</span>
        </RouterLink>

        <RouterLink :to="{ name: 'service-private' }" class="card">
          <div class="card-image-wrapper">
            <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800" alt="Privat kontrol" class="card-image" loading="lazy" />
          </div>
          <h3>Privat kontrol</h3>
          <p>Sikring af private arealer.</p>
          <span class="link">Se løsning →</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Backlink from '../components/Backlink.vue'
</script>

<style scoped>
.hub {
  margin-bottom: 4rem;
}
</style>
