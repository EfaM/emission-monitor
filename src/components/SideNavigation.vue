<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const route = useRoute()

const { t } = useI18n()
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
  <ul v-if="sideNavigation.length > 0" class="nav flex-column sticky-top sidenav">
    <li v-for="item in sideNavigation" :key="item.navPosition" class="nav-item">
      <RouterLink
        :to="{ name: currentPage, hash: item.hash }"
        class="nav-link"
        :class="{ active: route.hash === item.hash }"
      >
        {{ t(item.title) }}
      </RouterLink>
    </li>
  </ul>
</template>
