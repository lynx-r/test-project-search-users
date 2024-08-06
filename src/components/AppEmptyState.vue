<template>
  <v-empty-state>
    <v-label-text v-if="title">
      {{ title }}
    </v-label-text>
    <v-label-description v-if="description">
      {{ description }}
    </v-label-description>
  </v-empty-state>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
  description?: string;
}>();
</script>
