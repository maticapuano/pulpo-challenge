import { IUser } from "./schema/IUser";

export interface IUserWithToken {
  user: Omit<IUser, "password">;
  access_token: string;
}
