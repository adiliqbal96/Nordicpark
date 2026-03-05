<template>
  <div class="portal-page">
    <div class="bg-glow"></div>
    
    <div class="portal-container reveal">
      <Backlink v-if="step === 'identify'" :to="{ name: 'intro' }" label="Til forsiden" />

      <!-- STEP 1: IDENTIFICATION -->
      <div v-if="step === 'identify'" class="portal-step">
        <header class="portal-header">
          <h1 class="wow-title" v-html="i18n.t('portal.findTitle', { type: '<span class=\'text-gradient\'>' + i18n.t('nav.ticket').toLowerCase() + '</span>' })"></h1>
          <p class="wow-subtitle">{{ i18n.t('portal.findSubtitle') }}</p>
        </header>

        <form @submit.prevent="proceedToPortal" class="portal-card glass">
          <div class="form-group">
            <label>{{ i18n.t('portal.ticketNum') }}</label>
            <input type="text" v-model="form.ticketNumber" placeholder="F.eks. 123456" class="premium-input" required />
          </div>

          <div class="form-group">
            <label>{{ i18n.t('portal.licensePlate') }}</label>
            <input type="text" v-model="form.licensePlate" placeholder="AA 12 345" class="premium-input" required />
          </div>

          <div v-if="validationError" class="validation-msg">
            {{ validationError }}
          </div>

          <button type="submit" class="btn primary-gold lg">{{ i18n.t('portal.findBtn') }}</button>
        </form>
      </div>

      <!-- STEP 2: PORTAL HUB (ACTIONS) -->
      <div v-if="step === 'portal'" class="portal-step">
        <header class="portal-header">
          <div class="ticket-status-badge">{{ i18n.t('nav.ticket') }}: #{{ form.ticketNumber }}</div>
          <h1 class="wow-title" v-html="i18n.t('portal.actionTitle', { action: '<span class=\'text-gradient\'>' + (i18n.locale.value === 'da' ? 'at gøre' : 'to do') + '?</span>' })"></h1>
          <p class="wow-subtitle">{{ i18n.t('portal.foundVehicle', { plate: form.licensePlate }) }}</p>
        </header>

        <div class="portal-main-action">
          <button class="payment-card-premium" @click="goToForm('payment')">
            <div class="payment-card-glow"></div>
            <div class="card-content">
              <div class="card-icon-main">💳</div>
              <div class="card-text-main">
                <h3>{{ i18n.t('portal.payNow') }}</h3>
                <p>{{ i18n.t('portal.payDesc') }}</p>
              </div>
              <div class="card-arrow">→</div>
            </div>
          </button>
        </div>

        <div class="portal-secondary-options">
          <p class="options-label">{{ i18n.t('portal.otherOptions') }}</p>
          <div class="options-grid">
            <button class="option-card glass" @click="goToForm('photo')">
              <span class="option-icon">📸</span>
              <span>{{ i18n.t('portal.docs') }}</span>
            </button>
            <button class="option-card glass" @click="goToForm('complaint')">
              <span class="option-icon">⚖️</span>
              <span>{{ i18n.t('portal.complaint') }}</span>
            </button>
          </div>
        </div>

        <button class="btn-text-link mt-4" @click="step = 'identify'">← {{ i18n.t('portal.findAnother') }}</button>
      </div>

      <!-- STEP 3: SPECIFIC FORMS -->
      <div v-if="['payment', 'complaint', 'photo'].includes(step)" class="portal-step">
        <header class="form-header">
          <button class="back-nav" @click="step = 'portal'">← {{ i18n.t('portal.backToOverview') }}</button>
        </header>

        <!-- PAYMENT FORM -->
        <div v-if="step === 'payment'" class="form-body">
          <header class="portal-header">
            <h1 class="wow-title" v-html="i18n.t('portal.payment.title', { type: '<span class=\'text-gradient\'>' + i18n.t('nav.ticket').toLowerCase() + '</span>' })"></h1>
            <p class="wow-subtitle">{{ i18n.t('portal.payment.subtitle') }}</p>
          </header>

          <div class="portal-card glass">
            <div class="payment-selector">
              <label class="premium-label">{{ i18n.t('portal.payment.selectType') }}</label>
              <div class="amount-grid">
                <button :class="{ active: payment.amountType === 950 }" @click="payment.amountType = 950" class="amount-btn">
                  <span class="val">950,-</span>
                  <span class="lab">{{ i18n.t('portal.payment.standard') }}</span>
                </button>
                <button :class="{ active: payment.amountType === 1900 }" @click="payment.amountType = 1900" class="amount-btn">
                  <span class="val">1900,-</span>
                  <span class="lab">{{ i18n.t('portal.payment.handicap') }}</span>
                </button>
                <button :class="{ active: payment.amountType === 'custom' }" @click="payment.amountType = 'custom'" class="amount-btn">
                  <span class="val">{{ i18n.t('portal.payment.custom') }}</span>
                  <span class="lab">Custom</span>
                </button>
              </div>

              <div v-if="payment.amountType === 'custom'" class="custom-amount-field fadeIn">
                <label>{{ i18n.t('portal.payment.customLabel') }}</label>
                <input type="number" v-model="payment.customAmount" placeholder="F.eks. 500" class="premium-input" min="1" required />
              </div>
            </div>

            <div class="payment-alert">
              <div class="alert-icon">ℹ️</div>
              <p>{{ i18n.t('portal.payment.alert') }}</p>
            </div>

            <button class="btn primary-gold lg full-width" :disabled="!isPaymentReady">
              {{ i18n.t('portal.payment.payBtn') }}
            </button>
          </div>
        </div>

        <!-- COMPLAINT FORM -->
        <div v-if="step === 'complaint'" class="form-body">
          <header class="portal-header">
            <h1 class="wow-title" v-html="i18n.t('portal.complaintForm.title', { type: '<span class=\'text-gradient\'>' + i18n.t('portal.complaint').toLowerCase().split(' ')[1] + '</span>' })"></h1>
            <p class="wow-subtitle">{{ i18n.t('portal.complaintForm.subtitle') }}</p>
          </header>

          <form @submit.prevent="submitPortalForm" class="portal-card glass">
            <div class="form-group">
              <label>{{ i18n.t('portal.complaintForm.email') }}</label>
              <input type="email" v-model="form.email" placeholder="din@email.dk" class="premium-input" required />
            </div>

            <div class="form-group">
              <label>{{ i18n.t('portal.complaintForm.desc') }}</label>
              <textarea v-model="form.message" rows="5" placeholder="Skriv din begrundelse her..." class="premium-input" required></textarea>
            </div>

            <div class="form-group">
              <label>{{ i18n.t('portal.complaintForm.upload') }}</label>
              <div class="drop-area" @click="$refs.fileInput.click()">
                <span class="drop-icon">📁</span>
                <span>{{ form.files.length > 0 ? i18n.t('portal.complaintForm.filesSelected', { count: form.files.length }) : i18n.t('portal.complaintForm.uploadBtn') }}</span>
                <input type="file" ref="fileInput" @change="handleFileUpload" multiple accept="image/*" hidden />
              </div>
            </div>

            <button type="submit" class="btn primary-gold lg full-width" :disabled="loading">
              {{ loading ? i18n.t('portal.complaintForm.sending') : i18n.t('portal.complaintForm.submitBtn') }}
            </button>
          </form>
        </div>

        <!-- PHOTO REQUEST FORM -->
        <div v-if="step === 'photo'" class="form-body">
          <header class="portal-header">
            <h1 class="wow-title" v-html="i18n.t('portal.photoForm.title', { type: '<span class=\'text-gradient\'>' + i18n.t('portal.photoForm.title').toLowerCase().split(' ')[1] + '</span>' })"></h1>
            <p class="wow-subtitle">{{ i18n.t('portal.photoForm.subtitle') }}</p>
          </header>

          <form @submit.prevent="submitPortalForm" class="portal-card glass">
            <div class="form-group">
              <label>{{ i18n.t('portal.photoForm.email') }}</label>
              <input type="email" v-model="form.email" placeholder="din@email.dk" class="premium-input" required />
            </div>

            <button type="submit" class="btn primary-gold lg full-width" :disabled="loading">
              {{ loading ? i18n.t('portal.complaintForm.sending') : i18n.t('portal.photoForm.submitBtn') }}
            </button>
          </form>
        </div>
      </div>

      <!-- STATUS MESSAGES -->
      <div v-if="status.message" class="overlay-full" :class="status.type">
        <div class="overlay-card glass fadeIn">
          <div class="overlay-icon">{{ status.type === 'success' ? '✅' : '❌' }}</div>
          <h3>{{ status.type === 'success' ? i18n.t('portal.status.successTitle') : i18n.t('portal.status.errorTitle') }}</h3>
          <p>{{ status.message }}</p>
          <button @click="resetPortal" class="btn primary-gold">{{ i18n.t('portal.status.okBtn') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Backlink from '../components/Backlink.vue'
import { i18n } from '../i18n.js'

const step = ref('identify') // identify, portal, payment, complaint, photo
const loading = ref(false)

const form = reactive({
  ticketNumber: '',
  licensePlate: '',
  email: '',
  message: '',
  files: []
})

const payment = reactive({
  amountType: 950,
  customAmount: null
})

const status = reactive({
  message: '',
  type: ''
})

const isPaymentReady = computed(() => {
  if (payment.amountType === 'custom') return payment.customAmount > 0
  return true
})

const validationError = ref('')

const validateTicket = (val) => /^\d+$/.test(val)
const validateLicense = (val) => /^[A-Z0-9\s]{2,8}$/i.test(val)

const proceedToPortal = () => {
  validationError.value = ''
  
  if (!validateTicket(form.ticketNumber)) {
    validationError.value = 'Afgiftsnummer skal kun indeholde tal.'
    return
  }
  
  if (!validateLicense(form.licensePlate)) {
    validationError.value = 'Ugyldig nummerplade format.'
    return
  }

  step.value = 'portal'
}

const goToForm = (type) => {
  step.value = type
  status.message = ''
}

const handleFileUpload = (e) => {
  form.files = Array.from(e.target.files)
}

const submitPortalForm = async () => {
  loading.value = true
  status.message = ''
  
  try {
    const payload = {
      type: step.value,
      ticketNumber: form.ticketNumber,
      licensePlate: form.licensePlate,
      email: form.email,
      message: form.message
    }

    const response = await fetch('/api/ticket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    
    const data = await response.json()
    
    if (response.ok) {
      status.message = data.success || 'Din henvendelse er modtaget.'
      status.type = 'success'
    } else {
      status.message = data.error || 'Der opstod en fejl.'
      status.type = 'error'
    }
  } catch (error) {
    status.message = 'Kunne ikke forbinde til serveren.'
    status.type = 'error'
  } finally {
    loading.value = false
  }
}

const resetPortal = () => {
  status.message = ''
  if (status.type === 'success') {
    step.value = 'identify'
    form.email = ''
    form.message = ''
    form.files = []
  }
}
</script>

<style scoped>
.portal-page {
  min-height: 100vh;
  background-color: var(--color-base);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  color: var(--color-white);
  position: relative;
  overflow: hidden;
}

.bg-glow {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(51, 102, 255, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.portal-container {
  max-width: 700px;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* HEADER STYLES */
.portal-header {
  text-align: center;
  margin-bottom: 4rem;
}

.wow-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.04em;
}

.text-gradient {
  background: linear-gradient(135deg, var(--color-white) 30%, var(--color-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.wow-subtitle {
  font-size: 1.15rem;
  color: var(--color-slate);
  max-width: 500px;
  margin: 0 auto;
}

/* CARDS */
.portal-card {
  padding: 4rem;
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-blur);
  transition: var(--transition-smooth);
}

.portal-card:hover {
  border-color: rgba(51, 102, 255, 0.2);
  box-shadow: var(--shadow-lg);
}

/* PREMIUM PAYMENT CARD */
.portal-main-action {
  margin-bottom: 3rem;
}

.payment-card-premium {
  width: 100%;
  position: relative;
  padding: 3rem;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(51, 102, 255, 0.4);
  background: linear-gradient(135deg, rgba(51, 102, 255, 0.1), rgba(5, 10, 24, 0.8));
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition-smooth);
  text-align: left;
}

.payment-card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(51, 102, 255, 0.2) 0%, transparent 60%);
  pointer-events: none;
  transition: transform 0.6s ease;
}

.payment-card-premium:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: var(--color-primary);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), var(--shadow-premium);
}

.payment-card-premium:hover .payment-card-glow {
  transform: translate(10%, 10%);
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.card-icon-main {
  font-size: 4rem;
  filter: drop-shadow(0 0 15px var(--color-primary));
}

.card-text-main h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--color-white);
}

.card-text-main p {
  font-size: 1.1rem;
  color: var(--color-slate);
}

.card-arrow {
  margin-left: auto;
  font-size: 1.5rem;
  color: var(--color-primary);
  opacity: 0.8;
  transition: transform 0.3s ease;
}

.payment-card-premium:hover .card-arrow {
  transform: translateX(10px);
  opacity: 1;
}

/* SECONDARY OPTIONS */
.portal-secondary-options {
  text-align: center;
}

.options-label {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-slate);
  margin-bottom: 1.5rem;
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.option-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--color-white);
  cursor: pointer;
  transition: var(--transition-smooth);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-blur);
}

