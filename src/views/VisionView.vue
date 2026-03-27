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
      <SideNavigation :sideNavigation="sideNavigation" currentPage="vision" />
    </template>
    <section id="unsereVision">
      <h2>{{ t('Vision.unsereVision') }}</h2>
      <div class="clearfix">
        <img
          src="@/assets/img/vision.webp"
          class="col-4 col-md-2 float-md-start my-2 me-md-3"
          alt="Schmuckbild: Eine Pflanze wächst aus einer Glühbirne."
        />
        <p v-for="(content, index) in tm('Vision.mission')" :key="index">
          {{ content }}
        </p>
      </div>
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
      <div class="clearfix">
        <img
          src="@/assets/img/gebundeneEmissionen.webp"
          class="col-10 col-md-6 col-lg-4 float-md-start my-2 me-md-3"
          alt="Schmuckbild: Gebundene Emission in der Umwelt"
        />
        <p v-for="(content, index) in tm('Vision.kapitalstr')" :key="index">
          {{ content }}
        </p>
      </div>
    </section>
  </TwoColLayout>
</template>
