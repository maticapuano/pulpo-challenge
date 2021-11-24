import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/users/domain/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repositories/UsersRepository";
import { BcryptHashProvider } from "./HashProvider/BcryptHashProvider";
import { HashProvider } from "./HashProvider/interfaces/HashProvider";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<HashProvider>("HashProvider", BcryptHashProvider);
