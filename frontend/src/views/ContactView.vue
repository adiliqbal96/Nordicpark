<template>
  <div class="page">
    <Backlink :to="{ name: 'home' }" label="Til forsiden" />

    <h1>Kontakt NordicPark</h1>
    <p>
      Udfyld formularen, hvis du vil være kunde, har spørgsmål til parkering eller ønsker
      et uforpligtende tilbud.
    </p>

    <form class="form" @submit.prevent="handleSubmit">
      <label>
        Navn
        <input v-model="form.name" type="text" placeholder="Dit navn" required />
      </label>

      <label>
        E-mail
        <input v-model="form.email" type="email" placeholder="din@email.dk" required />
      </label>

      <label>
        Virksomhed / Forening
        <input v-model="form.company" type="text" placeholder="Valgfrit" />
      </label>

      <label>
        Besked
        <textarea v-model="form.message" rows="4" placeholder="Fortæl kort om dine behov" required></textarea>
      </label>

      <div v-if="status.message" :class="['status-msg', status.type]">
        {{ status.message }}
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Sender...' : 'Send' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
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

const handleSubmit = async () => {
  loading.value = true
  status.message = ''
  
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
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
      // Clear form
      form.name = ''
      form.email = ''
      form.company = ''
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
</style>
