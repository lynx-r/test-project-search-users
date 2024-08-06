<script setup lang="ts">
import UserInfo from "./UserInfo.vue";
</script>

<template>
  <div class="profile-card">
    <div class="v-frame">
      <img alt="a profile photo" />
    </div>
    <UserInfo />
  </div>
</template>

<style lang="css" scoped>
.profile-card {
  @apply flex gap-6xl;
}
</style>
