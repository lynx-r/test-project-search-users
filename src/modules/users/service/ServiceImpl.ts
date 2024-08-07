import $http from "@/http/http";
import HttpResponse from "@/types/HttpResponse";
import { FilterUsersParams, User, UserRes } from "../types/domain";
import Service from "./Service";
import { mapUsersResponse } from "./mappers";

export default class ServiceImpl implements Service {
  async filterUsers(params: FilterUsersParams): Promise<HttpResponse<UserRes>> {
    const res = $http.get<User[]>("/users", { params });
    return mapUsersResponse(res);
  }
}
