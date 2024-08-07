import { CommonStore } from "@/core/CommonStore";
import { CommonStoreAdapter } from "@/core/CommonStoreAdapter";
import { createEmptyHttpResponse } from "@/http/helpers";
import { Id } from "@/types/domain";
import { mapUsersToUserShorts as mapUsersToUserPreviews } from "../service/mappers";
import Service from "../service/Service";
import { FilterUsersParams, User } from "../types/domain";
import State from "../types/State";
import Presenter from "./Presenter";

export default class PresenterImpl
  extends CommonStoreAdapter<State>
  implements Presenter
{
  constructor(store: CommonStore<State>, private service: Service) {
    super(store);
  }

  async onFilterUsers(params: FilterUsersParams): Promise<void> {
    this.updateState({
      fetchState: "loading",
    });

    const { id, name, username } = params;
    const filterByNameReq = this.service.filterUsers({ name });
    const filterByUsernameReq = this.service.filterUsers({ username });
    const req = [filterByNameReq, filterByUsernameReq];
    const isFilterById = id !== undefined;
    if (isFilterById) {
      const filterByIdReq = this.service.filterUsers({ id });
      req.push(filterByIdReq);
    } else {
      req.push(Promise.resolve(createEmptyHttpResponse()));
    }
    const res = await Promise.all(req);
    const [filterByNameRes, filterByUsernameRes, filterByIdResOpt] = res;

    this.updateState({
      fetchState: "done",
    });

    const isReqError =
      !filterByNameRes.data ||
      !filterByUsernameRes.data ||
      (!filterByIdResOpt.data && isFilterById);

    if (isReqError) {
      const errorMessage =
        filterByNameRes.errorMessage ||
        filterByUsernameRes.errorMessage ||
        filterByIdResOpt.errorMessage;
      this.updateState({
        errorMessage,
        fetchState: "error",

        selectedUser: null,
        users: null,
        userPreviews: null,
        usersCount: null,
      });
      return;
    }

    const users: User[] = [];
    let usersCount = 0;

    if (filterByNameRes.data) {
      users.push(...filterByNameRes.data.users);
      usersCount += filterByNameRes.data.count;
    }
    if (filterByUsernameRes.data) {
      users.push(...filterByUsernameRes.data.users);
      usersCount += filterByUsernameRes.data.count;
    }
    if (filterByIdResOpt.data) {
      users.push(...filterByIdResOpt.data.users);
      usersCount += filterByIdResOpt.data.count;
    }

    const userPreviews = mapUsersToUserPreviews(users);
    const curSelectedUserId = this.state.selectedUser;
    const isSelectedUser = users?.some((u) => u.id === curSelectedUserId?.id);
    const selectedUser = isSelectedUser ? curSelectedUserId : null;

    this.updateState({
      usersCount,
      userPreviews,
      users,
      selectedUser,
      fetchState: "ready",
    });
  }

  onSelectUser(userId: Id): void {
    const selectedUser = this.state.users?.find((u) => u.id === userId) || null;

    this.updateState({
      selectedUser,
    });
  }

  onResetSearch(): void {
    this.updateState({
      usersCount: null,
      userPreviews: null,
      users: null,
      selectedUser: null,
      fetchState: "ready",
    });
  }
}
