import { createStore } from "vuex";
import adminStore from "./modules/admin/store/vuex";

const vuexStore = createStore({});

vuexStore.registerModule("admin", adminStore);

export default vuexStore;
