<script setup>
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
      placeholder="Suche"
      aria-label="search"
      aria-describedby="Suche"
    />
  </form>
</template>