.option-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.option-icon {
  font-size: 1.4rem;
}

/* FORMS */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-group label {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-slate);
}

.premium-input {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  color: var(--color-white);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.premium-input:focus {
  outline: none;
  border-color: var(--color-primary);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(51, 102, 255, 0.1);
}

.ticket-status-badge {
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.6rem 1.5rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: 0.1em;
  box-shadow: 0 8px 20px rgba(51, 102, 255, 0.3);
}

/* PAYMENT SELECTOR */
.amount-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

.amount-btn {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.3s ease;
}

.amount-btn .val { font-size: 1.25rem; font-weight: 800; }
.amount-btn .lab { font-size: 0.8rem; color: var(--color-slate); }

.amount-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  box-shadow: 0 10px 25px rgba(51, 102, 255, 0.3);
}

.amount-btn.active .lab { color: rgba(255, 255, 255, 0.8); }

.payment-alert {
  background: rgba(51, 102, 255, 0.1);
  border-left: 4px solid var(--color-primary);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.payment-alert p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
}

/* DROP AREA */
.drop-area {
  border: 2px dashed var(--glass-border);
  padding: 2.5rem;
  border-radius: var(--radius-md);
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.drop-area:hover {
  border-color: var(--color-primary);
  background: rgba(51, 102, 255, 0.05);
}

.drop-icon { font-size: 2rem; }

/* OVERLAY */
.overlay-full {
  position: fixed;
  inset: 0;
  background: rgba(5, 10, 24, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 1000;
}

.overlay-card {
  max-width: 400px;
  width: 100%;
  padding: 4rem;
  text-align: center;
  border-radius: var(--radius-xl);
}

.overlay-icon { font-size: 4rem; margin-bottom: 2rem; }

/* MISC */
.btn-text-link {
  background: none;
  border: none;
  color: var(--color-slate);
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
  margin: 0 auto;
  display: block;
}

.back-nav {
  background: none;
  border: none;
  color: var(--color-slate);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  transition: color 0.3s ease;
}

.back-nav:hover { color: var(--color-white); }

.reveal {
  opacity: 0;
  animation: revealUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 650px) {
  .portal-card { padding: 2.5rem 1.5rem; }
  .amount-grid { grid-template-columns: 1fr; }
  .options-grid { grid-template-columns: 1fr; }
  .payment-card-premium { padding: 2rem; }
  .card-icon-main { font-size: 3rem; }
  .card-text-main h3 { font-size: 1.5rem; }
}
</style>
