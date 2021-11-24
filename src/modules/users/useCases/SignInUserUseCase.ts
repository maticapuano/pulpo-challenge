import { inject, injectable } from "tsyringe";
import { userConstants } from "../../../shared/core/constants/users.constant";
import { UseCase } from "../../../shared/core/UseCase";
import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { JwtProvider } from "../../../shared/providers/JwtProvider/interfaces/JwtProvider";
import { ISignInUser } from "../domain/ISignInUser";
import { IUserWithToken } from "../domain/IUserWithToken";
import { IUsersRepository } from "../domain/repositories/IUsersRepository";

@injectable()
export class SignInUserUseCase implements UseCase<ISignInUser, IUserWithToken> {
  public constructor(
    @inject("UsersRepository") private _usersRepository: IUsersRepository,
    @inject("JwtProvider") private _jwtProvider: JwtProvider,
  ) {}

  public async execute(data: ISignInUser): Promise<IUserWithToken> {
    const { email } = data;
    const existsEmail = await this._usersRepository.findByEmail(email);

    if (!existsEmail) {
      throw new NotFoundError(userConstants.USER_NOT_FOUND);
    }

    const { full_name, id: user_id } = existsEmail;
    const accessToken = await this._jwtProvider.createAccessToken({
      user_id,
      full_name,
      email,
    });

    const userWithToken: IUserWithToken = {
      user: existsEmail,
      access_token: accessToken,
    };

    return userWithToken;
  }
}
