import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n' // for translation
import de from './locales/de.json'
import en from './locales/eng.json'
import ar from './locales/ar.json'

import 'bootstrap'

const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'de',
  messages: { de, ar, en },
})

app.use(router)
app.use(i18n)
app.mount('#app')
