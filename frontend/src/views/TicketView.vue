<template>
  <div class="page">
    <Backlink :to="{ name: 'home' }" label="Til forsiden" />

    <h1>Har du fået en afgift?</h1>
    <p>
      Har du spørgsmål til en parkeringsafgift udstedt af NordicPark, kan du kontakte os
      via formularen nedenfor eller på mail/telefon.
    </p>

    <form class="form" @submit.prevent="handleSubmit">
      <label>
        Afgiftsnummer
        <input v-model="form.ticketNumber" type="text" placeholder="Indtast afgiftsnummer" required />
      </label>

      <label>
        Nummerplade
        <input v-model="form.licensePlate" type="text" placeholder="XX12345" required />
      </label>

      <label>
        Besked
        <textarea v-model="form.message" rows="4" placeholder="Skriv din henvendelse her" required></textarea>
      </label>

      <div v-if="status.message" :class="['status-msg', status.type]">
        {{ status.message }}
      </div>

      <button type="submit" class="btn primary" :disabled="loading">
        {{ loading ? 'Sender...' : 'Send henvendelse' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Backlink from '../components/Backlink.vue'

const form = reactive({
  ticketNumber: '',
  licensePlate: '',
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
    const response = await fetch(`${import.meta.env.VITE_API_URL}/ticket`, {
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
      form.ticketNumber = ''
      form.licensePlate = ''
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
