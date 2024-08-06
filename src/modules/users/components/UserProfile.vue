<script setup lang="ts">
import AppEmptyState from "@/components/AppEmptyState.vue";
import ProfileCard from "./ProfileCard.vue";
</script>

<template>
  <div class="user-profile">
    <ProfileCard />
    <AppEmptyState
      class="self-center"
      title="Выберите сотрудника, чтобы посмотреть его профиль"
    />
  </div>
</template>

<style lang="css" scoped>
.user-profile {
  @apply flex flex-col;
  @apply flex-grow-1;
  @apply m-y-xl;
}
</style>
