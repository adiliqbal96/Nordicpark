<template>
  <div class="page contact-page">
    <!-- WOW Background Elements -->
    <div class="wow-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <div class="container--standard relative z-10 pt-48">
      <div class="header-nav-group">
        <Backlink :to="{ name: 'erhverv' }" :label="i18n.t('services.back')" />
      </div>

      <div class="contact-grid">
        <!-- CONTACT INFO -->
        <aside class="contact-info">
          <header class="contact-header reveal">
            <h1 class="text-gradient wow-title">{{ i18n.t('contact.title') }}</h1>
            <p class="subtitle">{{ i18n.t('contact.subtitle') }}</p>
          </header>

          <div class="info-cards">
            <div class="info-item reveal" style="transition-delay: 0.1s">
              <div class="info-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              <div class="info-text">
                <label>{{ i18n.t('contact.email') }}</label>
                <a href="mailto:kontakt@nordicpark.eu">kontakt@nordicpark.eu</a>
              </div>
            </div>

            <div class="info-item reveal" style="transition-delay: 0.2s">
              <div class="info-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 1 16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="info-text">
                <label>{{ i18n.t('contact.phone') }}</label>
                <a href="tel:+4571613621">+45 71 61 36 21</a>
              </div>
            </div>

            <div class="info-item reveal" style="transition-delay: 0.3s">
              <div class="info-icon-wrapper highlight">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div class="info-text">
                <label>{{ i18n.t('contact.openingHours') }}</label>
                <span>{{ i18n.t('contact.openingHoursContent') }}</span>
              </div>
            </div>
          </div>
        </aside>

        <!-- CONTACT FORM -->
        <section class="form-container reveal" style="transition-delay: 0.2s">
          <div class="premium-glass-card">
            <div class="card-inner">
              <form class="contact-form" @submit.prevent="handleSubmit">
                <div class="form-row">
                  <div class="input-group">
                    <label>{{ i18n.t('contact.name') }}</label>
                    <input v-model="form.name" type="text" :placeholder="i18n.t('contact.namePlaceholder')" required />
                    <div class="input-glow"></div>
                  </div>
                  <div class="input-group">
                    <label>{{ i18n.t('contact.email') }}</label>
                    <input v-model="form.email" type="email" :placeholder="i18n.t('contact.emailPlaceholder')" required />
                    <div class="input-glow"></div>
                  </div>
                </div>

                <div class="input-group">
                  <label>{{ i18n.t('contact.company') }}</label>
                  <input v-model="form.company" type="text" :placeholder="i18n.t('contact.companyPlaceholder')" />
                  <div class="input-glow"></div>
                </div>

                <div class="input-group">
                  <label>{{ i18n.t('contact.message') }}</label>
                  <textarea v-model="form.message" rows="5" :placeholder="i18n.t('contact.messagePlaceholder')" required></textarea>
                  <div class="input-glow"></div>
                </div>

                <div v-if="status.message" :class="['status-msg', status.type]">
                  <span class="status-icon">{{ status.type === 'success' ? '✓' : '!' }}</span>
                  {{ status.message }}
                </div>

                <button type="submit" class="wow-submit-btn" :disabled="loading">
                  <span v-if="loading" class="spinner"></span>
                  <span class="btn-text">{{ loading ? i18n.t('contact.sending') : i18n.t('contact.sendBtn') }}</span>
                  <div class="btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { i18n } from '../i18n.js'
import Backlink from '../components/Backlink.vue'

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: ''
})

const loading = ref(false)
const status = reactive({
  message: '',
  type: '' // 'success' or 'error'
})

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqejzyln'

const handleSubmit = async () => {
  loading.value = true
  status.message = ''

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message
      })
    })

    const data = await response.json()

    if (data.ok) {
      status.message = i18n.t('contact.success')
      status.type = 'success'
      form.name = ''
      form.email = ''
      form.company = ''
      form.message = ''
    } else {
      status.message = i18n.t('contact.error')
      status.type = 'error'
    }
  } catch (error) {
    status.message = i18n.t('contact.error')
    status.type = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-page {
  position: relative;
  min-height: 100vh;
  padding-bottom: 5rem;
  overflow: hidden;
  background: var(--color-surface); /* Softened from base */
}

/* WOW Background blobs */
.wow-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float 20s infinite alternate ease-in-out;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background: var(--color-accent);
  top: -200px;
  right: -100px;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: #B45309;
  bottom: -100px;
  left: -200px;
  animation-delay: -5s;
}

