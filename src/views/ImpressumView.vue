<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <main>
    <div class="row">
      <div class="col-12 col-lg-10 mx-auto">
        <h1>{{ t('Impressum.title') }}</h1>
        <section>
          <p>
            <span v-for="(content, index) in tm('Impressum.content')" :key="index">
              {{ content }} <br />
            </span>
          </p>
        </section>
        <section>
          <h4>{{ t('Impressum.vertretenduch') }}</h4>
          <p>
            <span v-for="(content, index) in tm('Impressum.vorstand')" :key="index">
              {{ content }} <br />
            </span>
          </p>
        </section>
        <section>
          <h4>{{ t('Impressum.hauptsitz') }}</h4>
          <p>
            <span v-for="(content, index) in tm('Impressum.adresse')" :key="index">
              {{ content }} <br />
            </span>
          </p>
        </section>
        <section>
          <h4>{{ t('Impressum.kontakt') }}</h4>
          <p>
            {{ t('Impressum.telefon') }} <br />
            {{ t('Impressum.email') }}
            <a href="mailto:kontakt@sgo.org">{{ t('Impressum.emailadresse') }}</a>
          </p>
        </section>
        <section>
          <h4>{{ t('Impressum.registereintrag') }}</h4>
          <p>
            <span v-for="(content, index) in tm('Impressum.regeintrag')" :key="index">
              {{ content }} <br />
            </span>
          </p>
        </section>
        <section>
          <h2>{{ t('Impressum.umsatzsteuer') }}</h2>
          <p>
            <span v-for="(content, index) in tm('Impressum.umID')" :key="index">
              {{ content }} <br />
            </span>
          </p>
        </section>
        <section>
          <h2>{{ t('Impressum.verantInhalt') }}</h2>
          <p>
            <span v-for="(content, index) in tm('Impressum.verantInhaltlnach')" :key="index">
              {{ content }} <br />
            </span>
          </p>
        </section>
        <section>
          <h2>{{ t('Impressum.haftung') }}</h2>
          <p>
            <span v-for="(content, index) in tm('Impressum.haftungstext')" :key="index">
              {{ content }}
            </span>
          </p>
        </section>
        <section>
          <h2>{{ t('Impressum.urheberrechttitel') }}</h2>
          <p>
            <span v-for="(content, index) in tm('Impressum.urheberrecht')" :key="index">
              {{ content }}
            </span>
          </p>
        </section>
      </div>
    </div>
  </main>
</template>
