import RequestState from "@/types/RequestState";
import { User, UserPreview } from "./domain";

export default interface State extends RequestState {
  users: User[] | null;
  userPreviews: UserPreview[] | null;
  usersCount: number | null;
  selectedUser: User | null;
}
