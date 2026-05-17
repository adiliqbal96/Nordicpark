<template>
  <div class="portal-page">
    <div class="bg-glow"></div>
    
    <div class="portal-container reveal">
      <Transition name="fade-slide" mode="out-in">
        <!-- STEP 1: IDENTIFICATION -->
        <div v-if="step === 'identify'" :key="'identify'" class="portal-step">
          <Backlink :to="{ name: 'intro' }" :label="i18n.t('services.back')" />
          <header class="portal-header">
            <h1 class="wow-title" v-html="i18n.t('portal.findTitle', { type: '<span class=\'text-gradient\'>' + i18n.t('nav.ticket').toLowerCase() + '</span>' })"></h1>
            <p class="wow-subtitle">{{ i18n.t('portal.findSubtitle') }}</p>
          </header>

          <form @submit.prevent="proceedToPortal" class="portal-card glass">
            <div class="form-group">
              <label>{{ i18n.t('portal.ticketNum') }}</label>
              <input type="text" v-model="form.ticketNumber" :placeholder="i18n.t('portal.ticketPlaceholder')" class="premium-input" required />
            </div>

            <div class="form-group">
              <label>{{ i18n.t('portal.licensePlate') }}</label>
              <input type="text" v-model="form.licensePlate" :placeholder="i18n.t('portal.licensePlatePlaceholder')" class="premium-input" required />
            </div>

            <div v-if="validationError" class="validation-msg">
              {{ validationError }}
            </div>

            <button type="submit" class="btn primary-gold lg">{{ i18n.t('portal.findBtn') }}</button>
          </form>
        </div>

        <!-- STEP 2: PORTAL HUB (ACTIONS) -->
        <div v-else-if="step === 'portal'" :key="'portal'" class="portal-step">
          <header class="portal-header">
            <div class="ticket-status-badge">{{ i18n.t('nav.ticket') }}: #{{ form.ticketNumber }}</div>
            <h1 class="wow-title" v-html="i18n.t('portal.actionTitle', { action: '<span class=\'text-gradient\'>' + (i18n.locale.value === 'da' ? 'at gøre' : 'to do') + '</span>' })"></h1>
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

          <div class="mt-8 flex justify-center">
            <Backlink @click="step = 'identify'" :label="i18n.t('portal.findAnother')" />
          </div>
        </div>

        <!-- STEP 3: SPECIFIC FORMS -->
        <div v-else :key="step" class="portal-step">
          <header class="form-header">
            <Backlink @click="step = 'portal'" :label="i18n.t('portal.backToOverview')" />
          </header>

          <!-- PAYMENT FORM -->
          <div v-if="step === 'payment'" class="form-body">
            <header class="portal-header">
              <h1 class="wow-title" v-html="i18n.t('portal.payment.title', { type: '<span class=\'text-gradient\'>' + i18n.t('nav.ticket').toLowerCase() + '</span>' })"></h1>
              <p class="wow-subtitle">{{ i18n.t('portal.payment.subtitle') }}</p>
            </header>

            <div class="portal-card glass">
              <!-- STAGE 1: AMOUNT ENTRY -->
              <div v-if="!isPaymentReady && !loading" class="amount-entry-flow fadeIn">
                <div class="form-group">
                    <label class="premium-label">{{ i18n.t('portal.payment.customLabel') }}</label>
                    <div class="flex-row amount-input-wrapper">
                      <input type="number" v-model="payment.customAmount" :placeholder="i18n.t('portal.payment.customPlaceholder')" class="premium-input" min="1" />
                      <button class="btn primary-gold" @click="initStripe" :disabled="!payment.customAmount">{{ i18n.t('portal.status.okBtn') }}</button>
                    </div>
                </div>
                
                <div class="ticket-selection-flow mt-6">
                    <p class="selection-label">{{ i18n.t('portal.payment.selectType') }}</p>
                    <div class="ticket-type-carousel">
                      <div 
                        class="ticket-type-card" 
                        :class="{ active: payment.amountType === 'standard' }"
                        @click="selectType('standard')"
                      >
                        <div class="card-glow"></div>
                        <div class="type-icon">🛡️</div>
                        <div class="type-info">
                          <span class="type-name">{{ i18n.t('portal.payment.standard') }}</span>
                          <span class="type-price">950,-</span>
                        </div>
                        <div class="selection-indicator"></div>
                      </div>

                      <div 
                        class="ticket-type-card" 
                        :class="{ active: payment.amountType === 'handicap' }"
                        @click="selectType('handicap')"
                      >
                        <div class="card-glow"></div>
                        <div class="type-icon">♿</div>
                        <div class="type-info">
                          <span class="type-name">{{ i18n.t('portal.payment.handicap') }}</span>
                          <span class="type-price">1900,-</span>
                        </div>
                        <div class="selection-indicator"></div>
                      </div>

                      <div 
                        class="ticket-type-card" 
                        :class="{ active: payment.amountType === 'emergency' }"
                        @click="selectType('emergency')"
                      >
                        <div class="card-glow"></div>
                        <div class="type-icon">🚒</div>
                        <div class="type-info">
                          <span class="type-name">{{ i18n.t('portal.payment.emergency') }}</span>
                          <span class="type-price">1900,-</span>
                        </div>
                        <div class="selection-indicator"></div>
                      </div>
                    </div>
                </div>
              </div>

              <!-- STAGE 2: RECEIPT & STRIPE (Shown together for a professional feel) -->
              <div v-else class="payment-active-flow">
                  <!-- RECEIPT SUMMARY -->
                  <div class="payment-summary glass fadeIn">
                    <div class="summary-header">
                      <span class="summary-title">{{ i18n.t('portal.payment.totalLabel') }}</span>
                      <span class="summary-amount text-gradient">{{ currentAmount }},- DKK</span>
                    </div>
                    
                    <div class="summary-details">
                      <div class="summary-row">
                        <span>{{ i18n.t('nav.ticket') }} #</span>
                        <span class="highlight">{{ form.ticketNumber }}</span>
                      </div>
                      <div class="summary-row">
                        <span>{{ i18n.t('portal.licensePlate') }}</span>
                        <span class="highlight">{{ form.licensePlate }}</span>
                      </div>
                      <div class="divider-dashed"></div>
                      <div class="summary-row">
                        <span>{{ i18n.t('portal.payment.subTotal') }}</span>
                        <span>{{ currentAmount }},-</span>
                      </div>
                    </div>

                    <div class="summary-footer">
                      <button class="edit-amount-btn" @click="isPaymentReady = false; payment.customAmount = null">
                        <span class="icon">←</span>
                        <span class="text">{{ i18n.t('portal.payment.editSelection') }}</span>
                      </button>
                    </div>
                  </div>

                  <!-- STRIPE CONTAINER -->
                  <div v-show="isPaymentReady" class="stripe-payment-container fadeIn">
                    <label class="premium-label">{{ i18n.t('portal.payment.cardLabel') }}</label>
                    <div id="payment-element" class="mt-2">
                      <!-- Stripe Element will be mounted here -->
                    </div>
                  </div>

                  <div v-if="paymentError" class="payment-error-msg mt-3 fadeIn">{{ paymentError }}</div>

                  <button class="btn primary-gold lg full-width mt-6" @click="processPayment" :disabled="loading || !isPaymentReady">
                    <span v-if="loading" class="spinner"></span>
                    {{ loading ? i18n.t('portal.payment.processing') : i18n.t('portal.payment.payBtn') }}
                  </button>
              </div>
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
                <input type="email" v-model="form.email" :placeholder="i18n.t('portal.complaintForm.emailPlaceholder')" class="premium-input" required />
              </div>

              <div class="form-group">
                <label>{{ i18n.t('portal.complaintForm.desc') }}</label>
                <textarea v-model="form.message" rows="5" :placeholder="i18n.t('portal.complaintForm.descPlaceholder')" class="premium-input" required></textarea>
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
                <input type="email" v-model="form.email" :placeholder="i18n.t('portal.photoForm.emailPlaceholder')" class="premium-input" required />
              </div>

              <button type="submit" class="btn primary-gold lg full-width" :disabled="loading">
                {{ loading ? i18n.t('portal.complaintForm.sending') : i18n.t('portal.photoForm.submitBtn') }}
              </button>
            </form>
          </div>
        </div>
      </Transition>

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
import { ref, reactive, computed, onMounted, nextTick } from 'vue'
import Backlink from '../components/Backlink.vue'
import { i18n } from '../i18n.js'
import { loadStripe } from '@stripe/stripe-js'

