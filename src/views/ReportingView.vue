<script setup>
import TwoColLayout from '../components/TwoColLayout.vue'
import SideNavigation from '../components/SideNavigation.vue'
import navConfigData from '../config/navigation.json'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const sideNavigation = navConfigData.sideNavItems['reporting']
</script>
<template>
  <TwoColLayout>
    <template #sideNav>
      <SideNavigation v-bind:sideNavigation="sideNavigation" v-bind:currentPage="reporting" />
    </template>

    <!--Nachhaltiges Emissionsreporting-->
    <section id="nachhaltigesReporting">
      <h2>{{ t('Reporting.nachhaltigesReporting.title') }}</h2>
      <div class="clearfix">
        <img
          src="@/assets/img/partnership.webp"
          class="col-10 col-md-8 float-md-end my-2 ms-md-3"
          alt="Schmuckbild: Vertragspartner:innen reichen sich die Hände"
        />
        <p v-for="(content, index) in tm('Reporting.nachhaltigesReporting.content')" :key="index">
          {{ content }}
        </p>
      </div>
    </section>

    <!--Warum Reporting so entscheidend ist-->
    <section id="reportingEntscheidend">
      <h2>{{ t('Reporting.reportingEntscheidend.title') }}</h2>
      <p
        v-for="(content, index) in tm(
          'Reporting.reportingEntscheidend.unternehmerischeVerantwortung',
        )"
        :key="index"
      >
        {{ content }}
      </p>
      <ul>
        <li
          v-for="(listitem, index) in tm('Reporting.reportingEntscheidend.listitems')"
          :key="index"
        >
          {{ listitem }}
        </li>
      </ul>
      <p
        v-for="(content, index) in tm('Reporting.reportingEntscheidend.auswirkungen')"
        :key="index"
      >
        {{ content }}
      </p>
    </section>

    <!--Was macht gutes Reporting aus?-->
    <section id="merkmaleReporting">
      <h2>{{ t('Reporting.merkmaleReporting.title') }}</h2>
      <p v-for="(content, index) in tm('Reporting.merkmaleReporting.content')" :key="index">
        {{ content }}
      </p>
      <div class="clearfix">
        <img
          src="@/assets/img/verify.webp"
          class="col-4 col-md-2 float-md-start my-2 me-md-3"
          alt="Schmuckbild: Vertragspartner:innen reichen sich die Hände"
        />
        <p>
          {{ t('Reporting.merkmaleReporting.featured') }}
        </p>
        <p>
          {{ t('Reporting.merkmaleReporting.kennzahlen') }}
        </p>
      </div>
    </section>
  </TwoColLayout>
</template>
