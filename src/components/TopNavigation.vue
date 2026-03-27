<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse as HomeIcon, faLanguage as languageIcon } from '@fortawesome/free-solid-svg-icons'

import navConfigData from '../config/navigation.json'

const nav = navConfigData.topNavItems

const { t, locale, availableLocales } = useI18n({ useScope: 'global' })

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
  <nav class="navbar fixed-top z-3 navbar-expand-sm bg-white border-bottom">
    <div class="container">
      <RouterLink to="/" class="navbar-brand px-1">
        <img src="@/assets/img/logo.webp" alt="SGO Logo" height="40" />
      </RouterLink>

      <!--Toggle für kleine Screens-->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!--Navigationselemente-->
        <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" active-class="active">
              <FontAwesomeIcon :icon="HomeIcon" />
            </RouterLink>
          </li>
          <li v-for="navItem in nav" :key="navItem.urlpath" class="nav-item">
            <RouterLink :to="'/' + navItem.urlpath" class="nav-link" active-class="active">
              {{ t(navItem.linkTitle) }}
            </RouterLink>
          </li>
        </ul>
        <!--Sprachauswahl-->
        <ul class="navbar-nav border-start ms-2 p-1 small">
          <li class="nav-item dropdown">
            <button
              class="nav-link btn btn-link p-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-label="LangToggle"
            >
              <span class="navbar-text" id="lang-icon">
                <FontAwesomeIcon :icon="languageIcon" />
                {{ locale.toUpperCase() }}
              </span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end py-1">
              <li v-for="language in availableLocales" :key="`locale-${language}`">
                <button
                  class="dropdown-item py-1 px-1 text-center"
                  @click="switchLanguage(language)"
                >
                  {{ String(language).toUpperCase() }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