const step = ref('identify') // identify, portal, payment, complaint, photo
const loading = ref(false)
const paymentError = ref('')

// Initialize Stripe
const stripePromise = loadStripe('pk_test_51T6tLqGaj12XPZpKaJrOG1jrZ54g37cmgNBypsXwGclcUSxPjllFC7JeulQ1Y5ui1eo47zAphNFSuioN2srkBeYp00NHOdiXxs')
let stripe = null
let elements = null
let paymentElement = null

const form = reactive({
  ticketNumber: '',
  licensePlate: '',
  email: '',
  message: '',
  files: []
})

const payment = reactive({
  amountType: 'standard', // standard, handicap, emergency, custom
  customAmount: null
})

const fineTypes = {
  standard: 950,
  handicap: 1900,
  emergency: 1900
}

const currentAmount = computed(() => {
  if (payment.amountType === 'custom') return payment.customAmount || 0
  return fineTypes[payment.amountType] || 950
})

const status = reactive({
  message: '',
  type: ''
})

const isPaymentReady = ref(false)

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

const selectType = (type) => {
  payment.amountType = type
  if (type !== 'custom') {
    payment.customAmount = null
    initStripe()
  }
}

const goToForm = (type) => {
  step.value = type
  status.message = ''
  if (type === 'payment') {
    initStripe()
  }
}

