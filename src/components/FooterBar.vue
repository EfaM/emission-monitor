<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import navConfigData from '../config/navigation.json'
const nav = navConfigData.footerItems
</script>

<template>
  <footer class="my-4 bg-white border-top">
    <div class="container">
      <ul class="navbar-nav flex-row justify-content-end gap-3 pt-3">
        <li v-for="navItem in nav" :key="navItem.urlpath" class="nav-item">
          <RouterLink :to="'/' + navItem.urlpath" class="nav-link" active-class="active">
            {{ t(navItem.linkTitle) }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
