<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <div class="container">
    <section class="my-5">
      <h1 class="text-start text-sm-center mb-0">{{ t('Home.titel') }}</h1>
      <div class="row justify-content-center">
        <div class="col-6 col-md-4 py-4">
          <img
            src="@/assets/img/logo.webp"
            class="img-fluid"
            alt="Schmuckbild: Hände in einem Kreis"
          />
        </div>
      </div>
      <h2 class="text-start text-sm-center">{{ t('Home.untertitel') }}</h2>
    </section>
    <!--Hero-Phrases-->
    <section>
      <div class="row justify-content-center">
        <div class="col-10 col-lg-8">
          <p
            v-for="(content, index) in tm('Home.klimaschutz')"
            :key="index"
            class="text-start text-sm-center"
          >
            {{ content }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <!--Feature-Cards-->
      <div class="row my-4 g-5 justify-content-center">
        <div class="col-10 col-md-4">
          <div class="card text-center text-md-start">
            <img
              src="@/assets/img/vision.webp"
              class="card-img-top p-2"
              alt="Schmuckbild: Eine Pflanze wächst aus einer Glühbirne."
            />
            <div class="card-body">
              <p class="card-text">
                {{ t('Home.visionCard') }}
              </p>
              <a href="#" class="btn btn-primary">{{ t('Home.visionLink') }}</a>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-4">
          <div class="card text-center text-md-start">
            <img
              src="@/assets/img/partnership.webp"
              class="card-img-top p-2"
              alt="Schmuckbild: SGO-Partnerschaften reichen sich die Hand."
            />
            <div class="card-body">
              <p class="card-text">
                {{ t('Home.nachRep') }}
              </p>
              <a href="#" class="btn btn-primary">{{ t('Home.RepLink') }}</a>
            </div>
          </div>
        </div>
        <div class="col-10 col-md-4">
          <div class="card text-center text-md-start">
            <img
              src="@/assets/img/Monitor.webp"
              class="card-img-top p-2"
              alt="Schmuckbild: Fußabdruck und Daten"
            />
            <div class="card-body">
              <p class="card-text">
                {{ t('Home.EmmMonitor') }}
              </p>
              <a href="#" class="btn btn-primary">{{ t('Home.EmmLink') }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="row justify-content-center">
        <div class="col-10 col-lg-8">
          <p class="border my-4 p-3 text-center text-md-start">
            {{ t('Home.sgoAnaKlima') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
