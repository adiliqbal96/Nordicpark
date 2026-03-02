<template>
  <div class="page legal-page">
    <Backlink :to="{ name: 'home' }" label="Til forsiden" />
    
    <article class="legal-content">
      <header class="legal-header">
        <h1>Parkeringsbetingelser 🅿️</h1>
        <p class="last-updated">Gældende fra: 13. februar 2026</p>
      </header>

      <section>
        <h2>1. Anvendelsesområde</h2>
        <p>
          Disse parkeringsbetingelser gælder for parkering på private parkeringsarealer, der administreres og kontrolleres af
          Nordic Park ApS. Ved parkering på et sådant område accepterer føreren af køretøjet de til hver en tid gældende
          parkeringsbetingelser.
        </p>
      </section>

      <section>
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

      <section>
        <h2>3. Kontrol og dokumentation</h2>
        <p>
          Nordic Park ApS foretager parkeringskontrol for at sikre overholdelse af de gældende vilkår. Kontrollen kan ske ved
          manuel kontrol samt ved anvendelse af kamera- og/eller ANPR-teknologi (automatisk nummerpladegenkendelse)
          på udvalgte parkeringsområder, hvor dette er tydeligt skiltet og sker i overensstemmelse med gældende lovgivning.
        </p>
      </section>

      <section>
        <h2>4. Kontrolafgift</h2>
        <div class="highlight-box">
          <p>Ved overtrædelse af de gældende parkeringsvilkår kan der pålægges en kontrolafgift.</p>
          <p><strong>Kontrolafgiften udgør 950 kr.</strong></p>
          <p>Kontrolafgiften pålægges køretøjets ejer eller bruger i overensstemmelse med gældende regler.</p>
        </div>
      </section>

      <section>
        <h2>5. Betaling</h2>
        <p>
          Kontrolafgiften skal betales inden for den frist, der fremgår af opkrævningen. Manglende rettidig betaling kan
          medføre yderligere omkostninger, herunder rykkergebyrer og inkasso i overensstemmelse med gældende
          lovgivning.
        </p>
      </section>

      <section>
        <h2>6. Klageadgang</h2>
        <p>
          Hvis du ønsker at klage over en kontrolafgift, skal klagen i første omgang indgives til Nordic Park ApS i
          overensstemmelse med de anvisninger, der fremgår af kontrolafgiften.
        </p>
        <p>
          Nordic Park ApS behandler herefter klagen og træffer afgørelse. Hvis forbrugeren ikke er tilfreds med Nordic Park
          ApS’ afgørelse, kan sagen indbringes for Parkeringsklagenævnet i overensstemmelse med de til enhver tid
          gældende regler. Nordic Park ApS er tilsluttet Parkeringsklagenævnet.
        </p>
        <p>
          Når en klage indgives rettidigt, stilles opkrævningen i bero, indtil klagener færdigbehandlet.
        </p>
      </section>

      <section>
        <h2>7. Ansvar</h2>
        <p>
          Nordic Park ApS er ikke ansvarlig for skader på køretøjer, indhold eller tredjemand, medmindre andet følger af
          ufravigelig lovgivning.
        </p>
      </section>

      <section>
        <h2>8. Force majeure</h2>
        <p>
          Nordic Park ApS er ikke ansvarlig for manglende eller forsinket opfyldelse af aftalen, såfremt dette skyldes forhold
          uden for selskabets rimelige kontrol, herunder, men ikke begrænset til, naturkatastrofer, brand, oversvømmelse,
          strejke, lockout, krig, terrorhandlinger, myndighedsindgreb, strømsvigt, nedbrud i IT- eller kommunikationssystemer
          eller andre ekstraordinære og uforudsigelige hændelser (force majeure).
        </p>
      </section>

      <section>
        <h2>9. Skiltning</h2>
        <p>
          Gældende parkeringsvilkår, herunder kontrolafgiftens størrelse (950 kr.), fremgår tydeligt af skiltningen på det
          enkelte parkeringsområde. Enhver parkering sker på baggrund af den opstillede skiltning.
        </p>
      </section>

      <section>
        <h2>10. Ikrafttræden</h2>
        <p>
          Disse parkeringsbetingelser er gældende fra den angivne ikrafttrædelsesdato og erstatter tidligere gældende
          parkeringsbetingelser.
        </p>
      </section>
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

.highlight-box {
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem 1.75rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
}

.highlight-box p {
  margin-bottom: 0.25rem !important;
}

.highlight-box p:nth-child(2) {
  font-size: 1.2rem;
  color: #fff;
}
</style>
