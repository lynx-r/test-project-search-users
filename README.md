# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Features

- UnoCSS with configured @apply directive for styling custom elements and classes

  Example:

  ```html
  <template>
    <v-card class="user-card"> ... </v-card>
  </template>
  ```

  ```scss
  v-card {
    @apply: mx-lg py-lg;
  }

  .user-card {
    @apply bg-red;
  }
  ```

- Pattern Model View Presenter (MVP)

  Example:

  ```typescript
  // file:./src/modules/users/pages/IndexPage.vue

  // import createRefStore from "../store/createRefStore";
  import { createVuexStore } from "../store/createVuexStore";

  // const store = createRefStore();
  const store = createVuexStore();

  // a presenter can use any store implementation
  // based on the interface CommonStore
  const presenter = createPresenter(store);
  ```

  ```typescript
  // file:[somewhere]

  // on a user action change state (ref, vuex, pinia) by calling a presenter method
  const presenter = usePresenter();
  presenter.onFilterUsers({
    id,
    name: searchVal,
    username: searchVal,
  });
  ```

  ```typescript
  // file:[somewhere]
  <script>
  // render a changed state in a view
  const presenter = usePresenter();
  const userPreviews = computed(() => presenter.state.userPreviews);
  </script>

  <template>
    <UserListItem
      v-for="user in userPreviews"
      :key="user.id"
      :user="user"
    />
  </template>
  ```

- A project folder structure like for a big project
