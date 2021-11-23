import { cleanEnv, num, str } from "envalid";
import { ConnectionConfig } from "./interfaces/ConnectionConfig";

export const databaseConfig = cleanEnv<ConnectionConfig>(process.env, {
  DATABASE_HOST: str(),
  DATABASE_USER: str(),
  DATABASE_PASSWORD: str(),
  DATABASE_PORT: num({ default: 5432 }),
  DATABASE_NAME: str(),
});
