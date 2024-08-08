import type { CommonStore } from "@/core/CommonStore";
import { useStore } from "vuex";
import initState from "../helpers/initState";
import State from "../types/State";
import { VuexState, VuexUsersState } from "../types/vuex";

const usersStore = {
  state: { value: initState() },
  mutations: {
    updateState(state: VuexState, newState: State) {
      state.value = { ...state.value, ...newState };
    },
    resetState(state: VuexState) {
      state.value = initState();
    },
  },
};

export const createVuexStore = (): CommonStore<State> => {
  const store = useStore<VuexUsersState>();

  function updateState(newState: State) {
    store.commit("updateState", newState);
  }

  function resetState() {
    store.commit("resetState");
  }

  return {
    get state() {
      return store.state.users.value;
    },
    updateState,
    resetState,
  };
};

export default usersStore;
