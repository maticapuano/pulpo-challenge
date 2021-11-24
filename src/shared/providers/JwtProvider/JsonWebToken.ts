import {
  JwtProvider,
  JwtProviderConfig,
  JwtProviderPayload,
  JwtProviderPayloadResponse,
} from "./interfaces/JwtProvider";
import { sign, verify } from "jsonwebtoken";

export class JsonWebTokenProvider implements JwtProvider {
  public constructor(private options: JwtProviderConfig) {}

  public async createAccessToken(payload: JwtProviderPayload): Promise<string> {
    const { accessTokenSecret, accessTokenExpiresIn } = this.options;
    const encodedPayload = await sign(payload, accessTokenSecret, {
      expiresIn: accessTokenExpiresIn,
    });

    return encodedPayload;
  }

  public async decodeAccessToken(token: string): Promise<JwtProviderPayloadResponse> {
    const { accessTokenSecret } = this.options;
    const verifiedPayload = await verify(token, accessTokenSecret);

    return verifiedPayload as JwtProviderPayloadResponse;
  }
}
