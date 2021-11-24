import { getRepository, Repository } from "typeorm";
import { ICreateUser } from "../../../domain/ICreateUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { IUser } from "../../../domain/schema/IUser";
import { UserEntity } from "../entities/User.entity";

export class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<IUser>;

  public constructor() {
    this.ormRepository = getRepository(UserEntity);
  }

  public async findAll(): Promise<IUser[]> {
    const users = await this.ormRepository.find();

    return users;
  }

  public async findById(id: string): Promise<IUser | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async create(data: ICreateUser): Promise<IUser> {
    const user = this.ormRepository.create(data);
    const createdUser = await this.ormRepository.save(user);

    return createdUser;
  }
}
