<template>
  <div class="user-profile">
    <AppEmptyState
      v-if="!selectedUser"
      class="self-center"
      title="Выберите сотрудника, чтобы посмотреть его профиль"
    />
    <UserProfileCard
      v-else
      :user="selectedUser"
    />
  </div>
</template>

<script setup lang="ts">
import AppEmptyState from "@/components/AppEmptyState.vue";
import { computed } from "vue";
import usePresenter from "../presenter/usePresenter";
import UserProfileCard from "./UserProfileCard.vue";

const presenter = usePresenter();
const selectedUser = computed(() => presenter.state.selectedUser);
</script>

<style lang="css" scoped>
.user-profile {
  @apply flex flex-col;
  @apply flex-grow-1;
  @apply m-y-xl;
}
</style>
