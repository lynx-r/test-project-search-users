<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import { default as UserPage } from "./modules/users/pages/IndexPage.vue";
</script>

<template>
  <notifications position="bottom right" />
  <main>
    <AppHeader />
    <v-page>
      <UserPage />
    </v-page>
  </main>
</template>
