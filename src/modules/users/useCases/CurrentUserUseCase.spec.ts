import { NotFoundError } from "../../../shared/errors/NotFoundError";
import { UsersFakeRepository } from "../infra/typeorm/repositories/fake/UsersFakeRepository";
import { GetUserWithIdUseCase } from "./CurrentUserUseCase";

describe("CurrentUserUseCase", () => {
  let fakeUsersRepository: UsersFakeRepository;
  let currentUserUseCase: GetUserWithIdUseCase;

  beforeEach(() => {
    fakeUsersRepository = new UsersFakeRepository();
    currentUserUseCase = new GetUserWithIdUseCase(fakeUsersRepository);
  });

  it("should be able to get current user", async () => {
    const user = await fakeUsersRepository.create({
      full_name: "John Doe",
      email: "john@doe.com",
      password: "123456",
    });

    const currentUser = await currentUserUseCase.execute(user.id);

    expect(currentUser).toEqual(user);
    expect(currentUser).toHaveProperty("id");
    expect(currentUser.id).toBe(user.id);
    expect(currentUser).toHaveProperty("full_name");
    expect(currentUser.full_name).toBe(user.full_name);
    expect(currentUser).toHaveProperty("email");
    expect(currentUser.email).toBe(user.email);
  });

  it("should not be able to get current user with invalid id", async () => {
    const user = await fakeUsersRepository.create({
      full_name: "John Doe",
      email: "john@doe.com",
      password: "123456",
    });

    await expect(currentUserUseCase.execute(user.id + 1)).rejects.toBeInstanceOf(NotFoundError);
  });
});
