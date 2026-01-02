<script setup>
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <ul class="nav nav-pills flex-column sticky-top">
    <li class="nav-item">
      <RouterLink
        :to="{ name: 'home', hash: '#sgo' }"
        class="nav-link"
        :class="{ active: route.hash === '#sgo' }"
      >
        Shared Ground Organization
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink
        :to="{ name: 'home', hash: '#shared-e-e-r' }"
        class="nav-link"
        :class="{ active: route.hash === '#shared-e-e-r' }"
      >
        Shared E.E.R.
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink
        :to="{ name: 'home', hash: '#die-vision' }"
        class="nav-link"
        :class="{ active: route.hash === '#die-vision' }"
      >
        Die Vision
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink
        :to="{ name: 'home', hash: '#co2-monitor' }"
        class="nav-link"
        :class="{ active: route.hash === '#co2-monitor' }"
      >
        Co<sub>2</sub> Monitor
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink
        :to="{ name: 'home', hash: '#partnerschaften' }"
        class="nav-link"
        :class="{ active: route.hash === '#partnerschaften' }"
      >
        Partnerschaften
      </RouterLink>
    </li>
  </ul>
</template>
