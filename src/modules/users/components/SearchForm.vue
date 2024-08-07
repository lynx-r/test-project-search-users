<template>
  <div class="my-xl">
    <v-label>Поиск сотрудников</v-label>
    <AppInputSearch
      v-model:search="search"
      placeholder="Введите id или имя"
    />
    <SearchResult />
  </div>
</template>

<script setup lang="ts">
import AppInputSearch from "@/components/AppInputSearch.vue";
import { useSearchDebounceFn } from "@/helpers";
import { ref, watch } from "vue";
import usePresenter from "../presenter/usePresenter";
import SearchResult from "./SearchResult.vue";

const presenter = usePresenter();

const search = ref("");

const searchDebouncedFn = useSearchDebounceFn(() => {
  const searchVal = search.value;
  if (!searchVal) {
    presenter.onResetSearch();
    return;
  }
  let id: number | undefined = +searchVal;
  id = isNaN(id) ? undefined : id;
  presenter.onFilterUsers({
    id,
    name: searchVal,
    username: searchVal,
  });
});

watch(search, searchDebouncedFn);
</script>
