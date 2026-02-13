<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse as HomeIcon } from '@fortawesome/free-solid-svg-icons'

import navConfigData from '../config/navigation.json'

const { t } = useI18n()
const nav = navConfigData.topNavItems
</script>

<template>
  <nav class="navbar navbar-expand-sm bg-body-primary my-4">
    <div class="container-fluid">
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
        <ul class="navbar-nav mx-sm-auto mb-2 mb-lg-0">
          <li>
            <RouterLink to="/" class="nav-link" active-class="active">
              <span class="nav-item">
                <FontAwesomeIcon :icon="HomeIcon" />
              </span>
            </RouterLink>
          </li>
          <li v-for="navItem in nav" :key="navItem.navPosition" class="nav-item">
            <RouterLink :to="'/' + navItem.urlpath" class="nav-link" active-class="active">
              {{ t(navItem.linkTitle) }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
