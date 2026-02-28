<script setup>
import { onMounted, computed, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareCaretDown as arrowASC } from '@fortawesome/free-regular-svg-icons'
import { faSquareCaretUp as arrowDESC } from '@fortawesome/free-regular-svg-icons'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
      String(row.scope1).toLocaleLowerCase().includes(searchItem.value) ||
      String(row.scope2).toLocaleLowerCase().includes(searchItem.value) ||
      String(row.scope3).toLocaleLowerCase().includes(searchItem.value) ||
      String(row.total).toLocaleLowerCase().includes(searchItem.value) ||
      String(row.year).toLocaleLowerCase().includes(searchItem.value),
  )
})

// Sortier-Komponenten

const sortedResults = computed(() => {
  const newArray = searchResults.value.slice()

  function compare(a, b) {
    let sortingResult = 0

    switch (activeID.value) {
      case 0:
        sortingResult = a.id - b.id
        break
      case 1:
        sortingResult = a.company.localeCompare(b.company)
        break
      case 2:
        sortingResult = a.country.localeCompare(b.country)
        break
      case 3:
        sortingResult = a.scope1 - b.scope1
        break
      case 4:
        sortingResult = a.scope2 - b.scope2
        break
      case 5:
        sortingResult = a.scope3 - b.scope3
        break
      case 6:
        sortingResult = a.total - b.total
        break
      case 7:
        sortingResult = a.year - b.year
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
  <div class="row">
    <div class="col-12 col-md-8 col-lg-6 mt-4 mb-3">
      <SearchBar @search="onSearch" />
    </div>
  </div>
  <div class="table-responsive">
    <table class="table table-sm">
      <thead class="table-light">
        <tr>
          <th
            v-for="header in cols"
            :key="header.id"
            @click="sortingEventHandler(header.id)"
            :id="header.id"
            class="fw-medium"
          >
            {{ t(header.title) }}
            <span v-if="activeID === header.id && sorting == 'ASC'">
              <FontAwesomeIcon :icon="arrowASC" />
            </span>
            <span v-else-if="activeID === header.id && sorting == 'DESC'">
              <FontAwesomeIcon :icon="arrowDESC" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="table-group-divider fw-light">
        <tr v-for="row in sortedResults" :key="row.id">
          <td v-for="col in cols" :key="col.id" :class="{ 'fw-normal': activeID === col.id }">
            {{ row[col.key] }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="8">
            {{ t('Emission.einheit') }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