const initStripe = async () => {
  const amount = currentAmount.value
  if (!amount || amount <= 0) {
    isPaymentReady.value = false
    return
  }

  loading.value = true
  paymentError.value = ''

  try {
    const response = await fetch('/api/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount,
        ticketNumber: form.ticketNumber,
        licensePlate: form.licensePlate
      })
    })

    const data = await response.json()
    const clientSecret = data.clientSecret
    const error = data.error

    if (error) {
      paymentError.value = error
      return
    }

    stripe = await stripePromise
    const appearance = { 
      theme: 'night',
      variables: {
        colorPrimary: '#3366ff',
        colorBackground: '#0a0f18',
        colorText: '#ffffff',
        colorDanger: '#ff4d4d',
        fontFamily: 'Inter, system-ui, sans-serif',
        borderRadius: '12px',
      }
    }

    // Unmount old element if it exists
    if (paymentElement) {
      paymentElement.unmount()
      paymentElement = null
    }

    elements = stripe.elements({ clientSecret, appearance })
    paymentElement = elements.create('payment')

    await nextTick()
    
    // Check if element exists in DOM before mounting
    const el = document.getElementById('payment-element')
    if (el) {
      paymentElement.mount('#payment-element')
      isPaymentReady.value = true
    } else {
      console.warn('Payment element container not found in DOM')
      // Try again in case of transition delay
      setTimeout(() => {
        paymentElement.mount('#payment-element')
        isPaymentReady.value = true
      }, 500)
    }
  } catch (e) {
    paymentError.value = 'Kunne ikke initialisere betaling.'
    console.error(e)
  } finally {
    loading.value = false
  }
}

