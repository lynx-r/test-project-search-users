<template>
  <v-card>
    <v-card-prepend v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </v-card-prepend>
    <slot></slot>
  </v-card>
</template>
