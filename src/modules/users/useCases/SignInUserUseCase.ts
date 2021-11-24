import { inject, injectable } from "tsyringe";
import { userConstants } from "../../../shared/core/constants/users.constant";
import { UseCase } from "../../../shared/core/UseCase";
import { BadRequestError } from "../../../shared/errors/BadRequestError";
import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { HashProvider } from "../../../shared/providers/HashProvider/interfaces/HashProvider";
import { JwtProvider } from "../../../shared/providers/JwtProvider/interfaces/JwtProvider";
import { ISignInUser } from "../domain/ISignInUser";
import { IUserWithToken } from "../domain/IUserWithToken";
import { IUsersRepository } from "../domain/repositories/IUsersRepository";

@injectable()
export class SignInUserUseCase implements UseCase<ISignInUser, IUserWithToken> {
  public constructor(
    @inject("UsersRepository") private _usersRepository: IUsersRepository,
    @inject("JwtProvider") private _jwtProvider: JwtProvider,
    @inject("HashProvider") private _hashProvider: HashProvider,
  ) {}

  public async execute(data: ISignInUser): Promise<IUserWithToken> {
    const { email, password } = data;
    const existsEmail = await this._usersRepository.findByEmail(email);

    if (!existsEmail) {
      throw new BadRequestError(userConstants.EMAIL_OR_PASSWORD_INVALID);
    }

    const passwordMatched = await this._hashProvider.compare(password, existsEmail.password);

    if (!passwordMatched) {
      throw new BadRequestError(userConstants.EMAIL_OR_PASSWORD_INVALID);
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
