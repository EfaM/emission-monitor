<script setup>
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()

const { sideNavigation, currentPage } = defineProps({
  sideNavigation: {
    type: Array,
  },
  currentPage: {
    type: String,
  },
})
</script>

<template>
  <ul v-if="sideNavigation.length > 0" class="nav nav-pills flex-column sticky-top z-2">
    <li v-for="item in sideNavigation" :key="item.navPosition" class="nav-item">
      <RouterLink
        :to="{ name: currentPage, hash: item.hash }"
        class="nav-link"
        :class="{ active: route.hash === item.hash }"
      >
        {{ item.title }}
      </RouterLink>
    </li>
  </ul>
</template>
