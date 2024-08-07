export interface CommonStore<S extends object> {
  get state(): S;

  updateState(newState: Partial<S> | S[keyof S]): void;
  resetState(): void;
}
