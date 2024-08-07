import { INPUT_DEBOUNCE_MS } from "@/constants/components";
import { FunctionArgs, useDebounceFn } from "@vueuse/core";

export const useSearchDebounceFn = <T extends FunctionArgs>(fn: T) =>
  useDebounceFn(fn, INPUT_DEBOUNCE_MS);

export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`${value} is not defined`);
  }
}
