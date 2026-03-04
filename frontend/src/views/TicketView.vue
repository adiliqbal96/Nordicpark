<template>
  <div class="page">
    <div class="container">
      <Backlink :to="{ name: 'home' }" label="Til forsiden" />

      <div v-if="!form.type" class="choice-container">
        <h1>Har du fået en afgift?</h1>
        <p class="intro-text">
          Vælg venligst nedenfor hvad din henvendelse vedrører, så vi kan hjælpe dig bedst muligt.
        </p>

        <div class="choice-grid">
          <button class="choice-card" @click="selectType('complaint')">
            <div class="choice-icon">⚖️</div>
            <div class="choice-content">
              <h3>Jeg ønsker at klage</h3>
              <p>Hvis du mener afgiften er udstedt på et forkert grundlag.</p>
            </div>
          </button>

          <button class="choice-card" @click="selectType('photo')">
            <div class="choice-icon">📸</div>
            <div class="choice-content">
              <h3>Se dokumentation</h3>
              <p>Hvis du ønsker at se billeddokumentation for overtrædelsen.</p>
            </div>
          </button>

          <button class="choice-card" @click="selectType('payment')">
            <div class="choice-icon">📱</div>
            <div class="choice-content">
              <h3>Betal afgift</h3>
              <p>Betal din parkeringsafgift hurtigt og nemt med MobilePay.</p>
            </div>
          </button>
        </div>
      </div>

      <div v-else-if="form.type === 'payment'" class="form-container">
        <button class="btn-back" @click="form.type = null">← Tilbage til valg</button>
        
        <div class="beta-status">
          <span class="badge">UNDER UDVIKLING 🏗️</span>
        </div>
        
        <h1>Betal afgift</h1>
        <p>
          Vælg venligst typen af din parkeringsafgift for at fortsætte til betaling.
        </p>

        <div class="choice-grid mini">
          <button class="choice-card small" @click="selectPaymentAmount(950)">
            <div class="choice-icon small">🚗</div>
            <div class="choice-content">
              <h3>Standard afgift</h3>
              <p>950,00 kr.</p>
            </div>
          </button>

          <button class="choice-card small" @click="selectPaymentAmount(1900)">
            <div class="choice-icon small">♿</div>
            <div class="choice-content">
              <h3>Handicap afgift</h3>
              <p>1.900,00 kr.</p>
            </div>
          </button>

          <button class="choice-card small" @click="selectPaymentAmount('custom')">
            <div class="choice-icon small">✏️</div>
            <div class="choice-content">
              <h3>Andet beløb</h3>
              <p>Indtast selv beløb</p>
            </div>
          </button>
        </div>

        <div v-if="form.amount === 'custom'" class="custom-amount-input">
          <label>
            Indtast beløb (DKK)
            <input v-model="form.customAmount" type="number" placeholder="F.eks. 500" step="1" min="1" />
          </label>
        </div>
        
        <div class="info-box">
          <h4>Betalingsinfo</h4>
          <p>Vi arbejder på at åbne for direkte MobilePay/Kort-betaling her på siden. Indtil da skal betaling ske via bankoverførsel som angivet på din fysiske afgift.</p>
          <p style="margin-top: 1.5rem; color: #fff; font-weight: 700; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem;">
            ⚠️ Husk altid at påføre afgiftsnummer/referencenummer ved betaling.
          </p>
        </div>
      </div>

      <div v-else class="form-container">
        <button class="btn-back" @click="form.type = null">← Tilbage til valg</button>
        
        <h1>{{ form.type === 'complaint' ? 'Indsend klage' : 'Anmod om dokumentation' }}</h1>
        <p v-if="form.type === 'complaint'">
          Udfyld formularen nedenfor med detaljerne omkring din klage. Vi gennemgår sagen hurtigst muligt.
        </p>
        <p v-else>
          Indtast dine oplysninger nedenfor, så sender vi billeddokumentationen til din e-mail.
        </p>

        <form class="form" @submit.prevent="handleSubmit">
          <div class="form-grid">
            <label>
              Afgiftsnummer
              <input v-model="form.ticketNumber" type="text" placeholder="F.eks. 123456" required />
            </label>

            <label>
              Nummerplade
              <input v-model="form.licensePlate" type="text" placeholder="XX 12 345" required />
            </label>
          </div>

          <label>
            Din E-mail
            <input v-model="form.email" type="email" placeholder="din@email.dk" required />
          </label>

          <label>
            Besked / Begrundelse
            <textarea v-model="form.message" rows="4" :placeholder="form.type === 'complaint' ? 'Beskriv hvorfor du klager...' : 'Evt. bemærkninger til din anmodning...'" required></textarea>
          </label>

          <div v-if="status.message" :class="['status-msg', status.type]">
            {{ status.message }}
          </div>

          <button type="submit" class="btn primary" :disabled="loading">
            {{ loading ? 'Sender...' : 'Send henvendelse' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Backlink from '../components/Backlink.vue'

const form = reactive({
  type: null,
  ticketNumber: '',
  licensePlate: '',
  email: '',
  message: ''
})

const loading = ref(false)
const status = reactive({
  message: '',
  type: '' // 'success' or 'error'
})

const selectType = (type) => {
  form.type = type
  status.message = ''
}

const selectPaymentAmount = (amount) => {
  // Gemmer beløbet så vi kan bruge det når Stripe er klar
  form.amount = amount
  console.log('Valgt beløb:', amount)
}

const handleSubmit = async () => {
  loading.value = true
  status.message = ''
  
  try {
    // Vi sender nu til vores PHP backend på samme domæne
    const response = await fetch('/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    
    const data = await response.json()
    
    if (response.ok) {
      status.message = data.success
      status.type = 'success'
      // Ryd formularen efter succes (undtagen typen)
      form.ticketNumber = ''
      form.licensePlate = ''
      form.email = ''
      form.message = ''
    } else {
      status.message = data.error || 'Der opstod en fejl. Prøv igen.'
      status.type = 'error'
    }
  } catch (error) {
    status.message = 'Kunne ikke kontakte serveren. Prøv igen senere.'
    status.type = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.choice-container {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

.intro-text {
  margin-bottom: 3rem;
  color: var(--color-text-muted);
}

.choice-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 600px) {
  .choice-grid {
    grid-template-columns: 1fr;
  }
}

.choice-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  color: #fff;
}

.choice-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-premium);
}

.choice-icon {
  font-size: 3rem;
}

.choice-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
}

.choice-content p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.btn-back {
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.btn-back:hover {
  color: #fff;
}

.page h1 {
  margin-bottom: 1rem;
}

.beta-status {
  margin-bottom: 1.5rem;
}

.badge {
  background: var(--color-accent);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.info-box {
  background: rgba(0, 69, 165, 0.1);
  border: 1px solid rgba(0, 69, 165, 0.2);
  border-radius: var(--radius-lg);
  padding: 2rem;
  margin-top: 3rem;
  text-align: left;
}

.info-box h4 {
  margin: 0 0 0.5rem 0;
  color: #fff;
  font-size: 1.1rem;
}

.info-box p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.choice-grid.mini {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 2rem 0 3rem;
}

.choice-card.small {
  padding: 1.5rem;
  gap: 1rem;
}

.choice-icon.small {
  font-size: 2rem;
}

.choice-card.small h3 {
  font-size: 1.1rem;
}

.custom-amount-input {
  max-width: 300px;
  margin: 0 auto 3rem;
  text-align: left;
  background: var(--glass-bg);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
}

.custom-amount-input label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
</style>
