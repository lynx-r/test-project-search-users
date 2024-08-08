import { createStore } from "vuex";
import usersStore from "./modules/users/store/createVuexStore";

const vuexStore = createStore({});

vuexStore.registerModule("users", usersStore);

export default vuexStore;
