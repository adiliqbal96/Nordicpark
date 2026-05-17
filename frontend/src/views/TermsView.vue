<template>
  <div class="legal-page">
    <div class="legal-back">
      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv' }" :label="i18n.t('services.back')" />
      </div>
    </div>

    <header class="legal-hero">
      <span class="legal-label">Juridisk</span>
      <h1>{{ i18n.t('footer.terms') }}</h1>
      <p class="legal-intro">{{ i18n.t('legal.introParking') }}</p>
      <p class="company-name">Nordic Park ApS</p>
    </header>

    <div class="legal-layout">
      <aside class="legal-toc">
        <div class="legal-toc-inner">
          <p class="legal-toc-label">Indhold</p>
          <ul class="legal-toc-nav">
            <li><a href="#formal">Formål</a></li>
            <li><a href="#parkering">1. Parkering</a></li>
            <li><a href="#kontrol">2. Parkeringskontrol</a></li>
            <li><a href="#afgift">3. {{ i18n.t('legal.feeTitle') }}</a></li>
            <li><a href="#manglende-betaling">4. Manglende betaling</a></li>
            <li><a href="#klage">5. Klage</a></li>
            <li><a href="#persondata">6. Persondata</a></li>
            <li><a href="#ansvar">7. Ansvar</a></li>
            <li><a href="#virksomhed">8. Virksomhedsoplysninger</a></li>
          </ul>
        </div>
      </aside>

      <article class="legal-main">

        <section id="formal">
          <h2>Formål</h2>
          <p>
            Disse handelsbetingelser beskriver regler og vilkår for parkering på områder administreret af
            Nordic Park ApS samt betingelser for udstedelse, betaling og klagebehandling ved
            parkeringsafgifter.
          </p>
        </section>

        <section id="parkering">
          <h2>1. Parkering</h2>
          <p>
            Parkering er kun tilladt i overensstemmelse med gældende skiltning på området.
            Hvor dette tilbydes, kan betaling for parkering ske via betalingsautomat, betalingslink eller
            tredjeparts betalingsløsninger såsom EasyPark.
          </p>
          <p>Bilisten er selv ansvarlig for korrekt registrering af:</p>
          <ul>
            <li>registreringsnummer</li>
            <li>zonekode</li>
            <li>parkeringstid</li>
            <li>eventuelle forlængelser af parkeringen</li>
          </ul>
          <p>
            Manglende eller fejlagtig registrering, manglende betaling eller overskridelse af tilladt
            parkeringstid kan medføre udstedelse af parkeringsafgift.
          </p>
        </section>

        <section id="kontrol">
          <h2>2. Parkeringskontrol</h2>
          <p>
            Parkeringskontrol udføres af Nordic Park ApS eller bemyndigede kontrollører.
            Overtrædelser dokumenteres digitalt, herunder ved billeder af køretøj, registreringsnummer,
            placering, dato og tidspunkt.
            Automatisk kontrol, herunder kamera og nummerpladegenkendelse (ANPR), kan anvendes, hvor
            dette er lovligt og skiltet.
          </p>
        </section>

        <section id="afgift">
          <h2>3. {{ i18n.t('legal.feeTitle') }}</h2>
          <div class="info-box gold">
            <p><strong>{{ i18n.t('legal.feeTitle') }}: {{ i18n.t('legal.feeAmount') }}</strong></p>
            <p>Beløbet forfalder til betaling senest 10 dage fra udstedelsesdatoen via de betalingsoplysninger, der fremgår af opkrævningen.</p>
          </div>
          <p>Betaling kan ske via:</p>
          <ul>
            <li>bankoverførsel</li>
            <li>betalingslink</li>
            <li>betalingskort</li>
            <li>MobilePay</li>
            <li>EasyPark, hvor dette tilbydes</li>
          </ul>
          <p>
            Ved betaling skal korrekt reference- eller sagsnummer anvendes.
            Betalingen anses først for gennemført, når beløbet er registreret modtaget af Nordic Park ApS.
            Ved betaling via EasyPark gælder den registrerede parkering i systemet som dokumentation for
            betalingstidspunkt og varighed.
          </p>
        </section>

        <section id="manglende-betaling">
          <h2>4. Manglende betaling</h2>
          <p>
            Ved manglende rettidig betaling kan der pålægges rykkergebyr på 100 kr. pr. rykker (maks. 3 rykkere).
            Sagen kan herefter overdrages til inkasso. Yderligere omkostninger kan pålægges i henhold til gældende lovgivning.
          </p>
        </section>

        <section id="klage">
          <h2>5. Klage</h2>
          <p>Klage over parkeringsafgift skal indsendes skriftligt til:</p>
          <div class="info-box">
            <p><a href="mailto:kontakt@nordicpark.eu">kontakt@nordicpark.eu</a></p>
          </div>
          <ul>
            <li>Klagen skal indeholde registreringsnummer og afgiftens reference.</li>
            <li>Klager behandles inden 10 hverdage.</li>
            <li>Indgivelse af klage suspenderer ikke betalingsfristen, medmindre andet skriftligt meddeles af Nordic Park ApS.</li>
            <li>Ved medhold i klagen annulleres parkeringsafgiften.</li>
          </ul>
        </section>

        <section id="persondata">
          <h2>6. Persondata</h2>
          <p>
            Personoplysninger behandles i forbindelse med parkeringskontrol og administration i
            overensstemmelse med gældende databeskyttelseslovgivning (GDPR).
            Oplysninger kan videregives til inkasso ved manglende betaling.
          </p>
        </section>

        <section id="ansvar">
          <h2>7. Ansvar</h2>
          <p>
            Al parkering sker på eget ansvar.
            Nordic Park ApS hæfter ikke for skader, tyveri eller tab på køretøjer eller disses indhold,
            medmindre skaden skyldes grov uagtsomhed eller forsæt.
          </p>
        </section>

        <footer class="legal-footer" id="virksomhed">
          <h3>8. Virksomhedsoplysninger</h3>
          <p>Nordic Park ApS · CVR: 45 90 04 36</p>
          <p><a href="mailto:kontakt@nordicpark.eu">kontakt@nordicpark.eu</a> · Tlf: 71 61 36 21</p>
        </footer>

      </article>
    </div>
  </div>
</template>

<script setup>
import { i18n } from '../i18n.js'
import Backlink from '../components/Backlink.vue'
</script>
