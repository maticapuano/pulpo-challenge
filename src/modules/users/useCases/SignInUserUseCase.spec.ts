import { BadRequestError } from "../../../shared/errors/BadRequestError";
import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { FakeHashProvider } from "../../../shared/providers/HashProvider/fake/FakeHashProvider";
import { JwtProvider } from "../../../shared/providers/JwtProvider/interfaces/JwtProvider";
import { UsersFakeRepository } from "../infra/typeorm/repositories/fake/UsersFakeRepository";
import { SignInUserUseCase } from "./SignInUserUseCase";

describe("SignInUserUseCase", () => {
  let fakeHashProvider: FakeHashProvider;
  let fakeUsersRepository: UsersFakeRepository;
  let fakeJwtProvider: JwtProvider;
  let signInUserUseCase: SignInUserUseCase;

  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUsersRepository = new UsersFakeRepository();
    fakeJwtProvider = {
      createAccessToken: jest.fn().mockImplementation(() => Promise.resolve("some-token")),
      decodeAccessToken: jest.fn().mockImplementation(() =>
        Promise.resolve({
          user_id: "some-id",
          full_name: "John Doe",
          email: "john@doe.com",
        }),
      ),
    };
    signInUserUseCase = new SignInUserUseCase(
      fakeUsersRepository,
      fakeJwtProvider,
      fakeHashProvider,
    );
  });

  it("should be able to authenticate", async () => {
    const user = await fakeUsersRepository.create({
      full_name: "John Doe",
      email: "john@doe.com",
      password: "123456",
    });

    const response = await signInUserUseCase.execute({
      email: "john@doe.com",
      password: "123456",
    });

    expect(response.user).toHaveProperty("id");
    expect(response.user.id).toBe(user.id);
    expect(response.user.full_name).toBe(user.full_name);
    expect(response.user.email).toBe(user.email);
    expect(response.user).not.toHaveProperty("password");
    expect(response.access_token).toBe("some-token");
  });

  it("should not be able to authenticate with non-existing user", async () => {
    await expect(
      signInUserUseCase.execute({
        email: "john@doe.com",
        password: "123456",
      }),
    ).rejects.toBeInstanceOf(BadRequestError);
  });

  it("should not be able to authenticate with wrong password", async () => {
    await fakeUsersRepository.create({
      full_name: "John Doe",
      email: "john@doe.com",
      password: "123456",
    });

    await expect(
      signInUserUseCase.execute({
        email: "johndoe@example.com",
        password: "wrong-password",
      }),
    ).rejects.toBeInstanceOf(BadRequestError);
  });
});
