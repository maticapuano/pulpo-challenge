import { cleanEnv, num, str } from "envalid";

export const appConfig = cleanEnv(process.env, {
  PORT: num(),
  API_PREFIX: str({ default: "/v1" }),
});
