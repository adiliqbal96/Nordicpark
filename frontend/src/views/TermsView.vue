<template>
  <div class="page legal-page">
    <Backlink :to="{ name: 'home' }" label="Til forsiden" />
    
    <article class="legal-content">
      <header class="legal-header">
        <h1>Handelsbetingelser ⚖️</h1>
        <p class="company-name">Nordic Park ApS</p>
      </header>

      <div class="legal-intro">
        <p>Parkering på området udgør en bindende civilretlig aftale. Ved parkering accepteres nedenstående vilkår.</p>
      </div>

      <section>
        <h2>Formål</h2>
        <p>
          Disse handelsbetingelser beskriver regler og vilkår for parkering på områder administreret af 
          Nordic Park ApS samt betingelser for udstedelse, betaling og klagebehandling ved 
          parkeringsafgifter.
        </p>
      </section>

      <section>
        <h2>1. Parkering</h2>
        <p>
          Parkering er kun tilladt i overensstemmelse med gældende skiltning på området. 
          Manglende overholdelse af skiltning, tidsbegrænsning, betalingskrav eller tilladelser medfører 
          udstedelse af parkeringsafgift.
        </p>
      </section>

      <section>
        <h2>2. Parkeringskontrol</h2>
        <p>
          Parkeringskontrol udføres af Nordic Park ApS eller bemyndigede kontrollører. 
          Overtrædelser dokumenteres digitalt, herunder ved billeder af køretøj, registreringsnummer, 
          placering, dato og tidspunkt.
          Automatisk kontrol, herunder kamera og nummerpladegenkendelse (ANPR), kan anvendes, hvor 
          dette er lovligt og skiltet.
        </p>
      </section>

      <section>
        <h2>3. Parkeringsafgift</h2>
        <div class="highlight-box">
          <p><strong>Parkeringsafgift: 950 kr.</strong></p>
          <p>Beløbet forfalder til betaling senest 10 dage fra udstedelsesdatoen via betalingsoplysninger angivet på opkrævningen.</p>
        </div>
      </section>

      <section>
        <h2>4. Manglende betaling</h2>
        <p>
          Ved manglende rettidig betaling kan der pålægges rykkergebyr på 100 kr. pr. rykker (maks. 3 rykkere). 
          Sagen kan herefter overdrages til inkasso. Yderligere omkostninger kan pålægges i henhold til gældende lovgivning.
        </p>
      </section>

      <section>
        <h2>5. Klage</h2>
        <p>Klage over parkeringsafgift skal indsendes skriftligt til:</p>
        <p class="contact-highlight"><a href="mailto:kontakt@nordicpark.eu">kontakt@nordicpark.eu</a></p>
        <ul>
          <li>Klagen skal indeholde registreringsnummer og afgiftens reference.</li>
          <li>Klager behandles inden 10 hverdage.</li>
          <li>Indgivelse af klage suspenderer ikke betalingsfristen, medmindre andet skriftligt meddeles af Nordic Park ApS.</li>
          <li>Ved medhold i klagen annulleres parkeringsafgiften.</li>
        </ul>
      </section>

      <section>
        <h2>6. Persondata</h2>
        <p>
          Personoplysninger behandles i forbindelse med parkeringskontrol og administration i 
          overensstemmelse med gældende databeskyttelseslovgivning (GDPR). 
          Oplysninger kan videregives til inkasso ved manglende betaling.
        </p>
      </section>

      <section>
        <h2>7. Ansvar</h2>
        <p>
          Al parkering sker på eget ansvar. 
          Nordic Park ApS hæfter ikke for skader, tyveri eller tab på køretøjer eller disses indhold, 
          medmindre skaden skyldes grov uagtsomhed eller forsæt.
        </p>
      </section>

      <footer class="legal-footer">
        <h3>Virksomhedsoplysninger</h3>
        <p>Nordic Park ApS · CVR: 45900436</p>
        <p>Email: kontakt@nordicpark.eu · Tlf: 71 61 36 21</p>
      </footer>
    </article>
  </div>
</template>

<script setup>
import Backlink from '../components/Backlink.vue'
</script>

<style scoped>
.company-name {
  color: var(--color-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9rem;
}

.highlight-box {
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem 1.75rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
}

.highlight-box p {
  margin-bottom: 0.25rem !important;
}

.highlight-box p:first-child {
  font-size: 1.2rem;
  color: #fff;
}

.contact-highlight a {
  color: var(--color-accent);
  font-weight: 700;
  text-decoration: none;
  font-size: 1.1rem;
}

.legal-footer h3 {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
}
</style>
