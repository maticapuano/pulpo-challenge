import { ICreateUser } from "../ICreateUser";
import { IUser } from "../schema/IUser";

export interface IUsersRepository {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  create(data: ICreateUser): Promise<IUser>;
}
