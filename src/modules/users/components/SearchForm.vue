<template>
  <div class="my-xl">
    <v-label>Поиск сотрудников</v-label>
    <AppInputSearch placeholder="Введите id или имя" />
    <SearchResult />
  </div>
</template>

<script setup lang="ts">
import AppInputSearch from "@/components/AppInputSearch.vue";
import SearchResult from "./SearchResult.vue";
</script>
