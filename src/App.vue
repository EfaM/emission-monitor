<script setup>
import HeaderBar from '@/components/HeaderBar.vue' // Beinhaltet die Top-Navigation
import SideNavigation from '@/components/SideNavigation.vue'
import MobileSideNavigation from '@/components/MobileSideNavigation.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <HeaderBar />

  <main>
    <SideNavigation />
    <MobileSideNavigation />

    <RouterView />
  </main>

  <FooterBar />
</template>
