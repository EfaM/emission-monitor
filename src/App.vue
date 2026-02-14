<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import navConfigData from '@/config/navigation.json'

import TopNavigation from '@/components/TopNavigation.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import SideNavigation from '@/components/SideNavigation.vue'
import FooterBar from '@/components/FooterBar.vue'

const route = useRoute()

const currentPage = computed(() => {
  if (route.name !== null && route.name != undefined && route.name !== '') {
    return String(route.name)
  } else {
    return ''
  }
})

const currentSideNavigation = computed(() => {
  if (currentPage.value in navConfigData.sideNavItems) {
    return navConfigData.sideNavItems[currentPage.value]
  } else {
    return []
  }
})
</script>

<template>
  <div class="container col-xl-10 my-5 shadow rounded bg-white">
    <!--Navigation-->
    <TopNavigation />
    <!--Header-->
    <HeaderComponent />

    <!--Seiten Navigation-->
    <aside v-if="currentSideNavigation.length > 0">
      <SideNavigation :sideNavigation="currentSideNavigation" :currentPage="currentPage" />
    </aside>

    <!--Main-->
    <main>
      <RouterView />
    </main>

    <!--Footer-->
    <FooterBar />
  </div>
</template>
