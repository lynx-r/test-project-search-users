import { CommonStore } from "@/core/CommonStore";
import { ref } from "vue";
import initState from "../helpers/initState";
import State from "../types/State";

const createRefStore = (): CommonStore<State> => {
  const state = ref<State>(initState());
  return {
    get state() {
      return state.value;
    },
    updateState(newState: State) {
      state.value = { ...state.value, ...newState };
    },
    resetState() {
      state.value = initState();
    },
  };
};

export default createRefStore;
