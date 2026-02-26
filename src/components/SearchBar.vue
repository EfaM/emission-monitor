<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const emitSearchItem = defineEmits(['search'])
const onInput = (searchItem) => {
  emitSearchItem('search', searchItem.target.value)
}
</script>

<template>
  <form class="input-group mt-4 mb-2">
    <input
      type="text"
      @input="onInput"
      class="form-control"
      :placeholder="t('Emission.suchplatzhalter')"
      aria-label="search"
      aria-describedby="Suche"
    />
  </form>
</template>