const processPayment = async () => {
  if (!stripe || !elements) return

  loading.value = true
  paymentError.value = ''

  const { error, paymentIntent } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: window.location.origin + '/ticket?success=true',
    },
    redirect: 'if_required'
  })

  if (error) {
    paymentError.value = error.message
    loading.value = false
  } else {
    // Payment successful!
    console.log('Payment success, sending confirmation email...')
    
    // Send email confirmation to the business
    try {
      fetch('/api/payment-confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ticketNumber: form.ticketNumber,
          licensePlate: form.licensePlate,
          amount: currentAmount.value,
          paymentIntentId: paymentIntent?.id || 'TEST_ID'
        })
      })
    } catch (e) {
      console.error('Failed to send confirmation email', e)
    }

    status.message = i18n.t('portal.payment.success')
    status.type = 'success'
    loading.value = false
  }
}

const handleFileUpload = (e) => {
  form.files = Array.from(e.target.files)
}

const FORMSPREE_AFGIFT = 'https://formspree.io/f/mnjragzb'

const submitPortalForm = async () => {
  loading.value = true
  status.message = ''

  try {
    // Use FormData to support file attachments on the complaint form
    const data = new FormData()
    data.append('type', step.value === 'complaint' ? 'Klage' : 'Fotoanmodning')
    data.append('afgiftsnummer', form.ticketNumber)
    data.append('nummerplade', form.licensePlate)
    data.append('email', form.email)
    if (form.message) data.append('besked', form.message)
    form.files.forEach((file) => data.append('vedhæftning', file))

    const response = await fetch(FORMSPREE_AFGIFT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    })

    const result = await response.json()

    if (result.ok) {
      status.message = 'Din henvendelse er modtaget.'
      status.type = 'success'
    } else {
      status.message = 'Der opstod en fejl. Prøv igen eller kontakt os direkte.'
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
    isPaymentReady.value = false
  }
}

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    status.message = i18n.t('portal.payment.success');
    status.type = 'success';
  }
})
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
  text-align: left; /* Changed from center */
  margin-bottom: 2.5rem; /* Reduced from 4rem */
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
  margin: 0; /* Changed from margin: 0 auto */
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
  padding: 3.5rem 3rem;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(51, 102, 255, 0.3);
  background: linear-gradient(135deg, rgba(51, 102, 255, 0.08) 0%, rgba(5, 10, 24, 0.6) 100%);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  text-align: left;
}

.payment-card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(51, 102, 255, 0.15), transparent 70%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.payment-card-premium:hover {
  transform: translateY(-8px);
  border-color: var(--color-primary);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 20px rgba(51, 102, 255, 0.2);
}

.payment-card-premium:hover .payment-card-glow {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.card-icon-main {
  font-size: 3.5rem;
  filter: drop-shadow(0 0 20px rgba(51, 102, 255, 0.6));
  flex-shrink: 0;
}

.card-text-main h3 {
  font-size: 1.85rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  color: var(--color-white);
  line-height: 1.1;
}

.card-text-main p {
  font-size: 1.05rem;
  color: var(--color-slate);
  opacity: 0.85;
}

.card-arrow {
  margin-left: auto;
  font-size: 1.8rem;
  color: var(--color-primary);
  opacity: 0.6;
  transition: all 0.4s ease;
}

.payment-card-premium:hover .card-arrow {
  transform: translateX(12px) scale(1.1);
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

.flex-center {
  display: flex;
  justify-content: center;
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
.reveal {
  opacity: 0;
  animation: revealUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* PAYMENT SUMMARY / RECEIPT */
.payment-summary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.payment-summary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--color-primary);
}

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--glass-border);
}

.summary-title {
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.7;
}

.summary-amount {
  font-size: 1.75rem;
  font-weight: 800;
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  opacity: 0.8;
}

.summary-row .highlight {
  font-weight: 600;
  color: #fff;
  opacity: 1;
}

.divider-dashed {
  height: 1px;
  border-top: 1px dashed var(--glass-border);
  margin: 0.5rem 0;
}

.summary-footer {
  text-align: right;
}

.edit-amount-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-full);
  color: var(--color-white);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  margin: 0 auto;
}

.edit-amount-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.edit-amount-btn .icon {
  font-size: 1rem;
  color: var(--color-primary);
}

