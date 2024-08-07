import StateHolder from "@/core/StateHolder";
import { Id } from "@/types/domain";
import { FilterUsersParams } from "../types/domain";
import State from "../types/State";

export default interface Presenter extends StateHolder<State> {
  onFilterUsers(params: FilterUsersParams): Promise<void>;
  onSelectUser(userId: Id): void;
  onResetSearch(): void;
}
