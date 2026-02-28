<script setup>
import Co2Table from '@/components/Co2Table.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-10 mx-auto">
        <section>
          <h1>{{ t('Emission.titel') }}</h1>
          <div class="clearfix">
            <img
              src="@/assets/img/monitor.webp"
              class="col-10 col-md-6 col-lg-4 float-md-end my-2 ms-md-3"
              alt="Schmuckbild: Fußabdruck und Daten"
            />
            <p v-for="(content, index) in tm('Emission.uebEmisWert')" :key="index">
              {{ content }}
            </p>
          </div>
        </section>
        <section>
          <h2>{{ t('Emission.scope') }}</h2>
          <p>
            {{ t('Emission.ausgewiEmi') }}
          </p>
          <div class="row g-4 my-4">
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card text-start text-md-center">
                <img
                  src="@/assets/img/scopeone.webp"
                  class="card-img-top p-4"
                  alt="Schmuckbild: Scope 1 Emissionen. Eine Fabrik mit Fuhrpark"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ t('Emission.card1') }}</h5>
                  <p class="card-text">
                    {{ t('Emission.card1corp') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card text-start text-md-center">
                <img
                  src="@/assets/img/scopetwo.webp"
                  class="card-img-top p-4"
                  alt="Schmuckbild: Scope 2 Emissionen. Strom wird eingekauft."
                />
                <div class="card-body">
                  <h5 class="card-title">{{ t('Emission.card2') }}</h5>
                  <p class="card-text">
                    {{ t('Emission.cardstrom') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card text-start text-md-center">
                <img
                  src="@/assets/img/scopethree.webp"
                  class="card-img-top p-4"
                  alt="Schmuckbild: Scope 1 Emissionen. Eine Fabrik mit Fuhrpark"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ t('Emission.card3') }}</h5>
                  <p class="card-text">
                    {{ t('Emission.liefGeschNu') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p>
            {{ t('Emission.tabellDarstell') }}
          </p>
          <Co2Table />
        </section>
      </div>
    </div>
  </div>
</template>
