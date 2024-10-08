import { createApp } from "vue";
import App from "./App.vue";
import "./styles/style.scss";
// main.ts
import Notifications from "@kyvg/vue3-notification";
import "virtual:uno.css";
import { LoadingPlugin } from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import vuexStore from "./store";

const app = createApp(App);
app.use(vuexStore);
app.use(LoadingPlugin);
app.use(Notifications);
app.mount("#app");
