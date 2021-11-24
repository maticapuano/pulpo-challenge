import { cleanEnv, num, str } from "envalid";

export const appConfig = cleanEnv(process.env, {
  PORT: num(),
  API_PREFIX: str({ default: "/v1" }),
  JWT_ACCESS_TOKEN_SECRET: str(),
  JWT_ACCESS_TOKEN_EXPIRES_IN: str(),
});
