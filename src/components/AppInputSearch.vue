<template>
  <v-input>
    <input :placeholder="placeholder" />
  </v-input>
</template>

<script lang="ts" setup>
defineProps<{
  placeholder?: string;
}>();
</script>
