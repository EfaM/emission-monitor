<script setup>
import HeaderBar from '@/components/HeaderBar.vue' // Beinhaltet die Top-Navigation
import HeaderBanner from '@/components/HeaderBanner.vue' // Nur auf der Startseite zu sehen
import HomeSideNavigation from '@/components/HomeSideNavigation.vue'
import MobileSideNavigation from '@/components/MobileSideNavigation.vue'
import FooterBar from '@/components/FooterBar.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
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
      <!--Headerbild auf der Startseite-->
      <div v-if="route.name === 'home' || route.name === '/'" class="row" id="bannerWrapper">
        <div class="col-8 mx-auto">
          <HeaderBanner />
        </div>
      </div>
      <!--Main-->
      <div class="row" id="mainWrapper">
        <div class="col-9">
          <main>
            <RouterView />
          </main>
        </div>
        <!--Seitennavigation auf Startseite-->
        <aside v-if="route.name === 'home' || route.name === '/'" class="col-3">
          <HomeSideNavigation />
          <MobileSideNavigation />
        </aside>
      </div>
      <!--Footer-->
      <div class="row" id="footerWrapper">
        <div class="col-12">
          <FooterBar />
        </div>
      </div>
    </div>
  </div>
</template>
