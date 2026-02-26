<script setup>
import TwoColLayout from '../components/TwoColLayout.vue'
import SideNavigation from '../components/SideNavigation.vue'
import navConfigData from '../config/navigation.json'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const sideNavigation = navConfigData.sideNavItems['vision']
</script>
<template>
  <TwoColLayout>
    <template #sideNav>
      <SideNavigation v-bind:sideNavigation="sideNavigation" v-bind:currentPage="vision" />
    </template>
    <section id="unsereVision">
      <h2>{{ t('Vision.unsereVision') }}</h2>
      <p v-for="(content, index) in tm('Vision.mission')" :key="index">
        {{ content }}
      </p>
    </section>
    <section id="unserAnsatz">
      <h2>{{ t('Vision.unserAnsatz') }}</h2>
      <p>
        {{ t('Vision.arbeitenMethod') }}
      </p>
      <ul>
        <li v-for="(content, index) in tm('Vision.arbeitList')" :key="index">{{ content }}</li>
      </ul>
      <p>
        {{ t('Vision.verstehenals') }}
      </p>
    </section>
    <section id="transparenz">
      <h2>{{ t('Vision.transparenz') }}</h2>
      <p v-for="(content, index) in tm('Vision.kapitalstr')" :key="index">
        {{ content }}
      </p>
    </section>
  </TwoColLayout>
</template>
