<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLanguage as languageIcon } from '@fortawesome/free-solid-svg-icons'

const { locale, availableLocales } = useI18n({ useScope: 'global' })

function switchLanguage(currentLanguage) {
  locale.value = currentLanguage
  document.documentElement.lang = currentLanguage
  const pageStyleLink = document.getElementById('bootstrap-css')

  if (currentLanguage === 'ar') {
    document.documentElement.dir = 'rtl'
    pageStyleLink.href = '/node_modules/bootstrap/dist/css/bootstrap.rtl.css'
  } else {
    document.documentElement.dir = 'ltr'
    pageStyleLink.href = '/node_modules/bootstrap/dist/css/bootstrap.css'
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-between my-2">
      <!--Logo-->
      <div class="col-4 text-start">
        <RouterLink to="/" class="navbar-brand">
          <img src="@/assets/navlogo.png" alt="SGO Logo" height="40" />
        </RouterLink>
      </div>

      <!--Sprachauswahl-->
      <div class="col-4 d-flex justify-content-end">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="navbar-text">
                <FontAwesomeIcon :icon="languageIcon" />
              </span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end py-1">
              <li v-for="language in availableLocales" :key="`locale-${language}`">
                <a class="dropdown-item py-1 px-1 text-center" @click="switchLanguage(language)">{{
                  String(language).toLocaleUpperCase()
                }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
