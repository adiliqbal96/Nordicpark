<template>
  <div class="legal-page">
    <div class="legal-back">
      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv' }" :label="i18n.t('services.back')" />
      </div>
    </div>

    <header class="legal-hero">
      <span class="legal-label">Juridisk</span>
      <h1>{{ i18n.t('footer.parkingTerms') }}</h1>
      <p class="company-name">Nordic Park ApS</p>
    </header>

    <div class="legal-layout">
      <aside class="legal-toc">
        <div class="legal-toc-inner">
          <p class="legal-toc-label">Indhold</p>
          <ul class="legal-toc-nav">
            <li><a href="#anvendelse">1. Anvendelsesområde</a></li>
            <li><a href="#betalingsvilkaar">2. Parkering og betalingsvilkår</a></li>
            <li><a href="#kontrol">3. Kontrol og dokumentation</a></li>
            <li><a href="#kontrolafgift">4. Kontrolafgift</a></li>
            <li><a href="#betaling">5. Betaling</a></li>
            <li><a href="#klageadgang">6. Klageadgang</a></li>
            <li><a href="#ansvar">7. Ansvar</a></li>
            <li><a href="#force-majeure">8. Force majeure</a></li>
            <li><a href="#skiltning">9. Skiltning</a></li>
            <li><a href="#ikrafttraeden">10. Ikrafttræden</a></li>
          </ul>
        </div>
      </aside>

      <article class="legal-main">

        <section id="anvendelse">
          <h2>1. Anvendelsesområde</h2>
          <p>
            Disse parkeringsbetingelser gælder for parkering på private parkeringsarealer, der administreres og kontrolleres af
            Nordic Park ApS. Ved parkering på et sådant område accepterer føreren af køretøjet de til hver en tid gældende
            parkeringsbetingelser.
          </p>
        </section>

        <section id="betalingsvilkaar">
          <h2>2. Parkering og betalingsvilkår</h2>
          <p>
            Parkering må kun ske i overensstemmelse med den skiltning og de vilkår, der fremgår af det konkrete
            parkeringsområde. Eventuelle krav om tidsbegrænsning, registrering eller betaling
            fremgår af skiltningen.
          </p>
          <p>
            Det er førerens ansvar at sikre korrekt parkering, herunder korrekt betaling og overholdelse af tidsbegrænsninger.
          </p>
        </section>

        <section id="kontrol">
          <h2>3. Kontrol og dokumentation</h2>
          <p>
            Nordic Park ApS foretager parkeringskontrol for at sikre overholdelse af de gældende vilkår. Kontrollen kan ske ved
            manuel kontrol samt ved anvendelse af kamera- og/eller ANPR-teknologi (automatisk nummerpladegenkendelse)
            på udvalgte parkeringsområder, hvor dette er tydeligt skiltet og sker i overensstemmelse med gældende lovgivning.
          </p>
        </section>

        <section id="kontrolafgift">
          <h2>4. Kontrolafgift</h2>
          <div class="info-box gold">
            <p>Ved overtrædelse af de gældende parkeringsvilkår kan der pålægges en kontrolafgift.</p>
            <p><strong>Kontrolafgiften udgør 950 kr.</strong></p>
            <p>Kontrolafgiften pålægges køretøjets ejer eller bruger i overensstemmelse med gældende regler.</p>
          </div>
        </section>

        <section id="betaling">
          <h2>5. Betaling</h2>
          <p>
            Kontrolafgiften skal betales inden for den frist, der fremgår af opkrævningen. Manglende rettidig betaling kan
            medføre yderligere omkostninger, herunder rykkergebyrer og inkasso i overensstemmelse med gældende
            lovgivning.
          </p>
        </section>

        <section id="klageadgang">
          <h2>6. Klageadgang</h2>
          <p>
            Hvis du ønsker at klage over en kontrolafgift, skal klagen i første omgang indgives til Nordic Park ApS i
            overensstemmelse med de anvisninger, der fremgår af kontrolafgiften.
          </p>
          <p>
            Nordic Park ApS behandler herefter klagen og træffer afgørelse. Hvis forbrugeren ikke er tilfreds med Nordic Park
            ApS' afgørelse, kan sagen indbringes for Parkeringsklagenævnet i overensstemmelse med de til enhver tid
            gældende regler. Nordic Park ApS er tilsluttet Parkeringsklagenævnet.
          </p>
          <p>
            Når en klage indgives rettidigt, stilles opkrævningen i bero, indtil klagener færdigbehandlet.
          </p>
        </section>

        <section id="ansvar">
          <h2>7. Ansvar</h2>
          <p>
            Nordic Park ApS er ikke ansvarlig for skader på køretøjer, indhold eller tredjemand, medmindre andet følger af
            ufravigelig lovgivning.
          </p>
        </section>

        <section id="force-majeure">
          <h2>8. Force majeure</h2>
          <p>
            Nordic Park ApS er ikke ansvarlig for manglende eller forsinket opfyldelse af aftalen, såfremt dette skyldes forhold
            uden for selskabets rimelige kontrol, herunder, men ikke begrænset til, naturkatastrofer, brand, oversvømmelse,
            strejke, lockout, krig, terrorhandlinger, myndighedsindgreb, strømsvigt, nedbrud i IT- eller kommunikationssystemer
            eller andre ekstraordinære og uforudsigelige hændelser (force majeure).
          </p>
        </section>

        <section id="skiltning">
          <h2>9. Skiltning</h2>
          <p>
            Gældende parkeringsvilkår, herunder kontrolafgiftens størrelse (950 kr.), fremgår tydeligt af skiltningen på det
            enkelte parkeringsområde. Enhver parkering sker på baggrund af den opstillede skiltning.
          </p>
        </section>

        <section id="ikrafttraeden">
          <h2>10. Ikrafttræden</h2>
          <p>
            Disse parkeringsbetingelser er gældende fra den angivne ikrafttrædelsesdato og erstatter tidligere gældende
            parkeringsbetingelser.
          </p>
        </section>

      </article>
    </div>
  </div>
</template>

<script setup>
import { i18n } from '../i18n.js'
import Backlink from '../components/Backlink.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Parkeringsbetingelser | Nordic Park ApS',
  meta: [
    { name: 'description', content: 'Læs parkeringsbetingelserne for Nordic Park ApS\' kontrollerede parkeringsarealer. Gælder alle arealer administreret af Nordic Park ApS.' },
    { property: 'og:title', content: 'Parkeringsbetingelser | Nordic Park ApS' },
    { property: 'og:url', content: 'https://nordicpark.eu/parkeringsbetingelser' },
  ],
  link: [{ rel: 'canonical', href: 'https://nordicpark.eu/parkeringsbetingelser' }]
})
</script>
