<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import navConfigData from '@/config/navigation.json'
import HeaderBar from '@/components/HeaderBar.vue'
import SideNavigation from '@/components/SideNavigation.vue'
import MobileSideNavigation from '@/components/MobileSideNavigation.vue'
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
  <!--Header-->
  <div class="container-fluid">
    <div class="container-xxl" id="flexContainerWrapper">
      <div class="row" id="headerWrapper">
        <div class="col-12">
          <HeaderBar />
        </div>
      </div>
      <!--Main-->
      <div class="row" id="mainWrapper">
        <!--Seitennavigation auf Startseite-->
        <aside v-if="currentSideNavigation.length > 0" class="col-3">
          <SideNavigation :sideNavigation="currentSideNavigation" :currentPage="currentPage" />
          <MobileSideNavigation />
        </aside>
        <div class="col-9">
          <main>
            <RouterView />
          </main>
        </div>
      </div>
      <!--Footer-->
      <div class="row my-2" id="footerWrapper">
        <div class="col-12">
          <FooterBar />
        </div>
      </div>
    </div>
  </div>
</template>
