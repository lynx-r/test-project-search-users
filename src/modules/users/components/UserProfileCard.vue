<template>
  <div class="profile-card">
    <div class="v-frame">
      <ImagePlaceholder />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <v-label class="user-name">{{ user.username }}</v-label>
        <div>
          <small class="mr-xs">email:</small>
          <v-label-text>{{ user.email }}</v-label-text>
        </div>
        <div>
          <small class="mr-xs">phone:</small>
          <v-label-text>{{ user.phone }}</v-label-text>
        </div>
      </div>
      <div class="flex flex-col gap-2xl">
        <v-label class="about-user-label">О себе</v-label>
        <v-label-text class="about-user-text">
          <div>{{ user.company.bs }}</div>
          <div>{{ user.company.catchPhrase }}</div>
          <div>{{ user.company.name }}</div>
        </v-label-text>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImagePlaceholder from "@/components/ImagePlaceholder.vue";
import { User } from "../types/domain";

defineProps<{ user: User }>();
</script>

<style lang="css" scoped>
.profile-card {
  @apply flex gap-6xl;
}

.user-name {
  @apply font-bold;
}

.about-user-label {
  @apply font-bold;
}

.about-user-text {
}

.v-frame {
  @apply w-200px h-200px;
}
</style>
