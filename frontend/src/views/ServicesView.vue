<template>
  <div class="page">
    <Backlink :to="{ name: 'home', hash: '#solutions' }" label="Til forsiden" />

    <header class="service-header">
      <h1>Løsninger til parkering 🅿️</h1>
      <p class="service-intro">
        NordicPark tilbyder skræddersyede løsninger til boligforeninger, butikker, centre
        og private P-pladser. Vi kombinerer professionel service med digital præcision.
      </p>
    </header>

    <div class="service-grid">
      <div class="service-content">
        <section class="service-detail">
          <h2>Professionel kontrol & Sparring</h2>
          <ul class="premium-list">
            <li><span>Komplet parkeringskontrol med uniformerede vagter</span></li>
            <li><span>Opsætning af tydelig skiltning og parkeringsregler</span></li>
            <li><span>Digital registrering af parkering og kontrol 📲</span></li>
            <li><span>Rapporter og statistik til ejere og administratorer 📊</span></li>
          </ul>
        </section>
      </div>
      
      <aside class="service-visual">
        <div class="visual-card">
          <img src="https://images.unsplash.com/photo-1590674852885-ce8245d98863?q=80&w=800&auto=format&fit=crop" alt="Parkeringsservice" loading="lazy" />
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import Backlink from '../components/Backlink.vue'
</script>
