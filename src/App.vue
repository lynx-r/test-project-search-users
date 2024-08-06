<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import { default as UserPage } from "./modules/users/pages/IndexPage.vue";
</script>

<template>
  <main>
    <AppHeader />
    <v-page>
      <UserPage />
    </v-page>
  </main>
</template>
