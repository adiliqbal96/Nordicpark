<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero" id="top">
      <div class="hero-inner">
        <p class="hero-kicker">NORDICPARK – TRADITIONEL OG FAIR KONTROL</p>
        <h1>Fremtidens p-løsninger til jeres ejendom</h1>
        <p class="hero-subtitle">
          Vi skaber tryghed og orden på p-pladsen med traditionel og fair parkering. 
          Professionel kontrol med fokus på dialog og fairness. 🤝
        </p>

        <div class="hero-actions">
          <RouterLink :to="{ name: 'contact' }" class="btn primary">
            Få et uforpligtende tilbud
          </RouterLink>
          <RouterLink :to="{ name: 'ticket' }" class="btn secondary">
            Har du fået en afgift?
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- LØSNINGER / CARDS -->
    <section class="cards-section" id="solutions">
      <div class="cards-inner">
        <h2 class="section-title centered">Specialiserede løsninger 🏢</h2>

        <div class="cards-grid">
          <article class="card">
            <div class="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" alt="Boligforeninger" class="card-image" loading="lazy" />
            </div>
            <h3>Boligforeninger</h3>
            <p>
              Få styr på gæsteparkering og beboerlicenser med vores brugervenlige app-løsninger. 📲
            </p>
            <span class="link">Læs mere →</span>
          </article>

          <article class="card">
            <div class="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Erhverv & Retail" class="card-image" loading="lazy" />
            </div>
            <h3>Erhverv & Retail</h3>
            <p>
              Optimér pladsen for jeres kunder og undgå langtidsparkering med traditionel og fair kontrol. 🛍️
            </p>
            <span class="link">Læs mere →</span>
          </article>

          <article class="card">
            <div class="card-image-wrapper">
              <img src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800" alt="Privat kontrol" class="card-image" loading="lazy" />
            </div>
            <h3>Privat kontrol</h3>
            <p>
              Beskyt jeres private arealer mod uvedkommende parkering med tydelig skiltning. 🛡️
            </p>
            <span class="link">Læs mere →</span>
          </article>
        </div>
      </div>
    </section>

    <!-- WHY / HVORFOR VÆLGE OS -->
    <section class="why-section" id="why">
      <div class="why-inner">
        <h2 class="section-title centered">Hvorfor vælge NordicPark?</h2>

        <div class="why-layout">
          <div class="why-list">
            <article class="why-card">
              <h3>
                <span class="why-icon">✅</span>
                Traditionel kontrol
              </h3>
              <p>Fysisk og nærværende parkeringskontrol udført af professionelle vagter.</p>
            </article>

            <article class="why-card">
              <h3>
                <span class="why-icon">⚖️</span>
                Fair kontrol
              </h3>
              <p>Fokus på dialog og tydelig skiltning – ikke på bøder for enhver pris.</p>
            </article>



            <article class="why-card">
              <h3>
                <span class="why-icon">🤝</span>
                Skræddersyede aftaler
              </h3>
              <p>Vi tilpasser ordningen til netop jeres gæster, beboere og kunder.</p>
            </article>
          </div>

          <aside class="why-highlight">
            <h3>Tryg parkering – uden ekstra arbejde</h3>
            <p>
              Vi tager os af alt fra opsætning af skilte til løbende kontrol og dialog med
              bilisterne. Du får én fast kontaktperson og fuldt overblik over din P-plads.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <!-- PROCESS / SÅDAN ARBEJDER VI -->
    <section class="process-section" id="process">
      <div class="process-inner">
        <p class="section-kicker">Proces</p>
        <h2 class="section-title centered">Sådan arbejder vi ✨</h2>
        <p class="process-intro">
          Vi gør det nemt at få styr på parkering – uden ekstra bøvl for jer.
          Fra første møde til løbende drift har I en fast kontaktperson.
        </p>

        <div class="process-grid">
          <article class="process-card">
            <div class="process-badge">1</div>
            <h3>Analyse</h3>
            <p>
              Vi gennemgår pladsen, gæsteparkering, regler og jeres behov.
              I får et klart overblik og en konkret anbefaling.
            </p>
          </article>

          <article class="process-card">
            <div class="process-badge">2</div>
            <h3>Opsætning</h3>
            <p>
              Skiltning og p-zoner sættes op.
              Vi hjælper også med kommunikation til beboere og brugere.
            </p>
          </article>

          <article class="process-card">
            <div class="process-badge">3</div>
            <h3>Løbende kontrol</h3>
            <p>
              Daglig kontrol og sparring.
              I kan altid følge med i udviklingen og justere ordningen efter behov.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA / KONTAKT -->
    <section class="cta-section" id="contact-cta">
      <div class="cta-inner">
        <h2>Klar til at få styr på parkeringen?</h2>
        <p>
          Kontakt os for en uforpligtende snak om mulighederne på jeres P-plads –
          vi vender hurtigt tilbage.
        </p>

        <div class="cta-actions">
          <RouterLink :to="{ name: 'contact' }" class="btn cta-primary">
            Kontakt os
          </RouterLink>
          <RouterLink :to="{ name: 'home', hash: '#solutions' }" class="btn cta-secondary">
            Se løsninger
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
