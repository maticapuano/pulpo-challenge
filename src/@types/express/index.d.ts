import { JwtProviderPayloadResponse } from "../../shared/providers/JwtProvider/interfaces/JwtProvider";

declare module "express" {
  interface Request {
    user_id?: string;
  }
}