.blob-3 {
  width: 400px;
  height: 400px;
  background: #4F46E5;
  top: 40%;
  left: 30%;
  opacity: 0.1;
  animation-delay: -10s;
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(50px, 100px) scale(1.1); }
}

.relative { position: relative; }
.z-10 { z-index: 10; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 5rem;
  margin-top: -2rem; /* Pulled up further */
  max-width: 1200px; /* Centered & Tighter */
  margin-inline: auto;
  align-items: center;
}

.contact-header {
  margin-bottom: 4rem;
}

.wow-title {
  font-size: clamp(3rem, 6vw, 4.5rem); /* Slightly smaller for balance */
  margin-bottom: 2rem;
  letter-spacing: -0.05em;
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: 450px;
  line-height: 1.6;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateX(10px);
}

.info-icon-wrapper {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.info-item:hover .info-icon-wrapper {
  background: var(--color-accent);
  color: #000;
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 15px 30px rgba(251, 191, 36, 0.3);
}

.info-text label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
  font-weight: 800;
}

.info-text a, .info-text span {
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.info-text a:hover {
  color: var(--color-accent);
}

/* Form Styles */
.premium-glass-card {
  position: relative;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 40px;
  padding: 1px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.premium-glass-card:hover {
  transform: translateY(-10px) scale(1.01);
}

.premium-glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%);
  z-index: 0;
}

.card-inner {
  position: relative;
  background: rgba(10, 15, 30, 0.8);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 31px;
  padding: 3.5rem;
  z-index: 1;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.input-group {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.input-group label {
  font-size: 0.95rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 0.5rem;
}

input, textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  color: #fff;
  font-family: inherit;
  font-size: 1.05rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  z-index: 2;
}

input:focus, textarea:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.input-glow {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: var(--color-accent);
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

input:focus ~ .input-glow, 
textarea:focus ~ .input-glow {
  opacity: 0.1;
}

.wow-submit-btn {
  position: relative;
  background: linear-gradient(135deg, var(--color-accent) 0%, #F59E0B 100%);
  border: none;
  border-radius: 16px;
  padding: 1.25rem;
  color: #000;
  font-weight: 800;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  margin-top: 1rem;
}

.wow-submit-btn:hover:not(:disabled) {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 40px rgba(245, 158, 11, 0.3);
}

.wow-submit-btn:active:not(:disabled) {
  transform: translateY(-1px) scale(0.98);
}

.wow-submit-btn:disabled {
  opacity: 0.6;
  cursor: wait;
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.wow-submit-btn:hover .btn-glow {
  transform: translateX(100%);
}

.status-msg {
  padding: 1.25rem;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: slideUp 0.4s ease;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.status-msg.success {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #34D399;
}

.status-msg.error {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #F87171;
}

.status-icon {
  width: 24px;
  height: 24px;
  background: currentColor;
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 900;
}

@media (max-width: 1100px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .contact-header {
    margin-bottom: 2.5rem;
    text-align: center;
  }
  .subtitle {
    margin-inline: auto;
  }
  .info-cards {
    align-items: flex-start; /* Unified left alignment within the center */
    max-width: 280px; /* Constraining width to keep them tight together */
    margin-inline: auto;
  }
  .info-item {
    gap: 1.25rem;
    width: 100%;
    justify-content: flex-start;
  }
}

@media (max-width: 600px) {
  .page { padding-top: 5rem; }
  .card-inner {
    padding: 2rem 1.5rem;
  }
  .contact-form {
    gap: 1.25rem;
  }
  .form-row {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .wow-title {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
  .subtitle {
    font-size: 1.1rem;
  }
  .info-item {
    gap: 1rem;
  }
  .info-icon-wrapper {
    width: 50px;
    height: 50px;
    border-radius: 14px;
  }
  .info-icon-wrapper svg {
    width: 20px;
    height: 20px;
  }
  .info-text label {
    font-size: 0.65rem;
  }
  .info-text a, .info-text span {
    font-size: 1.05rem;
  }
  input, textarea {
    padding: 1rem 1.25rem;
    font-size: 1rem;
  }
  .wow-submit-btn {
    padding: 1rem;
    font-size: 1rem;
  }
}
</style>
