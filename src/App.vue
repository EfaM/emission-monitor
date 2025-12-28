<script setup>
import HeaderBar from '@/components/HeaderBar.vue' // Beinhaltet die Top-Navigation
import HeaderBanner from '@/components/HeaderBanner.vue' // Nur auf der Startseite zu sehen
import SideNavigation from '@/components/SideNavigation.vue'
import MobileSideNavigation from '@/components/MobileSideNavigation.vue'
import FooterBar from '@/components/FooterBar.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="container-fluid">
    <div class="container-xxl" id="flexContainerWrapper">
      <div class="row" id="headerWrapper">
        <div class="col-12">
          <HeaderBar />
        </div>
      </div>
      <!--Nur auf der Startseite-->
      <div class="row" id="bannerWrapper" v-if="route.name === 'home'">
        <div class="col-8 mx-auto">
          <HeaderBanner />
        </div>
      </div>
      <div class="row" id="mainWrapper">
        <div class="col-9">
          <main>
            <RouterView />
          </main>
        </div>
        <aside class="col-3">
          <SideNavigation />
          <MobileSideNavigation />
        </aside>
      </div>

      <div class="row" id="footerWrapper">
        <div class="col-12">
          <FooterBar />
        </div>
      </div>
    </div>
  </div>
</template>
