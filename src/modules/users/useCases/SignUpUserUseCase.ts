import { inject, injectable } from "tsyringe";
import { userConstants } from "../../../shared/core/constants/users.constant";
import { UseCase } from "../../../shared/core/UseCase";
import { BadRequestError } from "../../../shared/errors/BadRequestError";
import { HashProvider } from "../../../shared/providers/HashProvider/interfaces/HashProvider";
import { ICreateUser } from "../domain/ICreateUser";
import { IUsersRepository } from "../domain/repositories/IUsersRepository";
import { IUser } from "../domain/schema/IUser";

@injectable()
export class SignUpUserUseCase implements UseCase<ICreateUser, IUser> {
  public constructor(
    @inject("UsersRepository") private _usersRepository: IUsersRepository,
    @inject("HashProvider") private _hashProvider: HashProvider
  ) {}

  public async execute(data: ICreateUser): Promise<IUser> {
    const { email, password } = data;
    const existsUser = await this._usersRepository.findByEmail(email);

    if (existsUser) {
      throw new BadRequestError(userConstants.EMAIL_ALREADY_EXISTS);
    }

    const hashedPassword = await this._hashProvider.hash(password);
    const user = await this._usersRepository.create({
      ...data,
      password: hashedPassword,
      email: email.toLowerCase(),
    });

    return user;
  }
}
