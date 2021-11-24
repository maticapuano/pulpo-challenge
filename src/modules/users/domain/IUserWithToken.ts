import { IUser } from "./schema/IUser";

export interface IUserWithToken {
  user: IUser;
  access_token: string;
}
