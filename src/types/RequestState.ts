export type FetchState = "ready" | "loading" | "error" | "done";

export default interface RequestState {
  fetchState: FetchState;
  errorMessage?: string;
}
