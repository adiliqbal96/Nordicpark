<template>
  <div class="faq-bubble-container">
    <!-- Chat Window -->
    <Transition name="fade-slide">
      <div v-if="isOpen" class="faq-window">
        <div class="faq-header">
          <h3>Oftest Stillede Spørgsmål</h3>
          <button @click="toggleChat" class="close-btn" aria-label="Close FAQ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="faq-content">
          <div class="faq-intro">
            Hej! 👋 Her finder du svar på de mest almindelige spørgsmål.
          </div>
          
          <div class="faq-list">
            <div 
              v-for="(item, index) in faqItems" 
              :key="index"
              class="faq-item"
              :class="{ 'is-open': activeIndex === index }"
            >
              <button class="faq-question" @click="toggleItem(index)">
                <span>{{ item.question }}</span>
                <svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="faq-answer-wrapper" :style="{ maxHeight: activeIndex === index ? '200px' : '0' }">
                <div class="faq-answer">
                  {{ item.answer }}
                </div>
              </div>
            </div>
          </div>
          
          <div class="faq-footer">
            Fandt du ikke hvad du søgte? 
            <RouterLink to="/contact" @click="isOpen = false" class="contact-link">Kontakt os her</RouterLink>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Floating Action Button -->
    <button 
      class="faq-fab" 
      :class="{ 'is-active': isOpen }"
      @click="toggleChat"
      aria-label="Toggle FAQ Chat"
    >
      <Transition name="icon-fade" mode="out-in">
        <svg v-if="!isOpen" key="chat" class="icon-chat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <svg v-else key="close" class="icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </Transition>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
const activeIndex = ref(null)

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    // Reset active item when closing
    setTimeout(() => {
      activeIndex.value = null
    }, 300)
  }
}

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqItems = [
  {
    question: "Hvilke parkeringsløsninger tilbyder I?",
    answer: "Vi tilbyder skræddersyede løsninger, herunder digital parkering, ANPR (gengivelse af nummerplader), og traditionel parkeringsvagt-service baseret på din ejendoms behov."
  },
  {
    question: "Koster det noget at få jer ud?",
    answer: "Nej, vi tilbyder en gratis og uforpligtende gennemgang af dine parkeringsforhold, hvor vi vurderer potentialet for optimering."
  },
  {
    question: "Hvordan håndteres en klage?",
    answer: "Alle klager behandles professionelt gennem vores kundecenter. Bilisten kan nemt indsende en klage via vores hjemmeside med referencenummeret fra afgiften."
  },
  {
    question: "Hvor hurtigt kan vi komme i gang?",
    answer: "Fra vi har besigtiget arealet og aftalt rammerne, kan vi typisk implementere løsningen og opsætte skiltning inden for 1-2 uger."
  }
]
</script>

<style scoped>
.faq-bubble-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  pointer-events: none; /* Let clicks pass through container */
}

.faq-bubble-container > * {
  pointer-events: auto; /* Re-enable clicks on children */
}

/* Floating Action Button */
.faq-fab {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-accent);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 69, 165, 0.4);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  margin-top: 1rem;
}

.faq-fab:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 69, 165, 0.5);
}

.faq-fab.is-active {
  background: #2a2a2a;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.icon-chat, .icon-close {
  display: block;
}

/* Chat Window */
.faq-window {
  width: 350px;
  max-width: calc(100vw - 4rem);
  background: rgba(10, 17, 40, 0.85); /* Dark blue match */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 69, 165, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.faq-header {
  background: var(--color-accent);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.faq-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
}

.close-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.close-btn:hover {
  color: white;
}

.faq-content {
  padding: 1.5rem;
  max-height: 50vh;
  overflow-y: auto;
}

.faq-content::-webkit-scrollbar {
  width: 6px;
}

.faq-content::-webkit-scrollbar-track {
  background: transparent;
}

.faq-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.faq-intro {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  line-height: 1.5;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid var(--color-accent);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.is-open {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.1);
}

.faq-question {
  width: 100%;
  background: transparent;
  border: none;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: left;
  cursor: pointer;
  line-height: 1.4;
  font-family: inherit;
}

.chevron {
  flex-shrink: 0;
  margin-left: 1rem;
  margin-top: 0.1rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgba(255, 255, 255, 0.5);
}

.faq-item.is-open .chevron {
  transform: rotate(180deg);
  color: var(--color-accent);
}

.faq-answer-wrapper {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer {
  padding: 0 1rem 1rem 1rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  line-height: 1.6;
}

.faq-footer {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
}

.contact-link {
  color: var(--color-accent);
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.25rem;
}

.contact-link:hover {
  text-decoration: underline;
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: bottom right;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.icon-fade-enter-from,
.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(-30deg) scale(0.8);
}

/* Mobile Adjustments */
@media (max-width: 480px) {
  .faq-bubble-container {
    bottom: 1.5rem;
    right: 1.5rem;
  }
  
  .faq-window {
    width: calc(100vw - 3rem);
  }
}
</style>
