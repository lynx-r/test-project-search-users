import { getErrorMessage } from "@/http/helpers";
import HttpResponse from "@/types/HttpResponse";
import { AxiosResponse } from "axios";
import { User, UserPreview, UserRes } from "../types/domain";

export const mapUserToUserShort = (user: User): UserPreview => {
  const { id, username, email } = user;
  return { id, username, email };
};

export const mapUsersToUserShorts = (users: User[]): UserPreview[] =>
  users.map(mapUserToUserShort);

export const mapUsersResponse = async (
  res: Promise<AxiosResponse<User[], any>>
): Promise<HttpResponse<UserRes>> => {
  try {
    const { data, status, statusText } = await res;
    return {
      data: {
        users: data,
        count: data.length,
      },
      status,
      statusText,
    };
  } catch (error: any) {
    const errorMessage = getErrorMessage(error);
    return {
      data: null,
      errorMessage,
    };
  }
};
