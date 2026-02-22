<script setup>
import TopNavigation from '@/components/TopNavigation.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div class="container col-xl-10 my-5 shadow rounded bg-white">

    <!--Navigation-->
    <TopNavigation />

    <!--Header-->
    <HeaderComponent />

    <!--Main-->
    <RouterView />

    <!--Footer-->
    <FooterBar />
  </div>
</template>
