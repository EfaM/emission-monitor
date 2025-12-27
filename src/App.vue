<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="SGO Logo" src="@/assets/sgo Logo.png" />
    <nav>
      <RouterLink to="/">SGO Startseite</RouterLink>
      <RouterLink to="/co2-monitor">Co<sub>2</sub> Monitor</RouterLink>
      <RouterLink to="/impressum">Impressum</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