/* TICKET TYPE CAROUSEL */
.selection-label {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-slate);
    margin-bottom: 1.5rem;
    text-align: center;
}

.ticket-type-carousel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-bottom: 1rem;
}

.ticket-type-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    padding: 2.5rem 1.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.ticket-type-card:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
}

.ticket-type-card.active {
    background: rgba(51, 102, 255, 0.08);
    border: 2px solid var(--color-accent);
    box-shadow: 0 15px 35px rgba(251, 191, 36, 0.15), 0 0 15px rgba(251, 191, 36, 0.1);
    transform: translateY(-8px);
}

.type-icon {
    font-size: 2.5rem;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.1));
    transition: transform 0.4s ease;
}

.ticket-type-card.active .type-icon {
    transform: scale(1.2);
    filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.4));
}

.type-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.type-name {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
}

.type-price {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--color-accent);
}

.selection-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--color-accent);
    transform: scaleX(0);
    transition: transform 0.4s ease;
}

.ticket-type-card.active .selection-indicator {
    transform: scaleX(1);
}

.premium-input.lg {
  padding: 1rem 1.25rem;
  font-size: 1.1rem;
}

.btn.sm {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}

/* STRIPE STYLES */
.stripe-payment-container {
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--glass-border);
}

.payment-error-msg {
  color: #ff4d4d;
  font-size: 0.9rem;
  font-weight: 600;
  background: rgba(255, 77, 77, 0.1);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border-left: 3px solid #ff4d4d;
}

.flex-row {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.amount-input-wrapper {
  background: rgba(255, 255, 255, 0.03);
  padding: 0.4rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;
}

.amount-input-wrapper:focus-within {
  border-color: var(--color-primary);
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 0 15px rgba(51, 102, 255, 0.1);
}

.amount-input-wrapper .premium-input {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding-left: 1rem;
}

.amount-input-wrapper .btn {
  white-space: nowrap;
  border-radius: var(--radius-md);
  padding: 0.7rem 1.5rem;
}

.flex-row .premium-input {
  flex: 1;
}

.mt-6 { margin-top: 2.5rem; }

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 0.8s linear infinite;
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 650px) {
  .portal-page { padding: 4rem 1.25rem; }
  .portal-card { padding: 2.5rem 1.25rem; }
  .amount-grid { grid-template-columns: 1fr; }
  .options-grid { grid-template-columns: 1fr; }
  .payment-card-premium { padding: 2.5rem 1.5rem; }
  .card-content { gap: 1.5rem; }
  .card-icon-main { font-size: 2.5rem; }
  .card-text-main h3 { font-size: 1.5rem; }
  .card-text-main p { font-size: 0.95rem; }
  .card-arrow { font-size: 1.5rem; }
  .wow-title { font-size: 2.1rem; }
  .wow-subtitle { font-size: 1rem; }
  
  /* Payment Stage 2 Refinements */
  .payment-summary { padding: 1.25rem; }
  .summary-header { flex-direction: column; align-items: flex-start; gap: 0.52rem; }
  .summary-amount { font-size: 1.5rem; }
  .summary-row { font-size: 0.85rem; }
  .stripe-payment-container { padding-top: 1rem; }
}

@media (max-width: 768px) {
    .portal-card { padding: 2rem 1rem; }
    .ticket-type-carousel {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        padding: 1.5rem 1.5rem 2.5rem 1.5rem;
        margin: -1.5rem -2rem 0 -2rem; /* Bleed & Clearance */
        scrollbar-width: none;
        gap: 1.25rem;
    }
    .ticket-type-carousel::-webkit-scrollbar { display: none; }
    
    .ticket-type-card {
        flex: 0 0 85%;
        scroll-snap-align: center;
        padding: 2.5rem 1.5rem;
    }
    .summary-title { font-size: 1.1rem; }
    .summary-amount { font-size: 1.4rem; }
}
/* TRANSITIONS */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
