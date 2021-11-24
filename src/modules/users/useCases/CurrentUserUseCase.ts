import { inject, injectable } from "tsyringe";
import { userConstants } from "../../../shared/core/constants/users.constant";
import { UseCase } from "../../../shared/core/UseCase";
import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { IUsersRepository } from "../domain/repositories/IUsersRepository";
import { IUser } from "../domain/schema/IUser";

@injectable()
export class GetUserWithIdUseCase implements UseCase<string, IUser> {
  public constructor(@inject("UsersRepository") private _usersRepository: IUsersRepository) {}

  public async execute(user_id: string): Promise<IUser> {
    const user = await this._usersRepository.findById(user_id);

    if (!user) {
      throw new NotFoundError(userConstants.USER_NOT_FOUND);
    }

    return user;
  }
}
