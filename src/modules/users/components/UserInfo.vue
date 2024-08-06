<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <v-label class="user-name">Ervin Howell</v-label>
      <div>
        <small class="mr-xs">email:</small>
        <v-label-text>sdfsdf</v-label-text>
      </div>
      <div>
        <small class="mr-xs">phone:</small>
        <v-label-text>sdfsdf</v-label-text>
      </div>
    </div>
    <div class="flex flex-col gap-2xl">
      <v-label class="about-user-label">О себе</v-label>
      <v-label-text class="about-user-text">sdfdsfsdrf</v-label-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  user: any;
}>();
</script>

<style lang="css" scoped>
.user-name {
  @apply font-bold;
}

.about-user-label {
  @apply font-bold;
}

.about-user-text {
}
</style>
