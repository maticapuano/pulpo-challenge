import { v4 } from "uuid";
import { ICreateUser } from "../../../../domain/ICreateUser";
import { IUsersRepository } from "../../../../domain/repositories/IUsersRepository";
import { IUser } from "../../../../domain/schema/IUser";
import { UserEntity } from "../../entities/User.entity";

export class UsersFakeRepository implements IUsersRepository {
  private users: IUser[] = [];

  public async findAll(): Promise<IUser[]> {
    return this.users;
  }

  public async findById(id: string): Promise<IUser | undefined> {
    const findUser = this.users.find((user) => user.id === id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<IUser | undefined> {
    const findUser = this.users.find((user) => user.email === email);

    return findUser;
  }
  public async create(data: ICreateUser): Promise<IUser> {
    const user = new UserEntity();

    Object.assign(user, { id: v4() }, data);

    this.users.push(user);

    return user;
  }
}
