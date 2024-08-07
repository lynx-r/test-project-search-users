<template>
  <v-input>
    <input
      v-model="search"
      :placeholder="placeholder"
    />
  </v-input>
</template>

<script lang="ts" setup>
defineProps<{
  placeholder?: string;
}>();
const search = defineModel("search");
</script>
