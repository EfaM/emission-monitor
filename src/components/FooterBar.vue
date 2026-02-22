<script setup>
import { RouterLink } from 'vue-router'
import navConfigData from '../config/navigation.json'
const nav = navConfigData.FooterItems
</script>

<template>
  <footer class="navbar navbar-expand-sm my-4 bg-white border-top">
    <div class="container-fluid">
        <ul class="navbar-nav ms-auto mb-2">
          <li v-for="navItem in nav" :key="navItem.navPosition" class="nav-item">
            <RouterLink :to="'/' + navItem.urlpath" class="nav-link" active-class="active">
              {{ navItem.linkTitle }}
            </RouterLink>
          </li>
       </ul>
    </div>
  </footer>
</template>
