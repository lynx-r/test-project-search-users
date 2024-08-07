import type { CommonStore } from "./CommonStore";

export abstract class CommonStoreAdapter<S extends object> {
  constructor(private store: CommonStore<S>) {}

  get state(): S {
    return this.store.state;
  }

  protected updateState(newState: Partial<S> | S[keyof S]) {
    this.store.updateState(newState);
  }

  resetState() {
    this.store.resetState();
  }
}
