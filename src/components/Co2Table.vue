<script setup>
import { onMounted, computed, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowDownShortWide as arrowASC } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpShortWide as arrowDESC } from '@fortawesome/free-solid-svg-icons'

import SearchBar from './SearchBar.vue'

const cols = ref([])
const rows = ref([])
const searchItem = ref('')
const sorting = ref('ASC')
const activeID = ref(1)

// Such-Komponenten
const onSearch = (search) => {
  searchItem.value = search.toString().trim().toLocaleLowerCase()
}

onMounted(async () => {
  const url = new URL('../assets/co2-data.json', import.meta.url)
  const data = await fetch(url)
  const json = await data.json()
  cols.value = json.tableHeader
  rows.value = json.tableContent
})

const searchResults = computed(() => {
  if (searchItem.value === '') {
    return rows.value
  }
  return rows.value.filter(
    (row) =>
      String(row.id).toLocaleLowerCase().includes(searchItem.value) ||
      String(row.company).toLocaleLowerCase().includes(searchItem.value) ||
      String(row.country).toLocaleLowerCase().includes(searchItem.value) ||
      String(row.emission).toLocaleLowerCase().includes(searchItem.value),
  )
})

// Sortier-Komponenten

const sortedResults = computed(() => {
  const newArray = searchResults.value.slice()

  function compare(a, b) {
    let sortingResult = 0

    switch (activeID.value) {
      case 1:
        sortingResult = a.id - b.id
        break
      case 2:
        sortingResult = a.country.localeCompare(b.country)
        break
      case 3:
        sortingResult = a.company.localeCompare(b.company)
        break
      case 4:
        sortingResult = a.emission - b.emission
        break
      default:
        sortingResult = 0
    }

    if (sorting.value === 'ASC') {
      return sortingResult
    } else {
      return -sortingResult
    }
  }
  newArray.sort(compare)
  return newArray
})

const sortingEventHandler = (id) => {
  // Wenn eine neue Spalte angeklickt wurde, beginne bei ASC
  if (id !== activeID.value) {
    return ((sorting.value = 'ASC'), (activeID.value = id))
  }

  if (sorting.value === 'ASC') {
    sorting.value = 'DESC'
  } else {
    sorting.value = 'ASC'
  }
}
</script>

<template>
  <h1>Emissions Monitor</h1>
  <SearchBar @search="onSearch" />
  <table class="table table-striped">
    <thead class="table-light">
      <tr>
        <th
          v-for="header in cols"
          :key="header.id"
          @click="sortingEventHandler(header.id)"
          :id="header.id"
        >
          <span v-if="activeID === header.id && sorting == 'ASC'">
            <FontAwesomeIcon :icon="arrowASC" />
          </span>
          <span v-else-if="activeID === header.id && sorting == 'DESC'">
            <FontAwesomeIcon :icon="arrowDESC" />
          </span>
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="row in sortedResults" :key="row.id">
        <td>
          {{ row.id }}
        </td>
        <td>{{ row.country }}</td>
        <td>{{ row.company }}</td>
        <td>{{ row.emission }}</td>
      </tr>
    </tbody>
  </table>
</template>
