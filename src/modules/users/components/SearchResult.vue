<script setup lang="ts">
import AppEmptyState from "@/components/AppEmptyState.vue";
import UserList from "./UserList.vue";
</script>

<template>
  <v-label>Результаты</v-label>
  <AppEmptyState title="начните поиск" />
  <AppEmptyState title="ничего не найдено" />
  <UserList></UserList>
</template>
