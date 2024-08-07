<script setup lang="ts">
import AppEmptyState from "@/components/AppEmptyState.vue";
import { computed } from "vue";
import usePresenter from "../presenter/usePresenter";
import UserList from "./UserList.vue";

const presenter = usePresenter();
const filteredUsersCount = computed(() => presenter.state.usersCount);
const fetchState = computed(() => presenter.state.fetchState);
</script>

<template>
  <v-label class="block mb-lg">Результаты</v-label>
  <AppEmptyState
    v-if="filteredUsersCount === null"
    title="начните поиск"
  />
  <AppEmptyState
    v-else-if="fetchState === 'loading'"
    title="поиск..."
  />
  <AppEmptyState
    v-else-if="filteredUsersCount === 0"
    title="ничего не найдено"
  />
  <UserList v-else></UserList>
</template>
