<template>
  <div class="page about-page">
    <div class="about-bg-glow"></div>

    <div class="container--standard">

      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv' }" label="Tilbage" />
      </div>

      <!-- ── HERO ─────────────────────────────────────── -->
      <div class="about-hero">
        <span class="section-kicker">Om os</span>
        <h1>Find din plads i Norden</h1>
        <p class="subline">— Skabt af tre p-vagter med hjertet og ordentligheden i orden.</p>
        <div class="intro-body">
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
      </div>

      <!-- ── VÆRDIER ────────────────────────────────────── -->
      <section class="values-section">
        <h2 class="section-title centered">Vores værdier</h2>
        <div class="values-grid">

          <div class="value-card">
            <div class="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
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

      <!-- ── FOLKENE BAG ────────────────────────────────── -->
      <section class="team-section">
        <div class="team-card">
          <div class="team-content">
            <p class="team-label">Folkene bag</p>
            <h2 class="team-heading">En personlig partner</h2>
            <p class="team-text">
              Hos os er du ikke bare et kundenummer i et stort system. Du har en direkte linje til os
              tre stiftere. Vi tager ansvaret personligt, og vi sætter en ære i at levere en service,
              vi kan stå inde for med vores egne navne.
            </p>
          </div>
          <div class="team-founders">
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
            <p class="team-caption">Fra venstre: Jamil, Kim og Max — vi har selv gået runderne på asfalten.</p>
          </div>
        </div>
      </section>

      <!-- ── TRUST ROW ──────────────────────────────────── -->
      <div class="trust-row">
        <div class="trust-item">
          <div class="trust-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <strong>Lokal tilstedeværelse</strong>
          <span>Vi kender de lokale områder og er hurtigt på stedet</span>
        </div>
        <div class="trust-item">
          <div class="trust-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.07 3.37a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <strong>Fast kontaktperson</strong>
          <span>Du ringer direkte til én af os, ikke et callcenter</span>
        </div>
        <div class="trust-item">
          <div class="trust-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <strong>Fair og tydelig kontrol</strong>
          <span>Vi håndhæver reglerne med sund fornuft og respekt</span>
        </div>
        <div class="trust-item">
          <div class="trust-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <strong>Dialog før standardløsninger</strong>
          <span>Vi tilpasser os jeres behov, ikke omvendt</span>
        </div>
      </div>

      <!-- ── CTA ───────────────────────────────────────── -->
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
import { useHead } from '@vueuse/head'

useHead({
  title: 'Om os – Lokalt parkeringsselskab | Nordic Park ApS',
  meta: [
    { name: 'description', content: 'Nordic Park ApS er et lokalt parkeringsselskab baseret i Køge. Vi leverer fair og dokumenteret parkeringskontrol med fokus på dialog og lokal tilstedeværelse på Sjælland.' },
    { property: 'og:title', content: 'Om os – Lokalt parkeringsselskab | Nordic Park ApS' },
    { property: 'og:description', content: 'Et lokalt parkeringsselskab baseret i Køge med fokus på fair kontrol, dokumentation og dialog. Professionel parkeringsservice på Sjælland.' },
    { property: 'og:url', content: 'https://nordicpark.eu/om-os' },
    { name: 'twitter:title', content: 'Om os – Lokalt parkeringsselskab | Nordic Park ApS' },
    { name: 'twitter:description', content: 'Nordic Park ApS – et lokalt parkeringsselskab baseret i Køge med fokus på fair og professionel parkeringskontrol.' },
  ],
  link: [{ rel: 'canonical', href: 'https://nordicpark.eu/om-os' }]
})
</script>

<style scoped>
/* ── PAGE ───────────────────────────────────────────── */
.about-page {
  position: relative;
}

.about-bg-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(59, 130, 246, 0.05) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

