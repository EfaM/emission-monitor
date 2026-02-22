<script setup>
import TwoColLayout from '../components/TwoColLayout.vue';
import SideNavigation from '../components/SideNavigation.vue';
import navConfigData from '../config/navigation.json'

const sideNavigation = navConfigData.sideNavItems['reporting']

</script>
<template>
<TwoColLayout>
    <template #sideNav>
      <SideNavigation
        v-bind:sideNavigation="sideNavigation"
        v-bind:currentPage="reporting"
      />
    </template>
    <section id="gutesReporting">
      <h2>Test</h2>
    </section>
</TwoColLayout>
</template>
