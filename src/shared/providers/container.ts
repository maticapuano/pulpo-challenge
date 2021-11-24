import { container } from "tsyringe";
import { appConfig } from "../../config/app.config";
import { IUsersRepository } from "../../modules/users/domain/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repositories/UsersRepository";
import { IVehiclesRepository } from "../../modules/vehicles/domain/repositories/IVehiclesRepository";
import { VehiclesRepository } from "../../modules/vehicles/infra/typeorm/repositories/VehiclesRepository";
import { BcryptHashProvider } from "./HashProvider/BcryptHashProvider";
import { HashProvider } from "./HashProvider/interfaces/HashProvider";
import { JwtProvider } from "./JwtProvider/interfaces/JwtProvider";
import { JsonWebTokenProvider } from "./JwtProvider/JsonWebToken";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<IVehiclesRepository>("VehiclesRepository", VehiclesRepository);
container.registerSingleton<HashProvider>("HashProvider", BcryptHashProvider);

const jwtProvider = new JsonWebTokenProvider({
  accessTokenExpiresIn: appConfig.JWT_ACCESS_TOKEN_EXPIRES_IN,
  accessTokenSecret: appConfig.JWT_ACCESS_TOKEN_SECRET,
});

container.registerInstance<JwtProvider>("JwtProvider", jwtProvider);
