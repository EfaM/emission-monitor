<script setup>
import TopNavigation from '@/components/TopNavigation.vue'
import TopBar from '@/components/TopBar.vue'
</script>
<template>
  <header>
    <!-- TopBar für Logo und Sprache-->
    <TopBar />

    <!--Headerbild auf der Startseite-->
    <div class="col-8 mx-auto my-2">
      <img src="@\assets\banner_sgo.webp" alt="Hero Banner Co2" class="img-fluid" />
    </div>

    <!--Navigation-->
    <TopNavigation />
  </header>
</template>
