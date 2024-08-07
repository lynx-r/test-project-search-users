// типы предметной области модуля `users`

import { Id } from "@/types/domain";

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: Id;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: Company;
};

export type UserPreview = Pick<User, "id" | "username" | "email">;

export type FilterUsersParams = Partial<Pick<User, "id" | "username" | "name">>;

export type UserRes = {
  users: User[];
  count: number;
};
