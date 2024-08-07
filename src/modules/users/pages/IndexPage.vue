<template>
  <SearchSidebar />
  <UserProfile />
</template>

<script setup lang="ts">
import { useNotification } from "@kyvg/vue3-notification";
import { watch } from "vue";
import { ActiveLoader, useLoading } from "vue-loading-overlay";
import SearchSidebar from "../components/SearchSidebar.vue";
import UserProfile from "../components/UserProfile.vue";
import { createPresenter } from "../presenter/usePresenter";
import createRefStore from "../store/createRefStore";

const store = createRefStore();
const presenter = createPresenter(store);

const $loading = useLoading();
let loader: ActiveLoader;
const notification = useNotification();

watch(
  () => presenter.state.fetchState,
  (fetchState) => {
    switch (fetchState) {
      case "loading":
        loader = $loading.show();
        break;
      case "ready":
        loader.hide();
        break;
      case "error":
        loader.hide();
        notification.notify({
          type: "error",
          title: presenter.state.errorMessage,
        });
        break;
    }
  }
);
</script>
