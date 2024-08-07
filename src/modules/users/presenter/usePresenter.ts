import type { CommonStore } from "@/core/CommonStore";
import { assertIsDefined } from "@/helpers";
import getServiceInstance from "../service/getServiceInstance";
import State from "../types/State";
import Presenter from "./Presenter";
import PresenterImpl from "./PresenterImpl";

let PRESENTER: Presenter | null = null;

export const createPresenter = (commonStore: CommonStore<State>): Presenter => {
  if (!PRESENTER) {
    const service = getServiceInstance();
    PRESENTER = new PresenterImpl(commonStore, service);
  }
  return PRESENTER;
};

const usePresenter = (): Presenter => {
  assertIsDefined(PRESENTER);
  return PRESENTER;
};

export default usePresenter;
