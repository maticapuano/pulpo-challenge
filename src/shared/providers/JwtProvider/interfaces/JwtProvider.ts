import { IUser } from "../../../../modules/users/domain/schema/IUser";

type PickPersonalInfoUser = Pick<IUser, "full_name" | "email">;

export interface JwtProviderPayload extends PickPersonalInfoUser {
  user_id: string;
}

export interface JwtProviderPayloadResponse extends JwtProviderPayload {
  iat: number;
  exp: number;
}

export interface JwtProviderConfig {
  accessTokenSecret: string;
  accessTokenExpiresIn: string | number;
}

export interface JwtProvider {
  createAccessToken(payload: JwtProviderPayload): Promise<string>;
  decodeAccessToken(token: string): Promise<JwtProviderPayloadResponse>;
}
