import { FakeHashProvider } from "../../../shared/providers/HashProvider/fake/FakeHashProvider";
import { UsersFakeRepository } from "../infra/typeorm/repositories/fake/UsersFakeRepository";
import { SignUpUserUseCase } from "./SignUpUserUseCase";
import { validate } from "uuid";
import { BadRequestError } from "../../../shared/errors/BadRequestError";

describe("SignUpUseCase", () => {
  const usersRepository = new UsersFakeRepository();
  const hashProvider = new FakeHashProvider();
  const signUpUseCase = new SignUpUserUseCase(usersRepository, hashProvider);

  it("should be able to sign up", async () => {
    const user = await signUpUseCase.execute({
      full_name: "John Doe",
      email: "john@doe.com",
      password: "123456",
    });

    const isUuid = validate(user.id);

    expect(isUuid).toBe(true);
    expect(user.full_name).toBe("John Doe");
    expect(user.email).toBe("john@doe.com");
    expect(user.password).toBe("123456");
  });

  it("should not be able to sign up with same email", async () => {
    await signUpUseCase.execute({
      full_name: "Mr Been",
      email: "mr@been.com",
      password: "123456",
    });

    await expect(
      signUpUseCase.execute({
        full_name: "Mr Been",
        email: "mr@been.com",
        password: "123456",
      }),
    ).rejects.toBeInstanceOf(BadRequestError);
  });
});
