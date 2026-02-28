<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div class="container">
    <div class="my-5 p-5 shadow rounded bg-white">
      <!--Header-->
      <HeaderComponent />

      <!--Main-->
      <RouterView />

      <!--Footer-->
      <FooterBar />
    </div>
  </div>
</template>
