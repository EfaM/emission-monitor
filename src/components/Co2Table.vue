<script setup>
import { onMounted, computed, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareCaretDown as arrowASC } from '@fortawesome/free-regular-svg-icons'
import { faSquareCaretUp as arrowDESC } from '@fortawesome/free-regular-svg-icons'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Suchen

import SearchBar from './SearchBar.vue'

const cols = ref([])
const rows = ref([])
const searchItem = ref('')
const sortingOrder = ref('ASC')
const activeID = ref(1)

const onSearch = (search) => {
  searchItem.value = search.toString().trim().toLowerCase()
}

const searchResults = computed(() => {
  if (searchItem.value === '') {
    return rows.value
  }
  return rows.value.filter(
    (row) =>
      String(row.id).toLowerCase().includes(searchItem.value) ||
      String(row.company).toLowerCase().includes(searchItem.value) ||
      String(row.country).toLowerCase().includes(searchItem.value) ||
      String(row.scope1).toLowerCase().includes(searchItem.value) ||
      String(row.scope2).toLowerCase().includes(searchItem.value) ||
      String(row.scope3).toLowerCase().includes(searchItem.value) ||
      String(row.total).toLowerCase().includes(searchItem.value) ||
      String(row.year).toLowerCase().includes(searchItem.value),
  )
})

// Sortieren

onMounted(async () => {
  const url = new URL('../assets/co2-data.json', import.meta.url)
  const data = await fetch(url)
  const json = await data.json()
  cols.value = json.tableHeader
  rows.value = json.tableContent
})

const sortedResults = computed(() => {
  const newArray = searchResults.value.slice()

  function compare(a, b) {
    let compareResult = 0

    switch (activeID.value) {
      case 0:
        compareResult = a.id - b.id
        break
      case 1:
        compareResult = a.company.localeCompare(b.company)
        break
      case 2:
        compareResult = a.country.localeCompare(b.country)
        break
      case 3:
        compareResult = a.scope1 - b.scope1
        break
      case 4:
        compareResult = a.scope2 - b.scope2
        break
      case 5:
        compareResult = a.scope3 - b.scope3
        break
      case 6:
        compareResult = a.total - b.total
        break
      case 7:
        compareResult = a.year - b.year
        break
      default:
        compareResult = 0
    }

    if (sortingOrder.value === 'ASC') {
      return compareResult
    } else {
      return -compareResult
    }
  }

  newArray.sort(compare)
  return newArray
})

const sortingEventHandler = (id) => {
  // Wenn eine neue Spalte angeklickt wurde, beginne bei ASC
  if (id !== activeID.value) {
    return ((sortingOrder.value = 'ASC'), (activeID.value = id))
  }

  if (sortingOrder.value === 'ASC') {
    sortingOrder.value = 'DESC'
  } else {
    sortingOrder.value = 'ASC'
  }
}
</script>

<template>
  <div class="row">
    <div class="col-12 col-md-8 col-lg-6 my-3">
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
            <span v-if="activeID === header.id && sortingOrder === 'ASC'">
              <FontAwesomeIcon :icon="arrowASC" />
            </span>
            <span v-else-if="activeID === header.id && sortingOrder === 'DESC'">
              <FontAwesomeIcon :icon="arrowDESC" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="table-group-divider fw-light">
        <tr v-for="row in sortedResults" :key="row.id">
          <td v-for="col in cols" :key="col.id">
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