/* ── HERO ───────────────────────────────────────────── */
.about-hero {
  padding-top: 2.5rem;
  padding-bottom: 3.5rem;
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-hero .section-kicker {
  display: inline-block;
  margin-bottom: 1rem;
}

.about-hero h1 {
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 0 0 0.9rem;
  line-height: 1.05;
}

.subline {
  font-size: 1.1rem;
  color: var(--color-accent);
  font-style: italic;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.intro-body {
  text-align: left;
  background: rgba(255, 255, 255, 0.018);
  border-left: 2px solid rgba(59, 130, 246, 0.22);
  padding: 1.5rem 1.75rem;
  border-radius: 0 14px 14px 0;
}

.intro-text {
  font-size: 1.02rem;
  color: rgba(148, 163, 184, 0.85);
  line-height: 1.82;
  margin-bottom: 1rem;
}

.intro-text:last-child {
  margin-bottom: 0;
}

/* ── VÆRDIER ────────────────────────────────────────── */
.values-section {
  padding: 3.5rem 0 4rem;
  border-top: 1px solid rgba(148, 163, 184, 0.08);
  position: relative;
  z-index: 1;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.value-card {
  background: linear-gradient(160deg, rgba(14, 22, 42, 0.95), rgba(8, 13, 28, 0.98));
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 18px;
  padding: 1.75rem 2rem 2rem;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.value-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.value-card:hover {
  border-color: rgba(59, 130, 246, 0.28);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 0 0 24px rgba(59, 130, 246, 0.06);
}

.value-card:hover::after {
  opacity: 1;
}

.card-icon {
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: rgba(59, 130, 246, 0.09);
  border: 1px solid rgba(59, 130, 246, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #60A5FA;
  margin-bottom: 1.1rem;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.value-card:hover .card-icon {
  background: rgba(59, 130, 246, 0.16);
  border-color: rgba(59, 130, 246, 0.3);
}

.value-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.65rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.value-card p {
  font-size: 0.9rem;
  color: rgba(148, 163, 184, 0.75);
  line-height: 1.72;
  margin: 0;
}

/* ── TEAM ───────────────────────────────────────────── */
.team-section {
  padding: 3.5rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.08);
  position: relative;
  z-index: 1;
}

.team-card {
  background: linear-gradient(135deg, rgba(14, 22, 42, 0.8), rgba(8, 13, 28, 0.9));
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 24px;
  padding: 3rem 3rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.team-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
}

.team-content {
  text-align: left;
}

.team-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-primary);
  margin-bottom: 0.65rem;
}

.team-heading {
  font-size: clamp(1.6rem, 2.5vw, 2.1rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.1rem;
  letter-spacing: -0.02em;
}

.team-text {
  font-size: 0.98rem;
  color: rgba(148, 163, 184, 0.8);
  line-height: 1.8;
  margin: 0;
}

.team-founders {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.founder-chip {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 100px;
  padding: 0.45rem 1.25rem 0.45rem 0.45rem;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.founder-chip:hover {
  border-color: rgba(59, 130, 246, 0.25);
  background: rgba(59, 130, 246, 0.05);
}

.founder-initial {
  width: 44px;
  height: 44px;
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
  background: linear-gradient(135deg, #3B82F6, #1D4ED8);
}

.initial-gold {
  background: linear-gradient(135deg, #FACC15, #D97706);
  color: #0B1220;
}

.founder-name {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
}

.team-caption {
  font-size: 0.79rem;
  color: rgba(148, 163, 184, 0.4);
  font-style: italic;
  line-height: 1.55;
  padding-left: 0.25rem;
  margin-top: 0.2rem;
}

/* ── TRUST ROW ──────────────────────────────────────── */
.trust-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgba(148, 163, 184, 0.08);
  border-radius: 16px;
  overflow: hidden;
  margin: 2rem 0;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.01);
}

.trust-item {
  padding: 1.75rem 1.5rem;
  border-right: 1px solid rgba(148, 163, 184, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition: background 0.2s ease;
}

.trust-item:last-child {
  border-right: none;
}

.trust-item:hover {
  background: rgba(59, 130, 246, 0.03);
}

.trust-icon {
  color: #60A5FA;
  margin-bottom: 0.2rem;
}

.trust-item strong {
  font-size: 0.88rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
}

.trust-item span {
  font-size: 0.78rem;
  color: rgba(148, 163, 184, 0.58);
  line-height: 1.55;
}

/* ── CTA ────────────────────────────────────────────── */
.cta-block {
  background: linear-gradient(140deg, rgba(14, 22, 42, 0.95), rgba(8, 13, 28, 0.98));
  border-radius: 24px;
  padding: 3.5rem 3rem;
  text-align: center;
  margin: 0 0 2rem;
  border: 1px solid rgba(59, 130, 246, 0.13);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.cta-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20%;
  right: 20%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
}

.cta-block::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 65%);
  pointer-events: none;
}

.cta-block h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}

.cta-text {
  font-size: 1rem;
  color: rgba(148, 163, 184, 0.72);
  line-height: 1.75;
  max-width: 520px;
  margin: 0 auto 2.25rem;
  position: relative;
  z-index: 1;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.cta-secondary-link {
  color: rgba(148, 163, 184, 0.65);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.cta-secondary-link:hover {
  color: #fff;
}

.cta-signed {
  margin-top: 2rem;
  font-size: 0.82rem;
  color: rgba(148, 163, 184, 0.35);
  font-style: italic;
  position: relative;
  z-index: 1;
}

/* ── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 960px) {
  .team-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 2rem;
  }

  .trust-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .trust-item:nth-child(2) { border-right: none; }
  .trust-item:nth-child(3) { border-top: 1px solid rgba(148, 163, 184, 0.08); }
  .trust-item:nth-child(4) {
    border-top: 1px solid rgba(148, 163, 184, 0.08);
    border-right: none;
  }
}

@media (max-width: 640px) {
  .values-grid {
    grid-template-columns: 1fr;
  }

  .about-hero h1 {
    font-size: 2.25rem;
  }

  .intro-body {
    padding: 1.25rem 1.25rem;
  }

  .team-card {
    padding: 2rem 1.5rem;
  }

  .trust-row {
    grid-template-columns: 1fr;
  }

  .trust-item {
    border-right: none;
    border-bottom: 1px solid rgba(148, 163, 184, 0.08);
  }

  .trust-item:last-child {
    border-bottom: none;
  }

  .cta-block {
    padding: 2.5rem 1.5rem;
  }
}
</style>
