import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { JwtConstants } from "../../../../../shared/core/constants/jwt.constants";
import { UnauthorizedError } from "../../../../../shared/errors/UnauthorizedError";
import { JwtProvider } from "../../../../../shared/providers/JwtProvider/interfaces/JwtProvider";

export const isAuthenticated = async (
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError(JwtConstants.JWT_BEARER_REQUIRED);
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    throw new UnauthorizedError(JwtConstants.JWT_BEARER_REQUIRED);
  }

  try {
    const jwtProvider: JwtProvider = container.resolve("JwtProvider");
    const decodedToken = await jwtProvider.decodeAccessToken(token);
    const { user_id } = decodedToken;

    req.user_id = user_id;

    return next();
  } catch (err) {
    throw new UnauthorizedError(JwtConstants.JWT_INVALID);
  }
};
