import HttpResponse from "@/types/HttpResponse";
import { FilterUsersParams, UserRes } from "../types/domain";

export default interface Service {
  filterUsers(params: FilterUsersParams): Promise<HttpResponse<UserRes>>;
}
