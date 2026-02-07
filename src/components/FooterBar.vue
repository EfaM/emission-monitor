<script setup>
import { RouterLink } from 'vue-router'
import navConfigData from '../config/navigation.json'
const nav = navConfigData.FooterItems
</script>

<template>
  <footer>
    <ul class="nav flex-column">
      <li v-for="navItem in nav" :key="navItem.navPosition" class="nav-item">
        <RouterLink :to="'/' + navItem.urlpath" class="nav-link" active-class="active">
          {{ navItem.linkTitle }}
        </RouterLink>
      </li>
    </ul>
  </footer>
</template>
