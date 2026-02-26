<template>
  <div class="page legal-page">
    <Backlink :to="{ name: 'home' }" label="Til forsiden" />
    
    <article class="legal-content">
      <header class="legal-header">
        <h1>Privatlivspolitik 🛡️</h1>
        <p class="last-updated">Gældende fra: 13. februar 2026</p>
      </header>

      <section>
        <h2>1. Dataansvarlig</h2>
        <p>
          Nordic Park ApS er dataansvarlig for behandlingen af personoplysninger i forbindelse med parkeringskontrol og
          administration.
        </p>
        <div class="contact-card">
          <p><strong>Nordic Park ApS</strong></p>
          <p>Ny Mæglergårds Allé 66 · 2660 Brøndby Strand</p>
          <p>CVR-nr.: 45900436 · Tlf: 71 61 36 21</p>
          <p>Email: <a href="mailto:kontakt@nordicpark.eu">kontakt@nordicpark.eu</a></p>
        </div>
      </section>

      <section>
        <h2>2. Hvilke personoplysninger behandler vi?</h2>
        <p>I forbindelse med parkeringskontrol, udstedelse og administration af parkeringsafgifter kan vi behandle:</p>
        <ul>
          <li>Køretøjets registreringsnummer</li>
          <li>Fotografier af køretøjet og dets placering</li>
          <li>Tidspunkt og sted for parkering</li>
          <li>Oplysninger afgivet ved klage eller henvendelse</li>
          <li>Navn, adresse, e-mail og telefonnummer (hvis oplyst)</li>
          <li>Betalings- og faktureringsoplysninger</li>
          <li>Tekniske oplysninger som IP-adresse og cookies</li>
        </ul>
      </section>

      <section>
        <h2>3. Formål</h2>
        <p>Personoplysninger behandles med henblik på:</p>
        <ul>
          <li>Kontrol af parkeringsvilkår</li>
          <li>Udstedelse og administration af kontrolafgifter</li>
          <li>Klagebehandling og dokumentation</li>
          <li>Opkrævning og eventuel inkasso</li>
          <li>Overholdelse af retlige forpligtelser</li>
          <li>Drift og forbedring af digitale løsninger</li>
          <li>Kommunikation med brugere og samarbejdspartnere</li>
        </ul>
        <p>Hvis der anvendes kamera- eller ANPR-teknologi, sker dette for at sikre effektiv og korrekt parkeringskontrol.</p>
      </section>

      <section>
        <h2>4. Retsgrundlag</h2>
        <p>Behandlingen sker i henhold til GDPR artikel 6, stk. 1:</p>
        <ul>
          <li><strong>Litra b:</strong> Aftale</li>
          <li><strong>Litra c:</strong> Retlig forpligtelse</li>
          <li><strong>Litra f:</strong> Legitim interesse</li>
          <li><strong>Litra a:</strong> Samtykke, hvor relevant</li>
        </ul>
        <p>Ved behandling efter litra f er der foretaget en konkret interesseafvejning, hvor Nordic Park ApS’ legitime interesser ikke overstiger den registreredes rettigheder og frihedsrettigheder.</p>
      </section>

      <section>
        <h2>5. Videregivelse</h2>
        <p>
          Personoplysninger kan videregives til IT-leverandører, betalingsudbydere, inkassopartnere og offentlige
          myndigheder, hvor dette er nødvendigt og lovligt. Alle databehandlere er underlagt databehandleraftaler.
        </p>
      </section>

      <section>
        <h2>6. Opbevaring</h2>
        <p>
          Personoplysninger opbevares så længe, der verserer en aktiv sag. Når sagen er afsluttet, opbevares oplysninger
          ikke længere end nødvendigt til opfyldelse af de formål, hvortil de er indsamlet. 
        </p>
        <p>
          Oplysninger slettes eller anonymiseres, når de ikke længere er nødvendige, medmindre længere opbevaring kræves i henhold til lovgivning, herunder bogføringsloven.
        </p>
      </section>

      <section>
        <h2>7. Dine rettigheder</h2>
        <p>Du har ret til indsigt, berigtigelse, sletning, begrænsning, indsigelse og dataportabilitet.</p>
        <p>Ønsker du at gøre brug af dine rettigheder, kan du kontakte Nordic Park ApS via ovenstående kontaktoplysninger.</p>
      </section>

      <section>
        <h2>8. Klage</h2>
        <p>
          Hvis du mener, at vi behandler dine oplysninger i strid med reglerne, kan du indgive klage til 
          <strong>Datatilsynet</strong>, Borgergade 28, 1300 København K, 
          <a href="https://www.datatilsynet.dk" target="_blank">www.datatilsynet.dk</a>.
        </p>
      </section>

      <footer class="legal-footer">
        <h2>9. Datasikkerhed</h2>
        <p>
          Nordic Park ApS har implementeret tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte
          personoplysninger mod uautoriseret adgang, loss eller misbrug.
        </p>
      </footer>
    </article>
  </div>
</template>

<script setup>
import Backlink from '../components/Backlink.vue'
</script>

<style scoped>
.last-updated {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem 1.75rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
}

.contact-card p {
  margin-bottom: 0.25rem !important;
}

.contact-card a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
}
</style>
