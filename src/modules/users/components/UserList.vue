<script setup lang="ts">
import { computed } from "vue";
import usePresenter from "../presenter/usePresenter";
import UserListItem from "./UserListItem.vue";

const presenter = usePresenter();
const userPreviews = computed(() => presenter.state.userPreviews);
</script>

<template>
  <div class="flex flex-col gap-lg">
    <UserListItem
      v-for="user in userPreviews"
      :key="user.id"
      :user="user"
    />
  </div>
</template>
