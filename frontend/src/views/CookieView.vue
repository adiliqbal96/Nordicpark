<template>
  <div class="legal-page">
    <div class="legal-back">
      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv' }" :label="i18n.t('services.back')" />
      </div>
    </div>

    <header class="legal-hero">
      <span class="legal-label">Juridisk</span>
      <h1>{{ i18n.t('footer.cookie') }}</h1>
      <p class="company-name">Nordic Park ApS</p>
    </header>

    <div class="legal-layout">
      <aside class="legal-toc">
        <div class="legal-toc-inner">
          <p class="legal-toc-label">Indhold</p>
          <ul class="legal-toc-nav">
            <li><a href="#hvad-er-cookies">1. Hvad er cookies?</a></li>
            <li><a href="#typer">2. Typer af cookies</a></li>
            <li><a href="#retsgrundlag">3. Retsgrundlag og samtykke</a></li>
            <li><a href="#opbevaring">4. Opbevaringsperiode</a></li>
            <li><a href="#tilbagetraek">5. Tilbagetrækning af samtykke</a></li>
            <li><a href="#kontakt">6. Kontakt</a></li>
          </ul>
        </div>
      </aside>

      <article class="legal-main">

        <section id="hvad-er-cookies">
          <h2>1. Hvad er cookies?</h2>
          <p>
            Cookies er små tekstfiler, der gemmes på din computer, smartphone eller tablet, når du besøger vores hjemmeside.
            Cookies anvendes blandt andet for at sikre teknisk funktionalitet, forbedre brugeroplevelsen og indsamle statistik.
          </p>
        </section>

        <section id="typer">
          <h2>2. Hvilke typer cookies anvender vi?</h2>
          <ul>
            <li><strong>Nødvendige cookies:</strong> Nødvendige for at hjemmesiden fungerer korrekt og kan ikke fravælges.</li>
            <li><strong>Statistiske cookies:</strong> Anvendes til anonymiseret statistik og forbedring af brugeroplevelse.</li>
            <li><strong>Marketingcookies:</strong> Anvendes til markedsføring og kun med forudgående samtykke.</li>
          </ul>
        </section>

        <section id="retsgrundlag">
          <h2>3. Retsgrundlag og samtykke</h2>
          <p>
            Ikke-nødvendige cookies anvendes kun efter forudgående og aktivt samtykke via cookie-banner i
            overensstemmelse med cookiebekendtgørelsen og Datatilsynets praksis.
          </p>
        </section>

        <section id="opbevaring">
          <h2>4. Opbevaringsperiode</h2>
          <p>
            Nødvendige cookies slettes typisk ved lukning af browser. Statistiske cookies kan opbevares i op til 24 måneder.
            Marketingcookies kan opbevares i op til 12 måneder.
          </p>
        </section>

        <section id="tilbagetraek">
          <h2>5. Tilbagetrækning af samtykke</h2>
          <p>
            Samtykke kan til enhver tid trækkes tilbage eller ændres via cookie-banneret på hjemmesiden.
          </p>
        </section>

        <section id="kontakt">
          <h2>6. Kontakt</h2>
          <p>
            Spørgsmål vedrørende cookies kan rettes til Nordic Park ApS via kontaktoplysningerne i privatlivspolitikken.
          </p>
        </section>

      </article>
    </div>
  </div>
</template>

<script setup>
import { i18n } from '../i18n.js'
import Backlink from '../components/Backlink.vue'
</script>
