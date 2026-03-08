<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div class="container">
    <!--Header-->
    <HeaderComponent />

    <div class="my-5 p-3 p-lg-5 shadow rounded bg-white">
      <!--Main-->
      <RouterView />

      <!--Footer-->
      <FooterBar />
    </div>
  </div>
</template>
