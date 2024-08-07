<template>
  <AppCard @click="presenter.onSelectUser(user.id)">
    <template #prepend>
      <ImagePlaceholder size="32px" />
    </template>
    <div class="flex flex-col">
      <v-label>{{ user.username }}</v-label>
      <v-label-text>{{ user.email }}</v-label-text>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from "@/components/AppCard.vue";
import ImagePlaceholder from "@/components/ImagePlaceholder.vue";
import usePresenter from "../presenter/usePresenter";
import { UserPreview } from "../types/domain";

defineProps<{ user: UserPreview }>();

const presenter = usePresenter();
</script>
