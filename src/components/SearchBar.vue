<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const emit = defineEmits(['search'])
const onInput = (event) => {
  emit('search', event.target.value)
}
</script>

<template>
  <div class="input-group mt-4 mb-2">
    <input
      type="text"
      @input="onInput"
      class="form-control"
      :placeholder="t('Emission.suchplatzhalter')"
      aria-label="search"
      aria-describedby="search"
    />
  </div>
</template>
