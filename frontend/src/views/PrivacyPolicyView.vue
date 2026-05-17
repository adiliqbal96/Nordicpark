<template>
  <div class="legal-page">
    <div class="legal-back">
      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv' }" :label="i18n.t('services.back')" />
      </div>
    </div>

    <header class="legal-hero">
      <span class="legal-label">Juridisk</span>
      <h1>{{ i18n.t('footer.privacy') }}</h1>
      <p class="company-name">Nordic Park ApS</p>
    </header>

    <div class="legal-layout">
      <aside class="legal-toc">
        <div class="legal-toc-inner">
          <p class="legal-toc-label">Indhold</p>
          <ul class="legal-toc-nav">
            <li><a href="#dataansvarlig">1. Dataansvarlig</a></li>
            <li><a href="#personoplysninger">2. Personoplysninger</a></li>
            <li><a href="#formal">3. Formål</a></li>
            <li><a href="#retsgrundlag">4. Retsgrundlag</a></li>
            <li><a href="#videregivelse">5. Videregivelse</a></li>
            <li><a href="#opbevaring">6. Opbevaring</a></li>
            <li><a href="#rettigheder">7. Dine rettigheder</a></li>
            <li><a href="#klage">8. Klage</a></li>
            <li><a href="#datasikkerhed">9. Datasikkerhed</a></li>
          </ul>
        </div>
      </aside>

      <article class="legal-main">

        <section id="dataansvarlig">
          <h2>1. Dataansvarlig</h2>
          <p>
            Nordic Park ApS er dataansvarlig for behandlingen af personoplysninger i forbindelse med parkeringskontrol og
            administration.
          </p>
          <div class="info-box">
            <p><strong>Nordic Park ApS</strong></p>
            <p>Ny Mæglergårds Allé 66 · 2660 Brøndby Strand</p>
            <p>CVR-nr.: 45900436 · {{ i18n.locale.value === 'da' ? 'Tlf' : 'Tel' }}: 71 61 36 21</p>
            <p>{{ i18n.t('legal.email') }}: <a href="mailto:kontakt@nordicpark.eu">kontakt@nordicpark.eu</a></p>
          </div>
        </section>

        <section id="personoplysninger">
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

        <section id="formal">
          <h2>3. Formål</h2>
          <p>Personoplysninger behandles med henblik på:</p>
          <ul>
            <li>Kontrol af parkeringsvilkår</li>
            <li>Udstedelse og administration af kontrolafgifter</li>
            <li>Klagebehandling og dokumentation</li>
            <li>Opkrævning og eventuel inkasso</li>
            <li>Overholdelse af retlige forpligtelser</li>
            <li>Drift og forbedring af vores services</li>
            <li>Kommunikation med brugere og samarbejdspartnere</li>
          </ul>
          <p>Hvis der anvendes kamera- eller ANPR-teknologi, sker dette for at sikre effektiv og korrekt parkeringskontrol.</p>
        </section>

        <section id="retsgrundlag">
          <h2>4. Retsgrundlag</h2>
          <p>Behandlingen sker i henhold til GDPR artikel 6, stk. 1:</p>
          <ul>
            <li><strong>Litra b:</strong> Aftale</li>
            <li><strong>Litra c:</strong> Retlig forpligtelse</li>
            <li><strong>Litra f:</strong> Legitim interesse</li>
            <li><strong>Litra a:</strong> Samtykke, hvor relevant</li>
          </ul>
          <p>Ved behandling efter litra f er der foretaget en konkret interesseafvejning, hvor Nordic Park ApS' legitime interesser ikke overstiger den registreredes rettigheder og frihedsrettigheder.</p>
        </section>

        <section id="videregivelse">
          <h2>5. Videregivelse</h2>
          <p>
            Personoplysninger kan videregives til IT-leverandører, betalingsudbydere, inkassopartnere og offentlige
            myndigheder, hvor dette er nødvendigt og lovligt. Alle databehandlere er underlagt databehandleraftaler.
          </p>
        </section>

        <section id="opbevaring">
          <h2>6. Opbevaring</h2>
          <p>
            Personoplysninger opbevares så længe, der verserer en aktiv sag. Når sagen er afsluttet, opbevares oplysninger
            ikke længere end nødvendigt til opfyldelse af de formål, hvortil de er indsamlet.
          </p>
          <p>
            Oplysninger slettes eller anonymiseres, når de ikke længere er nødvendige, medmindre længere opbevaring kræves i henhold til lovgivning, herunder bogføringsloven.
          </p>
        </section>

        <section id="rettigheder">
          <h2>7. Dine rettigheder</h2>
          <p>Du har ret til indsigt, berigtigelse, sletning, begrænsning, indsigelse og dataportabilitet.</p>
          <p>Ønsker du at gøre brug af dine rettigheder, kan du kontakte Nordic Park ApS via ovenstående kontaktoplysninger.</p>
        </section>

        <section id="klage">
          <h2>8. Klage</h2>
          <p>
            Hvis du mener, at vi behandler dine oplysninger i strid med reglerne, kan du indgive klage til
            <strong>Datatilsynet</strong>, Borgergade 28, 1300 København K,
            <a href="https://www.datatilsynet.dk" target="_blank">www.datatilsynet.dk</a>.
          </p>
        </section>

        <section id="datasikkerhed">
          <h2>9. Datasikkerhed</h2>
          <p>
            Nordic Park ApS har implementeret tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte
            personoplysninger mod uautoriseret adgang, loss eller misbrug.
          </p>
        </section>

        <footer class="legal-footer">
          <h3>{{ i18n.t('legal.companyInfoTitle') }}</h3>
          <p>Nordic Park ApS · CVR: 45900436</p>
          <p>{{ i18n.t('legal.email') }}: kontakt@nordicpark.eu · {{ i18n.locale.value === 'da' ? 'Tlf' : 'Tel' }}: 71 61 36 21</p>
        </footer>

      </article>
    </div>
  </div>
</template>

<script setup>
import { i18n } from '../i18n.js'
import Backlink from '../components/Backlink.vue'
</script>
