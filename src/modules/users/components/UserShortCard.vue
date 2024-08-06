<script setup lang="ts">
import AppCard from "@/components/AppCard.vue";
</script>

<template>
  <AppCard>
    <template #prepend>
      <div>photo</div>
    </template>
    <div class="flex flex-col">
      <v-label>Name</v-label>
      <v-label>email</v-label>
      <v-label>email</v-label>
      <v-label>email</v-label>
    </div>
  </AppCard>
</template>
