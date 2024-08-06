import vue from "@vitejs/plugin-vue";
import path from "path";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("v-"),
        },
      },
    }),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
    UnoCSS({
      configFile: "../uno-app.config.ts",
    }),
  ],
});
