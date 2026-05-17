<template>
  <div class="page">
    <div class="container--standard">

      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv' }" label="Tilbage" />
      </div>

      <div class="about-hero">
        <span class="section-kicker">Om os</span>
        <h1>Find din plads i Norden</h1>
        <p class="subline">Skabt af tre p-vagter med hjertet og ordentligheden i orden.</p>
        <p class="intro-text">
          For de fleste er parkering bare praktisk. Men vi ved, at det også kan være en kilde til stress.
          Vi kender følelsen af at lede forgæves efter en plads, frustrationen over en app, der driller,
          eller usikkerheden ved et skilt, der er svært at tyde.
        </p>
        <p class="intro-text">
          Vi er tre stiftere, der alle startede vores karriere som p-vagter på gaden. Vi har brugt
          tusindvis af timer på asfalten, hvor vi har mærket alt fra silende regn til de svære samtaler
          i øjenhøjde. Vi startede vores eget firma, fordi vi så et behov for en parkeringsservice, der
          bygger på mere end bare kontrol — på nordiske værdier som tillid, gennemsigtighed og menneskelighed.
        </p>
      </div>

      <section class="values-section">
        <h2 class="section-title centered">Vores værdier</h2>
        <div class="values-grid">

          <div class="value-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3>Parkering med menneskeligt ansigt</h3>
            <p>
              For os er ordentlighed ikke bare et ord – det er fundamentet for alt, hvad vi gør.
              Vi ved, at vi er jeres ansigt udadtil, og derfor behandler vi jeres p-plads og jeres
              kunder med den største respekt.
            </p>
          </div>

          <div class="value-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3>Sund fornuft før bødeblokken</h3>
            <p>
              Vi har selv stået i regnen og set forældre kæmpe med indkøb og børn, mens teknikken
              drillede. Vi ved, at de fleste fejl sker ved et uheld. Derfor bruger vi øjne og sund
              fornuft, før vi bruger teknologien. Vores mål er ikke at udskrive flest mulige afgifter,
              men at sikre, at pladsen fungerer.
            </p>
          </div>

          <div class="value-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3>En rolig og professionel dialog</h3>
            <p>
              Vi ved, hvordan man deeskalerer en situation, fordi vi har prøvet det tusindvis af gange.
              Vi tager dialogen med et smil, og vi sørger for, at alle føler sig retfærdigt behandlet
              – også når reglerne skal håndhæves.
            </p>
          </div>

          <div class="value-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <h3>Drift du kan stole på</h3>
            <p>
              Vi designer parkeringsløsninger, der er nemme at forstå. Fra klar skiltning til
              brugervenlige systemer sørger vi for, at det er enkelt og trygt at parkere. Vi
              optimerer jeres plads til flow og tilgængelighed.
            </p>
          </div>

        </div>
      </section>

      <section class="team-section">
        <p class="team-label">Folkene bag</p>
        <h2 class="team-heading">En personlig partner</h2>
        <p class="team-text">
          Hos os er du ikke bare et kundenummer i et stort system. Du har en direkte linje til os
          tre stiftere. Vi tager ansvaret personligt, og vi sætter en ære i at levere en service,
          vi kan stå inde for med vores egne navne.
        </p>
        <div class="founder-chips">
          <div class="founder-chip">
            <div class="founder-initial initial-blue">J</div>
            <span class="founder-name">Jamil</span>
          </div>
          <div class="founder-chip">
            <div class="founder-initial initial-gold">K</div>
            <span class="founder-name">Kim</span>
          </div>
          <div class="founder-chip">
            <div class="founder-initial initial-blue">M</div>
            <span class="founder-name">Max</span>
          </div>
        </div>
        <p class="team-caption">Fra venstre: Jamil, Kim og Max — vi har selv gået runderne på asfalten.</p>
      </section>

      <div class="cta-block">
        <h2>Skal vi hjælpe dig med at få ro på din parkering?</h2>
        <p class="cta-text">
          Vi ved, hvad der kræves for at skabe en parkeringsløsning, hvor ordentlighed og effektivitet
          går hånd i hånd. Lad os tage en uforpligtende snak.
        </p>
        <div class="cta-actions">
          <RouterLink :to="{ name: 'contact' }" class="btn primary lg">Kontakt os</RouterLink>
          <RouterLink :to="{ name: 'erhverv' }" class="cta-secondary-link">Se vores løsninger →</RouterLink>
        </div>
        <p class="cta-signed">Jamil, Kim &amp; Max · Stiftere af Nordic Park ApS</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { i18n } from '../i18n.js'
import Backlink from '../components/Backlink.vue'
</script>

<style scoped>
.about-hero {
  padding-top: 3rem;
  padding-bottom: 4rem;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
}

.about-hero .section-kicker {
  display: inline-block;
  margin-bottom: 0.75rem;
}

.about-hero h1 {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 1rem 0 0.75rem;
}

.subline {
  font-size: 1.05rem;
  color: var(--color-accent);
  font-style: italic;
  margin-bottom: 2rem;
}

.intro-text {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 1.25rem;
}

.values-section {
  padding: 4rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.value-card {
  background: linear-gradient(160deg, rgba(14, 22, 42, 0.95), rgba(8, 13, 28, 0.98));
  border: 1px solid rgba(59, 130, 246, 0.12);
  border-radius: 20px;
  padding: 2rem;
}

.card-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #60A5FA;
}

.value-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin: 1rem 0 0.6rem;
}

.value-card p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.team-section {
  padding: 4rem 0;
  text-align: center;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
}

.team-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.team-heading {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.25rem;
}

.team-text {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  max-width: 580px;
  margin: 0 auto 2rem;
}

.founder-chips {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.founder-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 100px;
  padding: 0.35rem 1rem 0.35rem 0.35rem;
}

.founder-initial {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  color: #fff;
  flex-shrink: 0;
}

.initial-blue {
  background: #3B82F6;
}

.initial-gold {
  background: #FACC15;
  color: #0B1220;
}

.founder-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-white);
  padding-right: 0.25rem;
}

.team-caption {
  font-size: 0.85rem;
  color: var(--color-text-dim);
  font-style: italic;
}

.cta-block {
  background: var(--color-surface);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  text-align: center;
  margin: 3rem 0;
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.cta-block h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  max-width: 560px;
  margin: 0 auto 2rem;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cta-secondary-link {
  color: var(--color-text-muted);
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.cta-secondary-link:hover {
  color: var(--color-white);
}

.cta-signed {
  margin-top: 2rem;
  font-size: 0.85rem;
  color: var(--color-text-dim);
  font-style: italic;
}

@media (max-width: 640px) {
  .values-grid {
    grid-template-columns: 1fr;
  }

  .cta-block {
    padding: 2rem 1.5rem;
  }

  .cta-secondary-link {
    margin-left: 0;
  }
}
</style>
