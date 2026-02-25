<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-10 mx-auto">
        <h1>{{ t('Datenschutz.title') }}</h1>
        <section>
          <h2>{{ t('Datenschutz.verantStelle') }}</h2>
          <p>
            {{ t('Datenschutz.verantDat') }} <br />
            <span v-for="(content, index) in tm('Datenschutz.adresse')" :key="index">
              {{ content }} <br />
            </span>
            {{ t('Datenschutz.email') }}
            <a href="mailto:kontakt@sgo.org">{{ t('Datenschutz.emailadresse') }}</a>
          </p>
        </section>
        <section>
          <h2>{{ t('Datenschutz.allgHin') }}</h2>
          <p v-for="(content, index) in tm('Datenschutz.schutzanliegen')" :key="index">
            {{ content }}
          </p>
        </section>
        <section>
          <h2>{{ t('Datenschutz.logfiles') }}</h2>
          <p>
            {{ t('Datenschutz.hostProf') }}
          </p>
          <p>
            {{ t('Datenschutz.handlist') }}
          </p>
          <ul>
            <li v-for="(content, index) in tm('Datenschutz.datenliste')" :key="index">
              {{ content }}
            </li>
          </ul>
          <p v-for="(content, index) in tm('Datenschutz.breitSicherheit')" :key="index">
            {{ content }}
          </p>
        </section>
        <section>
          <h2>{{ t('Datenschutz.kontaaufnahm') }}</h2>
          <p v-for="(content, index) in tm('Datenschutz.persDaten')" :key="index">
            {{ content }}
          </p>
        </section>
        <section>
          <h2>{{ t('Datenschutz.ihrRech') }}</h2>
          <p>{{ t('Datenschutz.sieHarech') }}</p>
          <ul>
            <li v-for="(content, index) in tm('Datenschutz.reList')" :key="index">
              {{ content }}
            </li>
          </ul>
          <p>{{ t('Datenschutz.asichtbe') }}</p>
        </section>
        <section>
          <h2>{{ t('Datenschutz.dasiheit') }}</h2>
          <p>
            {{ t('Datenschutz.techOrgMa') }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
